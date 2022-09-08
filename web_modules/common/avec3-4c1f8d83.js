/** @module avec3 */

/**
 * Sets a vector components.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
function set3(a, i, x, y, z) {
  a[i * 3 + 0] = x;
  a[i * 3 + 1] = y;
  a[i * 3 + 2] = z;
}
/**
 * Sets a vector to another vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */

function set(a, i, b, j) {
  a[i * 3] = b[j * 3];
  a[i * 3 + 1] = b[j * 3 + 1];
  a[i * 3 + 2] = b[j * 3 + 2];
}
/**
 * Compares two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @returns {boolean}
 */

function equals(a, i, b, j) {
  return a[i * 3] === b[j * 3] && a[i * 3 + 1] === b[j * 3 + 1] && a[i * 3 + 2] === b[j * 3 + 2];
}
/**
 * Adds a vector to another.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */

function add(a, i, b, j) {
  a[i * 3] += b[j * 3];
  a[i * 3 + 1] += b[j * 3 + 1];
  a[i * 3 + 2] += b[j * 3 + 2];
}
/**
 * Subtracts a vector from another.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */

function sub(a, i, b, j) {
  a[i * 3] -= b[j * 3];
  a[i * 3 + 1] -= b[j * 3 + 1];
  a[i * 3 + 2] -= b[j * 3 + 2];
}
/**
 * Scales a vector by a number.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} s
 */

function scale(a, i, s) {
  a[i * 3] *= s;
  a[i * 3 + 1] *= s;
  a[i * 3 + 2] *= s;
}
/**
 * Adds two vectors after scaling the second one.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @param {number} s
 */

function addScaled(a, i, b, j, s) {
  a[i * 3] += b[j * 3] * s;
  a[i * 3 + 1] += b[j * 3 + 1] * s;
  a[i * 3 + 2] += b[j * 3 + 2] * s;
}
/**
 * Calculates the dot product of two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */

function dot(a, i, b, j) {
  return a[i * 3] * b[j * 3] + a[i * 3 + 1] * b[j * 3 + 1] + a[i * 3 + 2] * b[j * 3 + 2];
}
/**
 * Calculates the cross product of two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */

function cross(a, i, b, j) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  const vx = b[j * 3];
  const vy = b[j * 3 + 1];
  const vz = b[j * 3 + 2];
  a[i * 3] = y * vz - vy * z;
  a[i * 3 + 1] = z * vx - vz * x;
  a[i * 3 + 2] = x * vy - vx * y;
}
/**
 * Calculates the length of a vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @returns {number}
 */

function length(a, i) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared length of a vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @returns {number}
 */

function lengthSq(a, i) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  return x * x + y * y + z * z;
}
/**
 * Normalises a vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 */

function normalize(a, i) {
  const lenSq = a[i * 3] * a[i * 3] + a[i * 3 + 1] * a[i * 3 + 1] + a[i * 3 + 2] * a[i * 3 + 2];

  if (lenSq > 0) {
    const len = Math.sqrt(lenSq);
    a[i * 3] /= len;
    a[i * 3 + 1] /= len;
    a[i * 3 + 2] /= len;
  }
}
/**
 * Calculates the distance between two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @returns {number}
 */

function distance(a, i, b, j) {
  const dx = b[j * 3] - a[i * 3];
  const dy = b[j * 3 + 1] - a[i * 3 + 1];
  const dz = b[j * 3 + 2] - a[i * 3 + 2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
/**
 * Calculates the squared distance between two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @returns {number}
 */

function distanceSq(a, i, b, j) {
  const dx = b[j * 3] - a[i * 3];
  const dy = b[j * 3 + 1] - a[i * 3 + 1];
  const dz = b[j * 3 + 2] - a[i * 3 + 2];
  return dx * dx + dy * dy + dz * dz;
}
/**
 * Limits a vector to a length.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} len
 */

function limit(a, i, len) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  const dsq = x * x + y * y + z * z;
  const lsq = len * len;

  if (lsq > 0 && dsq > lsq) {
    const nd = len / Math.sqrt(dsq);
    a[i * 3] *= nd;
    a[i * 3 + 1] *= nd;
    a[i * 3 + 2] *= nd;
  }
}
/**
 * Linearly interpolates between two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @param {number} t
 */

function lerp(a, i, b, j, t) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  a[i * 3] = x + (b[j * 3] - x) * t;
  a[i * 3 + 1] = y + (b[j * 3 + 1] - y) * t;
  a[i * 3 + 2] = z + (b[j * 3 + 2] - z) * t;
}
/**
 * Prints a vector to a string.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} [precision=4]
 * @returns {string}
 */

function toString(a, i, precision = 4) {
  const scale = 10 ** precision; // prettier-ignore

  return `[${Math.floor(a[i * 3] * scale) / scale}, ${Math.floor(a[i * 3 + 1] * scale) / scale}, ${Math.floor(a[i * 3 + 2] * scale) / scale}]`;
}

var avec3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  set3: set3,
  set: set,
  equals: equals,
  add: add,
  sub: sub,
  scale: scale,
  addScaled: addScaled,
  dot: dot,
  cross: cross,
  length: length,
  lengthSq: lengthSq,
  normalize: normalize,
  distance: distance,
  distanceSq: distanceSq,
  limit: limit,
  lerp: lerp,
  toString: toString
});

export { avec3 as a, set3 as s };