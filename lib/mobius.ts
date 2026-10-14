/**
 * Möbius strip line-art geometry.
 *
 * Parametrisation (u around the loop, v across the width):
 *   x = (R + v·cos(u/2))·cos u
 *   y = (R + v·cos(u/2))·sin u
 *   z =      v·sin(u/2)
 *
 * The strip is rotated in 3D and projected orthographically to 2D so it can be
 * drawn as thin SVG paths. Used by the hero (interactive) and the static mark.
 */

export type Vec3 = [number, number, number];
export type Rotation = { x: number; y: number; z: number };

export type MobiusLine = {
  d: string;
  /** Mean depth, -1 (far) … 1 (near). Useful for opacity. */
  depth: number;
  kind: "edge" | "ruling" | "center";
};

const R = 1;
const HALF_WIDTH = 0.38;

function point(u: number, v: number): Vec3 {
  const r = R + v * Math.cos(u / 2);
  return [r * Math.cos(u), r * Math.sin(u), v * Math.sin(u / 2)];
}

function rotate([x, y, z]: Vec3, rot: Rotation): Vec3 {
  // X axis
  let y1 = y * Math.cos(rot.x) - z * Math.sin(rot.x);
  let z1 = y * Math.sin(rot.x) + z * Math.cos(rot.x);
  let x1 = x;
  // Y axis
  const x2 = x1 * Math.cos(rot.y) + z1 * Math.sin(rot.y);
  const z2 = -x1 * Math.sin(rot.y) + z1 * Math.cos(rot.y);
  const y2 = y1;
  // Z axis
  const x3 = x2 * Math.cos(rot.z) - y2 * Math.sin(rot.z);
  const y3 = x2 * Math.sin(rot.z) + y2 * Math.cos(rot.z);
  return [x3, y3, z2];
}

function project(p: Vec3, size: number): [number, number, number] {
  const scale = size / 3.4;
  const cx = size / 2;
  const cy = size / 2;
  return [cx + p[0] * scale, cy - p[1] * scale, p[2]];
}

function toPath(points: [number, number, number][], close = false): string {
  const d = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");
  return close ? `${d} Z` : d;
}

export type MobiusOptions = {
  size?: number;
  rotation?: Rotation;
  rulings?: number;
  edgeSegments?: number;
  includeCenter?: boolean;
};

/** Hero pose: wide, open loop. */
export const DEFAULT_ROTATION: Rotation = { x: 1.05, y: -0.35, z: 0.2 };
/** Compact pose that reads clearly as a twisted loop at small sizes (wordmark, accents). */
export const MARK_ROTATION: Rotation = { x: 0.9, y: 0.6, z: 0.3 };

export function mobiusLines({
  size = 600,
  rotation = DEFAULT_ROTATION,
  rulings = 36,
  edgeSegments = 240,
  includeCenter = true,
}: MobiusOptions = {}): MobiusLine[] {
  const lines: MobiusLine[] = [];

  // The single boundary edge: v = +w, u in [0, 4π] traces both "sides".
  const edge: [number, number, number][] = [];
  for (let i = 0; i <= edgeSegments; i++) {
    const u = (i / edgeSegments) * Math.PI * 4;
    edge.push(project(rotate(point(u, HALF_WIDTH), rotation), size));
  }
  lines.push({ d: toPath(edge, true), depth: 0, kind: "edge" });

  if (includeCenter) {
    const center: [number, number, number][] = [];
    for (let i = 0; i <= edgeSegments / 2; i++) {
      const u = (i / (edgeSegments / 2)) * Math.PI * 2;
      center.push(project(rotate(point(u, 0), rotation), size));
    }
    lines.push({ d: toPath(center, true), depth: 0, kind: "center" });
  }

  for (let i = 0; i < rulings; i++) {
    const u = (i / rulings) * Math.PI * 2;
    const a = project(rotate(point(u, -HALF_WIDTH), rotation), size);
    const b = project(rotate(point(u, HALF_WIDTH), rotation), size);
    const depth = Math.max(-1, Math.min(1, (a[2] + b[2]) / 2 / (R + HALF_WIDTH)));
    lines.push({ d: toPath([a, b]), depth, kind: "ruling" });
  }

  return lines;
}
