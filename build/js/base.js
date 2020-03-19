!function (t) {
  var n = {};
  
  function e(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {i: i, l: !1, exports: {}};
    return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  
  e.m = t, e.c = n, e.d = function (t, n, i) {
    e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: i})
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, e.t = function (t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (e.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var r in t) e.d(i, r, function (n) {
      return t[n]
    }.bind(null, r));
    return i
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
  }, e.p = "", e(e.s = 32)
}([
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
  },//1
  function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "bisect", (function () {
      return i.c
    })), e.d(n, "bisectRight", (function () {
      return i.b
    })), e.d(n, "bisectLeft", (function () {
      return i.a
    })), e.d(n, "ascending", (function () {
      return r.a
    })), e.d(n, "bisector", (function () {
      return o.a
    })), e.d(n, "count", (function () {
      return a
    })), e.d(n, "cross", (function () {
      return l
    })), e.d(n, "cumsum", (function () {
      return h
    })), e.d(n, "descending", (function () {
      return f
    })), e.d(n, "deviation", (function () {
      return p
    })), e.d(n, "extent", (function () {
      return g
    })), e.d(n, "group", (function () {
      return v
    })), e.d(n, "groups", (function () {
      return y
    })), e.d(n, "rollup", (function () {
      return _
    })), e.d(n, "rollups", (function () {
      return w
    })), e.d(n, "bin", (function () {
      return E
    })), e.d(n, "histogram", (function () {
      return E
    })), e.d(n, "thresholdFreedmanDiaconis", (function () {
      return O
    })), e.d(n, "thresholdScott", (function () {
      return N
    })), e.d(n, "thresholdSturges", (function () {
      return S
    })), e.d(n, "max", (function () {
      return I.a
    })), e.d(n, "maxIndex", (function () {
      return L
    })), e.d(n, "mean", (function () {
      return R
    })), e.d(n, "median", (function () {
      return P
    })), e.d(n, "merge", (function () {
      return D
    })), e.d(n, "min", (function () {
      return H.a
    })), e.d(n, "minIndex", (function () {
      return j
    })), e.d(n, "pairs", (function () {
      return V
    })), e.d(n, "permute", (function () {
      return W
    })), e.d(n, "quantile", (function () {
      return A.a
    })), e.d(n, "quantileSorted", (function () {
      return A.b
    })), e.d(n, "quickselect", (function () {
      return F.a
    })), e.d(n, "range", (function () {
      return k.a
    })), e.d(n, "least", (function () {
      return B
    })), e.d(n, "leastIndex", (function () {
      return $
    })), e.d(n, "greatest", (function () {
      return q
    })), e.d(n, "greatestIndex", (function () {
      return z
    })), e.d(n, "scan", (function () {
      return G
    })), e.d(n, "shuffle", (function () {
      return Y
    })), e.d(n, "sum", (function () {
      return J
    })), e.d(n, "ticks", (function () {
      return C.a
    })), e.d(n, "tickIncrement", (function () {
      return C.b
    })), e.d(n, "tickStep", (function () {
      return C.c
    })), e.d(n, "transpose", (function () {
      return X
    })), e.d(n, "variance", (function () {
      return d
    })), e.d(n, "zip", (function () {
      return Z
    }));
    var i = e(10), r = e(0), o = e(19);
    
    function a(t, n) {
      let e = 0;
      if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && ++e; else {
        let i = -1;
        for (let r of t) null != (r = n(r, ++i, t)) && (r = +r) >= r && ++e
      }
      return e
    }
    
    function s(t) {
      return 0 | t.length
    }
    
    function u(t) {
      return !(t > 0)
    }
    
    function c(t) {
      return "object" != typeof t || "length" in t ? t : Array.from(t)
    }
    
    function l(...t) {
      const n = "function" == typeof t[t.length - 1] && function (t) {
        return n => t(...n)
      }(t.pop()), e = (t = t.map(c)).map(s), i = t.length - 1, r = new Array(i + 1).fill(0), o = [];
      if (i < 0 || e.some(u)) return o;
      for (; ;) {
        o.push(r.map((n, e) => t[e][n]));
        let a = i;
        for (; ++r[a] === e[a];) {
          if (0 === a) return n ? o.map(n) : o;
          r[a--] = 0
        }
      }
    }
    
    function h(t, n) {
      var e = 0, i = 0;
      return Float64Array.from(t, void 0 === n ? t => e += +t || 0 : r => e += +n(r, i++, t) || 0)
    }
    
    var f = function (t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    };
    
    function d(t, n) {
      let e, i = 0, r = 0, o = 0;
      if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (e = n - r, r += e / ++i, o += e * (n - r)); else {
        let a = -1;
        for (let s of t) null != (s = n(s, ++a, t)) && (s = +s) >= s && (e = s - r, r += e / ++i, o += e * (s - r))
      }
      if (i > 1) return o / (i - 1)
    }
    
    function p(t, n) {
      const e = d(t, n);
      return e ? Math.sqrt(e) : e
    }
    
    var g = function (t, n) {
      let e, i;
      if (void 0 === n) for (const n of t) null != n && (void 0 === e ? n >= n && (e = i = n) : (e > n && (e = n), i < n && (i = n))); else {
        let r = -1;
        for (let o of t) null != (o = n(o, ++r, t)) && (void 0 === e ? o >= o && (e = i = o) : (e > o && (e = o), i < o && (i = o)))
      }
      return [e, i]
    }, m = function (t) {
      return t
    };
    
    function v(t, ...n) {
      return b(t, m, m, n)
    }
    
    function y(t, ...n) {
      return b(t, Array.from, m, n)
    }
    
    function _(t, n, ...e) {
      return b(t, m, n, e)
    }
    
    function w(t, n, ...e) {
      return b(t, Array.from, n, e)
    }
    
    function b(t, n, e, i) {
      return function t(r, o) {
        if (o >= i.length) return e(r);
        const a = new Map, s = i[o++];
        let u = -1;
        for (const t of r) {
          const n = s(t, ++u, r), e = a.get(n);
          e ? e.push(t) : a.set(n, [t])
        }
        for (const [n, e] of a) a.set(n, t(e, o));
        return n(a)
      }(t, 0)
    }
    
    var x = Array.prototype, T = x.slice, M = (x.map, function (t) {
      return function () {
        return t
      }
    }), k = e(20), C = e(11), S = function (t) {
      return Math.ceil(Math.log(a(t)) / Math.LN2) + 1
    }, E = function () {
      var t = m, n = g, e = S;
      
      function r(r) {
        Array.isArray(r) || (r = Array.from(r));
        var o, a, s = r.length, u = new Array(s);
        for (o = 0; o < s; ++o) u[o] = t(r[o], o, r);
        var c = n(u), l = c[0], h = c[1], f = e(u, l, h);
        Array.isArray(f) || (f = Object(C.c)(l, h, f), f = Object(k.a)(Math.ceil(l / f) * f, h, f));
        for (var d = f.length; f[0] <= l;) f.shift(), --d;
        for (; f[d - 1] > h;) f.pop(), --d;
        var p, g = new Array(d + 1);
        for (o = 0; o <= d; ++o) (p = g[o] = []).x0 = o > 0 ? f[o - 1] : l, p.x1 = o < d ? f[o] : h;
        for (o = 0; o < s; ++o) l <= (a = u[o]) && a <= h && g[Object(i.c)(f, a, 0, d)].push(r[o]);
        return g
      }
      
      return r.value = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : M(n), r) : t
      }, r.domain = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : M([t[0], t[1]]), r) : n
      }, r.thresholds = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? M(T.call(t)) : M(t), r) : e
      }, r
    }, A = e(3), O = function (t, n, e) {
      return Math.ceil((e - n) / (2 * (Object(A.a)(t, .75) - Object(A.a)(t, .25)) * Math.pow(a(t), -1 / 3)))
    }, N = function (t, n, e) {
      return Math.ceil((e - n) / (3.5 * p(t) * Math.pow(a(t), -1 / 3)))
    }, I = e(14);
    
    function L(t, n) {
      let e, i = -1, r = -1;
      if (void 0 === n) for (const n of t) ++r, null != n && (e < n || void 0 === e && n >= n) && (e = n, i = r); else for (let o of t) null != (o = n(o, ++r, t)) && (e < o || void 0 === e && o >= o) && (e = o, i = r);
      return i
    }
    
    function R(t, n) {
      let e = 0, i = 0;
      if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (++e, i += n); else {
        let r = -1;
        for (let o of t) null != (o = n(o, ++r, t)) && (o = +o) >= o && (++e, i += o)
      }
      if (e) return i / e
    }
    
    var P = function (t, n) {
      return Object(A.a)(t, .5, n)
    };
    
    function D(t) {
      return Array.from(function* (t) {
        for (const n of t) yield* n
      }(t))
    }
    
    var H = e(5);
    
    function j(t, n) {
      let e, i = -1, r = -1;
      if (void 0 === n) for (const n of t) ++r, null != n && (e > n || void 0 === e && n >= n) && (e = n, i = r); else for (let o of t) null != (o = n(o, ++r, t)) && (e > o || void 0 === e && o >= o) && (e = o, i = r);
      return i
    }
    
    function V(t, n = U) {
      const e = [];
      let i, r = !1;
      for (const o of t) r && e.push(n(i, o)), i = o, r = !0;
      return e
    }
    
    function U(t, n) {
      return [t, n]
    }
    
    var W = function (t, n) {
      return Array.from(n, n => t[n])
    }, F = e(21);
    
    function B(t, n = r.a) {
      let e, i = !1;
      if (1 === n.length) {
        let o;
        for (const a of t) {
          const t = n(a);
          (i ? Object(r.a)(t, o) < 0 : 0 === Object(r.a)(t, t)) && (e = a, o = t, i = !0)
        }
      } else for (const r of t) (i ? n(r, e) < 0 : 0 === n(r, r)) && (e = r, i = !0);
      return e
    }
    
    function $(t, n = r.a) {
      if (1 === n.length) return j(t, n);
      let e, i = -1, o = -1;
      for (const r of t) ++o, (i < 0 ? 0 === n(r, r) : n(r, e) < 0) && (e = r, i = o);
      return i
    }
    
    function q(t, n = r.a) {
      let e, i = !1;
      if (1 === n.length) {
        let o;
        for (const a of t) {
          const t = n(a);
          (i ? Object(r.a)(t, o) > 0 : 0 === Object(r.a)(t, t)) && (e = a, o = t, i = !0)
        }
      } else for (const r of t) (i ? n(r, e) > 0 : 0 === n(r, r)) && (e = r, i = !0);
      return e
    }
    
    function z(t, n = r.a) {
      if (1 === n.length) return L(t, n);
      let e, i = -1, o = -1;
      for (const r of t) ++o, (i < 0 ? 0 === n(r, r) : n(r, e) > 0) && (e = r, i = o);
      return i
    }
    
    function G(t, n) {
      const e = $(t, n);
      return e < 0 ? void 0 : e
    }
    
    function Y(t, n = 0, e = t.length) {
      for (var i, r, o = e - (n = +n); o;) r = Math.random() * o-- | 0, i = t[o + n], t[o + n] = t[r + n], t[r + n] = i;
      return t
    }
    
    function J(t, n) {
      let e = 0;
      if (void 0 === n) for (let n of t) (n = +n) && (e += n); else {
        let i = -1;
        for (let r of t) (r = +n(r, ++i, t)) && (e += r)
      }
      return e
    }
    
    var X = function (t) {
      if (!(r = t.length)) return [];
      for (var n = -1, e = Object(H.a)(t, Q), i = new Array(e); ++n < e;) for (var r, o = -1, a = i[n] = new Array(r); ++o < r;) a[o] = t[o][n];
      return i
    };
    
    function Q(t) {
      return t.length
    }
    
    var Z = function () {
      return X(arguments)
    }
  },//2
  function (t, n, e) {
    "use strict";
    var i = e(6);
    n.a = function (t) {
      return (t = Object(i.a)(Math.abs(t))) ? t[1] : NaN
    }
  },//3
  function (t, n, e) {
    "use strict";
    e.d(n, "a", (function () {
      return s
    })), e.d(n, "b", (function () {
      return u
    }));
    var i = e(14), r = e(5), o = e(21), a = function (t) {
      return null === t ? NaN : +t
    };
    
    function s(t, n, e) {
      if (a = (t = Float64Array.from(function* (t, n) {
        if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (yield n); else {
          let e = -1;
          for (let i of t) null != (i = n(i, ++e, t)) && (i = +i) >= i && (yield i)
        }
      }(t, e))).length) {
        if ((n = +n) <= 0 || a < 2) return Object(r.a)(t);
        if (n >= 1) return Object(i.a)(t);
        var a, s = (a - 1) * n, u = Math.floor(s), c = Object(i.a)(Object(o.a)(t, u).subarray(0, u + 1));
        return c + (Object(r.a)(t.subarray(u + 1)) - c) * (s - u)
      }
    }
    
    function u(t, n, e = a) {
      if (i = t.length) {
        if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[i - 1], i - 1, t);
        var i, r = (i - 1) * n, o = Math.floor(r), s = +e(t[o], o, t);
        return s + (+e(t[o + 1], o + 1, t) - s) * (r - o)
      }
    }
  },//4
  function (t, n) {
    var e = [{tick: 0, sick: 1, recovered: 0, well: 199}];
    t.exports = {
      TOTAL_TICKS: 1500, SPEED: 1, RADIUS: function (t, n) {
        return Math.min(Math.max(2, t * n / 5e4), 5)
      }, STARTING_BALLS: 200, STARTING_STORAGE: e, GIF_MODE: !1
    }
  },//5
  function (t, n, e) {
    "use strict";
    
    function i(t, n) {
      let e;
      if (void 0 === n) for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n); else {
        let i = -1;
        for (let r of t) null != (r = n(r, ++i, t)) && (e > r || void 0 === e && r >= r) && (e = r)
      }
      return e
    }
    
    e.d(n, "a", (function () {
      return i
    }))
  },//6
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
      var e, i = t.slice(0, e);
      return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)]
    }
  },//7
  function (t, n, e) {
    function i(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
          return e
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    
    var r = Object.assign({}, e(9), e(8)), o = e(27), a = e(24), s = e(31);
    
    function u(t) {
      return isNaN(t.radius) && (t.radius = 5), isNaN(t.angle) && (t.angle = 0), isNaN(t.speed) && (t.speed = 1), isNaN(t.infected) && (t.infected = !1), t.pos || (t.pos = [this.width / 2, this.height / 2]), isNaN(t.collided) && (t.collided = !1), t.recovered || (t.recovered = !1), isNaN(t.id) && !t.id && (t.id = this.data.length), t.timeAtInfection = null, t.checkedNeighbors = !1, this.data.push(t), this
    }
    
    function c(t) {
      return this.data.filter((function (n) {
        return n.id === t
      }))[0]
    }
    
    function l(t) {
      return this.walls.push(t), this
    }
    
    function h() {
      var t, n, e = this;
      this.aspect = .5, this.width = Math.min(800, innerWidth - 30), this.heightOverride ? this.height = this.heightOverride : this.height = (t = innerHeight - 100, (n = e.width * e.aspect) > t && (n = t), n < 400 && (n = 400), n), this.center = [this.width / 2, this.height / 2]
    }
    
    function f() {
      this.canvas || (this.canvas = this.wrapper.append("canvas")), this.canvas.attr("width", this.width).attr("height", this.height), this.context || (this.context = this.canvas.node().getContext("2d")), this.replayButton || (this.replayButton = this.wrapper.append("div").attr("class", "sim-replay"), this.replayButton.append("div").attr("class", "sim-replay-icon").append("img").attr("src", "./img/replay.png"), this.replayButton.append("div").attr("class", "sim-replay-text").text(this.resetText));
      var t = this.replayButton.node().getBoundingClientRect(), n = t.width, e = t.height;
      this.replayButton.style("left", "".concat(this.width / 2 - n / 2, "px")).style("top", "".concat(this.height / 2 - e / 2, "px"))
    }
    
    function d() {
      this.replayButton.classed("show", 1), this.canvas.classed("fadeout", 1)
    }
    
    function p() {
      this.replayButton.classed("show", 0), this.canvas.classed("fadeout", 0)
    }
    
    function g() {
      this.setDimensions(), this.setBoard()
    }
    
    function m() {
      var t = this.wrapper.node().offsetHeight;
      this.wrapper.style("top", "".concat((innerHeight - t) / 2, "px"))
    }
    
    function v() {
      var t = this.wrapper.node().getBoundingClientRect(), n = t.top || t.y, e = t.height;
      return n > 0 && n + e < innerHeight
    }
    
    function y() {
      var t = this.wrapper.node().getBoundingClientRect(), n = t.top || t.y, e = t.height;
      return n < innerHeight && n + e > 0
    }
    
    function _() {
      var t = this;
      this.ticks++, this.data.forEach((function (n) {
        n.infected && t.ticksToRecover < t.ticks - n.timeAtInfection && (n.infected = !1, n.recovered = !0, n.timeAtInfection = null)
      }));
      var n = this.data.filter((function (t) {
        return t.infected
      })).length, e = this.data.filter((function (t) {
        return t.recovered
      })).length, r = n === this.lastSick && e === this.lastRecovered;
      r && this.storage.length ? this.storage[this.storage.length - 1].tick++ : this.storage.push({
        tick: this.ticks,
        sick: n,
        recovered: e,
        well: this.data.length - n - e
      }), r ? this.ticksNoChange++ : (this.ticksNoChange = 0, n !== this.lastSick && (this.lastSick = n), n !== this.lastRecovered && (this.lastRecovered = e)), this.context.clearRect(0, 0, this.width, this.height), this.context.lineWidth = 2;
      for (var o = 0; o < this.walls.length; o++) {
        var u, c, l = this.walls[o];
        this.context.beginPath(), (u = this.context).moveTo.apply(u, i(l[0])), (c = this.context).lineTo.apply(c, i(l[1])), this.context.stroke()
      }
      for (var h = 0; h < this.data.length; h++) {
        var f, d = this.data[h];
        d.collided = !1;
        for (var p = 0; p < this.data.length; p++) {
          var g = this.data[p];
          if (g.collided = !1, h !== p && a.lineLength([d.pos, g.pos]) < d.radius + g.radius && !d.collided && !g.collided) {
            var m = a.pointTranslate(d.pos, d.angle, d.speed), v = a.pointTranslate(g.pos, g.angle, g.speed),
              y = a.lineLength([m, v]), _ = a.pointTranslate(d.pos, g.angle, g.speed),
              w = a.pointTranslate(g.pos, d.angle, d.speed);
            if (y < a.lineLength([_, w])) {
              var b = JSON.parse(JSON.stringify(d));
              this.transferEnergy ? (d.angle = g.angle, g.angle = b.angle, d.speed = g.speed, g.speed = b.speed) : d.speed && g.speed ? (d.angle = g.angle, g.angle = b.angle) : (d.angle = a.angleReflect(d.angle, -d.angle), g.angle = a.angleReflect(g.angle, -g.angle)), !d.infected || g.infected || g.recovered || (g.infected = !0, g.timeAtInfection = this.ticks), !g.infected || d.infected || d.recovered || (d.infected = !0, d.timeAtInfection = this.ticks), this.transferEnergy || [d, g].forEach((function (n) {
                !n.checkedNeighbors && 0 === n.speed && n.infected && (t.data.filter((function (t) {
                  return !t.infected && a.lineLength([t.pos, n.pos]) <= t.radius + n.radius
                })).forEach((function (n) {
                  return n.infected = !0, n.timeAtInfection = t.ticks, n.checkedNeighbors = !0, n
                })), n.checkedNeighbors = !0)
              })), d.collided = !0, g.collided = !0
            }
            break
          }
        }
        for (var x = 0; x < this.walls.length; x++) {
          var T = this.walls[x], M = a.pointTranslate(d.pos, a.lineAngle([d.pos, s(d.pos, T)]), d.radius);
          a.pointLeftofLine(d.pos, T) !== a.pointLeftofLine(M, T) && (d.angle = a.angleReflect(d.angle, a.lineAngle(T)))
        }
        if (d.pos[0] <= d.radius || d.pos[0] >= this.width - d.radius) {
          var k = a.pointTranslate(d.pos, d.angle, d.speed), C = a.lineLength([this.center, k]),
            S = a.angleReflect(d.angle, 90), E = a.pointTranslate(d.pos, S, d.speed);
          a.lineLength([this.center, E]) < C && (d.angle = S)
        }
        if (d.pos[1] <= d.radius || d.pos[1] >= this.height - d.radius) {
          var A = a.pointTranslate(d.pos, d.angle, d.speed), O = a.lineLength([this.center, A]),
            N = a.angleReflect(d.angle, 0), I = a.pointTranslate(d.pos, N, d.speed);
          a.lineLength([this.center, I]) < O && (d.angle = N)
        }
        d.pos = a.pointTranslate(d.pos, d.angle, d.speed), this.context.beginPath(), this.context.fillStyle = d.infected ? "#BB641D" : d.recovered ? "#CB8AC0" : "#AAC6CA", (f = this.context).arc.apply(f, i(d.pos).concat([d.radius, 0, 2 * Math.PI])), this.context.fill()
      }
    }
    
    t.exports = {
      init: function (t, n) {
        return this.wrapper = r.select(t).style("position", "relative"), this.ticks = 0, this.data = [], this.storage = n && n.storage ? n.storage : [], this.ticksNoChange = 0, this.lastSick = 0, this.lastRecovered = 0, this.hasStarted = !1, this.ticksToRecover = n && n.ticksToRecover ? n.ticksToRecover : 500, this.heightOverride = n && n.height ? n.height : null, this.resetText = n && n.resetText ? n.resetText : "".concat(o() ? "Tap" : "Click", " to replay"), this.transferEnergy = !n || void 0 === n.transferEnergy || n.transferEnergy, this.walls = [], this.addDatum = u, this.addWall = l, this.setDimensions = h, this.setBoard = f, this.setTop = m, this.tick = _, this.resize = g, this.getDatum = c, this.isOnScreen = v, this.isNotOffScreen = y, this.showReplayButton = d, this.hideReplayButton = p, this.resize(), this
      }
    }
  },//8
  function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "create", (function () {
      return gt
    })), e.d(n, "creator", (function () {
      return u
    })), e.d(n, "local", (function () {
      return vt
    })), e.d(n, "matcher", (function () {
      return d
    })), e.d(n, "mouse", (function () {
      return bt
    })), e.d(n, "namespace", (function () {
      return o
    })), e.d(n, "namespaces", (function () {
      return r
    })), e.d(n, "clientPoint", (function () {
      return wt
    })), e.d(n, "select", (function () {
      return pt
    })), e.d(n, "selectAll", (function () {
      return xt
    })), e.d(n, "selection", (function () {
      return dt
    })), e.d(n, "selector", (function () {
      return l
    })), e.d(n, "selectorAll", (function () {
      return f
    })), e.d(n, "style", (function () {
      return A
    })), e.d(n, "touch", (function () {
      return Tt
    })), e.d(n, "touches", (function () {
      return Mt
    })), e.d(n, "window", (function () {
      return k
    })), e.d(n, "event", (function () {
      return tt
    })), e.d(n, "customEvent", (function () {
      return at
    }));
    var i = "http://www.w3.org/1999/xhtml", r = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: i,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }, o = function (t) {
      var n = t += "", e = n.indexOf(":");
      return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.hasOwnProperty(n) ? {
        space: r[n],
        local: t
      } : t
    };
    
    function a(t) {
      return function () {
        var n = this.ownerDocument, e = this.namespaceURI;
        return e === i && n.documentElement.namespaceURI === i ? n.createElement(t) : n.createElementNS(e, t)
      }
    }
    
    function s(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }
    
    var u = function (t) {
      var n = o(t);
      return (n.local ? s : a)(n)
    };
    
    function c() {
    }
    
    var l = function (t) {
      return null == t ? c : function () {
        return this.querySelector(t)
      }
    };
    
    function h() {
      return []
    }
    
    var f = function (t) {
      return null == t ? h : function () {
        return this.querySelectorAll(t)
      }
    }, d = function (t) {
      return function () {
        return this.matches(t)
      }
    }, p = function (t) {
      return new Array(t.length)
    };
    
    function g(t, n) {
      this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }
    
    g.prototype = {
      constructor: g, appendChild: function (t) {
        return this._parent.insertBefore(t, this._next)
      }, insertBefore: function (t, n) {
        return this._parent.insertBefore(t, n)
      }, querySelector: function (t) {
        return this._parent.querySelector(t)
      }, querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t)
      }
    };
    
    function m(t, n, e, i, r, o) {
      for (var a, s = 0, u = n.length, c = o.length; s < c; ++s) (a = n[s]) ? (a.__data__ = o[s], i[s] = a) : e[s] = new g(t, o[s]);
      for (; s < u; ++s) (a = n[s]) && (r[s] = a)
    }
    
    function v(t, n, e, i, r, o, a) {
      var s, u, c, l = {}, h = n.length, f = o.length, d = new Array(h);
      for (s = 0; s < h; ++s) (u = n[s]) && (d[s] = c = "$" + a.call(u, u.__data__, s, n), c in l ? r[s] = u : l[c] = u);
      for (s = 0; s < f; ++s) (u = l[c = "$" + a.call(t, o[s], s, o)]) ? (i[s] = u, u.__data__ = o[s], l[c] = null) : e[s] = new g(t, o[s]);
      for (s = 0; s < h; ++s) (u = n[s]) && l[d[s]] === u && (r[s] = u)
    }
    
    function y(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    
    function _(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    
    function w(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    
    function b(t, n) {
      return function () {
        this.setAttribute(t, n)
      }
    }
    
    function x(t, n) {
      return function () {
        this.setAttributeNS(t.space, t.local, n)
      }
    }
    
    function T(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
      }
    }
    
    function M(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
      }
    }
    
    var k = function (t) {
      return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    
    function C(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    
    function S(t, n, e) {
      return function () {
        this.style.setProperty(t, n, e)
      }
    }
    
    function E(t, n, e) {
      return function () {
        var i = n.apply(this, arguments);
        null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, e)
      }
    }
    
    function A(t, n) {
      return t.style.getPropertyValue(n) || k(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    
    function O(t) {
      return function () {
        delete this[t]
      }
    }
    
    function N(t, n) {
      return function () {
        this[t] = n
      }
    }
    
    function I(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : this[t] = e
      }
    }
    
    function L(t) {
      return t.trim().split(/^|\s+/)
    }
    
    function R(t) {
      return t.classList || new P(t)
    }
    
    function P(t) {
      this._node = t, this._names = L(t.getAttribute("class") || "")
    }
    
    function D(t, n) {
      for (var e = R(t), i = -1, r = n.length; ++i < r;) e.add(n[i])
    }
    
    function H(t, n) {
      for (var e = R(t), i = -1, r = n.length; ++i < r;) e.remove(n[i])
    }
    
    function j(t) {
      return function () {
        D(this, t)
      }
    }
    
    function V(t) {
      return function () {
        H(this, t)
      }
    }
    
    function U(t, n) {
      return function () {
        (n.apply(this, arguments) ? D : H)(this, t)
      }
    }
    
    P.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
      }, remove: function (t) {
        var n = this._names.indexOf(t);
        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
      }, contains: function (t) {
        return this._names.indexOf(t) >= 0
      }
    };
    
    function W() {
      this.textContent = ""
    }
    
    function F(t) {
      return function () {
        this.textContent = t
      }
    }
    
    function B(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? "" : n
      }
    }
    
    function $() {
      this.innerHTML = ""
    }
    
    function q(t) {
      return function () {
        this.innerHTML = t
      }
    }
    
    function z(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? "" : n
      }
    }
    
    function G() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    
    function Y() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    
    function J() {
      return null
    }
    
    function X() {
      var t = this.parentNode;
      t && t.removeChild(this)
    }
    
    function Q() {
      var t = this.cloneNode(!1), n = this.parentNode;
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    
    function Z() {
      var t = this.cloneNode(!0), n = this.parentNode;
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    
    var K = {}, tt = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (K = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }));
    
    function nt(t, n, e) {
      return t = et(t, n, e), function (n) {
        var e = n.relatedTarget;
        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
      }
    }
    
    function et(t, n, e) {
      return function (i) {
        var r = tt;
        tt = i;
        try {
          t.call(this, this.__data__, n, e)
        } finally {
          tt = r
        }
      }
    }
    
    function it(t) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var n = "", e = t.indexOf(".");
        return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
      }))
    }
    
    function rt(t) {
      return function () {
        var n = this.__on;
        if (n) {
          for (var e, i = 0, r = -1, o = n.length; i < o; ++i) e = n[i], t.type && e.type !== t.type || e.name !== t.name ? n[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
          ++r ? n.length = r : delete this.__on
        }
      }
    }
    
    function ot(t, n, e) {
      var i = K.hasOwnProperty(t.type) ? nt : et;
      return function (r, o, a) {
        var s, u = this.__on, c = i(n, o, a);
        if (u) for (var l = 0, h = u.length; l < h; ++l) if ((s = u[l]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = c, s.capture = e), void (s.value = n);
        this.addEventListener(t.type, c, e), s = {
          type: t.type,
          name: t.name,
          value: n,
          listener: c,
          capture: e
        }, u ? u.push(s) : this.__on = [s]
      }
    }
    
    function at(t, n, e, i) {
      var r = tt;
      t.sourceEvent = tt, tt = t;
      try {
        return n.apply(e, i)
      } finally {
        tt = r
      }
    }
    
    function st(t, n, e) {
      var i = k(t), r = i.CustomEvent;
      "function" == typeof r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r)
    }
    
    function ut(t, n) {
      return function () {
        return st(this, t, n)
      }
    }
    
    function ct(t, n) {
      return function () {
        return st(this, t, n.apply(this, arguments))
      }
    }
    
    var lt = [null];
    
    function ht(t, n) {
      this._groups = t, this._parents = n
    }
    
    function ft() {
      return new ht([[document.documentElement]], lt)
    }
    
    ht.prototype = ft.prototype = {
      constructor: ht, select: function (t) {
        "function" != typeof t && (t = l(t));
        for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r) for (var o, a, s = n[r], u = s.length, c = i[r] = new Array(u), h = 0; h < u; ++h) (o = s[h]) && (a = t.call(o, o.__data__, h, s)) && ("__data__" in o && (a.__data__ = o.__data__), c[h] = a);
        return new ht(i, this._parents)
      }, selectAll: function (t) {
        "function" != typeof t && (t = f(t));
        for (var n = this._groups, e = n.length, i = [], r = [], o = 0; o < e; ++o) for (var a, s = n[o], u = s.length, c = 0; c < u; ++c) (a = s[c]) && (i.push(t.call(a, a.__data__, c, s)), r.push(a));
        return new ht(i, r)
      }, filter: function (t) {
        "function" != typeof t && (t = d(t));
        for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r) for (var o, a = n[r], s = a.length, u = i[r] = [], c = 0; c < s; ++c) (o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
        return new ht(i, this._parents)
      }, data: function (t, n) {
        if (!t) return p = new Array(this.size()), l = -1, this.each((function (t) {
          p[++l] = t
        })), p;
        var e, i = n ? v : m, r = this._parents, o = this._groups;
        "function" != typeof t && (e = t, t = function () {
          return e
        });
        for (var a = o.length, s = new Array(a), u = new Array(a), c = new Array(a), l = 0; l < a; ++l) {
          var h = r[l], f = o[l], d = f.length, p = t.call(h, h && h.__data__, l, r), g = p.length,
            y = u[l] = new Array(g), _ = s[l] = new Array(g);
          i(h, f, y, _, c[l] = new Array(d), p, n);
          for (var w, b, x = 0, T = 0; x < g; ++x) if (w = y[x]) {
            for (x >= T && (T = x + 1); !(b = _[T]) && ++T < g;) ;
            w._next = b || null
          }
        }
        return (s = new ht(s, r))._enter = u, s._exit = c, s
      }, enter: function () {
        return new ht(this._enter || this._groups.map(p), this._parents)
      }, exit: function () {
        return new ht(this._exit || this._groups.map(p), this._parents)
      }, join: function (t, n, e) {
        var i = this.enter(), r = this, o = this.exit();
        return i = "function" == typeof t ? t(i) : i.append(t + ""), null != n && (r = n(r)), null == e ? o.remove() : e(o), i && r ? i.merge(r).order() : r
      }, merge: function (t) {
        for (var n = this._groups, e = t._groups, i = n.length, r = e.length, o = Math.min(i, r), a = new Array(i), s = 0; s < o; ++s) for (var u, c = n[s], l = e[s], h = c.length, f = a[s] = new Array(h), d = 0; d < h; ++d) (u = c[d] || l[d]) && (f[d] = u);
        for (; s < i; ++s) a[s] = n[s];
        return new ht(a, this._parents)
      }, order: function () {
        for (var t = this._groups, n = -1, e = t.length; ++n < e;) for (var i, r = t[n], o = r.length - 1, a = r[o]; --o >= 0;) (i = r[o]) && (a && 4 ^ i.compareDocumentPosition(a) && a.parentNode.insertBefore(i, a), a = i);
        return this
      }, sort: function (t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e
        }
        
        t || (t = y);
        for (var e = this._groups, i = e.length, r = new Array(i), o = 0; o < i; ++o) {
          for (var a, s = e[o], u = s.length, c = r[o] = new Array(u), l = 0; l < u; ++l) (a = s[l]) && (c[l] = a);
          c.sort(n)
        }
        return new ht(r, this._parents).order()
      }, call: function () {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this
      }, nodes: function () {
        var t = new Array(this.size()), n = -1;
        return this.each((function () {
          t[++n] = this
        })), t
      }, node: function () {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var i = t[n], r = 0, o = i.length; r < o; ++r) {
          var a = i[r];
          if (a) return a
        }
        return null
      }, size: function () {
        var t = 0;
        return this.each((function () {
          ++t
        })), t
      }, empty: function () {
        return !this.node()
      }, each: function (t) {
        for (var n = this._groups, e = 0, i = n.length; e < i; ++e) for (var r, o = n[e], a = 0, s = o.length; a < s; ++a) (r = o[a]) && t.call(r, r.__data__, a, o);
        return this
      }, attr: function (t, n) {
        var e = o(t);
        if (arguments.length < 2) {
          var i = this.node();
          return e.local ? i.getAttributeNS(e.space, e.local) : i.getAttribute(e)
        }
        return this.each((null == n ? e.local ? w : _ : "function" == typeof n ? e.local ? M : T : e.local ? x : b)(e, n))
      }, style: function (t, n, e) {
        return arguments.length > 1 ? this.each((null == n ? C : "function" == typeof n ? E : S)(t, n, null == e ? "" : e)) : A(this.node(), t)
      }, property: function (t, n) {
        return arguments.length > 1 ? this.each((null == n ? O : "function" == typeof n ? I : N)(t, n)) : this.node()[t]
      }, classed: function (t, n) {
        var e = L(t + "");
        if (arguments.length < 2) {
          for (var i = R(this.node()), r = -1, o = e.length; ++r < o;) if (!i.contains(e[r])) return !1;
          return !0
        }
        return this.each(("function" == typeof n ? U : n ? j : V)(e, n))
      }, text: function (t) {
        return arguments.length ? this.each(null == t ? W : ("function" == typeof t ? B : F)(t)) : this.node().textContent
      }, html: function (t) {
        return arguments.length ? this.each(null == t ? $ : ("function" == typeof t ? z : q)(t)) : this.node().innerHTML
      }, raise: function () {
        return this.each(G)
      }, lower: function () {
        return this.each(Y)
      }, append: function (t) {
        var n = "function" == typeof t ? t : u(t);
        return this.select((function () {
          return this.appendChild(n.apply(this, arguments))
        }))
      }, insert: function (t, n) {
        var e = "function" == typeof t ? t : u(t), i = null == n ? J : "function" == typeof n ? n : l(n);
        return this.select((function () {
          return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
        }))
      }, remove: function () {
        return this.each(X)
      }, clone: function (t) {
        return this.select(t ? Z : Q)
      }, datum: function (t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__
      }, on: function (t, n, e) {
        var i, r, o = it(t + ""), a = o.length;
        if (!(arguments.length < 2)) {
          for (s = n ? ot : rt, null == e && (e = !1), i = 0; i < a; ++i) this.each(s(o[i], n, e));
          return this
        }
        var s = this.node().__on;
        if (s) for (var u, c = 0, l = s.length; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((r = o[i]).type === u.type && r.name === u.name) return u.value
      }, dispatch: function (t, n) {
        return this.each(("function" == typeof n ? ct : ut)(t, n))
      }
    };
    var dt = ft, pt = function (t) {
      return "string" == typeof t ? new ht([[document.querySelector(t)]], [document.documentElement]) : new ht([[t]], lt)
    }, gt = function (t) {
      return pt(u(t).call(document.documentElement))
    }, mt = 0;
    
    function vt() {
      return new yt
    }
    
    function yt() {
      this._ = "@" + (++mt).toString(36)
    }
    
    yt.prototype = vt.prototype = {
      constructor: yt, get: function (t) {
        for (var n = this._; !(n in t);) if (!(t = t.parentNode)) return;
        return t[n]
      }, set: function (t, n) {
        return t[this._] = n
      }, remove: function (t) {
        return this._ in t && delete t[this._]
      }, toString: function () {
        return this._
      }
    };
    var _t = function () {
      for (var t, n = tt; t = n.sourceEvent;) n = t;
      return n
    }, wt = function (t, n) {
      var e = t.ownerSVGElement || t;
      if (e.createSVGPoint) {
        var i = e.createSVGPoint();
        return i.x = n.clientX, i.y = n.clientY, [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y]
      }
      var r = t.getBoundingClientRect();
      return [n.clientX - r.left - t.clientLeft, n.clientY - r.top - t.clientTop]
    }, bt = function (t) {
      var n = _t();
      return n.changedTouches && (n = n.changedTouches[0]), wt(t, n)
    }, xt = function (t) {
      return "string" == typeof t ? new ht([document.querySelectorAll(t)], [document.documentElement]) : new ht([null == t ? [] : t], lt)
    }, Tt = function (t, n, e) {
      arguments.length < 3 && (e = n, n = _t().changedTouches);
      for (var i, r = 0, o = n ? n.length : 0; r < o; ++r) if ((i = n[r]).identifier === e) return wt(t, i);
      return null
    }, Mt = function (t, n) {
      null == n && (n = _t().touches);
      for (var e = 0, i = n ? n.length : 0, r = new Array(i); e < i; ++e) r[e] = wt(t, n[e]);
      return r
    }
  },//9
  function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "randomUniform", (function () {
      return r
    })), e.d(n, "randomInt", (function () {
      return o
    })), e.d(n, "randomNormal", (function () {
      return a
    })), e.d(n, "randomLogNormal", (function () {
      return s
    })), e.d(n, "randomBates", (function () {
      return c
    })), e.d(n, "randomIrwinHall", (function () {
      return u
    })), e.d(n, "randomExponential", (function () {
      return l
    })), e.d(n, "randomPareto", (function () {
      return h
    })), e.d(n, "randomBernoulli", (function () {
      return f
    })), e.d(n, "randomGeometric", (function () {
      return d
    })), e.d(n, "randomBinomial", (function () {
      return m
    })), e.d(n, "randomGamma", (function () {
      return p
    })), e.d(n, "randomBeta", (function () {
      return g
    })), e.d(n, "randomWeibull", (function () {
      return v
    })), e.d(n, "randomCauchy", (function () {
      return y
    })), e.d(n, "randomLogistic", (function () {
      return _
    })), e.d(n, "randomPoisson", (function () {
      return w
    }));
    var i = Math.random, r = function t(n) {
      function e(t, e) {
        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
          return n() * e + t
        }
      }
      
      return e.source = t, e
    }(i), o = function t(n) {
      function e(t, e) {
        return arguments.length < 2 && (e = t, t = 0), t = Math.floor(t), e = Math.floor(e) - t, function () {
          return Math.floor(n() * e + t)
        }
      }
      
      return e.source = t, e
    }(i), a = function t(n) {
      function e(t, e) {
        var i, r;
        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
          var o;
          if (null != i) o = i, i = null; else do {
            i = 2 * n() - 1, o = 2 * n() - 1, r = i * i + o * o
          } while (!r || r > 1);
          return t + e * o * Math.sqrt(-2 * Math.log(r) / r)
        }
      }
      
      return e.source = t, e
    }(i), s = function t(n) {
      var e = a.source(n);
      
      function i() {
        var t = e.apply(this, arguments);
        return function () {
          return Math.exp(t())
        }
      }
      
      return i.source = t, i
    }(i), u = function t(n) {
      function e(t) {
        return (t = +t) <= 0 ? () => 0 : function () {
          for (var e = 0, i = t; i > 1; --i) e += n();
          return e + i * n()
        }
      }
      
      return e.source = t, e
    }(i), c = function t(n) {
      var e = u.source(n);
      
      function i(t) {
        if (0 == (t = +t)) return n;
        var i = e(t);
        return function () {
          return i() / t
        }
      }
      
      return i.source = t, i
    }(i), l = function t(n) {
      function e(t) {
        return function () {
          return -Math.log1p(-n()) / t
        }
      }
      
      return e.source = t, e
    }(i), h = function t(n) {
      function e(t) {
        if ((t = +t) < 0) throw new RangeError("invalid alpha");
        return t = 1 / -t, function () {
          return Math.pow(1 - n(), t)
        }
      }
      
      return e.source = t, e
    }(i), f = function t(n) {
      function e(t) {
        if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
        return function () {
          return Math.floor(n() + t)
        }
      }
      
      return e.source = t, e
    }(i), d = function t(n) {
      function e(t) {
        if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
        return 0 === t ? () => 1 / 0 : 1 === t ? () => 1 : (t = Math.log1p(-t), function () {
          return 1 + Math.floor(Math.log1p(-n()) / t)
        })
      }
      
      return e.source = t, e
    }(i), p = function t(n) {
      var e = a.source(n)();
      
      function i(t, i) {
        if ((t = +t) < 0) throw new RangeError("invalid k");
        if (0 === t) return () => 0;
        if (i = null == i ? 1 : +i, 1 === t) return () => -Math.log1p(-n()) * i;
        var r = (t < 1 ? t + 1 : t) - 1 / 3, o = 1 / (3 * Math.sqrt(r)),
          a = t < 1 ? () => Math.pow(n(), 1 / t) : () => 1;
        return function () {
          do {
            do {
              var t = e(), s = 1 + o * t
            } while (s <= 0);
            s *= s * s;
            var u = 1 - n()
          } while (u >= 1 - .0331 * t * t * t * t && Math.log(u) >= .5 * t * t + r * (1 - s + Math.log(s)));
          return r * s * a() * i
        }
      }
      
      return i.source = t, i
    }(i), g = function t(n) {
      var e = p.source(n);
      
      function i(t, n) {
        var i = e(t), r = e(n);
        return function () {
          var t = i();
          return 0 === t ? 0 : t / (t + r())
        }
      }
      
      return i.source = t, i
    }(i), m = function t(n) {
      var e = d.source(n), i = g.source(n);
      
      function r(t, n) {
        return t = +t, (n = +n) >= 1 ? () => t : n <= 0 ? () => 0 : function () {
          for (var r = 0, o = t, a = n; o * a > 16 && o * (1 - a) > 16;) {
            var s = Math.floor((o + 1) * a), u = i(s, o - s + 1)();
            u <= a ? (r += s, o -= s, a = (a - u) / (1 - u)) : (o = s - 1, a /= u)
          }
          for (var c = a < .5, l = e(c ? a : 1 - a), h = l(), f = 0; h <= o; ++f) h += l();
          return r + (c ? f : o - f)
        }
      }
      
      return r.source = t, r
    }(i), v = function t(n) {
      function e(t, e, i) {
        var r;
        return 0 == (t = +t) ? r = t => -Math.log(t) : (t = 1 / t, r = n => Math.pow(n, t)), e = null == e ? 0 : +e, i = null == i ? 1 : +i, function () {
          return e + i * r(-Math.log1p(-n()))
        }
      }
      
      return e.source = t, e
    }(i), y = function t(n) {
      function e(t, e) {
        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
          return t + e * Math.tan(Math.PI * n())
        }
      }
      
      return e.source = t, e
    }(i), _ = function t(n) {
      function e(t, e) {
        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
          var i = n();
          return t + e * Math.log(i / (1 - i))
        }
      }
      
      return e.source = t, e
    }(i), w = function t(n) {
      var e = p.source(n), i = m.source(n);
      
      function r(t) {
        return function () {
          for (var r = 0, o = t; o > 16;) {
            var a = Math.floor(.875 * o), s = e(a)();
            if (s > o) return r + i(a - 1, o / s)();
            r += a, o -= s
          }
          for (var u = -Math.log1p(-n()), c = 0; u <= o; ++c) u -= Math.log1p(-n());
          return r + c
        }
      }
      
      return r.source = t, r
    }(i)
  },//10
  function (t, n, e) {
    "use strict";
    e.d(n, "b", (function () {
      return a
    })), e.d(n, "a", (function () {
      return s
    }));
    var i = e(0), r = e(19), o = Object(r.a)(i.a), a = o.right, s = o.left;
    n.c = a
  },//11
  function (t, n, e) {
    "use strict";
    e.d(n, "b", (function () {
      return a
    })), e.d(n, "c", (function () {
      return s
    }));
    var i = Math.sqrt(50), r = Math.sqrt(10), o = Math.sqrt(2);
    
    function a(t, n, e) {
      var a = (n - t) / Math.max(0, e), s = Math.floor(Math.log(a) / Math.LN10), u = a / Math.pow(10, s);
      return s >= 0 ? (u >= i ? 10 : u >= r ? 5 : u >= o ? 2 : 1) * Math.pow(10, s) : -Math.pow(10, -s) / (u >= i ? 10 : u >= r ? 5 : u >= o ? 2 : 1)
    }
    
    function s(t, n, e) {
      var a = Math.abs(n - t) / Math.max(0, e), s = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)), u = a / s;
      return u >= i ? s *= 10 : u >= r ? s *= 5 : u >= o && (s *= 2), n < t ? -s : s
    }
    
    n.a = function (t, n, e) {
      var i, r, o, s, u = -1;
      if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
      if ((i = n < t) && (r = t, t = n, n = r), 0 === (s = a(t, n, e)) || !isFinite(s)) return [];
      if (s > 0) for (t = Math.ceil(t / s), n = Math.floor(n / s), o = new Array(r = Math.ceil(n - t + 1)); ++u < r;) o[u] = (t + u) * s; else for (t = Math.floor(t * s), n = Math.ceil(n * s), o = new Array(r = Math.ceil(t - n + 1)); ++u < r;) o[u] = (t - u) / s;
      return i && o.reverse(), o
    }
  },//12
  function (t, n, e) {
    "use strict";
    e.d(n, "b", (function () {
      return r
    })), e.d(n, "a", (function () {
      return o
    }));
    var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    
    function r(t) {
      if (!(n = i.exec(t))) throw new Error("invalid format: " + t);
      var n;
      return new o({
        fill: n[1],
        align: n[2],
        sign: n[3],
        symbol: n[4],
        zero: n[5],
        width: n[6],
        comma: n[7],
        precision: n[8] && n[8].slice(1),
        trim: n[9],
        type: n[10]
      })
    }
    
    function o(t) {
      this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
    }
    
    r.prototype = o.prototype, o.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    }
  },//13
  function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "scaleBand", (function () {
      return u
    })), e.d(n, "scalePoint", (function () {
      return l
    })), e.d(n, "scaleIdentity", (function () {
      return Tt
    })), e.d(n, "scaleLinear", (function () {
      return xt
    })), e.d(n, "scaleLog", (function () {
      return It
    })), e.d(n, "scaleSymlog", (function () {
      return Dt
    })), e.d(n, "scaleOrdinal", (function () {
      return s
    })), e.d(n, "scaleImplicit", (function () {
      return a
    })), e.d(n, "scalePow", (function () {
      return Wt
    })), e.d(n, "scaleSqrt", (function () {
      return Ft
    })), e.d(n, "scaleRadial", (function () {
      return qt
    })), e.d(n, "scaleQuantile", (function () {
      return Yt
    })), e.d(n, "scaleQuantize", (function () {
      return Jt
    })), e.d(n, "scaleThreshold", (function () {
      return Xt
    })), e.d(n, "scaleTime", (function () {
      return ei
    })), e.d(n, "scaleUtc", (function () {
      return ci
    })), e.d(n, "scaleSequential", (function () {
      return fi
    })), e.d(n, "scaleSequentialLog", (function () {
      return di
    })), e.d(n, "scaleSequentialPow", (function () {
      return gi
    })), e.d(n, "scaleSequentialSqrt", (function () {
      return mi
    })), e.d(n, "scaleSequentialSymlog", (function () {
      return pi
    })), e.d(n, "scaleSequentialQuantile", (function () {
      return vi
    })), e.d(n, "scaleDiverging", (function () {
      return wi
    })), e.d(n, "scaleDivergingLog", (function () {
      return bi
    })), e.d(n, "scaleDivergingPow", (function () {
      return Ti
    })), e.d(n, "scaleDivergingSqrt", (function () {
      return Mi
    })), e.d(n, "scaleDivergingSymlog", (function () {
      return xi
    })), e.d(n, "tickFormat", (function () {
      return wt
    }));
    var i = e(20);
    
    function r(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(n).domain(t)
      }
      return this
    }
    
    function o(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" == typeof t ? this.interpolator(t) : this.range(t);
          break;
        default:
          this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n)
      }
      return this
    }
    
    const a = Symbol("implicit");
    
    function s() {
      var t = new Map, n = [], e = [], i = a;
      
      function o(r) {
        var o = r + "", s = t.get(o);
        if (!s) {
          if (i !== a) return i;
          t.set(o, s = n.push(r))
        }
        return e[(s - 1) % e.length]
      }
      
      return o.domain = function (e) {
        if (!arguments.length) return n.slice();
        n = [], t = new Map;
        for (const i of e) {
          const e = i + "";
          t.has(e) || t.set(e, n.push(i))
        }
        return o
      }, o.range = function (t) {
        return arguments.length ? (e = Array.from(t), o) : e.slice()
      }, o.unknown = function (t) {
        return arguments.length ? (i = t, o) : i
      }, o.copy = function () {
        return s(n, e).unknown(i)
      }, r.apply(o, arguments), o
    }
    
    function u() {
      var t, n, e = s().unknown(void 0), o = e.domain, a = e.range, c = 0, l = 1, h = !1, f = 0, d = 0, p = .5;
      
      function g() {
        var e = o().length, r = l < c, s = r ? l : c, u = r ? c : l;
        t = (u - s) / Math.max(1, e - f + 2 * d), h && (t = Math.floor(t)), s += (u - s - t * (e - f)) * p, n = t * (1 - f), h && (s = Math.round(s), n = Math.round(n));
        var g = Object(i.a)(e).map((function (n) {
          return s + t * n
        }));
        return a(r ? g.reverse() : g)
      }
      
      return delete e.unknown, e.domain = function (t) {
        return arguments.length ? (o(t), g()) : o()
      }, e.range = function (t) {
        return arguments.length ? ([c, l] = t, c = +c, l = +l, g()) : [c, l]
      }, e.rangeRound = function (t) {
        return [c, l] = t, c = +c, l = +l, h = !0, g()
      }, e.bandwidth = function () {
        return n
      }, e.step = function () {
        return t
      }, e.round = function (t) {
        return arguments.length ? (h = !!t, g()) : h
      }, e.padding = function (t) {
        return arguments.length ? (f = Math.min(1, d = +t), g()) : f
      }, e.paddingInner = function (t) {
        return arguments.length ? (f = Math.min(1, t), g()) : f
      }, e.paddingOuter = function (t) {
        return arguments.length ? (d = +t, g()) : d
      }, e.align = function (t) {
        return arguments.length ? (p = Math.max(0, Math.min(1, t)), g()) : p
      }, e.copy = function () {
        return u(o(), [c, l]).round(h).paddingInner(f).paddingOuter(d).align(p)
      }, r.apply(g(), arguments)
    }
    
    function c(t) {
      var n = t.copy;
      return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
        return c(n())
      }, t
    }
    
    function l() {
      return c(u.apply(null, arguments).paddingInner(1))
    }
    
    var h = e(11), f = e(10), d = function (t, n, e) {
      t.prototype = n.prototype = e, e.constructor = t
    };
    
    function p(t, n) {
      var e = Object.create(t.prototype);
      for (var i in n) e[i] = n[i];
      return e
    }
    
    function g() {
    }
    
    var m = "\\s*([+-]?\\d+)\\s*", v = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      y = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _ = /^#([0-9a-f]{3,8})$/,
      w = new RegExp("^rgb\\(" + [m, m, m] + "\\)$"), b = new RegExp("^rgb\\(" + [y, y, y] + "\\)$"),
      x = new RegExp("^rgba\\(" + [m, m, m, v] + "\\)$"), T = new RegExp("^rgba\\(" + [y, y, y, v] + "\\)$"),
      M = new RegExp("^hsl\\(" + [v, y, y] + "\\)$"), k = new RegExp("^hsla\\(" + [v, y, y, v] + "\\)$"), C = {
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
      };
    
    function S() {
      return this.rgb().formatHex()
    }
    
    function E() {
      return this.rgb().formatRgb()
    }
    
    function A(t) {
      var n, e;
      return t = (t + "").trim().toLowerCase(), (n = _.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? O(n) : 3 === e ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? new R(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? new R(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = w.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = b.exec(t)) ? new R(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = x.exec(t)) ? N(n[1], n[2], n[3], n[4]) : (n = T.exec(t)) ? N(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = M.exec(t)) ? j(n[1], n[2] / 100, n[3] / 100, 1) : (n = k.exec(t)) ? j(n[1], n[2] / 100, n[3] / 100, n[4]) : C.hasOwnProperty(t) ? O(C[t]) : "transparent" === t ? new R(NaN, NaN, NaN, 0) : null
    }
    
    function O(t) {
      return new R(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    
    function N(t, n, e, i) {
      return i <= 0 && (t = n = e = NaN), new R(t, n, e, i)
    }
    
    function I(t) {
      return t instanceof g || (t = A(t)), t ? new R((t = t.rgb()).r, t.g, t.b, t.opacity) : new R
    }
    
    function L(t, n, e, i) {
      return 1 === arguments.length ? I(t) : new R(t, n, e, null == i ? 1 : i)
    }
    
    function R(t, n, e, i) {
      this.r = +t, this.g = +n, this.b = +e, this.opacity = +i
    }
    
    function P() {
      return "#" + H(this.r) + H(this.g) + H(this.b)
    }
    
    function D() {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }
    
    function H(t) {
      return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }
    
    function j(t, n, e, i) {
      return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new U(t, n, e, i)
    }
    
    function V(t) {
      if (t instanceof U) return new U(t.h, t.s, t.l, t.opacity);
      if (t instanceof g || (t = A(t)), !t) return new U;
      if (t instanceof U) return t;
      var n = (t = t.rgb()).r / 255, e = t.g / 255, i = t.b / 255, r = Math.min(n, e, i), o = Math.max(n, e, i),
        a = NaN,
        s = o - r, u = (o + r) / 2;
      return s ? (a = n === o ? (e - i) / s + 6 * (e < i) : e === o ? (i - n) / s + 2 : (n - e) / s + 4, s /= u < .5 ? o + r : 2 - o - r, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new U(a, s, u, t.opacity)
    }
    
    function U(t, n, e, i) {
      this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
    }
    
    function W(t, n, e) {
      return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    
    function F(t, n, e, i, r) {
      var o = t * t, a = o * t;
      return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * i + a * r) / 6
    }
    
    d(g, A, {
      copy: function (t) {
        return Object.assign(new this.constructor, this, t)
      }, displayable: function () {
        return this.rgb().displayable()
      }, hex: S, formatHex: S, formatHsl: function () {
        return V(this).formatHsl()
      }, formatRgb: E, toString: E
    }), d(R, L, p(g, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new R(this.r * t, this.g * t, this.b * t, this.opacity)
      }, darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new R(this.r * t, this.g * t, this.b * t, this.opacity)
      }, rgb: function () {
        return this
      }, displayable: function () {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      }, hex: P, formatHex: P, formatRgb: D, toString: D
    })), d(U, (function (t, n, e, i) {
      return 1 === arguments.length ? V(t) : new U(t, n, e, null == i ? 1 : i)
    }), p(g, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new U(this.h, this.s, this.l * t, this.opacity)
      }, darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new U(this.h, this.s, this.l * t, this.opacity)
      }, rgb: function () {
        var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l,
          i = e + (e < .5 ? e : 1 - e) * n, r = 2 * e - i;
        return new R(W(t >= 240 ? t - 240 : t + 120, r, i), W(t, r, i), W(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
      }, displayable: function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      }, formatHsl: function () {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
      }
    }));
    var B = function (t) {
      return function () {
        return t
      }
    };
    
    function $(t, n) {
      return function (e) {
        return t + e * n
      }
    }
    
    function q(t) {
      return 1 == (t = +t) ? z : function (n, e) {
        return e - n ? function (t, n, e) {
          return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (i) {
            return Math.pow(t + i * n, e)
          }
        }(n, e, t) : B(isNaN(n) ? e : n)
      }
    }
    
    function z(t, n) {
      var e = n - t;
      return e ? $(t, e) : B(isNaN(t) ? n : t)
    }
    
    var G = function t(n) {
      var e = q(n);
      
      function i(t, n) {
        var i = e((t = L(t)).r, (n = L(n)).r), r = e(t.g, n.g), o = e(t.b, n.b), a = z(t.opacity, n.opacity);
        return function (n) {
          return t.r = i(n), t.g = r(n), t.b = o(n), t.opacity = a(n), t + ""
        }
      }
      
      return i.gamma = t, i
    }(1);
    
    function Y(t) {
      return function (n) {
        var e, i, r = n.length, o = new Array(r), a = new Array(r), s = new Array(r);
        for (e = 0; e < r; ++e) i = L(n[e]), o[e] = i.r || 0, a[e] = i.g || 0, s[e] = i.b || 0;
        return o = t(o), a = t(a), s = t(s), i.opacity = 1, function (t) {
          return i.r = o(t), i.g = a(t), i.b = s(t), i + ""
        }
      }
    }
    
    Y((function (t) {
      var n = t.length - 1;
      return function (e) {
        var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), r = t[i], o = t[i + 1],
          a = i > 0 ? t[i - 1] : 2 * r - o, s = i < n - 1 ? t[i + 2] : 2 * o - r;
        return F((e - i / n) * n, a, r, o, s)
      }
    })), Y((function (t) {
      var n = t.length;
      return function (e) {
        var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n), r = t[(i + n - 1) % n], o = t[i % n], a = t[(i + 1) % n],
          s = t[(i + 2) % n];
        return F((e - i / n) * n, r, o, a, s)
      }
    }));
    var J = function (t, n) {
      n || (n = []);
      var e, i = t ? Math.min(n.length, t.length) : 0, r = n.slice();
      return function (o) {
        for (e = 0; e < i; ++e) r[e] = t[e] * (1 - o) + n[e] * o;
        return r
      }
    };
    
    function X(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView)
    }
    
    function Q(t, n) {
      var e, i = n ? n.length : 0, r = t ? Math.min(i, t.length) : 0, o = new Array(r), a = new Array(i);
      for (e = 0; e < r; ++e) o[e] = rt(t[e], n[e]);
      for (; e < i; ++e) a[e] = n[e];
      return function (t) {
        for (e = 0; e < r; ++e) a[e] = o[e](t);
        return a
      }
    }
    
    var Z = function (t, n) {
      var e = new Date;
      return t = +t, n = +n, function (i) {
        return e.setTime(t * (1 - i) + n * i), e
      }
    }, K = function (t, n) {
      return t = +t, n = +n, function (e) {
        return t * (1 - e) + n * e
      }
    }, tt = function (t, n) {
      var e, i = {}, r = {};
      for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = rt(t[e], n[e]) : r[e] = n[e];
      return function (t) {
        for (e in i) r[e] = i[e](t);
        return r
      }
    }, nt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, et = new RegExp(nt.source, "g");
    var it = function (t, n) {
      var e, i, r, o = nt.lastIndex = et.lastIndex = 0, a = -1, s = [], u = [];
      for (t += "", n += ""; (e = nt.exec(t)) && (i = et.exec(n));) (r = i.index) > o && (r = n.slice(o, r), s[a] ? s[a] += r : s[++a] = r), (e = e[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({
        i: a,
        x: K(e, i)
      })), o = et.lastIndex;
      return o < n.length && (r = n.slice(o), s[a] ? s[a] += r : s[++a] = r), s.length < 2 ? u[0] ? function (t) {
        return function (n) {
          return t(n) + ""
        }
      }(u[0].x) : function (t) {
        return function () {
          return t
        }
      }(n) : (n = u.length, function (t) {
        for (var e, i = 0; i < n; ++i) s[(e = u[i]).i] = e.x(t);
        return s.join("")
      })
    }, rt = function (t, n) {
      var e, i = typeof n;
      return null == n || "boolean" === i ? B(n) : ("number" === i ? K : "string" === i ? (e = A(n)) ? (n = e, G) : it : n instanceof A ? G : n instanceof Date ? Z : X(n) ? J : Array.isArray(n) ? Q : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? tt : K)(t, n)
    }, ot = function (t, n) {
      return t = +t, n = +n, function (e) {
        return Math.round(t * (1 - e) + n * e)
      }
    }, at = function (t) {
      return +t
    }, st = [0, 1];
    
    function ut(t) {
      return t
    }
    
    function ct(t, n) {
      return (n -= t = +t) ? function (e) {
        return (e - t) / n
      } : (e = isNaN(n) ? NaN : .5, function () {
        return e
      });
      var e
    }
    
    function lt(t, n, e) {
      var i = t[0], r = t[1], o = n[0], a = n[1];
      return r < i ? (i = ct(r, i), o = e(a, o)) : (i = ct(i, r), o = e(o, a)), function (t) {
        return o(i(t))
      }
    }
    
    function ht(t, n, e) {
      var i = Math.min(t.length, n.length) - 1, r = new Array(i), o = new Array(i), a = -1;
      for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) r[a] = ct(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
      return function (n) {
        var e = Object(f.c)(t, n, 1, i) - 1;
        return o[e](r[e](n))
      }
    }
    
    function ft(t, n) {
      return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }
    
    function dt() {
      var t, n, e, i, r, o, a = st, s = st, u = rt, c = ut;
      
      function l() {
        var t, n, e, u = Math.min(a.length, s.length);
        return c !== ut && (t = a[0], n = a[u - 1], t > n && (e = t, t = n, n = e), c = function (e) {
          return Math.max(t, Math.min(n, e))
        }), i = u > 2 ? ht : lt, r = o = null, h
      }
      
      function h(n) {
        return isNaN(n = +n) ? e : (r || (r = i(a.map(t), s, u)))(t(c(n)))
      }
      
      return h.invert = function (e) {
        return c(n((o || (o = i(s, a.map(t), K)))(e)))
      }, h.domain = function (t) {
        return arguments.length ? (a = Array.from(t, at), l()) : a.slice()
      }, h.range = function (t) {
        return arguments.length ? (s = Array.from(t), l()) : s.slice()
      }, h.rangeRound = function (t) {
        return s = Array.from(t), u = ot, l()
      }, h.clamp = function (t) {
        return arguments.length ? (c = !!t || ut, l()) : c !== ut
      }, h.interpolate = function (t) {
        return arguments.length ? (u = t, l()) : u
      }, h.unknown = function (t) {
        return arguments.length ? (e = t, h) : e
      }, function (e, i) {
        return t = e, n = i, l()
      }
    }
    
    function pt() {
      return dt()(ut, ut)
    }
    
    var gt = e(12), mt = e(28), vt = e(16), yt = e(29), _t = e(30), wt = function (t, n, e, i) {
      var r, o = Object(h.c)(t, n, e);
      switch ((i = Object(gt.b)(null == i ? ",f" : i)).type) {
        case"s":
          var a = Math.max(Math.abs(t), Math.abs(n));
          return null != i.precision || isNaN(r = Object(mt.a)(o, a)) || (i.precision = r), Object(vt.c)(i, a);
        case"":
        case"e":
        case"g":
        case"p":
        case"r":
          null != i.precision || isNaN(r = Object(yt.a)(o, Math.max(Math.abs(t), Math.abs(n)))) || (i.precision = r - ("e" === i.type));
          break;
        case"f":
        case"%":
          null != i.precision || isNaN(r = Object(_t.a)(o)) || (i.precision = r - 2 * ("%" === i.type))
      }
      return Object(vt.b)(i)
    };
    
    function bt(t) {
      var n = t.domain;
      return t.ticks = function (t) {
        var e = n();
        return Object(h.a)(e[0], e[e.length - 1], null == t ? 10 : t)
      }, t.tickFormat = function (t, e) {
        var i = n();
        return wt(i[0], i[i.length - 1], null == t ? 10 : t, e)
      }, t.nice = function (e) {
        null == e && (e = 10);
        var i, r = n(), o = 0, a = r.length - 1, s = r[o], u = r[a];
        return u < s && (i = s, s = u, u = i, i = o, o = a, a = i), (i = Object(h.b)(s, u, e)) > 0 ? (s = Math.floor(s / i) * i, u = Math.ceil(u / i) * i, i = Object(h.b)(s, u, e)) : i < 0 && (s = Math.ceil(s * i) / i, u = Math.floor(u * i) / i, i = Object(h.b)(s, u, e)), i > 0 ? (r[o] = Math.floor(s / i) * i, r[a] = Math.ceil(u / i) * i, n(r)) : i < 0 && (r[o] = Math.ceil(s * i) / i, r[a] = Math.floor(u * i) / i, n(r)), t
      }, t
    }
    
    function xt() {
      var t = pt();
      return t.copy = function () {
        return ft(t, xt())
      }, r.apply(t, arguments), bt(t)
    }
    
    function Tt(t) {
      var n;
      
      function e(t) {
        return isNaN(t = +t) ? n : t
      }
      
      return e.invert = e, e.domain = e.range = function (n) {
        return arguments.length ? (t = Array.from(n, at), e) : t.slice()
      }, e.unknown = function (t) {
        return arguments.length ? (n = t, e) : n
      }, e.copy = function () {
        return Tt(t).unknown(n)
      }, t = arguments.length ? Array.from(t, at) : [0, 1], bt(e)
    }
    
    var Mt = function (t, n) {
      var e, i = 0, r = (t = t.slice()).length - 1, o = t[i], a = t[r];
      return a < o && (e = i, i = r, r = e, e = o, o = a, a = e), t[i] = n.floor(o), t[r] = n.ceil(a), t
    };
    
    function kt(t) {
      return Math.log(t)
    }
    
    function Ct(t) {
      return Math.exp(t)
    }
    
    function St(t) {
      return -Math.log(-t)
    }
    
    function Et(t) {
      return -Math.exp(-t)
    }
    
    function At(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }
    
    function Ot(t) {
      return function (n) {
        return -t(-n)
      }
    }
    
    function Nt(t) {
      var n, e, i = t(kt, Ct), r = i.domain, o = 10;
      
      function a() {
        return n = function (t) {
          return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
            return Math.log(n) / t
          })
        }(o), e = function (t) {
          return 10 === t ? At : t === Math.E ? Math.exp : function (n) {
            return Math.pow(t, n)
          }
        }(o), r()[0] < 0 ? (n = Ot(n), e = Ot(e), t(St, Et)) : t(kt, Ct), i
      }
      
      return i.base = function (t) {
        return arguments.length ? (o = +t, a()) : o
      }, i.domain = function (t) {
        return arguments.length ? (r(t), a()) : r()
      }, i.ticks = function (t) {
        var i, a = r(), s = a[0], u = a[a.length - 1];
        (i = u < s) && (d = s, s = u, u = d);
        var c, l, f, d = n(s), p = n(u), g = null == t ? 10 : +t, m = [];
        if (!(o % 1) && p - d < g) {
          if (d = Math.floor(d), p = Math.ceil(p), s > 0) {
            for (; d <= p; ++d) for (l = 1, c = e(d); l < o; ++l) if (!((f = c * l) < s)) {
              if (f > u) break;
              m.push(f)
            }
          } else for (; d <= p; ++d) for (l = o - 1, c = e(d); l >= 1; --l) if (!((f = c * l) < s)) {
            if (f > u) break;
            m.push(f)
          }
          2 * m.length < g && (m = Object(h.a)(s, u, g))
        } else m = Object(h.a)(d, p, Math.min(p - d, g)).map(e);
        return i ? m.reverse() : m
      }, i.tickFormat = function (t, r) {
        if (null == r && (r = 10 === o ? ".0e" : ","), "function" != typeof r && (r = Object(vt.b)(r)), t === 1 / 0) return r;
        null == t && (t = 10);
        var a = Math.max(1, o * t / i.ticks().length);
        return function (t) {
          var i = t / e(Math.round(n(t)));
          return i * o < o - .5 && (i *= o), i <= a ? r(t) : ""
        }
      }, i.nice = function () {
        return r(Mt(r(), {
          floor: function (t) {
            return e(Math.floor(n(t)))
          }, ceil: function (t) {
            return e(Math.ceil(n(t)))
          }
        }))
      }, i
    }
    
    function It() {
      var t = Nt(dt()).domain([1, 10]);
      return t.copy = function () {
        return ft(t, It()).base(t.base())
      }, r.apply(t, arguments), t
    }
    
    function Lt(t) {
      return function (n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / t))
      }
    }
    
    function Rt(t) {
      return function (n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * t
      }
    }
    
    function Pt(t) {
      var n = 1, e = t(Lt(n), Rt(n));
      return e.constant = function (e) {
        return arguments.length ? t(Lt(n = +e), Rt(n)) : n
      }, bt(e)
    }
    
    function Dt() {
      var t = Pt(dt());
      return t.copy = function () {
        return ft(t, Dt()).constant(t.constant())
      }, r.apply(t, arguments)
    }
    
    function Ht(t) {
      return function (n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
      }
    }
    
    function jt(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
    }
    
    function Vt(t) {
      return t < 0 ? -t * t : t * t
    }
    
    function Ut(t) {
      var n = t(ut, ut), e = 1;
      
      function i() {
        return 1 === e ? t(ut, ut) : .5 === e ? t(jt, Vt) : t(Ht(e), Ht(1 / e))
      }
      
      return n.exponent = function (t) {
        return arguments.length ? (e = +t, i()) : e
      }, bt(n)
    }
    
    function Wt() {
      var t = Ut(dt());
      return t.copy = function () {
        return ft(t, Wt()).exponent(t.exponent())
      }, r.apply(t, arguments), t
    }
    
    function Ft() {
      return Wt.apply(null, arguments).exponent(.5)
    }
    
    function Bt(t) {
      return Math.sign(t) * t * t
    }
    
    function $t(t) {
      return Math.sign(t) * Math.sqrt(Math.abs(t))
    }
    
    function qt() {
      var t, n = pt(), e = [0, 1], i = !1;
      
      function o(e) {
        var r = $t(n(e));
        return isNaN(r) ? t : i ? Math.round(r) : r
      }
      
      return o.invert = function (t) {
        return n.invert(Bt(t))
      }, o.domain = function (t) {
        return arguments.length ? (n.domain(t), o) : n.domain()
      }, o.range = function (t) {
        return arguments.length ? (n.range((e = Array.from(t, at)).map(Bt)), o) : e.slice()
      }, o.rangeRound = function (t) {
        return o.range(t).round(!0)
      }, o.round = function (t) {
        return arguments.length ? (i = !!t, o) : i
      }, o.clamp = function (t) {
        return arguments.length ? (n.clamp(t), o) : n.clamp()
      }, o.unknown = function (n) {
        return arguments.length ? (t = n, o) : t
      }, o.copy = function () {
        return qt(n.domain(), e).round(i).clamp(n.clamp()).unknown(t)
      }, r.apply(o, arguments), bt(o)
    }
    
    var zt = e(3), Gt = e(0);
    
    function Yt() {
      var t, n = [], e = [], i = [];
      
      function o() {
        var t = 0, r = Math.max(1, e.length);
        for (i = new Array(r - 1); ++t < r;) i[t - 1] = Object(zt.a)(n, t / r);
        return a
      }
      
      function a(n) {
        return isNaN(n = +n) ? t : e[Object(f.c)(i, n)]
      }
      
      return a.invertExtent = function (t) {
        var r = e.indexOf(t);
        return r < 0 ? [NaN, NaN] : [r > 0 ? i[r - 1] : n[0], r < i.length ? i[r] : n[n.length - 1]]
      }, a.domain = function (t) {
        if (!arguments.length) return n.slice();
        n = [];
        for (let e of t) null == e || isNaN(e = +e) || n.push(e);
        return n.sort(Gt.a), o()
      }, a.range = function (t) {
        return arguments.length ? (e = Array.from(t), o()) : e.slice()
      }, a.unknown = function (n) {
        return arguments.length ? (t = n, a) : t
      }, a.quantiles = function () {
        return i.slice()
      }, a.copy = function () {
        return Yt().domain(n).range(e).unknown(t)
      }, r.apply(a, arguments)
    }
    
    function Jt() {
      var t, n = 0, e = 1, i = 1, o = [.5], a = [0, 1];
      
      function s(n) {
        return n <= n ? a[Object(f.c)(o, n, 0, i)] : t
      }
      
      function u() {
        var t = -1;
        for (o = new Array(i); ++t < i;) o[t] = ((t + 1) * e - (t - i) * n) / (i + 1);
        return s
      }
      
      return s.domain = function (t) {
        return arguments.length ? ([n, e] = t, n = +n, e = +e, u()) : [n, e]
      }, s.range = function (t) {
        return arguments.length ? (i = (a = Array.from(t)).length - 1, u()) : a.slice()
      }, s.invertExtent = function (t) {
        var r = a.indexOf(t);
        return r < 0 ? [NaN, NaN] : r < 1 ? [n, o[0]] : r >= i ? [o[i - 1], e] : [o[r - 1], o[r]]
      }, s.unknown = function (n) {
        return arguments.length ? (t = n, s) : s
      }, s.thresholds = function () {
        return o.slice()
      }, s.copy = function () {
        return Jt().domain([n, e]).range(a).unknown(t)
      }, r.apply(bt(s), arguments)
    }
    
    function Xt() {
      var t, n = [.5], e = [0, 1], i = 1;
      
      function o(r) {
        return r <= r ? e[Object(f.c)(n, r, 0, i)] : t
      }
      
      return o.domain = function (t) {
        return arguments.length ? (n = Array.from(t), i = Math.min(n.length, e.length - 1), o) : n.slice()
      }, o.range = function (t) {
        return arguments.length ? (e = Array.from(t), i = Math.min(n.length, e.length - 1), o) : e.slice()
      }, o.invertExtent = function (t) {
        var i = e.indexOf(t);
        return [n[i - 1], n[i]]
      }, o.unknown = function (n) {
        return arguments.length ? (t = n, o) : t
      }, o.copy = function () {
        return Xt().domain(n).range(e).unknown(t)
      }, r.apply(o, arguments)
    }
    
    var Qt = e(19), Zt = new Date, Kt = new Date;
    
    function tn(t, n, e, i) {
      function r(n) {
        return t(n = 0 === arguments.length ? new Date : new Date(+n)), n
      }
      
      return r.floor = function (n) {
        return t(n = new Date(+n)), n
      }, r.ceil = function (e) {
        return t(e = new Date(e - 1)), n(e, 1), t(e), e
      }, r.round = function (t) {
        var n = r(t), e = r.ceil(t);
        return t - n < e - t ? n : e
      }, r.offset = function (t, e) {
        return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
      }, r.range = function (e, i, o) {
        var a, s = [];
        if (e = r.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < i && o > 0)) return s;
        do {
          s.push(a = new Date(+e)), n(e, o), t(e)
        } while (a < e && e < i);
        return s
      }, r.filter = function (e) {
        return tn((function (n) {
          if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
        }), (function (t, i) {
          if (t >= t) if (i < 0) for (; ++i <= 0;) for (; n(t, -1), !e(t);) ; else for (; --i >= 0;) for (; n(t, 1), !e(t);) ;
        }))
      }, e && (r.count = function (n, i) {
        return Zt.setTime(+n), Kt.setTime(+i), t(Zt), t(Kt), Math.floor(e(Zt, Kt))
      }, r.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function (n) {
          return i(n) % t == 0
        } : function (n) {
          return r.count(0, n) % t == 0
        }) : r : null
      }), r
    }
    
    var nn = tn((function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }), (function (t, n) {
      t.setFullYear(t.getFullYear() + n)
    }), (function (t, n) {
      return n.getFullYear() - t.getFullYear()
    }), (function (t) {
      return t.getFullYear()
    }));
    nn.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? tn((function (n) {
        n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
      }), (function (n, e) {
        n.setFullYear(n.getFullYear() + e * t)
      })) : null
    };
    var en = nn, rn = (nn.range, tn((function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0)
    }), (function (t, n) {
      t.setMonth(t.getMonth() + n)
    }), (function (t, n) {
      return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    }), (function (t) {
      return t.getMonth()
    }))), on = rn;
    rn.range;
    
    function an(t) {
      return tn((function (n) {
        n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setDate(t.getDate() + 7 * n)
      }), (function (t, n) {
        return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
      }))
    }
    
    var sn = an(0), un = an(1), cn = an(2), ln = an(3), hn = an(4), fn = an(5), dn = an(6),
      pn = (sn.range, un.range, cn.range, ln.range, hn.range, fn.range, dn.range, tn((function (t) {
        t.setHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setDate(t.getDate() + n)
      }), (function (t, n) {
        return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
      }), (function (t) {
        return t.getDate() - 1
      }))), gn = pn, mn = (pn.range, tn((function (t) {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
      }), (function (t, n) {
        t.setTime(+t + 36e5 * n)
      }), (function (t, n) {
        return (n - t) / 36e5
      }), (function (t) {
        return t.getHours()
      }))), vn = mn, yn = (mn.range, tn((function (t) {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
      }), (function (t, n) {
        t.setTime(+t + 6e4 * n)
      }), (function (t, n) {
        return (n - t) / 6e4
      }), (function (t) {
        return t.getMinutes()
      }))), _n = yn, wn = (yn.range, tn((function (t) {
        t.setTime(t - t.getMilliseconds())
      }), (function (t, n) {
        t.setTime(+t + 1e3 * n)
      }), (function (t, n) {
        return (n - t) / 1e3
      }), (function (t) {
        return t.getUTCSeconds()
      }))), bn = wn, xn = (wn.range, tn((function () {
      }), (function (t, n) {
        t.setTime(+t + n)
      }), (function (t, n) {
        return n - t
      })));
    xn.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? tn((function (n) {
        n.setTime(Math.floor(n / t) * t)
      }), (function (n, e) {
        n.setTime(+n + e * t)
      }), (function (n, e) {
        return (e - n) / t
      })) : xn : null
    };
    var Tn = xn;
    xn.range;
    
    function Mn(t) {
      return tn((function (n) {
        n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n)
      }), (function (t, n) {
        return (n - t) / 6048e5
      }))
    }
    
    var kn = Mn(0), Cn = Mn(1), Sn = Mn(2), En = Mn(3), An = Mn(4), On = Mn(5), Nn = Mn(6),
      In = (kn.range, Cn.range, Sn.range, En.range, An.range, On.range, Nn.range, tn((function (t) {
        t.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCDate(t.getUTCDate() + n)
      }), (function (t, n) {
        return (n - t) / 864e5
      }), (function (t) {
        return t.getUTCDate() - 1
      }))), Ln = In, Rn = (In.range, tn((function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
      }), (function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
      }), (function (t) {
        return t.getUTCFullYear()
      })));
    Rn.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? tn((function (n) {
        n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
      }), (function (n, e) {
        n.setUTCFullYear(n.getUTCFullYear() + e * t)
      })) : null
    };
    var Pn = Rn;
    Rn.range;
    
    function Dn(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    
    function Hn(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    
    function jn(t, n, e) {
      return {y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0}
    }
    
    var Vn, Un, Wn, Fn = {"-": "", _: " ", 0: "0"}, Bn = /^\s*\d+/, $n = /^%/, qn = /[\\^$*+?|[\]().{}]/g;
    
    function zn(t, n, e) {
      var i = t < 0 ? "-" : "", r = (i ? -t : t) + "", o = r.length;
      return i + (o < e ? new Array(e - o + 1).join(n) + r : r)
    }
    
    function Gn(t) {
      return t.replace(qn, "\\$&")
    }
    
    function Yn(t) {
      return new RegExp("^(?:" + t.map(Gn).join("|") + ")", "i")
    }
    
    function Jn(t) {
      for (var n = {}, e = -1, i = t.length; ++e < i;) n[t[e].toLowerCase()] = e;
      return n
    }
    
    function Xn(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 1));
      return i ? (t.w = +i[0], e + i[0].length) : -1
    }
    
    function Qn(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 1));
      return i ? (t.u = +i[0], e + i[0].length) : -1
    }
    
    function Zn(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.U = +i[0], e + i[0].length) : -1
    }
    
    function Kn(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.V = +i[0], e + i[0].length) : -1
    }
    
    function te(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.W = +i[0], e + i[0].length) : -1
    }
    
    function ne(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 4));
      return i ? (t.y = +i[0], e + i[0].length) : -1
    }
    
    function ee(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1
    }
    
    function ie(t, n, e) {
      var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1
    }
    
    function re(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 1));
      return i ? (t.q = 3 * i[0] - 3, e + i[0].length) : -1
    }
    
    function oe(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.m = i[0] - 1, e + i[0].length) : -1
    }
    
    function ae(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.d = +i[0], e + i[0].length) : -1
    }
    
    function se(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 3));
      return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1
    }
    
    function ue(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.H = +i[0], e + i[0].length) : -1
    }
    
    function ce(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.M = +i[0], e + i[0].length) : -1
    }
    
    function le(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 2));
      return i ? (t.S = +i[0], e + i[0].length) : -1
    }
    
    function he(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 3));
      return i ? (t.L = +i[0], e + i[0].length) : -1
    }
    
    function fe(t, n, e) {
      var i = Bn.exec(n.slice(e, e + 6));
      return i ? (t.L = Math.floor(i[0] / 1e3), e + i[0].length) : -1
    }
    
    function de(t, n, e) {
      var i = $n.exec(n.slice(e, e + 1));
      return i ? e + i[0].length : -1
    }
    
    function pe(t, n, e) {
      var i = Bn.exec(n.slice(e));
      return i ? (t.Q = +i[0], e + i[0].length) : -1
    }
    
    function ge(t, n, e) {
      var i = Bn.exec(n.slice(e));
      return i ? (t.s = +i[0], e + i[0].length) : -1
    }
    
    function me(t, n) {
      return zn(t.getDate(), n, 2)
    }
    
    function ve(t, n) {
      return zn(t.getHours(), n, 2)
    }
    
    function ye(t, n) {
      return zn(t.getHours() % 12 || 12, n, 2)
    }
    
    function _e(t, n) {
      return zn(1 + gn.count(en(t), t), n, 3)
    }
    
    function we(t, n) {
      return zn(t.getMilliseconds(), n, 3)
    }
    
    function be(t, n) {
      return we(t, n) + "000"
    }
    
    function xe(t, n) {
      return zn(t.getMonth() + 1, n, 2)
    }
    
    function Te(t, n) {
      return zn(t.getMinutes(), n, 2)
    }
    
    function Me(t, n) {
      return zn(t.getSeconds(), n, 2)
    }
    
    function ke(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n
    }
    
    function Ce(t, n) {
      return zn(sn.count(en(t) - 1, t), n, 2)
    }
    
    function Se(t, n) {
      var e = t.getDay();
      return t = e >= 4 || 0 === e ? hn(t) : hn.ceil(t), zn(hn.count(en(t), t) + (4 === en(t).getDay()), n, 2)
    }
    
    function Ee(t) {
      return t.getDay()
    }
    
    function Ae(t, n) {
      return zn(un.count(en(t) - 1, t), n, 2)
    }
    
    function Oe(t, n) {
      return zn(t.getFullYear() % 100, n, 2)
    }
    
    function Ne(t, n) {
      return zn(t.getFullYear() % 1e4, n, 4)
    }
    
    function Ie(t) {
      var n = t.getTimezoneOffset();
      return (n > 0 ? "-" : (n *= -1, "+")) + zn(n / 60 | 0, "0", 2) + zn(n % 60, "0", 2)
    }
    
    function Le(t, n) {
      return zn(t.getUTCDate(), n, 2)
    }
    
    function Re(t, n) {
      return zn(t.getUTCHours(), n, 2)
    }
    
    function Pe(t, n) {
      return zn(t.getUTCHours() % 12 || 12, n, 2)
    }
    
    function De(t, n) {
      return zn(1 + Ln.count(Pn(t), t), n, 3)
    }
    
    function He(t, n) {
      return zn(t.getUTCMilliseconds(), n, 3)
    }
    
    function je(t, n) {
      return He(t, n) + "000"
    }
    
    function Ve(t, n) {
      return zn(t.getUTCMonth() + 1, n, 2)
    }
    
    function Ue(t, n) {
      return zn(t.getUTCMinutes(), n, 2)
    }
    
    function We(t, n) {
      return zn(t.getUTCSeconds(), n, 2)
    }
    
    function Fe(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n
    }
    
    function Be(t, n) {
      return zn(kn.count(Pn(t) - 1, t), n, 2)
    }
    
    function $e(t, n) {
      var e = t.getUTCDay();
      return t = e >= 4 || 0 === e ? An(t) : An.ceil(t), zn(An.count(Pn(t), t) + (4 === Pn(t).getUTCDay()), n, 2)
    }
    
    function qe(t) {
      return t.getUTCDay()
    }
    
    function ze(t, n) {
      return zn(Cn.count(Pn(t) - 1, t), n, 2)
    }
    
    function Ge(t, n) {
      return zn(t.getUTCFullYear() % 100, n, 2)
    }
    
    function Ye(t, n) {
      return zn(t.getUTCFullYear() % 1e4, n, 4)
    }
    
    function Je() {
      return "+0000"
    }
    
    function Xe() {
      return "%"
    }
    
    function Qe(t) {
      return +t
    }
    
    function Ze(t) {
      return Math.floor(+t / 1e3)
    }
    
    Vn = function (t) {
      var n = t.dateTime, e = t.date, i = t.time, r = t.periods, o = t.days, a = t.shortDays, s = t.months,
        u = t.shortMonths, c = Yn(r), l = Jn(r), h = Yn(o), f = Jn(o), d = Yn(a), p = Jn(a), g = Yn(s), m = Jn(s),
        v = Yn(u), y = Jn(u), _ = {
          a: function (t) {
            return a[t.getDay()]
          }, A: function (t) {
            return o[t.getDay()]
          }, b: function (t) {
            return u[t.getMonth()]
          }, B: function (t) {
            return s[t.getMonth()]
          }, c: null, d: me, e: me, f: be, H: ve, I: ye, j: _e, L: we, m: xe, M: Te, p: function (t) {
            return r[+(t.getHours() >= 12)]
          }, q: function (t) {
            return 1 + ~~(t.getMonth() / 3)
          }, Q: Qe, s: Ze, S: Me, u: ke, U: Ce, V: Se, w: Ee, W: Ae, x: null, X: null, y: Oe, Y: Ne, Z: Ie, "%": Xe
        }, w = {
          a: function (t) {
            return a[t.getUTCDay()]
          }, A: function (t) {
            return o[t.getUTCDay()]
          }, b: function (t) {
            return u[t.getUTCMonth()]
          }, B: function (t) {
            return s[t.getUTCMonth()]
          }, c: null, d: Le, e: Le, f: je, H: Re, I: Pe, j: De, L: He, m: Ve, M: Ue, p: function (t) {
            return r[+(t.getUTCHours() >= 12)]
          }, q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3)
          }, Q: Qe, s: Ze, S: We, u: Fe, U: Be, V: $e, w: qe, W: ze, x: null, X: null, y: Ge, Y: Ye, Z: Je, "%": Xe
        }, b = {
          a: function (t, n, e) {
            var i = d.exec(n.slice(e));
            return i ? (t.w = p[i[0].toLowerCase()], e + i[0].length) : -1
          }, A: function (t, n, e) {
            var i = h.exec(n.slice(e));
            return i ? (t.w = f[i[0].toLowerCase()], e + i[0].length) : -1
          }, b: function (t, n, e) {
            var i = v.exec(n.slice(e));
            return i ? (t.m = y[i[0].toLowerCase()], e + i[0].length) : -1
          }, B: function (t, n, e) {
            var i = g.exec(n.slice(e));
            return i ? (t.m = m[i[0].toLowerCase()], e + i[0].length) : -1
          }, c: function (t, e, i) {
            return M(t, n, e, i)
          }, d: ae, e: ae, f: fe, H: ue, I: ue, j: se, L: he, m: oe, M: ce, p: function (t, n, e) {
            var i = c.exec(n.slice(e));
            return i ? (t.p = l[i[0].toLowerCase()], e + i[0].length) : -1
          }, q: re, Q: pe, s: ge, S: le, u: Qn, U: Zn, V: Kn, w: Xn, W: te, x: function (t, n, i) {
            return M(t, e, n, i)
          }, X: function (t, n, e) {
            return M(t, i, n, e)
          }, y: ee, Y: ne, Z: ie, "%": de
        };
      
      function x(t, n) {
        return function (e) {
          var i, r, o, a = [], s = -1, u = 0, c = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++s < c;) 37 === t.charCodeAt(s) && (a.push(t.slice(u, s)), null != (r = Fn[i = t.charAt(++s)]) ? i = t.charAt(++s) : r = "e" === i ? " " : "0", (o = n[i]) && (i = o(e, r)), a.push(i), u = s + 1);
          return a.push(t.slice(u, s)), a.join("")
        }
      }
      
      function T(t, n) {
        return function (e) {
          var i, r, o = jn(1900, void 0, 1);
          if (M(o, t, e += "", 0) != e.length) return null;
          if ("Q" in o) return new Date(o.Q);
          if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
          if (!n || "Z" in o || (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) {
            if (o.V < 1 || o.V > 53) return null;
            "w" in o || (o.w = 1), "Z" in o ? (r = (i = Hn(jn(o.y, 0, 1))).getUTCDay(), i = r > 4 || 0 === r ? Cn.ceil(i) : Cn(i), i = Ln.offset(i, 7 * (o.V - 1)), o.y = i.getUTCFullYear(), o.m = i.getUTCMonth(), o.d = i.getUTCDate() + (o.w + 6) % 7) : (r = (i = Dn(jn(o.y, 0, 1))).getDay(), i = r > 4 || 0 === r ? un.ceil(i) : un(i), i = gn.offset(i, 7 * (o.V - 1)), o.y = i.getFullYear(), o.m = i.getMonth(), o.d = i.getDate() + (o.w + 6) % 7)
          } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), r = "Z" in o ? Hn(jn(o.y, 0, 1)).getUTCDay() : Dn(jn(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (r + 5) % 7 : o.w + 7 * o.U - (r + 6) % 7);
          return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Hn(o)) : Dn(o)
        }
      }
      
      function M(t, n, e, i) {
        for (var r, o, a = 0, s = n.length, u = e.length; a < s;) {
          if (i >= u) return -1;
          if (37 === (r = n.charCodeAt(a++))) {
            if (r = n.charAt(a++), !(o = b[r in Fn ? n.charAt(a++) : r]) || (i = o(t, e, i)) < 0) return -1
          } else if (r != e.charCodeAt(i++)) return -1
        }
        return i
      }
      
      return (_.x = x(e, _), _.X = x(i, _), _.c = x(n, _), w.x = x(e, w), w.X = x(i, w), w.c = x(n, w), {
        format: function (t) {
          var n = x(t += "", _);
          return n.toString = function () {
            return t
          }, n
        }, parse: function (t) {
          var n = T(t += "", !1);
          return n.toString = function () {
            return t
          }, n
        }, utcFormat: function (t) {
          var n = x(t += "", w);
          return n.toString = function () {
            return t
          }, n
        }, utcParse: function (t) {
          var n = T(t += "", !0);
          return n.toString = function () {
            return t
          }, n
        }
      })
    }({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }), Un = Vn.format, Vn.parse, Wn = Vn.utcFormat, Vn.utcParse;
    
    function Ke(t) {
      return new Date(t)
    }
    
    function ti(t) {
      return t instanceof Date ? +t : +new Date(+t)
    }
    
    function ni(t, n, e, i, r, o, a, s, u) {
      var c = pt(), l = c.invert, f = c.domain, d = u(".%L"), p = u(":%S"), g = u("%I:%M"), m = u("%I %p"),
        v = u("%a %d"), y = u("%b %d"), _ = u("%B"), w = u("%Y"),
        b = [[a, 1, 1e3], [a, 5, 5e3], [a, 15, 15e3], [a, 30, 3e4], [o, 1, 6e4], [o, 5, 3e5], [o, 15, 9e5], [o, 30, 18e5], [r, 1, 36e5], [r, 3, 108e5], [r, 6, 216e5], [r, 12, 432e5], [i, 1, 864e5], [i, 2, 1728e5], [e, 1, 6048e5], [n, 1, 2592e6], [n, 3, 7776e6], [t, 1, 31536e6]];
      
      function x(s) {
        return (a(s) < s ? d : o(s) < s ? p : r(s) < s ? g : i(s) < s ? m : n(s) < s ? e(s) < s ? v : y : t(s) < s ? _ : w)(s)
      }
      
      function T(n, e, i) {
        if (null == n && (n = 10), "number" == typeof n) {
          var r, o = Math.abs(i - e) / n, a = Object(Qt.a)((function (t) {
            return t[2]
          })).right(b, o);
          return a === b.length ? (r = Object(h.c)(e / 31536e6, i / 31536e6, n), n = t) : a ? (r = (a = b[o / b[a - 1][2] < b[a][2] / o ? a - 1 : a])[1], n = a[0]) : (r = Math.max(Object(h.c)(e, i, n), 1), n = s), n.every(r)
        }
        return n
      }
      
      return c.invert = function (t) {
        return new Date(l(t))
      }, c.domain = function (t) {
        return arguments.length ? f(Array.from(t, ti)) : f().map(Ke)
      }, c.ticks = function (t) {
        var n, e = f(), i = e[0], r = e[e.length - 1], o = r < i;
        return o && (n = i, i = r, r = n), n = (n = T(t, i, r)) ? n.range(i, r + 1) : [], o ? n.reverse() : n
      }, c.tickFormat = function (t, n) {
        return null == n ? x : u(n)
      }, c.nice = function (t) {
        var n = f();
        return (t = T(t, n[0], n[n.length - 1])) ? f(Mt(n, t)) : c
      }, c.copy = function () {
        return ft(c, ni(t, n, e, i, r, o, a, s, u))
      }, c
    }
    
    var ei = function () {
      return r.apply(ni(en, on, sn, gn, vn, _n, bn, Tn, Un).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }, ii = tn((function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
    }), (function (t, n) {
      t.setUTCMonth(t.getUTCMonth() + n)
    }), (function (t, n) {
      return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    }), (function (t) {
      return t.getUTCMonth()
    })), ri = ii, oi = (ii.range, tn((function (t) {
      t.setUTCMinutes(0, 0, 0)
    }), (function (t, n) {
      t.setTime(+t + 36e5 * n)
    }), (function (t, n) {
      return (n - t) / 36e5
    }), (function (t) {
      return t.getUTCHours()
    }))), ai = oi, si = (oi.range, tn((function (t) {
      t.setUTCSeconds(0, 0)
    }), (function (t, n) {
      t.setTime(+t + 6e4 * n)
    }), (function (t, n) {
      return (n - t) / 6e4
    }), (function (t) {
      return t.getUTCMinutes()
    }))), ui = si, ci = (si.range, function () {
      return r.apply(ni(Pn, ri, kn, Ln, ai, ui, bn, Tn, Wn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    });
    
    function li() {
      var t, n, e, i, r, o = 0, a = 1, s = ut, u = !1;
      
      function c(n) {
        return isNaN(n = +n) ? r : s(0 === e ? .5 : (n = (i(n) - t) * e, u ? Math.max(0, Math.min(1, n)) : n))
      }
      
      function l(t) {
        return function (n) {
          var e, i;
          return arguments.length ? ([e, i] = n, s = t(e, i), c) : [s(0), s(1)]
        }
      }
      
      return c.domain = function (r) {
        return arguments.length ? ([o, a] = r, t = i(o = +o), n = i(a = +a), e = t === n ? 0 : 1 / (n - t), c) : [o, a]
      }, c.clamp = function (t) {
        return arguments.length ? (u = !!t, c) : u
      }, c.interpolator = function (t) {
        return arguments.length ? (s = t, c) : s
      }, c.range = l(rt), c.rangeRound = l(ot), c.unknown = function (t) {
        return arguments.length ? (r = t, c) : r
      }, function (r) {
        return i = r, t = r(o), n = r(a), e = t === n ? 0 : 1 / (n - t), c
      }
    }
    
    function hi(t, n) {
      return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
    }
    
    function fi() {
      var t = bt(li()(ut));
      return t.copy = function () {
        return hi(t, fi())
      }, o.apply(t, arguments)
    }
    
    function di() {
      var t = Nt(li()).domain([1, 10]);
      return t.copy = function () {
        return hi(t, di()).base(t.base())
      }, o.apply(t, arguments)
    }
    
    function pi() {
      var t = Pt(li());
      return t.copy = function () {
        return hi(t, pi()).constant(t.constant())
      }, o.apply(t, arguments)
    }
    
    function gi() {
      var t = Ut(li());
      return t.copy = function () {
        return hi(t, gi()).exponent(t.exponent())
      }, o.apply(t, arguments)
    }
    
    function mi() {
      return gi.apply(null, arguments).exponent(.5)
    }
    
    function vi() {
      var t = [], n = ut;
      
      function e(e) {
        if (!isNaN(e = +e)) return n((Object(f.c)(t, e, 1) - 1) / (t.length - 1))
      }
      
      return e.domain = function (n) {
        if (!arguments.length) return t.slice();
        t = [];
        for (let e of n) null == e || isNaN(e = +e) || t.push(e);
        return t.sort(Gt.a), e
      }, e.interpolator = function (t) {
        return arguments.length ? (n = t, e) : n
      }, e.range = function () {
        return t.map((e, i) => n(i / (t.length - 1)))
      }, e.quantiles = function (n) {
        return Array.from({length: n + 1}, (e, i) => Object(zt.a)(t, i / n))
      }, e.copy = function () {
        return vi(n).domain(t)
      }, o.apply(e, arguments)
    }
    
    function yi(t, n) {
      for (var e = 0, i = n.length - 1, r = n[0], o = new Array(i < 0 ? 0 : i); e < i;) o[e] = t(r, r = n[++e]);
      return function (t) {
        var n = Math.max(0, Math.min(i - 1, Math.floor(t *= i)));
        return o[n](t - n)
      }
    }
    
    function _i() {
      var t, n, e, i, r, o, a, s = 0, u = .5, c = 1, l = 1, h = ut, f = !1;
      
      function d(t) {
        return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (l * t < l * n ? i : r), h(f ? Math.max(0, Math.min(1, t)) : t))
      }
      
      function p(t) {
        return function (n) {
          var e, i, r;
          return arguments.length ? ([e, i, r] = n, h = yi(t, [e, i, r]), d) : [h(0), h(.5), h(1)]
        }
      }
      
      return d.domain = function (a) {
        return arguments.length ? ([s, u, c] = a, t = o(s = +s), n = o(u = +u), e = o(c = +c), i = t === n ? 0 : .5 / (n - t), r = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, d) : [s, u, c]
      }, d.clamp = function (t) {
        return arguments.length ? (f = !!t, d) : f
      }, d.interpolator = function (t) {
        return arguments.length ? (h = t, d) : h
      }, d.range = p(rt), d.rangeRound = p(ot), d.unknown = function (t) {
        return arguments.length ? (a = t, d) : a
      }, function (a) {
        return o = a, t = a(s), n = a(u), e = a(c), i = t === n ? 0 : .5 / (n - t), r = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, d
      }
    }
    
    function wi() {
      var t = bt(_i()(ut));
      return t.copy = function () {
        return hi(t, wi())
      }, o.apply(t, arguments)
    }
    
    function bi() {
      var t = Nt(_i()).domain([.1, 1, 10]);
      return t.copy = function () {
        return hi(t, bi()).base(t.base())
      }, o.apply(t, arguments)
    }
    
    function xi() {
      var t = Pt(_i());
      return t.copy = function () {
        return hi(t, xi()).constant(t.constant())
      }, o.apply(t, arguments)
    }
    
    function Ti() {
      var t = Ut(_i());
      return t.copy = function () {
        return hi(t, Ti()).exponent(t.exponent())
      }, o.apply(t, arguments)
    }
    
    function Mi() {
      return Ti.apply(null, arguments).exponent(.5)
    }
  },//14
  function (t, n, e) {
    "use strict";
    
    function i(t, n) {
      let e;
      if (void 0 === n) for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n); else {
        let i = -1;
        for (let r of t) null != (r = n(r, ++i, t)) && (e < r || void 0 === e && r >= r) && (e = r)
      }
      return e
    }
    
    e.d(n, "a", (function () {
      return i
    }))
  },//15
  ,//16
  function (t, n, e) {
    "use strict";
    e.d(n, "b", (function () {
      return r
    })), e.d(n, "c", (function () {
      return o
    })), e.d(n, "a", (function () {
      return s
    }));
    var i, r, o, a = e(22);
    
    function s(t) {
      return i = Object(a.a)(t), r = i.format, o = i.formatPrefix, i
    }
    
    s({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], minus: "-"})
  },//17
  function (t, n, e) {
    var i = Object.assign({}, e(1), e(13), e(8), e(18)), r = function (t) {
      switch (t) {
        case 'recovered':
          return 'Вилікувалось';
        case 'healthy':
          return 'Здорові';
        case 'sick':
          return 'Хворі';
        default: return t[0].toUpperCase() + t.slice(t.length - (t.length - 1))
      }
    }, o = e(4).TOTAL_TICKS;
    
    function a() {
      var t = this;
      this.options && !this.options.gifMode && this.summaryNumber.text((function (n) {
        return t.simulation.storage[t.simulation.storage.length - 1]["healthy" === n ? "well" : n]
      })), this.options && this.options.chart && (this.width = this.chartItem.node().offsetWidth, this.height = this.options && this.options.gifMode ? 9 * this.width / 16 : 56, this.svg.attr("width", this.width).attr("height", this.height), this.bg.attr("width", this.width).attr("height", this.height), this.x.range([0, this.width]), this.y.domain([0, this.simulation.data.length]).range([this.height, 0]), this.areas = this.g.selectAll(".area").data(this.stackGenerator(this.simulation.storage), (function (t) {
        return t.key
      })), this.areas.exit().remove(), this.areas.enter().append("path").attr("class", (function (t) {
        return "area " + t.key
      })).merge(this.areas).attr("d", this.areaGenerator))
    }
    
    t.exports = {
      init: function (t, n, e) {
        var s = this;
        this.simulation = n, this.wrapper = i.select(t), this.options = e, this.tick = a, this.options && !this.options.gifMode && (this.summaryItems = this.wrapper.append("div").attr("class", "number-items"), this.summaryItems.append("div").attr("class", "title").text("Підрахунок:"), this.summaryItem = this.summaryItems.selectAll(".item").data(["recovered", "healthy", "sick"]).enter().append("div").attr("class", (function (t) {
          return "item " + ("healthy" === t ? "well" : t)
        })), this.summaryItem.append("div").attr("class", "sub-title").text(r), this.summaryNumber = this.summaryItem.append("div").attr("class", "number")), this.options && this.options.chart && (this.chartItem = this.wrapper.append("div").attr("class", "item chart"), this.options.gifMode || this.chartItem.append("div").attr("class", "title").text("Зміна в часі"), this.svg = this.chartItem.append("svg"), this.g = this.svg.append("g"), this.bg = this.g.append("rect").attr("class", "bg"), this.x = i.scaleLinear().domain([0, o]), this.y = i.scaleLinear(), this.stackGenerator = i.stack().keys(["sick", "well", "recovered"]), this.areaGenerator = i.area().x((function (t) {
          return s.x(t.data.tick)
        })).y0((function (t) {
          return s.y(t[0])
        })).y1((function (t) {
          return s.y(t[1])
        })))
      }
    }
  },//18
  function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "arc", (function () {
      return A
    })), e.d(n, "area", (function () {
      return P
    })), e.d(n, "line", (function () {
      return R
    })), e.d(n, "pie", (function () {
      return j
    })), e.d(n, "areaRadial", (function () {
      return $
    })), e.d(n, "radialArea", (function () {
      return $
    })), e.d(n, "lineRadial", (function () {
      return B
    })), e.d(n, "radialLine", (function () {
      return B
    })), e.d(n, "pointRadial", (function () {
      return q
    })), e.d(n, "linkHorizontal", (function () {
      return K
    })), e.d(n, "linkVertical", (function () {
      return tt
    })), e.d(n, "linkRadial", (function () {
      return nt
    })), e.d(n, "symbol", (function () {
      return _t
    })), e.d(n, "symbols", (function () {
      return yt
    })), e.d(n, "symbolCircle", (function () {
      return et
    })), e.d(n, "symbolCross", (function () {
      return it
    })), e.d(n, "symbolDiamond", (function () {
      return at
    })), e.d(n, "symbolSquare", (function () {
      return ht
    })), e.d(n, "symbolStar", (function () {
      return lt
    })), e.d(n, "symbolTriangle", (function () {
      return dt
    })), e.d(n, "symbolWye", (function () {
      return vt
    })), e.d(n, "curveBasisClosed", (function () {
      return kt
    })), e.d(n, "curveBasisOpen", (function () {
      return St
    })), e.d(n, "curveBasis", (function () {
      return Tt
    })), e.d(n, "curveBundle", (function () {
      return At
    })), e.d(n, "curveCardinalClosed", (function () {
      return Rt
    })), e.d(n, "curveCardinalOpen", (function () {
      return Dt
    })), e.d(n, "curveCardinal", (function () {
      return It
    })), e.d(n, "curveCatmullRomClosed", (function () {
      return Wt
    })), e.d(n, "curveCatmullRomOpen", (function () {
      return Bt
    })), e.d(n, "curveCatmullRom", (function () {
      return Vt
    })), e.d(n, "curveLinearClosed", (function () {
      return qt
    })), e.d(n, "curveLinear", (function () {
      return N
    })), e.d(n, "curveMonotoneX", (function () {
      return Kt
    })), e.d(n, "curveMonotoneY", (function () {
      return tn
    })), e.d(n, "curveNatural", (function () {
      return rn
    })), e.d(n, "curveStep", (function () {
      return an
    })), e.d(n, "curveStepAfter", (function () {
      return un
    })), e.d(n, "curveStepBefore", (function () {
      return sn
    })), e.d(n, "stack", (function () {
      return fn
    })), e.d(n, "stackOffsetExpand", (function () {
      return dn
    })), e.d(n, "stackOffsetDiverging", (function () {
      return pn
    })), e.d(n, "stackOffsetNone", (function () {
      return cn
    })), e.d(n, "stackOffsetSilhouette", (function () {
      return gn
    })), e.d(n, "stackOffsetWiggle", (function () {
      return mn
    })), e.d(n, "stackOrderAppearance", (function () {
      return vn
    })), e.d(n, "stackOrderAscending", (function () {
      return _n
    })), e.d(n, "stackOrderDescending", (function () {
      return bn
    })), e.d(n, "stackOrderInsideOut", (function () {
      return xn
    })), e.d(n, "stackOrderNone", (function () {
      return ln
    })), e.d(n, "stackOrderReverse", (function () {
      return Tn
    }));
    var i = Math.PI, r = 2 * i, o = r - 1e-6;
    
    function a() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }
    
    function s() {
      return new a
    }
    
    a.prototype = s.prototype = {
      constructor: a, moveTo: function (t, n) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
      }, closePath: function () {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
      }, lineTo: function (t, n) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
      }, quadraticCurveTo: function (t, n, e, i) {
        this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +i)
      }, bezierCurveTo: function (t, n, e, i, r, o) {
        this._ += "C" + +t + "," + +n + "," + +e + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +o)
      }, arcTo: function (t, n, e, r, o) {
        t = +t, n = +n, e = +e, r = +r, o = +o;
        var a = this._x1, s = this._y1, u = e - t, c = r - n, l = a - t, h = s - n, f = l * l + h * h;
        if (o < 0) throw new Error("negative radius: " + o);
        if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (f > 1e-6) if (Math.abs(h * u - c * l) > 1e-6 && o) {
          var d = e - a, p = r - s, g = u * u + c * c, m = d * d + p * p, v = Math.sqrt(g), y = Math.sqrt(f),
            _ = o * Math.tan((i - Math.acos((g + f - m) / (2 * v * y))) / 2), w = _ / y, b = _ / v;
          Math.abs(w - 1) > 1e-6 && (this._ += "L" + (t + w * l) + "," + (n + w * h)), this._ += "A" + o + "," + o + ",0,0," + +(h * d > l * p) + "," + (this._x1 = t + b * u) + "," + (this._y1 = n + b * c)
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else ;
      }, arc: function (t, n, e, a, s, u) {
        t = +t, n = +n, u = !!u;
        var c = (e = +e) * Math.cos(a), l = e * Math.sin(a), h = t + c, f = n + l, d = 1 ^ u, p = u ? a - s : s - a;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1 ? this._ += "M" + h + "," + f : (Math.abs(this._x1 - h) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + h + "," + f), e && (p < 0 && (p = p % r + r), p > o ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - c) + "," + (n - l) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = h) + "," + (this._y1 = f) : p > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(p >= i) + "," + d + "," + (this._x1 = t + e * Math.cos(s)) + "," + (this._y1 = n + e * Math.sin(s))))
      }, rect: function (t, n, e, i) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z"
      }, toString: function () {
        return this._
      }
    };
    var u = s, c = function (t) {
        return function () {
          return t
        }
      }, l = Math.abs, h = Math.atan2, f = Math.cos, d = Math.max, p = Math.min, g = Math.sin, m = Math.sqrt, v = Math.PI,
      y = v / 2, _ = 2 * v;
    
    function w(t) {
      return t > 1 ? 0 : t < -1 ? v : Math.acos(t)
    }
    
    function b(t) {
      return t >= 1 ? y : t <= -1 ? -y : Math.asin(t)
    }
    
    function x(t) {
      return t.innerRadius
    }
    
    function T(t) {
      return t.outerRadius
    }
    
    function M(t) {
      return t.startAngle
    }
    
    function k(t) {
      return t.endAngle
    }
    
    function C(t) {
      return t && t.padAngle
    }
    
    function S(t, n, e, i, r, o, a, s) {
      var u = e - t, c = i - n, l = a - r, h = s - o, f = h * u - l * c;
      if (!(f * f < 1e-12)) return [t + (f = (l * (n - o) - h * (t - r)) / f) * u, n + f * c]
    }
    
    function E(t, n, e, i, r, o, a) {
      var s = t - e, u = n - i, c = (a ? o : -o) / m(s * s + u * u), l = c * u, h = -c * s, f = t + l, p = n + h,
        g = e + l, v = i + h, y = (f + g) / 2, _ = (p + v) / 2, w = g - f, b = v - p, x = w * w + b * b, T = r - o,
        M = f * v - g * p, k = (b < 0 ? -1 : 1) * m(d(0, T * T * x - M * M)), C = (M * b - w * k) / x,
        S = (-M * w - b * k) / x, E = (M * b + w * k) / x, A = (-M * w + b * k) / x, O = C - y, N = S - _, I = E - y,
        L = A - _;
      return O * O + N * N > I * I + L * L && (C = E, S = A), {
        cx: C,
        cy: S,
        x01: -l,
        y01: -h,
        x11: C * (r / T - 1),
        y11: S * (r / T - 1)
      }
    }
    
    var A = function () {
      var t = x, n = T, e = c(0), i = null, r = M, o = k, a = C, s = null;
      
      function d() {
        var c, d, x = +t.apply(this, arguments), T = +n.apply(this, arguments), M = r.apply(this, arguments) - y,
          k = o.apply(this, arguments) - y, C = l(k - M), A = k > M;
        if (s || (s = c = u()), T < x && (d = T, T = x, x = d), T > 1e-12) if (C > _ - 1e-12) s.moveTo(T * f(M), T * g(M)), s.arc(0, 0, T, M, k, !A), x > 1e-12 && (s.moveTo(x * f(k), x * g(k)), s.arc(0, 0, x, k, M, A)); else {
          var O, N, I = M, L = k, R = M, P = k, D = C, H = C, j = a.apply(this, arguments) / 2,
            V = j > 1e-12 && (i ? +i.apply(this, arguments) : m(x * x + T * T)),
            U = p(l(T - x) / 2, +e.apply(this, arguments)), W = U, F = U;
          if (V > 1e-12) {
            var B = b(V / x * g(j)), $ = b(V / T * g(j));
            (D -= 2 * B) > 1e-12 ? (R += B *= A ? 1 : -1, P -= B) : (D = 0, R = P = (M + k) / 2), (H -= 2 * $) > 1e-12 ? (I += $ *= A ? 1 : -1, L -= $) : (H = 0, I = L = (M + k) / 2)
          }
          var q = T * f(I), z = T * g(I), G = x * f(P), Y = x * g(P);
          if (U > 1e-12) {
            var J, X = T * f(L), Q = T * g(L), Z = x * f(R), K = x * g(R);
            if (C < v && (J = S(q, z, Z, K, X, Q, G, Y))) {
              var tt = q - J[0], nt = z - J[1], et = X - J[0], it = Q - J[1],
                rt = 1 / g(w((tt * et + nt * it) / (m(tt * tt + nt * nt) * m(et * et + it * it))) / 2),
                ot = m(J[0] * J[0] + J[1] * J[1]);
              W = p(U, (x - ot) / (rt - 1)), F = p(U, (T - ot) / (rt + 1))
            }
          }
          H > 1e-12 ? F > 1e-12 ? (O = E(Z, K, q, z, T, F, A), N = E(X, Q, G, Y, T, F, A), s.moveTo(O.cx + O.x01, O.cy + O.y01), F < U ? s.arc(O.cx, O.cy, F, h(O.y01, O.x01), h(N.y01, N.x01), !A) : (s.arc(O.cx, O.cy, F, h(O.y01, O.x01), h(O.y11, O.x11), !A), s.arc(0, 0, T, h(O.cy + O.y11, O.cx + O.x11), h(N.cy + N.y11, N.cx + N.x11), !A), s.arc(N.cx, N.cy, F, h(N.y11, N.x11), h(N.y01, N.x01), !A))) : (s.moveTo(q, z), s.arc(0, 0, T, I, L, !A)) : s.moveTo(q, z), x > 1e-12 && D > 1e-12 ? W > 1e-12 ? (O = E(G, Y, X, Q, x, -W, A), N = E(q, z, Z, K, x, -W, A), s.lineTo(O.cx + O.x01, O.cy + O.y01), W < U ? s.arc(O.cx, O.cy, W, h(O.y01, O.x01), h(N.y01, N.x01), !A) : (s.arc(O.cx, O.cy, W, h(O.y01, O.x01), h(O.y11, O.x11), !A), s.arc(0, 0, x, h(O.cy + O.y11, O.cx + O.x11), h(N.cy + N.y11, N.cx + N.x11), A), s.arc(N.cx, N.cy, W, h(N.y11, N.x11), h(N.y01, N.x01), !A))) : s.arc(0, 0, x, P, R, A) : s.lineTo(G, Y)
        } else s.moveTo(0, 0);
        if (s.closePath(), c) return s = null, c + "" || null
      }
      
      return d.centroid = function () {
        var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
          i = (+r.apply(this, arguments) + +o.apply(this, arguments)) / 2 - v / 2;
        return [f(i) * e, g(i) * e]
      }, d.innerRadius = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : c(+n), d) : t
      }, d.outerRadius = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : c(+t), d) : n
      }, d.cornerRadius = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : c(+t), d) : e
      }, d.padRadius = function (t) {
        return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : c(+t), d) : i
      }, d.startAngle = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : c(+t), d) : r
      }, d.endAngle = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : c(+t), d) : o
      }, d.padAngle = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : c(+t), d) : a
      }, d.context = function (t) {
        return arguments.length ? (s = null == t ? null : t, d) : s
      }, d
    };
    
    function O(t) {
      this._context = t
    }
    
    O.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._point = 0
      }, lineEnd: function () {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n)
        }
      }
    };
    var N = function (t) {
      return new O(t)
    };
    
    function I(t) {
      return t[0]
    }
    
    function L(t) {
      return t[1]
    }
    
    var R = function () {
      var t = I, n = L, e = c(!0), i = null, r = N, o = null;
      
      function a(a) {
        var s, c, l, h = a.length, f = !1;
        for (null == i && (o = r(l = u())), s = 0; s <= h; ++s) !(s < h && e(c = a[s], s, a)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+t(c, s, a), +n(c, s, a));
        if (l) return o = null, l + "" || null
      }
      
      return a.x = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : c(+n), a) : t
      }, a.y = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : c(+t), a) : n
      }, a.defined = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : c(!!t), a) : e
      }, a.curve = function (t) {
        return arguments.length ? (r = t, null != i && (o = r(i)), a) : r
      }, a.context = function (t) {
        return arguments.length ? (null == t ? i = o = null : o = r(i = t), a) : i
      }, a
    }, P = function () {
      var t = I, n = null, e = c(0), i = L, r = c(!0), o = null, a = N, s = null;
      
      function l(c) {
        var l, h, f, d, p, g = c.length, m = !1, v = new Array(g), y = new Array(g);
        for (null == o && (s = a(p = u())), l = 0; l <= g; ++l) {
          if (!(l < g && r(d = c[l], l, c)) === m) if (m = !m) h = l, s.areaStart(), s.lineStart(); else {
            for (s.lineEnd(), s.lineStart(), f = l - 1; f >= h; --f) s.point(v[f], y[f]);
            s.lineEnd(), s.areaEnd()
          }
          m && (v[l] = +t(d, l, c), y[l] = +e(d, l, c), s.point(n ? +n(d, l, c) : v[l], i ? +i(d, l, c) : y[l]))
        }
        if (p) return s = null, p + "" || null
      }
      
      function h() {
        return R().defined(r).curve(a).context(o)
      }
      
      return l.x = function (e) {
        return arguments.length ? (t = "function" == typeof e ? e : c(+e), n = null, l) : t
      }, l.x0 = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : c(+n), l) : t
      }, l.x1 = function (t) {
        return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : c(+t), l) : n
      }, l.y = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : c(+t), i = null, l) : e
      }, l.y0 = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : c(+t), l) : e
      }, l.y1 = function (t) {
        return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : c(+t), l) : i
      }, l.lineX0 = l.lineY0 = function () {
        return h().x(t).y(e)
      }, l.lineY1 = function () {
        return h().x(t).y(i)
      }, l.lineX1 = function () {
        return h().x(n).y(e)
      }, l.defined = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : c(!!t), l) : r
      }, l.curve = function (t) {
        return arguments.length ? (a = t, null != o && (s = a(o)), l) : a
      }, l.context = function (t) {
        return arguments.length ? (null == t ? o = s = null : s = a(o = t), l) : o
      }, l
    }, D = function (t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }, H = function (t) {
      return t
    }, j = function () {
      var t = H, n = D, e = null, i = c(0), r = c(_), o = c(0);
      
      function a(a) {
        var s, u, c, l, h, f = a.length, d = 0, p = new Array(f), g = new Array(f), m = +i.apply(this, arguments),
          v = Math.min(_, Math.max(-_, r.apply(this, arguments) - m)),
          y = Math.min(Math.abs(v) / f, o.apply(this, arguments)), w = y * (v < 0 ? -1 : 1);
        for (s = 0; s < f; ++s) (h = g[p[s] = s] = +t(a[s], s, a)) > 0 && (d += h);
        for (null != n ? p.sort((function (t, e) {
          return n(g[t], g[e])
        })) : null != e && p.sort((function (t, n) {
          return e(a[t], a[n])
        })), s = 0, c = d ? (v - f * w) / d : 0; s < f; ++s, m = l) u = p[s], l = m + ((h = g[u]) > 0 ? h * c : 0) + w, g[u] = {
          data: a[u],
          index: s,
          value: h,
          startAngle: m,
          endAngle: l,
          padAngle: y
        };
        return g
      }
      
      return a.value = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : c(+n), a) : t
      }, a.sortValues = function (t) {
        return arguments.length ? (n = t, e = null, a) : n
      }, a.sort = function (t) {
        return arguments.length ? (e = t, n = null, a) : e
      }, a.startAngle = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : c(+t), a) : i
      }, a.endAngle = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : c(+t), a) : r
      }, a.padAngle = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : c(+t), a) : o
      }, a
    }, V = W(N);
    
    function U(t) {
      this._curve = t
    }
    
    function W(t) {
      function n(n) {
        return new U(t(n))
      }
      
      return n._curve = t, n
    }
    
    function F(t) {
      var n = t.curve;
      return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
        return arguments.length ? n(W(t)) : n()._curve
      }, t
    }
    
    U.prototype = {
      areaStart: function () {
        this._curve.areaStart()
      }, areaEnd: function () {
        this._curve.areaEnd()
      }, lineStart: function () {
        this._curve.lineStart()
      }, lineEnd: function () {
        this._curve.lineEnd()
      }, point: function (t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t))
      }
    };
    var B = function () {
      return F(R().curve(V))
    }, $ = function () {
      var t = P().curve(V), n = t.curve, e = t.lineX0, i = t.lineX1, r = t.lineY0, o = t.lineY1;
      return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
        return F(e())
      }, delete t.lineX0, t.lineEndAngle = function () {
        return F(i())
      }, delete t.lineX1, t.lineInnerRadius = function () {
        return F(r())
      }, delete t.lineY0, t.lineOuterRadius = function () {
        return F(o())
      }, delete t.lineY1, t.curve = function (t) {
        return arguments.length ? n(W(t)) : n()._curve
      }, t
    }, q = function (t, n) {
      return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
    }, z = Array.prototype.slice;
    
    function G(t) {
      return t.source
    }
    
    function Y(t) {
      return t.target
    }
    
    function J(t) {
      var n = G, e = Y, i = I, r = L, o = null;
      
      function a() {
        var a, s = z.call(arguments), c = n.apply(this, s), l = e.apply(this, s);
        if (o || (o = a = u()), t(o, +i.apply(this, (s[0] = c, s)), +r.apply(this, s), +i.apply(this, (s[0] = l, s)), +r.apply(this, s)), a) return o = null, a + "" || null
      }
      
      return a.source = function (t) {
        return arguments.length ? (n = t, a) : n
      }, a.target = function (t) {
        return arguments.length ? (e = t, a) : e
      }, a.x = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : c(+t), a) : i
      }, a.y = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : c(+t), a) : r
      }, a.context = function (t) {
        return arguments.length ? (o = null == t ? null : t, a) : o
      }, a
    }
    
    function X(t, n, e, i, r) {
      t.moveTo(n, e), t.bezierCurveTo(n = (n + i) / 2, e, n, r, i, r)
    }
    
    function Q(t, n, e, i, r) {
      t.moveTo(n, e), t.bezierCurveTo(n, e = (e + r) / 2, i, e, i, r)
    }
    
    function Z(t, n, e, i, r) {
      var o = q(n, e), a = q(n, e = (e + r) / 2), s = q(i, e), u = q(i, r);
      t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], s[0], s[1], u[0], u[1])
    }
    
    function K() {
      return J(X)
    }
    
    function tt() {
      return J(Q)
    }
    
    function nt() {
      var t = J(Z);
      return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
    }
    
    var et = {
      draw: function (t, n) {
        var e = Math.sqrt(n / v);
        t.moveTo(e, 0), t.arc(0, 0, e, 0, _)
      }
    }, it = {
      draw: function (t, n) {
        var e = Math.sqrt(n / 5) / 2;
        t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
      }
    }, rt = Math.sqrt(1 / 3), ot = 2 * rt, at = {
      draw: function (t, n) {
        var e = Math.sqrt(n / ot), i = e * rt;
        t.moveTo(0, -e), t.lineTo(i, 0), t.lineTo(0, e), t.lineTo(-i, 0), t.closePath()
      }
    }, st = Math.sin(v / 10) / Math.sin(7 * v / 10), ut = Math.sin(_ / 10) * st, ct = -Math.cos(_ / 10) * st, lt = {
      draw: function (t, n) {
        var e = Math.sqrt(.8908130915292852 * n), i = ut * e, r = ct * e;
        t.moveTo(0, -e), t.lineTo(i, r);
        for (var o = 1; o < 5; ++o) {
          var a = _ * o / 5, s = Math.cos(a), u = Math.sin(a);
          t.lineTo(u * e, -s * e), t.lineTo(s * i - u * r, u * i + s * r)
        }
        t.closePath()
      }
    }, ht = {
      draw: function (t, n) {
        var e = Math.sqrt(n), i = -e / 2;
        t.rect(i, i, e, e)
      }
    }, ft = Math.sqrt(3), dt = {
      draw: function (t, n) {
        var e = -Math.sqrt(n / (3 * ft));
        t.moveTo(0, 2 * e), t.lineTo(-ft * e, -e), t.lineTo(ft * e, -e), t.closePath()
      }
    }, pt = Math.sqrt(3) / 2, gt = 1 / Math.sqrt(12), mt = 3 * (gt / 2 + 1), vt = {
      draw: function (t, n) {
        var e = Math.sqrt(n / mt), i = e / 2, r = e * gt, o = i, a = e * gt + e, s = -o, u = a;
        t.moveTo(i, r), t.lineTo(o, a), t.lineTo(s, u), t.lineTo(-.5 * i - pt * r, pt * i + -.5 * r), t.lineTo(-.5 * o - pt * a, pt * o + -.5 * a), t.lineTo(-.5 * s - pt * u, pt * s + -.5 * u), t.lineTo(-.5 * i + pt * r, -.5 * r - pt * i), t.lineTo(-.5 * o + pt * a, -.5 * a - pt * o), t.lineTo(-.5 * s + pt * u, -.5 * u - pt * s), t.closePath()
      }
    }, yt = [et, it, at, ht, lt, dt, vt], _t = function () {
      var t = c(et), n = c(64), e = null;
      
      function i() {
        var i;
        if (e || (e = i = u()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), i) return e = null, i + "" || null
      }
      
      return i.type = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : c(n), i) : t
      }, i.size = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : c(+t), i) : n
      }, i.context = function (t) {
        return arguments.length ? (e = null == t ? null : t, i) : e
      }, i
    }, wt = function () {
    };
    
    function bt(t, n, e) {
      t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }
    
    function xt(t) {
      this._context = t
    }
    
    xt.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 3:
            bt(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            bt(this, t, n)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
      }
    };
    var Tt = function (t) {
      return new xt(t)
    };
    
    function Mt(t) {
      this._context = t
    }
    
    Mt.prototype = {
      areaStart: wt, areaEnd: wt, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
        }
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._x2 = t, this._y2 = n;
            break;
          case 1:
            this._point = 2, this._x3 = t, this._y3 = n;
            break;
          case 2:
            this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
            break;
          default:
            bt(this, t, n)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
      }
    };
    var kt = function (t) {
      return new Mt(t)
    };
    
    function Ct(t) {
      this._context = t
    }
    
    Ct.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      }, lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6, i = (this._y0 + 4 * this._y1 + n) / 6;
            this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
            break;
          case 3:
            this._point = 4;
          default:
            bt(this, t, n)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
      }
    };
    var St = function (t) {
      return new Ct(t)
    };
    
    function Et(t, n) {
      this._basis = new xt(t), this._beta = n
    }
    
    Et.prototype = {
      lineStart: function () {
        this._x = [], this._y = [], this._basis.lineStart()
      }, lineEnd: function () {
        var t = this._x, n = this._y, e = t.length - 1;
        if (e > 0) for (var i, r = t[0], o = n[0], a = t[e] - r, s = n[e] - o, u = -1; ++u <= e;) i = u / e, this._basis.point(this._beta * t[u] + (1 - this._beta) * (r + i * a), this._beta * n[u] + (1 - this._beta) * (o + i * s));
        this._x = this._y = null, this._basis.lineEnd()
      }, point: function (t, n) {
        this._x.push(+t), this._y.push(+n)
      }
    };
    var At = function t(n) {
      function e(t) {
        return 1 === n ? new xt(t) : new Et(t, n)
      }
      
      return e.beta = function (n) {
        return t(+n)
      }, e
    }(.85);
    
    function Ot(t, n, e) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }
    
    function Nt(t, n) {
      this._context = t, this._k = (1 - n) / 6
    }
    
    Nt.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            Ot(this, this._x1, this._y1)
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2, this._x1 = t, this._y1 = n;
            break;
          case 2:
            this._point = 3;
          default:
            Ot(this, t, n)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var It = function t(n) {
      function e(t) {
        return new Nt(t, n)
      }
      
      return e.tension = function (n) {
        return t(+n)
      }, e
    }(0);
    
    function Lt(t, n) {
      this._context = t, this._k = (1 - n) / 6
    }
    
    Lt.prototype = {
      areaStart: wt, areaEnd: wt, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
        }
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = n;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
            break;
          case 2:
            this._point = 3, this._x5 = t, this._y5 = n;
            break;
          default:
            Ot(this, t, n)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var Rt = function t(n) {
      function e(t) {
        return new Lt(t, n)
      }
      
      return e.tension = function (n) {
        return t(+n)
      }, e
    }(0);
    
    function Pt(t, n) {
      this._context = t, this._k = (1 - n) / 6
    }
    
    Pt.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
      }, lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Ot(this, t, n)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var Dt = function t(n) {
      function e(t) {
        return new Pt(t, n)
      }
      
      return e.tension = function (n) {
        return t(+n)
      }, e
    }(0);
    
    function Ht(t, n, e) {
      var i = t._x1, r = t._y1, o = t._x2, a = t._y2;
      if (t._l01_a > 1e-12) {
        var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, u = 3 * t._l01_a * (t._l01_a + t._l12_a);
        i = (i * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u, r = (r * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u
      }
      if (t._l23_a > 1e-12) {
        var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, l = 3 * t._l23_a * (t._l23_a + t._l12_a);
        o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l, a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / l
      }
      t._context.bezierCurveTo(i, r, o, a, t._x2, t._y2)
    }
    
    function jt(t, n) {
      this._context = t, this._alpha = n
    }
    
    jt.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2)
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        if (t = +t, n = +n, this._point) {
          var e = this._x2 - t, i = this._y2 - n;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Ht(this, t, n)
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var Vt = function t(n) {
      function e(t) {
        return n ? new jt(t, n) : new Nt(t, 0)
      }
      
      return e.alpha = function (n) {
        return t(+n)
      }, e
    }(.5);
    
    function Ut(t, n) {
      this._context = t, this._alpha = n
    }
    
    Ut.prototype = {
      areaStart: wt, areaEnd: wt, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
        }
      }, point: function (t, n) {
        if (t = +t, n = +n, this._point) {
          var e = this._x2 - t, i = this._y2 - n;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = n;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
            break;
          case 2:
            this._point = 3, this._x5 = t, this._y5 = n;
            break;
          default:
            Ht(this, t, n)
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var Wt = function t(n) {
      function e(t) {
        return n ? new Ut(t, n) : new Lt(t, 0)
      }
      
      return e.alpha = function (n) {
        return t(+n)
      }, e
    }(.5);
    
    function Ft(t, n) {
      this._context = t, this._alpha = n
    }
    
    Ft.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      }, lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        if (t = +t, n = +n, this._point) {
          var e = this._x2 - t, i = this._y2 - n;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Ht(this, t, n)
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var Bt = function t(n) {
      function e(t) {
        return n ? new Ft(t, n) : new Pt(t, 0)
      }
      
      return e.alpha = function (n) {
        return t(+n)
      }, e
    }(.5);
    
    function $t(t) {
      this._context = t
    }
    
    $t.prototype = {
      areaStart: wt, areaEnd: wt, lineStart: function () {
        this._point = 0
      }, lineEnd: function () {
        this._point && this._context.closePath()
      }, point: function (t, n) {
        t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
      }
    };
    var qt = function (t) {
      return new $t(t)
    };
    
    function zt(t) {
      return t < 0 ? -1 : 1
    }
    
    function Gt(t, n, e) {
      var i = t._x1 - t._x0, r = n - t._x1, o = (t._y1 - t._y0) / (i || r < 0 && -0),
        a = (e - t._y1) / (r || i < 0 && -0), s = (o * r + a * i) / (i + r);
      return (zt(o) + zt(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(s)) || 0
    }
    
    function Yt(t, n) {
      var e = t._x1 - t._x0;
      return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    
    function Jt(t, n, e) {
      var i = t._x0, r = t._y0, o = t._x1, a = t._y1, s = (o - i) / 3;
      t._context.bezierCurveTo(i + s, r + s * n, o - s, a - s * e, o, a)
    }
    
    function Xt(t) {
      this._context = t
    }
    
    function Qt(t) {
      this._context = new Zt(t)
    }
    
    function Zt(t) {
      this._context = t
    }
    
    function Kt(t) {
      return new Xt(t)
    }
    
    function tn(t) {
      return new Qt(t)
    }
    
    function nn(t) {
      this._context = t
    }
    
    function en(t) {
      var n, e, i = t.length - 1, r = new Array(i), o = new Array(i), a = new Array(i);
      for (r[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < i - 1; ++n) r[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
      for (r[i - 1] = 2, o[i - 1] = 7, a[i - 1] = 8 * t[i - 1] + t[i], n = 1; n < i; ++n) e = r[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1];
      for (r[i - 1] = a[i - 1] / o[i - 1], n = i - 2; n >= 0; --n) r[n] = (a[n] - r[n + 1]) / o[n];
      for (o[i - 1] = (t[i] + r[i - 1]) / 2, n = 0; n < i - 1; ++n) o[n] = 2 * t[n + 1] - r[n + 1];
      return [r, o]
    }
    
    Xt.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Jt(this, this._t0, Yt(this, this._t0))
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, n) {
        var e = NaN;
        if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, Jt(this, Yt(this, e = Gt(this, t, n)), e);
              break;
            default:
              Jt(this, this._t0, e = Gt(this, t, n))
          }
          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
        }
      }
    }, (Qt.prototype = Object.create(Xt.prototype)).point = function (t, n) {
      Xt.prototype.point.call(this, n, t)
    }, Zt.prototype = {
      moveTo: function (t, n) {
        this._context.moveTo(n, t)
      }, closePath: function () {
        this._context.closePath()
      }, lineTo: function (t, n) {
        this._context.lineTo(n, t)
      }, bezierCurveTo: function (t, n, e, i, r, o) {
        this._context.bezierCurveTo(n, t, i, e, o, r)
      }
    }, nn.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x = [], this._y = []
      }, lineEnd: function () {
        var t = this._x, n = this._y, e = t.length;
        if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]); else for (var i = en(t), r = en(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(i[0][o], r[0][o], i[1][o], r[1][o], t[a], n[a]);
        (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      }, point: function (t, n) {
        this._x.push(+t), this._y.push(+n)
      }
    };
    var rn = function (t) {
      return new nn(t)
    };
    
    function on(t, n) {
      this._context = t, this._t = n
    }
    
    on.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x = this._y = NaN, this._point = 0
      }, lineEnd: function () {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
      }, point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n)
            }
        }
        this._x = t, this._y = n
      }
    };
    var an = function (t) {
      return new on(t, .5)
    };
    
    function sn(t) {
      return new on(t, 0)
    }
    
    function un(t) {
      return new on(t, 1)
    }
    
    var cn = function (t, n) {
      if ((r = t.length) > 1) for (var e, i, r, o = 1, a = t[n[0]], s = a.length; o < r; ++o) for (i = a, a = t[n[o]], e = 0; e < s; ++e) a[e][1] += a[e][0] = isNaN(i[e][1]) ? i[e][0] : i[e][1]
    }, ln = function (t) {
      for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
      return e
    };
    
    function hn(t, n) {
      return t[n]
    }
    
    var fn = function () {
      var t = c([]), n = ln, e = cn, i = hn;
      
      function r(r) {
        var o, a, s = t.apply(this, arguments), u = r.length, c = s.length, l = new Array(c);
        for (o = 0; o < c; ++o) {
          for (var h, f = s[o], d = l[o] = new Array(u), p = 0; p < u; ++p) d[p] = h = [0, +i(r[p], f, p, r)], h.data = r[p];
          d.key = f
        }
        for (o = 0, a = n(l); o < c; ++o) l[a[o]].index = o;
        return e(l, a), l
      }
      
      return r.keys = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : c(z.call(n)), r) : t
      }, r.value = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : c(+t), r) : i
      }, r.order = function (t) {
        return arguments.length ? (n = null == t ? ln : "function" == typeof t ? t : c(z.call(t)), r) : n
      }, r.offset = function (t) {
        return arguments.length ? (e = null == t ? cn : t, r) : e
      }, r
    }, dn = function (t, n) {
      if ((i = t.length) > 0) {
        for (var e, i, r, o = 0, a = t[0].length; o < a; ++o) {
          for (r = e = 0; e < i; ++e) r += t[e][o][1] || 0;
          if (r) for (e = 0; e < i; ++e) t[e][o][1] /= r
        }
        cn(t, n)
      }
    }, pn = function (t, n) {
      if ((s = t.length) > 0) for (var e, i, r, o, a, s, u = 0, c = t[n[0]].length; u < c; ++u) for (o = a = 0, e = 0; e < s; ++e) (r = (i = t[n[e]][u])[1] - i[0]) > 0 ? (i[0] = o, i[1] = o += r) : r < 0 ? (i[1] = a, i[0] = a += r) : (i[0] = 0, i[1] = r)
    }, gn = function (t, n) {
      if ((e = t.length) > 0) {
        for (var e, i = 0, r = t[n[0]], o = r.length; i < o; ++i) {
          for (var a = 0, s = 0; a < e; ++a) s += t[a][i][1] || 0;
          r[i][1] += r[i][0] = -s / 2
        }
        cn(t, n)
      }
    }, mn = function (t, n) {
      if ((r = t.length) > 0 && (i = (e = t[n[0]]).length) > 0) {
        for (var e, i, r, o = 0, a = 1; a < i; ++a) {
          for (var s = 0, u = 0, c = 0; s < r; ++s) {
            for (var l = t[n[s]], h = l[a][1] || 0, f = (h - (l[a - 1][1] || 0)) / 2, d = 0; d < s; ++d) {
              var p = t[n[d]];
              f += (p[a][1] || 0) - (p[a - 1][1] || 0)
            }
            u += h, c += f * h
          }
          e[a - 1][1] += e[a - 1][0] = o, u && (o -= c / u)
        }
        e[a - 1][1] += e[a - 1][0] = o, cn(t, n)
      }
    }, vn = function (t) {
      var n = t.map(yn);
      return ln(t).sort((function (t, e) {
        return n[t] - n[e]
      }))
    };
    
    function yn(t) {
      for (var n, e = -1, i = 0, r = t.length, o = -1 / 0; ++e < r;) (n = +t[e][1]) > o && (o = n, i = e);
      return i
    }
    
    var _n = function (t) {
      var n = t.map(wn);
      return ln(t).sort((function (t, e) {
        return n[t] - n[e]
      }))
    };
    
    function wn(t) {
      for (var n, e = 0, i = -1, r = t.length; ++i < r;) (n = +t[i][1]) && (e += n);
      return e
    }
    
    var bn = function (t) {
      return _n(t).reverse()
    }, xn = function (t) {
      var n, e, i = t.length, r = t.map(wn), o = vn(t), a = 0, s = 0, u = [], c = [];
      for (n = 0; n < i; ++n) e = o[n], a < s ? (a += r[e], u.push(e)) : (s += r[e], c.push(e));
      return c.reverse().concat(u)
    }, Tn = function (t) {
      return ln(t).reverse()
    }
  },//19
  function (t, n, e) {
    "use strict";
    var i = e(0);
    n.a = function (t) {
      var n;
      return 1 === t.length && (n = t, t = function (t, e) {
        return Object(i.a)(n(t), e)
      }), {
        left: function (n, e, i, r) {
          for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
            var o = i + r >>> 1;
            t(n[o], e) < 0 ? i = o + 1 : r = o
          }
          return i
        }, right: function (n, e, i, r) {
          for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
            var o = i + r >>> 1;
            t(n[o], e) > 0 ? r = o : i = o + 1
          }
          return i
        }
      }
    }
  },//20
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e) {
      t = +t, n = +n, e = (r = arguments.length) < 2 ? (n = t, t = 0, 1) : r < 3 ? 1 : +e;
      for (var i = -1, r = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(r); ++i < r;) o[i] = t + i * e;
      return o
    }
  },//21
  function (t, n, e) {
    "use strict";
    e.d(n, "a", (function () {
      return r
    }));
    var i = e(0);
    
    function r(t, n, e = 0, a = t.length - 1, s = i.a) {
      for (; a > e;) {
        if (a - e > 600) {
          const i = a - e + 1, o = n - e + 1, u = Math.log(i), c = .5 * Math.exp(2 * u / 3),
            l = .5 * Math.sqrt(u * c * (i - c) / i) * (o - i / 2 < 0 ? -1 : 1);
          r(t, n, Math.max(e, Math.floor(n - o * c / i + l)), Math.min(a, Math.floor(n + (i - o) * c / i + l)), s)
        }
        const i = t[n];
        let u = e, c = a;
        for (o(t, e, n), s(t[a], i) > 0 && o(t, e, a); u < c;) {
          for (o(t, u, c), ++u, --c; s(t[u], i) < 0;) ++u;
          for (; s(t[c], i) > 0;) --c
        }
        0 === s(t[e], i) ? o(t, e, c) : (++c, o(t, c, a)), c <= n && (e = c + 1), n <= c && (a = c - 1)
      }
      return t
    }
    
    function o(t, n, e) {
      const i = t[n];
      t[n] = t[e], t[e] = i
    }
  },//22
  function (t, n, e) {
    "use strict";
    var i, r = e(2), o = e(12), a = e(6), s = function (t, n) {
        var e = Object(a.a)(t, n);
        if (!e) return t + "";
        var i = e[0], r = e[1];
        return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
      }, u = {
        "%": function (t, n) {
          return (100 * t).toFixed(n)
        }, b: function (t) {
          return Math.round(t).toString(2)
        }, c: function (t) {
          return t + ""
        }, d: function (t) {
          return Math.round(t).toString(10)
        }, e: function (t, n) {
          return t.toExponential(n)
        }, f: function (t, n) {
          return t.toFixed(n)
        }, g: function (t, n) {
          return t.toPrecision(n)
        }, o: function (t) {
          return Math.round(t).toString(8)
        }, p: function (t, n) {
          return s(100 * t, n)
        }, r: s, s: function (t, n) {
          var e = Object(a.a)(t, n);
          if (!e) return t + "";
          var r = e[0], o = e[1], s = o - (i = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1, u = r.length;
          return s === u ? r : s > u ? r + new Array(s - u + 1).join("0") : s > 0 ? r.slice(0, s) + "." + r.slice(s) : "0." + new Array(1 - s).join("0") + Object(a.a)(t, Math.max(0, n + s - 1))[0]
        }, X: function (t) {
          return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
          return Math.round(t).toString(16)
        }
      }, c = function (t) {
        return t
      }, l = Array.prototype.map,
      h = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    n.a = function (t) {
      var n, e,
        a = void 0 === t.grouping || void 0 === t.thousands ? c : (n = l.call(t.grouping, Number), e = t.thousands + "", function (t, i) {
          for (var r = t.length, o = [], a = 0, s = n[0], u = 0; r > 0 && s > 0 && (u + s + 1 > i && (s = Math.max(1, i - u)), o.push(t.substring(r -= s, r + s)), !((u += s + 1) > i));) s = n[a = (a + 1) % n.length];
          return o.reverse().join(e)
        }), s = void 0 === t.currency ? "" : t.currency[0] + "", f = void 0 === t.currency ? "" : t.currency[1] + "",
        d = void 0 === t.decimal ? "." : t.decimal + "", p = void 0 === t.numerals ? c : function (t) {
          return function (n) {
            return n.replace(/[0-9]/g, (function (n) {
              return t[+n]
            }))
          }
        }(l.call(t.numerals, String)), g = void 0 === t.percent ? "%" : t.percent + "",
        m = void 0 === t.minus ? "-" : t.minus + "", v = void 0 === t.nan ? "NaN" : t.nan + "";
      
      function y(t) {
        var n = (t = Object(o.b)(t)).fill, e = t.align, r = t.sign, c = t.symbol, l = t.zero, y = t.width, _ = t.comma,
          w = t.precision, b = t.trim, x = t.type;
        "n" === x ? (_ = !0, x = "g") : u[x] || (void 0 === w && (w = 12), b = !0, x = "g"), (l || "0" === n && "=" === e) && (l = !0, n = "0", e = "=");
        var T = "$" === c ? s : "#" === c && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "",
          M = "$" === c ? f : /[%p]/.test(x) ? g : "", k = u[x], C = /[defgprs%]/.test(x);
        
        function S(t) {
          var o, s, u, c = T, f = M;
          if ("c" === x) f = k(t) + f, t = ""; else {
            var g = (t = +t) < 0;
            if (t = isNaN(t) ? v : k(Math.abs(t), w), b && (t = function (t) {
              t:for (var n, e = t.length, i = 1, r = -1; i < e; ++i) switch (t[i]) {
                case".":
                  r = n = i;
                  break;
                case"0":
                  0 === r && (r = i), n = i;
                  break;
                default:
                  if (!+t[i]) break t;
                  r > 0 && (r = 0)
              }
              return r > 0 ? t.slice(0, r) + t.slice(n + 1) : t
            }(t)), g && 0 == +t && (g = !1), c = (g ? "(" === r ? r : m : "-" === r || "(" === r ? "" : r) + c, f = ("s" === x ? h[8 + i / 3] : "") + f + (g && "(" === r ? ")" : ""), C) for (o = -1, s = t.length; ++o < s;) if (48 > (u = t.charCodeAt(o)) || u > 57) {
              f = (46 === u ? d + t.slice(o + 1) : t.slice(o)) + f, t = t.slice(0, o);
              break
            }
          }
          _ && !l && (t = a(t, 1 / 0));
          var S = c.length + t.length + f.length, E = S < y ? new Array(y - S + 1).join(n) : "";
          switch (_ && l && (t = a(E + t, E.length ? y - f.length : 1 / 0), E = ""), e) {
            case"<":
              t = c + t + f + E;
              break;
            case"=":
              t = c + E + t + f;
              break;
            case"^":
              t = E.slice(0, S = E.length >> 1) + c + t + f + E.slice(S);
              break;
            default:
              t = E + c + t + f
          }
          return p(t)
        }
        
        return w = void 0 === w ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w)), S.toString = function () {
          return t + ""
        }, S
      }
      
      return {
        format: y, formatPrefix: function (t, n) {
          var e = y(((t = Object(o.b)(t)).type = "f", t)),
            i = 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(n) / 3))), a = Math.pow(10, -i), s = h[8 + i / 3];
          return function (t) {
            return e(a * t) + s
          }
        }
      }
    }
  },//23
  function (t, n, e) {
    "use strict";
    e.r(n);
    var i = e(16);
    e.d(n, "formatDefaultLocale", (function () {
      return i.a
    })), e.d(n, "format", (function () {
      return i.b
    })), e.d(n, "formatPrefix", (function () {
      return i.c
    }));
    var r = e(22);
    e.d(n, "formatLocale", (function () {
      return r.a
    }));
    var o = e(12);
    e.d(n, "formatSpecifier", (function () {
      return o.b
    })), e.d(n, "FormatSpecifier", (function () {
      return o.a
    }));
    var a = e(30);
    e.d(n, "precisionFixed", (function () {
      return a.a
    }));
    var s = e(28);
    e.d(n, "precisionPrefix", (function () {
      return s.a
    }));
    var u = e(29);
    e.d(n, "precisionRound", (function () {
      return u.a
    }))
  },//24
  function (t, n, e) {
    "use strict";
    
    function i(t) {
      return 180 * t / Math.PI
    }
    
    function r(t) {
      return i(Math.atan2(t[1][1] - t[0][1], t[1][0] - t[0][0]))
    }
    
    function o(t) {
      return Math.sqrt(Math.pow(t[1][0] - t[0][0], 2) + Math.pow(t[1][1] - t[0][1], 2))
    }
    
    function a(t) {
      return t / 180 * Math.PI
    }
    
    function s(t, n, e) {
      const i = a(n);
      return [t[0] + e * Math.cos(i), t[1] + e * Math.sin(i)]
    }
    
    function u(t) {
      return n => 0 === n ? t[0] : 1 === n ? t[1] : s(t[0], r(t), o(t) * n)
    }
    
    function c(t) {
      return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }
    
    function l(t, n, e) {
      const i = a(n);
      if (!e || 0 === e[0] && 0 === e[1]) return r(t, i);
      return r(t.map((t, n) => t - e[n]), i).map((t, n) => t + e[n]);
      
      function r(t, n) {
        return [t[0] * Math.cos(n) - t[1] * Math.sin(n), t[0] * Math.sin(n) + t[1] * Math.cos(n)]
      }
    }
    
    function h(t, n = !1) {
      let e = 0;
      for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n], o = t[n === i - 1 ? 0 : n + 1];
        e += r[0] * o[1], e -= o[0] * r[1]
      }
      return n ? e / 2 : Math.abs(e / 2)
    }
    
    function f(t) {
      if (t.length < 3) return null;
      let n = 1 / 0, e = -1 / 0, i = 1 / 0, r = -1 / 0, o = !1;
      for (let a = 0, s = t.length; a < s; a++) {
        const s = t[a], u = s[0], c = s[1];
        null != u && isFinite(u) && null != c && isFinite(c) && (o = !0, u < n && (n = u), u > e && (e = u), c < i && (i = c), c > r && (r = c))
      }
      return o ? [[n, i], [e, r]] : null
    }
    
    function d(t) {
      let n = 0, e = 0, i = 0, r = t.length;
      for (let o = 0; o < r; o++) {
        const a = o === r - 1 ? 0 : o + 1, s = t[o], u = t[a], c = s[0] * u[1] - u[0] * s[1];
        n += c, e += (s[0] + u[0]) * c, i += (s[1] + u[1]) * c
      }
      const o = 3 * n;
      return [e / o, i / o]
    }
    
    function p(t, n, e) {
      return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
    }
    
    function g(t) {
      if (t.length < 3) return null;
      const n = t.slice().sort((t, n) => t[0] === n[0] ? t[1] - n[1] : t[0] - n[0]);
      let e = [];
      for (let t = 0; t < n.length; t++) {
        for (; e.length >= 2 && p(e[e.length - 2], e[e.length - 1], n[t]) <= 0;) e.pop();
        e.push(n[t])
      }
      let i = [];
      for (let t = n.length - 1; t >= 0; t--) {
        for (; i.length >= 2 && p(i[i.length - 2], i[i.length - 1], n[t]) <= 0;) i.pop();
        i.push(n[t])
      }
      return i.pop(), e.pop(), e.concat(i)
    }
    
    function m(t) {
      if (0 === t.length) return 0;
      let n, e, i = -1, r = t.length, o = t[r - 1], a = o[0], s = o[1], u = 0;
      for (; ++i < r;) n = a, e = s, o = t[i], a = o[0], s = o[1], n -= a, e -= s, u += Math.sqrt(n * n + e * e);
      return u
    }
    
    function v(t) {
      let n = 0, e = 0, i = t.length;
      for (let r = 0; r < i; r++) {
        const i = t[r];
        n += i[0], e += i[1]
      }
      return [n / i, e / i]
    }
    
    function y(t, n, e) {
      let i = [];
      for (let r = 0, o = t.length; r < o; r++) i[r] = s(t[r], n, e);
      return i
    }
    
    function _(t = 3, n = 100, e) {
      let i = [], a = [0, 0], u = [0, 0], c = 0;
      for (let e = 0; e < t; e++) i[e] = a, u[0] += a[0], u[1] += a[1], a = s(a, c, Math.sqrt(4 * n * Math.tan(Math.PI / t) / t)), c -= 360 / t;
      if (e) {
        const n = [[u[0] / t, u[1] / t], e];
        i = y(i, r(n), o(n))
      }
      return i
    }
    
    function w(t, n, e) {
      let i = [];
      for (let r = 0, o = t.length; r < o; r++) i[r] = l(t[r], n, e);
      return i
    }
    
    function b(t, n, e) {
      e || (e = d(t));
      let i = [];
      for (let a = 0, u = t.length; a < u; a++) {
        const u = t[a], c = o([e, u]), l = r([e, u]);
        i[a] = s(e, l, c * n)
      }
      return i
    }
    
    function x(t, n) {
      if (function (t, n) {
        let e = !1;
        for (let o = 0; o < 2; o++) for (let a = 0; a < 2; a++) if (i = t[o], r = n[a], i[0] === r[0] && i[1] === r[1]) {
          e = !0;
          break
        }
        var i, r;
        return e
      }(t, n)) return !0;
      let e, i, r, o = t[0][0], a = t[0][1], s = t[1][0], u = t[1][1], c = n[0][0], l = n[0][1], h = n[1][0],
        f = n[1][1];
      return e = (s - o) * (f - l) - (h - c) * (u - a), 0 !== e && (r = ((f - l) * (h - o) + (c - h) * (f - a)) / e, i = ((a - u) * (h - o) + (s - o) * (f - a)) / e, 0 < r && r < 1 && 0 < i && i < 1)
    }
    
    function T(t) {
      return function (t) {
        return t[0] === t[t.length - 1]
      }(t) ? t : [...t, t[0]]
    }
    
    function M(t) {
      return t[1][1] > t[0][1] ? t : [t[1], t[0]]
    }
    
    function k(t, n) {
      const e = M(n);
      return p(t, e[1], e[0]) < 0
    }
    
    function C(t, n) {
      const e = M(n);
      return p(t, e[1], e[0]) > 0
    }
    
    function S(t, n) {
      const e = o(n);
      return E(t, n) && o([n[0], t]) <= e && o([n[1], t]) <= e
    }
    
    function E(t, n) {
      return 0 === p(t, n[0], n[1])
    }
    
    function A(t, n) {
      let e = !1;
      const i = T(n);
      for (let n = 0, r = i.length - 1; n < r; n++) {
        const r = i[n], o = i[n + 1];
        if (x(t, [r, o]) || S(r, t) && S(o, t)) {
          e = !0;
          break
        }
      }
      return e
    }
    
    function O(t, n) {
      let e = t[0], i = t[1], r = !1;
      for (let t = 0, o = n.length - 1; t < n.length; o = t++) {
        const a = n[t][0], s = n[t][1], u = n[o][0], c = n[o][1];
        s > i != c > i && e < (u - a) * (i - s) / (c - s) + a && (r = !r)
      }
      return r
    }
    
    function N(t, n) {
      let e = !1;
      const i = T(n);
      for (let n = 0, r = i.length - 1; n < r; n++) if (S(t, [i[n], i[n + 1]])) {
        e = !0;
        break
      }
      return e
    }
    
    function I(t, n) {
      let e = !0;
      const i = T(t);
      for (let t = 0, r = i.length - 1; t < r; t++) {
        const r = i[t];
        if (!O(r, n)) {
          e = !1;
          break
        }
        if (A([r, i[t + 1]], n)) {
          e = !1;
          break
        }
      }
      return e
    }
    
    function L(t, n) {
      let e = !1, i = 0;
      const r = T(t);
      for (let t = 0, o = r.length - 1; t < o; t++) {
        const o = r[t];
        if (A([o, r[t + 1]], n)) {
          e = !0;
          break
        }
        if (N(o, n) && ++i, 2 === i) {
          e = !0;
          break
        }
      }
      return e
    }
    
    function R(t, n) {
      const e = 2 * n - t;
      return e >= 360 ? e - 360 : e < 0 ? e + 360 : e
    }
    
    e.r(n), e.d(n, "lineAngle", (function () {
      return r
    })), e.d(n, "lineInterpolate", (function () {
      return u
    })), e.d(n, "lineLength", (function () {
      return o
    })), e.d(n, "lineMidpoint", (function () {
      return c
    })), e.d(n, "pointRotate", (function () {
      return l
    })), e.d(n, "pointTranslate", (function () {
      return s
    })), e.d(n, "polygonArea", (function () {
      return h
    })), e.d(n, "polygonBounds", (function () {
      return f
    })), e.d(n, "polygonCentroid", (function () {
      return d
    })), e.d(n, "polygonHull", (function () {
      return g
    })), e.d(n, "polygonLength", (function () {
      return m
    })), e.d(n, "polygonMean", (function () {
      return v
    })), e.d(n, "polygonRegular", (function () {
      return _
    })), e.d(n, "polygonRotate", (function () {
      return w
    })), e.d(n, "polygonScale", (function () {
      return b
    })), e.d(n, "polygonTranslate", (function () {
      return y
    })), e.d(n, "lineIntersectsLine", (function () {
      return x
    })), e.d(n, "lineIntersectsPolygon", (function () {
      return A
    })), e.d(n, "pointInPolygon", (function () {
      return O
    })), e.d(n, "pointOnPolygon", (function () {
      return N
    })), e.d(n, "pointLeftofLine", (function () {
      return k
    })), e.d(n, "pointRightofLine", (function () {
      return C
    })), e.d(n, "pointOnLine", (function () {
      return S
    })), e.d(n, "pointWithLine", (function () {
      return E
    })), e.d(n, "polygonInPolygon", (function () {
      return I
    })), e.d(n, "polygonIntersectsPolygon", (function () {
      return L
    })), e.d(n, "angleReflect", (function () {
      return R
    })), e.d(n, "angleToDegrees", (function () {
      return i
    })), e.d(n, "angleToRadians", (function () {
      return a
    }))
  },//25
  ,//26
  ,//27
  function (t, n, e) {
    "use strict";
    t.exports = o, t.exports.isMobile = o, t.exports.default = o;
    var i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
      r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
    
    function o(t) {
      t || (t = {});
      var n = t.ua;
      if (n || "undefined" == typeof navigator || (n = navigator.userAgent), n && n.headers && "string" == typeof n.headers["user-agent"] && (n = n.headers["user-agent"]), "string" != typeof n) return !1;
      var e = t.tablet ? r.test(n) : i.test(n);
      return !e && t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== n.indexOf("Macintosh") && -1 !== n.indexOf("Safari") && (e = !0), e
    }
  },//28
  function (t, n, e) {
    "use strict";
    var i = e(2);
    n.a = function (t, n) {
      return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(i.a)(n) / 3))) - Object(i.a)(Math.abs(t)))
    }
  },//29
  function (t, n, e) {
    "use strict";
    var i = e(2);
    n.a = function (t, n) {
      return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Object(i.a)(n) - Object(i.a)(t)) + 1
    }
  },//30
  function (t, n, e) {
    "use strict";
    var i = e(2);
    n.a = function (t) {
      return Math.max(0, -Object(i.a)(Math.abs(t)))
    }
  },//31
  function (t, n, e) {
    var i = e(24);
    t.exports = function (t, n) {
      for (var e, r, o, a, s = i.lineLength(n), u = i.lineInterpolate(n), c = 8, l = 1 / 0, h = 0; h <= s; h += c) {
        (a = w(o = u(h / s))) < l && (e = o, r = h, l = a)
      }
      for (c /= 2; c > .5;) {
        var f, d, p, g, m, v, y = p / s, _ = g / s;
        (p = r - c) >= 0 && (m = w(f = u(y))) < l ? (e = f, r = p, l = m) : (g = r + c) <= s && (v = w(d = u(_))) < l ? (e = d, r = g, l = v) : c /= 2
      }
      return e;
      
      function w(n) {
        var e = n[0] - t[0], i = n[1] - t[1];
        return e * e + i * i
      }
    }
  },//32
  function (t, n, e) {
    function i(t, n) {
      return function (t) {
        if (Array.isArray(t)) return t
      }(t) || function (t, n) {
        if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
        var e = [], i = !0, r = !1, o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (e.push(a.value), !n || e.length !== n); i = !0) ;
        } catch (t) {
          r = !0, o = t
        } finally {
          try {
            i || null == s.return || s.return()
          } finally {
            if (r) throw o
          }
        }
        return e
      }(t, n) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }
    
    var r = e(4).GIF_MODE, o = (e(58), Object.assign({}, e(9), e(8))), a = e(27), s = e(46);
    s.forEach((function (t) {
      var n = i(t.date.split("-").map((function (t) {
        return +t
      })), 3), e = n[0], r = n[1], o = n[2];
      return t.datetime = new Date(o, e - 1, r), t
    })), o.selectAll(".hover-tap").text(a() ? "Tap" : "Hover");
    var u = e(47).init(".small-chart", s, {maxWidth: 40, aspect: .5}).draw(), c = e(48);
    c.init("#us-line .chart", s).draw();
    var l = e(49);
    l.init(), l.tick();
    var h = e(50);
    h.init(), h.tick();
    var f = e(51);
    f.init(r), f.tick();
    var d = e(52);
    d.init(r), d.tick();
    var p = e(53);
    p.init(r), p.tick();
    var g = e(54);
    if (g.init(r), g.tick(), r) {
      !function t() {
        requestAnimationFrame(t), f.tick(r), f.simulation.ticks > 1500 && d.tick(r), d.simulation.ticks > 1500 && p.tick(r), p.simulation.ticks > 1500 && g.tick(r)
      }()
    } else {
      var m = function (t) {
          t.simulation.hasStarted ? t.simulation.isNotOffScreen() && t.tick() : t.simulation.isOnScreen() && (t.simulation.hasStarted = !0)
        },
        v = function (t, n) {
          return {
            updateWalls: n,
            data: JSON.parse(JSON.stringify(t.simulation.data)),
            ticks: t.simulation.ticks,
            storage: JSON.parse(JSON.stringify(t.simulation.storage)),
            walls: t.simulation.walls,
            ticksToRecover: t.simulation.ticksToRecover,
            lastSick: t.simulation.lastSick,
            lastRecovered: t.simulation.lastRecovered,
            transferEnergy: t.simulation.transferEnergy,
            width: t.simulation.width,
            height: t.simulation.height,
            center: t.simulation.center
          }
        },
        y = e(55).init("#comparison-chart");
      !function t() {
        requestAnimationFrame(t), m(l), m(h), m(f), m(d), m(p), m(g), y.isNotOffScreen() && !y.calculationHasStarted && (y.setData([{
          name: "Без обмежень",
          data: v(f, !1)
        }, {name: "Спроба карантину", data: v(d, !0)}, {
          name: "Помірне соціальне дистанціювання",
          data: v(p, !1)
        }, {
          name: "Посилене соціальне дистанціювання",
          data: v(g, !1)
        }]).setChart().draw(), y.calculationHasStarted = !0, y.showCountdown(), y.getTicksUpToDate())
      }(), addEventListener("resize", (function (t) {
        c.draw(), u.draw(), y.data && y.draw()
      }))
    }
  },//33
  ,//34
  ,//35
  function (t, n) {
    !function () {
      "use strict";
      var t, n = [];
      
      function e() {
        for (; n.length;) n[0](), n.shift()
      }
      
      function i(t) {
        this.a = r, this.b = void 0, this.f = [];
        var n = this;
        try {
          t((function (t) {
            !function t(n, e) {
              if (n.a == r) {
                if (e == n) throw new TypeError;
                var i = !1;
                try {
                  var o = e && e.then;
                  if (null != e && "object" == typeof e && "function" == typeof o) return void o.call(e, (function (e) {
                    i || t(n, e), i = !0
                  }), (function (t) {
                    i || a(n, t), i = !0
                  }))
                } catch (t) {
                  return void (i || a(n, t))
                }
                n.a = 0, n.b = e, s(n)
              }
            }(n, t)
          }), (function (t) {
            a(n, t)
          }))
        } catch (t) {
          a(n, t)
        }
      }
      
      t = function () {
        setTimeout(e)
      };
      var r = 2;
      
      function o(t) {
        return new i((function (n) {
          n(t)
        }))
      }
      
      function a(t, n) {
        if (t.a == r) {
          if (n == t) throw new TypeError;
          t.a = 1, t.b = n, s(t)
        }
      }
      
      function s(e) {
        !function (e) {
          n.push(e), 1 == n.length && t()
        }((function () {
          if (e.a != r) for (; e.f.length;) {
            var t = (o = e.f.shift())[0], n = o[1], i = o[2], o = o[3];
            try {
              0 == e.a ? i("function" == typeof t ? t.call(void 0, e.b) : e.b) : 1 == e.a && ("function" == typeof n ? i(n.call(void 0, e.b)) : o(e.b))
            } catch (t) {
              o(t)
            }
          }
        }))
      }
      
      i.prototype.g = function (t) {
        return this.c(void 0, t)
      }, i.prototype.c = function (t, n) {
        var e = this;
        return new i((function (i, r) {
          e.f.push([t, n, i, r]), s(e)
        }))
      }, window.Promise || (window.Promise = i, window.Promise.resolve = o, window.Promise.reject = function (t) {
        return new i((function (n, e) {
          e(t)
        }))
      }, window.Promise.race = function (t) {
        return new i((function (n, e) {
          for (var i = 0; i < t.length; i += 1) o(t[i]).c(n, e)
        }))
      }, window.Promise.all = function (t) {
        return new i((function (n, e) {
          function i(e) {
            return function (i) {
              a[e] = i, (r += 1) == t.length && n(a)
            }
          }
          
          var r = 0, a = [];
          0 == t.length && n(a);
          for (var s = 0; s < t.length; s += 1) o(t[s]).c(i(s), e)
        }))
      }, window.Promise.prototype.then = i.prototype.c, window.Promise.prototype.catch = i.prototype.g)
    }()
  },//36
  function (t, n) {
    (function () {
      var t = {};
      window.TWP = window.TWP || {Module: {}}, window.TWP.Module = window.TWP.Module || {}, window.TWP.Module.util = t, t.getParameters && void 0 !== t.getParameters || (t.getParameters = function (t) {
        var n, e, i = [], r = {};
        if (t && -1 !== t.indexOf("?") && (i = t.split("?")[1])) {
          n = i.indexOf("&") ? i.split("&") : [i];
          for (var o = 0; o < n.length; o++) -1 !== n[o].indexOf("=") && (r[(e = n[o].split("="))[0]] = unescape(e[1]))
        }
        return r
      }), t.changeIframeHeight = function () {
        var t = window.location.origin.replace(window.location.protocol, "") + window.location.pathname, n = [];
        n.push('iframe[src="' + t + window.location.search + '"]'), "/" === window.location.pathname[window.location.pathname.length - 1] ? n.push('iframe[src="' + (t.slice(0, -1) + window.location.search) + '"]') : n.push('iframe[src="' + t + "/" + window.location.search + '"]');
        var e = $(window.top.document).find(n.join(",")), i = $("body").outerHeight(!0);
        e.css({height: i + "px"})
      }, t.debounce = function (t, n, e) {
        var i;
        return function () {
          var r = this, o = arguments, a = function () {
            i = null, e || t.apply(r, o)
          }, s = e && !i;
          clearTimeout(i), i = setTimeout(a, n), s && t.apply(r, o)
        }
      }, $(document).ready((function () {
        var n = t.getParameters(document.URL);
        if (n.template && "iframe" === n.template) {
          try {
            document.domain = "washingtonpost.com"
          } catch (t) {
          }
          $("body").addClass("iframe").show().css("display", "block"), n.graphic_id && $("#" + n.graphic_id).siblings().hide(), $("#pg-article").siblings().hide();
          try {
            if (window.location.hostname === window.top.location.hostname) {
              var e = t.debounce((function () {
                t.changeIframeHeight()
              }), 250);
              window.setTimeout((function () {
                t.changeIframeHeight()
              }), 1e3), $(window).on("resize", e)
            }
          } catch (t) {
          }
          n.type && "news-service" === n.type && ($("body").addClass("pg-news-service"), $(".pg-header").show(), $(".pg-article").append('\n                    <div class="pg-news-service-logo">\n                        <img data-src="https://img.washingtonpost.com/pb/resources/img/TWPLogos-twp_black-268x.png" alt="Washington Post logo" />\n                    </div>\n                '))
        }
      }))
    }).call(this)
  },//37
  function (t, n) {
    !function (t, n) {
      var e = n.wp_pb = n.wp_pb || {}, i = e.nav = e.nav || {};
      var r = {
        isHomepage: t("#logo-in-nav").hasClass("homePage"), init: function () {
          if (!t("#page").hasClass("ie8")) {
            if (0 === t("#article-full-width-content").length && t("#pb-root .pb-f-page-header-v2").length) {
              var e = t(".pb-f-page-header-v2");
              t("#pb-root").before(e)
            }
            var i, o;
            (n.ActiveXObject || "ActiveXObject" in n) && (t("#main-sections-nav").addClass("ie"), t("#wp-header").addClass("ie")), t("#sections-menu-off-canvas ul.side-nav li").each((function () {
              if (!t(this).hasClass("nav-screenreader-link")) {
                var n = t(this).find(">a"), e = n.html().replace(/\s+/g, "").replace(/&/g, "-").toLowerCase(),
                  i = n.attr("href");
                if (t(this).hasClass("main-nav")) n.attr("href", i + "?nid=menu_nav_" + e); else if (t(this).hasClass("sub-nav-item")) {
                  var r = t(this).parents(".main-nav").find(">a").text().replace(/\s+/g, "").replace(/&/g, "-").toLowerCase();
                  n.attr("href", i + "?nid=menu_nav_" + r + "-" + e)
                }
              }
            })), t("#sections-menu-wide li").each((function () {
              var n = t(this).find("a"), e = n.html().replace(/\s+/g, "").replace(/&/g, "-").toLowerCase(),
                i = n.attr("href");
              n.attr("href", i + "?nid=top_nav_" + e)
            })), t("#search-btn").click((function (n) {
              n.stopPropagation(), n.preventDefault(), t(this).hasClass("closed") ? (t(this).removeClass("closed").addClass("opened"), t("#search-field").removeClass("closed").addClass("opened"), t("#search-field").focus()) : t(this).hasClass("opened") && t("#search-form").submit()
            })), t("#search-btn").on("mouseover", (function () {
              t(this).hasClass("opened") && (o = !0)
            })).on("mouseout", (function () {
              t(this).hasClass("opened") && (o = !1)
            })), t("#search-field").on("blur", (function () {
              t(this).hasClass("opened") && !o && (t(this).removeClass("opened").addClass("closed"), t("#search-btn").removeClass("opened").addClass("closed"))
            })), t("#search-form, #nav-search-mobile").submit((function () {
              return !!t(this).find("input[type=text]").val() && (n.s && s.sendDataToOmniture && s.sendDataToOmniture("Search Submit", "event2", {
                eVar38: t(this).find("input[type=text]").val(),
                eVar1: s.pageName
              }), !0)
            })), t("#sections-menu-off-canvas li a").hover((function () {
              t(this).addClass("hover-name"), t(this).parent().addClass("unhover-list")
            }), (function () {
              t(this).removeClass("hover-name"), t(this).parent().removeClass("unhover-list")
            })), t("#nav-user").click((function () {
              t("body").hasClass("left-menu left-menu-pb") && (t("body").removeClass("left-menu left-menu-pb"), t("#main-sections-nav").removeClass("active"), t(".section-menu-btn").removeClass("active")), t("#user-menu").toggleClass("nav-user-show"), t("body").toggleClass("account-menu")
            })), t("#settings-nav-btn").click((function () {
              t("body").hasClass("left-menu left-menu-pb") && (t("body").removeClass("left-menu left-menu-pb"), t("#main-sections-nav").removeClass("active"), t(".section-menu-btn").removeClass("active")), t("#logged-in-status").hasClass("logged-in") ? t("#user-menu").toggleClass("nav-user-show") : t(".sign-up-buttons").toggleClass("nav-user-show"), t("body").toggleClass("account-menu")
            })), t(document).on("click", ".section-menu-btn", (function (n) {
              if (n.stopPropagation(), n.preventDefault(), !t("html").hasClass("drawbridge-up")) {
                var e = t(this), i = t("#main-sections-nav");
                if (i.hasClass("active")) t("body").removeClass("left-menu left-menu-pb"), e.removeClass("active"), i.removeClass("active"); else {
                  if (t("body").hasClass("account-menu") && (t("body").removeClass("account-menu"), t("#user-menu").removeClass("nav-user-show"), t(".sign-up-buttons").removeClass("nav-user-show")), t("body").addClass("left-menu left-menu-pb"), !t.trim(t("#sections-menu-off-canvas").html()).length) {
                    var o = "", s = !r.isHomepage && wp_pb.canonical_url ? "&contentUri=" + wp_pb.canonical_url : "";
                    o = t(".pb-f-page-header-v2 #page").hasClass("offsite") ? "https://www.washingtonpost.com/pb/api/v2/render/feature/page/header-v2?shownav=shownav" : "/pb/api/v2/render/feature/page/header-v2?shownav=shownav" + s, t.get(o, (function (n) {
                      var e = t(n.rendering), i = e.find("#subscribe-left-nav");
                      t(".pb-f-page-header-v2").find("#main-sections-nav-inner").append(i);
                      var o = e.find("#search-nav-wrapper");
                      t(".pb-f-page-header-v2").find("#main-sections-nav-inner").append(o);
                      var a = e.find("#sections-menu-off-canvas");
                      t(".pb-f-page-header-v2").find("#main-sections-nav-inner").append(a);
                      var s = e.find("#site-attribution-off-canvas-menu");
                      t(".pb-f-page-header-v2").find("#main-sections-nav-inner").append(s), t("#main-sections-nav").hasClass("hide-subscribe-left-nav") || t("#subscribe-left-nav").removeClass("hidden"), r.initRegionalToggle()
                    }))
                  }
                  e.addClass("active"), i.addClass("active")
                }
                a()
              }
            })), t(document).on({
              mouseenter: function () {
                var n;
                n = t(this), i = setTimeout((function () {
                  t("#main-sections-nav").addClass("subNavigation"), t(n).addClass("hover")
                }), 75)
              }, mouseleave: function () {
                t(this).removeClass("hover"), t("#main-sections-nav").removeClass("subNavigation"), clearTimeout(i)
              }
            }, ".main-nav"), t(n).width() <= 480 && t(".main-nav").click((function () {
              location.href = t(this).find(".main-nav-item").attr("href")
            }))
          }
        }, setupNav: function () {
          t.fn.appendLinkItems = function (n, e) {
            var i = this;
            return e = e || "<li>", t.each(n, (function (n, r) {
              var o = t("<a>");
              r.title && o.text(r.title), r.html && o.html(r.html), r.href && o.attr("href", r.href), r.attr && o.attr(r.attr), r.class && o.addClass(r.class), i.append(t(e).append(o).addClass(r.selected ? "selected" : "").append("<hr />"))
            })), this
          }, i.setIdentityMenu = function (n) {
            var e = t("#user-menu ul.user-info");
            e.children("li").remove(), e.appendLinkItems(n)
          }, i.closeDropdowns = function () {
            t("#wp-header .dropdown-trigger.active").each((function () {
              t(this).removeClass("active"), t("#" + t(this).data("menu")).hide()
            })), t(".leaderboard").removeClass("hideAd")
          }, i.showNav = function () {
            t("#wp-header").hasClass("bar-hidden") && setTimeout((function () {
              t("#wp-header").removeClass("bar-hidden")
            }), 250)
          }, i.hideNav = function () {
            t("#wp-header").hasClass("bar-hidden") || setTimeout((function () {
              t("#wp-header").addClass("bar-hidden")
            }), 250)
          }
        }, setScrollEvents: function () {
          var e = t("#logo-in-nav").hasClass("homePage"), r = t(this).scrollTop() || 0, s = o(),
            u = t(".pb-f-page-notification-bar"), c = 0;
          if (u.length && (c = u.outerHeight()), e) t("#logo-in-nav").removeClass("nav-display-show").addClass("nav-display-hide"), t(".main-navigation").removeClass("nav-logo-display-show"), t("#sections-menu-wide").addClass("nav-display-show").removeClass("nav-display-hide"), t(n).scroll((function () {
            if (s && t("#main-sections-nav").hasClass("active")) return !1;
            var e = !1, i = t(n).width(), r = n.pageYOffset;
            i > 991 && t("#logo-in-nav").addClass("nav-display-hide-tagline"), i >= 768 && (r > 80 && 0 == e ? (e = !0, t("#sections-menu-wide").removeClass("nav-display-show").addClass("nav-display-hide"), t("#logo-in-nav").addClass("nav-display-show").removeClass("nav-display-hide"), t(".main-navigation").addClass("nav-logo-display-show")) : r <= 0 && (e = !1, t("#section-menu-btn").hasClass("active") || (t("#logo-in-nav").removeClass("nav-display-show").addClass("nav-display-hide"), t(".main-navigation").removeClass("nav-logo-display-show"), t("#sections-menu-wide").addClass("nav-display-show").removeClass("nav-display-hide")))), t("#main-sections-nav").hasClass("active") && a()
          })); else if (!e || s) {
            var l = 100, h = 150;
            s && (h = 30, l = 25), t(n).scroll((function () {
              if (s && t("#main-sections-nav").hasClass("active")) return !1;
              if (!t("#section-menu-btn").hasClass("active")) {
                var e = t(this).scrollTop();
                if (e + 80 < r || 0 === e) {
                  var u = e;
                  setTimeout((function () {
                    var n = t(this).scrollTop();
                    (u - n > h && !t("#wp-header").hasClass("no-scroll-peek") || 0 === e) && (i.showNav(), r = e)
                  }), l)
                } else if (e - 80 > r && e > 50 + c) {
                  var f = !0;
                  o() && n.matchMedia("(orientation: landscape)").matches && (t("#user-menu").hasClass("nav-user-show") || t(".sign-up-buttons").hasClass("nav-user-show")) && (f = !1), t("header").hasClass("dont-hide-header-on-scroll") && (f = !1), f && (i.hideNav(), r = e, t("body").removeClass("account-menu"), t("#user-menu").removeClass("nav-user-show"), t(".sign-up-buttons").removeClass("nav-user-show"))
                }
              }
              t("#main-sections-nav").hasClass("active") && a()
            }))
          }
          t(n).resize((function () {
            i.closeDropdowns(), e && t(n).width() < 991 && t("#logo-in-nav").hasClass("nav-display-hide-tagline") && t("#logo-in-nav").removeClass("nav-display-hide-tagline"), e && t(n).width() > 991 && (t("#logo-in-nav").hasClass("nav-display-hide-tagline") || t("#logo-in-nav").addClass("nav-display-hide-tagline"))
          })), o() && (t(document).mouseup((function (n) {
            if ("mobile-hamburger-ic" != n.target.id) {
              var e = t("#main-sections-nav"), i = t("#main-sections-nav");
              !e.hasClass("active") || i.is(n.target) || 0 !== i.has(n.target).length && "main-sections-nav-inner" != n.target.id || (t("body").removeClass("left-menu left-menu-pb"), t(".section-menu-btn").removeClass("active"), e.removeClass("active"))
            }
          })), t(document).bind("touchend", (function (n) {
            var e = t(".sign-up-buttons");
            !e.is(n.target) && 0 === e.has(n.target).length && t(".sign-up-buttons").hasClass("nav-user-show") && "settings-nav-btn" !== n.target.id && (t(".sign-up-buttons").removeClass("nav-user-show"), t("body").removeClass("account-menu"))
          })), t(document).bind("touchend", (function (n) {
            var e = t("#main-sections-nav");
            !e.is(n.target) && 0 === e.has(n.target).length && t("#main-sections-nav").hasClass("active") && "section-menu-btn" !== n.target.id && "section-menu-btn" !== n.target.parentNode.id && "mobile-hamburger-ic" !== n.target.id && (t("#main-sections-nav, .section-menu-btn").removeClass("active"), t("body").removeClass("left-menu left-menu-pb"))
          })), t(document).bind("touchend", (function (n) {
            var e = t("#user-menu");
            !e.is(n.target) && 0 === e.has(n.target).length && t("#user-menu").hasClass("nav-user-show") && "settings-nav-btn" !== n.target.id && "nav-user" !== n.target.parentNode.id && "username" !== n.target.className && (t("#user-menu").removeClass("nav-user-show"), t("body").removeClass("account-menu"))
          }))), t(document).mouseup((function (n) {
            var e = t("#user-menu");
            !e.is(n.target) && 0 === e.has(n.target).length && t("#user-menu").hasClass("nav-user-show") && "settings-nav-btn" !== n.target.id && "nav-user" !== n.target.parentNode.id && "username" !== n.target.className && (t("#user-menu").removeClass("nav-user-show"), t("body").removeClass("account-menu"))
          })), t(document).mouseup((function (n) {
            var e = t("#main-sections-nav");
            !e.is(n.target) && 0 === e.has(n.target).length && t("#main-sections-nav").hasClass("active") && "section-menu-btn" !== n.target.id && "section-menu-btn" !== n.target.parentNode.id && "mobile-hamburger-ic" !== n.target.id && (t("#main-sections-nav, .section-menu-btn").removeClass("active"), t("body").removeClass("left-menu left-menu-pb"))
          }))
        }, setIdentity: function () {
          var e;
          i.getIdentityProvider = function () {
            return e
          }, i.setIdentityProvider = function (n) {
            var r = function () {
            };
            (e = {}).name = n.name || "", e.getUserId = n.getUserId || r, e.getUserMenu = n.getUserMenu || r, e.getSignInLink = n.getSignInLink || r, e.getRegistrationLink = n.getRegistrationLink || r, e.isUserLoggedIn = n.isUserLoggedIn || r, e.render = n.render || function () {
              e.isUserLoggedIn() ? (t("#nav-user .username").text(e.getUserId()), i.setIdentityMenu(e.getUserMenu()), t("#nav-user, #user-menu, .site-info .account-menu").removeClass("hidden"), t("#logged-in-status").addClass("logged-in"), t(document).on("onTwpMeterReady", (function () {
                "1" !== (document.cookie.match(/rplsb=([0-9]+)/) ? RegExp.$1 : "") && (t("#user-menu").addClass("no-subscriber"), t("#nav-subscribe, #subscribe-left-nav").removeClass("hidden"), t("#logged-in-status.logged-in #nav-subscribe").css("display", "block"), t("#main-sections-nav").removeClass("hide-subscribe-left-nav"))
              }))) : (t("#sign-in-link").attr("href", e.getSignInLink() + "?nid=top_pb_signin&tid=nav_sign_in"), t(".nav-sign-in, #nav-subscribe, #nav-subscribe-mobile, #subscribe-left-nav").removeClass("hidden"), t("#main-sections-nav").removeClass("hide-subscribe-left-nav"))
            }, i.renderIdentity()
          }, i.renderIdentity = function (t) {
            t = t || function () {
            }, e && e.render(), t(e)
          };
          var r = t("#nav-user").data("show-identity"), o = n.location.href.split("?")[0], a = {
            name: "TWP", getUserId: function () {
              var t = TWP.Util.User.getUserName(), n = TWP.Util.User.getUserId();
              return "string" == typeof t && t.length > 0 ? t : n
            }, getUserMenu: function () {
              return [{
                title: TWP.Util.User.getUserId(),
                href: TWP.signin.profileurl + o + "&tid=nav_acctmgnt_menu&refresh=true",
                class: "account"
              }, {title: "Sign out", href: TWP.signin.logouturl_page + "?tid=nav_acctmgnt_menu"}]
            }, getSignInLink: function () {
              return TWP.signin.loginurl_page + o
            }, getRegistrationLink: function () {
              return TWP.signin.registrationurl_page + o
            }, isUserLoggedIn: function () {
              return !!TWP.Util.User && TWP.Util.User.getAuthentication()
            }
          };
          r && function t() {
            i.getIdentityProvider() || (TWP && TWP.signin && TWP.Util ? (i.setIdentityProvider(a), i.renderIdentity()) : n.setTimeout((function () {
              t()
            }), 200))
          }()
        }, initRegionalToggle: function () {
          var n = function (n) {
            try {
              t.cookie("region_cookie", n, {
                path: "/",
                domain: document.location.hostname.replace(/([a-zA-Z0-9-]+)/, "")
              }), localStorage.setItem("region_cookie", n)
            } catch (t) {
            }
          };
          t(".main-nav.has-info .additional-inline-info a").each((function () {
            t(this).text().indexOf("Regional") > 0 ? t(this).on("click", (function () {
              n(1)
            })) : t(this).text().indexOf("World") > 0 && t(this).on("click", (function () {
              n(0)
            }))
          }))
        }
      };
      
      function o() {
        return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Kindle/i) || navigator.userAgent.match(/Windows Phone/i))
      }
      
      function a() {
        t("#sections-menu-off-canvas > ul > li").each((function () {
          if (t("#main-sections-nav").hasClass("active") && t(this).hasClass("has-sub")) {
            var e = t(this).find("ul").height() / 2 - 10, i = t(this).offset().top - t(n).scrollTop();
            i < 94 ? e = 0 : i - e < 95 && (e = i - 95), t(this).find("ul").css("top", "-" + e + "px")
          }
        }))
      }
      
      r.init(), r.setupNav(), r.setScrollEvents(), r.setIdentity()
    }(jQuery, window)
  },//38
  function (t, n) {
    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }
    
    !function () {
      try {
        var t = {
            myRoot: ".top-sharebar-wrapper", init: function () {
              $(".pb-f-sharebars-top-share-bar").each((function (n, e) {
                if (TWPHead.desktop || $(e).find(".top-sharebar-wrapper").data("pb-prevent-ajax") || 0 != $(e).find(".vertical-sticky-top-sharebar").size()) t.originalInit(); else {
                  var i = $(e).find(".top-sharebar-wrapper").data("pb-canonical-url");
                  i.indexOf(".washingtonpost.com") >= 0 ? $.ajax({
                    url: "/pb/api/v2/render/feature",
                    dataType: "json",
                    data: {
                      id: $(e)[0].id,
                      uri: window.location.pathname,
                      contentUri: i,
                      desktop: TWPHead.desktop,
                      mobile: TWPHead.mobile
                    },
                    cache: !0,
                    jsonCallback: "wpTopShareBarAjax",
                    success: function (n) {
                      $(e).empty(), $(e).append($(n.rendering).children()), t.originalInit()
                    },
                    error: function (n) {
                      t.originalInit()
                    }
                  }) : t.originalInit(), $(e).find(".top-sharebar-wrapper").data("pb-prevent-ajax", "true")
                }
              }))
            }, originalInit: function (t) {
              var e = this;
              t = t || this.myRoot;
              var r = $(t);
              r.hasClass("sticky-top-sharebar") && i.init(), r.each((function (t, i) {
                $(i).hasClass("vertical-sticky-top-sharebar") && n.init($(i));
                var r = $(i), o = $(".tool:not(.more, .read-later-bookmark, .read-later-list)", r),
                  a = $(".social-tools-wrapper", r), s = $(".tool.more", a), u = $(".social-tools-additional", r),
                  c = window.innerWidth > 0 ? window.innerWidth : screen.width;
                mobile_browser;
                if (s.off("click").on("click", this, (function (t) {
                  s.hide(), u.show("fast", (function (t) {
                    r.addClass("expanded"), $(".social-tools", u).animate({"margin-left": 0}, 4250)
                  })).addClass("more-open")
                })), o.on({
                  click: function (t) {
                    var n = $(this).attr("class");
                    n = void 0 !== n ? n.split(" ")[0].trim() : "", e.trackTraffic("share." + n, n + "_bar")
                  }
                }), wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.tablet && r.addClass("tablet"), TWPHead.mobile && r.find(".vertical-sticky-top-sharebar").size() > 0) {
                  var l = function () {
                    var t = r.find(".social-tools-wrapper").width() - 5,
                      n = Math.ceil(r.find(".social-tools-primary .social-tools .tool").first().outerWidth(!0));
                    r.find(".social-tools-primary .social-tools .tool.more").hide();
                    var e = r.find(".social-tools-primary .social-tools .tool:not(.more), .social-tools-additional .social-tools .tool").hide();
                    r.find(".social-tools-readlater").length > 0 && (t -= Math.ceil(r.find(".social-tools-readlater").width()));
                    for (var i = Math.floor(t / n), o = 0; o < e.length; o++) try {
                      o < i ? $(e.get(o)).fadeIn() : $(e.get(o)).hide()
                    } catch (t) {
                    }
                  };
                  $(window).resize((function () {
                    l()
                  })), l()
                } else r.find(".social-tools-primary .social-tools .tool").fadeIn();
                r.removeClass("unprocessed")
              })), "function" == typeof wp_pb.StaticMethods.initReadLater && wp_pb.StaticMethods.initReadLater(r, "top-share-bar")
            }, trackTraffic: function (t, n) {
              if ("function" == typeof window.sendDataToOmniture) {
                var i = {
                  eVar1: "object" == e(window.s) && s && s.eVar1,
                  eVar2: "object" == e(window.s) && s && s.eVar2,
                  eVar8: "object" == e(window.s) && s && s.eVar8,
                  eVar17: "object" == e(window.s) && s && s.eVar17,
                  eVar27: n
                };
                try {
                  sendDataToOmniture(t, "event6", i)
                } catch (t) {
                }
              }
            }
          }, n = {
            init: function (t) {
              t.closest(".pb-f-sharebars-top-share-bar").insertBefore("#pb-root"), window.innerWidth > 992 && (t.css({top: ($(window).height() - t.outerHeight() + 25) / 2 + "px"}), t.animate({left: "-1px"}), $(window).resize((function () {
                t.animate({top: ($(window).height() - t.outerHeight() + 25) / 2 + "px"}, 50)
              }))), n.enableCollisionDetection(t)
            }, enableCollisionDetection: (a = "getBoundingClientRect" in document.documentElement, u = 0, function (t) {
              var n;
              !a || u > 3 || (n = setInterval((function () {
                var e, i, r, o, a = t.closest(".pb-f-sharebars-top-share-bar"), s = a.find(".top-sharebar-wrapper"),
                  u = $("html").hasClass("gallery_story") ? $(".pb-f-gallery-gallery") : $("#main-content"),
                  c = a.data("__mccollides"), l = {value: void 0};
                a.length && s.length && u.length ? (l.value = (e = u[0], i = s[0], r = e.getBoundingClientRect(), o = i.getBoundingClientRect(), !(r.top > o.bottom || r.right < o.left || r.bottom < o.top || r.left > o.right)), c && l.value === c.value || (wp_pb.report("sticky-vertical-sharebar", "collides_with_main_content", l.value), a.data("__mccollides", {value: l.value}))) : clearInterval(n)
              }), 600), u++)
            })
          }, i = {
            setElmTop: function (t, n) {
              var e = n ? "translate3d(0px, " + n + "px, 0px)" : "initial";
              t.css({transform: e})
            }, fixedPosition: function (t, n) {
              $(window).scrollTop() > n ? t.hasClass("top-sharebar-fixed") || (t.addClass("top-sharebar-fixed"), wp_pb.report("sticky-top-sharebar", "sharebar_fixed", !0)) : (t.removeClass("top-sharebar-fixed"), wp_pb.report("sticky-top-sharebar", "sharebar_unfixed", !0)), "block" == $(".shareBar-follow-modal").css("display") && ($("#wp-header").height() > 0 ? $(".shareBar-follow-modal").addClass("fixedModalNav").removeClass("fixedModal") : $(".shareBar-follow-modal").addClass("fixedModal").removeClass("fixedModalNav"))
            }, moveOutOfRoot: function (t) {
              var n = $("#pb-root");
              if ("none" !== n.css("max-width")) {
                var e = t.parent(), i = $(".pb-f-ad-leaderboard");
                e.find(".sticky-top-sharebar").css("padding-top", "55px"), n.before(e), n.before(i)
              }
            }, detectMobileForSMS: function () {
              if (mobile_browser) {
                var t = "";
                windows_browser ? t = "sms://?body=" : (android_browser || android233_browser) && (t = "sms:?body="), t.length > 0 ? $(".pb-f-sharebars-top-share-bar .sms-share-device.unprocessed").each((function () {
                  $(this).attr("onclick", $(this).attr("onclick").replace(/sms:\?&body=/g, t)), $(this).removeClass("unprocessed")
                })) : $(".pb-f-sharebars-top-share-bar .sms-share-device.unprocessed").removeClass("unprocessed")
              }
            }, init: function () {
              var t = $(".sticky-top-sharebar"), n = this;
              if (t.length) {
                this.moveOutOfRoot(t);
                var e = t.offset().top;
                "fixed" === $("#wp-header").css("position") && $(window).scrollTop() > e && this.fixedPosition(t, e), $(window).off("scroll.sharebar").on("scroll.sharebar", (function () {
                  n.fixedPosition(t, e)
                })), this.detectMobileForSMS()
              }
            }
          },
          r = (document.cookie.match(/wapo_login_id=([^;]+)/) && RegExp.$1, document.cookie.match(/wapo_secure_login_id=([^;]+)/) && RegExp.$1, navigator.userAgent, {
            currIncrementMax: 9,
            currIncrementUnit: 2,
            currIncrementIndex: 0,
            init: function (t, n, e) {
              t = t || "#article-body article, .related-story, .liveblog-intro, #liveblog-story-list .description, #full-recipe .article-content", n = n || "p, li", e = e || ".tool.textresizer", this.root = $(t), this.resizeableElements = $(n, this.root), $(".related-story").prev("h3").length > 0 && (this.resizeableElements.push($(".related-story").prev("h3")), this.resizeableElements.push($(".related-story h4 a"))), $(e).on("click", this, this.resize)
            },
            resize: function (t) {
              var n = t.data;
              n.currIncrementIndex == n.currIncrementMax && (n.currIncrementIndex = 0, n.currIncrementUnit = 2 == n.currIncrementUnit ? -2 : 2), n.currIncrementIndex = n.currIncrementIndex + 1, n.resizeableElements.each((function () {
                elm = $(this), currSize = parseFloat(elm.css("font-size"), 5);
                var t = currSize + n.currIncrementUnit;
                elm.css("font-size", t), wp_pb.report("textresizer", "resized", t)
              }))
            }
          });
        $(".social-tools-wrapper .tool.textresizer, .social-tools-wrapper .tool.print").on("click", (function () {
          !function (t) {
            if ("function" == typeof window.sendDataToOmniture) {
              var n = {
                eVar1: "object" == e(window.s) && s && s.eVar1,
                eVar2: "object" == e(window.s) && s && s.eVar2,
                eVar8: "object" == e(window.s) && s && s.eVar8,
                eVar17: "object" == e(window.s) && s && s.eVar17,
                eVar27: t
              };
              try {
                sendDataToOmniture(t + ".click", "event6", n)
              } catch (t) {
              }
            }
          }($(this).attr("class").split(" ")[0].trim())
        })), $(".pg-byline--author").on("mouseenter", (function (t) {
          $(".author-hover-card").removeClass("author-card-visible"), $(t.currentTarget).find(".author-hover-card").addClass("author-card-visible")
        })), $(".pg-byline--author").on("mouseleave", (function (t) {
          $(".author-hover-card").removeClass("author-card-visible")
        })), $(".author-hover-card").on("mouseleave", (function (t) {
          $(".author-hover-card").removeClass("author-card-visible")
        })), window.TWP = TWP || {}, TWP.SocialTools = TWP.SocialTools || t, TWP.SocialTools.init(), TWP.TextResizer = TWP.TextResizer || r, TWP.TextResizer.init();
        var o = isMobile.tablet();
        window.VisitorSegment && VisitorSegment("tablet", (function () {
          return o && $(window).width() > 768
        }))
      } catch (t) {
      }
      var a, u
    }()
  },//39
  
  function (t, n) {
    t.exports = function (t) {
      /*
      var n = t.items || 8;
      jQuery.getJSON("https://s3.amazonaws.com/wp-stat/apps/top-content/graphics.json", (function (e) {
        try {
          var i = [];
          e.q_results[0].rows[0].content.slice(0, n).map((function (t, n) {
            if (t.media && t.media.length && t.media[0].url) {
              var e = "".concat("https://img.washingtonpost.com/wp-apps/imrs.php", "?src=").concat(t.media[0].url, "&w=60&h=60");
              i.push('\n                        <div class="article">\n                            <a href="'.concat(t.url, '">\n                                <div class="number left">').concat(n + 1, "</div>\n                                <img src=").concat(e, ' class="right" />\n                                <div class="headline">').concat(t.linkText, '</div>\n                                <div class="clear"></div>\n                            </a>\n                        </div>\n                    '))
            }
          })), jQuery.isArray(t.container) ? jQuery.each(t.container, (function (t, n) {
            jQuery(n).html(i.join(""))
          })) : jQuery(t.container).html(i.join(""))
        } catch (t) {
          console.log("Error fetching top content", t)
        }
      }))
      */
    }
  },//40
  
  function (t, n, e) {
    var i, r, o = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
      }
      return t
    }, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    !function (o, s) {
      "object" === a(n) && void 0 !== t ? t.exports = s() : void 0 === (r = "function" == typeof (i = s) ? i.call(n, e, n, t) : i) || (t.exports = r)
    }(0, (function () {
      "use strict";
      var t = {
        elements_selector: "img",
        container: window,
        threshold: 300,
        throttle: 150,
        data_src: "original",
        data_srcset: "originalSet",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_initial: "initial",
        skip_invisible: !0,
        callback_load: null,
        callback_error: null,
        callback_set: null,
        callback_processed: null
      }, n = !("onscroll" in window) || /glebot/.test(navigator.userAgent), e = function (t, n) {
        t && t(n)
      }, i = function (t) {
        return t.getBoundingClientRect().top + window.pageYOffset - t.ownerDocument.documentElement.clientTop
      }, r = function (t) {
        return t.getBoundingClientRect().left + window.pageXOffset - t.ownerDocument.documentElement.clientLeft
      }, a = function (t, n, e) {
        return !(function (t, n, e) {
          return (n === window ? window.innerHeight + window.pageYOffset : i(n) + n.offsetHeight) <= i(t) - e
        }(t, n, e) || function (t, n, e) {
          return (n === window ? window.pageYOffset : i(n)) >= i(t) + e + t.offsetHeight
        }(t, n, e) || function (t, n, e) {
          var i = window.innerWidth;
          return (n === window ? i + window.pageXOffset : r(n) + i) <= r(t) - e
        }(t, n, e) || function (t, n, e) {
          return (n === window ? window.pageXOffset : r(n)) >= r(t) + e + t.offsetWidth
        }(t, n, e))
      }, s = function (t, n) {
        var e = new t(n), i = new CustomEvent("LazyLoad::Initialized", {detail: {instance: e}});
        window.dispatchEvent(i)
      }, u = function (n) {
        this._settings = o({}, t, n), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
      };
      u.prototype = {
        _reveal: function (t) {
          var n = this._settings, i = function i() {
            n && (t.removeEventListener("load", r), t.removeEventListener("error", i), t.classList.remove(n.class_loading), t.classList.add(n.class_error), e(n.callback_error, t))
          }, r = function r() {
            n && (t.classList.remove(n.class_loading), t.classList.add(n.class_loaded), t.removeEventListener("load", r), t.removeEventListener("error", i), e(n.callback_load, t))
          };
          "IMG" !== t.tagName && "IFRAME" !== t.tagName || (t.addEventListener("load", r), t.addEventListener("error", i), t.classList.add(n.class_loading)), function (t, n, e) {
            var i = t.tagName, r = t.dataset[e];
            if ("IMG" === i) {
              !function (t, n) {
                var e = t.parentElement;
                if ("PICTURE" === e.tagName) for (var i = 0; i < e.children.length; i++) {
                  var r = e.children[i];
                  if ("SOURCE" === r.tagName) {
                    var o = r.dataset[n];
                    o && r.setAttribute("srcset", o)
                  }
                }
              }(t, n);
              var o = t.dataset[n];
              return o && t.setAttribute("srcset", o), void (r && t.setAttribute("src", r))
            }
            "IFRAME" !== i ? r && (t.style.backgroundImage = "url(" + r + ")") : r && t.setAttribute("src", r)
          }(t, n.data_srcset, n.data_src), e(n.callback_set, t)
        }, _loopThroughElements: function () {
          var t = this._settings, i = this._elements, r = i ? i.length : 0, o = void 0, s = [], u = this._isFirstLoop;
          for (o = 0; o < r; o++) {
            var c = i[o];
            t.skip_invisible && null === c.offsetParent || (n || a(c, t.container, t.threshold)) && (u && c.classList.add(t.class_initial), this._reveal(c), s.push(o), c.dataset.wasProcessed = !0)
          }
          for (; s.length > 0;) i.splice(s.pop(), 1), e(t.callback_processed, i.length);
          0 === r && this._stopScrollHandler(), u && (this._isFirstLoop = !1)
        }, _purgeElements: function () {
          var t = this._elements, n = t.length, e = void 0, i = [];
          for (e = 0; e < n; e++) t[e].dataset.wasProcessed && i.push(e);
          for (; i.length > 0;) t.splice(i.pop(), 1)
        }, _startScrollHandler: function () {
          this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
        }, _stopScrollHandler: function () {
          this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
        }, handleScroll: function () {
          var t = this._settings.throttle;
          if (0 !== t) {
            var n = function () {
              (new Date).getTime()
            }, e = n(), i = t - (e - this._previousLoopTime);
            i <= 0 || i > t ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = e, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function () {
              this._previousLoopTime = n(), this._loopTimeout = null, this._loopThroughElements()
            }.bind(this), i))
          } else this._loopThroughElements()
        }, update: function () {
          this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
        }, destroy: function () {
          window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
        }
      };
      var c = window.lazyLoadOptions;
      return c && function (t, n) {
        var e = n.length;
        if (e) for (var i = 0; i < e; i++) s(t, n[i]); else s(t, n)
      }(u, c), u
    }))
  },//41
  function (t, n, e) {
    var i, r, o;
    r = [], void 0 === (o = "function" == typeof (i = function () {
      var t, n, e, i = {sel: [], el: []}, r = !1, o = !1;
      
      function a() {
      }
      
      function s(t, n) {
        Array.prototype.forEach.call(t, n)
      }
      
      function u() {
        this.reset()
      }
      
      function c(t) {
        return n.some((function (n) {
          return n.start < t && t < n.end
        }))
      }
      
      function l(t, i, r) {
        if (0 === r) t.style.whiteSpace = i, e = 0, n = [], function t(i, r) {
          if (i.nodeType === i.ELEMENT_NODE) if ("nowrap" === window.getComputedStyle(i).whiteSpace) {
            var o = i.outerHTML.length;
            n.push({start: e, end: e + o}), e += o
          } else s(i.childNodes, (function (n) {
            t(n, !0)
          })), r && (e += i.outerHTML.length - i.innerHTML.length); else i.nodeType === i.COMMENT_NODE ? e += i.length + 7 : i.nodeType === i.PROCESSING_INSTRUCTION_NODE ? e += i.length + 2 : e += i.length
        }(t, !1), t.style.whiteSpace = "nowrap"; else {
          var o = [];
          n.forEach((function (t) {
            t.start > r && o.push({start: t.start - r, end: t.end - r})
          })), n = o
        }
      }
      
      function h(t, n, e) {
        var i = (n = n.trim()).split(" ").length;
        if (n = "".concat(n, " "), i < 2) return n;
        var r = document.createElement("span");
        r.innerHTML = n, t.appendChild(r);
        var o = r.offsetWidth;
        r.parentNode.removeChild(r);
        var a = Math.floor((e - o) / (i - 1));
        r.style.wordSpacing = "".concat(a, "px"), r.setAttribute("data-owner", "balance-text-justify");
        var s = document.createElement("div");
        return s.appendChild(r), s.innerHTML
      }
      
      function f(n, e) {
        var i, r = /([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;
        if (!t) for (t = [], i = r.exec(n); null !== i;) c(i.index) || t.push(i.index), i = r.exec(n);
        return -1 !== t.indexOf(e)
      }
      
      function d(t, n) {
        return 0 === n || n === t.length || f(t, n - 1) && !f(t, n)
      }
      
      function p(t, n, e, i, r, o, a) {
        var s;
        if (n && "string" == typeof n) for (; ;) {
          for (; !d(n, o);) o += r;
          if (t.innerHTML = n.substr(0, o), s = t.offsetWidth, r < 0) {
            if (s <= i || s <= 0 || 0 === o) break
          } else if (i <= s || e <= s || o === n.length) break;
          o += r
        }
        a.index = o, a.width = s
      }
      
      function g(t) {
        return t ? "string" == typeof t ? document.querySelectorAll(t) : t.tagName && t.querySelectorAll ? [t] : t : []
      }
      
      function m(n) {
        s(g(n), (function (n) {
          !function (t) {
            var n = t.querySelectorAll('br[data-owner="balance-text-hyphen"]');
            s(n, (function (t) {
              t.outerHTML = ""
            })), s(n = t.querySelectorAll('br[data-owner="balance-text"]'), (function (t) {
              t.outerHTML = " "
            }));
            var e = t.querySelectorAll('span[data-owner="balance-text-softhyphen"]');
            if (e.length > 0 && s(e, (function (t) {
              var n = document.createTextNode("­");
              t.parentNode.insertBefore(n, t), t.parentNode.removeChild(t)
            })), (e = t.querySelectorAll('span[data-owner="balance-text-justify"]')).length > 0) {
              var i = "";
              s(e, (function (t) {
                i += t.textContent, t.parentNode.removeChild(t)
              })), t.innerHTML = i
            }
          }(n);
          var e = n.style.whiteSpace, i = n.style.float, r = n.style.display, o = n.style.position,
            a = n.style.lineHeight;
          n.style.lineHeight = "normal";
          var c = n.offsetWidth, f = n.offsetHeight;
          n.style.whiteSpace = "nowrap", n.style.float = "none", n.style.display = "inline", n.style.position = "static";
          var d = n.offsetWidth, g = n.offsetHeight, m = "pre-wrap" === e ? 0 : function (t, n) {
            var e = document.createElement("div");
            e.style.display = "block", e.style.position = "absolute", e.style.bottom = 0, e.style.right = 0, e.style.width = 0, e.style.height = 0, e.style.margin = 0, e.style.padding = 0, e.style.visibility = "hidden", e.style.overflow = "hidden";
            var i = document.createElement("span");
            i.style.fontSize = "2000px", i.innerHTML = "&nbsp;", e.appendChild(i), t.appendChild(e);
            var r = i.getBoundingClientRect();
            return e.parentNode.removeChild(e), n / (r.height / r.width)
          }(n, g);
          if (c > 0 && d > c && d < 5e3) {
            for (var v, y, _, w, b, x = n.innerHTML, T = "", M = "", k = function (t) {
              return "justify" === (t.currentStyle || window.getComputedStyle(t, null)).textAlign
            }(n), C = Math.round(f / g), S = 0; C > 1;) t = null, l(n, e, S), p(n, x, c, v = Math.round((d + m) / C - m), -1, Math.round((x.length + 1) / C) - 1, y = new u), _ = new u, p(n, x, c, v, 1, y.index, _), y.reset(), p(n, x, c, v, -1, _.index, y), w = 0 === y.index ? _.index : c < _.width || y.index === _.index || Math.abs(v - y.width) < Math.abs(_.width - v) ? y.index : _.index, M = x.substr(0, w).replace(/\s$/, ""), (b = Boolean(M.match(/\u00ad$/))) && (M = M.replace(/\u00ad$/, '<span data-owner="balance-text-softhyphen">-</span>')), k ? T += h(n, M, c) : (T += M, T += b || Boolean(M.match(/(-|\u2014|\u2013)$/)) ? '<br data-owner="balance-text-hyphen" />' : '<br data-owner="balance-text" />'), x = x.substr(w), S = w, C--, n.innerHTML = x, d = n.offsetWidth;
            n.innerHTML = k ? T + h(n, x, c) : T + x
          }
          n.style.whiteSpace = e, n.style.float = i, n.style.display = r, n.style.position = o, n.style.lineHeight = a
        }))
      }
      
      function v() {
        var t = g(i.sel.join(","));
        m(Array.prototype.concat.apply(i.el, t))
      }
      
      function y() {
        var t;
        r || (t = v, "loading" !== document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", (function () {
          "loading" !== document.readyState && t()
        })), window.addEventListener("load", v), window.addEventListener("resize", function (t, n, e) {
          for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++) r[o - 3] = arguments[o];
          var a;
          return function () {
            var i = this;
            a ? clearTimeout(a) : e && t.apply(i, r), a = setTimeout((function () {
              e || t.apply(i, r), a = null
            }), n || 100)
          }
        }(v)), r = !0)
      }
      
      function _(t, n) {
        t ? n && !0 === n.watch ? function (t) {
          "string" == typeof t ? i.sel.push(t) : s(g(t), (function (t) {
            i.el.push(t)
          })), y(), v()
        }(t) : n && !1 === n.watch ? function (t) {
          "string" == typeof t ? i.sel = i.sel.filter((function (n) {
            return n !== t
          })) : (t = g(t), i.el = i.el.filter((function (n) {
            return -1 === t.indexOf(n)
          })))
        }(t) : m(t) : o || (i.sel.push(".balance-text"), y(), o = !0)
      }
      
      return u.prototype.reset = function () {
        this.index = 0, this.width = 0
      }, _.updateWatched = v, function () {
        if ("undefined" == typeof window) return !1;
        var t = document.documentElement.style;
        return t.textWrap || t.WebkitTextWrap || t.MozTextWrap || t.MsTextWrap
      }() ? (a.updateWatched = a, a) : _
    }) ? i.apply(n, r) : i) || (t.exports = o)
  },//42
  function (t, n, e) {
    !function () {
      function n(t, n) {
        document.addEventListener ? t.addEventListener("scroll", n, !1) : t.attachEvent("scroll", n)
      }
      
      function e(t) {
        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
      }
      
      function i(t, n) {
        t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + n + ";"
      }
      
      function r(t) {
        var n = t.a.offsetWidth, e = n + 100;
        return t.f.style.width = e + "px", t.c.scrollLeft = e, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== n && (t.g = n, !0)
      }
      
      function o(t, e) {
        function i() {
          var t = o;
          r(t) && t.a.parentNode && e(t.g)
        }
        
        var o = t;
        n(t.b, i), n(t.c, i), r(t)
      }
      
      function a(t, n) {
        var e = n || {};
        this.family = t, this.style = e.style || "normal", this.weight = e.weight || "normal", this.stretch = e.stretch || "normal"
      }
      
      var s = null, u = null, c = null, l = null;
      
      function h() {
        return null === l && (l = !!document.fonts), l
      }
      
      function f() {
        if (null === c) {
          var t = document.createElement("div");
          try {
            t.style.font = "condensed 100px sans-serif"
          } catch (t) {
          }
          c = "" !== t.style.font
        }
        return c
      }
      
      function d(t, n) {
        return [t.style, t.weight, f() ? t.stretch : "", "100px", n].join(" ")
      }
      
      a.prototype.load = function (t, n) {
        var r = this, a = t || "BESbswy", c = 0, l = n || 3e3, f = (new Date).getTime();
        return new Promise((function (t, n) {
          if (h() && !function () {
            if (null === u) if (h() && /Apple/.test(window.navigator.vendor)) {
              var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
              u = !!t && 603 > parseInt(t[1], 10)
            } else u = !1;
            return u
          }()) {
            var p = new Promise((function (t, n) {
              !function e() {
                (new Date).getTime() - f >= l ? n(Error(l + "ms timeout exceeded")) : document.fonts.load(d(r, '"' + r.family + '"'), a).then((function (n) {
                  1 <= n.length ? t() : setTimeout(e, 25)
                }), n)
              }()
            })), g = new Promise((function (t, n) {
              c = setTimeout((function () {
                n(Error(l + "ms timeout exceeded"))
              }), l)
            }));
            Promise.race([g, p]).then((function () {
              clearTimeout(c), t(r)
            }), n)
          } else !function (t) {
            document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", (function n() {
              document.removeEventListener("DOMContentLoaded", n), t()
            })) : document.attachEvent("onreadystatechange", (function n() {
              "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", n), t())
            }))
          }((function () {
            function u() {
              var n;
              (n = -1 != m && -1 != v || -1 != m && -1 != y || -1 != v && -1 != y) && ((n = m != v && m != y && v != y) || (null === s && (n = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), s = !!n && (536 > parseInt(n[1], 10) || 536 === parseInt(n[1], 10) && 11 >= parseInt(n[2], 10))), n = s && (m == _ && v == _ && y == _ || m == w && v == w && y == w || m == b && v == b && y == b)), n = !n), n && (x.parentNode && x.parentNode.removeChild(x), clearTimeout(c), t(r))
            }
            
            var h = new e(a), p = new e(a), g = new e(a), m = -1, v = -1, y = -1, _ = -1, w = -1, b = -1,
              x = document.createElement("div");
            x.dir = "ltr", i(h, d(r, "sans-serif")), i(p, d(r, "serif")), i(g, d(r, "monospace")), x.appendChild(h.a), x.appendChild(p.a), x.appendChild(g.a), document.body.appendChild(x), _ = h.a.offsetWidth, w = p.a.offsetWidth, b = g.a.offsetWidth, function t() {
              if ((new Date).getTime() - f >= l) x.parentNode && x.parentNode.removeChild(x), n(Error(l + "ms timeout exceeded")); else {
                var e = document.hidden;
                !0 !== e && void 0 !== e || (m = h.a.offsetWidth, v = p.a.offsetWidth, y = g.a.offsetWidth, u()), c = setTimeout(t, 50)
              }
            }(), o(h, (function (t) {
              m = t, u()
            })), i(h, d(r, '"' + r.family + '",sans-serif')), o(p, (function (t) {
              v = t, u()
            })), i(p, d(r, '"' + r.family + '",serif')), o(g, (function (t) {
              y = t, u()
            })), i(g, d(r, '"' + r.family + '",monospace'))
          }))
        }))
      }, t.exports = a
    }()
  },//43
  function (t, n) {
    t.exports = function (t) {
      return $('.block[data-block-type="'.concat(t, '"]')).length > 0
    }
  },//44
  function (t, n) {
    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }
    
    var i = window.TWP || {}, r = window.wp_pb || {};
    if (i.Coral = window.TWP.Coral || {}, r.EventController = window.EventController || a, a) {
      var o = new a;
      r.report = function (t, n, e) {
        return o.report("".concat(t, ".").concat(n), e)
      }, r.register = function (t, n, e, i) {
        var r = {};
        r["".concat(t, ".").concat(n)] = e, o.register(r, i)
      }
    }
    
    function a(t) {
      this.debug = t || function () {
      }, this.events = {}, this._fireEvent = function (t, n) {
        var e = "app", i = t, r = t.indexOf(".");
        -1 != r && (e = t.substring(0, r), i = t.substring(r + 1)), this.debug("Fired ".concat(e, ".").concat(i, ":").concat(n));
        var o = this.events[e];
        if (o) {
          o._called = !0;
          for (var a = o._listeners, s = 0; s < a.length; s++) {
            var u = a[s];
            try {
              u.callback.call(u.context, n, e, i)
            } catch (t) {
            }
          }
          var c = o[i];
          if (c) {
            c._called = !0;
            for (var l = c._listeners, h = 0; h < l.length; h++) {
              var f = l[h];
              try {
                f.callback.call(f.context, n, e, i)
              } catch (t) {
              }
            }
          } else this.events[e][i] = {_listeners: [], _called: !0}
        } else this.events[e] = {_listeners: [], _called: !0}, this.events[e][i] = {_listeners: [], _called: !0}
      }
    }
    
    !function (n) {
      i.Coral.COMMENT_DATA_WRAPPER = "coral-data-wrapper", i.Coral.COMMENT_EMBED_WRAPPER = "coral_talk_embed", i.Coral.JWT = "coral_jwt", i.Coral.containers = {}, i.Coral.debug = window.location.href.indexOf("debug=true", 0) > 0;
      var e = i.Coral.debug;
      i.Coral.events = {
        "mutation.CreateLikeAction.success": {eVar26: "comments_like", event: "event80"},
        "mutation.PostFlag.success": {eVar26: "comments_report", event: "event80"},
        "plugin.talk-plugin-wapo-permalink.copySuccess": {eVar26: "comments_link", event: "event80"},
        "mutation.IgnoreUser.success": {eVar26: "comments_ignore", event: "event80"},
        DNE1: {eVar26: "comments_respect", event: "event80"},
        "query.CoralEmbedStream_Embed.ready": {eVar26: "comments loaded", event: "event29"},
        "query.CoralEmbedStream_Embed.fetchMore.CoralEmbedStream_LoadMoreComments.success": {
          eVar26: function (t) {
            var n = t.detail.variables && t.detail.variables;
            return n.parent_id && "" != n.parent_id ? "view more replies" : "view more comments"
          }, event: "event5"
        },
        "mutation.PostComment.success": {
          eVar26: function (t) {
            var n = t.detail.variables && t.detail.variables.input;
            return n.parent_id && "" != n.parent_id ? "reply" : "new_thread"
          }, event: "event3"
        },
        "ui.AllCommentsPane.viewNewComments": {eVar26: "view new comments", event: "event5"}
      };
      var o = function () {
        try {
          !function () {
            var t = {
              pageName: s.pageName,
              channel: s.channel,
              eVar1: s.eVar1,
              prop1: s.prop1,
              eVar2: s.eVar2,
              prop2: s.prop2,
              prop3: s.prop3,
              prop4: s.prop4,
              prop5: s.prop5,
              eVar8: s.eVar8,
              eVar11: s.eVar11,
              prop12: s.prop12,
              eVar17: s.eVar17,
              prop25: s.prop25,
              prop33: s.prop33,
              eVar33: s.eVar33,
              eVar58: s.eVar58,
              prop58: s.prop58,
              eVar59: s.eVar59,
              prop59: s.prop59,
              eVar62: s.eVar62,
              eVar65: s.eVar65,
              prop65: s.prop65,
              eVar70: "coral",
              prop70: "coral"
            };
            for (var n in i.Coral.events) i.Coral.events.hasOwnProperty(n) && n.indexOf("DNE") < 0 && document.addEventListener(n, (function (n) {
              if ("function" == typeof window.sendDataToOmniture) try {
                var r = n.type,
                  o = "function" == typeof i.Coral.events[r].eVar26 ? i.Coral.events[r].eVar26(n) : i.Coral.events[r].eVar26;
                window.sendDataToOmniture("coral.".concat(r), i.Coral.events[r].event, Object.assign({}, t, {eVar26: o})), e && window.console && console.log && console.log("OMNITURE: ".concat(i.Coral.events[r].event, " ").concat(o))
              } catch (t) {
              }
            }), !1)
          }()
        } catch (t) {
        }
      }, a = {
        coralEmbedWrapper: document.getElementById(i.Coral.COMMENT_EMBED_WRAPPER),
        dataWrapper: document.getElementById(i.Coral.COMMENT_DATA_WRAPPER),
        jwt: localStorage.getItem(i.Coral.JWT) || "",
        isFeaturedExplainerSeen: !!+localStorage.getItem("isFeaturedExplainerSeen"),
        isOffTopicHidden: "true" == localStorage.getItem("isOffTopicHidden"),
        init: function () {
          i.Coral.containers.coral_container = {};
          for (var t = 0; t < a.dataWrapper.attributes.length; t++) {
            var n = a.dataWrapper.attributes[t];
            i.Coral.containers.coral_container[n.name] = n.value
          }
          e && window.console && console.log && console.log({
            talkController: a,
            Coral: i.Coral.containers.coral_container
          });
          var o = i.Coral.containers.coral_container["data-plugin-config"].replace(/'/g, '"');
          i.Coral.containers.coral_container["parsed-plugin-config"] = JSON.parse(o), i.Coral.containers.coral_container["parsed-plugin-config"].isFeaturedExplainerSeen = a.isFeaturedExplainerSeen, e && window.console && console.log && console.log("pb: isFeaturedExplainerSeeen", a.isFeaturedExplainerSeen), i.Coral.containers.coral_container["parsed-plugin-config"].isOffTopicHidden = a.isOffTopicHidden, i.Coral.containers.coral_container["parsed-plugin-config"].permalink_base = i.Coral.containers.coral_container["data-asset-url"] || window.location.href, e && window.console && console.log && console.log("pb: isOffTopicHidden", a.isOffTopicHidden), e && window.console && console.log && console.log("pb: parsed plugin_config", i.Coral.containers.coral_container["parsed-plugin-config"]);
          var s = document.cookie.match(/wapo_secure_login_id=([^;]+)/) ? RegExp.$1 : "",
            u = document.cookie.match(/wapo_groups=([^;]+commenting_verified)/) ? RegExp.$1 : "";
          r.register("comments_coral", "auth_response", a.showAuthStatusMessage), s.length && u.length ? a.checkAuthStatus() : (s.length && !u.length ? r.report("comments_coral", "auth_response", {status: "incomplete"}) : s.length || r.report("comments_coral", "auth_response", {status: "excluded"}), a.initStream({token: ""}))
        },
        initStream: function (t) {
          var r = document.getElementById(i.Coral.COMMENT_EMBED_WRAPPER);
          document.addEventListener("query.CoralEmbedStream_Embed.ready", (function () {
            document.addEventListener("wp.stream.commentCount", (function (t) {
              var i = t.detail.totalCommentCount, r = void 0 === i ? 0 : i;
              e && window.console && console.log && console.log("pb:wp.stream.commentCount", r), function (t, n) {
                if (t >= 1e3 && n.hasClass("format_short")) {
                  var e = (Math.floor(t / 1e3 * 10) / 10).toFixed(1);
                  n.html("".concat(e, "k"))
                } else n.html(t)
              }(r, n(".talk_comment_count"))
            }))
          })), window.Coral.Talk.render(r, {
            asset_url: i.Coral.containers.coral_container["data-asset-url"],
            auth_token: t.token,
            events: function (t) {
              var n, r, o, a;
              t.once("query.CoralEmbedStream_Embed.ready", (function (t) {
                var n = new CustomEvent("query.CoralEmbedStream_Embed.ready", {detail: t});
                document.dispatchEvent(n)
              })), t.onAny((function (t, n) {
                if (e && window.console && console.log && console.log(t, n), "action.TALK_FEATURED_COMMENTS_ACTIONS_DISMISS_EXPLAINER" === t && localStorage.setItem("isFeaturedExplainerSeen", 1), "action.OFFTOPIC_TOGGLE_CHECKBOX" === t) {
                  var r = "true" == localStorage.getItem("isOffTopicHidden");
                  localStorage.setItem("isOffTopicHidden", !r)
                }
                if (t in i.Coral.events && ("query.CoralEmbedStream_Embed.ready" !== t || "action.OFFTOPIC_TOGGLE_CHECKBOX" !== t || "wp.stream.commentCount" !== t || "action.TALK_FEATURED_COMMENTS_ACTIONS_DISMISS_EXPLAINER" !== t)) {
                  var o = new CustomEvent(t, {detail: n});
                  document.dispatchEvent(o)
                }
              })), t.on("wp.stream.commentCount", (n = function (t) {
                document.dispatchEvent(new CustomEvent("wp.stream.commentCount", {detail: {totalCommentCount: t}}))
              }, r = 400, function () {
                var t = this, e = arguments, i = function () {
                  a = null, o || n.apply(t, e)
                }, s = o && !a;
                clearTimeout(a), a = setTimeout(i, r), s && n.apply(t, e)
              }))
            },
            lazy: !0,
            plugin_config: i.Coral.containers.coral_container["parsed-plugin-config"],
            talk: i.Coral.containers.coral_container["data-talk-url"]
          })
        },
        resolveAuthResponse: function (t) {
          var n = t.profile.display_name;
          return localStorage.setItem("coral_jwt", t.token), r.report("comments_coral", "auth_response", {
            status: "valid",
            display_name: n
          }), t
        },
        rejectAuthResponse: function (t, n, e) {
          return r.report("comments_coral", "auth_response", {status: "excluded"}), {token: "", error: e}
        },
        checkAuthStatus: function () {
          var t = "".concat(i.Coral.containers.coral_container["data-validate-url"], "?jwt=").concat(a.jwt);
          fetch(t, {method: "GET", credentials: "include", mode: "cors", cache: "default"}).then((function (t) {
            if (t.ok) return t.json();
            throw new Error
          })).then(a.resolveAuthResponse).then(a.initStream).catch(a.rejectAuthResponse)
        },
        showAuthStatusMessage: function (t) {
          var n = a.authStatusMessages[t.status](t);
          document.getElementById("coral_talk_auth_status_target").insertAdjacentHTML("afterbegin", n)
        },
        authStatusMessages: {
          valid: function (t) {
            var n = decodeURIComponent(t.display_name);
            return '<div id="talk_welcome">Posting as <span class="talk_display_name">'.concat(n, "</span>.</div>")
          }, incomplete: function () {
            var t = window.TWP.signin.profileUrl, n = encodeURIComponent(window.location.href.split("?")[0]);
            return '\n          <div id="talk_incomplete">\n            <div class="header">Your profile is incomplete</div>\n            <div>Before you can contribute to our community, please visit your <a class="validate" href="'.concat(t).concat(n, '&commenting=1">Profile page</a> in order to complete your profile.</div>\n          </div>')
          }, excluded: function () {
            var t = i.signin.loginurl_page, n = encodeURIComponent(window.location.href);
            return '<a class="sign-in" id="talk_not_signed_in" href="'.concat(t).concat(n, '">Sign in to join the conversation</a>')
          }
        }
      };
      t.exports.coralInitEventMonitors = o, t.exports.coratTalkControllerInit = a.init
    }(jQuery), a.prototype.report = function (t, n, e) {
      if (e) this._fireEvent(t, n); else {
        var i = this;
        setTimeout((function () {
          i._fireEvent(t, n)
        }), 0)
      }
    }, a.prototype.register = function (t, n) {
      var i = this.events;
      for (var r in t) {
        var o = "app", a = r;
        if (-1 != r.indexOf(".")) {
          var s = r.split(".");
          o = s[0], a = s[1]
        }
        "object" != e(i[o]) && (i[o] = {_listeners: [], _called: !1}), "*" == a ? i[o]._listeners.push({
          callback: t[r],
          context: n
        }) : ("object" != e(i[o][a]) && (i[o][a] = {
          _listeners: [],
          _called: !1
        }), i[o][a]._listeners.push({callback: t[r], context: n}))
      }
    }
  },//45
  function (t, n, e) {
    t.exports = function (t) {
      function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
      }
      
      var e = {};
      return n.m = t, n.c = e, n.p = "", n(0)
    }([function (t, n, e) {
      "use strict";
      var i = e(1).isInBrowser, r = new (e(2))(i ? document.body : null);
      r.setStateFromDOM(null), r.listenToDOM(), i && (window.scrollMonitor = r), t.exports = r
    }, function (t, n) {
      "use strict";
      n.VISIBILITYCHANGE = "visibilityChange", n.ENTERVIEWPORT = "enterViewport", n.FULLYENTERVIEWPORT = "fullyEnterViewport", n.EXITVIEWPORT = "exitViewport", n.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", n.LOCATIONCHANGE = "locationChange", n.STATECHANGE = "stateChange", n.eventTypes = [n.VISIBILITYCHANGE, n.ENTERVIEWPORT, n.FULLYENTERVIEWPORT, n.EXITVIEWPORT, n.PARTIALLYEXITVIEWPORT, n.LOCATIONCHANGE, n.STATECHANGE], n.isOnServer = "undefined" == typeof window, n.isInBrowser = !n.isOnServer, n.defaultOffsets = {
        top: 0,
        bottom: 0
      }
    }, function (t, n, e) {
      "use strict";
      
      function i(t) {
        return s ? 0 : t === document.body ? window.innerHeight || document.documentElement.clientHeight : t.clientHeight
      }
      
      function r(t) {
        return s ? 0 : t === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : t.scrollHeight
      }
      
      function o(t) {
        return s ? 0 : t === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop
      }
      
      var a = e(1), s = a.isOnServer, u = a.isInBrowser, c = a.eventTypes, l = e(3), h = !1;
      if (u) try {
        var f = Object.defineProperty({}, "passive", {
          get: function () {
            h = !0
          }
        });
        window.addEventListener("test", null, f)
      } catch (t) {
      }
      var d = !!h && {capture: !1, passive: !0}, p = function () {
        function t(n, e) {
          !function (t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var a, s, u, l = this;
          this.item = n, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = r(n), this.viewportHeight = i(n), this.DOMListener = function () {
            t.prototype.DOMListener.apply(l, arguments)
          }, this.eventTypes = c, e && (this.containerWatcher = e.create(n)), this.update = function () {
            (function () {
              if (l.viewportTop = o(n), l.viewportBottom = l.viewportTop + l.viewportHeight, l.documentHeight = r(n), l.documentHeight !== a) {
                for (s = l.watchers.length; s--;) l.watchers[s].recalculateLocation();
                a = l.documentHeight
              }
            })(), function () {
              for (u = l.watchers.length; u--;) l.watchers[u].update();
              for (u = l.watchers.length; u--;) l.watchers[u].triggerCallbacks()
            }()
          }, this.recalculateLocations = function () {
            this.documentHeight = 0, this.update()
          }
        }
        
        return t.prototype.listenToDOM = function () {
          u && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener, d) : this.item.addEventListener("scroll", this.DOMListener, d), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function () {
            window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener, d), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener, d), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener))
          })
        }, t.prototype.destroy = function () {
        }, t.prototype.DOMListener = function (t) {
          this.setStateFromDOM(t)
        }, t.prototype.setStateFromDOM = function (t) {
          var n = o(this.item), e = i(this.item), a = r(this.item);
          this.setState(n, e, a, t)
        }, t.prototype.setState = function (t, n, e, i) {
          var r = n !== this.viewportHeight || e !== this.contentHeight;
          if (this.latestEvent = i, this.viewportTop = t, this.viewportHeight = n, this.viewportBottom = t + n, this.contentHeight = e, r) for (var o = this.watchers.length; o--;) this.watchers[o].recalculateLocation();
          this.updateAndTriggerWatchers(i)
        }, t.prototype.updateAndTriggerWatchers = function (t) {
          for (var n = this.watchers.length; n--;) this.watchers[n].update();
          for (n = this.watchers.length; n--;) this.watchers[n].triggerCallbacks(t)
        }, t.prototype.createCustomContainer = function () {
          return new t
        }, t.prototype.createContainer = function (n) {
          "string" == typeof n ? n = document.querySelector(n) : n && n.length > 0 && (n = n[0]);
          var e = new t(n, this);
          return e.setStateFromDOM(), e.listenToDOM(), e
        }, t.prototype.create = function (t, n) {
          "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);
          var e = new l(this, t, n);
          return this.watchers.push(e), e
        }, t.prototype.beget = function (t, n) {
          return this.create(t, n)
        }, t
      }();
      t.exports = p
    }, function (t, n, e) {
      "use strict";
      
      function i(t, n, e) {
        function i(t, n) {
          if (0 !== t.length) for (v = t.length; v--;) (y = t[v]).callback.call(_, n, _), y.isOne && t.splice(v, 1)
        }
        
        var r, p, g, m, v, y, _ = this;
        this.watchItem = n, this.container = t, this.offsets = e ? e === +e ? {top: e, bottom: e} : {
          top: e.top || d.top,
          bottom: e.bottom || d.bottom
        } : d, this.callbacks = {};
        for (var w = 0, b = f.length; w < b; w++) _.callbacks[f[w]] = [];
        this.locked = !1, this.triggerCallbacks = function (t) {
          switch (this.isInViewport && !r && i(this.callbacks[a], t), this.isFullyInViewport && !p && i(this.callbacks[s], t), this.isAboveViewport !== g && this.isBelowViewport !== m && (i(this.callbacks[o], t), p || this.isFullyInViewport || (i(this.callbacks[s], t), i(this.callbacks[c], t)), r || this.isInViewport || (i(this.callbacks[a], t), i(this.callbacks[u], t))), !this.isFullyInViewport && p && i(this.callbacks[c], t), !this.isInViewport && r && i(this.callbacks[u], t), this.isInViewport !== r && i(this.callbacks[o], t), !0) {
            case r !== this.isInViewport:
            case p !== this.isFullyInViewport:
            case g !== this.isAboveViewport:
            case m !== this.isBelowViewport:
              i(this.callbacks[h], t)
          }
          r = this.isInViewport, p = this.isFullyInViewport, g = this.isAboveViewport, m = this.isBelowViewport
        }, this.recalculateLocation = function () {
          if (!this.locked) {
            var t = this.top, n = this.bottom;
            if (this.watchItem.nodeName) {
              var e = this.watchItem.style.display;
              "none" === e && (this.watchItem.style.display = "");
              for (var r = 0, o = this.container; o.containerWatcher;) r += o.containerWatcher.top - o.containerWatcher.container.viewportTop, o = o.containerWatcher.container;
              var a = this.watchItem.getBoundingClientRect();
              this.top = a.top + this.container.viewportTop - r, this.bottom = a.bottom + this.container.viewportTop - r, "none" === e && (this.watchItem.style.display = e)
            } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
            this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === n || this.top === t && this.bottom === n || i(this.callbacks[l], null)
          }
        }, this.recalculateLocation(), this.update(), r = this.isInViewport, p = this.isFullyInViewport, g = this.isAboveViewport, m = this.isBelowViewport
      }
      
      var r = e(1), o = r.VISIBILITYCHANGE, a = r.ENTERVIEWPORT, s = r.FULLYENTERVIEWPORT, u = r.EXITVIEWPORT,
        c = r.PARTIALLYEXITVIEWPORT, l = r.LOCATIONCHANGE, h = r.STATECHANGE, f = r.eventTypes, d = r.defaultOffsets;
      i.prototype = {
        on: function (t, n, e) {
          switch (!0) {
            case t === o && !this.isInViewport && this.isAboveViewport:
            case t === a && this.isInViewport:
            case t === s && this.isFullyInViewport:
            case t === u && this.isAboveViewport && !this.isInViewport:
            case t === c && this.isInViewport && this.isAboveViewport:
              if (n.call(this, this.container.latestEvent, this), e) return
          }
          if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + f.join(", "));
          this.callbacks[t].push({callback: n, isOne: e || !1})
        }, off: function (t, n) {
          if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + f.join(", "));
          for (var e, i = 0; e = this.callbacks[t][i]; i++) if (e.callback === n) {
            this.callbacks[t].splice(i, 1);
            break
          }
        }, one: function (t, n) {
          this.on(t, n, !0)
        }, recalculateSize: function () {
          this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
        }, update: function () {
          this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport
        }, destroy: function () {
          var t = this.container.watchers.indexOf(this);
          this.container.watchers.splice(t, 1);
          for (var n = 0, e = f.length; n < e; n++) this.callbacks[f[n]].length = 0
        }, lock: function () {
          this.locked = !0
        }, unlock: function () {
          this.locked = !1
        }
      };
      for (var p = function (t) {
        return function (n, e) {
          this.on.call(this, t, n, e)
        }
      }, g = 0, m = f.length; g < m; g++) {
        var v = f[g];
        i.prototype[v] = p(v)
      }
      t.exports = i
    }])
  },//46
  function (t) {
    t.exports = JSON.parse('[{"date":"01-22-2020","count":1},{"date":"01-23-2020","count":1},{"date":"01-24-2020","count":2},{"date":"01-25-2020","count":2},{"date":"01-26-2020","count":5},{"date":"01-27-2020","count":5},{"date":"01-28-2020","count":5},{"date":"01-29-2020","count":5},{"date":"01-30-2020","count":5},{"date":"01-31-2020","count":6},{"date":"02-01-2020","count":8},{"date":"02-02-2020","count":8},{"date":"02-03-2020","count":11},{"date":"02-04-2020","count":11},{"date":"02-05-2020","count":12},{"date":"02-06-2020","count":12},{"date":"02-07-2020","count":12},{"date":"02-08-2020","count":12},{"date":"02-09-2020","count":12},{"date":"02-10-2020","count":12},{"date":"02-11-2020","count":13},{"date":"02-12-2020","count":13},{"date":"02-13-2020","count":15},{"date":"02-14-2020","count":15},{"date":"02-15-2020","count":15},{"date":"02-16-2020","count":15},{"date":"02-17-2020","count":15},{"date":"02-18-2020","count":15},{"date":"02-19-2020","count":15},{"date":"02-20-2020","count":15},{"date":"02-21-2020","count":35},{"date":"02-22-2020","count":35},{"date":"02-23-2020","count":35},{"date":"02-24-2020","count":53},{"date":"02-25-2020","count":53},{"date":"02-26-2020","count":59},{"date":"02-27-2020","count":60},{"date":"02-28-2020","count":62},{"date":"02-29-2020","count":70},{"date":"03-01-2020","count":76},{"date":"03-02-2020","count":101},{"date":"03-03-2020","count":122},{"date":"03-04-2020","count":153},{"date":"03-05-2020","count":221},{"date":"03-06-2020","count":278},{"date":"03-07-2020","count":417},{"date":"03-08-2020","count":537},{"date":"03-09-2020","count":605},{"date":"03-10-2020","count":959},{"date":"03-11-2020","count":1281},{"date":"03-12-2020","count":1663},{"date":"03-13-2020","count":2179}]')
  },//47
  function (t, n, e) {
    var i = Object.assign({}, e(1), e(13), e(8), e(18));
    
    function r() {
      return this.width = Math.min(this.maxWidth, this.wrapper.node().offsetWidth) - this.margin.left - this.margin.right, this.height = this.width * this.aspect - this.margin.top - this.margin.bottom, this.svg.attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom), this.g.attr("transform", "translate(".concat([this.margin.left, this.margin.top], ")")), this.x.range([0, this.width]), this.y.range([this.height, 0]), this.area.attr("d", this.areaGenerator), this
    }
    
    t.exports = {
      init: function (t, n, e) {
        var o = this;
        return this.wrapper = i.selectAll(t), this.data = n, this.lastDatum = this.data[this.data.length - 1], this.draw = r, this.margin = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, this.aspect = e && e.aspect ? e.aspect : .5, this.maxWidth = e && e.maxWidth ? e.maxWidth : 300, this.width = 0, this.height = 0, this.x = i.scaleTime().domain(i.extent(this.data, (function (t) {
          return t.datetime
        }))), this.y = i.scaleLinear().domain([0, this.lastDatum.count]), this.areaGenerator = i.area().x((function (t) {
          return o.x(t.datetime)
        })).y0((function (t) {
          return o.height
        })).y1((function (t) {
          return o.y(t.count)
        })), this.svg = this.wrapper.append("svg"), this.g = this.svg.append("g"), this.area = this.g.append("path").datum(this.data).attr("class", "area"), this
      }
    }
  },//48
  function (t, n, e) {
    var i = e(56).closest, r = Object.assign({}, e(1), e(57), e(23), e(13), e(8), e(18));
    
    function o() {
      var t, n = this;
      return this.width = this.wrapper.node().offsetWidth - this.margin.left - this.margin.right, this.height = ((t = n.width * n.aspect) > n.maxHeight ? n.maxHeight : t < n.minHeight ? n.minHeight : t) - n.margin.top - n.margin.bottom, this.x.range([0, this.width]), this.y.range([this.height, 0]), this.xAxisGenerator.tickValues(innerWidth < 500 ? [this.data[0].datetime, new Date(2020, 1, 15), this.lastDatum.datetime] : [this.data[0].datetime, new Date(2020, 1, 1), new Date(2020, 1, 15), new Date(2020, 2, 1), this.lastDatum.datetime]), this.yAxisGenerator.tickSize(this.width + 20), this.svg.attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom).on("mousemove", (function (t) {
        return n.mousemove()
      })).on("mouseout", (function (t) {
        return n.mouseout()
      })), this.g.attr("transform", "translate(".concat([this.margin.left, this.margin.top], ")")), this.yAxis.style("display", "block").attr("transform", "translate(".concat(this.width, ")")).call(this.yAxisGenerator), this.yAxis.selectAll(".tick text").attr("dx", (function (t, e, i) {
        return e === i.length - 1 ? n.topTickOffset : 0
      })), this.yAxis.selectAll(".tick line").attr("x2", (function (t, e, i) {
        return +r.select(i[e]).attr("x2") + (e === i.length - 1 ? n.topTickOffset : 0)
      })), this.xAxis.attr("transform", "translate(0, ".concat(this.height, ")")).call(this.xAxisGenerator), this.area.attr("d", this.areaGenerator), this.last.attr("transform", (function (t) {
        return "translate(".concat([n.x(t.datetime), n.y(t.count)], ")")
      })).selectAll("text").html(this.lastHtmlFormat), this
    }
    
    function a() {
      var t = this, n = i(this.data, this.x.invert(event.offsetX - this.margin.left), (function (t) {
        return t.datetime
      })), e = this.x(n.datetime);
      this.last.attr("transform", "translate(".concat([e, this.y(n.count)], ")")), this.lastValue.classed("hovered", (function (t) {
        return n.datetime !== t.datetime
      })).selectAll("text").html((function (e) {
        return n.datetime === e.datetime ? t.lastHtmlFormat(e) : t.numberFormat(n.count)
      })), this.hoverAxis.classed("show", 1).attr("transform", "translate(".concat([e, this.height], ")")), this.hoverAxisText.text(this.timeFormat(n.datetime)), this.xAxis.selectAll(".tick").style("opacity", (function (n) {
        return t.tickOpacity(Math.abs(t.x(n) - e))
      }))
    }
    
    function s() {
      var t = this;
      this.last.attr("transform", (function (n) {
        return "translate(".concat([t.x(n.datetime), t.y(n.count)], ")")
      })), this.lastValue.classed("hovered", 0).selectAll("text").html(this.lastHtmlFormat), this.hoverAxis.classed("show", 0), this.xAxis.selectAll(".tick").style("opacity", 1)
    }
    
    function u(t) {
      var n = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."][t.getMonth()],
        e = t.getDate();
      return "".concat(n, " ").concat(e)
    }
    
    t.exports = {
      init: function (t, n) {
        var e = this;
        return this.wrapper = r.select(t), this.data = n, this.lastDatum = this.data[this.data.length - 1], this.draw = o, this.mousemove = a, this.mouseout = s, this.timeFormat = u, this.numberFormat = function (t) {
          return r.format(",")(t)
        }, this.lastHtmlFormat = function (t) {
          return "<tspan>".concat(e.numberFormat(t.count), "</tspan><tspan y=18 x=0>cases</tspan>")
        }, this.margin = {
          left: 58,
          right: 50,
          top: 10,
          bottom: 35
        }, this.aspect = .5, this.width = 0, this.height = 0, this.minHeight = 300, this.maxHeight = 500, this.topTickOffset = 102, this.x = r.scaleTime().domain(r.extent(this.data, (function (t) {
          return t.datetime
        }))), this.y = r.scaleLinear().domain([0, this.lastDatum.count]), this.tickOpacity = r.scaleLinear().domain([50, 150]).range([0, 1]).clamp(!0), this.areaGenerator = r.area().x((function (t) {
          return e.x(t.datetime)
        })).y0((function (t) {
          return e.height
        })).y1((function (t) {
          return e.y(t.count)
        })), this.yAxisGenerator = r.axisLeft(this.y).tickValues(r.range(0, 3e3, 1e3)).tickFormat((function (t, n, i) {
          return n === i.length - 1 ? "".concat(e.numberFormat(t), " cases in the U.S.") : e.numberFormat(t)
        })), this.xAxisGenerator = r.axisBottom(this.x).tickFormat((function (t) {
          return e.timeFormat(t)
        })).tickSize(20), this.svg = this.wrapper.append("svg"), this.g = this.svg.append("g"), this.yAxis = this.g.append("g").attr("class", "axis y"), this.xAxis = this.g.append("g").attr("class", "axis x"), this.hoverAxis = this.g.append("g").attr("class", "axis hover").classed("show", 0), this.hoverAxis.append("line").attr("y2", 20), this.hoverAxisText = this.hoverAxis.append("text"), this.area = this.g.append("path").datum(this.data).attr("class", "area"), this.last = this.g.append("g").datum(this.lastDatum).attr("class", "last"), this.last.append("circle").attr("r", 4), this.lastValue = this.last.append("g").attr("class", "last-value"), this.lastValue.append("text").attr("class", "bg"), this.lastValue.append("text").attr("class", "fg"), this
      }
    }
  },//49
  function (t, n, e) {
    var i = new (e(7).init)("#simulation-two-people", {height: 50, ticksToRecover: 1 / 0});
    
    function r() {
      for (var t = 0; t < 5; t++) i.addDatum({
        pos: [10 + i.width * (t / 5), i.height / 2],
        speed: 0 === t ? 1.5 : .1,
        radius: 10,
        angle: 0 == t ? 0 : 180,
        collided: !1,
        infected: 0 === t,
        id: t
      })
    }
    
    i.replayButton.on("click", (function (t) {
      i.data = [], i.storage = [], i.ticks = 0, i.hideReplayButton(), r()
    })), t.exports = {
      simulation: i, init: r, tick: function () {
        i.ticks > 750 ? i.showReplayButton() : i.tick()
      }
    }
  },//50
  function (t, n, e) {
    var i = new (e(7).init)("#simulation-recovery-demo", {height: 50, ticksToRecover: 100});
    
    function r() {
      for (var t = 0; t < 5; t++) i.addDatum({
        pos: [10 + i.width * (t / 5), i.height / 2],
        speed: 0 === t ? 1.5 : .1,
        radius: 10,
        angle: 0 == t ? 0 : 180,
        collided: !1,
        infected: 0 === t,
        id: t
      })
    }
    
    i.replayButton.on("click", (function (t) {
      i.data = [], i.storage = [], i.ticks = 0, i.hideReplayButton(), r()
    })), t.exports = {
      simulation: i, init: r, tick: function () {
        i.ticks > 750 ? i.showReplayButton() : i.tick()
      }
    }
  },//51
  function (t, n, e) {
    var i = e(9), r = e(7), o = e(17), a = e(4), s = a.SPEED, u = a.RADIUS, c = a.STARTING_BALLS, l = a.TOTAL_TICKS,
      h = a.STARTING_STORAGE, f = a.GIF_MODE,
      d = new r.init("#simulation-basic", {resetText: "Спробувати заново", storage: JSON.parse(JSON.stringify(h))}),
      p = u(d.width, d.height), g = new o.init(f ? "#gif-basic" : "#summary-basic", d, {chart: !0, gifMode: f});
    
    function m() {
      for (var t = 0; t < c; t++) d.addDatum({
        pos: [0 === t ? d.width / 2 : i.randomUniform(20, d.width - 20)(), 0 === t ? d.height / 2 : i.randomUniform(20, d.height - 20)()],
        speed: s,
        radius: p,
        angle: i.randomUniform(0, 360)(),
        collided: !1,
        infected: 0 === t,
        id: t
      })
    }
    
    d.tick(), g.tick(), d.replayButton.on("click", (function (t) {
      d.data = [], d.storage = JSON.parse(JSON.stringify(h)), d.ticks = 0, d.hideReplayButton(), m()
    })), t.exports = {
      simulation: d, summary: g, init: m, tick: function () {
        d.ticks > l ? d.showReplayButton() : (d.tick(), g.tick())
      }
    }
  },//52
  function (t, n, e) {
    var i = Object.assign({}, e(9), e(13)), r = e(7), o = e(17), a = e(4), s = a.SPEED, u = a.RADIUS,
      c = a.STARTING_BALLS, l = a.TOTAL_TICKS, h = a.STARTING_STORAGE, f = a.GIF_MODE,
      d = new r.init("#simulation-quarantine", {
        resetText: "Спробувати заново",
        storage: JSON.parse(JSON.stringify(h))
      }), p = u(d.width, d.height),
      g = new o.init(f ? "#gif-quarantine" : "#summary-quarantine", d, {chart: !0, gifMode: f}),
      m = [[[.3 * d.width - 10, 0], [.3 * d.width - 10, d.height]], [[.3 * d.width + 10, 0], [.3 * d.width + 10, d.height]]],
      v = i.scaleLinear().domain([l / 8, l / 2]).range([0, d.height / 6]).clamp(!0);
    
    function y() {
      d.walls = m;
      for (var t = 0; t < c; t++) {
        var n = {
          pos: [0 === t ? d.width / 10 : i.randomUniform(20, d.width - 20)(), 0 === t ? d.height / 2 : i.randomUniform(20, d.height - 20)()],
          speed: s,
          radius: p,
          angle: i.randomUniform(0, 360)(),
          collided: !1,
          infected: 0 === t,
          id: t
        };
        n.pos[0] >= .3 * d.width - 20 - p && n.pos[0] <= .3 * d.width + 20 + p && (n.pos[0] = Math.max(p, n.pos[0] - 40)), d.addDatum(n)
      }
    }
    
    d.tick(), g.tick(), d.replayButton.on("click", (function (t) {
      d.data = [], d.storage = JSON.parse(JSON.stringify(h)), d.ticks = 0, d.hideReplayButton(), y()
    })), t.exports = {
      simulation: d, summary: g, init: y, tick: function () {
        d.ticks >= v.domain()[0] && d.ticks <= v.domain()[1] && (d.walls = function (t) {
          var n = v(t);
          return [[[.3 * d.width - 10, 0], [.3 * d.width - 10, .5 * d.height - n]], [[.3 * d.width + 10, 0], [.3 * d.width + 10, .5 * d.height - n]], [[.3 * d.width - 10, .5 * d.height - n], [.3 * d.width + 10, .5 * d.height - n]], [[.3 * d.width - 10, d.height], [.3 * d.width - 10, .5 * d.height + n]], [[.3 * d.width + 10, d.height], [.3 * d.width + 10, .5 * d.height + n]], [[.3 * d.width - 10, .5 * d.height + n], [.3 * d.width + 10, .5 * d.height + n]]]
        }(d.ticks)), d.ticks > l ? d.showReplayButton() : (d.tick(), g.tick())
      }
    }
  },//53
  function (t, n, e) {
    var i = e(9), r = e(7), o = e(17), a = e(4), s = a.SPEED, u = a.RADIUS, c = a.STARTING_BALLS, l = a.TOTAL_TICKS,
      h = a.STARTING_STORAGE, f = a.GIF_MODE, d = new r.init("#simulation-stop", {
        resetText: "Спробувати заново",
        transferEnergy: !1,
        storage: JSON.parse(JSON.stringify(h))
      }), p = u(d.width, d.height), g = new o.init(f ? "#gif-stop" : "#summary-stop", d, {chart: !0, gifMode: f});
    
    function m() {
      for (var t = 0; t < c; t++) d.addDatum({
        pos: [0 === t ? d.width / 2 : i.randomUniform(20, d.width - 20)(), 0 === t ? d.height / 2 : i.randomUniform(20, d.height - 20)()],
        speed: t % 4 == 0 ? s : 0,
        radius: p,
        angle: i.randomUniform(0, 360)(),
        collided: !1,
        infected: 0 === t,
        id: "stop-".concat(t)
      })
    }
    
    d.tick(), g.tick(), d.replayButton.on("click", (function (t) {
      d.data = [], d.storage = JSON.parse(JSON.stringify(h)), d.ticks = 0, d.hideReplayButton(), m()
    })), t.exports = {
      simulation: d, summary: g, init: m, tick: function () {
        d.ticks > l ? d.showReplayButton() : (d.tick(), g.tick())
      }
    }
  },//54
  function (t, n, e) {
    var i = e(9), r = e(7), o = e(17), a = e(4), s = a.SPEED, u = a.RADIUS, c = a.STARTING_BALLS, l = a.TOTAL_TICKS,
      h = a.STARTING_STORAGE, f = a.GIF_MODE, d = new r.init("#simulation-stop-more", {
        resetText: "Спробувати заново",
        transferEnergy: !1,
        storage: JSON.parse(JSON.stringify(h))
      }), p = u(d.width, d.height),
      g = new o.init(f ? "#gif-stop-more" : "#summary-stop-more", d, {chart: !0, gifMode: f});
    
    function m() {
      for (var t = 0; t < c; t++) d.addDatum({
        pos: [0 === t ? d.width / 2 : i.randomUniform(20, d.width - 20)(), 0 === t ? d.height / 2 : i.randomUniform(20, d.height - 20)()],
        speed: t % 8 == 0 ? s : 0,
        radius: p,
        angle: i.randomUniform(0, 360)(),
        collided: !1,
        infected: 0 === t,
        id: "stop-".concat(t)
      })
    }
    
    d.tick(), g.tick(), d.replayButton.on("click", (function (t) {
      d.data = [], d.storage = JSON.parse(JSON.stringify(h)), d.ticks = 0, d.hideReplayButton(), m()
    })), t.exports = {
      simulation: d, summary: g, init: m, tick: function () {
        d.ticks > l ? d.showReplayButton() : (d.tick(), g.tick())
      }
    }
  },//55
  function (t, n, e) {
    var i = Object.assign({}, e(1), e(13), e(8), e(18)), r = (e(24), e(4)), o = r.STARTING_BALLS, a = r.TOTAL_TICKS;
    e(31);
    
    function s(t) {
      return this.data = t, this
    }
    
    function u() {
      var t = this;
      return this.chart = this.wrapper.selectAll(".chart").data(this.data).enter().append("div").attr("class", "chart"), this.chart.append("div").attr("class", "title").text((function (t) {
        return t.name
      })), this.svg = this.chart.append("svg"), this.g = this.svg.append("g"), this.x = i.scaleLinear().domain([0, a]), this.y = i.scaleLinear().domain([0, o]), this.stackGenerator = i.stack().keys(["sick", "well", "recovered"]), this.areaGenerator = i.area().x((function (n) {
        return t.x(n.data.tick)
      })).y0((function (n) {
        return t.y(n[0])
      })).y1((function (n) {
        return t.y(n[1])
      })), this
    }
    
    function c() {
      
      var t = this;
      // console.log('function c', this.chart);
      // if(!this.chart.node()) return;
      return this.aspect = 9 / 16, this.width = this.chart.node().offsetWidth, this.height = this.width * this.aspect, this.svg.attr("width", this.width).attr("height", this.height), this.x.range([0, this.width]), this.y.range([this.height, 0]), this.areas = this.g.selectAll(".area").data((function (n, e) {
        return t.stackGenerator(t.data[e].data.storage)
      }), (function (t) {
        return t.key
      })), this.areas.exit().remove(), this.areas.enter().append("path").attr("class", (function (t) {
        return "area " + t.key
      })).merge(this.areas).attr("d", this.areaGenerator), this
      
      
    }
    
    function l() {
      this.countdownWrapper.classed("show-countdown", 1), this.wrapper.classed("loading", 1), this.countdownWidth = this.countdownWrapper.node().offsetWidth;
      var t = this.countdownWrapper.node().offsetHeight, n = this.wrapper.node().offsetHeight;
      return this.countdownWrapper.style("top", "".concat(n / 2 - t / 2, "px")).style("left", "calc(50% - ".concat(this.countdownWidth / 2, "px)")), this
    }
    
    function h() {
      return this.countdownWrapper.classed("show-countdown", 0), this.wrapper.classed("loading", 0), this
    }
    
    function f() {
      var t = this,
        n = a * this.data.length - i.sum(this.data, (function (t) {
          return t.data.ticks
        }));
        e = new Worker("./js/simulation-worker.js");
      
      e.postMessage([this.data, a, n]), e.onmessage = function (e) {
        if ("number" == typeof e.data) {
          var i = (n - e.data) / n;
          t.countdownWrapper.select(".loaded").style("width", "".concat(t.countdownWidth * i, "px"))
        } else t.data = e.data, t.hideCountdown(), t.draw()
      }
    }
    
    function d() {
      var t = this.wrapper.node().getBoundingClientRect(), n = t.top || t.y, e = t.height;
      return n < innerHeight && n + e > 0
    }
    
    t.exports = {
      init: function (t) {
        return this.wrapper = i.select(t), this.countdownWrapper = i.select("#comparison-countdown"), this.draw = c, this.calculationHasStarted = !1, this.getTicksUpToDate = f, this.isNotOffScreen = d, this.setChart = u, this.setData = s, this.showCountdown = l, this.hideCountdown = h, this
      }
    }
  },//56
  function (t, n, e) {
    "use strict";
    
    function i(t, n, e) {
      let i = 1 / 0, r = null;
      for (let o = 0, a = t.length; o < a; o++) {
        const a = e ? e(t[o]) : t[o];
        if (null != a && isFinite(a)) {
          const t = Math.abs(a - n);
          t < i && (i = t, r = o)
        }
      }
      return null !== r ? t[r] : r
    }
    
    function r(t, n) {
      let e, i = 0, r = 0, o = 0;
      for (let a = 0; a < t.length; a++) {
        const s = n ? n(t[a], a, t) : t[a];
        null != s && isFinite(s) && (e = s - o, o += e / ++i, r += e * (s - o))
      }
      if (i > 1) return Math.sqrt(r / (i - 1))
    }
    
    function o(t, n) {
      let e = !0;
      for (let i = 0, r = t.length; i < r; i++) if (!n(t[i], i, t)) {
        e = !1;
        break
      }
      return e
    }
    
    function a(t, n) {
      let e = 1 / 0, i = -1 / 0;
      for (let r = 0, o = t.length; r < o; r++) {
        const o = n ? n(t[r], r, t) : t[r];
        null != o && isFinite(o) && (o < e && (e = o), o > i && (i = o))
      }
      return [e, i]
    }
    
    function s(t, n) {
      let e = [];
      for (let i = 0, r = t.length; i < r; i++) {
        const r = t[i];
        n(r, i, t) && e.push(r)
      }
      return e
    }
    
    function u(t) {
      return [].concat.apply([], t)
    }
    
    function c(t, n, e = 0) {
      let i = !1;
      for (let r = e; r < t.length; r++) if (t[r] === n) {
        i = !0;
        break
      }
      return i
    }
    
    function l(t, n) {
      let e = [];
      for (let i = 0, r = t.length; i < r; i++) e.push(n(t[i], i, t));
      return e
    }
    
    function h(t, n) {
      let e = -1 / 0;
      for (let i = 0, r = t.length; i < r; i++) {
        const r = n ? n(t[i], i, t) : t[i];
        null != r && isFinite(r) && r > e && (e = r)
      }
      return e
    }
    
    function f(t, n) {
      let e = 0, i = 0;
      for (let r = 0, o = t.length; r < o; r++) {
        const o = n ? n(t[r], r, t) : t[r];
        null != o && isFinite(o) && (e += o, i++)
      }
      return e / i
    }
    
    function d(t, n, e) {
      const i = t.slice(), r = o(i, (t, e, i) => "number" == typeof (n ? n(t, e, i) : t));
      let a = 0;
      return r ? i.sort((t, r) => {
        const o = n ? n(t, a + 1, i) : t, s = n ? n(r, a, i) : r;
        return a++, "desc" === e ? s - o : o - s
      }) : i.sort((t, r) => {
        const o = n ? n(t, a + 1, i) : t, s = n ? n(r, a, i) : r;
        return a++, "desc" === e ? o < s ? 1 : o > s ? -1 : 0 : o < s ? -1 : o > s ? 1 : 0
      })
    }
    
    function p(t, n) {
      const e = s(d(n ? l(t, n) : t.slice()), t => null != t && isFinite(t)), i = e.length / 2;
      return i % 1 == 0 ? (e[i - 1] + e[i]) / 2 : e[Math.floor(i)]
    }
    
    function g(t, n) {
      let e = 1 / 0;
      for (let i = 0, r = t.length; i < r; i++) {
        const r = n ? n(t[i], i, t) : t[i];
        null != r && isFinite(r) && r < e && (e = r)
      }
      return e
    }
    
    function m(t) {
      return t[Math.floor(Math.random() * t.length)]
    }
    
    function v(t, n) {
      let e = !1;
      for (let i = 0, r = t.length; i < r; i++) if (n(t[i], i, t)) {
        e = !0;
        break
      }
      return e
    }
    
    function y(t, n) {
      let e = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        const r = n ? n(t[i], i, t) : t[i];
        null != r && isFinite(r) && (e += r)
      }
      return e
    }
    
    function _(t, n) {
      let e = [];
      for (let i = 0, r = t.length; i < r; i++) {
        const r = n ? n(t[i], i, t) : t[i];
        c(e, r) || e.push(r)
      }
      return e
    }
    
    e.r(n), e.d(n, "closest", (function () {
      return i
    })), e.d(n, "deviation", (function () {
      return r
    })), e.d(n, "every", (function () {
      return o
    })), e.d(n, "extent", (function () {
      return a
    })), e.d(n, "filter", (function () {
      return s
    })), e.d(n, "flatten", (function () {
      return u
    })), e.d(n, "includes", (function () {
      return c
    })), e.d(n, "map", (function () {
      return l
    })), e.d(n, "max", (function () {
      return h
    })), e.d(n, "mean", (function () {
      return f
    })), e.d(n, "median", (function () {
      return p
    })), e.d(n, "min", (function () {
      return g
    })), e.d(n, "random", (function () {
      return m
    })), e.d(n, "some", (function () {
      return v
    })), e.d(n, "sort", (function () {
      return d
    })), e.d(n, "sum", (function () {
      return y
    })), e.d(n, "unique", (function () {
      return _
    })), e.d(n, "pipe", (function () {
      return b
    }));
    const w = [i, r, o, a, s, u, c, l, h, f, p, g, m, v, d, y, _];
    
    function b(t) {
      const n = {};
      return n.curr = t, w.forEach(t => {
        n[t.name] = (...e) => (n.curr = t(n.curr, ...e), n)
      }), n.result = t => n.curr, n
    }
  },//57
  function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "axisTop", (function () {
      return h
    })), e.d(n, "axisRight", (function () {
      return f
    })), e.d(n, "axisBottom", (function () {
      return d
    })), e.d(n, "axisLeft", (function () {
      return p
    }));
    var i = Array.prototype.slice, r = function (t) {
      return t
    };
    
    function o(t) {
      return "translate(" + (t + .5) + ",0)"
    }
    
    function a(t) {
      return "translate(0," + (t + .5) + ")"
    }
    
    function s(t) {
      return function (n) {
        return +t(n)
      }
    }
    
    function u(t) {
      var n = Math.max(0, t.bandwidth() - 1) / 2;
      return t.round() && (n = Math.round(n)), function (e) {
        return +t(e) + n
      }
    }
    
    function c() {
      return !this.__axis
    }
    
    function l(t, n) {
      var e = [], l = null, h = null, f = 6, d = 6, p = 3, g = 1 === t || 4 === t ? -1 : 1,
        m = 4 === t || 2 === t ? "x" : "y", v = 1 === t || 3 === t ? o : a;
      
      function y(i) {
        var o = null == l ? n.ticks ? n.ticks.apply(n, e) : n.domain() : l,
          a = null == h ? n.tickFormat ? n.tickFormat.apply(n, e) : r : h, y = Math.max(f, 0) + p, _ = n.range(),
          w = +_[0] + .5, b = +_[_.length - 1] + .5, x = (n.bandwidth ? u : s)(n.copy()),
          T = i.selection ? i.selection() : i, M = T.selectAll(".domain").data([null]),
          k = T.selectAll(".tick").data(o, n).order(), C = k.exit(), S = k.enter().append("g").attr("class", "tick"),
          E = k.select("line"), A = k.select("text");
        M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), k = k.merge(S), E = E.merge(S.append("line").attr("stroke", "currentColor").attr(m + "2", g * f)), A = A.merge(S.append("text").attr("fill", "currentColor").attr(m, g * y).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), i !== T && (M = M.transition(i), k = k.transition(i), E = E.transition(i), A = A.transition(i), C = C.transition(i).attr("opacity", 1e-6).attr("transform", (function (t) {
          return isFinite(t = x(t)) ? v(t) : this.getAttribute("transform")
        })), S.attr("opacity", 1e-6).attr("transform", (function (t) {
          var n = this.parentNode.__axis;
          return v(n && isFinite(n = n(t)) ? n : x(t))
        }))), C.remove(), M.attr("d", 4 === t || 2 == t ? d ? "M" + g * d + "," + w + "H0.5V" + b + "H" + g * d : "M0.5," + w + "V" + b : d ? "M" + w + "," + g * d + "V0.5H" + b + "V" + g * d : "M" + w + ",0.5H" + b), k.attr("opacity", 1).attr("transform", (function (t) {
          return v(x(t))
        })), E.attr(m + "2", g * f), A.attr(m, g * y).text(a), T.filter(c).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), T.each((function () {
          this.__axis = x
        }))
      }
      
      return y.scale = function (t) {
        return arguments.length ? (n = t, y) : n
      }, y.ticks = function () {
        return e = i.call(arguments), y
      }, y.tickArguments = function (t) {
        return arguments.length ? (e = null == t ? [] : i.call(t), y) : e.slice()
      }, y.tickValues = function (t) {
        return arguments.length ? (l = null == t ? null : i.call(t), y) : l && l.slice()
      }, y.tickFormat = function (t) {
        return arguments.length ? (h = t, y) : h
      }, y.tickSize = function (t) {
        return arguments.length ? (f = d = +t, y) : f
      }, y.tickSizeInner = function (t) {
        return arguments.length ? (f = +t, y) : f
      }, y.tickSizeOuter = function (t) {
        return arguments.length ? (d = +t, y) : d
      }, y.tickPadding = function (t) {
        return arguments.length ? (p = +t, y) : p
      }, y
    }
    
    function h(t) {
      return l(1, t)
    }
    
    function f(t) {
      return l(2, t)
    }
    
    function d(t) {
      return l(3, t)
    }
    
    function p(t) {
      return l(4, t)
    }
  },//58
  function (t, n, e) {
    "use strict";
    
    function i(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
          return e
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    
    e.r(n), e(45);
    var r = {
      createLoopingVideo: function (t, n, e) {
        var i = new LoopingVideo(e, [{uuid: n, loopTimes: 0}], {gifvMode: !0});
        return t.removeAttribute("data-uuid"), i
      }, setUpLVScrollMonitor: function () {
        i(document.getElementsByClassName("looping-video")).forEach((function (t, n) {
          var e = scrollMonitor.create(t, {top: 600, bottom: 600}), i = t.id;
          e.enterViewport((function () {
            var n = e.watchItem.dataset.uuid;
            if (n) r.loopingVideoLookup[i] = r.createLoopingVideo(t, n, i); else try {
              r.loopingVideoLookup[i].playLoop()
            } catch (t) {
              console.log(t)
            }
          })), e.exitViewport((function () {
            try {
              r.loopingVideoLookup[i].pause()
            } catch (t) {
              console.log(t)
            }
          })), r.videoWatcher[i] = e
        }))
      }, setUpEventListeners: function () {
      }, init: function () {
        r.videoWatcher = {}, r.loopingVideoLookup = {}, r.setUpLVScrollMonitor()
      }
    };
    e(35), e(36), e(37), e(38);
    var o = e(39), a = e(40), s = e(41), u = e(42), c = e(43), l = e(44), h = $(".balanced-headline");
    h.length && (h.css("visibility", "hidden"), new u("PostoniStandardBold").load().then((function () {
      s(".balanced-headline", {watch: !0}), h.css("visibility", "visible")
    }), (function () {
      h.css("visibility", "visible")
    })));
    
    // if (window.muteErrors || -1 != document.location.href.indexOf("template=iframe") || window.TWPHead.ready("main.js", (function () {
    //   TWP && TWP.Analytics && TWP.Analytics.init && TWP.Analytics.init({snowflake: !0, trackScrolling: {omniture: !1}})
    // })),
    // (c("video") || $(".powa").length > 0) && p("//www.washingtonpost.com/player/prod/PoWaLoaderWapo.js", "defer"),
    // $(".looping-video").length > 0 && p("//d2p9l91d5g68ru.cloudfront.net/LoopingVideo/LoopingVideo.min.js", "defer", (function () {
    //   r.init()
    // })), !window.muteErrors) {
    //   var f = window && window.location && window.location.href, d = new RegExp("(https?://localhost)|(/graphics/test/)");
    //   !f.match(d) && (l.coralInitEventMonitors(), l.coratTalkControllerInit())
    // }
    
    function p(t, n, e) {
      var i = document.createElement("script"), r = "defer" === n ? "defer" : "async";
      i.setAttribute(r, ""), i.src = t;
      var o = document.getElementsByTagName("script")[0];
      e && (i.onload = e), o.parentNode.insertBefore(i, o)
    }
    
    var g, m, v;
    g = $("#nav-subscribe"), m = g.attr("href"), v = window.encodeURI(window.location.href), g.attr("href", m + v), $(".section-label-span").mouseover((function () {
      $(".story-label-explainer").show()
    })), $(".story-label-explainer").click((function () {
      $(".story-label-explainer").hide()
    }));
    var y = $("#comments");
    
    function _(t) {
      var n = t.offset().top, e = 100 * n / 500;
      $("html,body").animate({scrollTop: n - 0}, e)
    }
    
    function w() {
      !0 === y.is(":visible") ? _(y) : y.show((function () {
        _($(this))
      }))
    }
    
    $("#pg-button--comments").click(w), $(".comment-jump").click(w), jQuery(document).ready((function () {
      new a({threshold: 600, elements_selector: "img", throttle: 30, skip_invisible: !0, data_src: "src"});
      if (setTimeout((function () {
        "1" === (document.cookie.match(/rplsb=([0-9]+)/) ? RegExp.$1 : "") && ($(".pb-f-page-subscription-promo").remove(), $(".endCap").remove())
      }), 500), -1 == document.location.href.indexOf("template=iframe")) try {
        o({container: ["#relatedHeadlines", "#relatedHeadlinesSide"], items: 5})
      } catch (t) {
      }
      y.hide()
    }))
  }//59
]);