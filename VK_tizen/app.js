var k;
function aa(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
function p(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    }
}
function r(a) {
    if (!(a instanceof Array)) {
        a = p(a);
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        a = c
    }
    return a
}
function ba(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = c.value;
    return a
}
;
function da(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
var t = da(this);
function v(a, b) {
    if (b)
        a: {
            var c = t;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c))
                    break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ca(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
}
var ea = "function" == typeof Object.assign ? Object.assign : function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
            for (var e in d)
                ba(d, e) && (a[e] = d[e])
    }
    return a
}
;
v("Object.assign", function(a) {
    return a || ea
});
var fa = "function" == typeof Object.create ? Object.create : function(a) {
    function b() {}
    b.prototype = a;
    return new b
}
, ha;
if ("function" == typeof Object.setPrototypeOf)
    ha = Object.setPrototypeOf;
else {
    var ia;
    a: {
        var ja = {
            a: !0
        }
          , ka = {};
        try {
            ka.__proto__ = ja;
            ia = ka.a;
            break a
        } catch (a) {}
        ia = !1
    }
    ha = ia ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible");
        return a
    }
    : null
}
var ma = ha;
function z(a, b) {
    a.prototype = fa(b.prototype);
    a.prototype.constructor = a;
    if (ma)
        ma(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else
                    a[c] = b[c];
    a.ho = b.prototype
}
function na() {
    this.v = !1;
    this.l = null;
    this.i = void 0;
    this.g = 1;
    this.F = this.j = 0;
    this.o = null
}
function oa(a) {
    if (a.v)
        throw new TypeError("Generator is already running");
    a.v = !0
}
na.prototype.u = function(a) {
    this.i = a
}
;
function pa(a, b) {
    a.o = {
        zi: b,
        il: !0
    };
    a.g = a.j || a.F
}
na.prototype.return = function(a) {
    this.o = {
        return: a
    };
    this.g = this.F
}
;
function B(a, b, c) {
    a.g = c;
    return {
        value: b
    }
}
function qa(a, b) {
    a.g = b;
    a.j = 0
}
function ra(a) {
    a.j = 0;
    var b = a.o.zi;
    a.o = null;
    return b
}
function sa(a) {
    this.g = new na;
    this.i = a
}
function ta(a, b) {
    oa(a.g);
    var c = a.g.l;
    if (c)
        return ua(a, "return"in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }
        , b, a.g.return);
    a.g.return(b);
    return va(a)
}
function ua(a, b, c, d) {
    try {
        var e = b.call(a.g.l, c);
        if (!(e instanceof Object))
            throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done)
            return a.g.v = !1,
            e;
        var f = e.value
    } catch (g) {
        return a.g.l = null,
        pa(a.g, g),
        va(a)
    }
    a.g.l = null;
    d.call(a.g, f);
    return va(a)
}
function va(a) {
    for (; a.g.g; )
        try {
            var b = a.i(a.g);
            if (b)
                return a.g.v = !1,
                {
                    value: b.value,
                    done: !1
                }
        } catch (c) {
            a.g.i = void 0,
            pa(a.g, c)
        }
    a.g.v = !1;
    if (a.g.o) {
        b = a.g.o;
        a.g.o = null;
        if (b.il)
            throw b.zi;
        return {
            value: b.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}
function wa(a) {
    this.next = function(b) {
        oa(a.g);
        a.g.l ? b = ua(a, a.g.l.next, b, a.g.u) : (a.g.u(b),
        b = va(a));
        return b
    }
    ;
    this.throw = function(b) {
        oa(a.g);
        a.g.l ? b = ua(a, a.g.l["throw"], b, a.g.u) : (pa(a.g, b),
        b = va(a));
        return b
    }
    ;
    this.return = function(b) {
        return ta(a, b)
    }
    ;
    this[Symbol.iterator] = function() {
        return this
    }
}
function xa(a) {
    function b(d) {
        return a.next(d)
    }
    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    }
    )
}
function D(a) {
    return xa(new wa(new sa(a)))
}
function ya() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
    return b
}
v("Symbol", function(a) {
    function b(f) {
        if (this instanceof b)
            throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++,f)
    }
    function c(f, g) {
        this.g = f;
        ca(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    }
    if (a)
        return a;
    c.prototype.toString = function() {
        return this.g
    }
    ;
    var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
      , e = 0;
    return b
});
v("Symbol.iterator", function(a) {
    if (a)
        return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = t[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return za(aa(this))
            }
        })
    }
    return a
});
function za(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
v("Promise", function(a) {
    function b(g) {
        this.i = 0;
        this.j = void 0;
        this.g = [];
        this.u = !1;
        var h = this.l();
        try {
            g(h.resolve, h.reject)
        } catch (l) {
            h.reject(l)
        }
    }
    function c() {
        this.g = null
    }
    function d(g) {
        return g instanceof b ? g : new b(function(h) {
            h(g)
        }
        )
    }
    if (a && ("undefined" !== typeof t.PromiseRejectionEvent || !t.Promise || -1 === t.Promise.toString().indexOf("[native code]")))
        return a;
    c.prototype.i = function(g) {
        if (null == this.g) {
            this.g = [];
            var h = this;
            this.j(function() {
                h.o()
            })
        }
        this.g.push(g)
    }
    ;
    var e = t.setTimeout;
    c.prototype.j = function(g) {
        e(g, 0)
    }
    ;
    c.prototype.o = function() {
        for (; this.g && this.g.length; ) {
            var g = this.g;
            this.g = [];
            for (var h = 0; h < g.length; ++h) {
                var l = g[h];
                g[h] = null;
                try {
                    l()
                } catch (m) {
                    this.l(m)
                }
            }
        }
        this.g = null
    }
    ;
    c.prototype.l = function(g) {
        this.j(function() {
            throw g;
        })
    }
    ;
    b.prototype.l = function() {
        function g(m) {
            return function(n) {
                l || (l = !0,
                m.call(h, n))
            }
        }
        var h = this
          , l = !1;
        return {
            resolve: g(this.N),
            reject: g(this.o)
        }
    }
    ;
    b.prototype.N = function(g) {
        if (g === this)
            this.o(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b)
            this.S(g);
        else {
            a: switch (typeof g) {
            case "object":
                var h = null != g;
                break a;
            case "function":
                h = !0;
                break a;
            default:
                h = !1
            }
            h ? this.J(g) : this.v(g)
        }
    }
    ;
    b.prototype.J = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (l) {
            this.o(l);
            return
        }
        "function" == typeof h ? this.Z(h, g) : this.v(g)
    }
    ;
    b.prototype.o = function(g) {
        this.F(2, g)
    }
    ;
    b.prototype.v = function(g) {
        this.F(1, g)
    }
    ;
    b.prototype.F = function(g, h) {
        if (0 != this.i)
            throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.i);
        this.i = g;
        this.j = h;
        2 === this.i && this.O();
        this.D()
    }
    ;
    b.prototype.O = function() {
        var g = this;
        e(function() {
            if (g.C()) {
                var h = t.console;
                "undefined" !== typeof h && h.error(g.j)
            }
        }, 1)
    }
    ;
    b.prototype.C = function() {
        if (this.u)
            return !1;
        var g = t.CustomEvent
          , h = t.Event
          , l = t.dispatchEvent;
        if ("undefined" === typeof l)
            return !0;
        "function" === typeof g ? g = new g("unhandledrejection",{
            cancelable: !0
        }) : "function" === typeof h ? g = new h("unhandledrejection",{
            cancelable: !0
        }) : (g = t.document.createEvent("CustomEvent"),
        g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.j;
        return l(g)
    }
    ;
    b.prototype.D = function() {
        if (null != this.g) {
            for (var g = 0; g < this.g.length; ++g)
                f.i(this.g[g]);
            this.g = null
        }
    }
    ;
    var f = new c;
    b.prototype.S = function(g) {
        var h = this.l();
        g.sf(h.resolve, h.reject)
    }
    ;
    b.prototype.Z = function(g, h) {
        var l = this.l();
        try {
            g.call(h, l.resolve, l.reject)
        } catch (m) {
            l.reject(m)
        }
    }
    ;
    b.prototype.then = function(g, h) {
        function l(u, w) {
            return "function" == typeof u ? function(x) {
                try {
                    m(u(x))
                } catch (J) {
                    n(J)
                }
            }
            : w
        }
        var m, n, q = new b(function(u, w) {
            m = u;
            n = w
        }
        );
        this.sf(l(g, m), l(h, n));
        return q
    }
    ;
    b.prototype.catch = function(g) {
        return this.then(void 0, g)
    }
    ;
    b.prototype.sf = function(g, h) {
        function l() {
            switch (m.i) {
            case 1:
                g(m.j);
                break;
            case 2:
                h(m.j);
                break;
            default:
                throw Error("Unexpected state: " + m.i);
            }
        }
        var m = this;
        null == this.g ? f.i(l) : this.g.push(l);
        this.u = !0
    }
    ;
    b.resolve = d;
    b.reject = function(g) {
        return new b(function(h, l) {
            l(g)
        }
        )
    }
    ;
    b.race = function(g) {
        return new b(function(h, l) {
            for (var m = p(g), n = m.next(); !n.done; n = m.next())
                d(n.value).sf(h, l)
        }
        )
    }
    ;
    b.all = function(g) {
        var h = p(g)
          , l = h.next();
        return l.done ? d([]) : new b(function(m, n) {
            function q(x) {
                return function(J) {
                    u[x] = J;
                    w--;
                    0 == w && m(u)
                }
            }
            var u = []
              , w = 0;
            do
                u.push(void 0),
                w++,
                d(l.value).sf(q(u.length - 1), n),
                l = h.next();
            while (!l.done)
        }
        )
    }
    ;
    return b
});
function Aa(a, b) {
    a instanceof String && (a += "");
    var c = 0
      , d = !1
      , e = {
        next: function() {
            if (!d && c < a.length) {
                var f = c++;
                return {
                    value: b(f, a[f]),
                    done: !1
                }
            }
            d = !0;
            return {
                done: !0,
                value: void 0
            }
        }
    };
    e[Symbol.iterator] = function() {
        return e
    }
    ;
    return e
}
v("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return Aa(this, function(b) {
            return b
        })
    }
});
v("WeakMap", function(a) {
    function b(l) {
        this.g = (h += Math.random() + 1).toString();
        if (l) {
            l = p(l);
            for (var m; !(m = l.next()).done; )
                m = m.value,
                this.set(m[0], m[1])
        }
    }
    function c() {}
    function d(l) {
        var m = typeof l;
        return "object" === m && null !== l || "function" === m
    }
    function e(l) {
        if (!ba(l, g)) {
            var m = new c;
            ca(l, g, {
                value: m
            })
        }
    }
    function f(l) {
        var m = Object[l];
        m && (Object[l] = function(n) {
            if (n instanceof c)
                return n;
            Object.isExtensible(n) && e(n);
            return m(n)
        }
        )
    }
    if (function() {
        if (!a || !Object.seal)
            return !1;
        try {
            var l = Object.seal({})
              , m = Object.seal({})
              , n = new a([[l, 2], [m, 3]]);
            if (2 != n.get(l) || 3 != n.get(m))
                return !1;
            n.delete(l);
            n.set(m, 4);
            return !n.has(l) && 4 == n.get(m)
        } catch (q) {
            return !1
        }
    }())
        return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function(l, m) {
        if (!d(l))
            throw Error("Invalid WeakMap key");
        e(l);
        if (!ba(l, g))
            throw Error("WeakMap key fail: " + l);
        l[g][this.g] = m;
        return this
    }
    ;
    b.prototype.get = function(l) {
        return d(l) && ba(l, g) ? l[g][this.g] : void 0
    }
    ;
    b.prototype.has = function(l) {
        return d(l) && ba(l, g) && ba(l[g], this.g)
    }
    ;
    b.prototype.delete = function(l) {
        return d(l) && ba(l, g) && ba(l[g], this.g) ? delete l[g][this.g] : !1
    }
    ;
    return b
});
v("Map", function(a) {
    function b() {
        var h = {};
        return h.vc = h.next = h.head = h
    }
    function c(h, l) {
        var m = h.g;
        return za(function() {
            if (m) {
                for (; m.head != h.g; )
                    m = m.vc;
                for (; m.next != m.head; )
                    return m = m.next,
                    {
                        done: !1,
                        value: l(m)
                    };
                m = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }
    function d(h, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? f.has(l) ? m = f.get(l) : (m = "" + ++g,
        f.set(l, m)) : m = "p_" + l;
        var n = h.i[m];
        if (n && ba(h.i, m))
            for (h = 0; h < n.length; h++) {
                var q = n[h];
                if (l !== l && q.key !== q.key || l === q.key)
                    return {
                        id: m,
                        list: n,
                        index: h,
                        fb: q
                    }
            }
        return {
            id: m,
            list: n,
            index: -1,
            fb: void 0
        }
    }
    function e(h) {
        this.i = {};
        this.g = b();
        this.size = 0;
        if (h) {
            h = p(h);
            for (var l; !(l = h.next()).done; )
                l = l.value,
                this.set(l[0], l[1])
        }
    }
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
            return !1;
        try {
            var h = Object.seal({
                x: 4
            })
              , l = new a(p([[h, "s"]]));
            if ("s" != l.get(h) || 1 != l.size || l.get({
                x: 4
            }) || l.set({
                x: 4
            }, "t") != l || 2 != l.size)
                return !1;
            var m = l.entries()
              , n = m.next();
            if (n.done || n.value[0] != h || "s" != n.value[1])
                return !1;
            n = m.next();
            return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
        } catch (q) {
            return !1
        }
    }())
        return a;
    var f = new WeakMap;
    e.prototype.set = function(h, l) {
        h = 0 === h ? 0 : h;
        var m = d(this, h);
        m.list || (m.list = this.i[m.id] = []);
        m.fb ? m.fb.value = l : (m.fb = {
            next: this.g,
            vc: this.g.vc,
            head: this.g,
            key: h,
            value: l
        },
        m.list.push(m.fb),
        this.g.vc.next = m.fb,
        this.g.vc = m.fb,
        this.size++);
        return this
    }
    ;
    e.prototype.delete = function(h) {
        h = d(this, h);
        return h.fb && h.list ? (h.list.splice(h.index, 1),
        h.list.length || delete this.i[h.id],
        h.fb.vc.next = h.fb.next,
        h.fb.next.vc = h.fb.vc,
        h.fb.head = null,
        this.size--,
        !0) : !1
    }
    ;
    e.prototype.clear = function() {
        this.i = {};
        this.g = this.g.vc = b();
        this.size = 0
    }
    ;
    e.prototype.has = function(h) {
        return !!d(this, h).fb
    }
    ;
    e.prototype.get = function(h) {
        return (h = d(this, h).fb) && h.value
    }
    ;
    e.prototype.entries = function() {
        return c(this, function(h) {
            return [h.key, h.value]
        })
    }
    ;
    e.prototype.keys = function() {
        return c(this, function(h) {
            return h.key
        })
    }
    ;
    e.prototype.values = function() {
        return c(this, function(h) {
            return h.value
        })
    }
    ;
    e.prototype.forEach = function(h, l) {
        for (var m = this.entries(), n; !(n = m.next()).done; )
            n = n.value,
            h.call(l, n[1], n[0], this)
    }
    ;
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
});
function Ba(a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a))
            return {
                Gi: e,
                ij: f
            }
    }
    return {
        Gi: -1,
        ij: void 0
    }
}
v("Array.prototype.findIndex", function(a) {
    return a ? a : function(b, c) {
        return Ba(this, b, c).Gi
    }
});
v("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
v("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            ba(b, d) && c.push(b[d]);
        return c
    }
});
v("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            ba(b, d) && c.push([d, b[d]]);
        return c
    }
});
v("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
});
v("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b))
                return !0
        }
        return !1
    }
});
function Ca(a, b, c) {
    if (null == a)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
}
v("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return -1 !== Ca(this, b, "includes").indexOf(b, c || 0)
    }
});
v("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        return Ba(this, b, c).ij
    }
});
v("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(h) {
            return h
        }
        ;
        var e = []
          , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length,
            g = 0; g < f; g++)
                e.push(c.call(d, b[g], g));
        return e
    }
});
v("Number.isNaN", function(a) {
    return a ? a : function(b) {
        return "number" === typeof b && isNaN(b)
    }
});
v("Math.sign", function(a) {
    return a ? a : function(b) {
        b = Number(b);
        return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
    }
});
v("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = Ca(this, b, "endsWith");
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e])
                return !1;
        return 0 >= e
    }
});
v("Number.isFinite", function(a) {
    return a ? a : function(b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
    }
});
v("Number.isInteger", function(a) {
    return a ? a : function(b) {
        return Number.isFinite(b) ? b === Math.floor(b) : !1
    }
});
v("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = Ca(this, b, "startsWith")
          , e = d.length
          , f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; )
            if (d[c++] != b[g++])
                return !1;
        return g >= f
    }
});
v("Object.fromEntries", function(a) {
    return a ? a : function(b) {
        var c = {};
        if (!(Symbol.iterator in b))
            throw new TypeError("" + b + " is not iterable");
        b = b[Symbol.iterator].call(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            if (Object(d) !== d)
                throw new TypeError("iterable for fromEntries should yield objects");
            c[d[0]] = d[1]
        }
        return c
    }
});
v("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return Aa(this, function(b, c) {
            return [b, c]
        })
    }
});
v("Array.prototype.fill", function(a) {
    return a ? a : function(b, c, d) {
        var e = this.length || 0;
        0 > c && (c = Math.max(0, e + c));
        if (null == d || d > e)
            d = e;
        d = Number(d);
        0 > d && (d = Math.max(0, e + d));
        for (c = Number(c || 0); c < d; c++)
            this[c] = b;
        return this
    }
});
function Da(a) {
    return a ? a : Array.prototype.fill
}
v("Int8Array.prototype.fill", Da);
v("Uint8Array.prototype.fill", Da);
v("Uint8ClampedArray.prototype.fill", Da);
v("Int16Array.prototype.fill", Da);
v("Uint16Array.prototype.fill", Da);
v("Int32Array.prototype.fill", Da);
v("Uint32Array.prototype.fill", Da);
v("Float32Array.prototype.fill", Da);
v("Float64Array.prototype.fill", Da);
v("AggregateError", function(a) {
    function b(c, d) {
        d = Error(d);
        "stack"in d && (this.stack = d.stack);
        this.errors = c;
        this.message = d.message
    }
    if (a)
        return a;
    z(b, Error);
    b.prototype.name = "AggregateError";
    return b
});
v("Promise.any", function(a) {
    return a ? a : function(b) {
        b = b instanceof Array ? b : Array.from(b);
        return Promise.all(b.map(function(c) {
            return Promise.resolve(c).then(function(d) {
                throw d;
            }, function(d) {
                return d
            })
        })).then(function(c) {
            throw new AggregateError(c,"All promises were rejected");
        }, function(c) {
            return c
        })
    }
});
v("Array.prototype.values", function(a) {
    return a ? a : function() {
        return Aa(this, function(b, c) {
            return c
        })
    }
});
window[Symbol("Object spread Object.assign polyfill hack")] = Object.assign({}, {});
var Ea = 0;
function Fa(a) {
    var b = null;
    if (a.firstChild)
        b = a.firstChild;
    else if (a.nextSibling)
        b = a.nextSibling;
    else if (a.parentNode) {
        for (b = a; b && b.parentNode && !b.parentNode.nextSibling; )
            b = b.parentNode;
        b && b.parentNode && b.parentNode.nextSibling ? b = b.parentNode.nextSibling : b = null
    }
    return b
}
function E(a, b, c, d) {
    return "<cutejs>" + Ga(a, b, c, d) + "</cutejs>"
}
function Ga(a, b, c, d) {
    Ea++;
    d[Ea] = [a, b, c || "__null__"];
    return "component" + Ea
}
function Ha(a) {
    return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
}
function F(a) {
    throw Error("Include name is already defined: " + a);
}
function H(a) {
    throw Error("UNKNOWN KEY: " + a);
}
function I(a, b, c, d, e) {
    function f(n, q) {
        var u = g.exec(n);
        n = "partial" == u[1];
        u = u[2];
        var w = b[u]
          , x = w[0]
          , J = w[1];
        w = w[2];
        w = {
            Bg: null,
            object: null,
            name: "__null__" === w ? null : w,
            Ii: !n
        };
        n ? (q = J ? x(J, e) : x(e),
        w.Bg = q.root,
        q.root = null) : (q = q ? new x(q,J) : new x(J),
        w.Bg = q.L());
        delete b[u];
        w.object = q;
        return w
    }
    var g = /^(partial|component)(\d+)$/
      , h = e && e.Vn || function() {}
      , l = e && e.Vb || function() {}
      , m = document.createElement("div");
    m.innerHTML = a;
    (function(n) {
        for (var q = [], u = null; n; ) {
            var w = Fa(n);
            if (1 == n.nodeType && n.hasAttribute("data-export-id")) {
                var x = n.getAttribute("data-export-id");
                n.removeAttribute("data-export-id");
                n.setAttribute("data-exported-id", x);
                c(n, x, d)
            } else if ("CUTEJS" === n.nodeName && g.test(n.firstChild.nodeValue)) {
                x = f(n.firstChild.nodeValue);
                var J = x.name
                  , y = x.object;
                x.Ii && !u && h(y, J);
                var A = x.Bg;
                A.hasChildNodes() || A.nodeType ? (w = A.lastChild,
                11 !== A.nodeType && (w = A),
                n.parentNode.insertBefore(A, n),
                n.parentNode.removeChild(n),
                w = Fa(w)) : n.parentNode.removeChild(n);
                x.Ii && (u ? u.ae(y, J) : l(y, J));
                J && c(y, J, d)
            } else
                1 == n.nodeType && n.hasAttribute("data-component") && (x = n.getAttribute("data-component"),
                n.removeAttribute("data-component"),
                n = f(x, n),
                x = n.object,
                u ? u.ae(x, n.name) : (h(x, n.name),
                l(x, n.name)),
                q.push(x),
                u = x,
                n.name && c(x, n.name, d));
            u && w && w.previousSibling == u.L() && (q.pop(),
            u = q[q.length - 1] || null);
            n = w
        }
    }
    )(m);
    for (a = document.createDocumentFragment(); m.firstChild; )
        a.appendChild(m.firstChild);
    c(a, "root", d);
    return d
}
;function Ia() {}
;function Ja(a) {
    this.value = a
}
function Ka(a) {
    return Math.abs(La[a.value]) - 1
}
function Ma(a) {
    a = La[a.value];
    return a / Math.abs(a)
}
function Na(a) {
    return Oa(-1 * La[a.value])
}
Ja.prototype.toString = function() {
    return this.value
}
;
function Oa(a) {
    var b;
    Object.keys(La).forEach(function(c) {
        La[c] === a && (b = c)
    });
    return new Ja(b)
}
function Pa(a) {
    return new Ja(a)
}
var La = {
    left: -1,
    right: 1,
    up: -2,
    down: 2
};
function Qa(a, b) {
    this.x = a;
    this.y = b
}
function Ra(a, b, c) {
    0 === b ? a.x = c : 1 === b && (a.y = c)
}
function Sa(a, b) {
    return 0 === b ? a.x : 1 === b ? a.y : NaN
}
Qa.prototype.Ma = function() {
    return {
        x: this.x,
        y: this.y
    }
}
;
Qa.prototype.add = function(a) {
    return Ta({
        x: this.x + a.x,
        y: this.y + a.y
    })
}
;
Qa.prototype.sub = function(a) {
    return Ta({
        x: this.x - a.x,
        y: this.y - a.y
    })
}
;
Qa.prototype.toString = function() {
    return this.x + ":" + this.y
}
;
function Ta(a) {
    return new Qa(a.x,a.y)
}
;function Ua(a) {
    this.la = a.la;
    this.na = a.na;
    this.oa = a.oa;
    this.pa = a.pa
}
Ua.prototype.Ha = function() {
    return !(this.oa > this.na && this.pa > this.la)
}
;
Ua.prototype.Ma = function() {
    return {
        na: this.na,
        la: this.la,
        oa: this.oa,
        pa: this.pa
    }
}
;
function Wa(a, b) {
    if (0 === Ka(b)) {
        if (0 < Ma(b))
            return a.oa;
        if (0 > Ma(b))
            return a.na
    } else if (1 === Ka(b)) {
        if (0 < Ma(b))
            return a.pa;
        if (0 > Ma(b))
            return a.la
    }
    return NaN
}
function Xa(a, b, c) {
    0 === Ka(b) ? 0 < Ma(b) ? a.oa = c : 0 > Ma(b) && (a.na = c) : 1 === Ka(b) && (0 < Ma(b) ? a.pa = c : 0 > Ma(b) && (a.la = c))
}
function Ya(a) {
    return Ta({
        x: (a.na + a.oa) / 2,
        y: (a.la + a.pa) / 2
    })
}
function Za(a) {
    return Ta({
        x: a.oa - a.na,
        y: a.pa - a.la
    })
}
function $a(a, b, c) {
    var d = Wa(a, b);
    Xa(a, b, 0 < Ma(b) ? Math.min(c, d) : Math.max(c, d))
}
function ab(a, b) {
    a.na += b;
    a.oa += b
}
function bb(a, b) {
    a.la += b;
    a.pa += b
}
function cb(a, b) {
    return a.na < b.oa && a.oa > b.na && a.la < b.pa && a.pa > b.la
}
function db(a, b) {
    var c = {};
    [Pa("left"), Pa("right"), Pa("up"), Pa("down")].forEach(function(d) {
        c[d.value] = Ma(d) * (Wa(a, d) - Wa(b, d))
    });
    return c
}
Ua.prototype.sub = function(a) {
    var b = this;
    if (!cb(b, a))
        return [eb(b.Ma())];
    var c = [];
    [Pa("left"), Pa("right")].forEach(function(d) {
        var e = eb(b.Ma());
        $a(e, Na(d), Wa(a, d));
        [Pa("up"), Pa("down")].forEach(function(f) {
            $a(e, f, Wa(a, f))
        });
        c.push(e)
    });
    [Pa("up"), Pa("down")].forEach(function(d) {
        var e = eb(b.Ma());
        $a(e, Na(d), Wa(a, d));
        c.push(e)
    });
    return c = c.filter(function(d) {
        return !d.Ha()
    })
}
;
Ua.prototype.toString = function() {
    return Ta({
        x: this.na,
        y: this.la
    }) + " - " + Ta({
        x: this.oa,
        y: this.pa
    })
}
;
function fb(a, b, c, d) {
    return new Ua({
        na: a,
        la: b,
        oa: c,
        pa: d
    })
}
function gb(a) {
    var b = eb({
        na: 0,
        la: 0,
        oa: 0,
        pa: 0
    });
    Xa(b, Pa("left"), a.left);
    Xa(b, Pa("right"), a.left + a.width);
    Xa(b, Pa("up"), a.top);
    Xa(b, Pa("down"), a.top + a.height);
    return b
}
function eb(a) {
    return new Ua(a)
}
;var hb = {
    UNKNOWN: 0,
    Om: 1,
    Mn: 2,
    xn: 3,
    ym: 4,
    nm: 5,
    om: 6,
    qm: 7,
    rm: 8,
    sm: 9,
    tm: 10,
    um: 11,
    vm: 12,
    wm: 13,
    xm: 14,
    fn: 15,
    dn: 16,
    zn: 17,
    Gm: 18,
    wn: 19,
    BACK: 20,
    zm: 21,
    Tm: 22,
    Km: 23,
    cn: 24,
    bn: 25,
    $m: 26,
    rn: 27,
    Qn: 28,
    Rn: 29,
    RED: 30,
    Hm: 31,
    gm: 32,
    Tn: 33,
    Bm: 34,
    pn: 35,
    un: 36,
    Ym: 37,
    em: 38,
    mn: 39,
    Fn: 40,
    dm: 41,
    Xm: 42,
    Um: 43,
    Vm: 44,
    Wm: 45
};
function ib(a, b, c) {
    a = document.createElement(a);
    "undefined" !== typeof b && null !== b && (a.className = b);
    "undefined" !== typeof c && a.appendChild(document.createTextNode(c));
    return a
}
function jb(a) {
    return ib("div", a, void 0)
}
function kb(a) {
    for (var b = 0; b < a.childNodes.length; b++)
        if (1 === a.childNodes[b].nodeType)
            return a.childNodes[b];
    return null
}
function K(a, b, c) {
    c ? a.classList.add(b) : a.classList.remove(b)
}
function L(a, b) {
    if (1 === a.childNodes.length && a.firstChild instanceof Text)
        a.firstChild.nodeValue = b;
    else {
        for (; a.firstChild; )
            a.removeChild(a.firstChild);
        a.appendChild(document.createTextNode(b))
    }
}
function lb(a) {
    if (a = a.ownerDocument.defaultView.getComputedStyle(a, null)) {
        var b = a.getPropertyValue("display");
        "" !== b || a.hasOwnProperty("display") || (b = null);
        return b
    }
    return null
}
function mb(a) {
    var b = void 0 === b ? "block" : b;
    a.style.display = "none" === a._oldDisplay ? "" : a._oldDisplay || "";
    "none" === lb(a) && (a.style.display = b)
}
function nb(a) {
    a._oldDisplay = a.style.display;
    a.style.display = "none"
}
function M(a, b) {
    b ? mb(a) : nb(a)
}
function ob() {
    for (var a = ya.apply(0, arguments), b = 0; b < a.length; b++)
        for (var c = a[b]; c.firstChild; )
            c.removeChild(c.firstChild)
}
;function pb(a) {
    a = Error.call(this, 'Unsupported feature "' + a + '"');
    this.message = a.message;
    "stack"in a && (this.stack = a.stack)
}
z(pb, Error);
function qb(a) {
    this.j = a;
    this.i = null;
    this.g = new Map
}
k = qb.prototype;
k.init = function() {
    this.i.v = this.nk.bind(this)
}
;
k.lg = function(a, b) {
    this.g.has(b) || (a = this.kg.bind(this, a),
    b.addEventListener("mouseover", a, !1),
    b.addEventListener("click", a, !1),
    this.g.set(b, a))
}
;
k.Yi = function(a, b) {
    if (a = this.g.get(b))
        b.removeEventListener("mouseover", a, !1),
        b.removeEventListener("click", a, !1),
        this.g.delete(b)
}
;
k.kg = function(a, b) {
    if (!this.i.i)
        switch (b.type) {
        case "mouseover":
            rb(a);
            break;
        case "click":
            a.Ef(b)
        }
}
;
k.nk = function(a) {
    if (this.i.i)
        a.preventDefault();
    else {
        var b = this.i.le(a);
        if (this.j.da(b, a))
            return a.preventDefault(),
            !1
    }
    return !0
}
;
function N() {
    this.Ka = {};
    this.gf = [];
    this.Xd = null;
    this.Qd = "any"
}
k = N.prototype;
k.on = function(a, b) {
    this.Ka[a] || (this.Ka[a] = []);
    this.Ka[a].push(b)
}
;
k.once = function(a, b) {
    function c() {
        var f = ya.apply(0, arguments);
        e.ni || (e.ni = !0,
        d.off(a, c),
        b.apply(null, r(f)))
    }
    var d = this
      , e = {
        tf: b,
        ni: !1,
        sd: c
    };
    this.gf.push(e);
    this.on(a, c)
}
;
k.off = function(a, b) {
    if (this.Ka[a]) {
        var c = this.Ka[a].indexOf(b);
        if (-1 === c) {
            var d = this.gf.findIndex(function(e) {
                return e.tf === b
            });
            -1 !== d && (c = this.gf[d].sd,
            this.gf.splice(d, 1),
            c = this.Ka[a].indexOf(c))
        }
        -1 !== c && (1 === this.Ka[a].length ? this.Ka[a] = [] : this.Ka[a].splice(c, 1))
    }
}
;
k.removeAllListeners = function(a) {
    void 0 !== a && this.Ka[a] ? this.Ka[a] = null : this.Ka = {}
}
;
function sb(a, b) {
    if (!a.Xd)
        throw Error("No events are being fired");
    a.Xd.$i.push(b)
}
k.B = function(a) {
    var b = ya.apply(1, arguments);
    if (a !== this.Qd) {
        var c = [];
        this.Ka[a] && this.Ka[a].length && (c = c.concat(this.Ka[a]));
        this.Ka[this.Qd] && this.Ka[this.Qd].length && (c = c.concat(this.Ka[this.Qd]));
        if (c.length) {
            c = {
                nl: c,
                event: a,
                Mk: b,
                $i: []
            };
            b = this.Xd;
            this.Xd = c;
            for (var d = c.nl, e = c.event, f = c.Mk, g = 0, h = d.length; g < h; g++) {
                var l = d[g];
                switch (f.length) {
                case 0:
                    l.call(null, e);
                    break;
                case 1:
                    l.call(null, e, f[0]);
                    break;
                case 2:
                    l.call(null, e, f[0], f[1]);
                    break;
                case 3:
                    l.call(null, e, f[0], f[1], f[2]);
                    break;
                case 4:
                    l.call(null, e, f[0], f[1], f[2], f[3]);
                    break;
                case 5:
                    l.call(null, e, f[0], f[1], f[2], f[3], f[4]);
                    break;
                default:
                    l.apply(null, r([e].concat(f)))
                }
            }
            c = p(c.$i);
            for (d = c.next(); !d.done; d = c.next())
                d = d.value,
                d();
            this.Xd = b
        }
    }
}
;
function tb(a) {
    this.value = a
}
tb.prototype.Ma = function() {
    return this.value
}
;
tb.prototype.Ha = function() {
    return this.Ma().every(function(a) {
        return a.Ha()
    })
}
;
function ub(a) {
    a = a.Ma();
    if (!a.length)
        return eb({
            na: 0,
            la: 0,
            oa: 0,
            pa: 0
        });
    a = a.reduce(function(b, c) {
        return {
            na: Math.min(b.na, c.na),
            la: Math.min(b.la, c.la),
            oa: Math.max(b.oa, c.oa),
            pa: Math.max(b.pa, c.pa)
        }
    });
    return eb(a)
}
;function vb() {
    this.j = [];
    this.g = []
}
function wb(a, b, c) {
    var d = b && xb(a, b);
    return d && d.hasOwnProperty(c) ? (a = d[c]) && [a] : a.F(b, new Ja(c))
}
vb.prototype.v = function(a) {
    this.g.push(a);
    this.j.push({})
}
;
vb.prototype.u = function(a) {
    var b = this.g.indexOf(a);
    -1 !== b && (this.g.splice(b, 1),
    this.j.splice(b, 1),
    this.j.forEach(function(c) {
        Object.keys(c).forEach(function(d) {
            c[d] === a && delete c[d]
        })
    }))
}
;
function xb(a, b) {
    return a.j[yb(a, b)]
}
function yb(a, b) {
    a = a.g.indexOf(b);
    if (-1 !== a)
        return a;
    throw Error("Unknown widget");
}
;function zb(a, b) {
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? !1 : b;
    vb.call(this);
    this.C = this.D = !1;
    this.S = fb(0, 0, 0, 0);
    this.D = void 0 === a ? !1 : a;
    this.C = void 0 === b ? !1 : b
}
z(zb, vb);
function Ab(a, b) {
    return a.i(b instanceof Qa ? fb(b.x, b.y, b.x + 1, b.y + 1) : b, a.g, void 0)
}
zb.prototype.F = function(a, b) {
    var c = this.S;
    a && (c = a.Xb() || c);
    var d = this.i(c, this.g, b);
    !d.length && Bb(this, b) && (d = this.o(c, b, this.g));
    return d.filter(function(e) {
        return e !== a && e.Ta()
    })
}
;
zb.prototype.o = function(a, b, c) {
    var d = c.reduce(function(g, h) {
        return g.concat(h.Zc())
    }, []);
    d = ub(new tb(d));
    var e = b.value
      , f = -Ma(b);
    a = eb(a.Ma());
    "left" === e || "right" === e ? ab(a, f * Sa(Za(d), 0)) : ("up" === e || "down" === e) && bb(a, f * Sa(Za(d), 0));
    return this.i(a, c, b)
}
;
zb.prototype.i = function(a, b, c) {
    function d(h) {
        a: {
            var l = c ? c.value : void 0
              , m = l ? Pa(l) : null;
            if (h.Ha())
                h = null;
            else {
                if (m && (l = Wa(a, m),
                0 > (Wa(h, Na(m)) - l) * Ma(m))) {
                    h = null;
                    break a
                }
                l = Ya(a);
                var n = Ya(h);
                if (m) {
                    var q = Ka(m)
                      , u = 0 === q ? 1 : 0;
                    Ra(l, q, Wa(a, m));
                    Ra(n, q, Wa(h, Na(m)));
                    m = Ta({
                        x: h.na,
                        y: h.la
                    });
                    h = Ta({
                        x: h.oa,
                        y: h.pa
                    });
                    Ra(n, u, Sa(m, u) <= Sa(l, u) && Sa(h, u) >= Sa(l, u) ? Sa(l, u) : Sa(h, u) < Sa(l, u) ? Sa(h, u) : Sa(m, u))
                }
                h = {
                    fromPoint: l,
                    Ml: n
                }
            }
        }
        if (l = h)
            h = l.fromPoint,
            l = l.Ml,
            f = Math.min(f, Math.sqrt(Math.pow(Math.abs(h.x - l.x), 2) + Math.pow(Math.abs(h.y - l.y), 2)))
    }
    for (var e = [], f, g = 0; g < b.length; g++)
        f = Infinity,
        b[g].Zc().forEach(d),
        isFinite(f) && e.push([g, f]);
    e.sort(function(h, l) {
        return h[1] - l[1]
    });
    return e.map(function(h) {
        return b[h[0]]
    })
}
;
function Bb(a, b) {
    return (b = 0 === Ka(b)) && a.D || !b && a.C
}
;function Cb(a, b, c) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? {} : b;
    c = void 0 === c ? !0 : c;
    a = Object.assign({}, Db, a);
    b = Object.assign({}, Db, b);
    zb.call(this, a.si, b.si);
    Eb(this, a.enabled, b.enabled, c)
}
z(Cb, zb);
function Eb(a, b, c, d) {
    a.N = void 0 === b ? !1 : b;
    a.O = void 0 === c ? !1 : c;
    a.J = void 0 === d ? !0 : d
}
Cb.prototype.F = function(a, b) {
    var c = this.S;
    a && (c = a.Xb() || c);
    var d = 0 === Ka(b)
      , e = !d && this.O
      , f = [];
    if (d && this.N || e)
        f = this.g.filter(function(g) {
            return g !== a && g.Ta()
        }),
        d = Fb(c, d, f),
        f = this.i(c, d, b),
        !f.length && Bb(this, b) && (f = this.o(c, b, d));
    !f.length && this.J && (f = zb.prototype.F.call(this, a, b));
    return f
}
;
Cb.prototype.o = function(a, b, c) {
    if (this.J && !this.N && !this.O)
        return zb.prototype.o.call(this, a, b, c);
    var d = []
      , e = 0 === Ka(b)
      , f = !e && this.C;
    if (e && this.D || f)
        b = Na(b),
        d = this.i(a, c, b).reverse();
    return d
}
;
function Fb(a, b, c) {
    return c.filter(function(d) {
        d = d.Zc();
        var e = a.Ma()
          , f = e.na
          , g = e.oa
          , h = e.la;
        e = e.pa;
        var l = b ? eb({
            na: -Infinity,
            la: h,
            oa: Infinity,
            pa: e
        }) : eb({
            na: f,
            la: -Infinity,
            oa: g,
            pa: Infinity
        });
        return d.some(function(m) {
            return cb(l, m)
        })
    })
}
var Db = {
    enabled: !1,
    si: !1
};
function Gb() {
    N.call(this);
    this.j = [];
    this.v = {};
    this.F = this.df();
    this.ua = this.l = null;
    this.Kg = !1;
    this.Rh = "inner-focus";
    this.Yd = this.Yd.bind(this);
    this.ff = this.ff.bind(this)
}
z(Gb, N);
k = Gb.prototype;
k.da = function(a, b) {
    var c;
    if (c = void 0 === b || b instanceof KeyboardEvent || b instanceof WheelEvent)
        a: {
            if (0 < this.j.length && (c = this.l) && c.isVisible() && c.isEnabled()) {
                c = c.da(a, b);
                break a
            }
            c = !1
        }
    return c ? !0 : this.Aa(a, b)
}
;
k.Pa = function() {
    return Hb(this)
}
;
k.focus = function(a) {
    this.Kg = !0;
    if (0 < this.j.length) {
        var b = this.l;
        b && !b.Ta() && (b = null);
        !b && this.ua && this.ua.Ta() && (b = this.ua);
        !b && a && this.F instanceof zb && (b = Ab(this.F, a).filter(function(c) {
            return c.Ta()
        })[0] || null);
        this.T(b || Ib(this), a)
    }
}
;
k.blur = function() {
    this.Kg = !1;
    this.l && this.l.blur()
}
;
k.gb = function() {
    return this.Kg
}
;
function Jb(a, b) {
    Kb(a, b);
    a.ua = b
}
function Kb(a, b) {
    if (-1 === a.j.indexOf(b))
        throw Error("Foreign widget!");
}
function Ib(a) {
    if (0 < a.j.length)
        for (var b = 0; b < a.j.length; b++)
            if (a.j[b].Ta())
                return a.j[b];
    return null
}
function Lb(a) {
    return a.j.filter(function(b) {
        return b.isVisible()
    })
}
k.Fd = function() {
    return 0 < Mb(this).length
}
;
function Mb(a) {
    return a.j.filter(function(b) {
        return b.Ta()
    })
}
k.Ca = function(a, b) {
    this.j.push(a);
    this.F.v(a);
    b && (this.v[b] = a);
    a.on(a.Uf, this.Yd);
    a.on(a.Rh, this.ff);
    (b = a.L()) && O.j.lg(a, b);
    return !0
}
;
function Nb(a, b) {
    var c = a.j.indexOf(b);
    if (-1 !== c) {
        a.j.splice(c, 1);
        a.F.u(b);
        b.off(b.Uf, a.Yd);
        (c = b.L()) && O.j.Yi(b, c);
        for (var d in a.v)
            a.v.hasOwnProperty(d) && a.v[d] === b && delete a.v[d];
        a.l === b && a.T(null)
    }
}
function Ob(a, b) {
    for (var c in a.v)
        if (a.v.hasOwnProperty(c) && a.v[c] === b)
            return c;
    return ""
}
function Pb(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    xb(a.F, b)[c] = d;
    e && (c = Na(new Ja(c)).value,
    xb(a.F, d)[c] = b)
}
k.T = function(a, b) {
    var c = this.gb();
    if (a && (Kb(this, a),
    !a.Ta()))
        return !1;
    var d = this.l;
    d = d ? d.Xb() : null;
    var e = null;
    a === this.l ? c && a && !a.gb() && (e = this.l) : (this.l && this.l.blur(),
    this.l = e = a);
    e && c && (this.B("inner-focus", [this], e),
    e.focus(b || d));
    return !0
}
;
k.df = function() {
    return new Cb({
        enabled: !0
    },{
        enabled: !0
    })
}
;
function Hb(a) {
    for (var b = {}, c = a.v, d = p(Object.keys(c)), e = d.next(); !e.done; e = d.next())
        e = e.value,
        b[e] = c[e].Pa();
    var f = Ob(a, a.l);
    return function() {
        var g = Object.keys(a.v);
        Object.keys(b).filter(function(l) {
            return -1 !== g.indexOf(l)
        }).map(function(l) {
            return b[l]()
        });
        var h = a.v[f] || null;
        h && a.T(h)
    }
}
function Qb(a, b) {
    b = wb(a.F, a.l, b);
    if (!b)
        return !0;
    var c;
    for (c = !1; !c && b.length; )
        c = b.shift(),
        c = a.T(c);
    return c
}
k.Aa = function(a) {
    switch (a) {
    case 1:
        return Qb(this, "left");
    case 2:
        return Qb(this, "up");
    case 3:
        return Qb(this, "right");
    case 4:
        return Qb(this, "down")
    }
    return !1
}
;
k.Yd = function(a, b) {
    this.T(b)
}
;
k.ff = function(a, b, c) {
    this.B(a, [this].concat(b), c)
}
;
function Rb() {
    Gb.call(this);
    this.o = null;
    this.N = this.ra = !0;
    this.Fc = !1;
    this.Uf = "want-focus"
}
z(Rb, Gb);
k = Rb.prototype;
k.L = function() {
    return this.o
}
;
function Sb(a, b) {
    a.o = b;
    b.classList.add("zb-widget")
}
function Tb(a) {
    return a.isVisible() ? gb(a.o.getBoundingClientRect()) : null
}
k.Zc = function() {
    var a = [];
    if (!this.isVisible())
        return a;
    if (this.Fd())
        return Mb(this).forEach(function(c) {
            a = a.concat(c.Zc())
        }),
        a;
    var b = Tb(this);
    if (!b)
        return a;
    a.push(b);
    return a
}
;
k.Xb = function() {
    return this.Fd() ? this.l ? this.l.Xb() : null : Tb(this)
}
;
k.hide = function() {
    Ub(this, !1)
}
;
k.show = function() {
    Ub(this, !0)
}
;
k.isVisible = function() {
    return this.N
}
;
function Ub(a, b) {
    a.N !== b && (a.N = b,
    Vb(a, a.N),
    a.Fc ? a.N ? (a.va(),
    a.o.style.display = "",
    a.La()) : (a.Nb(),
    a.o.style.display = "none",
    a.Ba()) : a.o.style.display = a.N ? "" : "none")
}
function Wb(a, b) {
    a.Fc = b;
    Vb(a, b && a.N)
}
k.va = function() {
    this.j.forEach(function(a) {
        return a.va()
    })
}
;
k.Nb = function() {
    this.j.forEach(function(a) {
        return a.Nb()
    })
}
;
k.La = function() {
    this.j.forEach(function(a) {
        return a.La()
    })
}
;
k.Ba = function() {
    this.j.forEach(function(a) {
        return a.Ba()
    })
}
;
k.blur = function() {
    Gb.prototype.blur.call(this);
    this.fg();
    this.B("blur")
}
;
k.focus = function(a) {
    Gb.prototype.focus.call(this, a);
    this.gg();
    this.B("focus", a)
}
;
k.enable = function() {
    this.ab(!0)
}
;
k.disable = function() {
    this.ab(!1)
}
;
k.isEnabled = function() {
    return this.ra
}
;
k.ab = function(a) {
    this.ra = a;
    K(this.o, "_disabled", !this.ra)
}
;
k.Ta = function() {
    return this.ra && this.N
}
;
function rb(a) {
    a.gb() || a.B("want-focus", a)
}
k.Ef = function(a) {
    this.isEnabled() && this.da(21, a) && a.stopPropagation()
}
;
k.gg = function() {
    this.o.classList.add("_active")
}
;
k.fg = function() {
    this.o.classList.remove("_active")
}
;
function Vb(a, b) {
    a.j.forEach(function(c) {
        return Wb(c, b)
    })
}
function Xb(a, b) {
    a.o.classList.add(b)
}
;function Yb(a) {
    Rb.call(this);
    Sb(this, a)
}
z(Yb, Rb);
Yb.prototype.ae = function(a, b) {
    return this.Ca(a, b)
}
;
function Zb(a, b) {
    a.classList.add("p-zb-about-w-button");
    Yb.call(this, a);
    this.P = "click";
    this.g = b
}
z(Zb, Yb);
function $b(a, b) {
    a.on(a.P, b)
}
Zb.prototype.Aa = function(a) {
    var b = !1;
    21 === a && (this.B(this.P, this.g),
    b = !0);
    return b
}
;
function ac(a) {
    var b = {};
    var c = '<div class="p-zb-about">\n\t<div class="p-zb-about__container" data-export-id="popupContainer">\n\t\t<div class="p-zb-about__slider" data-export-id="slider">\n\t\t\t<div class="p-zb-about__header">\n\t\t\t\t<div class="p-zb-about__logo"></div>\n\t\t\t\t<div class="p-zb-about__title"><span>ZombieBox</span> Application</div>\n\t\t\t\t<div class="p-zb-about__copyright">zombiebox.tv © Interfaced</div>\n\t\t\t</div>\n\t\t\t<div class="p-zb-about__content" data-export-id="content"></div>\n\t\t</div>\n\t\t<div class="p-zb-about__btn _exit" data-component="' + Ga(Zb, {}, "btnExit", b) + '"></div>\n\t\t<div class="p-zb-about__btn _up" data-component="' + Ga(Zb, {}, "arrowUp", b) + '"></div>\n\t\t<div class="p-zb-about__btn _down" data-component="' + Ga(Zb, {}, "arrowDown", b) + '"></div>\n\t</div>\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "btnExit":
            f.rf ? F(e) : f.rf = d;
            break;
        case "arrowUp":
            f.jc ? F(e) : f.jc = d;
            break;
        case "arrowDown":
            f.ic ? F(e) : f.ic = d;
            break;
        case "popupContainer":
            f.If ? F(e) : f.If = d;
            break;
        case "slider":
            f.nd ? F(e) : f.nd = d;
            break;
        case "content":
            f.content ? F(e) : f.content = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        rf: null,
        jc: null,
        ic: null,
        If: null,
        nd: null,
        content: null
    }, a)
}
;function bc() {
    N.call(this);
    this.i = !1;
    this.g = []
}
z(bc, N);
bc.prototype.block = function(a) {
    var b = this;
    if (-1 !== this.g.indexOf(a))
        return a;
    this.g.push(a);
    cc(this, !0);
    a.finally(function() {
        var c = b.g.indexOf(a);
        -1 < c && b.g.splice(c, 1);
        b.g.length || cc(b, !1)
    });
    return a
}
;
function cc(a, b) {
    a.i !== b && ((a.i = b) ? a.B("block") : a.B("unblock"))
}
;function dc() {
    Gb.call(this);
    this.Ja = this.J = this.Z = this.O = null;
    this.Fc = !1;
    this.S = [];
    this.D = new bc;
    this.D.on("block", this.Kj.bind(this));
    this.D.on("unblock", this.Ik.bind(this));
    this.O = jb("zb-layer zb-fullscreen");
    this.J = jb("zb-layer__container zb-fullscreen");
    this.Z = jb("zb-layer__children zb-fullscreen");
    this.Ja = jb("zb-layer__pointer-block zb-fullscreen");
    this.O.appendChild(this.J);
    this.O.appendChild(this.Z);
    this.O.appendChild(this.Ja);
    nb(this.Z);
    nb(this.Ja)
}
z(dc, Gb);
k = dc.prototype;
k.focus = function() {
    Gb.prototype.focus.call(this)
}
;
k.blur = function() {
    Gb.prototype.blur.call(this)
}
;
k.da = function(a, b) {
    if (this.D.i)
        return !1;
    var c = this.S[this.S.length - 1] || null;
    return c ? c.da(a, b) : Gb.prototype.da.call(this, a, b)
}
;
k.toString = function() {
    return this.J ? this.J.className : "none"
}
;
k.wait = function(a) {
    return this.D.block(a)
}
;
k.L = function() {
    return this.J
}
;
k.va = function() {
    !this.l && this.ua && this.T(this.ua);
    this.j.forEach(function(a) {
        a.isVisible() && a.va()
    })
}
;
k.Nb = function() {
    this.j.forEach(function(a) {
        a.isVisible() && a.Nb()
    })
}
;
k.La = function() {
    this.Fc = !0;
    this.j.forEach(function(a) {
        Wb(a, !0);
        a.isVisible() && a.La()
    })
}
;
k.Ba = function() {
    this.Fc = !1;
    this.j.forEach(function(a) {
        Wb(a, !1);
        a.isVisible() && a.Ba()
    })
}
;
k.isVisible = function() {
    return this.Fc
}
;
k.Lf = function(a) {
    function b(f, g) {
        g === a && (a.off("need-to-be-hidden", e),
        c.off("child-layer-hidden", b))
    }
    var c = this
      , d = a.O
      , e = this.sj.bind(this, a);
    a.on("need-to-be-hidden", e);
    this.on("child-layer-hidden", b);
    mb(this.Z);
    a.va();
    this.Z.appendChild(d);
    this.S.push(a);
    a.La();
    a.focus();
    this.B("child-layer-shown", a);
    this.gb() && this.blur()
}
;
k.sj = function(a) {
    var b = a.O;
    this.S.splice(this.S.indexOf(a), 1);
    a.blur();
    a.Nb();
    this.Z.removeChild(b);
    a.Ba();
    0 !== this.S.length || nb(this.Z);
    this.B("child-layer-hidden", a);
    0 !== this.S.length || this.focus()
}
;
function ec(a, b) {
    a.J.classList.add(b)
}
k.Kj = function() {
    mb(this.Ja)
}
;
k.Ik = function() {
    nb(this.Ja)
}
;
function fc() {
    dc.call(this);
    ec(this, "_popup")
}
z(fc, dc);
fc.prototype.close = function(a) {
    this.B("need-to-be-hidden");
    this.B("close", a)
}
;
function gc() {
    fc.call(this);
    this.g = ac(hc(this));
    this.J.appendChild(this.g.root)
}
z(gc, fc);
function hc(a) {
    return {
        Vb: function(b, c) {
            return a.Ca(b, c)
        }
    }
}
;var ic = {
    Im: 2,
    Em: 3,
    Hn: 4,
    In: 5,
    Jm: 6,
    Fm: 7
}
  , jc = {}
  , kc = (jc[2] = {
    name: "hd",
    width: 1280,
    height: 720
},
jc[6] = {
    name: "hd-portrait",
    width: 720,
    height: 1280
},
jc[3] = {
    name: "full-hd",
    width: 1920,
    height: 1080
},
jc[7] = {
    name: "full-hd-portrait",
    width: 1080,
    height: 1920
},
jc[4] = {
    name: "4k",
    width: 3840,
    height: 2160
},
jc[5] = {
    name: "4k",
    width: 7680,
    height: 4320
},
jc);
function lc(a) {
    var b = Za(a);
    return Object.values(ic).filter(function(c) {
        c = kc[c];
        return c.width <= b.x && c.height <= b.y
    }).sort(function(c, d) {
        c = kc[c];
        d = kc[d];
        return c.width === d.width ? d.height - c.height : d.width - c.width
    }).shift() || null
}
function mc(a, b, c) {
    var d = void 0 === d ? Math.round : d;
    var e = c.width / b.width;
    b = c.height / b.height;
    return new Ua({
        na: d(a.na * e),
        la: d(a.la * b),
        oa: d(a.oa * e),
        pa: d(a.pa * b)
    })
}
function nc(a) {
    return new Ua({
        na: 0,
        la: 0,
        oa: a.width,
        pa: a.height
    })
}
;function oc() {
    gc.call(this);
    var a = this;
    this.o = this.i = this.N = this.C = this.u = 0;
    $b(this.g.jc, this.hi.bind(this));
    $b(this.g.ic, this.gi.bind(this));
    $b(this.g.rf, function() {
        return a.close(void 0)
    })
}
z(oc, gc);
k = oc.prototype;
k.La = function() {
    gc.prototype.La.call(this);
    var a = this.g
      , b = window.getComputedStyle(a.content)["line-height"];
    this.u = 2 * parseInt(b, 10);
    this.C = a.If.offsetHeight;
    this.N = a.nd.offsetHeight;
    this.i = Math.max(this.N - this.C, 0);
    pc(this);
    K(this.g.If, "_no-scrolling", !(this.i > this.u / 2));
    qc(this, this.o)
}
;
k.va = function() {
    gc.prototype.va.call(this);
    var a = this.g.content
      , b = rc();
    b = p(Object.entries(b));
    for (var c = b.next(); !c.done; c = b.next()) {
        var d = p(c.value);
        c = d.next().value;
        d = d.next().value;
        a.appendChild(ib("div", "p-zb-about__content-label", c + ": "));
        a.appendChild(ib("div", "p-zb-about__content-value", d));
        a.appendChild(ib("br"))
    }
}
;
k.Aa = function(a, b) {
    var c = this.g;
    if (21 === a)
        switch (this.l) {
        case c.jc:
            return this.hi();
        case c.ic:
            return this.gi();
        case c.rf:
            return this.close(void 0),
            !0
        }
    return 20 === a ? (this.close(void 0),
    !0) : gc.prototype.Aa.call(this, a, b)
}
;
k.hi = function() {
    if (0 === sc(this))
        return !1;
    qc(this, this.o - this.u);
    pc(this);
    return !0
}
;
k.gi = function() {
    if (100 === sc(this))
        return !1;
    qc(this, this.o + this.u);
    pc(this);
    return !0
}
;
function sc(a) {
    return a.i ? 100 * a.o / a.i : 0
}
function qc(a, b) {
    b = Math.min(b, a.i);
    b = Math.max(b, 0);
    a.g.nd.style.top = -b + "px";
    a.o = b
}
function pc(a) {
    var b = a.g;
    0 === sc(a) && (b.jc.disable(),
    b.ic.enable(),
    a.T(b.ic));
    100 === sc(a) && (b.jc.enable(),
    b.ic.disable(),
    a.T(b.jc));
    0 !== sc(a) && 100 !== sc(a) && (b.jc.enable(),
    b.ic.enable());
    a.i > a.u / 2 || (b.jc.disable(),
    b.ic.disable())
}
function rc() {
    function a(c, d) {
        try {
            b[c] = d instanceof Function ? d() : d
        } catch (e) {
            b[c] = e instanceof pb ? "N/A" : "ERR"
        }
    }
    var b = {};
    a("Application name", "vktv");
    a("Application version", "1.3.12");
    a("ZombieBox version", "2.7.12");
    a("Device type", function() {
        return O.device.info.type()
    });
    a("Version", function() {
        return O.device.info.version()
    });
    a("Device model", function() {
        return O.device.info.model()
    });
    a("Software version", function() {
        return O.device.info.Gl()
    });
    a("Resolution", function() {
        var c = O.device.info.Yb();
        return kc[c].name
    });
    a("Locale", function() {
        return "" + O.device.info.locale()
    });
    return tc ? tc(b) : b
}
var uc, tc, vc = [6, 7, 8, 10, 12, 13, 14];
var wc = {};
function xc(a, b, c) {
    b = void 0 === b ? NaN : b;
    c = void 0 === c ? NaN : c;
    this.g = a;
    this.i = b;
    this.j = c;
    a = this.toString();
    wc.hasOwnProperty(a) || (wc[a] = this);
    return wc[a]
}
xc.prototype.toString = function() {
    return this.g + "|" + this.i + ":" + this.j
}
;
t.Object.defineProperties(xc.prototype, {
    x: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.i
        },
        set: function() {
            throw Error("Cannot set property x of #<Proportion> which has only a getter");
        }
    },
    y: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.j
        },
        set: function() {
            throw Error("Cannot set property y of #<Proportion> which has only a getter");
        }
    },
    name: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        },
        set: function() {
            throw Error("Cannot set property name of #<Proportion> which has only a getter");
        }
    }
});
new xc("KEEP");
new xc("AUTO");
new xc("4:3",4,3);
new xc("16:9",16,9);
var yc = {}
  , zc = (yc.idle = ["loading", "error", "destroyed", "invalid"],
yc.loading = ["idle", "ready", "error", "destroyed"],
yc.ready = ["seeking", "idle", "playing", "error", "destroyed"],
yc.playing = "idle paused seeking waiting ended error destroyed".split(" "),
yc.paused = ["idle", "playing", "seeking", "error", "destroyed"],
yc.waiting = ["idle", "playing", "ended", "error", "destroyed"],
yc.seeking = "ready idle playing paused waiting ended error destroyed".split(" "),
yc.ended = ["idle", "seeking", "error", "destroyed"],
yc.error = "idle loading playing paused waiting seeking ended destroyed".split(" "),
yc.invalid = ["destroyed"],
yc.destroyed = [],
yc);
function Ac() {
    N.call(this);
    this.storage = this.input = this.info = null;
    this.i = !0;
    this.o = "internet-connection-status-changed";
    this.Kb = "ready"
}
z(Ac, N);
function Bc() {
    this.g = ""
}
function Cc(a, b) {
    return window.localStorage.getItem(a.g + b)
}
function Dc(a, b, c) {
    try {
        window.localStorage.setItem(a.g + b, c)
    } catch (d) {
        throw a = "Storage error: " + d,
        "QUOTA_EXCEEDED_ERR" === d.name && (a = "No space left on device"),
        a;
    }
}
;function Ec(a, b) {
    N.call(this);
    this.j = a;
    this.g = b;
    this.i = null;
    this.Lb = "state-enter";
    this.Bc = "state-exit"
}
z(Ec, N);
function Fc(a, b) {
    if (!Gc(a, b))
        throw new Hc(a.g,b);
    if (a.i && a.i.yc !== b)
        throw new Jc(a.i.from,a.i.yc,b);
    if (a.i) {
        var c = a.i.from;
        a.i = null
    } else
        c = a.g,
        a.B(a.Bc, c, b);
    a.g = b;
    a.B(a.Lb, a.g, c)
}
function Kc(a, b) {
    var c = Gc(a, b)
      , d = a.i && a.i.yc !== b;
    c && !d && Fc(a, b)
}
function Lc(a, b) {
    if (a.i)
        throw new Jc(a.i.from,a.i.yc,b);
    if (!Gc(a, b))
        throw new Hc(a.g,b);
    a.i = {
        from: a.g,
        yc: b
    };
    a.g = null;
    a.B(a.Bc, a.i.from, b)
}
function Gc(a, b) {
    return !a.g || (a.j[a.g] || []).includes(b)
}
function Mc(a) {
    return !!a.i && "destroyed" === a.i.yc
}
function Nc(a) {
    a.i && (a.g = a.i.from,
    a.i = null)
}
function Hc(a, b) {
    var c = Error.call(this, 'Invalid transition from "' + a + '" to "' + b + '"');
    this.message = c.message;
    "stack"in c && (this.stack = c.stack);
    this.from = a;
    this.yc = b
}
z(Hc, Error);
function Jc(a, b, c) {
    c = Error.call(this, 'There is a pending transition from "' + a + '" to "' + b + '", cannot transition to "' + c + '"');
    this.message = c.message;
    "stack"in c && (this.stack = c.stack);
    this.from = a;
    this.yc = b
}
z(Jc, Error);
function Oc(a, b) {
    N.call(this);
    var c = this;
    this.J = a;
    this.C = b;
    this.V = new Ec(zc,"idle");
    this.Bc = "state-exit";
    this.Lb = "state-enter";
    this.pj = "will-stop";
    this.oj = "will-seek";
    this.Ja = "idle";
    this.hb = "loading";
    this.Kb = "ready";
    this.Rd = "playing";
    this.Ue = "paused";
    this.Wa = "waiting";
    this.hc = "seeking";
    this.dc = "ended";
    this.Ia = "error";
    this.ya = "invalid";
    this.ja = "destroyed";
    this.Ub = "time-update";
    this.nj = "seeked";
    this.V.on(this.V.Bc, function(d, e, f) {
        return c.B(c.Bc, e, f)
    });
    this.V.on(this.V.Lb, function(d, e, f) {
        c.B(c.Lb, e, f);
        d = {};
        d = (d.idle = c.Ja,
        d.loading = c.hb,
        d.ready = c.Kb,
        d.playing = c.Rd,
        d.paused = c.Ue,
        d.waiting = c.Wa,
        d.seeking = c.hc,
        d.ended = c.dc,
        d.invalid = c.ya,
        d.destroyed = c.ja,
        d);
        d.hasOwnProperty(e) && c.B(d[e])
    });
    Pc(this)
}
z(Oc, N);
k = Oc.prototype;
k.prepare = function() {}
;
k.getState = function() {
    return this.V.g
}
;
k.mi = function() {
    throw new pb("DRM protection");
}
;
k.vi = function() {
    throw new pb("DRM protection");
}
;
k.Jh = function(a, b) {
    this.J = a;
    this.C = b;
    this.zd.Jh(this.J, this.C)
}
;
function Pc(a) {
    function b(e, f, g) {
        var h, l = f.includes("error") ? f : f.concat(["error"]);
        for (f = {
            Qc: a
        }; f.Qc && !(h = Object.getOwnPropertyNames(f.Qc).find(function(m) {
            return function(n) {
                return m.Qc[n] === e
            }
        }(f))); f = {
            Qc: f.Qc
        },
        f.Qc = Object.getPrototypeOf(f.Qc))
            ;
        a[h] = function() {
            var m = ya.apply(0, arguments)
              , n = Array.isArray(l) ? l : [l]
              , q = a.V.g;
            if (!n.includes(q))
                throw new Qc(q,n,g);
            return e.apply(a, m)
        }
    }
    var c = "loading ready playing paused waiting seeking ended".split(" ")
      , d = "ready playing paused waiting seeking ended".split(" ");
    b(a.prepare, ["idle"], "prepare() can only be called while Video is not initialized with media file");
    b(a.mi, ["idle"], "attachDRM() can only be called while Video is not initialized with media file");
    b(a.vi, ["idle"], "detachDRM() can only be called while Video is not initialized with media file");
    b(a.play, ["ready", "paused"], "play() can only be called when Video is ready to play");
    b(a.pause, ["playing"], "pause() can only be called when Video is playing");
    b(a.stop, c, "stop() can only be called when Video is initialized with a media file");
    b(a.el, c, "getUrl() can only be called when Video is initialized with a media file");
    b(a.getDuration, d, "getDuration() can only be called when Video has loaded the media");
    b(a.Ed, d, "getPosition() can only be called when Video has loaded the media");
    b(a.setPosition, "ready playing paused waiting seeking ended".split(" "), "setPosition() can only be called when Video has loaded the media");
    b(a.dl, d, "getPlaybackRate() can only be called when Video has loaded the media");
    b(a.El, d, "setPlaybackRate() can only be called when Video has loaded the media")
}
function Qc(a, b, c) {
    a = Error.call(this, (void 0 === c ? "Incorrect state" : c) + "; Current state is " + a + ", expected: " + b.join(" or "));
    this.message = a.message;
    "stack"in a && (this.stack = a.stack)
}
z(Qc, Error);
function Rc(a, b) {
    this.g = a;
    this.i = b;
    this.v = mc(nc(this.g), this.g, this.i)
}
Rc.prototype.Jh = function(a, b) {
    this.g = a;
    this.i = b;
    this.v = mc(nc(this.g), this.g, this.i);
    this.j()
}
;
function Sc() {}
Sc.prototype.locale = function() {
    var a = this.Oj();
    return Tc.test(a) ? a : null
}
;
var Tc = RegExp("^(?:(en-GB-oed|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\\d{3}))?((?:-(?:[\\da-z]{5,8}|\\d[\\da-z]{3}))*)?((?:-[\\da-wy-z](?:-[\\da-z]{2,8})+)*)?(-x(?:-[\\da-z]{1,8})+)?$|^(x(?:-[\\da-z]{1,8})+)$", "i");
function Uc(a, b) {
    var c = this;
    this.g = NaN;
    this.j = !1;
    this.i = a;
    this.l = b;
    this.o = function() {
        c.j = !0;
        c.i && c.i()
    }
}
Uc.prototype.start = function() {
    Number.isNaN(this.g) && (this.j = !1,
    this.g = setTimeout(this.o, this.l))
}
;
Uc.prototype.stop = function() {
    clearTimeout(this.g);
    this.g = NaN
}
;
function Vc(a) {
    a.stop();
    a.start()
}
function Wc(a, b) {
    a.i = void 0 === b ? null : b
}
;function Xc() {
    N.call(this);
    this.i = !1;
    this.j = [];
    this.u = 0;
    this.F = this.N();
    this.v = null;
    this.l = this.o = !1;
    this.g = null;
    this.D = 15E3;
    this.C = "pointing-device-activated";
    this.J = "pointing-device-deactivated";
    this.ig = this.ig.bind(this);
    this.jf = this.jf.bind(this);
    Yc(this);
    Zc(this);
    $c(this);
    !isNaN(void 0) && isFinite(void 0) && (this.D = void 0);
    this.g && this.g.stop();
    this.g = null;
    this.g = new Uc(this.jf,this.D)
}
z(Xc, N);
k = Xc.prototype;
k.block = function() {
    this.j.push(++this.u);
    this.i = !0;
    return this.u
}
;
k.Ol = function(a) {
    a = this.j.indexOf(a);
    -1 !== a && this.j.splice(a, 1);
    0 === this.j.length && (this.i = !1)
}
;
k.le = function(a) {
    "wheel" === a.type || "mousewheel" === a.type ? a = ad(a) : (a = a.keyCode,
    a = this.F.hasOwnProperty(String(a)) ? this.F[a] : 0);
    return a
}
;
function bd(a) {
    var b = {
        5: "0",
        6: "1",
        7: "2",
        8: "3",
        9: "4",
        10: "5",
        11: "6",
        12: "7",
        13: "8",
        14: "9"
    };
    return b.hasOwnProperty(a) ? b[a] : null
}
function Yc(a) {
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                a.o = !0
            }
        }))
    } catch (b) {}
}
function Zc(a) {
    ["keydown", "mousewheel", "wheel"].forEach(function(b) {
        document.addEventListener(b, function() {
            var c = ya.apply(0, arguments);
            a.v && a.v.apply(a, r(c))
        }, a.o && {
            passive: !1
        })
    })
}
function ad(a) {
    function b(f) {
        return "delta" + f in a ? a["delta" + f] : "wheelDelta" + f in a ? -a["wheelDelta" + f] : 0
    }
    var c = b("X")
      , d = b("Y");
    if (c && d)
        return 0;
    c || d || "wheelDelta"in a && (d = -a.wheelDelta);
    var e = Math.sign(c || d);
    return e ? c ? 0 < e ? 45 : 44 : d ? 0 < e ? 43 : 42 : 0 : 0
}
k.ig = function() {
    cd(this, !0)
}
;
k.jf = function() {
    cd(this, !1)
}
;
function cd(a, b) {
    a.g && (b ? Vc(a.g) : a.g.stop());
    a.l !== b && (a.l = b,
    a.B(b ? "pointing-device-activated" : "pointing-device-deactivated"))
}
function $c(a) {
    function b(f, g) {
        e.addEventListener(f, g, a.o ? {
            passive: !0,
            capture: !1
        } : !1)
    }
    var c = a.ig.bind(a)
      , d = a.jf.bind(a)
      , e = document.body;
    "mouseenter mousemove mouseup mousedown mousewheel wheel".split(" ").forEach(function(f) {
        return b(f, c)
    });
    b("mouseleave", d);
    b("mouseover", function(f) {
        !f || f.fromElement || f.relatedTarget || c()
    });
    b("mouseout", function(f) {
        !f || f.toElement || f.relatedTarget || d()
    })
}
;function dd(a, b) {
    (b = ed(b)) && (a = a + (-1 !== a.indexOf("?") ? "&" : "?") + b);
    return a
}
function ed(a) {
    var b, c = [];
    for (b in a)
        if (a.hasOwnProperty(b)) {
            var d = a[b];
            if ("undefined" !== typeof d)
                if (Array.isArray(d))
                    for (var e = 0; e < d.length; e++)
                        c.push(encodeURIComponent(b) + "[]=" + encodeURIComponent(d[e]));
                else
                    c.push(encodeURIComponent(b) + "=" + encodeURIComponent(d))
        }
    return c.join("&").replace(/%20/g, "+")
}
function fd(a) {
    return 0 === a.length ? {} : a.split("&").reduce(function(b, c) {
        var d = c.split("=");
        c = decodeURIComponent(d[0]);
        d = d[1] ? decodeURIComponent(d[1]) : "";
        "[]" === c.slice(-2) ? (b[c] || (b[c] = []),
        b[c].push(d)) : b[c] = d;
        return b
    }, {})
}
;function gd(a) {
    try {
        if ("undefined" === typeof Sentry)
            throw Error("Sentry is undefined, check it is included in current version of app.");
        a(Sentry)
    } catch (b) {}
}
;function hd(a) {
    N.call(this);
    this.i = {};
    this.l = a;
    this.g = null
}
z(hd, N);
hd.prototype.Pa = function() {
    return function(a) {
        return this.j(a)
    }
    .bind(this, this.g)
}
;
hd.prototype.register = function(a, b) {
    var c = a.O;
    this.i[b] = a;
    this.l.appendChild(c);
    c.style.display = "none"
}
;
function id(a, b) {
    for (var c in a.i)
        if (a.i.hasOwnProperty(c) && a.i[c] === b)
            return c;
    return null
}
hd.prototype.j = function(a) {
    var b = this
      , c = this.g
      , d = {
        Zb: a,
        Hg: c
    }
      , e = Promise.resolve().then(function() {
        b.B("transition-start", d);
        return jd(b, c)
    }).then(function() {
        return kd(b, a)
    }).then(function() {
        b.g = a;
        b.B("transition-success", d)
    }).then(null, function(f) {
        f instanceof Error || (f = Error(f));
        ld(b, f, d);
        throw f;
    });
    c && c.wait(e);
    return e
}
;
hd.prototype.hide = function() {
    jd(this, this.g);
    this.g = null
}
;
function jd(a, b) {
    if (!b)
        return Promise.resolve();
    a.B("before-hide", b);
    b.blur();
    b.Nb();
    b.O.style.display = "none";
    b.Ba();
    a.B("after-hide", b);
    return Promise.resolve()
}
function kd(a, b) {
    return b ? Promise.resolve().then(function() {
        a.B("before-show", b);
        return b.va()
    }).then(function() {
        b.O.style.display = "";
        b.La();
        b.focus();
        a.B("after-show", b)
    }) : Promise.resolve()
}
function ld(a, b, c) {
    var d = ["LayerManager::_transit: failed"]
      , e = c.Hg
      , f = c.Zb;
    e && d.push('from "' + (id(a, e) || "unknown") + '"');
    d.push('to "' + (id(a, f) || "unknown") + '"');
    d.push("(" + b.message + ",");
    d.push((b.stack || b.stacktrace || "") + ")");
    a.B("transition-fail", c, b);
    Promise.reject(b)
}
;function md() {}
md.prototype.Pa = function() {
    var a = this.Gb.g
      , b = a ? a.Pa() : function() {}
      , c = this.Gb.Pa()
      , d = this.Gb.hide.bind(this.Gb);
    return function() {
        return Promise.resolve().then(d).then(b).then(c)
    }
}
;
md.prototype.i = function(a, b) {
    var c = this;
    this.g.o([this]);
    return Promise.resolve().then(function() {
        return c.Gb.hide()
    }).then(function() {
        a.T(null);
        return b ? b() : null
    }).then(function() {
        return c.Gb.j(a)
    })
}
;
function nd() {}
z(nd, md);
nd.prototype.Pa = function() {
    var a = this.Gb.g
      , b = a ? a.Pa() : function() {}
      , c = this.Gb.Pa();
    return function() {
        return Promise.resolve().then(b).then(c)
    }
}
;
nd.prototype.i = function(a, b) {
    var c = this;
    this.g.o([this]);
    return Promise.resolve().then(function() {
        a.T(null);
        return b ? b() : null
    }).then(function() {
        return c.Gb.j(a)
    })
}
;
function od() {
    hd.apply(this, arguments)
}
z(od, hd);
od.prototype.Pa = function() {
    return function(a) {
        return this.j(a, !0)
    }
    .bind(this, this.g)
}
;
od.prototype.j = function(a, b) {
    var c = this
      , d = this.g
      , e = {
        Zb: a,
        Hg: d,
        ll: void 0 === b ? !1 : b
    };
    b = Promise.resolve().then(function() {
        c.B("transition-start", e);
        return jd(c, d)
    }).then(function() {
        return kd(c, a)
    }).then(function() {
        c.g = a;
        c.B("transition-success", e)
    }).then(null, function(f) {
        f instanceof Error || (f = Error(f));
        ld(c, f, e);
        throw f;
    });
    d && d.wait(b);
    return b
}
;
function pd() {
    this.i = [];
    this.g = -1
}
pd.prototype.o = function(a) {
    var b = this.i[this.g] || null;
    b && qd(b);
    this.g++;
    this.i = this.i.slice(0, this.g);
    this.i.push({
        vl: a,
        state: []
    })
}
;
function rd(a) {
    var b = a.i[a.g + -1];
    return b ? Promise.resolve().then(function() {
        var c = a.i[a.g] || null;
        c && qd(c);
        return sd(b)
    }).then(function() {
        a.g += -1
    }) : Promise.resolve()
}
pd.prototype.clear = function() {
    this.i = [];
    this.g = -1
}
;
pd.prototype.v = function() {
    return rd(this)
}
;
function qd(a) {
    a.state = a.vl.map(function(b) {
        return b.Pa()
    })
}
function sd(a) {
    return a.state.filter(Boolean).reduce(function(b, c) {
        return b.then(c)
    }, Promise.resolve())
}
t.Object.defineProperties(pd.prototype, {
    length: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.i.length
        }
    }
});
function td() {
    pd.call(this);
    this.l = [];
    this.u = this.j = null
}
z(td, pd);
td.prototype.o = function(a) {
    pd.prototype.o.call(this, a);
    if (a = this.j.g) {
        var b = a === this.j.i["owner-videos-list"];
        this.u === this.j.i.player && b && this.l.push([this.g - 1, this.g])
    }
    this.u = a
}
;
td.prototype.v = function() {
    ud(this);
    return pd.prototype.v.call(this)
}
;
function ud(a) {
    var b = a.u === a.j.i.player
      , c = a.j.g === a.j.i["owner-videos-list"];
    c && (c && b && a.l.push([a.g, a.g + 1]),
    b = a.l.filter(function(d, e, f) {
        if (0 === e)
            return e = p(f[e + 1] || []).next().value,
            d = p(d),
            d.next(),
            d = d.next().value,
            e && e - 1 === d;
        e = p(f[e - 1]);
        e.next();
        e = e.next().value;
        d = p(d).next().value;
        return e + 1 === d
    }),
    c = b.shift()) && (b.reverse(),
    b.forEach(function(d) {
        a.i.splice(d[0], d.length)
    }),
    c = p(c),
    b = c.next().value,
    c = c.next().value,
    a.i.splice(c, 1),
    a.l = [],
    a.g = b)
}
;function P() {
    Rb.call(this);
    this.g = this.pb();
    Sb(this, kb(this.g.root))
}
z(P, Rb);
function vd(a) {
    return {
        Vb: function(b, c) {
            a.Ca(b, /\[]$/.test(c) ? "" : c)
        }
    }
}
;function wd(a) {
    return I("<div></div>\n", {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null
    }, a)
}
;function xd() {
    P.call(this);
    Xb(this, "c-loader")
}
z(xd, P);
xd.prototype.Ta = function() {
    return !1
}
;
xd.prototype.pb = function() {
    return wd(vd(this))
}
;
function Q(a) {
    return a * O.S
}
;var yd = {
    id: "RewriteAppJS",
    name: "RewriteAppJS",
    setupOnce: function(a) {
        a(function(b) {
            return yd.process(b)
        })
    },
    process: function(a) {
        var b = a;
        a.exception && Array.isArray(a.exception.values) && (b = yd.yk(b));
        return b
    },
    yk: function(a) {
        try {
            return Object.assign({}, a, {
                exception: Object.assign({}, a.exception, {
                    values: a.exception.values.map(function(b) {
                        return Object.assign({}, b, {
                            stacktrace: Object.assign({}, b.stacktrace, {
                                frames: b.stacktrace && b.stacktrace.frames && b.stacktrace.frames.map(function(c) {
                                    /app\.js$/.test(c.filename) && (c.filename = "/app.js");
                                    return c
                                })
                            })
                        })
                    })
                })
            })
        } catch (b) {
            return a
        }
    }
};
function zd(a, b, c) {
    K(a, "_" + b, c)
}
function Ad(a, b) {
    a.classList.remove("_" + b)
}
function Bd(a, b) {
    a.classList.add("_" + b)
}
;function Cd(a, b) {
    b = void 0 === b ? {} : b;
    var c = b.Ok, d = b.Lk, e = void 0 === b.ri ? "cancel-promise" : b.ri, f;
    b = new Promise(function(g, h) {
        f = function() {
            return h(e)
        }
        ;
        a.then(function(l) {
            return g(l)
        }, function(l) {
            return h(l)
        })
    }
    );
    b.cancel = function() {
        c && c();
        f();
        d && d();
        return null
    }
    ;
    return b
}
function Dd(a) {
    return new Promise(function(b) {
        var c = setTimeout(function() {
            b(c)
        }, a)
    }
    )
}
function Ed(a, b) {
    var c, d = new Promise(function(e, f) {
        function g(h, l) {
            e(l)
        }
        c = function() {
            try {
                a.off(b, g)
            } catch (h) {}
            return f("off-promise")
        }
        ;
        a.once(b, g)
    }
    );
    d.off = function() {
        c();
        return null
    }
    ;
    return d
}
;function Fd(a, b) {
    try {
        return a()
    } catch (c) {
        return b()
    }
}
function Gd() {
    var a = O.device.info
      , b = a.type();
    a = a.version();
    return "webos" === b && 4 > Number(a[0])
}
;function Hd(a) {
    return a in Id ? {
        lang: a,
        code: Id[a]
    } : null
}
var Jd = {}
  , Id = (Jd.ru = 0,
Jd.uk = 1,
Jd.be = 2,
Jd.en = 3,
Jd.es = 4,
Jd.pt = 73,
Jd.kz = 97,
Jd.en = 0,
Jd);
function Kd(a) {
    this.g = Ld(this, a, ".")
}
Kd.prototype.Ma = function(a) {
    return this.g[a] || null
}
;
function Ld(a, b, c) {
    var d = {}, e = {}, f;
    for (f in b)
        e.Ac = f,
        b.hasOwnProperty(e.Ac) && ("[object Object]" === Object.prototype.toString.call(b[e.Ac]) ? (e.Re = Ld(a, b[e.Ac], c),
        Object.keys(e.Re).forEach(function(g) {
            return function(h) {
                d[g.Ac + c + h] = g.Re[h]
            }
        }(e))) : d[e.Ac] = b[e.Ac].toString()),
        e = {
            Ac: e.Ac,
            Re: e.Re
        };
    return d
}
;var Md = [-2, -1, 0, 1, 2];
var Nd = {
    ru: {
        formats: {
            date: {
                full: "EEEE, d MMMM y 'г'.",
                "long": "d MMMM y 'г'.",
                medium: "d MMM y 'г'.",
                "short": "dd.MM.y"
            },
            time: {
                full: "HH:mm:ss zzzz",
                "long": "HH:mm:ss z",
                medium: "HH:mm:ss",
                "short": "HH:mm"
            },
            dateTime: {
                "short": "[date], [time]",
                medium: "[date], [time]",
                full: "[date], [time]",
                "long": "[date], [time]"
            }
        },
        calendar: {
            days: {
                wide: {
                    0: "воскресенье",
                    1: "понедельник",
                    2: "вторник",
                    3: "среда",
                    4: "четверг",
                    5: "пятница",
                    6: "суббота"
                },
                narrow: {
                    0: "вс",
                    1: "пн",
                    2: "вт",
                    3: "ср",
                    4: "чт",
                    5: "пт",
                    6: "сб"
                },
                abbreviated: {
                    0: "вс",
                    1: "пн",
                    2: "вт",
                    3: "ср",
                    4: "чт",
                    5: "пт",
                    6: "сб"
                }
            },
            months: {
                wide: {
                    0: "января",
                    1: "февраля",
                    2: "марта",
                    3: "апреля",
                    4: "мая",
                    5: "июня",
                    6: "июля",
                    7: "августа",
                    8: "сентября",
                    9: "октября",
                    10: "ноября",
                    11: "декабря"
                },
                narrow: {
                    0: "Я",
                    1: "Ф",
                    2: "М",
                    3: "А",
                    4: "М",
                    5: "И",
                    6: "И",
                    7: "А",
                    8: "С",
                    9: "О",
                    10: "Н",
                    11: "Д"
                },
                abbreviated: {
                    0: "янв.",
                    1: "февр.",
                    2: "мар.",
                    3: "апр.",
                    4: "мая",
                    5: "июн.",
                    6: "июл.",
                    7: "авг.",
                    8: "сент.",
                    9: "окт.",
                    10: "нояб.",
                    11: "дек."
                }
            },
            dayPeriods: {
                am: "AM",
                pm: "PM"
            }
        }
    },
    en: {
        formats: {
            date: {
                full: "EEEE, MMMM d, y",
                "long": "MMMM d, y",
                medium: "MMM d, y",
                "short": "M/d/yy"
            },
            time: {
                full: "h:mm:ss a zzzz",
                "long": "h:mm:ss a z",
                medium: "h:mm:ss a",
                "short": "h:mm a"
            },
            dateTime: {
                "short": "[date], [time]",
                medium: "[date], [time]",
                full: "[date] 'at' [time]",
                "long": "[date] 'at' [time]"
            }
        },
        calendar: {
            days: {
                wide: {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday"
                },
                narrow: {
                    0: "S",
                    1: "M",
                    2: "T",
                    3: "W",
                    4: "T",
                    5: "F",
                    6: "S"
                },
                abbreviated: {
                    0: "Sun",
                    1: "Mon",
                    2: "Tue",
                    3: "Wed",
                    4: "Thu",
                    5: "Fri",
                    6: "Sat"
                }
            },
            months: {
                wide: {
                    0: "January",
                    1: "February",
                    2: "March",
                    3: "April",
                    4: "May",
                    5: "June",
                    6: "July",
                    7: "August",
                    8: "September",
                    9: "October",
                    10: "November",
                    11: "December"
                },
                narrow: {
                    0: "J",
                    1: "F",
                    2: "M",
                    3: "A",
                    4: "M",
                    5: "J",
                    6: "J",
                    7: "A",
                    8: "S",
                    9: "O",
                    10: "N",
                    11: "D"
                },
                abbreviated: {
                    0: "Jan",
                    1: "Feb",
                    2: "Mar",
                    3: "Apr",
                    4: "May",
                    5: "Jun",
                    6: "Jul",
                    7: "Aug",
                    8: "Sep",
                    9: "Oct",
                    10: "Nov",
                    11: "Dec"
                }
            },
            dayPeriods: {
                am: "AM",
                pm: "PM"
            }
        }
    }
};
var Od = {
    ru: {
        year: {
            adverbs: {
                0: "в этом году",
                1: "в следующем году",
                "-1": "в прошлом году"
            },
            future: "[valuePlural:через [value] год|через [value] года|через [value] лет|через [value] года]",
            past: "[valuePlural:[value] год назад|[value] года назад|[value] лет назад|[value] года назад]"
        },
        month: {
            adverbs: {
                0: "в этом месяце",
                1: "в следующем месяце",
                "-1": "в прошлом месяце"
            },
            future: "[valuePlural:через [value] месяц|через [value] месяца|через [value] месяцев|через [value] месяца]",
            past: "[valuePlural:[value] месяц назад|[value] месяца назад|[value] месяцев назад|[value] месяца назад]"
        },
        week: {
            adverbs: {
                0: "на этой неделе",
                1: "на следующей неделе",
                "-1": "на прошлой неделе"
            },
            future: "[valuePlural:через [value] неделю|через [value] недели|через [value] недель|через [value] недели]",
            past: "[valuePlural:[value] неделю назад|[value] недели назад|[value] недель назад|[value] недели назад]"
        },
        day: {
            adverbs: {
                0: "сегодня",
                1: "завтра",
                2: "послезавтра",
                "-2": "позавчера",
                "-1": "вчера"
            },
            future: "[valuePlural:через [value] день|через [value] дня|через [value] дней|через [value] дня]",
            past: "[valuePlural:[value] день назад|[value] дня назад|[value] дней назад|[value] дня назад]"
        },
        hour: {
            adverbs: {
                0: "в этот час"
            },
            future: "[valuePlural:через [value] час|через [value] часа|через [value] часов|через [value] часа]",
            past: "[valuePlural:[value] час назад|[value] часа назад|[value] часов назад|[value] часа назад]"
        },
        minute: {
            adverbs: {
                0: "в эту минуту"
            },
            future: "[valuePlural:через [value] минуту|через [value] минуты|через [value] минут|через [value] минуты]",
            past: "[valuePlural:[value] минуту назад|[value] минуты назад|[value] минут назад|[value] минуты назад]"
        },
        second: {
            adverbs: {
                0: "сейчас"
            },
            future: "[valuePlural:через [value] секунду|через [value] секунды|через [value] секунд|через [value] секунды]",
            past: "[valuePlural:[value] секунду назад|[value] секунды назад|[value] секунд назад|[value] секунды назад]"
        }
    },
    en: {
        year: {
            adverbs: {
                0: "this year",
                1: "next year",
                "-1": "last year"
            },
            future: "[valuePlural:in [value] year|in [value] years]",
            past: "[valuePlural:[value] year ago|[value] years ago]"
        },
        month: {
            adverbs: {
                0: "this month",
                1: "next month",
                "-1": "last month"
            },
            future: "[valuePlural:in [value] month|in [value] months]",
            past: "[valuePlural:[value] month ago|[value] months ago]"
        },
        week: {
            adverbs: {
                0: "this week",
                1: "next week",
                "-1": "last week"
            },
            future: "[valuePlural:in [value] week|in [value] weeks]",
            past: "[valuePlural:[value] week ago|[value] weeks ago]"
        },
        day: {
            adverbs: {
                0: "today",
                1: "tomorrow",
                "-1": "yesterday"
            },
            future: "[valuePlural:in [value] day|in [value] days]",
            past: "[valuePlural:[value] day ago|[value] days ago]"
        },
        hour: {
            adverbs: {
                0: "this hour"
            },
            future: "[valuePlural:in [value] hour|in [value] hours]",
            past: "[valuePlural:[value] hour ago|[value] hours ago]"
        },
        minute: {
            adverbs: {
                0: "this minute"
            },
            future: "[valuePlural:in [value] minute|in [value] minutes]",
            past: "[valuePlural:[value] minute ago|[value] minutes ago]"
        },
        second: {
            adverbs: {
                0: "now"
            },
            future: "[valuePlural:in [value] second|in [value] seconds]",
            past: "[valuePlural:[value] second ago|[value] seconds ago]"
        }
    }
};
function Pd(a, b, c) {
    for (; b <= c; b++)
        if (a === b)
            return !0;
    return !1
}
function Qd(a, b) {
    var c = [];
    a.split("-").reduce(function(d, e) {
        c.push(d);
        return d + "-" + e
    });
    c.push(a);
    c.reverse();
    return c.find(b) || null
}
function Rd(a) {
    var b = (new Date(a,0,1)).getDay(), c;
    (c = 4 === b) || (c = (0 === a % 4 && 0 !== a % 100 || 0 === a % 400) && 3 === b);
    return c ? 53 : 52
}
function Sd(a) {
    var b = new Date(a.getFullYear(),0,1);
    b = Math.floor((a - b) / 24 / 60 / 60 / 1E3) + 1;
    var c = a.getDay();
    0 === c && (c = 7);
    b = Math.floor((b - c + 10) / 7);
    return 1 > b ? Rd(a.getFullYear() - 1) : 52 <= b && (a = Rd(a.getFullYear()),
    b > a) ? 1 : b
}
;function Td() {
    this.g = function(a) {
        return a
    }
    ;
    Ud(this)
}
function Ud(a) {
    function b(q) {
        return (q.getMonth() + 1).toString()
    }
    function c(q) {
        return a.g("datetime.calendar.days.abbreviated." + q.getDay())
    }
    function d(q) {
        return q.getDate().toString()
    }
    function e(q) {
        return 12 <= q.getHours() ? a.g("datetime.calendar.dayPeriods.pm") : a.g("datetime.calendar.dayPeriods.am")
    }
    function f(q) {
        return (q.getHours() % 12 || 12).toString()
    }
    function g(q) {
        return q.getHours().toString()
    }
    function h(q) {
        return q.getMinutes().toString()
    }
    function l(q) {
        return q.getSeconds().toString()
    }
    function m() {
        return ""
    }
    function n(q) {
        return function(u) {
            return ("00" + q.call(null, u)).slice(-2)
        }
    }
    a.i = {
        s: l,
        ss: n(l),
        m: h,
        mm: n(h),
        H: g,
        HH: n(g),
        h: f,
        hh: n(f),
        a: function(q) {
            return e(q).toLowerCase()
        },
        A: e,
        d: d,
        dd: n(d),
        E: c,
        EE: c,
        EEE: c,
        EEEE: function(q) {
            return a.g("datetime.calendar.days.wide." + q.getDay())
        },
        EEEEE: function(q) {
            return a.g("datetime.calendar.days.narrow." + q.getDay())
        },
        M: b,
        MM: n(b),
        MMM: function(q) {
            return a.g("datetime.calendar.months.abbreviated." + q.getMonth())
        },
        MMMM: function(q) {
            return a.g("datetime.calendar.months.wide." + q.getMonth())
        },
        MMMMM: function(q) {
            return a.g("datetime.calendar.months.narrow." + q.getMonth())
        },
        y: function(q) {
            return q.getFullYear().toString()
        },
        yy: function(q) {
            return (q.getFullYear() % 100).toString()
        },
        X: function(q) {
            return Math.floor(q.getTime() / 1E3).toString()
        },
        x: function(q) {
            return q.getTime().toString()
        },
        z: m,
        zz: m,
        zzz: m,
        zzzz: m
    }
}
;function Vd() {
    this.i = new Td;
    this.g = null;
    var a = Object.keys(this.i.i).sort().reverse().join("|");
    this.j = new RegExp(["\\'.+?\\'", a, ".+?"].join("|"),"g");
    Wd(this)
}
k = Vd.prototype;
k.Ah = function(a) {
    this.g = a;
    this.i.g = a.Od
}
;
k.wd = function(a) {
    var b = Qd(a, function(c) {
        return Nd.hasOwnProperty(c)
    });
    a = Qd(a, function(c) {
        return Od.hasOwnProperty(c)
    });
    return !(!b || !a)
}
;
k.Lh = function(a) {
    this.wd(a) && Xd(this, a)
}
;
k.Kh = function(a) {
    this.wd(a) && Xd(this, a)
}
;
function Yd(a, b, c) {
    var d = c.match(a.j);
    return d ? d.map(function(e) {
        return a.i.i.hasOwnProperty(e) ? a.i.i[e](b) : Zd(e)
    }).join("") : c
}
k.getTime = function(a, b) {
    return Yd(this, a, $d(this, "time", b))
}
;
k.getDate = function(a, b) {
    return Yd(this, a, $d(this, "date", b))
}
;
function ae(a, b) {
    return b.find(function(c) {
        return 0 < a[c]
    }) || b[b.length - 1]
}
function be(a, b, c) {
    function d(l, m) {
        m = void 0 === m ? 1 : m;
        return l.setDate(l.getDate() + m)
    }
    function e(l, m) {
        m = void 0 === m ? 1 : m;
        return l.setMonth(l.getMonth() + m)
    }
    function f(l, m) {
        m = void 0 === m ? 1 : m;
        return l.setYear(l.getFullYear() + m)
    }
    a = p(a < b ? [a, b] : [b, a]);
    var g = a.next().value;
    a = a.next().value;
    b = {};
    b = (b.year = 0,
    b.month = 0,
    b.week = 0,
    b.day = 0,
    b.hour = 0,
    b.minute = 0,
    b.second = 0,
    b);
    g = new Date(g);
    var h;
    if (c.includes("year")) {
        for (h = new Date(g); f(h) <= a; )
            b.year++;
        f(g, b.year)
    }
    if (c.includes("month")) {
        for (h = new Date(g); e(h) <= a; )
            b.month++;
        e(g, b.month)
    }
    if (c.includes("week")) {
        for (h = new Date(g); d(h, 7) <= a; )
            b.week++;
        d(g, 7 * b.week)
    }
    if (c.includes("day")) {
        for (h = new Date(g); d(h) <= a; )
            b.day++;
        d(g, b.day)
    }
    a = a.getTime() - g.getTime();
    c.includes("hour") && (b.hour = Math.floor(a / 36E5),
    a -= 36E5 * b.hour);
    c.includes("minute") && (b.minute = Math.floor(a / 6E4),
    a -= 6E4 * b.minute);
    c.includes("second") && (b.second = Math.floor(a / 1E3),
    a -= 1E3 * b.second);
    return b
}
function Wd(a) {
    var b = {};
    a.l = (b.year = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        return c.getFullYear() === d.getFullYear() + e
    }
    ,
    b.month = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        return c.getFullYear() === d.getFullYear() && c.getMonth() === d.getMonth() + e
    }
    ,
    b.week = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        return c.getFullYear() === d.getFullYear() && Sd(c) === Sd(d) + e
    }
    ,
    b.day = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        d = new Date(d);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + e);
        e = new Date(d);
        e.setHours(24);
        return c >= d && c < e
    }
    ,
    b.hour = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        d = new Date(d);
        d.setMinutes(0, 0, 0);
        d.setHours(d.getHours() + e);
        e = new Date(d);
        e.setMinutes(60);
        return c >= d && c < e
    }
    ,
    b.minute = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        d = new Date(d);
        d.setSeconds(0, 0);
        d.setMinutes(d.getMinutes() + e);
        e = new Date(d);
        e.setSeconds(60);
        return c >= d && c < e
    }
    ,
    b.second = function(c, d, e) {
        e = void 0 === e ? 0 : e;
        d = new Date(d);
        d.setMilliseconds(0);
        d.setSeconds(d.getSeconds() + e);
        e = new Date(d);
        e.setMilliseconds(60);
        return c >= d && c < e
    }
    ,
    b)
}
function Zd(a) {
    a = a.split("''");
    a = a.map(function(b) {
        return b.replace(RegExp("'", "g"), "")
    });
    return a.join("'")
}
function Xd(a, b) {
    var c = Qd(b, function(e) {
        return Nd.hasOwnProperty(e)
    })
      , d = Qd(b, function(e) {
        return Od.hasOwnProperty(e)
    });
    c && a.g.Wc(b, new Kd({
        datetime: {
            calendar: Nd[c].calendar,
            dateTimeFormats: Nd[c].formats.dateTime
        }
    }));
    d && a.g.Wc(b, new Kd({
        relative: Od[d]
    }))
}
function $d(a, b, c) {
    var d = a.g.xf();
    d = d && Qd(d, function(e) {
        return Nd.hasOwnProperty(e)
    });
    a = a.g.Lg();
    a = Qd(a, function(e) {
        return Nd.hasOwnProperty(e)
    });
    return d ? Nd[d].formats[b][c] || "" : a ? Nd[a].formats[b][c] || "" : ""
}
;var ce = {
    ru: {
        AOA: {
            narrowSymbol: "Kz"
        },
        ARS: {
            narrowSymbol: "$"
        },
        AUD: {
            symbol: "A$",
            narrowSymbol: "$"
        },
        BAM: {
            narrowSymbol: "KM"
        },
        BBD: {
            narrowSymbol: "$"
        },
        BDT: {
            narrowSymbol: "৳"
        },
        BMD: {
            narrowSymbol: "$"
        },
        BND: {
            narrowSymbol: "$"
        },
        BOB: {
            narrowSymbol: "Bs"
        },
        BRL: {
            symbol: "R$",
            narrowSymbol: "R$"
        },
        BSD: {
            narrowSymbol: "$"
        },
        BWP: {
            narrowSymbol: "P"
        },
        BYN: {
            narrowSymbol: "р."
        },
        BZD: {
            narrowSymbol: "$"
        },
        CAD: {
            symbol: "CA$",
            narrowSymbol: "$"
        },
        CLP: {
            narrowSymbol: "$"
        },
        CNY: {
            symbol: "CN¥",
            narrowSymbol: "¥"
        },
        COP: {
            narrowSymbol: "$"
        },
        CRC: {
            narrowSymbol: "₡"
        },
        CUC: {
            narrowSymbol: "$"
        },
        CUP: {
            narrowSymbol: "$"
        },
        CZK: {
            narrowSymbol: "Kč"
        },
        DKK: {
            narrowSymbol: "kr"
        },
        DOP: {
            narrowSymbol: "$"
        },
        EGP: {
            narrowSymbol: "E£"
        },
        ESP: {
            narrowSymbol: "₧"
        },
        EUR: {
            symbol: "€",
            narrowSymbol: "€"
        },
        FJD: {
            narrowSymbol: "$"
        },
        FKP: {
            narrowSymbol: "£"
        },
        GBP: {
            symbol: "£",
            narrowSymbol: "£"
        },
        GEL: {
            narrowSymbol: "ლ"
        },
        GIP: {
            narrowSymbol: "£"
        },
        GNF: {
            narrowSymbol: "FG"
        },
        GTQ: {
            narrowSymbol: "Q"
        },
        GYD: {
            narrowSymbol: "$"
        },
        HKD: {
            symbol: "HK$",
            narrowSymbol: "$"
        },
        HNL: {
            narrowSymbol: "L"
        },
        HRK: {
            narrowSymbol: "kn"
        },
        HUF: {
            narrowSymbol: "Ft"
        },
        IDR: {
            narrowSymbol: "Rp"
        },
        ILS: {
            symbol: "₪",
            narrowSymbol: "₪"
        },
        INR: {
            symbol: "₹",
            narrowSymbol: "₹"
        },
        ISK: {
            narrowSymbol: "kr"
        },
        JMD: {
            narrowSymbol: "$"
        },
        JPY: {
            symbol: "¥",
            narrowSymbol: "¥"
        },
        KHR: {
            narrowSymbol: "៛"
        },
        KMF: {
            narrowSymbol: "CF"
        },
        KPW: {
            narrowSymbol: "₩"
        },
        KRW: {
            symbol: "₩",
            narrowSymbol: "₩"
        },
        KYD: {
            narrowSymbol: "$"
        },
        KZT: {
            narrowSymbol: "₸"
        },
        LAK: {
            narrowSymbol: "₭"
        },
        LBP: {
            narrowSymbol: "L£"
        },
        LKR: {
            narrowSymbol: "Rs"
        },
        LRD: {
            narrowSymbol: "$"
        },
        LTL: {
            narrowSymbol: "Lt"
        },
        LVL: {
            narrowSymbol: "Ls"
        },
        MGA: {
            narrowSymbol: "Ar"
        },
        MMK: {
            narrowSymbol: "K"
        },
        MNT: {
            narrowSymbol: "₮"
        },
        MUR: {
            narrowSymbol: "Rs"
        },
        MXN: {
            symbol: "MX$",
            narrowSymbol: "$"
        },
        MYR: {
            narrowSymbol: "RM"
        },
        NAD: {
            narrowSymbol: "$"
        },
        NGN: {
            narrowSymbol: "₦"
        },
        NIO: {
            narrowSymbol: "C$"
        },
        NOK: {
            narrowSymbol: "kr"
        },
        NPR: {
            narrowSymbol: "Rs"
        },
        NZD: {
            symbol: "NZ$",
            narrowSymbol: "$"
        },
        PHP: {
            narrowSymbol: "₱"
        },
        PKR: {
            narrowSymbol: "Rs"
        },
        PLN: {
            narrowSymbol: "zł"
        },
        PYG: {
            narrowSymbol: "₲"
        },
        RON: {
            narrowSymbol: "L"
        },
        RUB: {
            symbol: "₽",
            narrowSymbol: "₽"
        },
        RUR: {
            symbol: "р.",
            narrowSymbol: "р."
        },
        RWF: {
            narrowSymbol: "RF"
        },
        SBD: {
            narrowSymbol: "$"
        },
        SEK: {
            narrowSymbol: "kr"
        },
        SGD: {
            narrowSymbol: "$"
        },
        SHP: {
            narrowSymbol: "£"
        },
        SRD: {
            narrowSymbol: "$"
        },
        SSP: {
            narrowSymbol: "£"
        },
        STN: {
            narrowSymbol: "Db"
        },
        SYP: {
            narrowSymbol: "£"
        },
        THB: {
            symbol: "฿",
            narrowSymbol: "฿"
        },
        TMT: {
            symbol: "ТМТ"
        },
        TOP: {
            narrowSymbol: "T$"
        },
        TRY: {
            narrowSymbol: "₺"
        },
        TTD: {
            narrowSymbol: "$"
        },
        TWD: {
            symbol: "NT$",
            narrowSymbol: "NT$"
        },
        UAH: {
            symbol: "₴",
            narrowSymbol: "₴"
        },
        USD: {
            symbol: "$",
            narrowSymbol: "$"
        },
        UYU: {
            narrowSymbol: "$"
        },
        VEF: {
            narrowSymbol: "Bs"
        },
        VND: {
            symbol: "₫",
            narrowSymbol: "₫"
        },
        XAF: {
            symbol: "FCFA"
        },
        XCD: {
            symbol: "EC$",
            narrowSymbol: "$"
        },
        XOF: {
            symbol: "CFA"
        },
        XPF: {
            symbol: "CFPF"
        },
        XXX: {
            symbol: "XXXX"
        },
        ZAR: {
            narrowSymbol: "R"
        },
        ZMW: {
            narrowSymbol: "ZK"
        }
    },
    en: {
        AOA: {
            narrowSymbol: "Kz"
        },
        ARS: {
            narrowSymbol: "$"
        },
        AUD: {
            symbol: "A$",
            narrowSymbol: "$"
        },
        BAM: {
            narrowSymbol: "KM"
        },
        BBD: {
            narrowSymbol: "$"
        },
        BDT: {
            narrowSymbol: "৳"
        },
        BMD: {
            narrowSymbol: "$"
        },
        BND: {
            narrowSymbol: "$"
        },
        BOB: {
            narrowSymbol: "Bs"
        },
        BRL: {
            symbol: "R$",
            narrowSymbol: "R$"
        },
        BSD: {
            narrowSymbol: "$"
        },
        BWP: {
            narrowSymbol: "P"
        },
        BYN: {
            narrowSymbol: "р."
        },
        BZD: {
            narrowSymbol: "$"
        },
        CAD: {
            symbol: "CA$",
            narrowSymbol: "$"
        },
        CLP: {
            narrowSymbol: "$"
        },
        CNY: {
            symbol: "CN¥",
            narrowSymbol: "¥"
        },
        COP: {
            narrowSymbol: "$"
        },
        CRC: {
            narrowSymbol: "₡"
        },
        CUC: {
            narrowSymbol: "$"
        },
        CUP: {
            narrowSymbol: "$"
        },
        CZK: {
            narrowSymbol: "Kč"
        },
        DKK: {
            narrowSymbol: "kr"
        },
        DOP: {
            narrowSymbol: "$"
        },
        EGP: {
            narrowSymbol: "E£"
        },
        ESP: {
            narrowSymbol: "₧"
        },
        EUR: {
            symbol: "€",
            narrowSymbol: "€"
        },
        FJD: {
            narrowSymbol: "$"
        },
        FKP: {
            narrowSymbol: "£"
        },
        GBP: {
            symbol: "£",
            narrowSymbol: "£"
        },
        GEL: {
            narrowSymbol: "₾"
        },
        GIP: {
            narrowSymbol: "£"
        },
        GNF: {
            narrowSymbol: "FG"
        },
        GTQ: {
            narrowSymbol: "Q"
        },
        GYD: {
            narrowSymbol: "$"
        },
        HKD: {
            symbol: "HK$",
            narrowSymbol: "$"
        },
        HNL: {
            narrowSymbol: "L"
        },
        HRK: {
            narrowSymbol: "kn"
        },
        HUF: {
            narrowSymbol: "Ft"
        },
        IDR: {
            narrowSymbol: "Rp"
        },
        ILS: {
            symbol: "₪",
            narrowSymbol: "₪"
        },
        INR: {
            symbol: "₹",
            narrowSymbol: "₹"
        },
        ISK: {
            narrowSymbol: "kr"
        },
        JMD: {
            narrowSymbol: "$"
        },
        JPY: {
            symbol: "¥",
            narrowSymbol: "¥"
        },
        KHR: {
            narrowSymbol: "៛"
        },
        KMF: {
            narrowSymbol: "CF"
        },
        KPW: {
            narrowSymbol: "₩"
        },
        KRW: {
            symbol: "₩",
            narrowSymbol: "₩"
        },
        KYD: {
            narrowSymbol: "$"
        },
        KZT: {
            narrowSymbol: "₸"
        },
        LAK: {
            narrowSymbol: "₭"
        },
        LBP: {
            narrowSymbol: "L£"
        },
        LKR: {
            narrowSymbol: "Rs"
        },
        LRD: {
            narrowSymbol: "$"
        },
        LTL: {
            narrowSymbol: "Lt"
        },
        LVL: {
            narrowSymbol: "Ls"
        },
        MGA: {
            narrowSymbol: "Ar"
        },
        MMK: {
            narrowSymbol: "K"
        },
        MNT: {
            narrowSymbol: "₮"
        },
        MUR: {
            narrowSymbol: "Rs"
        },
        MXN: {
            symbol: "MX$",
            narrowSymbol: "$"
        },
        MYR: {
            narrowSymbol: "RM"
        },
        NAD: {
            narrowSymbol: "$"
        },
        NGN: {
            narrowSymbol: "₦"
        },
        NIO: {
            narrowSymbol: "C$"
        },
        NOK: {
            narrowSymbol: "kr"
        },
        NPR: {
            narrowSymbol: "Rs"
        },
        NZD: {
            symbol: "NZ$",
            narrowSymbol: "$"
        },
        PHP: {
            narrowSymbol: "₱"
        },
        PKR: {
            narrowSymbol: "Rs"
        },
        PLN: {
            narrowSymbol: "zł"
        },
        PYG: {
            narrowSymbol: "₲"
        },
        RON: {
            narrowSymbol: "lei"
        },
        RUB: {
            narrowSymbol: "₽"
        },
        RUR: {
            narrowSymbol: "р."
        },
        RWF: {
            narrowSymbol: "RF"
        },
        SBD: {
            narrowSymbol: "$"
        },
        SEK: {
            narrowSymbol: "kr"
        },
        SGD: {
            narrowSymbol: "$"
        },
        SHP: {
            narrowSymbol: "£"
        },
        SRD: {
            narrowSymbol: "$"
        },
        SSP: {
            narrowSymbol: "£"
        },
        STN: {
            narrowSymbol: "Db"
        },
        SYP: {
            narrowSymbol: "£"
        },
        THB: {
            narrowSymbol: "฿"
        },
        TOP: {
            narrowSymbol: "T$"
        },
        TRY: {
            narrowSymbol: "₺"
        },
        TTD: {
            narrowSymbol: "$"
        },
        TWD: {
            symbol: "NT$",
            narrowSymbol: "$"
        },
        UAH: {
            narrowSymbol: "₴"
        },
        USD: {
            symbol: "$",
            narrowSymbol: "$"
        },
        UYU: {
            narrowSymbol: "$"
        },
        VEF: {
            narrowSymbol: "Bs"
        },
        VND: {
            symbol: "₫",
            narrowSymbol: "₫"
        },
        XAF: {
            symbol: "FCFA"
        },
        XCD: {
            symbol: "EC$",
            narrowSymbol: "$"
        },
        XOF: {
            symbol: "CFA"
        },
        XPF: {
            symbol: "CFPF"
        },
        XXX: {
            symbol: "¤"
        },
        ZAR: {
            narrowSymbol: "R"
        },
        ZMW: {
            narrowSymbol: "ZK"
        }
    }
};
var de = {
    ru: {
        delimiters: {
            decimal: ",",
            group: " "
        },
        currency: "[value] [symbol]"
    },
    en: {
        delimiters: {
            decimal: ".",
            group: ","
        },
        currency: "[symbol][value]"
    }
};
function ee() {
    this.g = null
}
ee.prototype.Ah = function(a) {
    this.g = a
}
;
ee.prototype.wd = function(a) {
    return !!Qd(a, function(b) {
        return de.hasOwnProperty(b)
    })
}
;
ee.prototype.Lh = function(a) {
    this.wd(a) && fe(this, a)
}
;
ee.prototype.Kh = function(a) {
    this.wd(a) && fe(this, a)
}
;
function fe(a, b) {
    var c = Qd(b, function(d) {
        return de.hasOwnProperty(d)
    });
    c && a.g.Wc(b, new Kd({
        numbers: {
            formats: de[c],
            currencies: ce[c]
        }
    }))
}
;var ge = {
    ru: function(a) {
        var b = p(a.toString().split("."));
        a = b.next().value;
        b = (b = b.next().value) || "";
        a = Math.abs(parseInt(a || "", 10)).toFixed(0);
        b.replace(/0+$/, "");
        a = parseInt(a, 10) || 0;
        b = b.length;
        switch (!0) {
        case 0 === b && 1 === a % 10 && 11 !== a % 100:
            return "one";
        case 0 === b && Pd(a % 10, 2, 4) && !Pd(a % 100, 12, 14):
            return "few";
        case 0 === b && 0 === a % 10 || 0 === b && Pd(a % 10, 5, 9) || 0 === b && Pd(a % 100, 11, 14):
            return "many";
        default:
            return "other"
        }
    },
    en: function(a) {
        var b = p(a.toString().split("."));
        a = b.next().value;
        b = (b = b.next().value) || "";
        a = Math.abs(parseInt(a || "", 10)).toFixed(0);
        b.replace(/0+$/, "");
        a = parseInt(a, 10) || 0;
        b = b.length;
        switch (!0) {
        case 1 === a && 0 === b:
            return "one";
        default:
            return "other"
        }
    }
};
var he = {
    ru: ["one", "few", "many", "other"],
    en: ["one", "other"]
};
function ie() {}
ie.prototype.Ah = function() {}
;
ie.prototype.wd = function(a) {
    var b = Qd(a, function(c) {
        return he.hasOwnProperty(c)
    });
    a = Qd(a, function(c) {
        return ge.hasOwnProperty(c)
    });
    return !(!b || !a)
}
;
ie.prototype.Lh = function() {}
;
ie.prototype.Kh = function() {}
;
function je(a, b, c) {
    var d = b;
    b = RegExp("\\[(\\w+?)Plural:(.*?)\\]", "g");
    if (!b.test(d))
        return d;
    a = Qd(a, function(g) {
        return he.hasOwnProperty(g)
    });
    if (!a || !he.hasOwnProperty(a) || !ge.hasOwnProperty(a))
        return d.replace(b, "???");
    var e = he[a]
      , f = ge[a];
    Object.keys(c).forEach(function(g) {
        var h = c[g]
          , l = new RegExp("\\[%key%Plural:(.*?)\\]".replace("%key%", g),"g");
        if ("number" !== typeof h)
            d = d.replace(l, "???");
        else if (g = d.match(l)) {
            h = f(h);
            var m = e.indexOf(h);
            g.forEach(function(n) {
                var q = n.replace(l, "$1").split("|", e.length);
                d = d.replace(n, q[m] || "???")
            })
        }
    });
    return d
}
;function ke() {
    this.time = new Vd;
    this.o = new ee;
    this.v = new ie;
    this.l = [this.time, this.o, this.v];
    this.j = {};
    this.i = null;
    this.g = "en";
    le(this)
}
function me(a, b) {
    a.i = b;
    a.l.forEach(function(c) {
        return c.Lh(a.i)
    })
}
k = ke.prototype;
k.xf = function() {
    return this.i
}
;
function ne(a) {
    a.g = "en";
    a.l.forEach(function(b) {
        return b.Kh(a.g)
    })
}
k.Lg = function() {
    return this.g
}
;
k.Wc = function(a, b) {
    this.j[a] || (this.j[a] = []);
    if (-1 !== this.j[a].indexOf(b))
        throw Error("Already added pack cannot be added again");
    this.j[a].unshift(b)
}
;
k.ad = function(a, b) {
    return null !== oe(this, b || this.i || this.g, a)
}
;
k.G = function(a, b) {
    if (this.i) {
        var c = this.i;
        var d = oe(this, c, a);
        d || (c = this.g,
        d = oe(this, c, a))
    } else
        c = this.g,
        d = oe(this, c, a);
    if (!d)
        return a;
    b && (d = pe(this, d, b),
    d = je(c, d, b));
    return d
}
;
function le(a) {
    var b = {
        Wc: a.Wc.bind(a),
        ad: a.ad.bind(a),
        Od: a.G.bind(a),
        xf: a.xf.bind(a),
        Lg: a.Lg.bind(a)
    };
    a.l.forEach(function(c) {
        return c.Ah(b)
    })
}
function oe(a, b, c) {
    var d = null;
    Qd(b, function(e) {
        (a.j[e] || []).some(function(f) {
            f = f.Ma(c);
            return "string" === typeof f ? (d = f,
            !0) : !1
        });
        return "string" === typeof d
    });
    return d
}
function pe(a, b, c) {
    var d = b;
    Object.keys(c).forEach(function(e) {
        var f = c[e];
        if ("number" === typeof f) {
            var g = a.o;
            var h = Math.floor(f).toString();
            var l = f === parseInt(f, 10)
              , m = 3 < h.length
              , n = g.g.xf();
            m && (m = n && g.g.ad("numbers.formats.delimiters.group", n) ? g.g.Od("numbers.formats.delimiters.group") : "",
            h = h.replace(/\B(?=(\d{3})+(?!\d))/g, m));
            l || (g = n && g.g.ad("numbers.formats.delimiters.decimal", n) ? g.g.Od("numbers.formats.delimiters.decimal") : ".",
            f = f.toString(),
            f = f.split(".")[1],
            h += g + f);
            f = h
        }
        d = d.replace(new RegExp("\\[%key%\\]".replace("%key%", e),"g"), f)
    });
    return d
}
;function qe(a) {
    return a && "object" === typeof a
}
function re() {
    return ya.apply(0, arguments).reduce(function(a, b) {
        Object.keys(b).forEach(function(c) {
            var d = a[c]
              , e = b[c];
            a[c] = Array.isArray(d) && Array.isArray(e) ? d.concat.apply(d, r(e)) : qe(d) && qe(e) ? re(d, e) : e
        });
        return a
    }, {})
}
function R(a, b, c) {
    var d = ya.apply(3, arguments)
      , e = null
      , f = [];
    c.every(function(g) {
        var h = a.hasOwnProperty(g);
        h || f.push(g);
        return h
    }) && (e = new (Function.prototype.bind.apply(b, [null, a].concat(r(d)))));
    return e
}
;function se(a) {
    this.height = a.height;
    this.width = a.width;
    this.url = a.url
}
function te(a) {
    return R(a, se, ["height", "width", "url"])
}
function ue(a, b, c) {
    c = void 0 === c ? !1 : c;
    a.sort(function(d, e) {
        return d.with_padding && !e.with_padding ? c ? -1 : 1 : !d.with_padding && e.with_padding ? c ? 1 : -1 : Math.abs(b - d.width) - Math.abs(b - e.width)
    });
    return a.length ? te(a[0]) : null
}
function ve(a) {
    var b = kc[O.device.info.Yb()]
      , c = b.width;
    b = b.height;
    var d = Infinity
      , e = a[0];
    a = p(a);
    for (var f = a.next(); !f.done; f = a.next()) {
        f = f.value;
        var g = c - f.width
          , h = b - f.height;
        g = g * g + h * h;
        g < d && (e = f,
        d = g)
    }
    return e
}
function we(a) {
    var b = kc[O.device.info.Yb()];
    return a ? 2 >= b.width / a.width && 2 >= b.height / a.height : !1
}
;function xe(a) {
    this.id = a.id;
    this.j = a.members_count || 0;
    this.type = a.type || "";
    this.$a = a.photo_200 || a.photo_100 || a.photo_50 || null;
    this.v = a.photo_100 || null;
    this.url = a.url || "";
    this.i = !!a.is_member;
    this.l = a.name
}
xe.prototype.g = function() {
    return this.l
}
;
function ye(a) {
    return R(a, xe, ["id", "name"])
}
;function ze(a) {
    this.name = a.name;
    this.id = a.id;
    this.g = a.photo || []
}
t.Object.defineProperties(ze.prototype, {
    $a: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        }
    }
});
function Ae(a) {
    this.v = a.photo_100 || null;
    this.u = a.id || null;
    this.D = a.first_name || null;
    this.C = a.last_name || null;
    this.F = a.photo || a.photo_200 || a.photo_200_orig || a.photo_400_orig || a.photo_max || a.photo_max_orig || a.photo_100 || a.photo_50 || null;
    this.J = a.photo_50 || null
}
Ae.prototype.g = function() {
    return [this.l, this.N].filter(function(a) {
        return !!a
    }).join(" ")
}
;
function Be(a) {
    return R(a, Ae, ["id", "first_name", "last_name"])
}
function Ce() {
    return Be({
        id: null,
        first_name: "Unknown",
        last_name: ""
    })
}
t.Object.defineProperties(Ae.prototype, {
    id: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.u
        }
    },
    l: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.D
        }
    },
    N: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.C
        }
    },
    o: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.J
        }
    },
    $a: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.F
        }
    }
});
function De(a) {
    this.count = a.count;
    this.zc = !!a.user_likes
}
;function Ee(a) {
    this.l = a.mp4_240 || null;
    this.o = a.mp4_360 || null;
    this.v = a.mp4_480 || null;
    this.u = a.mp4_720 || null;
    this.g = a.mp4_1080 || null;
    this.i = a.mp4_1440 || null;
    this.j = a.mp4_2160 || null;
    this.C = a.hls || null;
    this.N = a.dash_uni || null;
    this.F = a.dash_sep || null;
    this.D = a.dash_webm || null;
    this.O = a.hls_ondemand || null;
    this.Z = a.hls_live_playback || null;
    this.J = a.dash_ondemand || null;
    this.S = a.failover_host || null
}
;function Fe(a) {
    var b = this;
    this.title = a.title;
    this.text = a.text;
    this.blur = a.blur;
    a.card_icon && a.card_icon.map(function(c) {
        return te(c)
    });
    a.list_icon && a.list_icon.map(function(c) {
        return te(c)
    });
    this.g = NaN;
    a.disclaimer_type && Object.entries(Ge).find(function(c) {
        var d = p(c);
        c = d.next().value;
        d = d.next().value;
        d === a.disclaimer_type && (b.g = Ge[c]);
        return d === a.disclaimer_type
    })
}
var Ge = {
    Am: 1,
    nn: 2,
    Xl: 3,
    km: 4
};
function He(a) {
    var b = this;
    this.v = a.count_per_image;
    this.u = a.count_per_row;
    this.l = a.count_total;
    this.i = a.frame_height;
    this.j = a.frame_width;
    this.o = a.frequency;
    this.g = [];
    (a.links || []).forEach(function(c) {
        b.g.push(c)
    })
}
;function Ie(a, b) {
    if (Number.isInteger(a))
        a = a.toString();
    else {
        var c = void 0 === b ? 1 : b;
        b = Math.floor(a);
        a = Math.floor((a - b) * Math.pow(10, void 0 === c ? 1 : c));
        a = 0 < a ? [b, a].join() : b.toString()
    }
    return a
}
function Je(a) {
    var b = void 0 === b ? 1 : b;
    return 1E3 > a ? a.toString() : 1E3 <= a && 1E6 > a ? Ie(a / 1E3, b) + "K" : 1E6 <= a && 1E9 > a ? Ie(a / 1E6, b) + "M" : 1E9 <= a ? Ie(a / 1E9, b) + "B" : a.toString()
}
function Ke(a, b, c) {
    return Math.max(b, Math.min(a, c))
}
function Le(a, b) {
    var c = a % b;
    0 > c && (c = b + a);
    return Math.abs(c)
}
;function Me(a) {
    this.event = a.event;
    this.url = a.url;
    this.g = {};
    a.params && a.params.interval && (this.g.interval = a.params.interval)
}
;function Ne(a) {
    this.id = a.id;
    this.O = a.ads;
    this.Oa = a.live_status || null;
    this.j = a.live_start_time ? new Date(1E3 * a.live_start_time) : null;
    this.o = !(!a.live_settings || !a.live_settings.can_rewind);
    this.Z = a.live_settings ? a.live_settings.max_duration : NaN;
    this.xa = a.owner_id;
    this.F = a.user_id || null;
    this.l = this.ma = this.u = null;
    this.duration = 1E3 * a.duration;
    this.date = a.date ? new Date(1E3 * a.date) : new Date(0);
    this.wg = a.comments || null;
    this.width = a.width || null;
    this.height = a.height || null;
    this.Ne = a.views || null;
    this.ua = a.spectators || null;
    this.title = a.title;
    this.ea = a.track_code || "";
    this.Ja = a.uv_stats_place || "";
    this.type = a.type || "";
    this.description = a.description || "";
    this.rc = !!a.is_favorite;
    this.platform = a.platform;
    this.Qb = a.likes ? R(a.likes || {}, De, ["count", "user_likes"]) : null;
    this.g = R(a.files || {}, Ee, []);
    this.i = R(a.trailer || {}, Ee, []);
    this.image = this.Jb = this.v = null;
    this.S = !1;
    this.N = this.J = null;
    this.ya = 1E3 * (a.viewed_duration || 0);
    this.zf = !!a.content_restricted;
    this.ra = a.partner_text;
    this.ja = a.restriction ? R(a.restriction, Fe, ["text", "title"]) : null;
    if (a.image) {
        this.image = ue(a.image, 384, this.$);
        var b = a.image.map(te).sort(function(c, d) {
            return c.width * c.height - d.width * c.height
        });
        this.J = ve(b);
        this.S = we(this.J)
    }
    a.first_frame && ue(a.first_frame, 384);
    a.timeline_thumbs && (this.Jb = R(a.timeline_thumbs, He, "count_per_image count_per_row count_total frame_height frame_width frequency is_uv links".split(" ")));
    a.stats_pixels && a.stats_pixels.length && (this.N = a.stats_pixels.map(function(c) {
        c = ["start", "stop", "pause", "resume", "heartbeat"].includes(c.event) ? R(c, Me, ["event", "url"]) : null;
        return c
    }).filter(Boolean).reduce(function(c, d) {
        c[d.event] = d;
        return c
    }, {}));
    this.type === Oe && (this.v = (a.main_artists || []).map(function(c) {
        return R(c, ze, ["name", "id", "domain"])
    }).filter(Boolean));
    if (a = a.ov_id || null)
        a = parseInt(a, 10),
        this.l = isNaN(a) ? this.l : a
}
Ne.prototype.wc = function(a) {
    this.ma = a
}
;
function Pe(a, b) {
    return a.N && a.N[b] || null
}
function Qe(a) {
    Object.keys(a.files || {}).every(function(c) {
        return Se.includes(c)
    }) && delete a.files;
    var b = ["id", "owner_id", "title"];
    a.type !== Te || a.content_restricted || b.push("files");
    return R(a, Ne, b)
}
t.Object.defineProperties(Ne.prototype, {
    C: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.xa
        }
    },
    ta: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.C + "_" + this.id
        }
    },
    trailer: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.i.l || this.i.o || this.i.v || this.i.u || this.i.g || this.i.i || this.i.j || null
        }
    },
    $: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.width && this.height ? 1 > this.width / this.height : !1
        }
    },
    D: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.type === Ue
        }
    }
});
var Ue = "live"
  , Te = "video"
  , Oe = "music_video"
  , Se = ["external"];
function Ve(a) {
    this.id = a.id;
    this.xa = a.owner_id;
    this.count = a.count;
    this.url = a.url;
    this.title = a.title;
    this.image = null;
    a.image && (this.image = ue(a.image, 300))
}
Ve.prototype.wc = function(a) {
    this.ma = a
}
;
function We(a) {
    return R(a, Ve, ["id", "owner_id", "count", "updated_time", "title"])
}
;function Xe(a) {
    this.name = a.name;
    this.title = a.title
}
;function Ye(a) {
    this.id = a.id;
    this.Da = a.next_from || null;
    a: switch (a.data_type) {
    case "albums":
        var b = Ze;
        break a;
    case "videos":
        b = $e;
        break a;
    default:
        b = af
    }
    this.dataType = b;
    this.g = R(a.layout, Xe, ["name"]);
    this.i = a.search_suggestions_ids || null;
    this.j = a
}
Ye.prototype.Fa = function() {
    return this.j
}
;
var Ze = "albums"
  , $e = "videos"
  , af = "unknown";
function bf() {
    dc.call(this);
    ec(this, "_scene")
}
z(bf, dc);
function cf() {
    Yb.apply(this, arguments)
}
z(cf, Yb);
cf.prototype.O = function() {}
;
function df(a, b, c) {
    cf.call(this, a);
    this.u = b;
    this.C = !0;
    this.g = null;
    this.J = !!c;
    this.P = "click"
}
z(df, cf);
df.prototype.da = function(a, b) {
    return this.C ? 21 === a ? (this.J ? ef(this, b) : this.B(this.P, this.u),
    !0) : cf.prototype.da.call(this, a, b) : !1
}
;
df.prototype.Ef = function(a) {
    this.C && cf.prototype.Ef.call(this, a)
}
;
df.prototype.O = function() {
    var a = this;
    this.J && !this.g && (this.g = setTimeout(function() {
        clearTimeout(a.g);
        a.g = null;
        a.B("long-press", a.u)
    }, 500))
}
;
function ef(a, b) {
    if (!(b instanceof KeyboardEvent) && a.g)
        clearTimeout(a.g),
        a.g = null,
        a.B(a.P, a.u);
    else if (!a.g) {
        var c = null
          , d = function() {
            document.removeEventListener("keyup", c);
            clearTimeout(a.g);
            a.g = null
        };
        a.g = setTimeout(function() {
            d();
            a.B("long-press", a.u)
        }, 500);
        c = function() {
            d();
            a.B(a.P, a.u)
        }
        ;
        document.addEventListener("keyup", c)
    }
}
t.Object.defineProperties(df.prototype, {
    data: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.u
        }
    }
});
function ff(a) {
    return I('<div data-export-id="icon"></div>\n', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        case "icon":
            d.icon ? F(c) : d.icon = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null,
        icon: null
    }, a)
}
;function gf(a) {
    this.lb = a.block_id;
    this.title = a.title;
    this.dataType = a.data_type || af
}
function hf(a) {
    return R(a, gf, ["block_id", "title"])
}
;function jf(a) {
    return kf[a] ? kf[a] : lf
}
function mf(a) {
    var b = this;
    this.qc = jf(a.icon);
    this.title = a.title;
    this.id = a.id;
    this.g = [];
    this.i = [];
    this.j = [];
    this.vb = !1;
    (a.subsections || []).forEach(function(c) {
        (c = nf(c)) && b.j.push(c)
    });
    (a.stub_blocks || []).forEach(function(c) {
        (c = hf(c)) && b.i.push(c)
    });
    (a.blocks || []).forEach(function(c) {
        (c = R(c, Ye, ["id"])) && b.g.push(c)
    })
}
function nf(a) {
    return R(a, mf, ["title", "id"])
}
var lf = "default"
  , kf = {
    search: "search",
    trends: "trends",
    lives: "lives",
    sport: "sport",
    movie: "movie",
    tvshow: "tvshow",
    cybersport: "game",
    serial: "serial",
    for_kids: "for-kids",
    subscribes: "subscribes",
    my: "my",
    my_added: "myAdded",
    my_uploaded: "myUploaded",
    my_lives: "myLives",
    my_recorded_calls: "myRecordedCalls",
    my_liked: "myLiked",
    my_bookmarks: "myBookmarks",
    my_playlists: "myPlaylists",
    my_history: "watchHistory"
};
function of(a) {
    a = a.name;
    P.call(this);
    this.u = null;
    Xb(this, "c-icon");
    a && this.i(a)
}
z(of, P);
of.prototype.Ta = function() {
    return !1
}
;
of.prototype.i = function(a) {
    this.u !== a && (null !== this.u && Ad(this.L(), this.u),
    this.u = a,
    null !== this.u && Bd(this.L(), this.u))
}
;
of.prototype.pb = function() {
    return ff(vd(this))
}
;
var pf = {}
  , qf = (pf.search = "search",
pf.trends = "thumbs-up",
pf.lives = "live",
pf.sport = "basketball",
pf.movie = "movie",
pf.serial = "play-cards",
pf.tvshow = "tv",
pf["for-kids"] = "horse-toy",
pf.my = "play-rectangle",
pf.subscribes = "rss-feed",
pf.myBookmarks = "favorite",
pf.myUploaded = "upload",
pf.myLives = "live",
pf.myRecordedCalls = "phone",
pf.myLiked = "like",
pf.myAdded = "add",
pf.myPlaylists = "list-play",
pf.stars = "stars",
pf.eternalFlame = "eternal-flame",
pf.museumNight = "museum-night",
pf[lf] = "all-categories",
pf.watchHistory = "view",
pf.game = "game",
pf);
function rf(a, b) {
    return function() {
        var c = {};
        var d = '<div data-component="' + Ga(df, {}, "button", c) + '">\n\t';
        this.pe === sf ? d += "\n\t\t" + E(of, {
            name: this.icon
        }, "icon", c) + "\n\t" : this.pe === tf && (d += '\n\t\t<img data-export-id="iconImage" src="' + Ha(this.icon || "") + '">\n\t');
        d += "\n\t";
        this.rd && (d += '\n\t\t<span class="w-circle-button_title" data-export-id="title">' + Ha(this.title || "") + "</span>\n\t");
        return I(d + "\n</div>\n", c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "button":
                g.button ? F(f) : g.button = e;
                break;
            case "icon":
                g.icon ? F(f) : g.icon = e;
                break;
            case "iconImage":
                g.Ic ? F(f) : g.Ic = e;
                break;
            case "title":
                g.title ? F(f) : g.title = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            button: null,
            icon: null,
            Ic: null,
            title: null
        }, b)
    }
    .call(a)
}
;function uf(a) {
    var b = a.icon
      , c = a.title
      , d = a.rotation
      , e = void 0 === a.modifiers ? [] : a.modifiers
      , f = void 0 === a.rd ? !1 : a.rd
      , g = void 0 === a.wf ? !1 : a.wf
      , h = void 0 === a.nf ? !1 : a.nf;
    a = void 0 === a.pe ? sf : a.pe;
    Rb.call(this);
    var l = this;
    b = vf(this, b, c, f, a);
    Sb(this, kb(b.root));
    Xb(this, "w-circle-button");
    e.forEach(function(m) {
        Xb(l, m)
    });
    d && wf[d] && Bd(this.L(), wf[d]);
    xf(this, g);
    this.button = b.button;
    this.icon = b.icon;
    this.title = b.title;
    this.Ic = b.Ic;
    this.g = h;
    this.button.on("want-focus", function() {
        return l.B("want-focus", l)
    });
    this.button.enable();
    Jb(this, this.button)
}
z(uf, Rb);
uf.prototype.ab = function(a) {
    this.button.C = a;
    Rb.prototype.ab.call(this, a)
}
;
uf.prototype.da = function(a, b) {
    return this.isEnabled() ? Rb.prototype.da.call(this, a, b) : !1
}
;
uf.prototype.blur = function() {
    Rb.prototype.blur.call(this);
    this.g && xf(this, !1)
}
;
uf.prototype.focus = function() {
    Rb.prototype.focus.call(this);
    this.g && xf(this, !0)
}
;
function xf(a, b) {
    zd(a.L(), "extended", b)
}
function vf(a, b, c, d, e) {
    e = void 0 === e ? sf : e;
    return rf({
        icon: b,
        title: c,
        rd: d,
        pe: e
    }, yf(a))
}
function yf(a) {
    return {
        Vb: function(b, c) {
            a.Ca(b, /\[]$/.test(c) ? "" : c)
        }
    }
}
var sf = "icon"
  , tf = "image"
  , zf = {}
  , wf = (zf["180"] = "rotation180",
zf);
function Af(a, b) {
    return function() {
        var c = {};
        var d = '<div class="p-abstract__background" data-export-id="background"></div>\n<div class="p-abstract__container" data-export-id="container"></div>\n\n';
        this.qd && (d += "\n\t" + E(uf, {
            icon: "info-circle"
        }, "techInfo", c) + "\n");
        return I(d + "\n", c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "techInfo":
                g.Ea ? F(f) : g.Ea = e;
                break;
            case "background":
                g.background ? F(f) : g.background = e;
                break;
            case "container":
                g.ub ? F(f) : g.ub = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            Ea: null,
            background: null,
            ub: null
        }, b)
    }
    .call(a)
}
;function Bf(a) {
    a = void 0 === a ? {} : a;
    var b = void 0 === a.Oc ? !1 : a.Oc
      , c = void 0 === a.Na ? !1 : a.Na
      , d = void 0 === a.qd ? !1 : a.qd
      , e = void 0 === a.Ga ? !1 : a.Ga;
    dc.call(this);
    var f = this;
    this.i = {
        root: null,
        Pe: []
    };
    this.ya = b;
    this.ja = c;
    this.$ = d;
    this.C = !1;
    this.on("popup-interaction", function() {
        e && f.close()
    })
}
z(Bf, dc);
Bf.prototype.Dd = function() {
    return "abstract-popup"
}
;
Bf.prototype.close = function() {
    this.B("need-to-be-hidden")
}
;
Bf.prototype.Aa = function(a, b) {
    return 20 === a ? (this.ja || this.B("popup-interaction", Cf),
    !0) : dc.prototype.Aa.call(this, a, b)
}
;
Bf.prototype.bb = function(a) {
    Df(this);
    a.Lf(this)
}
;
function Df(a) {
    if (!a.C) {
        a.o = Af({
            K: a.ra,
            qd: a.$
        }, Ef(a));
        var b = a.o
          , c = b.ub
          , d = b.root;
        b = b.Ea;
        a.ya && K(a.L(), "_transparent", !0);
        if (a.$ && b)
            b.button.on(b.button.P, function() {
                Ff().bb(a)
            });
        ec(a, "p-abstract");
        a.i.root && c.appendChild(a.i.root);
        a.J.appendChild(d);
        a.C = !0;
        Gf(a)
    }
}
function Hf(a) {
    return new Promise(function(b) {
        a.once("popup-interaction", function(c, d) {
            b(d)
        })
    }
    )
}
function Ef(a) {
    return {
        Vb: function(b, c) {
            return a.Ca(b, c)
        }
    }
}
function Gf(a) {
    (a.i.Pe || []).forEach(function(b) {
        !a.j.includes(b) && b instanceof Rb && a.Ca(b)
    });
    a.i.ui && a.T(a.i.ui)
}
t.Object.defineProperties(Bf.prototype, {
    ra: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return O.g.K
        }
    }
});
function If(a) {
    return {
        Vb: function(b, c) {
            a.Ca(b, /\[]$/.test(c) ? "" : c)
        }
    }
}
var Cf = "back";
function Jf(a) {
    return I('<div>\n\t<div class="w-menu-focus-shadow"></div>\n    <div class="w-menu-item__title" data-export-id="title"></div>\n</div>\n', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        case "title":
            d.title ? F(c) : d.title = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null,
        title: null
    }, a)
}
;function Kf(a) {
    var b = new Image;
    b.src = a;
    return new Promise(function(c, d) {
        if (b.complete)
            c(b);
        else {
            var e = function() {
                g();
                c(b)
            }
              , f = function() {
                g();
                d(b)
            }
              , g = function() {
                b.removeEventListener("load", e);
                b.removeEventListener("error", f)
            };
            b.addEventListener("load", e);
            b.addEventListener("error", f)
        }
    }
    )
}
;function Lf(a) {
    var b = {};
    var c = '<div>\n    <div class="c-avatar__default" data-export-id="defaultIcon">\n        ' + E(of, {
        name: "user-circle"
    }, "__null__", b) + '\n    </div>\n    <img class="c-avatar__image" src="" data-export-id="image">\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "__null__":
            f.ib ? F(e) : f.ib = d;
            break;
        case "defaultIcon":
            f.vf ? F(e) : f.vf = d;
            break;
        case "image":
            f.image ? F(e) : f.image = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        ib: null,
        vf: null,
        image: null
    }, a)
}
;function Mf(a) {
    a = void 0 === a ? Nf : a;
    P.call(this);
    Xb(this, "c-avatar");
    Of(this, !0);
    zd(this.L(), a, !0)
}
z(Mf, P);
Mf.prototype.Ta = function() {
    return !1
}
;
function Pf(a, b) {
    if (b) {
        var c = a.g
          , d = c.image;
        nb(c.vf);
        nb(d);
        zd(a.L(), "preload", !0);
        Kf(b).then(function() {
            d.src = b;
            Of(a, !1)
        }).catch(function() {
            Of(a, !0)
        }).finally(function() {
            zd(a.L(), "preload", !1)
        })
    } else
        Of(a, !0),
        Promise.resolve()
}
function Of(a, b) {
    var c = a.g;
    a = c.vf;
    c = c.image;
    b ? (mb(a),
    nb(c)) : (mb(c),
    nb(a))
}
Mf.prototype.pb = function() {
    return Lf(vd(this))
}
;
var Nf = "small";
function Qf(a) {
    var b = a.title
      , c = a.icon;
    a = a.data;
    P.call(this);
    this.C = "";
    this.J = !(!a || !a.Og);
    this.D = !1;
    this.P = "click";
    b && this.nb(b);
    c && Rf(this, c);
    Xb(this, "w-menu-item")
}
z(Qf, P);
Qf.prototype.da = function(a, b) {
    if (21 === a) {
        if (this.D)
            return !1;
        this.B(this.P);
        this.J && (Rf(this, "loading"),
        K(this.o, "_loading", !0),
        this.D = !0);
        return !0
    }
    return P.prototype.da.call(this, a, b)
}
;
Qf.prototype.Xb = function() {
    return this.u ? this.u.Xb() : P.prototype.Xb.call(this)
}
;
Qf.prototype.nb = function(a) {
    this.C = a;
    L(this.g.title, a)
}
;
function Sf(a, b) {
    a.o.appendChild(b.L());
    a.u = b
}
function Tf(a, b, c) {
    c ? K(a.o, "_stub", b) : K(a.o, "_full", b)
}
Qf.prototype.pb = function() {
    return Jf(vd(this))
}
;
function Rf(a, b) {
    a.i && a.i.L().remove();
    a.i = new of({
        name: b
    });
    Sf(a, a.i);
    a.u = a.i
}
;function Uf(a) {
    N.call(this);
    this.i = [];
    this.g = NaN;
    this.F = !0;
    a && Vf(this, a)
}
z(Uf, N);
k = Uf.prototype;
k.clear = function() {
    this.Xa(NaN);
    this.i.splice(0, this.i.length);
    this.B("clear")
}
;
k.size = function() {
    return this.i.length
}
;
k.Zd = function(a, b) {
    for (var c = 0; c < a.length; c++)
        this.$f(a[c], b + c);
    this.B("items-added", a, b)
}
;
function Wf(a, b) {
    for (var c = !1, d = [], e = 0; e < b.length; e++)
        a.hf(a.indexOf(b[e])) && (c = !0,
        d.push(b[e]));
    a.B("items-removed", d);
    return c
}
function Vf(a, b) {
    a.clear();
    a.Zd(b, a.size());
    a.B("items-changed", b)
}
k.add = function(a) {
    var b = this.size();
    this.Zd([a], b)
}
;
k.remove = function(a) {
    return Wf(this, [this.i[this.indexOf(a)]])
}
;
k.$e = function(a) {
    this.Xa(this.indexOf(a))
}
;
k.Xa = function(a) {
    if (Xf(this, a) || isNaN(a)) {
        if (a !== this.g) {
            var b = Yf(this)
              , c = this.g;
            this.g = a;
            this.B("item-selected", Yf(this), this.g, b, c)
        }
        return !0
    }
    return !1
}
;
k.indexOf = function(a) {
    return this.i.indexOf(a)
}
;
function Xf(a, b) {
    return 0 <= b && b < a.i.length
}
function Yf(a) {
    return Zf(a, a.g)
}
function Zf(a, b) {
    return Xf(a, b) ? a.i[b] : null
}
k.$f = function(a, b) {
    var c = this.g
      , d = null
      , e = !1;
    this.i.splice(b, 0, a);
    this.F && isNaN(c) ? (e = !0,
    d = 0) : !isNaN(c) && c >= b && (this.F && c === b && (e = !0),
    d = c + 1);
    this.g = null === d ? c : d;
    this.B("item-added", a, b);
    1 === this.size() && this.B("first-item-added", a);
    this.g = c;
    null !== d && (e ? this.Xa(d) : this.g = d)
}
;
k.hf = function(a) {
    if (!Xf(this, a))
        return !1;
    var b = this.g
      , c = this.i.splice(a, 1)[0]
      , d = null
      , e = !1;
    isNaN(b) || (b === a ? (d = this.g = NaN,
    Xf(this, a) ? d = b : Xf(this, a - 1) && (d = a - 1),
    e = !0) : b > a && (d = b - 1));
    this.B("item-removed", c, a);
    null !== d && (e ? this.Xa(d) : this.g = d);
    0 === this.size() && this.B("clear");
    return !0
}
;
k.Gj = "item-selected";
k.Tf = "items-changed";
function $f(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
function ag() {
    var a = void 0 === a ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz" : a;
    for (var b = "", c = $f(5, 10); c--; )
        b += a[$f(0, a.length - 1)];
    return b
}
;function bg(a) {
    return I('<div>\n\t<div class="w-menu-slide__slide-window" data-export-id="boundWindow"></div>\n\t<div class="w-menu-slide__slide-container" data-export-id="itemsContainer"></div>\n\t<div class="w-menu-slide__top-blur" data-export-id="topBlur">\n\t\t<div class="w-menu-slide__top-blur-inner"></div>\n\t</div>\n\t<div class="w-menu-slide__bottom-blur" data-export-id="bottomBlur">\n\t\t<div class="w-menu-slide__bottom-blur-inner"></div>\n\t</div>\n</div>\n', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        case "boundWindow":
            d.ee ? F(c) : d.ee = b;
            break;
        case "itemsContainer":
            d.Fb ? F(c) : d.Fb = b;
            break;
        case "topBlur":
            d.Ih ? F(c) : d.Ih = b;
            break;
        case "bottomBlur":
            d.qg ? F(c) : d.qg = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null,
        ee: null,
        Fb: null,
        Ih: null,
        qg: null
    }, a)
}
;function cg() {
    Uf.apply(this, arguments)
}
z(cg, Uf);
cg.prototype.$e = function(a) {
    this.Xa(this.indexOf(a), void 0)
}
;
cg.prototype.Xa = function(a, b) {
    if (Xf(this, a) || isNaN(a)) {
        if (a !== this.g) {
            var c = Yf(this)
              , d = this.g;
            this.g = a;
            (void 0 === b ? 0 : b) || this.B("item-selected", Yf(this), this.g, c, d)
        }
        return !0
    }
    return !1
}
;
function dg(a, b) {
    N.call(this);
    this.o = a;
    this.v = b;
    this.j = null;
    this.g = new cg;
    this.i = new eg(this.g);
    this.l = null;
    this.g.F = !1;
    fg(this)
}
z(dg, N);
function gg(a, b) {
    a.j = b;
    Pf(a.i.C, a.j && (a.j.o || a.j.$a) || null);
    b = a.j && a.j.id ? a.o.G("buttons.profile") : a.o.G("buttons.signIn");
    a.i.g.Wb.nb(b);
    a.B("menu-service-items-updated")
}
function hg(a) {
    var b = ig(a.v.Bd).then(function(c) {
        c = c.map(function(d) {
            return jg(a, d)
        });
        Vf(a.g, c)
    });
    a.l = b.finally(function() {
        a.l = null
    });
    return b
}
function kg(a) {
    hg(a).then(function() {
        a.B("menu-service-open-default-section-needed")
    })
}
function lg(a) {
    var b = a.g.i.findIndex(function(c) {
        return c.vb
    });
    -1 === b && (b = 0);
    a.g.Xa(b);
    a.i.De()
}
function jg(a, b, c) {
    return {
        id: b.id,
        title: b.title,
        icon: qf[b.qc],
        qc: b.qc,
        vb: b.vb,
        Dh: b.i,
        jd: c,
        Of: b.j.map(function(d) {
            return jg(a, d, b.id)
        }),
        Wk: mg[b.qc] || ng
    }
}
function fg(a) {
    a.g.on(a.g.Tf, function() {
        a.B("menu-service-items-updated")
    });
    a.i.on("menu-item-selected", function(b, c) {
        a.B("menu-service-item-selected", c);
        var d = "string" === typeof c.jd ? c.jd : c.id;
        b = a.g.i.findIndex(function(e) {
            return e.id === d
        });
        a.g.Xa(b, !0)
    });
    a.i.on("profile-selected", function(b, c) {
        a.B("menu-service-profile-selected", c)
    })
}
t.Object.defineProperties(dg.prototype, {
    u: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return Yf(this.g)
        }
    }
});
var og = {}
  , mg = (og.watchHistory = {
    icon: "film-strip",
    title: "videosListScene.emptyMenuItem.watchHistory.title",
    description: "videosListScene.emptyMenuItem.watchHistory.description"
},
og.myAdded = {
    icon: "film-strip",
    title: "videosListScene.emptyMenuItem.myAdded.title",
    description: "videosListScene.emptyMenuItem.myAdded.description"
},
og.myUploaded = {
    icon: "film-strip",
    title: "videosListScene.emptyMenuItem.myUploaded.title",
    description: "videosListScene.emptyMenuItem.myUploaded.description"
},
og.myLives = {
    icon: "bookmark",
    title: "videosListScene.emptyMenuItem.myLives.title",
    description: "videosListScene.emptyMenuItem.myLives.description"
},
og.myRecordedCalls = {
    icon: "phone",
    title: "videosListScene.emptyMenuItem.myRecordedCalls.title",
    description: "videosListScene.emptyMenuItem.myRecordedCalls.description"
},
og.myLiked = {
    icon: "like",
    title: "videosListScene.emptyMenuItem.myLiked.title",
    description: "videosListScene.emptyMenuItem.myLiked.description"
},
og.myBookmarks = {
    icon: "bookmark",
    title: "videosListScene.emptyMenuItem.myBookmarks.title",
    description: "videosListScene.emptyMenuItem.myBookmarks.description"
},
og.myPlaylists = {
    icon: "list-play",
    title: "videosListScene.emptyMenuItem.myPlaylists.title",
    description: "videosListScene.emptyMenuItem.myPlaylists.description"
},
og)
  , ng = {
    icon: "film-strip",
    title: "videosListScene.emptyMenuItem.default.title",
    description: "videosListScene.emptyMenuItem.default.description"
};
function pg() {}
;function qg(a, b, c) {
    rg(a, NaN, b, void 0 === c ? !1 : c)
}
function sg(a, b, c) {
    rg(a, b, NaN, void 0 === c ? !1 : c)
}
function rg(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    var e = tg(a.style.transform)
      , f = e.x;
    e = e.y;
    d && a.classList.add("_disable-animation");
    a.style.transform = "translate3d(" + (isNaN(b) ? f : -1 * (0 > b ? 0 : b)) + "px, " + (isNaN(c) ? e : -1 * (0 > c ? 0 : c)) + "px, 0px)";
    d && window.requestAnimationFrame(function() {
        a.classList.remove("_disable-animation")
    })
}
function tg(a) {
    if (a = a.match(/translate3d\((.*)px, (.*)px, 0px\)/)) {
        var b = p(a);
        b.next();
        a = b.next().value;
        b = b.next().value;
        return {
            x: parseInt(a, 10),
            y: parseInt(b, 10)
        }
    }
    return {
        x: 0,
        y: 0
    }
}
function ug(a) {
    return tg(a.style.transform).x || 0
}
function vg(a, b) {
    b = void 0 === b ? null : b;
    var c = getComputedStyle(a);
    if ("absolute" === c.position)
        return (tg(a.style.transform).y || 0) + (parseFloat(c.top) || 0) + (parseFloat(c.marginTop) || 0);
    for (c = 0; a.offsetParent && a.offsetParent !== b.offsetParent; )
        c += a.offsetTop,
        a = a.offsetParent;
    return c
}
function wg(a, b) {
    b = void 0 === b ? null : b;
    var c = getComputedStyle(a);
    if ("absolute" === c.position)
        return ug(a) + (parseFloat(c.left) || 0) + (parseFloat(c.marginLeft) || 0);
    for (c = 0; a.offsetParent && a.offsetParent !== b.offsetParent; )
        c += a.offsetLeft,
        a = a.offsetParent;
    return c
}
function xg(a, b) {
    var c = a.Oe
      , d = a.Ob
      , e = a.Rb;
    a = void 0 === a.nh ? !1 : a.nh;
    var f = c.Xb();
    if (!f || f.Ha())
        return !1;
    var g = c.L(), h = e.parentElement.getBoundingClientRect(), l = d.getBoundingClientRect(), m = Math.abs(tg(e.style.transform).y || 0), n = Math.abs(ug(e) || 0), q = NaN, u = NaN, w = !1, x = !1, J = !0, y = !0, A, C, G;
    ["down", "right", "left", "up"].forEach(function(la) {
        "down" === la && (A = vg(g, e),
        C = A - m + h.top,
        G = C + g.offsetHeight,
        x = l.bottom < G) && (u = A - l.bottom + g.offsetHeight + h.top,
        J = !1);
        J && "up" === la && (A = vg(g, e),
        G = C = A - m + h.top,
        (x = l.top > G) && (u = A - l.top + h.top));
        "right" === la && (A = wg(g, e),
        C = A - n + h.left,
        G = C + g.offsetWidth,
        w = l.right < G) && (q = A - l.right + g.offsetWidth + h.left,
        y = !1);
        y && "left" === la && (A = wg(g, e),
        G = C = A - n + h.left,
        (w = l.left > G) && (q = A - l.left + h.left))
    });
    if (c = (c = w || x) && c && (x && m !== (0 > u ? 0 : u) || w && n !== (0 > q ? 0 : q)))
        yg(e, b || pg, a),
        rg(e, q, u, a);
    return c
}
function zg(a, b) {
    var c = void 0 === b ? {} : b;
    b = c.Xk;
    c = c.Mi;
    var d = a.Ob
      , e = a.Rb
      , f = a.direction
      , g = a.nh
      , h = e.getBoundingClientRect();
    d = d.getBoundingClientRect();
    a = a.offset;
    var l = Math.abs(tg(e.style.transform).y || 0)
      , m = Math.abs(ug(e) || 0)
      , n = pg
      , q = ["up", "down"].includes(f) ? l : m
      , u = NaN
      , w = !1;
    "down" === f && (u = l + (a || d.height),
    (w = h.height - d.height < u) && (u = h.height - d.height),
    n = qg);
    "up" === f && (u = l - (a || d.height),
    0 > u && (u = 0),
    n = qg);
    "right" === f && (u = m + (a || d.width),
    (w = h.width - d.width < u) && (u = h.width - d.width),
    n = sg);
    "left" === f && (u = m - (a || d.width),
    0 > u && (u = 0),
    n = sg);
    b && w && b();
    c && u !== q && (yg(e, c, g),
    n(e, u))
}
function Ag(a) {
    var b = a.Ob
      , c = a.Rb;
    a = a.direction;
    return "right" === a ? (c = gb(c.getBoundingClientRect()),
    b = gb(b.getBoundingClientRect()),
    b = Math.floor(c.oa) <= b.oa) : "left" === a ? b = 0 >= Math.abs(ug(c) || 0) : !1
}
function yg(a, b, c) {
    function d(l) {
        l = l ? l.toString().replace(",", ".") : "0";
        return parseFloat(l)
    }
    c = void 0 === c ? !1 : c;
    var e = getComputedStyle(a);
    if (!d(e.transitionDuration) || c)
        b();
    else {
        var f = !1
          , g = function(l) {
            !f && l && l.target === a && ["transform", "-webkit-transform", "-moz-transform", "top", "left"].includes(l.propertyName) && (clearTimeout(h),
            a.removeEventListener("transitionend", g),
            f = !0,
            b())
        };
        c = 1E3 * (d(e.transitionDuration) || 0) + 100;
        var h = setTimeout(function() {
            a.removeEventListener("transitionend", g);
            g = null;
            f = !0;
            b()
        }, c);
        a.addEventListener("transitionend", g)
    }
}
;var Bg = {}
  , Cg = (Bg.back = 20,
Bg.up = 2,
Bg.down = 4,
Bg.left = 1,
Bg.right = 3,
Bg.enter = 21,
Bg);
var Dg = {
    Dm: "first",
    Nm: "last",
    qn: "prev",
    Zm: "next",
    jm: "current"
};
function Eg() {
    Cb.apply(this, arguments)
}
z(Eg, Cb);
function Fg() {
    Rb.call(this)
}
z(Fg, Rb);
Fg.prototype.Fd = function() {
    return !!this.j.find(function(a) {
        return a.Ta()
    })
}
;
Fg.prototype.Ca = function(a, b) {
    this.j.push(a);
    this.F.v(a);
    b && (this.v[b] = a);
    Gg(this, a);
    return !0
}
;
Fg.prototype.df = function() {
    return new Eg({
        enabled: !0
    },{
        enabled: !0
    })
}
;
function Gg(a, b) {
    b.on(b.Uf, a.Yd);
    b.on(b.Rh, a.ff);
    (a = b.L()) && O.j.lg(b, a)
}
;function Hg(a) {
    a = void 0 === a ? !1 : a;
    Rb.call(this);
    this.Wa = a;
    this.Ja = !1
}
z(Hg, Fg);
Hg.prototype.rb = function() {
    this.Ja = !0;
    Ig(this, !0)
}
;
Hg.prototype.Ra = function() {
    this.Ja = !1;
    Ig(this, !1)
}
;
function Ig(a, b) {
    a.j.forEach(function(c) {
        if (c instanceof Hg && c.hc)
            return b ? c.rb() : c.Ra()
    })
}
t.Object.defineProperties(Hg.prototype, {
    hc: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Wa
        }
    },
    Cg: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Ja
        }
    }
});
function Jg(a) {
    Hg.call(this, a);
    var b = this;
    this.g = this.xd();
    Sb(this, kb(this.g.root));
    if (this.Wa) {
        Kg(this, !1);
        var c = this.g;
        a = c.xb;
        c = c.Hb;
        a.button.on(a.button.P, function() {
            return b.dg()
        });
        c.button.on(c.button.P, function() {
            return b.eg()
        })
    }
}
z(Jg, Hg);
k = Jg.prototype;
k.T = function(a, b) {
    Kg(this);
    return Hg.prototype.T.call(this, a, b)
}
;
k.rb = function() {
    Hg.prototype.rb.call(this);
    Kg(this)
}
;
k.Ra = function() {
    Hg.prototype.Ra.call(this);
    Kg(this, !1)
}
;
function Lg(a) {
    var b = a.l;
    if (a.Wa) {
        a = a.Uc();
        var c = a.Hb;
        return b === a.xb || b === c
    }
    return !1
}
k.gg = function() {
    Hg.prototype.gg.call(this);
    Kg(this)
}
;
k.fg = function() {
    Hg.prototype.fg.call(this);
    Kg(this, !1)
}
;
k.Ve = function() {
    return {}
}
;
function Mg(a) {
    return {
        Vb: function(b, c) {
            a.Ca(b, /\[]$/.test(c) ? "" : c)
        }
    }
}
k.dg = function() {}
;
k.eg = function() {}
;
function Kg(a, b) {
    if (a.Wa) {
        var c = a.Uc()
          , d = c.xb
          , e = c.Hb
          , f = c.ia
          , g = c.Ua;
        c = !!b;
        var h = !!b;
        a.isVisible() && void 0 === b && (c = Ag({
            Ob: g,
            Rb: f,
            direction: "left"
        }),
        f = Ag({
            Ob: g,
            Rb: f,
            direction: "right"
        }),
        c = (a = a.Ja && a.gb()) && !c,
        h = a && !f);
        Ub(d, c);
        Ub(e, h)
    }
}
;function Ng(a, b, c) {
    a instanceof Og ? a.mb(b) : (K(a, "_skeleton", b),
    c && K(a, "_animated", b))
}
function Og() {
    Jg.apply(this, arguments)
}
z(Og, Jg);
Og.prototype.mb = function(a, b) {
    var c = b = void 0 === b ? {
        tc: [],
        ac: []
    } : b;
    b = void 0 === c.tc ? [] : c.tc;
    c = void 0 === c.ac ? [] : c.ac;
    var d = this.Sd()
      , e = void 0 === d.ac ? [] : d.ac;
    (void 0 === d.tc ? [] : d.tc).forEach(function(f) {
        Ng(f, a, !0)
    });
    b.forEach(function(f) {
        Ng(f, a, !0)
    });
    e.forEach(function(f) {
        Ng(f, a)
    });
    c.forEach(function(f) {
        Ng(f, a)
    })
}
;
function Pg(a) {
    a = a.kl;
    Og.call(this);
    var b = this;
    this.i = new Uf;
    this.O = null;
    this.S = !!a;
    this.u = !1;
    this.J = this.D = this.C = null;
    this.i.F = !1;
    this.i.on("item-selected", function(c, d) {
        d && d.data && d.data.Og && (b.D = b.j.indexOf(b.l));
        b.B("menu-item-selected", d)
    });
    Xb(this, "w-menu-slide");
    Qg(this)
}
z(Pg, Og);
k = Pg.prototype;
k.mb = function(a, b) {
    a && Rg(this, Sg());
    Og.prototype.mb.call(this, a, b)
}
;
k.La = function() {
    Tg(this);
    Og.prototype.La.call(this)
}
;
k.T = function(a, b) {
    var c = this
      , d = this.g
      , e = d.Fb;
    d = d.ee;
    a && (this.u || 10 < this.i.size()) && xg({
        Oe: a,
        Ob: d,
        Rb: e
    }, function() {
        Tg(c)
    });
    return Og.prototype.T.call(this, a, b)
}
;
k.Zc = function() {
    var a = Og.prototype.Zc.call(this)
      , b = Tb(this);
    return b ? a.filter(function(c) {
        var d = c.pa;
        return c.la >= b.la && d - Q(6) <= b.pa
    }) : a
}
;
k.Vc = function(a, b) {
    b = void 0 === b ? "select" : b;
    switch (a) {
    case Infinity:
        a = this.i.size() - 1;
        break;
    case -Infinity:
        a = 0;
        break;
    default:
        var c = Vg(this);
        a = Ke(c + a, 0, this.i.size() - 1);
        return Wg(this, b, a, c)
    }
    return Wg(this, b, a)
}
;
k.Ad = function(a, b) {
    var c = a.toLowerCase();
    a = this.i.i.findIndex(function(d) {
        return d.title.toLowerCase().includes(c)
    });
    return Wg(this, b, a)
}
;
function Xg(a, b, c) {
    a.j.forEach(function(d) {
        d instanceof Qf && Tf(d, b, c)
    })
}
function Rg(a, b, c) {
    a.u = !!c;
    Vf(a.i, b)
}
k.clear = function() {
    var a = this;
    this.j.slice().forEach(function(b) {
        Nb(a, b)
    });
    this.C = null;
    ob(this.g.Fb)
}
;
function Yg(a, b) {
    var c = a.C && (a.v["menuItem_" + a.C] || null)
      , d = a.v["menuItem_" + b] || null;
    c instanceof Qf && (K(c.o, "_selected", !1),
    a.C = null,
    a.J = null);
    d instanceof Qf && (a.C = b,
    a.J = d,
    K(d.o, "_selected", !0))
}
k.De = function() {
    (this.u || 10 < this.i.size()) && (this.O || this.J) ? this.T(this.J ? this.J : this.O, void 0) : Zg(this)
}
;
function Zg(a, b) {
    qg(a.g.Fb, 0, void 0 === b ? !1 : b)
}
function $g(a) {
    Zg(a, !0);
    window.requestAnimationFrame(function() {
        if (a.l) {
            var b = a.g;
            xg({
                Oe: a.l,
                Ob: b.ee,
                Rb: b.Fb,
                nh: !0
            })
        }
        Tg(a)
    })
}
k.Sd = function() {
    return {
        tc: [],
        ac: Mb(this).map(function(a) {
            return a.L()
        })
    }
}
;
k.Uc = function() {}
;
k.xd = function() {
    return bg(Mg(this))
}
;
function Vg(a) {
    var b = a.l
      , c = Object.entries(a.v).find(function(d) {
        d = p(d);
        d.next();
        return d.next().value === b
    });
    return a.i.i.findIndex(function(d) {
        return d.id === c[0].split("menuItem_")[1]
    })
}
function Wg(a, b, c, d) {
    d = void 0 === d ? Vg(a) : d;
    var e = "open" === b && !isNaN(c) && -1 !== c;
    if ("select" === b && c !== d || e)
        if (d = Zf(a.i, c))
            return e = a.l,
            a.T(a.v["menuItem_" + d.id] || null, e ? e.Xb() : null),
            "open" === b ? a.i.Xa(c) : !0;
    return !1
}
function Tg(a) {
    var b = a.g
      , c = b.Fb
      , d = b.ee
      , e = b.Ih;
    b = b.qg;
    var f = a.u || 10 < a.i.size()
      , g = c.getBoundingClientRect()
      , h = d.getBoundingClientRect();
    c = g.bottom - b.getBoundingClientRect().height > h.bottom;
    g = g.top + e.getBoundingClientRect().height < h.top;
    K(e, "w-menu-slide__blur_visible", f && g);
    K(b, "w-menu-slide__blur_visible", f && c);
    a.S ? (K(d, "w-menu-slide__slide-window_secondary", f),
    K(b, "w-menu-slide__bottom-blur_secondary", f)) : K(d, "w-menu-slide__slide-window_primary", f)
}
function ah(a, b) {
    function c(e, f, g) {
        f = void 0 === f ? !1 : f;
        g = void 0 === g ? !1 : g;
        var h = new Qf({
            id: e.id,
            title: e.title,
            vb: e.vb,
            icon: e.icon,
            data: e.data
        });
        e.Mg && Sf(h, e.Mg);
        Tf(h, a.gb());
        h.on(h.P, function() {
            "menu-item-back" === e.id || e === Yf(a.i) ? a.B("menu-item-selected", e) : a.i.$e(e)
        });
        a.Ca(h, "menuItem_" + e.id);
        e.vb && (a.O = h,
        Jb(a, h));
        var l = a.g.Fb;
        f ? l.insertBefore(h.L(), l.firstChild) : l.appendChild(h.L());
        g && a.T(h)
    }
    if (a.u) {
        var d;
        b.forEach(function(e, f) {
            var g = e.data && e.data.we
              , h = g ? O.g.K.G("menu.groups." + g) : void 0;
            if (h || !f)
                d !== g && h && (d = g,
                f = a.g.Fb,
                g = document.createElement("div"),
                g.textContent = h,
                K(g, "w-menu-slide__menu-item-group", !0),
                f.appendChild(g)),
                c(e)
        })
    } else
        b.forEach(function(e) {
            return c(e)
        });
    a.S && c({
        id: "menu-item-back",
        icon: "arrow-left",
        title: O.g.K.G("menu.back"),
        Of: [],
        vb: !1
    }, !0, !0);
    a.D && 0 < a.D && (b = a.j[a.D]) && (a.T(b),
    a.D = null)
}
function Qg(a) {
    a.i.F = !1;
    a.i.on(a.i.Tf, function() {
        a.clear();
        ah(a, a.i.i);
        Tg(a)
    })
}
function Sg() {
    return Array.from(Array($f(10, 10))).map(function() {
        return {
            id: Math.round(100 * Math.random()),
            icon: "subscribes",
            stub_blocks: [],
            isDefault: !1,
            title: ag()
        }
    })
}
;function bh(a) {
    var b = {};
    var c = '<div data-export-id="menu">\n    <div class="w-menu__overlay" data-export-id="overlay"></div>\n    <div class="w-menu__slider-wrapper" data-export-id="sliderWrapper">\n\t\t<div class="w-menu__slider-container" data-export-id="sliderContainer">\n\t\t\t<div class="w-menu__section">\n\t\t\t\t<div class="w-menu__logo">\n\t\t\t\t\t' + E(Qf, {}, "logoMenuItem", b) + '\n\t\t\t\t</div>\n\n\t\t\t\t<div class="w-menu__items">\n\t\t\t\t\t' + E(Pg, {}, "firstMenuLevel", b) + '\n\t\t\t\t</div>\n\n\t\t\t\t<div class="w-menu__avatar-container">\n\t\t\t\t\t' + E(Qf, {}, "avatarMenuItem", b) + '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="w-menu__section w-menu__secondary-menu">\n\t\t\t\t<div class="w-menu__items">\n\t\t\t\t\t' + E(Pg, {
        kl: !0
    }, "secondMenuLevel", b) + '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-menu-section-slider"></div>\n\t</div>\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "logoMenuItem":
            f.kh ? F(e) : f.kh = d;
            break;
        case "firstMenuLevel":
            f.Eb ? F(e) : f.Eb = d;
            break;
        case "avatarMenuItem":
            f.Wb ? F(e) : f.Wb = d;
            break;
        case "secondMenuLevel":
            f.zb ? F(e) : f.zb = d;
            break;
        case "menu":
            f.za ? F(e) : f.za = d;
            break;
        case "overlay":
            f.sh ? F(e) : f.sh = d;
            break;
        case "sliderWrapper":
            f.fj ? F(e) : f.fj = d;
            break;
        case "sliderContainer":
            f.ia ? F(e) : f.ia = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        kh: null,
        Eb: null,
        Wb: null,
        zb: null,
        za: null,
        sh: null,
        fj: null,
        ia: null
    }, a)
}
;function ch() {
    P.call(this);
    Xb(this, "c-logo")
}
z(ch, P);
ch.prototype.Ta = function() {
    return !1
}
;
ch.prototype.pb = function() {
    return wd(vd(this))
}
;
function eg(a) {
    P.call(this);
    var b = this;
    this.C = new Mf;
    this.D = this.i = !1;
    this.u = new Uc(this.fi.bind(this),200);
    this.ud = "close-needed";
    Xb(this, "w-menu");
    var c = this.g.zb;
    c.ab(!1);
    Ub(c, !1);
    dh(this, a);
    eh(this);
    Sf(this.g.Wb, this.C);
    this.J = function() {
        return b.u.stop()
    }
}
z(eg, P);
k = eg.prototype;
k.La = function() {
    var a = this.g
      , b = a.Eb;
    a.za.addEventListener("mouseleave", this.J);
    this.D && (b.De(),
    this.D = !1);
    P.prototype.La.call(this)
}
;
k.Nb = function() {
    this.g.za.removeEventListener("mouseleave", this.J)
}
;
k.focus = function() {
    O.device.input.l ? Vc(this.u) : this.fi()
}
;
k.Vc = function(a, b) {
    function c() {
        d.T(h);
        "open" === b && d.B("profile-selected")
    }
    var d = this;
    b = void 0 === b ? "select" : b;
    var e = this.g
      , f = e.Eb
      , g = e.zb
      , h = e.Wb;
    e = !1;
    if (Infinity === a || this.l === h && 0 === a)
        c(),
        e = !0;
    return !e && (e = this.i ? g.Vc(a, b) : f.Vc(a, b),
    !e && 0 < a) ? (c(),
    !0) : !1
}
;
k.Ad = function(a, b) {
    var c = this.g
      , d = c.Eb
      , e = c.zb;
    c = c.Wb;
    var f = !1;
    c.C.toLowerCase().includes(a.toLowerCase()) && (this.T(c),
    "open" === b && this.B("profile-selected"),
    f = !0);
    return f = !f && this.i ? e.Ad(a, b) : d.Ad(a, b)
}
;
k.blur = function() {
    P.prototype.blur.call(this);
    this.u.stop();
    var a = this.g
      , b = a.Eb
      , c = a.zb;
    a = a.Wb;
    Xg(b, !1);
    Xg(c, !1);
    Tf(a, !1);
    this.i && fh(this);
    b.De()
}
;
k.De = function() {
    this.i || this.g.Eb.De()
}
;
function gh(a) {
    var b = a.g.zb;
    b.mb(!0);
    Xg(b, !0, !0);
    fh(a)
}
k.pb = function() {
    return bh(vd(this))
}
;
k.Aa = function(a, b) {
    return 1 === a && this.i ? (fh(this),
    !0) : 20 === a && this.gb() ? (this.B(this.ud),
    !0) : P.prototype.Aa.call(this, a, b)
}
;
k.fi = function() {
    P.prototype.focus.call(this);
    var a = this.g
      , b = a.zb
      , c = a.Wb;
    Xg(a.Eb, !0);
    Xg(b, !0);
    Tf(c, !0)
}
;
function eh(a) {
    a = a.g.kh;
    var b = new ch;
    a.ab(!1);
    Sf(a, b)
}
function fh(a) {
    a.i = !a.i;
    var b = a.g
      , c = b.Eb
      , d = b.zb
      , e = b.Wb;
    b = b.ia;
    c.ab(!a.i);
    a.i ? Ub(d, !0) : Gd() ? (Zg(d),
    d.clear(),
    d.u = !1,
    Ub(d, !1)) : b.addEventListener("transitionend", function(f) {
        a.i || "transform" !== f.propertyName || (Zg(d),
        d.clear(),
        d.u = !1,
        Ub(d, !1))
    });
    d.ab(a.i);
    zd(a.L(), "second", a.i);
    e.ab(!a.i);
    a.T(a.i ? d : c)
}
function hh(a, b, c) {
    if (b)
        if ("menu-item-back" === b.id)
            fh(a);
        else {
            var d = a.g
              , e = d.Eb;
            d = d.zb;
            var f = "subscribes" === b.qc;
            b.Of && b.Of.length ? (Rg(d, b.Of),
            Xg(d, a.gb()),
            fh(a)) : (f || Yg(c, b.id),
            c === d && b.jd && !f && Yg(e, b.jd),
            Zg(d),
            d.clear(),
            d.u = !1,
            a.B("menu-item-selected", b))
        }
}
function dh(a, b) {
    var c = a.g
      , d = c.Eb
      , e = c.zb
      , f = c.Wb;
    c = c.sh;
    b.on(b.Tf, function(g, h) {
        a.D = !0;
        a.i && fh(a);
        Rg(d, h);
        a.T(d);
        e.clear()
    });
    b.on(b.Gj, function(g, h) {
        d.i.$e(h)
    });
    d.on("menu-item-selected", function(g, h) {
        hh(a, h, d)
    });
    e.on("menu-item-selected", function(g, h) {
        hh(a, h, e)
    });
    f.on(f.P, function() {
        a.B("profile-selected")
    });
    c.addEventListener("click", function() {
        a.B(a.ud)
    });
    Rg(d, b.i)
}
;var ih = ["method/catalog.getSectionBlocksLinks", "method/catalog.getBlockItems"]
  , S = {}
  , jh = (S["method/video.clearViewingHistoryRecords"] = {
    required: [],
    co: []
},
S["method/users.get"] = {
    required: ["fields"],
    optional: ["user_ids", "name_case", "user_ids"]
},
S["method/users.getSubscriptions"] = {
    required: ["extended"],
    optional: ["user_ids", "name_case"]
},
S.get_auth_code = {
    required: ["client_id", "scope", "device_name", "need_revoke"],
    optional: ["need_qr_code", "qr_code_size"]
},
S["method/auth.getAuthCode"] = {
    required: ["device_name"],
    optional: ["scope", "need_qr_code", "auth_code_type"]
},
S["method/auth.checkAuthCode"] = {
    required: ["auth_hash"],
    optional: ["web_auth"]
},
S.code_auth_token = {
    required: ["client_id", "device_id"]
},
S["method/marusia.getSAT"] = {
    required: []
},
S["device/vk_video/attach"] = {
    required: ["device_id", "device_ver"]
},
S["device/remove"] = {
    required: ["id"]
},
S["device/vk_video/send_speaker_event"] = {
    required: ["event", "event_id", "data"],
    optional: []
},
S["inbox/messages/pick_up"] = {
    required: ["namespace"],
    optional: ["poll", "poll_time"]
},
S.get_anonym_token = {
    required: ["client_id", "client_secret"],
    optional: ["anonymous_token"]
},
S["method/video.getLiveStatus"] = {
    required: ["video_ids"]
},
S["method/video.search"] = {
    required: ["q", "adult", "extended"],
    optional: "sort hd live filters search_own ugc_only offset longer shorter count date owner_id united_video_only fields".split(" ")
},
S["method/video.getLongPollServer"] = {
    required: ["owner_id", "video_id"],
    optional: []
},
S["method/video.getComments"] = {
    required: ["owner_id", "video_id", "extended"],
    optional: ["need_likes", "start_comment_id", "offset", "count", "sort"]
},
S["method/utils.getShortLink"] = {
    required: ["url"],
    optional: ["private"]
},
S["method/video.get"] = {
    required: ["extended", "album_id"],
    optional: "owner_id group_id videos count offset need_privacy need_embed extended fields".split(" ")
},
S["method/video.getVideoDiscover"] = {
    required: ["owner_id", "video_id", "ref"],
    optional: "count offset owner_id track_code need_current fields extended".split(" ")
},
S["method/catalog.getVideoSmartTV"] = {
    required: ["need_stub_blocks", "ref"],
    optional: []
},
S["method/catalog.getSectionBlocksLinks"] = {
    required: ["section_id", "need_first_block_data"],
    optional: ["count"]
},
S["method/catalog.getBlockItems"] = {
    required: ["block_id"],
    optional: ["start_from", "query"]
},
S["method/catalog.getVideoSearchSmartTv"] = {
    required: ["need_blocks"],
    optional: ["show_suggests", "q"]
},
S["method/statEvents.addTV"] = {
    required: ["events"],
    optional: []
},
S["method/stats.trackEvents"] = {
    required: ["events"],
    optional: []
},
S["method/stats.trackEventsSmartTvAnonymous"] = {
    required: ["events"],
    optional: []
},
S["method/likes.add"] = {
    required: ["type", "item_id", "owner_id", "ref"],
    optional: []
},
S["method/likes.delete"] = {
    required: ["type", "item_id", "owner_id", "ref"],
    optional: []
},
S["method/fave.addVideo"] = {
    required: ["id", "owner_id", "ref"],
    optional: []
},
S["method/fave.removeVideo"] = {
    required: ["id", "owner_id", "ref"],
    optional: []
},
S["js/lang-pack.js"] = {
    required: ["name", "lang", "format"],
    optional: []
},
S["method/groups.join"] = {
    required: ["group_id"],
    optional: []
},
S["method/groups.leave"] = {
    required: ["group_id"],
    optional: []
},
S["method/groups.getById"] = {
    required: [],
    optional: ["group_id", "group_ids", "fields"]
},
S["method/account.getTogglesExternal"] = {
    required: ["toggles"],
    optional: []
},
S["method/account.getTogglesAnonym"] = {
    required: ["toggles"],
    optional: []
},
S)
  , kh = [5]
  , lh = [1114, 1116];
function mh(a) {
    for (var b = [], c = 0; c < a.length; c++)
        b[c] = a[c];
    return b
}
;function nh(a, b) {
    Yb.call(this, a);
    this.g = !!b.bl;
    this.i = !!b.Qg;
    this.lj = "append-component"
}
z(nh, Yb);
nh.prototype.Ta = function() {
    return this.ra && (this.N || this.g) && this.Fd()
}
;
nh.prototype.blur = function() {
    Yb.prototype.blur.call(this);
    this.i || this.T(null)
}
;
nh.prototype.Zc = function() {
    var a = Tb(this);
    return this.isVisible() && this.Fd() && a ? [a] : []
}
;
nh.prototype.ae = function(a, b) {
    var c = Yb.prototype.Ca.call(this, a, b);
    this.B("append-component", a, b);
    if (a instanceof nh)
        a.on(a.lj, this.B.bind(this));
    return c
}
;
function oh(a, b) {
    b && (-1 !== a.j.indexOf(b) ? Jb(a, b) : (a = a.j.filter(function(c) {
        return c instanceof nh
    }).find(function(c) {
        return ph(c, b)
    })) && oh(a, b))
}
function qh(a) {
    a = a.l;
    return a instanceof nh ? qh(a) : a
}
function rh(a, b) {
    return b ? -1 !== a.j.indexOf(b) ? a.T(b) : (a = a.j.filter(function(c) {
        return c instanceof nh
    }).find(function(c) {
        return ph(c, b)
    })) ? rh(a, b) : !1 : !1
}
function sh(a) {
    a = a.j;
    return a.concat(a.filter(function(b) {
        return b instanceof nh
    }).reduce(function(b, c) {
        return b.concat(sh(c))
    }, []))
}
function ph(a, b) {
    return b ? -1 !== a.j.indexOf(b) || a.j.filter(function(c) {
        return c instanceof nh
    }).some(function(c) {
        return ph(c, b)
    }) : !1
}
;function T(a) {
    a = void 0 === a ? {} : a;
    a = void 0 === a.Pd ? !0 : a.Pd;
    bf.call(this);
    this.i = O.g;
    this.ra = a;
    this.u = this.hb = null;
    this.Cd = !1;
    this.g = this.Rc()(this.ec(), th(this));
    this.re = "";
    ec(this, "s-abstract-base");
    this.ra && (this.u = this.i.za.i,
    Bd(this.L(), "with-menu"),
    this.u.on(this.u.ud, uh(this, this.Lj.bind(this))),
    this.i.za.on("menu-service-items-updated", uh(this, this.Dk.bind(this))));
    Jb(this, Ib(this));
    this.J.appendChild(this.g.root);
    O.on("resolution-changed", this.Cc.bind(this))
}
z(T, bf);
k = T.prototype;
k.Pa = function() {
    var a = this
      , b = bf.prototype.Pa.call(this)
      , c = this.l
      , d = mh(this.j).findIndex(function(e) {
        return e === c
    });
    return function() {
        var e = Promise
          , f = e.all
          , g = b()
          , h = mh(a.j);
        (h = h.includes(c) ? c : h[d]) && a.T(h);
        return f.call(e, [g, void 0])
    }
}
;
k.va = function() {
    bf.prototype.va.call(this);
    this.ra && vh(this)
}
;
k.Ba = function() {
    bf.prototype.Ba.call(this);
    this.ra && wh(this);
    var a = this.ef()
      , b = this.i.Xc.i;
    a.length && a.includes(b) && (this.i.Xc.i = null)
}
;
k.da = function(a, b) {
    return (a = bf.prototype.da.call(this, a, b)) ? a : !1
}
;
k.T = function(a, b) {
    this.ef().includes(a) ? this.i.Xc.i = a : this.i.Xc.i = null;
    if (!this.ra)
        return bf.prototype.T.call(this, a, b);
    var c = a instanceof eg
      , d = this.l instanceof eg;
    if (c && d)
        return bf.prototype.T.call(this, a, b);
    c && (this.hb = this.l);
    return d && this.hb && (c = bf.prototype.T.call(this, this.hb, b)) ? c : bf.prototype.T.call(this, a, b)
}
;
k.rb = function() {
    this.Cd = !0;
    sh(this).forEach(function(a) {
        a instanceof Hg && a.hc && a.rb()
    })
}
;
k.Ra = function() {
    this.Cd = !1;
    sh(this).forEach(function(a) {
        a instanceof Hg && a.hc && a.Ra()
    })
}
;
k.Wh = function() {
    return this.re || ""
}
;
function xh(a, b) {
    return a.D.block(b)
}
k.df = function() {
    return new yh({
        enabled: !0
    },{
        enabled: !0
    })
}
;
k.ef = function() {
    return this.ra ? [this.u] : []
}
;
function th(a) {
    return {
        Vb: function(b, c) {
            a.Ca(b, /\[]$/.test(c) ? "" : c)
        }
    }
}
k.ec = function() {
    return {
        K: this.i.K
    }
}
;
k.Cc = function() {
    if (this.ra) {
        var a = this.u.g
          , b = a.zb;
        $g(a.Eb);
        $g(b)
    }
}
;
function vh(a) {
    a.J.appendChild(a.u.L());
    a.Ca(a.u);
    var b = void 0 === b ? !0 : b;
    var c = a.F;
    c.l[yb(c, a.u)].left = b;
    Pb(a, a.u, "up", null);
    Pb(a, a.u, "down", null);
    Pb(a, a.u, "left", null)
}
function wh(a) {
    Nb(a, a.u);
    a.J.removeChild(a.u.L())
}
k.Dk = function() {
    wh(this);
    vh(this)
}
;
k.Lj = function() {
    if (this.hb)
        bf.prototype.T.call(this, this.hb);
    else {
        var a = this.j.find(function(b) {
            return !(b instanceof eg)
        });
        a && bf.prototype.T.call(this, a)
    }
}
;
function uh(a, b) {
    return function() {
        var c = ya.apply(0, arguments);
        a.Fc && b.apply(null, r(c))
    }
}
t.Object.defineProperties(T.prototype, {
    Cg: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Cd
        }
    },
    hc: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !0
        }
    },
    N: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return O.g.K
        }
    }
});
function yh() {
    Cb.apply(this, [].concat(r(ya.apply(0, arguments))));
    this.l = []
}
z(yh, Cb);
yh.prototype.u = function(a) {
    var b = this.g.indexOf(a);
    -1 !== b && this.l.splice(b, 1);
    Cb.prototype.u.call(this, a)
}
;
yh.prototype.v = function(a) {
    this.l.push({});
    Cb.prototype.v.call(this, a)
}
;
yh.prototype.i = function(a, b, c) {
    var d = this
      , e = c.value;
    return Cb.prototype.i.call(this, a, b.filter(function(f) {
        f = d.l[yb(d, f)];
        return Object.keys(f).length && c ? !!f[e] : !0
    }), c)
}
;
function zh() {
    this.i = "";
    this.F = this.D.bind(this)
}
zh.prototype.D = function() {
    return Promise.resolve(Ah)
}
;
function Bh(a, b) {
    return Ch(function(c) {
        return a.wi(c)
    }, b, a.F)
}
function Ch(a, b, c) {
    return new Promise(function(d, e) {
        function f(g) {
            return c(g, b).then(function(h) {
                switch (h) {
                case Dh:
                    a(b).then(d, f);
                    break;
                case Ah:
                    e(g);
                    break;
                case Eh:
                    O.device.Zf()
                }
            })
        }
        a(b).then(d, f)
    }
    )
}
var Dh = "retry"
  , Ah = "abort"
  , Eh = "exit";
function Fh(a, b) {
    b = void 0 === b ? {} : b;
    var c = b.method || "GET"
      , d = b.timeout || 15E3
      , e = b.query ? dd(a, b.query) : a
      , f = "undefined" !== typeof b.body;
    return new Promise(function(g, h) {
        if (f && -1 === ["POST", "PUT", "PATCH"].indexOf(c))
            throw new TypeError("HTTP method " + b.method + " should not have body");
        var l = new XMLHttpRequest
          , m = setTimeout(l.abort.bind(l), d);
        l.onreadystatechange = function() {
            4 === l.readyState && (clearTimeout(m),
            200 <= l.status && 299 >= l.status ? g(l) : h(l))
        }
        ;
        l.open(c, e, !0);
        b.headers && Object.keys(b.headers).forEach(function(u) {
            return l.setRequestHeader(u, b.headers[u])
        });
        var n = null;
        if (f) {
            if ("object" === typeof b.body) {
                var q = b.headers && b.headers["Content-Type"];
                "application/json" === q ? n = JSON.stringify(b.body) : "application/x-www-form-urlencoded" === q && (n = ed(b.body))
            }
            n || (n = String(b.body))
        }
        l.send(n)
    }
    )
}
;var Gh = Symbol("requiredProp");
function Hh(a) {
    a[Gh] = !0;
    return a
}
function Ih(a, b) {
    a = {
        type: a
    };
    a[Gh] = void 0 === b ? !1 : b;
    return a
}
function U(a) {
    return Ih("string", void 0 === a ? !1 : a)
}
function Jh(a) {
    return Ih("boolean", void 0 === a ? !1 : a)
}
function V(a) {
    return Ih("integer", void 0 === a ? !1 : a)
}
function Kh(a) {
    return Ih("array", void 0 === a ? !1 : a)
}
function Lh(a, b, c) {
    return Object.assign({}, Ih(void 0 === c ? "string" : c, void 0 === b ? !1 : b), {
        "enum": a
    })
}
function Mh(a) {
    return Lh([0, 1], void 0 === a ? !1 : a, "number")
}
function Nh(a) {
    return Object.keys(a).filter(function(b) {
        var c = !!a[b][Gh];
        delete a[b][Gh];
        return c
    })
}
function W(a) {
    var b = a.id
      , c = a.Y;
    a = void 0 === a.ka ? !1 : a.ka;
    return Object.assign({}, b ? {
        $id: b
    } : {}, {
        type: "object",
        properties: c,
        required: Nh(c),
        additionalProperties: a
    })
}
function X(a, b) {
    return Object.assign({}, Kh(void 0 === b ? !1 : b), {
        items: a
    })
}
function Y(a, b) {
    a = {
        $ref: a.$id
    };
    a[Gh] = void 0 === b ? !1 : b;
    return a
}
function Oh() {
    return {
        oneOf: ya.apply(0, arguments)
    }
}
function Ph(a, b) {
    return W({
        id: a,
        Y: {
            response: Hh(b)
        }
    })
}
;var Qh = W({
    id: "/Toggle",
    Y: {
        enabled: Jh(!0),
        name: U(!0),
        value: Oh(U(), V())
    },
    ka: !0
});
Ph("/TogglesResponse", W({
    Y: {
        toggles: X(Y(Qh))
    },
    ka: !1
}));
var Rh = W({
    id: "/Image",
    Y: {
        height: V(!0),
        width: V(!0),
        url: U(!0),
        with_padding: V()
    },
    ka: !0
});
var Sh = W({
    id: "/Album",
    Y: {
        id: V(!0),
        owner_id: V(!0),
        count: V(!0),
        updated_time: V(!0),
        title: U(!0),
        image: X(Y(Rh), !0),
        is_subscribed: Jh(!0)
    },
    ka: !0
});
var Th = W({
    id: "/Group",
    Y: {
        id: V(!0),
        members_count: V(),
        is_admin: V(),
        is_member: V(),
        is_advertiser: V(),
        is_closed: V(),
        name: U(!0),
        screen_name: U(),
        type: U(),
        photo_50: U(),
        photo_100: U(),
        photo_200: U()
    },
    ka: !0
});
W({
    id: "/GroupById",
    Y: {
        groups: X(Y(Th))
    },
    ka: !0
});
Ph("/groups/GetById", W({
    Y: {
        groups: X(Y(Th))
    },
    ka: !0
}));
var Uh = W({
    id: "/Likes",
    Y: {
        count: V(!0),
        user_likes: V(!0)
    },
    ka: !0
});
Ph("/LikesChangeResponse", W({
    Y: {
        likes: V(!0)
    },
    ka: !1
}));
var Vh = W({
    id: "/Files",
    Y: {
        mp4_240: U(),
        mp4_360: U(),
        mp4_480: U(),
        mp4_720: U(),
        mp4_1080: U(),
        mp4_1440: U(),
        mp4_2160: U(),
        hls: U(),
        dash_uni: U(),
        dash_sep: U(),
        dash_webm: U(),
        hls_ondemand: U(),
        dash_ondemand: U(),
        failover_host: U()
    },
    ka: !0
});
var Wh = W({
    id: "/TimelineThumbs",
    Y: {
        count_per_image: V(!0),
        count_per_row: V(!0),
        count_total: V(!0),
        frame_height: Ih("number", !0),
        frame_width: Ih("number", !0),
        is_uv: Jh(!0),
        frequency: V(!0),
        links: Kh(!0)
    }
});
var Xh = W({
    id: "/users/UserInfo",
    Y: {
        id: V(!0),
        first_name: U(!0),
        last_name: U(!0),
        can_access_closed: Jh(),
        is_closed: Jh(),
        screen_name: U(),
        photo_50: U(),
        photo_100: U(),
        photo_200: U()
    },
    ka: !0
})
  , Yh = W({
    id: "/users/UserSubscriptions",
    Y: {
        groups: W({
            id: "groups",
            Y: {
                count: V(!0),
                items: X(V())
            }
        }),
        users: W({
            id: "users",
            Y: {
                count: V(!0),
                items: X(V())
            }
        })
    },
    ka: !1
});
Ph("/users/Get", X(Y(Xh)));
Ph("/users/GetSubscriptions", Yh);
var Zh = W({
    id: "/MediascopePixel",
    Y: {
        event: U(!0),
        url: U(!0),
        params: W({
            Y: {
                interval: V()
            },
            ka: !0
        })
    },
    ka: !0
});
var $h = W({
    id: "/Artist",
    Y: {
        id: U(!0),
        name: U(!0),
        domain: U(!0)
    },
    ka: !0
})
  , ai = W({
    id: "/VideoRestriction",
    Y: {
        title: U(!0),
        text: U(!0),
        blur: V(),
        can_play: Mh(),
        can_preview: Mh(),
        card_icon: X(Rh),
        disclaimer_type: V(),
        list_icon: X(Rh),
        icon_name: U()
    }
})
  , bi = W({
    id: "/Video",
    Y: {
        id: V(!0),
        owner_id: V(!0),
        user_id: V(),
        ov_id: U(),
        duration: V(!0),
        date: V(!0),
        comments: V(),
        width: V(),
        height: V(),
        views: V(!0),
        spectators: V(),
        is_favorite: Oh(V(), Jh()),
        can_comment: Mh(!0),
        can_like: Mh(!0),
        can_repost: Mh(!0),
        can_subscribe: Mh(!0),
        can_add_to_faves: Mh(!0),
        can_add: Mh(!0),
        platform: U(),
        uv_stats_place: U(),
        title: U(!0),
        track_code: U(),
        stats_pixels: X(Y(Zh)),
        type: Lh(["live", "video", "music_video"], !0),
        description: U(),
        likes: Y(Uh),
        files: Y(Vh),
        trailer: Y(Vh),
        timeline_thumbs: Y(Wh),
        image: X(Y(Rh)),
        first_frame: X(Y(Rh)),
        main_artists: X(Y($h)),
        live_settings: W({
            Y: {
                can_rewind: Mh(),
                max_duration: V()
            },
            ka: !0
        }),
        live_start_time: V(),
        live_status: Lh("no_video deleted waiting started finished upcoming failed".split(" ")),
        viewed_duration: V(),
        content_restricted: Mh(),
        restriction: Y(ai),
        partner_text: U(!1)
    },
    ka: !0
});
Ph("/VideoGetResponse", W({
    Y: {
        current_video: Y(bi),
        count: V(!0),
        items: X(Y(bi), !0),
        groups: X(Y(Th)),
        profiles: X(Y(Xh))
    }
}));
var ci = W({
    id: "/Comment",
    Y: {
        id: V(!0),
        from_id: V(!0),
        date: V(!0),
        text: U(!0),
        likes: Y(Uh)
    },
    ka: !0
});
Ph("/VideoGetCommentsResponse", W({
    Y: {
        count: V(!0),
        items: X(Y(ci), !0),
        groups: X(Y(Th), !0),
        profiles: X(Y(Xh), !0)
    }
}));
Ph("/VideoGetLongPollServerResponse", W({
    Y: {
        url: U(!0)
    }
}));
Ph("/VideoGetLiveStatusResponse", X(W({
    Y: {
        owner_id: V(!0),
        id: V(!0),
        live_status: U(!0)
    }
}), !0));
var di = W({
    id: "/Suggestion",
    Y: {
        id: U(!0),
        title: U(!0),
        track_code: U(!0),
        type: U(!0)
    },
    ka: !0
});
var ei = W({
    id: "/catalog/SectionBlock",
    Y: {
        block_id: U(!0),
        title: U(!0),
        data_type: U()
    },
    ka: !0
})
  , fi = W({
    id: "/catalog/Block",
    Y: {
        id: U(!0),
        next_from: U(),
        url: U(),
        data_type: U()
    },
    ka: !0
})
  , gi = W({
    id: "/catalog/CatalogSubsection",
    Y: {
        icon: U(),
        id: U(!0),
        title: U(!0),
        stub_blocks: X(Y(ei))
    }
})
  , hi = W({
    id: "/catalog/CatalogSection",
    Y: {
        icon: U(),
        id: U(!0),
        title: U(!0),
        subsections: X(Y(gi)),
        stub_blocks: X(Y(ei)),
        blocks: X(Y(fi))
    },
    ka: !0
})
  , ii = W({
    id: "/catalog/Catalog",
    Y: {
        default_section: U(),
        sections: X(Y(hi, !0))
    }
})
  , ji = W({
    id: "/catalog/CatalogData",
    Y: {
        catalog: Y(ii, !0)
    }
});
Ph("/catalog/CatalogResponse", Y(ji));
var ki = W({
    id: "/catalog/BlockData",
    Y: {
        block: Y(fi, !0),
        albums: X(Y(Sh)),
        videos: X(Y(bi)),
        groups: X(Y(Th)),
        profiles: X(Y(Xh))
    }
});
Ph("/catalog/BlockResponse", Y(ki));
var li = W({
    id: "/catalog/SectionData",
    Y: {
        first_block_data: Hh(Oh(Y(ki, !0), Kh())),
        blocks: X(Y(ei), !0)
    }
});
Ph("/catalog/SectionDataResponse", Y(li));
var mi = W({
    id: "/catalog/VideoSearchData",
    Y: {
        catalog: Y(ii, !0),
        suggestions: X(Y(di)),
        albums: X(Y(Sh)),
        videos: X(Y(bi)),
        groups: X(Y(Th)),
        profiles: X(Y(Xh))
    }
});
Ph("/catalog/VideoSearchResponse", Y(mi));
var ni = W({
    id: "/users/AccountInfo",
    Y: {
        country: U(),
        lang: V(!0),
        phone: U(),
        email: U()
    },
    ka: !0
});
Ph("/users/GetAccountInfoResponse", Y(ni));
var oi = W({
    id: "/utils/ShortLink",
    Y: {
        short_url: U(!0),
        access_key: U(),
        key: U(!0),
        url: U(!0)
    },
    ka: !1
});
Ph("/utils/GetShortLink", Y(oi));
Ph("/stats/BookmarkChangeEventsResponse", V());
var pi = W({
    id: "/QRCodeResponse",
    Y: {
        auth_code: U(),
        auth_hash: U(),
        device_id: U(),
        expires_in: V(!0),
        auth_url: U(!0),
        qr_code_url: U(),
        device_name: U()
    }
});
W({
    id: "/TokenResponse",
    Y: {
        access_token: U(!0),
        expires_in: V(!0),
        user_id: V(!0),
        scope: V(!0),
        email: U()
    },
    ka: !1
});
var qi = W({
    id: "/TokenResponse",
    Y: {
        status: Lh([0, 1, 2, 3, 4], !0),
        user_id: V(),
        phone: U(),
        photo_200: U(),
        access_token: U(),
        is_partial: Jh()
    },
    ka: !1
});
W({
    id: "/MarusiaSessionResponse",
    Y: {
        session_id: U(!0),
        session_secret: U(!0),
        setup_id: U(!0),
        account_id: U(!0),
        device_id: U(),
        parent_device_id: U()
    },
    ka: !1
});
var ri = W({
    id: "/SuperAppTokenResponse",
    Y: {
        sat: U(!0)
    },
    ka: !1
});
W({
    id: "/AnonymousTokenResponse",
    Y: {
        token: U(!0)
    },
    ka: !0
});
W({
    id: "/Reposts",
    Y: {
        count: V(!0),
        user_reposted: V(!0)
    },
    ka: !0
});
Ph("/stats/StatsTrackEventsResponse", V());
Ph("/stats/StatEventsAddTVResponse", W({
    Y: {
        failed_ids: X(V(), !0)
    }
}));
var si = W({
    id: "/LangPackKeys",
    Y: {},
    ka: !0
});
W({
    id: "/LangPack",
    Y: {
        code: U(!0),
        id: V(!0),
        keys: Y(si, !0)
    },
    ka: !0
});
var ti = Ph("/stats/BoolResponse", V());
function ui(a) {
    zh.call(this);
    this.g = a.lang;
    this.u = a.Zi;
    this.o = 0;
    this.i = a.Ec;
    this.F = this.Nj.bind(this)
}
z(ui, zh);
k = ui.prototype;
k.wi = function(a) {
    var b = this;
    if (!this.hg(a))
        return Promise.reject(Error("pre-request-check-error"));
    var c = this.bi(a)
      , d = this.yd(a)
      , e = a.method || ("object" === typeof a.body ? "POST" : "GET")
      , f = this.We(a);
    return Fh(c, {
        method: e,
        headers: f,
        query: d,
        body: a.body,
        timeout: this.u
    }).then(function(g) {
        b.o = 0;
        return g.responseText ? JSON.parse(g.responseText) : {}
    })
}
;
k.hg = function(a) {
    var b = this.yd(a);
    return vi(this, a, b) ? !0 : !1
}
;
k.We = function(a) {
    var b = a.headers ? Object.assign({}, a.headers) : {};
    a.body && (b["Content-Type"] = "application/json");
    return b
}
;
k.bi = function(a) {
    return a.qb ? a.qb : this.i + "/" + a.path
}
;
k.yd = function(a) {
    a = a.U ? Object.assign({}, a.U) : {};
    var b = a[wi] || this.g;
    b && (a[wi] = b);
    return a
}
;
k.cg = function(a) {
    var b = jh[a.path];
    a = b.optional;
    b = b.required || [];
    var c = [wi].concat(r(b));
    return {
        wh: [].concat(r(a || []), r(c)),
        yh: b
    }
}
;
function vi(a, b, c) {
    b = a.cg(b);
    a = b.wh;
    b = b.yh;
    var d;
    c = Object.keys(c);
    var e = []
      , f = p(c);
    for (d = f.next(); !d.done; d = f.next()) {
        var g = d.value;
        (d = a.includes(g)) || e.push(g)
    }
    a = [];
    b = p(b);
    for (d = b.next(); !d.done; d = b.next())
        e = d.value,
        (d = c.includes(e)) || a.push(e);
    return a.length ? !1 : !0
}
k.Nj = function(a) {
    if (!(a instanceof XMLHttpRequest && 504 !== a.status) && 2 > this.o)
        return this.o++,
        Promise.resolve(Dh);
    this.o = 0;
    return Promise.resolve(Ah)
}
;
var wi = "lang";
function xi(a) {
    if ("object" === typeof a)
        return a.response ? a.response : a
}
function yi(a) {
    if ("object" === typeof a)
        return a.result ? a.result : a
}
;function zi(a) {
    ui.call(this, a);
    this.l = this.j = null;
    this.v = a.$d
}
z(zi, ui);
k = zi.prototype;
k.hg = function(a) {
    if (!this.j && !this.l)
        return !1;
    var b = this.yd(a);
    return vi(this, a, b) ? !0 : !1
}
;
k.cg = function(a) {
    var b = jh[a.path];
    a = b.optional;
    b = [Ai, Bi].concat(r(b.required || []));
    var c = [Ci].concat(r(b));
    return {
        wh: [].concat(r(a || []), r(c)),
        yh: b
    }
}
;
k.We = function(a) {
    var b = a.headers ? Object.assign({}, a.headers) : {};
    a = a.method || ("object" === typeof a.body ? "POST" : "GET");
    b["X-User-Agent"] = navigator.userAgent + " @smart-tv-app 1.3.12";
    if ("POST" === a || "PATCH" === a)
        b["Content-Type"] = "application/json";
    return b
}
;
k.bi = function(a) {
    return a.qb ? a.qb : this.i + "/" + a.path
}
;
k.yd = function(a) {
    a = a.U ? Object.assign({}, a.U) : {};
    this.v && (a[Ai] = this.v);
    var b = a[Ci] || this.g;
    b && (a[Ci] = b);
    if (this.j || this.l)
        a[Bi] = this.j || this.l;
    return a
}
;
var Ai = "v"
  , Ci = "lang"
  , Bi = "access_token";
function Di() {
    zh.apply(this, arguments)
}
z(Di, zh);
Di.prototype.wi = function(a) {
    var b = a.U ? Object.assign({}, a.U) : {}
      , c = a.qb || a.path
      , d = a.method || ("object" === typeof a.body ? "POST" : "GET")
      , e = Ei(a);
    a = Fi(a);
    return Fh(c, {
        method: d,
        headers: e,
        query: b,
        body: a
    }).then(function(f) {
        return f.responseText ? JSON.parse(f.responseText) : {}
    })
}
;
function Ei(a) {
    var b = a.headers ? Object.assign({}, a.headers) : {};
    !b["Content-Type"] && a.body && (b["Content-Type"] = "application/json");
    return b
}
function Fi(a) {
    var b = a.headers ? Object.assign({}, a.headers) : {}
      , c = a.body;
    b["Content-Type"] && "application/x-www-form-urlencoded" === b["Content-Type"] && (c = c ? Object.keys(c).map(function(d) {
        return encodeURIComponent(d) + "=" + encodeURIComponent("" + c[d])
    }).join("&") : void 0);
    return c
}
;function Gi(a) {
    this.Sh = a.session_id;
    this.dj = a.session_secret;
    this.g = a.account_id;
    this.j = a.setup_id;
    this.deviceId = a.device_id;
    this.i = a.parent_device_id
}
function Hi(a) {
    return R(a, Gi, ["session_id", "session_secret", "account_id", "setup_id"])
}
;function Ii(a) {
    function b(y) {
        for (var A = "", C = 0; 3 >= C; C++)
            A += "0123456789abcdef".charAt(y >> 8 * C + 4 & 15) + "0123456789abcdef".charAt(y >> 8 * C & 15);
        return A
    }
    function c(y, A) {
        var C = (y & 65535) + (A & 65535);
        return (y >> 16) + (A >> 16) + (C >> 16) << 16 | C & 65535
    }
    function d(y, A, C, G, la, Va) {
        y = c(c(A, y), c(G, Va));
        return c(y << la | y >>> 32 - la, C)
    }
    function e(y, A, C, G, la, Va, Ic) {
        return d(A & C | ~A & G, y, A, la, Va, Ic)
    }
    function f(y, A, C, G, la, Va, Ic) {
        return d(A & G | C & ~G, y, A, la, Va, Ic)
    }
    function g(y, A, C, G, la, Va, Ic) {
        return d(C ^ (A | ~G), y, A, la, Va, Ic)
    }
    a = function(y) {
        var A = (y.length + 8 >> 6) + 1, C = Array(16 * A), G;
        for (G = 0; G < 16 * A; G++)
            C[G] = 0;
        for (G = 0; G < y.length; G++)
            C[G >> 2] |= y.charCodeAt(G) << G % 4 * 8;
        C[G >> 2] |= 128 << G % 4 * 8;
        C[16 * A - 2] = 8 * y.length;
        return C
    }(a);
    for (var h = 1732584193, l = -271733879, m = -1732584194, n = 271733878, q = 0; q < a.length; q += 16) {
        var u = h
          , w = l
          , x = m
          , J = n;
        h = e(h, l, m, n, a[q], 7, -680876936);
        n = e(n, h, l, m, a[q + 1], 12, -389564586);
        m = e(m, n, h, l, a[q + 2], 17, 606105819);
        l = e(l, m, n, h, a[q + 3], 22, -1044525330);
        h = e(h, l, m, n, a[q + 4], 7, -176418897);
        n = e(n, h, l, m, a[q + 5], 12, 1200080426);
        m = e(m, n, h, l, a[q + 6], 17, -1473231341);
        l = e(l, m, n, h, a[q + 7], 22, -45705983);
        h = e(h, l, m, n, a[q + 8], 7, 1770035416);
        n = e(n, h, l, m, a[q + 9], 12, -1958414417);
        m = e(m, n, h, l, a[q + 10], 17, -42063);
        l = e(l, m, n, h, a[q + 11], 22, -1990404162);
        h = e(h, l, m, n, a[q + 12], 7, 1804603682);
        n = e(n, h, l, m, a[q + 13], 12, -40341101);
        m = e(m, n, h, l, a[q + 14], 17, -1502002290);
        l = e(l, m, n, h, a[q + 15], 22, 1236535329);
        h = f(h, l, m, n, a[q + 1], 5, -165796510);
        n = f(n, h, l, m, a[q + 6], 9, -1069501632);
        m = f(m, n, h, l, a[q + 11], 14, 643717713);
        l = f(l, m, n, h, a[q], 20, -373897302);
        h = f(h, l, m, n, a[q + 5], 5, -701558691);
        n = f(n, h, l, m, a[q + 10], 9, 38016083);
        m = f(m, n, h, l, a[q + 15], 14, -660478335);
        l = f(l, m, n, h, a[q + 4], 20, -405537848);
        h = f(h, l, m, n, a[q + 9], 5, 568446438);
        n = f(n, h, l, m, a[q + 14], 9, -1019803690);
        m = f(m, n, h, l, a[q + 3], 14, -187363961);
        l = f(l, m, n, h, a[q + 8], 20, 1163531501);
        h = f(h, l, m, n, a[q + 13], 5, -1444681467);
        n = f(n, h, l, m, a[q + 2], 9, -51403784);
        m = f(m, n, h, l, a[q + 7], 14, 1735328473);
        l = f(l, m, n, h, a[q + 12], 20, -1926607734);
        h = d(l ^ m ^ n, h, l, a[q + 5], 4, -378558);
        n = d(h ^ l ^ m, n, h, a[q + 8], 11, -2022574463);
        m = d(n ^ h ^ l, m, n, a[q + 11], 16, 1839030562);
        l = d(m ^ n ^ h, l, m, a[q + 14], 23, -35309556);
        h = d(l ^ m ^ n, h, l, a[q + 1], 4, -1530992060);
        n = d(h ^ l ^ m, n, h, a[q + 4], 11, 1272893353);
        m = d(n ^ h ^ l, m, n, a[q + 7], 16, -155497632);
        l = d(m ^ n ^ h, l, m, a[q + 10], 23, -1094730640);
        h = d(l ^ m ^ n, h, l, a[q + 13], 4, 681279174);
        n = d(h ^ l ^ m, n, h, a[q], 11, -358537222);
        m = d(n ^ h ^ l, m, n, a[q + 3], 16, -722521979);
        l = d(m ^ n ^ h, l, m, a[q + 6], 23, 76029189);
        h = d(l ^ m ^ n, h, l, a[q + 9], 4, -640364487);
        n = d(h ^ l ^ m, n, h, a[q + 12], 11, -421815835);
        m = d(n ^ h ^ l, m, n, a[q + 15], 16, 530742520);
        l = d(m ^ n ^ h, l, m, a[q + 2], 23, -995338651);
        h = g(h, l, m, n, a[q], 6, -198630844);
        n = g(n, h, l, m, a[q + 7], 10, 1126891415);
        m = g(m, n, h, l, a[q + 14], 15, -1416354905);
        l = g(l, m, n, h, a[q + 5], 21, -57434055);
        h = g(h, l, m, n, a[q + 12], 6, 1700485571);
        n = g(n, h, l, m, a[q + 3], 10, -1894986606);
        m = g(m, n, h, l, a[q + 10], 15, -1051523);
        l = g(l, m, n, h, a[q + 1], 21, -2054922799);
        h = g(h, l, m, n, a[q + 8], 6, 1873313359);
        n = g(n, h, l, m, a[q + 15], 10, -30611744);
        m = g(m, n, h, l, a[q + 6], 15, -1560198380);
        l = g(l, m, n, h, a[q + 13], 21, 1309151649);
        h = g(h, l, m, n, a[q + 4], 6, -145523070);
        n = g(n, h, l, m, a[q + 11], 10, -1120210379);
        m = g(m, n, h, l, a[q + 2], 15, 718787259);
        l = g(l, m, n, h, a[q + 9], 21, -343485551);
        h = c(h, u);
        l = c(l, w);
        m = c(m, x);
        n = c(n, J)
    }
    return b(h) + b(l) + b(m) + b(n)
}
;function Ji() {
    var a = p(O.C.split(":"))
      , b = a.next().value;
    a = a.next().value;
    a = Ii(a);
    return ":c:stv:vk_video_" + b + ":" + a
}
function Ki(a) {
    ui.call(this, {
        Ec: a.Ec,
        Zi: a.Zi
    });
    this.j = this.l = this.v = null
}
z(Ki, ui);
function Li(a) {
    a.j || (a.j = Ji());
    return a.j
}
Ki.prototype.hg = function(a) {
    return !!this.l || "device/vk_video/attach" === a.path
}
;
Ki.prototype.We = function(a) {
    a.headers = Object.assign({}, a.headers, this.v ? {
        Authorization: "Bearer " + this.v
    } : {});
    return ui.prototype.We.call(this, a)
}
;
Ki.prototype.yd = function(a) {
    a = a.U ? Object.assign({}, a.U) : {};
    a[Mi] = Li(this);
    this.l && (a[Ni] = this.l);
    return a
}
;
var Mi = "device_id"
  , Ni = "session_id";
function Oi(a) {
    try {
        return JSON.stringify(a)
    } catch (b) {}
    return ""
}
;function Pi(a) {
    var b = Error.call(this, "");
    this.message = b.message;
    "stack"in b && (this.stack = b.stack);
    this.name = a.name || Qi;
    this.message = O.g.K.G("applicationError.applicationErrorMessage", {
        details: a.details || "no details provided"
    });
    this.details = a.details || ""
}
z(Pi, Error);
var Qi = "unknown-error";
function Ri(a) {
    var b = Error.call(this, "");
    this.message = b.message;
    "stack"in b && (this.stack = b.stack);
    this.actions = [];
    this.Na = void 0 === a.Na ? !0 : a.Na;
    this.name = a.name || Si;
    this.message = Ti(a);
    this.title = a.title || "";
    this.description = a.description || "";
    this.icon = a.icon;
    a.actions && a.actions.length && (this.actions = a.actions)
}
z(Ri, Error);
function Ti(a) {
    var b = (a.actions || []).map(function(c) {
        return c.label
    }).join(",");
    return O.g.K.G("applicationError.interactiveErrorMessage", {
        title: a.title || "unknown",
        description: a.description || "unknown",
        actions: b,
        details: a.error
    })
}
function Ui(a) {
    return new Ri({
        name: Vi,
        title: O.g.K.G("applicationError.baseTitle"),
        description: O.g.K.G("applicationError.baseDescription"),
        actions: [{
            label: O.g.K.G("buttons.ok"),
            value: Wi,
            Sa: !0
        }],
        error: a
    })
}
var Si = "unknown-error"
  , Vi = "common-error"
  , Wi = "ok";
function Xi() {
    this.g = null
}
;function Z(a) {
    N.call(this);
    this.j = a;
    this.Sc = null;
    this.mj = "resource-error";
    this.o = this.i.bind(this)
}
z(Z, N);
function Yi(a, b, c) {
    var d = {
        path: b.path,
        method: b.method || "GET",
        U: b.U,
        body: b.body || void 0,
        qb: b.qb
    };
    return Bh(a.j, Zi(d)).then(function(e) {
        return a.g(e, b)
    }).then(function(e) {
        a.l();
        return c ? c(e) : e
    }).catch(function(e) {
        return a.o(e, d)
    })
}
Z.prototype.i = function(a) {
    var b = a;
    switch (!0) {
    case b instanceof XMLHttpRequest:
        b = new Ri({
            name: "transport-error",
            title: O.g.K.G("applicationError.networkTitle"),
            description: O.g.K.G("applicationError.networkDescription"),
            actions: [{
                label: O.g.K.G("buttons.ok"),
                value: Wi,
                Sa: !0
            }]
        });
        break;
    case b instanceof Pi:
    case b instanceof Ri:
        break;
    default:
        b = Ui(a instanceof Error ? a : Error(a ? a.toString() : "Base Error"))
    }
    this.B("resource-error", b);
    return Promise.reject()
}
;
Z.prototype.g = function(a) {
    var b, c, d;
    return D(function(e) {
        if (!$i(a))
            return e.return(a);
        b = a.error || a.response || a;
        c = b.error_code;
        d = aj(b);
        if (17 === c)
            throw e = Error(d),
            new Ri({
                name: "api-error",
                title: O.g.K.G("applicationError.baseTitle"),
                description: O.g.K.G("applicationError.validationDescription"),
                actions: [{
                    label: O.g.K.G("buttons.ok"),
                    value: Wi,
                    Sa: !0
                }],
                error: e
            });
        if (kh.includes(c) && d.includes("user revoke access") || lh.includes(c))
            throw new Pi({
                name: "authorization-revoke-needed-error",
                details: Oi(b)
            });
        if (6 === c)
            return e.return(a);
        if (kh.includes(c))
            throw new Pi({
                name: "authorization-error",
                details: Oi(b)
            });
        e = Error(d);
        throw new Ri({
            name: "api-error",
            title: O.g.K.G("applicationError.apiTitle"),
            description: O.g.K.G("applicationError.apiDescription"),
            actions: [{
                label: O.g.K.G("buttons.ok"),
                value: Wi,
                Sa: !0
            }],
            error: e
        });
    })
}
;
Z.prototype.l = function() {}
;
function $i(a) {
    if ("object" !== typeof a)
        return !1;
    a = a.error || a.response || a;
    var b = a.hasOwnProperty("error") && a.hasOwnProperty("error_description");
    return b = b || a.hasOwnProperty("error_code") && a.hasOwnProperty("error_msg")
}
function Zi(a) {
    return {
        path: a.path,
        qb: a.qb,
        body: a.body,
        method: a.method,
        headers: a.headers,
        U: a.U
    }
}
function aj(a) {
    return a.error_text || a.error_msg || a.error_message || a.error_description || a.error_desc || ""
}
;function bj(a) {
    this.g = a.auth_code;
    this.j = a.auth_hash;
    this.ce = a.auth_url;
    this.deviceId = a.device_id;
    this.i = 1E3 * a.expires_in;
    this.bf = a.qr_code_url
}
;function cj(a) {
    this.kb = a.access_token;
    this.email = a.email || null
}
;function dj(a) {
    var b = this;
    this.kb = a.access_token;
    this.phone = a.phone;
    this.$a = a.photo_200;
    this.status = ej;
    Object.entries(fj).find(function(c) {
        c = p(c);
        var d = c.next().value;
        return c.next().value === a.status ? (b.status = fj[d],
        !0) : !1
    })
}
function gj(a) {
    return R(a, dj, ["status"])
}
var ej = 0
  , fj = {
    im: ej,
    OPENED: 1,
    cm: 2,
    lm: 3,
    qj: 4
};
function hj(a) {
    this.kb = a.token
}
function ij(a) {
    return R(a, hj, ["token"])
}
;function jj(a) {
    this.id = a.id;
    this.xa = a.from_id;
    this.date = new Date(1E3 * a.date);
    this.text = a.text
}
jj.prototype.wc = function(a) {
    this.ma = a
}
;
function kj(a) {
    return R(a, jj, ["id", "from_id", "date", "text"])
}
;function lj(a) {
    this.id = a.id;
    this.title = a.title;
    this.ea = a.track_code || "";
    this.type = a.type || null
}
;function mj(a, b) {
    var c = [];
    a.forEach(function(d) {
        (d = b(d)) && c.push(d)
    });
    return c
}
function nj(a) {
    var b = {};
    mj(a.groups, ye).forEach(function(c) {
        b[-1 * Math.abs(c.id)] = c
    });
    mj(a.profiles, Be).forEach(function(c) {
        return b[c.id] = c
    });
    return b
}
function oj(a, b) {
    var c = [];
    mj(a.ba || [], Qe).forEach(function(f) {
        var g = b[f.xa];
        g && f.wc(g);
        var h = f.F ? b[f.F] : null;
        h && (f.u = h);
        (g || h || f.type === Oe) && c.push(f);
        g = f.ya;
        h = f.duration;
        var l = f.Oa;
        if (g && (null === l || "finished" === l)) {
            var m = {};
            l = O.g.g;
            f = (m[f.ta] = Ke(g / h, 0, 1),
            m);
            l.g = Object.assign(l.g, f)
        }
    });
    var d = [];
    mj(a.sb || [], We).forEach(function(f) {
        var g = b[f.xa];
        g && (f.wc(g),
        d.push(f))
    });
    var e = [];
    mj(a.wg || [], kj).forEach(function(f) {
        var g = b[f.xa];
        g && (f.wc(g),
        e.push(f))
    });
    a = (a.Sb || []).map(function(f) {
        return R(f, lj, ["id", "title"])
    }).filter(function(f) {
        return f
    });
    return {
        ba: c,
        sb: d,
        wg: e,
        Sb: a,
        xl: b
    }
}
function pj(a) {
    return oj(a, nj(a))
}
;function qj(a) {
    this.block = R(a.block, Ye, ["id"]);
    this.sb = [];
    this.ba = [];
    a = pj({
        groups: a.groups || [],
        profiles: a.profiles || [],
        ba: a.videos || [],
        sb: a.albums || []
    });
    this.ba = a.ba;
    this.sb = a.sb
}
;function rj(a) {
    this.i = R(a.first_block_data, qj, ["block"]);
    this.g = []
}
;function sj(a) {
    this.count = a.count || 0;
    this.ba = [];
    this.i = null;
    this.j = 0;
    a.current_video && (this.i = Qe(a.current_video || {}));
    a = pj({
        groups: a.groups || [],
        profiles: a.profiles || [],
        ba: a.items || []
    });
    this.ba = a.ba;
    this.i && (a = a.xl[this.i.xa]) && this.i.wc(a)
}
function tj(a, b, c) {
    b += c;
    a.j = b >= a.count ? null : b
}
function uj(a) {
    return R(a, sj, ["count", "items"])
}
t.Object.defineProperties(sj.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.j
        }
    }
});
function vj(a) {
    function b(f, g) {
        return f.replace(/\[([^[]+)\]/g, function(h, l) {
            return g[l] || h
        })
    }
    function c(f, g) {
        g = g.split("_");
        g = g[g.length - 1].replace("Plural", "");
        return "[" + g + "] [" + g + "Plural:" + f.slice(1).join("|") + "]"
    }
    this.id = a.id;
    this.code = a.code;
    this.keys = null;
    a = a.keys || {};
    var d = {}
      , e = function(f) {
        for (var g = {}, h = p(Object.keys(f).filter(function(q) {
            return q.endsWith("Plural")
        })), l = h.next(); !l.done; l = h.next()) {
            l = l.value;
            var m = f[l];
            if (Array.isArray(m)) {
                var n = l.split("_").pop();
                g[n] = c(m, l)
            }
        }
        return g
    }(a);
    Object.entries(a).filter(function(f) {
        return f[0].startsWith("smarttv")
    }).forEach(function(f) {
        var g = p(f);
        f = g.next().value;
        g = g.next().value;
        var h;
        Array.isArray(g) ? h = c(g, f) : h = g.replace(/\{/gm, "[").replace(/\}/gm, "]");
        h = b(h, e);
        f = f.split("_").slice(1);
        for (g = d; f.length; ) {
            var l = f.shift()
              , m = g.hasOwnProperty(l)
              , n = "object" === typeof g[l];
            m && !n && delete g[l];
            f.length ? (g[l] = g[l] || {},
            g = g[l]) : g[l] = h
        }
    });
    Object.keys(d).length && (this.keys = d)
}
;function wj(a) {
    this.id = a.id;
    this.width = a.width;
    this.height = a.height;
    var b = {
        photo_64: 64,
        photo_128: 128,
        photo_256: 256,
        photo_352: 352,
        photo_512: 512
    }
      , c = Object.keys(b).map(function(d) {
        return a[d] ? {
            height: b[d],
            width: b[d],
            url: a[d]
        } : null
    }).filter(Boolean);
    this.image = ue(c, 256)
}
;function xj(a) {
    this.type = yj[a.type];
    this.ma = this.g = null;
    this.xa = a.owner_id;
    this.type === zj && pj({
        groups: a.group ? [a.group] : [],
        profiles: a.user ? [a.user] : [],
        wg: [a.comment]
    });
    this.type === Aj && (this.count = a.count);
    this.type === Bj && (this.count = a.count);
    this.type === Cj && (this.g = R(a.sticker || {}, wj, ["id", "product_id"]));
    if (a = a.user || a.group)
        this.ma = Be(a) || ye(a)
}
var zj = "video_comment_new"
  , Bj = "video_like"
  , Aj = "video_view"
  , Cj = "sticker"
  , yj = {
    video_comment_new: zj,
    video_comment_delete: "video_comment_delete",
    video_like: Bj,
    video_view: Aj,
    sticker: Cj
};
function Dj(a) {
    var b = this;
    this.i = a.ts;
    this.g = [];
    a.events.forEach(function(c) {
        c = JSON.parse(c);
        if ("object" === typeof c) {
            var d = yj[c.type];
            if (d) {
                "video_comment_delete" === d && (c.id = c.comment_id);
                try {
                    var e = new xj(c)
                } catch (f) {
                    e = null
                }
            } else
                e = null;
            e && b.g.push(e)
        }
    })
}
function Ej(a) {
    return R(a, Dj, ["ts", "events"])
}
;function Fj(a) {
    this.g = a.short_url;
    this.url = a.url;
    this.link = a.link
}
function Gj(a) {
    return R(a, Fj, ["short_url", "url", "key"])
}
;function Ij() {
    var a = [Jj, Kj];
    O.device instanceof Lj && a.push(Mj);
    return Object.values(Nj).map(function(b) {
        return a.map(function(c) {
            return [c, b].filter(Boolean).join("_")
        }).join(",")
    }).join(",")
}
var Nj = {
    tn: "code_time",
    En: "t_interval",
    Yl: "analytics",
    $l: "analytics_vk",
    Zl: "analytics_one",
    Rm: "mediascope_pixels",
    yn: "sl_throttle",
    Pn: "use_qr_code",
    vn: "remote_service",
    bm: "api_version",
    Mm: "lang",
    Gn: "preview",
    Qm: "live_counter",
    Sm: "video_mediascope_pixels",
    Dn: "display_mode",
    On: "user_subscr_enabled",
    gn: "player_ads",
    jn: "player_ads_skip_m",
    hn: "player_ads_past_r",
    kn: "player_ads_stat",
    sn: "product_statistics",
    ln: "player_tech_info"
}
  , Jj = ""
  , Mj = "smart_tv_tizen"
  , Kj = "smart_tv"
  , Oj = ["smart_tv_pc", Mj, "smart_tv_webos", Kj];
function Pj(a) {
    this.enabled = a.enabled;
    this.name = a.name;
    this.value = a.value;
    this.i = this.name.startsWith(Jj);
    a = O;
    this.g = this.name.startsWith(Kj) ? !0 : a.device instanceof Lj ? this.name.startsWith(Mj) : !0;
    a = this.name;
    for (var b = p(Oj), c = b.next(); !c.done; c = b.next())
        if (c = new RegExp("^" + c.value + "_"),
        c.test(a)) {
            a = a.replace(c, "");
            break
        }
    this.vg = a
}
;function Qj(a) {
    this.g = a.sat
}
function Rj(a) {
    return R(a, Qj, ["sat"])
}
;function Sj(a, b) {
    this.id = a.id;
    this.g = a.videos_ids || [];
    this.Da = a.next_from;
    this.title = void 0 === b ? null : b;
    this.ba = []
}
function Tj(a, b) {
    a.g.forEach(function(c) {
        (c = b[c]) && a.ba.push(c)
    })
}
;function Uj(a) {
    var b = this;
    this.g = [];
    this.sb = [];
    this.ba = [];
    this.Mh = [];
    a.catalog && (a.catalog.sections || []).forEach(function(c) {
        (c = nf(c)) && b.g.push(c)
    });
    a = pj({
        groups: a.groups || [],
        profiles: a.profiles || [],
        ba: a.videos || [],
        sb: a.albums || []
    });
    this.ba = a.ba;
    this.sb = a.sb;
    Vj(this)
}
function Vj(a) {
    var b = a.g[0];
    if (b) {
        var c = null
          , d = a.ba.reduce(function(e, f) {
            e[f.ta] = f;
            return e
        }, {});
        b.g.forEach(function(e) {
            e.g && e.g.name && "header_compact" === e.g.name && e.g.title && (c = e.g.title);
            if (e.dataType === $e) {
                e = e.Fa();
                if (e = R(e, Sj, ["id"], c))
                    Tj(e, d),
                    a.Mh.push(e);
                c = null
            }
        })
    }
}
;function Wj(a, b) {
    this.id = a.id;
    this.g = a.search_suggestions_ids || [];
    this.Da = a.nextFrom;
    this.Sb = [];
    this.title = void 0 === b ? null : b
}
function Xj(a, b) {
    a.g.forEach(function(c) {
        (c = b[c]) && a.Sb.push(c)
    })
}
;function Yj(a) {
    var b = this;
    this.g = [];
    this.Ch = [];
    this.Sb = [];
    a.catalog && (a.catalog.sections || []).forEach(function(c) {
        (c = nf(c)) && b.g.push(c)
    });
    this.Sb = pj({
        groups: a.groups || [],
        profiles: a.profiles || [],
        ba: a.videos || [],
        sb: a.albums || [],
        Sb: a.suggestions || []
    }).Sb;
    Zj(this)
}
function Zj(a) {
    var b = a.g[0];
    if (b) {
        var c = null
          , d = a.Sb.reduce(function(e, f) {
            e[f.id] = f;
            return e
        }, {});
        b.g.forEach(function(e) {
            e.g && e.g.name && "header_compact" === e.g.name && e.g.title && (c = e.g.title);
            if ("catalog_search_suggestion" === e.dataType || e.i && e.i.length) {
                e = e.Fa();
                if (e = R(e, Wj, ["id"], c))
                    Xj(e, d),
                    a.Ch.push(e);
                c = null
            }
        })
    }
}
;function ak(a) {
    return R(a, vj, ["id", "code", "keys"])
}
function bk(a) {
    a: {
        if ("object" === typeof a || Array.isArray(a)) {
            if (Array.isArray(a)) {
                a = a[0];
                break a
            }
            if ((a = xi(a)) && Array.isArray(a)) {
                a = a[0];
                break a
            }
        }
        a = void 0
    }
    return Be(a && "object" === typeof a ? a : {})
}
function ck(a) {
    return a.response && Array.isArray(a.response) ? a.response.map(function(b) {
        return Be(b)
    }) : []
}
function dk(a) {
    return a.response
}
function ek(a, b) {
    return (a = xi(a)) && "object" === typeof a ? b(a) : null
}
function fk(a) {
    return ek(a, uj)
}
function gk(a) {
    return function(b) {
        return R(a ? xi(b) : b, bj, ["auth_url"])
    }
}
function hk(a) {
    return R(a, cj, ["access_token", "expires_in", "user_id", "scope"])
}
function ik(a) {
    return ek(a, gj)
}
function jk(a) {
    return (a = yi(a)) && "object" === typeof a ? Hi(a) : null
}
function kk(a) {
    return ek(a, Rj)
}
function lk(a) {
    return ek(a, ij)
}
function mk(a) {
    return ek(a, Gj)
}
function nk(a) {
    a = xi(a);
    if (!a || "object" !== typeof a || !a.first_block_data)
        return null;
    var b = R(a, rj, ["first_block_data"]);
    if (!b)
        return b;
    b.g = (a.blocks || []).map(function(c) {
        return hf(c)
    }).filter(function(c) {
        return !!c
    });
    return b
}
function ok(a) {
    a = xi(a);
    if (!a || "object" !== typeof a || !a.catalog || !a.catalog.sections)
        return [];
    var b = a.catalog.default_section || null
      , c = [];
    a.catalog.sections.forEach(function(d, e) {
        if (d = nf(d))
            d.vb = b ? d.id === b : 0 === e,
            c.push(d)
    });
    return c
}
function pk(a) {
    return R(xi(a) || null, qj, ["block"])
}
function qk(a) {
    return (a = xi(a)) && "object" === typeof a && a.catalog && a.catalog.sections ? R(a, Uj, ["catalog"]) : null
}
function rk(a) {
    return (a = xi(a)) && "object" === typeof a && a.catalog && a.catalog.sections ? R(a, Yj, ["catalog"]) : null
}
function sk(a) {
    return 0 === xi(a).failed_ids.length
}
function tk(a) {
    return !!xi(a)
}
function uk(a) {
    return !!xi(a)
}
function vk(a) {
    return (a = xi(a)) && "object" === typeof a && a.groups && Array.isArray(a.groups) && a.groups[0] ? ye(a.groups[0] || null) : null
}
function wk(a) {
    return a.response ? (a.response.groups ? a.response.groups : a.response).map(function(b) {
        return ye(b)
    }) : []
}
function xk(a) {
    return !!xi(a)
}
function yk(a) {
    return (a = xi(a)) && "object" === typeof a && void 0 !== a.likes ? parseInt(a.likes, 10) : null
}
function zk(a) {
    return (a = xi(a)) && "object" === typeof a && void 0 !== a.url ? a.url : null
}
function Ak(a) {
    var b = {}
      , c = {};
    a = xi(a);
    if (!a || "object" !== typeof a || !a.toggles || !Array.isArray(a.toggles))
        return [];
    a.toggles.forEach(function(d) {
        (d = R(d, Pj, ["enabled", "name"])) && d.g && (d.i ? b[d.vg] = d : c[d.vg] = d)
    });
    a = Object.assign(b, c);
    return Object.values(a)
}
function Bk(a) {
    return (xi(a) || []).map(function(b) {
        return {
            id: b.id,
            xa: b.owner_id,
            Oa: b.live_status
        }
    })
}
;function Ck() {
    this.g = []
}
Ck.prototype.add = function(a, b, c, d) {
    return Dk(this, Ek(a, b, c, d))
}
;
function Dk(a, b) {
    a.g.push(b);
    return b
}
Ck.prototype.clear = function() {
    this.g.forEach(function(a) {
        return a.ob()
    });
    this.g = []
}
;
function Ek(a, b, c, d) {
    a.on(b, c);
    return {
        event: b,
        fe: c,
        ob: function() {
            return a.off(b, c)
        },
        receiver: d
    }
}
function Fk(a, b, c) {
    a.addEventListener(b, c);
    return {
        event: b,
        fe: c,
        ob: function() {
            return a.removeEventListener(b, c)
        },
        receiver: void 0
    }
}
;function Gk() {
    N.call(this)
}
z(Gk, N);
function Hk(a) {
    var b = void 0 === a ? null : a
      , c = new Gk;
    return {
        get I() {
            return b
        },
        set I(d) {
            var e = b;
            e = qe(e) ? Object.assign({}, e) : e;
            b = d;
            c.B("ref-value-change", b, e)
        },
        i: function(d) {
            b = d
        },
        g: function(d) {
            return Ek(c, "ref-value-change", function(e, f, g) {
                return d(f, g)
            })
        }
    }
}
;function Ik() {
    Z.apply(this, arguments)
}
z(Ik, Z);
function Jk(a, b, c) {
    return Kk(a, {
        xa: b.xa,
        og: b.id,
        count: 10,
        offset: void 0 === c ? 0 : c
    })
}
function Lk(a, b) {
    b = b.map(function(c) {
        return c.ta
    });
    return Mk(a, b)
}
function Mk(a, b) {
    return Kk(a, {
        ba: b
    })
}
function Nk(a, b, c, d) {
    var e = Ok({
        xa: b.C,
        pd: b.id,
        offset: void 0 === d ? 0 : d,
        count: void 0 === c ? 10 : c,
        md: a.Sc.g || "",
        ea: b.ea,
        ul: !0
    });
    return Yi(a, {
        U: Pk(e),
        path: "method/video.getVideoDiscover"
    }, fk).then(function(f) {
        return Qk(f, e)
    })
}
function Rk(a) {
    var b = Hk(!1);
    var c = void 0 === c ? 10 : c;
    var d, e, f, g, h, l, m, n, q;
    return D(function(u) {
        switch (u.g) {
        case 1:
            d = 200,
            e = 20,
            f = new sj({}),
            tj(f, 0, 0),
            g = [],
            l = h = 0,
            m = 20;
        case 2:
            return B(u, a(h, e), 5);
        case 5:
            n = u.i;
            if (null === n) {
                u.g = 3;
                break
            }
            f = n;
            tj(f, h, e);
            null !== f.g && (h = f.g);
            q = g.length;
            g = g.concat(f.ba);
            g.length === q ? l++ : l = 0;
            l >= m && (f.j = null);
            b.I = b.I || 20 <= g.length || l >= m || null === f.g;
            if (b.I) {
                u.g = 4;
                break
            }
            e = Math.min(e + c, d);
            return B(u, Dd(350), 4);
        case 4:
            if (!b.I) {
                u.g = 2;
                break
            }
        case 3:
            return f.ba = g,
            u.return(f)
        }
    })
}
function Sk(a, b, c, d) {
    c = {
        count: void 0 === d ? 16 : d,
        offset: void 0 === c ? 0 : c
    };
    d = b.id;
    b instanceof xe && null !== d && (c.groupId = d);
    b instanceof Ae && null !== d && (c.xa = d);
    return Kk(a, c)
}
Ik.prototype.g = function(a, b) {
    var c = this, d, e, f, g, h, l;
    return D(function(m) {
        if (!$i(a))
            return m.return(a);
        d = a.error || a.response || a;
        e = d.error_code;
        f = 801 === e;
        g = 30 === e;
        if (f || g)
            return m.return({});
        h = aj(d);
        if (l = 15 === e && h.includes("no video"))
            throw new Ri({
                icon: "block",
                name: "video-unavailable-error",
                title: O.g.K.G("applicationError.videoUnavialableTitle"),
                actions: [{
                    label: O.g.K.G("buttons.back"),
                    value: Wi,
                    Sa: !0
                }],
                Na: !1
            });
        return m.return(Z.prototype.g.call(c, a, b))
    })
}
;
function Kk(a, b) {
    var c = Ok(b);
    c.og = b.og || -1;
    return Yi(a, {
        path: "method/video.get",
        U: Pk(c)
    }, fk).then(function(d) {
        return Qk(d, c)
    })
}
function Qk(a, b) {
    a && a instanceof sj && tj(a, b.offset || 0, b.count || 0);
    return a
}
function Ok(a) {
    a.wf = 1;
    a.Dg = Tk.concat(a.Dg || []);
    return a
}
var Tk = ["members_count", "photo", "photo_200", "photo_100", "photo_50"];
function Pk(a) {
    a = Object.entries({
        video_id: a.pd,
        owner_id: a.xa,
        album_id: a.og,
        group_id: a.groupId,
        count: a.count,
        offset: a.offset,
        videos: a.ba ? a.ba.join(",") : void 0,
        fields: a.Dg ? a.Dg.join(",") : void 0,
        extended: a.wf,
        need_current: a.ul,
        ref: a.md,
        track_code: a.ea
    }).filter(function(b) {
        b = p(b);
        b.next();
        return void 0 !== b.next().value
    });
    return Object.fromEntries(a)
}
;function Uk(a) {
    this.g = a
}
function Vk(a, b) {
    return Bh(a.g, Wk({
        path: b.path,
        method: b.method || "GET",
        U: b.U,
        body: b.body || void 0
    })).then(function(c) {
        if (c.failed && Object.values(Xk).includes(c.failed))
            throw Error("need-refresh-long-poll");
        return ek(c, Ej)
    })
}
function Wk(a) {
    return {
        path: a.path,
        body: a.body,
        method: a.method,
        headers: a.headers,
        U: a.U
    }
}
var Xk = {
    an: 1,
    Lm: 2,
    Nn: 3,
    fm: 4
};
function Yk(a) {
    ui.call(this, a);
    this.j = null
}
z(Yk, ui);
Yk.prototype.cg = function(a) {
    a = a.path;
    var b = jh[a]
      , c = b.optional;
    b = b.required || [];
    var d = [Zk].concat(r(b));
    c = [].concat(r(c || []), r(d));
    a.endsWith("get_anonym_token") && this.j && (d.push($k),
    b.push($k));
    return {
        wh: c,
        yh: b
    }
}
;
Yk.prototype.yd = function(a) {
    a = a.U ? Object.assign({}, a.U) : {};
    var b = a[Zk] || this.g;
    b && (a[Zk] = b);
    return a
}
;
var Zk = "lang"
  , $k = "anonymous_token";
function al(a, b) {
    Z.call(this, a);
    this.v = b
}
z(al, Z);
function bl(a, b, c) {
    return b ? Yi(a, {
        path: "get_auth_code",
        U: {
            client_id: "4171611",
            scope: "video,offline,wall,groups",
            device_name: c,
            need_qr_code: 1,
            need_revoke: 1
        },
        method: "GET"
    }, gk(!1)) : cl(a, {
        path: "method/auth.getAuthCode",
        U: {
            scope: "video,offline,wall,groups",
            device_name: c,
            auth_code_type: dl
        },
        method: "POST"
    }, gk(!0), pi)
}
al.prototype.i = function(a, b) {
    var c = "";
    try {
        c = JSON.parse(a.responseText)
    } catch (d) {}
    return "code_auth_token" === b.path ? 401 === a.status ? Promise.reject(c.error_description === el ? fl : gl) : Promise.reject(hl) : Z.prototype.i.call(this, a, b)
}
;
function cl(a, b, c, d) {
    var e = {
        path: b.path,
        method: b.method || "GET",
        U: b.U,
        body: b.body || void 0,
        qb: b.qb
    };
    return Bh(a.v, Zi(e)).then(function(f) {
        return a.g(f, b)
    }).then(function(f) {
        d && a.l();
        return c ? c(f) : f
    }).catch(function(f) {
        return a.o(f, e)
    })
}
var hl = "expired"
  , fl = "canceled-on-oauth"
  , gl = "waiting-approval"
  , il = {
    Bn: "success",
    CANCELED: "canceled",
    qj: hl,
    ERROR: "error",
    hm: fl,
    Sn: gl
}
  , el = "invalid device_id or client_id"
  , dl = 1;
function jl(a, b, c) {
    function d() {
        var h = ya.apply(0, arguments);
        f && clearTimeout(f);
        f = setTimeout(function() {
            f = null;
            a.apply(null, r(h))
        }, b);
        isFinite(e) && !g && (g = setTimeout(function() {
            g = null;
            a.apply(null, r(h))
        }, e))
    }
    var e = c.Df
      , f = null
      , g = null;
    d.cancel = function() {
        clearTimeout(f);
        f = null
    }
    ;
    return d
}
function kl(a, b) {
    function c() {
        d = setTimeout(function() {
            a();
            d && c()
        }, b)
    }
    var d;
    c();
    return {
        cancel: function() {
            clearTimeout(d);
            d = null
        }
    }
}
;function ll(a) {
    var b = a.storage
      , c = a.resources;
    a = a.od;
    N.call(this);
    this.F = b;
    this.o = c;
    this.O = a;
    this.u = this.l = this.i = null;
    this.g = {};
    this.D = null;
    this.N = !1
}
z(ll, N);
ll.prototype.kc = function(a, b) {
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? !1 : b;
    var c = this, d, e, f;
    return D(function(g) {
        switch (g.g) {
        case 1:
            return c.u && c.u(),
            a ? B(g, ml(c), 5) : B(g, nl(c), 4);
        case 4:
            d = g.i;
            g.g = 3;
            break;
        case 5:
            d = g.i;
        case 3:
            e = d;
            if ("error" !== e) {
                g.g = 6;
                break
            }
            ol(c);
            if (!b) {
                f = e;
                g.g = 7;
                break
            }
            return B(g, ml(c), 8);
        case 8:
            f = g.i;
        case 7:
            e = f;
        case 6:
            return g.return(e)
        }
    })
}
;
function pl(a) {
    var b = Cc(a.F, "__vk_session_device_accessToken")
      , c = null;
    if (b)
        try {
            c = JSON.parse(b)
        } catch (f) {}
    if (c) {
        if (a.kb = c.accessToken,
        a.tb = c.anonymousToken,
        b = Cc(a.F, "__vk_session_device_marusiaSession"))
            try {
                var d = JSON.parse(b);
                if (d && "object" === typeof d) {
                    var e = Hi({
                        session_id: d.session_id,
                        session_secret: d.session_secret,
                        account_id: d.account_id,
                        setup_id: d.setup_id,
                        parent_device_id: d.parent_device_id,
                        device_id: d.device_id
                    });
                    e && ql(a, e, !1)
                }
            } catch (f) {}
    } else
        ol(a);
    return a.J ? Promise.resolve("success") : ml(a)
}
function ol(a) {
    a.g = {};
    a.kb = null;
    a.tb = null;
    if (a.N) {
        var b = a.o.lh
          , c = {
            id: Li(b.j)
        };
        Yi(b, {
            path: "device/remove",
            U: c,
            method: "POST"
        });
        ql(a, null, !0)
    }
}
function rl(a) {
    return D(function(b) {
        ol(a);
        return B(b, a.kc(!0), 0)
    })
}
function sl(a) {
    a.v && cl(a.o.kc, {
        path: "method/marusia.getSAT",
        method: "POST"
    }, kk, ri).then(function(b) {
        (b = b.g) && a.v && tl(a.o.lh, a.v, b).then(function(c) {
            ql(a, c, !0);
            a.v = null
        })
    })
}
function ql(a, b, c) {
    a.N = !!b;
    a.B("marusia-session-started", b);
    c && (c = "",
    b && (c = {},
    c = JSON.stringify((c.session_id = b.Sh,
    c.session_secret = b.dj,
    c.account_id = b.g,
    c.setup_id = b.j,
    c.parent_device_id = b.i,
    c.device_id = b.deviceId,
    c))),
    Dc(a.F, "__vk_session_device_marusiaSession", c))
}
function ul(a, b) {
    var c = {};
    c = JSON.stringify((c.accessToken = a.l,
    c.anonymousToken = a.i,
    c));
    Dc(a.F, "__vk_session_device_accessToken", c);
    b && a.B("session-started", a.C)
}
function vl(a, b, c) {
    switch (a.status) {
    case 2:
        b();
        break;
    case 3:
        c(fl);
        break;
    case 4:
        c(hl)
    }
}
function nl(a) {
    var b, c, d, e, f, g, h, l, m, n, q;
    return D(function(u) {
        switch (u.g) {
        case 1:
            return b = !!a.D,
            c = !1,
            a.u = function() {
                c = !0
            }
            ,
            d = O.device.info,
            e = d.Ze() + " " + d.model(),
            B(u, bl(a.o.kc, !b, e), 2);
        case 2:
            f = u.i;
            if (!f)
                return u.return("error");
            if (c)
                return u.return("canceled");
            f.bf && (g = f.ce + "?stage=check&code=" + f.g + "&revoke=1",
            a.B("qr-code-received", {
                bf: f.bf,
                ce: g
            }));
            b && f.g && a.B("number-code-received", f.g);
            l = new Promise(function(w, x) {
                var J = kl(function() {
                    h && h.cancel();
                    c || f.i - 15E3 < Date.now() ? (J.cancel(),
                    b ? x("canceled") : x(hl)) : (h = Cd(b ? cl(a.o.kc, {
                        path: "method/auth.checkAuthCode",
                        U: {
                            auth_hash: f.j
                        },
                        method: "POST"
                    }, ik, qi) : Yi(a.o.kc, {
                        path: "code_auth_token",
                        U: {
                            client_id: "4171611",
                            device_id: f.deviceId
                        },
                        method: "GET"
                    }, hk)),
                    h.then(function(y) {
                        function A() {
                            J.cancel();
                            w(y)
                        }
                        b ? y && vl(y, A, x) : A()
                    }).catch(function(y) {
                        ["cancel-promise", gl].includes(y) || (J.cancel(),
                        x(y))
                    }))
                }, a.O)
            }
            );
            u.j = 3;
            return B(u, l, 5);
        case 5:
            m = u.i;
            if (!c && m)
                return a.kb = m.kb,
                b && sl(a),
                a.g = {},
                u.return("success");
            qa(u, 4);
            break;
        case 3:
            return n = ra(u),
            q = Object.values(il).includes(n),
            u.return(c ? "canceled" : q ? n : "error");
        case 4:
            return u.return("canceled")
        }
    })
}
function ml(a) {
    var b;
    return D(function(c) {
        switch (c.g) {
        case 1:
            c.j = 2;
            var d = a.o.kc;
            var e = a.i || void 0
              , f = {
                client_id: "4171611",
                client_secret: "4zY5SwZXWDcXXLat9s0c"
            };
            e && (f.anonymous_token = e);
            d = Yi(d, {
                path: "get_anonym_token",
                U: f,
                method: "GET"
            }, lk);
            return B(c, d, 4);
        case 4:
            if (b = c.i)
                a.tb = b.kb;
            qa(c, 3);
            break;
        case 2:
            return ra(c),
            c.return("error");
        case 3:
            return c.return("success")
        }
    })
}
function wl(a) {
    if (a.l || a.i)
        a.l = null,
        a.i = null,
        a.B("session-ended", a.C)
}
t.Object.defineProperties(ll.prototype, {
    kb: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.l
        },
        set: function(a) {
            this.l !== a && (wl(this),
            this.l = a,
            ul(this, !!a))
        }
    },
    tb: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.i
        },
        set: function(a) {
            this.i !== a && (wl(this),
            this.i = a,
            ul(this, !!a))
        }
    },
    v: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.D
        },
        set: function(a) {
            this.D !== a && (this.D = a)
        }
    },
    j: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !!this.tb
        }
    },
    J: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !!this.kb || !!this.tb
        }
    },
    C: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return {
                kb: this.l,
                tb: this.i
            }
        }
    },
    S: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        }
    }
});
function xl(a, b, c) {
    N.call(this);
    this.l = a;
    this.o = b;
    this.j = c;
    this.g = this.i = null
}
z(xl, N);
function yl(a) {
    a.i = null;
    a.g = null;
    a.B("reset")
}
function zl(a, b) {
    var c;
    D(function(d) {
        if (1 == d.g) {
            if (a.j.j || !b.D)
                return d.return();
            a.i = b;
            return B(d, Al(a), 2)
        }
        c = d.i;
        if (!c)
            return yl(a),
            d.return();
        a.B("subscribed");
        Bl(a);
        d.g = 0
    })
}
function Bl(a) {
    var b, c;
    D(function(d) {
        switch (d.g) {
        case 1:
            if (!a.g || !a.i)
                return yl(a),
                d.return();
            c = b = null;
            d.j = 2;
            return B(d, Al(a), 4);
        case 4:
            b = d.i;
            if (!b) {
                d.g = 5;
                break
            }
            return B(d, Vk(a.o, {
                path: b,
                qb: b
            }), 6);
        case 6:
            c = d.i;
        case 5:
            qa(d, 3);
            break;
        case 2:
            return ra(d),
            B(d, Al(a, !0), 7);
        case 7:
            b = d.i;
        case 3:
            if (!b)
                return yl(a),
                d.return();
            c instanceof Dj && (a.g && (a.g.query.ts = c.i),
            a.B("get-events", c.g));
            Bl(a);
            d.g = 0
        }
    })
}
function Al(a, b) {
    b = void 0 === b ? !1 : b;
    var c, d, e, f, g, h, l, m;
    return D(function(n) {
        switch (n.g) {
        case 1:
            if (!a.i)
                return n.return(null);
            if (a.g && !b) {
                n.g = 2;
                break
            }
            n.j = 3;
            var q = a.i;
            q = Yi(a.l, {
                U: {
                    xa: q.C,
                    pd: q.id
                },
                path: "method/video.getLongPollServer"
            }, zk);
            return B(n, q, 5);
        case 5:
            c = n.i;
            qa(n, 4);
            break;
        case 3:
            ra(n),
            c = null;
        case 4:
            if (!c)
                return n.return(null);
            a.g = {};
            d = p(c.split("?"));
            e = d.next().value;
            f = d.next().value;
            g = void 0 === f ? "" : f;
            a.g.Ec = e;
            a.g.query = fd(g);
        case 2:
            return h = a.g,
            l = h.Ec,
            m = h.query,
            n.return([l, ed(m)].join("?"))
        }
    })
}
;function Cl(a, b) {
    a: {
        a = p(a.split("-"));
        var c = a.next().value;
        a = a.next().value;
        b = p(b.split("-"));
        var d = b.next().value;
        b = b.next().value;
        c = c.split(".");
        d = d.split(".");
        for (var e = 0; e < Math.max(c.length, d.length); e++) {
            var f = parseInt(c[e], 10) || 0
              , g = parseInt(d[e], 10) || 0;
            if (f !== g) {
                a = f - g;
                break a
            }
        }
        a = (a || "").localeCompare(b || "", "en")
    }
    return 0 <= a
}
;function Dl(a, b, c, d, e) {
    Rc.call(this, c, d);
    this.l = a;
    this.u = b;
    Cl(e, "5.0.0") || Cl(e, "4.0.0");
    this.o = "PLAYER_DISPLAY_MODE_FULL_SCREEN"
}
z(Dl, Rc);
Dl.prototype.j = function() {
    var a = this.v
      , b = Sa(Za(a), 0)
      , c = Sa(Za(a), 1)
      , d = this.u.style;
    d.top = a.la + "px";
    d.left = a.na + "px";
    d.width = b + "px";
    d.height = c + "px";
    -1 !== ["IDLE", "PAUSED", "PLAYING", "READY"].indexOf(this.l.getState()) && ((b = this.o) && this.l.setDisplayMethod(b),
    a = mc(a, this.i, kc[3]),
    b = Za(a),
    this.l.setDisplayRect(a.na, a.la, b.x, b.y))
}
;
function El(a, b) {
    function c() {
        var e = ya.apply(0, arguments);
        d && clearTimeout(d);
        d = setTimeout(function() {
            d = null;
            a.apply(null, r(e))
        }, b)
    }
    var d = null;
    c.cancel = function() {
        clearTimeout(d);
        d = null
    }
    ;
    return c
}
function Fl(a) {
    var b = null;
    return function() {
        var c = ya.apply(0, arguments)
          , d = Date.now();
        if (!b || 3E3 <= d - b)
            b = d,
            a.apply(null, r(c))
    }
}
;function Gl(a, b, c) {
    var d = c.o
      , e = c.v
      , f = c.j
      , g = c.i
      , h = c.l
      , l = c.g;
    b /= 1E3;
    d = Math.min(Math.floor(b * a / (0 < d ? d : Math.floor(b / h))), h - 1);
    a = Math.min(Math.floor(d / e), l.length - 1);
    d = Math.floor(d % e);
    c = e / c.u;
    return {
        gl: a,
        hl: l[a],
        x: Math.floor(d % c) * f,
        y: Math.floor(d / c) * g,
        width: f,
        height: g
    }
}
;function Hl() {
    this.j = new Uc(null,500);
    this.g = this.l = this.i = null
}
Hl.prototype.play = function(a, b, c) {
    var d = this;
    Il(this);
    this.l = a;
    this.i = Jl(b);
    return this.i.then(function(e) {
        d.i = null;
        if (d.l !== a)
            return !1;
        var f = b.j
          , g = b.i
          , h = a.getBoundingClientRect().width;
        f = g / f * h;
        d.g = ib("canvas", "thumb-preview");
        d.g.style.width = h + "px";
        d.g.style.height = f + "px";
        a.appendChild(d.g);
        var l = 1 / b.l
          , m = 0;
        Wc(d.j, function() {
            if (d.l === a) {
                var n = Gl(m, c, b)
                  , q = e[n.gl];
                d.g.getContext("2d").drawImage(q, n.x, n.y, n.width, n.height, 0, 0, d.g.width, d.g.height);
                m += l;
                1 < m && (m = 0);
                Vc(d.j)
            }
        });
        Vc(d.j);
        return !0
    }).catch(function() {
        return !1
    })
}
;
function Il(a) {
    a.j.stop();
    a.i && (a.i.cancel(),
    a.i = null);
    a.g && (a.g.remove(),
    a.g = null)
}
function Jl(a) {
    return Cd(Promise.all(a.g.map(function(b) {
        return Kf(b)
    })))
}
;function Kl() {
    var a = ib("video", "video-player");
    a.loop = !0;
    a.muted = !0;
    return a
}
function Ll() {
    this.g = this.i = null;
    this.j = 2
}
Ll.prototype.play = function(a, b, c) {
    var d = this;
    this.i = b;
    return new Promise(function(e, f) {
        var g = Kl();
        g.style.width = c.width + "px";
        g.style.height = c.height + "px";
        d.g = g;
        d.g.src = a;
        var h = d.g.play();
        h instanceof Promise ? h.then(function() {
            return Ml(d, g, b)
        }).then(function(l) {
            return e(l)
        }).catch(function() {
            if (0 < d.j--)
                return Nl(d),
                d.play(a, b, c);
            e(!1)
        }) : (Nl(d),
        f())
    }
    )
}
;
function Nl(a) {
    a.g && a.g.remove();
    a.g = null;
    a.i = null
}
function Ml(a, b, c) {
    return new Promise(function(d) {
        b.addEventListener("timeupdate", function() {
            a.i && a.i === c ? (a.i.insertBefore(a.g, a.i.firstChild),
            d(!0)) : d(!1)
        }, {
            once: !0
        });
        setTimeout(function() {
            return d(!1)
        }, 5E3)
    }
    )
}
;function Ol(a) {
    this.g = null;
    this.F = new Ll;
    this.u = new Hl;
    this.l = a;
    this.j = !1;
    this.i = this.v = null;
    this.D = El(this.o.bind(this), 2E3)
}
Ol.prototype.play = function(a, b) {
    this.l !== Pl && (this.v = a,
    this.j = !(void 0 === b || !b),
    this.D())
}
;
function Ql(a) {
    a.i && (a.i = a.i.cancel());
    a.g && (Ad(a.g.parentNode, "preview"),
    a.g = null);
    Nl(a.F);
    Il(a.u)
}
function Rl(a, b) {
    return b.trailer ? a.F.play(b.trailer, b.xh, b.Tk).then(function(c) {
        return !!c
    }).catch(function() {
        a.l = Sl;
        a.o()
    }) : (a.j = !0,
    a.o(),
    Promise.resolve(!1))
}
Ol.prototype.o = function() {
    var a = this;
    Ql(this);
    var b = this.v;
    this.g = b.xh;
    var c = this.j || this.l === Sl;
    this.j = !1;
    this.i = Cd(c ? b.duration && b.Jb && b.Jb.g && b.Jb.g.length ? this.u.play(b.xh, b.Jb, b.duration) : Promise.resolve(!1) : Rl(this, b));
    this.i.then(function(d) {
        d && Bd(a.g.parentNode, "preview")
    }).catch(pg)
}
;
var Pl = "none"
  , Sl = "thumbs"
  , Tl = {
    NONE: Pl,
    Cn: Sl,
    VIDEO: "video"
};
function Ul() {
    Z.apply(this, arguments)
}
z(Ul, Z);
function Vl(a, b, c) {
    return Yi(a, {
        path: c ? "method/account.getTogglesAnonym" : "method/account.getTogglesExternal",
        U: {
            toggles: b
        }
    }, Ak)
}
;function Wl(a) {
    return (10 > a ? "0" : "") + a
}
;function Xl(a) {
    N.call(this);
    this.v = this.u = this.j = this.l = !1;
    this.od = 3E3;
    this.Ke = this.D = this.F = this.o = this.g = this.i = !1;
    this.O = "software";
    this.Z = a;
    Yl(this)
}
z(Xl, N);
function Yl(a) {
    a.l = !1;
    a.od = 3E3;
    a.i = !1;
    a.g = !1;
    a.o = !1;
    a.D = !1;
    a.Ke = !1;
    a.C = !0;
    a.J = !0;
    a.$d = "5.162";
    a.lang = a.lang || "en";
    a.preview = Pl;
    a.S = Zl;
    a.j = !1;
    a.u = !1;
    a.v = !1;
    a.F = !1;
    a.O = "software"
}
Xl.prototype.load = function() {
    var a = this, b;
    return D(function(c) {
        switch (c.g) {
        case 1:
            if (!a.N)
                return c.return();
            Yl(a);
            c.j = 3;
            return B(c, Vl(a.Z, Ij(), a.N.j), 5);
        case 5:
            b = c.i;
            qa(c, 4);
            break;
        case 3:
            ra(c),
            b = [];
        case 4:
            (b || []).forEach(function(d) {
                var e = String(d.value);
                var f = Number(d.value);
                f = Number.isNaN(f) ? null : f;
                switch (d.vg) {
                case "t_interval":
                    a.od = f || a.od;
                    break;
                case "analytics_vk":
                    a.i = d.enabled;
                    break;
                case "analytics_one":
                    a.g = d.enabled;
                    break;
                case "product_statistics":
                    a.D = d.enabled;
                    break;
                case "mediascope_pixels":
                    a.o = d.enabled;
                    break;
                case "use_qr_code":
                    a.C = d.enabled;
                    break;
                case "remote_service":
                    a.J = d.enabled;
                    break;
                case "api_version":
                    a.$d = e;
                    break;
                case "lang":
                    d = Hd(e);
                    a.lang = d && d.lang || "en";
                    break;
                case "preview":
                    Object.values(Tl).includes(e) && (a.preview = Sl === e ? Sl : "video" === e ? "video" : Pl);
                    break;
                case "display_mode":
                    a.S = e;
                    break;
                case "player_ads":
                    a.j = d.enabled;
                    break;
                case "player_ads_skip_m":
                    a.u = d.enabled;
                    break;
                case "player_ads_past_r":
                    a.v = d.enabled;
                    break;
                case "player_ads_stat":
                    a.F = d.enabled;
                    break;
                case "user_subscr_enabled":
                    a.Ke = d.enabled;
                    break;
                case "player_tech_info":
                    a.l = d.enabled
                }
            });
        case 2:
            a.B("config-loaded", a),
            c.g = 0
        }
    })
}
;
var Zl = "letter-box";
function $l(a) {
    return Math.floor(a / 1E3)
}
function am(a, b) {
    var c = a / 1E3
      , d = Math.floor(c / 60);
    if (1 > d)
        return {
            Hd: "0",
            Ee: Wl(Math.floor(c))
        };
    a = Math.floor(d / 60);
    c = Math.floor(c % 60);
    d %= 60;
    if (1 > a)
        return {
            Hd: d.toString(10),
            Ee: Wl(c)
        };
    var e = Math.floor(a / 24);
    return !b || 1 > e ? {
        oe: a.toString(10),
        Hd: Wl(d),
        Ee: Wl(c)
    } : {
        ti: e.toString(10),
        oe: Wl(Math.floor(a % 24)),
        Hd: Wl(d),
        Ee: Wl(c)
    }
}
function bm(a, b) {
    var c = Math.floor(a / 31104E6);
    return c ? 1 < c ? b.G("time.yearsPlural", {
        years: Number(c)
    }) : b.G("time.year") : (c = Math.floor(a / 2592E6)) ? 1 < c ? b.G("time.monthsPlural", {
        months: Number(c)
    }) : b.G("time.month") : (c = Math.floor(a / 864E5)) ? 1 < c ? b.G("time.daysPlural", {
        days: Number(c)
    }) : b.G("time.day") : (c = Math.floor(a / 36E5)) ? 1 < c ? b.G("time.hoursPlural", {
        hours: Number(c)
    }) : b.G("time.hour") : (c = Math.floor(a / 6E4)) ? 1 < c ? b.G("time.minutesPlural", {
        minutes: Number(c)
    }) : b.G("time.minute") : (a = $l(a)) ? 1 < a ? b.G("time.secondsPlural", {
        seconds: Number(a)
    }) : b.G("time.second") : null
}
;function cm() {
    return {
        pg: !0,
        ug: !0,
        Mf: 0,
        Db: 0
    }
}
function dm(a, b, c) {
    return {
        items: a ? [em(a, c)] : [],
        album: b,
        fa: cm()
    }
}
function fm(a, b, c) {
    return {
        items: a.map(function(d) {
            return em(d)
        }),
        album: b,
        Nh: c,
        fa: cm()
    }
}
function em(a, b) {
    b = void 0 === b ? 0 : b;
    var c = gm(a.g)[0]
      , d = hm(a.g, c)
      , e = a.g
      , f = O.device.Pg()
      , g = e.O
      , h = e.N
      , l = e.F
      , m = e.D
      , n = e.J
      , q = e.l
      , u = e.o
      , w = e.v
      , x = e.u
      , J = e.g
      , y = e.i
      , A = e.j
      , C = {};
    e = (C[e.C] = "Auto",
    C[g] = "Auto",
    C[h] = "Auto",
    C[l] = "Auto",
    C[m] = "Auto",
    C[n] = "Auto",
    C);
    f && (e[A] = "2160p",
    e[y] = "1440p");
    e[J] = "1080p";
    e[x] = "720p";
    e[w] = "480p";
    e[u] = "360p";
    e[q] = "240p";
    delete e[null];
    return {
        model: a,
        data: {
            Wi: e,
            url: c,
            mediaType: d,
            $a: a.ma ? a.ma.v : null
        },
        ga: {
            loop: !1,
            continue: !1,
            Gd: 0,
            startPosition: b,
            Kf: 1
        }
    }
}
function hm(a, b) {
    var c = a.J
      , d = a.D
      , e = a.F
      , f = a.N
      , g = a.O
      , h = a.l
      , l = a.o
      , m = a.v
      , n = a.u
      , q = a.g
      , u = a.i
      , w = a.j
      , x = {};
    return (x[a.C] = "application/vnd.apple.mpegurl",
    x[g] = "application/vnd.apple.mpegurl",
    x[f] = "application/dash+xml",
    x[e] = "application/dash+xml",
    x[d] = "application/dash+xml",
    x[c] = "application/dash+xml",
    x[w] = "video/mp4",
    x[u] = "video/mp4",
    x[q] = "video/mp4",
    x[n] = "video/mp4",
    x[m] = "video/mp4",
    x[l] = "video/mp4",
    x[h] = "video/mp4",
    x)[b]
}
function gm(a) {
    var b = O.device.Pg()
      , c = a.D
      , d = a.F
      , e = a.C
      , f = a.l
      , g = a.o
      , h = a.v
      , l = a.u
      , m = a.g
      , n = a.i;
    a = a.j;
    var q = window.MediaSource;
    q = !!(q && q.isTypeSupported && q.isTypeSupported('video/webm; codecs="vp9"'));
    return [e, d, q ? c : null, b ? a : null, b ? n : null, m, l, h, g, f].filter(Boolean)
}
function im(a, b) {
    var c = p(a.split("?"));
    a = c.next().value;
    c = c.next().value;
    c = fd(void 0 === c ? "" : c);
    c.lq = (360).toString();
    c.pq = (480).toString();
    c.mq = b.toString();
    return [a, ed(c)].join("?")
}
function jm(a, b) {
    return 1E3 <= a ? Je(a || 0) + "  " + b.G("playerScene.views") : b.G("playerScene.viewsPlural", {
        views: a
    })
}
function km(a) {
    var b = O.g.K
      , c = (new Date).getTime();
    return (a = bm(c - a, b)) ? a + " " + b.G("time.ago") : b.G("time.justNow")
}
;function lm() {
    this.D = mm(this);
    this.o = null;
    this.g = Hk();
    this.i = [];
    this.v = !1;
    this.u = this.l = null;
    this.F = !0;
    O.on("resolution-changed", this.J.bind(this))
}
lm.prototype.init = function(a) {
    this.o = a;
    null === this.g.I && nm(this)
}
;
lm.prototype.ha = function() {
    om(this);
    this.i = [];
    pm(this);
    this.o = null
}
;
function qm(a, b, c) {
    c = void 0 === c ? rm : c;
    return b.url && b.mediaType ? sm(a, b, c).catch(function(d) {
        return Promise.reject({
            type: tm,
            error: d
        })
    }) : Promise.reject({
        type: um
    })
}
function sm(a, b, c) {
    c = void 0 === c ? rm : c;
    vm(a);
    a.l = c;
    a.u = b;
    return "application/vnd.apple.mpegurl" !== b.mediaType && "application/dash+xml" !== b.mediaType ? wm(a, b) : xm(a, b)
}
function ym(a, b) {
    var c = a.v;
    a.v = !0;
    return b().finally(function() {
        a.v = c
    })
}
function zm(a, b, c, d) {
    var e = c;
    b === a.g.I.Ia && (e = function() {
        a.v || c.apply(null, r(ya.apply(0, arguments)))
    }
    );
    var f = Ek(a.g.I, b, e, d);
    a.i.push(f);
    return function() {
        var g = a.i.findIndex(function(h) {
            return h.event === f.event && h.fe === f.fe && h.receiver === f.receiver
        });
        -1 !== g && (a.i[g].ob(),
        a.i.splice(g, 1))
    }
}
function Am(a, b, c, d) {
    function e() {
        for (var l = p(f), m = l.next(); !m.done; m = l.next())
            m = m.value,
            a.i.push(Ek(a.g.I, m.event, m.fe, m.receiver))
    }
    var f = a.i.filter(function(l) {
        return l.event === b
    })
      , g = a.i.filter(function(l) {
        return l.event !== b
    });
    f.forEach(function(l) {
        return l.ob()
    });
    a.i = g;
    var h = zm(a, b, function() {
        h();
        e();
        c()
    }, d);
    return function() {
        h();
        e()
    }
}
function vm(a) {
    om(a);
    pm(a);
    nm(a);
    for (var b = [], c = p(a.i), d = c.next(); !d.done; d = c.next())
        d = d.value,
        b.push(Ek(a.g.I, d.event, d.fe, d.receiver));
    a.i = b
}
function Bm(a, b) {
    a.i = a.i.filter(function(c) {
        var d = c.receiver === b;
        d && c.ob();
        return !d
    })
}
function om(a) {
    a = p(a.i);
    for (var b = a.next(); !b.done; b = a.next())
        b.value.ob()
}
function pm(a) {
    null !== a.g.I && (a.g.I.removeAllListeners(),
    a.g.I.destroy());
    a.g.I = null;
    a.l = null;
    a.u = null
}
function nm(a) {
    a.F = !0;
    a.g.I = O.device.Uk();
    O.device instanceof Lj && (a.g.I.zd.o = Cm[O.g.i.S]);
    Dm(a)
}
function Dm(a) {
    a.g.I.once(a.g.I.Rd, function() {
        sb(a.g.I, function() {
            a.F = !1
        })
    });
    a.g.I.on(a.g.I.Bc, function(b, c, d) {
        gd(function(e) {
            e.addBreadcrumb({
                level: "debug",
                message: "Video::EVENT_STATE_EXIT",
                category: "video",
                data: {
                    transition: [c, d]
                }
            })
        })
    });
    a.g.I.on(a.g.I.Lb, function(b, c, d) {
        gd(function(e) {
            e.addBreadcrumb({
                level: "debug",
                message: "Video::EVENT_STATE_ENTER",
                category: "video",
                data: {
                    transition: [d, c]
                }
            })
        })
    })
}
function xm(a, b) {
    var c = b.url
      , d = b.mediaType
      , e = b.startPosition
      , f = b.height;
    if (!c)
        return Promise.reject(Error("[ERROR] Url is not provided"));
    b = O.device.Pg();
    f = f && 1080 < f;
    var g = im(c, 2160)
      , h = im(c, 1080);
    return b && f ? ym(a, function() {
        return wm(a, {
            url: g,
            mediaType: d,
            startPosition: e
        })
    }).catch(function() {
        vm(a);
        return wm(a, {
            url: h,
            mediaType: d,
            startPosition: e
        })
    }) : wm(a, {
        url: h,
        mediaType: d,
        startPosition: e
    })
}
function wm(a, b) {
    var c = b.url
      , d = b.mediaType
      , e = b.startPosition;
    gd(function(g) {
        g.addBreadcrumb({
            level: "debug",
            message: "Core::_prepare",
            category: "video",
            data: b
        })
    });
    var f = {};
    d = (f["media-type"] = d,
    f);
    e && (d["start-position"] = e);
    a.g.I.prepare(c, d);
    return new Promise(function(g, h) {
        function l(q, u) {
            n.off(a.g.I.Kb, m);
            h(u)
        }
        function m() {
            n.off(a.g.I.Ia, l);
            g()
        }
        var n = a.g.I;
        n.once(n.Ia, l);
        n.once(n.Kb, m)
    }
    )
}
lm.prototype.J = function(a, b, c) {
    (a = this.g.I) && a.Jh(b, c)
}
;
function mm(a) {
    return {
        Gg: function(b) {
            return function() {
                var c = ya.apply(0, arguments);
                a.l === rm && b.apply(null, r(c))
            }
        },
        cl: function(b) {
            return function() {
                var c = ya.apply(0, arguments);
                a.l === Em && b.apply(null, r(c))
            }
        }
    }
}
t.Object.defineProperties(lm.prototype, {
    j: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            if (null === this.o)
                throw Error("[FATAL ERROR]: config is not initialized");
            return this.o
        }
    },
    C: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.l
        }
    },
    N: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.u
        }
    },
    O: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = this.g.I
              , b = "unknown";
            a && (b = a.getState(),
            a = a.V.i,
            b = !b && a ? a.from + " -> " + a.yc : b);
            return b
        }
    }
});
var Fm = {}
  , Cm = (Fm[Zl] = "PLAYER_DISPLAY_MODE_LETTER_BOX",
Fm["auto-aspect-ratio"] = "PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO",
Fm["full-screen"] = "PLAYER_DISPLAY_MODE_FULL_SCREEN",
Fm)
  , um = "not-enough-data"
  , tm = "video-internal-error"
  , rm = "content"
  , Em = "advertisement";
function Gm(a) {
    N.call(this);
    this.g = {};
    this.i = null;
    this.j = a
}
z(Gm, N);
function Hm(a, b) {
    var c = Object.keys(a.g);
    b = b.map(function(f) {
        return f.ta
    });
    b = p(b);
    for (var d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        var e = a.g[d];
        a.g[d] = Number.isInteger(e) ? Ke(e + 1, 0, 500) : 1
    }
    Im(a, c.length)
}
function Jm(a, b) {
    var c = Object.keys(a.g);
    b = b.map(function(f) {
        return f.ta
    });
    b = p(b);
    for (var d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        var e = a.g[d];
        Number.isInteger(e) && 0 < e && (a.g[d] = Ke(e - 1, 0, 500),
        0 === a.g[d] && delete a.g[d])
    }
    Im(a, c.length)
}
function Km(a) {
    null !== a.i && Lm(a);
    a.i = setInterval(function() {
        return Mm(a)
    }, 5E3)
}
function Lm(a) {
    clearInterval(a.i);
    a.i = null
}
function Mm(a) {
    var b = Object.keys(a.g);
    b.length && Yi(a.j, {
        path: "method/video.getLiveStatus",
        U: {
            video_ids: b.join(",")
        }
    }, Bk).then(function(c) {
        var d = {};
        c = p(c);
        for (var e = c.next(); !e.done; e = c.next()) {
            e = e.value;
            var f = e.xa + "_" + e.id;
            d[f] = Object.assign({}, d[f], {
                Oa: e.Oa
            })
        }
        Object.keys(d).length && a.B("video-monitor-update", d)
    })
}
function Im(a, b) {
    var c = Object.keys(a.g).length;
    0 === b && 0 < c ? Km(a) : 0 < b && 0 === c && Lm(a)
}
;function Nm(a) {
    N.call(this);
    this.i = Hk();
    this.offset = 0;
    this.j = NaN;
    this.l = a;
    this.o = new Ck
}
z(Nm, N);
Nm.prototype.init = function() {
    var a = this;
    Dk(this.o, this.g.g(this.u.bind(this)));
    this.g.I.model.type === Ue && (this.i.I = "started" === this.g.I.model.Oa,
    Hm(this.l, [this.g.I.model]),
    this.o.add(this.l, "video-monitor-update", function(b, c) {
        b = a.g.I.model;
        c = c[b.ta];
        c.Oa && (b = b.Oa,
        b !== c.Oa && a.B("live-status-update", b, c.Oa))
    }))
}
;
Nm.prototype.ha = function() {
    this.o.clear();
    this.i.I = !1;
    this.offset = 0;
    this.j = NaN;
    Jm(this.l, [this.g.I.model])
}
;
function Om(a, b) {
    var c = a.g.I.model
      , d = c.g.Z
      , e = 1E3 * a.duration;
    if (!d)
        return Promise.reject();
    b = Math.min(e, b);
    d = d.replace("offset_p", b.toString());
    a.offset = b;
    a.i.I = !1;
    return sm(a.v, {
        url: d,
        mediaType: "application/vnd.apple.mpegurl",
        height: c.height || void 0
    })
}
function Pm(a) {
    a.offset = 0;
    a.i.I = !0;
    a.j = NaN;
    var b = a.g.I;
    return sm(a.v, {
        url: b.data.url,
        mediaType: b.data.mediaType,
        height: b.model.height || void 0
    })
}
Nm.prototype.reload = function(a) {
    return this.i.I || 0 === a ? Pm(this) : Om(this, a)
}
;
Nm.prototype.u = function(a, b) {
    b && Jm(this.l, [b.model]);
    this.ha();
    this.init(this.v.j)
}
;
t.Object.defineProperties(Nm.prototype, {
    D: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !!this.j
        }
    },
    C: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.j
        }
    },
    F: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !!this.g.I.model.o
        }
    },
    duration: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.I.model.Z
        }
    }
});
function Qm() {
    N.call(this);
    this.j = {
        autoplay: !0,
        ended: !1
    };
    this.i = Rm;
    this.o = NaN;
    this.D = !1;
    this.v = null;
    this.dc = "playback-ended"
}
z(Qm, N);
Qm.prototype.init = function() {
    var a = this;
    this.l.j.items.forEach(function(b) {
        b.ga = Object.assign({}, Sm, b.ga)
    });
    this.C = this.u.g(function() {
        a.o = NaN;
        a.i = Rm
    });
    Tm(this)
}
;
Qm.prototype.ha = function() {
    Bm(this.l, this);
    this.C && this.C.ob();
    Um(this);
    this.D = !1;
    this.v = null;
    this.o = NaN;
    this.i = Rm
}
;
function Um(a) {
    a.j.autoplay = !0;
    a.j.ended = !1
}
function Vm(a) {
    void 0 !== a.u && (a.u.I.ga.Gd = a.o)
}
Qm.prototype.play = function(a) {
    a = void 0 === a ? Wm : a;
    if (a === Xm || a === Ym)
        this.B("play-request"),
        this.i = Rm;
    var b = this.g.I.getState();
    if ("ready" === b || "paused" === b) {
        var c = this.F;
        if (c.i.I && c.D) {
            c = this.F;
            var d = Date.now() - c.C;
            c.j = NaN;
            c.F && 6E4 < d ? Om(c, d) : Pm(c)
        } else
            this.g.I.play();
        this.B("play", a)
    }
    "ended" === b && (Zm(this),
    this.B("play", a))
}
;
function $m(a, b) {
    var c = a.g.I.getState();
    if ("seeking" === c)
        a.v = {
            position: b
        };
    else {
        var d = a.g.I.V.i;
        if (null === c && d)
            a.g.I.once(a.g.I.Lb, function() {
                $m(a, b)
            });
        else {
            a.g.I.once(a.g.I.nj, function() {
                var e = a.D;
                a.D = !1;
                if (null !== a.v) {
                    var f = a.v.position;
                    setTimeout(function() {
                        return $m(a, f)
                    }, 0);
                    a.v = null
                } else
                    a.i !== Rm || e || setTimeout(function() {
                        return a.play()
                    }, 0)
            });
            try {
                a.g.I.setPosition(b)
            } catch (e) {
                e instanceof Qc && an(a.J, b)
            }
        }
    }
}
function bn(a, b) {
    b = void 0 === b ? Wm : b;
    a.i === cn && a.pause(b);
    a.i === Rm && a.play(b)
}
function dn(a) {
    var b = void 0 === b ? Wm : b;
    a.pause(b);
    a.j.autoplay = !1
}
function en(a, b) {
    b = void 0 === b ? Wm : b;
    Um(a);
    bn(a, b)
}
Qm.prototype.pause = function(a) {
    var b = this;
    a = void 0 === a ? Wm : a;
    if (a === Xm || a === Ym)
        this.B("pause-request"),
        this.i = cn;
    var c = this.g.I.getState();
    if ("playing" === c)
        this.F.i.I && (this.F.j = Date.now()),
        this.g.I.pause(),
        this.B("pause", a);
    else {
        var d = this.g.I.V.i;
        if (null === c && d)
            this.g.I.once(this.g.I.Lb, function() {
                b.pause(a)
            })
    }
}
;
function fn(a, b) {
    b = void 0 === b ? Wm : b;
    var c = a.g.I.getState();
    "ended" === c || "ready" === c || a.i === cn ? a.play(b) : a.pause(b)
}
function Zm(a) {
    a.B("playback-replay");
    a.g.I.setPosition(0)
}
function Tm(a) {
    zm(a.l, a.g.I.Kb, function() {
        var b = a.j
          , c = b.autoplay;
        b = b.ended;
        Um(a);
        c && a.i === Rm ? a.play() : (a.pause(),
        b && a.B("playback-ready-ended"))
    }, a);
    zm(a.l, a.g.I.dc, function() {
        a.u.I.ga.loop ? Zm(a) : a.B(a.dc)
    }, a);
    zm(a.l, a.g.I.Ub, function(b, c) {
        a.o = c
    }, a)
}
var Sm = {
    loop: !1,
    startPosition: 0,
    Gd: 0,
    Kf: .95
}
  , Ym = "input"
  , Xm = "ui"
  , Wm = "program"
  , Rm = "play"
  , cn = "pause";
function gn(a) {
    this.g = a
}
function hn(a, b) {
    b.params.puid11 = 0;
    return Bh(a.g, {
        qb: "https://ad.mail.ru/vp/" + b.slot_id,
        U: b.params,
        method: "GET"
    }).then(function(c) {
        return jn(c)
    }).catch(function() {
        return kn()
    })
}
function ln(a) {
    return {
        lf: !!a.allowClose,
        mf: 1E3 * a.allowCloseDelay
    }
}
function mn(a, b) {
    return a.filter(function(c) {
        return "video" === c.type
    }).map(function(c) {
        return Object.assign({}, b, {
            url: c.src,
            duration: 1E3 * c.duration,
            lf: !!c.allowClose,
            mf: 1E3 * c.allowCloseDelay,
            Jd: !1,
            Ge: !1,
            Mc: 1E3 * c.point,
            group: null,
            Hl: c.statistics ? c.statistics.map(nn).filter(Boolean) : null
        })
    })
}
function nn(a) {
    var b = parseInt(a.pvalue || a.value, 10);
    a = {
        type: a.type,
        url: a.url,
        value: isNaN(b) ? void 0 : b
    };
    return on.includes(a.type) ? a : null
}
function jn(a) {
    var b = {};
    return b[pn] = mn(a.sections.preroll || [], ln(a.settings.preroll || {})),
    b[qn] = mn(a.sections.postroll || [], ln(a.settings.postroll || {})),
    b[rn] = mn(a.sections.midroll || [], ln(a.settings.midroll || {})).sort(function(c, d) {
        return c.Mc - d.Mc
    }),
    b
}
function kn() {
    var a = {};
    return a[pn] = [],
    a[qn] = [],
    a[rn] = [],
    a
}
var qn = "postroll"
  , pn = "preroll"
  , rn = "midroll"
  , on = "playheadReachedValue playbackPaused playbackResumed closedByUser playbackStarted playbackCompleted".split(" ");
function sn(a, b) {
    this.g = {};
    this.j = b;
    if (a) {
        b = {};
        for (var c = p(on), d = c.next(); !d.done; b = {
            Se: b.Se
        },
        d = c.next())
            b.Se = d.value,
            this.g[b.Se] = a.filter(function(e) {
                return function(f) {
                    return f.type === e.Se
                }
            }(b))
    }
}
function tn(a, b) {
    if (a.g[b] && a.g[b].length)
        switch (b) {
        case "playheadReachedValue":
            un(a, a.g[b]);
            break;
        case "playbackStarted":
            vn(a, a.g[b]);
            break;
        case "playbackPaused":
            vn(a, a.g[b]);
            break;
        case "playbackResumed":
            vn(a, a.g[b]);
            break;
        case "closedByUser":
            vn(a, a.g[b]);
            break;
        case "playbackCompleted":
            vn(a, a.g[b])
        }
}
function un(a, b) {
    var c = a.j();
    b.filter(function(d) {
        return !d.Cl && c >= d.value
    }).forEach(function(d) {
        d.Cl = !0;
        a.i(d)
    })
}
function vn(a, b) {
    b.forEach(a.i.bind(a))
}
sn.prototype.i = function(a) {
    (new Image).src = a.url
}
;
function wn(a) {
    this.i = a;
    this.g = null
}
wn.prototype.getContext = function() {
    return this.g
}
;
wn.prototype.isEnabled = function() {
    return this.i.F
}
;
function xn(a, b, c) {
    a.g = new sn(b,c)
}
;function yn(a, b, c, d) {
    var e = a.I;
    e && e.ob();
    b = Ek(b, c, d, void 0);
    return a.I = b
}
;function zn(a, b) {
    N.call(this);
    this.l = b;
    this.u = a;
    this.F = Hk();
    this.o = new Ck;
    this.j = kn();
    this.g = null
}
z(zn, N);
k = zn.prototype;
k.init = function() {
    An(this)
}
;
k.ha = function() {
    this.o.clear();
    Bm(this.i, this);
    this.g = null;
    this.j = kn()
}
;
k.Nc = function() {
    this.B("advertisement-ads-skip")
}
;
function Bn(a, b) {
    a.j = kn();
    if (!b)
        return Promise.resolve();
    a.B("advertisement-load-started");
    return hn(a.u, b).then(function(c) {
        a.j = c;
        c = a.j[pn];
        var d = a.j[rn]
          , e = a.j[qn];
        if (c.length) {
            var f = c.slice(0);
            c.forEach(function(h) {
                h.group = f
            })
        }
        d.length && Cn(d);
        if (e.length) {
            var g = e.slice(0);
            e.forEach(function(h) {
                h.group = g
            })
        }
    }).finally(function() {
        a.B("advertisement-load-ended")
    })
}
k.lf = function() {
    return this.g ? this.g.lf : !1
}
;
k.mf = function() {
    return this.g ? this.g.mf : 0
}
;
k.getDuration = function() {
    return this.g ? this.g.duration : NaN
}
;
function Dn(a, b, c) {
    var d = a.i.N;
    a.v.g.I.ga.startPosition = b;
    En(a, function() {
        return qm(a.i, Object.assign({}, d, {
            startPosition: b
        }))
    }, c)
}
function En(a, b, c) {
    function d(q) {
        n = Am(a.i, a.i.g.I.dc, function() {
            a.g.Jd = !0;
            a.l.isEnabled() && tn(a.l.getContext(), "playbackCompleted");
            e()
        }, a);
        return qm(a.i, {
            url: q,
            mediaType: "video/mp4"
        }, Em).catch(function() {
            n();
            return e()
        })
    }
    function e() {
        return 0 < h.length ? f() : g()
    }
    function f() {
        var q = a.g;
        a.g = h.shift();
        q = q ? "advertisement-ads-change" : "advertisement-ads-start";
        a.l.isEnabled() && xn(a.l, a.g.Hl, function() {
            return Ke(a.i.g.I.Ed() / a.g.duration * 100, 0, 100)
        });
        a.B(q, l - h.length, l);
        return d(a.g.url)
    }
    function g() {
        var q = b();
        a.g && (a.B("advertisement-ads-end"),
        a.g = null);
        return q
    }
    var h = c.slice(0).filter(function(q) {
        return !q.Jd
    }), l = h.length, m = !!O.g.i.u, n;
    Dk(a.o, yn(a.F, a, "advertisement-ads-skip", function() {
        a.g.Jd = !0;
        a.g.Ge = !0;
        a.l.isEnabled() && tn(a.l.getContext(), "closedByUser");
        n();
        m ? (h.forEach(function(q) {
            q.Ge = !0
        }),
        g()) : e()
    }));
    return e()
}
function Fn(a, b) {
    return (a = a.j[rn].find(function(c) {
        return !c.Jd && !c.Ge && 500 >= Math.abs(b - c.Mc)
    })) ? a.group || [a] : []
}
function Gn(a, b) {
    var c = Fn(a, b);
    if (!c.length)
        return a.j[rn].filter(function(e) {
            return !e.Jd && !e.Ge && e.Mc < b
        });
    var d = c[0];
    return a.j[rn].filter(function(e) {
        return !e.Jd && !e.Ge && e.Mc < d.Mc
    }).concat(c)
}
function An(a) {
    var b = a.i.g.I
      , c = b.Rd
      , d = b.Ub;
    b = b.Ue;
    var e = a.i.D
      , f = e.Gg;
    e = e.cl;
    zm(a.i, d, f(function(g, h) {
        var l = O.g.i.v ? Gn(a, h) : Fn(a, h);
        l.length && sb(a.i.g.I, function() {
            Dn(a, h, l)
        })
    }), a);
    a.l.isEnabled() && (zm(a.i, d, e(function() {
        tn(a.l.getContext(), "playheadReachedValue")
    }), a),
    zm(a.i, b, e(function() {
        tn(a.l.getContext(), "playbackPaused")
    }), a),
    zm(a.i, c, e(function() {
        var g = a.i.F;
        tn(a.l.getContext(), g ? "playbackStarted" : "playbackResumed")
    }), a))
}
function Cn(a) {
    for (var b = 0; b < a.length; ++b) {
        var c = a[b]
          , d = a[b + 1];
        c.group = c.group || [c];
        d && 1E3 >= Math.abs(c.Mc - d.Mc) && (c.group = c.group.concat([d]),
        d.group = c.group)
    }
}
;function Hn(a) {
    return I('<div>\n\t<div class="c-time__label-and-digits-wrapper">\n\t\t<div class="c-time__digits" data-export-id="digits" style="display: none;">\n\t\t\t<div class="c-time__digit">0</div>\n\t\t\t<div class="c-time__digit">0</div>\n\t\t</div>\n\t\t<div class="c-time__label" data-export-id="label" style="display: none;"></div>\n\t</div>\n\t<div class="c-time__delimiter" data-export-id="delimiter" style="display: none;">:</div>\n</div>', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        case "digits":
            d.Ag ? F(c) : d.Ag = b;
            break;
        case "label":
            d.label ? F(c) : d.label = b;
            break;
        case "delimiter":
            d.yg ? F(c) : d.yg = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null,
        Ag: null,
        label: null,
        yg: null
    }, a)
}
;function In(a, b) {
    var c = a.getElementsByClassName("c-time__digit");
    b && (c.length !== b.length && Array.from(c).slice(-1 * b.length).forEach(function(d) {
        a.removeChild(d)
    }),
    b.split("").forEach(function(d, e) {
        c[e] ? L(c[e], d) : (e = document.createElement("div"),
        K(e, "c-time__digit", !0),
        L(e, d),
        a.appendChild(e))
    }))
}
function Jn(a) {
    var b = a.Qh;
    a = a.label;
    P.call(this);
    this.D = a;
    this.i = b;
    Xb(this, "c-time__label-and-digits")
}
z(Jn, P);
Jn.prototype.La = function() {
    P.prototype.La.call(this);
    L(this.g.label, this.D);
    zd(this.L(), "with-label", this.i)
}
;
Jn.prototype.setTime = function(a, b) {
    var c = this.g
      , d = c.Ag;
    c = c.label;
    this.u !== a && (this.u = a,
    M(d, !!a),
    M(c, !!this.i && !!a),
    M(this.g.yg, !!b),
    In(d, a))
}
;
Jn.prototype.pb = function() {
    return Hn(vd(this))
}
;
function Kn(a) {
    return I("<div></div>", {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null
    }, a)
}
;function Ln(a) {
    var b = a.Qh;
    a = a.Fl;
    P.call(this);
    var c = this;
    this.i = a;
    Xb(this, "c-time");
    [Mn, Nn, On, Pn].forEach(function(d) {
        var e = new Jn({
            Qh: b,
            label: O.g.K.G("time." + d + "Short")
        });
        c.Ca(e, d);
        c.L().appendChild(e.L())
    })
}
z(Ln, P);
Ln.prototype.Ta = function() {
    return !1
}
;
Ln.prototype.setTime = function(a, b) {
    a = am(a, this.i);
    zd(this.L(), "negative", void 0 === b ? !1 : b);
    (this.v[Mn] || null).setTime(a.ti, !!a.ti);
    (this.v[Nn] || null).setTime(a.oe, !!a.oe);
    (this.v[On] || null).setTime(a.Hd, !0);
    (this.v[Pn] || null).setTime(a.Ee)
}
;
Ln.prototype.pb = function() {
    return Kn(vd(this))
}
;
var Mn = "day"
  , Nn = "hour"
  , On = "minute"
  , Pn = "second";
function Qn(a) {
    return I('<div style="display: none;"></div>\n', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null
    }, a)
}
;function Rn(a, b, c, d) {
    a = b / a <= d / c ? b / d : a / c;
    return {
        width: Math.round(c * a),
        height: Math.round(d * a)
    }
}
;function Sn() {
    P.call(this);
    this.i = O.g.i.O
}
z(Sn, P);
Sn.prototype.Ta = function() {
    return !1
}
;
Sn.prototype.Ba = function() {
    P.prototype.Ba.call(this);
    this.clear()
}
;
function Tn(a, b) {
    var c = a.L();
    if (b.Wl || "none" === a.i)
        Un(a, b);
    else if ("css" === a.i && (Un(a, b),
    c.style.filter = "blur(" + (b.Pk || "2rem") + ")"),
    "software" === a.i) {
        var d = b.width
          , e = b.height;
        b.zIndex && (c.style.zIndex = "" + b.zIndex);
        b.position && (c.style.position = b.position);
        a = document.createElement("canvas");
        a.width = d;
        a.height = e;
        var f = a.getContext("2d");
        f.filter = "blur(" + (b.Pk || "2rem") + ")";
        var g = new Image;
        g.src = b.image.url;
        b = Rn(b.width, b.height, b.image.width, b.image.height);
        var h = b.width
          , l = b.height;
        g.onload = function() {
            f.drawImage(g, Math.round((d - h) / 2), Math.round((e - l) / 2), h, l)
        }
        ;
        c.insertBefore(a, c.firstChild)
    }
}
Sn.prototype.clear = function() {
    M(this.L(), !1);
    this.L().style.backgroundImage = "";
    "software" === this.i && ob(this.L())
}
;
Sn.prototype.pb = function() {
    return Qn(vd(this))
}
;
function Un(a, b) {
    a = a.L();
    b.zIndex && (a.style.zIndex = "" + b.zIndex);
    b.position && (a.style.position = b.position);
    a.style.backgroundImage = "url(" + b.image.url + ")";
    a.style.backgroundSize = "contain";
    a.style.backgroundRepeat = "no-repeat";
    a.style.backgroundPosition = "center";
    a.style.width = b.width + "px" || "100%";
    a.style.height = b.height + "px" || "100%"
}
;function Vn(a) {
    var b = {};
    var c = '<div class="s-player__main-container" data-export-id="mainContainer">\n\t<div class="s-player__persistent-layer" data-export-id="persistentLayer">\n\t\t' + E(Sn, {}, "blur", b) + '\n\t\t<div class="s-player__bottom-overlay" data-export-id="liveStartTimerBottomOverlay" style="display: none;"></div>\n\t\t<div class="s-player__persistent-layer-overlay" data-export-id="persistentLayerOverlay">\n\t\t\t<div class="s-player__live-start-timer-container" data-export-id="liveStartTimerContainer">\n\t\t\t\t<div class="s-player__live-start-timer-remain-text" data-export-id="liveStartRemain"></div>\n\t\t\t\t<div class="s-player__live-start-timer-values-container">\n\t\t\t\t\t' + E(Ln, {
        Qh: !0,
        Fl: !0
    }, "liveStartRemainTime", b) + '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="s-player__loader-overlay" data-export-id="loaderOverlay">' + E(xd, {}, "loader", b) + '</div>\n\t<div class="s-player__top-overlay" data-export-id="layers"></div>\n\t<div class="s-player__bottom-overlay" data-export-id="layers"></div>\n\t<div class="s-player__bottom-scroll-overlay" data-export-id="layers"></div>\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "blur":
            f.blur ? F(e) : f.blur = d;
            break;
        case "liveStartRemainTime":
            f.Bf ? F(e) : f.Bf = d;
            break;
        case "loader":
            f.ue ? F(e) : f.ue = d;
            break;
        case "mainContainer":
            f.uc ? F(e) : f.uc = d;
            break;
        case "persistentLayer":
            f.th ? F(e) : f.th = d;
            break;
        case "liveStartTimerBottomOverlay":
            f.Xg ? F(e) : f.Xg = d;
            break;
        case "persistentLayerOverlay":
            f.Si ? F(e) : f.Si = d;
            break;
        case "liveStartTimerContainer":
            f.Cf ? F(e) : f.Cf = d;
            break;
        case "liveStartRemain":
            f.Wg ? F(e) : f.Wg = d;
            break;
        case "loaderOverlay":
            f.gd ? F(e) : f.gd = d;
            break;
        case "layers":
            f.Sg.push(d);
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        blur: null,
        Bf: null,
        ue: null,
        uc: null,
        th: null,
        Xg: null,
        Si: null,
        Cf: null,
        Wg: null,
        gd: null,
        Sg: []
    }, a)
}
;function Wn(a) {
    return I('<div class="w-button" data-export-id="title"></div>\n', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        case "title":
            d.title ? F(c) : d.title = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null,
        title: null
    }, a)
}
;function Xn(a) {
    var b = a.label
      , c = a.value;
    a = a.bd;
    P.call(this);
    this.i = c;
    this.P = "click";
    a && Bd(this.L(), "long");
    this.nb(b)
}
z(Xn, P);
Xn.prototype.da = function(a, b) {
    return 21 === a ? (this.B(this.P, this.i),
    !0) : P.prototype.da.call(this, a, b)
}
;
Xn.prototype.nb = function(a) {
    L(this.g.title, a)
}
;
Xn.prototype.pb = function() {
    return Wn(vd(this))
}
;
function Yn(a) {
    var b = {};
    var c = '<div class="w-progress-bar" data-export-id="container">\n\t<div class="w-progress-bar__preview-container" data-export-id="previewContainer">\n\t\t<div class="w-progress-bar__preview" data-export-id="preview">\n\t\t\t<canvas class="w-progress-bar__thumb" data-export-id="thumb"></canvas>\n\t\t</div>\n\t\t<div class="w-progress-bar__timecode">\n\t\t\t' + E(Ln, {}, "timecode", b) + '\n\t\t</div>\n\t</div>\n\t<canvas class="w-progress-bar__bg" data-export-id="bg"></canvas>\n\t<canvas class="w-progress-bar__progress" data-export-id="canvas"></canvas>\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "timecode":
            f.timecode ? F(e) : f.timecode = d;
            break;
        case "container":
            f.ub ? F(e) : f.ub = d;
            break;
        case "previewContainer":
            f.ye ? F(e) : f.ye = d;
            break;
        case "preview":
            f.preview ? F(e) : f.preview = d;
            break;
        case "thumb":
            f.Je ? F(e) : f.Je = d;
            break;
        case "bg":
            f.pf ? F(e) : f.pf = d;
            break;
        case "canvas":
            f.canvas ? F(e) : f.canvas = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        timecode: null,
        ub: null,
        ye: null,
        preview: null,
        Je: null,
        pf: null,
        canvas: null
    }, a)
}
;function Zn(a) {
    P.call(this);
    var b = this;
    this.u = null;
    this.state = Object.assign({}, a, {
        gb: !1
    });
    this.C = .01;
    this.J = {};
    this.D = !1;
    this.P = "click";
    this.i = {
        Xh: Q(5),
        Jj: Q(2),
        rj: Q(3),
        af: Q(100),
        Hj: Q(56),
        Ij: -Q(81)
    };
    a.al || this.disable();
    M(this.g.preview, a.Vl);
    this.on("focus", function() {
        return $n(b, {
            gb: !0
        })
    });
    this.on("blur", function() {
        return $n(b, {
            gb: !1
        })
    });
    ao(this, Q(640), Q(10));
    bo(this);
    co(this)
}
z(Zn, P);
function eo(a, b, c) {
    var d = a.J[b];
    if (d)
        return d;
    d = c.getContext("2d");
    return a.J[b] = d
}
function fo(a, b) {
    var c = b.oi;
    b = b.coords;
    ao(a, c.width, c.height);
    $n(a, b);
    co(a)
}
function $n(a, b) {
    a.state = Object.assign({}, a.state, b);
    a.update()
}
function go(a, b) {
    var c = null !== a.u;
    a.u = b;
    c || ho(a, a.C, Date.now())
}
function io(a) {
    a.u = null;
    window.cancelAnimationFrame(a.O)
}
function ho(a, b, c) {
    var d = a.u;
    if (null !== d)
        if (a.state.progress === d)
            a.u = null;
        else {
            var e = Date.now()
              , f = Math.sign(d - a.state.progress);
            c = a.state.progress + f * b * Math.max(0, (e - c) / 1E3);
            1 === f && (a.state.progress = Ke(c, a.state.progress, d));
            -1 === f && (a.state.progress = Ke(c, d, a.state.progress));
            a.O = window.requestAnimationFrame(function() {
                a.update();
                ho(a, b, e)
            })
        }
}
Zn.prototype.update = function() {
    this.clear();
    bo(this)
}
;
Zn.prototype.clear = function() {
    var a = this.g.canvas;
    eo(this, jo, a).clearRect(0, 0, a.width, a.height)
}
;
function ko(a, b, c, d) {
    a.D = !1;
    var e = a.g
      , f = e.timecode
      , g = a.state
      , h = g.x
      , l = g.w
      , m = g.progress
      , n = g.mh
      , q = null !== c;
    e.ye.style.transform = "translate(" + Ke(h + Math.floor(l * m) - a.i.af / 2 - g.Hc / 2, q ? h : h - a.i.af / 2, q ? h + l - a.i.af : h + l) + "px, " + a.i.Ij + "px)";
    f.setTime(d || b * m, n);
    if (q) {
        var u = Gl(m, b, c)
          , w = lo(u.hl)
          , x = function() {
            var y = a.g.Je
              , A = eo(a, mo, y)
              , C = u.width / u.height * y.height;
            A.drawImage(w, u.x, u.y, u.width, u.height, (y.width - C) / 2, 0, C, y.height)
        };
        if (w)
            if (w.complete)
                a.D = !0,
                x();
            else {
                var J = function() {
                    w.removeEventListener("load", J);
                    a.D || x()
                };
                w.addEventListener("load", J)
            }
    }
}
Zn.prototype.pb = function() {
    return Yn(vd(this))
}
;
Zn.prototype.Aa = function(a, b) {
    b instanceof MouseEvent && !(b instanceof WheelEvent) && this.B(this.P, Ke((b.clientX - this.state.x) / this.state.w, 0, 1));
    return P.prototype.Aa.call(this, a, b)
}
;
function lo(a) {
    var b = new Image;
    b.src = a;
    return b
}
function ao(a, b, c) {
    var d = a.g
      , e = d.canvas
      , f = d.pf;
    d = d.Je;
    e.width = b;
    e.height = c;
    f.width = b;
    f.height = c;
    d.width = a.i.af;
    d.height = a.i.Hj
}
function co(a) {
    var b = a.g.pf.getContext("2d")
      , c = a.state;
    a = a.state.Tb.backgroundColor;
    var d = c.x
      , e = c.y
      , f = c.w;
    c = c.Hc / 2;
    b.beginPath();
    b.arc(d + c, e + c, c, .5 * Math.PI, 1.5 * Math.PI, !1);
    b.lineTo(d + f - c, e);
    b.arc(d + f - c, e + c, c, 1.5 * Math.PI, .5 * Math.PI, !1);
    b.fillStyle = a;
    b.fill()
}
function bo(a) {
    var b = eo(a, jo, a.g.canvas)
      , c = a.state
      , d = c.gb
      , e = c.w
      , f = c.progress
      , g = c.Ei;
    c = Math.floor(e * f);
    if (0 !== f && 0 !== c) {
        b.save();
        var h = a.state;
        f = h.x;
        var l = h.y
          , m = h.w;
        h = h.Hc / 2;
        b.beginPath();
        b.arc(f + h, l + h, h, .5 * Math.PI, 1.5 * Math.PI, !1);
        b.lineTo(f + m - h, l);
        b.arc(f + m - h, l + h, h, 1.5 * Math.PI, .5 * Math.PI, !1);
        b.closePath();
        b.clip();
        f = d ? a.state.Tb.Fg : a.state.Tb.xg;
        l = a.state.x;
        m = a.state.y;
        h = a.state.Hc;
        var n = h / 2;
        b.beginPath();
        b.moveTo(l, m);
        b.lineTo(l + c - n, m);
        b.arc(l + c - n, m + n, n, 1.5 * Math.PI, .5 * Math.PI, !1);
        b.lineTo(l, m + h);
        b.fillStyle = f;
        b.fill();
        b.restore()
    }
    void 0 !== g && (m = a.state,
    f = m.x,
    l = m.y,
    m = m.Hc,
    h = m / 2,
    e = f + e * g,
    b.fillStyle = "rgba(255, 255, 255, 0.42)",
    b.fillRect(e, l, f + c - e, m),
    b.beginPath(),
    b.arc(Ke(e - h, f, e), l + h, a.i.Xh, 0, 2 * Math.PI, !1),
    b.fillStyle = "rgba(8, 8, 8, 0.5)",
    b.fill(),
    b.beginPath(),
    b.arc(Ke(e - h, f, e), l + h, a.i.rj, 0, 2 * Math.PI, !1),
    b.fillStyle = "rgb(255, 255, 255)",
    b.fill());
    d && (f = a.state,
    e = f.x,
    g = f.y,
    f = f.Hc / 2,
    b.beginPath(),
    b.shadowBlur = a.i.Jj,
    b.shadowColor = a.state.Tb.shadowColor,
    b.arc(Ke(e + c - f, e, e + c), g + f, a.i.Xh, 0, 2 * Math.PI, !1),
    b.fillStyle = d ? a.state.Tb.Fg : a.state.Tb.xg,
    b.fill())
}
var no = {
    backgroundColor: "rgba(255, 255, 255, 0.24)",
    Fg: "rgb(39, 135, 245)",
    xg: "rgb(255, 255, 255)",
    shadowColor: "rgba(0, 0, 0, 0.3)"
}
  , oo = {
    backgroundColor: "rgba(255, 255, 255, 0.24)",
    Fg: "rgb(39, 135, 245)",
    xg: "rgba(255, 51, 71, 1)",
    shadowColor: "rgba(0, 0, 0, 0.3)"
}
  , mo = "thumbnail"
  , jo = "progress";
function po() {
    uf.apply(this, [].concat(r(ya.apply(0, arguments))));
    this.u = !1
}
z(po, uf);
po.prototype.Ta = function() {
    return this.N && this.u
}
;
function qo(a) {
    var b = {};
    var c = '<div class="w-video-list" data-export-id="container">\n    <div class="w-video-list__slide-window" data-export-id="slideWindow"></div>\n    <div class="w-video-list__items-container" data-export-id="sliderContainer"></div>\n    <div class="w-video-list__skeleton-container" data-export-id="skeletonContainer"></div>\n\t' + E(uf, {
        icon: "arrow-left"
    }, "moveLeft", b) + "\n\t" + E(uf, {
        icon: "arrow-left",
        rotation: "180"
    }, "moveRight", b) + "\n</div>\n";
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "moveLeft":
            f.xb ? F(e) : f.xb = d;
            break;
        case "moveRight":
            f.Hb ? F(e) : f.Hb = d;
            break;
        case "container":
            f.ub ? F(e) : f.ub = d;
            break;
        case "slideWindow":
            f.Ua ? F(e) : f.Ua = d;
            break;
        case "sliderContainer":
            f.ia ? F(e) : f.ia = d;
            break;
        case "skeletonContainer":
            f.Bh ? F(e) : f.Bh = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        xb: null,
        Hb: null,
        ub: null,
        Ua: null,
        ia: null,
        Bh: null
    }, a)
}
;function ro(a, b) {
    Uf.call(this);
    this.S = a;
    this.Dc = this.Dc.bind(this);
    this.J();
    this.O = this.O || {
        He: 0,
        Nf: 5,
        bufferSize: 20,
        yf: 20,
        ne: 10
    };
    this.j = {};
    for (var c in this.O)
        this.O.hasOwnProperty(c) && (this.j[c] = b && "undefined" !== typeof b[c] ? b[c] : this.O[c]);
    this.j.yf = Math.min(this.j.yf, this.j.bufferSize);
    this.D = 0 === this.j.He;
    var d = this.j;
    a = d.Nf;
    b = d.ne;
    c = d.yf;
    d = d.bufferSize;
    if (0 >= a)
        throw Error("startLoadingOnItemsLeft should be greater than zero");
    if (isNaN(a))
        throw Error("startLoadingOnItemsLeft should not be NaN");
    if (0 >= b)
        throw Error("frameSize should be greater than zero");
    if (isNaN(b))
        throw Error("frameSize should not be NaN");
    if (0 >= c)
        throw Error("initialBufferSize should be greater than zero");
    if (isNaN(c))
        throw Error("initialBufferSize should not be NaN");
    if (0 >= d)
        throw Error("bufferSize should be greater than zero");
    if (isNaN(d))
        throw Error("bufferSize should not be NaN");
    if (b < a)
        throw Error("frameSize should be equal or greater than startLoadingOnItemsLeft");
    if (c < b)
        throw Error("initialBufferSize should be equal or greater than frameSize");
    if (d < b)
        throw Error("bufferSize should be equal or greater than frameSize");
    if (d - 2 * a < b)
        throw Error("This options combination causes recursion: bufferSize - startLoadingOnItemsLeft * 2 < frameSize");
}
z(ro, Uf);
ro.prototype.clear = function() {
    Uf.prototype.clear.call(this);
    this.J()
}
;
function so(a, b, c, d) {
    a.l = a.S(b, c).then(function(e) {
        var f = a.g;
        a.off("item-selected", a.Dc);
        var g = a.size()
          , h = e.length
          , l = isNaN(a.o) ? 0 : a.o
          , m = a.j.bufferSize
          , n = g + h - m;
        h = 0 === h || h < c - b + 1;
        a.Zd(e, d ? 0 : g);
        0 < n ? (e = l + (d ? -1 : 1) * n,
        m = d ? m : 0,
        Wf(a, a.i.slice(m, m + n)),
        a.o = e) : a.o = l;
        d ? (a.D = h || 0 === b,
        0 < n && (a.v = !1)) : (a.v = h,
        0 < n && (a.D = !1));
        a.l = null;
        a.B("items-changed", a.i);
        a.on("item-selected", a.Dc);
        return a.g !== f ? to(a) : a
    });
    return a.l
}
ro.prototype.te = function() {
    if (this.l)
        return this.l;
    if (this.v)
        return Promise.resolve(this);
    var a = this.o + this.size();
    a = so(this, a, a + this.j.ne - 1, !1);
    this.B("loading-data", a);
    return a
}
;
function uo(a) {
    if (a.l)
        return a.l;
    if (a.D)
        return Promise.resolve(a);
    var b = a.o - 1;
    b = so(a, Math.max(0, b - a.j.ne + 1), b, !0);
    a.B("loading-data", b);
    return b
}
ro.prototype.J = function() {
    this.v = !1;
    this.D = !0;
    this.l = null;
    this.o = NaN
}
;
ro.prototype.Dc = function(a, b, c, d, e) {
    c !== e && to(this)
}
;
function to(a) {
    var b = a.g;
    return !a.v && a.size() - b <= a.j.Nf ? a.te() : !a.D && b < a.j.Nf ? uo(a) : Promise.resolve(a)
}
;function vo() {
    ro.apply(this, arguments)
}
z(vo, ro);
vo.prototype.te = function() {
    if (this.l)
        return this.l;
    if (this.v)
        return Promise.resolve(this);
    var a = (isNaN(this.o) ? 0 : this.o) + this.size();
    a = so(this, a, a + this.j.ne - 1, !1);
    this.B("loading-data", a);
    return a
}
;
function wo(a, b) {
    b ? (a.off("item-selected", a.Dc),
    a.on("item-selected", a.Dc)) : a.off("item-selected", a.Dc)
}
vo.prototype.J = function() {
    this.v = !1;
    this.D = !0;
    this.l = null;
    this.o = 0
}
;
function xo(a, b, c) {
    var d = void 0 === c ? {} : c;
    c = d.Jl;
    var e = d.Kl;
    d = void 0 === d.Vk ? !1 : d.Vk;
    vo.call(this, a, b);
    var f = this;
    this.u = !1;
    this.C = c;
    this.ua = e || 12;
    this.$ = d;
    this.on("items-added", function(g, h) {
        return yo(f, h)
    })
}
z(xo, vo);
k = xo.prototype;
k.clear = function(a) {
    var b = this;
    vo.prototype.J.call(this);
    this.i.slice().forEach(function(c) {
        b.remove(c)
    });
    a || zo(this, 0)
}
;
k.size = function() {
    return this.u ? this.indexOf(this.C) : vo.prototype.size.call(this)
}
;
k.te = function() {
    zo(this, this.size());
    return vo.prototype.te.call(this)
}
;
function Ao(a) {
    return a.v ? a.D ? Promise.reject() : uo(a) : a.te()
}
function zo(a, b) {
    if (!a.$) {
        var c = Array(a.ua).fill(a.C);
        a.Zd(c, b)
    }
}
k.$f = function(a, b) {
    var c = this.g;
    vo.prototype.$f.call(this, a, b);
    this.u && (this.g = c);
    a === this.C && (this.u = !0)
}
;
k.hf = function(a) {
    a = vo.prototype.hf.call(this, a);
    this.u && -1 === this.indexOf(this.C) && (this.u = !1);
    return a
}
;
k.Dc = function(a, b, c, d, e) {
    !this.u && Number.isInteger(e) && this.size() && c !== e && to(this)
}
;
function yo(a, b) {
    b = b.every(function(c) {
        return c !== a.C
    });
    if (a.u && (b || a.v))
        for (b = a.i.length; 0 < b && (a.remove(a.C),
        a.u); b--)
            ;
}
;function Bo(a, b, c) {
    xo.call(this, function() {
        return Promise.resolve([])
    }, b, c);
    this.N = null;
    this.Z = !1;
    a && (this.S = Co(this, a));
    wo(this, !0)
}
z(Bo, xo);
function Co(a, b) {
    return function() {
        return a.N ? b(a.N).then(function(c) {
            var d = c.items;
            c = c.Da;
            a.He = c && c.length ? c : null;
            return d
        }) : Promise.resolve([])
    }
}
t.Object.defineProperties(Bo.prototype, {
    He: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.N = a
        },
        get: function() {
            return this.N
        }
    },
    v: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return null === this.N ? this.Z : !1
        },
        set: function(a) {
            this.Z = a
        }
    }
});
function Do(a, b) {
    b = void 0 === b ? !1 : b;
    Og.call(this);
    this.i = null;
    this.D = "";
    this.mb(!0);
    this.Vf();
    a && this.Xe(a, b)
}
z(Do, Og);
k = Do.prototype;
k.va = function() {
    Og.prototype.va.call(this);
    this.update()
}
;
k.Xe = function(a, b) {
    this.D = a.ta;
    Eo(this, a, void 0 === b ? !1 : b);
    this.update()
}
;
k.update = function() {
    if (this.D) {
        var a = O.g.g.S[this.D];
        this.ji(a ? 100 * a : a)
    }
}
;
k.Sd = function() {
    var a = this.g;
    return {
        tc: [],
        ac: [a.Za, a.wb, a.Va]
    }
}
;
k.Uc = function() {}
;
k.Vf = function() {}
;
function Eo(a, b, c) {
    a.i && (a.i = a.i.cancel());
    a.mb(!1);
    Ad(a.L(), "no-cover");
    if (b.Za) {
        var d = Kf(b.Za);
        a.i = Cd(d);
        a.i.catch(pg);
        d.then(function(e) {
            a.g.Za.style.backgroundImage = "url(" + e.src + ")"
        }).catch(function() {
            return zd(a.L(), "no-cover", c)
        })
    } else
        zd(a.L(), "no-cover", c);
    Fo(a.g.wb, b.wb);
    Fo(a.g.Kd, b.Va && b.Va.Eg);
    Fo(a.g.Ld, b.Va && b.Va.bj);
    b = 25 <= b.wb.length && !b.wb.slice(0, 25).includes(" ");
    zd(a.L(), "very-long-title", b)
}
function Fo(a, b) {
    b ? L(a, b) : L(a, "");
    M(a, !!b)
}
;function Go(a, b, c) {
    c = void 0 === c ? ["up", "right", "down", "left"] : c;
    var d = db(a, b)
      , e = {};
    Object.keys(d).forEach(function(f) {
        c.includes(f) && (e[f] = 0 < d[f])
    });
    return e
}
;function Ho(a) {
    var b = void 0 === a.Id ? !1 : a.Id
      , c = a.Il
      , d = void 0 === a.Ae ? !0 : a.Ae;
    a = a.Eh;
    Og.call(this, !0);
    var e = this;
    this.J = null;
    this.Z = pg;
    this.D = [];
    this.ed = d;
    this.u = {
        start: 0,
        end: -1,
        clear: function() {
            this.start = 0;
            this.end = -1
        }
    };
    this.hb = 0;
    this.Mb = (this.C = b) ? 5 : 12;
    this.Pb = function() {
        return NaN
    }
    ;
    this.$ = function() {
        return NaN
    }
    ;
    this.ja = NaN;
    this.O = Promise.resolve(0);
    this.S = a ? new a : null;
    this.i = new Bo(void 0,{
        bufferSize: Infinity,
        Nf: this.Mb,
        yf: 15,
        ne: this.Mb
    },{
        Jl: c,
        Kl: this.Mb
    });
    this.i.F = !1;
    this.C && this.g.ub.classList.add("_one-line");
    this.pc = jl(this.Th.bind(this), 1E3, {
        Df: 5E3
    });
    this.re = El(this.li.bind(this), 100);
    this.jb = El(this.Yh.bind(this), 100);
    this.i.on("item-selected", function(f, g, h, l, m) {
        !e.C && e.i.size() && Io(e, h, m)
    });
    this.i.on("items-added", function(f, g) {
        e.O.then(function(h) {
            Jo(e, g, h)
        })
    });
    this.i.on("item-removed", function(f, g, h) {
        if (f = e.D[h - e.u.start])
            Ko(e, f),
            e.O.then(function() {
                wo(e.i, !1);
                e.l ? Lo(e) : e.T(Ib(e));
                wo(e.i, !0)
            })
    })
}
z(Ho, Og);
k = Ho.prototype;
k.va = function() {
    Og.prototype.va.call(this);
    this.J = null
}
;
k.Nb = function() {
    Og.prototype.Nb.call(this);
    this.Z = pg;
    this.ed && (this.pc.cancel(),
    this.Th())
}
;
k.T = function(a, b) {
    b = Og.prototype.T.call(this, a, b);
    a && this.i.Xa(this.D.indexOf(a) + this.u.start);
    return b
}
;
k.blur = function() {
    Og.prototype.blur.call(this);
    this.J || Lo(this);
    this.Z = pg
}
;
k.da = function(a, b) {
    var c = this
      , d = Mo(a);
    if (!d)
        return Og.prototype.da.call(this, a, b);
    if (Lg(this))
        return this.jb.cancel(),
        this.Yh();
    var e = wb(this.F, this.l, d);
    if (!e || !e.length)
        return Og.prototype.da.call(this, a, b);
    e = !this.C && this.J && ["left", "right"].includes(d);
    d = "left" === this.J && "right" === d || "right" === this.J && "left" === d;
    d = this.C && d;
    if (e || d)
        return this.Z = pg,
        No(this, a, b);
    this.J && (this.Z = function() {
        c.Z = pg;
        c.da(a, b)
    }
    );
    this.jb.cancel();
    this.re.cancel();
    return !!this.J || Oo(this, a, b)
}
;
k.Ra = function() {
    Og.prototype.Ra.call(this);
    this.J || Lo(this);
    Lg(this) && this.jb()
}
;
k.Vc = function(a, b) {
    var c = this.i;
    switch (a) {
    case -Infinity:
        a = c.Xa(0);
        break;
    case 0:
        a = !0;
        Yf(c) || (a = c.Xa(0));
        break;
    case Infinity:
        a = c.Xa(c.size() - 1);
        break;
    default:
        var d = Math.abs(a);
        a = 0 < a ? c.Xa(c.g + (isNaN(d) ? 1 : 1 > d ? 1 : d)) : c.Xa(c.g - (isNaN(d) ? 1 : 1 > d ? 1 : d))
    }
    (c = a) && "open" === b && this.B("media-list-item-click", Yf(this.i));
    return c
}
;
k.Ad = function(a, b) {
    var c = a.toLowerCase();
    a = this.i.i.findIndex(function(d) {
        return d.title.toLowerCase().includes(c) || d.ma.name.toLowerCase().includes(c)
    });
    return -1 !== a ? (Po(this, a),
    "open" === b && this.B("media-list-item-click", Yf(this.i)),
    !0) : !1
}
;
function Qo(a) {
    a.D.forEach(function(b) {
        return b.update()
    })
}
k.clear = function(a) {
    var b = this.g.ia;
    this.C ? sg(b, 0, !0) : qg(b, 0, !0);
    Ro(this, this.S);
    this.u.clear();
    this.i.clear(a);
    this.J = null;
    this.Z = pg;
    this.g.ia.style.marginBottom = "0px";
    this.g.ia.style.marginTop = "0px";
    this.g.ia.style.marginLeft = "0px";
    this.g.ia.style.marginRight = "0px";
    this.ja = NaN;
    this.mb(!0)
}
;
function Po(a, b) {
    (b = a.D[b - a.u.start]) && a.T(b) && b && !a.J && Lo(a)
}
function So(a) {
    a.J || Lo(a)
}
k.Aa = function(a, b) {
    var c = this.i.g - this.u.start
      , d = this.D[c];
    if (d && 21 === a) {
        d = Tb(d);
        var e;
        (e = !(b instanceof MouseEvent)) || (e = new Qa(b.clientX,b.clientY),
        e = d.na <= e.x && d.oa > e.x && d.la <= e.y && d.pa > e.y);
        if (this.hb && e)
            return this.B("media-list-item-click", Yf(this.i), c),
            !0
    }
    return Og.prototype.Aa.call(this, a, b)
}
;
k.Sd = function() {
    return {
        tc: [this.L()],
        eo: []
    }
}
;
k.Yh = function() {
    var a = gb(this.g.Ua.getBoundingClientRect())
      , b = this.j.filter(function(c) {
        return c instanceof Do
    }).map(function(c) {
        return [c, Tb(c)]
    }).filter(function(c) {
        c = p(c);
        c.next();
        c = c.next().value;
        return c.na <= a.oa && c.oa >= a.na && c.la <= a.pa && c.pa >= a.la
    }).map(function(c) {
        return p(c).next().value
    });
    return b.length ? this.T(this.l === this.Uc().xb ? b[0] : b[b.length - 1]) : !1
}
;
function Lo(a) {
    var b = a.l;
    if (b && !Lg(a)) {
        b = Tb(b);
        var c = gb(a.g.Ua.getBoundingClientRect())
          , d = [];
        a.C ? d.push("left", "right") : d.push("up", "down");
        if (b = Go(b, c, d))
            if (b = Object.entries(b).find(function(e) {
                e = p(e);
                e.next();
                return !!e.next().value
            }))
                b = p(b).next().value,
                a.re(b)
    }
}
k.li = function(a) {
    function b() {
        Kg(c);
        c.J = null;
        c.Z()
    }
    var c = this;
    this.J = a;
    xg({
        Oe: this.l,
        Ob: this.g.Ua,
        Rb: this.g.ia
    }, b) || b()
}
;
function No(a, b, c) {
    var d = [2, 4].includes(b);
    Eb(a.F, !0, !0, d);
    b = Og.prototype.da.call(a, b, c);
    Eb(a.F, !0, !0, !0);
    return b
}
function Oo(a, b, c) {
    var d = Mo(b) || null;
    (b = No(a, b, c)) && a.li(d);
    return b
}
k.Ek = function(a, b, c) {
    this.hb = 0;
    if (b) {
        var d = this.i;
        d.S = Co(d, b)
    }
    vo.prototype.J.call(this.i);
    this.i.He = c || null;
    b = this.i;
    wo(b, !1);
    d = b.g;
    c = NaN;
    0 <= d && d <= a.length && (c = b.g);
    if (0 < b.size()) {
        d = Math.max(a.length, b.size() - 1);
        for (var e = 0; e <= d; e++)
            b.hf(0)
    }
    ro.prototype.Zd.call(b, a, 0);
    isNaN(c) || (b.F ? b.Xa(c) : b.g = c);
    wo(b, !0);
    this.mb(!1)
}
;
k.dg = function() {
    var a = this;
    zg({
        Ob: this.g.Ua,
        Rb: this.g.ia,
        direction: "left",
        offset: Q(552)
    }, {
        Mi: function() {
            Kg(a)
        }
    })
}
;
k.eg = function() {
    var a = this;
    zg({
        Ob: this.g.Ua,
        Rb: this.g.ia,
        direction: "right",
        offset: Q(552)
    }, {
        Mi: function() {
            Kg(a)
        },
        Xk: function() {
            Ao(a.i).catch(pg)
        }
    })
}
;
function Ro(a, b) {
    b && -1 !== a.j.indexOf(b) && (Nb(a, b),
    a.g.ia.removeChild(b.L()))
}
function To(a, b) {
    b && (a.Ca(b),
    a.g.ia.appendChild(b.L()))
}
function Jo(a, b, c) {
    var d = a.hb
      , e = a.i.C;
    Ro(a, a.S);
    b.forEach(function(f, g) {
        g = a.D[d + g - a.u.start];
        var h = Uo(a, f, g);
        h && (g = h,
        Vo(a, g));
        (f = f === e) || a.hb++;
        g instanceof Og && g.mb(f)
    });
    void 0 !== c && null === a.l && a.T(a.D[c]);
    b.length || a.D.length || a.B("media-list-empty");
    To(a, a.S)
}
function Vo(a, b) {
    var c = b.L();
    K(c, "_media-list-item", !0);
    a.g.ia.appendChild(c);
    a.Ca(b);
    a.D.push(b);
    a.u.end++;
    isNaN(a.ja) && (c = b.L(),
    b = a.C ? c.offsetWidth : c.offsetHeight,
    0 !== b && (c = window.getComputedStyle(c),
    b = b + parseInt(a.C ? c.marginLeft : c.marginTop, 10) + parseInt(a.C ? c.marginRight : c.marginBottom, 10))) && (a.ja = b)
}
function Wo(a, b, c) {
    for (var d = a.$(), e = 0; e < d; e++) {
        var f = Zf(a.i, b + e * (c ? -1 : 1));
        if (f)
            if (f = Uo(a, f),
            c) {
                var g = a
                  , h = f.L();
                K(h, "_media-list-item", !0);
                g.g.ia.insertBefore(h, g.D[0].L());
                h = g;
                h.j.unshift(f);
                var l = h.F;
                l.g.unshift(f);
                l.j.unshift({});
                Gg(h, f);
                g.D.unshift(f);
                g.u.start--
            } else
                Vo(a, f)
    }
    Xo(a, c, !1)
}
function Yo(a) {
    var b = a.u.end + 1;
    b < a.i.size() && Wo(a, b, !1)
}
function Ko(a, b, c) {
    var d = new Promise(function(e) {
        a.g.ia.removeChild(b.L());
        Nb(a, b);
        var f = a.D.findIndex(function(h) {
            return h === b
        })
          , g = a.u.start;
        a.l === b && (g = f);
        a.D.splice(f, 1);
        c ? a.u.start++ : 0 <= a.u.end && a.u.end--;
        e(Promise.resolve(g))
    }
    );
    a.O = a.O.then(function() {
        return d
    })
}
function Xo(a, b, c) {
    c = c ? 1 : -1;
    c *= a.C ? a.$() : 1;
    var d = a.C ? ["marginLeft", "marginRight"] : ["marginTop", "marginBottom"];
    b = b ? d[0] : d[1];
    a.g.ia.style[b] = parseInt(a.g.ia.style[b] || "0px", 10) + (isNaN(a.ja) ? 0 : a.ja) * c + "px"
}
function Zo(a, b, c) {
    var d = Math
      , e = d.max;
    var f = a.Pb();
    var g = a.$();
    var h = g * (a.C ? 1 : f);
    c = b ? c - h - a.u.start : a.u.end - (c + h);
    a.C ? g = c : (f *= g,
    h = a.u.end - a.u.start + 1 - c,
    !b && h < f && (c -= f - h),
    g = Math.floor(c / g) * g);
    d = e.call(d, 0, g);
    for (e = 0; e < d; e++)
        Ko(a, b ? a.D[0] : a.D[a.D.length - 1], b),
        0 === (e + 1) % a.$() && Xo(a, b, !0)
}
k.Th = function() {
    var a = this.i.g;
    Zo(this, !1, a);
    var b = this.D.length;
    b && Zo(this, !0, a);
    -1 === this.D.indexOf(this.l) && b && Po(this, b - 1)
}
;
function Io(a, b, c) {
    var d = a.Pb()
      , e = a.$();
    if (!isNaN(b)) {
        d = a.C ? e : e * d;
        if (0 <= b - (isNaN(c) ? b : c)) {
            var f = a.u.end - b;
            0 < f && f < d && Yo(a)
        } else
            b - a.u.start < d && 0 < a.u.start && Wo(a, a.u.start - 1, !0);
        if (!a.C && !isNaN(c)) {
            var g = b % e;
            a.D.forEach(function(h, l) {
                l = a.u.start + l;
                var m = l > b + (2 * e - g - 1);
                h.ab(!(l < b - g - e || m))
            })
        }
        a.pc()
    }
}
function Mo(a) {
    return 1 === a ? "left" : 3 === a ? "right" : 2 === a ? "up" : 4 === a ? "down" : null
}
;function $o(a, b) {
    return function() {
        var c = {};
        var d = '<div class="w-video-tile">\n\t';
        this.jl && (d += '\n\t\t<div class="w-video-tile__tile-preview" data-export-id="preview">\n\t\t\t<div class="w-video-tile__corners"></div>\n\t\t</div>\n\t');
        d += '\n\t<div class="w-video-tile__cover" data-export-id="cover">\n\t\t' + E(of, {
            name: "film-strip"
        }, "__null__", c) + '\n\t\t<div class="w-video-tile__badge" data-export-id="badge"></div>\n\t\t<div class="w-video-tile__progress-clip">\n\t\t\t<div class="w-video-tile__progress-container" data-export-id="progressContainer">\n\t\t\t\t<div class="w-video-tile__progress" data-export-id="progress"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="w-video-tile__info">\n\t\t<div class="w-video-tile__info-long-block" data-export-id="mainTitle"></div>\n\t\t<div class="w-video-tile__info-short-block" data-export-id="subTitle">\n\t\t\t<div data-export-id="subTitleFirstLine"></div>\n\t\t\t<div data-export-id="subTitleSecondLine"></div>\n\t\t</div>\n\t</div>\n</div>\n';
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "__null__":
                g.ib ? F(f) : g.ib = e;
                break;
            case "preview":
                g.preview ? F(f) : g.preview = e;
                break;
            case "cover":
                g.Za ? F(f) : g.Za = e;
                break;
            case "badge":
                g.badge ? F(f) : g.badge = e;
                break;
            case "progressContainer":
                g.ze ? F(f) : g.ze = e;
                break;
            case "progress":
                g.progress ? F(f) : g.progress = e;
                break;
            case "mainTitle":
                g.wb ? F(f) : g.wb = e;
                break;
            case "subTitle":
                g.Va ? F(f) : g.Va = e;
                break;
            case "subTitleFirstLine":
                g.Kd ? F(f) : g.Kd = e;
                break;
            case "subTitleSecondLine":
                g.Ld ? F(f) : g.Ld = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            ib: null,
            preview: null,
            Za: null,
            badge: null,
            ze: null,
            progress: null,
            wb: null,
            Va: null,
            Kd: null,
            Ld: null
        }, b)
    }
    .call(a)
}
;function ap(a, b) {
    Do.call(this, a, void 0 === b ? !1 : b);
    this.C = a.duration || 0;
    this.J = a.Jb || null;
    this.O = a.trailer || null;
    this.u = O.g.i.preview !== Pl
}
z(ap, Do);
k = ap.prototype;
k.focus = function(a) {
    Do.prototype.focus.call(this, a);
    this.u && bp(this)
}
;
k.blur = function() {
    Do.prototype.blur.call(this);
    this.u && (nb(this.g.preview),
    this.B("stop-video-preview"))
}
;
k.Xe = function(a, b) {
    var c = a.badge
      , d = a.trailer
      , e = a.duration
      , f = a.platform
      , g = a.Jb;
    Do.prototype.Xe.call(this, {
        id: a.id,
        Za: a.Za,
        wb: a.wb,
        Va: a.Va,
        progress: a.progress,
        ta: a.ta
    }, void 0 === b ? !1 : b);
    if (a = !(c !== cp && c !== dp && (c !== ep || !e && !f)))
        switch (K(this.g.badge, "_live", !1),
        K(this.g.badge, "_duration", !1),
        c) {
        case dp:
            K(this.g.badge, "_duration", !0);
            L(this.g.badge, O.g.K.G("videosListScene.tileBadge.soon"));
            break;
        case cp:
            K(this.g.badge, "_live", !0);
            L(this.g.badge, O.g.K.G("playerScene.liveBadge"));
            break;
        case ep:
            K(this.g.badge, "_duration", !0),
            c = this.g.badge,
            b = String,
            e && (f = am(e),
            f = [f.oe, f.Hd, f.Ee].filter(Boolean).join(":")),
            L(c, b(f))
        }
    M(this.g.badge, a);
    this.C = e || 0;
    this.J = g || null;
    this.O = d || null;
    this.gb() && this.u && bp(this)
}
;
k.xd = function() {
    return $o(this.Ve(), Mg(this))
}
;
k.ji = function(a) {
    0 < a ? (this.g.progress.style.width = Ke(a, 3, 100) + "%",
    mb(this.g.ze)) : nb(this.g.ze)
}
;
k.Vf = function() {
    Do.prototype.Vf.call(this);
    nb(this.g.ze)
}
;
k.Ve = function() {
    return {
        jl: O.g.i.preview !== Pl
    }
}
;
function bp(a) {
    mb(a.g.preview);
    a.B("play-video-preview", {
        trailer: a.O,
        xh: a.g.preview,
        Tk: a.g.Za.getBoundingClientRect(),
        duration: a.C,
        Jb: a.J
    })
}
var cp = "live"
  , ep = "duration"
  , dp = "soon";
function fp(a) {
    var b = {};
    var c = '<div class="w-album-tile">\n    <div class="w-album-tile__cover" data-export-id="cover">\n        \t' + E(of, {
        name: "movie"
    }, "__null__", b) + '\n\t</div>\n    <div class="w-album-tile__info">\n        <div class="w-album-tile__info-long-block" data-export-id="mainTitle"></div>\n        <div class="w-album-tile__info-short-block" data-export-id="subTitle">\n            <div data-export-id="subTitleFirstLine"></div>\n            <div data-export-id="subTitleSecondLine"></div>\n        </div>\n    </div>\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "__null__":
            f.ib ? F(e) : f.ib = d;
            break;
        case "cover":
            f.Za ? F(e) : f.Za = d;
            break;
        case "mainTitle":
            f.wb ? F(e) : f.wb = d;
            break;
        case "subTitle":
            f.Va ? F(e) : f.Va = d;
            break;
        case "subTitleFirstLine":
            f.Kd ? F(e) : f.Kd = d;
            break;
        case "subTitleSecondLine":
            f.Ld ? F(e) : f.Ld = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        ib: null,
        Za: null,
        wb: null,
        Va: null,
        Kd: null,
        Ld: null
    }, a)
}
;function gp() {
    Do.apply(this, arguments)
}
z(gp, Do);
gp.prototype.xd = function() {
    return fp(Mg(this))
}
;
gp.prototype.ji = function() {}
;
function hp(a) {
    a = void 0 === a ? {} : a;
    var b = a.yb
      , c = a.je;
    Ho.call(this, {
        Id: a.Id,
        Il: ip,
        Ae: a.Ae,
        Eh: a.Eh
    });
    var d = this;
    this.oc = b;
    this.ya = null;
    this.i.on("items-added", function(e, f) {
        d.B("media-list-items-added", d.Cd, d.cd, f, d.i.He)
    });
    c && jp(this, c)
}
z(hp, Ho);
hp.prototype.clear = function(a, b) {
    (a || this.i.size()) && Ho.prototype.clear.call(this, b)
}
;
function kp(a, b, c, d, e) {
    a.cd = c;
    a.Cd = d || "";
    Ho.prototype.Ek.call(a, b, a.oc && function(f) {
        return a.oc(a.Cd, f)
    }
    , void 0 === e ? "" : e)
}
function jp(a, b) {
    var c = void 0 === c ? lp : c;
    var d = void 0 === d ? mp : d;
    a.ya = b;
    c && (a.$ = function() {
        return c(b)
    }
    );
    d && (a.Pb = function() {
        return d(b)
    }
    )
}
hp.prototype.Uc = function() {
    var a = this.g;
    return {
        xb: a.xb,
        Hb: a.Hb,
        ia: a.ia,
        Ua: a.Ua
    }
}
;
hp.prototype.xd = function() {
    return qo(Mg(this))
}
;
function Uo(a, b, c) {
    var d = np(b);
    b = b !== ip;
    if (c && a.ya === c.constructor)
        c.Xe(d, b);
    else if (a.ya)
        return c = new a.ya(d,b),
        c instanceof ap && O.g.i.preview !== Pl && (c.on("play-video-preview", function(e, f) {
            a.B("play-video-preview", f)
        }),
        c.on("stop-video-preview", function() {
            a.B("stop-video-preview")
        })),
        c
}
hp.prototype.Sd = function() {
    return {
        tc: [this.g.Bh],
        ac: []
    }
}
;
function np(a) {
    var b = a.u
      , c = a.image
      , d = a.Ne
      , e = a.trailer
      , f = a.duration
      , g = a.platform
      , h = a.Oa
      , l = a.type
      , m = a.date
      , n = a.v
      , q = a.ta
      , u = a.ra;
    b = a.ma || b;
    c = {
        id: a.id,
        wb: a.title,
        Za: c ? c.url : void 0,
        Va: {
            Eg: b ? b.g() : ""
        },
        ta: q
    };
    !c.Va.Eg && l === Oe && n && n.length && (c.Va.Eg = n.map(function(w) {
        return w.name
    }).join(", "));
    u ? c.Va.bj = u : d && (d = jm(d, O.g.K),
    m && (d += " · " + km(m.getTime())),
    c.Va.bj = d);
    if (a instanceof Ne)
        if (c.trailer = e || void 0,
        c.duration = f,
        c.platform = g,
        c.Jb = a.Jb,
        l === Ue)
            switch (h) {
            case "upcoming":
                c.badge = dp;
                break;
            case "started":
            case "waiting":
                c.badge = cp;
                break;
            default:
                c.badge = ep
            }
        else
            l === Te && (c.badge = ep);
    return c
}
var ip = {
    id: "stub",
    title: "",
    image: {}
};
function lp(a) {
    var b = kc[O.device.info.Yb()];
    return b.width > b.height ? a === ap ? 4 : 5 : 2
}
function mp(a) {
    var b = kc[O.device.info.Yb()];
    return b.width > b.height ? a === ap ? 3 : 2 : a === ap ? 5 : 4
}
;function op(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-player__ui-layer" data-component="' + Ga(nh, {
            bl: !0
        }, "layer", c) + '">\n\t<div class="s-player__top-buttons" data-component="' + Ga(nh, {}, "topButtonsContainer", c) + '">\n\t\t<div class="s-player__layout-pin-left">\n\t\t\t' + E(uf, {
            icon: "arrow-left"
        }, "goBack", c) + '\n\t\t</div>\n\t\t<div class="s-player__notification-place">\n\t\t\t<div class="s-player__notification" data-export-id="notification">\n\t\t\t\t<div class="s-player__notification-text" data-export-id="notificationText"></div>\n\t\t\t\t' + E(Xn, {
            label: "",
            bd: !0
        }, "reload", c) + '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="s-player__layout-pin-right">\n\t\t\t' + E(uf, {
            icon: "skip-forward",
            nf: !0,
            rd: !0
        }, "skip", c) + "\n\t\t\t" + E(uf, {
            icon: "info-circle"
        }, "techInfo", c) + '\n\t\t</div>\n\t</div>\n\t<div class="s-player__title" data-export-id="titleContainer">\n\t\t<span data-export-id="title"></span>\n\t</div>\n\t<div class="s-player__advertisement-gap" data-export-id="adsGap"></div>\n\t<div class="s-player__info" data-component="' + Ga(nh, {}, "infoContainer", c) + '">\n\n\t\t<div class="s-player__layout-pin-left">\n\t\t\t<span class="s-player__live-badge" data-export-id="liveBadge"></span>\n\t\t\t<span class="s-player__statistic" data-export-id="rawInfoContainer"></span>\n\t\t</div>\n\n\t\t<div class="s-player__layout-pin-right">\n\t\t\t' + E(uf, {
            icon: "live",
            nf: !0,
            rd: !0,
            modifiers: ["_back-to-live"]
        }, "backToLive", c) + '\n\t\t\t<span class="s-player__time" data-export-id="vodTimeContainer">\n\t\t\t\t' + E(Ln, {}, "position", c) + '\n\t\t\t\t<span class="s-player__time-delimiter">/</span>\n\t\t\t\t' + E(Ln, {}, "duration", c) + '\n\t\t\t</span>\n\t\t\t<span class="s-player__countdown" data-export-id="adsTimeContainer">\n\t\t\t\t' + E(Ln, {}, "countdown", c) + '\n\t\t\t</span>\n\t\t</div>\n\n\t</div>\n\t<div class="s-player__progress-bar-container" data-export-id="progressBarContainer">\n\t\t' + E(Zn, {
            x: Q(48),
            y: Q(5) - Q(4) / 2,
            w: Q(640) - 2 * Q(48),
            Hc: Q(4),
            progress: 0,
            Tb: no,
            al: !0,
            Vl: !1
        }, "progressBar", c) + '\n\t</div>\n\t<div class="s-player__bottom-buttons" data-component="' + Ga(nh, {}, "bottomButtonsContainer", c) + '">\n\t\t<div class="s-player__layout-pin-left">\n\t\t\t' + E(uf, {
            pe: tf
        }, "owner", c) + "\n\t\t\t" + E(uf, {
            icon: "add-square",
            nf: !0,
            rd: !0
        }, "subscription", c) + '\n\t\t</div>\n\t\t<div class="s-player__layout-pin-center">\n\t\t\t' + E(uf, {
            icon: "like"
        }, "like", c) + '\n\t\t\t<div class="s-player__play-pause-container">\n\t\t\t\t' + E(po, {
            icon: "pause"
        }, "playPause", c) + "\n\t\t\t</div>\n\t\t\t" + E(uf, {
            icon: "favorite"
        }, "favorite", c) + '\n\t\t</div>\n\t\t<div class="s-player__layout-pin-right">\n\t\t\t' + E(uf, {
            icon: "settings"
        }, "settings", c) + '\n\t\t</div>\n\t</div>\n\t<div class="s-player__bottom-container" data-export-id="bottomContainer">\n\t\t<div class="s-player__related-header" data-export-id="playlistTitle"></div>\n\t\t<div class="s-player__related-subtitle" data-export-id="playlistInfo"></div>\n\t\t<div data-component="' + Ga(nh, {}, "playlistContainer", c) + '">\n\t\t\t' + E(hp, {
            Ae: !1,
            Id: !0,
            je: ap,
            yb: this.vh
        }, "playlist", c) + "\n\t\t</div>\n\t</div>\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "layer":
                g.Zb ? F(f) : g.Zb = e;
                break;
            case "topButtonsContainer":
                g.Nd ? F(f) : g.Nd = e;
                break;
            case "infoContainer":
                g.qe ? F(f) : g.qe = e;
                break;
            case "bottomButtonsContainer":
                g.de ? F(f) : g.de = e;
                break;
            case "playlistContainer":
                g.Ti ? F(f) : g.Ti = e;
                break;
            case "goBack":
                g.sa ? F(f) : g.sa = e;
                break;
            case "reload":
                g.reload ? F(f) : g.reload = e;
                break;
            case "skip":
                g.Nc ? F(f) : g.Nc = e;
                break;
            case "techInfo":
                g.Ea ? F(f) : g.Ea = e;
                break;
            case "backToLive":
                g.mc ? F(f) : g.mc = e;
                break;
            case "position":
                g.position ? F(f) : g.position = e;
                break;
            case "duration":
                g.duration ? F(f) : g.duration = e;
                break;
            case "countdown":
                g.uf ? F(f) : g.uf = e;
                break;
            case "progressBar":
                g.aa ? F(f) : g.aa = e;
                break;
            case "owner":
                g.ma ? F(f) : g.ma = e;
                break;
            case "subscription":
                g.Ab ? F(f) : g.Ab = e;
                break;
            case "like":
                g.Kc ? F(f) : g.Kc = e;
                break;
            case "playPause":
                g.Lc ? F(f) : g.Lc = e;
                break;
            case "favorite":
                g.Gc ? F(f) : g.Gc = e;
                break;
            case "settings":
                g.Fe ? F(f) : g.Fe = e;
                break;
            case "playlist":
                g.fa ? F(f) : g.fa = e;
                break;
            case "notification":
                g.notification ? F(f) : g.notification = e;
                break;
            case "notificationText":
                g.oh ? F(f) : g.oh = e;
                break;
            case "titleContainer":
                g.Qf ? F(f) : g.Qf = e;
                break;
            case "title":
                g.title ? F(f) : g.title = e;
                break;
            case "adsGap":
                g.mg ? F(f) : g.mg = e;
                break;
            case "liveBadge":
                g.fd ? F(f) : g.fd = e;
                break;
            case "rawInfoContainer":
                g.bc ? F(f) : g.bc = e;
                break;
            case "vodTimeContainer":
                g.Ph ? F(f) : g.Ph = e;
                break;
            case "adsTimeContainer":
                g.ng ? F(f) : g.ng = e;
                break;
            case "progressBarContainer":
                g.Jf ? F(f) : g.Jf = e;
                break;
            case "bottomContainer":
                g.qf ? F(f) : g.qf = e;
                break;
            case "playlistTitle":
                g.xe ? F(f) : g.xe = e;
                break;
            case "playlistInfo":
                g.Hf ? F(f) : g.Hf = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            Zb: null,
            Nd: null,
            qe: null,
            de: null,
            Ti: null,
            sa: null,
            reload: null,
            Nc: null,
            Ea: null,
            mc: null,
            position: null,
            duration: null,
            uf: null,
            aa: null,
            ma: null,
            Ab: null,
            Kc: null,
            Lc: null,
            Gc: null,
            Fe: null,
            fa: null,
            notification: null,
            oh: null,
            Qf: null,
            title: null,
            mg: null,
            fd: null,
            bc: null,
            Ph: null,
            ng: null,
            Jf: null,
            qf: null,
            xe: null,
            Hf: null
        }, b)
    }
    .call(a)
}
;function pp(a) {
    N.call(this);
    var b = this;
    this.g = a;
    this.l = function(c, d) {
        return qp(b, d)
    }
}
z(pp, N);
pp.prototype.init = function() {
    rp(this);
    var a = this.j.I;
    a && zl(this.g, a.model)
}
;
pp.prototype.ha = function() {
    this.i && this.i.ob();
    yl(this.g)
}
;
function rp(a) {
    a.i = a.j.g(function(b) {
        b && zl(a.g, b.model)
    });
    a.g.once("subscribed", function() {
        a.g.on("get-events", a.l)
    });
    a.g.once("reset", function() {
        a.g.off("get-events", a.l)
    })
}
function qp(a, b) {
    b.forEach(function(c) {
        c && c.type === Aj && a.B("video-events-video-view", c)
    })
}
;function sp(a, b) {
    N.call(this);
    this.l = {};
    this.F = pg;
    this.u = {};
    this.g = {};
    this.i = {};
    this.D = a;
    this.C = b;
    this.o = new Ck;
    this.j = !0
}
z(sp, N);
k = sp.prototype;
k.init = function() {
    var a = this;
    Dk(this.o, Fk(this.D.L(), "click", function() {
        a.B("input-interaction")
    }));
    var b = {};
    this.u = (b[15] = function() {
        a.v.play(Ym);
        return !0
    }
    ,
    b[16] = function() {
        a.v.pause(Ym);
        return !0
    }
    ,
    b[39] = function() {
        fn(a.v, Ym);
        return !0
    }
    ,
    b[18] = function() {
        return a.B("input-seek")
    }
    ,
    b[19] = function() {
        return a.B("input-seek")
    }
    ,
    b[17] = function() {
        a.C.sa();
        return !0
    }
    ,
    b);
    this.F = tp(this);
    this.o.add(this.J, "ui-controller-event-forward", function(c, d, e) {
        var f = ya.apply(3, arguments);
        if (e === d.vd) {
            var g = p(f).next().value;
            setTimeout(function() {
                a.j = !g
            }, 0)
        }
    })
}
;
k.ha = function() {
    this.j = !0;
    this.u = {};
    this.F();
    this.o.clear()
}
;
k.da = function(a, b) {
    if (20 === a && !up(this, a))
        return this.B("input-back"),
        !0;
    [15, 16, 39, 18, 19, 17].includes(a) && (this.j = !1);
    if (this.j)
        return this.B("input-interaction"),
        !0;
    this.B("input-interaction");
    if (up(this, a))
        return !0;
    var c = this.u[a];
    return c ? c(a, b) : !1
}
;
function up(a, b) {
    return vp(a.g[b]) || vp(a.i[b])
}
function tp(a) {
    function b(d) {
        return function(e) {
            e = O.device.input.le(e);
            var f = !!a.l[e]
              , g = "keydown" === d;
            a.l[e] = g;
            if (!a.j) {
                if (!f && g) {
                    var h = a.g[e];
                    h && h.length && (a.g[e] = wp(e, h))
                }
                f && !g && (f = a.i[e]) && f.length && (a.i[e] = wp(e, f))
            }
        }
    }
    var c = ["keydown", "keyup"].map(function(d) {
        var e = b(d);
        document.addEventListener(d, e);
        return function() {
            return document.removeEventListener(d, e)
        }
    });
    return function() {
        c.forEach(function(d) {
            return d()
        });
        a.l = {};
        a.g = {};
        a.i = {}
    }
}
function xp(a, b) {
    function c() {
        return b({
            create: c,
            destroy: d,
            Af: m,
            Rg: l,
            bo: e,
            Sk: h
        })
    }
    function d() {
        n.forEach(function(w) {
            return w()
        });
        q.forEach(function(w) {
            return w()
        });
        n = [];
        q = [];
        g()
    }
    function e(w, x, J) {
        var y = w.shift();
        w.length ? f([y], function() {
            return e(w, x, J)
        }, J) : f([y], x, J)
    }
    function f(w, x, J) {
        m(Object.values(hb), function(y) {
            w.includes(y) ? x(y) : J(y)
        }, !1)
    }
    function g() {
        u.forEach(function(w) {
            return w()
        });
        u = []
    }
    function h(w) {
        u.push(xp(a, w))
    }
    function l(w, x, J) {
        q.push(a.Rg(w, x, J))
    }
    function m(w, x, J) {
        q.push(a.Af(w, x, J))
    }
    var n = []
      , q = []
      , u = [];
    c();
    return d
}
k.Af = function(a, b, c) {
    var d = Hk({
        tf: b,
        pi: void 0 === c ? !0 : c
    });
    a = p(a);
    for (b = a.next(); !b.done; b = a.next())
        b = b.value,
        this.g[b] || (this.g[b] = []),
        this.g[b].push(d);
    return function() {
        d.I && (d.I = null)
    }
}
;
k.Rg = function(a, b, c) {
    var d = Hk({
        tf: b,
        pi: void 0 === c ? !0 : c
    });
    a = p(a);
    for (b = a.next(); !b.done; b = a.next())
        b = b.value,
        this.i[b] || (this.i[b] = []),
        this.i[b].push(d);
    return function() {
        d.I && (d.I = null)
    }
}
;
function wp(a, b) {
    for (var c = [].concat(r(b)), d = p(c), e = d.next(); !e.done; e = d.next())
        if (e = e.value,
        e.I) {
            var f = e.I;
            e.I = null;
            f.tf(a)
        }
    return c.length === b.length ? [] : b
}
function vp(a) {
    return !(!Array.isArray(a) || !a.filter(function(b) {
        return null !== b.I && b.I.pi
    }).length)
}
;function yp(a) {
    N.call(this);
    this.j = a;
    this.i = Ce();
    this.g = null
}
z(yp, N);
function zp(a, b) {
    a.g && a.g();
    return b ? (a.profile = Ce(),
    Promise.resolve()) : Ap(a)
}
function Ap(a) {
    return Yi(a.j.Le, {
        path: "method/users.get",
        U: {
            fields: "photo_200, photo_50"
        }
    }, bk).then(function(b) {
        b && (a.profile = b)
    })
}
t.Object.defineProperties(yp.prototype, {
    profile: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.i
        },
        set: function(a) {
            this.i = a;
            this.B("change-profile", this.profile)
        }
    }
});
function Bp(a, b) {
    N.call(this);
    this.l = b;
    this.u = a
}
z(Bp, N);
Bp.prototype.o = function() {
    return []
}
;
function Cp(a, b) {
    a.o().forEach(function(c) {
        Dp(a, c, b)
    })
}
function Ep(a) {
    return a.l.uc.classList.contains("_scroll-down")
}
function Fp(a) {
    a.l.uc.classList.remove("_scroll-down")
}
function Gp(a) {
    window.innerHeight > window.innerWidth ? fo(a, {
        oi: {
            width: Q(360),
            height: Q(10)
        },
        coords: {
            x: Q(24),
            y: Q(5) - Q(4) / 2,
            w: Q(360) - 2 * Q(24),
            Hc: Q(4)
        }
    }) : fo(a, {
        oi: {
            width: Q(640),
            height: Q(10)
        },
        coords: {
            x: Q(48),
            y: Q(5) - Q(4) / 2,
            w: Q(640) - 2 * Q(48),
            Hc: Q(4)
        }
    })
}
Bp.prototype.v = function(a) {
    Ub(this.u, a);
    [this.u.L()].concat(r(this.l.Sg)).forEach(function(b) {
        return M(b, a)
    })
}
;
function Hp(a) {
    return [a.u.L()].concat(r(a.l.Sg)).some(function(b) {
        return "none" !== lb(b)
    })
}
function Ip(a, b) {
    K(a.l.gd, "_loader-shown", b)
}
function Jp(a, b) {
    M(a.l.th, b);
    b || a.l.blur.clear()
}
function Dp(a, b, c) {
    b instanceof Rb ? Ub(b, c) : M(b, c);
    a.B("ui-element-visibility-change", b, c)
}
t.Object.defineProperties(Bp.prototype, {
    i: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.l
        }
    }
});
function Kp(a, b, c) {
    Bp.call(this, a.Zb, b);
    this.g = a;
    this.j = c;
    Cp(this, !1)
}
z(Kp, Bp);
Kp.prototype.o = function() {
    return [this.i.Qf, this.i.de, this.i.qf, this.i.Nd, this.i.Jf, this.i.qe, this.i.Ea]
}
;
Kp.prototype.nb = function(a) {
    L(this.g.title, a)
}
;
function Lp(a, b) {
    b ? a.g.Lc.enable() : a.g.Lc.disable()
}
function Mp(a, b) {
    b ? a.g.Fe.enable() : a.g.Fe.disable()
}
function Np(a, b, c) {
    a = a.g;
    var d = a.notification
      , e = a.reload;
    L(a.oh, b);
    M(e.L(), null !== c);
    null !== c && e.nb(c);
    mb(d)
}
function Op(a) {
    var b = window.innerWidth > window.innerHeight
      , c = a.g.Ab;
    c.g = b;
    c.g || xf(c, !1);
    a = a.g.mc;
    a.g = b;
    a.g || xf(a, !1)
}
function Pp(a, b) {
    a.g.Lc.icon.i(b ? "pause" : "play")
}
function Qp(a, b) {
    a = a.g.Kc;
    a.icon.i(b ? "like-filled" : "like");
    K(a.L(), "_like-checked", b)
}
function Rp(a, b) {
    a.g.Gc.icon.i(b ? "favorite-filled" : "favorite")
}
function Sp(a, b) {
    var c = a.g.Ab
      , d = c.title;
    c.icon.i(b ? "done" : "add-square");
    L(d, a.j.G(b ? "group.alreadySubscribed" : "group.subscribe"))
}
function Tp(a) {
    L(a.g.xe, "");
    a.g.fa.clear();
    a.g.fa.hide();
    Up(a, !1);
    Vp(a, 0)
}
function Up(a, b) {
    M(a.g.Hf, b);
    zd(a.g.xe, "with-subtitle", b)
}
function Vp(a, b) {
    L(a.g.Hf, [a.j.G("playerScene.playlist"), "·", a.j.G("playerScene.videoPlural", {
        video: b
    })].join(" "))
}
function Wp(a, b) {
    a = a.g;
    [a.Nd.L(), a.Qf, a.qe.L(), a.de.L(), a.qf].forEach(function(c) {
        return K(c, "_invisible", b)
    })
}
function Xp(a, b) {
    K(a.g.aa.L(), "_invisible", !b)
}
function Yp(a, b) {
    io(a.g.aa);
    $n(a.g.aa, {
        progress: b
    })
}
function Zp(a, b) {
    b ? a.g.aa.enable() : a.g.aa.disable()
}
t.Object.defineProperties(Kp.prototype, {
    i: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        }
    }
});
function $p(a, b, c) {
    Kp.call(this, a, b, c);
    this.F = this.D = ""
}
z($p, Kp);
$p.prototype.o = function() {
    return Kp.prototype.o.call(this).concat([this.i.Ph])
}
;
$p.prototype.setPosition = function(a) {
    this.g.position.setTime(a)
}
;
function aq(a) {
    L(a.g.bc, a.D + " · " + a.F)
}
;function bq(a, b, c) {
    Kp.call(this, a, b, c);
    this.C = "";
    this.F = !1;
    this.D = "";
    L(a.fd, this.j.G("playerScene.liveBadge"));
    L(a.mc.title, this.j.G("playerScene.backToAir"))
}
z(bq, Kp);
bq.prototype.o = function() {
    return Kp.prototype.o.call(this).concat([this.i.fd, this.i.mc, this.l.Cf, this.l.blur.L()])
}
;
bq.prototype.v = function(a) {
    Kp.prototype.v.call(this, a);
    M(this.l.Cf, !a);
    this.F && M(this.l.Xg, !a)
}
;
function cq(a, b) {
    var c = am(Math.abs(b - Date.now()));
    b = c.oe;
    c = c.Hd;
    var d = "";
    b && (d += " " + a.j.G("time.hoursPlural", {
        hours: Number(b)
    }));
    c && (d += " " + a.j.G("time.minutesPlural", {
        minutes: Number(c)
    }));
    a.D = d + " " + a.j.G("playerScene.onTheAir");
    dq(a)
}
function eq(a, b) {
    var c = a.j;
    b = 1E3 <= b ? Je(b || 0) + "  " + c.G("playerScene.spectators") : c.G("playerScene.spectatorsPluralCompound", {
        spectators: b
    });
    a.C = b;
    dq(a)
}
function dq(a) {
    L(a.g.bc, a.C + " · " + a.D)
}
function fq(a, b) {
    var c = a.g.bc
      , d = new Date;
    d.setHours(0, 0, 0, 0);
    d = d.getTime() + 864E5;
    var e = d + 864E5
      , f = Date.now();
    if (f < b.getTime()) {
        d = Math.abs(f - d);
        e = Math.abs(f - e);
        f = Math.abs(f - b.getTime());
        var g = "";
        f < d ? (g += a.j.G("playerScene.today"),
        g += " " + a.j.G("playerScene.in") + " ",
        g += Yd(a.j.time, b, "HH:mm")) : f < e ? (g = a.j.G("playerScene.tomorrow"),
        g += " " + a.j.G("playerScene.in") + " ",
        g += Yd(a.j.time, b, "HH:mm")) : (d = a.j.time,
        d.g.ad("datetime.dateTimeFormats.full") ? (f = d.g.Od("datetime.dateTimeFormats.full", {
            date: $d(d, "date", "full"),
            time: $d(d, "time", "medium")
        }),
        g = Yd(d, b, f)) : g = "");
        a = a.j.G("playerScene.upcomingStartTime") + ": " + g;
        L(c, a)
    } else
        L(c, a.j.G("playerScene.liveStartSoon"))
}
function gq(a, b) {
    var c = Date.now();
    b = b.getTime();
    c < b ? a.l.Bf.setTime(Math.abs(c - b)) : a.l.Bf.setTime(0)
}
;function hq(a, b, c) {
    Bp.call(this, a.Zb, b);
    this.g = a;
    this.j = c;
    Cp(this, !1)
}
z(hq, Bp);
hq.prototype.o = function() {
    return [this.i.Nd, this.i.Nc, this.i.mg, this.i.ng, this.i.Jf, this.i.qe]
}
;
function iq(a, b, c) {
    b = void 0 === b ? 1 : b;
    c = void 0 === c ? 1 : c;
    var d = a.j.G("playerScene.advertisement");
    1 < c ? L(a.g.bc, d + " · " + b + " " + a.j.G("playerScene.of") + " " + c) : L(a.g.bc, d)
}
function jq(a, b) {
    Dp(a, a.g.Nc.L(), b)
}
t.Object.defineProperties(hq.prototype, {
    i: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        }
    }
});
function kq(a, b) {
    return function() {
        var c = {};
        var d = '<div class="p-settings__item ' + Ha(this.selected ? "_selected" : "") + '" data-export-id="item">\n\t<span class="p-settings__item-info">\n\t\t<span class="p-settings__item-name">' + Ha(this.name) + "</span>\n\t\t";
        this.description && (d += '\n\t\t\t<span class="p-settings__item-desc">· ' + Ha(this.description) + "</span>\n\t\t");
        d += '\n\t</span>\n\t<span class="p-settings__selected-icon">' + E(of, {
            name: "done"
        }, "__null__", c) + "</span>\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "__null__":
                g.ib ? F(f) : g.ib = e;
                break;
            case "item":
                g.item ? F(f) : g.item = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            ib: null,
            item: null
        }, b)
    }
    .call(a)
}
;function lq(a) {
    Rb.call(this);
    this.g = kq(a, If(this));
    this.i = a.name;
    this.P = "click";
    Sb(this, kb(this.g.root))
}
z(lq, Rb);
lq.prototype.da = function(a, b) {
    return 21 === a ? (this.B(this.P),
    !0) : Rb.prototype.da.call(this, a, b)
}
;
t.Object.defineProperties(lq.prototype, {
    value: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.i
        }
    }
});
function mq(a, b) {
    return function() {
        var c = this
          , d = {}
          , e = "";
        e += '<div class="p-settings__wrapper" data-export-id="wrapper">\n\t<div class="p-settings__header">\n\t\t<span class="p-settings__header-title" data-export-id="title">' + Ha(this.title) + '</span>\n\t\t<span class="p-settings__close-button">' + E(uf, {
            icon: "cancel"
        }, "close", d) + '</span>\n\t</div>\n    <div class="p-settings__items" data-export-id="itemsContainer">\n\t\t';
        this.items.forEach(function(f, g) {
            e += "\n\t\t\t" + E(lq, {
                name: f.name,
                description: f.description,
                selected: c.selected === g
            }, "items", d) + "\n\t\t"
        });
        e += "\n\t</div>\n</div>\n";
        return I(e, d, function(f, g, h) {
            switch (g) {
            case "root":
                h.root ? F(g) : h.root = f;
                break;
            case "close":
                h.close ? F(g) : h.close = f;
                break;
            case "items":
                h.items.push(f);
                break;
            case "wrapper":
                h.sd ? F(g) : h.sd = f;
                break;
            case "title":
                h.title ? F(g) : h.title = f;
                break;
            case "itemsContainer":
                h.Fb ? F(g) : h.Fb = f;
                break;
            default:
                H(g)
            }
        }, {
            root: null,
            close: null,
            items: [],
            sd: null,
            title: null,
            Fb: null
        }, b)
    }
    .call(a)
}
;function nq(a) {
    Bf.call(this, {
        Oc: !0,
        Na: !1,
        Ga: a.Ga
    });
    var b = this;
    ec(this, "p-settings");
    this.g = mq(a, If(this));
    this.u = a.selected;
    this.ud = "close-needed";
    oq(this);
    this.N = this.Zj.bind(this);
    this.g.close.button.on(this.g.close.button.P, function() {
        b.close()
    });
    this.i = {
        root: this.g.root,
        Pe: [this.g.close]
    }
}
z(nq, Bf);
k = nq.prototype;
k.Dd = function() {
    return "settings"
}
;
k.close = function() {
    this.g.sd.classList.remove("_active");
    this.o && this.o.ub.removeEventListener("click", this.N);
    Bf.prototype.close.call(this)
}
;
k.La = function() {
    Bf.prototype.La.call(this);
    this.g.sd.classList.add("_active")
}
;
k.bb = function(a) {
    Bf.prototype.bb.call(this, a);
    this.o && this.o.ub.addEventListener("click", this.N)
}
;
function oq(a) {
    a.T(a.g.items[a.u]);
    a.g.items.forEach(function(b, c) {
        b.on(b.P, function() {
            var d = a.u !== c;
            b.g.item.classList.add("_selected");
            a.B("item-selected", b.value, c, d);
            a.B("popup-interaction", pq);
            var e = a.g.items[a.u];
            d && e && e.g.item.classList.remove("_selected");
            a.u = c
        })
    })
}
k.Zj = function(a) {
    a.target === this.o.ub && this.B(this.ud)
}
;
var pq = "item-selected";
function qq(a, b) {
    switch (b) {
    case "4320p":
        return a.G("settings.quality.8K");
    case "2160p":
        return a.G("settings.quality.4K");
    case "1440p":
        return a.G("settings.quality.QHD");
    case "1080p":
        return a.G("settings.quality.FHD");
    case "720p":
        return a.G("settings.quality.HD");
    default:
        return ""
    }
}
function rq(a, b, c) {
    var d = Object.keys(b)
      , e = d.filter(function(f) {
        return "Auto" === b[f]
    });
    d = d.filter(function(f) {
        return "Auto" !== b[f]
    });
    d = [e[0]].concat(r(d));
    c = -1 === e.indexOf(c) ? d.indexOf(c) : 0;
    e = d.map(function(f) {
        f = b[f];
        var g = "settings.quality." + f.toLowerCase();
        return {
            name: a.ad(g) ? a.G(g) : f,
            description: qq(a, f)
        }
    });
    return {
        Rl: d,
        selected: c,
        items: e
    }
}
;function sq(a) {
    return function() {
        var b = "";
        b += '<div class="p-tech-info">\n\t<table>\n\t\t';
        this.Fh.forEach(function(c) {
            b += '\n\t\t\t<tr>\n\t\t\t\t<td class="p-tech-info__title">' + Ha(c.title) + ':</td>\n\t\t\t\t<td class="p-tech-info__value">' + Ha(c.value) + "</td>\n\t\t\t</tr>\n\t\t"
        });
        b += "\n\t</table>\n</div>\n";
        return I(b, {}, function(c, d, e) {
            switch (d) {
            case "root":
                e.root ? F(d) : e.root = c;
                break;
            default:
                H(d)
            }
        }, {
            root: null
        }, void 0)
    }
    .call(a)
}
;function tq(a) {
    return function() {
        var b = "";
        b += '<div class="p-agreements-description">\n\t';
        this.items.forEach(function(c) {
            b += '\n\t\t\t<div class="p-agreements-description_item">\n                <div class="p-agreements-description_item-title">' + Ha(c.title) + ':</div>\n                <div class="p-agreements-description_item-url">' + Ha(c.url) + "</div>\n\t\t\t</div>\n\t\t"
        });
        b += "\n</div>";
        return I(b, {}, function(c, d, e) {
            switch (d) {
            case "root":
                e.root ? F(d) : e.root = c;
                break;
            default:
                H(d)
            }
        }, {
            root: null
        }, void 0)
    }
    .call(a)
}
;function uq(a) {
    return function() {
        return I('<div class="p-multi-level-description">\n\t<div class="p-multi-level-description__first-level">\n\t\t' + Ha(this.Yk) + '\n\t</div>\n\t<div class="p-multi-level-description__second-level">\n\t\t' + Ha(this.Bl) + "\n\t</div>\n</div>\n", {}, function(b, c, d) {
            switch (c) {
            case "root":
                d.root ? F(c) : d.root = b;
                break;
            default:
                H(c)
            }
        }, {
            root: null
        }, void 0)
    }
    .call(a)
}
;function vq(a, b) {
    return function() {
        var c = {};
        var d = '<div>\n\t<div class="w-dialog-block__icon">\n\t\t';
        this.icon && (d += "\n\t\t\t" + E(of, {
            name: this.icon
        }, "icon", c) + "\n\t\t");
        d += '\n\t</div>\n\t<div class="w-dialog-block__title" data-export-id="title"> ' + Ha(this.title || "") + ' </div>\n\t<div class="w-dialog-block__description" data-export-id="description">\n\t\t';
        this.description && "string" === typeof this.description && (d += "\n\t\t\t " + Ha(this.description) + "\n\t\t");
        d += '\n\t</div>\n\t<div class="w-dialog-block__actions" data-export-id="actions">\n\t';
        if (this.actions) {
            d += "\n\t\t";
            for (var e = 0; e < this.actions.length; e++)
                d += "\n\t\t\t" + E(Xn, {
                    label: this.actions[e].label,
                    value: this.actions[e].value,
                    bd: !0
                }, "buttons", c) + "\n\t\t";
            d += "\n\t"
        }
        return I(d + "\n\t</div>\n</div>\n", c, function(f, g, h) {
            switch (g) {
            case "root":
                h.root ? F(g) : h.root = f;
                break;
            case "icon":
                h.icon ? F(g) : h.icon = f;
                break;
            case "buttons":
                h.buttons.push(f);
                break;
            case "title":
                h.title ? F(g) : h.title = f;
                break;
            case "description":
                h.description ? F(g) : h.description = f;
                break;
            case "actions":
                h.actions ? F(g) : h.actions = f;
                break;
            default:
                H(g)
            }
        }, {
            root: null,
            icon: null,
            buttons: [],
            title: null,
            description: null,
            actions: null
        }, b)
    }
    .call(a)
}
;function wq(a, b) {
    Yb.call(this, a);
    var c = this;
    this.g = vq({
        icon: b.icon,
        title: b.title,
        description: "string" === typeof b.description ? b.description : void 0,
        actions: b.actions
    }, {
        Vb: this.ae.bind(this)
    });
    Xb(this, "w-dialog-block");
    xq(this, b.actions);
    this.o.appendChild(kb(this.g.root));
    this.i = this.u.bind(this);
    a = Array.isArray(b.description);
    var d = [];
    b.description instanceof Node ? d.push(b.description) : a && (d = b.description.filter(function(e) {
        return e instanceof Node
    }));
    d.forEach(function(e) {
        c.g.description.appendChild(e)
    })
}
z(wq, Yb);
wq.prototype.va = function() {
    var a = this;
    Yb.prototype.va.call(this);
    (this.g.buttons || []).forEach(function(b) {
        b.on(b.P, a.i)
    })
}
;
wq.prototype.Ba = function() {
    var a = this;
    Yb.prototype.Ba.call(this);
    (this.g.buttons || []).forEach(function(b) {
        b.off(b.P, a.i)
    })
}
;
function yq(a, b) {
    a.j.slice().forEach(function(d) {
        Nb(a, d)
    });
    a.g = vq({
        icon: b.icon,
        title: b.title,
        description: "string" === typeof b.description ? b.description : void 0,
        actions: b.actions
    }, {
        Vb: a.ae.bind(a)
    });
    var c = a.g.buttons;
    a.isVisible() && (c || []).forEach(function(d) {
        d.on(d.P, a.i)
    });
    b.description && "string" !== typeof b.description && b.description instanceof Node && a.g.description.appendChild(b.description);
    a.o.replaceChild(kb(a.g.root), a.o.firstChild)
}
wq.prototype.u = function(a, b) {
    this.B("dialog-block-interaction", b)
}
;
function xq(a, b) {
    b = (b || []).findIndex(function(c) {
        return c.Sa
    });
    -1 !== b && a.T(a.g.buttons[b])
}
;function zq(a, b) {
    return function() {
        var c = {};
        var d = '<div class="p-dialog__wrapper" data-component="' + Ga(wq, {
            icon: this.icon,
            title: this.title,
            description: this.description,
            actions: this.actions
        }, "dialogBlock", c) + '"></div>\n';
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "dialogBlock":
                g.wa ? F(f) : g.wa = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            wa: null
        }, b)
    }
    .call(a)
}
;function Aq(a) {
    var b = a.name
      , c = a.icon
      , d = a.title
      , e = a.description
      , f = a.actions;
    Bf.call(this, {
        Na: a.Na,
        Oc: a.Oc,
        qd: a.qd,
        Ga: a.Ga
    });
    var g = this;
    this.u = b;
    this.g = zq({
        icon: c,
        title: d,
        description: e,
        actions: f
    }, Ef(this));
    ec(this, "p-dialog");
    this.g.wa.on("dialog-block-interaction", function(h, l) {
        g.B("popup-interaction", l)
    });
    this.i = {
        root: this.g.root,
        Pe: [this.g.wa]
    }
}
z(Aq, Bf);
Aq.prototype.Dd = function() {
    return this.u || Bf.prototype.Dd.call(this)
}
;
function Bq() {
    var a = O.device.info;
    return [{
        title: O.g.K.G("techInfoPopup.systemName"),
        value: a.type()
    }, {
        title: O.g.K.G("techInfoPopup.systemVersion"),
        value: a.version()
    }, {
        title: O.g.K.G("techInfoPopup.vendor"),
        value: a.Ze()
    }, {
        title: O.g.K.G("techInfoPopup.model"),
        value: a.model()
    }, {
        title: O.g.K.G("techInfoPopup.appVersion"),
        value: "20230324 | 88716df5"
    }]
}
function Cq(a) {
    var b = a.error;
    return new Aq({
        name: Dq,
        title: b.title,
        description: b.description,
        icon: b.icon,
        actions: b.actions,
        Na: a.Na,
        qd: !0,
        Ga: a.Ga
    })
}
function Eq(a, b) {
    function c(h) {
        return d ? h(d) : "unknown"
    }
    var d = a.model;
    a = a.data;
    var e = rq(O.g.K, a.Wi, a.url)
      , f = [{
        title: "Id",
        value: c(function(h) {
            return h.ta
        })
    }, {
        title: "Content type",
        value: c(function(h) {
            return h.type
        })
    }]
      , g = c(function(h) {
        return h.Oa
    });
    g && "unknown" !== g && f.push({
        title: "Live status",
        value: c(function(h) {
            return h.Oa
        })
    });
    f = f.concat([{
        title: "Restricted",
        value: c(function(h) {
            return h.zf
        })
    }, {
        title: "Quality",
        value: e.items[e.selected].name
    }, {
        title: "File type",
        value: a.mediaType
    }, {
        title: "State",
        value: b
    }]);
    b = [sq({
        Fh: Bq()
    }), sq({
        Fh: f
    })].map(function(h) {
        return kb(h.root)
    });
    return new Aq({
        name: Fq,
        Oc: !0,
        title: "Info",
        description: b,
        actions: [{
            label: O.g.K.G("buttons.close"),
            value: "cancel",
            Sa: !0
        }],
        Ga: !0
    })
}
function Ff() {
    var a = sq({
        Fh: Bq()
    });
    return new Aq({
        name: Fq,
        Oc: !0,
        title: O.g.K.G("techInfoPopup.title"),
        description: kb(a.root),
        actions: [{
            label: O.g.K.G("buttons.close"),
            value: "cancel",
            Sa: !0
        }],
        Ga: !0
    })
}
function Gq() {
    var a = O.g.K
      , b = uq({
        Yk: a.G("videosListScene.watchHistory.firstLevelDescription"),
        Bl: a.G("videosListScene.watchHistory.secondLevelDescription")
    });
    return new Aq({
        icon: "delete",
        name: Hq,
        Oc: !1,
        title: a.G("videosListScene.watchHistory.title"),
        description: kb(b.root),
        actions: [{
            label: a.G("buttons.clearHistory"),
            value: Iq
        }, {
            label: a.G("buttons.cancel"),
            value: Jq,
            Sa: !0
        }],
        Ga: !0
    })
}
var Iq = "yes"
  , Jq = "no"
  , Dq = "error"
  , Fq = "techInfo"
  , Hq = "clearWatchHistory";
function Kq(a, b, c, d, e, f, g) {
    N.call(this);
    var h = this;
    this.C = e;
    this.l = b;
    this.ra = f;
    this.$ = g;
    this.g = a;
    this.o = d;
    this.i = new Ck;
    this.N = !1;
    this.J = c;
    this.ja = Hk();
    this.u = this.j = this.D = null;
    this.vd = "controller-visibility-change";
    this.Te = "controller-loader-was-shown";
    this.F = new Uc(function() {
        Lq(h)
    }
    ,1E4);
    this.v = new Uc(function() {
        return Mq(h, !0)
    }
    ,1E3);
    this.g.on("ui-element-visibility-change", this.tj.bind(this))
}
z(Kq, N);
k = Kq.prototype;
k.$c = function() {
    return this.g
}
;
k.init = function(a, b) {
    Cp(this.g, !0);
    this.Ud(a, b.ga, b.fa);
    Nq(a.model);
    this.Td(a, b);
    oh(this.l, this.g.i.Zb);
    oh(this.l, this.g.i.de);
    oh(this.l, this.g.i.Lc);
    Oq(this)
}
;
k.ha = function(a, b, c) {
    (void 0 === c || c) && Cp(this.g, !1);
    Bm(a, this);
    Nq(null);
    b.l = {};
    b.g = {};
    b.i = {};
    this.F.stop();
    this.v.stop();
    a = this.g.g.aa;
    b = a.g.Je;
    eo(a, mo, b).clearRect(0, 0, b.width, b.height);
    Pq(this);
    this.u && (this.u.close(),
    this.u = null);
    this.i.clear()
}
;
function Oq(a) {
    a.l.T(null);
    a.l.focus()
}
k.Td = function(a, b) {
    var c = b.fa
      , d = b.ga
      , e = b.cb
      , f = b.Yc
      , g = b.Bb
      , h = b.input;
    b = b.Ya;
    1 < c.count() && (Qq(this, c, g),
    Rq(this, c));
    Sq(this);
    Tq(this, a.model);
    Uq(this, a.model);
    a.model.ma instanceof xe && Vq(this, a.model);
    var l = a.model.ma || a.model.u;
    a.model.type !== Oe && l && Wq(this, l, a.model);
    Xq(this, d, e);
    Yq(this, e, f, b);
    Zq(this, f, c);
    $q(this, e, h, g);
    ar(this, h, g);
    this.bg(e, a);
    br(this);
    O.g.i.l && cr(this, e, d, a)
}
;
k.Ud = function(a, b, c) {
    this.g.i.Lc.u = !0;
    1 >= c.count() && Tp(this.g);
    c = a.model;
    this.g.nb(c.title);
    var d = a.model.ma || a.model.u
      , e = a.model.v && a.model.v[0];
    e ? (d = this.g,
    e = e.$a[0] && e.$a[0].url || "",
    d.g.ma.Ic.src = e,
    M(d.g.ma.Ic, !!e),
    this.g.g.ma.disable()) : (e = this.g,
    d = d ? d.$a || "" : "",
    e.g.ma.Ic.src = d,
    M(e.g.ma.Ic, !!d),
    this.g.g.ma.enable());
    d = !!this.ra.kb;
    Qp(this.g, c.Qb.zc);
    e = this.g;
    Dp(e, e.g.Kc.L(), d);
    Rp(this.g, c.rc);
    e = this.g;
    Dp(e, e.g.Gc.L(), d);
    Sp(this.g, !(!c.ma || !c.ma.i));
    e = this.g;
    Dp(e, e.g.Ab.L(), d && c.ma instanceof xe && c.ma.id !== this.$.profile.id && a.model.type !== Oe);
    nb(this.g.g.notification);
    Mq(this, !1);
    Pp(this.g, b.j.autoplay);
    Gp(this.g.i.aa);
    Op(this.g);
    a = this.g;
    Dp(a, a.g.Ea, !!O.g.i.l)
}
;
function Lq(a) {
    Hp(a.g) && (a.g.v(!1),
    a.B(a.vd, !1))
}
function dr(a) {
    Hp(a.g) || (a.g.v(!0),
    a.B(a.vd, !0))
}
function Mq(a, b, c) {
    c = void 0 === c ? !0 : c;
    Ip(a.g, b);
    Lp(a.g, !b && c);
    b ? a.D = Date.now() : (b = Date.now() - a.D || 0,
    a.D && 0 < b && (a.B(a.Te, b),
    a.D = null))
}
function br(a) {
    a.i.add(O, "resolution-changed", function() {
        Op(a.g);
        Gp(a.g.i.aa)
    })
}
function cr(a, b, c, d) {
    var e = a.g.i.Ea;
    a.i.add(e.button, e.button.P, function() {
        var f = Eq(d, b.O);
        dn(c);
        f.bb(O);
        f.on("need-to-be-hidden", function() {
            en(c)
        })
    })
}
function er(a, b, c) {
    var d = b.g.I
      , e = d.getState()
      , f = d.V.i;
    if (!e && f)
        d.once(d.Lb, function() {
            er(a, b, c)
        });
    else
        ["idle", "loading", "error", "seeking", "waiting"].includes(e) ? zm(b, d.Kb, c, a) : ["ready", "playing", "paused", "ended"].includes(e) && c()
}
function Rq(a, b) {
    Dk(a.i, b.g.g(function(c) {
        c && Qo(a.g.i.fa)
    }))
}
k.bg = function(a) {
    var b = this;
    er(this, a, function() {
        Lp(b.g, !0)
    })
}
;
function $q(a, b, c, d) {
    zm(b, b.g.I.Ub, function() {
        a.Wf(d)
    }, a);
    a.i.add(c, "input-interaction", function() {
        a.F.stop();
        dr(a)
    });
    a.i.add(d, "ui-mouse-status-change", function(e, f) {
        f && (a.F.stop(),
        dr(a))
    })
}
k.Wf = function(a) {
    a.l || Ep(this.g) || this.F.start()
}
;
function ar(a, b, c) {
    a.i.add(b, "input-back", function() {
        Hp(a.g) ? (Lq(a),
        Ep(a.g) && (Fp(a.g),
        Oq(a))) : a.C.sa()
    });
    a.i.add(c, "ui-init", function() {
        Lq(a)
    })
}
function Yq(a, b, c, d) {
    function e(g) {
        return "seeking" === g || "waiting" === g || "loading" === g
    }
    var f = b.g.I;
    zm(b, f.Lb, function(g, h) {
        e(h) && a.v.start()
    }, a);
    zm(b, f.Bc, function(g, h, l) {
        e(h) && !e(l) && (a.v.stop(),
        Mq(a, !1, "error" !== l))
    }, a);
    a.i.add(d, "advertisement-load-started", function() {
        a.v.start()
    });
    a.i.add(d, "advertisement-load-ended", function() {
        a.v.stop();
        Mq(a, !1)
    });
    a.i.add(c, "error-recover-started", function() {
        a.v.start()
    });
    a.i.add(c, "error-recover-ended", function(g, h) {
        a.v.stop();
        Mq(a, !1, h !== fr)
    })
}
function Xq(a, b, c) {
    var d = a.g.i.Lc;
    a.i.add(d.button, d.button.P, function() {
        fn(b, Xm)
    });
    a.i.add(b, "play-request", function() {
        Pp(a.g, !0)
    });
    a.i.add(b, "pause-request", function() {
        Pp(a.g, !1)
    });
    d = c.g.I;
    zm(c, d.Rd, function() {
        Pp(a.g, !0)
    }, a);
    zm(c, d.dc, function() {
        Pp(a.g, !1)
    }, a)
}
function Qq(a, b, c) {
    var d = a.g.i.fa;
    a.i.add(c, "ui-init", function() {
        if (1 < b.count()) {
            var e = b.album()
              , f = a.g
              , g = b.ba();
            var h = (h = b.i.j.Nh) ? h.g : 0;
            var l = b.title();
            e = e ? e.count : null;
            L(f.g.xe, l);
            kp(f.g.fa, g, $e, void 0, null === h ? void 0 : String(h));
            f.g.fa.show();
            Up(f, null !== e);
            Vp(f, e || 0)
        } else
            Tp(a.g)
    });
    a.i.add(c, "ui-shutdown", function() {
        Tp(a.g);
        Fp(a.g)
    });
    a.i.add(d, "focus", function() {
        a.g.l.uc.classList.add("_scroll-down");
        a.F.stop()
    });
    a.i.add(d, "blur", function() {
        Fp(a.g)
    });
    a.J && (a.i.add(d, "stop-video-preview", function() {
        return Ql(a.J)
    }),
    a.i.add(d, "play-video-preview", function(e, f) {
        Ql(a.J);
        a.J.play(f, !0)
    }));
    a.i.add(d, "media-list-item-click", function(e, f, g) {
        Fp(a.g);
        Oq(a);
        gr(b, g)
    })
}
function hr(a, b, c) {
    var d = a.g.i.Fe;
    a.i.add(d.button, d.button.P, function() {
        var e = rq(a.o, b.data.Wi, b.data.url)
          , f = new nq({
            title: a.o.G("settings.quality.title"),
            items: e.items,
            selected: e.selected,
            Ga: !0
        });
        f.on(f.ud, function() {
            a.u && (a.u.close(),
            a.u = null)
        });
        f.on("item-selected", function(g, h, l, m) {
            m && (nb(a.g.g.notification),
            ir(c, e.Rl[l], b.model.duration * a.g.g.aa.state.progress || 0))
        });
        f.bb(O);
        a.u = f
    })
}
function Sq(a) {
    var b = a.g.i.sa;
    a.i.add(b.button, b.button.P, function() {
        a.C.sa()
    })
}
function Tq(a, b) {
    var c = a.g.i.Kc
      , d = O.g.Qa;
    a.i.add(c.button, c.button.P, function() {
        b.Qb.zc = !b.Qb.zc;
        var e = b.Qb.zc;
        Qp(a.g, e);
        e ? d.Kc() : jr(d)
    });
    a.i.add(d, d.v, function(e, f, g) {
        f === b.id && (Qp(a.g, g),
        e = O.g.F,
        f = e.getContext(),
        g = new kr({
            kd: f.g,
            ld: f.i,
            action: g ? "like_out" : "unlike_out",
            sc: "video",
            screen: f.j,
            ea: b.ea
        }),
        f.g = g,
        e.g.log(g))
    })
}
function Uq(a, b) {
    var c = a.g.i.Gc
      , d = O.g.Qa;
    a.i.add(c.button, c.button.P, function() {
        b.rc = !b.rc;
        var e = b.rc;
        Rp(a.g, e);
        e ? d.Gc() : lr(d)
    });
    a.i.add(d, d.o, function(e, f, g) {
        f.toString() === b.id.toString() && (Rp(a.g, g),
        e = O.g.F,
        f = e.getContext(),
        g = new kr({
            kd: f.g,
            ld: f.i,
            action: g ? "fave_out" : "unfave_out",
            sc: "video",
            screen: f.j,
            ea: b.ea
        }),
        f.g = g,
        e.g.log(g))
    })
}
function Vq(a, b) {
    var c = a.g.i.Ab
      , d = O.g.Qa;
    a.i.add(c.button, c.button.P, function() {
        var e = !b.ma.i;
        Sp(a.g, e);
        e ? mr(d) : nr(d)
    });
    a.i.add(d, d.j, function(e, f, g) {
        f.id === Math.abs(b.xa) && (Sp(a.g, g),
        e = O.g.F,
        f = e.getContext(),
        g = new kr({
            kd: f.g,
            ld: f.i,
            action: g ? "subscribe_out" : "unsubscribe_out",
            sc: "video",
            screen: f.j,
            ea: b.ea
        }),
        f.g = g,
        e.g.log(g))
    })
}
function Wq(a, b, c) {
    var d = a.g.i.ma;
    a.i.add(d.button, d.button.P, function() {
        or(a.C, b);
        var e = O.g.F
          , f = e.getContext()
          , g = new kr({
            kd: f.g,
            ld: f.i,
            action: "open_owner_out",
            sc: "video",
            screen: f.j,
            ea: c.ea
        });
        f.g = g;
        e.g.log(g)
    })
}
function Pq(a) {
    a.N = !1;
    window.cancelAnimationFrame(a.ua)
}
function pr(a, b) {
    function c(e) {
        var f = Math.max(0, (isNaN(d) ? 0 : e - d) / 1E3);
        d = e;
        b(f);
        a.N && (a.ua = window.requestAnimationFrame(function(g) {
            return c(g)
        }))
    }
    a.N = !0;
    var d = NaN;
    a.ua = window.requestAnimationFrame(function(e) {
        return c(e)
    })
}
function qr(a, b, c) {
    function d() {
        return xp(b, function(y) {
            var A = y.create
              , C = y.destroy
              , G = y.Af;
            y = y.Sk;
            G(x, function() {
                e();
                var la = [].concat(r(u), r(w));
                G(la, function(Va) {
                    m = .01;
                    Pq(a);
                    u.includes(Va) ? g() : w.includes(Va) && f();
                    C();
                    A()
                })
            });
            y(function(la) {
                var Va = la.create
                  , Ic = la.destroy
                  , Kv = la.Af
                  , Lv = la.Rg;
                Kv(x, function(Hj) {
                    Lv([Hj], function() {
                        m = .01;
                        Pq(a);
                        Ic();
                        Va()
                    });
                    var Mv = 1 === Hj || 19 === Hj ? -1 : 1
                      , Ug = a.g.i.aa;
                    pr(a, function(Re) {
                        m += .03 * Re;
                        Re = Ke(Ug.state.progress + Mv * m * Re, 0, 1);
                        Ug.state.progress = Re;
                        Ug.update();
                        c(Ug, Re)
                    })
                })
            })
        })
    }
    function e() {
        Wp(a.g, !0);
        var y = a.g.i.aa;
        io(y);
        n = y.state.progress;
        $n(y, {
            Ei: n
        });
        mb(y.g.ye);
        a.B("progress-initiate-seek")
    }
    function f() {
        var y = a.g.i.aa;
        l() && $n(y, {
            progress: n
        });
        a.B("progress-reset", n);
        h()
    }
    function g() {
        a.B("progress-apply", a.g.g.aa.state.progress);
        h()
    }
    function h() {
        var y = a.g.i.aa;
        $n(y, {
            Ei: void 0
        });
        nb(y.g.ye);
        Wp(a.g, !1);
        n = null
    }
    function l() {
        return null !== n
    }
    var m = .01
      , n = null
      , q = null
      , u = [21, 15]
      , w = [20]
      , x = [1, 3, 18, 19]
      , J = pg;
    return {
        enable: function() {
            var y = a.g.i.aa;
            J = d();
            q = Ek(y, y.P, function(A, C) {
                Yp(a.g, C);
                g()
            })
        },
        disable: function() {
            m = .01;
            Pq(a);
            l() && f();
            J();
            q && (q.ob(),
            q = null)
        },
        status: l
    }
}
function rr(a, b) {
    var c = a.g.i.reload;
    Dk(a.i, yn(a.ja, c, c.P, function() {
        nb(a.g.g.notification);
        b()
    }))
}
function Zq(a, b, c) {
    a.i.add(b, "error-recover-fail", function(d, e) {
        dr(a);
        Zp(a.g, !1);
        Lp(a.g, !1);
        e === sr && (Np(a.g, a.o.G("playerScene.generalVideoPlaybackError"), a.o.G("buttons.reload")),
        rr(a, function() {
            tr(b);
            c.reload(b.j || 0)
        }));
        e === ur && (Np(a.g, a.o.G("playerScene.videoPlaybackIsNotAvailable"), a.o.G("buttons.back")),
        rr(a, function() {
            return a.C.sa()
        }))
    })
}
k.tj = function(a, b, c) {
    a = this.l.l;
    var d = b instanceof Rb && a instanceof nh && -1 !== a.j.indexOf(b);
    b = (a && a.L()) === b || d;
    !c && b && Oq(this)
}
;
function vr(a, b, c, d, e, f, g) {
    Kq.call(this, a, b, c, d, e, f, g)
}
z(vr, Kq);
vr.prototype.ha = function(a, b, c) {
    Kq.prototype.ha.call(this, a, b, void 0 === c ? !0 : c);
    this.j && this.j.disable();
    this.j = null
}
;
vr.prototype.Ud = function(a, b, c) {
    Kq.prototype.Ud.call(this, a, b, c);
    Jp(this.g, !1);
    var d = a.model
      , e = d.duration
      , f = d.Ne;
    c = d.date;
    a = a.ga.startPosition || 0;
    b = b.j.ended ? e : a;
    a = this.g;
    d = !!d.Jb;
    a.g.aa.C = 1 / (e / 1E3);
    $n(a.g.aa, {
        progress: 0,
        Tb: no,
        mh: !1
    });
    Yp(a, Ke(b / e, 0, 1) || 0);
    M(a.g.aa.g.preview, d);
    Xp(this.g, !0);
    this.g.g.duration.setTime(e);
    this.g.setPosition(b);
    e = this.g;
    e.D = jm(f || 0, e.j);
    aq(e);
    f = this.g;
    a: {
        e = f.j.time;
        var g = void 0 === g ? new Date : g;
        var h = void 0 === h ? {} : h;
        d = "year month week day hour minute second".split(" ");
        b = d.slice(d.indexOf(h.ql || "year"), d.indexOf(h.sl || "second") + 1);
        if (!b.length)
            throw Error("Invalid configuration: Cannot select a unit with minUnit: " + (h.sl + " and maxUnit: " + h.ql));
        d = be(c, g, b);
        b = ae(d, b);
        if (h.Pl || "undefined" === typeof h.Pl) {
            b: {
                h = p([b]);
                for (a = h.next(); !a.done; a = h.next()) {
                    a = a.value;
                    for (var l = p(Md), m = l.next(); !m.done; m = l.next()) {
                        m = m.value;
                        var n = "relative." + a + ".adverbs." + m.toFixed();
                        if (e.l[a](c, g, m) && e.g.ad(n)) {
                            h = e.g.Od(n);
                            break b
                        }
                    }
                }
                h = null
            }
            if (h) {
                g = h;
                break a
            }
        }
        g = 0 < c.getTime() - g.getTime() ? "future" : "past";
        g = e.g.Od("relative." + b + "." + g, {
            value: d[b]
        })
    }
    f.F = g;
    aq(f);
    Mp(this.g, !0);
    Lp(this.g, !1);
    Zp(this.g, !1)
}
;
vr.prototype.Td = function(a, b) {
    var c = b.input
      , d = b.cb
      , e = b.ga
      , f = b.fa;
    Kq.prototype.Td.call(this, a, b);
    hr(this, a, f);
    wr(this, a.model, c, d, e);
    xr(this, c);
    yr(this, a.model.duration, e);
    zr(this, a.model.duration, d);
    Ar(this, e);
    Br(this, d)
}
;
function Br(a, b) {
    er(a, b, function() {
        Zp(a.g, !0)
    })
}
function xr(a, b) {
    a.i.add(b, "input-seek", function() {
        var c = a.g.i.aa;
        qh(a.l) !== c && rh(a.l, c)
    })
}
function Ar(a, b) {
    a.i.add(b, "playback-replay", function() {
        Yp(a.g, 0)
    })
}
function yr(a, b, c) {
    a.i.add(c, "pause", function(d) {
        if (d === Ym || d === Xm) {
            d = a.g;
            var e = Ke(c.o / b, 0, 1);
            io(d.g.aa);
            d.g.aa.u = e;
            ho(d.g.aa, .4, Date.now())
        }
    })
}
function zr(a, b, c) {
    zm(c, c.g.I.Ub, function(d, e) {
        a.j && a.j.status() || (d = Ke(e / b, 0, 1),
        d > a.g.g.aa.state.progress ? go(a.g.g.aa, d) : a.g.g.aa.state.progress && Yp(a.g, d),
        a.g.setPosition(e))
    }, a)
}
function wr(a, b, c, d, e) {
    c = qr(a, c, function(g) {
        ko(g, b.duration, b.Jb)
    });
    a.j = c;
    var f = a.g.i.aa;
    a.i.add(f, "focus", c.enable);
    a.i.add(f, "blur", c.disable);
    a.i.add(a, "progress-apply", function(g, h) {
        Um(e);
        $m(e, b.duration * h)
    });
    a.i.add(a, "progress-reset", function() {
        en(e, Xm)
    });
    a.i.add(a, "progress-initiate-seek", function() {
        "seeking" === d.g.I.getState() && (e.D = !0);
        dn(e)
    })
}
;function Cr(a, b) {
    var c = new Uc(function() {
        a();
        Vc(c)
    }
    ,b);
    return {
        start: function() {
            return c.start()
        },
        stop: function() {
            return c.stop()
        }
    }
}
;function Dr(a, b, c, d, e, f, g) {
    Kq.call(this, a, b, c, d, e, f, g);
    this.O = this.S = this.Z = null
}
z(Dr, Kq);
k = Dr.prototype;
k.ha = function(a, b, c) {
    Kq.prototype.ha.call(this, a, b, void 0 === c ? !0 : c);
    Jp(this.g, !1);
    (a = this.Z) && a.stop();
    (a = this.O) && a.stop();
    (a = this.S) && a.stop();
    this.j && this.j.disable();
    this.j = null
}
;
k.Ud = function(a, b, c) {
    Kq.prototype.Ud.call(this, a, b, c);
    b = this.g;
    Zp(b, !1);
    M(b.g.aa.g.preview, !1);
    io(b.g.aa);
    $n(b.g.aa, {
        progress: 1,
        Tb: oo,
        mh: !0
    });
    L(this.g.g.bc, "");
    b = a.model.Oa;
    "started" === b && (Lp(this.g, !1),
    Mp(this.g, !0),
    Jp(this.g, !1),
    Xp(this.g, !0),
    eq(this.g, a.model.ua || 0),
    cq(this.g, a.model.date.getTime()),
    Er(this, a.model));
    if ("upcoming" === b) {
        Lp(this.g, !1);
        Mp(this.g, !1);
        Jp(this.g, !0);
        b = this.g;
        c = a.model.j || new Date;
        L(b.l.Wg, b.j.G("playerScene.liveStartRemain"));
        gq(b, c);
        Fr(this, a.model);
        if (b = a.model.J) {
            c = this.g;
            var d = !a.model.S
              , e = kc[O.device.info.Yb()];
            Tn(c.l.blur, {
                image: b,
                height: e.height,
                width: e.width,
                Wl: !d,
                position: "absolute"
            })
        }
        Xp(this.g, !1);
        fq(this.g, a.model.j || new Date);
        Gr(this, a.model);
        this.g.F = !0;
        this.g.v(!0)
    } else
        this.g.F = !1;
    K(this.g.g.fd, "_live", !1);
    a = this.g;
    Dp(a, a.g.mc, !1)
}
;
k.Td = function(a, b) {
    var c = b.fa
      , d = b.$b
      , e = b.ga
      , f = b.input
      , g = b.Pc
      , h = b.cb;
    Kq.prototype.Td.call(this, a, b);
    Hr(this, h, d, c);
    Ir(this, h, c);
    "started" === a.model.Oa && (a.model.o && (Jr(this, f, e, d),
    Kr(this, f)),
    hr(this, a, c),
    Lr(this, c, d, e),
    Mr(this, g),
    Nr(this, d))
}
;
k.Wf = function(a) {
    this.j && this.j.status() || Kq.prototype.Wf.call(this, a)
}
;
function Ir(a, b, c) {
    er(a, b, function() {
        Zp(a.g, c.g.I.model.o)
    })
}
k.bg = function(a, b) {
    "upcoming" !== b.model.Oa && Kq.prototype.bg.call(this, a, b)
}
;
function Or(a, b, c) {
    function d(e, f) {
        return Pr(b, 0).then(function() {
            if (!f(b.g.I.model))
                return Promise.reject({
                    type: um
                });
            var g = Dd(6E4).then(function() {
                return Promise.reject({
                    type: "open-timeout"
                })
            });
            return Promise.race([g, Qr(b)])
        }).catch(function(g) {
            Ia("LiveStatus transition failed: try(" + e + "/10), reason(" + JSON.stringify(g) + ")");
            var h = e + 1;
            return 10 > h ? "open-timeout" === g.type ? d(h, f) : Dd(Math.min(5E3 * Math.pow(2, h - 1), 6E4) + Math.ceil(1E3 * Math.random())).then(function() {
                if (null !== a.j)
                    return d(h, f)
            }) : Promise.reject()
        })
    }
    return function() {
        return d(0, c)
    }
}
function Rr(a) {
    var b = a.g.i.aa;
    qh(a.l) !== b && rh(a.l, b)
}
function Kr(a, b) {
    a.i.add(b, "input-seek", function() {
        Rr(a)
    })
}
function Hr(a, b, c, d) {
    a.i.add(c, "live-status-update", function(e, f, g) {
        "upcoming" !== f && "waiting" !== f || "started" !== g ? "finished" === g && (Np(a.g, a.o.G("playerScene.liveIsFinishedAndProcessing"), null),
        Zp(a.g, !1),
        Lp(a.g, !1),
        Mp(a.g, !1),
        ym(b, Or(b, d, function(h) {
            return h.type === Te
        })).then(function() {
            Sr(d, !1)
        }).catch(function() {
            return Qr(d)
        })) : (e = d.g.I,
        Jp(a.g, !1),
        Xp(a.g, !0),
        Zp(a.g, e.model.o),
        eq(a.g, e.model.ua || 0),
        cq(a.g, e.model.date.getTime()),
        Er(a, e.model),
        Ip(a.g, !0),
        ym(b, Or(b, d, function(h) {
            return 0 < h.Z
        })).then(function() {
            Sr(d, !1)
        }).catch(function() {
            return Qr(d)
        }))
    })
}
function Nr(a, b) {
    Dk(a.i, b.i.g(function(c) {
        if (null !== c) {
            var d = a.g.i.aa;
            c ? ($n(d, {
                Tb: oo,
                progress: 1
            }),
            K(a.g.g.fd, "_live", !0),
            d = a.g,
            Dp(d, d.g.mc, !1),
            Rr(a)) : (c = 1E3 * b.duration,
            $n(d, {
                Tb: no,
                progress: (c - b.offset) / c
            }),
            K(a.g.g.fd, "_live", !1),
            d = a.g,
            Dp(d, d.g.mc, !0))
        }
    }))
}
function Mr(a, b) {
    a.i.add(b, "video-events-video-view", function(c, d) {
        eq(a.g, d.count)
    })
}
function Lr(a, b, c, d) {
    var e = a.g.i.mc;
    a.i.add(e.button, e.button.P, function() {
        return Tr(b, c, d)
    })
}
function Ur(a, b, c) {
    a && a.stop();
    a = Cr(b, c);
    a.start();
    return a
}
function Er(a, b) {
    a.Z = Ur(a.Z, function() {
        return cq(a.g, b.j ? b.j.getTime() : b.date.getTime())
    }, 6E4)
}
function Gr(a, b) {
    a.S = Ur(a.S, function() {
        return fq(a.g, b.j || new Date)
    }, 36E5)
}
function Fr(a, b) {
    a.O = Ur(a.O, function() {
        return gq(a.g, b.j || new Date)
    }, 1E3)
}
function Tr(a, b, c) {
    return Pr(a, 0).finally(function() {
        return Pm(b)
    }).then(function() {
        return c.play()
    })
}
function Jr(a, b, c, d) {
    b = qr(a, b, function(f, g) {
        g = Math.round(d.duration * (1 - g) * 1E3);
        ko(f, g, null, g)
    });
    a.j = b;
    var e = a.g.i.aa;
    a.i.add(e, "focus", b.enable);
    a.i.add(e, "blur", b.disable);
    a.i.add(a, "progress-apply", function(f, g) {
        Um(c);
        f = Math.round(d.duration * (1 - g) * 1E3);
        1 > g && 0 < f ? Om(d, f) : Pm(d)
    });
    a.i.add(a, "progress-reset", function() {
        Um(c);
        bn(c, Xm)
    });
    a.i.add(a, "progress-initiate-seek", function() {
        c.pause();
        c.j.autoplay = !1
    })
}
;function Vr(a, b, c, d) {
    N.call(this);
    var e = this;
    this.u = d;
    this.j = b;
    this.g = a;
    this.i = new Ck;
    this.o = null;
    this.vd = "controller-visibility-change";
    this.Te = "controller-loader-was-shown";
    this.v = new Uc(function() {
        Wr(e)
    }
    ,1E4);
    this.l = new Uc(function() {
        return Xr(e, !0)
    }
    ,1E3);
    this.g.on("ui-element-visibility-change", this.F.bind(this))
}
z(Vr, N);
Vr.prototype.$c = function() {
    return this.g
}
;
Vr.prototype.init = function(a, b) {
    Cp(this.g, !0);
    zd(this.g.g.bc, "ads", !0);
    a = b.Ya;
    Xr(this, !1);
    Ep(this.g) && Fp(this.g);
    a = a.getDuration();
    var c = this.g;
    c.g.aa.C = 1 / (a / 1E3);
    io(c.g.aa);
    $n(c.g.aa, {
        progress: 0,
        Tb: no,
        mh: !1
    });
    M(c.g.aa.g.preview, !1);
    c.g.aa.disable();
    this.g.g.uf.setTime(1E3 * Math.ceil(Ke(a, 0, a) / 1E3));
    a = this.g;
    L(a.g.Nc.title, a.j.G("playerScene.skip"));
    iq(this.g);
    Gp(this.g.i.aa);
    a = b.cb;
    c = b.Yc;
    var d = b.Bb
      , e = b.input;
    b = b.Ya;
    Yr(this);
    Zr(this, a, c);
    $r(this, a, e, d);
    as(this, e, d);
    bs(this, b.getDuration(), a);
    cs(this);
    b.lf() ? (c = b.mf(),
    0 < c ? (jq(this.g, !1),
    ds(this, c, a, b)) : (es(this, b),
    jq(this.g, !0))) : jq(this.g, !1);
    oh(this.j, this.g.i.Zb);
    oh(this.j, this.g.i.Nd);
    fs(this)
}
;
Vr.prototype.ha = function(a, b, c) {
    (void 0 === c || c) && Cp(this.g, !1);
    zd(this.g.g.bc, "ads", !1);
    Bm(a, this);
    this.v.stop();
    this.l.stop();
    this.i.clear()
}
;
function fs(a) {
    a.j.T(null);
    a.j.focus()
}
function Wr(a) {
    Hp(a.g) && (a.g.v(!1),
    a.B(a.vd, !1))
}
function gs(a) {
    Hp(a.g) || (a.g.v(!0),
    a.B(a.vd, !0))
}
function cs(a) {
    a.i.add(O, "resolution-changed", function() {
        Gp(a.g.i.aa)
    })
}
function es(a, b) {
    var c = a.g.i.Nc.button;
    a.i.add(c, c.P, function() {
        return b.Nc()
    })
}
function ds(a, b, c, d) {
    var e = zm(c, c.g.I.Ub, function(f, g) {
        g > b && (e(),
        es(a, d),
        jq(a.g, !0))
    }, a)
}
function Xr(a, b) {
    Ip(a.g, b);
    b ? a.o = Date.now() : (b = Date.now() - a.o || 0,
    a.o && 0 < b && (a.B(a.Te, b),
    a.o = null))
}
function bs(a, b, c) {
    zm(c, c.g.I.Ub, function(d, e) {
        d = Ke(e / b, 0, 1);
        d > a.g.g.aa.state.progress && go(a.g.g.aa, d);
        a.g.g.uf.setTime(1E3 * Math.ceil(Ke(b - e, 0, b) / 1E3))
    }, a)
}
function $r(a, b, c, d) {
    zm(b, b.g.I.Ub, function() {
        d.l || Ep(a.g) || a.v.start()
    }, a);
    a.i.add(c, "input-interaction", function() {
        a.v.stop();
        gs(a)
    });
    a.i.add(d, "ui-mouse-status-change", function(e, f) {
        f && (a.v.stop(),
        gs(a))
    })
}
function as(a, b, c) {
    a.i.add(b, "input-back", function() {
        Hp(a.g) ? (Wr(a),
        Ep(a.g) && (Fp(a.g),
        fs(a))) : a.u.sa()
    });
    a.i.add(c, "ui-init", function() {
        Wr(a)
    })
}
function Zr(a, b, c) {
    function d(f) {
        return "seeking" === f || "waiting" === f || "loading" === f
    }
    var e = b.g.I;
    zm(b, e.Lb, function(f, g) {
        d(g) && a.l.start()
    }, a);
    zm(b, e.Bc, function(f, g, h) {
        d(g) && !d(h) && (a.l.stop(),
        Xr(a, !1))
    }, a);
    a.i.add(c, "error-recover-started", function() {
        a.l.start()
    });
    a.i.add(c, "error-recover-ended", function() {
        a.l.stop();
        Xr(a, !1)
    })
}
function Yr(a) {
    var b = a.g.i.sa;
    a.i.add(b.button, b.button.P, function() {
        a.u.sa()
    })
}
Vr.prototype.F = function(a, b, c) {
    a = (a = this.j.l) && a.L();
    c || a !== b || fs(this)
}
;
function hs(a, b, c, d, e, f) {
    N.call(this);
    this.C = a;
    this.g = null;
    this.S = Hk();
    this.i = new Ck;
    this.l = !1;
    var g = Vn(is(this));
    this.C.L().appendChild(g.uc);
    var h = js(this)
      , l = new vr(new $p(h,g,b),a,d,b,c,e,f);
    d = new Dr(new bq(h,g,b),a,d,b,c,e,f);
    a = new Vr(new hq(h,g,b),a,b,c);
    this.j = {
        Ul: l,
        $b: d,
        Ya: a
    }
}
z(hs, N);
hs.prototype.init = function() {
    var a = this;
    O.F.classList.add("_transparent");
    ks(this);
    Dk(this.i, this.F.g(function(b) {
        return ls(a, b)
    }));
    this.reload();
    this.B("ui-init")
}
;
hs.prototype.ha = function() {
    this.B("ui-shutdown");
    this.i.clear();
    this.g && this.g.ha(this.v, this.u);
    ms()
}
;
function ns(a, b) {
    a.l = b;
    a.B("ui-mouse-status-change", a.l);
    os(a).forEach(function(c) {
        b ? c.rb() : c.Ra()
    })
}
hs.prototype.reload = function() {
    ls(this, this.F.I)
}
;
function ps(a) {
    return a.g && Ep(a.g.$c()) || !1
}
function os(a) {
    function b(d, e) {
        d.forEach(function(f) {
            var g = !1;
            f instanceof Hg && !e && (g = !0,
            c.push(f));
            b(Lb(f), g)
        })
    }
    var c = [];
    a = Lb(a.C);
    b(a, !1);
    return c
}
function ls(a, b) {
    null !== b && (b.model.type !== Te && b.model.type !== Oe || qs(a, a.j.Ul),
    b.model.type === Ue && qs(a, a.j.$b))
}
function rs(a, b) {
    Dk(a.i, yn(a.S, b, b.Qd, function(c) {
        a.B.apply(a, ["ui-controller-event-forward", b, c].concat(r(ya.apply(1, arguments))))
    }))
}
function qs(a, b) {
    if (null === a.g)
        a.g = b,
        b = a.g.$c(),
        b.l.uc.appendChild(b.u.L());
    else if (a.g === b)
        a.g.ha(a.v, a.u, !1);
    else {
        a.g.ha(a.v, a.u);
        if (a.g.$c().i !== b.$c().i) {
            var c = a.g.$c();
            c.l.uc.removeChild(c.u.L());
            c = b.$c();
            c.l.uc.appendChild(c.u.L())
        }
        a.g = b
    }
    rs(a, a.g);
    a.g.init(a.F.I, {
        Pc: a.Z,
        $b: a.J,
        cb: a.v,
        fa: a.D,
        ga: a.N,
        input: a.u,
        Yc: a.O,
        Ya: a.o,
        Bb: a
    })
}
function ks(a) {
    a.i.add(a.o, "advertisement-ads-change", function(c, d, e) {
        qs(a, a.j.Ya);
        iq(a.j.Ya.g, d, e)
    });
    var b = null;
    a.i.add(a.o, "advertisement-ads-start", function(c, d, e) {
        b = a.g;
        qs(a, a.j.Ya);
        iq(a.j.Ya.g, d, e)
    });
    a.i.add(a.o, "advertisement-ads-end", function() {
        b && (qs(a, b),
        b = 0)
    })
}
function is(a) {
    return {
        Vb: function(b, c) {
            a.C.Ca(b, /\[]$/.test(c) ? "" : c)
        }
    }
}
function js(a) {
    return op({
        vh: function(b, c) {
            return a.D.vh(b, c)
        }
    }, is(a))
}
;function ss(a, b) {
    N.call(this);
    this.u = b;
    this.g = Hk();
    this.l = [];
    this.F = null
}
z(ss, N);
k = ss.prototype;
k.init = function() {
    var a = this;
    this.i.j.fa = Object.assign({}, ts, this.i.j.fa);
    this.l = this.i.j.items || [];
    this.j = this.i.j.fa;
    this.j.Db = Ke(this.j.Mf, 0, this.l.length - 1);
    Sr(this);
    us(this);
    this.F = Ek(this.v, this.v.dc, function() {
        return vs(a)
    })
}
;
k.ha = function() {
    this.F.ob();
    Bm(this.i, this);
    this.l = []
}
;
k.count = function() {
    return this.l.length
}
;
k.title = function() {
    return this.j.title || ""
}
;
k.ba = function() {
    return this.l.map(function(a) {
        return a.model
    })
}
;
k.album = function() {
    return this.i.j.album
}
;
function ir(a, b, c) {
    var d = a.g.I
      , e = hm(d.model.g, b);
    sm(a.i, {
        url: b,
        mediaType: e,
        startPosition: c,
        height: d.model.height || void 0
    }).then(function() {
        d.data.mediaType = e;
        d.data.url = b
    })
}
k.reload = function(a) {
    this.g.I.ga.startPosition = a || 0;
    return gr(this, this.j.Db)
}
;
function Qr(a) {
    if (!O.g.i.j || !a.g.I.model.O)
        return ws(a);
    vm(a.i);
    return Bn(a.o, a.g.I.model.O).finally(function() {
        return En(a.o, function() {
            return ws(a)
        }, a.o.j[pn] || [])
    })
}
function an(a, b) {
    a.g.I.ga.startPosition = b;
    return ws(a)
}
function Pr(a, b) {
    var c = !0;
    c = void 0 === c ? !1 : c;
    return Lk(a.u, [a.g.I.model]).then(function(d) {
        if (!d)
            return Promise.reject();
        if (d = d.ba[0])
            d = em(d),
            d.ga.startPosition = b,
            a.l[a.j.Db] = d,
            Sr(a, c)
    })
}
function xs(a, b) {
    function c(h) {
        var l = e[h]
          , m = hm(d.model.g, l);
        return ym(a.i, function() {
            return sm(a.i, {
                url: l,
                mediaType: m,
                startPosition: b,
                height: d.model.height || void 0
            })
        }).then(function() {
            d.data.mediaType = m;
            d.data.url = l
        }, function() {
            var n = Le(h + 1, f);
            return n !== g ? c(n) : Promise.reject()
        })
    }
    var d = a.g.I
      , e = gm(d.model.g)
      , f = e.length
      , g = e.indexOf(d.data.url);
    return -1 === g || 0 === f - 1 ? Promise.reject() : c(Le(g + 1, f))
}
k.vh = function(a, b) {
    return ((a = this.i.j.Nh) ? null === a.g : 1) ? Promise.resolve({
        items: [],
        Da: null
    }) : (a = this.album()) ? ys(this, a, b) : zs(this, b)
}
;
function ws(a) {
    var b = a.g.I;
    gd(function(d) {
        var e = b.model;
        d.addBreadcrumb({
            level: "debug",
            message: "Playlist::_openCurrent",
            category: "video",
            data: {
                id: e.id,
                live_status: e.Oa,
                owner_id: e.xa,
                user_id: e.F,
                content_restricted: e.zf,
                type: e.type
            }
        })
    });
    var c = b.model;
    return c.type === Ue && "upcoming" === c.Oa ? (vm(a.i),
    Promise.resolve()) : qm(a.i, {
        url: b.data.url,
        mediaType: b.data.mediaType,
        startPosition: b.ga.startPosition,
        height: b.model.height || void 0
    }).catch(function(d) {
        a.B("playlist-open-item-error", d);
        return Promise.reject(d)
    })
}
function As(a, b) {
    var c = b.ba
      , d = b.g;
    a.l.push.apply(a.l, r(c.map(em)));
    a.i.j.Nh = b;
    return {
        items: c,
        Da: null !== d ? String(d) : null
    }
}
function zs(a, b) {
    b = parseInt(b, 10) || 0;
    var c = a.l[0];
    return c ? Nk(a.u, c.model, 10, b).then(function(d) {
        return As(a, d)
    }) : Promise.resolve({
        items: [],
        Da: null
    })
}
function ys(a, b, c) {
    return Jk(a.u, b, parseInt(c, 10) || 0).then(function(d) {
        return As(a, d)
    })
}
function Sr(a, b) {
    (void 0 === b ? 0 : b) ? a.g.i(a.l[a.j.Db]) : a.g.I = a.l[a.j.Db]
}
function us(a) {
    zm(a.i, a.C.I.dc, function() {
        a.g.I.ga.startPosition = 0
    }, a)
}
function Bs(a, b) {
    b = 0 <= b && b < a.count();
    return a.j.ug || b
}
function gr(a, b) {
    if (!Bs(a, b))
        return Promise.resolve();
    Vm(a.v);
    a.j.Db = Le(b, a.count());
    Sr(a);
    return Qr(a)
}
function vs(a) {
    var b = !!O.g.i.j
      , c = Bs(a, a.j.Db + 1)
      , d = !ps(a.D) && a.j.pg && c;
    return b ? En(a.o, function() {
        if (d)
            return gr(a, a.j.Db + 1);
        a.g.I.ga.startPosition = 0;
        a.v.j.autoplay = !1;
        a.v.j.ended = !0;
        return an(a, 0)
    }, a.o.j[qn] || []) : d ? gr(a, a.j.Db + 1) : Promise.resolve()
}
var ts = {
    ug: !1,
    pg: !1,
    Mf: 0,
    Db: 0
};
function Cs() {
    N.call(this);
    this.o = this.i = this.j = this.u = null;
    this.v = Ds
}
z(Cs, N);
Cs.prototype.init = function() {
    Es(this)
}
;
Cs.prototype.ha = function() {
    Bm(this.g, this);
    this.o && (this.o.ob(),
    this.o = null);
    tr(this)
}
;
function tr(a, b) {
    b = void 0 === b ? Ds : b;
    a.i && a.i.ob();
    a.u = null;
    a.j = null;
    a.i = null;
    a.v = b
}
function Fs(a, b) {
    function c() {
        if (d.I.data.url) {
            if (d.I.model.type === Ue)
                return a.D.reload(),
                a.F.reload(a.F.offset || 0);
            a.D.reload();
            return Qr(a.l)
        }
        tr(a, fr);
        a.B("error-recover-fail", ur)
    }
    var d = a.l.g;
    return Pr(a.l, b).then(c, c)
}
function Es(a) {
    var b = a.g.g.I;
    a.o = Ek(a.l, "playlist-open-item-error", function(c, d) {
        d.type === um && a.B("error-recover-fail", ur)
    });
    zm(a.g, b.Ia, function() {
        if (a.g.C !== Em) {
            a.B("error-recover-started");
            var c = a.v
              , d = a.j || a.C.o || 0;
            if (c === Ds || c === Gs)
                Hs(a, function() {
                    return xs(a.l, d)
                }, d),
                ym(a.g, function() {
                    return Fs(a, d).catch(function() {
                        return a.u()
                    }).catch(function() {
                        var e = a.j;
                        tr(a, fr);
                        a.j = e;
                        a.B("error-recover-fail", sr)
                    }).finally(function() {
                        a.B("error-recover-ended", a.v)
                    })
                })
        }
    })
}
function Hs(a, b, c) {
    tr(a, Is);
    a.u = b;
    a.j = c;
    a.i = a.g.g.g(function(d) {
        if (d)
            d.once(d.Ub, function() {
                a.i && (a.i.ob(),
                tr(a, Gs))
            })
    })
}
var sr = "recover-fail"
  , ur = "playback-is-not-available"
  , Ds = "none"
  , Is = "started"
  , fr = "failed"
  , Gs = "completed";
function Js(a, b) {
    this.g = a;
    this.C = b;
    this.o = new Ck;
    this.j = null;
    this.F = 0;
    this.D = null;
    this.u = 0
}
Js.prototype.init = function() {
    var a = this;
    this.g.filter(function(b) {
        return b.isEnabled()
    }).forEach(function(b) {
        return b.Ye(function() {
            return a.C.g || ""
        }, function() {
            return a.N.g.I.model
        }, function() {
            return a.l.I.data
        }, function() {
            return {
                position: Ks(a),
                duration: a.u
            }
        })
    });
    Ls(this);
    Ms(this, this.J, this.O)
}
;
Js.prototype.ha = function() {
    Bm(this.i, this);
    this.o.clear();
    Ns(this)
}
;
function Ns(a) {
    a.F = 0;
    a.u = 0;
    Os(a);
    a.j && a.g.filter(function(b) {
        return b.isEnabled()
    }).forEach(function(b) {
        var c = b.getContext().gh({
            start: a.j || 0,
            end: Date.now()
        });
        b.Cb().log(c);
        b.Cb().flush()
    });
    a.g.filter(function(b) {
        return b.isEnabled()
    }).forEach(function(b) {
        b.Yf()
    });
    a.j = null
}
function Ks(a) {
    var b = ["ready", "playing", "paused"];
    if (!a.v.I || !b.includes(a.v.I.getState()))
        return a.F;
    a.F = a.v.I.Ed();
    return a.F
}
function Ls(a) {
    var b = a.v.I
      , c = b.Rd
      , d = b.Ub
      , e = b.Ia
      , f = b.pj
      , g = b.dc
      , h = a.i.D.Gg;
    zm(a.i, b.oj, h(function(l, m) {
        a.g.filter(function(n) {
            return n.isEnabled()
        }).forEach(function(n) {
            var q = n.getContext().dh(parseInt(m, 10), null);
            n.Cb().log(q)
        });
        Os(a)
    }), a);
    zm(a.i, e, h(function(l, m) {
        a.g.filter(function(n) {
            return n.isEnabled()
        }).forEach(function(n) {
            var q = n.getContext().Yg({
                xi: String(m)
            });
            n.Cb().log(q)
        });
        Os(a)
    }), a);
    zm(a.i, f, h(function() {
        Os(a)
    }), a);
    zm(a.i, g, h(function() {
        Os(a)
    }), a);
    zm(a.i, c, h(function() {
        a.D = Ks(a);
        null === a.j && (a.j = Date.now(),
        a.u = a.v.I.getDuration(),
        a.g.filter(function(l) {
            return l.isEnabled()
        }).forEach(function(l) {
            var m = []
              , n = l.getContext().fh();
            m.push(n);
            n = l.getContext().bh();
            m.push(n);
            l.Cb().log(m)
        }))
    }), a);
    zm(a.i, d, h(function(l, m) {
        a.g.filter(function(n) {
            return n.isEnabled()
        }).forEach(function(n) {
            if (!a.l.I.model.D) {
                var q = n.getContext().jh($l(m));
                n.Cb().log(q)
            }
        })
    }), a)
}
function Os(a) {
    if (!a.l.I.model.D) {
        var b = a.D;
        a.D = null;
        null !== b && a.g.filter(function(c) {
            return c.isEnabled()
        }).forEach(function(c) {
            var d = c.getContext().ih({
                start: $l(+b),
                end: $l(Ks(a))
            });
            c.Cb().log(d)
        })
    }
}
function Ms(a, b, c) {
    var d = a.i.D.Gg;
    a.o.add(b, "play", d(function(e, f) {
        f !== Wm && null !== a.j && a.g.filter(function(g) {
            return g.isEnabled()
        }).forEach(function(g) {
            var h = g.getContext().ah();
            g.Cb().log(h)
        })
    }));
    a.o.add(b, "pause", d(function(e, f) {
        f !== Wm && null !== a.j && a.g.filter(function(g) {
            return g.isEnabled()
        }).forEach(function(g) {
            var h = g.getContext().$g();
            g.Cb().log(h)
        })
    }));
    a.o.add(c, "ui-controller-event-forward", d(function(e, f, g) {
        var h = ya.apply(3, arguments);
        if (g === f.Te) {
            var l = p(h).next().value;
            a.g.filter(function(m) {
                return m.isEnabled()
            }).forEach(function(m) {
                var n = m.getContext().eh(l);
                m.Cb().log(n)
            })
        }
    }));
    Dk(a.o, a.l.g(function(e) {
        e && (Ns(a),
        a.g.filter(function(f) {
            return f.isEnabled()
        }).forEach(function(f) {
            return f.Ye(function() {
                return a.C.g || ""
            }, function() {
                return a.l.I.model
            }, function() {
                return a.l.I.data
            }, function() {
                return {
                    position: Ks(a),
                    duration: a.u
                }
            })
        }))
    }))
}
;function Ps(a) {
    this.j = a;
    this.v = Fl(this.l.bind(this))
}
Ps.prototype.init = function() {
    var a = this;
    zm(this.g, this.i.I.Ub, this.v, this);
    zm(this.g, this.i.I.Ue, function() {
        try {
            a.l(a.i.I.Ue, a.i.I.Ed())
        } catch (b) {}
    }, this)
}
;
Ps.prototype.ha = function() {
    Bm(this.g, this)
}
;
Ps.prototype.l = function(a, b) {
    if (this.g.C !== Em) {
        var c = this.o.I.model;
        a = c.ta;
        var d = c.duration;
        c = c.Oa;
        if (3E4 >= d || null !== c && "finished" !== c)
            b = this.j,
            a in b.g && delete b.g[a];
        else {
            var e = {};
            c = this.j;
            b = (e[a] = Ke(b / d, 0, 1),
            e);
            c.g = Object.assign(c.g, b)
        }
    }
}
;
function Qs(a) {
    this.g = a;
    this.i = null
}
Qs.prototype.init = function(a) {
    var b = this;
    return D(function(c) {
        b.i = a;
        b.g.cb.init(a);
        b.g.fa.init(a);
        b.g.Ya.init(a);
        b.g.Bb.init(a);
        b.g.$b.init(a);
        b.g.input.init(a);
        b.g.xc.init(a);
        b.g.Yc.init(a);
        b.g.Pc.init(a);
        b.g.Oh.init(a);
        b.g.ga.init(a);
        c.g = 0
    })
}
;
Qs.prototype.ha = function() {
    var a = this;
    D(function(b) {
        if (a.i) {
            Vm(a.g.ga);
            var c = a.g.fa;
            c.g.I && (c.g.I.ga.startPosition = c.g.I.ga.Gd);
            c = a.g.fa;
            c.j && (c.j.Mf = c.j.Db)
        }
        a.g.ga.ha();
        a.g.Oh.ha();
        a.g.Pc.ha();
        a.g.Yc.ha();
        a.g.xc.ha();
        a.g.input.ha();
        a.g.$b.ha();
        a.g.Bb.ha();
        a.g.Ya.ha();
        a.g.fa.ha();
        a.g.cb.ha();
        b.g = 0
    })
}
;
function Rs() {
    bf.call(this);
    var a = O.g.xc
      , b = O.g.K
      , c = O.g.Pc
      , d = O.g.resources.video
      , e = O.g.g
      , f = O.g.qa
      , g = O.g.l
      , h = O.g.md
      , l = O.g.profile
      , m = O.g.Wa
      , n = O.g.resources.Ya
      , q = O.g.hc;
    a = {
        cb: new lm,
        fa: new ss(h,d),
        Bb: new hs(this,b,f,g,e,l),
        input: new sp(this,f),
        ga: new Qm,
        xc: new Js(a,h),
        Pc: new pp(c,d,e),
        $b: new Nm(m),
        Oh: new Ps(e),
        Yc: new Cs,
        Ya: new zn(n,q)
    };
    b = a.fa;
    c = a.ga;
    d = a.Bb;
    e = a.Ya;
    b.i = a.cb;
    b.v = c;
    b.D = d;
    b.C = b.i.g;
    b.o = e;
    b = a.Bb;
    c = a.cb;
    d = a.fa;
    e = a.ga;
    f = a.input;
    g = a.Pc;
    h = a.Yc;
    l = a.Ya;
    b.J = a.$b;
    b.v = c;
    b.D = d;
    b.N = e;
    b.u = f;
    b.F = b.D.g;
    b.Z = g;
    b.O = h;
    b.o = l;
    b = a.input;
    c = a.Bb;
    b.v = a.ga;
    b.J = c;
    b = a.ga;
    c = a.cb;
    d = a.fa;
    b.F = a.$b;
    b.l = c;
    b.J = d;
    b.g = b.l.g;
    b.u = b.J.g;
    b = a.xc;
    c = a.cb;
    d = a.fa;
    e = a.ga;
    f = a.Bb;
    b.i = c;
    b.J = e;
    b.N = d;
    b.O = f;
    b.l = d.g;
    b.v = c.g;
    a.Pc.j = a.fa.g;
    b = a.$b;
    c = a.fa;
    b.v = a.cb;
    b.g = c.g;
    b = a.Oh;
    c = a.fa;
    b.g = a.cb;
    b.i = b.g.g;
    b.o = c.g;
    b = a.Yc;
    c = a.fa;
    d = a.ga;
    e = a.$b;
    f = a.Bb;
    b.g = a.cb;
    b.l = c;
    b.C = d;
    b.F = e;
    b.D = f;
    b = a.Ya;
    c = a.fa;
    b.i = a.cb;
    b.v = c;
    this.g = a;
    this.i = new Qs(this.g);
    this.o = null;
    this.u = new Ck;
    Eb(this.F, !0, !0, !1);
    this.C = this.Tj.bind(this);
    ec(this, "s-player")
}
z(Rs, bf);
k = Rs.prototype;
k.va = function() {
    Dk(this.u, Fk(window, "visibilitychange", this.C))
}
;
k.Nb = function() {
    bf.prototype.Nb.call(this);
    ms();
    this.i.ha();
    this.o = null;
    this.u.clear()
}
;
k.Pa = function() {
    var a = this
      , b = bf.prototype.Pa.call(this)
      , c = this.i.i;
    return function() {
        b();
        c && a.ke(c)
    }
}
;
k.da = function(a, b) {
    var c = this.g.input.da(a, b);
    return c ? c : bf.prototype.da.call(this, a, b)
}
;
function Ss(a) {
    return {
        play: function() {
            return a.g.ga.play()
        },
        pause: function() {
            return a.g.ga.pause()
        },
        g: function(b) {
            var c = a.g.ga
              , d = c.g.I.Ed();
            switch (b) {
            case Infinity:
                d = c.g.I.getDuration();
                break;
            case -Infinity:
                d = 0;
                break;
            default:
                d += 1E3 * b
            }
            $m(c, d)
        },
        stop: function() {
            return O.Vd()
        }
    }
}
k.Wh = function() {
    return "video_player"
}
;
k.ke = function(a) {
    this.i.init(a).catch(function(b) {
        O.g.C.once("error-hidden", function() {
            O.g.qa.sa()
        });
        throw Ui(b);
    });
    Qr(this.g.fa)
}
;
k.rb = function() {
    ns(this.g.Bb, !0)
}
;
k.Ra = function() {
    ns(this.g.Bb, !1)
}
;
k.df = function() {
    return new yh({
        enabled: !0
    },{
        enabled: !0
    })
}
;
k.Tj = function() {
    var a = this;
    if (this.gb())
        if (document.hidden) {
            var b = null;
            b = this.i.i;
            ms();
            this.i.ha();
            this.o = function() {
                b && a.ke(b)
            }
        } else
            this.o ? (this.o(),
            this.o = null) : O.g.qa.sa()
}
;
t.Object.defineProperties(Rs.prototype, {
    Cg: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.Bb.l
        }
    },
    hc: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !0
        }
    }
});
function Ts(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-auth__content">\n    <div class="s-auth__title" data-export-id="title"></div>\n    <div class="s-auth__description" data-export-id="description"></div>\n\n    <div class="s-auth__number-code" data-export-id="numberCodeContainer">\n\t\t<div data-export-id="numberCodeValueLeft"></div>\n\t\t<div data-export-id="numberCodeValueRight"></div>\n\t</div>\n\t<div class="s-auth__qr-code" data-export-id="codeContainer">\n\t\t<img src="" data-export-id="image"/>\n\t</div>\n\t<div class="s-auth__short-link-container" data-export-id="linkContainer">\n\t\t' + E(of, {
            name: "lock"
        }, "secureIcon", c) + '\n\t\t<div class="s-auth__text-link _empty" data-export-id="link"></div>\n\t</div>\n\n    ' + E(Xn, {
            label: this.K.G("buttons.cancel"),
            bd: !0
        }, "cancelButton", c) + "\n    " + E(Xn, {
            label: this.K.G("buttons.openAgreements"),
            bd: !0
        }, "agreementButton", c) + "\n    " + E(uf, {
            icon: "info-circle"
        }, "techInfo", c) + "\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "secureIcon":
                g.cj ? F(f) : g.cj = e;
                break;
            case "cancelButton":
                g.sg ? F(f) : g.sg = e;
                break;
            case "agreementButton":
                g.kf ? F(f) : g.kf = e;
                break;
            case "techInfo":
                g.Ea ? F(f) : g.Ea = e;
                break;
            case "title":
                g.title ? F(f) : g.title = e;
                break;
            case "description":
                g.description ? F(f) : g.description = e;
                break;
            case "numberCodeContainer":
                g.ph ? F(f) : g.ph = e;
                break;
            case "numberCodeValueLeft":
                g.qh ? F(f) : g.qh = e;
                break;
            case "numberCodeValueRight":
                g.rh ? F(f) : g.rh = e;
                break;
            case "codeContainer":
                g.ie ? F(f) : g.ie = e;
                break;
            case "image":
                g.image ? F(f) : g.image = e;
                break;
            case "linkContainer":
                g.se ? F(f) : g.se = e;
                break;
            case "link":
                g.link ? F(f) : g.link = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            cj: null,
            sg: null,
            kf: null,
            Ea: null,
            title: null,
            description: null,
            ph: null,
            qh: null,
            rh: null,
            ie: null,
            image: null,
            se: null,
            link: null
        }, b)
    }
    .call(a)
}
;function Us() {
    var a = {};
    var b = '<div class="p-sign-in-out__wrapper">\n    <div class="p-sign-in-out__avatar">\n        ' + E(Mf, "large", "avatar", a) + '\n    </div>\n    <div class="p-sign-in-out__title" data-export-id="title"></div>\n    <div class="p-sign-in-out__actions" data-export-id="actions">\n    \t' + E(Xn, {
        label: "",
        bd: !0
    }, "button", a) + "\n\t</div>\n</div>\n";
    return I(b, a, function(c, d, e) {
        switch (d) {
        case "root":
            e.root ? F(d) : e.root = c;
            break;
        case "avatar":
            e.lc ? F(d) : e.lc = c;
            break;
        case "button":
            e.button ? F(d) : e.button = c;
            break;
        case "title":
            e.title ? F(d) : e.title = c;
            break;
        case "actions":
            e.actions ? F(d) : e.actions = c;
            break;
        default:
            H(d)
        }
    }, {
        root: null,
        lc: null,
        button: null,
        title: null,
        actions: null
    }, void 0)
}
;function Vs(a) {
    var b = a.name
      , c = a.profile
      , d = a.action
      , e = a.aj;
    Bf.call(this, {
        Na: a.Na,
        qd: !0,
        Ga: a.Ga
    });
    this.u = b;
    this.g = Us();
    ec(this, "p-sign-in-out");
    a = c.g();
    L(this.g.title, a);
    c.$a && (c = c.$a) && Pf(this.g.lc, c);
    c = this.g;
    a = c.button;
    this.i = {
        root: c.root,
        Pe: [c.lc, a, c.title],
        ui: a
    };
    Ws(this, d, e)
}
z(Vs, Bf);
Vs.prototype.Dd = function() {
    return this.u || Bf.prototype.Dd.call(this)
}
;
function Ws(a, b, c) {
    var d = a.g
      , e = d.actions;
    d = d.button;
    d.nb(b.label);
    d.on(d.P, function() {
        a.B("popup-interaction", b.value)
    });
    c !== Xs && (d = new Xn({
        label: O.g.K.G(c === Ys ? "buttons.back" : "buttons.cancel"),
        value: c === Ys ? Zs : $s,
        bd: !0
    }),
    d.on(d.P, function() {
        a.B("popup-interaction", c === Ys ? Zs : $s)
    }),
    e.appendChild(d.L()),
    a.Ca(d),
    a.i.Pe.push(d))
}
function at(a) {
    return new Vs({
        name: bt,
        profile: a,
        action: {
            label: O.g.K.G("buttons.signInAs") + " " + a.l,
            value: ct,
            Sa: !0
        },
        aj: dt,
        Na: !0,
        Ga: !1
    })
}
var bt = "sign-in"
  , Ys = "back"
  , dt = "cancel"
  , Xs = "none"
  , ct = "continue"
  , Zs = "back"
  , $s = "cancel";
function et() {
    T.call(this, {
        Pd: !1
    });
    this.C = this.o = null;
    this.$ = ft;
    ec(this, "s-auth");
    this.i.g.on("qr-code-received", uh(this, this.kk.bind(this)));
    this.i.g.on("number-code-received", uh(this, this.jk.bind(this)));
    var a = this.g
      , b = a.sg;
    a = a.kf;
    b.on(b.P, uh(this, this.ak.bind(this)));
    a.on(a.P, uh(this, this.Fk.bind(this)));
    b = this.g.Ea;
    b.button.on(b.button.P, uh(this, this.uj.bind(this)))
}
z(et, T);
k = et.prototype;
k.va = function() {
    T.prototype.va.call(this);
    var a = this.g
      , b = a.ie
      , c = a.image
      , d = a.se;
    a = a.ph;
    this.$ === gt && this.i.g.v ? (nb(b),
    nb(d),
    mb(a),
    ht(this, {
        Hh: this.N.G("authScene.externalDeviceTitle"),
        zg: this.N.G("authScene.externalDeviceDescription")
    })) : (this.i.g.v = null,
    this.i.i.C ? (mb(b),
    nb(d),
    nb(a),
    ht(this, {
        Hh: this.N.G("authScene.title"),
        zg: this.N.G("authScene.description")
    })) : (mb(d),
    nb(b),
    nb(a),
    ht(this, {
        Hh: this.N.G("authScene.textLinkTitle"),
        zg: ""
    })),
    nb(c),
    Bd(b, "preload"));
    Bd(this.g.kf.L(), "agreement");
    it(this)
}
;
k.Ba = function() {
    T.prototype.Ba.call(this);
    var a = this.g
      , b = a.ie
      , c = a.image;
    a = a.se;
    nb(c);
    c.src = "";
    jt(this, "");
    Ad(b, "preload");
    Ad(b, "error");
    Ad(a, "long");
    b = this.i.g;
    b.u && (b.u(),
    b.u = null);
    b = this.i.profile;
    b.g && (b.g(),
    b.g = null);
    this.o && (this.o = this.o.cancel());
    this.C && (this.C = this.C.off())
}
;
k.ke = function(a) {
    this.$ = a
}
;
k.Rc = function() {
    return Ts
}
;
function jt(a, b) {
    a = a.g.link;
    L(a, b);
    zd(a, "empty", !b)
}
k.uj = function() {
    Ff().bb(this)
}
;
k.Fk = function() {
    var a = O.g.K;
    a = tq({
        items: [{
            title: a.G("agreements.vkPolicy"),
            url: a.G("agreements.vkPolicyUrl")
        }, {
            title: a.G("agreements.vkTerms"),
            url: a.G("agreements.vkTermsUrl")
        }]
    });
    (new Aq({
        name: "agreements",
        Oc: !0,
        description: kb(a.root),
        actions: [{
            label: O.g.K.G("buttons.close"),
            value: "cancel",
            Sa: !0
        }],
        Ga: !0
    })).bb(this)
}
;
function ht(a, b) {
    var c = b.zg;
    a = a.g;
    var d = a.description;
    L(a.title, b.Hh);
    L(d, c)
}
k.ak = function() {
    this.i.qa.sa()
}
;
k.kk = function(a, b) {
    var c = this, d, e, f, g, h, l, m, n, q, u;
    return D(function(w) {
        switch (w.g) {
        case 1:
            d = c.g;
            e = d.ie;
            f = d.image;
            g = d.se;
            if (c.i.i.C) {
                m = b.bf;
                if (n = window.qrCodeGenerator)
                    q = 156 * O.S,
                    (u = n.createQR(b.ce, {
                        qrSize: q,
                        isShowLogo: !0,
                        isShowBackground: !1
                    })) && (m = "data:image/svg+xml;base64," + btoa(u));
                w.j = 7;
                return B(w, Kf(m), 9)
            }
            h = b.ce;
            w.j = 4;
            var x = Yi(O.g.resources.Ql, {
                path: "method/utils.getShortLink",
                U: {
                    url: b.ce
                }
            }, mk);
            return B(w, x, 6);
        case 6:
            l = w.i;
            h = l.g;
            qa(w, 5);
            break;
        case 4:
            ra(w),
            Bd(g, "long");
        case 5:
            jt(c, h);
            w.g = 0;
            break;
        case 9:
            Ad(e, "preload");
            mb(f);
            f.src = m;
            qa(w, 0);
            break;
        case 7:
            ra(w),
            Bd(e, "error"),
            w.g = 0
        }
    })
}
;
k.jk = function(a, b) {
    a = String(b);
    b = Math.ceil(a.length / 2);
    var c = a.substr(b);
    L(this.g.qh, a.substr(0, b));
    L(this.g.rh, c)
}
;
function it(a) {
    var b, c;
    D(function(d) {
        switch (d.g) {
        case 1:
            if (a.o)
                return d.return();
            a.o = Cd(a.i.g.kc(!1));
            d.j = 2;
            return B(d, a.o, 4);
        case 4:
            b = d.i;
            qa(d, 3);
            break;
        case 2:
            b = c = ra(d);
        case 3:
            a.o = null;
            switch (b) {
            case "success":
                kt(a);
                break;
            case "error":
                throw new Ri({
                    name: "qr-auth-error",
                    icon: "error-circle",
                    title: O.g.K.G("applicationError.authorizationTitle"),
                    description: O.g.K.G("applicationError.authorizationDescription"),
                    actions: [{
                        label: O.g.K.G("buttons.repeat"),
                        value: "repeat",
                        Sa: !0
                    }, {
                        label: O.g.K.G("buttons.cancel"),
                        value: "cancel"
                    }]
                });
            case hl:
            case fl:
                it(a)
            }
            d.g = 0
        }
    })
}
function kt(a) {
    nb(a.g.image);
    a.C = Ed(a.i.profile, "change-profile");
    xh(a, a.C);
    a.C.then(a.rk.bind(a)).finally(function() {
        a.C = null
    })
}
k.rk = function(a) {
    var b = this
      , c = at(a);
    c.bb(this);
    Hf(c).then(function(d) {
        var e;
        return D(function(f) {
            if (1 == f.g)
                return d !== $s ? (f.g = 2,
                f = void 0) : f = B(f, xh(b, rl(b.i.g)), 2),
                f;
            if (4 != f.g)
                return e = b.i.za,
                B(f, xh(b, null !== e.l ? e.l : Promise.resolve()), 4);
            lt();
            lg(e);
            c.close();
            f.g = 0
        })
    })
}
;
var gt = "external"
  , ft = "program";
function mt(a) {
    var b = {};
    var c = '<div>\n\t<div class="w-tabs-block__items-container">\n\t\t<div class="w-tabs-block__slider" data-export-id="sliderContainer"></div>\n\t\t<div class="w-tabs-block__window-to-slide" data-export-id="slideWindow"></div>\n\t</div>\n\t' + E(uf, {
        icon: "arrow-left"
    }, "moveLeft", b) + "\n\t" + E(uf, {
        icon: "arrow-left",
        rotation: "180"
    }, "moveRight", b) + "\n</div>\n";
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "moveLeft":
            f.xb ? F(e) : f.xb = d;
            break;
        case "moveRight":
            f.Hb ? F(e) : f.Hb = d;
            break;
        case "sliderContainer":
            f.ia ? F(e) : f.ia = d;
            break;
        case "slideWindow":
            f.Ua ? F(e) : f.Ua = d;
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        xb: null,
        Hb: null,
        ia: null,
        Ua: null
    }, a)
}
;function nt(a) {
    return I('<div>\n    <div class="w-tab-item__title" data-export-id="title"></div>\n</div>\n', {}, function(b, c, d) {
        switch (c) {
        case "root":
            d.root ? F(c) : d.root = b;
            break;
        case "title":
            d.title ? F(c) : d.title = b;
            break;
        default:
            H(c)
        }
    }, {
        root: null,
        title: null
    }, a)
}
;function ot(a) {
    a = a.title;
    P.call(this);
    this.P = "click";
    a && this.nb(a);
    Xb(this, "w-tab-item")
}
z(ot, P);
ot.prototype.da = function(a, b) {
    return 21 === a ? (this.B(this.P),
    !0) : P.prototype.da.call(this, a, b)
}
;
ot.prototype.nb = function(a) {
    L(this.g.title, a)
}
;
function pt(a, b) {
    K(a.o, "_selected", b)
}
ot.prototype.pb = function() {
    return nt(vd(this))
}
;
function qt(a) {
    return a instanceof ot
}
function rt(a) {
    a = a.items;
    Og.call(this, !0);
    this.i = new Uf;
    this.u = !1;
    Xb(this, "w-tabs-block");
    this.D = this.vj.bind(this);
    this.i.on("item-selected", this.D);
    a && Vf(this.i, a)
}
z(rt, Og);
k = rt.prototype;
k.blur = function() {
    var a = this.i.g;
    if (a = this.j.filter(qt)[a])
        xg({
            Oe: a,
            Ob: this.g.Ua,
            Rb: this.g.ia
        }),
        this.T(a);
    Og.prototype.blur.call(this)
}
;
k.T = function(a, b) {
    b = Og.prototype.T.call(this, a, b);
    a instanceof ot && b && (a = this.j.filter(qt).indexOf(a),
    st(this, a));
    return b
}
;
k.mb = function(a, b) {
    a && !this.i.size() && tt(this, ut());
    this.u = a;
    Og.prototype.mb.call(this, a, b)
}
;
k.rb = function() {
    Og.prototype.rb.call(this);
    vt(this)
}
;
k.Ra = function() {
    Og.prototype.Ra.call(this);
    vt(this)
}
;
k.Vc = function(a, b) {
    b = void 0 === b ? "select" : b;
    switch (a) {
    case Infinity:
        a = this.i.size() - 1;
        break;
    case -Infinity:
        a = 0;
        break;
    default:
        var c = wt(this);
        a = Ke(c + a, 0, this.i.size() - 1);
        return xt(this, b, a, c)
    }
    return xt(this, b, a)
}
;
k.Ad = function(a, b) {
    var c = a.toLowerCase();
    a = this.i.i.findIndex(function(d) {
        return d.title.toLowerCase().includes(c)
    });
    return xt(this, b, a)
}
;
function tt(a, b) {
    Vf(a.i, b);
    yt(a);
    sg(a.g.ia, 0, void 0)
}
k.Uc = function() {
    var a = this.g;
    return {
        xb: a.xb,
        Hb: a.Hb,
        ia: a.ia,
        Ua: a.Ua
    }
}
;
k.Sd = function() {
    return {
        tc: [],
        ac: Mb(this).map(function(a) {
            return a.L()
        })
    }
}
;
k.xd = function() {
    return mt(Mg(this))
}
;
k.dg = function() {
    zt(this, -1)
}
;
k.eg = function() {
    zt(this, 1)
}
;
function zt(a, b) {
    b = Ke(a.i.g + b, 0, a.i.size() - 1);
    st(a, b, !0)
}
function wt(a) {
    var b = a.l
      , c = Object.entries(a.v).find(function(d) {
        d = p(d);
        d.next();
        return d.next().value === b
    });
    return a.i.i.findIndex(function(d) {
        return d.lb === c[0].split("tabItem_")[1]
    })
}
function xt(a, b, c, d) {
    d = void 0 === d ? wt(a) : d;
    var e = "open" === b && !isNaN(c) && -1 !== c;
    if ("select" === b && c !== d || e)
        if (c = Zf(a.i, c))
            return d = a.l,
            a.T(a.v["tabItem_" + c.lb] || null, d ? d.Xb() : null),
            "open" === b && At(a, c),
            !0;
    return !1
}
function vt(a) {
    var b = a.i.g;
    (b = a.j.filter(qt)[b]) && !b.gb() && a.T(b)
}
function At(a, b) {
    if (!a.u) {
        var c = b !== Yf(a.i);
        a.i.$e(b);
        a.B("tab-item-selected", b, c)
    }
}
function st(a, b, c) {
    var d = a.j.filter(qt)[b];
    c && At(a, Zf(a.i, b));
    xg({
        Oe: d,
        Ob: a.g.Ua,
        Rb: a.g.ia
    }, function() {
        return Kg(a)
    })
}
k.vj = function(a, b, c, d) {
    d && (a = this.v["tabItem_" + d.lb] || null,
    a instanceof ot && pt(a, !1));
    b && (b = this.v["tabItem_" + b.lb] || null,
    b instanceof ot && pt(b, !0))
}
;
function Bt(a, b) {
    var c = a.g.ia
      , d = b.lb
      , e = new ot({
        id: d,
        title: b.title
    });
    e.on(e.P, function() {
        At(a, b)
    });
    c.appendChild(e.L());
    a.Ca(e, "tabItem_" + d);
    return e
}
function Ct(a) {
    var b = a.g.ia;
    a.j.slice().filter(qt).forEach(function(c) {
        b.removeChild(c.L());
        Nb(a, c)
    })
}
function yt(a) {
    Ct(a);
    a.i.i.forEach(function(b, c) {
        b = Bt(a, b);
        0 === c && (a.T(b),
        pt(b, !0))
    })
}
function ut() {
    return Array.from(Array($f(3, 8))).map(function() {
        return hf({
            block_id: Math.round(100 * Math.random()),
            title: ag()
        })
    })
}
;function Dt(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-video-container">\n    <div class="s-video-menu">\n\t\t<div class="s-video-menu__title-row" data-export-id="titleRow">\n\t\t\t<div class="s-video-menu__title" data-export-id="title"></div>\n\t\t\t' + E(Xn, {
            label: this.K.G("videosListScene.clearWatchHistoryLabel"),
            bd: !1
        }, "clearWatchHistoryButton", c) + '\n\t\t</div>\n\t\t<div class="s-video-menu__slider" data-export-id="videoMenu">\n\t\t\t' + E(rt, {
            items: []
        }, "tabsBlock", c) + '\n\t\t</div>\n\t</div>\n\t<div class="s-video-content-container">\n\t\t' + E(hp, {
            yb: this.yb
        }, "videoList", c) + '\n\t</div>\n\t<div class="s-video-dialog" data-component="' + Ga(wq, {}, "dialogBlock", c) + '"></div>\n</div>\n';
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "dialogBlock":
                g.wa ? F(f) : g.wa = e;
                break;
            case "clearWatchHistoryButton":
                g.he ? F(f) : g.he = e;
                break;
            case "tabsBlock":
                g.Ib ? F(f) : g.Ib = e;
                break;
            case "videoList":
                g.ca ? F(f) : g.ca = e;
                break;
            case "titleRow":
                g.Gh ? F(f) : g.Gh = e;
                break;
            case "title":
                g.title ? F(f) : g.title = e;
                break;
            case "videoMenu":
                g.Rf ? F(f) : g.Rf = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            wa: null,
            he: null,
            Ib: null,
            ca: null,
            Gh: null,
            title: null,
            Rf: null
        }, b)
    }
    .call(a)
}
;function Et(a, b) {
    b = Error("" + (b ? b.id : a.id));
    return new Ri({
        name: Vi,
        title: a ? a.ja.text : "",
        actions: [{
            label: O.g.K.G("buttons.back"),
            value: Wi,
            Sa: !0
        }],
        error: b
    })
}
function Ft() {
    T.call(this);
    this.ya = this.$ = null;
    this.C = new Map;
    this.ja = this.o = null;
    this.Wa = this.wj.bind(this);
    this.Mb = this.xj.bind(this);
    this.ve = this.Hk.bind(this);
    this.ed = this.Gk.bind(this);
    this.pc = this.mk.bind(this);
    this.cd = this.vk.bind(this);
    this.oc = this.Xf.bind(this);
    this.Pb = this.ek.bind(this);
    this.jb = El(this.Vh.bind(this), 650);
    var a = this.g
      , b = a.ca
      , c = a.Ib;
    a = a.wa;
    ec(this, "s-video");
    Jb(this, b);
    Pb(this, b, "right", null);
    Pb(this, c, "right", null);
    Pb(this, a, "right", null)
}
z(Ft, T);
k = Ft.prototype;
k.va = function() {
    T.prototype.va.call(this);
    var a = this.g
      , b = a.ca
      , c = a.Ib
      , d = a.he;
    a.wa.on("dialog-block-interaction", this.Wa);
    b.on("media-list-item-click", this.Mb);
    O.g.i.preview !== Pl && (b.on("stop-video-preview", this.ve),
    b.on("play-video-preview", this.ed));
    b.on("media-list-items-added", this.pc);
    b.on("media-list-empty", this.oc);
    c.on("tab-item-selected", this.cd);
    d.on(d.P, this.Pb)
}
;
k.Ba = function() {
    T.prototype.Ba.call(this);
    var a = this.g
      , b = a.ca
      , c = a.Ib
      , d = a.he;
    a.wa.off("dialog-block-interaction", this.Wa);
    b.off("media-list-item-click", this.Mb);
    b.off("stop-video-preview", this.ve);
    b.off("play-video-preview", this.ed);
    b.off("media-list-items-added", this.pc);
    b.off("media-list-empty", this.oc);
    c.off("tab-item-selected", this.cd);
    d.off(d.P, this.Pb);
    this.$ = null;
    Gt(this, !1)
}
;
k.da = function(a, b) {
    return 20 === a && this.o ? (this.o.cancel(),
    !0) : T.prototype.da.call(this, a, b)
}
;
k.Pa = function() {
    var a = this
      , b = T.prototype.Pa.call(this)
      , c = this.ja;
    return function() {
        var d = Promise
          , e = d.all
          , f = b();
        a.ja = c;
        Gt(a, "watchHistory" === a.ja);
        return e.call(d, [f, void 0])
    }
}
;
k.prepare = function(a, b) {
    var c = b.Wk
      , d = b.title;
    this.ja = b.qc || null;
    var e = this.g
      , f = e.ca
      , g = e.wa
      , h = e.Ib;
    e = e.Rf;
    this.ya = {
        title: this.i.K.G(c.title),
        description: this.i.K.G(c.description),
        icon: c.icon,
        actions: [{
            label: this.i.K.G("buttons.back"),
            value: ""
        }]
    };
    (c = d || null) && L(this.g.title, c);
    M(this.g.title, !!c);
    g.hide();
    f.show();
    jp(f, a);
    zd(this.L(), "albums-layout", a === gp);
    f.clear(!0);
    a = b.Dh;
    b = 1 < a.length;
    M(e, b);
    h.ab(b);
    tt(h, a);
    h.mb(!0, {
        ac: [this.g.title]
    });
    Gt(this, !1)
}
;
function Ht(a, b, c) {
    a.$ = c;
    a.C.clear();
    var d = a.g
      , e = d.Ib;
    c = d.ca;
    var f = d.wa
      , g = b && b.g || []
      , h = 1 < g.length;
    M(d.Rf, h);
    e.ab(h);
    tt(e, g);
    e.mb(!1, {
        ac: [a.g.title]
    });
    if (b && b.i && (d = b.g[0],
    g = b.i,
    h = g.block,
    b = h.id,
    e = h.Da,
    h = h.dataType,
    g = g.ba.concat(g.sb),
    g.length)) {
        f.hide();
        Gt(a, "watchHistory" === a.ja);
        kp(c, g, h, d.lb || b, e || void 0);
        return
    }
    a.Xf()
}
k.reload = function() {
    var a = this;
    return null !== this.$ ? this.$().then(function(b) {
        Ht(a, b, a.$)
    }) : Promise.reject()
}
;
k.ef = function() {
    return T.prototype.ef.call(this).concat([this.g.ca, this.g.Ib])
}
;
k.Aa = function(a, b) {
    return 20 === a ? (this.l === this.g.ca && this.g.Ib.isEnabled() ? this.T(this.g.Ib) : O.Wd(),
    !0) : T.prototype.Aa.call(this, a, b)
}
;
k.ec = function() {
    return {
        yb: this.Uh.bind(this),
        K: this.i.K
    }
}
;
k.Rc = function() {
    return Dt
}
;
k.Cc = function(a, b, c) {
    T.prototype.Cc.call(this, a, b, c);
    So(this.g.ca)
}
;
function Gt(a, b) {
    a = a.g;
    var c = a.Gh;
    Ub(a.he, b);
    zd(c, "with-button", b)
}
k.wj = function() {
    this.u && this.T(this.u)
}
;
k.Hk = function() {
    Ql(this.i.l)
}
;
k.Gk = function(a, b) {
    this.i.l.play(b)
}
;
k.xj = function(a, b) {
    b !== ip && (this.i.l && Ql(this.i.l),
    It(this, b))
}
;
k.ek = function() {
    var a = this
      , b = Gq();
    b.once("popup-interaction", function(c, d) {
        d === Iq && (d = a.g,
        c = d.wa,
        d = d.ca,
        d.clear(!0),
        c.hide(),
        d.show(),
        Gt(a, !1),
        Yi(a.i.resources.video, {
            path: "method/video.clearViewingHistoryRecords",
            fo: ti,
            Zn: uk
        }).finally(function() {
            return a.reload().catch(function() {
                a.Xf()
            })
        }))
    });
    b.bb(this)
}
;
k.mk = function(a, b, c, d, e) {
    d.includes(ip) || Jt(this, b, c, d, e)
}
;
k.vk = function(a, b, c) {
    c && (this.g.ca.clear(!0),
    this.C.has(b.lb) ? this.Vh(b) : this.jb(b))
}
;
k.Uh = function(a, b) {
    return Kt(this.i.resources.Bd, a, b).then(function(c) {
        return c ? {
            items: c.ba.concat(c.sb),
            Da: c.block.Da
        } : {
            items: []
        }
    })
}
;
function Jt(a, b, c, d, e) {
    c = {
        dataType: c,
        Da: e,
        items: d
    };
    if (b) {
        if (a.C.has(b)) {
            var f = a.C.get(b);
            c.items = f.items.concat(f.Da === e ? [] : d)
        }
        a.C.set(b, c)
    }
}
function It(a, b) {
    var c = {
        Lk: function() {
            a.o = null
        }
    }
      , d = null;
    if (b instanceof Ne)
        if (b.zf)
            a.o = Cd(Promise.resolve(dm(b))),
            d = Et(b);
        else {
            var e = Nk(a.i.resources.video, b, 10);
            a.o = Cd(e.then(function(f) {
                f = fm([f && f.i || b].concat(r(f && f.ba || [])), void 0, f);
                f.fa.title = a.N.G("playerScene.related");
                return f
            }), c)
        }
    b instanceof Ve && (a.o = Cd(Jk(a.i.resources.video, b).then(function(f) {
        var g = f && f.ba || []
          , h = g.filter(function(l) {
            return !l.zf
        }) || [];
        h.length ? (f = fm(h, b, f),
        f.fa.title = b.title) : (d = Et(g[0], b),
        f = dm(g[0], b));
        return f
    }), c));
    a.D.block(a.o.then(function(f) {
        if (!f || !f.items.length) {
            var g = Error(f.album.id);
            d = new Ri({
                name: Vi,
                title: O.g.K.G("applicationError.emptyPlaylist"),
                actions: [{
                    label: O.g.K.G("buttons.back"),
                    value: Wi,
                    Sa: !0
                }],
                error: g
            })
        }
        d ? Cq({
            error: d,
            Na: !1,
            Ga: !0
        }).bb(a) : Lt(a.i.qa, f);
        a.o = null
    }))
}
k.Vh = function(a) {
    var b = this;
    this.jb.cancel();
    var c = this.g
      , d = c.ca;
    c = c.wa;
    var e = this.C.get(a.lb);
    d.show();
    c.hide();
    e ? d.O.then(function() {
        return kp(d, e.items, e.dataType, a.lb, e.Da)
    }) : this.Uh(a.lb).then(function(f) {
        var g = f.items;
        f = f.Da;
        var h = Yf(b.g.Ib.i);
        h && h.lb !== a.lb ? Jt(b, a.lb, $e, g, f) : kp(d, g, $e, a.lb, f)
    })
}
;
k.Xf = function() {
    var a = this.g
      , b = a.wa
      , c = a.ca;
    a = a.Ib;
    c.hide();
    Gt(this, !1);
    this.ya && (yq(b, this.ya),
    b.show());
    this.l === c && (this.ya ? this.T(b) : a.isEnabled() && this.T(a))
}
;
function Mt(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-owner-video__container">\n\t<div class="s-owner-video__menu">\n\t\t<div class="s-owner-video__layout-pin-left">\n\t\t\t' + E(uf, {
            icon: "arrow-left"
        }, "goBack", c) + '\n\t\t\t<div class="s-owner-video__avatar">\n\t\t\t\t' + E(Mf, "medium", "avatar", c) + '\n\t\t\t</div>\n\t\t\t<div class="s-owner-video__owner-info">\n\t\t\t\t<div class="s-owner-video__owner-info-name" data-export-id="ownerName"></div>\n\t\t\t\t<div class="s-owner-video__owner-info-subscriptions" data-export-id="ownerSubscriptions"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="s-owner-video__layout-pin-right">\n\t\t\t<div class="s-owner-video__owner-subscribe">\n\t\t\t\t' + E(Xn, {
            label: "",
            value: ""
        }, "subscription", c) + '\n\t\t\t</div>\n\t\t</div>\n    </div>\n\n\t<div class="s-owner-video__content-container">\n\t\t<div class="s-owner-video__empty-container" data-export-id="emptyContainer" style="display: none;">\n\t\t\t<div class="s-owner-video__empty-title">' + Ha(this.K.G("ownerVideosListScene.empty")) + "</div>\n\t\t</div>\n\n\t\t" + E(hp, {
            je: ap,
            yb: this.yb
        }, "videoList", c) + "\n\t</div>\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "goBack":
                g.sa ? F(f) : g.sa = e;
                break;
            case "avatar":
                g.lc ? F(f) : g.lc = e;
                break;
            case "subscription":
                g.Ab ? F(f) : g.Ab = e;
                break;
            case "videoList":
                g.ca ? F(f) : g.ca = e;
                break;
            case "ownerName":
                g.Ff ? F(f) : g.Ff = e;
                break;
            case "ownerSubscriptions":
                g.Gf ? F(f) : g.Gf = e;
                break;
            case "emptyContainer":
                g.eb ? F(f) : g.eb = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            sa: null,
            lc: null,
            Ab: null,
            ca: null,
            Ff: null,
            Gf: null,
            eb: null
        }, b)
    }
    .call(a)
}
;function Nt() {
    T.call(this, {
        Pd: !1
    });
    var a = this;
    this.re = "videos_group";
    this.o = null;
    var b = this.g
      , c = b.ca
      , d = b.Ab;
    b = b.sa;
    c.on("media-list-item-click", uh(this, function(e, f) {
        f instanceof Ne && Ot(a, f)
    }));
    c.on("stop-video-preview", uh(this, function() {
        return Ql(a.i.l)
    }));
    c.on("play-video-preview", uh(this, function(e, f) {
        Ql(a.i.l);
        a.i.l.play(f, !0)
    }));
    d.on(d.P, uh(this, this.gk.bind(this)));
    b.button.on(b.button.P, uh(this, function() {
        return a.i.qa.sa()
    }));
    this.i.Qa.on(this.i.Qa.j, function(e, f, g) {
        f && a.o && f.id !== a.o.id || (a.o = f,
        Pt(a, !0, !!g))
    });
    ec(this, "s-owner-video");
    Jb(this, c);
    Pb(this, c, "right", null);
    Pb(this, c, "left", null);
    Pb(this, c, "down", null)
}
z(Nt, T);
k = Nt.prototype;
k.prepare = function(a) {
    this.o = a;
    var b = void 0 === b ? !1 : b;
    if (this.o) {
        this.o.$a && !b && Pf(this.g.lc, this.o.$a);
        b = this.o.g();
        L(this.g.Ff, b);
        var c = this.o instanceof xe;
        Pt(this, c, c && this.o.i);
        b = this.i.K.G(c ? "group.type" : "profile.type");
        var d = c ? " · " : ""
          , e = "";
        c && (c = this.o.j,
        e = this.i.K.G("group.membersPlural", {
            members: c
        }),
        1E3 <= c && (e = Je(c) + " " + this.i.K.G("group.members")));
        L(this.g.Gf, b + d + e)
    } else
        L(this.g.Ff, ""),
        Pt(this, !1),
        Pf(this.g.lc, ""),
        L(this.g.Gf, "");
    this.i.Qa.wc(a);
    b = this.g;
    a = b.ca;
    b = b.eb;
    a.show();
    a.clear(!0);
    nb(b)
}
;
function Qt(a, b) {
    var c = a.g
      , d = c.ca
      , e = c.sa;
    c = c.eb;
    var f = b.ba
      , g = b.g;
    d.O.then(function() {
        kp(d, f, $e, "block_" + a.o, null !== g ? String(g) : void 0)
    });
    f.length || (a.T(e),
    mb(c))
}
k.Aa = function(a, b) {
    return 20 === a && this.l === this.g.ca && this.g.Ab.isEnabled() ? (this.T(this.g.Ab),
    !0) : T.prototype.Aa.call(this, a, b)
}
;
k.ec = function() {
    return {
        yb: this.yj.bind(this),
        K: this.i.K
    }
}
;
k.Rc = function() {
    return Mt
}
;
k.Cc = function(a, b, c) {
    T.prototype.Cc.call(this, a, b, c);
    So(this.g.ca)
}
;
function Pt(a, b, c) {
    c = void 0 === c ? !1 : c;
    var d = a.g
      , e = d.Ab;
    d = d.sa;
    var f = e.L()
      , g = a.o.id === a.i.profile.profile.id;
    b = !a.i.g.j && !g && b;
    e.ab(b);
    M(e.L(), b);
    b ? (b = a.i.K.G(c ? "group.alreadySubscribed" : "group.subscribe"),
    e.nb(b),
    zd(f, "subscribed", c),
    Pb(a, e, "left", d, !0)) : delete xb(a.F, e).left
}
k.gk = function() {
    if (this.o instanceof xe) {
        var a = this.o.i;
        Pt(this, !0, !a);
        a ? nr(this.i.Qa) : mr(this.i.Qa)
    }
}
;
k.yj = function(a, b) {
    return Sk(this.i.resources.video, this.o, parseInt(void 0 === b ? "0" : b, 10), 16).then(function(c) {
        if (!c)
            return {
                items: []
            };
        var d = c.g;
        return {
            items: c.ba,
            Da: null === d ? null : String(d)
        }
    })
}
;
function Ot(a, b) {
    var c = Nk(a.i.resources.video, b).then(function(d) {
        d = fm([d && d.i || b].concat(r(d && d.ba || [])), void 0, d);
        d.fa.title = a.N.G("playerScene.related");
        return d
    });
    a.D.block(c.then(function(d) {
        d && Lt(a.i.qa, d)
    }))
}
;function Rt(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-broken__wrapper" data-component="' + Ga(wq, {
            icon: "logo-vk",
            title: this.K.G("brokenScene.title"),
            description: this.K.G("brokenScene.description"),
            actions: this.actions
        }, "dialogBlock", c) + '"></div>\n\n' + E(uf, {
            icon: "info-circle"
        }, "techInfo", c) + "\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "dialogBlock":
                g.wa ? F(f) : g.wa = e;
                break;
            case "techInfo":
                g.Ea ? F(f) : g.Ea = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            wa: null,
            Ea: null
        }, b)
    }
    .call(a)
}
;function St() {
    T.call(this, {
        Pd: !1
    });
    ec(this, "s-broken");
    var a = this.g
      , b = a.Ea;
    a.wa.on("dialog-block-interaction", uh(this, this.o.bind(this)));
    b.button.on(b.button.P, uh(this, this.C.bind(this)))
}
z(St, T);
St.prototype.Rc = function() {
    return Rt
}
;
St.prototype.ec = function() {
    return Object.assign({}, T.prototype.ec.call(this), {
        actions: [{
            label: this.N.G("buttons.restart"),
            value: Tt
        }, {
            label: this.N.G("buttons.hardReset"),
            value: Ut
        }]
    })
}
;
St.prototype.o = function(a, b) {
    switch (b) {
    case Tt:
        Vt(this);
        break;
    case Ut:
        window.localStorage.clear(),
        Vt(this)
    }
}
;
function Vt(a) {
    a.D.block(new Promise(function() {}
    ));
    setTimeout(function() {
        location.reload()
    }, 350)
}
St.prototype.C = function() {
    Ff().bb(this)
}
;
var Tt = "restart"
  , Ut = "reset";
function Wt(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-no-internet__wrapper" data-component="' + Ga(wq, {
            icon: "error-circle",
            title: this.K.G("noInternetScene.title"),
            description: this.K.G("noInternetScene.description"),
            actions: this.actions
        }, "dialogBlock", c) + '"></div>\n\n' + E(uf, {
            icon: "info-circle"
        }, "techInfo", c) + "\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "dialogBlock":
                g.wa ? F(f) : g.wa = e;
                break;
            case "techInfo":
                g.Ea ? F(f) : g.Ea = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            wa: null,
            Ea: null
        }, b)
    }
    .call(a)
}
;function Xt() {
    T.call(this, {
        Pd: !1
    });
    ec(this, "s-no-internet");
    var a = this.g
      , b = a.Ea;
    a.wa.on("dialog-block-interaction", uh(this, this.zj.bind(this)));
    b.button.on(b.button.P, uh(this, this.Aj.bind(this)));
    this.C = this.Rj.bind(this);
    this.o = this.Qj.bind(this)
}
z(Xt, T);
k = Xt.prototype;
k.va = function() {
    T.prototype.va.call(this);
    O.device.once(O.device.o, this.C);
    this.i.v.on("internet-available", this.o);
    Yt(this.i.v)
}
;
k.Ba = function() {
    T.prototype.Ba.call(this);
    var a = this.i.v;
    a.i && (a.i.stop(),
    a.i = null);
    O.device.off(O.device.o, this.C);
    this.i.v.off("internet-available", this.o)
}
;
k.Rc = function() {
    return Wt
}
;
k.ec = function() {
    return Object.assign({}, T.prototype.ec.call(this), {
        actions: [{
            label: this.N.G("buttons.checkInternet"),
            value: Zt,
            Sa: !1
        }]
    })
}
;
k.zj = function() {
    var a = this.g.wa;
    a.ab(!1);
    Dd(3E3).then(function() {
        a.ab(!0)
    })
}
;
k.Rj = function(a, b) {
    b && $t(this.i.v, !0)
}
;
k.Qj = function() {
    var a = this.i.v;
    a.i && (a.i.stop(),
    a.i = null);
    O.O = !1;
    O.g.qa.sa()
}
;
k.Aj = function() {
    Ff().bb(this)
}
;
var Zt = "check";
function au() {
    return I('<div class="w-div-input__wrapper" data-export-id="slider">\n\t<div class="w-div-input__input _placeholder" data-export-id="placeholder"></div>\n\t<div class="w-div-input__input" data-export-id="inputText"></div>\n\t<div class="w-div-input__input _fake" data-export-id="textBeforeCaret"></div>\n</div>\n', {}, function(a, b, c) {
        switch (b) {
        case "root":
            c.root ? F(b) : c.root = a;
            break;
        case "slider":
            c.nd ? F(b) : c.nd = a;
            break;
        case "placeholder":
            c.placeholder ? F(b) : c.placeholder = a;
            break;
        case "inputText":
            c.Ng ? F(b) : c.Ng = a;
            break;
        case "textBeforeCaret":
            c.Ie ? F(b) : c.Ie = a;
            break;
        default:
            H(b)
        }
    }, {
        root: null,
        nd: null,
        placeholder: null,
        Ng: null,
        Ie: null
    }, void 0)
}
;function bu(a, b) {
    Yb.call(this, a);
    this.Ja = b && b.rl || 20;
    this.g = au();
    this.J = this.Ma();
    this.D = this.D.bind(this);
    this.jg(b && b.type || cu);
    L(this.g.placeholder, b && b.placeholder || "")
}
z(bu, Yb);
function du(a) {
    return eu(a, a.u - 1)
}
function fu(a) {
    return eu(a, a.u + 1)
}
function gu(a, b, c) {
    hu(a, b);
    eu(a, b.length);
    c || a.D()
}
function iu(a, b) {
    var c = a.Ma()
      , d = a.u;
    c = c.substr(0, d) + b + c.substr(d);
    c = c.slice(0, a.Ja);
    hu(a, c);
    eu(a, d + b.length);
    a.D()
}
function ju(a) {
    var b = a.Ma()
      , c = a.u;
    b = b.substr(0, c - 1) + b.substr(c);
    hu(a, b);
    eu(a, c - 1);
    a.D()
}
bu.prototype.Aa = function(a, b) {
    var c = !1;
    switch (a) {
    case 3:
        c = fu(this);
        break;
    case 21:
        this.D();
        this.B("finish", this.Ma());
        c = !0;
        break;
    case 1:
        c = du(this);
        break;
    case 38:
        ju(this);
        c = !0;
        break;
    default:
        b && b instanceof KeyboardEvent && (a = O.device.input.le(b),
        a = bd(a),
        null !== a ? (b.preventDefault(),
        iu(this, a),
        c = !0) : c = !1)
    }
    return c
}
;
bu.prototype.jg = function() {}
;
bu.prototype.D = function() {
    var a = this.Ma();
    this.J !== a && (this.J = a,
    this.B("change", this.J))
}
;
var cu = "text";
function ku(a, b) {
    bu.call(this, a, b);
    this.O = !1;
    this.S = !!b.kj;
    this.i = "";
    this.u = 0;
    a.classList.add("w-div-input");
    a.appendChild(this.g.root);
    this.$ = b && "number" === typeof b.Rk ? b.Rk : 1;
    this.g.Ie.style.borderRightWidth = Q(this.$) + "px";
    M(this.g.placeholder, !this.i);
    lu(this, !!b.kj)
}
z(ku, bu);
k = ku.prototype;
k.La = function() {
    bu.prototype.La.call(this);
    mu(this, this.u);
    nu(this, !0)
}
;
k.Ba = function() {
    bu.prototype.Ba.call(this);
    ou(this)
}
;
k.focus = function(a) {
    bu.prototype.focus.call(this, a);
    lu(this, !0);
    this.isVisible() && this.Fc && !this.O && (nu(this, !0),
    pu(this))
}
;
k.blur = function() {
    bu.prototype.blur.call(this);
    this.S || (lu(this, !1),
    this.S = !1,
    ou(this),
    nu(this, !1))
}
;
function eu(a, b) {
    if (0 > b || b > a.i.length)
        return !1;
    a.u = b;
    mu(a, b);
    return !0
}
k.Ma = function() {
    return this.i
}
;
function lu(a, b) {
    K(a.o, "_caret-visible", b)
}
function pu(a) {
    a.C = null;
    a.Z = window.requestAnimationFrame(a.Zh.bind(a));
    a.O = !0;
    nu(a, !0)
}
function nu(a, b) {
    a.ja = b;
    K(a.g.Ie, "__invisible", !b)
}
k.Aa = function(a) {
    var b = !1;
    a = bd(a);
    null !== a && (iu(this, a),
    b = !0);
    return b
}
;
function hu(a, b) {
    a.i = b;
    M(a.g.placeholder, !a.i);
    L(a.g.Ng, a.i);
    mu(a, a.u)
}
k.jg = function(a) {
    this.o.classList.add("_type-text");
    bu.prototype.jg.call(this, a)
}
;
k.Zh = function(a) {
    this.C = this.C || a;
    500 <= a - this.C && (nu(this, !this.ja),
    this.C = null);
    this.Z = window.requestAnimationFrame(this.Zh.bind(this))
}
;
function ou(a) {
    window.cancelAnimationFrame(a.Z);
    a.O = !1;
    a.C = null;
    nu(a, !1)
}
function mu(a, b) {
    var c = a.i
      , d = "";
    b >= c.length ? d = c : 0 < b && (d = c.substr(0, b));
    a = a.g.Ie;
    ob(a);
    L(a, d);
    d = document.createElement("div");
    d.classList.add("__input-caret");
    a.appendChild(d)
}
;function qu(a, b) {
    var c = !1;
    if (b && b.data) {
        var d = b.data;
        c = b.jj
    }
    df.call(this, a, d, c);
    this.D = null;
    a.classList.add("w-button");
    b && b.title ? this.nb(b.title) : b && b.icon && this.i(b.icon);
    b && b.tl && zd(this.L(), b.tl, !0)
}
z(qu, df);
qu.prototype.i = function(a) {
    this.L().innerHTML = "";
    null === this.D ? (this.D = new of({
        name: a
    }),
    this.Ca(this.D),
    this.L().appendChild(this.D.L())) : this.D.i(a)
}
;
qu.prototype.nb = function(a) {
    L(this.L(), a)
}
;
var ru = {}
  , su = (ru.right = "arrow-left",
ru.left = "arrow-left",
ru.enter = "search",
ru.backspace = "backspace",
ru.space = "space",
ru);
function tu(a, b) {
    Yb.call(this, a);
    this.D = [];
    this.C = b.type;
    this.g = b.lang;
    this.P = "click";
    this.i = this.i.bind(this);
    this.u = this.u.bind(this)
}
z(tu, Yb);
function uu(a) {
    var b = a.D.find(function(c) {
        return "enter" === c.data
    });
    b && a.T(b)
}
tu.prototype.J = function(a) {
    var b = a.getAttribute("data-keyboard-action")
      , c = a.textContent
      , d = a.getAttribute("data-keyboard-name") || void 0
      , e = "true" === a.getAttribute("with-long-press")
      , f = "true" === a.getAttribute("data-keyboard-default");
    a = b ? new qu(a,{
        icon: c ? void 0 : su[b],
        title: c || void 0,
        data: b,
        jj: e
    }) : new qu(a,{
        title: c,
        data: c,
        jj: e
    });
    this.Ca(a, d);
    f && Jb(this, a);
    a.on(a.P, this.i);
    a.on("long-press", this.u);
    this.D.push(a)
}
;
tu.prototype.i = function(a, b) {
    this.B(this.P, b)
}
;
tu.prototype.u = function(a, b) {
    this.B("long-press", b)
}
;
function vu(a) {
    P.call(this);
    this.o.classList.add("w-abstract-keyboard");
    this.J = [];
    this.i = a && a.input || null;
    this.u = a && a.ao || !1;
    wu(this, this.u)
}
z(vu, P);
function xu(a, b) {
    yu(a, b, a.C.g)
}
k = vu.prototype;
k.fc = function(a) {
    yu(this, this.C.C, a)
}
;
function yu(a, b, c) {
    (b = zu(a, b, c)) && Au(a, b)
}
function wu(a, b) {
    K(a.o, "_caps", b)
}
function Bu(a, b, c) {
    c.forEach(b.J.bind(b));
    b.on(b.P, a.lk.bind(a));
    b.on("long-press", a.pk.bind(a));
    a.J.push(b)
}
function Au(a, b) {
    a.C = b;
    a.J.forEach(function(c) {
        Ub(c, c === b)
    });
    a.T(b);
    b.T(b.ua)
}
function zu(a, b, c) {
    return a.J.filter(function(d) {
        var e = !d.g || !c || d.g === c;
        return d.C === b && e
    })[0]
}
k.lk = function(a, b) {
    this.di(b) || (a = b,
    this.u && (a = b.toUpperCase()),
    this.i && iu(this.i, a))
}
;
k.pk = function(a, b) {
    this.ei(b)
}
;
k.ei = function() {}
;
k.di = function(a) {
    switch (a) {
    case Cu:
        return this.i && du(this.i),
        !0;
    case Du:
        return this.i && fu(this.i),
        !0;
    case Eu:
        return this.i && ju(this.i),
        !0;
    case Fu:
        return this.u = !this.u,
        wu(this, this.u),
        !0;
    default:
        return !1
    }
}
;
var Cu = "move-caret-left"
  , Du = "move-caret-right"
  , Eu = "delete-before-caret"
  , Fu = "toggle-caps";
function Gu(a) {
    var b = {}
      , c = "";
    c += '<div class="w-keyboard-extended">\n\t\x3c!--ABC english keyboard--\x3e\n\t<div class="w-keyboard-extended__layout _english zb-clear" data-component="' + Ga(tu, {
        type: "abc",
        lang: "en"
    }, "layoutAbcEn", b) + '">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "qwertyuiop".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "asdfghjkl'".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "zxcvbnm-,.".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line _action-line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _switch-lang" data-export-id="itemsAbcEn" data-keyboard-action="lang-ru" data-keyboard-default="true">РУС</div>\n\t\t\t\t<div class="w-keyboard-extended-item _symbols" data-export-id="itemsAbcEn" data-keyboard-action="type-num">&123</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace" data-export-id="itemsAbcEn" data-keyboard-action="space"></div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace" data-export-id="itemsAbcEn" data-keyboard-action="backspace" with-long-press=true></div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter" data-export-id="itemsAbcEn" data-keyboard-action="enter"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\x3c!--ABC russian keyboard--\x3e\n\t<div class="w-keyboard-extended__layout _russian zb-clear" data-component="' + Ga(tu, {
        type: "abc",
        lang: "ru"
    }, "layoutAbcRu", b) + '">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "йцукенгшщзхъ".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "фывапролджэё".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "ячсмитьбю-,.".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line _action-line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _switch-lang" data-export-id="itemsAbcRu" data-keyboard-action="lang-en" data-keyboard-default="true">ENG</div>\n\t\t\t\t<div class="w-keyboard-extended-item _symbols" data-export-id="itemsAbcRu" data-keyboard-action="type-num">&123</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace" data-export-id="itemsAbcRu" data-keyboard-action="space"></div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace" data-export-id="itemsAbcRu" data-keyboard-action="backspace" with-long-press=true></div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter" data-export-id="itemsAbcRu" data-keyboard-action="enter"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\x3c!--NUM keyboard--\x3e\n\t<div class="w-keyboard-extended__layout _symbols-common zb-clear" data-component="' + Ga(tu, {
        type: "num"
    }, "layoutSymbolsCommon", b) + '">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "1234567890".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "@#$%&()<>*\"'".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
    "/\\:;`+=?!-,.".split("").forEach(function(d) {
        c += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">' + d + "</div>\n\t\t\t\t"
    });
    c += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line _action-line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _characters" data-keyboard-name="abc" data-export-id="itemsSymbolsCommon" data-keyboard-action="type-abc" data-keyboard-default="true">ABC</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace" data-export-id="itemsSymbolsCommon" data-keyboard-action="space"></div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace" data-export-id="itemsSymbolsCommon" data-keyboard-action="backspace" with-long-press=true></div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter" data-export-id="itemsSymbolsCommon" data-keyboard-action="enter"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n';
    return I(c, b, function(d, e, f) {
        switch (e) {
        case "root":
            f.root ? F(e) : f.root = d;
            break;
        case "layoutAbcEn":
            f.Tg ? F(e) : f.Tg = d;
            break;
        case "layoutAbcRu":
            f.Ug ? F(e) : f.Ug = d;
            break;
        case "layoutSymbolsCommon":
            f.Vg ? F(e) : f.Vg = d;
            break;
        case "itemsAbcEn":
            f.Ji.push(d);
            break;
        case "itemsAbcRu":
            f.Ki.push(d);
            break;
        case "itemsSymbolsCommon":
            f.Li.push(d);
            break;
        default:
            H(e)
        }
    }, {
        root: null,
        Tg: null,
        Ug: null,
        Vg: null,
        Ji: [],
        Ki: [],
        Li: []
    }, a)
}
;function Hu() {
    vu.call(this);
    this.D = "ru";
    Bu(this, this.g.Tg, this.g.Ji);
    Bu(this, this.g.Ug, this.g.Ki);
    Bu(this, this.g.Vg, this.g.Li);
    yu(this, "abc", this.D)
}
z(Hu, vu);
Hu.prototype.fc = function(a) {
    vu.prototype.fc.call(this, a);
    a && (this.D = a,
    this.B("lang-switch", a))
}
;
Hu.prototype.pb = function() {
    return Gu(vd(this))
}
;
Hu.prototype.ei = function(a) {
    switch (a) {
    case "backspace":
        this.i && gu(this.i, "")
    }
}
;
Hu.prototype.di = function(a) {
    var b = !0;
    switch (a) {
    case "enter":
        this.B("enter");
        break;
    case "caps":
        this.u = !this.u;
        wu(this, this.u);
        break;
    case "backspace":
        this.i && ju(this.i);
        break;
    case "space":
        this.i && iu(this.i, " ");
        break;
    case "left":
        this.i && du(this.i);
        break;
    case "right":
        this.i && fu(this.i);
        break;
    case "lang":
        xu(this, "abc");
        "en" === this.D ? this.fc("ru") : this.fc("en");
        break;
    case "lang-ru":
        this.fc("ru");
        break;
    case "lang-en":
        this.fc("en");
        break;
    case "type-abc":
        xu(this, "abc");
        "en" === this.D ? this.fc("en") : this.fc("ru");
        break;
    case "type-symbol":
        xu(this, "symbol");
        break;
    case "type-num":
        xu(this, "num");
        break;
    default:
        b = !1
    }
    return b
}
;
function Iu(a, b) {
    return function() {
        var c = {};
        var d = '<div class="w-more-tile">\n    <div class="w-more-tile__cover" data-export-id="cover">\n\t\t<div class="w-more-tile__title">' + Ha(this.K.G("searchScene.showAll")) + "</div>\n    \t" + E(of, {
            name: "arrow-left"
        }, "__null__", c) + "\n\t</div>\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "__null__":
                g.ib ? F(f) : g.ib = e;
                break;
            case "cover":
                g.Za ? F(f) : g.Za = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            ib: null,
            Za: null
        }, b)
    }
    .call(a)
}
;function Ju() {
    Jg.call(this);
    this.P = "click"
}
z(Ju, Jg);
Ju.prototype.da = function(a, b) {
    return 21 === a ? (this.B(this.P),
    !0) : Jg.prototype.da.call(this, a, b)
}
;
Ju.prototype.xd = function() {
    return Iu(this.Ve(), Mg(this))
}
;
Ju.prototype.Ve = function() {
    return {
        K: O.g.K
    }
}
;
Ju.prototype.Uc = function() {}
;
function Ku(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-search__input-mode" data-component="' + Ga(nh, {
            Qg: !0
        }, "inputModeContainer", c) + '">\n\t<div class="s-search-input-container" data-export-id="inputContainer">\n\t\t<div data-component="' + Ga(ku, {
            kj: !0,
            rl: this.pl
        }, "searchQueryInput", c) + '"></div>\n\t\t' + E(uf, {
            icon: "cancel"
        }, "clearQueryButton", c) + '\n\t</div>\n\n\t<div class="s-search-history-and-keyboard">\n\t\t<div class="s-search__history-container" data-export-id="historyContainer">\n    \t\t<div class="s-search__history-entries-container" data-component="' + Ga(nh, {
            Qg: !0
        }, "suggestionsContainer", c) + '"></div>\n    \t</div>\n\t\t' + E(Hu, {}, "keyboard", c) + '\n\t</div>\n\n\t<div class="s-search__results-container" data-export-id="resultsContainer">\n\t\t<div class="s-search__results-header" data-export-id="resultsHeaderTitle"></div>\n\t\t<div class="s-search__empty-container" data-export-id="emptyContainer">' + Ha(this.K.G("searchScene.emptyResults")) + '</div>\n\t\t<div class="s-search__loader-overlay _loader-shown" data-export-id="loaderOverlay">' + E(xd, {}, "loader", c) + '</div>\n\t\t<div class="s-search__video-list-container" data-export-id="videoListContainer">\n\t\t\t' + E(hp, {
            Id: !0,
            je: ap,
            Ae: !1,
            Eh: Ju
        }, "videoList", c) + '\n\t\t</div>\n\t</div>\n</div>\n<div class="s-search__results-mode" data-component="' + Ga(nh, {
            Qg: !0
        }, "resultsModeContainer", c) + '">\n\t<div class="s-search__header-container">\n\t\t' + E(uf, {
            icon: "arrow-left"
        }, "goBack", c) + '\n\t\t<div class="s-search__results-header-info-container">\n\t\t\t<div class="s-search__results-header" data-export-id="fullResultsHeaderTitle"></div>\n\t\t\t<div class="s-search__results-query-info" data-export-id="fullResultsQueryInfo"></div>\n\t\t</div>\n\t</div>\n\t<div class="s-search__results-container" data-export-id="fullResultsContainer">\n\t\t<div class="s-search__video-list-container" data-export-id="fullVideoListContainer">\n\t\t\t' + E(hp, {
            Id: !1,
            je: ap,
            yb: this.yb
        }, "fullVideoList", c) + "\n\t\t</div>\n\t</div>\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "inputModeContainer":
                g.Jc ? F(f) : g.Jc = e;
                break;
            case "searchQueryInput":
                g.cc ? F(f) : g.cc = e;
                break;
            case "suggestionsContainer":
                g.Md ? F(f) : g.Md = e;
                break;
            case "resultsModeContainer":
                g.zh ? F(f) : g.zh = e;
                break;
            case "clearQueryButton":
                g.ge ? F(f) : g.ge = e;
                break;
            case "keyboard":
                g.keyboard ? F(f) : g.keyboard = e;
                break;
            case "loader":
                g.ue ? F(f) : g.ue = e;
                break;
            case "videoList":
                g.ca ? F(f) : g.ca = e;
                break;
            case "goBack":
                g.sa ? F(f) : g.sa = e;
                break;
            case "fullVideoList":
                g.nc ? F(f) : g.nc = e;
                break;
            case "inputContainer":
                g.Hi ? F(f) : g.Hi = e;
                break;
            case "historyContainer":
                g.Fi ? F(f) : g.Fi = e;
                break;
            case "resultsContainer":
                g.Be ? F(f) : g.Be = e;
                break;
            case "resultsHeaderTitle":
                g.Ce ? F(f) : g.Ce = e;
                break;
            case "emptyContainer":
                g.eb ? F(f) : g.eb = e;
                break;
            case "loaderOverlay":
                g.gd ? F(f) : g.gd = e;
                break;
            case "videoListContainer":
                g.Me ? F(f) : g.Me = e;
                break;
            case "fullResultsHeaderTitle":
                g.Ig ? F(f) : g.Ig = e;
                break;
            case "fullResultsQueryInfo":
                g.Jg ? F(f) : g.Jg = e;
                break;
            case "fullResultsContainer":
                g.Ai ? F(f) : g.Ai = e;
                break;
            case "fullVideoListContainer":
                g.Bi ? F(f) : g.Bi = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            Jc: null,
            cc: null,
            Md: null,
            zh: null,
            ge: null,
            keyboard: null,
            ue: null,
            ca: null,
            sa: null,
            nc: null,
            Hi: null,
            Fi: null,
            Be: null,
            Ce: null,
            eb: null,
            gd: null,
            Me: null,
            Ig: null,
            Jg: null,
            Ai: null,
            Bi: null
        }, b)
    }
    .call(a)
}
;function Lu() {
    T.call(this, {
        Pd: !0
    });
    var a = this;
    this.Pb = this.o = null;
    this.Ll = Hk(!1);
    this.pc = [];
    this.Mb = this.cd = !1;
    this.oc = this.C = null;
    this.ya = [];
    this.ja = El(this.ci.bind(this), 200);
    this.jb = El(function() {
        return Mu(a)
    }, 1500);
    this.Vi = Fl(this.$j.bind(this));
    this.Xi = Fl(this.ik.bind(this));
    this.Wa = this.Bj.bind(this);
    this.Ri = this.qk.bind(this);
    this.Oi = this.ii.bind(this);
    this.Ni = this.dk.bind(this);
    this.zl = this.$h.bind(this);
    this.ve = this.ck.bind(this);
    this.ed = this.bk.bind(this);
    ec(this, "s-search");
    var b = this.g;
    Pb(b.Jc, b.keyboard, "left", b.Md);
    Nu(this, Ou);
    Pu(this);
    this.i.g.on("session-ended", this.zl)
}
z(Lu, T);
k = Lu.prototype;
k.va = function() {
    T.prototype.va.call(this);
    var a = this.g
      , b = a.nc
      , c = a.keyboard
      , d = a.ca
      , e = a.cc
      , f = a.sa;
    a = a.ge;
    c.on("enter", this.Xi);
    c.on("blur", this.Vi);
    c.on("inner-focus", this.jb);
    d.on("media-list-item-click", this.Wa);
    b.on("media-list-item-click", this.Wa);
    e.on("change", this.ed);
    f.button.on(f.button.P, this.Oi);
    a.button.on(a.button.P, this.Ni);
    this.i.qa.on("scene-controller--scene-load-started", this.ve);
    if (b = d.S)
        b.on(b.P, this.Ri);
    pu(e);
    xu(c, "abc");
    c.fc("en" === this.i.i.lang ? "en" : "ru");
    c = c.C;
    c.T(c.j[0])
}
;
k.Ba = function() {
    T.prototype.Ba.call(this);
    var a = this.g
      , b = a.nc
      , c = a.cc
      , d = a.keyboard
      , e = a.ca
      , f = a.sa;
    a = a.ge;
    d.off("enter", this.Xi);
    d.off("blur", this.Vi);
    d.off("inner-focus", this.jb);
    e.off("media-list-item-click", this.Wa);
    b.off("media-list-item-click", this.Wa);
    c.off("change", this.ed);
    f.button.off(f.button.P, this.Oi);
    a.button.off(a.button.P, this.Ni);
    this.i.qa.off("scene-controller--scene-load-started", this.ve);
    (b = e.S) && b.off(b.P, this.Ri);
    Nu(this, Ou)
}
;
k.Pa = function() {
    var a = this
      , b = T.prototype.Pa.call(this)
      , c = this.o
      , d = this.$;
    return function() {
        var e = Promise
          , f = e.all
          , g = b()
          , h = a.g.cc;
        a.o = c;
        Qu(a, !(null !== c ? !c.length : 1));
        gu(h, c || "", !0);
        Nu(a, d);
        return f.call(e, [g, void 0])
    }
}
;
k.prepare = function() {
    this.Mb = !0;
    Ru(this);
    this.ja.cancel();
    Su(this, !0);
    L(this.g.Ce, "");
    this.o = null;
    Qu(this, !1);
    this.pc = [];
    this.ya = [];
    Tu(this)
}
;
k.Aa = function(a, b) {
    return 20 === a ? (this.$ === Uu ? this.ii() : lg(this.i.za),
    !0) : T.prototype.Aa.call(this, a, b)
}
;
k.Rc = function() {
    return Ku
}
;
k.ec = function() {
    return {
        K: this.i.K,
        pl: 45,
        yb: this.Cj.bind(this)
    }
}
;
k.Cc = function() {
    So(this.g.ca);
    So(this.g.nc)
}
;
function Tu(a) {
    Vu(a);
    Wu(a, (a.o && a.ya.length ? a.ya : a.pc).filter(function(b) {
        return !!b.title.length
    }).slice(0, 4));
    a = a.g.Md;
    a.Fd() && Jb(a, Ib(a))
}
function Vu(a) {
    a = a.g.Md;
    if (0 < a.j.length) {
        for (var b = a.j.length; b--; )
            Nb(a, a.j[b]);
        a.T(null);
        ob(a.L())
    }
}
function Wu(a, b) {
    b = b.map(function(d) {
        var e = new uf({
            title: d.title,
            rd: !0,
            wf: !0,
            icon: "recent" === d.type ? "history" : void 0,
            modifiers: "recent" === d.type ? [] : ["_without-icon"]
        });
        e.button.on(e.button.P, function() {
            Xu(a, d.title);
            Yu(a);
            var f = a.i.F
              , g = f.getContext()
              , h = new kr({
                kd: g.g,
                ld: g.i,
                action: "tap",
                sc: "search_suggestion",
                ea: d.ea,
                screen: g.j
            });
            g.g = h;
            f.g.log(h)
        });
        return e
    });
    var c = a.g.Md;
    b.forEach(function(d) {
        c.Ca(d);
        c.L().appendChild(d.L())
    })
}
function Yu(a) {
    a.ja.cancel();
    Ru(a);
    a.ci();
    Mu(a)
}
function Xu(a, b) {
    var c = a.g
      , d = c.cc;
    c = c.keyboard;
    a.ja.cancel();
    Ru(a);
    gu(d, b);
    uu(c.C);
    rh(a, c)
}
function Nu(a, b) {
    if (b !== a.$) {
        var c = a.g
          , d = c.Jc
          , e = c.zh
          , f = c.keyboard;
        c = c.nc;
        a.$ = b;
        Ub(d, a.$ === Ou);
        Ub(e, a.$ === Uu);
        a.$ === Ou && (rh(a, d),
        rh(a, f),
        a.Ll.I = !0);
        a.$ === Uu && (rh(a, e),
        rh(a, c))
    }
}
function Zu(a) {
    var b = a.g
      , c = b.eb
      , d = b.Be;
    b = b.Me;
    $u(a, !1);
    M(d, !0);
    M(c, !1);
    M(b, !0)
}
function Su(a, b) {
    var c = a.g
      , d = c.eb
      , e = c.Me
      , f = c.ca
      , g = c.keyboard
      , h = c.Jc;
    M(c.Be, !0);
    b ? (M(d, !1),
    $u(a, !0)) : ($u(a, !1),
    a.o && M(d, !0));
    delete xb(h.F, g).down;
    M(e, !1);
    qh(a) === f && rh(a, g)
}
function $u(a, b) {
    a.cd = b;
    M(a.g.gd, b)
}
k.bk = function() {
    var a = this.g.cc.Ma().trim();
    a = a.length ? a : null;
    var b = this.o !== a
      , c = null !== a ? !a.length : !0;
    Qu(this, !c);
    b && (Su(this, !0),
    L(this.g.Ce, ""),
    Vu(this),
    this.o = a,
    c ? Yu(this) : (this.ja(),
    this.jb()))
}
;
k.$j = function() {
    Ru(this);
    Mu(this)
}
;
k.ik = function() {
    Su(this, !0);
    Ru(this);
    Mu(this, !0)
}
;
k.ci = function() {
    var a = this
      , b = av(this);
    bv(this.i.resources.Bd, this.o).then(function(c) {
        if (b()) {
            var d = [];
            (c.Ch || []).forEach(function(e) {
                d.push.apply(d, r(e.Sb || []))
            });
            a.ya = d;
            Tu(a)
        }
    })
}
;
function Mu(a, b) {
    var c = a.g.ca
      , d = a.o
      , e = a.Pb !== d;
    e || !a.cd || a.Mb || b || cv(a);
    if (b || e) {
        c.clear(!0);
        var f = av(a);
        a.oc = Cd(dv(a.i.resources.Bd, d).then(function(g) {
            f() && !a.Mb && (a.Pb = d,
            a.C = g.Mh[0],
            cv(a))
        }))
    }
}
function Pu(a) {
    var b = a.g
      , c = b.Jc
      , d = b.cc;
    b = b.keyboard;
    var e = a.g
      , f = e.eb
      , g = e.Me;
    M(e.Be, !1);
    M(f, !1);
    M(g, !1);
    a = a.i.K.G("searchScene.placeholder");
    L(d.g.placeholder, a);
    d.disable();
    b.i = d;
    wu(b, !0);
    Eb(c.F, !0, !0, !1)
}
function av(a) {
    var b = a.o;
    return function() {
        return a.o === b
    }
}
k.Bj = function(a, b) {
    if (b instanceof Ne) {
        a = this.i.F;
        var c = a.getContext()
          , d = new kr({
            kd: c.g,
            ld: c.i,
            action: "tap",
            sc: "video",
            ea: b.ea,
            screen: c.j
        });
        c.g = d;
        a.g.log(d);
        Lt(this.i.qa, dm(b))
    }
}
;
function Ru(a) {
    a.jb.cancel();
    a.oc && a.oc.cancel()
}
k.ii = function() {
    Nu(this, Ou);
    this.g.nc.clear(!0, !0)
}
;
k.dk = function() {
    Xu(this, "")
}
;
k.qk = function() {
    Nu(this, Uu);
    var a = this.g
      , b = a.nc
      , c = a.Jg;
    a = a.Ig;
    var d = this.C.ba;
    kp(b, d, $e, this.C.id, this.C.Da);
    12 > d.length && this.C.Da && Ao(b.i);
    null !== this.o ? (L(a, this.i.K.G("searchScene.searchResults")),
    L(c, this.i.K.G("searchScene.byQuery") + ' "' + this.o + '"')) : (b = this.i.K.G("searchScene.showAll"),
    L(a, this.C.title || b),
    L(c, ""));
    c = this.i.F;
    b = c.getContext();
    a = new kr({
        kd: b.g,
        ld: b.i,
        action: "tap_show_all",
        sc: "catalog_item",
        screen: b.j
    });
    b.g = a;
    c.g.log(a)
}
;
k.$h = function() {
    var a = this.g
      , b = a.ca
      , c = a.nc;
    a = a.cc;
    this.Pb = this.o = null;
    Ru(this);
    this.ja.cancel();
    a.J = "";
    hu(a, "");
    eu(a, 0);
    ou(a);
    b.clear(!0);
    c.clear(!0, !0);
    Vu(this)
}
;
k.ck = function(a, b) {
    (b instanceof Ft || b instanceof Lu) && this.$h()
}
;
k.Cj = function(a, b) {
    return Kt(this.i.resources.Bd, a, b).then(function(c) {
        return c ? {
            items: c.ba.concat(c.sb),
            Da: c.block.Da
        } : {
            items: []
        }
    })
}
;
function Qu(a, b) {
    var c = a.g;
    a = c.ge;
    var d = c.Jc;
    c = c.keyboard;
    M(a.L(), b);
    b ? (Pb(d, a, "left", c),
    Pb(d, c, "up", a)) : (delete xb(d.F, a).left,
    delete xb(d.F, c).up)
}
function cv(a) {
    var b = a.g
      , c = b.ca
      , d = b.keyboard;
    b = b.Jc;
    var e = a.C ? a.C.ba : []
      , f = a.C && a.C.title;
    c.S && M(c.S.L(), 8 < e.length);
    e.length ? (Zu(a),
    f && L(a.g.Ce, f),
    c.O.then(function() {
        kp(c, e.slice(0, 8), $e, a.C.id)
    }),
    Pb(b, d, "down", c)) : (delete xb(b.F, d).down,
    Su(a))
}
var Ou = "input"
  , Uu = "results";
function ev() {
    Z.apply(this, arguments)
}
z(ev, Z);
function ig(a) {
    return Yi(a, {
        path: "method/catalog.getVideoSmartTV",
        U: {
            need_stub_blocks: 1,
            ref: a.Sc.g || ""
        }
    }, ok)
}
function Kt(a, b, c) {
    return Yi(a, {
        path: "method/catalog.getBlockItems",
        U: {
            block_id: b,
            start_from: void 0 === c ? "" : c,
            query: ""
        }
    }, pk)
}
function dv(a, b) {
    var c = {
        show_suggests: 0,
        need_blocks: !0
    };
    b && (c.q = b);
    return Yi(a, {
        path: "method/catalog.getVideoSearchSmartTv",
        U: c
    }, qk)
}
function bv(a, b) {
    var c = {
        show_suggests: 1,
        need_blocks: !0
    };
    b && (c.q = b);
    return Yi(a, {
        path: "method/catalog.getVideoSearchSmartTv",
        U: c
    }, rk)
}
ev.prototype.g = function(a, b) {
    var c = this, d, e, f;
    return D(function(g) {
        if (!$i(a))
            return g.return(a);
        d = a.error || a.response || a;
        e = d.error_code;
        f = ih.includes(b.path);
        return 104 === e && f ? g.return({}) : g.return(Z.prototype.g.call(c, a, b))
    })
}
;
function fv() {
    Z.apply(this, arguments)
}
z(fv, Z);
fv.prototype.i = function() {
    return Promise.resolve({
        response: 0
    })
}
;
fv.prototype.g = function(a) {
    return Promise.resolve(a)
}
;
fv.prototype.l = function() {}
;
function gv(a, b) {
    var c = this;
    b = Object.assign({}, {
        Zk: 3E3,
        $k: 15E3,
        hj: "__unknown_logger"
    }, b);
    this.i = a;
    this.l = !1;
    this.u = b.hj;
    this.g = [];
    hv(this);
    this.j = jl(function() {
        return c.flush()
    }, b.Zk, {
        Df: b.$k
    })
}
gv.prototype.log = function(a) {
    a = (a instanceof Array ? a : [a]).filter(function(b) {
        return !b.Ha()
    }).map(function(b) {
        return b.Fa()
    });
    a.length && (this.g = this.g.concat(a),
    a = JSON.stringify(this.g),
    Dc(this.i, "__unknown_logger", a),
    this.l || this.j())
}
;
gv.prototype.flush = function() {
    if (this.g.length) {
        if (this.v.isEnabled()) {
            var a = this.o
              , b = {
                events: JSON.stringify(this.g)
            };
            Yi(a, {
                path: "method/statEvents.addTV",
                method: "GET",
                U: b
            }, sk)
        }
        this.g.length = 0;
        Dc(this.i, "__unknown_logger", "[]")
    }
}
;
gv.prototype.pause = function() {
    this.l = !0;
    this.flush();
    this.j.cancel()
}
;
function hv(a) {
    try {
        var b = JSON.parse(Cc(a.i, a.u) || "[]")
    } catch (c) {
        b = []
    }
    a.g = b;
    a.flush()
}
;function iv(a, b, c) {
    gv.call(this, b, {
        hj: "__product_logger"
    });
    this.o = a;
    this.v = c
}
z(iv, gv);
var jv = {}
  , kv = (jv["videos-list"] = "tv_video_catalog",
jv["owner-videos-list"] = "tv_owner_video_list",
jv.player = "tv_player",
jv.auth = "tv_login",
jv["no-internet"] = "tv_no_internet",
jv.search = "tv_search_results",
jv.broken = "tv_broken",
jv[Fq] = "tv_device_info",
jv.exit = "tv_exit",
jv.settings = "tv_player_quality_select",
jv[bt] = "tv_login",
jv["sign-out"] = "tv_logout",
jv);
function lv(a, b) {
    this.id = Math.floor(1E5 * Math.random());
    this.timestamp = Date.now();
    this.g = a;
    this.i = b
}
lv.prototype.Ha = function() {
    return !1
}
;
lv.prototype.Fa = function() {
    return {
        id: this.id,
        prev_event_id: mv(this, function(a) {
            return a.id
        }) || 0,
        prev_nav_id: nv(this, function(a) {
            return a.id
        }) || 0,
        screen: this.screen || "tv_nowhere",
        timestamp: (1E3 * this.timestamp).toString(),
        type: this.type
    }
}
;
function mv(a, b) {
    return a.g ? b(a.g) : void 0
}
function nv(a, b) {
    return a.i ? b(a.i) : void 0
}
;function ov(a, b) {
    lv.call(this, a, b)
}
z(ov, lv);
ov.prototype.Fa = function() {
    return Object.assign({}, lv.prototype.Fa.call(this), {
        type_navgo: {
            destination_screen: this.j,
            prev_nav_timestamp: nv(this, function(a) {
                return (1E3 * a.timestamp).toString()
            }) || "0",
            subtype: this.l
        }
    })
}
;
function kr(a) {
    var b = a.action
      , c = a.sc
      , d = a.ea
      , e = a.screen;
    lv.call(this, a.kd, a.ld);
    this.ea = d;
    this.sc = c;
    this.type = "type_click";
    this.action = b;
    this.screen = e
}
z(kr, lv);
kr.prototype.Fa = function() {
    return Object.assign({}, lv.prototype.Fa.call(this), {
        type_click: {
            type: "type_search_click_item",
            type_search_click_item: {
                action: this.action
            },
            item: {
                track_code: this.ea,
                type: this.sc
            }
        }
    })
}
;
kr.prototype.Ha = function() {
    return !1
}
;
function pv(a) {
    this.l = a
}
function qv(a, b) {
    return (a = b instanceof Bf ? b.Dd() : b ? id(a.l, b) : null) ? kv[a] || "tv_nowhere" : "tv_nowhere"
}
;function rv(a, b, c) {
    this.l = a;
    this.j = null;
    this.g = new iv(b,c,this);
    this.i = new Ck
}
rv.prototype.getContext = function() {
    return this.j
}
;
rv.prototype.isEnabled = function() {
    return this.l.D
}
;
function sv(a, b, c, d) {
    if (a.isEnabled()) {
        var e = a.j
          , f = new ov(e.g,e.i);
        f.type = "type_navgo";
        f.screen = qv(e, b);
        f.j = qv(e, c);
        e.j = f.j;
        f.l = d;
        b = a.j;
        b.g = f;
        "type_navgo" === f.type && (b.i = f);
        a.g.log(f)
    }
}
function tv(a, b) {
    a.i.add(b, "transition-success", function(f, g) {
        sv(a, g.Hg, g.Zb, g.ll ? "back" : "go")
    });
    for (var c = {}, d = p(Object.values(b.i)), e = d.next(); !e.done; c = {
        td: c.td
    },
    e = d.next())
        c.td = e.value,
        a.i.add(c.td, "child-layer-shown", function(f) {
            return function(g, h) {
                sv(a, f.td, h, "show")
            }
        }(c)),
        a.i.add(c.td, "child-layer-hidden", function(f) {
            return function(g, h) {
                sv(a, h, f.td, "hide")
            }
        }(c));
    c = O.l;
    a.i.add(c, "child-layer-shown", function(f, g) {
        sv(a, b.g, g, "show")
    });
    a.i.add(c, "child-layer-hidden", function(f, g) {
        sv(a, g, b.g, "hide")
    })
}
;function uv(a, b) {
    return function() {
        var c = {};
        var d = '<div class="s-subscription-video__container">\n\t<div class="s-subscription-video__menu">\n\t\t<div class="s-subscription-video__header">\n    \t\t<div class="s-subscription-video__layout-pin-left">\n    \t\t\t<div class="s-subscription-video__owner-info">\n\t\t\t\t\t<div class="s-subscription-video__owner-info-name" data-export-id="subscriptionName"></div>\n\t\t\t\t</div>\n    \t\t</div>\n    \t\t<div class="s-subscription-video__layout-pin-right">\n\t\t\t\t<div class="s-subscription-video__owner-subscribe">\n\t\t\t\t\t' + E(Xn, {
            label: "",
            value: ""
        }, "openProfile", c) + '\n\t\t\t\t</div>\n    \t\t</div>\n    \t</div>\n    </div>\n\n\t<div class="s-subscription-video__content-container">\n\t\t<div class="s-subscription-video__empty-container" data-export-id="emptyContainer" style="display: none;">\n\t\t\t<div class="s-subscription-video__empty-title">' + Ha(this.K.G("ownerVideosListScene.empty")) + "</div>\n\t\t</div>\n\n\t\t" + E(hp, {
            je: ap,
            yb: this.yb
        }, "videoList", c) + "\n\t</div>\n</div>\n";
        return I(d, c, function(e, f, g) {
            switch (f) {
            case "root":
                g.root ? F(f) : g.root = e;
                break;
            case "openProfile":
                g.hd ? F(f) : g.hd = e;
                break;
            case "videoList":
                g.ca ? F(f) : g.ca = e;
                break;
            case "subscriptionName":
                g.Pf ? F(f) : g.Pf = e;
                break;
            case "emptyContainer":
                g.eb ? F(f) : g.eb = e;
                break;
            default:
                H(f)
            }
        }, {
            root: null,
            hd: null,
            ca: null,
            Pf: null,
            eb: null
        }, b)
    }
    .call(a)
}
;function vv() {
    T.call(this);
    var a = this;
    this.$ = null;
    this.C = new Map;
    this.o = null;
    var b = this.g
      , c = b.ca;
    b = b.hd;
    c.on("media-list-item-click", uh(this, function(d, e) {
        e instanceof Ne && wv(a, e)
    }));
    c.on("stop-video-preview", uh(this, function() {
        return Ql(a.i.l)
    }));
    c.on("play-video-preview", uh(this, function(d, e) {
        Ql(a.i.l);
        a.i.l.play(e, !0)
    }));
    b.on(b.P, uh(this, this.fk.bind(this)));
    this.i.Qa.on(this.i.Qa.j, function(d, e) {
        a.o = e
    });
    ec(this, "s-subscription-video");
    Jb(this, c);
    Pb(this, c, "right", null)
}
z(vv, T);
k = vv.prototype;
k.prepare = function(a) {
    (this.o = a) ? (a = this.i.K.G("subscriptionVideoListScene.subscriptions") + "\n\t\t · " + this.o.g(),
    L(this.g.Pf, a),
    xv(this)) : (a = this.i.K.G("subscriptionVideoListScene.allSubscriptions"),
    L(this.g.Pf, a),
    xv(this, !1));
    var b = this.g;
    a = b.ca;
    b = b.eb;
    a.show();
    a.clear(!0);
    nb(b)
}
;
function yv(a, b, c) {
    a.$ = c;
    a.C.clear();
    c = a.g.ca;
    if (b.ba && b.ba.length) {
        var d = b.ba;
        b = null !== b.g ? b.g.toString() : void 0;
        var e = String(b)
          , f = {
            dataType: $e,
            Da: e,
            items: d
        };
        if (a.C.has(" subscriptionMockId")) {
            var g = a.C.get(" subscriptionMockId");
            f.items = g.items.concat(g.Da === e ? [] : d)
        }
        a.C.set(" subscriptionMockId", f);
        kp(c, d, $e, " subscriptionMockId", b)
    } else
        b = a.g,
        c = b.ca,
        d = b.eb,
        b = b.hd,
        c.hide(),
        mb(d),
        a.l === c && b.isEnabled() && a.T(b)
}
k.reload = function() {
    var a = this;
    return null !== this.$ ? this.$().then(function(b) {
        yv(a, b, a.$)
    }) : Promise.reject()
}
;
k.Aa = function(a, b) {
    return 20 === a ? (this.l === this.g.ca && this.g.hd.isEnabled() ? this.T(this.g.hd) : O.Wd(),
    !0) : T.prototype.Aa.call(this, a, b)
}
;
k.ec = function() {
    return {
        yb: this.Dj.bind(this),
        K: this.i.K
    }
}
;
k.Rc = function() {
    return uv
}
;
k.Cc = function(a, b, c) {
    T.prototype.Cc.call(this, a, b, c);
    So(this.g.ca)
}
;
function xv(a, b) {
    b = void 0 === b ? !0 : b;
    var c = a.g.hd;
    c.ab(!0);
    M(c.L(), b);
    a = a.i.K.G("subscriptionVideoListScene.openProfile");
    c.nb(a)
}
k.fk = function() {
    or(this.i.qa, this.o)
}
;
k.Dj = function(a, b) {
    return Sk(this.i.resources.video, this.o, parseInt(void 0 === b ? "0" : b, 10), 16).then(function(c) {
        if (!c)
            return {
                items: []
            };
        var d = c.g;
        return {
            items: c.ba,
            Da: null === d ? null : String(d)
        }
    })
}
;
function wv(a, b) {
    var c = Nk(a.i.resources.video, b).then(function(d) {
        d = fm([d && d.i || b].concat(r(d && d.ba || [])), void 0, d);
        d.fa.title = a.N.G("playerScene.related");
        return d
    });
    a.D.block(c.then(function(d) {
        d && Lt(a.i.qa, d)
    }))
}
;function zv(a, b, c, d, e) {
    N.call(this);
    this.u = e;
    this.g = a;
    this.v = b;
    this.o = c;
    this.l = d;
    this.i = this.j = null
}
z(zv, N);
function Av(a, b, c) {
    switch (c) {
    case Ze:
        c = gp;
        break;
    default:
        c = ap
    }
    Bv(a, "videos-list").prepare(c, b);
    Cv(a, "videos-list")
}
function Dv(a, b) {
    function c() {
        return Rk(function(f, g) {
            return Sk(a.o, b, f, g)
        })
    }
    var d = Bv(a, "subscription-videos-list");
    d.prepare(b);
    Cv(a, "subscription-videos-list");
    var e = c();
    a.i = Cd(e);
    a.i.then(function(f) {
        return yv(d, f, c)
    })
}
function Lt(a, b) {
    var c = O.g.g.S;
    c && b.items.forEach(function(d) {
        var e = d.model
          , f = e.duration;
        e = c[e.ta] || 0;
        0 < e && .9 > e && (d.ga.startPosition = e * f);
        return d
    });
    b = Promise.resolve(b);
    return Cv(a, "player", b, function(d, e) {
        d.ke(e || {
            items: [{
                model: {
                    title: "BigBuckBunny by Peach open movie project",
                    rc: !1,
                    Qb: {
                        zc: !1
                    },
                    type: "video",
                    date: new Date,
                    Ne: 0
                },
                data: {
                    url: "http://vs.ifaced.ru/streams/bbb/bbb.mp4",
                    mediaType: "video/mp4",
                    $a: null
                },
                ga: {
                    loop: !1,
                    continue: !1,
                    Gd: 0,
                    startPosition: 0,
                    Kf: .98
                }
            }, {
                model: {
                    title: "Star trails short",
                    rc: !1,
                    Qb: {
                        zc: !1
                    },
                    type: "video",
                    date: new Date,
                    Ne: 0
                },
                data: {
                    url: "http://vs.ifaced.ru/streams/star_trails.mp4",
                    mediaType: "video/mp4",
                    $a: null
                },
                ga: {
                    loop: !1,
                    continue: !1,
                    Gd: 0,
                    startPosition: 0,
                    Kf: .98
                }
            }, {
                model: {
                    title: "Wolfie 4k",
                    rc: !1,
                    Qb: {
                        zc: !1
                    },
                    type: "video",
                    date: new Date,
                    Ne: 0,
                    $a: null
                },
                data: {
                    url: "http://vs.ifaced.ru/streams/wolf_4k.mp4",
                    mediaType: "video/mp4"
                },
                ga: {
                    loop: !1,
                    continue: !1,
                    Gd: 0,
                    startPosition: 0,
                    Kf: .98
                }
            }],
            fa: {
                pg: !0,
                ug: !0,
                Mf: 0,
                Db: 0
            }
        })
    })
}
function Ev(a, b) {
    b = void 0 === b ? ft : b;
    return Cv(a, "auth", Promise.resolve(b), function(c, d) {
        c.ke(d)
    })
}
function Fv(a, b) {
    var c = a.g.i.search;
    c.prepare();
    var d = bv(a.l, b)
      , e = dv(a.l, b);
    Promise.all([d, e]).then(function(f) {
        var g = p(f);
        f = g.next().value;
        g = g.next().value.Mh;
        f = f.Ch[0];
        c.o = b;
        Qu(c, !(null !== b ? !b.length : 1));
        Nu(c, Ou);
        c.C = g[0] ? g[0] : null;
        (c.Pb = b) ? (gu(c.g.cc, b, !0),
        c.ya = f.Sb || []) : c.pc = f.Sb || [];
        c.Mb = !1;
        cv(c);
        Tu(c)
    });
    return Cv(a, "search", Promise.resolve())
}
function Gv(a, b) {
    a.i && (a.i = a.i.cancel());
    var c = b.Dh ? b.Dh[0] : void 0;
    c = c ? c.dataType : void 0;
    if ("search" === b.qc)
        Fv(a, null);
    else {
        Av(a, b, c);
        var d = function() {
            return Yi(a.l, {
                path: "method/catalog.getSectionBlocksLinks",
                U: {
                    section_id: b.id,
                    need_first_block_data: 1,
                    count: 20
                }
            }, nk)
        }
          , e = function() {
            var f = d();
            a.i = Cd(f);
            return a.i.then(function(g) {
                Ht(a.g.i["videos-list"], g, d)
            }).catch(function(g) {
                if ("cancel-promise" !== g)
                    O.g.v.once("internet-available", e)
            })
        };
        e()
    }
}
function or(a, b) {
    a.i && (a.i = a.i.cancel());
    var c = Bv(a, "owner-videos-list");
    c.prepare(b);
    Cv(a, "owner-videos-list");
    var d = Rk(function(e, f) {
        return Sk(a.o, b, e, f)
    });
    a.i = Cd(d);
    a.i.then(function(e) {
        return Qt(c, e)
    })
}
zv.prototype.sa = function() {
    O.Vd()
}
;
function Cv(a, b, c, d) {
    c = void 0 === c ? Promise.resolve() : c;
    d = void 0 === d ? pg : d;
    a.j && (a.j = a.j.cancel());
    var e = Bv(a, b);
    a.B("scene-controller--scene-load-started", e);
    var f = !1;
    b = c.then(function(g) {
        if (!f)
            return a.B("scene-controller--scene-load-ended", e),
            a.v.i(e, function() {
                return d(e, g)
            })
    }).catch(function(g) {
        f || a.B("scene-controller--scene-load-failed", e, g)
    }).then(function() {
        a.j = null
    });
    a.j = Cd(b, {
        Ok: function() {
            f = !0;
            a.B("scene-controller--event-scene-load-interrupted", e)
        },
        ri: "scene-load-interrupted"
    });
    return a.j
}
function Bv(a, b) {
    a = a.g.i[b];
    if (!a)
        throw Error('Scene with name "' + b + "\" isn't registered");
    return a
}
;function Hv() {
    Z.apply(this, arguments)
}
z(Hv, Z);
function Iv(a) {
    return (yi(a).messages || []).map(function(b) {
        try {
            return JSON.parse(b.body)
        } catch (c) {
            return {}
        }
    })
}
function Jv(a) {
    Z.call(this, a)
}
z(Jv, Z);
function tl(a, b, c) {
    var d = {
        device_id: Ji(),
        device_ver: "1.3.12"
    };
    return Yi(a, {
        path: "device/vk_video/attach",
        U: d,
        body: {
            attach_token: b,
            superapptoken: c,
            app_id: "4171611"
        },
        method: "POST"
    }, jk)
}
function Nv(a) {
    a.j.u = 60600;
    return Yi(a, {
        path: "inbox/messages/pick_up",
        U: {
            namespace: "session",
            poll: 1,
            poll_time: 60
        },
        method: "POST"
    }, Iv)
}
Jv.prototype.i = function(a, b) {
    var c = a instanceof XMLHttpRequest && 400 === a.status
      , d = a instanceof XMLHttpRequest && 504 === a.status
      , e = a instanceof Error && "pre-request-check-error" === a.message;
    return "inbox/messages/pick_up" === b.path && (c || d || e) ? Promise.resolve() : Z.prototype.i.call(this, a, b)
}
;
function Ov() {
    Z.apply(this, arguments)
}
z(Ov, Z);
function Pv(a, b) {
    return b.length ? Yi(a, {
        path: "method/groups.getById",
        U: {
            fields: "photo_200, photo_50, members_count",
            group_ids: b.join(",")
        }
    }, wk) : new Promise(function(c) {
        c([])
    }
    )
}
Ov.prototype.g = function(a, b) {
    var c = this, d, e, f, g;
    return D(function(h) {
        if (1 == h.g) {
            if (!$i(a))
                return h.return(a);
            d = a.error || a.response || a;
            e = d.error_code;
            if (15 !== e || "method/groups.join" !== b.path) {
                h.g = 2;
                return
            }
            (f = b.U.group_id) ? h = B(h, Yi(c, {
                path: "method/groups.getById",
                U: {
                    group_id: Math.abs(Number(f)).toString()
                },
                method: "GET"
            }, vk), 4) : (h.g = 2,
            h = void 0);
            return h
        }
        return 2 != h.g && (g = h.i) ? h.return({
            response: 1
        }) : h.return(Z.prototype.g.call(c, a, b))
    })
}
;
function Qv() {
    Z.apply(this, arguments)
}
z(Qv, Z);
function Rv() {
    Z.apply(this, arguments)
}
z(Rv, Z);
Rv.prototype.add = function(a, b, c) {
    c = void 0 === c ? Sv : c;
    return Yi(this, {
        path: "method/likes.add",
        U: {
            ref: this.Sc.g || "",
            type: c,
            item_id: a.toString(),
            owner_id: b.toString()
        },
        method: "GET"
    }, yk)
}
;
var Sv = "video";
function Tv() {
    Z.apply(this, arguments)
}
z(Tv, Z);
function Uv(a, b) {
    return b.length ? Yi(a, {
        path: "method/users.get",
        U: {
            fields: "photo_200, photo_50, type, name",
            user_ids: b
        }
    }, ck) : new Promise(function(c) {
        c([])
    }
    )
}
;function Vv() {
    Z.apply(this, arguments)
}
z(Vv, Z);
function Wv(a, b) {
    return (b = Hd(b) || Hd("en")) ? Yi(a, {
        path: "js/lang-pack.js",
        U: {
            lang: b.code,
            name: "smart_tv",
            format: "json"
        },
        method: "GET"
    }, ak) : Promise.resolve(null)
}
;function Xv(a) {
    this.l = a;
    this.g = "https://api.ok.ru";
    this.j = this.i = null;
    "/" !== this.g[this.g.length - 1] && (this.g += "/");
    this.g += "fb.do"
}
function Yv(a) {
    if (a.i)
        return a.i;
    a.i = null;
    var b = {
        session_data: {
            version: 2,
            device_id: O.C,
            client_version: "1.3.12",
            client_type: "SDK_JS"
        }
    };
    a.i = Zv(a, {
        method: "auth.anonymLogin",
        U: b
    }).then(function(c) {
        if (!c)
            throw Error("Empty response. Method: auth.anonymLogin, params: " + JSON.stringify(b));
        if (!c.session_key)
            throw Error("Empty 'session_key' in response. Method: auth.anonymLogin, params: " + JSON.stringify(b) + ", response: " + JSON.stringify(c));
        a.j = c.session_key;
        return a.j
    }).catch(function(c) {
        a.j = null;
        throw c;
    }).finally(function() {
        a.i = null
    });
    return a.i
}
function $v(a, b) {
    var c;
    D(function(d) {
        return 1 == d.g ? (c = "log.externalLog",
        a.j ? (d.g = 2,
        d = void 0) : d = B(d, Yv(a), 2),
        d) : d.return(Zv(a, {
            method: c,
            U: {
                Xn: "ok.mobile.apps.video",
                data: JSON.stringify({
                    application: "smart_tv:" + O.device.info.Ze() + ":1.3.12}",
                    platform: "smart_tv",
                    items: b.map(function(e) {
                        return Object.assign({}, e, {
                            time: 0,
                            type: 1
                        })
                    })
                })
            }
        }))
    })
}
function Zv(a, b) {
    var c = a.g
      , d = a.g;
    b = aw(b.method, b.U || {}, a.j) || void 0;
    return Bh(a.l, {
        path: c,
        qb: d,
        method: "POST",
        body: b,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}
function aw(a, b, c) {
    var d = {
        format: "JSON",
        method: a,
        application_key: "CBBDKGKGDIHBABABA"
    };
    c && (d.session_key = c);
    Object.entries(b).forEach(function(e) {
        var f = p(e);
        e = f.next().value;
        f = f.next().value;
        d[e] = "string" === typeof f ? f : JSON.stringify(f)
    });
    return d
}
;function bw() {
    this.g = cw || dw;
    this.i = ew
}
function fw(a) {
    var b, c, d, e;
    return D(function(f) {
        switch (f.g) {
        case 1:
            b = [gw, dw],
            cw && b.unshift(cw),
            c = 0;
        case 2:
            if (!(c < b.length)) {
                f.g = 4;
                break
            }
            d = b[c];
            return B(f, hw(a, "https://" + (d || a.g) + "/ping.txt?time=" + Date.now().toString(), !0), 5);
        case 5:
            if (e = f.i)
                return f.return(d);
            c++;
            f.g = 2;
            break;
        case 4:
            return f.return(dw)
        }
    })
}
function iw(a) {
    return hw(a, "https://" + (a.g || a.g) + "/ping.txt?time=" + Date.now().toString(), !1)
}
function hw(a, b, c) {
    c = void 0 === c ? !1 : c;
    var d, e, f, g;
    return D(function(h) {
        if (1 == h.g) {
            if (void 0 === a.g)
                return h.return(Promise.resolve(!0));
            d = Dd(3E4);
            e = new Promise(function(l, m) {
                var n = new XMLHttpRequest;
                n.open("GET", b);
                n.onload = function() {
                    200 === n.status ? l(n.response) : m(Error("API check did not return code 200"))
                }
                ;
                n.onerror = function() {
                    m(Error(n.status))
                }
                ;
                n.send()
            }
            );
            f = e.then(function(l) {
                return c ? l : "WulbqygHXe\nidjxMb2pJF\nqORaQtmSWo\nSF32HldC2U\ndMVhUpEEbt\nLwBNJubmVq\nj03L2D3Lyp\nz9z76x6caZ\nz2Vv7uVT1M\nphZwKcVHVT"
            }).then(function(l) {
                return "WulbqygHXe\nidjxMb2pJF\nqORaQtmSWo\nSF32HldC2U\ndMVhUpEEbt\nLwBNJubmVq\nj03L2D3Lyp\nz9z76x6caZ\nz2Vv7uVT1M\nphZwKcVHVT" === l
            }).catch(function() {
                return !1
            });
            return B(h, Promise.any([d, f]), 2)
        }
        g = h.i;
        return h.return(!0 === g || !1)
    })
}
var gw = "api.vk.ru"
  , dw = "api.vk.com"
  , cw = ""
  , ew = "https://vc1.go.mail.ru";
function jw(a) {
    N.call(this);
    this.j = a;
    this.i = this.g = null
}
z(jw, N);
function $t(a, b) {
    a.g = (void 0 === b ? 0 : b) && a.g ? a.g.cancel() : a.g;
    if (a.g)
        return a.g;
    a.g = Cd(iw(a.j));
    a.g.then(function(c) {
        a.g = null;
        c && a.B("internet-available");
        return c
    }).catch(function(c) {
        "cancel-promise" !== c && (a.g = null)
    });
    return a.g
}
function Yt(a) {
    a.i = new Uc(function() {
        return D(function(b) {
            if (1 == b.g)
                return B(b, $t(a), 2);
            Vc(a.i);
            b.g = 0
        })
    }
    ,15E3);
    a.i.start()
}
;function kw(a) {
    N.call(this);
    this.j = a;
    this.g = [];
    this.i = null;
    lw(this)
}
z(kw, N);
function mw(a, b) {
    switch (b.name) {
    case "transport-error":
        nw(a, b);
        break;
    case "authorization-error":
        a.B("get-authorization-error");
        break;
    case "authorization-revoke-needed-error":
        a.B("authorization-revoke-needed");
        break;
    case "host-error":
    case "bootstrap-error":
        a.B("application-broken");
        break;
    default:
        b instanceof Ri && (ow(a, b),
        pw(a))
    }
}
function nw(a, b) {
    $t(a.j).then(function(c) {
        var d = b;
        c || (d = new Ri({
            name: "internet-error",
            title: O.g.K.G("applicationError.networkTitle"),
            description: O.g.K.G("applicationError.networkDescription"),
            actions: [{
                label: O.g.K.G("buttons.ok"),
                value: Wi,
                Sa: !0
            }]
        }));
        d instanceof Ri && (ow(a, d),
        pw(a))
    })
}
function pw(a) {
    if (!a.i && a.g.length) {
        var b = a.g.shift();
        a.i = {
            yl: Cq({
                error: b,
                Na: b.Na,
                Ga: !0
            }),
            error: b
        };
        var c = a.i.yl;
        c.on("popup-interaction", function() {
            a.B("error-hidden", c);
            a.i = null;
            pw(a)
        });
        c.bb(O);
        a.B("error-shown", c)
    }
}
function lw(a) {
    function b(c) {
        c && (c instanceof Error ? gd(function(d) {
            d.captureException(c)
        }) : gd(function(d) {
            d.captureMessage("" + c)
        }),
        (c instanceof Ri || c instanceof Pi) && mw(a, c))
    }
    window.addEventListener("error", function(c) {
        b(c.error)
    });
    window.addEventListener("unhandledrejection", function(c) {
        b(c.reason)
    })
}
function ow(a, b) {
    if (b instanceof Ri) {
        var c = (a.i || {}).error;
        c && "internet-error" === c.name || ("internet-error" === b.name ? (b = qw(a) || b,
        a.g.unshift(b)) : a.g.push(b))
    }
}
function qw(a) {
    var b = a.g.findIndex(function(c) {
        return "internet-error" === c.name
    });
    return -1 !== b ? a.g.splice(b, 1)[0] : null
}
;function rw(a) {
    var b = a.Qk
      , c = a.ml
      , d = a.fl;
    a = a.qa;
    N.call(this);
    var e = this;
    this.i = this.g = null;
    this.C = Object.values(sw).reduce(function(f, g) {
        f[g] = [];
        return f
    }, {});
    this.D = c;
    this.u = b;
    this.F = d;
    this.J = a;
    b = {};
    this.O = (b[tw] = function() {
        return e.D.add(e.g.id, e.g.xa)
    }
    ,
    b[uw] = function() {
        var f = e.D;
        var g = void 0 === g ? Sv : g;
        return Yi(f, {
            path: "method/likes.delete",
            U: {
                ref: f.Sc.g || "",
                type: g,
                item_id: e.g.id.toString(),
                owner_id: e.g.xa.toString()
            },
            method: "GET"
        }, yk)
    }
    ,
    b[vw] = function() {
        return Yi(e.F, {
            path: "method/groups.join",
            U: {
                group_id: Math.abs(e.i.id || e.g.xa).toString()
            },
            method: "GET"
        }, uk)
    }
    ,
    b[ww] = function() {
        return Yi(e.F, {
            path: "method/groups.leave",
            U: {
                group_id: Math.abs(e.i.id || e.g.xa).toString()
            },
            method: "GET"
        }, uk)
    }
    ,
    b[xw] = function() {
        var f = e.u;
        return Yi(f, {
            path: "method/fave.addVideo",
            U: {
                id: e.g.id.toString(),
                owner_id: e.g.xa.toString(),
                ref: f.Sc.g || ""
            },
            method: "GET"
        }, xk)
    }
    ,
    b[yw] = function() {
        var f = e.u;
        return Yi(f, {
            path: "method/fave.removeVideo",
            U: {
                id: e.g.id.toString(),
                owner_id: e.g.xa.toString(),
                ref: f.Sc.g || ""
            },
            method: "GET"
        }, xk)
    }
    ,
    b);
    b = {};
    this.Z = (b[tw] = function() {
        e.g.Qb.zc = !0;
        e.g.Qb.count--
    }
    ,
    b[uw] = function() {
        e.g.Qb.zc = !1;
        e.g.Qb.count++
    }
    ,
    b[vw] = function() {
        e.i.i = !0;
        e.i.j++
    }
    ,
    b[ww] = function() {
        e.i.i = !1;
        e.i.j--
    }
    ,
    b[xw] = function() {
        e.g.rc = !0
    }
    ,
    b[yw] = function() {
        e.g.rc = !1
    }
    ,
    b);
    this.v = "like-status-changed";
    this.j = "subscribe-status-changed";
    this.o = "bookmark-status-changed";
    b = {};
    this.l = (b[tw] = this.v,
    b[uw] = this.v,
    b[vw] = this.j,
    b[ww] = this.j,
    b[xw] = this.o,
    b[yw] = this.o,
    b);
    this.S = El(this.N.bind(this), 350)
}
z(rw, N);
function Nq(a) {
    var b = O.g.Qa;
    b.g = a;
    b.g && b.wc(b.g.ma)
}
rw.prototype.wc = function(a) {
    this.i = a
}
;
rw.prototype.Kc = function() {
    this.g && (zw(this, tw),
    Aw(this, tw))
}
;
function jr(a) {
    a.g && (zw(a, uw),
    Aw(a, uw))
}
function mr(a) {
    a.i && (zw(a, vw),
    Aw(a, vw))
}
function nr(a) {
    a.i && (zw(a, ww),
    Aw(a, ww))
}
rw.prototype.Gc = function() {
    this.g && (zw(this, xw),
    Aw(this, xw))
}
;
function lr(a) {
    a.g && (zw(a, yw),
    Aw(a, yw))
}
function Bw(a, b) {
    switch (b) {
    case tw:
    case uw:
    case xw:
    case yw:
        return a.g.id;
    case vw:
    case ww:
        return a.i.id;
    default:
        return null
    }
}
rw.prototype.N = function(a, b) {
    var c = this;
    return this.O[a]().catch(function() {
        return zw(c, Cw[a])
    }).finally(function() {
        var d = c.C[a]
          , e = d.findIndex(function(f) {
            return f === b
        });
        -1 < e && d.splice(e, 1)
    })
}
;
function Aw(a, b) {
    var c = a.C[b]
      , d = Bw(a, b);
    d && !c.includes(d) && (c.push(d),
    a.S(b, d))
}
function zw(a, b) {
    a.Z[b]();
    switch (b) {
    case xw:
    case tw:
        a.B(a.l[b], Bw(a, b), !0);
        break;
    case yw:
    case uw:
        a.B(a.l[b], Bw(a, b), !1);
        break;
    case vw:
        a.B(a.l[b], a.i, !0);
        break;
    case ww:
        a.B(a.l[b], a.i, !1)
    }
}
var tw = "like"
  , uw = "unlike"
  , vw = "subscribe"
  , ww = "unsubscribe"
  , xw = "favorite"
  , yw = "unfavorite"
  , sw = {
    Pm: tw,
    Kn: uw,
    An: vw,
    Ln: ww,
    Cm: xw,
    Jn: yw
}
  , Dw = {}
  , Cw = (Dw[tw] = uw,
Dw[uw] = tw,
Dw[vw] = ww,
Dw[ww] = vw,
Dw[xw] = yw,
Dw[yw] = xw,
Dw);
function Ew(a) {
    var b = a.K
      , c = a.resources
      , d = a.Qa;
    a = a.Ke;
    N.call(this);
    var e = this;
    this.D = b;
    this.o = c;
    this.l = [];
    this.i = [];
    this.g = [];
    this.u = !1;
    this.C = a;
    this.j = [];
    d.on(d.j, function(f, g, h) {
        Fw(e, g, h)
    })
}
z(Ew, N);
function Gw(a, b) {
    "group" === b && a.i.length ? Pv(a.o.group, a.i.splice(0, 5)).then(function(c) {
        Hw(a, c);
        Iw(a)
    }) : "profile" === b && a.l.length && Uv(a.o.Le, a.l.splice(0, 5)).then(function(c) {
        c = Jw(a, c);
        a.g = a.g.concat(c);
        Iw(a)
    })
}
Ew.prototype.clear = function() {
    this.i = [];
    this.j = [];
    this.g = [];
    this.l = []
}
;
function Kw(a, b, c) {
    a.F || (a.F = b);
    a.v = c;
    gh(a.F);
    a.u || (a.j.length || a.g.length ? Iw(a) : (a.u = !0,
    Yi(a.o.Le, {
        path: "method/users.getSubscriptions",
        U: {
            extended: 0
        }
    }, dk).then(function(d) {
        var e = d.Le;
        d = d.groups;
        a.i = d ? d.items : [];
        a.l = a.C && e ? e.items : [];
        Promise.all([Uv(a.o.Le, a.l.splice(0, 5)), Pv(a.o.group, a.i.splice(0, 5))]).then(function(f) {
            var g = p(f);
            f = g.next().value;
            g = g.next().value;
            a.u = !1;
            f = Jw(a, f);
            a.g = a.g.concat(f);
            Hw(a, g);
            Iw(a)
        })
    })))
}
function Hw(a, b) {
    b = Lw(a, b);
    a.j = a.j.concat(b)
}
function Fw(a, b, c) {
    var d = b.id
      , e = String(d)
      , f = !1;
    if ((a.j.length || a.g.length) && d) {
        var g = function(h, l) {
            (h = h !== l) || (f = !0);
            return h
        };
        c ? a.i.includes(d) || (Hw(a, [b]),
        f = !0) : (a.g = a.g.filter(function(h) {
            return g(h.id, e)
        }),
        a.l = a.l.filter(function(h) {
            return g(h, d)
        }),
        a.j = a.j.filter(function(h) {
            return g(h.id, e)
        }),
        a.i = a.i.filter(function(h) {
            return g(h, d)
        }));
        f && Iw(a)
    }
}
function Jw(a, b) {
    return b.map(function(c) {
        return {
            id: String(c.id),
            jd: a.v.id,
            title: c.g(),
            vb: !1,
            Mg: Mw(c),
            data: {
                we: "profile",
                ma: c
            }
        }
    })
}
function Lw(a, b) {
    return b.map(function(c) {
        return {
            id: String(c.id),
            jd: a.v.id,
            title: c.g(),
            vb: !1,
            Mg: Mw(c),
            data: {
                we: "group",
                ma: c
            }
        }
    })
}
function Mw(a) {
    var b = new Mf;
    Pf(b, a.o || a.$a || null);
    return b
}
function Iw(a) {
    var b = [Object.assign({}, a.v, {
        jd: a.v.id,
        qc: void 0,
        title: a.D.G("menu.groups.allSubscriptions"),
        icon: "community",
        vb: !1
    })];
    b = b.concat(a.j);
    a.i.length && b.push(Nw(a, "group"));
    b = b.concat(a.g);
    a.l.length && b.push(Nw(a, "profile"));
    a = a.F.g.zb;
    Rg(a, b, !0);
    a.mb(!1);
    Xg(a, !0, !1)
}
function Nw(a, b) {
    return {
        id: "loadMore-" + b,
        title: a.D.G("menu.groups.loadMore"),
        icon: "dropdown",
        vb: !1,
        data: {
            Og: !0,
            we: b
        }
    }
}
;function Ow(a, b, c, d) {
    var e = this;
    this.u = b;
    this.v = c;
    this.o = a;
    this.i = d;
    this.l = !1;
    this.g = [];
    Pw(this);
    this.j = jl(function() {
        return e.flush()
    }, 3E3, {
        Df: 15E3
    })
}
Ow.prototype.log = function(a) {
    this.o.i && (a = (a instanceof Array ? a : [a]).filter(function(b) {
        return !b.Ha()
    }).map(function(b) {
        return b.Fa()
    }),
    a.length && (this.g = this.g.concat(a),
    a = JSON.stringify(this.g),
    Dc(this.i, "__stats_vk", a),
    this.l || this.j()))
}
;
Ow.prototype.flush = function() {
    if (this.g.length) {
        var a = this.u
          , b = this.v.j
          , c = {
            events: JSON.stringify(this.g)
        }
          , d = "method/stats.trackEvents";
        b && (d = "method/stats.trackEventsSmartTvAnonymous");
        Yi(a, {
            path: d,
            U: c,
            method: "GET"
        }, tk);
        this.g.length = 0;
        Dc(this.i, "__stats_vk", "[]")
    }
}
;
Ow.prototype.pause = function() {
    this.l = !0;
    this.flush();
    this.j.cancel()
}
;
function Pw(a) {
    try {
        var b = JSON.parse(Cc(a.i, "__stats_vk") || "[]")
    } catch (c) {
        b = []
    }
    a.g = b;
    a.flush()
}
;function Qw(a, b, c) {
    this.type = "video_event";
    this.timestamp = $l(Date.now());
    this.pd = a;
    this.md = b;
    this.ea = c
}
Qw.prototype.Ha = function() {
    return this.g().every(function(a) {
        return void 0 === a
    })
}
;
Qw.prototype.Fa = function() {
    return {
        e: this.type,
        ts: this.timestamp,
        video_id: this.pd,
        ref: this.md,
        track_code: this.ea
    }
}
;
function Rw(a) {
    var b = {};
    a = p(Object.entries(a));
    for (var c = a.next(); !c.done; c = a.next()) {
        var d = p(c.value);
        c = d.next().value;
        d = d.next().value;
        void 0 !== d && (b[c] = d)
    }
    return b
}
Qw.prototype.g = function() {
    return []
}
;
function Sw() {
    Qw.apply(this, arguments)
}
z(Sw, Qw);
Sw.prototype.Ha = function() {
    return !0
}
;
function Tw(a, b, c) {
    Qw.call(this, a, b, c);
    this.type = "video_event";
    this.j = this.i = this.value = this.event = this.position = void 0
}
z(Tw, Qw);
Tw.prototype.Fa = function() {
    var a = Object.assign({}, Qw.prototype.Fa.call(this), {
        event: this.event,
        position: this.position,
        context: void 0,
        value: this.value,
        is_in_pip: void 0,
        is_in_background: void 0
    });
    "rewind" === this.event && (a.rewind_type = "slider",
    isNaN(this.j) || (a.rewind_start = this.j),
    isNaN(this.i) || (a.rewind_end = this.i));
    return Rw(a)
}
;
Tw.prototype.g = function() {
    return [].concat(r(Qw.prototype.g.call(this)), [void 0, this.position, this.value, void 0, void 0, this.j, this.i])
}
;
function Uw(a, b, c) {
    Qw.call(this, a, b, c);
    this.type = "video_play";
    this.speed = this.quality = this.volume = this.autoplay = this.source = this.i = this.position = void 0
}
z(Uw, Qw);
Uw.prototype.Fa = function() {
    return Rw(Object.assign({}, Qw.prototype.Fa.call(this), {
        position: this.position,
        position_sec: this.i,
        source: this.source,
        session_id: void 0,
        item_position: void 0,
        player_type: void 0,
        ov_id: void 0,
        autoplay: this.autoplay ? 1 : 0,
        volume: this.volume,
        quality: this.quality,
        speed: this.speed,
        is_sub_enabled: void 0,
        sub_lang: void 0,
        screen_pixels_w: void 0,
        screen_pixels_h: void 0,
        screen_dpi: void 0,
        screen_crop: void 0,
        screen_orientation: void 0,
        is_portrait_only: 0,
        external_playback: 0,
        network_type: void 0,
        bitrate: void 0,
        stall_count: void 0,
        is_in_pip: void 0,
        is_in_background: void 0
    }))
}
;
Uw.prototype.g = function() {
    return [].concat(r(Qw.prototype.g.call(this)), [this.position, this.i, this.source, void 0, void 0, void 0, void 0, this.autoplay ? 1 : 0, this.volume, this.quality, this.speed, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 0, 0, void 0, void 0, void 0, void 0, void 0])
}
;
function Vw(a, b, c) {
    Qw.call(this, a, b, c);
    this.type = "video_error";
    this.i = this.position = this.j = this.quality = this.url = this.description = this.code = void 0
}
z(Vw, Qw);
Vw.prototype.Fa = function() {
    return Rw(Object.assign({}, Qw.prototype.Fa.call(this), {
        code: this.code,
        description: this.description,
        url: this.url,
        is_autoplay: void 0,
        quality: this.quality,
        is_auto_quality: this.j,
        file_type: void 0,
        player_type: void 0,
        position: this.position,
        ov_id: this.i
    }))
}
;
Vw.prototype.g = function() {
    return [].concat(r(Qw.prototype.g.call(this)), [this.code, this.description, this.url, void 0, this.quality, this.j, void 0, void 0, this.position, this.i])
}
;
function Ww(a, b, c) {
    Tw.call(this, a, b, c);
    this.event = "cur_quality"
}
z(Ww, Tw);
Ww.prototype.Ha = function() {
    return isNaN(this.value) || Tw.prototype.Ha.call(this)
}
;
function Xw(a, b, c, d, e, f) {
    this.ta = a;
    this.g = b;
    this.o = c;
    this.l = d;
    this.ea = e;
    this.i = f;
    this.j = "3s 10s 25 50 75 95 100".split(" ")
}
k = Xw.prototype;
k.ih = function() {
    return new Sw(this.ta,this.g(),this.ea)
}
;
k.jh = function(a) {
    function b(f) {
        if (c.j.includes(f)) {
            var g = new Uw(c.ta,c.g(),c.ea);
            g.position = f;
            c.j.splice(c.j.indexOf(f), 1);
            return g
        }
        return null
    }
    var c = this
      , d = this.i().duration
      , e = [];
    d = Math.round(a / $l(d) * 100);
    10 <= a ? e.push(b("10s")) : 3 <= a && e.push(b("3s"));
    100 <= d ? e.push(b("100")) : 95 <= d ? e.push(b("95")) : 75 <= d ? e.push(b("75")) : 50 <= d ? e.push(b("50")) : 25 <= d && e.push(b("25"));
    return e.filter(Boolean).map(function(f) {
        return Yw(c, f)
    })
}
;
k.fh = function() {
    var a = new Uw(this.ta,this.g(),this.ea)
      , b = this.i().position;
    a.position = 1E3 < b ? "continue" : "start";
    return Yw(this, a)
}
;
k.ah = function() {
    var a = new Tw(this.ta,this.g(),this.ea);
    a.event = "pause";
    a.value = "resume";
    return Yw(this, a)
}
;
k.$g = function() {
    var a = new Tw(this.ta,this.g(),this.ea);
    a.event = "pause";
    a.value = "pause";
    return Yw(this, a)
}
;
k.dh = function(a) {
    var b = this.i().position
      , c = new Tw(this.ta,this.g(),this.ea);
    c.event = "rewind";
    b = $l(b);
    a = $l(a);
    c.j = b;
    c.i = a;
    c.value = a > b ? "forward" : "backward";
    return Yw(this, c)
}
;
k.gh = function(a) {
    var b = new Tw(this.ta,this.g(),this.ea);
    b.event = "stop";
    b.value = $l(a.end - a.start);
    return Yw(this, b)
}
;
k.Yg = function(a) {
    a = a.xi;
    var b = new Vw(this.ta,this.g(),this.ea);
    b.code = 0;
    b.url = this.l().url;
    b.description = a;
    b.j = ["application/vnd.apple.mpegurl", "application/dash+xml"].includes(this.l().mediaType);
    return Yw(this, b)
}
;
k.bh = function() {
    var a = new Ww(this.ta,this.g(),this.ea)
      , b = parseInt;
    var c = this.o();
    var d = this.l().url;
    if (c.g) {
        c = c.g;
        var e = c.S
          , f = c.J
          , g = c.D
          , h = c.F
          , l = c.N
          , m = c.O
          , n = c.C
          , q = c.l
          , u = c.o
          , w = c.v
          , x = c.u
          , J = c.g
          , y = c.i
          , A = {};
        d = (A[c.j] = "2160",
        A[y] = "1440",
        A[J] = "1080",
        A[x] = "720",
        A[w] = "480",
        A[u] = "360",
        A[q] = "240",
        A[n] = "auto",
        A[m] = "auto",
        A[l] = "auto",
        A[h] = "auto",
        A[g] = "auto",
        A[f] = "auto",
        A[e] = "auto",
        A)[d] || "unknown"
    } else
        d = "unknown";
    a.value = b(d, 10);
    return Yw(this, a)
}
;
k.eh = function() {
    return new Sw(this.ta,this.g(),this.ea)
}
;
k.Zg = function() {
    return new Sw(this.ta,this.g(),this.ea)
}
;
function Yw(a, b) {
    var c = a.i();
    c = $l(c.position);
    b instanceof Tw ? b.position = c : b instanceof Uw ? b.i = c : b instanceof Vw && (a = a.o(),
    b.position = c,
    b.i = String(a.l));
    return b
}
;function Zw(a, b, c, d) {
    this.i = a;
    this.j = new Ow(a,b,c,d);
    this.g = null
}
k = Zw.prototype;
k.getContext = function() {
    return this.g
}
;
k.Cb = function() {
    return this.j
}
;
k.isEnabled = function() {
    return this.i.i
}
;
k.Ye = function(a, b, c, d) {
    var e = b();
    this.g = new Xw(e.ta,a,b,c,e.ea,d)
}
;
k.Yf = function() {
    this.g = null
}
;
function $w(a, b, c) {
    var d = this;
    this.v = b;
    this.o = a;
    this.i = c;
    this.l = !1;
    this.g = [];
    ax(this);
    this.j = jl(function() {
        return d.flush()
    }, 3E3, {
        Df: 15E3
    })
}
$w.prototype.log = function(a) {
    this.o.g && (a = (a instanceof Array ? a : [a]).filter(function(b) {
        return !b.Ha()
    }).map(function(b) {
        return b.Fa()
    }),
    a.length && (this.g = this.g.concat(a),
    a = JSON.stringify(this.g),
    Dc(this.i, "__stats_one", a),
    this.l || this.j()))
}
;
$w.prototype.flush = function() {
    this.g.length && ($v(this.v, this.g),
    this.g.length = 0,
    Dc(this.i, "__stats_one", "[]"))
}
;
$w.prototype.pause = function() {
    this.l = !0;
    this.flush();
    this.j.cancel()
}
;
function ax(a) {
    try {
        var b = JSON.parse(Cc(a.i, "__stats_one") || "[]")
    } catch (c) {
        b = []
    }
    a.g = b;
    a.flush()
}
;function bx(a, b, c, d) {
    var e = void 0 === d ? {} : d;
    d = e.tg;
    var f = e.ea;
    e = e.uh;
    this.timestamp = Date.now();
    this.pd = a;
    this.i = this.g = "";
    this.quality = b;
    this.contentType = c;
    this.tg = d;
    this.ea = f;
    this.uh = e
}
bx.prototype.Ha = function() {
    return [this.g, this.pd].every(function(a) {
        return void 0 === a
    })
}
;
bx.prototype.Fa = function() {
    return cx(this, {
        timestamp: this.timestamp,
        custom: {
            cdn_host: this.tg,
            ct: this.contentType,
            param: this.i,
            place: this.uh,
            quality: this.quality,
            track_code: this.ea,
            vid: this.pd,
            vk_app_id: "4171611"
        },
        operation: this.g
    })
}
;
function cx(a, b) {
    var c = {};
    b = p(Object.entries(b));
    for (var d = b.next(); !d.done; d = b.next()) {
        var e = p(d.value);
        d = e.next().value;
        e = e.next().value;
        void 0 !== e && (c[d] = "object" === typeof e && null !== e ? cx(a, e) : e)
    }
    return c
}
;function dx() {
    bx.apply(this, arguments)
}
z(dx, bx);
dx.prototype.Ha = function() {
    return !0
}
;
function ex(a, b, c, d) {
    this.g = a;
    this.j = b;
    this.l = c;
    this.i = d
}
k = ex.prototype;
k.dh = function(a, b) {
    b = void 0 === b ? "slider" : b;
    a = fx(this);
    a.g = "seek";
    a.i = b;
    return a
}
;
k.ih = function(a) {
    var b = a.start;
    a = a.end;
    var c = fx(this);
    c.g = "watchCoverageRecord";
    c.i = b + "-" + a;
    return c
}
;
k.jh = function() {
    return [new dx(this.g,"unknown","unknown")]
}
;
k.fh = function() {
    var a = fx(this);
    a.g = "play";
    var b = this.i().position;
    a.i = String($l(b));
    return a
}
;
k.ah = function() {
    var a = fx(this);
    a.g = "play_toggle";
    return a
}
;
k.$g = function() {
    var a = fx(this);
    a.g = "pause";
    var b = this.i().position;
    a.i = String($l(b));
    return a
}
;
k.gh = function() {
    var a = fx(this);
    a.g = "stop";
    return a
}
;
k.Yg = function(a) {
    a = a.xi;
    var b = fx(this);
    b.g = "error";
    b.i = a;
    return b
}
;
k.bh = function() {
    return new dx(this.g,"unknown","unknown")
}
;
k.eh = function(a) {
    var b = fx(this);
    b.g = "stall";
    b.i = String(a);
    return b
}
;
k.Zg = function() {
    return new dx(this.g,"unknown","unknown")
}
;
function fx(a) {
    var b = a.j()
      , c = a.l();
    var d = c.url;
    if (b.g) {
        var e = b.g
          , f = e.S
          , g = e.J
          , h = e.D
          , l = e.F
          , m = e.N
          , n = e.O
          , q = e.C
          , u = e.l
          , w = e.o
          , x = e.v
          , J = e.u
          , y = e.g
          , A = e.i;
        e = e.j;
        var C = {};
        C = (C[e] = "2160",
        C[A] = "1440",
        C[y] = "1080",
        C[J] = "720",
        C[x] = "480",
        C[w] = "360",
        C[u] = "240",
        C[q] = "auto",
        C[n] = "auto",
        C[m] = "auto",
        C[l] = "auto",
        C[h] = "auto",
        C[g] = "auto",
        C[f] = "unknown",
        C);
        var G = {};
        f = (G[e] = "mp4",
        G[A] = "mp4",
        G[y] = "mp4",
        G[J] = "mp4",
        G[x] = "mp4",
        G[w] = "mp4",
        G[u] = "mp4",
        G[q] = "hls",
        G[n] = "hls",
        G[m] = "dash",
        G[l] = "dash",
        G[h] = "dash",
        G[g] = "dash",
        G[f] = "unknown",
        G);
        d = {
            quality: C[d] || "unknown",
            contentType: f[d] || "unknown"
        }
    } else
        d = {
            quality: "unknown",
            contentType: "unknown"
        };
    return new bx(a.g,d.quality,d.contentType,{
        ea: b.ea,
        uh: b.Ja,
        tg: c.url ? c.url.match(/(?:\w+\.)+\w+/gm)[0] || "" : ""
    })
}
;function gx(a, b, c) {
    this.i = a;
    this.j = new $w(a,b,c);
    this.l = b;
    this.g = null
}
k = gx.prototype;
k.getContext = function() {
    return this.g
}
;
k.Cb = function() {
    return this.j
}
;
k.isEnabled = function() {
    return this.i.g
}
;
k.Ye = function(a, b, c, d) {
    a = b();
    this.g = new ex(a.l,b,c,d)
}
;
k.Yf = function() {
    this.g = null
}
;
function hx(a) {
    this.j = a;
    this.i = !1;
    this.g = []
}
hx.prototype.log = function(a) {
    this.j.o && (a = (a instanceof Array ? a : [a]).filter(function(b) {
        return !b.Ha()
    }).map(function(b) {
        return b.Fa()
    }),
    a.length && (this.g = this.g.concat(a),
    this.i || this.flush()))
}
;
hx.prototype.flush = function() {
    this.g.length && (this.g.forEach(function(a) {
        (new Image).src = a.url
    }),
    this.g.length = 0)
}
;
hx.prototype.pause = function() {
    this.i = !0;
    this.flush()
}
;
function ix(a, b) {
    this.g = a.url;
    this.progress = b
}
ix.prototype.Ha = function() {
    return !this.g
}
;
ix.prototype.Fa = function() {
    return {
        url: jx(this)
    }
}
;
function jx(a) {
    return a.g.split("&").map(function(b) {
        var c = (c = b.match(/\{@\w+\}/i)) ? c[0] : void 0;
        if (!c)
            return b;
        if (c && [kx, lx, mx, nx].includes(c)) {
            c = b;
            var d = O.device.info;
            switch (!0) {
            case b.includes(kx):
                c = b.replace(kx, $l(a.progress).toString(10));
                break;
            case b.includes(lx):
                c = b.replace(lx, encodeURIComponent(O.C));
                break;
            case b.includes(mx):
                c = b.replace(mx, encodeURIComponent(d.Ze()));
                break;
            case b.includes(nx):
                c = b.replace(nx, encodeURIComponent(d.model()))
            }
            return c
        }
        return null
    }).filter(Boolean).join("&")
}
var kx = "{@fts_fake_sec}"
  , lx = "{@dvc_id}"
  , mx = "{@dvc_mnfc}"
  , nx = "{@dvc_mdl}";
function ox() {
    ix.call(this, new Me({}), 0)
}
z(ox, ix);
ox.prototype.Ha = function() {
    return !0
}
;
function px(a, b) {
    this.g = a;
    this.i = b
}
k = px.prototype;
k.dh = function() {
    return new ox
}
;
k.ih = function() {
    return new ox
}
;
k.jh = function() {
    return [new ox]
}
;
k.fh = function() {
    var a = this.g();
    return (a = a && Pe(a, "start")) ? new ix(a,this.i().position) : new ox
}
;
k.ah = function() {
    var a = this.g();
    return (a = a && Pe(a, "resume")) ? new ix(a,this.i().position) : new ox
}
;
k.$g = function() {
    var a = this.g();
    return (a = a && Pe(a, "pause")) ? new ix(a,this.i().position) : new ox
}
;
k.gh = function() {
    var a = this.g();
    return (a = a && Pe(a, "stop")) ? new ix(a,this.i().position) : new ox
}
;
k.Yg = function() {
    return new ox
}
;
k.bh = function() {
    return new ox
}
;
k.eh = function() {
    return new ox
}
;
k.Zg = function() {
    var a = this.g();
    return (a = a && Pe(a, "heartbeat")) ? new ix(a,this.i().position) : new ox
}
;
function qx(a) {
    this.l = a;
    this.j = new hx(a);
    this.g = this.i = null
}
k = qx.prototype;
k.getContext = function() {
    return this.i
}
;
k.Cb = function() {
    return this.j
}
;
k.isEnabled = function() {
    return this.l.o
}
;
k.Ye = function(a, b, c, d) {
    var e = this;
    a = b();
    this.i = new px(b,d);
    (b = a && Pe(a, "heartbeat")) && b.g.interval && (this.g && (this.g.cancel(),
    this.g = null),
    this.g = kl(function() {
        var f = e.i.Zg()
          , g = d().position;
        isFinite(g) && e.j.log(f)
    }, 1E3 * b.g.interval))
}
;
k.Yf = function() {
    this.i = null;
    this.g && (this.g.cancel(),
    this.g = null)
}
;
var rx = {}
  , sx = (rx.en = {
    applicationError: {
        interactiveErrorMessage: "С заголовком: [title], описанием: [description]. Allowed actions=: [actions]. Оригинальная ошибка: [details]",
        applicationErrorMessage: "Причина: [details]",
        baseTitle: "Произошла ошибка",
        baseDescription: "Попробуйте повторить действие или вернитесь позже",
        networkTitle: "Сеть недоступна",
        networkDescription: "Что то случилось с сетью и она недоступна, проверьте подключение к сети",
        apiTitle: "Ошибка API",
        apiDescription: "Произошла ошибка доступа на сервере",
        transportTitle: "Ошибка транспорта",
        transportDescription: "Произошла ошибка при выполнении запроса",
        authorizationTitle: "Ошибка авторизации",
        authorizationDescription: "Проверьте подключение к интернету и повторите попытку",
        emptyPlaylist: "В плейлисте пока нет видео",
        validationDescription: "Не удалось применить изменения, необходимо подтвердить телефонный номер. Сделайте это в мобильном или вэб приложении и повторите попытку.",
        videoUnavialableTitle: "Видео недоступно"
    },
    buttons: {
        ok: "ОК",
        back: "Назад",
        repeat: "Повторить",
        clearHistory: "Очистить историю",
        cancel: "Отмена",
        "continue": "Продолжить",
        restart: "Перезагрузить",
        hardReset: "Сбросить приложение",
        checkInternet: "Проверить соединение",
        yes: "Да",
        no: "Нет",
        signOut: "Выйти",
        reload: "Перезагрузить",
        signIn: "Войти",
        signInAs: "Войти как",
        profile: "Профиль",
        close: "Закрыть",
        openAgreements: "Условия использования и конфиденциальная информации"
    },
    authScene: {
        textLinkTitle: "Перейдите по ссылке в браузере и подтвердите регистрацию",
        title: "Отсканируйте код через мобильное приложение ВКонтакте",
        description: "Откройте камеру ВКонтакте, наведите её на код, и перейдите по ссылке и подтвердите регистрацию",
        externalDeviceTitle: "Авторизация в ВК Видео",
        externalDeviceDescription: "Назовите Марусе код:"
    },
    brokenScene: {
        title: "Упс. Произошел сбой",
        description: "Что-то пошло не так во время работы приложения. Попробуйте позже."
    },
    noInternetScene: {
        title: "Нет подключения к Интернету",
        description: "Проверьте интернет соединение на своем телевизоре"
    },
    searchScene: {
        showAll: "Все результаты",
        searchResults: "Результаты поиска",
        video: "Видео",
        emptyResults: "Ничего не найдено",
        recentQueries: "Недавно вы искали",
        placeholder: "Поиск видео, фильмов или сериалов",
        byQuery: "по запросу"
    },
    playerScene: {
        playlist: "Плейлист",
        videoPlural: "[video] [videoPlural:видео|видео|видео]",
        videoPlaybackIsNotAvailable: "Воспроизведение видео недоступно",
        generalVideoPlaybackError: "Не удалось воспроизвести видео",
        liveIsFinishedAndProcessing: "Трансляция завершена. Видео обрабатывается",
        liveBadge: "LIVE",
        views: "просмотров",
        viewsPlural: "[views] [viewsPlural:просмотр|просмотра|просмотров]",
        spectators: "смотрят сейчас",
        spectatorsPluralCompound: "[spectators] [spectatorsPlural:смотрит|смотрят|смотрят] сейчас",
        onTheAir: "в эфире",
        backToAir: "Вернуться к эфиру",
        subscribe: "Подписаться",
        related: "Похожие видео",
        upcomingStartTime: "Начало трансляции",
        today: "сегодня",
        tomorrow: "завтра",
        "in": "в",
        liveStartSoon: "Трансляция скоро начнется",
        liveStartRemain: "До начала трансляции осталось",
        skip: "Пропустить",
        advertisement: "Реклама",
        of: "из"
    },
    videosListScene: {
        clearWatchHistoryLabel: "Очистить историю",
        watchHistory: {
            firstLevelDescription: "История просмотров будет удалена со всех устройств.",
            secondLevelDescription: "Cписок ваших рекомендаций будет составлен заново на основе видео, которые вы смотрите, и сообществ, в которых вы состоите.",
            title: "Очистить историю просмотров?"
        },
        tileBadge: {
            soon: "Скоро"
        },
        emptyMenuItem: {
            watchHistory: {
                title: "В этом разделе пока нет видео",
                description: "Просмотренные вами ролики появятся здесь"
            },
            "default": {
                title: "В этом разделе пока нет видео",
                description: "Попробуйте позже"
            },
            myLiked: {
                title: "Здесь ничего нет",
                description: "Ставьте отметку «Нравится» под видеозаписями,\nи они появятся здесь"
            },
            myBookmarks: {
                title: "Здесь пока нет видео",
                description: "Добавляйте в закладки интересные видео,\nчтобы вернуться к ним позже"
            },
            myAdded: {
                title: "У вас нет добавленных видео",
                description: "Добавьте к себе на страницу видеозаписи,\nи они появятся здесь"
            },
            myUploaded: {
                title: "У вас нет загруженных видео",
                description: "Загрузите видеозаписи, и они появятся здесь"
            },
            myLives: {
                title: "У вас нет трансляций",
                description: "Создайте трансляцию, и она появится здесь"
            },
            myRecordedCalls: {
                title: "У вас нет записей звонков",
                description: "Вы можете записать свой видеозвонок. Для этого\nпозвоните кому-нибудь ВКонтакте, откройте\nнастройки и выберите пункт «Трансляция звонка»."
            },
            myPlaylists: {
                title: "У вас нет созданных плейлистов",
                description: 'Вы можете создать свой плейлист. Для этого\n перейдите на вкладку "Видео" в вэбе и выберите там "Создать плейлист".'
            }
        }
    },
    ownerVideosListScene: {
        empty: "Здесь пока нет видео"
    },
    subscriptionVideoListScene: {
        allSubscriptions: "Все подписки",
        subscriptions: "Подписки",
        openProfile: "Открыть профиль",
        tabs: {
            video: "Видео",
            clip: "Клипы"
        }
    },
    settings: {
        quality: {
            title: "Качество",
            "8K": "8K",
            "4K": "4K",
            QHD: "QHD",
            FHD: "FHD",
            HD: "HD",
            auto: "Авто"
        }
    },
    menu: {
        back: "Вернуться",
        search: "Поиск",
        groups: {
            profile: "Пользователи",
            group: "Сообщества",
            loadMore: "Ещё",
            allSubscriptions: "Все подписки"
        }
    },
    exitPopup: {
        title: "Закрыть приложение VK Видео?"
    },
    techInfoPopup: {
        title: "О приложении",
        systemName: "Система",
        systemVersion: "Версия системы",
        vendor: "Производитель",
        model: "Модель",
        appVersion: "Версия приложения"
    },
    profile: {
        type: "Пользователь"
    },
    group: {
        type: "Сообщество",
        members: "подписчиков",
        membersPlural: "[members] [membersPlural:подписчик|подписчика|подписчиков]",
        subscribe: "Подписаться",
        alreadySubscribed: "Вы подписаны"
    },
    time: {
        yearsPlural: "[years] [yearsPlural:год|года|лет]",
        monthsPlural: "[months] [monthsPlural:месяц|месяца|месяцев]",
        daysPlural: "[days] [daysPlural:день|дня|дней]",
        hoursPlural: "[hours] [hoursPlural:час|часа|часов]",
        minutesPlural: "[minutes] [minutesPlural:минута|минуты|минут]",
        secondsPlural: "[seconds] [secondsPlural:секунда|секунды|секунд]",
        dayShort: "дн",
        hourShort: "ч",
        minuteShort: "мин",
        secondShort: "сек",
        year: "год",
        month: "месяц",
        day: "день",
        hour: "час",
        minute: "минута",
        second: "секунда",
        justNow: "только что",
        ago: "назад"
    },
    agreements: {
        vkPolicy: "Политика конфиденциальности VK Видео",
        vkPolicyUrl: "vk.com/privacy",
        vkTerms: "Пользовательское соглашение VK Видео",
        vkTermsUrl: "vk.com/terms/vkvideo"
    }
},
rx);
function tx() {}
;function ux(a) {
    this.g = a.systeminfo;
    this.i = {}
}
z(ux, Sc);
k = ux.prototype;
k.type = function() {
    return "tizen"
}
;
k.Ze = function() {
    return this.g.getCapability("http://tizen.org/system/manufacturer")
}
;
k.model = function() {
    return this.g.getCapability("http://tizen.org/system/model_name")
}
;
k.Dl = function() {
    return this.g.getCapability("http://tizen.org/system/tizenid")
}
;
k.version = function() {
    return this.g.getCapability("http://tizen.org/feature/platform.version")
}
;
k.Gl = function() {
    return this.g.getCapability("http://tizen.org/feature/platform.web.api.version")
}
;
k.Yb = function() {
    return lc(fb(0, 0, window.screen.width, window.screen.height)) || 2
}
;
k.Di = function() {
    return lc(fb(0, 0, this.g.getCapability("http://tizen.org/feature/screen.width"), this.g.getCapability("http://tizen.org/feature/screen.height"))) || 3
}
;
k.init = function() {
    var a = this
      , b = ["WIFI_NETWORK", "ETHERNET_NETWORK", "LOCALE"].map(function(c) {
        return vx(a, c).then(function(d) {
            return [c, d]
        })
    });
    return Promise.all(b).then(function(c) {
        return c.forEach(function(d) {
            a.i[d[0]] = d[1]
        })
    })
}
;
k.Oj = function() {
    return (this.i.LOCALE || {}).language.replace("_", "-").split(".")[0] || ""
}
;
function vx(a, b) {
    return new Promise(function(c) {
        try {
            a.g.getPropertyValue(b, c, function() {
                return c(void 0)
            })
        } catch (d) {
            c(void 0)
        }
    }
    )
}
;function wx() {
    Xc.call(this);
    for (var a = [xx, yx, zx, Ax, Bx, Cx, Dx, Ex, Fx, Gx, Hx, Ix, Jx, Kx, Lx, Mx, Nx, Ox, Px, Qx, Rx, Sx, Tx, Ux, Vx, Wx], b = 0; b < a.length; b++) {
        var c = window.tizen;
        try {
            c.tvinputdevice.registerKey(a[b])
        } catch (d) {}
    }
}
z(wx, Xc);
wx.prototype.le = function(a) {
    return Xc.prototype.le.call(this, a)
}
;
wx.prototype.N = function() {
    var a = {};
    a[Xx] = 1;
    a[Yx] = 3;
    a[Zx] = 2;
    a[$x] = 4;
    a[ay] = 5;
    a[by] = 6;
    a[cy] = 7;
    a[dy] = 8;
    a[ey] = 9;
    a[fy] = 10;
    a[gy] = 11;
    a[hy] = 12;
    a[iy] = 13;
    a[jy] = 14;
    a[ky] = 15;
    a[ly] = 16;
    a[my] = 39;
    a[ny] = 17;
    a[oy] = 18;
    a[py] = 19;
    a[qy] = 20;
    a[ry] = 21;
    a[sy] = 22;
    a[ty] = 23;
    a[uy] = 24;
    a[vy] = 25;
    a[wy] = 28;
    a[xy] = 29;
    a[yy] = 30;
    a[zy] = 31;
    a[Ay] = 33;
    a[By] = 32;
    a[Cy] = 34;
    a[Dy] = 37;
    return a
}
;
var Xx = 37
  , Zx = 38
  , Yx = 39
  , $x = 40
  , ry = 13
  , qy = 10009
  , by = 49
  , cy = 50
  , dy = 51
  , ey = 52
  , fy = 53
  , gy = 54
  , hy = 55
  , iy = 56
  , jy = 57
  , ay = 48
  , ky = 415
  , ly = 19
  , my = 10252
  , ny = 413
  , py = 412
  , oy = 417
  , yy = 403
  , zy = 404
  , Ay = 405
  , By = 406
  , vy = 428
  , uy = 427
  , wy = 448
  , Dy = 449
  , xy = 447
  , Cy = 10182
  , ty = 457
  , sy = 457
  , yx = "1"
  , zx = "2"
  , Ax = "3"
  , Bx = "4"
  , Cx = "5"
  , Dx = "6"
  , Ex = "7"
  , Fx = "8"
  , Gx = "9"
  , xx = "0"
  , Px = "MediaPlay"
  , Ox = "MediaPause"
  , Qx = "MediaPlayPause"
  , Rx = "MediaStop"
  , Tx = "MediaRewind"
  , Sx = "MediaFastForward"
  , Ux = "MediaTrackNext"
  , Vx = "MediaTrackPrevious"
  , Wx = "MediaRecord"
  , Kx = "ColorF0Red"
  , Lx = "ColorF1Green"
  , Mx = "ColorF2Yellow"
  , Nx = "ColorF3Blue"
  , Hx = "ChannelDown"
  , Ix = "ChannelUp"
  , Jx = "PreviousChannel";
function Ey(a) {
    N.call(this);
    this.j = a;
    this.i = window.msf;
    this.Ia = "msf-server-error"
}
z(Ey, N);
function Fy(a, b, c) {
    Gy(a);
    a.g.publish(b, c, "broadcast")
}
function Hy(a, b) {
    Gy(a);
    a.g.on("remoteMessage", b)
}
Ey.prototype.start = function(a) {
    var b = this;
    return Iy(this).then(function(c) {
        b.l = c;
        b.g = c.channel(a);
        Jy(b)
    }).then(function() {
        return Ky(b)
    }).then(function() {}).catch(function(c) {
        b.B(b.Ia, c);
        return Promise.reject(c)
    })
}
;
function Iy(a) {
    return new Promise(function(b, c) {
        a.i.local(function(d, e) {
            d ? c(d) : b(e)
        })
    }
    )
}
function Jy(a) {
    a.g.on("connect", function() {
        a.B("msf-server-started")
    });
    a.g.on("disconnect", function() {
        a.B("msf-server-stopped")
    });
    a.g.on("clientConnect", function(b) {
        a.B("client-connected", b)
    });
    a.g.on("clientDisconnect", function(b) {
        a.B("client-disconnected", b)
    })
}
function Ky(a) {
    return new Promise(function(b, c) {
        a.g.connect({
            name: a.j
        }, function(d, e) {
            d ? c(d) : b(e)
        })
    }
    )
}
function Gy(a) {
    if (!a.g)
        throw Error("msf connection is not established");
}
;function Ly(a) {
    N.call(this);
    var b = this;
    this.type = a.type;
    this.i = window.webapis.avplay;
    this.l = Cl(window.tizen.systeminfo.getCapability("http://tizen.org/feature/platform.version"), "5.0");
    this.g = a;
    this.j = null;
    this.Ia = "error";
    this.v = function(c, d) {
        return b.B(b.Ia, d)
    }
    ;
    this.g.on(this.g.Ia, this.v);
    this.j = this.o()
}
z(Ly, N);
Ly.prototype.prepare = function() {
    var a = this;
    return D(function(b) {
        if (1 == b.g)
            return B(b, a.j, 2);
        My(a);
        return B(b, a.g.prepare(), 0)
    })
}
;
Ly.prototype.destroy = function() {
    this.g.off(this.g.Ia, this.v);
    this.j = this.g = null
}
;
Ly.prototype.F = function() {}
;
Ly.prototype.o = function() {
    var a = this;
    return D(function(b) {
        return B(b, a.g.init(), 0)
    })
}
;
function My(a) {
    if (!a.j)
        throw Error("Hook destroyed while preparing");
}
;function Ny(a) {
    Ly.call(this, a);
    this.u = !1
}
z(Ny, Ly);
Ny.prototype.prepare = function() {
    var a = this, b;
    return D(function(c) {
        if (1 == c.g)
            return B(c, Ly.prototype.prepare.call(a), 2);
        My(a);
        b = {
            DeleteLicenseAfterUse: !0
        };
        a.g.g() && (b.CustomData = a.g.g());
        a.g.i && (b.LicenseServer = a.g.i);
        try {
            a.i.setDrm("PLAYREADY", "SetProperties", JSON.stringify(b)),
            a.u = !0
        } catch (d) {
            a.B(a.Ia, d)
        }
        c.g = 0
    })
}
;
Ny.prototype.destroy = function() {
    this.u && !this.l && this.i.setDrm("PLAYREADY", "Finalize", "");
    Ly.prototype.destroy.call(this)
}
;
function Oy(a) {
    Ly.call(this, a);
    this.u = !1
}
z(Oy, Ly);
Oy.prototype.prepare = function() {
    var a = this, b, c;
    return D(function(d) {
        if (1 == d.g)
            return B(d, Ly.prototype.prepare.call(a), 2);
        My(a);
        b = a.g.g();
        c = {
            CompanyName: b.Yn || "",
            Web: b.Un || "",
            IPTV: b.$n || ""
        };
        try {
            a.l ? a.i.setDrm("VERIMATRIX", "SetProperties", JSON.stringify(c)) : a.i.setDrm("VERIMATRIX", "Initialize", JSON.stringify(c)),
            a.u = !0
        } catch (e) {
            a.B(a.Ia, e)
        }
        d.g = 0
    })
}
;
Oy.prototype.destroy = function() {
    this.u && !this.l && this.i.setDrm("VERIMATRIX", "Finalize", "");
    Ly.prototype.destroy.call(this)
}
;
Oy.prototype.F = function(a) {
    "DrmError" === a.name && (a = ["Verimatrix error", a.code, a.message].filter(function(b) {
        return void 0 !== b
    }).join(" "),
    this.B(this.Ia, Error(a)))
}
;
Oy.prototype.o = function() {
    var a = this;
    return D(function(b) {
        a.l ? a.i.getUID("VERIMATRIX") : a.i.setDrm("VERIMATRIX", "GetUID", "");
        return B(b, Ly.prototype.o.call(a), 0)
    })
}
;
function Py(a, b, c) {
    Oc.call(this, a, b);
    var d = this;
    this.g = window.webapis.avplay;
    this.o = window.tizen.tvaudiocontrol;
    this.ra = c;
    this.ua = this.l = null;
    this.S = -1;
    this.O = !1;
    this.F = null;
    this.u = 1;
    this.zd = this.D = null;
    this.i = new Map;
    this.$ = this.Tc.bind(this);
    Qy(this);
    this.N = function(e, f) {
        d.Tc(f)
    }
    ;
    this.jb = function(e, f) {
        return Ry(d, f)
    }
    ;
    try {
        Sy(this)
    } catch (e) {
        throw Fc(this.V, "invalid"),
        e;
    }
}
z(Py, Oc);
k = Py.prototype;
k.prepare = function(a, b) {
    function c() {
        !b["is-4k"] && !b["is-8k"] || Cl(d.ra, "5.0.0") || d.g.setStreamingProperty("SET_MODE_4K", "TRUE");
        "start-position"in b && (d.B("debug-message", "starting at " + b["start-position"]),
        d.g.seekTo(b["start-position"], function() {
            return d.B("debug-message", "seekto callback")
        }));
        d.zd.j();
        d.g.prepareAsync(function() {
            d.B("debug-message", "prepareAsync callback");
            d.v.Ui = !0;
            Ty(d);
            Uy(d)
        }, d.$)
    }
    var d = this;
    b = void 0 === b ? {} : b;
    Lc(this.V, "loading");
    b["is-4k"] && !window.webapis.productinfo.isUdPanelSupported() && this.Tc(Error("4K is not supported"));
    !b["is-8k"] || window.webapis.productinfo.is8KPanelSupported && window.webapis.productinfo.is8KPanelSupported() || this.Tc(Error("8K is not supported"));
    Vy(this, function() {
        return d.g.open(a)
    });
    this.D = a;
    Uy(this);
    this.i.size ? Promise.all(Array.from(this.i.values()).map(function(e) {
        return e.prepare()
    })).then(c, function(e) {
        "destroyed" === d.V.g || Mc(d.V) ? (console.error(e),
        d.B("debug-message", e.message)) : d.Tc(e instanceof Error ? e : Error(e))
    }) : c();
    Fc(this.V, "loading")
}
;
k.play = function() {
    var a = this;
    this.B("will-play");
    Lc(this.V, "playing");
    Vy(this, function() {
        return a.g.play()
    });
    Uy(this)
}
;
k.pause = function() {
    var a = this;
    this.B("will-pause");
    Lc(this.V, "paused");
    Vy(this, function() {
        return a.g.pause()
    });
    Uy(this)
}
;
k.stop = function() {
    var a = this;
    this.B("will-stop");
    Qy(this);
    var b = "IDLE" === this.g.getState();
    Vy(this, function() {
        return a.g.stop()
    });
    Vy(this, function() {
        return a.g.close()
    });
    this.D = null;
    this.u = 1;
    b ? Fc(this.V, "idle") : Lc(this.V, "idle");
    Uy(this)
}
;
k.Ed = function() {
    return this.g.getCurrentTime()
}
;
k.setPosition = function(a) {
    var b = this;
    this.B("will-seek", a);
    this.l = this.V.g;
    this.g.seekTo(a, function() {
        return Wy(b)
    }, this.$);
    Fc(this.V, "seeking")
}
;
k.destroy = function() {
    Nc(this.V);
    Lc(this.V, "destroyed");
    Qy(this);
    try {
        this.g.stop()
    } catch (c) {
        console.error(c),
        this.B("debug-message", c.message)
    }
    for (var a = p(this.i.values()), b = a.next(); !b.done; b = a.next())
        b = b.value,
        b.off(b.Ia, this.N),
        b.destroy();
    this.i.clear();
    try {
        this.g.close()
    } catch (c) {
        console.error(c)
    }
    this.o.unsetVolumeChangeListener();
    this.O = !1;
    this.u = 1;
    this.D = null;
    clearInterval(this.S);
    document.body.removeChild(this.j);
    Fc(this.V, "destroyed")
}
;
k.getDuration = function() {
    return "1" === this.g.getStreamingProperty("IS_LIVE") ? Infinity : this.g.getDuration()
}
;
k.getVolume = function() {
    return this.o.getVolume()
}
;
k.setVolume = function(a) {
    a = Math.min(100, Math.max(0, a));
    this.o.getVolume() !== a && (this.B("will-change-volume", a),
    this.o.setVolume(a))
}
;
k.dl = function() {
    return this.u
}
;
k.El = function(a) {
    var b = this;
    this.B("will-change-rate", a);
    this.u = a;
    Vy(this, function() {
        return b.g.setSpeed(a)
    });
    this.B("rate-change", a)
}
;
k.el = function() {
    return this.D
}
;
k.mi = function(a) {
    switch (a.type) {
    case "playready":
        var b = new Ny(a);
        break;
    case "verimatrix":
        b = new Oy(a);
        break;
    default:
        throw new pb(a.type + " DRM");
    }
    b && (this.i.set(a.type, b),
    b.on(b.Ia, this.N))
}
;
k.vi = function(a) {
    var b = this.i.get(a);
    b && (b.off(b.Ia, this.N),
    b.destroy(),
    this.i.delete(a));
    return Promise.resolve()
}
;
function Sy(a) {
    a.g.setListener(Xy(a));
    a.O = !0;
    a.j = document.createElement("object");
    a.j.setAttribute("id", "av-player");
    a.j.setAttribute("type", "application/avplayer");
    a.j.style.position = "absolute";
    document.body.insertBefore(a.j, document.body.firstChild);
    a.Z = a.g.getState();
    a.S = setInterval(function() {
        return Uy(a)
    }, 100);
    a.V.on(a.V.Lb, a.jb);
    a.o.setVolumeChangeListener(function(b) {
        a.B("volume-change", b)
    });
    a.zd = new Dl(a.g,a.j,a.J,a.C,a.ra);
    a.zd.j()
}
function Xy(a) {
    for (var b = {
        onbufferingstart: a.Vj,
        onbufferingcomplete: a.Uj,
        oncurrentplaytime: a.Wj,
        onstreamcompleted: a.Xj,
        ondrmevent: a.hk,
        onevent: void 0,
        onsubtitlechange: void 0,
        onhttperrorevent: void 0,
        onuserdata: void 0
    }, c = {}, d = p(Object.entries(b)), e = d.next(); !e.done; c = {
        Qe: c.Qe,
        Sf: c.Sf
    },
    e = d.next())
        e = p(e.value),
        c.Qe = e.next().value,
        c.Sf = e.next().value,
        b[c.Qe] = function(f) {
            return function() {
                a.Pj.apply(a, [f.Qe, f.Sf].concat(r(ya.apply(0, arguments))))
            }
        }(c);
    b.onerror = function(f) {
        return a.Tc(Error(f))
    }
    ;
    return b
}
k.Pj = function(a, b) {
    var c = ya.apply(2, arguments);
    this.B("debug-message", "avplay " + a + ": [" + c.map(function(d) {
        return JSON.stringify(d)
    }).join(", ") + "]");
    b && ("destroyed" === this.V.g || Mc(this.V) || "error" === this.V.g ? this.B("debug-message", "avplay " + a + " ignored because video is in " + this.V.g + " state") : this.O ? b && Vy(this, b.bind.apply(b, [this].concat(r(c)))) : this.B("debug-message", "avplay " + a + " ignored because callback is not active"))
}
;
function Wy(a) {
    a.B("seeked", a.Ed());
    "ended" === a.l ? (Fc(a.V, "playing"),
    Vy(a, function() {
        return a.g.play()
    })) : a.l && Fc(a.V, a.l);
    a.l = null;
    Uy(a)
}
k.Vj = function() {
    this.B("debug-message", "avplay bufferingstart");
    "loading" === this.V.g ? this.v.rg = !1 : "seeking" !== this.V.g && "NONE" !== this.g.getState() && "waiting" !== this.V.g && (this.F = this.V.g,
    Fc(this.V, "waiting"))
}
;
k.Uj = function() {
    this.B("debug-message", "avplay bufferingcomplete");
    if ("loading" === this.V.g)
        this.v.rg = !0,
        Ty(this);
    else if ("seeking" !== this.V.g) {
        var a = this.g.getState();
        "IDLE" !== a && "PAUSED" !== a && "NONE" !== a && "waiting" === this.V.g && this.F && (Fc(this.V, this.F),
        this.F = null)
    }
}
;
k.Wj = function(a) {
    "playing" === this.V.g && !this.V.i && this.B("time-update", a)
}
;
k.Xj = function() {
    Fc(this.V, "ended");
    Uy(this)
}
;
function Uy(a) {
    var b = a.g.getState();
    if (b !== a.Z) {
        a.Z = b;
        a.B("debug-message", "avplay state change detected", b);
        var c = a.V.i;
        switch (b) {
        case "READY":
            a.v.readyState = !0;
            Ty(a);
            break;
        case "PLAYING":
            Kc(a.V, "playing");
            break;
        case "PAUSED":
            Kc(a.V, "paused");
            break;
        case "IDLE":
            c && "loading" === c.from && "idle" === c.yc && Fc(a.V, "idle");
            break;
        case "NONE":
            "idle" === a.V.g || "destroyed" === a.V.g || Fc(a.V, "idle")
        }
    }
}
k.hk = function(a, b) {
    this.B("debug-message", "drmevent", a + " " + JSON.stringify(b));
    var c = {};
    a = (c.PLAYREADY = "playready",
    c.VERIMATRIX = "verimatrix",
    c)[a];
    (a = this.i.get(a)) && a.F(b)
}
;
function Ty(a) {
    var b = a.v
      , c = b.readyState
      , d = b.rg;
    b.Ui && c && d && (a.zd.j(),
    Fc(a.V, "ready"))
}
function Qy(a) {
    a.v = {
        Ui: !1,
        readyState: !1,
        rg: !0
    }
}
function Vy(a, b) {
    try {
        b()
    } catch (c) {
        throw a.Tc(c),
        c;
    }
}
k.Tc = function(a) {
    Nc(this.V);
    a = [a.name, a.code, a.message].filter(function(b) {
        return void 0 !== b
    }).join(" ");
    "destroyed" === this.V.g ? this.B("debug-message", "Error happened in destroyed state: " + a) : ("error" === this.V.g || Fc(this.V, "error"),
    this.B(this.Ia, a))
}
;
function Ry(a, b) {
    var c = ["loading", "waiting", "playing", "seeking"].includes(b) ? window.webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF : window.webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON;
    a.ua !== c && (a.ua = c,
    window.webapis.appcommon.setScreenSaver(c, function() {
        a.B("debug-message", "ScreenSaver state changed to " + c)
    }, function(d) {
        console.error("Error changing screenSaver state", d);
        a.B("debug-message", "Failed to change screenSaver state: " + d)
    }))
}
;function Lj() {
    Ac.call(this);
    this.l = window.tizen;
    this.g = window.webapis;
    this.i = this.g.network.isConnectedToGateway();
    this.v = {
        LAN_CABLE_ATTACHED: this.g.network.NetworkState.LAN_CABLE_ATTACHED,
        LAN_CABLE_DETACHED: this.g.network.NetworkState.LAN_CABLE_DETACHED,
        LAN_CABLE_STATE_UNKNOWN: this.g.network.NetworkState.LAN_CABLE_STATE_UNKNOWN,
        GATEWAY_CONNECTED: this.g.network.NetworkState.GATEWAY_CONNECTED,
        GATEWAY_DISCONNECTED: this.g.network.NetworkState.GATEWAY_DISCONNECTED,
        WIFI_MODULE_STATE_ATTACHED: this.g.network.NetworkState.WIFI_MODULE_STATE_ATTACHED,
        WIFI_MODULE_STATE_DETACHED: this.g.network.NetworkState.WIFI_MODULE_STATE_DETACHED,
        WIFI_MODULE_STATE_UNKNOWN: this.g.network.NetworkState.WIFI_MODULE_STATE_UNKNOWN
    }
}
z(Lj, Ac);
k = Lj.prototype;
k.init = function() {
    this.info = new ux(this.l);
    this.input = new wx;
    this.storage = new Bc;
    window.addEventListener("appcontrol", this.Yj.bind(this));
    this.info.init().then(this.B.bind(this, this.Kb));
    this.Sj()
}
;
k.Uk = function() {
    return new Py(kc[this.info.Di()],kc[this.info.Yb()],this.info.version())
}
;
k.Zf = function() {
    this.l.application.getCurrentApplication().exit()
}
;
k.Pg = function() {
    return this.g.productinfo.isUdPanelSupported()
}
;
k.Ci = function() {
    var a = this.l.application.getCurrentApplication().getRequestedAppControl();
    if (!a)
        return {};
    a = a.appControl.data.find(function(b) {
        return "PAYLOAD" === b.key
    });
    if (!a)
        return {};
    a = JSON.parse(a.value[0]).values;
    if (!a)
        return {};
    try {
        return JSON.parse(a)
    } catch (b) {
        if (!(b instanceof SyntaxError))
            throw b;
    }
    return {}
}
;
k.hide = function() {
    this.l.application.getCurrentApplication().hide()
}
;
k.gj = function() {
    var a = this;
    if (this.j)
        return new Promise(function(b) {
            return b(a.j)
        }
        );
    this.j = new Ey(this.info.model());
    return this.j.start("vktv.msf.channel").then(function() {
        return a.j
    })
}
;
k.Sj = function() {
    var a = this;
    this.g.network.addNetworkStateChangeListener(function(b) {
        var c = a.i;
        b === a.v.GATEWAY_CONNECTED && (a.i = !0);
        b === a.v.GATEWAY_DISCONNECTED && (a.i = !1);
        c !== a.i && a.B("internet-connection-status-changed", a.i)
    })
}
;
k.Yj = function() {
    this.B("tizen-app-control", this.Ci())
}
;
function Yy() {
    this.g = null;
    this.j = Object.values(Dg)
}
t.Object.defineProperties(Yy.prototype, {
    i: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.g = a
        },
        get: function() {
            return this.g
        }
    }
});
function Zy(a) {
    var b = new RegExp(/^data\[(\w+)\]$/i);
    Object.entries(a || {}).forEach(function(c) {
        var d = p(c);
        c = d.next().value;
        d = d.next().value;
        var e = b.exec(c);
        e && (e = e[1]) && (delete a[c],
        a.data || (a.data = {}),
        a.data[e] = d)
    });
    return a
}
function $y(a, b) {
    var c = b;
    if ("string" === typeof b)
        try {
            c = JSON.parse(b)
        } catch (d) {
            return null
        }
    switch (a) {
    case "setup":
        return {
            Nk: c.attachToken
        };
    case "play":
        return {
            id: c.id,
            position: parseInt(c.position, 10)
        };
    case "search":
        return {
            query: c.query
        };
    case "key":
        return {
            key: c.key
        };
    case "contentNavigation":
        return {
            type: c.type,
            value: c.value,
            action: c.action
        };
    case "playerControl":
        return {
            type: c.type,
            value: c.value
        };
    case "contentControl":
    case "playbackNavigation":
        return {
            value: c.value
        }
    }
    return null
}
function az(a) {
    var b = a.event
      , c = $y(b, a.data);
    if (!c)
        return null;
    a = {
        yi: a.eventId,
        data: c
    };
    switch (b) {
    case "setup":
        return Object.assign({}, {
            event: "setup"
        }, a);
    case "play":
        return Object.assign({}, {
            event: "play"
        }, a);
    case "search":
        return Object.assign({}, {
            event: "search"
        }, a);
    case "key":
        return Object.assign({}, {
            event: "key"
        }, a);
    case "contentControl":
        return Object.assign({}, {
            event: "contentControl"
        }, a);
    case "contentNavigation":
        return Object.assign({}, {
            event: "contentNavigation"
        }, a);
    case "playbackNavigation":
        return Object.assign({}, {
            event: "playbackNavigation"
        }, a);
    case "playerControl":
        return Object.assign({}, {
            event: "playerControl"
        }, a);
    default:
        return null
    }
}
;function bz(a) {
    var b = this
      , c = a.qa
      , d = a.ej
      , e = a.Tl
      , f = a.ol
      , g = a.Qa
      , h = a.Xc;
    this.o = a.device;
    this.j = c;
    this.i = d;
    this.g = g;
    this.F = h;
    this.u = e;
    this.J = f;
    this.v = !1;
    this.l = null;
    a = {};
    this.C = (a.setup = this.Ck.bind(this),
    a.play = this.Fj.bind(this),
    a.search = this.Bk.bind(this),
    a.key = this.Ej.bind(this),
    a.contentControl = this.wk.bind(this),
    a.contentNavigation = this.xk.bind(this),
    a.playbackNavigation = this.zk.bind(this),
    a.playerControl = this.Ak.bind(this),
    a);
    a = this.i.J ? Promise.resolve() : Ed(this.i, "session-started");
    c = {};
    this.D = (c.setup = a,
    c.play = a,
    c);
    switch (this.o.info.type()) {
    case "tizen":
        cz(this);
        break;
    case "webos":
        dz(this)
    }
    this.i.on("marusia-session-started", function(l, m) {
        m ? (b.v = !1,
        ez(b)) : b.v = !0
    })
}
function fz(a, b) {
    b && (b = az(b)) && gz(a, b)
}
function ez(a) {
    function b() {
        a.v || Nv(a.J).then(function(c) {
            c && c.forEach(function(d) {
                fz(a, d)
            })
        }).finally(function() {
            b()
        })
    }
    b()
}
k = bz.prototype;
k.Ck = function(a) {
    return hz(this, a.Nk)
}
;
k.Fj = function(a) {
    return iz(this, a.id, 1E3 * a.position)
}
;
k.Bk = function(a) {
    return Fv(this.j, a.query)
}
;
k.Ej = function(a) {
    return a.key && Cg[a.key] ? Promise.resolve(this.j.g.g.da(Cg[a.key], new KeyboardEvent("keydown"))) : Promise.resolve()
}
;
k.wk = function(a) {
    var b = null;
    switch (a.value) {
    case "like":
        b = this.g.Kc();
        break;
    case "unlike":
        b = jr(this.g);
        break;
    case "favorite":
        b = this.g.Gc();
        break;
    case "unfavorite":
        b = lr(this.g);
        break;
    case "subscribe":
        b = mr(this.g);
        break;
    case "unsubscribe":
        b = nr(this.g);
        break;
    case "open-owner":
        a = this.g,
        a.i && or(a.J, a.i),
        b = void 0
    }
    return Promise.resolve(b)
}
;
k.xk = function(a) {
    var b = Promise
      , c = b.resolve
      , d = this.F
      , e = a.value
      , f = a.action;
    if (d.g)
        switch (a.type) {
        case "text":
            d.g.Ad(e, f);
            break;
        case "position":
            if (a = parseInt(e, 10),
            isNaN(a)) {
                if (d.j.includes(e)) {
                    a = NaN;
                    switch (e) {
                    case "current":
                        a = 0;
                        break;
                    case "next":
                        a = 1;
                        break;
                    case "prev":
                        a = -1;
                        break;
                    case "last":
                        a = Infinity;
                        break;
                    case "first":
                        a = -Infinity
                    }
                    d.g.Vc(a, f)
                }
            } else
                d.g.Vc(a, f)
        }
    return c.call(b, void 0)
}
;
k.zk = function(a) {
    var b = this.j.g.g;
    if (b instanceof Rs)
        switch (b = Ss(b),
        a.value) {
        case "play":
            b.play();
            break;
        case "pause":
            b.pause();
            break;
        case "stop":
            b.stop();
            break;
        case "start":
            b.g(-Infinity);
            break;
        case "end":
            b.g(Infinity);
            break;
        default:
            b.g(parseInt(a.value, 10))
        }
    return Promise.resolve()
}
;
k.Ak = function() {
    return Promise.resolve()
}
;
function gz(a, b) {
    var c = b.yi
      , d = b.event
      , e = b.data
      , f = a.C[d];
    f && (a.D[d] || Promise.resolve()).then(function() {
        return f(e).then(function(g) {
            if (g = Object.assign({}, {
                eventId: c
            }, g))
                switch (a.o.info.type()) {
                case "tizen":
                    a.l && Fy(a.l, "vktv.application.status", g);
                    break;
                case "webos":
                    jz(g)
                }
        })
    })
}
function cz(a) {
    var b = a.o;
    "function" === typeof b.gj && b.gj().then(function(c) {
        a.l = c;
        Hy(c, function(d) {
            fz(a, d)
        });
        Fy(c, "vktv.application.ready");
        a.l = c
    })
}
function dz(a) {
    kz(function(b) {
        b = fd(b.data);
        b = Zy(b);
        fz(a, b)
    }, !0, {
        type: "init"
    })
}
function iz(a, b, c) {
    c = void 0 === c ? 0 : c;
    return Mk(a.u, [b]).then(function(d) {
        return (d = d.ba) && d[0] ? (d = dm(d[0], void 0, c),
        Lt(a.j, d).then(function() {
            return {
                code: 200,
                text: "Ok"
            }
        })) : Promise.resolve({
            code: 404,
            text: "Not Found"
        })
    })
}
function hz(a, b) {
    return D(function(c) {
        return 1 == c.g ? (a.i.v = b,
        a.i.j ? (c.g = 2,
        c = void 0) : c = B(c, rl(a.i), 2),
        c) : B(c, Ev(a.j, gt), 0)
    })
}
function kz(a, b, c) {
    if (PalmServiceBridge) {
        var d = new PalmServiceBridge;
        d.onservicecallback = function(e) {
            try {
                var f = JSON.parse(e);
                a(f)
            } catch (g) {}
        }
        ;
        b = Object.assign(c || {}, {
            subscribe: !!b
        });
        d.call("luna://vkvideo.service/remotecontrol", JSON.stringify(b))
    }
}
function jz(a) {
    kz(function() {}, !1, {
        type: "status",
        data: {
            code: a.code,
            text: a.text,
            eventId: a.yi
        }
    })
}
;function lz(a) {
    N.call(this);
    this.l = null;
    this.ja = !1;
    this.Ja = a.Gb;
    this.ya = a.Al;
    this.D = a.storage
}
z(lz, N);
lz.prototype.init = function(a) {
    var b = this;
    return D(function(c) {
        if (1 == c.g)
            return B(c, mz(b), 2);
        b.S = new Di;
        b.u = new Yk({
            Ec: "https://oauth." + b.o.g.replace("api.", ""),
            $d: "5.162",
            lang: a
        });
        b.j = new zi({
            Ec: "https://" + b.o.g,
            $d: "5.162",
            lang: a
        });
        b.N = new ui({
            Ec: "https://" + b.o.g.replace("api.", ""),
            lang: a
        });
        b.O = new Ki({
            Ec: b.o.i
        });
        b.$ = new Qv(b.j);
        b.ra = new Rv(b.j);
        b.J = new Ov(b.j);
        b.resources = {
            Kk: new Ul(b.j),
            kc: new al(b.u,b.j),
            lh: new Jv(b.O),
            Le: new Tv(b.j),
            Ql: new Hv(b.u),
            group: b.J,
            Bd: new ev(b.j),
            video: new Ik(b.j),
            xc: new fv(b.j),
            Wn: new Qv(b.j),
            Nl: new Vv(b.N),
            Sl: new Uk(b.S),
            wl: new Xv(b.S),
            Ya: new gn(b.S)
        };
        b.i = new Xl(b.resources.Kk);
        b.i.lang = a;
        b.K = new ke;
        b.K.Wc("en", new Kd(sx.en || sx.en));
        ne(b.K);
        var d = new rv(b.i,b.resources.xc,b.D);
        b.F = d;
        b.md = new Xi;
        b.qa = new zv(b.Ja,b.ya,b.resources.video,b.resources.Bd,d);
        b.profile = new yp(b.resources);
        b.za = new dg(b.K,b.resources);
        b.g = new ll({
            storage: b.D,
            resources: b.resources,
            od: b.i.od
        });
        b.Qa = new rw({
            ej: b.g,
            qa: b.qa,
            Qk: b.$,
            ml: b.ra,
            fl: b.J
        });
        b.Xc = new Yy;
        b.ua = new Ew({
            K: b.K,
            resources: b.resources,
            Qa: b.Qa,
            Ke: b.i.Ke
        });
        b.i.J && (b.hb = new bz({
            device: O.device,
            qa: b.qa,
            ej: b.g,
            Tl: b.resources.video,
            ol: b.resources.lh,
            Qa: b.Qa,
            Xc: b.Xc
        }));
        b.jb = new tx;
        d = new gx(b.i,b.resources.wl,b.D);
        b.xc = [new Zw(b.i,b.resources.xc,b.g,b.D), d, new qx(b.i)];
        b.hc = new wn(b.i);
        b.Pc = new xl(b.resources.video,b.resources.Sl,b.g);
        b.Wa = new Gm(b.resources.video);
        nz(b);
        oz(b);
        pz(b);
        qz(b);
        rz(b);
        sz(b);
        tz(b);
        c.g = 0
    })
}
;
function uz(a) {
    vz(a).then(function() {
        return wz(a)
    }).then(function() {
        var b = a.qa;
        b.g.register(new Ft, "videos-list");
        b.g.register(new Nt, "owner-videos-list");
        b.g.register(new Rs, "player");
        b.g.register(new et, "auth");
        b.g.register(new St, "broken");
        b.g.register(new Xt, "no-internet");
        b.g.register(new Lu, "search");
        b.g.register(new vv, "subscription-videos-list");
        var c = b.u;
        b = b.g;
        tv(c, b);
        c.j = new pv(b)
    }).then(function() {
        return pl(a.g).then(function(b) {
            if ("error" === b)
                throw new Pi({
                    name: "bootstrap-error",
                    details: "ServiceStore -> bootstrapApplication -> restoreOrAnon:: restore failed"
                });
            a.u.j = a.g.C.tb;
            b = a.j;
            var c = a.g.C;
            b.j = c.kb;
            b.l = c.tb
        })
    }).then(function() {
        var b = a.xc.find(function(c) {
            return c instanceof gx
        });
        if (b && b.i.g)
            try {
                Yv(b.l)
            } catch (c) {}
        return Promise.all([hg(a.za), zp(a.profile, a.g.j)]).catch(function(c) {
            if (c instanceof Pi && "authorization-revoke-needed-error" === c.name)
                throw c;
            throw new Pi({
                name: "bootstrap-error",
                details: c.toString()
            });
        })
    }).then(function() {
        lg(a.za);
        return a.Z = !0
    }).catch(function(b) {
        a.Z = !1;
        throw b;
    })
}
function xz(a) {
    a.g.on("session-started", function(b, c) {
        kg(a.za);
        zp(a.profile, !!c.tb)
    })
}
function mz(a) {
    return D(function(b) {
        a.o = new bw;
        a.v = new jw(a.o);
        a.C = new kw(a.v);
        b.g = 0
    })
}
function vz(a) {
    var b;
    return D(function(c) {
        if (1 == c.g)
            return B(c, fw(a.o), 2);
        if (b = c.i)
            a.o.g = b,
            a.u.i = "https://oauth." + a.o.g.replace("api.", ""),
            a.j.i = "https://" + a.o.g,
            a.N.i = "https://" + a.o.g.replace("api.", "");
        if (!b)
            throw new Pi({
                name: "host-error",
                details: "ServiceStore -> initNetwork -> get VK host"
            });
        c.g = 0
    })
}
function wz(a) {
    return Wv(a.resources.Nl, a.i.lang).then(function(b) {
        if (b) {
            var c = Hd(b.code);
            if (c) {
                var d = c.lang;
                sx[d] = re(sx[d] || sx.en, b.keys || {});
                b = new Kd(sx[c.lang] || sx.en);
                a.K.Wc(c.lang, b);
                me(a.K, c.lang)
            }
        }
    })
}
function pz(a) {
    Object.values(a.resources).filter(function(b) {
        return b instanceof N
    }).forEach(function(b) {
        b.on(b.mj, function(c, d) {
            throw d;
        })
    })
}
function qz(a) {
    Object.values(a.resources).filter(function(b) {
        return b instanceof Z
    }).concat([a.$, a.ra, a.J]).forEach(function(b) {
        b.Sc = a.md
    })
}
function oz(a) {
    a.C.on("get-authorization-error", function() {
        ol(a.g);
        lt();
        a.g.kc(!0, !0)
    });
    a.C.on("authorization-revoke-needed", function() {
        !a.g.j && a.Z ? (ol(a.g),
        lt(),
        Ev(a.qa)) : (ol(a.g),
        location.reload())
    });
    a.C.on("application-broken", function() {
        lt();
        Cv(a.qa, "broken", Promise.resolve(null))
    })
}
function tz(a) {
    a.profile.on("change-profile", function(b, c) {
        gg(a.za, c)
    })
}
function sz(a) {
    gg(a.za, a.profile.profile);
    a.za.on("menu-service-item-selected", function(b, c) {
        "subscribes" === c.qc ? Kw(a.ua, a.za.i, c) : c.data && c.data.Og && c.data.we ? Gw(a.ua, c.data.we) : c.data && c.data.ma ? Dv(a.qa, c.data.ma) : Gv(a.qa, c)
    });
    a.za.on("menu-service-open-default-section-needed", function() {
        a.qa.g.g instanceof et || (lt(),
        lg(a.za))
    });
    a.za.on("menu-service-profile-selected", function() {
        if (!a.g.J || a.g.j)
            Ev(a.qa);
        else {
            var b = new Vs({
                name: "sign-out",
                profile: a.profile.profile,
                action: {
                    label: O.g.K.G("buttons.signOut"),
                    value: "sign-out",
                    Sa: !0
                },
                aj: Ys,
                Na: !1,
                Ga: !1
            })
              , c = a.qa.g.g;
            b.bb(c);
            Hf(b).then(function(d) {
                return D(function(e) {
                    if (1 == e.g)
                        return "sign-out" !== d ? (e.g = 2,
                        e = void 0) : e = B(e, xh(c, rl(a.g)), 3),
                        e;
                    if (2 != e.g) {
                        var f = a.za;
                        f = null !== f.l ? f.l : Promise.resolve();
                        return B(e, xh(c, f), 2)
                    }
                    b.close();
                    e.g = 0
                })
            })
        }
    })
}
function rz(a) {
    a.g.on("session-started", function(b, c) {
        b = a.j;
        b.j = c.kb;
        b.l = c.tb;
        a.u.j = c.tb;
        a.i.N = a.g;
        a.i.load()
    });
    a.g.on("session-ended", function(b, c) {
        a.ua.clear();
        b = a.j;
        b.j = c.kb;
        b.l = c.tb;
        a.u.j = c.tb;
        a.profile.profile = Ce()
    });
    a.g.on("marusia-session-started", function(b, c) {
        b = a.O;
        b.v = c ? c.dj : null;
        b.l = c ? c.Sh : null;
        b.j = c ? c.deviceId : null
    })
}
function nz(a) {
    a.i.on("config-loaded", function(b, c) {
        a.j.v = c.$d;
        a.j.g = c.lang;
        a.u.g = c.lang;
        a.N.g = c.lang;
        a.O.g = c.lang;
        me(a.K, c.lang);
        c.preview !== Pl && (a.l = new Ol(c.preview));
        a.g.O = c.od
    })
}
t.Object.defineProperties(lz.prototype, {
    Z: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.ja
        },
        set: function(a) {
            this.ja = a;
            this.B("bootstrap-completed", a)
        }
    }
});
function yz() {
    qb.apply(this, arguments)
}
z(yz, qb);
yz.prototype.lg = function(a, b) {
    if (!(a instanceof of || a instanceof Mf || a instanceof xd || a instanceof ch || a instanceof Ln || this.g.has(b))) {
        var c = this.kg.bind(this, a);
        b.addEventListener("mouseover", c, !1);
        b.addEventListener("click", c, !1);
        a instanceof cf && b.addEventListener("mousedown", c, !1);
        this.g.set(b, c)
    }
}
;
yz.prototype.Yi = function(a, b) {
    var c = this.g.get(b);
    c && (b.removeEventListener("mouseover", c, !1),
    b.removeEventListener("click", c, !1),
    a instanceof cf && b.removeEventListener("mousedown", c, !1),
    this.g.delete(b))
}
;
yz.prototype.kg = function(a, b) {
    if (!this.i.i)
        switch (b.type) {
        case "mouseover":
            rb(a);
            break;
        case "click":
            a.Ef(b);
            break;
        case "mousedown":
            a instanceof cf && a.O()
        }
}
;
function zz(a) {
    this.g = a;
    Az();
    Az();
    window.addEventListener("popstate", this.i.bind(this))
}
function Az() {
    window.history && window.history.pushState && window.history.pushState({}, "ZombieBox history")
}
zz.prototype.i = function(a) {
    null !== a.state && this.g();
    Az()
}
;
function Bz() {
    N.call(this);
    var a = this;
    this.l = this.j = this.v = this.i = this.o = this.u = this.$ = this.F = this.device = null;
    this.J = !1;
    this.Kb = "ready";
    window.hasOwnProperty("console");
    this.on("dom-ready", function() {
        var b = a.ag();
        b.on(b.Kb, a.B.bind(a, "device-ready", b));
        b.init()
    });
    this.on("device-ready", function(b, c) {
        new zz(a.da.bind(a, 20));
        a.device = c;
        a.device.storage.g = "vktv";
        a.o.classList.add(a.device.info.type());
        a.cf();
        a.ai();
        a.l = new dc;
        a.l.on("child-layer-shown", a.tk.bind(a));
        a.l.on("child-layer-hidden", a.sk.bind(a));
        a.u.appendChild(a.l.O);
        a.ki();
        a.B(a.Kb);
        a.B("start", c.Ci())
    });
    this.on(this.Kb, function() {
        return a.Pi()
    });
    this.on("start", function(b, c) {
        return a.Qi(c)
    });
    window.addEventListener("load", this.Mj.bind(this), !1);
    window.addEventListener("resize", this.Jk.bind(this), !1)
}
z(Bz, N);
k = Bz.prototype;
k.da = function(a, b) {
    var c = !1
      , d = this.J ? this.l : this.i.g;
    d && (c = d.da(a, b));
    if (!c)
        switch (c = !1,
        a) {
        case 20:
            this.Vd(),
            b && b.preventDefault(),
            c = !0
        }
    return c
}
;
function lt() {
    O.v.clear()
}
k.Vd = function() {
    if (!(0 < this.v.g))
        return this.Wd(),
        Promise.resolve(null);
    var a = this.device.input.block();
    a = this.device.input.Ol.bind(this.device.input, a);
    return this.v.v().finally(a)
}
;
k.Lf = function(a) {
    mb(this.u);
    this.l.Lf(a)
}
;
function ms() {
    O.F.classList.remove("_transparent")
}
k.Pi = function() {}
;
k.Qi = function() {}
;
k.tk = function() {
    mb(this.u);
    if (!this.J) {
        var a = this.i.g;
        a && a.blur()
    }
    this.J = !0
}
;
k.sk = function() {
    if (0 === this.l.S.length) {
        var a = this.i.g;
        a && a.focus();
        nb(this.u);
        this.J = !1
    }
}
;
k.Jk = function() {
    this.cf();
    var a = kc[this.device.info.Di()]
      , b = kc[this.device.info.Yb()];
    this.B("resolution-changed", a, b)
}
;
k.cf = function() {
    var a = kc[this.device.info.Yb()]
      , b = a ? "zb-" + a.name : "zb-unknown-resolution"
      , c = ib("meta");
    c.name = "viewport";
    c.content = "width=" + a.width;
    this.ja && document.head.removeChild(this.ja);
    document.head.appendChild(c);
    this.ja = c;
    this.ra && this.o.classList.remove(this.ra);
    this.o.classList.add(b);
    this.ra = b
}
;
k.Wd = function() {
    this.device.Zf()
}
;
k.Mj = function() {
    this.o = jb("zb-body");
    document.body.appendChild(this.o);
    this.F = jb("zb-layer-container zb-fullscreen");
    this.u = jb("zb-system-container zb-fullscreen");
    this.$ = jb("zb-plugin-container");
    this.o.appendChild(this.F);
    this.o.appendChild(this.u);
    this.o.appendChild(this.$);
    nb(this.u);
    this.B("dom-ready")
}
;
k.ai = function() {
    this.j = new qb(this);
    this.j.i = this.device.input;
    this.j.init()
}
;
k.ki = function() {
    this.i = new hd(this.F);
    this.v = new pd;
    this.D = new md;
    this.D.Gb = this.i;
    this.D.g = this.v
}
;
function Cz() {
    return window.tizen && window.tizen.systeminfo && window.tizen.systeminfo.getPropertyValue ? new Lj : null
}
;function Dz() {
    Bz.call(this)
}
z(Dz, Bz);
Dz.prototype.ag = function() {
    var a;
    Cz && (a = Cz());
    if (!a)
        throw Error("Can't detect a platform.");
    return a
}
;
function Ez() {
    window.tizenGlobalAppLib || (Bz.call(this),
    this.Z = !1,
    this.N = new bc,
    this.O = !1,
    this.ua = null,
    this.C = "")
}
z(Ez, Dz);
k = Ez.prototype;
k.Pi = function() {
    var a = this;
    Fz(this);
    this.g = new lz({
        Gb: this.i,
        Al: this.D,
        storage: this.device.storage
    });
    this.ua = this.g.init(Gz(this)).then(function() {
        a.device.on(a.device.o, function(b, c) {
            c || (a.O = !0,
            Cv(a.g.qa, "no-internet", Promise.resolve(null)))
        })
    })
}
;
k.Qi = function(a) {
    var b = this;
    gd(function(c) {
        c.init({
            release: "vktv-tizen-upgradable_1.3.12",
            dsn: "https://b0cc7d96c6d74458a59b76f6736ccd49@stacks.vk-portal.net/30",
            integrations: [yd]
        })
    });
    window.testSentryException = function() {
        throw Error("Something went wrong");
    }
    ;
    this.ua.then(function() {
        Hz(b);
        Iz(b);
        var c = a ? !!Object.keys(a || {}).length : !1;
        Jz(b, c ? a : void 0)
    })
}
;
k.Vd = function() {
    return this.O ? (this.Wd(),
    Promise.resolve()) : Dz.prototype.Vd.call(this)
}
;
k.da = function(a, b) {
    uc = uc || 0;
    if (vc[uc] !== a)
        uc = 0;
    else if (uc === vc.length - 1) {
        var c = O;
        mb(c.u);
        c = c.l;
        var d = new oc(void 0);
        c.Lf(d)
    } else
        uc++;
    return Dz.prototype.da.call(this, Kz[a] || a, b)
}
;
function Jz(a, b) {
    var c = Dd(700);
    Promise.all([c, Ed(a.g, "bootstrap-completed")]).then(function(d) {
        d = p(d);
        d.next();
        if (!d.next().value)
            return Lz();
        xz(a.g);
        Lz().then(function() {
            lg(a.g.za);
            a.g.i.J && b && fz(a.g.hb, b)
        })
    });
    uz(a.g)
}
function Mz(a) {
    var b = new Aq({
        name: "exit",
        title: O.g.K.G("exitPopup.title"),
        actions: [{
            label: O.g.K.G("buttons.yes"),
            value: Iq
        }, {
            label: O.g.K.G("buttons.no"),
            value: Jq,
            Sa: !0
        }],
        Na: !1,
        Ga: !0
    });
    b.on("popup-interaction", function(c, d) {
        d === Iq && a.device.Zf()
    });
    b.bb(a)
}
k.ki = function() {
    var a = this;
    this.i = new od(this.F);
    this.v = new td;
    this.v.j = this.i;
    this.D = new nd;
    this.D.Gb = this.i;
    this.D.g = this.v;
    this.i.on("after-show", function(b, c) {
        c.rb && c.Ra && (b = a.device.input.l,
        b !== c.Cg && (b ? c.rb() : c.Ra()))
    });
    this.i.on("before-hide", function(b, c) {
        c.Ra && c.Ra()
    })
}
;
k.ai = function() {
    this.j = new yz(this);
    this.j.i = this.device.input;
    this.j.init()
}
;
k.ag = function() {
    return Dz.prototype.ag.call(this)
}
;
k.cf = function() {
    var a = {};
    this.S = (a[3] = 3,
    a[2] = 2,
    a[6] = 2,
    a[7] = 3,
    a)[this.device.info.Yb()] || 2;
    Dz.prototype.cf.call(this);
    document.querySelector("html").style.fontSize = O.S + "px"
}
;
k.Wd = function() {
    var a = this.g.za.u;
    a && a.vb ? Mz(this) : lg(this.g.za)
}
;
function Fz(a) {
    var b = Cc(a.device.storage, "__uid");
    if (b) {
        var c = a.device.info.type();
        a.C = b.startsWith(c) ? b : c + ":" + b
    } else
        b = Fd(function() {
            return a.device.info.Dl()
        }, function() {
            var d = Cc(a.device.storage, "__uid");
            if (!d) {
                d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
                var e = Array(36), f = 0, g;
                for (g = 0; 36 > g; g++)
                    if (8 === g || 13 === g || 18 === g || 23 === g)
                        e[g] = "-";
                    else if (14 === g)
                        e[g] = "4";
                    else {
                        2 >= f && (f = 33554432 + 16777216 * Math.random() | 0);
                        var h = f & 15;
                        f >>= 4;
                        e[g] = d[19 === g ? h & 3 | 8 : h]
                    }
                d = e.join("");
                Dc(a.device.storage, "__uid", d)
            }
            return d
        }),
        a.C = a.device.info.type() + ":" + b
}
function Gz(a) {
    try {
        var b = a.device.info.locale()
    } catch (c) {
        b = null
    }
    return b ? (a = Hd(b.split("-")[0])) && a.lang || "en" : "en"
}
function Lz() {
    var a = document.getElementById("vk-logo")
      , b = document.getElementById("splash");
    if (!b || !a)
        return Promise.resolve();
    a.style.animation = "400ms ease-in-out logo-fade-out forwards";
    return Dd(400).then(function() {
        b.style.display = "none";
        b.style.zIndex = "";
        a.style.animation = "";
        return null
    })
}
function Iz(a) {
    function b() {
        var e = a.i.g;
        e instanceof T && a.N.block(Ed(e.D, "unblock"))
    }
    var c = jb("vk-loader zb-fullscreen");
    nb(c);
    var d = new xd;
    c.appendChild(d.L());
    a.F.appendChild(c);
    a.N.on("block", function() {
        mb(c);
        Bd(c, "showed")
    });
    a.N.on("unblock", function() {
        nb(c);
        Ad(c, "showed")
    });
    a.i.on("before-show", function(e, f) {
        if (f instanceof T || f instanceof Rs)
            a.g.md.g = f.Wh()
    });
    a.i.on("after-show", function(e, f) {
        if (f instanceof T)
            f.D.on("block", b)
    });
    a.i.on("before-hide", function(e, f) {
        f instanceof T && f.D.off("block", b)
    })
}
function Hz(a) {
    a.device.input.on(a.device.input.C, function() {
        Nz(a, !0)
    });
    a.device.input.on(a.device.input.J, function() {
        Nz(a, !1)
    })
}
function Nz(a, b) {
    a.Z !== b && (a.Z = b,
    (a = a.i.g) && a.rb && a.Ra && (b ? a.rb() : a.Ra()))
}
var Oz = {}
  , Kz = (Oz[42] = 2,
Oz[43] = 4,
Oz[45] = 3,
Oz[44] = 1,
Oz);
var O = new Ez;
