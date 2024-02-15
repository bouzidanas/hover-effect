var ql = Object.defineProperty;
var Xl = (o, e, t) => e in o ? ql(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var lr = (o, e, t) => (Xl(o, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Qs = "149";
const Kt = "srgb", ji = "srgb-linear";
const Sa = "300 es";
class Di {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const ut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], es = Math.PI / 180, ba = 180 / Math.PI;
function ir() {
  const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ut[o & 255] + ut[o >> 8 & 255] + ut[o >> 16 & 255] + ut[o >> 24 & 255] + "-" + ut[e & 255] + ut[e >> 8 & 255] + "-" + ut[e >> 16 & 15 | 64] + ut[e >> 24 & 255] + "-" + ut[t & 63 | 128] + ut[t >> 8 & 255] + "-" + ut[t >> 16 & 255] + ut[t >> 24 & 255] + ut[n & 255] + ut[n >> 8 & 255] + ut[n >> 16 & 255] + ut[n >> 24 & 255]).toLowerCase();
}
function Dt(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function Yl(o, e) {
  return (o % e + e) % e;
}
function ts(o, e, t) {
  return (1 - t) * o + t * e;
}
function wa(o) {
  return (o & o - 1) === 0 && o !== 0;
}
function Ns(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}
function cr(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function At(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ue {
  constructor(e = 0, t = 0) {
    Ue.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ft {
  constructor() {
    Ft.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, a, s, c, l) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = s, u[3] = t, u[4] = r, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], s = n[3], c = n[6], l = n[1], u = n[4], f = n[7], d = n[2], m = n[5], g = n[8], h = i[0], p = i[3], _ = i[6], y = i[1], v = i[4], M = i[7], b = i[2], A = i[5], C = i[8];
    return r[0] = a * h + s * y + c * b, r[3] = a * p + s * v + c * A, r[6] = a * _ + s * M + c * C, r[1] = l * h + u * y + f * b, r[4] = l * p + u * v + f * A, r[7] = l * _ + u * M + f * C, r[2] = d * h + m * y + g * b, r[5] = d * p + m * v + g * A, r[8] = d * _ + m * M + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], s = e[5], c = e[6], l = e[7], u = e[8];
    return t * a * u - t * s * l - n * r * u + n * s * c + i * r * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], s = e[5], c = e[6], l = e[7], u = e[8], f = u * a - s * l, d = s * c - u * r, m = l * r - a * c, g = t * f + n * d + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const h = 1 / g;
    return e[0] = f * h, e[1] = (i * l - u * n) * h, e[2] = (s * n - i * a) * h, e[3] = d * h, e[4] = (u * t - i * c) * h, e[5] = (i * r - s * t) * h, e[6] = m * h, e[7] = (n * c - l * t) * h, e[8] = (a * t - n * r) * h, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, a, s) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * s) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * s) + s + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(ns.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ns.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ns.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ns = /* @__PURE__ */ new Ft();
function yo(o) {
  for (let e = o.length - 1; e >= 0; --e)
    if (o[e] >= 65535)
      return !0;
  return !1;
}
function Zi(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
function Yn(o) {
  return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function Dr(o) {
  return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const is = {
  [Kt]: { [ji]: Yn },
  [ji]: { [Kt]: Dr }
}, gt = {
  legacyMode: !0,
  get workingColorSpace() {
    return ji;
  },
  set workingColorSpace(o) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(o, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return o;
    if (is[e] && is[e][t] !== void 0) {
      const n = is[e][t];
      return o.r = n(o.r), o.g = n(o.g), o.b = n(o.b), o;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(o, e) {
    return this.convert(o, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(o, e) {
    return this.convert(o, e, this.workingColorSpace);
  }
}, So = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Ke = { r: 0, g: 0, b: 0 }, Yt = { h: 0, s: 0, l: 0 }, ur = { h: 0, s: 0, l: 0 };
function rs(o, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
}
function hr(o, e) {
  return e.r = o.r, e.g = o.g, e.b = o.b, e;
}
class Ve {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Kt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, gt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = gt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, gt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = gt.workingColorSpace) {
    if (e = Yl(e, 1), t = Dt(t, 0, 1), n = Dt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = rs(a, r, e + 1 / 3), this.g = rs(a, r, e), this.b = rs(a, r, e - 1 / 3);
    }
    return gt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Kt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], s = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, gt.toWorkingColorSpace(this, t), n(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, gt.toWorkingColorSpace(this, t), n(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
            const c = parseFloat(r[1]) / 360, l = parseFloat(r[2]) / 100, u = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(c, l, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, gt.toWorkingColorSpace(this, t), this;
      if (a === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, gt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Kt) {
    const n = So[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Yn(e.r), this.g = Yn(e.g), this.b = Yn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Dr(e.r), this.g = Dr(e.g), this.b = Dr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Kt) {
    return gt.fromWorkingColorSpace(hr(this, Ke), e), Dt(Ke.r * 255, 0, 255) << 16 ^ Dt(Ke.g * 255, 0, 255) << 8 ^ Dt(Ke.b * 255, 0, 255) << 0;
  }
  getHexString(e = Kt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = gt.workingColorSpace) {
    gt.fromWorkingColorSpace(hr(this, Ke), t);
    const n = Ke.r, i = Ke.g, r = Ke.b, a = Math.max(n, i, r), s = Math.min(n, i, r);
    let c, l;
    const u = (s + a) / 2;
    if (s === a)
      c = 0, l = 0;
    else {
      const f = a - s;
      switch (l = u <= 0.5 ? f / (a + s) : f / (2 - a - s), a) {
        case n:
          c = (i - r) / f + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / f + 2;
          break;
        case r:
          c = (n - i) / f + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  getRGB(e, t = gt.workingColorSpace) {
    return gt.fromWorkingColorSpace(hr(this, Ke), t), e.r = Ke.r, e.g = Ke.g, e.b = Ke.b, e;
  }
  getStyle(e = Kt) {
    return gt.fromWorkingColorSpace(hr(this, Ke), e), e !== Kt ? `color(${e} ${Ke.r} ${Ke.g} ${Ke.b})` : `rgb(${Ke.r * 255 | 0},${Ke.g * 255 | 0},${Ke.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Yt), Yt.h += e, Yt.s += t, Yt.l += n, this.setHSL(Yt.h, Yt.s, Yt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Yt), e.getHSL(ur);
    const n = ts(Yt.h, ur.h, t), i = ts(Yt.s, ur.s, t), r = ts(Yt.l, ur.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Ve.NAMES = So;
let ri;
class bo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ri === void 0 && (ri = Zi("canvas")), ri.width = e.width, ri.height = e.height;
      const n = ri.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ri;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Zi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = Yn(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Yn(t[n] / 255) * 255) : t[n] = Yn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class wo {
  constructor(e = null) {
    this.isSource = !0, this.uuid = ir(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, s = i.length; a < s; a++)
          i[a].isDataTexture ? r.push(ss(i[a].image)) : r.push(ss(i[a]));
      } else
        r = ss(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ss(o) {
  return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? bo.getDataURL(o) : o.data ? {
    data: Array.from(o.data),
    width: o.width,
    height: o.height,
    type: o.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let jl = 0;
class vt extends Di {
  constructor(e = vt.DEFAULT_IMAGE, t = vt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, s = 1023, c = 1009, l = vt.DEFAULT_ANISOTROPY, u = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: jl++ }), this.uuid = ir(), this.name = "", this.source = new wo(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new Ue(0, 0), this.repeat = new Ue(1, 1), this.center = new Ue(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ft(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
vt.DEFAULT_IMAGE = null;
vt.DEFAULT_MAPPING = 300;
vt.DEFAULT_ANISOTROPY = 1;
class Je {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Je.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements, l = c[0], u = c[4], f = c[8], d = c[1], m = c[5], g = c[9], h = c[2], p = c[6], _ = c[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(f - h) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(f + h) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (l + 1) / 2, M = (m + 1) / 2, b = (_ + 1) / 2, A = (u + d) / 4, C = (f + h) / 4, x = (g + p) / 4;
      return v > M && v > b ? v < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(v), i = A / n, r = C / n) : M > b ? M < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(M), n = A / i, r = x / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(b), n = C / r, i = x / r), this.set(n, i, r, t), this;
    }
    let y = Math.sqrt((p - g) * (p - g) + (f - h) * (f - h) + (d - u) * (d - u));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - g) / y, this.y = (f - h) / y, this.z = (d - u) / y, this.w = Math.acos((l + m + _ - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Qn extends Di {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Je(0, 0, e, t), this.scissorTest = !1, this.viewport = new Je(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new vt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new wo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class To extends vt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Zl extends vt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class rr {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, s) {
    let c = n[i + 0], l = n[i + 1], u = n[i + 2], f = n[i + 3];
    const d = r[a + 0], m = r[a + 1], g = r[a + 2], h = r[a + 3];
    if (s === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = f;
      return;
    }
    if (s === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = h;
      return;
    }
    if (f !== h || c !== d || l !== m || u !== g) {
      let p = 1 - s;
      const _ = c * d + l * m + u * g + f * h, y = _ >= 0 ? 1 : -1, v = 1 - _ * _;
      if (v > Number.EPSILON) {
        const b = Math.sqrt(v), A = Math.atan2(b, _ * y);
        p = Math.sin(p * A) / b, s = Math.sin(s * A) / b;
      }
      const M = s * y;
      if (c = c * p + d * M, l = l * p + m * M, u = u * p + g * M, f = f * p + h * M, p === 1 - s) {
        const b = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
        c *= b, l *= b, u *= b, f *= b;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const s = n[i], c = n[i + 1], l = n[i + 2], u = n[i + 3], f = r[a], d = r[a + 1], m = r[a + 2], g = r[a + 3];
    return e[t] = s * g + u * f + c * m - l * d, e[t + 1] = c * g + u * d + l * f - s * m, e[t + 2] = l * g + u * m + s * d - c * f, e[t + 3] = u * g - s * f - c * d - l * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, r = e._z, a = e._order, s = Math.cos, c = Math.sin, l = s(n / 2), u = s(i / 2), f = s(r / 2), d = c(n / 2), m = c(i / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * u * f + l * m * g, this._y = l * m * f - d * u * g, this._z = l * u * g + d * m * f, this._w = l * u * f - d * m * g;
        break;
      case "YXZ":
        this._x = d * u * f + l * m * g, this._y = l * m * f - d * u * g, this._z = l * u * g - d * m * f, this._w = l * u * f + d * m * g;
        break;
      case "ZXY":
        this._x = d * u * f - l * m * g, this._y = l * m * f + d * u * g, this._z = l * u * g + d * m * f, this._w = l * u * f - d * m * g;
        break;
      case "ZYX":
        this._x = d * u * f - l * m * g, this._y = l * m * f + d * u * g, this._z = l * u * g - d * m * f, this._w = l * u * f + d * m * g;
        break;
      case "YZX":
        this._x = d * u * f + l * m * g, this._y = l * m * f + d * u * g, this._z = l * u * g - d * m * f, this._w = l * u * f - d * m * g;
        break;
      case "XZY":
        this._x = d * u * f - l * m * g, this._y = l * m * f - d * u * g, this._z = l * u * g + d * m * f, this._w = l * u * f + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], s = t[5], c = t[9], l = t[2], u = t[6], f = t[10], d = n + s + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - c) * m, this._y = (r - l) * m, this._z = (a - i) * m;
    } else if (n > s && n > f) {
      const m = 2 * Math.sqrt(1 + n - s - f);
      this._w = (u - c) / m, this._x = 0.25 * m, this._y = (i + a) / m, this._z = (r + l) / m;
    } else if (s > f) {
      const m = 2 * Math.sqrt(1 + s - n - f);
      this._w = (r - l) / m, this._x = (i + a) / m, this._y = 0.25 * m, this._z = (c + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - s);
      this._w = (a - i) / m, this._x = (r + l) / m, this._y = (c + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Dt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, a = e._w, s = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + a * s + i * l - r * c, this._y = i * u + a * c + r * s - n * l, this._z = r * u + a * l + n * c - i * s, this._w = a * u - n * s - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let s = a * e._w + n * e._x + i * e._y + r * e._z;
    if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - s * s;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, s), f = Math.sin((1 - t) * u) / l, d = Math.sin(t * u) / l;
    return this._w = a * f + this._w * d, this._x = n * f + this._x * d, this._y = i * f + this._y * d, this._z = r * f + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class U {
  constructor(e = 0, t = 0, n = 0) {
    U.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ta.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ta.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, s = e.z, c = e.w, l = c * t + a * i - s * n, u = c * n + s * t - r * i, f = c * i + r * n - a * t, d = -r * t - a * n - s * i;
    return this.x = l * c + d * -r + u * -s - f * -a, this.y = u * c + d * -a + f * -r - l * -s, this.z = f * c + d * -s + l * -a - u * -r, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, a = t.x, s = t.y, c = t.z;
    return this.x = i * c - r * s, this.y = r * a - n * c, this.z = n * s - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return as.copy(this).projectOnVector(e), this.sub(as);
  }
  reflect(e) {
    return this.sub(as.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Dt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const as = /* @__PURE__ */ new U(), Ta = /* @__PURE__ */ new rr();
class sr {
  constructor(e = new U(1 / 0, 1 / 0, 1 / 0), t = new U(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const u = e[c], f = e[c + 1], d = e[c + 2];
      u < t && (t = u), f < n && (n = f), d < i && (i = d), u > r && (r = u), f > a && (a = f), d > s && (s = d);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const u = e.getX(c), f = e.getY(c), d = e.getZ(c);
      u < t && (t = u), f < n && (n = f), d < i && (i = d), u > r && (r = u), f > a && (a = f), d > s && (s = d);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Un.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let a = 0, s = r.count; a < s; a++)
          Un.fromBufferAttribute(r, a).applyMatrix4(e.matrixWorld), this.expandByPoint(Un);
      } else
        n.boundingBox === null && n.computeBoundingBox(), os.copy(n.boundingBox), os.applyMatrix4(e.matrixWorld), this.union(os);
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Un), Un.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ii), fr.subVectors(this.max, Ii), si.subVectors(e.a, Ii), ai.subVectors(e.b, Ii), oi.subVectors(e.c, Ii), Mn.subVectors(ai, si), yn.subVectors(oi, ai), Bn.subVectors(si, oi);
    let t = [
      0,
      -Mn.z,
      Mn.y,
      0,
      -yn.z,
      yn.y,
      0,
      -Bn.z,
      Bn.y,
      Mn.z,
      0,
      -Mn.x,
      yn.z,
      0,
      -yn.x,
      Bn.z,
      0,
      -Bn.x,
      -Mn.y,
      Mn.x,
      0,
      -yn.y,
      yn.x,
      0,
      -Bn.y,
      Bn.x,
      0
    ];
    return !ls(t, si, ai, oi, fr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ls(t, si, ai, oi, fr)) ? !1 : (dr.crossVectors(Mn, yn), t = [dr.x, dr.y, dr.z], ls(t, si, ai, oi, fr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Un.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(Un).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(cn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const cn = [
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U()
], Un = /* @__PURE__ */ new U(), os = /* @__PURE__ */ new sr(), si = /* @__PURE__ */ new U(), ai = /* @__PURE__ */ new U(), oi = /* @__PURE__ */ new U(), Mn = /* @__PURE__ */ new U(), yn = /* @__PURE__ */ new U(), Bn = /* @__PURE__ */ new U(), Ii = /* @__PURE__ */ new U(), fr = /* @__PURE__ */ new U(), dr = /* @__PURE__ */ new U(), zn = /* @__PURE__ */ new U();
function ls(o, e, t, n, i) {
  for (let r = 0, a = o.length - 3; r <= a; r += 3) {
    zn.fromArray(o, r);
    const s = i.x * Math.abs(zn.x) + i.y * Math.abs(zn.y) + i.z * Math.abs(zn.z), c = e.dot(zn), l = t.dot(zn), u = n.dot(zn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s)
      return !1;
  }
  return !0;
}
const $l = /* @__PURE__ */ new sr(), Ni = /* @__PURE__ */ new U(), cs = /* @__PURE__ */ new U();
class ea {
  constructor(e = new U(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : $l.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ni.subVectors(e, this.center);
    const t = Ni.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ni, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (cs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ni.copy(e.center).add(cs)), this.expandByPoint(Ni.copy(e.center).sub(cs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const un = /* @__PURE__ */ new U(), us = /* @__PURE__ */ new U(), pr = /* @__PURE__ */ new U(), Sn = /* @__PURE__ */ new U(), hs = /* @__PURE__ */ new U(), mr = /* @__PURE__ */ new U(), fs = /* @__PURE__ */ new U();
class Kl {
  constructor(e = new U(), t = new U(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, un)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = un.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (un.copy(this.direction).multiplyScalar(t).add(this.origin), un.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    us.copy(e).add(t).multiplyScalar(0.5), pr.copy(t).sub(e).normalize(), Sn.copy(this.origin).sub(us);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(pr), s = Sn.dot(this.direction), c = -Sn.dot(pr), l = Sn.lengthSq(), u = Math.abs(1 - a * a);
    let f, d, m, g;
    if (u > 0)
      if (f = a * c - s, d = a * s - c, g = r * u, f >= 0)
        if (d >= -g)
          if (d <= g) {
            const h = 1 / u;
            f *= h, d *= h, m = f * (f + a * d + 2 * s) + d * (a * f + d + 2 * c) + l;
          } else
            d = r, f = Math.max(0, -(a * d + s)), m = -f * f + d * (d + 2 * c) + l;
        else
          d = -r, f = Math.max(0, -(a * d + s)), m = -f * f + d * (d + 2 * c) + l;
      else
        d <= -g ? (f = Math.max(0, -(-a * r + s)), d = f > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -f * f + d * (d + 2 * c) + l) : d <= g ? (f = 0, d = Math.min(Math.max(-r, -c), r), m = d * (d + 2 * c) + l) : (f = Math.max(0, -(a * r + s)), d = f > 0 ? r : Math.min(Math.max(-r, -c), r), m = -f * f + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -r : r, f = Math.max(0, -(a * d + s)), m = -f * f + d * (d + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(f).add(this.origin), i && i.copy(pr).multiplyScalar(d).add(us), m;
  }
  intersectSphere(e, t) {
    un.subVectors(e.center, this.origin);
    const n = un.dot(this.direction), i = un.dot(un) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const a = Math.sqrt(r - i), s = n - a, c = n + a;
    return s < 0 && c < 0 ? null : s < 0 ? this.at(c, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, s, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), u >= 0 ? (r = (e.min.y - d.y) * u, a = (e.max.y - d.y) * u) : (r = (e.max.y - d.y) * u, a = (e.min.y - d.y) * u), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), f >= 0 ? (s = (e.min.z - d.z) * f, c = (e.max.z - d.z) * f) : (s = (e.max.z - d.z) * f, c = (e.min.z - d.z) * f), n > c || s > i) || ((s > n || n !== n) && (n = s), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, un) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    hs.subVectors(t, e), mr.subVectors(n, e), fs.crossVectors(hs, mr);
    let a = this.direction.dot(fs), s;
    if (a > 0) {
      if (i)
        return null;
      s = 1;
    } else if (a < 0)
      s = -1, a = -a;
    else
      return null;
    Sn.subVectors(this.origin, e);
    const c = s * this.direction.dot(mr.crossVectors(Sn, mr));
    if (c < 0)
      return null;
    const l = s * this.direction.dot(hs.cross(Sn));
    if (l < 0 || c + l > a)
      return null;
    const u = -s * Sn.dot(fs);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ot {
  constructor() {
    ot.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, a, s, c, l, u, f, d, m, g, h, p) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = r, _[5] = a, _[9] = s, _[13] = c, _[2] = l, _[6] = u, _[10] = f, _[14] = d, _[3] = m, _[7] = g, _[11] = h, _[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ot().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / li.setFromMatrixColumn(e, 0).length(), r = 1 / li.setFromMatrixColumn(e, 1).length(), a = 1 / li.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), s = Math.sin(n), c = Math.cos(i), l = Math.sin(i), u = Math.cos(r), f = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * u, m = a * f, g = s * u, h = s * f;
      t[0] = c * u, t[4] = -c * f, t[8] = l, t[1] = m + g * l, t[5] = d - h * l, t[9] = -s * c, t[2] = h - d * l, t[6] = g + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * u, m = c * f, g = l * u, h = l * f;
      t[0] = d + h * s, t[4] = g * s - m, t[8] = a * l, t[1] = a * f, t[5] = a * u, t[9] = -s, t[2] = m * s - g, t[6] = h + d * s, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * u, m = c * f, g = l * u, h = l * f;
      t[0] = d - h * s, t[4] = -a * f, t[8] = g + m * s, t[1] = m + g * s, t[5] = a * u, t[9] = h - d * s, t[2] = -a * l, t[6] = s, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * u, m = a * f, g = s * u, h = s * f;
      t[0] = c * u, t[4] = g * l - m, t[8] = d * l + h, t[1] = c * f, t[5] = h * l + d, t[9] = m * l - g, t[2] = -l, t[6] = s * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, m = a * l, g = s * c, h = s * l;
      t[0] = c * u, t[4] = h - d * f, t[8] = g * f + m, t[1] = f, t[5] = a * u, t[9] = -s * u, t[2] = -l * u, t[6] = m * f + g, t[10] = d - h * f;
    } else if (e.order === "XZY") {
      const d = a * c, m = a * l, g = s * c, h = s * l;
      t[0] = c * u, t[4] = -f, t[8] = l * u, t[1] = d * f + h, t[5] = a * u, t[9] = m * f - g, t[2] = g * f - m, t[6] = s * u, t[10] = h * f + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Jl, e, Ql);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), bn.crossVectors(n, Ct), bn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), bn.crossVectors(n, Ct)), bn.normalize(), gr.crossVectors(Ct, bn), i[0] = bn.x, i[4] = gr.x, i[8] = Ct.x, i[1] = bn.y, i[5] = gr.y, i[9] = Ct.y, i[2] = bn.z, i[6] = gr.z, i[10] = Ct.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], s = n[4], c = n[8], l = n[12], u = n[1], f = n[5], d = n[9], m = n[13], g = n[2], h = n[6], p = n[10], _ = n[14], y = n[3], v = n[7], M = n[11], b = n[15], A = i[0], C = i[4], x = i[8], S = i[12], R = i[1], G = i[5], z = i[9], P = i[13], D = i[2], B = i[6], q = i[10], Z = i[14], k = i[3], K = i[7], $ = i[11], le = i[15];
    return r[0] = a * A + s * R + c * D + l * k, r[4] = a * C + s * G + c * B + l * K, r[8] = a * x + s * z + c * q + l * $, r[12] = a * S + s * P + c * Z + l * le, r[1] = u * A + f * R + d * D + m * k, r[5] = u * C + f * G + d * B + m * K, r[9] = u * x + f * z + d * q + m * $, r[13] = u * S + f * P + d * Z + m * le, r[2] = g * A + h * R + p * D + _ * k, r[6] = g * C + h * G + p * B + _ * K, r[10] = g * x + h * z + p * q + _ * $, r[14] = g * S + h * P + p * Z + _ * le, r[3] = y * A + v * R + M * D + b * k, r[7] = y * C + v * G + M * B + b * K, r[11] = y * x + v * z + M * q + b * $, r[15] = y * S + v * P + M * Z + b * le, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], s = e[5], c = e[9], l = e[13], u = e[2], f = e[6], d = e[10], m = e[14], g = e[3], h = e[7], p = e[11], _ = e[15];
    return g * (+r * c * f - i * l * f - r * s * d + n * l * d + i * s * m - n * c * m) + h * (+t * c * m - t * l * d + r * a * d - i * a * m + i * l * u - r * c * u) + p * (+t * l * f - t * s * m - r * a * f + n * a * m + r * s * u - n * l * u) + _ * (-i * s * u - t * c * f + t * s * d + i * a * f - n * a * d + n * c * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], s = e[5], c = e[6], l = e[7], u = e[8], f = e[9], d = e[10], m = e[11], g = e[12], h = e[13], p = e[14], _ = e[15], y = f * p * l - h * d * l + h * c * m - s * p * m - f * c * _ + s * d * _, v = g * d * l - u * p * l - g * c * m + a * p * m + u * c * _ - a * d * _, M = u * h * l - g * f * l + g * s * m - a * h * m - u * s * _ + a * f * _, b = g * f * c - u * h * c - g * s * d + a * h * d + u * s * p - a * f * p, A = t * y + n * v + i * M + r * b;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / A;
    return e[0] = y * C, e[1] = (h * d * r - f * p * r - h * i * m + n * p * m + f * i * _ - n * d * _) * C, e[2] = (s * p * r - h * c * r + h * i * l - n * p * l - s * i * _ + n * c * _) * C, e[3] = (f * c * r - s * d * r - f * i * l + n * d * l + s * i * m - n * c * m) * C, e[4] = v * C, e[5] = (u * p * r - g * d * r + g * i * m - t * p * m - u * i * _ + t * d * _) * C, e[6] = (g * c * r - a * p * r - g * i * l + t * p * l + a * i * _ - t * c * _) * C, e[7] = (a * d * r - u * c * r + u * i * l - t * d * l - a * i * m + t * c * m) * C, e[8] = M * C, e[9] = (g * f * r - u * h * r - g * n * m + t * h * m + u * n * _ - t * f * _) * C, e[10] = (a * h * r - g * s * r + g * n * l - t * h * l - a * n * _ + t * s * _) * C, e[11] = (u * s * r - a * f * r - u * n * l + t * f * l + a * n * m - t * s * m) * C, e[12] = b * C, e[13] = (u * h * i - g * f * i + g * n * d - t * h * d - u * n * p + t * f * p) * C, e[14] = (g * s * i - a * h * i - g * n * c + t * h * c + a * n * p - t * s * p) * C, e[15] = (a * f * i - u * s * i + u * n * c - t * f * c - a * n * d + t * s * d) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, s = e.y, c = e.z, l = r * a, u = r * s;
    return this.set(
      l * a + n,
      l * s - i * c,
      l * c + i * s,
      0,
      l * s + i * c,
      u * s + n,
      u * c - i * a,
      0,
      l * c - i * s,
      u * c + i * a,
      r * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, s = t._z, c = t._w, l = r + r, u = a + a, f = s + s, d = r * l, m = r * u, g = r * f, h = a * u, p = a * f, _ = s * f, y = c * l, v = c * u, M = c * f, b = n.x, A = n.y, C = n.z;
    return i[0] = (1 - (h + _)) * b, i[1] = (m + M) * b, i[2] = (g - v) * b, i[3] = 0, i[4] = (m - M) * A, i[5] = (1 - (d + _)) * A, i[6] = (p + y) * A, i[7] = 0, i[8] = (g + v) * C, i[9] = (p - y) * C, i[10] = (1 - (d + h)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = li.set(i[0], i[1], i[2]).length();
    const a = li.set(i[4], i[5], i[6]).length(), s = li.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], jt.copy(this);
    const l = 1 / r, u = 1 / a, f = 1 / s;
    return jt.elements[0] *= l, jt.elements[1] *= l, jt.elements[2] *= l, jt.elements[4] *= u, jt.elements[5] *= u, jt.elements[6] *= u, jt.elements[8] *= f, jt.elements[9] *= f, jt.elements[10] *= f, t.setFromRotationMatrix(jt), n.x = r, n.y = a, n.z = s, this;
  }
  makePerspective(e, t, n, i, r, a) {
    const s = this.elements, c = 2 * r / (t - e), l = 2 * r / (n - i), u = (t + e) / (t - e), f = (n + i) / (n - i), d = -(a + r) / (a - r), m = -2 * a * r / (a - r);
    return s[0] = c, s[4] = 0, s[8] = u, s[12] = 0, s[1] = 0, s[5] = l, s[9] = f, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = d, s[14] = m, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a) {
    const s = this.elements, c = 1 / (t - e), l = 1 / (n - i), u = 1 / (a - r), f = (t + e) * c, d = (n + i) * l, m = (a + r) * u;
    return s[0] = 2 * c, s[4] = 0, s[8] = 0, s[12] = -f, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -d, s[2] = 0, s[6] = 0, s[10] = -2 * u, s[14] = -m, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const li = /* @__PURE__ */ new U(), jt = /* @__PURE__ */ new ot(), Jl = /* @__PURE__ */ new U(0, 0, 0), Ql = /* @__PURE__ */ new U(1, 1, 1), bn = /* @__PURE__ */ new U(), gr = /* @__PURE__ */ new U(), Ct = /* @__PURE__ */ new U(), Ea = /* @__PURE__ */ new ot(), Aa = /* @__PURE__ */ new rr();
class Wr {
  constructor(e = 0, t = 0, n = 0, i = Wr.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], a = i[4], s = i[8], c = i[1], l = i[5], u = i[9], f = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Dt(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Dt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(s, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-f, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Dt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Dt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Dt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-f, r)) : (this._x = 0, this._y = Math.atan2(s, m));
        break;
      case "XZY":
        this._z = Math.asin(-Dt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ea.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ea, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Aa.setFromEuler(this), this.setFromQuaternion(Aa, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Wr.DEFAULT_ORDER = "XYZ";
class Eo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ec = 0;
const Ca = /* @__PURE__ */ new U(), ci = /* @__PURE__ */ new rr(), hn = /* @__PURE__ */ new ot(), _r = /* @__PURE__ */ new U(), Oi = /* @__PURE__ */ new U(), tc = /* @__PURE__ */ new U(), nc = /* @__PURE__ */ new rr(), Ra = /* @__PURE__ */ new U(1, 0, 0), La = /* @__PURE__ */ new U(0, 1, 0), Da = /* @__PURE__ */ new U(0, 0, 1), ic = { type: "added" }, Pa = { type: "removed" };
class Nt extends Di {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ec++ }), this.uuid = ir(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Nt.DEFAULT_UP.clone();
    const e = new U(), t = new Wr(), n = new rr(), i = new U(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ot()
      },
      normalMatrix: {
        value: new Ft()
      }
    }), this.matrix = new ot(), this.matrixWorld = new ot(), this.matrixAutoUpdate = Nt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Eo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ci.setFromAxisAngle(e, t), this.quaternion.multiply(ci), this;
  }
  rotateOnWorldAxis(e, t) {
    return ci.setFromAxisAngle(e, t), this.quaternion.premultiply(ci), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ra, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(La, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Da, e);
  }
  translateOnAxis(e, t) {
    return Ca.copy(e).applyQuaternion(this.quaternion), this.position.add(Ca.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ra, e);
  }
  translateY(e) {
    return this.translateOnAxis(La, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Da, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(hn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? _r.copy(e) : _r.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Oi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? hn.lookAt(Oi, _r, this.up) : hn.lookAt(_r, Oi, this.up), this.quaternion.setFromRotationMatrix(hn), i && (hn.extractRotation(i.matrixWorld), ci.setFromRotationMatrix(hn), this.quaternion.premultiply(ci.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ic)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Pa)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Pa);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), hn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), hn.multiply(e.parent.matrixWorld)), e.applyMatrix4(hn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Oi, e, tc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Oi, nc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) {
        const s = i[r];
        s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function r(s, c) {
      return s[c.uuid] === void 0 && (s[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const c = s.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const f = c[l];
            r(e.shapes, f);
          }
        else
          r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const s = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          s.push(r(e.materials, this.material[c]));
        i.material = s;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let s = 0; s < this.children.length; s++)
        i.children.push(this.children[s].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const c = this.animations[s];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const s = a(e.geometries), c = a(e.materials), l = a(e.textures), u = a(e.images), f = a(e.shapes), d = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      s.length > 0 && (n.geometries = s), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(s) {
      const c = [];
      for (const l in s) {
        const u = s[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Nt.DEFAULT_UP = /* @__PURE__ */ new U(0, 1, 0);
Nt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Zt = /* @__PURE__ */ new U(), fn = /* @__PURE__ */ new U(), ds = /* @__PURE__ */ new U(), dn = /* @__PURE__ */ new U(), ui = /* @__PURE__ */ new U(), hi = /* @__PURE__ */ new U(), Fa = /* @__PURE__ */ new U(), ps = /* @__PURE__ */ new U(), ms = /* @__PURE__ */ new U(), gs = /* @__PURE__ */ new U();
class gn {
  constructor(e = new U(), t = new U(), n = new U()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Zt.subVectors(e, t), i.cross(Zt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    Zt.subVectors(i, t), fn.subVectors(n, t), ds.subVectors(e, t);
    const a = Zt.dot(Zt), s = Zt.dot(fn), c = Zt.dot(ds), l = fn.dot(fn), u = fn.dot(ds), f = a * l - s * s;
    if (f === 0)
      return r.set(-2, -1, -1);
    const d = 1 / f, m = (l * c - s * u) * d, g = (a * u - s * c) * d;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, dn), dn.x >= 0 && dn.y >= 0 && dn.x + dn.y <= 1;
  }
  static getUV(e, t, n, i, r, a, s, c) {
    return this.getBarycoord(e, t, n, i, dn), c.set(0, 0), c.addScaledVector(r, dn.x), c.addScaledVector(a, dn.y), c.addScaledVector(s, dn.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Zt.subVectors(n, t), fn.subVectors(e, t), Zt.cross(fn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Zt.subVectors(this.c, this.b), fn.subVectors(this.a, this.b), Zt.cross(fn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return gn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return gn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return gn.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return gn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return gn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, s;
    ui.subVectors(i, n), hi.subVectors(r, n), ps.subVectors(e, n);
    const c = ui.dot(ps), l = hi.dot(ps);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    ms.subVectors(e, i);
    const u = ui.dot(ms), f = hi.dot(ms);
    if (u >= 0 && f <= u)
      return t.copy(i);
    const d = c * f - u * l;
    if (d <= 0 && c >= 0 && u <= 0)
      return a = c / (c - u), t.copy(n).addScaledVector(ui, a);
    gs.subVectors(e, r);
    const m = ui.dot(gs), g = hi.dot(gs);
    if (g >= 0 && m <= g)
      return t.copy(r);
    const h = m * l - c * g;
    if (h <= 0 && l >= 0 && g <= 0)
      return s = l / (l - g), t.copy(n).addScaledVector(hi, s);
    const p = u * g - m * f;
    if (p <= 0 && f - u >= 0 && m - g >= 0)
      return Fa.subVectors(r, i), s = (f - u) / (f - u + (m - g)), t.copy(i).addScaledVector(Fa, s);
    const _ = 1 / (p + h + d);
    return a = h * _, s = d * _, t.copy(n).addScaledVector(ui, a).addScaledVector(hi, s);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let rc = 0;
class Hr extends Di {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: rc++ }), this.uuid = ir(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const s in r) {
        const c = r[s];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Ao extends Hr {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const je = /* @__PURE__ */ new U(), xr = /* @__PURE__ */ new Ue();
class nn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        xr.fromBufferAttribute(this, t), xr.applyMatrix3(e), this.setXY(t, xr.x, xr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        je.fromBufferAttribute(this, t), je.applyMatrix3(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      je.fromBufferAttribute(this, t), je.applyMatrix4(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      je.fromBufferAttribute(this, t), je.applyNormalMatrix(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      je.fromBufferAttribute(this, t), je.transformDirection(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = cr(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = cr(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = cr(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = cr(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = At(t, this.array), n = At(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = At(t, this.array), n = At(n, this.array), i = At(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = At(t, this.array), n = At(n, this.array), i = At(i, this.array), r = At(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  // @deprecated
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Co extends nn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ro extends nn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class jn extends nn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let sc = 0;
const kt = /* @__PURE__ */ new ot(), _s = /* @__PURE__ */ new Nt(), fi = /* @__PURE__ */ new U(), Rt = /* @__PURE__ */ new sr(), Ui = /* @__PURE__ */ new sr(), rt = /* @__PURE__ */ new U();
class ni extends Di {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: sc++ }), this.uuid = ir(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (yo(e) ? Ro : Co)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ft().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return kt.makeRotationFromQuaternion(e), this.applyMatrix4(kt), this;
  }
  rotateX(e) {
    return kt.makeRotationX(e), this.applyMatrix4(kt), this;
  }
  rotateY(e) {
    return kt.makeRotationY(e), this.applyMatrix4(kt), this;
  }
  rotateZ(e) {
    return kt.makeRotationZ(e), this.applyMatrix4(kt), this;
  }
  translate(e, t, n) {
    return kt.makeTranslation(e, t, n), this.applyMatrix4(kt), this;
  }
  scale(e, t, n) {
    return kt.makeScale(e, t, n), this.applyMatrix4(kt), this;
  }
  lookAt(e) {
    return _s.lookAt(e), _s.updateMatrix(), this.applyMatrix4(_s.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(fi).negate(), this.translate(fi.x, fi.y, fi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new jn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new sr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new U(-1 / 0, -1 / 0, -1 / 0),
        new U(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Rt.setFromBufferAttribute(r), this.morphTargetsRelative ? (rt.addVectors(this.boundingBox.min, Rt.min), this.boundingBox.expandByPoint(rt), rt.addVectors(this.boundingBox.max, Rt.max), this.boundingBox.expandByPoint(rt)) : (this.boundingBox.expandByPoint(Rt.min), this.boundingBox.expandByPoint(Rt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ea());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Rt.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const s = t[r];
          Ui.setFromBufferAttribute(s), this.morphTargetsRelative ? (rt.addVectors(Rt.min, Ui.min), Rt.expandByPoint(rt), rt.addVectors(Rt.max, Ui.max), Rt.expandByPoint(rt)) : (Rt.expandByPoint(Ui.min), Rt.expandByPoint(Ui.max));
        }
      Rt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        rt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(rt));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const s = t[r], c = this.morphTargetsRelative;
          for (let l = 0, u = s.count; l < u; l++)
            rt.fromBufferAttribute(s, l), c && (fi.fromBufferAttribute(e, l), rt.add(fi)), i = Math.max(i, n.distanceToSquared(rt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, r = t.normal.array, a = t.uv.array, s = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new nn(new Float32Array(4 * s), 4));
    const c = this.getAttribute("tangent").array, l = [], u = [];
    for (let R = 0; R < s; R++)
      l[R] = new U(), u[R] = new U();
    const f = new U(), d = new U(), m = new U(), g = new Ue(), h = new Ue(), p = new Ue(), _ = new U(), y = new U();
    function v(R, G, z) {
      f.fromArray(i, R * 3), d.fromArray(i, G * 3), m.fromArray(i, z * 3), g.fromArray(a, R * 2), h.fromArray(a, G * 2), p.fromArray(a, z * 2), d.sub(f), m.sub(f), h.sub(g), p.sub(g);
      const P = 1 / (h.x * p.y - p.x * h.y);
      isFinite(P) && (_.copy(d).multiplyScalar(p.y).addScaledVector(m, -h.y).multiplyScalar(P), y.copy(m).multiplyScalar(h.x).addScaledVector(d, -p.x).multiplyScalar(P), l[R].add(_), l[G].add(_), l[z].add(_), u[R].add(y), u[G].add(y), u[z].add(y));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: n.length
    }]);
    for (let R = 0, G = M.length; R < G; ++R) {
      const z = M[R], P = z.start, D = z.count;
      for (let B = P, q = P + D; B < q; B += 3)
        v(
          n[B + 0],
          n[B + 1],
          n[B + 2]
        );
    }
    const b = new U(), A = new U(), C = new U(), x = new U();
    function S(R) {
      C.fromArray(r, R * 3), x.copy(C);
      const G = l[R];
      b.copy(G), b.sub(C.multiplyScalar(C.dot(G))).normalize(), A.crossVectors(x, G);
      const P = A.dot(u[R]) < 0 ? -1 : 1;
      c[R * 4] = b.x, c[R * 4 + 1] = b.y, c[R * 4 + 2] = b.z, c[R * 4 + 3] = P;
    }
    for (let R = 0, G = M.length; R < G; ++R) {
      const z = M[R], P = z.start, D = z.count;
      for (let B = P, q = P + D; B < q; B += 3)
        S(n[B + 0]), S(n[B + 1]), S(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new nn(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new U(), r = new U(), a = new U(), s = new U(), c = new U(), l = new U(), u = new U(), f = new U();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), h = e.getX(d + 1), p = e.getX(d + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, h), a.fromBufferAttribute(t, p), u.subVectors(a, r), f.subVectors(i, r), u.cross(f), s.fromBufferAttribute(n, g), c.fromBufferAttribute(n, h), l.fromBufferAttribute(n, p), s.add(u), c.add(u), l.add(u), n.setXYZ(g, s.x, s.y, s.z), n.setXYZ(h, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), u.subVectors(a, r), f.subVectors(i, r), u.cross(f), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      rt.fromBufferAttribute(e, t), rt.normalize(), e.setXYZ(t, rt.x, rt.y, rt.z);
  }
  toNonIndexed() {
    function e(s, c) {
      const l = s.array, u = s.itemSize, f = s.normalized, d = new l.constructor(c.length * u);
      let m = 0, g = 0;
      for (let h = 0, p = c.length; h < p; h++) {
        s.isInterleavedBufferAttribute ? m = c[h] * s.data.stride + s.offset : m = c[h] * u;
        for (let _ = 0; _ < u; _++)
          d[g++] = l[m++];
      }
      return new nn(d, u, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new ni(), n = this.index.array, i = this.attributes;
    for (const s in i) {
      const c = i[s], l = e(c, n);
      t.setAttribute(s, l);
    }
    const r = this.morphAttributes;
    for (const s in r) {
      const c = [], l = r[s];
      for (let u = 0, f = l.length; u < f; u++) {
        const d = l[u], m = e(d, n);
        c.push(m);
      }
      t.morphAttributes[s] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let s = 0, c = a.length; s < c; s++) {
      const l = a[s];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let f = 0, d = l.length; f < d; f++) {
        const m = l[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[c] = u, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return s !== null && (e.data.boundingSphere = {
      center: s.center.toArray(),
      radius: s.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [], f = r[l];
      for (let d = 0, m = f.length; d < m; d++)
        u.push(f[d].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const f = a[l];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const s = e.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ia = /* @__PURE__ */ new ot(), di = /* @__PURE__ */ new Kl(), xs = /* @__PURE__ */ new ea(), Bi = /* @__PURE__ */ new U(), zi = /* @__PURE__ */ new U(), Gi = /* @__PURE__ */ new U(), vs = /* @__PURE__ */ new U(), vr = /* @__PURE__ */ new U(), Mr = /* @__PURE__ */ new Ue(), yr = /* @__PURE__ */ new Ue(), Sr = /* @__PURE__ */ new Ue(), Ms = /* @__PURE__ */ new U(), br = /* @__PURE__ */ new U();
class _n extends Nt {
  constructor(e = new ni(), t = new Ao()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const s = this.morphTargetInfluences;
    if (r && s) {
      vr.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = s[c], f = r[c];
        u !== 0 && (vs.fromBufferAttribute(f, e), a ? vr.addScaledVector(vs, u) : vr.addScaledVector(vs.sub(t), u));
      }
      t.add(vr);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), xs.copy(n.boundingSphere), xs.applyMatrix4(r), e.ray.intersectsSphere(xs) === !1) || (Ia.copy(r).invert(), di.copy(e.ray).applyMatrix4(Ia), n.boundingBox !== null && di.intersectsBox(n.boundingBox) === !1))
      return;
    let a;
    const s = n.index, c = n.attributes.position, l = n.attributes.uv, u = n.attributes.uv2, f = n.groups, d = n.drawRange;
    if (s !== null)
      if (Array.isArray(i))
        for (let m = 0, g = f.length; m < g; m++) {
          const h = f[m], p = i[h.materialIndex], _ = Math.max(h.start, d.start), y = Math.min(s.count, Math.min(h.start + h.count, d.start + d.count));
          for (let v = _, M = y; v < M; v += 3) {
            const b = s.getX(v), A = s.getX(v + 1), C = s.getX(v + 2);
            a = wr(this, p, e, di, l, u, b, A, C), a && (a.faceIndex = Math.floor(v / 3), a.face.materialIndex = h.materialIndex, t.push(a));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(s.count, d.start + d.count);
        for (let h = m, p = g; h < p; h += 3) {
          const _ = s.getX(h), y = s.getX(h + 1), v = s.getX(h + 2);
          a = wr(this, i, e, di, l, u, _, y, v), a && (a.faceIndex = Math.floor(h / 3), t.push(a));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = f.length; m < g; m++) {
          const h = f[m], p = i[h.materialIndex], _ = Math.max(h.start, d.start), y = Math.min(c.count, Math.min(h.start + h.count, d.start + d.count));
          for (let v = _, M = y; v < M; v += 3) {
            const b = v, A = v + 1, C = v + 2;
            a = wr(this, p, e, di, l, u, b, A, C), a && (a.faceIndex = Math.floor(v / 3), a.face.materialIndex = h.materialIndex, t.push(a));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(c.count, d.start + d.count);
        for (let h = m, p = g; h < p; h += 3) {
          const _ = h, y = h + 1, v = h + 2;
          a = wr(this, i, e, di, l, u, _, y, v), a && (a.faceIndex = Math.floor(h / 3), t.push(a));
        }
      }
  }
}
function ac(o, e, t, n, i, r, a, s) {
  let c;
  if (e.side === 1 ? c = n.intersectTriangle(a, r, i, !0, s) : c = n.intersectTriangle(i, r, a, e.side === 0, s), c === null)
    return null;
  br.copy(s), br.applyMatrix4(o.matrixWorld);
  const l = t.ray.origin.distanceTo(br);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: br.clone(),
    object: o
  };
}
function wr(o, e, t, n, i, r, a, s, c) {
  o.getVertexPosition(a, Bi), o.getVertexPosition(s, zi), o.getVertexPosition(c, Gi);
  const l = ac(o, e, t, n, Bi, zi, Gi, Ms);
  if (l) {
    i && (Mr.fromBufferAttribute(i, a), yr.fromBufferAttribute(i, s), Sr.fromBufferAttribute(i, c), l.uv = gn.getUV(Ms, Bi, zi, Gi, Mr, yr, Sr, new Ue())), r && (Mr.fromBufferAttribute(r, a), yr.fromBufferAttribute(r, s), Sr.fromBufferAttribute(r, c), l.uv2 = gn.getUV(Ms, Bi, zi, Gi, Mr, yr, Sr, new Ue()));
    const u = {
      a,
      b: s,
      c,
      normal: new U(),
      materialIndex: 0
    };
    gn.getNormal(Bi, zi, Gi, u.normal), l.face = u;
  }
  return l;
}
class ar extends ni {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const s = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], u = [], f = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new jn(l, 3)), this.setAttribute("normal", new jn(u, 3)), this.setAttribute("uv", new jn(f, 2));
    function g(h, p, _, y, v, M, b, A, C, x, S) {
      const R = M / C, G = b / x, z = M / 2, P = b / 2, D = A / 2, B = C + 1, q = x + 1;
      let Z = 0, k = 0;
      const K = new U();
      for (let $ = 0; $ < q; $++) {
        const le = $ * G - P;
        for (let F = 0; F < B; F++) {
          const Y = F * R - z;
          K[h] = Y * y, K[p] = le * v, K[_] = D, l.push(K.x, K.y, K.z), K[h] = 0, K[p] = 0, K[_] = A > 0 ? 1 : -1, u.push(K.x, K.y, K.z), f.push(F / C), f.push(1 - $ / x), Z += 1;
        }
      }
      for (let $ = 0; $ < x; $++)
        for (let le = 0; le < C; le++) {
          const F = d + le + B * $, Y = d + le + B * ($ + 1), J = d + (le + 1) + B * ($ + 1), ee = d + (le + 1) + B * $;
          c.push(F, Y, ee), c.push(Y, J, ee), k += 6;
        }
      s.addGroup(m, k, S), m += k, d += Z;
    }
  }
  static fromJSON(e) {
    return new ar(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ti(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function _t(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = Ti(o[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function oc(o) {
  const e = [];
  for (let t = 0; t < o.length; t++)
    e.push(o[t].clone());
  return e;
}
function Lo(o) {
  return o.getRenderTarget() === null && o.outputEncoding === 3001 ? Kt : ji;
}
const lc = { clone: Ti, merge: _t };
var cc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, uc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Rn extends Hr {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = cc, this.fragmentShader = uc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ti(e.uniforms), this.uniformsGroups = oc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Do extends Nt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ot(), this.projectionMatrix = new ot(), this.projectionMatrixInverse = new ot();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class $t extends Do {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ba * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(es * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ba * 2 * Math.atan(
      Math.tan(es * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(es * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const s = this.filmOffset;
    s !== 0 && (r += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const pi = -90, mi = 1;
class hc extends Nt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new $t(pi, mi, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new $t(pi, mi, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
    const a = new $t(pi, mi, e, t);
    a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(0, 1, 0), this.add(a);
    const s = new $t(pi, mi, e, t);
    s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(0, -1, 0), this.add(s);
    const c = new $t(pi, mi, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new $t(pi, mi, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, r, a, s, c, l] = this.children, u = e.getRenderTarget(), f = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = 0, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, s), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.toneMapping = f, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Po extends vt {
  constructor(e, t, n, i, r, a, s, c, l, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, r, a, s, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class fc extends Qn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Po(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new ar(5, 5, 5), r = new Rn({
      name: "CubemapFromEquirect",
      uniforms: Ti(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const a = new _n(i, r), s = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new hc(1, 10, this).update(e, a), t.minFilter = s, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const ys = /* @__PURE__ */ new U(), dc = /* @__PURE__ */ new U(), pc = /* @__PURE__ */ new Ft();
class Vn {
  constructor(e = new U(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = ys.subVectors(n, t).cross(dc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(ys), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || pc.getNormalMatrix(e), i = this.coplanarPoint(ys).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gi = /* @__PURE__ */ new ea(), Tr = /* @__PURE__ */ new U();
class Fo {
  constructor(e = new Vn(), t = new Vn(), n = new Vn(), i = new Vn(), r = new Vn(), a = new Vn()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const s = this.planes;
    return s[0].copy(e), s[1].copy(t), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], r = n[1], a = n[2], s = n[3], c = n[4], l = n[5], u = n[6], f = n[7], d = n[8], m = n[9], g = n[10], h = n[11], p = n[12], _ = n[13], y = n[14], v = n[15];
    return t[0].setComponents(s - i, f - c, h - d, v - p).normalize(), t[1].setComponents(s + i, f + c, h + d, v + p).normalize(), t[2].setComponents(s + r, f + l, h + m, v + _).normalize(), t[3].setComponents(s - r, f - l, h - m, v - _).normalize(), t[4].setComponents(s - a, f - u, h - g, v - y).normalize(), t[5].setComponents(s + a, f + u, h + g, v + y).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(gi);
  }
  intersectsSprite(e) {
    return gi.center.set(0, 0, 0), gi.radius = 0.7071067811865476, gi.applyMatrix4(e.matrixWorld), this.intersectsSphere(gi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Tr.x = i.normal.x > 0 ? e.max.x : e.min.x, Tr.y = i.normal.y > 0 ? e.max.y : e.min.y, Tr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Tr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Io() {
  let o = null, e = !1, t = null, n = null;
  function i(r, a) {
    t(r, a), n = o.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = o.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      o.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      o = r;
    }
  };
}
function mc(o, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, u) {
    const f = l.array, d = l.usage, m = o.createBuffer();
    o.bindBuffer(u, m), o.bufferData(u, f, d), l.onUploadCallback();
    let g;
    if (f instanceof Float32Array)
      g = 5126;
    else if (f instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (f instanceof Int16Array)
      g = 5122;
    else if (f instanceof Uint32Array)
      g = 5125;
    else if (f instanceof Int32Array)
      g = 5124;
    else if (f instanceof Int8Array)
      g = 5120;
    else if (f instanceof Uint8Array)
      g = 5121;
    else if (f instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
    return {
      buffer: m,
      type: g,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function r(l, u, f) {
    const d = u.array, m = u.updateRange;
    o.bindBuffer(f, l), m.count === -1 ? o.bufferSubData(f, 0, d) : (t ? o.bufferSubData(
      f,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : o.bufferSubData(
      f,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), u.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function s(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (o.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const f = n.get(l);
    f === void 0 ? n.set(l, i(l, u)) : f.version < l.version && (r(f.buffer, l, u), f.version = l.version);
  }
  return {
    get: a,
    remove: s,
    update: c
  };
}
class qr extends ni {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, s = Math.floor(n), c = Math.floor(i), l = s + 1, u = c + 1, f = e / s, d = t / c, m = [], g = [], h = [], p = [];
    for (let _ = 0; _ < u; _++) {
      const y = _ * d - a;
      for (let v = 0; v < l; v++) {
        const M = v * f - r;
        g.push(M, -y, 0), h.push(0, 0, 1), p.push(v / s), p.push(1 - _ / c);
      }
    }
    for (let _ = 0; _ < c; _++)
      for (let y = 0; y < s; y++) {
        const v = y + l * _, M = y + l * (_ + 1), b = y + 1 + l * (_ + 1), A = y + 1 + l * _;
        m.push(v, M, A), m.push(M, b, A);
      }
    this.setIndex(m), this.setAttribute("position", new jn(g, 3)), this.setAttribute("normal", new jn(h, 3)), this.setAttribute("uv", new jn(p, 2));
  }
  static fromJSON(e) {
    return new qr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var gc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, _c = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, vc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Mc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, yc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Sc = "vec3 transformed = vec3( position );", bc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, wc = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Tc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Ec = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ac = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Cc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Rc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Lc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Dc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Pc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Fc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ic = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Nc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Oc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Uc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Bc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, zc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Gc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, kc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Vc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Hc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, qc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Xc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Yc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, jc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Zc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, $c = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Kc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Jc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Qc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, eu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, tu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, nu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, iu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ru = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, su = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, au = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ou = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, cu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, uu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, hu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, fu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, du = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, pu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, mu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, gu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _u = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, xu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, vu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Mu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, yu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Su = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, bu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, wu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Tu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Eu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Au = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Cu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Ru = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Lu = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Du = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Pu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Fu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Iu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Nu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Ou = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Uu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Bu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, zu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Gu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, ku = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Vu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Wu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Hu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, qu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Xu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Yu = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ju = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Zu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, $u = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Ku = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ju = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Qu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, eh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, th = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, nh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ih = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, rh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, sh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, ah = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, oh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, lh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, ch = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, uh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, hh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, fh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, dh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ph = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, mh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, gh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _h = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, xh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, vh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Mh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, yh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Sh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, bh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, wh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Th = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Eh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ah = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ch = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Rh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Dh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ph = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Fh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ih = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Nh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Oh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Uh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, zh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Wh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Hh = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, qh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Xh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Yh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, be = {
  alphamap_fragment: gc,
  alphamap_pars_fragment: _c,
  alphatest_fragment: xc,
  alphatest_pars_fragment: vc,
  aomap_fragment: Mc,
  aomap_pars_fragment: yc,
  begin_vertex: Sc,
  beginnormal_vertex: bc,
  bsdfs: wc,
  iridescence_fragment: Tc,
  bumpmap_pars_fragment: Ec,
  clipping_planes_fragment: Ac,
  clipping_planes_pars_fragment: Cc,
  clipping_planes_pars_vertex: Rc,
  clipping_planes_vertex: Lc,
  color_fragment: Dc,
  color_pars_fragment: Pc,
  color_pars_vertex: Fc,
  color_vertex: Ic,
  common: Nc,
  cube_uv_reflection_fragment: Oc,
  defaultnormal_vertex: Uc,
  displacementmap_pars_vertex: Bc,
  displacementmap_vertex: zc,
  emissivemap_fragment: Gc,
  emissivemap_pars_fragment: kc,
  encodings_fragment: Vc,
  encodings_pars_fragment: Wc,
  envmap_fragment: Hc,
  envmap_common_pars_fragment: qc,
  envmap_pars_fragment: Xc,
  envmap_pars_vertex: Yc,
  envmap_physical_pars_fragment: su,
  envmap_vertex: jc,
  fog_vertex: Zc,
  fog_pars_vertex: $c,
  fog_fragment: Kc,
  fog_pars_fragment: Jc,
  gradientmap_pars_fragment: Qc,
  lightmap_fragment: eu,
  lightmap_pars_fragment: tu,
  lights_lambert_fragment: nu,
  lights_lambert_pars_fragment: iu,
  lights_pars_begin: ru,
  lights_toon_fragment: au,
  lights_toon_pars_fragment: ou,
  lights_phong_fragment: lu,
  lights_phong_pars_fragment: cu,
  lights_physical_fragment: uu,
  lights_physical_pars_fragment: hu,
  lights_fragment_begin: fu,
  lights_fragment_maps: du,
  lights_fragment_end: pu,
  logdepthbuf_fragment: mu,
  logdepthbuf_pars_fragment: gu,
  logdepthbuf_pars_vertex: _u,
  logdepthbuf_vertex: xu,
  map_fragment: vu,
  map_pars_fragment: Mu,
  map_particle_fragment: yu,
  map_particle_pars_fragment: Su,
  metalnessmap_fragment: bu,
  metalnessmap_pars_fragment: wu,
  morphcolor_vertex: Tu,
  morphnormal_vertex: Eu,
  morphtarget_pars_vertex: Au,
  morphtarget_vertex: Cu,
  normal_fragment_begin: Ru,
  normal_fragment_maps: Lu,
  normal_pars_fragment: Du,
  normal_pars_vertex: Pu,
  normal_vertex: Fu,
  normalmap_pars_fragment: Iu,
  clearcoat_normal_fragment_begin: Nu,
  clearcoat_normal_fragment_maps: Ou,
  clearcoat_pars_fragment: Uu,
  iridescence_pars_fragment: Bu,
  output_fragment: zu,
  packing: Gu,
  premultiplied_alpha_fragment: ku,
  project_vertex: Vu,
  dithering_fragment: Wu,
  dithering_pars_fragment: Hu,
  roughnessmap_fragment: qu,
  roughnessmap_pars_fragment: Xu,
  shadowmap_pars_fragment: Yu,
  shadowmap_pars_vertex: ju,
  shadowmap_vertex: Zu,
  shadowmask_pars_fragment: $u,
  skinbase_vertex: Ku,
  skinning_pars_vertex: Ju,
  skinning_vertex: Qu,
  skinnormal_vertex: eh,
  specularmap_fragment: th,
  specularmap_pars_fragment: nh,
  tonemapping_fragment: ih,
  tonemapping_pars_fragment: rh,
  transmission_fragment: sh,
  transmission_pars_fragment: ah,
  uv_pars_fragment: oh,
  uv_pars_vertex: lh,
  uv_vertex: ch,
  uv2_pars_fragment: uh,
  uv2_pars_vertex: hh,
  uv2_vertex: fh,
  worldpos_vertex: dh,
  background_vert: ph,
  background_frag: mh,
  backgroundCube_vert: gh,
  backgroundCube_frag: _h,
  cube_vert: xh,
  cube_frag: vh,
  depth_vert: Mh,
  depth_frag: yh,
  distanceRGBA_vert: Sh,
  distanceRGBA_frag: bh,
  equirect_vert: wh,
  equirect_frag: Th,
  linedashed_vert: Eh,
  linedashed_frag: Ah,
  meshbasic_vert: Ch,
  meshbasic_frag: Rh,
  meshlambert_vert: Lh,
  meshlambert_frag: Dh,
  meshmatcap_vert: Ph,
  meshmatcap_frag: Fh,
  meshnormal_vert: Ih,
  meshnormal_frag: Nh,
  meshphong_vert: Oh,
  meshphong_frag: Uh,
  meshphysical_vert: Bh,
  meshphysical_frag: zh,
  meshtoon_vert: Gh,
  meshtoon_frag: kh,
  points_vert: Vh,
  points_frag: Wh,
  shadow_vert: Hh,
  shadow_frag: qh,
  sprite_vert: Xh,
  sprite_frag: Yh
}, ie = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Ft() },
    uv2Transform: { value: /* @__PURE__ */ new Ft() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new Ue(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ve(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ft() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ue(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ft() }
  }
}, Qt = {
  basic: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.fog
    ]),
    vertexShader: be.meshbasic_vert,
    fragmentShader: be.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: be.meshlambert_vert,
    fragmentShader: be.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        specular: { value: /* @__PURE__ */ new Ve(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: be.meshphong_vert,
    fragmentShader: be.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.roughnessmap,
      ie.metalnessmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: be.meshphysical_vert,
    fragmentShader: be.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.gradientmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: be.meshtoon_vert,
    fragmentShader: be.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: be.meshmatcap_vert,
    fragmentShader: be.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ _t([
      ie.points,
      ie.fog
    ]),
    vertexShader: be.points_vert,
    fragmentShader: be.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: be.linedashed_vert,
    fragmentShader: be.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.displacementmap
    ]),
    vertexShader: be.depth_vert,
    fragmentShader: be.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: be.meshnormal_vert,
    fragmentShader: be.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ _t([
      ie.sprite,
      ie.fog
    ]),
    vertexShader: be.sprite_vert,
    fragmentShader: be.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ft() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: be.background_vert,
    fragmentShader: be.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: be.backgroundCube_vert,
    fragmentShader: be.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: be.cube_vert,
    fragmentShader: be.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: be.equirect_vert,
    fragmentShader: be.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new U() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: be.distanceRGBA_vert,
    fragmentShader: be.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ _t([
      ie.lights,
      ie.fog,
      {
        color: { value: /* @__PURE__ */ new Ve(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: be.shadow_vert,
    fragmentShader: be.shadow_frag
  }
};
Qt.physical = {
  uniforms: /* @__PURE__ */ _t([
    Qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ue(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ve(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ve(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Ve(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: be.meshphysical_vert,
  fragmentShader: be.meshphysical_frag
};
const Er = { r: 0, b: 0, g: 0 };
function jh(o, e, t, n, i, r, a) {
  const s = new Ve(0);
  let c = r === !0 ? 0 : 1, l, u, f = null, d = 0, m = null;
  function g(p, _) {
    let y = !1, v = _.isScene === !0 ? _.background : null;
    v && v.isTexture && (v = (_.backgroundBlurriness > 0 ? t : e).get(v));
    const M = o.xr, b = M.getSession && M.getSession();
    b && b.environmentBlendMode === "additive" && (v = null), v === null ? h(s, c) : v && v.isColor && (h(v, 1), y = !0), (o.autoClear || y) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), v && (v.isCubeTexture || v.mapping === 306) ? (u === void 0 && (u = new _n(
      new ar(1, 1, 1),
      new Rn({
        name: "BackgroundCubeMaterial",
        uniforms: Ti(Qt.backgroundCube.uniforms),
        vertexShader: Qt.backgroundCube.vertexShader,
        fragmentShader: Qt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(A, C, x) {
      this.matrixWorld.copyPosition(x.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, u.material.toneMapped = v.encoding !== 3001, (f !== v || d !== v.version || m !== o.toneMapping) && (u.material.needsUpdate = !0, f = v, d = v.version, m = o.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new _n(
      new qr(2, 2),
      new Rn({
        name: "BackgroundMaterial",
        uniforms: Ti(Qt.background.uniforms),
        vertexShader: Qt.background.vertexShader,
        fragmentShader: Qt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, l.material.toneMapped = v.encoding !== 3001, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (f !== v || d !== v.version || m !== o.toneMapping) && (l.material.needsUpdate = !0, f = v, d = v.version, m = o.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(p, _) {
    p.getRGB(Er, Lo(o)), n.buffers.color.setClear(Er.r, Er.g, Er.b, _, a);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(p, _ = 1) {
      s.set(p), c = _, h(s, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(p) {
      c = p, h(s, c);
    },
    render: g
  };
}
function Zh(o, e, t, n) {
  const i = o.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || r !== null, s = {}, c = p(null);
  let l = c, u = !1;
  function f(D, B, q, Z, k) {
    let K = !1;
    if (a) {
      const $ = h(Z, q, B);
      l !== $ && (l = $, m(l.object)), K = _(D, Z, q, k), K && y(D, Z, q, k);
    } else {
      const $ = B.wireframe === !0;
      (l.geometry !== Z.id || l.program !== q.id || l.wireframe !== $) && (l.geometry = Z.id, l.program = q.id, l.wireframe = $, K = !0);
    }
    k !== null && t.update(k, 34963), (K || u) && (u = !1, x(D, B, q, Z), k !== null && o.bindBuffer(34963, t.get(k).buffer));
  }
  function d() {
    return n.isWebGL2 ? o.createVertexArray() : r.createVertexArrayOES();
  }
  function m(D) {
    return n.isWebGL2 ? o.bindVertexArray(D) : r.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? o.deleteVertexArray(D) : r.deleteVertexArrayOES(D);
  }
  function h(D, B, q) {
    const Z = q.wireframe === !0;
    let k = s[D.id];
    k === void 0 && (k = {}, s[D.id] = k);
    let K = k[B.id];
    K === void 0 && (K = {}, k[B.id] = K);
    let $ = K[Z];
    return $ === void 0 && ($ = p(d()), K[Z] = $), $;
  }
  function p(D) {
    const B = [], q = [], Z = [];
    for (let k = 0; k < i; k++)
      B[k] = 0, q[k] = 0, Z[k] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: q,
      attributeDivisors: Z,
      object: D,
      attributes: {},
      index: null
    };
  }
  function _(D, B, q, Z) {
    const k = l.attributes, K = B.attributes;
    let $ = 0;
    const le = q.getAttributes();
    for (const F in le)
      if (le[F].location >= 0) {
        const J = k[F];
        let ee = K[F];
        if (ee === void 0 && (F === "instanceMatrix" && D.instanceMatrix && (ee = D.instanceMatrix), F === "instanceColor" && D.instanceColor && (ee = D.instanceColor)), J === void 0 || J.attribute !== ee || ee && J.data !== ee.data)
          return !0;
        $++;
      }
    return l.attributesNum !== $ || l.index !== Z;
  }
  function y(D, B, q, Z) {
    const k = {}, K = B.attributes;
    let $ = 0;
    const le = q.getAttributes();
    for (const F in le)
      if (le[F].location >= 0) {
        let J = K[F];
        J === void 0 && (F === "instanceMatrix" && D.instanceMatrix && (J = D.instanceMatrix), F === "instanceColor" && D.instanceColor && (J = D.instanceColor));
        const ee = {};
        ee.attribute = J, J && J.data && (ee.data = J.data), k[F] = ee, $++;
      }
    l.attributes = k, l.attributesNum = $, l.index = Z;
  }
  function v() {
    const D = l.newAttributes;
    for (let B = 0, q = D.length; B < q; B++)
      D[B] = 0;
  }
  function M(D) {
    b(D, 0);
  }
  function b(D, B) {
    const q = l.newAttributes, Z = l.enabledAttributes, k = l.attributeDivisors;
    q[D] = 1, Z[D] === 0 && (o.enableVertexAttribArray(D), Z[D] = 1), k[D] !== B && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, B), k[D] = B);
  }
  function A() {
    const D = l.newAttributes, B = l.enabledAttributes;
    for (let q = 0, Z = B.length; q < Z; q++)
      B[q] !== D[q] && (o.disableVertexAttribArray(q), B[q] = 0);
  }
  function C(D, B, q, Z, k, K) {
    n.isWebGL2 === !0 && (q === 5124 || q === 5125) ? o.vertexAttribIPointer(D, B, q, k, K) : o.vertexAttribPointer(D, B, q, Z, k, K);
  }
  function x(D, B, q, Z) {
    if (n.isWebGL2 === !1 && (D.isInstancedMesh || Z.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const k = Z.attributes, K = q.getAttributes(), $ = B.defaultAttributeValues;
    for (const le in K) {
      const F = K[le];
      if (F.location >= 0) {
        let Y = k[le];
        if (Y === void 0 && (le === "instanceMatrix" && D.instanceMatrix && (Y = D.instanceMatrix), le === "instanceColor" && D.instanceColor && (Y = D.instanceColor)), Y !== void 0) {
          const J = Y.normalized, ee = Y.itemSize, O = t.get(Y);
          if (O === void 0)
            continue;
          const ye = O.buffer, he = O.type, fe = O.bytesPerElement;
          if (Y.isInterleavedBufferAttribute) {
            const oe = Y.data, Ne = oe.stride, Se = Y.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < F.locationSize; xe++)
                b(F.location + xe, oe.meshPerAttribute);
              D.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let xe = 0; xe < F.locationSize; xe++)
                M(F.location + xe);
            o.bindBuffer(34962, ye);
            for (let xe = 0; xe < F.locationSize; xe++)
              C(
                F.location + xe,
                ee / F.locationSize,
                he,
                J,
                Ne * fe,
                (Se + ee / F.locationSize * xe) * fe
              );
          } else {
            if (Y.isInstancedBufferAttribute) {
              for (let oe = 0; oe < F.locationSize; oe++)
                b(F.location + oe, Y.meshPerAttribute);
              D.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = Y.meshPerAttribute * Y.count);
            } else
              for (let oe = 0; oe < F.locationSize; oe++)
                M(F.location + oe);
            o.bindBuffer(34962, ye);
            for (let oe = 0; oe < F.locationSize; oe++)
              C(
                F.location + oe,
                ee / F.locationSize,
                he,
                J,
                ee * fe,
                ee / F.locationSize * oe * fe
              );
          }
        } else if ($ !== void 0) {
          const J = $[le];
          if (J !== void 0)
            switch (J.length) {
              case 2:
                o.vertexAttrib2fv(F.location, J);
                break;
              case 3:
                o.vertexAttrib3fv(F.location, J);
                break;
              case 4:
                o.vertexAttrib4fv(F.location, J);
                break;
              default:
                o.vertexAttrib1fv(F.location, J);
            }
        }
      }
    }
    A();
  }
  function S() {
    z();
    for (const D in s) {
      const B = s[D];
      for (const q in B) {
        const Z = B[q];
        for (const k in Z)
          g(Z[k].object), delete Z[k];
        delete B[q];
      }
      delete s[D];
    }
  }
  function R(D) {
    if (s[D.id] === void 0)
      return;
    const B = s[D.id];
    for (const q in B) {
      const Z = B[q];
      for (const k in Z)
        g(Z[k].object), delete Z[k];
      delete B[q];
    }
    delete s[D.id];
  }
  function G(D) {
    for (const B in s) {
      const q = s[B];
      if (q[D.id] === void 0)
        continue;
      const Z = q[D.id];
      for (const k in Z)
        g(Z[k].object), delete Z[k];
      delete q[D.id];
    }
  }
  function z() {
    P(), u = !0, l !== c && (l = c, m(l.object));
  }
  function P() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: f,
    reset: z,
    resetDefaultState: P,
    dispose: S,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: G,
    initAttributes: v,
    enableAttribute: M,
    disableUnusedAttributes: A
  };
}
function $h(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(l) {
    r = l;
  }
  function s(l, u) {
    o.drawArrays(r, l, u), t.update(u, r, 1);
  }
  function c(l, u, f) {
    if (f === 0)
      return;
    let d, m;
    if (i)
      d = o, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](r, l, u, f), t.update(u, r, f);
  }
  this.setMode = a, this.render = s, this.renderInstances = c;
}
function Kh(o, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(C) {
    if (C === "highp") {
      if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext;
  let s = t.precision !== void 0 ? t.precision : "highp";
  const c = r(s);
  c !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", c, "instead."), s = c);
  const l = a || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, f = o.getParameter(34930), d = o.getParameter(35660), m = o.getParameter(3379), g = o.getParameter(34076), h = o.getParameter(34921), p = o.getParameter(36347), _ = o.getParameter(36348), y = o.getParameter(36349), v = d > 0, M = a || e.has("OES_texture_float"), b = v && M, A = a ? o.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: s,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: h,
    maxVertexUniforms: p,
    maxVaryings: _,
    maxFragmentUniforms: y,
    vertexTextures: v,
    floatFragmentTextures: M,
    floatVertexTextures: b,
    maxSamples: A
  };
}
function Jh(o) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new Vn(), s = new Ft(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const m = f.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = f.length, m;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(f, d) {
    t = u(f, d, 0);
  }, this.setState = function(f, d, m) {
    const g = f.clippingPlanes, h = f.clipIntersection, p = f.clipShadows, _ = o.get(f);
    if (!i || g === null || g.length === 0 || r && !p)
      r ? u(null) : l();
    else {
      const y = r ? 0 : n, v = y * 4;
      let M = _.clippingState || null;
      c.value = M, M = u(g, d, v, m);
      for (let b = 0; b !== v; ++b)
        M[b] = t[b];
      _.clippingState = M, this.numIntersection = h ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(f, d, m, g) {
    const h = f !== null ? f.length : 0;
    let p = null;
    if (h !== 0) {
      if (p = c.value, g !== !0 || p === null) {
        const _ = m + h * 4, y = d.matrixWorldInverse;
        s.getNormalMatrix(y), (p === null || p.length < _) && (p = new Float32Array(_));
        for (let v = 0, M = m; v !== h; ++v, M += 4)
          a.copy(f[v]).applyMatrix4(y, s), a.normal.toArray(p, M), p[M + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = h, e.numIntersection = 0, p;
  }
}
function Qh(o) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, s) {
    return s === 303 ? a.mapping = 301 : s === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const s = a.mapping;
      if (s === 303 || s === 304)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new fc(c.height / 2);
            return l.fromEquirectangularTexture(o, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const s = a.target;
    s.removeEventListener("dispose", i);
    const c = e.get(s);
    c !== void 0 && (e.delete(s), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class No extends Do {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, s = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, s -= u * this.view.offsetY, c = s - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, s, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const vi = 4, Na = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], qn = 20, Ss = /* @__PURE__ */ new No(), Oa = /* @__PURE__ */ new Ve();
let bs = null;
const Wn = (1 + Math.sqrt(5)) / 2, _i = 1 / Wn, Ua = [
  /* @__PURE__ */ new U(1, 1, 1),
  /* @__PURE__ */ new U(-1, 1, 1),
  /* @__PURE__ */ new U(1, 1, -1),
  /* @__PURE__ */ new U(-1, 1, -1),
  /* @__PURE__ */ new U(0, Wn, _i),
  /* @__PURE__ */ new U(0, Wn, -_i),
  /* @__PURE__ */ new U(_i, 0, Wn),
  /* @__PURE__ */ new U(-_i, 0, Wn),
  /* @__PURE__ */ new U(Wn, _i, 0),
  /* @__PURE__ */ new U(-Wn, _i, 0)
];
class Ba {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    bs = this._renderer.getRenderTarget(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ka(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ga(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(bs), e.scissorTest = !1, Ar(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), bs = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      encoding: 3e3,
      depthBuffer: !1
    }, i = za(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = za(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ef(r)), this._blurMaterial = tf(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new _n(this._lodPlanes[0], e);
    this._renderer.compile(t, Ss);
  }
  _sceneToCubeUV(e, t, n, i) {
    const s = new $t(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(Oa), u.toneMapping = 0, u.autoClear = !1;
    const m = new Ao({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new _n(new ar(), m);
    let h = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, h = !0) : (m.color.copy(Oa), h = !0);
    for (let _ = 0; _ < 6; _++) {
      const y = _ % 3;
      y === 0 ? (s.up.set(0, c[_], 0), s.lookAt(l[_], 0, 0)) : y === 1 ? (s.up.set(0, 0, c[_]), s.lookAt(0, l[_], 0)) : (s.up.set(0, c[_], 0), s.lookAt(0, 0, l[_]));
      const v = this._cubeSize;
      Ar(i, y * v, _ > 2 ? v : 0, v, v), u.setRenderTarget(i), h && u.render(g, s), u.render(e, s);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = ka()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ga());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new _n(this._lodPlanes[0], r), s = r.uniforms;
    s.envMap.value = e;
    const c = this._cubeSize;
    Ar(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Ss);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Ua[(i - 1) % Ua.length];
      this._blur(e, i - 1, i, r, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, a, s) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, f = new _n(this._lodPlanes[i], l), d = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * qn - 1), h = r / g, p = isFinite(r) ? 1 + Math.floor(u * h) : qn;
    p > qn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);
    const _ = [];
    let y = 0;
    for (let C = 0; C < qn; ++C) {
      const x = C / h, S = Math.exp(-x * x / 2);
      _.push(S), C === 0 ? y += S : C < p && (y += 2 * S);
    }
    for (let C = 0; C < _.length; C++)
      _[C] = _[C] / y;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = _, d.latitudinal.value = a === "latitudinal", s && (d.poleAxis.value = s);
    const { _lodMax: v } = this;
    d.dTheta.value = g, d.mipInt.value = v - n;
    const M = this._sizeLods[i], b = 3 * M * (i > v - vi ? i - v + vi : 0), A = 4 * (this._cubeSize - M);
    Ar(t, b, A, 3 * M, 2 * M), c.setRenderTarget(t), c.render(f, Ss);
  }
}
function ef(o) {
  const e = [], t = [], n = [];
  let i = o;
  const r = o - vi + 1 + Na.length;
  for (let a = 0; a < r; a++) {
    const s = Math.pow(2, i);
    t.push(s);
    let c = 1 / s;
    a > o - vi ? c = Na[a - o + vi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (s - 2), u = -l, f = 1 + l, d = [u, u, f, u, f, f, u, u, f, f, u, f], m = 6, g = 6, h = 3, p = 2, _ = 1, y = new Float32Array(h * g * m), v = new Float32Array(p * g * m), M = new Float32Array(_ * g * m);
    for (let A = 0; A < m; A++) {
      const C = A % 3 * 2 / 3 - 1, x = A > 2 ? 0 : -1, S = [
        C,
        x,
        0,
        C + 2 / 3,
        x,
        0,
        C + 2 / 3,
        x + 1,
        0,
        C,
        x,
        0,
        C + 2 / 3,
        x + 1,
        0,
        C,
        x + 1,
        0
      ];
      y.set(S, h * g * A), v.set(d, p * g * A);
      const R = [A, A, A, A, A, A];
      M.set(R, _ * g * A);
    }
    const b = new ni();
    b.setAttribute("position", new nn(y, h)), b.setAttribute("uv", new nn(v, p)), b.setAttribute("faceIndex", new nn(M, _)), e.push(b), i > vi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function za(o, e, t) {
  const n = new Qn(o, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ar(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}
function tf(o, e, t) {
  const n = new Float32Array(qn), i = new U(0, 1, 0);
  return new Rn({
    name: "SphericalGaussianBlur",
    defines: {
      n: qn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: ta(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ga() {
  return new Rn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ta(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ka() {
  return new Rn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ta(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ta() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function nf(o) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(s) {
    if (s && s.isTexture) {
      const c = s.mapping, l = c === 303 || c === 304, u = c === 301 || c === 302;
      if (l || u)
        if (s.isRenderTargetTexture && s.needsPMREMUpdate === !0) {
          s.needsPMREMUpdate = !1;
          let f = e.get(s);
          return t === null && (t = new Ba(o)), f = l ? t.fromEquirectangular(s, f) : t.fromCubemap(s, f), e.set(s, f), f.texture;
        } else {
          if (e.has(s))
            return e.get(s).texture;
          {
            const f = s.image;
            if (l && f && f.height > 0 || u && f && i(f)) {
              t === null && (t = new Ba(o));
              const d = l ? t.fromEquirectangular(s) : t.fromCubemap(s);
              return e.set(s, d), s.addEventListener("dispose", r), d.texture;
            } else
              return null;
          }
        }
    }
    return s;
  }
  function i(s) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      s[u] !== void 0 && c++;
    return c === l;
  }
  function r(s) {
    const c = s.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function rf(o) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function sf(o, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const m = r.get(d);
    m && (e.remove(m), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function s(f, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(f) {
    const d = f.attributes;
    for (const g in d)
      e.update(d[g], 34962);
    const m = f.morphAttributes;
    for (const g in m) {
      const h = m[g];
      for (let p = 0, _ = h.length; p < _; p++)
        e.update(h[p], 34962);
    }
  }
  function l(f) {
    const d = [], m = f.index, g = f.attributes.position;
    let h = 0;
    if (m !== null) {
      const y = m.array;
      h = m.version;
      for (let v = 0, M = y.length; v < M; v += 3) {
        const b = y[v + 0], A = y[v + 1], C = y[v + 2];
        d.push(b, A, A, C, C, b);
      }
    } else {
      const y = g.array;
      h = g.version;
      for (let v = 0, M = y.length / 3 - 1; v < M; v += 3) {
        const b = v + 0, A = v + 1, C = v + 2;
        d.push(b, A, A, C, C, b);
      }
    }
    const p = new (yo(d) ? Ro : Co)(d, 1);
    p.version = h;
    const _ = r.get(f);
    _ && e.remove(_), r.set(f, p);
  }
  function u(f) {
    const d = r.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && l(f);
    } else
      l(f);
    return r.get(f);
  }
  return {
    get: s,
    update: c,
    getWireframeAttribute: u
  };
}
function af(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(d) {
    r = d;
  }
  let s, c;
  function l(d) {
    s = d.type, c = d.bytesPerElement;
  }
  function u(d, m) {
    o.drawElements(r, m, s, d * c), t.update(m, r, 1);
  }
  function f(d, m, g) {
    if (g === 0)
      return;
    let h, p;
    if (i)
      h = o, p = "drawElementsInstanced";
    else if (h = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", h === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    h[p](r, m, s, d * c, g), t.update(m, r, g);
  }
  this.setMode = a, this.setIndex = l, this.render = u, this.renderInstances = f;
}
function of(o) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, s) {
    switch (t.calls++, a) {
      case 4:
        t.triangles += s * (r / 3);
        break;
      case 1:
        t.lines += s * (r / 2);
        break;
      case 3:
        t.lines += s * (r - 1);
        break;
      case 2:
        t.lines += s * r;
        break;
      case 0:
        t.points += s * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function lf(o, e) {
  return o[0] - e[0];
}
function cf(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}
function uf(o, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), a = new Je(), s = [];
  for (let l = 0; l < 8; l++)
    s[l] = [l, 0];
  function c(l, u, f, d) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, h = g !== void 0 ? g.length : 0;
      let p = r.get(u);
      if (p === void 0 || p.count !== h) {
        let B = function() {
          P.dispose(), r.delete(u), u.removeEventListener("dispose", B);
        };
        p !== void 0 && p.texture.dispose();
        const v = u.morphAttributes.position !== void 0, M = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, A = u.morphAttributes.position || [], C = u.morphAttributes.normal || [], x = u.morphAttributes.color || [];
        let S = 0;
        v === !0 && (S = 1), M === !0 && (S = 2), b === !0 && (S = 3);
        let R = u.attributes.position.count * S, G = 1;
        R > e.maxTextureSize && (G = Math.ceil(R / e.maxTextureSize), R = e.maxTextureSize);
        const z = new Float32Array(R * G * 4 * h), P = new To(z, R, G, h);
        P.type = 1015, P.needsUpdate = !0;
        const D = S * 4;
        for (let q = 0; q < h; q++) {
          const Z = A[q], k = C[q], K = x[q], $ = R * G * 4 * q;
          for (let le = 0; le < Z.count; le++) {
            const F = le * D;
            v === !0 && (a.fromBufferAttribute(Z, le), z[$ + F + 0] = a.x, z[$ + F + 1] = a.y, z[$ + F + 2] = a.z, z[$ + F + 3] = 0), M === !0 && (a.fromBufferAttribute(k, le), z[$ + F + 4] = a.x, z[$ + F + 5] = a.y, z[$ + F + 6] = a.z, z[$ + F + 7] = 0), b === !0 && (a.fromBufferAttribute(K, le), z[$ + F + 8] = a.x, z[$ + F + 9] = a.y, z[$ + F + 10] = a.z, z[$ + F + 11] = K.itemSize === 4 ? a.w : 1);
          }
        }
        p = {
          count: h,
          texture: P,
          size: new Ue(R, G)
        }, r.set(u, p), u.addEventListener("dispose", B);
      }
      let _ = 0;
      for (let v = 0; v < m.length; v++)
        _ += m[v];
      const y = u.morphTargetsRelative ? 1 : 1 - _;
      d.getUniforms().setValue(o, "morphTargetBaseInfluence", y), d.getUniforms().setValue(o, "morphTargetInfluences", m), d.getUniforms().setValue(o, "morphTargetsTexture", p.texture, t), d.getUniforms().setValue(o, "morphTargetsTextureSize", p.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let h = n[u.id];
      if (h === void 0 || h.length !== g) {
        h = [];
        for (let M = 0; M < g; M++)
          h[M] = [M, 0];
        n[u.id] = h;
      }
      for (let M = 0; M < g; M++) {
        const b = h[M];
        b[0] = M, b[1] = m[M];
      }
      h.sort(cf);
      for (let M = 0; M < 8; M++)
        M < g && h[M][1] ? (s[M][0] = h[M][0], s[M][1] = h[M][1]) : (s[M][0] = Number.MAX_SAFE_INTEGER, s[M][1] = 0);
      s.sort(lf);
      const p = u.morphAttributes.position, _ = u.morphAttributes.normal;
      let y = 0;
      for (let M = 0; M < 8; M++) {
        const b = s[M], A = b[0], C = b[1];
        A !== Number.MAX_SAFE_INTEGER && C ? (p && u.getAttribute("morphTarget" + M) !== p[A] && u.setAttribute("morphTarget" + M, p[A]), _ && u.getAttribute("morphNormal" + M) !== _[A] && u.setAttribute("morphNormal" + M, _[A]), i[M] = C, y += C) : (p && u.hasAttribute("morphTarget" + M) === !0 && u.deleteAttribute("morphTarget" + M), _ && u.hasAttribute("morphNormal" + M) === !0 && u.deleteAttribute("morphNormal" + M), i[M] = 0);
      }
      const v = u.morphTargetsRelative ? 1 : 1 - y;
      d.getUniforms().setValue(o, "morphTargetBaseInfluence", v), d.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function hf(o, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, u = c.geometry, f = e.get(c, u);
    return i.get(f) !== l && (e.update(f), i.set(f, l)), c.isInstancedMesh && (c.hasEventListener("dispose", s) === !1 && c.addEventListener("dispose", s), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), f;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function s(c) {
    const l = c.target;
    l.removeEventListener("dispose", s), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
const Oo = /* @__PURE__ */ new vt(), Uo = /* @__PURE__ */ new To(), Bo = /* @__PURE__ */ new Zl(), zo = /* @__PURE__ */ new Po(), Va = [], Wa = [], Ha = new Float32Array(16), qa = new Float32Array(9), Xa = new Float32Array(4);
function Pi(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0)
    return o;
  const i = e * t;
  let r = Va[i];
  if (r === void 0 && (r = new Float32Array(i), Va[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, s = 0; a !== e; ++a)
      s += t, o[a].toArray(r, s);
  }
  return r;
}
function Qe(o, e) {
  if (o.length !== e.length)
    return !1;
  for (let t = 0, n = o.length; t < n; t++)
    if (o[t] !== e[t])
      return !1;
  return !0;
}
function et(o, e) {
  for (let t = 0, n = e.length; t < n; t++)
    o[t] = e[t];
}
function Xr(o, e) {
  let t = Wa[e];
  t === void 0 && (t = new Int32Array(e), Wa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = o.allocateTextureUnit();
  return t;
}
function ff(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e);
}
function df(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Qe(t, e))
      return;
    o.uniform2fv(this.addr, e), et(t, e);
  }
}
function pf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Qe(t, e))
      return;
    o.uniform3fv(this.addr, e), et(t, e);
  }
}
function mf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Qe(t, e))
      return;
    o.uniform4fv(this.addr, e), et(t, e);
  }
}
function gf(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Qe(t, e))
      return;
    o.uniformMatrix2fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n))
      return;
    Xa.set(n), o.uniformMatrix2fv(this.addr, !1, Xa), et(t, n);
  }
}
function _f(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Qe(t, e))
      return;
    o.uniformMatrix3fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n))
      return;
    qa.set(n), o.uniformMatrix3fv(this.addr, !1, qa), et(t, n);
  }
}
function xf(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Qe(t, e))
      return;
    o.uniformMatrix4fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n))
      return;
    Ha.set(n), o.uniformMatrix4fv(this.addr, !1, Ha), et(t, n);
  }
}
function vf(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e);
}
function Mf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Qe(t, e))
      return;
    o.uniform2iv(this.addr, e), et(t, e);
  }
}
function yf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Qe(t, e))
      return;
    o.uniform3iv(this.addr, e), et(t, e);
  }
}
function Sf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Qe(t, e))
      return;
    o.uniform4iv(this.addr, e), et(t, e);
  }
}
function bf(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e);
}
function wf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Qe(t, e))
      return;
    o.uniform2uiv(this.addr, e), et(t, e);
  }
}
function Tf(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Qe(t, e))
      return;
    o.uniform3uiv(this.addr, e), et(t, e);
  }
}
function Ef(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Qe(t, e))
      return;
    o.uniform4uiv(this.addr, e), et(t, e);
  }
}
function Af(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Oo, i);
}
function Cf(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Bo, i);
}
function Rf(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || zo, i);
}
function Lf(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Uo, i);
}
function Df(o) {
  switch (o) {
    case 5126:
      return ff;
    case 35664:
      return df;
    case 35665:
      return pf;
    case 35666:
      return mf;
    case 35674:
      return gf;
    case 35675:
      return _f;
    case 35676:
      return xf;
    case 5124:
    case 35670:
      return vf;
    case 35667:
    case 35671:
      return Mf;
    case 35668:
    case 35672:
      return yf;
    case 35669:
    case 35673:
      return Sf;
    case 5125:
      return bf;
    case 36294:
      return wf;
    case 36295:
      return Tf;
    case 36296:
      return Ef;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Af;
    case 35679:
    case 36299:
    case 36307:
      return Cf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Rf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Lf;
  }
}
function Pf(o, e) {
  o.uniform1fv(this.addr, e);
}
function Ff(o, e) {
  const t = Pi(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}
function If(o, e) {
  const t = Pi(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}
function Nf(o, e) {
  const t = Pi(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}
function Of(o, e) {
  const t = Pi(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}
function Uf(o, e) {
  const t = Pi(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}
function Bf(o, e) {
  const t = Pi(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}
function zf(o, e) {
  o.uniform1iv(this.addr, e);
}
function Gf(o, e) {
  o.uniform2iv(this.addr, e);
}
function kf(o, e) {
  o.uniform3iv(this.addr, e);
}
function Vf(o, e) {
  o.uniform4iv(this.addr, e);
}
function Wf(o, e) {
  o.uniform1uiv(this.addr, e);
}
function Hf(o, e) {
  o.uniform2uiv(this.addr, e);
}
function qf(o, e) {
  o.uniform3uiv(this.addr, e);
}
function Xf(o, e) {
  o.uniform4uiv(this.addr, e);
}
function Yf(o, e, t) {
  const n = this.cache, i = e.length, r = Xr(t, i);
  Qe(n, r) || (o.uniform1iv(this.addr, r), et(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Oo, r[a]);
}
function jf(o, e, t) {
  const n = this.cache, i = e.length, r = Xr(t, i);
  Qe(n, r) || (o.uniform1iv(this.addr, r), et(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Bo, r[a]);
}
function Zf(o, e, t) {
  const n = this.cache, i = e.length, r = Xr(t, i);
  Qe(n, r) || (o.uniform1iv(this.addr, r), et(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || zo, r[a]);
}
function $f(o, e, t) {
  const n = this.cache, i = e.length, r = Xr(t, i);
  Qe(n, r) || (o.uniform1iv(this.addr, r), et(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Uo, r[a]);
}
function Kf(o) {
  switch (o) {
    case 5126:
      return Pf;
    case 35664:
      return Ff;
    case 35665:
      return If;
    case 35666:
      return Nf;
    case 35674:
      return Of;
    case 35675:
      return Uf;
    case 35676:
      return Bf;
    case 5124:
    case 35670:
      return zf;
    case 35667:
    case 35671:
      return Gf;
    case 35668:
    case 35672:
      return kf;
    case 35669:
    case 35673:
      return Vf;
    case 5125:
      return Wf;
    case 36294:
      return Hf;
    case 36295:
      return qf;
    case 36296:
      return Xf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Yf;
    case 35679:
    case 36299:
    case 36307:
      return jf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Zf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $f;
  }
}
class Jf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Df(t.type);
  }
}
class Qf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Kf(t.type);
  }
}
class ed {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const s = i[r];
      s.setValue(e, t[s.id], n);
    }
  }
}
const ws = /(\w+)(\])?(\[|\.)?/g;
function Ya(o, e) {
  o.seq.push(e), o.map[e.id] = e;
}
function td(o, e, t) {
  const n = o.name, i = n.length;
  for (ws.lastIndex = 0; ; ) {
    const r = ws.exec(n), a = ws.lastIndex;
    let s = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (s = s | 0), l === void 0 || l === "[" && a + 2 === i) {
      Ya(t, l === void 0 ? new Jf(s, o, e) : new Qf(s, o, e));
      break;
    } else {
      let f = t.map[s];
      f === void 0 && (f = new ed(s), Ya(t, f)), t = f;
    }
  }
}
class Pr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      td(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const s = t[r], c = n[s.id];
      c.needsUpdate !== !1 && s.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function ja(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let nd = 0;
function id(o, e) {
  const t = o.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const s = a + 1;
    n.push(`${s === e ? ">" : " "} ${s}: ${t[a]}`);
  }
  return n.join(`
`);
}
function rd(o) {
  switch (o) {
    case 3e3:
      return ["Linear", "( value )"];
    case 3001:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), ["Linear", "( value )"];
  }
}
function Za(o, e, t) {
  const n = o.getShaderParameter(e, 35713), i = o.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + id(o.getShaderSource(e), a);
  } else
    return i;
}
function sd(o, e) {
  const t = rd(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ad(o, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "OptimizedCineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function od(o) {
  return [
    o.extensionDerivatives || o.envMapCubeUVHeight || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Vi).join(`
`);
}
function ld(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function cd(o, e) {
  const t = {}, n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = o.getActiveAttrib(e, i), a = r.name;
    let s = 1;
    r.type === 35674 && (s = 2), r.type === 35675 && (s = 3), r.type === 35676 && (s = 4), t[a] = {
      type: r.type,
      location: o.getAttribLocation(e, a),
      locationSize: s
    };
  }
  return t;
}
function Vi(o) {
  return o !== "";
}
function $a(o, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ka(o, e) {
  return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ud = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Os(o) {
  return o.replace(ud, hd);
}
function hd(o, e) {
  const t = be[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Os(t);
}
const fd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ja(o) {
  return o.replace(fd, dd);
}
function dd(o, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Qa(o) {
  let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;";
  return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function pd(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return o.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function md(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function gd(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function _d(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function xd(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function vd(o, e, t, n) {
  const i = o.getContext(), r = t.defines;
  let a = t.vertexShader, s = t.fragmentShader;
  const c = pd(t), l = md(t), u = gd(t), f = _d(t), d = xd(t), m = t.isWebGL2 ? "" : od(t), g = ld(r), h = i.createProgram();
  let p, _, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    g
  ].filter(Vi).join(`
`), p.length > 0 && (p += `
`), _ = [
    m,
    g
  ].filter(Vi).join(`
`), _.length > 0 && (_ += `
`)) : (p = [
    Qa(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Vi).join(`
`), _ = [
    m,
    Qa(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + f : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? be.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? ad("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    be.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    sd("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Vi).join(`
`)), a = Os(a), a = $a(a, t), a = Ka(a, t), s = Os(s), s = $a(s, t), s = Ka(s, t), a = Ja(a), s = Ja(s), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, _ = [
    "#define varying in",
    t.glslVersion === Sa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Sa ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + _);
  const v = y + p + a, M = y + _ + s, b = ja(i, 35633, v), A = ja(i, 35632, M);
  if (i.attachShader(h, b), i.attachShader(h, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(h, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(h, 0, "position"), i.linkProgram(h), o.debug.checkShaderErrors) {
    const S = i.getProgramInfoLog(h).trim(), R = i.getShaderInfoLog(b).trim(), G = i.getShaderInfoLog(A).trim();
    let z = !0, P = !0;
    if (i.getProgramParameter(h, 35714) === !1) {
      z = !1;
      const D = Za(i, b, "vertex"), B = Za(i, A, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, 35715) + `

Program Info Log: ` + S + `
` + D + `
` + B
      );
    } else
      S !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", S) : (R === "" || G === "") && (P = !1);
    P && (this.diagnostics = {
      runnable: z,
      programLog: S,
      vertexShader: {
        log: R,
        prefix: p
      },
      fragmentShader: {
        log: G,
        prefix: _
      }
    });
  }
  i.deleteShader(b), i.deleteShader(A);
  let C;
  this.getUniforms = function() {
    return C === void 0 && (C = new Pr(i, h)), C;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = cd(i, h)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
  }, this.name = t.shaderName, this.id = nd++, this.cacheKey = e, this.usedTimes = 1, this.program = h, this.vertexShader = b, this.fragmentShader = A, this;
}
let Md = 0;
class yd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Sd(e), t.set(e, n)), n;
  }
}
class Sd {
  constructor(e) {
    this.id = Md++, this.code = e, this.usedTimes = 0;
  }
}
function bd(o, e, t, n, i, r, a) {
  const s = new Eo(), c = new yd(), l = [], u = i.isWebGL2, f = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function h(x, S, R, G, z) {
    const P = G.fog, D = z.geometry, B = x.isMeshStandardMaterial ? G.environment : null, q = (x.isMeshStandardMaterial ? t : e).get(x.envMap || B), Z = q && q.mapping === 306 ? q.image.height : null, k = g[x.type];
    x.precision !== null && (m = i.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const K = D.morphAttributes.position || D.morphAttributes.normal || D.morphAttributes.color, $ = K !== void 0 ? K.length : 0;
    let le = 0;
    D.morphAttributes.position !== void 0 && (le = 1), D.morphAttributes.normal !== void 0 && (le = 2), D.morphAttributes.color !== void 0 && (le = 3);
    let F, Y, J, ee;
    if (k) {
      const Ne = Qt[k];
      F = Ne.vertexShader, Y = Ne.fragmentShader;
    } else
      F = x.vertexShader, Y = x.fragmentShader, c.update(x), J = c.getVertexShaderID(x), ee = c.getFragmentShaderID(x);
    const O = o.getRenderTarget(), ye = x.alphaTest > 0, he = x.clearcoat > 0, fe = x.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: k,
      shaderName: x.type,
      vertexShader: F,
      fragmentShader: Y,
      defines: x.defines,
      customVertexShaderID: J,
      customFragmentShaderID: ee,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: z.isInstancedMesh === !0,
      instancingColor: z.isInstancedMesh === !0 && z.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: O === null ? o.outputEncoding : O.isXRRenderTarget === !0 ? O.texture.encoding : 3e3,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!q,
      envMapMode: q && q.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === 1,
      tangentSpaceNormalMap: x.normalMapType === 0,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === 3001,
      clearcoat: he,
      clearcoatMap: he && !!x.clearcoatMap,
      clearcoatRoughnessMap: he && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: he && !!x.clearcoatNormalMap,
      iridescence: fe,
      iridescenceMap: fe && !!x.iridescenceMap,
      iridescenceThicknessMap: fe && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === 1,
      alphaMap: !!x.alphaMap,
      alphaTest: ye,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!D.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!D.attributes.color && D.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(x.map || x.bumpMap || x.normalMap || x.specularMap || x.alphaMap || x.emissiveMap || x.roughnessMap || x.metalnessMap || x.clearcoatNormalMap || x.iridescenceMap || x.iridescenceThicknessMap || x.transmission > 0 || x.transmissionMap || x.thicknessMap || x.specularIntensityMap || x.specularColorMap || x.sheen > 0 || x.sheenColorMap || x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!P,
      useFog: x.fog === !0,
      fogExp2: P && P.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: f,
      skinning: z.isSkinnedMesh === !0,
      morphTargets: D.morphAttributes.position !== void 0,
      morphNormals: D.morphAttributes.normal !== void 0,
      morphColors: D.morphAttributes.color !== void 0,
      morphTargetsCount: $,
      morphTextureStride: le,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: o.shadowMap.enabled && R.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: x.toneMapped ? o.toneMapping : 0,
      physicallyCorrectLights: o.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === 2,
      flipSided: x.side === 1,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function p(x) {
    const S = [];
    if (x.shaderID ? S.push(x.shaderID) : (S.push(x.customVertexShaderID), S.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const R in x.defines)
        S.push(R), S.push(x.defines[R]);
    return x.isRawShaderMaterial === !1 && (_(S, x), y(S, x), S.push(o.outputEncoding)), S.push(x.customProgramCacheKey), S.join();
  }
  function _(x, S) {
    x.push(S.precision), x.push(S.outputEncoding), x.push(S.envMapMode), x.push(S.envMapCubeUVHeight), x.push(S.combine), x.push(S.vertexUvs), x.push(S.fogExp2), x.push(S.sizeAttenuation), x.push(S.morphTargetsCount), x.push(S.morphAttributeCount), x.push(S.numDirLights), x.push(S.numPointLights), x.push(S.numSpotLights), x.push(S.numSpotLightMaps), x.push(S.numHemiLights), x.push(S.numRectAreaLights), x.push(S.numDirLightShadows), x.push(S.numPointLightShadows), x.push(S.numSpotLightShadows), x.push(S.numSpotLightShadowsWithMaps), x.push(S.shadowMapType), x.push(S.toneMapping), x.push(S.numClippingPlanes), x.push(S.numClipIntersection), x.push(S.depthPacking);
  }
  function y(x, S) {
    s.disableAll(), S.isWebGL2 && s.enable(0), S.supportsVertexTextures && s.enable(1), S.instancing && s.enable(2), S.instancingColor && s.enable(3), S.map && s.enable(4), S.matcap && s.enable(5), S.envMap && s.enable(6), S.lightMap && s.enable(7), S.aoMap && s.enable(8), S.emissiveMap && s.enable(9), S.bumpMap && s.enable(10), S.normalMap && s.enable(11), S.objectSpaceNormalMap && s.enable(12), S.tangentSpaceNormalMap && s.enable(13), S.clearcoat && s.enable(14), S.clearcoatMap && s.enable(15), S.clearcoatRoughnessMap && s.enable(16), S.clearcoatNormalMap && s.enable(17), S.iridescence && s.enable(18), S.iridescenceMap && s.enable(19), S.iridescenceThicknessMap && s.enable(20), S.displacementMap && s.enable(21), S.specularMap && s.enable(22), S.roughnessMap && s.enable(23), S.metalnessMap && s.enable(24), S.gradientMap && s.enable(25), S.alphaMap && s.enable(26), S.alphaTest && s.enable(27), S.vertexColors && s.enable(28), S.vertexAlphas && s.enable(29), S.vertexUvs && s.enable(30), S.vertexTangents && s.enable(31), S.uvsVertexOnly && s.enable(32), x.push(s.mask), s.disableAll(), S.fog && s.enable(0), S.useFog && s.enable(1), S.flatShading && s.enable(2), S.logarithmicDepthBuffer && s.enable(3), S.skinning && s.enable(4), S.morphTargets && s.enable(5), S.morphNormals && s.enable(6), S.morphColors && s.enable(7), S.premultipliedAlpha && s.enable(8), S.shadowMapEnabled && s.enable(9), S.physicallyCorrectLights && s.enable(10), S.doubleSided && s.enable(11), S.flipSided && s.enable(12), S.useDepthPacking && s.enable(13), S.dithering && s.enable(14), S.specularIntensityMap && s.enable(15), S.specularColorMap && s.enable(16), S.transmission && s.enable(17), S.transmissionMap && s.enable(18), S.thicknessMap && s.enable(19), S.sheen && s.enable(20), S.sheenColorMap && s.enable(21), S.sheenRoughnessMap && s.enable(22), S.decodeVideoTexture && s.enable(23), S.opaque && s.enable(24), x.push(s.mask);
  }
  function v(x) {
    const S = g[x.type];
    let R;
    if (S) {
      const G = Qt[S];
      R = lc.clone(G.uniforms);
    } else
      R = x.uniforms;
    return R;
  }
  function M(x, S) {
    let R;
    for (let G = 0, z = l.length; G < z; G++) {
      const P = l[G];
      if (P.cacheKey === S) {
        R = P, ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && (R = new vd(o, S, x, r), l.push(R)), R;
  }
  function b(x) {
    if (--x.usedTimes === 0) {
      const S = l.indexOf(x);
      l[S] = l[l.length - 1], l.pop(), x.destroy();
    }
  }
  function A(x) {
    c.remove(x);
  }
  function C() {
    c.dispose();
  }
  return {
    getParameters: h,
    getProgramCacheKey: p,
    getUniforms: v,
    acquireProgram: M,
    releaseProgram: b,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: C
  };
}
function wd() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let a = o.get(r);
    return a === void 0 && (a = {}, o.set(r, a)), a;
  }
  function t(r) {
    o.delete(r);
  }
  function n(r, a, s) {
    o.get(r)[a] = s;
  }
  function i() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Td(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id;
}
function eo(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id;
}
function to() {
  const o = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(f, d, m, g, h, p) {
    let _ = o[e];
    return _ === void 0 ? (_ = {
      id: f.id,
      object: f,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: f.renderOrder,
      z: h,
      group: p
    }, o[e] = _) : (_.id = f.id, _.object = f, _.geometry = d, _.material = m, _.groupOrder = g, _.renderOrder = f.renderOrder, _.z = h, _.group = p), e++, _;
  }
  function s(f, d, m, g, h, p) {
    const _ = a(f, d, m, g, h, p);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function c(f, d, m, g, h, p) {
    const _ = a(f, d, m, g, h, p);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function l(f, d) {
    t.length > 1 && t.sort(f || Td), n.length > 1 && n.sort(d || eo), i.length > 1 && i.sort(d || eo);
  }
  function u() {
    for (let f = e, d = o.length; f < d; f++) {
      const m = o[f];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: s,
    unshift: c,
    finish: u,
    sort: l
  };
}
function Ed() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = o.get(n);
    let a;
    return r === void 0 ? (a = new to(), o.set(n, [a])) : i >= r.length ? (a = new to(), r.push(a)) : a = r[i], a;
  }
  function t() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Ad() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new U(),
            color: new Ve()
          };
          break;
        case "SpotLight":
          t = {
            position: new U(),
            direction: new U(),
            color: new Ve(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new U(),
            color: new Ve(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new U(),
            skyColor: new Ve(),
            groundColor: new Ve()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ve(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U()
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
function Cd() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
let Rd = 0;
function Ld(o, e) {
  return (e.castShadow ? 2 : 0) - (o.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (o.map ? 1 : 0);
}
function Dd(o, e) {
  const t = new Ad(), n = Cd(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    i.probe.push(new U());
  const r = new U(), a = new ot(), s = new ot();
  function c(u, f) {
    let d = 0, m = 0, g = 0;
    for (let G = 0; G < 9; G++)
      i.probe[G].set(0, 0, 0);
    let h = 0, p = 0, _ = 0, y = 0, v = 0, M = 0, b = 0, A = 0, C = 0, x = 0;
    u.sort(Ld);
    const S = f !== !0 ? Math.PI : 1;
    for (let G = 0, z = u.length; G < z; G++) {
      const P = u[G], D = P.color, B = P.intensity, q = P.distance, Z = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        d += D.r * B * S, m += D.g * B * S, g += D.b * B * S;
      else if (P.isLightProbe)
        for (let k = 0; k < 9; k++)
          i.probe[k].addScaledVector(P.sh.coefficients[k], B);
      else if (P.isDirectionalLight) {
        const k = t.get(P);
        if (k.color.copy(P.color).multiplyScalar(P.intensity * S), P.castShadow) {
          const K = P.shadow, $ = n.get(P);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, i.directionalShadow[h] = $, i.directionalShadowMap[h] = Z, i.directionalShadowMatrix[h] = P.shadow.matrix, M++;
        }
        i.directional[h] = k, h++;
      } else if (P.isSpotLight) {
        const k = t.get(P);
        k.position.setFromMatrixPosition(P.matrixWorld), k.color.copy(D).multiplyScalar(B * S), k.distance = q, k.coneCos = Math.cos(P.angle), k.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), k.decay = P.decay, i.spot[_] = k;
        const K = P.shadow;
        if (P.map && (i.spotLightMap[C] = P.map, C++, K.updateMatrices(P), P.castShadow && x++), i.spotLightMatrix[_] = K.matrix, P.castShadow) {
          const $ = n.get(P);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, i.spotShadow[_] = $, i.spotShadowMap[_] = Z, A++;
        }
        _++;
      } else if (P.isRectAreaLight) {
        const k = t.get(P);
        k.color.copy(D).multiplyScalar(B), k.halfWidth.set(P.width * 0.5, 0, 0), k.halfHeight.set(0, P.height * 0.5, 0), i.rectArea[y] = k, y++;
      } else if (P.isPointLight) {
        const k = t.get(P);
        if (k.color.copy(P.color).multiplyScalar(P.intensity * S), k.distance = P.distance, k.decay = P.decay, P.castShadow) {
          const K = P.shadow, $ = n.get(P);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, $.shadowCameraNear = K.camera.near, $.shadowCameraFar = K.camera.far, i.pointShadow[p] = $, i.pointShadowMap[p] = Z, i.pointShadowMatrix[p] = P.shadow.matrix, b++;
        }
        i.point[p] = k, p++;
      } else if (P.isHemisphereLight) {
        const k = t.get(P);
        k.skyColor.copy(P.color).multiplyScalar(B * S), k.groundColor.copy(P.groundColor).multiplyScalar(B * S), i.hemi[v] = k, v++;
      }
    }
    y > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const R = i.hash;
    (R.directionalLength !== h || R.pointLength !== p || R.spotLength !== _ || R.rectAreaLength !== y || R.hemiLength !== v || R.numDirectionalShadows !== M || R.numPointShadows !== b || R.numSpotShadows !== A || R.numSpotMaps !== C) && (i.directional.length = h, i.spot.length = _, i.rectArea.length = y, i.point.length = p, i.hemi.length = v, i.directionalShadow.length = M, i.directionalShadowMap.length = M, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = A, i.spotShadowMap.length = A, i.directionalShadowMatrix.length = M, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = A + C - x, i.spotLightMap.length = C, i.numSpotLightShadowsWithMaps = x, R.directionalLength = h, R.pointLength = p, R.spotLength = _, R.rectAreaLength = y, R.hemiLength = v, R.numDirectionalShadows = M, R.numPointShadows = b, R.numSpotShadows = A, R.numSpotMaps = C, i.version = Rd++);
  }
  function l(u, f) {
    let d = 0, m = 0, g = 0, h = 0, p = 0;
    const _ = f.matrixWorldInverse;
    for (let y = 0, v = u.length; y < v; y++) {
      const M = u[y];
      if (M.isDirectionalLight) {
        const b = i.directional[d];
        b.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(_), d++;
      } else if (M.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(M.matrixWorld), b.position.applyMatrix4(_), b.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(_), g++;
      } else if (M.isRectAreaLight) {
        const b = i.rectArea[h];
        b.position.setFromMatrixPosition(M.matrixWorld), b.position.applyMatrix4(_), s.identity(), a.copy(M.matrixWorld), a.premultiply(_), s.extractRotation(a), b.halfWidth.set(M.width * 0.5, 0, 0), b.halfHeight.set(0, M.height * 0.5, 0), b.halfWidth.applyMatrix4(s), b.halfHeight.applyMatrix4(s), h++;
      } else if (M.isPointLight) {
        const b = i.point[m];
        b.position.setFromMatrixPosition(M.matrixWorld), b.position.applyMatrix4(_), m++;
      } else if (M.isHemisphereLight) {
        const b = i.hemi[p];
        b.direction.setFromMatrixPosition(M.matrixWorld), b.direction.transformDirection(_), p++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function no(o, e) {
  const t = new Dd(o, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function a(f) {
    n.push(f);
  }
  function s(f) {
    i.push(f);
  }
  function c(f) {
    t.setup(n, f);
  }
  function l(f) {
    t.setupView(n, f);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: s
  };
}
function Pd(o, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, a = 0) {
    const s = t.get(r);
    let c;
    return s === void 0 ? (c = new no(o, e), t.set(r, [c])) : a >= s.length ? (c = new no(o, e), s.push(c)) : c = s[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Fd extends Hr {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Id extends Hr {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new U(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Nd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Od = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ud(o, e, t) {
  let n = new Fo();
  const i = new Ue(), r = new Ue(), a = new Je(), s = new Fd({ depthPacking: 3201 }), c = new Id(), l = {}, u = t.maxTextureSize, f = { 0: 1, 1: 0, 2: 2 }, d = new Rn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ue() },
      radius: { value: 4 }
    },
    vertexShader: Nd,
    fragmentShader: Od
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new ni();
  g.setAttribute(
    "position",
    new nn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const h = new _n(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(M, b, A) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || M.length === 0)
      return;
    const C = o.getRenderTarget(), x = o.getActiveCubeFace(), S = o.getActiveMipmapLevel(), R = o.state;
    R.setBlending(0), R.buffers.color.setClear(1, 1, 1, 1), R.buffers.depth.setTest(!0), R.setScissorTest(!1);
    for (let G = 0, z = M.length; G < z; G++) {
      const P = M[G], D = P.shadow;
      if (D === void 0) {
        console.warn("THREE.WebGLShadowMap:", P, "has no shadow.");
        continue;
      }
      if (D.autoUpdate === !1 && D.needsUpdate === !1)
        continue;
      i.copy(D.mapSize);
      const B = D.getFrameExtents();
      if (i.multiply(B), r.copy(D.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / B.x), i.x = r.x * B.x, D.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / B.y), i.y = r.y * B.y, D.mapSize.y = r.y)), D.map === null) {
        const Z = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        D.map = new Qn(i.x, i.y, Z), D.map.texture.name = P.name + ".shadowMap", D.camera.updateProjectionMatrix();
      }
      o.setRenderTarget(D.map), o.clear();
      const q = D.getViewportCount();
      for (let Z = 0; Z < q; Z++) {
        const k = D.getViewport(Z);
        a.set(
          r.x * k.x,
          r.y * k.y,
          r.x * k.z,
          r.y * k.w
        ), R.viewport(a), D.updateMatrices(P, Z), n = D.getFrustum(), v(b, A, D.camera, P, this.type);
      }
      D.isPointLightShadow !== !0 && this.type === 3 && _(D, A), D.needsUpdate = !1;
    }
    p.needsUpdate = !1, o.setRenderTarget(C, x, S);
  };
  function _(M, b) {
    const A = e.update(h);
    d.defines.VSM_SAMPLES !== M.blurSamples && (d.defines.VSM_SAMPLES = M.blurSamples, m.defines.VSM_SAMPLES = M.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), M.mapPass === null && (M.mapPass = new Qn(i.x, i.y)), d.uniforms.shadow_pass.value = M.map.texture, d.uniforms.resolution.value = M.mapSize, d.uniforms.radius.value = M.radius, o.setRenderTarget(M.mapPass), o.clear(), o.renderBufferDirect(b, null, A, d, h, null), m.uniforms.shadow_pass.value = M.mapPass.texture, m.uniforms.resolution.value = M.mapSize, m.uniforms.radius.value = M.radius, o.setRenderTarget(M.map), o.clear(), o.renderBufferDirect(b, null, A, m, h, null);
  }
  function y(M, b, A, C, x, S) {
    let R = null;
    const G = A.isPointLight === !0 ? M.customDistanceMaterial : M.customDepthMaterial;
    if (G !== void 0)
      R = G;
    else if (R = A.isPointLight === !0 ? c : s, o.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
      const z = R.uuid, P = b.uuid;
      let D = l[z];
      D === void 0 && (D = {}, l[z] = D);
      let B = D[P];
      B === void 0 && (B = R.clone(), D[P] = B), R = B;
    }
    return R.visible = b.visible, R.wireframe = b.wireframe, S === 3 ? R.side = b.shadowSide !== null ? b.shadowSide : b.side : R.side = b.shadowSide !== null ? b.shadowSide : f[b.side], R.alphaMap = b.alphaMap, R.alphaTest = b.alphaTest, R.map = b.map, R.clipShadows = b.clipShadows, R.clippingPlanes = b.clippingPlanes, R.clipIntersection = b.clipIntersection, R.displacementMap = b.displacementMap, R.displacementScale = b.displacementScale, R.displacementBias = b.displacementBias, R.wireframeLinewidth = b.wireframeLinewidth, R.linewidth = b.linewidth, A.isPointLight === !0 && R.isMeshDistanceMaterial === !0 && (R.referencePosition.setFromMatrixPosition(A.matrixWorld), R.nearDistance = C, R.farDistance = x), R;
  }
  function v(M, b, A, C, x) {
    if (M.visible === !1)
      return;
    if (M.layers.test(b.layers) && (M.isMesh || M.isLine || M.isPoints) && (M.castShadow || M.receiveShadow && x === 3) && (!M.frustumCulled || n.intersectsObject(M))) {
      M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, M.matrixWorld);
      const G = e.update(M), z = M.material;
      if (Array.isArray(z)) {
        const P = G.groups;
        for (let D = 0, B = P.length; D < B; D++) {
          const q = P[D], Z = z[q.materialIndex];
          if (Z && Z.visible) {
            const k = y(M, Z, C, A.near, A.far, x);
            o.renderBufferDirect(A, null, G, k, M, q);
          }
        }
      } else if (z.visible) {
        const P = y(M, z, C, A.near, A.far, x);
        o.renderBufferDirect(A, null, G, P, M, null);
      }
    }
    const R = M.children;
    for (let G = 0, z = R.length; G < z; G++)
      v(R[G], b, A, C, x);
  }
}
function Bd(o, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const V = new Je();
    let Q = null;
    const ae = new Je(0, 0, 0, 0);
    return {
      setMask: function(ue) {
        Q !== ue && !L && (o.colorMask(ue, ue, ue, ue), Q = ue);
      },
      setLocked: function(ue) {
        L = ue;
      },
      setClear: function(ue, Pe, nt, ct, Fn) {
        Fn === !0 && (ue *= ct, Pe *= ct, nt *= ct), V.set(ue, Pe, nt, ct), ae.equals(V) === !1 && (o.clearColor(ue, Pe, nt, ct), ae.copy(V));
      },
      reset: function() {
        L = !1, Q = null, ae.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let L = !1, V = null, Q = null, ae = null;
    return {
      setTest: function(ue) {
        ue ? ye(2929) : he(2929);
      },
      setMask: function(ue) {
        V !== ue && !L && (o.depthMask(ue), V = ue);
      },
      setFunc: function(ue) {
        if (Q !== ue) {
          switch (ue) {
            case 0:
              o.depthFunc(512);
              break;
            case 1:
              o.depthFunc(519);
              break;
            case 2:
              o.depthFunc(513);
              break;
            case 3:
              o.depthFunc(515);
              break;
            case 4:
              o.depthFunc(514);
              break;
            case 5:
              o.depthFunc(518);
              break;
            case 6:
              o.depthFunc(516);
              break;
            case 7:
              o.depthFunc(517);
              break;
            default:
              o.depthFunc(515);
          }
          Q = ue;
        }
      },
      setLocked: function(ue) {
        L = ue;
      },
      setClear: function(ue) {
        ae !== ue && (o.clearDepth(ue), ae = ue);
      },
      reset: function() {
        L = !1, V = null, Q = null, ae = null;
      }
    };
  }
  function a() {
    let L = !1, V = null, Q = null, ae = null, ue = null, Pe = null, nt = null, ct = null, Fn = null;
    return {
      setTest: function(ze) {
        L || (ze ? ye(2960) : he(2960));
      },
      setMask: function(ze) {
        V !== ze && !L && (o.stencilMask(ze), V = ze);
      },
      setFunc: function(ze, on, Gt) {
        (Q !== ze || ae !== on || ue !== Gt) && (o.stencilFunc(ze, on, Gt), Q = ze, ae = on, ue = Gt);
      },
      setOp: function(ze, on, Gt) {
        (Pe !== ze || nt !== on || ct !== Gt) && (o.stencilOp(ze, on, Gt), Pe = ze, nt = on, ct = Gt);
      },
      setLocked: function(ze) {
        L = ze;
      },
      setClear: function(ze) {
        Fn !== ze && (o.clearStencil(ze), Fn = ze);
      },
      reset: function() {
        L = !1, V = null, Q = null, ae = null, ue = null, Pe = null, nt = null, ct = null, Fn = null;
      }
    };
  }
  const s = new i(), c = new r(), l = new a(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), h = [], p = null, _ = !1, y = null, v = null, M = null, b = null, A = null, C = null, x = null, S = !1, R = null, G = null, z = null, P = null, D = null;
  const B = o.getParameter(35661);
  let q = !1, Z = 0;
  const k = o.getParameter(7938);
  k.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(k)[1]), q = Z >= 1) : k.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), q = Z >= 2);
  let K = null, $ = {};
  const le = o.getParameter(3088), F = o.getParameter(2978), Y = new Je().fromArray(le), J = new Je().fromArray(F);
  function ee(L, V, Q) {
    const ae = new Uint8Array(4), ue = o.createTexture();
    o.bindTexture(L, ue), o.texParameteri(L, 10241, 9728), o.texParameteri(L, 10240, 9728);
    for (let Pe = 0; Pe < Q; Pe++)
      o.texImage2D(V + Pe, 0, 6408, 1, 1, 0, 6408, 5121, ae);
    return ue;
  }
  const O = {};
  O[3553] = ee(3553, 3553, 1), O[34067] = ee(34067, 34069, 6), s.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), ye(2929), c.setFunc(3), lt(!1), zt(1), ye(2884), pt(0);
  function ye(L) {
    d[L] !== !0 && (o.enable(L), d[L] = !0);
  }
  function he(L) {
    d[L] !== !1 && (o.disable(L), d[L] = !1);
  }
  function fe(L, V) {
    return m[L] !== V ? (o.bindFramebuffer(L, V), m[L] = V, n && (L === 36009 && (m[36160] = V), L === 36160 && (m[36009] = V)), !0) : !1;
  }
  function oe(L, V) {
    let Q = h, ae = !1;
    if (L)
      if (Q = g.get(V), Q === void 0 && (Q = [], g.set(V, Q)), L.isWebGLMultipleRenderTargets) {
        const ue = L.texture;
        if (Q.length !== ue.length || Q[0] !== 36064) {
          for (let Pe = 0, nt = ue.length; Pe < nt; Pe++)
            Q[Pe] = 36064 + Pe;
          Q.length = ue.length, ae = !0;
        }
      } else
        Q[0] !== 36064 && (Q[0] = 36064, ae = !0);
    else
      Q[0] !== 1029 && (Q[0] = 1029, ae = !0);
    ae && (t.isWebGL2 ? o.drawBuffers(Q) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q));
  }
  function Ne(L) {
    return p !== L ? (o.useProgram(L), p = L, !0) : !1;
  }
  const Se = {
    100: 32774,
    101: 32778,
    102: 32779
  };
  if (n)
    Se[103] = 32775, Se[104] = 32776;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (Se[103] = L.MIN_EXT, Se[104] = L.MAX_EXT);
  }
  const xe = {
    200: 0,
    201: 1,
    202: 768,
    204: 770,
    210: 776,
    208: 774,
    206: 772,
    203: 769,
    205: 771,
    209: 775,
    207: 773
  };
  function pt(L, V, Q, ae, ue, Pe, nt, ct) {
    if (L === 0) {
      _ === !0 && (he(3042), _ = !1);
      return;
    }
    if (_ === !1 && (ye(3042), _ = !0), L !== 5) {
      if (L !== y || ct !== S) {
        if ((v !== 100 || A !== 100) && (o.blendEquation(32774), v = 100, A = 100), ct)
          switch (L) {
            case 1:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              o.blendFunc(1, 1);
              break;
            case 3:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case 1:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              o.blendFunc(770, 1);
              break;
            case 3:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        M = null, b = null, C = null, x = null, y = L, S = ct;
      }
      return;
    }
    ue = ue || V, Pe = Pe || Q, nt = nt || ae, (V !== v || ue !== A) && (o.blendEquationSeparate(Se[V], Se[ue]), v = V, A = ue), (Q !== M || ae !== b || Pe !== C || nt !== x) && (o.blendFuncSeparate(xe[Q], xe[ae], xe[Pe], xe[nt]), M = Q, b = ae, C = Pe, x = nt), y = L, S = !1;
  }
  function Bt(L, V) {
    L.side === 2 ? he(2884) : ye(2884);
    let Q = L.side === 1;
    V && (Q = !Q), lt(Q), L.blending === 1 && L.transparent === !1 ? pt(0) : pt(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), s.setMask(L.colorWrite);
    const ae = L.stencilWrite;
    l.setTest(ae), ae && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Fe(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ye(32926) : he(32926);
  }
  function lt(L) {
    R !== L && (L ? o.frontFace(2304) : o.frontFace(2305), R = L);
  }
  function zt(L) {
    L !== 0 ? (ye(2884), L !== G && (L === 1 ? o.cullFace(1029) : L === 2 ? o.cullFace(1028) : o.cullFace(1032))) : he(2884), G = L;
  }
  function $e(L) {
    L !== z && (q && o.lineWidth(L), z = L);
  }
  function Fe(L, V, Q) {
    L ? (ye(32823), (P !== V || D !== Q) && (o.polygonOffset(V, Q), P = V, D = Q)) : he(32823);
  }
  function an(L) {
    L ? ye(3089) : he(3089);
  }
  function Xt(L) {
    L === void 0 && (L = 33984 + B - 1), K !== L && (o.activeTexture(L), K = L);
  }
  function E(L, V, Q) {
    Q === void 0 && (K === null ? Q = 33984 + B - 1 : Q = K);
    let ae = $[Q];
    ae === void 0 && (ae = { type: void 0, texture: void 0 }, $[Q] = ae), (ae.type !== L || ae.texture !== V) && (K !== Q && (o.activeTexture(Q), K = Q), o.bindTexture(L, V || O[L]), ae.type = L, ae.texture = V);
  }
  function w() {
    const L = $[K];
    L !== void 0 && L.type !== void 0 && (o.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function H() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function te() {
    try {
      o.compressedTexImage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ve() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function se() {
    try {
      o.compressedTexSubImage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function j() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function me() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function _e() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ce() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ge(L) {
    Y.equals(L) === !1 && (o.scissor(L.x, L.y, L.z, L.w), Y.copy(L));
  }
  function de(L) {
    J.equals(L) === !1 && (o.viewport(L.x, L.y, L.z, L.w), J.copy(L));
  }
  function Le(L, V) {
    let Q = f.get(V);
    Q === void 0 && (Q = /* @__PURE__ */ new WeakMap(), f.set(V, Q));
    let ae = Q.get(L);
    ae === void 0 && (ae = o.getUniformBlockIndex(V, L.name), Q.set(L, ae));
  }
  function Be(L, V) {
    const ae = f.get(V).get(L);
    u.get(V) !== ae && (o.uniformBlockBinding(V, ae, L.__bindingPointIndex), u.set(V, ae));
  }
  function tt() {
    o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(!0, !0, !0, !0), o.clearColor(0, 0, 0, 0), o.depthMask(!0), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === !0 && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), d = {}, K = null, $ = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), h = [], p = null, _ = !1, y = null, v = null, M = null, b = null, A = null, C = null, x = null, S = !1, R = null, G = null, z = null, P = null, D = null, Y.set(0, 0, o.canvas.width, o.canvas.height), J.set(0, 0, o.canvas.width, o.canvas.height), s.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: s,
      depth: c,
      stencil: l
    },
    enable: ye,
    disable: he,
    bindFramebuffer: fe,
    drawBuffers: oe,
    useProgram: Ne,
    setBlending: pt,
    setMaterial: Bt,
    setFlipSided: lt,
    setCullFace: zt,
    setLineWidth: $e,
    setPolygonOffset: Fe,
    setScissorTest: an,
    activeTexture: Xt,
    bindTexture: E,
    unbindTexture: w,
    compressedTexImage2D: H,
    compressedTexImage3D: te,
    texImage2D: _e,
    texImage3D: ce,
    updateUBOMapping: Le,
    uniformBlockBinding: Be,
    texStorage2D: j,
    texStorage3D: me,
    texSubImage2D: ne,
    texSubImage3D: re,
    compressedTexSubImage2D: ve,
    compressedTexSubImage3D: se,
    scissor: ge,
    viewport: de,
    reset: tt
  };
}
function zd(o, e, t, n, i, r, a) {
  const s = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, f = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let h;
  const p = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(E, w) {
    return _ ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, w)
    ) : Zi("canvas");
  }
  function v(E, w, H, te) {
    let ne = 1;
    if ((E.width > te || E.height > te) && (ne = te / Math.max(E.width, E.height)), ne < 1 || w === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const re = w ? Ns : Math.floor, ve = re(ne * E.width), se = re(ne * E.height);
        h === void 0 && (h = y(ve, se));
        const j = H ? y(ve, se) : h;
        return j.width = ve, j.height = se, j.getContext("2d").drawImage(E, 0, 0, ve, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + ve + "x" + se + ")."), j;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function M(E) {
    return wa(E.width) && wa(E.height);
  }
  function b(E) {
    return s ? !1 : E.wrapS !== 1001 || E.wrapT !== 1001 || E.minFilter !== 1003 && E.minFilter !== 1006;
  }
  function A(E, w) {
    return E.generateMipmaps && w && E.minFilter !== 1003 && E.minFilter !== 1006;
  }
  function C(E) {
    o.generateMipmap(E);
  }
  function x(E, w, H, te, ne = !1) {
    if (s === !1)
      return w;
    if (E !== null) {
      if (o[E] !== void 0)
        return o[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let re = w;
    return w === 6403 && (H === 5126 && (re = 33326), H === 5131 && (re = 33325), H === 5121 && (re = 33321)), w === 33319 && (H === 5126 && (re = 33328), H === 5131 && (re = 33327), H === 5121 && (re = 33323)), w === 6408 && (H === 5126 && (re = 34836), H === 5131 && (re = 34842), H === 5121 && (re = te === 3001 && ne === !1 ? 35907 : 32856), H === 32819 && (re = 32854), H === 32820 && (re = 32855)), (re === 33325 || re === 33326 || re === 33327 || re === 33328 || re === 34842 || re === 34836) && e.get("EXT_color_buffer_float"), re;
  }
  function S(E, w, H) {
    return A(E, H) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(w.width, w.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? w.mipmaps.length : 1;
  }
  function R(E) {
    return E === 1003 || E === 1004 || E === 1005 ? 9728 : 9729;
  }
  function G(E) {
    const w = E.target;
    w.removeEventListener("dispose", G), P(w), w.isVideoTexture && g.delete(w);
  }
  function z(E) {
    const w = E.target;
    w.removeEventListener("dispose", z), B(w);
  }
  function P(E) {
    const w = n.get(E);
    if (w.__webglInit === void 0)
      return;
    const H = E.source, te = p.get(H);
    if (te) {
      const ne = te[w.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && D(E), Object.keys(te).length === 0 && p.delete(H);
    }
    n.remove(E);
  }
  function D(E) {
    const w = n.get(E);
    o.deleteTexture(w.__webglTexture);
    const H = E.source, te = p.get(H);
    delete te[w.__cacheKey], a.memory.textures--;
  }
  function B(E) {
    const w = E.texture, H = n.get(E), te = n.get(w);
    if (te.__webglTexture !== void 0 && (o.deleteTexture(te.__webglTexture), a.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        o.deleteFramebuffer(H.__webglFramebuffer[ne]), H.__webglDepthbuffer && o.deleteRenderbuffer(H.__webglDepthbuffer[ne]);
    else {
      if (o.deleteFramebuffer(H.__webglFramebuffer), H.__webglDepthbuffer && o.deleteRenderbuffer(H.__webglDepthbuffer), H.__webglMultisampledFramebuffer && o.deleteFramebuffer(H.__webglMultisampledFramebuffer), H.__webglColorRenderbuffer)
        for (let ne = 0; ne < H.__webglColorRenderbuffer.length; ne++)
          H.__webglColorRenderbuffer[ne] && o.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);
      H.__webglDepthRenderbuffer && o.deleteRenderbuffer(H.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let ne = 0, re = w.length; ne < re; ne++) {
        const ve = n.get(w[ne]);
        ve.__webglTexture && (o.deleteTexture(ve.__webglTexture), a.memory.textures--), n.remove(w[ne]);
      }
    n.remove(w), n.remove(E);
  }
  let q = 0;
  function Z() {
    q = 0;
  }
  function k() {
    const E = q;
    return E >= c && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + c), q += 1, E;
  }
  function K(E) {
    const w = [];
    return w.push(E.wrapS), w.push(E.wrapT), w.push(E.wrapR || 0), w.push(E.magFilter), w.push(E.minFilter), w.push(E.anisotropy), w.push(E.internalFormat), w.push(E.format), w.push(E.type), w.push(E.generateMipmaps), w.push(E.premultiplyAlpha), w.push(E.flipY), w.push(E.unpackAlignment), w.push(E.encoding), w.join();
  }
  function $(E, w) {
    const H = n.get(E);
    if (E.isVideoTexture && an(E), E.isRenderTargetTexture === !1 && E.version > 0 && H.__version !== E.version) {
      const te = E.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        he(H, E, w);
        return;
      }
    }
    t.bindTexture(3553, H.__webglTexture, 33984 + w);
  }
  function le(E, w) {
    const H = n.get(E);
    if (E.version > 0 && H.__version !== E.version) {
      he(H, E, w);
      return;
    }
    t.bindTexture(35866, H.__webglTexture, 33984 + w);
  }
  function F(E, w) {
    const H = n.get(E);
    if (E.version > 0 && H.__version !== E.version) {
      he(H, E, w);
      return;
    }
    t.bindTexture(32879, H.__webglTexture, 33984 + w);
  }
  function Y(E, w) {
    const H = n.get(E);
    if (E.version > 0 && H.__version !== E.version) {
      fe(H, E, w);
      return;
    }
    t.bindTexture(34067, H.__webglTexture, 33984 + w);
  }
  const J = {
    1e3: 10497,
    1001: 33071,
    1002: 33648
  }, ee = {
    1003: 9728,
    1004: 9984,
    1005: 9986,
    1006: 9729,
    1007: 9985,
    1008: 9987
  };
  function O(E, w, H) {
    if (H ? (o.texParameteri(E, 10242, J[w.wrapS]), o.texParameteri(E, 10243, J[w.wrapT]), (E === 32879 || E === 35866) && o.texParameteri(E, 32882, J[w.wrapR]), o.texParameteri(E, 10240, ee[w.magFilter]), o.texParameteri(E, 10241, ee[w.minFilter])) : (o.texParameteri(E, 10242, 33071), o.texParameteri(E, 10243, 33071), (E === 32879 || E === 35866) && o.texParameteri(E, 32882, 33071), (w.wrapS !== 1001 || w.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(E, 10240, R(w.magFilter)), o.texParameteri(E, 10241, R(w.minFilter)), w.minFilter !== 1003 && w.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (w.magFilter === 1003 || w.minFilter !== 1005 && w.minFilter !== 1008 || w.type === 1015 && e.has("OES_texture_float_linear") === !1 || s === !1 && w.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (w.anisotropy > 1 || n.get(w).__currentAnisotropy) && (o.texParameterf(E, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(w.anisotropy, i.getMaxAnisotropy())), n.get(w).__currentAnisotropy = w.anisotropy);
    }
  }
  function ye(E, w) {
    let H = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, w.addEventListener("dispose", G));
    const te = w.source;
    let ne = p.get(te);
    ne === void 0 && (ne = {}, p.set(te, ne));
    const re = K(w);
    if (re !== E.__cacheKey) {
      ne[re] === void 0 && (ne[re] = {
        texture: o.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, H = !0), ne[re].usedTimes++;
      const ve = ne[E.__cacheKey];
      ve !== void 0 && (ne[E.__cacheKey].usedTimes--, ve.usedTimes === 0 && D(w)), E.__cacheKey = re, E.__webglTexture = ne[re].texture;
    }
    return H;
  }
  function he(E, w, H) {
    let te = 3553;
    (w.isDataArrayTexture || w.isCompressedArrayTexture) && (te = 35866), w.isData3DTexture && (te = 32879);
    const ne = ye(E, w), re = w.source;
    t.bindTexture(te, E.__webglTexture, 33984 + H);
    const ve = n.get(re);
    if (re.version !== ve.__version || ne === !0) {
      t.activeTexture(33984 + H), o.pixelStorei(37440, w.flipY), o.pixelStorei(37441, w.premultiplyAlpha), o.pixelStorei(3317, w.unpackAlignment), o.pixelStorei(37443, 0);
      const se = b(w) && M(w.image) === !1;
      let j = v(w.image, se, !1, u);
      j = Xt(w, j);
      const me = M(j) || s, _e = r.convert(w.format, w.encoding);
      let ce = r.convert(w.type), ge = x(w.internalFormat, _e, ce, w.encoding, w.isVideoTexture);
      O(te, w, me);
      let de;
      const Le = w.mipmaps, Be = s && w.isVideoTexture !== !0, tt = ve.__version === void 0 || ne === !0, L = S(w, j, me);
      if (w.isDepthTexture)
        ge = 6402, s ? w.type === 1015 ? ge = 36012 : w.type === 1014 ? ge = 33190 : w.type === 1020 ? ge = 35056 : ge = 33189 : w.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), w.format === 1026 && ge === 6402 && w.type !== 1012 && w.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), w.type = 1014, ce = r.convert(w.type)), w.format === 1027 && ge === 6402 && (ge = 34041, w.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), w.type = 1020, ce = r.convert(w.type))), tt && (Be ? t.texStorage2D(3553, 1, ge, j.width, j.height) : t.texImage2D(3553, 0, ge, j.width, j.height, 0, _e, ce, null));
      else if (w.isDataTexture)
        if (Le.length > 0 && me) {
          Be && tt && t.texStorage2D(3553, L, ge, Le[0].width, Le[0].height);
          for (let V = 0, Q = Le.length; V < Q; V++)
            de = Le[V], Be ? t.texSubImage2D(3553, V, 0, 0, de.width, de.height, _e, ce, de.data) : t.texImage2D(3553, V, ge, de.width, de.height, 0, _e, ce, de.data);
          w.generateMipmaps = !1;
        } else
          Be ? (tt && t.texStorage2D(3553, L, ge, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, j.width, j.height, _e, ce, j.data)) : t.texImage2D(3553, 0, ge, j.width, j.height, 0, _e, ce, j.data);
      else if (w.isCompressedTexture)
        if (w.isCompressedArrayTexture) {
          Be && tt && t.texStorage3D(35866, L, ge, Le[0].width, Le[0].height, j.depth);
          for (let V = 0, Q = Le.length; V < Q; V++)
            de = Le[V], w.format !== 1023 ? _e !== null ? Be ? t.compressedTexSubImage3D(35866, V, 0, 0, 0, de.width, de.height, j.depth, _e, de.data, 0, 0) : t.compressedTexImage3D(35866, V, ge, de.width, de.height, j.depth, 0, de.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? t.texSubImage3D(35866, V, 0, 0, 0, de.width, de.height, j.depth, _e, ce, de.data) : t.texImage3D(35866, V, ge, de.width, de.height, j.depth, 0, _e, ce, de.data);
        } else {
          Be && tt && t.texStorage2D(3553, L, ge, Le[0].width, Le[0].height);
          for (let V = 0, Q = Le.length; V < Q; V++)
            de = Le[V], w.format !== 1023 ? _e !== null ? Be ? t.compressedTexSubImage2D(3553, V, 0, 0, de.width, de.height, _e, de.data) : t.compressedTexImage2D(3553, V, ge, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? t.texSubImage2D(3553, V, 0, 0, de.width, de.height, _e, ce, de.data) : t.texImage2D(3553, V, ge, de.width, de.height, 0, _e, ce, de.data);
        }
      else if (w.isDataArrayTexture)
        Be ? (tt && t.texStorage3D(35866, L, ge, j.width, j.height, j.depth), t.texSubImage3D(35866, 0, 0, 0, 0, j.width, j.height, j.depth, _e, ce, j.data)) : t.texImage3D(35866, 0, ge, j.width, j.height, j.depth, 0, _e, ce, j.data);
      else if (w.isData3DTexture)
        Be ? (tt && t.texStorage3D(32879, L, ge, j.width, j.height, j.depth), t.texSubImage3D(32879, 0, 0, 0, 0, j.width, j.height, j.depth, _e, ce, j.data)) : t.texImage3D(32879, 0, ge, j.width, j.height, j.depth, 0, _e, ce, j.data);
      else if (w.isFramebufferTexture) {
        if (tt)
          if (Be)
            t.texStorage2D(3553, L, ge, j.width, j.height);
          else {
            let V = j.width, Q = j.height;
            for (let ae = 0; ae < L; ae++)
              t.texImage2D(3553, ae, ge, V, Q, 0, _e, ce, null), V >>= 1, Q >>= 1;
          }
      } else if (Le.length > 0 && me) {
        Be && tt && t.texStorage2D(3553, L, ge, Le[0].width, Le[0].height);
        for (let V = 0, Q = Le.length; V < Q; V++)
          de = Le[V], Be ? t.texSubImage2D(3553, V, 0, 0, _e, ce, de) : t.texImage2D(3553, V, ge, _e, ce, de);
        w.generateMipmaps = !1;
      } else
        Be ? (tt && t.texStorage2D(3553, L, ge, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, _e, ce, j)) : t.texImage2D(3553, 0, ge, _e, ce, j);
      A(w, me) && C(te), ve.__version = re.version, w.onUpdate && w.onUpdate(w);
    }
    E.__version = w.version;
  }
  function fe(E, w, H) {
    if (w.image.length !== 6)
      return;
    const te = ye(E, w), ne = w.source;
    t.bindTexture(34067, E.__webglTexture, 33984 + H);
    const re = n.get(ne);
    if (ne.version !== re.__version || te === !0) {
      t.activeTexture(33984 + H), o.pixelStorei(37440, w.flipY), o.pixelStorei(37441, w.premultiplyAlpha), o.pixelStorei(3317, w.unpackAlignment), o.pixelStorei(37443, 0);
      const ve = w.isCompressedTexture || w.image[0].isCompressedTexture, se = w.image[0] && w.image[0].isDataTexture, j = [];
      for (let V = 0; V < 6; V++)
        !ve && !se ? j[V] = v(w.image[V], !1, !0, l) : j[V] = se ? w.image[V].image : w.image[V], j[V] = Xt(w, j[V]);
      const me = j[0], _e = M(me) || s, ce = r.convert(w.format, w.encoding), ge = r.convert(w.type), de = x(w.internalFormat, ce, ge, w.encoding), Le = s && w.isVideoTexture !== !0, Be = re.__version === void 0 || te === !0;
      let tt = S(w, me, _e);
      O(34067, w, _e);
      let L;
      if (ve) {
        Le && Be && t.texStorage2D(34067, tt, de, me.width, me.height);
        for (let V = 0; V < 6; V++) {
          L = j[V].mipmaps;
          for (let Q = 0; Q < L.length; Q++) {
            const ae = L[Q];
            w.format !== 1023 ? ce !== null ? Le ? t.compressedTexSubImage2D(34069 + V, Q, 0, 0, ae.width, ae.height, ce, ae.data) : t.compressedTexImage2D(34069 + V, Q, de, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Le ? t.texSubImage2D(34069 + V, Q, 0, 0, ae.width, ae.height, ce, ge, ae.data) : t.texImage2D(34069 + V, Q, de, ae.width, ae.height, 0, ce, ge, ae.data);
          }
        }
      } else {
        L = w.mipmaps, Le && Be && (L.length > 0 && tt++, t.texStorage2D(34067, tt, de, j[0].width, j[0].height));
        for (let V = 0; V < 6; V++)
          if (se) {
            Le ? t.texSubImage2D(34069 + V, 0, 0, 0, j[V].width, j[V].height, ce, ge, j[V].data) : t.texImage2D(34069 + V, 0, de, j[V].width, j[V].height, 0, ce, ge, j[V].data);
            for (let Q = 0; Q < L.length; Q++) {
              const ue = L[Q].image[V].image;
              Le ? t.texSubImage2D(34069 + V, Q + 1, 0, 0, ue.width, ue.height, ce, ge, ue.data) : t.texImage2D(34069 + V, Q + 1, de, ue.width, ue.height, 0, ce, ge, ue.data);
            }
          } else {
            Le ? t.texSubImage2D(34069 + V, 0, 0, 0, ce, ge, j[V]) : t.texImage2D(34069 + V, 0, de, ce, ge, j[V]);
            for (let Q = 0; Q < L.length; Q++) {
              const ae = L[Q];
              Le ? t.texSubImage2D(34069 + V, Q + 1, 0, 0, ce, ge, ae.image[V]) : t.texImage2D(34069 + V, Q + 1, de, ce, ge, ae.image[V]);
            }
          }
      }
      A(w, _e) && C(34067), re.__version = ne.version, w.onUpdate && w.onUpdate(w);
    }
    E.__version = w.version;
  }
  function oe(E, w, H, te, ne) {
    const re = r.convert(H.format, H.encoding), ve = r.convert(H.type), se = x(H.internalFormat, re, ve, H.encoding);
    n.get(w).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, se, w.width, w.height, w.depth, 0, re, ve, null) : t.texImage2D(ne, 0, se, w.width, w.height, 0, re, ve, null)), t.bindFramebuffer(36160, E), Fe(w) ? d.framebufferTexture2DMultisampleEXT(36160, te, ne, n.get(H).__webglTexture, 0, $e(w)) : (ne === 3553 || ne >= 34069 && ne <= 34074) && o.framebufferTexture2D(36160, te, ne, n.get(H).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Ne(E, w, H) {
    if (o.bindRenderbuffer(36161, E), w.depthBuffer && !w.stencilBuffer) {
      let te = 33189;
      if (H || Fe(w)) {
        const ne = w.depthTexture;
        ne && ne.isDepthTexture && (ne.type === 1015 ? te = 36012 : ne.type === 1014 && (te = 33190));
        const re = $e(w);
        Fe(w) ? d.renderbufferStorageMultisampleEXT(36161, re, te, w.width, w.height) : o.renderbufferStorageMultisample(36161, re, te, w.width, w.height);
      } else
        o.renderbufferStorage(36161, te, w.width, w.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, E);
    } else if (w.depthBuffer && w.stencilBuffer) {
      const te = $e(w);
      H && Fe(w) === !1 ? o.renderbufferStorageMultisample(36161, te, 35056, w.width, w.height) : Fe(w) ? d.renderbufferStorageMultisampleEXT(36161, te, 35056, w.width, w.height) : o.renderbufferStorage(36161, 34041, w.width, w.height), o.framebufferRenderbuffer(36160, 33306, 36161, E);
    } else {
      const te = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
      for (let ne = 0; ne < te.length; ne++) {
        const re = te[ne], ve = r.convert(re.format, re.encoding), se = r.convert(re.type), j = x(re.internalFormat, ve, se, re.encoding), me = $e(w);
        H && Fe(w) === !1 ? o.renderbufferStorageMultisample(36161, me, j, w.width, w.height) : Fe(w) ? d.renderbufferStorageMultisampleEXT(36161, me, j, w.width, w.height) : o.renderbufferStorage(36161, j, w.width, w.height);
      }
    }
    o.bindRenderbuffer(36161, null);
  }
  function Se(E, w) {
    if (w && w.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, E), !(w.depthTexture && w.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(w.depthTexture).__webglTexture || w.depthTexture.image.width !== w.width || w.depthTexture.image.height !== w.height) && (w.depthTexture.image.width = w.width, w.depthTexture.image.height = w.height, w.depthTexture.needsUpdate = !0), $(w.depthTexture, 0);
    const te = n.get(w.depthTexture).__webglTexture, ne = $e(w);
    if (w.depthTexture.format === 1026)
      Fe(w) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, te, 0, ne) : o.framebufferTexture2D(36160, 36096, 3553, te, 0);
    else if (w.depthTexture.format === 1027)
      Fe(w) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, te, 0, ne) : o.framebufferTexture2D(36160, 33306, 3553, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function xe(E) {
    const w = n.get(E), H = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !w.__autoAllocateDepthBuffer) {
      if (H)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Se(w.__webglFramebuffer, E);
    } else if (H) {
      w.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(36160, w.__webglFramebuffer[te]), w.__webglDepthbuffer[te] = o.createRenderbuffer(), Ne(w.__webglDepthbuffer[te], E, !1);
    } else
      t.bindFramebuffer(36160, w.__webglFramebuffer), w.__webglDepthbuffer = o.createRenderbuffer(), Ne(w.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(36160, null);
  }
  function pt(E, w, H) {
    const te = n.get(E);
    w !== void 0 && oe(te.__webglFramebuffer, E, E.texture, 36064, 3553), H !== void 0 && xe(E);
  }
  function Bt(E) {
    const w = E.texture, H = n.get(E), te = n.get(w);
    E.addEventListener("dispose", z), E.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = o.createTexture()), te.__version = w.version, a.memory.textures++);
    const ne = E.isWebGLCubeRenderTarget === !0, re = E.isWebGLMultipleRenderTargets === !0, ve = M(E) || s;
    if (ne) {
      H.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        H.__webglFramebuffer[se] = o.createFramebuffer();
    } else {
      if (H.__webglFramebuffer = o.createFramebuffer(), re)
        if (i.drawBuffers) {
          const se = E.texture;
          for (let j = 0, me = se.length; j < me; j++) {
            const _e = n.get(se[j]);
            _e.__webglTexture === void 0 && (_e.__webglTexture = o.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (s && E.samples > 0 && Fe(E) === !1) {
        const se = re ? w : [w];
        H.__webglMultisampledFramebuffer = o.createFramebuffer(), H.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer);
        for (let j = 0; j < se.length; j++) {
          const me = se[j];
          H.__webglColorRenderbuffer[j] = o.createRenderbuffer(), o.bindRenderbuffer(36161, H.__webglColorRenderbuffer[j]);
          const _e = r.convert(me.format, me.encoding), ce = r.convert(me.type), ge = x(me.internalFormat, _e, ce, me.encoding, E.isXRRenderTarget === !0), de = $e(E);
          o.renderbufferStorageMultisample(36161, de, ge, E.width, E.height), o.framebufferRenderbuffer(36160, 36064 + j, 36161, H.__webglColorRenderbuffer[j]);
        }
        o.bindRenderbuffer(36161, null), E.depthBuffer && (H.__webglDepthRenderbuffer = o.createRenderbuffer(), Ne(H.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, te.__webglTexture), O(34067, w, ve);
      for (let se = 0; se < 6; se++)
        oe(H.__webglFramebuffer[se], E, w, 36064, 34069 + se);
      A(w, ve) && C(34067), t.unbindTexture();
    } else if (re) {
      const se = E.texture;
      for (let j = 0, me = se.length; j < me; j++) {
        const _e = se[j], ce = n.get(_e);
        t.bindTexture(3553, ce.__webglTexture), O(3553, _e, ve), oe(H.__webglFramebuffer, E, _e, 36064 + j, 3553), A(_e, ve) && C(3553);
      }
      t.unbindTexture();
    } else {
      let se = 3553;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (s ? se = E.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, te.__webglTexture), O(se, w, ve), oe(H.__webglFramebuffer, E, w, 36064, se), A(w, ve) && C(se), t.unbindTexture();
    }
    E.depthBuffer && xe(E);
  }
  function lt(E) {
    const w = M(E) || s, H = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let te = 0, ne = H.length; te < ne; te++) {
      const re = H[te];
      if (A(re, w)) {
        const ve = E.isWebGLCubeRenderTarget ? 34067 : 3553, se = n.get(re).__webglTexture;
        t.bindTexture(ve, se), C(ve), t.unbindTexture();
      }
    }
  }
  function zt(E) {
    if (s && E.samples > 0 && Fe(E) === !1) {
      const w = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], H = E.width, te = E.height;
      let ne = 16384;
      const re = [], ve = E.stencilBuffer ? 33306 : 36096, se = n.get(E), j = E.isWebGLMultipleRenderTargets === !0;
      if (j)
        for (let me = 0; me < w.length; me++)
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + me, 36161, null), t.bindFramebuffer(36160, se.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + me, 3553, null, 0);
      t.bindFramebuffer(36008, se.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, se.__webglFramebuffer);
      for (let me = 0; me < w.length; me++) {
        re.push(36064 + me), E.depthBuffer && re.push(ve);
        const _e = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (_e === !1 && (E.depthBuffer && (ne |= 256), E.stencilBuffer && (ne |= 1024)), j && o.framebufferRenderbuffer(36008, 36064, 36161, se.__webglColorRenderbuffer[me]), _e === !0 && (o.invalidateFramebuffer(36008, [ve]), o.invalidateFramebuffer(36009, [ve])), j) {
          const ce = n.get(w[me]).__webglTexture;
          o.framebufferTexture2D(36009, 36064, 3553, ce, 0);
        }
        o.blitFramebuffer(0, 0, H, te, 0, 0, H, te, ne, 9728), m && o.invalidateFramebuffer(36008, re);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), j)
        for (let me = 0; me < w.length; me++) {
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + me, 36161, se.__webglColorRenderbuffer[me]);
          const _e = n.get(w[me]).__webglTexture;
          t.bindFramebuffer(36160, se.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + me, 3553, _e, 0);
        }
      t.bindFramebuffer(36009, se.__webglMultisampledFramebuffer);
    }
  }
  function $e(E) {
    return Math.min(f, E.samples);
  }
  function Fe(E) {
    const w = n.get(E);
    return s && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && w.__useRenderToTexture !== !1;
  }
  function an(E) {
    const w = a.render.frame;
    g.get(E) !== w && (g.set(E, w), E.update());
  }
  function Xt(E, w) {
    const H = E.encoding, te = E.format, ne = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === 1035 || H !== 3e3 && (H === 3001 ? s === !1 ? e.has("EXT_sRGB") === !0 && te === 1023 ? (E.format = 1035, E.minFilter = 1006, E.generateMipmaps = !1) : w = bo.sRGBToLinear(w) : (te !== 1023 || ne !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", H)), w;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = Z, this.setTexture2D = $, this.setTexture2DArray = le, this.setTexture3D = F, this.setTextureCube = Y, this.rebindTextures = pt, this.setupRenderTarget = Bt, this.updateRenderTargetMipmap = lt, this.updateMultisampleRenderTarget = zt, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = oe, this.useMultisampledRTT = Fe;
}
function Gd(o, e, t) {
  const n = t.isWebGL2;
  function i(r, a = null) {
    let s;
    if (r === 1009)
      return 5121;
    if (r === 1017)
      return 32819;
    if (r === 1018)
      return 32820;
    if (r === 1010)
      return 5120;
    if (r === 1011)
      return 5122;
    if (r === 1012)
      return 5123;
    if (r === 1013)
      return 5124;
    if (r === 1014)
      return 5125;
    if (r === 1015)
      return 5126;
    if (r === 1016)
      return n ? 5131 : (s = e.get("OES_texture_half_float"), s !== null ? s.HALF_FLOAT_OES : null);
    if (r === 1021)
      return 6406;
    if (r === 1023)
      return 6408;
    if (r === 1024)
      return 6409;
    if (r === 1025)
      return 6410;
    if (r === 1026)
      return 6402;
    if (r === 1027)
      return 34041;
    if (r === 1035)
      return s = e.get("EXT_sRGB"), s !== null ? s.SRGB_ALPHA_EXT : null;
    if (r === 1028)
      return 6403;
    if (r === 1029)
      return 36244;
    if (r === 1030)
      return 33319;
    if (r === 1031)
      return 33320;
    if (r === 1033)
      return 36249;
    if (r === 33776 || r === 33777 || r === 33778 || r === 33779)
      if (a === 3001)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (r === 33776)
            return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === 33777)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === 33778)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === 33779)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (r === 33776)
          return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === 33777)
          return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === 33778)
          return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === 33779)
          return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === 35840 || r === 35841 || r === 35842 || r === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (r === 35840)
          return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === 35841)
          return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === 35842)
          return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === 35843)
          return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === 36196)
      return s = e.get("WEBGL_compressed_texture_etc1"), s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === 37492 || r === 37496)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (r === 37492)
          return a === 3001 ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (r === 37496)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === 37808 || r === 37809 || r === 37810 || r === 37811 || r === 37812 || r === 37813 || r === 37814 || r === 37815 || r === 37816 || r === 37817 || r === 37818 || r === 37819 || r === 37820 || r === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (r === 37808)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === 37809)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === 37810)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === 37811)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === 37812)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === 37813)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === 37814)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === 37815)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === 37816)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === 37817)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === 37818)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === 37819)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === 37820)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === 37821)
          return a === 3001 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === 36492)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (r === 36492)
          return a === 3001 ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (r === 36283 || r === 36284 || r === 36285 || r === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (r === 36492)
          return s.COMPRESSED_RED_RGTC1_EXT;
        if (r === 36284)
          return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === 36285)
          return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === 36286)
          return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === 1020 ? n ? 34042 : (s = e.get("WEBGL_depth_texture"), s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null) : o[r] !== void 0 ? o[r] : null;
  }
  return { convert: i };
}
class kd extends $t {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Cr extends Nt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Vd = { type: "move" };
class Ts {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Cr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Cr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Cr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new U()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, a = null;
    const s = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const h of e.hand.values()) {
          const p = t.getJointPose(h, n), _ = this._getHandJoint(l, h);
          p !== null && (_.matrix.fromArray(p.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = p.radius), _.visible = p !== null;
        }
        const u = l.joints["index-finger-tip"], f = l.joints["thumb-tip"], d = u.position.distanceTo(f.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && d > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      s !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(Vd)));
    }
    return s !== null && (s.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Cr();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Wd extends vt {
  constructor(e, t, n, i, r, a, s, c, l, u) {
    if (u = u !== void 0 ? u : 1026, u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, i, r, a, s, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = s !== void 0 ? s : 1003, this.minFilter = c !== void 0 ? c : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Hd extends Di {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, s = "local-floor", c = 1, l = null, u = null, f = null, d = null, m = null, g = null;
    const h = t.getContextAttributes();
    let p = null, _ = null;
    const y = [], v = [], M = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), A = new $t();
    A.layers.enable(1), A.viewport = new Je();
    const C = new $t();
    C.layers.enable(2), C.viewport = new Je();
    const x = [A, C], S = new kd();
    S.layers.enable(1), S.layers.enable(2);
    let R = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
      let Y = y[F];
      return Y === void 0 && (Y = new Ts(), y[F] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(F) {
      let Y = y[F];
      return Y === void 0 && (Y = new Ts(), y[F] = Y), Y.getGripSpace();
    }, this.getHand = function(F) {
      let Y = y[F];
      return Y === void 0 && (Y = new Ts(), y[F] = Y), Y.getHandSpace();
    };
    function z(F) {
      const Y = v.indexOf(F.inputSource);
      if (Y === -1)
        return;
      const J = y[Y];
      J !== void 0 && J.dispatchEvent({ type: F.type, data: F.inputSource });
    }
    function P() {
      i.removeEventListener("select", z), i.removeEventListener("selectstart", z), i.removeEventListener("selectend", z), i.removeEventListener("squeeze", z), i.removeEventListener("squeezestart", z), i.removeEventListener("squeezeend", z), i.removeEventListener("end", P), i.removeEventListener("inputsourceschange", D);
      for (let F = 0; F < y.length; F++) {
        const Y = v[F];
        Y !== null && (v[F] = null, y[F].disconnect(Y));
      }
      R = null, G = null, e.setRenderTarget(p), m = null, d = null, f = null, i = null, _ = null, le.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(F) {
      r = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(F) {
      s = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(F) {
      l = F;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(F) {
      if (i = F, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", z), i.addEventListener("selectstart", z), i.addEventListener("selectend", z), i.addEventListener("squeeze", z), i.addEventListener("squeezestart", z), i.addEventListener("squeezeend", z), i.addEventListener("end", P), i.addEventListener("inputsourceschange", D), h.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Y = {
            antialias: i.renderState.layers === void 0 ? h.antialias : !0,
            alpha: h.alpha,
            depth: h.depth,
            stencil: h.stencil,
            framebufferScaleFactor: r
          };
          m = new XRWebGLLayer(i, t, Y), i.updateRenderState({ baseLayer: m }), _ = new Qn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              encoding: e.outputEncoding,
              stencilBuffer: h.stencil
            }
          );
        } else {
          let Y = null, J = null, ee = null;
          h.depth && (ee = h.stencil ? 35056 : 33190, Y = h.stencil ? 1027 : 1026, J = h.stencil ? 1020 : 1014);
          const O = {
            colorFormat: 32856,
            depthFormat: ee,
            scaleFactor: r
          };
          f = new XRWebGLBinding(i, t), d = f.createProjectionLayer(O), i.updateRenderState({ layers: [d] }), _ = new Qn(
            d.textureWidth,
            d.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Wd(d.textureWidth, d.textureHeight, J, void 0, void 0, void 0, void 0, void 0, void 0, Y),
              stencilBuffer: h.stencil,
              encoding: e.outputEncoding,
              samples: h.antialias ? 4 : 0
            }
          );
          const ye = e.properties.get(_);
          ye.__ignoreDepthValues = d.ignoreDepthValues;
        }
        _.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(s), le.setContext(i), le.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function D(F) {
      for (let Y = 0; Y < F.removed.length; Y++) {
        const J = F.removed[Y], ee = v.indexOf(J);
        ee >= 0 && (v[ee] = null, y[ee].disconnect(J));
      }
      for (let Y = 0; Y < F.added.length; Y++) {
        const J = F.added[Y];
        let ee = v.indexOf(J);
        if (ee === -1) {
          for (let ye = 0; ye < y.length; ye++)
            if (ye >= v.length) {
              v.push(J), ee = ye;
              break;
            } else if (v[ye] === null) {
              v[ye] = J, ee = ye;
              break;
            }
          if (ee === -1)
            break;
        }
        const O = y[ee];
        O && O.connect(J);
      }
    }
    const B = new U(), q = new U();
    function Z(F, Y, J) {
      B.setFromMatrixPosition(Y.matrixWorld), q.setFromMatrixPosition(J.matrixWorld);
      const ee = B.distanceTo(q), O = Y.projectionMatrix.elements, ye = J.projectionMatrix.elements, he = O[14] / (O[10] - 1), fe = O[14] / (O[10] + 1), oe = (O[9] + 1) / O[5], Ne = (O[9] - 1) / O[5], Se = (O[8] - 1) / O[0], xe = (ye[8] + 1) / ye[0], pt = he * Se, Bt = he * xe, lt = ee / (-Se + xe), zt = lt * -Se;
      Y.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX(zt), F.translateZ(lt), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert();
      const $e = he + lt, Fe = fe + lt, an = pt - zt, Xt = Bt + (ee - zt), E = oe * fe / Fe * $e, w = Ne * fe / Fe * $e;
      F.projectionMatrix.makePerspective(an, Xt, E, w, $e, Fe);
    }
    function k(F, Y) {
      Y === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(Y.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    this.updateCamera = function(F) {
      if (i === null)
        return;
      S.near = C.near = A.near = F.near, S.far = C.far = A.far = F.far, (R !== S.near || G !== S.far) && (i.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), R = S.near, G = S.far);
      const Y = F.parent, J = S.cameras;
      k(S, Y);
      for (let O = 0; O < J.length; O++)
        k(J[O], Y);
      S.matrixWorld.decompose(S.position, S.quaternion, S.scale), F.matrix.copy(S.matrix), F.matrix.decompose(F.position, F.quaternion, F.scale);
      const ee = F.children;
      for (let O = 0, ye = ee.length; O < ye; O++)
        ee[O].updateMatrixWorld(!0);
      J.length === 2 ? Z(S, A, C) : S.projectionMatrix.copy(A.projectionMatrix);
    }, this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return c;
    }, this.setFoveation = function(F) {
      c = F, d !== null && (d.fixedFoveation = F), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = F);
    }, this.getPlanes = function() {
      return M;
    };
    let K = null;
    function $(F, Y) {
      if (u = Y.getViewerPose(l || a), g = Y, u !== null) {
        const J = u.views;
        m !== null && (e.setRenderTargetFramebuffer(_, m.framebuffer), e.setRenderTarget(_));
        let ee = !1;
        J.length !== S.cameras.length && (S.cameras.length = 0, ee = !0);
        for (let O = 0; O < J.length; O++) {
          const ye = J[O];
          let he = null;
          if (m !== null)
            he = m.getViewport(ye);
          else {
            const oe = f.getViewSubImage(d, ye);
            he = oe.viewport, O === 0 && (e.setRenderTargetTextures(
              _,
              oe.colorTexture,
              d.ignoreDepthValues ? void 0 : oe.depthStencilTexture
            ), e.setRenderTarget(_));
          }
          let fe = x[O];
          fe === void 0 && (fe = new $t(), fe.layers.enable(O), fe.viewport = new Je(), x[O] = fe), fe.matrix.fromArray(ye.transform.matrix), fe.projectionMatrix.fromArray(ye.projectionMatrix), fe.viewport.set(he.x, he.y, he.width, he.height), O === 0 && S.matrix.copy(fe.matrix), ee === !0 && S.cameras.push(fe);
        }
      }
      for (let J = 0; J < y.length; J++) {
        const ee = v[J], O = y[J];
        ee !== null && O !== void 0 && O.update(ee, Y, l || a);
      }
      if (K && K(F, Y), Y.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: Y.detectedPlanes });
        let J = null;
        for (const ee of M)
          Y.detectedPlanes.has(ee) || (J === null && (J = []), J.push(ee));
        if (J !== null)
          for (const ee of J)
            M.delete(ee), b.delete(ee), n.dispatchEvent({ type: "planeremoved", data: ee });
        for (const ee of Y.detectedPlanes)
          if (!M.has(ee))
            M.add(ee), b.set(ee, Y.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: ee });
          else {
            const O = b.get(ee);
            ee.lastChangedTime > O && (b.set(ee, ee.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: ee }));
          }
      }
      g = null;
    }
    const le = new Io();
    le.setAnimationLoop($), this.setAnimationLoop = function(F) {
      K = F;
    }, this.dispose = function() {
    };
  }
}
function qd(o, e) {
  function t(h, p) {
    p.color.getRGB(h.fogColor.value, Lo(o)), p.isFog ? (h.fogNear.value = p.near, h.fogFar.value = p.far) : p.isFogExp2 && (h.fogDensity.value = p.density);
  }
  function n(h, p, _, y, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? i(h, p) : p.isMeshToonMaterial ? (i(h, p), u(h, p)) : p.isMeshPhongMaterial ? (i(h, p), l(h, p)) : p.isMeshStandardMaterial ? (i(h, p), f(h, p), p.isMeshPhysicalMaterial && d(h, p, v)) : p.isMeshMatcapMaterial ? (i(h, p), m(h, p)) : p.isMeshDepthMaterial ? i(h, p) : p.isMeshDistanceMaterial ? (i(h, p), g(h, p)) : p.isMeshNormalMaterial ? i(h, p) : p.isLineBasicMaterial ? (r(h, p), p.isLineDashedMaterial && a(h, p)) : p.isPointsMaterial ? s(h, p, _, y) : p.isSpriteMaterial ? c(h, p) : p.isShadowMaterial ? (h.color.value.copy(p.color), h.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function i(h, p) {
    h.opacity.value = p.opacity, p.color && h.diffuse.value.copy(p.color), p.emissive && h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (h.map.value = p.map), p.alphaMap && (h.alphaMap.value = p.alphaMap), p.bumpMap && (h.bumpMap.value = p.bumpMap, h.bumpScale.value = p.bumpScale, p.side === 1 && (h.bumpScale.value *= -1)), p.displacementMap && (h.displacementMap.value = p.displacementMap, h.displacementScale.value = p.displacementScale, h.displacementBias.value = p.displacementBias), p.emissiveMap && (h.emissiveMap.value = p.emissiveMap), p.normalMap && (h.normalMap.value = p.normalMap, h.normalScale.value.copy(p.normalScale), p.side === 1 && h.normalScale.value.negate()), p.specularMap && (h.specularMap.value = p.specularMap), p.alphaTest > 0 && (h.alphaTest.value = p.alphaTest);
    const _ = e.get(p).envMap;
    if (_ && (h.envMap.value = _, h.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, h.reflectivity.value = p.reflectivity, h.ior.value = p.ior, h.refractionRatio.value = p.refractionRatio), p.lightMap) {
      h.lightMap.value = p.lightMap;
      const M = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
      h.lightMapIntensity.value = p.lightMapIntensity * M;
    }
    p.aoMap && (h.aoMap.value = p.aoMap, h.aoMapIntensity.value = p.aoMapIntensity);
    let y;
    p.map ? y = p.map : p.specularMap ? y = p.specularMap : p.displacementMap ? y = p.displacementMap : p.normalMap ? y = p.normalMap : p.bumpMap ? y = p.bumpMap : p.roughnessMap ? y = p.roughnessMap : p.metalnessMap ? y = p.metalnessMap : p.alphaMap ? y = p.alphaMap : p.emissiveMap ? y = p.emissiveMap : p.clearcoatMap ? y = p.clearcoatMap : p.clearcoatNormalMap ? y = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y = p.clearcoatRoughnessMap : p.iridescenceMap ? y = p.iridescenceMap : p.iridescenceThicknessMap ? y = p.iridescenceThicknessMap : p.specularIntensityMap ? y = p.specularIntensityMap : p.specularColorMap ? y = p.specularColorMap : p.transmissionMap ? y = p.transmissionMap : p.thicknessMap ? y = p.thicknessMap : p.sheenColorMap ? y = p.sheenColorMap : p.sheenRoughnessMap && (y = p.sheenRoughnessMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), h.uvTransform.value.copy(y.matrix));
    let v;
    p.aoMap ? v = p.aoMap : p.lightMap && (v = p.lightMap), v !== void 0 && (v.isWebGLRenderTarget && (v = v.texture), v.matrixAutoUpdate === !0 && v.updateMatrix(), h.uv2Transform.value.copy(v.matrix));
  }
  function r(h, p) {
    h.diffuse.value.copy(p.color), h.opacity.value = p.opacity;
  }
  function a(h, p) {
    h.dashSize.value = p.dashSize, h.totalSize.value = p.dashSize + p.gapSize, h.scale.value = p.scale;
  }
  function s(h, p, _, y) {
    h.diffuse.value.copy(p.color), h.opacity.value = p.opacity, h.size.value = p.size * _, h.scale.value = y * 0.5, p.map && (h.map.value = p.map), p.alphaMap && (h.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (h.alphaTest.value = p.alphaTest);
    let v;
    p.map ? v = p.map : p.alphaMap && (v = p.alphaMap), v !== void 0 && (v.matrixAutoUpdate === !0 && v.updateMatrix(), h.uvTransform.value.copy(v.matrix));
  }
  function c(h, p) {
    h.diffuse.value.copy(p.color), h.opacity.value = p.opacity, h.rotation.value = p.rotation, p.map && (h.map.value = p.map), p.alphaMap && (h.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (h.alphaTest.value = p.alphaTest);
    let _;
    p.map ? _ = p.map : p.alphaMap && (_ = p.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), h.uvTransform.value.copy(_.matrix));
  }
  function l(h, p) {
    h.specular.value.copy(p.specular), h.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(h, p) {
    p.gradientMap && (h.gradientMap.value = p.gradientMap);
  }
  function f(h, p) {
    h.roughness.value = p.roughness, h.metalness.value = p.metalness, p.roughnessMap && (h.roughnessMap.value = p.roughnessMap), p.metalnessMap && (h.metalnessMap.value = p.metalnessMap), e.get(p).envMap && (h.envMapIntensity.value = p.envMapIntensity);
  }
  function d(h, p, _) {
    h.ior.value = p.ior, p.sheen > 0 && (h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), h.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (h.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (h.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (h.clearcoat.value = p.clearcoat, h.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (h.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (h.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), h.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === 1 && h.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (h.iridescence.value = p.iridescence, h.iridescenceIOR.value = p.iridescenceIOR, h.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], h.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (h.iridescenceMap.value = p.iridescenceMap), p.iridescenceThicknessMap && (h.iridescenceThicknessMap.value = p.iridescenceThicknessMap)), p.transmission > 0 && (h.transmission.value = p.transmission, h.transmissionSamplerMap.value = _.texture, h.transmissionSamplerSize.value.set(_.width, _.height), p.transmissionMap && (h.transmissionMap.value = p.transmissionMap), h.thickness.value = p.thickness, p.thicknessMap && (h.thicknessMap.value = p.thicknessMap), h.attenuationDistance.value = p.attenuationDistance, h.attenuationColor.value.copy(p.attenuationColor)), h.specularIntensity.value = p.specularIntensity, h.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (h.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (h.specularColorMap.value = p.specularColorMap);
  }
  function m(h, p) {
    p.matcap && (h.matcap.value = p.matcap);
  }
  function g(h, p) {
    h.referencePosition.value.copy(p.referencePosition), h.nearDistance.value = p.nearDistance, h.farDistance.value = p.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Xd(o, e, t, n) {
  let i = {}, r = {}, a = [];
  const s = t.isWebGL2 ? o.getParameter(35375) : 0;
  function c(y, v) {
    const M = v.program;
    n.uniformBlockBinding(y, M);
  }
  function l(y, v) {
    let M = i[y.id];
    M === void 0 && (g(y), M = u(y), i[y.id] = M, y.addEventListener("dispose", p));
    const b = v.program;
    n.updateUBOMapping(y, b);
    const A = e.render.frame;
    r[y.id] !== A && (d(y), r[y.id] = A);
  }
  function u(y) {
    const v = f();
    y.__bindingPointIndex = v;
    const M = o.createBuffer(), b = y.__size, A = y.usage;
    return o.bindBuffer(35345, M), o.bufferData(35345, b, A), o.bindBuffer(35345, null), o.bindBufferBase(35345, v, M), M;
  }
  function f() {
    for (let y = 0; y < s; y++)
      if (a.indexOf(y) === -1)
        return a.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const v = i[y.id], M = y.uniforms, b = y.__cache;
    o.bindBuffer(35345, v);
    for (let A = 0, C = M.length; A < C; A++) {
      const x = M[A];
      if (m(x, A, b) === !0) {
        const S = x.__offset, R = Array.isArray(x.value) ? x.value : [x.value];
        let G = 0;
        for (let z = 0; z < R.length; z++) {
          const P = R[z], D = h(P);
          typeof P == "number" ? (x.__data[0] = P, o.bufferSubData(35345, S + G, x.__data)) : P.isMatrix3 ? (x.__data[0] = P.elements[0], x.__data[1] = P.elements[1], x.__data[2] = P.elements[2], x.__data[3] = P.elements[0], x.__data[4] = P.elements[3], x.__data[5] = P.elements[4], x.__data[6] = P.elements[5], x.__data[7] = P.elements[0], x.__data[8] = P.elements[6], x.__data[9] = P.elements[7], x.__data[10] = P.elements[8], x.__data[11] = P.elements[0]) : (P.toArray(x.__data, G), G += D.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        o.bufferSubData(35345, S, x.__data);
      }
    }
    o.bindBuffer(35345, null);
  }
  function m(y, v, M) {
    const b = y.value;
    if (M[v] === void 0) {
      if (typeof b == "number")
        M[v] = b;
      else {
        const A = Array.isArray(b) ? b : [b], C = [];
        for (let x = 0; x < A.length; x++)
          C.push(A[x].clone());
        M[v] = C;
      }
      return !0;
    } else if (typeof b == "number") {
      if (M[v] !== b)
        return M[v] = b, !0;
    } else {
      const A = Array.isArray(M[v]) ? M[v] : [M[v]], C = Array.isArray(b) ? b : [b];
      for (let x = 0; x < A.length; x++) {
        const S = A[x];
        if (S.equals(C[x]) === !1)
          return S.copy(C[x]), !0;
      }
    }
    return !1;
  }
  function g(y) {
    const v = y.uniforms;
    let M = 0;
    const b = 16;
    let A = 0;
    for (let C = 0, x = v.length; C < x; C++) {
      const S = v[C], R = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, G = Array.isArray(S.value) ? S.value : [S.value];
      for (let z = 0, P = G.length; z < P; z++) {
        const D = G[z], B = h(D);
        R.boundary += B.boundary, R.storage += B.storage;
      }
      if (S.__data = new Float32Array(R.storage / Float32Array.BYTES_PER_ELEMENT), S.__offset = M, C > 0) {
        A = M % b;
        const z = b - A;
        A !== 0 && z - R.boundary < 0 && (M += b - A, S.__offset = M);
      }
      M += R.storage;
    }
    return A = M % b, A > 0 && (M += b - A), y.__size = M, y.__cache = {}, this;
  }
  function h(y) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" ? (v.boundary = 4, v.storage = 4) : y.isVector2 ? (v.boundary = 8, v.storage = 8) : y.isVector3 || y.isColor ? (v.boundary = 16, v.storage = 12) : y.isVector4 ? (v.boundary = 16, v.storage = 16) : y.isMatrix3 ? (v.boundary = 48, v.storage = 48) : y.isMatrix4 ? (v.boundary = 64, v.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), v;
  }
  function p(y) {
    const v = y.target;
    v.removeEventListener("dispose", p);
    const M = a.indexOf(v.__bindingPointIndex);
    a.splice(M, 1), o.deleteBuffer(i[v.id]), delete i[v.id], delete r[v.id];
  }
  function _() {
    for (const y in i)
      o.deleteBuffer(i[y]);
    a = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: _
  };
}
function Yd() {
  const o = Zi("canvas");
  return o.style.display = "block", o;
}
function Go(o = {}) {
  this.isWebGLRenderer = !0;
  const e = o.canvas !== void 0 ? o.canvas : Yd(), t = o.context !== void 0 ? o.context : null, n = o.depth !== void 0 ? o.depth : !0, i = o.stencil !== void 0 ? o.stencil : !0, r = o.antialias !== void 0 ? o.antialias : !1, a = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0, s = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1, c = o.powerPreference !== void 0 ? o.powerPreference : "default", l = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = o.alpha !== void 0 ? o.alpha : !1;
  let f = null, d = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
  const h = this;
  let p = !1, _ = 0, y = 0, v = null, M = -1, b = null;
  const A = new Je(), C = new Je();
  let x = null, S = e.width, R = e.height, G = 1, z = null, P = null;
  const D = new Je(0, 0, S, R), B = new Je(0, 0, S, R);
  let q = !1;
  const Z = new Fo();
  let k = !1, K = !1, $ = null;
  const le = new ot(), F = new Ue(), Y = new U(), J = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ee() {
    return v === null ? G : 1;
  }
  let O = t;
  function ye(T, N) {
    for (let W = 0; W < T.length; W++) {
      const I = T[W], X = e.getContext(I, N);
      if (X !== null)
        return X;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: a,
      preserveDrawingBuffer: s,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Qs}`), e.addEventListener("webglcontextlost", ge, !1), e.addEventListener("webglcontextrestored", de, !1), e.addEventListener("webglcontextcreationerror", Le, !1), O === null) {
      const N = ["webgl2", "webgl", "experimental-webgl"];
      if (h.isWebGL1Renderer === !0 && N.shift(), O = ye(N, T), O === null)
        throw ye(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    O.getShaderPrecisionFormat === void 0 && (O.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (T) {
    throw console.error("THREE.WebGLRenderer: " + T.message), T;
  }
  let he, fe, oe, Ne, Se, xe, pt, Bt, lt, zt, $e, Fe, an, Xt, E, w, H, te, ne, re, ve, se, j, me;
  function _e() {
    he = new rf(O), fe = new Kh(O, he, o), he.init(fe), se = new Gd(O, he, fe), oe = new Bd(O, he, fe), Ne = new of(), Se = new wd(), xe = new zd(O, he, oe, Se, fe, se, Ne), pt = new Qh(h), Bt = new nf(h), lt = new mc(O, fe), j = new Zh(O, he, lt, fe), zt = new sf(O, lt, Ne, j), $e = new hf(O, zt, lt, Ne), ne = new uf(O, fe, xe), w = new Jh(Se), Fe = new bd(h, pt, Bt, he, fe, j, w), an = new qd(h, Se), Xt = new Ed(), E = new Pd(he, fe), te = new jh(h, pt, Bt, oe, $e, u, a), H = new Ud(h, $e, fe), me = new Xd(O, Ne, fe, oe), re = new $h(O, he, Ne, fe), ve = new af(O, he, Ne, fe), Ne.programs = Fe.programs, h.capabilities = fe, h.extensions = he, h.properties = Se, h.renderLists = Xt, h.shadowMap = H, h.state = oe, h.info = Ne;
  }
  _e();
  const ce = new Hd(h, O);
  this.xr = ce, this.getContext = function() {
    return O;
  }, this.getContextAttributes = function() {
    return O.getContextAttributes();
  }, this.forceContextLoss = function() {
    const T = he.get("WEBGL_lose_context");
    T && T.loseContext();
  }, this.forceContextRestore = function() {
    const T = he.get("WEBGL_lose_context");
    T && T.restoreContext();
  }, this.getPixelRatio = function() {
    return G;
  }, this.setPixelRatio = function(T) {
    T !== void 0 && (G = T, this.setSize(S, R, !1));
  }, this.getSize = function(T) {
    return T.set(S, R);
  }, this.setSize = function(T, N, W) {
    if (ce.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    S = T, R = N, e.width = Math.floor(T * G), e.height = Math.floor(N * G), W !== !1 && (e.style.width = T + "px", e.style.height = N + "px"), this.setViewport(0, 0, T, N);
  }, this.getDrawingBufferSize = function(T) {
    return T.set(S * G, R * G).floor();
  }, this.setDrawingBufferSize = function(T, N, W) {
    S = T, R = N, G = W, e.width = Math.floor(T * W), e.height = Math.floor(N * W), this.setViewport(0, 0, T, N);
  }, this.getCurrentViewport = function(T) {
    return T.copy(A);
  }, this.getViewport = function(T) {
    return T.copy(D);
  }, this.setViewport = function(T, N, W, I) {
    T.isVector4 ? D.set(T.x, T.y, T.z, T.w) : D.set(T, N, W, I), oe.viewport(A.copy(D).multiplyScalar(G).floor());
  }, this.getScissor = function(T) {
    return T.copy(B);
  }, this.setScissor = function(T, N, W, I) {
    T.isVector4 ? B.set(T.x, T.y, T.z, T.w) : B.set(T, N, W, I), oe.scissor(C.copy(B).multiplyScalar(G).floor());
  }, this.getScissorTest = function() {
    return q;
  }, this.setScissorTest = function(T) {
    oe.setScissorTest(q = T);
  }, this.setOpaqueSort = function(T) {
    z = T;
  }, this.setTransparentSort = function(T) {
    P = T;
  }, this.getClearColor = function(T) {
    return T.copy(te.getClearColor());
  }, this.setClearColor = function() {
    te.setClearColor.apply(te, arguments);
  }, this.getClearAlpha = function() {
    return te.getClearAlpha();
  }, this.setClearAlpha = function() {
    te.setClearAlpha.apply(te, arguments);
  }, this.clear = function(T = !0, N = !0, W = !0) {
    let I = 0;
    T && (I |= 16384), N && (I |= 256), W && (I |= 1024), O.clear(I);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", ge, !1), e.removeEventListener("webglcontextrestored", de, !1), e.removeEventListener("webglcontextcreationerror", Le, !1), Xt.dispose(), E.dispose(), Se.dispose(), pt.dispose(), Bt.dispose(), $e.dispose(), j.dispose(), me.dispose(), Fe.dispose(), ce.dispose(), ce.removeEventListener("sessionstart", ae), ce.removeEventListener("sessionend", ue), $ && ($.dispose(), $ = null), Pe.stop();
  };
  function ge(T) {
    T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0;
  }
  function de() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1;
    const T = Ne.autoReset, N = H.enabled, W = H.autoUpdate, I = H.needsUpdate, X = H.type;
    _e(), Ne.autoReset = T, H.enabled = N, H.autoUpdate = W, H.needsUpdate = I, H.type = X;
  }
  function Le(T) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
  }
  function Be(T) {
    const N = T.target;
    N.removeEventListener("dispose", Be), tt(N);
  }
  function tt(T) {
    L(T), Se.remove(T);
  }
  function L(T) {
    const N = Se.get(T).programs;
    N !== void 0 && (N.forEach(function(W) {
      Fe.releaseProgram(W);
    }), T.isShaderMaterial && Fe.releaseShaderCache(T));
  }
  this.renderBufferDirect = function(T, N, W, I, X, pe) {
    N === null && (N = J);
    const Me = X.isMesh && X.matrixWorld.determinant() < 0, we = kl(T, N, W, I, X);
    oe.setMaterial(I, Me);
    let Te = W.index, De = 1;
    I.wireframe === !0 && (Te = zt.getWireframeAttribute(W), De = 2);
    const Ae = W.drawRange, Ce = W.attributes.position;
    let Xe = Ae.start * De, Tt = (Ae.start + Ae.count) * De;
    pe !== null && (Xe = Math.max(Xe, pe.start * De), Tt = Math.min(Tt, (pe.start + pe.count) * De)), Te !== null ? (Xe = Math.max(Xe, 0), Tt = Math.min(Tt, Te.count)) : Ce != null && (Xe = Math.max(Xe, 0), Tt = Math.min(Tt, Ce.count));
    const ln = Tt - Xe;
    if (ln < 0 || ln === 1 / 0)
      return;
    j.setup(X, I, we, W, Te);
    let In, Ye = re;
    if (Te !== null && (In = lt.get(Te), Ye = ve, Ye.setIndex(In)), X.isMesh)
      I.wireframe === !0 ? (oe.setLineWidth(I.wireframeLinewidth * ee()), Ye.setMode(1)) : Ye.setMode(4);
    else if (X.isLine) {
      let Re = I.linewidth;
      Re === void 0 && (Re = 1), oe.setLineWidth(Re * ee()), X.isLineSegments ? Ye.setMode(1) : X.isLineLoop ? Ye.setMode(2) : Ye.setMode(3);
    } else
      X.isPoints ? Ye.setMode(0) : X.isSprite && Ye.setMode(4);
    if (X.isInstancedMesh)
      Ye.renderInstances(Xe, ln, X.count);
    else if (W.isInstancedBufferGeometry) {
      const Re = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, $r = Math.min(W.instanceCount, Re);
      Ye.renderInstances(Xe, ln, $r);
    } else
      Ye.render(Xe, ln);
  }, this.compile = function(T, N) {
    function W(I, X, pe) {
      I.transparent === !0 && I.side === 2 && I.forceSinglePass === !1 ? (I.side = 1, I.needsUpdate = !0, Gt(I, X, pe), I.side = 0, I.needsUpdate = !0, Gt(I, X, pe), I.side = 2) : Gt(I, X, pe);
    }
    d = E.get(T), d.init(), g.push(d), T.traverseVisible(function(I) {
      I.isLight && I.layers.test(N.layers) && (d.pushLight(I), I.castShadow && d.pushShadow(I));
    }), d.setupLights(h.physicallyCorrectLights), T.traverse(function(I) {
      const X = I.material;
      if (X)
        if (Array.isArray(X))
          for (let pe = 0; pe < X.length; pe++) {
            const Me = X[pe];
            W(Me, T, I);
          }
        else
          W(X, T, I);
    }), g.pop(), d = null;
  };
  let V = null;
  function Q(T) {
    V && V(T);
  }
  function ae() {
    Pe.stop();
  }
  function ue() {
    Pe.start();
  }
  const Pe = new Io();
  Pe.setAnimationLoop(Q), typeof self < "u" && Pe.setContext(self), this.setAnimationLoop = function(T) {
    V = T, ce.setAnimationLoop(T), T === null ? Pe.stop() : Pe.start();
  }, ce.addEventListener("sessionstart", ae), ce.addEventListener("sessionend", ue), this.render = function(T, N) {
    if (N !== void 0 && N.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (p === !0)
      return;
    T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), ce.enabled === !0 && ce.isPresenting === !0 && (ce.cameraAutoUpdate === !0 && ce.updateCamera(N), N = ce.getCamera()), T.isScene === !0 && T.onBeforeRender(h, T, N, v), d = E.get(T, g.length), d.init(), g.push(d), le.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Z.setFromProjectionMatrix(le), K = this.localClippingEnabled, k = w.init(this.clippingPlanes, K), f = Xt.get(T, m.length), f.init(), m.push(f), nt(T, N, 0, h.sortObjects), f.finish(), h.sortObjects === !0 && f.sort(z, P), k === !0 && w.beginShadows();
    const W = d.state.shadowsArray;
    if (H.render(W, T, N), k === !0 && w.endShadows(), this.info.autoReset === !0 && this.info.reset(), te.render(f, T), d.setupLights(h.physicallyCorrectLights), N.isArrayCamera) {
      const I = N.cameras;
      for (let X = 0, pe = I.length; X < pe; X++) {
        const Me = I[X];
        ct(f, T, Me, Me.viewport);
      }
    } else
      ct(f, T, N);
    v !== null && (xe.updateMultisampleRenderTarget(v), xe.updateRenderTargetMipmap(v)), T.isScene === !0 && T.onAfterRender(h, T, N), j.resetDefaultState(), M = -1, b = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, m.pop(), m.length > 0 ? f = m[m.length - 1] : f = null;
  };
  function nt(T, N, W, I) {
    if (T.visible === !1)
      return;
    if (T.layers.test(N.layers)) {
      if (T.isGroup)
        W = T.renderOrder;
      else if (T.isLOD)
        T.autoUpdate === !0 && T.update(N);
      else if (T.isLight)
        d.pushLight(T), T.castShadow && d.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || Z.intersectsSprite(T)) {
          I && Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);
          const Me = $e.update(T), we = T.material;
          we.visible && f.push(T, Me, we, W, Y.z, null);
        }
      } else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== Ne.render.frame && (T.skeleton.update(), T.skeleton.frame = Ne.render.frame), !T.frustumCulled || Z.intersectsObject(T))) {
        I && Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);
        const Me = $e.update(T), we = T.material;
        if (Array.isArray(we)) {
          const Te = Me.groups;
          for (let De = 0, Ae = Te.length; De < Ae; De++) {
            const Ce = Te[De], Xe = we[Ce.materialIndex];
            Xe && Xe.visible && f.push(T, Me, Xe, W, Y.z, Ce);
          }
        } else
          we.visible && f.push(T, Me, we, W, Y.z, null);
      }
    }
    const pe = T.children;
    for (let Me = 0, we = pe.length; Me < we; Me++)
      nt(pe[Me], N, W, I);
  }
  function ct(T, N, W, I) {
    const X = T.opaque, pe = T.transmissive, Me = T.transparent;
    d.setupLightsView(W), k === !0 && w.setGlobalState(h.clippingPlanes, W), pe.length > 0 && Fn(X, N, W), I && oe.viewport(A.copy(I)), X.length > 0 && ze(X, N, W), pe.length > 0 && ze(pe, N, W), Me.length > 0 && ze(Me, N, W), oe.buffers.depth.setTest(!0), oe.buffers.depth.setMask(!0), oe.buffers.color.setMask(!0), oe.setPolygonOffset(!1);
  }
  function Fn(T, N, W) {
    const I = fe.isWebGL2;
    $ === null && ($ = new Qn(1, 1, {
      generateMipmaps: !0,
      type: he.has("EXT_color_buffer_half_float") ? 1016 : 1009,
      minFilter: 1008,
      samples: I && r === !0 ? 4 : 0
    })), h.getDrawingBufferSize(F), I ? $.setSize(F.x, F.y) : $.setSize(Ns(F.x), Ns(F.y));
    const X = h.getRenderTarget();
    h.setRenderTarget($), h.clear();
    const pe = h.toneMapping;
    h.toneMapping = 0, ze(T, N, W), h.toneMapping = pe, xe.updateMultisampleRenderTarget($), xe.updateRenderTargetMipmap($), h.setRenderTarget(X);
  }
  function ze(T, N, W) {
    const I = N.isScene === !0 ? N.overrideMaterial : null;
    for (let X = 0, pe = T.length; X < pe; X++) {
      const Me = T[X], we = Me.object, Te = Me.geometry, De = I === null ? Me.material : I, Ae = Me.group;
      we.layers.test(W.layers) && on(we, N, W, Te, De, Ae);
    }
  }
  function on(T, N, W, I, X, pe) {
    T.onBeforeRender(h, N, W, I, X, pe), T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), X.onBeforeRender(h, N, W, I, T, pe), X.transparent === !0 && X.side === 2 && X.forceSinglePass === !1 ? (X.side = 1, X.needsUpdate = !0, h.renderBufferDirect(W, N, I, X, T, pe), X.side = 0, X.needsUpdate = !0, h.renderBufferDirect(W, N, I, X, T, pe), X.side = 2) : h.renderBufferDirect(W, N, I, X, T, pe), T.onAfterRender(h, N, W, I, X, pe);
  }
  function Gt(T, N, W) {
    N.isScene !== !0 && (N = J);
    const I = Se.get(T), X = d.state.lights, pe = d.state.shadowsArray, Me = X.state.version, we = Fe.getParameters(T, X.state, pe, N, W), Te = Fe.getProgramCacheKey(we);
    let De = I.programs;
    I.environment = T.isMeshStandardMaterial ? N.environment : null, I.fog = N.fog, I.envMap = (T.isMeshStandardMaterial ? Bt : pt).get(T.envMap || I.environment), De === void 0 && (T.addEventListener("dispose", Be), De = /* @__PURE__ */ new Map(), I.programs = De);
    let Ae = De.get(Te);
    if (Ae !== void 0) {
      if (I.currentProgram === Ae && I.lightsStateVersion === Me)
        return va(T, we), Ae;
    } else
      we.uniforms = Fe.getUniforms(T), T.onBuild(W, we, h), T.onBeforeCompile(we, h), Ae = Fe.acquireProgram(we, Te), De.set(Te, Ae), I.uniforms = we.uniforms;
    const Ce = I.uniforms;
    (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Ce.clippingPlanes = w.uniform), va(T, we), I.needsLights = Wl(T), I.lightsStateVersion = Me, I.needsLights && (Ce.ambientLightColor.value = X.state.ambient, Ce.lightProbe.value = X.state.probe, Ce.directionalLights.value = X.state.directional, Ce.directionalLightShadows.value = X.state.directionalShadow, Ce.spotLights.value = X.state.spot, Ce.spotLightShadows.value = X.state.spotShadow, Ce.rectAreaLights.value = X.state.rectArea, Ce.ltc_1.value = X.state.rectAreaLTC1, Ce.ltc_2.value = X.state.rectAreaLTC2, Ce.pointLights.value = X.state.point, Ce.pointLightShadows.value = X.state.pointShadow, Ce.hemisphereLights.value = X.state.hemi, Ce.directionalShadowMap.value = X.state.directionalShadowMap, Ce.directionalShadowMatrix.value = X.state.directionalShadowMatrix, Ce.spotShadowMap.value = X.state.spotShadowMap, Ce.spotLightMatrix.value = X.state.spotLightMatrix, Ce.spotLightMap.value = X.state.spotLightMap, Ce.pointShadowMap.value = X.state.pointShadowMap, Ce.pointShadowMatrix.value = X.state.pointShadowMatrix);
    const Xe = Ae.getUniforms(), Tt = Pr.seqWithValue(Xe.seq, Ce);
    return I.currentProgram = Ae, I.uniformsList = Tt, Ae;
  }
  function va(T, N) {
    const W = Se.get(T);
    W.outputEncoding = N.outputEncoding, W.instancing = N.instancing, W.skinning = N.skinning, W.morphTargets = N.morphTargets, W.morphNormals = N.morphNormals, W.morphColors = N.morphColors, W.morphTargetsCount = N.morphTargetsCount, W.numClippingPlanes = N.numClippingPlanes, W.numIntersection = N.numClipIntersection, W.vertexAlphas = N.vertexAlphas, W.vertexTangents = N.vertexTangents, W.toneMapping = N.toneMapping;
  }
  function kl(T, N, W, I, X) {
    N.isScene !== !0 && (N = J), xe.resetTextureUnits();
    const pe = N.fog, Me = I.isMeshStandardMaterial ? N.environment : null, we = v === null ? h.outputEncoding : v.isXRRenderTarget === !0 ? v.texture.encoding : 3e3, Te = (I.isMeshStandardMaterial ? Bt : pt).get(I.envMap || Me), De = I.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, Ae = !!I.normalMap && !!W.attributes.tangent, Ce = !!W.morphAttributes.position, Xe = !!W.morphAttributes.normal, Tt = !!W.morphAttributes.color, ln = I.toneMapped ? h.toneMapping : 0, In = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, Ye = In !== void 0 ? In.length : 0, Re = Se.get(I), $r = d.state.lights;
    if (k === !0 && (K === !0 || T !== b)) {
      const Et = T === b && I.id === M;
      w.setState(I, T, Et);
    }
    let it = !1;
    I.version === Re.__version ? (Re.needsLights && Re.lightsStateVersion !== $r.state.version || Re.outputEncoding !== we || X.isInstancedMesh && Re.instancing === !1 || !X.isInstancedMesh && Re.instancing === !0 || X.isSkinnedMesh && Re.skinning === !1 || !X.isSkinnedMesh && Re.skinning === !0 || Re.envMap !== Te || I.fog === !0 && Re.fog !== pe || Re.numClippingPlanes !== void 0 && (Re.numClippingPlanes !== w.numPlanes || Re.numIntersection !== w.numIntersection) || Re.vertexAlphas !== De || Re.vertexTangents !== Ae || Re.morphTargets !== Ce || Re.morphNormals !== Xe || Re.morphColors !== Tt || Re.toneMapping !== ln || fe.isWebGL2 === !0 && Re.morphTargetsCount !== Ye) && (it = !0) : (it = !0, Re.__version = I.version);
    let Nn = Re.currentProgram;
    it === !0 && (Nn = Gt(I, N, X));
    let Ma = !1, Fi = !1, Kr = !1;
    const mt = Nn.getUniforms(), On = Re.uniforms;
    if (oe.useProgram(Nn.program) && (Ma = !0, Fi = !0, Kr = !0), I.id !== M && (M = I.id, Fi = !0), Ma || b !== T) {
      if (mt.setValue(O, "projectionMatrix", T.projectionMatrix), fe.logarithmicDepthBuffer && mt.setValue(
        O,
        "logDepthBufFC",
        2 / (Math.log(T.far + 1) / Math.LN2)
      ), b !== T && (b = T, Fi = !0, Kr = !0), I.isShaderMaterial || I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshStandardMaterial || I.envMap) {
        const Et = mt.map.cameraPosition;
        Et !== void 0 && Et.setValue(
          O,
          Y.setFromMatrixPosition(T.matrixWorld)
        );
      }
      (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && mt.setValue(O, "isOrthographic", T.isOrthographicCamera === !0), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial || I.isShadowMaterial || X.isSkinnedMesh) && mt.setValue(O, "viewMatrix", T.matrixWorldInverse);
    }
    if (X.isSkinnedMesh) {
      mt.setOptional(O, X, "bindMatrix"), mt.setOptional(O, X, "bindMatrixInverse");
      const Et = X.skeleton;
      Et && (fe.floatVertexTextures ? (Et.boneTexture === null && Et.computeBoneTexture(), mt.setValue(O, "boneTexture", Et.boneTexture, xe), mt.setValue(O, "boneTextureSize", Et.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Jr = W.morphAttributes;
    if ((Jr.position !== void 0 || Jr.normal !== void 0 || Jr.color !== void 0 && fe.isWebGL2 === !0) && ne.update(X, W, I, Nn), (Fi || Re.receiveShadow !== X.receiveShadow) && (Re.receiveShadow = X.receiveShadow, mt.setValue(O, "receiveShadow", X.receiveShadow)), I.isMeshGouraudMaterial && I.envMap !== null && (On.envMap.value = Te, On.flipEnvMap.value = Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1), Fi && (mt.setValue(O, "toneMappingExposure", h.toneMappingExposure), Re.needsLights && Vl(On, Kr), pe && I.fog === !0 && an.refreshFogUniforms(On, pe), an.refreshMaterialUniforms(On, I, G, R, $), Pr.upload(O, Re.uniformsList, On, xe)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (Pr.upload(O, Re.uniformsList, On, xe), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && mt.setValue(O, "center", X.center), mt.setValue(O, "modelViewMatrix", X.modelViewMatrix), mt.setValue(O, "normalMatrix", X.normalMatrix), mt.setValue(O, "modelMatrix", X.matrixWorld), I.isShaderMaterial || I.isRawShaderMaterial) {
      const Et = I.uniformsGroups;
      for (let Qr = 0, Hl = Et.length; Qr < Hl; Qr++)
        if (fe.isWebGL2) {
          const ya = Et[Qr];
          me.update(ya, Nn), me.bind(ya, Nn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Nn;
  }
  function Vl(T, N) {
    T.ambientLightColor.needsUpdate = N, T.lightProbe.needsUpdate = N, T.directionalLights.needsUpdate = N, T.directionalLightShadows.needsUpdate = N, T.pointLights.needsUpdate = N, T.pointLightShadows.needsUpdate = N, T.spotLights.needsUpdate = N, T.spotLightShadows.needsUpdate = N, T.rectAreaLights.needsUpdate = N, T.hemisphereLights.needsUpdate = N;
  }
  function Wl(T) {
    return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return y;
  }, this.getRenderTarget = function() {
    return v;
  }, this.setRenderTargetTextures = function(T, N, W) {
    Se.get(T.texture).__webglTexture = N, Se.get(T.depthTexture).__webglTexture = W;
    const I = Se.get(T);
    I.__hasExternalTextures = !0, I.__hasExternalTextures && (I.__autoAllocateDepthBuffer = W === void 0, I.__autoAllocateDepthBuffer || he.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), I.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(T, N) {
    const W = Se.get(T);
    W.__webglFramebuffer = N, W.__useDefaultFramebuffer = N === void 0;
  }, this.setRenderTarget = function(T, N = 0, W = 0) {
    v = T, _ = N, y = W;
    let I = !0, X = null, pe = !1, Me = !1;
    if (T) {
      const Te = Se.get(T);
      Te.__useDefaultFramebuffer !== void 0 ? (oe.bindFramebuffer(36160, null), I = !1) : Te.__webglFramebuffer === void 0 ? xe.setupRenderTarget(T) : Te.__hasExternalTextures && xe.rebindTextures(T, Se.get(T.texture).__webglTexture, Se.get(T.depthTexture).__webglTexture);
      const De = T.texture;
      (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (Me = !0);
      const Ae = Se.get(T).__webglFramebuffer;
      T.isWebGLCubeRenderTarget ? (X = Ae[N], pe = !0) : fe.isWebGL2 && T.samples > 0 && xe.useMultisampledRTT(T) === !1 ? X = Se.get(T).__webglMultisampledFramebuffer : X = Ae, A.copy(T.viewport), C.copy(T.scissor), x = T.scissorTest;
    } else
      A.copy(D).multiplyScalar(G).floor(), C.copy(B).multiplyScalar(G).floor(), x = q;
    if (oe.bindFramebuffer(36160, X) && fe.drawBuffers && I && oe.drawBuffers(T, X), oe.viewport(A), oe.scissor(C), oe.setScissorTest(x), pe) {
      const Te = Se.get(T.texture);
      O.framebufferTexture2D(36160, 36064, 34069 + N, Te.__webglTexture, W);
    } else if (Me) {
      const Te = Se.get(T.texture), De = N || 0;
      O.framebufferTextureLayer(36160, 36064, Te.__webglTexture, W || 0, De);
    }
    M = -1;
  }, this.readRenderTargetPixels = function(T, N, W, I, X, pe, Me) {
    if (!(T && T.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let we = Se.get(T).__webglFramebuffer;
    if (T.isWebGLCubeRenderTarget && Me !== void 0 && (we = we[Me]), we) {
      oe.bindFramebuffer(36160, we);
      try {
        const Te = T.texture, De = Te.format, Ae = Te.type;
        if (De !== 1023 && se.convert(De) !== O.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Ce = Ae === 1016 && (he.has("EXT_color_buffer_half_float") || fe.isWebGL2 && he.has("EXT_color_buffer_float"));
        if (Ae !== 1009 && se.convert(Ae) !== O.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(Ae === 1015 && (fe.isWebGL2 || he.has("OES_texture_float") || he.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !Ce) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        N >= 0 && N <= T.width - I && W >= 0 && W <= T.height - X && O.readPixels(N, W, I, X, se.convert(De), se.convert(Ae), pe);
      } finally {
        const Te = v !== null ? Se.get(v).__webglFramebuffer : null;
        oe.bindFramebuffer(36160, Te);
      }
    }
  }, this.copyFramebufferToTexture = function(T, N, W = 0) {
    const I = Math.pow(2, -W), X = Math.floor(N.image.width * I), pe = Math.floor(N.image.height * I);
    xe.setTexture2D(N, 0), O.copyTexSubImage2D(3553, W, 0, 0, T.x, T.y, X, pe), oe.unbindTexture();
  }, this.copyTextureToTexture = function(T, N, W, I = 0) {
    const X = N.image.width, pe = N.image.height, Me = se.convert(W.format), we = se.convert(W.type);
    xe.setTexture2D(W, 0), O.pixelStorei(37440, W.flipY), O.pixelStorei(37441, W.premultiplyAlpha), O.pixelStorei(3317, W.unpackAlignment), N.isDataTexture ? O.texSubImage2D(3553, I, T.x, T.y, X, pe, Me, we, N.image.data) : N.isCompressedTexture ? O.compressedTexSubImage2D(3553, I, T.x, T.y, N.mipmaps[0].width, N.mipmaps[0].height, Me, N.mipmaps[0].data) : O.texSubImage2D(3553, I, T.x, T.y, Me, we, N.image), I === 0 && W.generateMipmaps && O.generateMipmap(3553), oe.unbindTexture();
  }, this.copyTextureToTexture3D = function(T, N, W, I, X = 0) {
    if (h.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const pe = T.max.x - T.min.x + 1, Me = T.max.y - T.min.y + 1, we = T.max.z - T.min.z + 1, Te = se.convert(I.format), De = se.convert(I.type);
    let Ae;
    if (I.isData3DTexture)
      xe.setTexture3D(I, 0), Ae = 32879;
    else if (I.isDataArrayTexture)
      xe.setTexture2DArray(I, 0), Ae = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    O.pixelStorei(37440, I.flipY), O.pixelStorei(37441, I.premultiplyAlpha), O.pixelStorei(3317, I.unpackAlignment);
    const Ce = O.getParameter(3314), Xe = O.getParameter(32878), Tt = O.getParameter(3316), ln = O.getParameter(3315), In = O.getParameter(32877), Ye = W.isCompressedTexture ? W.mipmaps[0] : W.image;
    O.pixelStorei(3314, Ye.width), O.pixelStorei(32878, Ye.height), O.pixelStorei(3316, T.min.x), O.pixelStorei(3315, T.min.y), O.pixelStorei(32877, T.min.z), W.isDataTexture || W.isData3DTexture ? O.texSubImage3D(Ae, X, N.x, N.y, N.z, pe, Me, we, Te, De, Ye.data) : W.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), O.compressedTexSubImage3D(Ae, X, N.x, N.y, N.z, pe, Me, we, Te, Ye.data)) : O.texSubImage3D(Ae, X, N.x, N.y, N.z, pe, Me, we, Te, De, Ye), O.pixelStorei(3314, Ce), O.pixelStorei(32878, Xe), O.pixelStorei(3316, Tt), O.pixelStorei(3315, ln), O.pixelStorei(32877, In), X === 0 && I.generateMipmaps && O.generateMipmap(Ae), oe.unbindTexture();
  }, this.initTexture = function(T) {
    T.isCubeTexture ? xe.setTextureCube(T, 0) : T.isData3DTexture ? xe.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? xe.setTexture2DArray(T, 0) : xe.setTexture2D(T, 0), oe.unbindTexture();
  }, this.resetState = function() {
    _ = 0, y = 0, v = null, oe.reset(), j.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class jd extends Go {
}
jd.prototype.isWebGL1Renderer = !0;
class Zd extends Nt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class Rr extends vt {
  constructor(e, t, n, i, r, a, s, c, l) {
    super(e, t, n, i, r, a, s, c, l), this.isVideoTexture = !0, this.minFilter = a !== void 0 ? a : 1006, this.magFilter = r !== void 0 ? r : 1006, this.generateMipmaps = !1;
    const u = this;
    function f() {
      u.needsUpdate = !0, e.requestVideoFrameCallback(f);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(f);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
const io = {
  enabled: !1,
  files: {},
  add: function(o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function(o) {
    if (this.enabled !== !1)
      return this.files[o];
  },
  remove: function(o) {
    delete this.files[o];
  },
  clear: function() {
    this.files = {};
  }
};
class $d {
  constructor(e, t, n) {
    const i = this;
    let r = !1, a = 0, s = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      s++, r === !1 && i.onStart !== void 0 && i.onStart(u, a, s), r = !0;
    }, this.itemEnd = function(u) {
      a++, i.onProgress !== void 0 && i.onProgress(u, a, s), a === s && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, f) {
      return l.push(u, f), this;
    }, this.removeHandler = function(u) {
      const f = l.indexOf(u);
      return f !== -1 && l.splice(f, 2), this;
    }, this.getHandler = function(u) {
      for (let f = 0, d = l.length; f < d; f += 2) {
        const m = l[f], g = l[f + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    };
  }
}
const Kd = /* @__PURE__ */ new $d();
class ko {
  constructor(e) {
    this.manager = e !== void 0 ? e : Kd, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
class Jd extends ko {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = io.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const s = Zi("img");
    function c() {
      u(), io.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(f) {
      u(), i && i(f), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      s.removeEventListener("load", c, !1), s.removeEventListener("error", l, !1);
    }
    return s.addEventListener("load", c, !1), s.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (s.crossOrigin = this.crossOrigin), r.manager.itemStart(e), s.src = e, s;
  }
}
class Qd extends ko {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new vt(), a = new Jd(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(s) {
      r.image = s, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Qs
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Qs);
function pn(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Vo(o, e) {
  o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ot = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ei = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, na, ft, Ge, Wt = 1e8, Oe = 1 / Wt, Us = Math.PI * 2, ep = Us / 4, tp = 0, Wo = Math.sqrt, np = Math.cos, ip = Math.sin, at = function(e) {
  return typeof e == "string";
}, He = function(e) {
  return typeof e == "function";
}, xn = function(e) {
  return typeof e == "number";
}, ia = function(e) {
  return typeof e > "u";
}, sn = function(e) {
  return typeof e == "object";
}, Mt = function(e) {
  return e !== !1;
}, ra = function() {
  return typeof window < "u";
}, Lr = function(e) {
  return He(e) || at(e);
}, Ho = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, dt = Array.isArray, Bs = /(?:-?\.?\d|\.)+/gi, qo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Mi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Es = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Xo = /[+-]=-?[.\d]+/, Yo = /[^,'"\[\]\s]+/gi, rp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ke, Jt, zs, sa, Ut = {}, Or = {}, jo, Zo = function(e) {
  return (Or = ei(e, Ut)) && wt;
}, aa = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, $i = function(e, t) {
  return !t && console.warn(e);
}, $o = function(e, t) {
  return e && (Ut[e] = t) && Or && (Or[e] = t) || Ut;
}, Ki = function() {
  return 0;
}, sp = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Fr = {
  suppressEvents: !0,
  kill: !1
}, ap = {
  suppressEvents: !0
}, oa = {}, An = [], Gs = {}, Ko, Lt = {}, As = {}, ro = 30, Ir = [], la = "", ca = function(e) {
  var t = e[0], n, i;
  if (sn(t) || He(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (i = Ir.length; i-- && !Ir[i].targetTest(t); )
      ;
    n = Ir[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new yl(e[i], n))) || e.splice(i, 1);
  return e;
}, Zn = function(e) {
  return e._gsap || ca(Ht(e))[0]._gsap;
}, Jo = function(e, t, n) {
  return (n = e[t]) && He(n) ? e[t]() : ia(n) && e.getAttribute && e.getAttribute(t) || n;
}, yt = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, qe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, st = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Si = function(e, t) {
  var n = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
}, op = function(e, t) {
  for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, Ur = function() {
  var e = An.length, t = An.slice(0), n, i;
  for (Gs = {}, An.length = 0, n = 0; n < e; n++)
    i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Qo = function(e, t, n, i) {
  An.length && !ft && Ur(), e.render(t, n, i || ft && t < 0 && (e._initted || e._startAt)), An.length && !ft && Ur();
}, el = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Yo).length < 2 ? t : at(e) ? e.trim() : e;
}, tl = function(e) {
  return e;
}, qt = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, lp = function(e) {
  return function(t, n) {
    for (var i in n)
      i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
  };
}, ei = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, so = function o(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = sn(t[n]) ? o(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, Br = function(e, t) {
  var n = {}, i;
  for (i in e)
    i in t || (n[i] = e[i]);
  return n;
}, qi = function(e) {
  var t = e.parent || ke, n = e.keyframes ? lp(dt(e.keyframes)) : qt;
  if (Mt(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, cp = function(e, t) {
  for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, nl = function(e, t, n, i, r) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var a = e[i], s;
  if (r)
    for (s = t[r]; a && a[r] > s; )
      a = a._prev;
  return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = a, t.parent = t._dp = e, t;
}, Yr = function(e, t, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var r = t._prev, a = t._next;
  r ? r._next = a : e[n] === t && (e[n] = a), a ? a._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null;
}, Ln = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, $n = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, up = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ks = function(e, t, n, i) {
  return e._startAt && (ft ? e._startAt.revert(Fr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, hp = function o(e) {
  return !e || e._ts && o(e.parent);
}, ao = function(e) {
  return e._repeat ? Ai(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Ai = function(e, t) {
  var n = Math.floor(e /= t);
  return e && n === e ? n - 1 : n;
}, zr = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, jr = function(e) {
  return e._end = st(e._start + (e._tDur / Math.abs(e._ts || e._rts || Oe) || 0));
}, Zr = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = st(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), jr(e), n._dirty || $n(n, e)), e;
}, il = function(e, t) {
  var n;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = zr(e.rawTime(), t), (!t._dur || or(0, t.totalDuration(), n) - t._tTime > Oe) && t.render(n, !0)), $n(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -Oe;
  }
}, en = function(e, t, n, i) {
  return t.parent && Ln(t), t._start = st((xn(n) ? n : n || e !== ke ? Vt(e, n, t) : e._time) + t._delay), t._end = st(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), nl(e, t, "_first", "_last", e._sort ? "_start" : 0), Vs(t) || (e._recent = t), i || il(e, t), e._ts < 0 && Zr(e, e._tTime), e;
}, rl = function(e, t) {
  return (Ut.ScrollTrigger || aa("scrollTrigger", t)) && Ut.ScrollTrigger.create(t, e);
}, sl = function(e, t, n, i, r) {
  if (ha(e, t, r), !e._initted)
    return 1;
  if (!n && e._pt && !ft && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ko !== Pt.frame)
    return An.push(e), e._lazy = [r, i], 1;
}, fp = function o(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
}, Vs = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, dp = function(e, t, n, i) {
  var r = e.ratio, a = t < 0 || !t && (!e._start && fp(e) && !(!e._initted && Vs(e)) || (e._ts < 0 || e._dp._ts < 0) && !Vs(e)) ? 0 : 1, s = e._rDelay, c = 0, l, u, f;
  if (s && e._repeat && (c = or(0, e._tDur, t), u = Ai(c, s), e._yoyo && u & 1 && (a = 1 - a), u !== Ai(e._tTime, s) && (r = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== r || ft || i || e._zTime === Oe || !t && e._zTime) {
    if (!e._initted && sl(e, t, i, n, c))
      return;
    for (f = e._zTime, e._zTime = t || (n ? Oe : 0), n || (n = t && !f), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = c, l = e._pt; l; )
      l.r(a, l.d), l = l._next;
    t < 0 && ks(e, t, n, !0), e._onUpdate && !n && It(e, "onUpdate"), c && e._repeat && !n && e.parent && It(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Ln(e, 1), !n && !ft && (It(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, pp = function(e, t, n) {
  var i;
  if (n > t)
    for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, Ci = function(e, t, n, i) {
  var r = e._repeat, a = st(t) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= a / e._dur), e._dur = a, e._tDur = r ? r < 0 ? 1e10 : st(a * (r + 1) + e._rDelay * r) : a, s > 0 && !i && Zr(e, e._tTime = e._tDur * s), e.parent && jr(e), n || $n(e.parent, e), e;
}, oo = function(e) {
  return e instanceof xt ? $n(e) : Ci(e, e._dur);
}, mp = {
  _start: 0,
  endTime: Ki,
  totalDuration: Ki
}, Vt = function o(e, t, n) {
  var i = e.labels, r = e._recent || mp, a = e.duration() >= Wt ? r.endTime(!1) : e._dur, s, c, l;
  return at(t) && (isNaN(t) || t in i) ? (c = t.charAt(0), l = t.substr(-1) === "%", s = t.indexOf("="), c === "<" || c === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (c === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (s < 0 ? r : n).totalDuration() / 100 : 1)) : s < 0 ? (t in i || (i[t] = a), i[t]) : (c = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), l && n && (c = c / 100 * (dt(n) ? n[0] : n).totalDuration()), s > 1 ? o(e, t.substr(0, s - 1), n) + c : a + c)) : t == null ? a : +t;
}, Xi = function(e, t, n) {
  var i = xn(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), a = t[r], s, c;
  if (i && (a.duration = t[1]), a.parent = n, e) {
    for (s = a, c = n; c && !("immediateRender" in s); )
      s = c.vars.defaults || {}, c = Mt(c.vars.inherit) && c.parent;
    a.immediateRender = Mt(s.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[r - 1];
  }
  return new Ze(t[0], a, t[r + 1]);
}, Pn = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, or = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, ht = function(e, t) {
  return !at(e) || !(t = rp.exec(e)) ? "" : t[1];
}, gp = function(e, t, n) {
  return Pn(n, function(i) {
    return or(e, t, i);
  });
}, Ws = [].slice, al = function(e, t) {
  return e && sn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && sn(e[0])) && !e.nodeType && e !== Jt;
}, _p = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(i) {
    var r;
    return at(i) && !t || al(i, 1) ? (r = n).push.apply(r, Ht(i)) : n.push(i);
  }) || n;
}, Ht = function(e, t, n) {
  return Ge && !t && Ge.selector ? Ge.selector(e) : at(e) && !n && (zs || !Ri()) ? Ws.call((t || sa).querySelectorAll(e), 0) : dt(e) ? _p(e, n) : al(e) ? Ws.call(e, 0) : e ? [e] : [];
}, Hs = function(e) {
  return e = Ht(e)[0] || $i("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return Ht(t, n.querySelectorAll ? n : n === e ? $i("Invalid scope") || sa.createElement("div") : e);
  };
}, ol = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ll = function(e) {
  if (He(e))
    return e;
  var t = sn(e) ? e : {
    each: e
  }, n = Kn(t.ease), i = t.from || 0, r = parseFloat(t.base) || 0, a = {}, s = i > 0 && i < 1, c = isNaN(i) || s, l = t.axis, u = i, f = i;
  return at(i) ? u = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && c && (u = i[0], f = i[1]), function(d, m, g) {
    var h = (g || t).length, p = a[h], _, y, v, M, b, A, C, x, S;
    if (!p) {
      if (S = t.grid === "auto" ? 0 : (t.grid || [1, Wt])[1], !S) {
        for (C = -Wt; C < (C = g[S++].getBoundingClientRect().left) && S < h; )
          ;
        S < h && S--;
      }
      for (p = a[h] = [], _ = c ? Math.min(S, h) * u - 0.5 : i % S, y = S === Wt ? 0 : c ? h * f / S - 0.5 : i / S | 0, C = 0, x = Wt, A = 0; A < h; A++)
        v = A % S - _, M = y - (A / S | 0), p[A] = b = l ? Math.abs(l === "y" ? M : v) : Wo(v * v + M * M), b > C && (C = b), b < x && (x = b);
      i === "random" && ol(p), p.max = C - x, p.min = x, p.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (S > h ? h - 1 : l ? l === "y" ? h / S : S : Math.max(S, h / S)) || 0) * (i === "edges" ? -1 : 1), p.b = h < 0 ? r - h : r, p.u = ht(t.amount || t.each) || 0, n = n && h < 0 ? xl(n) : n;
    }
    return h = (p[d] - p.min) / p.max || 0, st(p.b + (n ? n(h) : h) * p.v) + p.u;
  };
}, qs = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var i = st(Math.round(parseFloat(n) / e) * e * t);
    return (i - i % 1) / t + (xn(n) ? 0 : ht(n));
  };
}, cl = function(e, t) {
  var n = dt(e), i, r;
  return !n && sn(e) && (i = n = e.radius || Wt, e.values ? (e = Ht(e.values), (r = !xn(e[0])) && (i *= i)) : e = qs(e.increment)), Pn(t, n ? He(e) ? function(a) {
    return r = e(a), Math.abs(r - a) <= i ? r : a;
  } : function(a) {
    for (var s = parseFloat(r ? a.x : a), c = parseFloat(r ? a.y : 0), l = Wt, u = 0, f = e.length, d, m; f--; )
      r ? (d = e[f].x - s, m = e[f].y - c, d = d * d + m * m) : d = Math.abs(e[f] - s), d < l && (l = d, u = f);
    return u = !i || l <= i ? e[u] : a, r || u === a || xn(a) ? u : u + ht(a);
  } : qs(e));
}, ul = function(e, t, n, i) {
  return Pn(dt(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
    return dt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
  });
}, xp = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduce(function(r, a) {
      return a(r);
    }, i);
  };
}, vp = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || ht(n));
  };
}, Mp = function(e, t, n) {
  return fl(e, t, 0, 1, n);
}, hl = function(e, t, n) {
  return Pn(n, function(i) {
    return e[~~t(i)];
  });
}, yp = function o(e, t, n) {
  var i = t - e;
  return dt(e) ? hl(e, o(0, e.length), t) : Pn(n, function(r) {
    return (i + (r - e) % i) % i + e;
  });
}, Sp = function o(e, t, n) {
  var i = t - e, r = i * 2;
  return dt(e) ? hl(e, o(0, e.length - 1), t) : Pn(n, function(a) {
    return a = (r + (a - e) % r) % r || 0, e + (a > i ? r - a : a);
  });
}, Ji = function(e) {
  for (var t = 0, n = "", i, r, a, s; ~(i = e.indexOf("random(", t)); )
    a = e.indexOf(")", i), s = e.charAt(i + 7) === "[", r = e.substr(i + 7, a - i - 7).match(s ? Yo : Bs), n += e.substr(t, i - t) + ul(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5), t = a + 1;
  return n + e.substr(t, e.length - t);
}, fl = function(e, t, n, i, r) {
  var a = t - e, s = i - n;
  return Pn(r, function(c) {
    return n + ((c - e) / a * s || 0);
  });
}, bp = function o(e, t, n, i) {
  var r = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!r) {
    var a = at(e), s = {}, c, l, u, f, d;
    if (n === !0 && (i = 1) && (n = null), a)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (dt(e) && !dt(t)) {
      for (u = [], f = e.length, d = f - 2, l = 1; l < f; l++)
        u.push(o(e[l - 1], e[l]));
      f--, r = function(g) {
        g *= f;
        var h = Math.min(d, ~~g);
        return u[h](g - h);
      }, n = t;
    } else
      i || (e = ei(dt(e) ? [] : {}, e));
    if (!u) {
      for (c in t)
        ua.call(s, e, c, "get", t[c]);
      r = function(g) {
        return pa(g, s) || (a ? e.p : e);
      };
    }
  }
  return Pn(n, r);
}, lo = function(e, t, n) {
  var i = e.labels, r = Wt, a, s, c;
  for (a in i)
    s = i[a] - t, s < 0 == !!n && s && r > (s = Math.abs(s)) && (c = a, r = s);
  return c;
}, It = function(e, t, n) {
  var i = e.vars, r = i[t], a = Ge, s = e._ctx, c, l, u;
  if (r)
    return c = i[t + "Params"], l = i.callbackScope || e, n && An.length && Ur(), s && (Ge = s), u = c ? r.apply(l, c) : r.call(l), Ge = a, u;
}, Wi = function(e) {
  return Ln(e), e.scrollTrigger && e.scrollTrigger.kill(!!ft), e.progress() < 1 && It(e, "onInterrupt"), e;
}, yi, dl = [], pl = function(e) {
  if (e)
    if (e = !e.name && e.default || e, ra() || e.headless) {
      var t = e.name, n = He(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, r = {
        init: Ki,
        render: pa,
        add: ua,
        kill: zp,
        modifier: Bp,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: da,
        aliases: {},
        register: 0
      };
      if (Ri(), e !== i) {
        if (Lt[t])
          return;
        qt(i, qt(Br(e, r), a)), ei(i.prototype, ei(r, Br(e, a))), Lt[i.prop = t] = i, e.targetTest && (Ir.push(i), oa[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      $o(t, i), e.register && e.register(wt, i, St);
    } else
      dl.push(e);
}, Ie = 255, Hi = {
  aqua: [0, Ie, Ie],
  lime: [0, Ie, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Ie],
  navy: [0, 0, 128],
  white: [Ie, Ie, Ie],
  olive: [128, 128, 0],
  yellow: [Ie, Ie, 0],
  orange: [Ie, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Ie, 0, 0],
  pink: [Ie, 192, 203],
  cyan: [0, Ie, Ie],
  transparent: [Ie, Ie, Ie, 0]
}, Cs = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Ie + 0.5 | 0;
}, ml = function(e, t, n) {
  var i = e ? xn(e) ? [e >> 16, e >> 8 & Ie, e & Ie] : 0 : Hi.black, r, a, s, c, l, u, f, d, m, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Hi[e])
      i = Hi[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (r = e.charAt(1), a = e.charAt(2), s = e.charAt(3), e = "#" + r + r + a + a + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ie, i & Ie, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ie, e & Ie];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(Bs), !t)
        c = +i[0] % 360 / 360, l = +i[1] / 100, u = +i[2] / 100, a = u <= 0.5 ? u * (l + 1) : u + l - u * l, r = u * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = Cs(c + 1 / 3, r, a), i[1] = Cs(c, r, a), i[2] = Cs(c - 1 / 3, r, a);
      else if (~e.indexOf("="))
        return i = e.match(qo), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Bs) || Hi.transparent;
    i = i.map(Number);
  }
  return t && !g && (r = i[0] / Ie, a = i[1] / Ie, s = i[2] / Ie, f = Math.max(r, a, s), d = Math.min(r, a, s), u = (f + d) / 2, f === d ? c = l = 0 : (m = f - d, l = u > 0.5 ? m / (2 - f - d) : m / (f + d), c = f === r ? (a - s) / m + (a < s ? 6 : 0) : f === a ? (s - r) / m + 2 : (r - a) / m + 4, c *= 60), i[0] = ~~(c + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, gl = function(e) {
  var t = [], n = [], i = -1;
  return e.split(Cn).forEach(function(r) {
    var a = r.match(Mi) || [];
    t.push.apply(t, a), n.push(i += a.length + 1);
  }), t.c = n, t;
}, co = function(e, t, n) {
  var i = "", r = (e + i).match(Cn), a = t ? "hsla(" : "rgba(", s = 0, c, l, u, f;
  if (!r)
    return e;
  if (r = r.map(function(d) {
    return (d = ml(d, t, 1)) && a + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), n && (u = gl(e), c = n.c, c.join(i) !== u.c.join(i)))
    for (l = e.replace(Cn, "1").split(Mi), f = l.length - 1; s < f; s++)
      i += l[s] + (~c.indexOf(s) ? r.shift() || a + "0,0,0,0)" : (u.length ? u : r.length ? r : n).shift());
  if (!l)
    for (l = e.split(Cn), f = l.length - 1; s < f; s++)
      i += l[s] + r[s];
  return i + l[f];
}, Cn = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Hi)
    o += "|" + e + "\\b";
  return new RegExp(o + ")", "gi");
}(), wp = /hsl[a]?\(/, _l = function(e) {
  var t = e.join(" "), n;
  if (Cn.lastIndex = 0, Cn.test(t))
    return n = wp.test(t), e[1] = co(e[1], n), e[0] = co(e[0], n, gl(e[1])), !0;
}, Qi, Pt = function() {
  var o = Date.now, e = 500, t = 33, n = o(), i = n, r = 1e3 / 240, a = r, s = [], c, l, u, f, d, m, g = function h(p) {
    var _ = o() - i, y = p === !0, v, M, b, A;
    if ((_ > e || _ < 0) && (n += _ - t), i += _, b = i - n, v = b - a, (v > 0 || y) && (A = ++f.frame, d = b - f.time * 1e3, f.time = b = b / 1e3, a += v + (v >= r ? 4 : r - v), M = 1), y || (c = l(h)), M)
      for (m = 0; m < s.length; m++)
        s[m](b, d, A, p);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(p) {
      return d / (1e3 / (p || 60));
    },
    wake: function() {
      jo && (!zs && ra() && (Jt = zs = window, sa = Jt.document || {}, Ut.gsap = wt, (Jt.gsapVersions || (Jt.gsapVersions = [])).push(wt.version), Zo(Or || Jt.GreenSockGlobals || !Jt.gsap && Jt || {}), dl.forEach(pl)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && f.sleep(), l = u || function(p) {
        return setTimeout(p, a - f.time * 1e3 + 1 | 0);
      }, Qi = 1, g(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(c), Qi = 0, l = Ki;
    },
    lagSmoothing: function(p, _) {
      e = p || 1 / 0, t = Math.min(_ || 33, e);
    },
    fps: function(p) {
      r = 1e3 / (p || 240), a = f.time * 1e3 + r;
    },
    add: function(p, _, y) {
      var v = _ ? function(M, b, A, C) {
        p(M, b, A, C), f.remove(v);
      } : p;
      return f.remove(p), s[y ? "unshift" : "push"](v), Ri(), v;
    },
    remove: function(p, _) {
      ~(_ = s.indexOf(p)) && s.splice(_, 1) && m >= _ && m--;
    },
    _listeners: s
  }, f;
}(), Ri = function() {
  return !Qi && Pt.wake();
}, Ee = {}, Tp = /^[\d.\-M][\d.\-,\s]/, Ep = /["']/g, Ap = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], r = 1, a = n.length, s, c, l; r < a; r++)
    c = n[r], s = r !== a - 1 ? c.lastIndexOf(",") : c.length, l = c.substr(0, s), t[i] = isNaN(l) ? l.replace(Ep, "").trim() : +l, i = c.substr(s + 1).trim();
  return t;
}, Cp = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
}, Rp = function(e) {
  var t = (e + "").split("("), n = Ee[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Ap(t[1])] : Cp(e).split(",").map(el)) : Ee._CE && Tp.test(e) ? Ee._CE("", e) : n;
}, xl = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, vl = function o(e, t) {
  for (var n = e._first, i; n; )
    n instanceof xt ? o(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? o(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
}, Kn = function(e, t) {
  return e && (He(e) ? e : Ee[e] || Rp(e)) || t;
}, ii = function(e, t, n, i) {
  n === void 0 && (n = function(c) {
    return 1 - t(1 - c);
  }), i === void 0 && (i = function(c) {
    return c < 0.5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2;
  });
  var r = {
    easeIn: t,
    easeOut: n,
    easeInOut: i
  }, a;
  return yt(e, function(s) {
    Ee[s] = Ut[s] = r, Ee[a = s.toLowerCase()] = n;
    for (var c in r)
      Ee[a + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = Ee[s + "." + c] = r[c];
  }), r;
}, Ml = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Rs = function o(e, t, n) {
  var i = t >= 1 ? t : 1, r = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), a = r / Us * (Math.asin(1 / i) || 0), s = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * ip((u - a) * r) + 1;
  }, c = e === "out" ? s : e === "in" ? function(l) {
    return 1 - s(1 - l);
  } : Ml(s);
  return r = Us / r, c.config = function(l, u) {
    return o(e, l, u);
  }, c;
}, Ls = function o(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(a) {
    return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
  }, i = e === "out" ? n : e === "in" ? function(r) {
    return 1 - n(1 - r);
  } : Ml(n);
  return i.config = function(r) {
    return o(e, r);
  }, i;
};
yt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
  var t = e < 5 ? e + 1 : e;
  ii(o + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
ii("Elastic", Rs("in"), Rs("out"), Rs());
(function(o, e) {
  var t = 1 / e, n = 2 * t, i = 2.5 * t, r = function(s) {
    return s < t ? o * s * s : s < n ? o * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? o * (s -= 2.25 / e) * s + 0.9375 : o * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  ii("Bounce", function(a) {
    return 1 - r(1 - a);
  }, r);
})(7.5625, 2.75);
ii("Expo", function(o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
ii("Circ", function(o) {
  return -(Wo(1 - o * o) - 1);
});
ii("Sine", function(o) {
  return o === 1 ? 1 : -np(o * ep) + 1;
});
ii("Back", Ls("in"), Ls("out"), Ls());
Ee.SteppedEase = Ee.steps = Ut.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, i = e + (t ? 0 : 1), r = t ? 1 : 0, a = 1 - Oe;
    return function(s) {
      return ((i * or(0, a, s) | 0) + r) * n;
    };
  }
};
Ei.ease = Ee["quad.out"];
yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return la += o + "," + o + "Params,";
});
var yl = function(e, t) {
  this.id = tp++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Jo, this.set = t ? t.getSetter : da;
}, er = /* @__PURE__ */ function() {
  function o(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ci(this, +t.duration, 1, 1), this.data = t.data, Ge && (this._ctx = Ge, Ge.data.push(this)), Qi || Pt.wake();
  }
  var e = o.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Ci(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, i) {
    if (Ri(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (Zr(this, n), !r._dp || r.parent || il(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && en(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Oe || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Qo(this, n, i)), this;
  }, e.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + ao(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + ao(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(n, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * r, i) : this._repeat ? Ai(this._tTime, r) + 1 : 1;
  }, e.timeScale = function(n, i) {
    if (!arguments.length)
      return this._rts === -Oe ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var r = this.parent && this._ts ? zr(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -Oe ? 0 : this._rts, this.totalTime(or(-Math.abs(this._delay), this._tDur, r), i !== !1), jr(this), up(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ri(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Oe && (this._tTime -= Oe)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && en(i, this, n - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (Mt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zr(i.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = ap);
    var i = ft;
    return ft = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), ft = i, this;
  }, e.globalTime = function(n) {
    for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
      r = i._start + r / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : r;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, oo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, oo(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, i) {
    return this.totalTime(Vt(this, n), Mt(i));
  }, e.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, Mt(i));
  }, e.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Oe : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Oe, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, i = this._start, r;
    return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= i && r < this.endTime(!0) - Oe);
  }, e.eventCallback = function(n, i, r) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[n] = i, r && (a[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = i)) : delete a[n], this) : a[n];
  }, e.then = function(n) {
    var i = this;
    return new Promise(function(r) {
      var a = He(n) ? n : tl, s = function() {
        var l = i.then;
        i.then = null, He(a) && (a = a(i)) && (a.then || a === i) && (i.then = l), r(a), i.then = l;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s;
    });
  }, e.kill = function() {
    Wi(this);
  }, o;
}();
qt(er.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Oe,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var xt = /* @__PURE__ */ function(o) {
  Vo(e, o);
  function e(n, i) {
    var r;
    return n === void 0 && (n = {}), r = o.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = Mt(n.sortChildren), ke && en(n.parent || ke, pn(r), i), n.reversed && r.reverse(), n.paused && r.paused(!0), n.scrollTrigger && rl(pn(r), n.scrollTrigger), r;
  }
  var t = e.prototype;
  return t.to = function(i, r, a) {
    return Xi(0, arguments, this), this;
  }, t.from = function(i, r, a) {
    return Xi(1, arguments, this), this;
  }, t.fromTo = function(i, r, a, s) {
    return Xi(2, arguments, this), this;
  }, t.set = function(i, r, a) {
    return r.duration = 0, r.parent = this, qi(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new Ze(i, r, Vt(this, a), 1), this;
  }, t.call = function(i, r, a) {
    return en(this, Ze.delayedCall(0, i, r), a);
  }, t.staggerTo = function(i, r, a, s, c, l, u) {
    return a.duration = r, a.stagger = a.stagger || s, a.onComplete = l, a.onCompleteParams = u, a.parent = this, new Ze(i, a, Vt(this, c)), this;
  }, t.staggerFrom = function(i, r, a, s, c, l, u) {
    return a.runBackwards = 1, qi(a).immediateRender = Mt(a.immediateRender), this.staggerTo(i, r, a, s, c, l, u);
  }, t.staggerFromTo = function(i, r, a, s, c, l, u, f) {
    return s.startAt = a, qi(s).immediateRender = Mt(s.immediateRender), this.staggerTo(i, r, s, c, l, u, f);
  }, t.render = function(i, r, a) {
    var s = this._time, c = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, u = i <= 0 ? 0 : st(i), f = this._zTime < 0 != i < 0 && (this._initted || !l), d, m, g, h, p, _, y, v, M, b, A, C;
    if (this !== ke && u > c && i >= 0 && (u = c), u !== this._tTime || a || f) {
      if (s !== this._time && l && (u += this._time - s, i += this._time - s), d = u, M = this._start, v = this._ts, _ = !v, f && (l || (s = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (A = this._yoyo, p = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(p * 100 + i, r, a);
        if (d = st(u % p), u === c ? (h = this._repeat, d = l) : (h = ~~(u / p), h && h === u / p && (d = l, h--), d > l && (d = l)), b = Ai(this._tTime, p), !s && this._tTime && b !== h && this._tTime - b * p - this._dur <= 0 && (b = h), A && h & 1 && (d = l - d, C = 1), h !== b && !this._lock) {
          var x = A && b & 1, S = x === (A && h & 1);
          if (h < b && (x = !x), s = x ? 0 : u % l ? l : u, this._lock = 1, this.render(s || (C ? 0 : st(h * p)), r, !l)._lock = 0, this._tTime = u, !r && this.parent && It(this, "onRepeat"), this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1), s && s !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, c = this._tDur, S && (this._lock = 2, s = x ? l : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !C && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          vl(this, C);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = pp(this, st(s), st(d)), y && (u -= d - (d = y._start))), this._tTime = u, this._time = d, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && d && !r && !h && (It(this, "onStart"), this._tTime !== u))
        return this;
      if (d >= s && i >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || d >= m._start) && m._ts && y !== m) {
            if (m.parent !== this)
              return this.render(i, r, a);
            if (m.render(m._ts > 0 ? (d - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (d - m._start) * m._ts, r, a), d !== this._time || !this._ts && !_) {
              y = 0, g && (u += this._zTime = -Oe);
              break;
            }
          }
          m = g;
        }
      else {
        m = this._last;
        for (var R = i < 0 ? i : d; m; ) {
          if (g = m._prev, (m._act || R <= m._end) && m._ts && y !== m) {
            if (m.parent !== this)
              return this.render(i, r, a);
            if (m.render(m._ts > 0 ? (R - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (R - m._start) * m._ts, r, a || ft && (m._initted || m._startAt)), d !== this._time || !this._ts && !_) {
              y = 0, g && (u += this._zTime = R ? -Oe : Oe);
              break;
            }
          }
          m = g;
        }
      }
      if (y && !r && (this.pause(), y.render(d >= s ? 0 : -Oe)._zTime = d >= s ? 1 : -1, this._ts))
        return this._start = M, jr(this), this.render(i, r, a);
      this._onUpdate && !r && It(this, "onUpdate", !0), (u === c && this._tTime >= this.totalDuration() || !u && s) && (M === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (u === c && this._ts > 0 || !u && this._ts < 0) && Ln(this, 1), !r && !(i < 0 && !s) && (u || s || !c) && (It(this, u === c && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < c && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, r) {
    var a = this;
    if (xn(r) || (r = Vt(this, r, i)), !(i instanceof er)) {
      if (dt(i))
        return i.forEach(function(s) {
          return a.add(s, r);
        }), this;
      if (at(i))
        return this.addLabel(i, r);
      if (He(i))
        i = Ze.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? en(this, i, r) : this;
  }, t.getChildren = function(i, r, a, s) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), a === void 0 && (a = !0), s === void 0 && (s = -Wt);
    for (var c = [], l = this._first; l; )
      l._start >= s && (l instanceof Ze ? r && c.push(l) : (a && c.push(l), i && c.push.apply(c, l.getChildren(!0, r, a)))), l = l._next;
    return c;
  }, t.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
      if (r[a].vars.id === i)
        return r[a];
  }, t.remove = function(i) {
    return at(i) ? this.removeLabel(i) : He(i) ? this.killTweensOf(i) : (Yr(this, i), i === this._recent && (this._recent = this._last), $n(this));
  }, t.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = st(Pt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, r) {
    return this.labels[i] = Vt(this, r), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, r, a) {
    var s = Ze.delayedCall(0, r || Ki, a);
    return s.data = "isPause", this._hasPause = 1, en(this, s, Vt(this, i));
  }, t.removePause = function(i) {
    var r = this._first;
    for (i = Vt(this, i); r; )
      r._start === i && r.data === "isPause" && Ln(r), r = r._next;
  }, t.killTweensOf = function(i, r, a) {
    for (var s = this.getTweensOf(i, a), c = s.length; c--; )
      wn !== s[c] && s[c].kill(i, r);
    return this;
  }, t.getTweensOf = function(i, r) {
    for (var a = [], s = Ht(i), c = this._first, l = xn(r), u; c; )
      c instanceof Ze ? op(c._targets, s) && (l ? (!wn || c._initted && c._ts) && c.globalTime(0) <= r && c.globalTime(c.totalDuration()) > r : !r || c.isActive()) && a.push(c) : (u = c.getTweensOf(s, r)).length && a.push.apply(a, u), c = c._next;
    return a;
  }, t.tweenTo = function(i, r) {
    r = r || {};
    var a = this, s = Vt(a, i), c = r, l = c.startAt, u = c.onStart, f = c.onStartParams, d = c.immediateRender, m, g = Ze.to(a, qt({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: r.duration || Math.abs((s - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || Oe,
      onStart: function() {
        if (a.pause(), !m) {
          var p = r.duration || Math.abs((s - (l && "time" in l ? l.time : a._time)) / a.timeScale());
          g._dur !== p && Ci(g, p, 0, 1).render(g._time, !0, !0), m = 1;
        }
        u && u.apply(g, f || []);
      }
    }, r));
    return d ? g.render(0) : g;
  }, t.tweenFromTo = function(i, r, a) {
    return this.tweenTo(r, qt({
      startAt: {
        time: Vt(this, i)
      }
    }, a));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), lo(this, Vt(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), lo(this, Vt(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Oe);
  }, t.shiftChildren = function(i, r, a) {
    a === void 0 && (a = 0);
    for (var s = this._first, c = this.labels, l; s; )
      s._start >= a && (s._start += i, s._end += i), s = s._next;
    if (r)
      for (l in c)
        c[l] >= a && (c[l] += i);
    return $n(this);
  }, t.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(i), r = r._next;
    return o.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, a; r; )
      a = r._next, this.remove(r), r = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), $n(this);
  }, t.totalDuration = function(i) {
    var r = 0, a = this, s = a._last, c = Wt, l, u, f;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (f = a.parent; s; )
        l = s._prev, s._dirty && s.totalDuration(), u = s._start, u > c && a._sort && s._ts && !a._lock ? (a._lock = 1, en(a, s, u - s._delay, 1)._lock = 0) : c = u, u < 0 && s._ts && (r -= u, (!f && !a._dp || f && f.smoothChildTiming) && (a._start += u / a._ts, a._time -= u, a._tTime -= u), a.shiftChildren(-u, !1, -1 / 0), c = 0), s._end > r && s._ts && (r = s._end), s = l;
      Ci(a, a === ke && a._time > r ? a._time : r, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, e.updateRoot = function(i) {
    if (ke._ts && (Qo(ke, zr(i, ke)), Ko = Pt.frame), Pt.frame >= ro) {
      ro += Ot.autoSleep || 120;
      var r = ke._first;
      if ((!r || !r._ts) && Ot.autoSleep && Pt._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || Pt.sleep();
      }
    }
  }, e;
}(er);
qt(xt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Lp = function(e, t, n, i, r, a, s) {
  var c = new St(this._pt, e, t, 0, 1, Al, null, r), l = 0, u = 0, f, d, m, g, h, p, _, y;
  for (c.b = n, c.e = i, n += "", i += "", (_ = ~i.indexOf("random(")) && (i = Ji(i)), a && (y = [n, i], a(y, e, t), n = y[0], i = y[1]), d = n.match(Es) || []; f = Es.exec(i); )
    g = f[0], h = i.substring(l, f.index), m ? m = (m + 1) % 5 : h.substr(-5) === "rgba(" && (m = 1), g !== d[u++] && (p = parseFloat(d[u - 1]) || 0, c._pt = {
      _next: c._pt,
      p: h || u === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: g.charAt(1) === "=" ? Si(p, g) - p : parseFloat(g) - p,
      m: m && m < 4 ? Math.round : 0
    }, l = Es.lastIndex);
  return c.c = l < i.length ? i.substring(l, i.length) : "", c.fp = s, (Xo.test(i) || _) && (c.e = 0), this._pt = c, c;
}, ua = function(e, t, n, i, r, a, s, c, l, u) {
  He(i) && (i = i(r || 0, e, a));
  var f = e[t], d = n !== "get" ? n : He(f) ? l ? e[t.indexOf("set") || !He(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : f, m = He(f) ? l ? Np : Tl : fa, g;
  if (at(i) && (~i.indexOf("random(") && (i = Ji(i)), i.charAt(1) === "=" && (g = Si(d, i) + (ht(d) || 0), (g || g === 0) && (i = g))), !u || d !== i || Xs)
    return !isNaN(d * i) && i !== "" ? (g = new St(this._pt, e, t, +d || 0, i - (d || 0), typeof f == "boolean" ? Up : El, 0, m), l && (g.fp = l), s && g.modifier(s, this, e), this._pt = g) : (!f && !(t in e) && aa(t, i), Lp.call(this, e, t, d, i, m, c || Ot.stringFilter, l));
}, Dp = function(e, t, n, i, r) {
  if (He(e) && (e = Yi(e, r, t, n, i)), !sn(e) || e.style && e.nodeType || dt(e) || Ho(e))
    return at(e) ? Yi(e, r, t, n, i) : e;
  var a = {}, s;
  for (s in e)
    a[s] = Yi(e[s], r, t, n, i);
  return a;
}, Sl = function(e, t, n, i, r, a) {
  var s, c, l, u;
  if (Lt[e] && (s = new Lt[e]()).init(r, s.rawVars ? t[e] : Dp(t[e], i, r, a, n), n, i, a) !== !1 && (n._pt = c = new St(n._pt, r, e, 0, 1, s.render, s, 0, s.priority), n !== yi))
    for (l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length; u--; )
      l[s._props[u]] = c;
  return s;
}, wn, Xs, ha = function o(e, t, n) {
  var i = e.vars, r = i.ease, a = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, f = i.yoyoEase, d = i.keyframes, m = i.autoRevert, g = e._dur, h = e._startAt, p = e._targets, _ = e.parent, y = _ && _.data === "nested" ? _.vars.targets : p, v = e._overwrite === "auto" && !na, M = e.timeline, b, A, C, x, S, R, G, z, P, D, B, q, Z;
  if (M && (!d || !r) && (r = "none"), e._ease = Kn(r, Ei.ease), e._yEase = f ? xl(Kn(f === !0 ? r : f, Ei.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !M && !!i.runBackwards, !M || d && !i.stagger) {
    if (z = p[0] ? Zn(p[0]).harness : 0, q = z && i[z.prop], b = Br(i, oa), h && (h._zTime < 0 && h.progress(1), t < 0 && u && s && !m ? h.render(-1, !0) : h.revert(u && g ? Fr : sp), h._lazy = 0), a) {
      if (Ln(e._startAt = Ze.set(p, qt({
        data: "isStart",
        overwrite: !1,
        parent: _,
        immediateRender: !0,
        lazy: !h && Mt(c),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return It(e, "onUpdate");
        },
        stagger: 0
      }, a))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ft || !s && !m) && e._startAt.revert(Fr), s && g && t <= 0 && n <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && g && !h) {
      if (t && (s = !1), C = qt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !h && Mt(c),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), q && (C[z.prop] = q), Ln(e._startAt = Ze.set(p, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ft ? e._startAt.revert(Fr) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        o(e._startAt, Oe, Oe);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, c = g && Mt(c) || c && !g, A = 0; A < p.length; A++) {
      if (S = p[A], G = S._gsap || ca(p)[A]._gsap, e._ptLookup[A] = D = {}, Gs[G.id] && An.length && Ur(), B = y === p ? A : y.indexOf(S), z && (P = new z()).init(S, q || b, e, B, y) !== !1 && (e._pt = x = new St(e._pt, S, P.name, 0, 1, P.render, P, 0, P.priority), P._props.forEach(function(k) {
        D[k] = x;
      }), P.priority && (R = 1)), !z || q)
        for (C in b)
          Lt[C] && (P = Sl(C, b, e, B, S, y)) ? P.priority && (R = 1) : D[C] = x = ua.call(e, S, C, "get", b[C], B, y, 0, i.stringFilter);
      e._op && e._op[A] && e.kill(S, e._op[A]), v && e._pt && (wn = e, ke.killTweensOf(S, D, e.globalTime(t)), Z = !e.parent, wn = 0), e._pt && c && (Gs[G.id] = 1);
    }
    R && Cl(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = l, e._initted = (!e._op || e._pt) && !Z, d && t <= 0 && M.render(Wt, !0, !0);
}, Pp = function(e, t, n, i, r, a, s, c) {
  var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, f, d, m;
  if (!l)
    for (l = e._ptCache[t] = [], d = e._ptLookup, m = e._targets.length; m--; ) {
      if (u = d[m][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return Xs = 1, e.vars[t] = "+=0", ha(e, s), Xs = 0, c ? $i(t + " not eligible for reset") : 1;
      l.push(u);
    }
  for (m = l.length; m--; )
    f = l[m], u = f._pt || f, u.s = (i || i === 0) && !r ? i : u.s + (i || 0) + a * u.c, u.c = n - u.s, f.e && (f.e = qe(n) + ht(f.e)), f.b && (f.b = u.s + ht(f.b));
}, Fp = function(e, t) {
  var n = e[0] ? Zn(e[0]).harness : 0, i = n && n.aliases, r, a, s, c;
  if (!i)
    return t;
  r = ei({}, t);
  for (a in i)
    if (a in r)
      for (c = i[a].split(","), s = c.length; s--; )
        r[c[s]] = r[a];
  return r;
}, Ip = function(e, t, n, i) {
  var r = t.ease || i || "power1.inOut", a, s;
  if (dt(t))
    s = n[e] || (n[e] = []), t.forEach(function(c, l) {
      return s.push({
        t: l / (t.length - 1) * 100,
        v: c,
        e: r
      });
    });
  else
    for (a in t)
      s = n[a] || (n[a] = []), a === "ease" || s.push({
        t: parseFloat(e),
        v: t[a],
        e: r
      });
}, Yi = function(e, t, n, i, r) {
  return He(e) ? e.call(t, n, i, r) : at(e) && ~e.indexOf("random(") ? Ji(e) : e;
}, bl = la + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", wl = {};
yt(bl + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return wl[o] = 1;
});
var Ze = /* @__PURE__ */ function(o) {
  Vo(e, o);
  function e(n, i, r, a) {
    var s;
    typeof i == "number" && (r.duration = i, i = r, r = null), s = o.call(this, a ? i : qi(i)) || this;
    var c = s.vars, l = c.duration, u = c.delay, f = c.immediateRender, d = c.stagger, m = c.overwrite, g = c.keyframes, h = c.defaults, p = c.scrollTrigger, _ = c.yoyoEase, y = i.parent || ke, v = (dt(n) || Ho(n) ? xn(n[0]) : "length" in i) ? [n] : Ht(n), M, b, A, C, x, S, R, G;
    if (s._targets = v.length ? ca(v) : $i("GSAP target " + n + " not found. https://gsap.com", !Ot.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = m, g || d || Lr(l) || Lr(u)) {
      if (i = s.vars, M = s.timeline = new xt({
        data: "nested",
        defaults: h || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), M.kill(), M.parent = M._dp = pn(s), M._start = 0, d || Lr(l) || Lr(u)) {
        if (C = v.length, R = d && ll(d), sn(d))
          for (x in d)
            ~bl.indexOf(x) && (G || (G = {}), G[x] = d[x]);
        for (b = 0; b < C; b++)
          A = Br(i, wl), A.stagger = 0, _ && (A.yoyoEase = _), G && ei(A, G), S = v[b], A.duration = +Yi(l, pn(s), b, S, v), A.delay = (+Yi(u, pn(s), b, S, v) || 0) - s._delay, !d && C === 1 && A.delay && (s._delay = u = A.delay, s._start += u, A.delay = 0), M.to(S, A, R ? R(b, S, v) : 0), M._ease = Ee.none;
        M.duration() ? l = u = 0 : s.timeline = 0;
      } else if (g) {
        qi(qt(M.vars.defaults, {
          ease: "none"
        })), M._ease = Kn(g.ease || i.ease || "none");
        var z = 0, P, D, B;
        if (dt(g))
          g.forEach(function(q) {
            return M.to(v, q, ">");
          }), M.duration();
        else {
          A = {};
          for (x in g)
            x === "ease" || x === "easeEach" || Ip(x, g[x], A, g.easeEach);
          for (x in A)
            for (P = A[x].sort(function(q, Z) {
              return q.t - Z.t;
            }), z = 0, b = 0; b < P.length; b++)
              D = P[b], B = {
                ease: D.e,
                duration: (D.t - (b ? P[b - 1].t : 0)) / 100 * l
              }, B[x] = D.v, M.to(v, B, z), z += B.duration;
          M.duration() < l && M.to({}, {
            duration: l - M.duration()
          });
        }
      }
      l || s.duration(l = M.duration());
    } else
      s.timeline = 0;
    return m === !0 && !na && (wn = pn(s), ke.killTweensOf(v), wn = 0), en(y, pn(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), (f || !l && !g && s._start === st(y._time) && Mt(f) && hp(pn(s)) && y.data !== "nested") && (s._tTime = -Oe, s.render(Math.max(0, -u) || 0)), p && rl(pn(s), p), s;
  }
  var t = e.prototype;
  return t.render = function(i, r, a) {
    var s = this._time, c = this._tDur, l = this._dur, u = i < 0, f = i > c - Oe && !u ? c : i < Oe ? 0 : i, d, m, g, h, p, _, y, v, M;
    if (!l)
      dp(this, i, r, a);
    else if (f !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (d = f, v = this.timeline, this._repeat) {
        if (h = l + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(h * 100 + i, r, a);
        if (d = st(f % h), f === c ? (g = this._repeat, d = l) : (g = ~~(f / h), g && g === st(f / h) && (d = l, g--), d > l && (d = l)), _ = this._yoyo && g & 1, _ && (M = this._yEase, d = l - d), p = Ai(this._tTime, h), d === s && !a && this._initted && g === p)
          return this._tTime = f, this;
        g !== p && (v && this._yEase && vl(v, _), this.vars.repeatRefresh && !_ && !this._lock && this._time !== h && this._initted && (this._lock = a = 1, this.render(st(h * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (sl(this, u ? i : d, a, r, f))
          return this._tTime = 0, this;
        if (s !== this._time && !(a && this.vars.repeatRefresh && g !== p))
          return this;
        if (l !== this._dur)
          return this.render(i, r, a);
      }
      if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (M || this._ease)(d / l), this._from && (this.ratio = y = 1 - y), d && !s && !r && !g && (It(this, "onStart"), this._tTime !== f))
        return this;
      for (m = this._pt; m; )
        m.r(y, m.d), m = m._next;
      v && v.render(i < 0 ? i : v._dur * v._ease(d / this._dur), r, a) || this._startAt && (this._zTime = i), this._onUpdate && !r && (u && ks(this, i, r, a), It(this, "onUpdate")), this._repeat && g !== p && this.vars.onRepeat && !r && this.parent && It(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && ks(this, i, !0, !0), (i || !l) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ln(this, 1), !r && !(u && !s) && (f || s || _) && (It(this, f === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < c && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, r, a, s, c) {
    Qi || Pt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || ha(this, l), u = this._ease(l / this._dur), Pp(this, i, r, a, s, u, l, c) ? this.resetTo(i, r, a, s, 1) : (Zr(this, 0), this.parent || nl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? Wi(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, wn && wn.vars.overwrite !== !0)._first || Wi(this), this.parent && a !== this.timeline.totalDuration() && Ci(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var s = this._targets, c = i ? Ht(i) : s, l = this._ptLookup, u = this._pt, f, d, m, g, h, p, _;
    if ((!r || r === "all") && cp(s, c))
      return r === "all" && (this._pt = 0), Wi(this);
    for (f = this._op = this._op || [], r !== "all" && (at(r) && (h = {}, yt(r, function(y) {
      return h[y] = 1;
    }), r = h), r = Fp(s, r)), _ = s.length; _--; )
      if (~c.indexOf(s[_])) {
        d = l[_], r === "all" ? (f[_] = r, g = d, m = {}) : (m = f[_] = f[_] || {}, g = r);
        for (h in g)
          p = d && d[h], p && ((!("kill" in p.d) || p.d.kill(h) === !0) && Yr(this, p, "_pt"), delete d[h]), m !== "all" && (m[h] = 1);
      }
    return this._initted && !this._pt && u && Wi(this), this;
  }, e.to = function(i, r) {
    return new e(i, r, arguments[2]);
  }, e.from = function(i, r) {
    return Xi(1, arguments);
  }, e.delayedCall = function(i, r, a, s) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: s
    });
  }, e.fromTo = function(i, r, a) {
    return Xi(2, arguments);
  }, e.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(i, r);
  }, e.killTweensOf = function(i, r, a) {
    return ke.killTweensOf(i, r, a);
  }, e;
}(er);
qt(Ze.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
yt("staggerTo,staggerFrom,staggerFromTo", function(o) {
  Ze[o] = function() {
    var e = new xt(), t = Ws.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var fa = function(e, t, n) {
  return e[t] = n;
}, Tl = function(e, t, n) {
  return e[t](n);
}, Np = function(e, t, n, i) {
  return e[t](i.fp, n);
}, Op = function(e, t, n) {
  return e.setAttribute(t, n);
}, da = function(e, t) {
  return He(e[t]) ? Tl : ia(e[t]) && e.setAttribute ? Op : fa;
}, El = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Up = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Al = function(e, t) {
  var n = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, pa = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, Bp = function(e, t, n, i) {
  for (var r = this._pt, a; r; )
    a = r._next, r.p === i && r.modifier(e, t, n), r = a;
}, zp = function(e) {
  for (var t = this._pt, n, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Yr(this, t, "_pt") : t.dep || (n = 1), t = i;
  return !n;
}, Gp = function(e, t, n, i) {
  i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
}, Cl = function(e) {
  for (var t = e._pt, n, i, r, a; t; ) {
    for (n = t._next, i = r; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : a) ? t._prev._next = t : r = t, (t._next = i) ? i._prev = t : a = t, t = n;
  }
  e._pt = r;
}, St = /* @__PURE__ */ function() {
  function o(t, n, i, r, a, s, c, l, u) {
    this.t = n, this.s = r, this.c = a, this.p = i, this.r = s || El, this.d = c || this, this.set = l || fa, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = o.prototype;
  return e.modifier = function(n, i, r) {
    this.mSet = this.mSet || this.set, this.set = Gp, this.m = n, this.mt = r, this.tween = i;
  }, o;
}();
yt(la + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return oa[o] = 1;
});
Ut.TweenMax = Ut.TweenLite = Ze;
Ut.TimelineLite = Ut.TimelineMax = xt;
ke = new xt({
  sortChildren: !1,
  defaults: Ei,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ot.stringFilter = _l;
var Jn = [], Nr = {}, kp = [], uo = 0, Vp = 0, Ds = function(e) {
  return (Nr[e] || kp).map(function(t) {
    return t();
  });
}, Ys = function() {
  var e = Date.now(), t = [];
  e - uo > 2 && (Ds("matchMediaInit"), Jn.forEach(function(n) {
    var i = n.queries, r = n.conditions, a, s, c, l;
    for (s in i)
      a = Jt.matchMedia(i[s]).matches, a && (c = 1), a !== r[s] && (r[s] = a, l = 1);
    l && (n.revert(), c && t.push(n));
  }), Ds("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), uo = e, Ds("matchMedia"));
}, Rl = /* @__PURE__ */ function() {
  function o(t, n) {
    this.selector = n && Hs(n), this.data = [], this._r = [], this.isReverted = !1, this.id = Vp++, t && this.add(t);
  }
  var e = o.prototype;
  return e.add = function(n, i, r) {
    He(n) && (r = i, i = n, n = He);
    var a = this, s = function() {
      var l = Ge, u = a.selector, f;
      return l && l !== a && l.data.push(a), r && (a.selector = Hs(r)), Ge = a, f = i.apply(a, arguments), He(f) && a._r.push(f), Ge = l, a.selector = u, a.isReverted = !1, f;
    };
    return a.last = s, n === He ? s(a, function(c) {
      return a.add(null, c);
    }) : n ? a[n] = s : s;
  }, e.ignore = function(n) {
    var i = Ge;
    Ge = null, n(this), Ge = i;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? n.push.apply(n, i.getTweens()) : i instanceof Ze && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, i) {
    var r = this;
    if (n ? function() {
      for (var s = r.getTweens(), c = r.data.length, l; c--; )
        l = r.data[c], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(u) {
          return s.splice(s.indexOf(u), 1);
        }));
      for (s.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, f) {
        return f.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(n);
      }), c = r.data.length; c--; )
        l = r.data[c], l instanceof xt ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Ze) && l.revert && l.revert(n);
      r._r.forEach(function(u) {
        return u(n, r);
      }), r.isReverted = !0;
    }() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var a = Jn.length; a--; )
        Jn[a].id === this.id && Jn.splice(a, 1);
  }, e.revert = function(n) {
    this.kill(n || {});
  }, o;
}(), Wp = /* @__PURE__ */ function() {
  function o(t) {
    this.contexts = [], this.scope = t, Ge && Ge.data.push(this);
  }
  var e = o.prototype;
  return e.add = function(n, i, r) {
    sn(n) || (n = {
      matches: n
    });
    var a = new Rl(0, r || this.scope), s = a.conditions = {}, c, l, u;
    Ge && !a.selector && (a.selector = Ge.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = n;
    for (l in n)
      l === "all" ? u = 1 : (c = Jt.matchMedia(n[l]), c && (Jn.indexOf(a) < 0 && Jn.push(a), (s[l] = c.matches) && (u = 1), c.addListener ? c.addListener(Ys) : c.addEventListener("change", Ys)));
    return u && i(a, function(f) {
      return a.add(null, f);
    }), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, o;
}(), Gr = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(i) {
      return pl(i);
    });
  },
  timeline: function(e) {
    return new xt(e);
  },
  getTweensOf: function(e, t) {
    return ke.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, i) {
    at(e) && (e = Ht(e)[0]);
    var r = Zn(e || {}).get, a = n ? tl : el;
    return n === "native" && (n = ""), e && (t ? a((Lt[t] && Lt[t].get || r)(e, t, n, i)) : function(s, c, l) {
      return a((Lt[s] && Lt[s].get || r)(e, s, c, l));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = Ht(e), e.length > 1) {
      var i = e.map(function(u) {
        return wt.quickSetter(u, t, n);
      }), r = i.length;
      return function(u) {
        for (var f = r; f--; )
          i[f](u);
      };
    }
    e = e[0] || {};
    var a = Lt[t], s = Zn(e), c = s.harness && (s.harness.aliases || {})[t] || t, l = a ? function(u) {
      var f = new a();
      yi._pt = 0, f.init(e, n ? u + n : u, yi, 0, [e]), f.render(1, f), yi._pt && pa(1, yi);
    } : s.set(e, c);
    return a ? l : function(u) {
      return l(e, c, n ? u + n : u, s, 1);
    };
  },
  quickTo: function(e, t, n) {
    var i, r = wt.to(e, ei((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})), a = function(c, l, u) {
      return r.resetTo(t, c, l, u);
    };
    return a.tween = r, a;
  },
  isTweening: function(e) {
    return ke.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Kn(e.ease, Ei.ease)), so(Ei, e || {});
  },
  config: function(e) {
    return so(Ot, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, i = e.plugins, r = e.defaults, a = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !Lt[s] && !Ut[s] && $i(t + " effect requires " + s + " plugin.");
    }), As[t] = function(s, c, l) {
      return n(Ht(s), qt(c || {}, r), l);
    }, a && (xt.prototype[t] = function(s, c, l) {
      return this.add(As[t](s, sn(c) ? c : (l = c) && {}, this), l);
    });
  },
  registerEase: function(e, t) {
    Ee[e] = Kn(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Kn(e, t) : Ee;
  },
  getById: function(e) {
    return ke.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new xt(e), i, r;
    for (n.smoothChildTiming = Mt(e.smoothChildTiming), ke.remove(n), n._dp = 0, n._time = n._tTime = ke._time, i = ke._first; i; )
      r = i._next, (t || !(!i._dur && i instanceof Ze && i.vars.onComplete === i._targets[0])) && en(n, i, i._start - i._delay), i = r;
    return en(ke, n, 0), n;
  },
  context: function(e, t) {
    return e ? new Rl(e, t) : Ge;
  },
  matchMedia: function(e) {
    return new Wp(e);
  },
  matchMediaRefresh: function() {
    return Jn.forEach(function(e) {
      var t = e.conditions, n, i;
      for (i in t)
        t[i] && (t[i] = !1, n = 1);
      n && e.revert();
    }) || Ys();
  },
  addEventListener: function(e, t) {
    var n = Nr[e] || (Nr[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = Nr[e], i = n && n.indexOf(t);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: yp,
    wrapYoyo: Sp,
    distribute: ll,
    random: ul,
    snap: cl,
    normalize: Mp,
    getUnit: ht,
    clamp: gp,
    splitColor: ml,
    toArray: Ht,
    selector: Hs,
    mapRange: fl,
    pipe: xp,
    unitize: vp,
    interpolate: bp,
    shuffle: ol
  },
  install: Zo,
  effects: As,
  ticker: Pt,
  updateRoot: xt.updateRoot,
  plugins: Lt,
  globalTimeline: ke,
  core: {
    PropTween: St,
    globals: $o,
    Tween: Ze,
    Timeline: xt,
    Animation: er,
    getCache: Zn,
    _removeLinkedListItem: Yr,
    reverting: function() {
      return ft;
    },
    context: function(e) {
      return e && Ge && (Ge.data.push(e), e._ctx = Ge), Ge;
    },
    suppressOverwrites: function(e) {
      return na = e;
    }
  }
};
yt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Gr[o] = Ze[o];
});
Pt.add(xt.updateRoot);
yi = Gr.to({}, {
  duration: 0
});
var Hp = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, qp = function(e, t) {
  var n = e._targets, i, r, a;
  for (i in t)
    for (r = n.length; r--; )
      a = e._ptLookup[r][i], a && (a = a.d) && (a._pt && (a = Hp(a, i)), a && a.modifier && a.modifier(t[i], e, n[r], i));
}, Ps = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, r, a) {
      a._onInit = function(s) {
        var c, l;
        if (at(r) && (c = {}, yt(r, function(u) {
          return c[u] = 1;
        }), r = c), t) {
          c = {};
          for (l in r)
            c[l] = t(r[l]);
          r = c;
        }
        qp(s, r);
      };
    }
  };
}, wt = Gr.registerPlugin({
  name: "attr",
  init: function(e, t, n, i, r) {
    var a, s, c;
    this.tween = n;
    for (a in t)
      c = e.getAttribute(a) || "", s = this.add(e, "setAttribute", (c || 0) + "", t[a], i, r, 0, 0, a), s.op = a, s.b = c, this._props.push(a);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      ft ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, Ps("roundProps", qs), Ps("modifiers"), Ps("snap", cl)) || Gr;
Ze.version = xt.version = wt.version = "3.12.5";
jo = 1;
ra() && Ri();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ho, Tn, bi, ma, Xn, fo, ga, Xp = function() {
  return typeof window < "u";
}, vn = {}, Hn = 180 / Math.PI, wi = Math.PI / 180, xi = Math.atan2, po = 1e8, _a = /([A-Z])/g, Yp = /(left|right|width|margin|padding|x)/i, jp = /[\s,\(]\S/, tn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, js = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Zp = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, $p = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Kp = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, Ll = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Dl = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Jp = function(e, t, n) {
  return e.style[t] = n;
}, Qp = function(e, t, n) {
  return e.style.setProperty(t, n);
}, em = function(e, t, n) {
  return e._gsap[t] = n;
}, tm = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, nm = function(e, t, n, i, r) {
  var a = e._gsap;
  a.scaleX = a.scaleY = n, a.renderTransform(r, a);
}, im = function(e, t, n, i, r) {
  var a = e._gsap;
  a[t] = n, a.renderTransform(r, a);
}, We = "transform", bt = We + "Origin", rm = function o(e, t) {
  var n = this, i = this.target, r = i.style, a = i._gsap;
  if (e in vn && r) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = tn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return n.tfm[s] = mn(i, s);
      }) : this.tfm[e] = a.x ? a[e] : mn(i, e), e === bt && (this.tfm.zOrigin = a.zOrigin);
    else
      return tn.transform.split(",").forEach(function(s) {
        return o.call(n, s, t);
      });
    if (this.props.indexOf(We) >= 0)
      return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(bt, t, "")), e = We;
  }
  (r || t) && this.props.push(e, t, r[e]);
}, Pl = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, sm = function() {
  var e = this.props, t = this.target, n = t.style, i = t._gsap, r, a;
  for (r = 0; r < e.length; r += 3)
    e[r + 1] ? t[e[r]] = e[r + 2] : e[r + 2] ? n[e[r]] = e[r + 2] : n.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(_a, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = ga(), (!r || !r.isStart) && !n[We] && (Pl(n), i.zOrigin && n[bt] && (n[bt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Fl = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: sm,
    save: rm
  };
  return e._gsap || wt.core.getCache(e), t && t.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, Il, Zs = function(e, t) {
  var n = Tn.createElementNS ? Tn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Tn.createElement(e);
  return n && n.style ? n : Tn.createElement(e);
}, rn = function o(e, t, n) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(_a, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && o(e, Li(t) || t, 1) || "";
}, mo = "O,Moz,ms,Ms,Webkit".split(","), Li = function(e, t, n) {
  var i = t || Xn, r = i.style, a = 5;
  if (e in r && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(mo[a] + e in r); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? mo[a] : "") + e;
}, $s = function() {
  Xp() && window.document && (ho = window, Tn = ho.document, bi = Tn.documentElement, Xn = Zs("div") || {
    style: {}
  }, Zs("div"), We = Li(We), bt = We + "Origin", Xn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Il = !!Li("perspective"), ga = wt.core.reverting, ma = 1);
}, Fs = function o(e) {
  var t = Zs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, r = this.style.cssText, a;
  if (bi.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o;
    } catch {
    }
  else
    this._gsapBBox && (a = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), bi.removeChild(t), this.style.cssText = r, a;
}, go = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, Nl = function(e) {
  var t;
  try {
    t = e.getBBox();
  } catch {
    t = Fs.call(e, !0);
  }
  return t && (t.width || t.height) || e.getBBox === Fs || (t = Fs.call(e, !0)), t && !t.width && !t.x && !t.y ? {
    x: +go(e, ["x", "cx", "x1"]) || 0,
    y: +go(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Ol = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Nl(e));
}, ti = function(e, t) {
  if (t) {
    var n = e.style, i;
    t in vn && t !== bt && (t = We), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(_a, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, En = function(e, t, n, i, r, a) {
  var s = new St(e._pt, t, n, 0, 1, a ? Dl : Ll);
  return e._pt = s, s.b = i, s.e = r, e._props.push(n), s;
}, _o = {
  deg: 1,
  rad: 1,
  turn: 1
}, am = {
  grid: 1,
  flex: 1
}, Dn = function o(e, t, n, i) {
  var r = parseFloat(n) || 0, a = (n + "").trim().substr((r + "").length) || "px", s = Xn.style, c = Yp.test(t), l = e.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), f = 100, d = i === "px", m = i === "%", g, h, p, _;
  if (i === a || !r || _o[i] || _o[a])
    return r;
  if (a !== "px" && !d && (r = o(e, t, n, "px")), _ = e.getCTM && Ol(e), (m || a === "%") && (vn[t] || ~t.indexOf("adius")))
    return g = _ ? e.getBBox()[c ? "width" : "height"] : e[u], qe(m ? r / g * f : r / 100 * g);
  if (s[c ? "width" : "height"] = f + (d ? a : i), h = ~t.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, _ && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Tn || !h.appendChild) && (h = Tn.body), p = h._gsap, p && m && p.width && c && p.time === Pt.time && !p.uncache)
    return qe(r / p.width * f);
  if (m && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = f + i, g = e[u], y ? e.style[t] = y : ti(e, t);
  } else
    (m || a === "%") && !am[rn(h, "display")] && (s.position = rn(e, "position")), h === e && (s.position = "static"), h.appendChild(Xn), g = Xn[u], h.removeChild(Xn), s.position = "absolute";
  return c && m && (p = Zn(h), p.time = Pt.time, p.width = h[u]), qe(d ? g * r / f : g && r ? f / g * r : 0);
}, mn = function(e, t, n, i) {
  var r;
  return ma || $s(), t in tn && t !== "transform" && (t = tn[t], ~t.indexOf(",") && (t = t.split(",")[0])), vn[t] && t !== "transform" ? (r = nr(e, i), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : Vr(rn(e, bt)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = kr[t] && kr[t](e, t, n) || rn(e, t) || Jo(e, t) || (t === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? Dn(e, t, r, n) + n : r;
}, om = function(e, t, n, i) {
  if (!n || n === "none") {
    var r = Li(t, e, 1), a = r && rn(e, r, 1);
    a && a !== n ? (t = r, n = a) : t === "borderColor" && (n = rn(e, "borderTopColor"));
  }
  var s = new St(this._pt, e.style, t, 0, 1, Al), c = 0, l = 0, u, f, d, m, g, h, p, _, y, v, M, b;
  if (s.b = n, s.e = i, n += "", i += "", i === "auto" && (h = e.style[t], e.style[t] = i, i = rn(e, t) || i, h ? e.style[t] = h : ti(e, t)), u = [n, i], _l(u), n = u[0], i = u[1], d = n.match(Mi) || [], b = i.match(Mi) || [], b.length) {
    for (; f = Mi.exec(i); )
      p = f[0], y = i.substring(c, f.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), p !== (h = d[l++] || "") && (m = parseFloat(h) || 0, M = h.substr((m + "").length), p.charAt(1) === "=" && (p = Si(m, p) + M), _ = parseFloat(p), v = p.substr((_ + "").length), c = Mi.lastIndex - v.length, v || (v = v || Ot.units[t] || M, c === i.length && (i += v, s.e += v)), M !== v && (m = Dn(e, t, h, v) || 0), s._pt = {
        _next: s._pt,
        p: y || l === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: _ - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = c < i.length ? i.substring(c, i.length) : "";
  } else
    s.r = t === "display" && i === "none" ? Dl : Ll;
  return Xo.test(i) && (s.e = 0), this._pt = s, s;
}, xo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, lm = function(e) {
  var t = e.split(" "), n = t[0], i = t[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = xo[n] || n, t[1] = xo[i] || i, t.join(" ");
}, cm = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, i = n.style, r = t.u, a = n._gsap, s, c, l;
    if (r === "all" || r === !0)
      i.cssText = "", c = 1;
    else
      for (r = r.split(","), l = r.length; --l > -1; )
        s = r[l], vn[s] && (c = 1, s = s === "transformOrigin" ? bt : We), ti(n, s);
    c && (ti(n, We), a && (a.svg && n.removeAttribute("transform"), nr(n, 1), a.uncache = 1, Pl(i)));
  }
}, kr = {
  clearProps: function(e, t, n, i, r) {
    if (r.data !== "isFromStart") {
      var a = e._pt = new St(e._pt, t, n, 0, 0, cm);
      return a.u = i, a.pr = -10, a.tween = r, e._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, tr = [1, 0, 0, 1, 0, 0], Ul = {}, Bl = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, vo = function(e) {
  var t = rn(e, We);
  return Bl(t) ? tr : t.substr(7).match(qo).map(qe);
}, xa = function(e, t) {
  var n = e._gsap || Zn(e), i = e.style, r = vo(e), a, s, c, l;
  return n.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix, r = [c.a, c.b, c.c, c.d, c.e, c.f], r.join(",") === "1,0,0,1,0,0" ? tr : r) : (r === tr && !e.offsetParent && e !== bi && !n.svg && (c = i.display, i.display = "block", a = e.parentNode, (!a || !e.offsetParent) && (l = 1, s = e.nextElementSibling, bi.appendChild(e)), r = vo(e), c ? i.display = c : ti(e, "display"), l && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : bi.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, Ks = function(e, t, n, i, r, a) {
  var s = e._gsap, c = r || xa(e, !0), l = s.xOrigin || 0, u = s.yOrigin || 0, f = s.xOffset || 0, d = s.yOffset || 0, m = c[0], g = c[1], h = c[2], p = c[3], _ = c[4], y = c[5], v = t.split(" "), M = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, A, C, x, S;
  n ? c !== tr && (C = m * p - g * h) && (x = M * (p / C) + b * (-h / C) + (h * y - p * _) / C, S = M * (-g / C) + b * (m / C) - (m * y - g * _) / C, M = x, b = S) : (A = Nl(e), M = A.x + (~v[0].indexOf("%") ? M / 100 * A.width : M), b = A.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * A.height : b)), i || i !== !1 && s.smooth ? (_ = M - l, y = b - u, s.xOffset = f + (_ * m + y * h) - _, s.yOffset = d + (_ * g + y * p) - y) : s.xOffset = s.yOffset = 0, s.xOrigin = M, s.yOrigin = b, s.smooth = !!i, s.origin = t, s.originIsAbsolute = !!n, e.style[bt] = "0px 0px", a && (En(a, s, "xOrigin", l, M), En(a, s, "yOrigin", u, b), En(a, s, "xOffset", f, s.xOffset), En(a, s, "yOffset", d, s.yOffset)), e.setAttribute("data-svg-origin", M + " " + b);
}, nr = function(e, t) {
  var n = e._gsap || new yl(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var i = e.style, r = n.scaleX < 0, a = "px", s = "deg", c = getComputedStyle(e), l = rn(e, bt) || "0", u, f, d, m, g, h, p, _, y, v, M, b, A, C, x, S, R, G, z, P, D, B, q, Z, k, K, $, le, F, Y, J, ee;
  return u = f = d = h = p = _ = y = v = M = 0, m = g = 1, n.svg = !!(e.getCTM && Ol(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[We] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[We] !== "none" ? c[We] : "")), i.scale = i.rotate = i.translate = "none"), C = xa(e, n.svg), n.svg && (n.uncache ? (k = e.getBBox(), l = n.xOrigin - k.x + "px " + (n.yOrigin - k.y) + "px", Z = "") : Z = !t && e.getAttribute("data-svg-origin"), Ks(e, Z || l, !!Z || n.originIsAbsolute, n.smooth !== !1, C)), b = n.xOrigin || 0, A = n.yOrigin || 0, C !== tr && (G = C[0], z = C[1], P = C[2], D = C[3], u = B = C[4], f = q = C[5], C.length === 6 ? (m = Math.sqrt(G * G + z * z), g = Math.sqrt(D * D + P * P), h = G || z ? xi(z, G) * Hn : 0, y = P || D ? xi(P, D) * Hn + h : 0, y && (g *= Math.abs(Math.cos(y * wi))), n.svg && (u -= b - (b * G + A * P), f -= A - (b * z + A * D))) : (ee = C[6], Y = C[7], $ = C[8], le = C[9], F = C[10], J = C[11], u = C[12], f = C[13], d = C[14], x = xi(ee, F), p = x * Hn, x && (S = Math.cos(-x), R = Math.sin(-x), Z = B * S + $ * R, k = q * S + le * R, K = ee * S + F * R, $ = B * -R + $ * S, le = q * -R + le * S, F = ee * -R + F * S, J = Y * -R + J * S, B = Z, q = k, ee = K), x = xi(-P, F), _ = x * Hn, x && (S = Math.cos(-x), R = Math.sin(-x), Z = G * S - $ * R, k = z * S - le * R, K = P * S - F * R, J = D * R + J * S, G = Z, z = k, P = K), x = xi(z, G), h = x * Hn, x && (S = Math.cos(x), R = Math.sin(x), Z = G * S + z * R, k = B * S + q * R, z = z * S - G * R, q = q * S - B * R, G = Z, B = k), p && Math.abs(p) + Math.abs(h) > 359.9 && (p = h = 0, _ = 180 - _), m = qe(Math.sqrt(G * G + z * z + P * P)), g = qe(Math.sqrt(q * q + ee * ee)), x = xi(B, q), y = Math.abs(x) > 2e-4 ? x * Hn : 0, M = J ? 1 / (J < 0 ? -J : J) : 0), n.svg && (Z = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Bl(rn(e, We)), Z && e.setAttribute("transform", Z))), Math.abs(y) > 90 && Math.abs(y) < 270 && (r ? (m *= -1, y += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = f - ((n.yPercent = f && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = d + a, n.scaleX = qe(m), n.scaleY = qe(g), n.rotation = qe(h) + s, n.rotationX = qe(p) + s, n.rotationY = qe(_) + s, n.skewX = y + s, n.skewY = v + s, n.transformPerspective = M + a, (n.zOrigin = parseFloat(l.split(" ")[2]) || !t && n.zOrigin || 0) && (i[bt] = Vr(l)), n.xOffset = n.yOffset = 0, n.force3D = Ot.force3D, n.renderTransform = n.svg ? hm : Il ? zl : um, n.uncache = 0, n;
}, Vr = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Is = function(e, t, n) {
  var i = ht(t);
  return qe(parseFloat(t) + parseFloat(Dn(e, "x", n + "px", i))) + i;
}, um = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, zl(e, t);
}, Gn = "0deg", ki = "0px", kn = ") ", zl = function(e, t) {
  var n = t || this, i = n.xPercent, r = n.yPercent, a = n.x, s = n.y, c = n.z, l = n.rotation, u = n.rotationY, f = n.rotationX, d = n.skewX, m = n.skewY, g = n.scaleX, h = n.scaleY, p = n.transformPerspective, _ = n.force3D, y = n.target, v = n.zOrigin, M = "", b = _ === "auto" && e && e !== 1 || _ === !0;
  if (v && (f !== Gn || u !== Gn)) {
    var A = parseFloat(u) * wi, C = Math.sin(A), x = Math.cos(A), S;
    A = parseFloat(f) * wi, S = Math.cos(A), a = Is(y, a, C * S * -v), s = Is(y, s, -Math.sin(A) * -v), c = Is(y, c, x * S * -v + v);
  }
  p !== ki && (M += "perspective(" + p + kn), (i || r) && (M += "translate(" + i + "%, " + r + "%) "), (b || a !== ki || s !== ki || c !== ki) && (M += c !== ki || b ? "translate3d(" + a + ", " + s + ", " + c + ") " : "translate(" + a + ", " + s + kn), l !== Gn && (M += "rotate(" + l + kn), u !== Gn && (M += "rotateY(" + u + kn), f !== Gn && (M += "rotateX(" + f + kn), (d !== Gn || m !== Gn) && (M += "skew(" + d + ", " + m + kn), (g !== 1 || h !== 1) && (M += "scale(" + g + ", " + h + kn), y.style[We] = M || "translate(0, 0)";
}, hm = function(e, t) {
  var n = t || this, i = n.xPercent, r = n.yPercent, a = n.x, s = n.y, c = n.rotation, l = n.skewX, u = n.skewY, f = n.scaleX, d = n.scaleY, m = n.target, g = n.xOrigin, h = n.yOrigin, p = n.xOffset, _ = n.yOffset, y = n.forceCSS, v = parseFloat(a), M = parseFloat(s), b, A, C, x, S;
  c = parseFloat(c), l = parseFloat(l), u = parseFloat(u), u && (u = parseFloat(u), l += u, c += u), c || l ? (c *= wi, l *= wi, b = Math.cos(c) * f, A = Math.sin(c) * f, C = Math.sin(c - l) * -d, x = Math.cos(c - l) * d, l && (u *= wi, S = Math.tan(l - u), S = Math.sqrt(1 + S * S), C *= S, x *= S, u && (S = Math.tan(u), S = Math.sqrt(1 + S * S), b *= S, A *= S)), b = qe(b), A = qe(A), C = qe(C), x = qe(x)) : (b = f, x = d, A = C = 0), (v && !~(a + "").indexOf("px") || M && !~(s + "").indexOf("px")) && (v = Dn(m, "x", a, "px"), M = Dn(m, "y", s, "px")), (g || h || p || _) && (v = qe(v + g - (g * b + h * C) + p), M = qe(M + h - (g * A + h * x) + _)), (i || r) && (S = m.getBBox(), v = qe(v + i / 100 * S.width), M = qe(M + r / 100 * S.height)), S = "matrix(" + b + "," + A + "," + C + "," + x + "," + v + "," + M + ")", m.setAttribute("transform", S), y && (m.style[We] = S);
}, fm = function(e, t, n, i, r) {
  var a = 360, s = at(r), c = parseFloat(r) * (s && ~r.indexOf("rad") ? Hn : 1), l = c - i, u = i + l + "deg", f, d;
  return s && (f = r.split("_")[1], f === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), f === "cw" && l < 0 ? l = (l + a * po) % a - ~~(l / a) * a : f === "ccw" && l > 0 && (l = (l - a * po) % a - ~~(l / a) * a)), e._pt = d = new St(e._pt, t, n, i, l, Zp), d.e = u, d.u = "deg", e._props.push(n), d;
}, Mo = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, dm = function(e, t, n) {
  var i = Mo({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, s, c, l, u, f, d, m, g;
  i.svg ? (l = n.getAttribute("transform"), n.setAttribute("transform", ""), a[We] = t, s = nr(n, 1), ti(n, We), n.setAttribute("transform", l)) : (l = getComputedStyle(n)[We], a[We] = t, s = nr(n, 1), a[We] = l);
  for (c in vn)
    l = i[c], u = s[c], l !== u && r.indexOf(c) < 0 && (m = ht(l), g = ht(u), f = m !== g ? Dn(n, c, l, g) : parseFloat(l), d = parseFloat(u), e._pt = new St(e._pt, s, c, f, d - f, js), e._pt.u = g || 0, e._props.push(c));
  Mo(s, i);
};
yt("padding,margin,Width,Radius", function(o, e) {
  var t = "Top", n = "Right", i = "Bottom", r = "Left", a = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function(s) {
    return e < 2 ? o + s : "border" + s + o;
  });
  kr[e > 1 ? "border" + o : o] = function(s, c, l, u, f) {
    var d, m;
    if (arguments.length < 4)
      return d = a.map(function(g) {
        return mn(s, g, l);
      }), m = d.join(" "), m.split(d[0]).length === 5 ? d[0] : m;
    d = (u + "").split(" "), m = {}, a.forEach(function(g, h) {
      return m[g] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), s.init(c, m, f);
  };
});
var Gl = {
  name: "css",
  register: $s,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, i, r) {
    var a = this._props, s = e.style, c = n.vars.startAt, l, u, f, d, m, g, h, p, _, y, v, M, b, A, C, x;
    ma || $s(), this.styles = this.styles || Fl(e), x = this.styles.props, this.tween = n;
    for (h in t)
      if (h !== "autoRound" && (u = t[h], !(Lt[h] && Sl(h, t, n, i, e, r)))) {
        if (m = typeof u, g = kr[h], m === "function" && (u = u.call(n, i, e, r), m = typeof u), m === "string" && ~u.indexOf("random(") && (u = Ji(u)), g)
          g(this, e, h, u, n) && (C = 1);
        else if (h.substr(0, 2) === "--")
          l = (getComputedStyle(e).getPropertyValue(h) + "").trim(), u += "", Cn.lastIndex = 0, Cn.test(l) || (p = ht(l), _ = ht(u)), _ ? p !== _ && (l = Dn(e, h, l, _) + _) : p && (u += p), this.add(s, "setProperty", l, u, i, r, 0, 0, h), a.push(h), x.push(h, 0, s[h]);
        else if (m !== "undefined") {
          if (c && h in c ? (l = typeof c[h] == "function" ? c[h].call(n, i, e, r) : c[h], at(l) && ~l.indexOf("random(") && (l = Ji(l)), ht(l + "") || l === "auto" || (l += Ot.units[h] || ht(mn(e, h)) || ""), (l + "").charAt(1) === "=" && (l = mn(e, h))) : l = mn(e, h), d = parseFloat(l), y = m === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), f = parseFloat(u), h in tn && (h === "autoAlpha" && (d === 1 && mn(e, "visibility") === "hidden" && f && (d = 0), x.push("visibility", 0, s.visibility), En(this, s, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = tn[h], ~h.indexOf(",") && (h = h.split(",")[0]))), v = h in vn, v) {
            if (this.styles.save(h), M || (b = e._gsap, b.renderTransform && !t.parseTransform || nr(e, t.parseTransform), A = t.smoothOrigin !== !1 && b.smooth, M = this._pt = new St(this._pt, s, We, 0, 1, b.renderTransform, b, 0, -1), M.dep = 1), h === "scale")
              this._pt = new St(this._pt, b, "scaleY", b.scaleY, (y ? Si(b.scaleY, y + f) : f) - b.scaleY || 0, js), this._pt.u = 0, a.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              x.push(bt, 0, s[bt]), u = lm(u), b.svg ? Ks(e, u, 0, A, 0, this) : (_ = parseFloat(u.split(" ")[2]) || 0, _ !== b.zOrigin && En(this, b, "zOrigin", b.zOrigin, _), En(this, s, h, Vr(l), Vr(u)));
              continue;
            } else if (h === "svgOrigin") {
              Ks(e, u, 1, A, 0, this);
              continue;
            } else if (h in Ul) {
              fm(this, b, h, d, y ? Si(d, y + u) : u);
              continue;
            } else if (h === "smoothOrigin") {
              En(this, b, "smooth", b.smooth, u);
              continue;
            } else if (h === "force3D") {
              b[h] = u;
              continue;
            } else if (h === "transform") {
              dm(this, u, e);
              continue;
            }
          } else
            h in s || (h = Li(h) || h);
          if (v || (f || f === 0) && (d || d === 0) && !jp.test(u) && h in s)
            p = (l + "").substr((d + "").length), f || (f = 0), _ = ht(u) || (h in Ot.units ? Ot.units[h] : p), p !== _ && (d = Dn(e, h, l, _)), this._pt = new St(this._pt, v ? b : s, h, d, (y ? Si(d, y + f) : f) - d, !v && (_ === "px" || h === "zIndex") && t.autoRound !== !1 ? Kp : js), this._pt.u = _ || 0, p !== _ && _ !== "%" && (this._pt.b = l, this._pt.r = $p);
          else if (h in s)
            om.call(this, e, h, l, y ? y + u : u);
          else if (h in e)
            this.add(e, h, l || e[h], y ? y + u : u, i, r);
          else if (h !== "parseTransform") {
            aa(h, u);
            continue;
          }
          v || (h in s ? x.push(h, 0, s[h]) : x.push(h, 1, l || e[h])), a.push(h);
        }
      }
    C && Cl(this);
  },
  render: function(e, t) {
    if (t.tween._time || !ga())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: mn,
  aliases: tn,
  getSetter: function(e, t, n) {
    var i = tn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in vn && t !== bt && (e._gsap.x || mn(e, "x")) ? n && fo === n ? t === "scale" ? tm : em : (fo = n || {}) && (t === "scale" ? nm : im) : e.style && !ia(e.style[t]) ? Jp : ~t.indexOf("-") ? Qp : da(e, t);
  },
  core: {
    _removeProperty: ti,
    _getMatrix: xa
  }
};
wt.utils.checkPrefix = Li;
wt.core.getStyleSaver = Fl;
(function(o, e, t, n) {
  var i = yt(o + "," + e + "," + t, function(r) {
    vn[r] = 1;
  });
  yt(e, function(r) {
    Ot.units[r] = "deg", Ul[r] = 1;
  }), tn[i[13]] = o + "," + e, yt(n, function(r) {
    var a = r.split(":");
    tn[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  Ot.units[o] = "px";
});
wt.registerPlugin(Gl);
var Js = wt.registerPlugin(Gl) || wt;
Js.core.Tween;
class mm {
  constructor(e) {
    lr(this, "next");
    lr(this, "previous");
    lr(this, "destroy");
    console.log(
      "%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ",
      "color: #bada55; font-size: 0.8rem"
    );
    function t(...F) {
      for (let Y = 0; Y < F.length - 1; Y++)
        if (F[Y] !== void 0)
          return F[Y];
      return F[F.length - 1];
    }
    const n = e.parent, i = e.displacementImage, r = e.image1, a = e.image2, s = t(e.imagesRatio, 1), c = t(e.intensity1, e.intensity, 1), l = t(e.intensity2, e.intensity, 1), u = t(e.angle, Math.PI / 4), f = t(e.angle1, u), d = t(e.angle2, u ? -u * 3 : void 0), m = t(e.speedIn, e.speed, 1.6), g = t(e.speedOut, e.speed, 1.2), h = t(e.hover, !0), p = t(e.easing, "expo.out"), _ = t(e.video, !1), y = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`, v = `
varying vec2 vUv;

uniform float dispFactor;
uniform float dpr;
uniform sampler2D disp;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec4 res;
uniform vec2 parent;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);

  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);


  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`;
    if (!n) {
      console.warn("Parent missing");
      return;
    }
    if (!(r && a && i)) {
      console.warn("One or more images are missing");
      return;
    }
    const M = new Zd(), b = new No(
      n.offsetWidth / -2,
      n.offsetWidth / 2,
      n.offsetHeight / 2,
      n.offsetHeight / -2,
      1,
      1e3
    );
    b.position.z = 1;
    const A = new Go({
      antialias: !1,
      alpha: !0
    });
    A.setPixelRatio(2), A.setClearColor(16777215, 0), A.setSize(n.offsetWidth, n.offsetHeight), n.appendChild(A.domElement);
    const C = function() {
      A.render(M, b);
    }, x = new Qd();
    x.crossOrigin = "";
    const S = x.load(i, C);
    S.magFilter = S.minFilter = 1006;
    let R, G;
    const z = s;
    n.offsetHeight / n.offsetWidth < z ? (R = 1, G = n.offsetHeight / n.offsetWidth / z) : (R = n.offsetWidth / n.offsetHeight * z, G = 1);
    const P = () => {
      if (_) {
        const F = function() {
          requestAnimationFrame(F), A.render(M, b);
        };
        F();
        const Y = document.createElement("video");
        Y.autoplay = !0, Y.loop = !0, Y.muted = !0, Y.src = r, Y.load();
        const J = document.createElement("video");
        J.autoplay = !0, J.loop = !0, J.muted = !0, J.src = a, J.load();
        let ee = new Rr(Y), O = new Rr(J);
        return ee.magFilter = O.magFilter = 1006, ee.minFilter = O.minFilter = 1006, J.addEventListener(
          "loadeddata",
          function() {
            J.play(), O = new Rr(J), O.magFilter = 1006, O.minFilter = 1006, q.uniforms.videoTexture2.value = O;
          },
          !1
        ), Y.addEventListener(
          "loadeddata",
          function() {
            Y.play(), ee = new Rr(Y), ee.magFilter = 1006, ee.minFilter = 1006, q.uniforms.texture1.value = ee;
          },
          !1
        ), [ee, O];
      } else {
        const F = x.load(r, C), Y = x.load(a, C);
        return F.magFilter = Y.magFilter = 1006, F.minFilter = Y.minFilter = 1006, [F, Y];
      }
    }, [D, B] = P(), q = new Rn({
      uniforms: {
        intensity1: { value: c },
        intensity2: { value: l },
        dispFactor: { value: 0 },
        angle1: { value: f },
        angle2: { value: d },
        texture1: { value: D },
        texture2: { value: B },
        disp: { value: S },
        res: { value: new Je(n.offsetWidth, n.offsetHeight, R, G) }
      },
      vertexShader: y,
      fragmentShader: v,
      transparent: !0,
      opacity: 1
    }), Z = new qr(
      n.offsetWidth,
      n.offsetHeight,
      1
    ), k = new _n(Z, q);
    M.add(k);
    function K() {
      Js.to(q.uniforms.dispFactor, {
        duration: m,
        value: 1,
        ease: p,
        onUpdate: C,
        onComplete: C
      });
    }
    function $() {
      Js.to(q.uniforms.dispFactor, {
        duration: g,
        value: 0,
        ease: p,
        onUpdate: C,
        onComplete: C
      });
    }
    h && (n.addEventListener("mouseenter", K), n.addEventListener("touchstart", K), n.addEventListener("mouseleave", $), n.addEventListener("touchend", $)), window.addEventListener("resize", function() {
      n.offsetHeight / n.offsetWidth < z ? (R = 1, G = n.offsetHeight / n.offsetWidth / z) : (R = n.offsetWidth / n.offsetHeight * z, G = 1), k.material.uniforms.res.value = new Je(
        n.offsetWidth,
        n.offsetHeight,
        R,
        G
      ), A.setSize(n.offsetWidth, n.offsetHeight), C();
    });
    function le() {
      h && (n.removeEventListener("mouseenter", K), n.removeEventListener("touchstart", K), n.removeEventListener("mouseleave", $), n.removeEventListener("touchend", $)), n.removeChild(A.domElement), D.dispose(), B.dispose(), S.dispose(), q.dispose(), Z.dispose(), M.remove(k), M.remove.apply(M, M.children), A.dispose();
    }
    this.next = K, this.previous = $, this.destroy = le;
  }
}
export {
  mm as default
};
