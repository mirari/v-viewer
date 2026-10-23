//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = Object.freeze({}), u = Array.isArray;
function d(e) {
	return e == null;
}
function f(e) {
	return e != null;
}
function p(e) {
	return e === !0;
}
function m(e) {
	return e === !1;
}
function h(e) {
	return typeof e == "string" || typeof e == "number" || typeof e == "symbol" || typeof e == "boolean";
}
function g(e) {
	return typeof e == "function";
}
function _(e) {
	return typeof e == "object" && !!e;
}
var v = Object.prototype.toString;
function y(e) {
	return v.call(e) === "[object Object]";
}
function b(e) {
	return v.call(e) === "[object RegExp]";
}
function x(e) {
	var t = parseFloat(String(e));
	return t >= 0 && Math.floor(t) === t && isFinite(e);
}
function S(e) {
	return f(e) && typeof e.then == "function" && typeof e.catch == "function";
}
function ee(e) {
	return e == null ? "" : Array.isArray(e) || y(e) && e.toString === v ? JSON.stringify(e, C, 2) : String(e);
}
function C(e, t) {
	return t && t.__v_isRef ? t.value : t;
}
function te(e) {
	var t = parseFloat(e);
	return isNaN(t) ? e : t;
}
function w(e, t) {
	for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
	return t ? function(e) {
		return n[e.toLowerCase()];
	} : function(e) {
		return n[e];
	};
}
var T = w("slot,component", !0), E = w("key,ref,slot,slot-scope,is");
function D(e, t) {
	var n = e.length;
	if (n) {
		if (t === e[n - 1]) {
			e.length = n - 1;
			return;
		}
		var r = e.indexOf(t);
		if (r > -1) return e.splice(r, 1);
	}
}
var ne = Object.prototype.hasOwnProperty;
function O(e, t) {
	return ne.call(e, t);
}
function k(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] || (t[n] = e(n));
	};
}
var A = /-(\w)/g, j = k(function(e) {
	return e.replace(A, function(e, t) {
		return t ? t.toUpperCase() : "";
	});
}), re = k(function(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}), ie = /\B([A-Z])/g, M = k(function(e) {
	return e.replace(ie, "-$1").toLowerCase();
});
/* istanbul ignore next */
function ae(e, t) {
	function n(n) {
		var r = arguments.length;
		return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
	}
	return n._length = e.length, n;
}
function oe(e, t) {
	return e.bind(t);
}
var se = Function.prototype.bind ? oe : ae;
function ce(e, t) {
	t ||= 0;
	for (var n = e.length - t, r = Array(n); n--;) r[n] = e[n + t];
	return r;
}
function N(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function le(e) {
	for (var t = {}, n = 0; n < e.length; n++) e[n] && N(t, e[n]);
	return t;
}
function P(e, t, n) {}
var ue = function(e, t, n) {
	return !1;
}, de = function(e) {
	return e;
};
function fe(e) {
	return e.reduce(function(e, t) {
		return e.concat(t.staticKeys || []);
	}, []).join(",");
}
function pe(e, t) {
	if (e === t) return !0;
	var n = _(e), r = _(t);
	if (n && r) try {
		var i = Array.isArray(e), a = Array.isArray(t);
		if (i && a) return e.length === t.length && e.every(function(e, n) {
			return pe(e, t[n]);
		});
		if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
		if (!i && !a) {
			var o = Object.keys(e), s = Object.keys(t);
			return o.length === s.length && o.every(function(n) {
				return pe(e[n], t[n]);
			});
		}
		/* istanbul ignore next */
		return !1;
	} catch {
		/* istanbul ignore next */
		return !1;
	}
	return !n && !r && String(e) === String(t);
}
function me(e, t) {
	for (var n = 0; n < e.length; n++) if (pe(e[n], t)) return n;
	return -1;
}
function he(e) {
	var t = !1;
	return function() {
		t || (t = !0, e.apply(this, arguments));
	};
}
function ge(e, t) {
	return e === t ? e === 0 && 1 / e != 1 / t : e === e || t === t;
}
var _e = "data-server-rendered", F = [
	"component",
	"directive",
	"filter"
], ve = [
	"beforeCreate",
	"created",
	"beforeMount",
	"mounted",
	"beforeUpdate",
	"updated",
	"beforeDestroy",
	"destroyed",
	"activated",
	"deactivated",
	"errorCaptured",
	"serverPrefetch",
	"renderTracked",
	"renderTriggered"
], I = {
	optionMergeStrategies: Object.create(null),
	silent: !1,
	productionTip: !1,
	devtools: !1,
	performance: !1,
	errorHandler: null,
	warnHandler: null,
	ignoredElements: [],
	keyCodes: Object.create(null),
	isReservedTag: ue,
	isReservedAttr: ue,
	isUnknownElement: ue,
	getTagNamespace: P,
	parsePlatformTagName: de,
	mustUseProp: ue,
	async: !0,
	_lifecycleHooks: ve
}, ye = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function be(e) {
	var t = (e + "").charCodeAt(0);
	return t === 36 || t === 95;
}
function xe(e, t, n, r) {
	Object.defineProperty(e, t, {
		value: n,
		enumerable: !!r,
		writable: !0,
		configurable: !0
	});
}
var Se = RegExp(`[^${ye.source}.\$_\\d]`);
function Ce(e) {
	if (!Se.test(e)) {
		var t = e.split(".");
		return function(e) {
			for (var n = 0; n < t.length; n++) {
				if (!e) return;
				e = e[t[n]];
			}
			return e;
		};
	}
}
var we = "__proto__" in {}, L = typeof window < "u", R = L && window.navigator.userAgent.toLowerCase(), Te = R && /msie|trident/.test(R), Ee = R && R.indexOf("msie 9.0") > 0, De = R && R.indexOf("edge/") > 0;
R && R.indexOf("android");
var Oe = R && /iphone|ipad|ipod|ios/.test(R);
R && /chrome\/\d+/.test(R), R && /phantomjs/.test(R);
var ke = R && R.match(/firefox\/(\d+)/), Ae = {}.watch, je = !1;
if (L) try {
	var Me = {};
	Object.defineProperty(Me, "passive", { get: function() {
		/* istanbul ignore next */
		je = !0;
	} }), window.addEventListener("test-passive", null, Me);
} catch {}
var Ne, Pe = function() {
	return Ne === void 0 && 
	/* istanbul ignore if */
	(Ne = !L && typeof global < "u" && global.process && global.process.env.VUE_ENV === "server"), Ne;
}, Fe = L && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */
function Ie(e) {
	return typeof e == "function" && /native code/.test(e.toString());
}
var Le = typeof Symbol < "u" && Ie(Symbol) && typeof Reflect < "u" && Ie(Reflect.ownKeys), Re = typeof Set < "u" && Ie(Set) ? Set : function() {
	function e() {
		this.set = Object.create(null);
	}
	return e.prototype.has = function(e) {
		return this.set[e] === !0;
	}, e.prototype.add = function(e) {
		this.set[e] = !0;
	}, e.prototype.clear = function() {
		this.set = Object.create(null);
	}, e;
}(), ze = null;
function Be(e) {
	e === void 0 && (e = null), e || ze && ze._scope.off(), ze = e, e && e._scope.on();
}
var Ve = function() {
	function e(e, t, n, r, i, a, o, s) {
		this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
	}
	return Object.defineProperty(e.prototype, "child", {
		/* istanbul ignore next */
		get: function() {
			return this.componentInstance;
		},
		enumerable: !1,
		configurable: !0
	}), e;
}(), z = function(e) {
	e === void 0 && (e = "");
	var t = new Ve();
	return t.text = e, t.isComment = !0, t;
};
function B(e) {
	return new Ve(void 0, void 0, void 0, String(e));
}
function He(e) {
	var t = new Ve(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
	return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
}
var Ue = 0, V = [], H = function() {
	for (var e = 0; e < V.length; e++) {
		var t = V[e];
		t.subs = t.subs.filter(function(e) {
			return e;
		}), t._pending = !1;
	}
	V.length = 0;
}, U = function() {
	function e() {
		this._pending = !1, this.id = Ue++, this.subs = [];
	}
	return e.prototype.addSub = function(e) {
		this.subs.push(e);
	}, e.prototype.removeSub = function(e) {
		this.subs[this.subs.indexOf(e)] = null, this._pending || (this._pending = !0, V.push(this));
	}, e.prototype.depend = function(t) {
		e.target && e.target.addDep(this);
	}, e.prototype.notify = function(e) {
		for (var t = this.subs.filter(function(e) {
			return e;
		}), n = 0, r = t.length; n < r; n++) t[n].update();
	}, e;
}();
U.target = null;
var We = [];
function W(e) {
	We.push(e), U.target = e;
}
function G() {
	We.pop(), U.target = We[We.length - 1];
}
var Ge = Array.prototype, K = Object.create(Ge);
[
	"push",
	"pop",
	"shift",
	"unshift",
	"splice",
	"sort",
	"reverse"
].forEach(function(e) {
	var t = Ge[e];
	xe(K, e, function() {
		var n = [...arguments], r = t.apply(this, n), i = this.__ob__, a;
		switch (e) {
			case "push":
			case "unshift":
				a = n;
				break;
			case "splice": a = n.slice(2);
		}
		return a && i.observeArray(a), i.dep.notify(), r;
	});
});
var Ke = Object.getOwnPropertyNames(K), qe = {}, q = !0;
function J(e) {
	q = e;
}
var Je = {
	notify: P,
	depend: P,
	addSub: P,
	removeSub: P
}, Ye = function() {
	function e(e, t, n) {
		if (t === void 0 && (t = !1), n === void 0 && (n = !1), this.value = e, this.shallow = t, this.mock = n, this.dep = n ? Je : new U(), this.vmCount = 0, xe(e, "__ob__", this), u(e)) {
			if (!n) {
				if (we) e.__proto__ = K;
				else for (var r = 0, i = Ke.length; r < i; r++) {
					var a = Ke[r];
					xe(e, a, K[a]);
				}
			}
			t || this.observeArray(e);
		} else for (var o = Object.keys(e), r = 0; r < o.length; r++) {
			var a = o[r];
			Ze(e, a, qe, void 0, t, n);
		}
	}
	return e.prototype.observeArray = function(e) {
		for (var t = 0, n = e.length; t < n; t++) Xe(e[t], !1, this.mock);
	}, e;
}();
function Xe(e, t, n) {
	if (e && O(e, "__ob__") && e.__ob__ instanceof Ye) return e.__ob__;
	if (q && (n || !Pe()) && (u(e) || y(e)) && Object.isExtensible(e) && !e.__v_skip && !tt(e) && !(e instanceof Ve)) return new Ye(e, t, n);
}
function Ze(e, t, n, r, i, a, o) {
	o === void 0 && (o = !1);
	var s = new U(), c = Object.getOwnPropertyDescriptor(e, t);
	if (!(c && c.configurable === !1)) {
		var l = c && c.get, d = c && c.set;
		(!l || d) && (n === qe || arguments.length === 2) && (n = e[t]);
		var f = i ? n && n.__ob__ : Xe(n, !1, a);
		return Object.defineProperty(e, t, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				var t = l ? l.call(e) : n;
				return U.target && (s.depend(), f && (f.dep.depend(), u(t) && Y(t))), tt(t) && !i ? t.value : t;
			},
			set: function(t) {
				var r = l ? l.call(e) : n;
				if (ge(r, t)) {
					if (d) d.call(e, t);
					else if (l) return;
					else if (!i && tt(r) && !tt(t)) {
						r.value = t;
						return;
					} else n = t;
					f = i ? t && t.__ob__ : Xe(t, !1, a), s.notify();
				}
			}
		}), s;
	}
}
function Qe(e, t, n) {
	if (!et(e)) {
		var r = e.__ob__;
		return u(e) && x(t) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), r && !r.shallow && r.mock && Xe(n, !1, !0), n) : t in e && !(t in Object.prototype) ? (e[t] = n, n) : e._isVue || r && r.vmCount ? n : r ? (Ze(r.value, t, n, void 0, r.shallow, r.mock), r.dep.notify(), n) : (e[t] = n, n);
	}
}
function $e(e, t) {
	if (u(e) && x(t)) e.splice(t, 1);
	else {
		var n = e.__ob__;
		e._isVue || n && n.vmCount || et(e) || O(e, t) && (delete e[t], n && n.dep.notify());
	}
}
function Y(e) {
	for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), u(t) && Y(t);
}
function X(e) {
	return Z(e, !0), xe(e, "__v_isShallow", !0), e;
}
function Z(e, t) {
	et(e) || Xe(e, t, Pe());
}
function et(e) {
	return !!(e && e.__v_isReadonly);
}
function tt(e) {
	return !!(e && e.__v_isRef === !0);
}
function nt(e, t, n) {
	Object.defineProperty(e, n, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			var e = t[n];
			if (tt(e)) return e.value;
			var r = e && e.__ob__;
			return r && r.dep.depend(), e;
		},
		set: function(e) {
			var r = t[n];
			tt(r) && !tt(e) ? r.value = e : t[n] = e;
		}
	});
}
var rt = k(function(e) {
	var t = e.charAt(0) === "&";
	e = t ? e.slice(1) : e;
	var n = e.charAt(0) === "~";
	e = n ? e.slice(1) : e;
	var r = e.charAt(0) === "!";
	return e = r ? e.slice(1) : e, {
		name: e,
		once: n,
		capture: r,
		passive: t
	};
});
function it(e, t) {
	function n() {
		var e = n.fns;
		if (u(e)) for (var r = e.slice(), i = 0; i < r.length; i++) Bn(r[i], null, arguments, t, "v-on handler");
		else return Bn(e, null, arguments, t, "v-on handler");
	}
	return n.fns = e, n;
}
function at(e, t, n, r, i, a) {
	var o, s, c, l;
	for (o in e) s = e[o], c = t[o], l = rt(o), d(s) || (d(c) ? (d(s.fns) && (s = e[o] = it(s, a)), p(l.once) && (s = e[o] = i(l.name, s, l.capture)), n(l.name, s, l.capture, l.passive, l.params)) : s !== c && (c.fns = s, e[o] = c));
	for (o in t) d(e[o]) && (l = rt(o), r(l.name, t[o], l.capture));
}
function ot(e, t, n) {
	e instanceof Ve && (e = e.data.hook || (e.data.hook = {}));
	var r, i = e[t];
	function a() {
		n.apply(this, arguments), D(r.fns, a);
	}
	d(i) ? r = it([a]) : f(i.fns) && p(i.merged) ? (r = i, r.fns.push(a)) : r = it([i, a]), r.merged = !0, e[t] = r;
}
function st(e, t, n) {
	var r = t.options.props;
	if (!d(r)) {
		var i = {}, a = e.attrs, o = e.props;
		if (f(a) || f(o)) for (var s in r) {
			var c = M(s);
			ct(i, o, s, c, !0) || ct(i, a, s, c, !1);
		}
		return i;
	}
}
function ct(e, t, n, r, i) {
	if (f(t)) {
		if (O(t, n)) return e[n] = t[n], i || delete t[n], !0;
		if (O(t, r)) return e[n] = t[r], i || delete t[r], !0;
	}
	return !1;
}
function lt(e) {
	for (var t = 0; t < e.length; t++) if (u(e[t])) return Array.prototype.concat.apply([], e);
	return e;
}
function ut(e) {
	return h(e) ? [B(e)] : u(e) ? ft(e) : void 0;
}
function dt(e) {
	return f(e) && f(e.text) && m(e.isComment);
}
function ft(e, t) {
	for (var n = [], r = 0, i, a, o; r < e.length; r++) i = e[r], !(d(i) || typeof i == "boolean") && (a = n.length - 1, o = n[a], u(i) ? i.length > 0 && (i = ft(i, `${t || ""}_${r}`), dt(i[0]) && dt(o) && (n[a] = B(o.text + i[0].text), i.shift()), n.push.apply(n, i)) : h(i) ? dt(o) ? n[a] = B(o.text + i) : i !== "" && n.push(B(i)) : dt(i) && dt(o) ? n[a] = B(o.text + i.text) : (p(e._isVList) && f(i.tag) && d(i.key) && f(t) && (i.key = `__vlist${t}_${r}__`), n.push(i)));
	return n;
}
var pt = 1, mt = 2;
function ht(e, t, n, r, i, a) {
	return (u(n) || h(n)) && (i = r, r = n, n = void 0), p(a) && (i = mt), gt(e, t, n, r, i);
}
function gt(e, t, n, r, i) {
	if (f(n) && f(n.__ob__) || (f(n) && f(n.is) && (t = n.is), !t)) return z();
	u(r) && g(r[0]) && (n ||= {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === mt ? r = ut(r) : i === pt && (r = lt(r));
	var a, o;
	if (typeof t == "string") {
		var s = void 0;
		o = e.$vnode && e.$vnode.ns || I.getTagNamespace(t), a = I.isReservedTag(t) ? new Ve(I.parsePlatformTagName(t), n, r, void 0, void 0, e) : (!n || !n.pre) && f(s = Qr(e.$options, "components", t)) ? Fr(s, n, e, r, t) : new Ve(t, n, r, void 0, void 0, e);
	} else a = Fr(t, n, e, r);
	return u(a) ? a : f(a) ? (f(o) && _t(a, o), f(n) && vt(n), a) : z();
}
function _t(e, t, n) {
	if (e.ns = t, e.tag === "foreignObject" && (t = void 0, n = !0), f(e.children)) for (var r = 0, i = e.children.length; r < i; r++) {
		var a = e.children[r];
		f(a.tag) && (d(a.ns) || p(n) && a.tag !== "svg") && _t(a, t, n);
	}
}
function vt(e) {
	_(e.style) && tr(e.style), _(e.class) && tr(e.class);
}
function yt(e, t) {
	var n = null, r, i, a, o;
	if (u(e) || typeof e == "string") for (n = Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
	else if (typeof e == "number") for (n = Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
	else if (_(e)) {
		if (Le && e[Symbol.iterator]) {
			n = [];
			for (var s = e[Symbol.iterator](), c = s.next(); !c.done;) n.push(t(c.value, n.length)), c = s.next();
		} else for (a = Object.keys(e), n = Array(a.length), r = 0, i = a.length; r < i; r++) o = a[r], n[r] = t(e[o], o, r);
	}
	return f(n) || (n = []), n._isVList = !0, n;
}
function bt(e, t, n, r) {
	var i = this.$scopedSlots[e], a;
	i ? (n ||= {}, r && (n = N(N({}, r), n)), a = i(n) || (g(t) ? t() : t)) : a = this.$slots[e] || (g(t) ? t() : t);
	var o = n && n.slot;
	return o ? this.$createElement("template", { slot: o }, a) : a;
}
function xt(e) {
	return Qr(this.$options, "filters", e, !0) || de;
}
function St(e, t) {
	return u(e) ? e.indexOf(t) === -1 : e !== t;
}
function Ct(e, t, n, r, i) {
	var a = I.keyCodes[t] || n;
	return i && r && !I.keyCodes[t] ? St(i, r) : a ? St(a, e) : r ? M(r) !== t : e === void 0;
}
function wt(e, t, n, r, i) {
	if (n && _(n)) {
		u(n) && (n = le(n));
		var a = void 0, o = function(o) {
			if (o === "class" || o === "style" || E(o)) a = e;
			else {
				var s = e.attrs && e.attrs.type;
				a = r || I.mustUseProp(t, s, o) ? e.domProps ||= {} : e.attrs ||= {};
			}
			var c = j(o), l = M(o);
			if (!(c in a) && !(l in a) && (a[o] = n[o], i)) {
				var u = e.on ||= {};
				u[`update:${o}`] = function(e) {
					n[o] = e;
				};
			}
		};
		for (var s in n) o(s);
	}
	return e;
}
function Tt(e, t) {
	var n = this._staticTrees ||= [], r = n[e];
	return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, this._c, this), Dt(r, `__static__${e}`, !1)), r;
}
function Et(e, t, n) {
	return Dt(e, `__once__${t}${n ? `_${n}` : ""}`, !0), e;
}
function Dt(e, t, n) {
	if (u(e)) for (var r = 0; r < e.length; r++) e[r] && typeof e[r] != "string" && Ot(e[r], `${t}_${r}`, n);
	else Ot(e, t, n);
}
function Ot(e, t, n) {
	e.isStatic = !0, e.key = t, e.isOnce = n;
}
function kt(e, t) {
	if (t && y(t)) {
		var n = e.on = e.on ? N({}, e.on) : {};
		for (var r in t) {
			var i = n[r], a = t[r];
			n[r] = i ? [].concat(i, a) : a;
		}
	}
	return e;
}
function At(e, t, n, r) {
	t ||= { $stable: !n };
	for (var i = 0; i < e.length; i++) {
		var a = e[i];
		u(a) ? At(a, t, n) : a && (a.proxy && (a.fn.proxy = !0), t[a.key] = a.fn);
	}
	return r && (t.$key = r), t;
}
function jt(e, t) {
	for (var n = 0; n < t.length; n += 2) {
		var r = t[n];
		typeof r == "string" && r && (e[t[n]] = t[n + 1]);
	}
	return e;
}
function Mt(e, t) {
	return typeof e == "string" ? t + e : e;
}
function Nt(e) {
	e._o = Et, e._n = te, e._s = ee, e._l = yt, e._t = bt, e._q = pe, e._i = me, e._m = Tt, e._f = xt, e._k = Ct, e._b = wt, e._v = B, e._e = z, e._u = At, e._g = kt, e._d = jt, e._p = Mt;
}
function Pt(e, t) {
	if (!e || !e.length) return {};
	for (var n = {}, r = 0, i = e.length; r < i; r++) {
		var a = e[r], o = a.data;
		if (o && o.attrs && o.attrs.slot && delete o.attrs.slot, (a.context === t || a.fnContext === t) && o && o.slot != null) {
			var s = o.slot, c = n[s] || (n[s] = []);
			a.tag === "template" ? c.push.apply(c, a.children || []) : c.push(a);
		} else (n.default ||= []).push(a);
	}
	for (var l in n) n[l].every(Ft) && delete n[l];
	return n;
}
function Ft(e) {
	return e.isComment && !e.asyncFactory || e.text === " ";
}
function It(e) {
	return e.isComment && e.asyncFactory;
}
function Lt(e, t, n, r) {
	var i, a = Object.keys(n).length > 0, o = t ? !!t.$stable : !a, s = t && t.$key;
	if (!t) i = {};
	else if (t._normalized) return t._normalized;
	else if (o && r && r !== l && s === r.$key && !a && !r.$hasNormal) return r;
	else for (var c in i = {}, t) t[c] && c[0] !== "$" && (i[c] = Rt(e, n, c, t[c]));
	for (var u in n) u in i || (i[u] = zt(n, u));
	return t && Object.isExtensible(t) && (t._normalized = i), xe(i, "$stable", o), xe(i, "$key", s), xe(i, "$hasNormal", a), i;
}
function Rt(e, t, n, r) {
	var i = function() {
		var t = ze;
		Be(e);
		var n = arguments.length ? r.apply(null, arguments) : r({});
		n = n && typeof n == "object" && !u(n) ? [n] : ut(n);
		var i = n && n[0];
		return Be(t), n && (!i || n.length === 1 && i.isComment && !It(i)) ? void 0 : n;
	};
	return r.proxy && Object.defineProperty(t, n, {
		get: i,
		enumerable: !0,
		configurable: !0
	}), i;
}
function zt(e, t) {
	return function() {
		return e[t];
	};
}
function Bt(e) {
	var t = e.$options, n = t.setup;
	if (n) {
		var r = e._setupContext = Vt(e);
		Be(e), W();
		var i = Bn(n, null, [e._props || X({}), r], e, "setup");
		if (G(), Be(), g(i)) t.render = i;
		else if (_(i)) {
			if (e._setupState = i, i.__sfc) {
				var a = e._setupProxy = {};
				for (var o in i) o !== "__sfc" && nt(a, i, o);
			} else for (var o in i) be(o) || nt(e, i, o);
		}
	}
}
function Vt(e) {
	return {
		get attrs() {
			if (!e._attrsProxy) {
				var t = e._attrsProxy = {};
				xe(t, "_v_attr_proxy", !0), Ht(t, e.$attrs, l, e, "$attrs");
			}
			return e._attrsProxy;
		},
		get listeners() {
			return e._listenersProxy || Ht(e._listenersProxy = {}, e.$listeners, l, e, "$listeners"), e._listenersProxy;
		},
		get slots() {
			return Wt(e);
		},
		emit: se(e.$emit, e),
		expose: function(t) {
			t && Object.keys(t).forEach(function(n) {
				return nt(e, t, n);
			});
		}
	};
}
function Ht(e, t, n, r, i) {
	var a = !1;
	for (var o in t) o in e ? t[o] !== n[o] && (a = !0) : (a = !0, Ut(e, o, r, i));
	for (var o in e) o in t || (a = !0, delete e[o]);
	return a;
}
function Ut(e, t, n, r) {
	Object.defineProperty(e, t, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return n[r][t];
		}
	});
}
function Wt(e) {
	return e._slotsProxy || Gt(e._slotsProxy = {}, e.$scopedSlots), e._slotsProxy;
}
function Gt(e, t) {
	for (var n in t) e[n] = t[n];
	for (var n in e) n in t || delete e[n];
}
function Kt(e) {
	e._vnode = null, e._staticTrees = null;
	var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
	e.$slots = Pt(t._renderChildren, r), e.$scopedSlots = n ? Lt(e.$parent, n.data.scopedSlots, e.$slots) : l, e._c = function(t, n, r, i) {
		return ht(e, t, n, r, i, !1);
	}, e.$createElement = function(t, n, r, i) {
		return ht(e, t, n, r, i, !0);
	};
	var i = n && n.data;
	Ze(e, "$attrs", i && i.attrs || l, null, !0), Ze(e, "$listeners", t._parentListeners || l, null, !0);
}
var qt = null;
function Jt(e) {
	Nt(e.prototype), e.prototype.$nextTick = function(e) {
		return Qn(e, this);
	}, e.prototype._render = function() {
		var e = this, t = e.$options, n = t.render, r = t._parentVnode;
		r && e._isMounted && (e.$scopedSlots = Lt(e.$parent, r.data.scopedSlots, e.$slots, e.$scopedSlots), e._slotsProxy && Gt(e._slotsProxy, e.$scopedSlots)), e.$vnode = r;
		var i = ze, a = qt, o;
		try {
			Be(e), qt = e, o = n.call(e._renderProxy, e.$createElement);
		} catch (t) {
			zn(t, e, "render"), o = e._vnode;
		} finally {
			qt = a, Be(i);
		}
		return u(o) && o.length === 1 && (o = o[0]), o instanceof Ve || (o = z()), o.parent = r, o;
	};
}
function Yt(e, t) {
	return (e.__esModule || Le && e[Symbol.toStringTag] === "Module") && (e = e.default), _(e) ? t.extend(e) : e;
}
function Xt(e, t, n, r, i) {
	var a = z();
	return a.asyncFactory = e, a.asyncMeta = {
		data: t,
		context: n,
		children: r,
		tag: i
	}, a;
}
function Zt(e, t) {
	if (p(e.error) && f(e.errorComp)) return e.errorComp;
	if (f(e.resolved)) return e.resolved;
	var n = qt;
	if (n && f(e.owners) && e.owners.indexOf(n) === -1 && e.owners.push(n), p(e.loading) && f(e.loadingComp)) return e.loadingComp;
	if (n && !f(e.owners)) {
		var r = e.owners = [n], i = !0, a = null, o = null;
		n.$on("hook:destroyed", function() {
			return D(r, n);
		});
		var s = function(e) {
			for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
			e && (r.length = 0, a !== null && (clearTimeout(a), a = null), o !== null && (clearTimeout(o), o = null));
		}, c = he(function(n) {
			e.resolved = Yt(n, t), i ? r.length = 0 : s(!0);
		}), l = he(function(t) {
			f(e.errorComp) && (e.error = !0, s(!0));
		}), u = e(c, l);
		return _(u) && (S(u) ? d(e.resolved) && u.then(c, l) : S(u.component) && (u.component.then(c, l), f(u.error) && (e.errorComp = Yt(u.error, t)), f(u.loading) && (e.loadingComp = Yt(u.loading, t), u.delay === 0 ? e.loading = !0 : a = setTimeout(function() {
			a = null, d(e.resolved) && d(e.error) && (e.loading = !0, s(!1));
		}, u.delay || 200)), f(u.timeout) && (o = setTimeout(function() {
			o = null, d(e.resolved) && l(null);
		}, u.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved;
	}
}
function Qt(e) {
	if (u(e)) for (var t = 0; t < e.length; t++) {
		var n = e[t];
		if (f(n) && (f(n.componentOptions) || It(n))) return n;
	}
}
function $t(e) {
	e._events = Object.create(null), e._hasHookEvent = !1;
	var t = e.$options._parentListeners;
	t && an(e, t);
}
var en;
function tn(e, t) {
	en.$on(e, t);
}
function nn(e, t) {
	en.$off(e, t);
}
function rn(e, t) {
	var n = en;
	return function r() {
		t.apply(null, arguments) !== null && n.$off(e, r);
	};
}
function an(e, t, n) {
	en = e, at(t, n || {}, tn, nn, rn, e), en = void 0;
}
function on(e) {
	var t = /^hook:/;
	e.prototype.$on = function(e, n) {
		var r = this;
		if (u(e)) for (var i = 0, a = e.length; i < a; i++) r.$on(e[i], n);
		else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
		return r;
	}, e.prototype.$once = function(e, t) {
		var n = this;
		function r() {
			n.$off(e, r), t.apply(n, arguments);
		}
		return r.fn = t, n.$on(e, r), n;
	}, e.prototype.$off = function(e, t) {
		var n = this;
		if (!arguments.length) return n._events = Object.create(null), n;
		if (u(e)) {
			for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
			return n;
		}
		var a = n._events[e];
		if (!a) return n;
		if (!t) return n._events[e] = null, n;
		for (var o, s = a.length; s--;) if (o = a[s], o === t || o.fn === t) {
			a.splice(s, 1);
			break;
		}
		return n;
	}, e.prototype.$emit = function(e) {
		var t = this, n = t._events[e];
		if (n) {
			n = n.length > 1 ? ce(n) : n;
			for (var r = ce(arguments, 1), i = `event handler for "${e}"`, a = 0, o = n.length; a < o; a++) Bn(n[a], t, r, t, i);
		}
		return t;
	};
}
var sn, cn = function() {
	function e(e) {
		e === void 0 && (e = !1), this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = sn, !e && sn && (this.index = (sn.scopes || (sn.scopes = [])).push(this) - 1);
	}
	return e.prototype.run = function(e) {
		if (this.active) {
			var t = sn;
			try {
				return sn = this, e();
			} finally {
				sn = t;
			}
		}
	}, e.prototype.on = function() {
		sn = this;
	}, e.prototype.off = function() {
		sn = this.parent;
	}, e.prototype.stop = function(e) {
		if (this.active) {
			var t = void 0, n = void 0;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].teardown();
			for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
			if (!this.detached && this.parent && !e) {
				var r = this.parent.scopes.pop();
				r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
			}
			this.parent = void 0, this.active = !1;
		}
	}, e;
}();
function ln(e, t) {
	t === void 0 && (t = sn), t && t.active && t.effects.push(e);
}
function un() {
	return sn;
}
var dn = null;
function fn(e) {
	var t = dn;
	return dn = e, function() {
		dn = t;
	};
}
function pn(e) {
	var t = e.$options, n = t.parent;
	if (n && !t.abstract) {
		for (; n.$options.abstract && n.$parent;) n = n.$parent;
		n.$children.push(e);
	}
	e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._provided = n ? n._provided : Object.create(null), e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
}
function mn(e) {
	e.prototype._update = function(e, t) {
		var n = this, r = n.$el, i = n._vnode, a = fn(n);
		n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), a(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n);
		for (var o = n; o && o.$vnode && o.$parent && o.$vnode === o.$parent._vnode;) o.$parent.$el = o.$el, o = o.$parent;
	}, e.prototype.$forceUpdate = function() {
		var e = this;
		e._watcher && e._watcher.update();
	}, e.prototype.$destroy = function() {
		var e = this;
		if (!e._isBeingDestroyed) {
			bn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
			var t = e.$parent;
			t && !t._isBeingDestroyed && !e.$options.abstract && D(t.$children, e), e._scope.stop(), e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), bn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
		}
	};
}
function hn(e, t, n) {
	e.$el = t, e.$options.render || (e.$options.render = z), bn(e, "beforeMount"), new ir(e, function() {
		e._update(e._render(), n);
	}, P, { before: function() {
		e._isMounted && !e._isDestroyed && bn(e, "beforeUpdate");
	} }, !0), n = !1;
	var r = e._preWatchers;
	if (r) for (var i = 0; i < r.length; i++) r[i].run();
	return e.$vnode ?? (e._isMounted = !0, bn(e, "mounted")), e;
}
function gn(e, t, n, r, i) {
	var a = r.data.scopedSlots, o = e.$scopedSlots, s = !!(a && !a.$stable || o !== l && !o.$stable || a && e.$scopedSlots.$key !== a.$key || !a && e.$scopedSlots.$key), c = !!(i || e.$options._renderChildren || s), u = e.$vnode;
	e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i;
	var d = r.data.attrs || l;
	e._attrsProxy && Ht(e._attrsProxy, d, u.data && u.data.attrs || l, e, "$attrs") && (c = !0), e.$attrs = d, n ||= l;
	var f = e.$options._parentListeners;
	if (e._listenersProxy && Ht(e._listenersProxy, n, f || l, e, "$listeners"), e.$listeners = e.$options._parentListeners = n, an(e, n, f), t && e.$options.props) {
		J(!1);
		for (var p = e._props, m = e.$options._propKeys || [], h = 0; h < m.length; h++) {
			var g = m[h], _ = e.$options.props;
			p[g] = $r(g, _, t, e);
		}
		J(!0), e.$options.propsData = t;
	}
	c && (e.$slots = Pt(i, r.context), e.$forceUpdate());
}
function _n(e) {
	for (; e &&= e.$parent;) if (e._inactive) return !0;
	return !1;
}
function vn(e, t) {
	if (t) {
		if (e._directInactive = !1, _n(e)) return;
	} else if (e._directInactive) return;
	if (e._inactive || e._inactive === null) {
		e._inactive = !1;
		for (var n = 0; n < e.$children.length; n++) vn(e.$children[n]);
		bn(e, "activated");
	}
}
function yn(e, t) {
	if (!(t && (e._directInactive = !0, _n(e))) && !e._inactive) {
		e._inactive = !0;
		for (var n = 0; n < e.$children.length; n++) yn(e.$children[n]);
		bn(e, "deactivated");
	}
}
function bn(e, t, n, r) {
	r === void 0 && (r = !0), W();
	var i = ze, a = un();
	r && Be(e);
	var o = e.$options[t], s = `${t} hook`;
	if (o) for (var c = 0, l = o.length; c < l; c++) Bn(o[c], e, n || null, e, s);
	e._hasHookEvent && e.$emit("hook:" + t), r && (Be(i), a && a.on()), G();
}
var xn = [], Sn = [], Cn = {}, wn = !1, Tn = !1, En = 0;
function Dn() {
	En = xn.length = Sn.length = 0, Cn = {}, wn = Tn = !1;
}
var On = 0, kn = Date.now;
if (L && !Te) {
	var An = window.performance;
	An && typeof An.now == "function" && kn() > document.createEvent("Event").timeStamp && (kn = function() {
		return An.now();
	});
}
var jn = function(e, t) {
	if (e.post) {
		if (!t.post) return 1;
	} else if (t.post) return -1;
	return e.id - t.id;
};
function Mn() {
	On = kn(), Tn = !0;
	var e, t;
	for (xn.sort(jn), En = 0; En < xn.length; En++) e = xn[En], e.before && e.before(), t = e.id, Cn[t] = null, e.run();
	var n = Sn.slice(), r = xn.slice();
	/* istanbul ignore if */
	Dn(), Fn(n), Nn(r), H(), Fe && I.devtools && Fe.emit("flush");
}
function Nn(e) {
	for (var t = e.length; t--;) {
		var n = e[t], r = n.vm;
		r && r._watcher === n && r._isMounted && !r._isDestroyed && bn(r, "updated");
	}
}
function Pn(e) {
	e._inactive = !1, Sn.push(e);
}
function Fn(e) {
	for (var t = 0; t < e.length; t++) e[t]._inactive = !0, vn(e[t], !0);
}
function In(e) {
	var t = e.id;
	if (Cn[t] == null && !(e === U.target && e.noRecurse)) {
		if (Cn[t] = !0, !Tn) xn.push(e);
		else {
			for (var n = xn.length - 1; n > En && xn[n].id > e.id;) n--;
			xn.splice(n + 1, 0, e);
		}
		wn || (wn = !0, Qn(Mn));
	}
}
var Ln = "watcher";
`${Ln}`, `${Ln}`, `${Ln}`;
function Rn(e) {
	var t = e._provided, n = e.$parent && e.$parent._provided;
	return n === t ? e._provided = Object.create(n) : t;
}
function zn(e, t, n) {
	W();
	try {
		if (t) for (var r = t; r = r.$parent;) {
			var i = r.$options.errorCaptured;
			if (i) for (var a = 0; a < i.length; a++) try {
				if (i[a].call(r, e, t, n) === !1) return;
			} catch (e) {
				Vn(e, r, "errorCaptured hook");
			}
		}
		Vn(e, t, n);
	} finally {
		G();
	}
}
function Bn(e, t, n, r, i) {
	var a;
	try {
		a = n ? e.apply(t, n) : e.call(t), a && !a._isVue && S(a) && !a._handled && (a.catch(function(e) {
			return zn(e, r, i + " (Promise/async)");
		}), a._handled = !0);
	} catch (e) {
		zn(e, r, i);
	}
	return a;
}
function Vn(e, t, n) {
	if (I.errorHandler) try {
		return I.errorHandler.call(null, e, t, n);
	} catch (t) {
		t !== e && Hn(t, null, "config.errorHandler");
	}
	Hn(e, t, n);
}
function Hn(e, t, n) {
	/* istanbul ignore else */
	if (L && typeof console < "u") console.error(e);
	else throw e;
}
var Un = !1, Wn = [], Gn = !1;
function Kn() {
	Gn = !1;
	var e = Wn.slice(0);
	Wn.length = 0;
	for (var t = 0; t < e.length; t++) e[t]();
}
var qn;
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise < "u" && Ie(Promise)) {
	var Jn = Promise.resolve();
	qn = function() {
		Jn.then(Kn), Oe && setTimeout(P);
	}, Un = !0;
} else if (!Te && typeof MutationObserver < "u" && (Ie(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
	var Yn = 1, Xn = new MutationObserver(Kn), Zn = document.createTextNode(String(Yn));
	Xn.observe(Zn, { characterData: !0 }), qn = function() {
		Yn = (Yn + 1) % 2, Zn.data = String(Yn);
	}, Un = !0;
} else qn = typeof setImmediate < "u" && Ie(setImmediate) ? function() {
	setImmediate(Kn);
} : function() {
	setTimeout(Kn, 0);
};
function Qn(e, t) {
	var n;
	if (Wn.push(function() {
		if (e) try {
			e.call(t);
		} catch (e) {
			zn(e, t, "nextTick");
		}
		else n && n(t);
	}), Gn || (Gn = !0, qn()), !e && typeof Promise < "u") return new Promise(function(e) {
		n = e;
	});
}
var $n = "2.7.16", er = new Re();
function tr(e) {
	return nr(e, er), er.clear(), e;
}
function nr(e, t) {
	var n, r, i = u(e);
	if (!(!i && !_(e) || e.__v_skip || Object.isFrozen(e) || e instanceof Ve)) {
		if (e.__ob__) {
			var a = e.__ob__.dep.id;
			if (t.has(a)) return;
			t.add(a);
		}
		if (i) for (n = e.length; n--;) nr(e[n], t);
		else if (tt(e)) nr(e.value, t);
		else for (r = Object.keys(e), n = r.length; n--;) nr(e[r[n]], t);
	}
}
var rr = 0, ir = function() {
	function e(e, t, n, r, i) {
		ln(this, sn && !sn._vm ? sn : e ? e._scope : void 0), (this.vm = e) && i && (e._watcher = this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++rr, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Re(), this.newDepIds = new Re(), this.expression = "", g(t) ? this.getter = t : (this.getter = Ce(t), this.getter ||= P), this.value = this.lazy ? void 0 : this.get();
	}
	return e.prototype.get = function() {
		W(this);
		var e, t = this.vm;
		try {
			e = this.getter.call(t, t);
		} catch (e) {
			if (this.user) zn(e, t, `getter for watcher "${this.expression}"`);
			else throw e;
		} finally {
			this.deep && tr(e), G(), this.cleanupDeps();
		}
		return e;
	}, e.prototype.addDep = function(e) {
		var t = e.id;
		this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
	}, e.prototype.cleanupDeps = function() {
		for (var e = this.deps.length; e--;) {
			var t = this.deps[e];
			this.newDepIds.has(t.id) || t.removeSub(this);
		}
		var n = this.depIds;
		this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
	}, e.prototype.update = function() {
		/* istanbul ignore else */
		this.lazy ? this.dirty = !0 : this.sync ? this.run() : In(this);
	}, e.prototype.run = function() {
		if (this.active) {
			var e = this.get();
			if (e !== this.value || _(e) || this.deep) {
				var t = this.value;
				if (this.value = e, this.user) {
					var n = `callback for watcher "${this.expression}"`;
					Bn(this.cb, this.vm, [e, t], this.vm, n);
				} else this.cb.call(this.vm, e, t);
			}
		}
	}, e.prototype.evaluate = function() {
		this.value = this.get(), this.dirty = !1;
	}, e.prototype.depend = function() {
		for (var e = this.deps.length; e--;) this.deps[e].depend();
	}, e.prototype.teardown = function() {
		if (this.vm && !this.vm._isBeingDestroyed && D(this.vm._scope.effects, this), this.active) {
			for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
			this.active = !1, this.onStop && this.onStop();
		}
	}, e;
}(), ar = {
	enumerable: !0,
	configurable: !0,
	get: P,
	set: P
};
function or(e, t, n) {
	ar.get = function() {
		return this[t][n];
	}, ar.set = function(e) {
		this[t][n] = e;
	}, Object.defineProperty(e, n, ar);
}
function sr(e) {
	var t = e.$options;
	if (t.props && cr(e, t.props), Bt(e), t.methods && gr(e, t.methods), t.data) lr(e);
	else {
		var n = Xe(e._data = {});
		n && n.vmCount++;
	}
	t.computed && fr(e, t.computed), t.watch && t.watch !== Ae && _r(e, t.watch);
}
function cr(e, t) {
	var n = e.$options.propsData || {}, r = e._props = X({}), i = e.$options._propKeys = [];
	e.$parent && J(!1);
	var a = function(a) {
		i.push(a), Ze(r, a, $r(a, t, n, e), void 0, !0), a in e || or(e, "_props", a);
	};
	for (var o in t) a(o);
	J(!0);
}
function lr(e) {
	var t = e.$options.data;
	t = e._data = g(t) ? ur(t, e) : t || {}, y(t) || (t = {});
	var n = Object.keys(t), r = e.$options.props;
	e.$options.methods;
	for (var i = n.length; i--;) {
		var a = n[i];
		r && O(r, a) || be(a) || or(e, "_data", a);
	}
	var o = Xe(t);
	o && o.vmCount++;
}
function ur(e, t) {
	W();
	try {
		return e.call(t, t);
	} catch (e) {
		return zn(e, t, "data()"), {};
	} finally {
		G();
	}
}
var dr = { lazy: !0 };
function fr(e, t) {
	var n = e._computedWatchers = Object.create(null), r = Pe();
	for (var i in t) {
		var a = t[i], o = g(a) ? a : a.get;
		r || (n[i] = new ir(e, o || P, P, dr)), i in e || pr(e, i, a);
	}
}
function pr(e, t, n) {
	var r = !Pe();
	g(n) ? (ar.get = r ? mr(t) : hr(n), ar.set = P) : (ar.get = n.get ? r && n.cache !== !1 ? mr(t) : hr(n.get) : P, ar.set = n.set || P), Object.defineProperty(e, t, ar);
}
function mr(e) {
	return function() {
		var t = this._computedWatchers && this._computedWatchers[e];
		if (t) return t.dirty && t.evaluate(), U.target && t.depend(), t.value;
	};
}
function hr(e) {
	return function() {
		return e.call(this, this);
	};
}
function gr(e, t) {
	for (var n in e.$options.props, t) e[n] = typeof t[n] == "function" ? se(t[n], e) : P;
}
function _r(e, t) {
	for (var n in t) {
		var r = t[n];
		if (u(r)) for (var i = 0; i < r.length; i++) vr(e, n, r[i]);
		else vr(e, n, r);
	}
}
function vr(e, t, n, r) {
	return y(n) && (r = n, n = n.handler), typeof n == "string" && (n = e[n]), e.$watch(t, n, r);
}
function yr(e) {
	var t = {};
	t.get = function() {
		return this._data;
	};
	var n = {};
	n.get = function() {
		return this._props;
	}, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Qe, e.prototype.$delete = $e, e.prototype.$watch = function(e, t, n) {
		var r = this;
		if (y(t)) return vr(r, e, t, n);
		n ||= {}, n.user = !0;
		var i = new ir(r, e, t, n);
		if (n.immediate) {
			var a = `callback for immediate watcher "${i.expression}"`;
			W(), Bn(t, r, [i.value], r, a), G();
		}
		return function() {
			i.teardown();
		};
	};
}
function br(e) {
	var t = e.$options.provide;
	if (t) {
		var n = g(t) ? t.call(e) : t;
		if (!_(n)) return;
		for (var r = Rn(e), i = Le ? Reflect.ownKeys(n) : Object.keys(n), a = 0; a < i.length; a++) {
			var o = i[a];
			Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(n, o));
		}
	}
}
function xr(e) {
	var t = Sr(e.$options.inject, e);
	t && (J(!1), Object.keys(t).forEach(function(n) {
		Ze(e, n, t[n]);
	}), J(!0));
}
function Sr(e, t) {
	if (e) {
		for (var n = Object.create(null), r = Le ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
			var a = r[i];
			if (a !== "__ob__") {
				var o = e[a].from;
				if (o in t._provided) n[a] = t._provided[o];
				else if ("default" in e[a]) {
					var s = e[a].default;
					n[a] = g(s) ? s.call(t) : s;
				}
			}
		}
		return n;
	}
}
var Cr = 0;
function wr(e) {
	e.prototype._init = function(e) {
		var t = this;
		t._uid = Cr++, t._isVue = !0, t.__v_skip = !0, t._scope = new cn(!0), t._scope.parent = void 0, t._scope._vm = !0, e && e._isComponent ? Tr(t, e) : t.$options = Zr(Er(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, pn(t), $t(t), Kt(t), bn(t, "beforeCreate", void 0, !1), xr(t), sr(t), br(t), bn(t, "created"), t.$options.el && t.$mount(t.$options.el);
	};
}
function Tr(e, t) {
	var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
	n.parent = t.parent, n._parentVnode = r;
	var i = r.componentOptions;
	n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
}
function Er(e) {
	var t = e.options;
	if (e.super) {
		var n = Er(e.super);
		if (n !== e.superOptions) {
			e.superOptions = n;
			var r = Dr(e);
			r && N(e.extendOptions, r), t = e.options = Zr(n, e.extendOptions), t.name && (t.components[t.name] = e);
		}
	}
	return t;
}
function Dr(e) {
	var t, n = e.options, r = e.sealedOptions;
	for (var i in n) n[i] !== r[i] && (t ||= {}, t[i] = n[i]);
	return t;
}
function Or(e, t, n, r, i) {
	var a = this, o = i.options, s;
	O(r, "_uid") ? (s = Object.create(r), s._original = r) : (s = r, r = r._original);
	var c = p(o._compiled), d = !c;
	this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || l, this.injections = Sr(o.inject, r), this.slots = function() {
		return a.$slots || Lt(r, e.scopedSlots, a.$slots = Pt(n, r)), a.$slots;
	}, Object.defineProperty(this, "scopedSlots", {
		enumerable: !0,
		get: function() {
			return Lt(r, e.scopedSlots, this.slots());
		}
	}), c && (this.$options = o, this.$slots = this.slots(), this.$scopedSlots = Lt(r, e.scopedSlots, this.$slots)), this._c = o._scopeId ? function(e, t, n, i) {
		var a = ht(s, e, t, n, i, d);
		return a && !u(a) && (a.fnScopeId = o._scopeId, a.fnContext = r), a;
	} : function(e, t, n, r) {
		return ht(s, e, t, n, r, d);
	};
}
Nt(Or.prototype);
function kr(e, t, n, r, i) {
	var a = e.options, o = {}, s = a.props;
	if (f(s)) for (var c in s) o[c] = $r(c, s, t || l);
	else f(n.attrs) && jr(o, n.attrs), f(n.props) && jr(o, n.props);
	var d = new Or(n, o, i, r, e), p = a.render.call(null, d._c, d);
	if (p instanceof Ve) return Ar(p, n, d.parent, a, d);
	if (u(p)) {
		for (var m = ut(p) || [], h = Array(m.length), g = 0; g < m.length; g++) h[g] = Ar(m[g], n, d.parent, a, d);
		return h;
	}
}
function Ar(e, t, n, r, i) {
	var a = He(e);
	return a.fnContext = n, a.fnOptions = r, t.slot && ((a.data ||= {}).slot = t.slot), a;
}
function jr(e, t) {
	for (var n in t) e[j(n)] = t[n];
}
function Mr(e) {
	return e.name || e.__name || e._componentTag;
}
var Nr = {
	init: function(e, t) {
		if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
			var n = e;
			Nr.prepatch(n, n);
		} else (e.componentInstance = Ir(e, dn)).$mount(t ? e.elm : void 0, t);
	},
	prepatch: function(e, t) {
		var n = t.componentOptions;
		gn(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
	},
	insert: function(e) {
		var t = e.context, n = e.componentInstance;
		n._isMounted || (n._isMounted = !0, bn(n, "mounted")), e.data.keepAlive && (t._isMounted ? Pn(n) : vn(n, !0));
	},
	destroy: function(e) {
		var t = e.componentInstance;
		t._isDestroyed || (e.data.keepAlive ? yn(t, !0) : t.$destroy());
	}
}, Pr = Object.keys(Nr);
function Fr(e, t, n, r, i) {
	if (!d(e)) {
		var a = n.$options._base;
		if (_(e) && (e = a.extend(e)), typeof e == "function") {
			var o;
			if (d(e.cid) && (o = e, e = Zt(o, a), e === void 0)) return Xt(o, t, n, r, i);
			t ||= {}, Er(e), f(t.model) && zr(e.options, t);
			var s = st(t, e, i);
			if (p(e.options.functional)) return kr(e, s, t, n, r);
			var c = t.on;
			if (t.on = t.nativeOn, p(e.options.abstract)) {
				var l = t.slot;
				t = {}, l && (t.slot = l);
			}
			Lr(t);
			var u = Mr(e.options) || i;
			return new Ve(`vue-component-${e.cid}${u ? `-${u}` : ""}`, t, void 0, void 0, void 0, n, {
				Ctor: e,
				propsData: s,
				listeners: c,
				tag: i,
				children: r
			}, o);
		}
	}
}
function Ir(e, t) {
	var n = {
		_isComponent: !0,
		_parentVnode: e,
		parent: t
	}, r = e.data.inlineTemplate;
	return f(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
}
function Lr(e) {
	for (var t = e.hook ||= {}, n = 0; n < Pr.length; n++) {
		var r = Pr[n], i = t[r], a = Nr[r];
		i !== a && !(i && i._merged) && (t[r] = i ? Rr(a, i) : a);
	}
}
function Rr(e, t) {
	var n = function(n, r) {
		e(n, r), t(n, r);
	};
	return n._merged = !0, n;
}
function zr(e, t) {
	var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
	(t.attrs ||= {})[n] = t.model.value;
	var i = t.on ||= {}, a = i[r], o = t.model.callback;
	f(a) ? (u(a) ? a.indexOf(o) === -1 : a !== o) && (i[r] = [o].concat(a)) : i[r] = o;
}
var Br = P, Vr = I.optionMergeStrategies;
function Hr(e, t, n) {
	if (n === void 0 && (n = !0), !t) return e;
	for (var r, i, a, o = Le ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < o.length; s++) r = o[s], r !== "__ob__" && (i = e[r], a = t[r], !n || !O(e, r) ? Qe(e, r, a) : i !== a && y(i) && y(a) && Hr(i, a));
	return e;
}
function Ur(e, t, n) {
	return n ? function() {
		var r = g(t) ? t.call(n, n) : t, i = g(e) ? e.call(n, n) : e;
		return r ? Hr(r, i) : i;
	} : t ? e ? function() {
		return Hr(g(t) ? t.call(this, this) : t, g(e) ? e.call(this, this) : e);
	} : t : e;
}
Vr.data = function(e, t, n) {
	return n ? Ur(e, t, n) : t && typeof t != "function" ? e : Ur(e, t);
};
function Wr(e, t) {
	var n = t ? e ? e.concat(t) : u(t) ? t : [t] : e;
	return n && Gr(n);
}
function Gr(e) {
	for (var t = [], n = 0; n < e.length; n++) t.indexOf(e[n]) === -1 && t.push(e[n]);
	return t;
}
ve.forEach(function(e) {
	Vr[e] = Wr;
});
function Kr(e, t, n, r) {
	var i = Object.create(e || null);
	return t ? N(i, t) : i;
}
F.forEach(function(e) {
	Vr[e + "s"] = Kr;
}), Vr.watch = function(e, t, n, r) {
	/* istanbul ignore if */
	if (e === Ae && (e = void 0), t === Ae && (t = void 0), !t) return Object.create(e || null);
	if (!e) return t;
	var i = {};
	for (var a in N(i, e), t) {
		var o = i[a], s = t[a];
		o && !u(o) && (o = [o]), i[a] = o ? o.concat(s) : u(s) ? s : [s];
	}
	return i;
}, Vr.props = Vr.methods = Vr.inject = Vr.computed = function(e, t, n, r) {
	if (!e) return t;
	var i = Object.create(null);
	return N(i, e), t && N(i, t), i;
}, Vr.provide = function(e, t) {
	return e ? function() {
		var n = Object.create(null);
		return Hr(n, g(e) ? e.call(this) : e), t && Hr(n, g(t) ? t.call(this) : t, !1), n;
	} : t;
};
var qr = function(e, t) {
	return t === void 0 ? e : t;
};
function Jr(e, t) {
	var n = e.props;
	if (n) {
		var r = {}, i, a, o;
		if (u(n)) for (i = n.length; i--;) a = n[i], typeof a == "string" && (o = j(a), r[o] = { type: null });
		else if (y(n)) for (var s in n) a = n[s], o = j(s), r[o] = y(a) ? a : { type: a };
		e.props = r;
	}
}
function Yr(e, t) {
	var n = e.inject;
	if (n) {
		var r = e.inject = {};
		if (u(n)) for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
		else if (y(n)) for (var a in n) {
			var o = n[a];
			r[a] = y(o) ? N({ from: a }, o) : { from: o };
		}
	}
}
function Xr(e) {
	var t = e.directives;
	if (t) for (var n in t) {
		var r = t[n];
		g(r) && (t[n] = {
			bind: r,
			update: r
		});
	}
}
function Zr(e, t, n) {
	if (g(t) && (t = t.options), Jr(t, n), Yr(t, n), Xr(t), !t._base && (t.extends && (e = Zr(e, t.extends, n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) e = Zr(e, t.mixins[r], n);
	var a = {}, o;
	for (o in e) s(o);
	for (o in t) O(e, o) || s(o);
	function s(r) {
		a[r] = (Vr[r] || qr)(e[r], t[r], n, r);
	}
	return a;
}
function Qr(e, t, n, r) {
	/* istanbul ignore if */
	if (typeof n == "string") {
		var i = e[t];
		if (O(i, n)) return i[n];
		var a = j(n);
		if (O(i, a)) return i[a];
		var o = re(a);
		return O(i, o) ? i[o] : i[n] || i[a] || i[o];
	}
}
function $r(e, t, n, r) {
	var i = t[e], a = !O(n, e), o = n[e], s = ii(Boolean, i.type);
	if (s > -1) {
		if (a && !O(i, "default")) o = !1;
		else if (o === "" || o === M(e)) {
			var c = ii(String, i.type);
			(c < 0 || s < c) && (o = !0);
		}
	}
	if (o === void 0) {
		o = ei(r, i, e);
		var l = q;
		J(!0), Xe(o), J(l);
	}
	return o;
}
function ei(e, t, n) {
	if (O(t, "default")) {
		var r = t.default;
		return e && e.$options.propsData && e.$options.propsData[n] === void 0 && e._props[n] !== void 0 ? e._props[n] : g(r) && ni(t.type) !== "Function" ? r.call(e) : r;
	}
}
var ti = /^\s*function (\w+)/;
function ni(e) {
	var t = e && e.toString().match(ti);
	return t ? t[1] : "";
}
function ri(e, t) {
	return ni(e) === ni(t);
}
function ii(e, t) {
	if (!u(t)) return ri(t, e) ? 0 : -1;
	for (var n = 0, r = t.length; n < r; n++) if (ri(t[n], e)) return n;
	return -1;
}
function Q(e) {
	this._init(e);
}
wr(Q), yr(Q), on(Q), mn(Q), Jt(Q);
function ai(e) {
	e.use = function(e) {
		var t = this._installedPlugins ||= [];
		if (t.indexOf(e) > -1) return this;
		var n = ce(arguments, 1);
		return n.unshift(this), g(e.install) ? e.install.apply(e, n) : g(e) && e.apply(null, n), t.push(e), this;
	};
}
function oi(e) {
	e.mixin = function(e) {
		return this.options = Zr(this.options, e), this;
	};
}
function si(e) {
	e.cid = 0;
	var t = 1;
	e.extend = function(e) {
		e ||= {};
		var n = this, r = n.cid, i = e._Ctor || (e._Ctor = {});
		if (i[r]) return i[r];
		var a = Mr(e) || Mr(n.options), o = function(e) {
			this._init(e);
		};
		return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = Zr(n.options, e), o.super = n, o.options.props && ci(o), o.options.computed && li(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, F.forEach(function(e) {
			o[e] = n[e];
		}), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = e, o.sealedOptions = N({}, o.options), i[r] = o, o;
	};
}
function ci(e) {
	for (var t in e.options.props) or(e.prototype, "_props", t);
}
function li(e) {
	var t = e.options.computed;
	for (var n in t) pr(e.prototype, n, t[n]);
}
function ui(e) {
	F.forEach(function(t) {
		e[t] = function(e, n) {
			return n ? (t === "component" && y(n) && (n.name = n.name || e, n = this.options._base.extend(n)), t === "directive" && g(n) && (n = {
				bind: n,
				update: n
			}), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
		};
	});
}
function di(e) {
	return e && (Mr(e.Ctor.options) || e.tag);
}
function fi(e, t) {
	/* istanbul ignore next */
	return u(e) ? e.indexOf(t) > -1 : typeof e == "string" ? e.split(",").indexOf(t) > -1 : b(e) ? e.test(t) : !1;
}
function pi(e, t) {
	var n = e.cache, r = e.keys, i = e._vnode, a = e.$vnode;
	for (var o in n) {
		var s = n[o];
		if (s) {
			var c = s.name;
			c && !t(c) && mi(n, o, r, i);
		}
	}
	a.componentOptions.children = void 0;
}
function mi(e, t, n, r) {
	var i = e[t];
	i && (!r || i.tag !== r.tag) && i.componentInstance.$destroy(), e[t] = null, D(n, t);
}
var hi = [
	String,
	RegExp,
	Array
], gi = { KeepAlive: {
	name: "keep-alive",
	abstract: !0,
	props: {
		include: hi,
		exclude: hi,
		max: [String, Number]
	},
	methods: { cacheVNode: function() {
		var e = this, t = e.cache, n = e.keys, r = e.vnodeToCache, i = e.keyToCache;
		if (r) {
			var a = r.tag, o = r.componentInstance, s = r.componentOptions;
			t[i] = {
				name: di(s),
				tag: a,
				componentInstance: o
			}, n.push(i), this.max && n.length > parseInt(this.max) && mi(t, n[0], n, this._vnode), this.vnodeToCache = null;
		}
	} },
	created: function() {
		this.cache = Object.create(null), this.keys = [];
	},
	destroyed: function() {
		for (var e in this.cache) mi(this.cache, e, this.keys);
	},
	mounted: function() {
		var e = this;
		this.cacheVNode(), this.$watch("include", function(t) {
			pi(e, function(e) {
				return fi(t, e);
			});
		}), this.$watch("exclude", function(t) {
			pi(e, function(e) {
				return !fi(t, e);
			});
		});
	},
	updated: function() {
		this.cacheVNode();
	},
	render: function() {
		var e = this.$slots.default, t = Qt(e), n = t && t.componentOptions;
		if (n) {
			var r = di(n), i = this, a = i.include, o = i.exclude;
			if (a && (!r || !fi(a, r)) || o && r && fi(o, r)) return t;
			var s = this, c = s.cache, l = s.keys, u = t.key == null ? n.Ctor.cid + (n.tag ? `::${n.tag}` : "") : t.key;
			c[u] ? (t.componentInstance = c[u].componentInstance, D(l, u), l.push(u)) : (this.vnodeToCache = t, this.keyToCache = u), t.data.keepAlive = !0;
		}
		return t || e && e[0];
	}
} };
function _i(e) {
	var t = {};
	t.get = function() {
		return I;
	}, Object.defineProperty(e, "config", t), e.util = {
		warn: Br,
		extend: N,
		mergeOptions: Zr,
		defineReactive: Ze
	}, e.set = Qe, e.delete = $e, e.nextTick = Qn, e.observable = function(e) {
		return Xe(e), e;
	}, e.options = Object.create(null), F.forEach(function(t) {
		e.options[t + "s"] = Object.create(null);
	}), e.options._base = e, N(e.options.components, gi), ai(e), oi(e), si(e), ui(e);
}
_i(Q), Object.defineProperty(Q.prototype, "$isServer", { get: Pe }), Object.defineProperty(Q.prototype, "$ssrContext", { get: function() {
	/* istanbul ignore next */
	return this.$vnode && this.$vnode.ssrContext;
} }), Object.defineProperty(Q, "FunctionalRenderContext", { value: Or }), Q.version = $n;
var vi = w("style,class"), yi = w("input,textarea,option,select,progress"), bi = function(e, t, n) {
	return n === "value" && yi(e) && t !== "button" || n === "selected" && e === "option" || n === "checked" && e === "input" || n === "muted" && e === "video";
}, xi = w("contenteditable,draggable,spellcheck"), Si = w("events,caret,typing,plaintext-only"), Ci = function(e, t) {
	return Oi(t) || t === "false" ? "false" : e === "contenteditable" && Si(t) ? t : "true";
}, wi = w("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), Ti = "http://www.w3.org/1999/xlink", Ei = function(e) {
	return e.charAt(5) === ":" && e.slice(0, 5) === "xlink";
}, Di = function(e) {
	return Ei(e) ? e.slice(6, e.length) : "";
}, Oi = function(e) {
	return e == null || e === !1;
};
function ki(e) {
	for (var t = e.data, n = e, r = e; f(r.componentInstance);) r = r.componentInstance._vnode, r && r.data && (t = Ai(r.data, t));
	for (; f(n = n.parent);) n && n.data && (t = Ai(t, n.data));
	return ji(t.staticClass, t.class);
}
function Ai(e, t) {
	return {
		staticClass: Mi(e.staticClass, t.staticClass),
		class: f(e.class) ? [e.class, t.class] : t.class
	};
}
function ji(e, t) {
	/* istanbul ignore next */
	return f(e) || f(t) ? Mi(e, Ni(t)) : "";
}
function Mi(e, t) {
	return e ? t ? e + " " + t : e : t || "";
}
function Ni(e) {
	/* istanbul ignore next */
	return Array.isArray(e) ? Pi(e) : _(e) ? Fi(e) : typeof e == "string" ? e : "";
}
function Pi(e) {
	for (var t = "", n, r = 0, i = e.length; r < i; r++) f(n = Ni(e[r])) && n !== "" && (t && (t += " "), t += n);
	return t;
}
function Fi(e) {
	var t = "";
	for (var n in e) e[n] && (t && (t += " "), t += n);
	return t;
}
var Ii = {
	svg: "http://www.w3.org/2000/svg",
	math: "http://www.w3.org/1998/Math/MathML"
}, Li = w("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Ri = w("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), zi = function(e) {
	return e === "pre";
}, Bi = function(e) {
	return Li(e) || Ri(e);
};
function Vi(e) {
	if (Ri(e)) return "svg";
	if (e === "math") return "math";
}
var Hi = Object.create(null);
function Ui(e) {
	/* istanbul ignore if */
	if (!L) return !0;
	if (Bi(e)) return !1;
	/* istanbul ignore if */
	if (e = e.toLowerCase(), Hi[e] != null) return Hi[e];
	var t = document.createElement(e);
	return e.indexOf("-") > -1 ? Hi[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Hi[e] = /HTMLUnknownElement/.test(t.toString());
}
var Wi = w("text,number,password,search,email,tel,url");
function Gi(e) {
	return typeof e == "string" ? document.querySelector(e) || document.createElement("div") : e;
}
function Ki(e, t) {
	var n = document.createElement(e);
	return e === "select" && t.data && t.data.attrs && t.data.attrs.multiple !== void 0 && n.setAttribute("multiple", "multiple"), n;
}
function qi(e, t) {
	return document.createElementNS(Ii[e], t);
}
function Ji(e) {
	return document.createTextNode(e);
}
function Yi(e) {
	return document.createComment(e);
}
function Xi(e, t, n) {
	e.insertBefore(t, n);
}
function Zi(e, t) {
	e.removeChild(t);
}
function Qi(e, t) {
	e.appendChild(t);
}
function $i(e) {
	return e.parentNode;
}
function ea(e) {
	return e.nextSibling;
}
function ta(e) {
	return e.tagName;
}
function na(e, t) {
	e.textContent = t;
}
function ra(e, t) {
	e.setAttribute(t, "");
}
var ia = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	createElement: Ki,
	createElementNS: qi,
	createTextNode: Ji,
	createComment: Yi,
	insertBefore: Xi,
	removeChild: Zi,
	appendChild: Qi,
	parentNode: $i,
	nextSibling: ea,
	tagName: ta,
	setTextContent: na,
	setStyleScope: ra
}), aa = {
	create: function(e, t) {
		oa(t);
	},
	update: function(e, t) {
		e.data.ref !== t.data.ref && (oa(e, !0), oa(t));
	},
	destroy: function(e) {
		oa(e, !0);
	}
};
function oa(e, t) {
	var n = e.data.ref;
	if (f(n)) {
		var r = e.context, i = e.componentInstance || e.elm, a = t ? null : i, o = t ? void 0 : i;
		if (g(n)) Bn(n, r, [a], r, "template ref function");
		else {
			var s = e.data.refInFor, c = typeof n == "string" || typeof n == "number", l = tt(n), d = r.$refs;
			if (c || l) {
				if (s) {
					var p = c ? d[n] : n.value;
					t ? u(p) && D(p, i) : u(p) ? p.includes(i) || p.push(i) : c ? (d[n] = [i], sa(r, n, d[n])) : n.value = [i];
				} else if (c) {
					if (t && d[n] !== i) return;
					d[n] = o, sa(r, n, a);
				} else if (l) {
					if (t && n.value !== i) return;
					n.value = a;
				}
			}
		}
	}
}
function sa(e, t, n) {
	var r = e._setupState;
	r && O(r, t) && (tt(r[t]) ? r[t].value = n : r[t] = n);
}
var ca = new Ve("", {}, []), la = [
	"create",
	"activate",
	"update",
	"remove",
	"destroy"
];
function ua(e, t) {
	return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && f(e.data) === f(t.data) && da(e, t) || p(e.isAsyncPlaceholder) && d(t.asyncFactory.error));
}
function da(e, t) {
	if (e.tag !== "input") return !0;
	var n, r = f(n = e.data) && f(n = n.attrs) && n.type, i = f(n = t.data) && f(n = n.attrs) && n.type;
	return r === i || Wi(r) && Wi(i);
}
function fa(e, t, n) {
	var r, i, a = {};
	for (r = t; r <= n; ++r) i = e[r].key, f(i) && (a[i] = r);
	return a;
}
function pa(e) {
	var t, n, r = {}, i = e.modules, a = e.nodeOps;
	for (t = 0; t < la.length; ++t) for (r[la[t]] = [], n = 0; n < i.length; ++n) f(i[n][la[t]]) && r[la[t]].push(i[n][la[t]]);
	function o(e) {
		return new Ve(a.tagName(e).toLowerCase(), {}, [], void 0, e);
	}
	function s(e, t) {
		function n() {
			--n.listeners === 0 && c(e);
		}
		return n.listeners = t, n;
	}
	function c(e) {
		var t = a.parentNode(e);
		f(t) && a.removeChild(t, e);
	}
	function l(e, t, n, r, i, o, s) {
		if (f(e.elm) && f(o) && (e = o[s] = He(e)), e.isRootInsert = !i, !m(e, t, n, r)) {
			var c = e.data, l = e.children, u = e.tag;
			f(u) ? (e.elm = e.ns ? a.createElementNS(e.ns, u) : a.createElement(u, e), S(e), y(e, l, t), f(c) && x(e, t), v(n, e.elm, r)) : p(e.isComment) ? (e.elm = a.createComment(e.text), v(n, e.elm, r)) : (e.elm = a.createTextNode(e.text), v(n, e.elm, r));
		}
	}
	function m(e, t, n, r) {
		var i = e.data;
		if (f(i)) {
			var a = f(e.componentInstance) && i.keepAlive;
			if (f(i = i.hook) && f(i = i.init) && i(e, !1), f(e.componentInstance)) return g(e, t), v(n, e.elm, r), p(a) && _(e, t, n, r), !0;
		}
	}
	function g(e, t) {
		f(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, b(e) ? (x(e, t), S(e)) : (oa(e), t.push(e));
	}
	function _(e, t, n, i) {
		for (var a, o = e; o.componentInstance;) if (o = o.componentInstance._vnode, f(a = o.data) && f(a = a.transition)) {
			for (a = 0; a < r.activate.length; ++a) r.activate[a](ca, o);
			t.push(o);
			break;
		}
		v(n, e.elm, i);
	}
	function v(e, t, n) {
		f(e) && (f(n) ? a.parentNode(n) === e && a.insertBefore(e, t, n) : a.appendChild(e, t));
	}
	function y(e, t, n) {
		if (u(t)) for (var r = 0; r < t.length; ++r) l(t[r], n, e.elm, null, !0, t, r);
		else h(e.text) && a.appendChild(e.elm, a.createTextNode(String(e.text)));
	}
	function b(e) {
		for (; e.componentInstance;) e = e.componentInstance._vnode;
		return f(e.tag);
	}
	function x(e, n) {
		for (var i = 0; i < r.create.length; ++i) r.create[i](ca, e);
		t = e.data.hook, f(t) && (f(t.create) && t.create(ca, e), f(t.insert) && n.push(e));
	}
	function S(e) {
		var t;
		if (f(t = e.fnScopeId)) a.setStyleScope(e.elm, t);
		else for (var n = e; n;) f(t = n.context) && f(t = t.$options._scopeId) && a.setStyleScope(e.elm, t), n = n.parent;
		f(t = dn) && t !== e.context && t !== e.fnContext && f(t = t.$options._scopeId) && a.setStyleScope(e.elm, t);
	}
	function ee(e, t, n, r, i, a) {
		for (; r <= i; ++r) l(n[r], a, e, t, !1, n, r);
	}
	function C(e) {
		var t, n, i = e.data;
		if (f(i)) for (f(t = i.hook) && f(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
		if (f(t = e.children)) for (n = 0; n < e.children.length; ++n) C(e.children[n]);
	}
	function te(e, t, n) {
		for (; t <= n; ++t) {
			var r = e[t];
			f(r) && (f(r.tag) ? (T(r), C(r)) : c(r.elm));
		}
	}
	function T(e, t) {
		if (f(t) || f(e.data)) {
			var n, i = r.remove.length + 1;
			for (f(t) ? t.listeners += i : t = s(e.elm, i), f(n = e.componentInstance) && f(n = n._vnode) && f(n.data) && T(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
			f(n = e.data.hook) && f(n = n.remove) ? n(e, t) : t();
		} else c(e.elm);
	}
	function E(e, t, n, r, i) {
		for (var o = 0, s = 0, c = t.length - 1, u = t[0], p = t[c], m = n.length - 1, h = n[0], g = n[m], _, v, y, b, x = !i; o <= c && s <= m;) d(u) ? u = t[++o] : d(p) ? p = t[--c] : ua(u, h) ? (ne(u, h, r, n, s), u = t[++o], h = n[++s]) : ua(p, g) ? (ne(p, g, r, n, m), p = t[--c], g = n[--m]) : ua(u, g) ? (ne(u, g, r, n, m), x && a.insertBefore(e, u.elm, a.nextSibling(p.elm)), u = t[++o], g = n[--m]) : ua(p, h) ? (ne(p, h, r, n, s), x && a.insertBefore(e, p.elm, u.elm), p = t[--c], h = n[++s]) : (d(_) && (_ = fa(t, o, c)), v = f(h.key) ? _[h.key] : D(h, t, o, c), d(v) ? l(h, r, e, u.elm, !1, n, s) : (y = t[v], ua(y, h) ? (ne(y, h, r, n, s), t[v] = void 0, x && a.insertBefore(e, y.elm, u.elm)) : l(h, r, e, u.elm, !1, n, s)), h = n[++s]);
		o > c ? (b = d(n[m + 1]) ? null : n[m + 1].elm, ee(e, b, n, s, m, r)) : s > m && te(t, o, c);
	}
	function D(e, t, n, r) {
		for (var i = n; i < r; i++) {
			var a = t[i];
			if (f(a) && ua(e, a)) return i;
		}
	}
	function ne(e, t, n, i, o, s) {
		if (e !== t) {
			f(t.elm) && f(i) && (t = i[o] = He(t));
			var c = t.elm = e.elm;
			if (p(e.isAsyncPlaceholder)) f(t.asyncFactory.resolved) ? A(e.elm, t, n) : t.isAsyncPlaceholder = !0;
			else if (p(t.isStatic) && p(e.isStatic) && t.key === e.key && (p(t.isCloned) || p(t.isOnce))) t.componentInstance = e.componentInstance;
			else {
				var l, u = t.data;
				f(u) && f(l = u.hook) && f(l = l.prepatch) && l(e, t);
				var m = e.children, h = t.children;
				if (f(u) && b(t)) {
					for (l = 0; l < r.update.length; ++l) r.update[l](e, t);
					f(l = u.hook) && f(l = l.update) && l(e, t);
				}
				d(t.text) ? f(m) && f(h) ? m !== h && E(c, m, h, n, s) : f(h) ? (f(e.text) && a.setTextContent(c, ""), ee(c, null, h, 0, h.length - 1, n)) : f(m) ? te(m, 0, m.length - 1) : f(e.text) && a.setTextContent(c, "") : e.text !== t.text && a.setTextContent(c, t.text), f(u) && f(l = u.hook) && f(l = l.postpatch) && l(e, t);
			}
		}
	}
	function O(e, t, n) {
		if (p(n) && f(e.parent)) e.parent.data.pendingInsert = t;
		else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]);
	}
	var k = w("attrs,class,staticClass,staticStyle,key");
	function A(e, t, n, r) {
		var i, a = t.tag, o = t.data, s = t.children;
		if (r ||= o && o.pre, t.elm = e, p(t.isComment) && f(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
		if (f(o) && (f(i = o.hook) && f(i = i.init) && i(t, !0), f(i = t.componentInstance))) return g(t, n), !0;
		if (f(a)) {
			if (f(s)) {
				if (!e.hasChildNodes()) y(t, s, n);
				else if (f(i = o) && f(i = i.domProps) && f(i = i.innerHTML)) {
					if (i !== e.innerHTML) return !1;
				} else {
					for (var c = !0, l = e.firstChild, u = 0; u < s.length; u++) {
						if (!l || !A(l, s[u], n, r)) {
							c = !1;
							break;
						}
						l = l.nextSibling;
					}
					if (!c || l) return !1;
				}
			}
			if (f(o)) {
				var d = !1;
				for (var m in o) if (!k(m)) {
					d = !0, x(t, n);
					break;
				}
				!d && o.class && tr(o.class);
			}
		} else e.data !== t.text && (e.data = t.text);
		return !0;
	}
	return function(e, t, n, i) {
		if (d(t)) f(e) && C(e);
		else {
			var s = !1, c = [];
			if (d(e)) s = !0, l(t, c);
			else {
				var u = f(e.nodeType);
				if (!u && ua(e, t)) ne(e, t, c, null, null, i);
				else {
					if (u) {
						if (e.nodeType === 1 && e.hasAttribute(_e) && (e.removeAttribute(_e), n = !0), p(n) && A(e, t, c)) return O(t, c, !0), e;
						e = o(e);
					}
					var m = e.elm, h = a.parentNode(m);
					if (l(t, c, m._leaveCb ? null : h, a.nextSibling(m)), f(t.parent)) for (var g = t.parent, _ = b(t); g;) {
						for (var v = 0; v < r.destroy.length; ++v) r.destroy[v](g);
						if (g.elm = t.elm, _) {
							for (var y = 0; y < r.create.length; ++y) r.create[y](ca, g);
							var x = g.data.hook.insert;
							if (x.merged) for (var S = x.fns.slice(1), ee = 0; ee < S.length; ee++) S[ee]();
						} else oa(g);
						g = g.parent;
					}
					f(h) ? te([e], 0, 0) : f(e.tag) && C(e);
				}
			}
			return O(t, c, s), t.elm;
		}
	};
}
var ma = {
	create: ha,
	update: ha,
	destroy: function(e) {
		ha(e, ca);
	}
};
function ha(e, t) {
	(e.data.directives || t.data.directives) && ga(e, t);
}
function ga(e, t) {
	var n = e === ca, r = t === ca, i = va(e.data.directives, e.context), a = va(t.data.directives, t.context), o = [], s = [], c, l, u;
	for (c in a) l = i[c], u = a[c], l ? (u.oldValue = l.value, u.oldArg = l.arg, ba(u, "update", t, e), u.def && u.def.componentUpdated && s.push(u)) : (ba(u, "bind", t, e), u.def && u.def.inserted && o.push(u));
	if (o.length) {
		var d = function() {
			for (var n = 0; n < o.length; n++) ba(o[n], "inserted", t, e);
		};
		n ? ot(t, "insert", d) : d();
	}
	if (s.length && ot(t, "postpatch", function() {
		for (var n = 0; n < s.length; n++) ba(s[n], "componentUpdated", t, e);
	}), !n) for (c in i) a[c] || ba(i[c], "unbind", e, e, r);
}
var _a = Object.create(null);
function va(e, t) {
	var n = Object.create(null);
	if (!e) return n;
	for (var r = 0, i; r < e.length; r++) {
		if (i = e[r], i.modifiers || (i.modifiers = _a), n[ya(i)] = i, t._setupState && t._setupState.__sfc) {
			var a = i.def || Qr(t, "_setupState", "v-" + i.name);
			typeof a == "function" ? i.def = {
				bind: a,
				update: a
			} : i.def = a;
		}
		i.def = i.def || Qr(t.$options, "directives", i.name, !0);
	}
	return n;
}
function ya(e) {
	return e.rawName || `${e.name}.${Object.keys(e.modifiers || {}).join(".")}`;
}
function ba(e, t, n, r, i) {
	var a = e.def && e.def[t];
	if (a) try {
		a(n.elm, e, n, r, i);
	} catch (r) {
		zn(r, n.context, `directive ${e.name} ${t} hook`);
	}
}
var xa = [aa, ma];
function Sa(e, t) {
	var n = t.componentOptions;
	if (!(f(n) && n.Ctor.options.inheritAttrs === !1) && !(d(e.data.attrs) && d(t.data.attrs))) {
		var r, i, a, o = t.elm, s = e.data.attrs || {}, c = t.data.attrs || {};
		for (r in (f(c.__ob__) || p(c._v_attr_proxy)) && (c = t.data.attrs = N({}, c)), c) i = c[r], a = s[r], a !== i && Ca(o, r, i, t.data.pre);
		for (r in (Te || De) && c.value !== s.value && Ca(o, "value", c.value), s) d(c[r]) && (Ei(r) ? o.removeAttributeNS(Ti, Di(r)) : xi(r) || o.removeAttribute(r));
	}
}
function Ca(e, t, n, r) {
	r || e.tagName.indexOf("-") > -1 ? wa(e, t, n) : wi(t) ? Oi(n) ? e.removeAttribute(t) : (n = t === "allowfullscreen" && e.tagName === "EMBED" ? "true" : t, e.setAttribute(t, n)) : xi(t) ? e.setAttribute(t, Ci(t, n)) : Ei(t) ? Oi(n) ? e.removeAttributeNS(Ti, Di(t)) : e.setAttributeNS(Ti, t, n) : wa(e, t, n);
}
function wa(e, t, n) {
	if (Oi(n)) e.removeAttribute(t);
	else {
		/* istanbul ignore if */
		if (Te && !Ee && e.tagName === "TEXTAREA" && t === "placeholder" && n !== "" && !e.__ieph) {
			var r = function(t) {
				t.stopImmediatePropagation(), e.removeEventListener("input", r);
			};
			e.addEventListener("input", r), e.__ieph = !0;
		}
		e.setAttribute(t, n);
	}
}
var Ta = {
	create: Sa,
	update: Sa
};
function Ea(e, t) {
	var n = t.elm, r = t.data, i = e.data;
	if (!(d(r.staticClass) && d(r.class) && (d(i) || d(i.staticClass) && d(i.class)))) {
		var a = ki(t), o = n._transitionClasses;
		f(o) && (a = Mi(a, Ni(o))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a);
	}
}
var Da = {
	create: Ea,
	update: Ea
}, Oa = /[\w).+\-_$\]]/;
function ka(e) {
	for (var t = !1, n = !1, r = !1, i = !1, a = 0, o = 0, s = 0, c = 0, l, u, d = 0, f, p; d < e.length; d++) if (u = l, l = e.charCodeAt(d), t) l === 39 && u !== 92 && (t = !1);
	else if (n) l === 34 && u !== 92 && (n = !1);
	else if (r) l === 96 && u !== 92 && (r = !1);
	else if (i) l === 47 && u !== 92 && (i = !1);
	else if (l === 124 && e.charCodeAt(d + 1) !== 124 && e.charCodeAt(d - 1) !== 124 && !a && !o && !s) f === void 0 ? (c = d + 1, f = e.slice(0, d).trim()) : g();
	else {
		switch (l) {
			case 34:
				n = !0;
				break;
			case 39:
				t = !0;
				break;
			case 96:
				r = !0;
				break;
			case 40:
				s++;
				break;
			case 41:
				s--;
				break;
			case 91:
				o++;
				break;
			case 93:
				o--;
				break;
			case 123:
				a++;
				break;
			case 125: a--;
		}
		if (l === 47) {
			for (var m = d - 1, h = void 0; m >= 0 && (h = e.charAt(m), h === " "); m--);
			(!h || !Oa.test(h)) && (i = !0);
		}
	}
	f === void 0 ? f = e.slice(0, d).trim() : c !== 0 && g();
	function g() {
		(p ||= []).push(e.slice(c, d).trim()), c = d + 1;
	}
	if (p) for (d = 0; d < p.length; d++) f = Aa(f, p[d]);
	return f;
}
function Aa(e, t) {
	var n = t.indexOf("(");
	if (n < 0) return `_f("${t}")(${e})`;
	var r = t.slice(0, n), i = t.slice(n + 1);
	return `_f("${r}")(${e}${i === ")" ? i : "," + i}`;
}
function ja(e, t) {
	console.error(`[Vue compiler]: ${e}`);
}
function Ma(e, t) {
	return e ? e.map(function(e) {
		return e[t];
	}).filter(function(e) {
		return e;
	}) : [];
}
function Na(e, t, n, r, i) {
	(e.props ||= []).push(Ha({
		name: t,
		value: n,
		dynamic: i
	}, r)), e.plain = !1;
}
function Pa(e, t, n, r, i) {
	(i ? e.dynamicAttrs ||= [] : e.attrs ||= []).push(Ha({
		name: t,
		value: n,
		dynamic: i
	}, r)), e.plain = !1;
}
function Fa(e, t, n, r) {
	e.attrsMap[t] = n, e.attrsList.push(Ha({
		name: t,
		value: n
	}, r));
}
function Ia(e, t, n, r, i, a, o, s) {
	(e.directives ||= []).push(Ha({
		name: t,
		rawName: n,
		value: r,
		arg: i,
		isDynamicArg: a,
		modifiers: o
	}, s)), e.plain = !1;
}
function La(e, t, n) {
	return n ? `_p(${t},"${e}")` : e + t;
}
function Ra(e, t, n, r, i, a, o, s) {
	/* istanbul ignore if */
	r ||= l, r.right ? s ? t = `(${t})==='click'?'contextmenu':(${t})` : t === "click" && (t = "contextmenu", delete r.right) : r.middle && (s ? t = `(${t})==='click'?'mouseup':(${t})` : t === "click" && (t = "mouseup")), r.capture && (delete r.capture, t = La("!", t, s)), r.once && (delete r.once, t = La("~", t, s)), r.passive && (delete r.passive, t = La("&", t, s));
	var c;
	r.native ? (delete r.native, c = e.nativeEvents ||= {}) : c = e.events ||= {};
	var u = Ha({
		value: n.trim(),
		dynamic: s
	}, o);
	r !== l && (u.modifiers = r);
	var d = c[t];
	Array.isArray(d) ? i ? d.unshift(u) : d.push(u) : d ? c[t] = i ? [u, d] : [d, u] : c[t] = u, e.plain = !1;
}
function za(e, t) {
	return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t];
}
function Ba(e, t, n) {
	var r = $(e, ":" + t) || $(e, "v-bind:" + t);
	if (r != null) return ka(r);
	if (n !== !1) {
		var i = $(e, t);
		if (i != null) return JSON.stringify(i);
	}
}
function $(e, t, n) {
	var r;
	if ((r = e.attrsMap[t]) != null) {
		for (var i = e.attrsList, a = 0, o = i.length; a < o; a++) if (i[a].name === t) {
			i.splice(a, 1);
			break;
		}
	}
	return n && delete e.attrsMap[t], r;
}
function Va(e, t) {
	for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
		var a = n[r];
		if (t.test(a.name)) return n.splice(r, 1), a;
	}
}
function Ha(e, t) {
	return t && (t.start != null && (e.start = t.start), t.end != null && (e.end = t.end)), e;
}
function Ua(e, t, n) {
	var r = n || {}, i = r.number, a = r.trim, o = "$$v", s = o;
	a && (s = `(typeof ${o} === 'string'? ${o}.trim(): ${o})`), i && (s = `_n(${s})`);
	var c = Wa(t, s);
	e.model = {
		value: `(${t})`,
		expression: JSON.stringify(t),
		callback: `function (${o}) {${c}}`
	};
}
function Wa(e, t) {
	var n = Za(e);
	return n.key === null ? `${e}=${t}` : `\$set(${n.exp}, ${n.key}, ${t})`;
}
var Ga, Ka, qa, Ja, Ya, Xa;
function Za(e) {
	if (e = e.trim(), Ga = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < Ga - 1) return Ja = e.lastIndexOf("."), Ja > -1 ? {
		exp: e.slice(0, Ja),
		key: "\"" + e.slice(Ja + 1) + "\""
	} : {
		exp: e,
		key: null
	};
	for (Ka = e, Ja = Ya = Xa = 0; !$a();)
 /* istanbul ignore if */
	qa = Qa(), eo(qa) ? no(qa) : qa === 91 && to(qa);
	return {
		exp: e.slice(0, Ya),
		key: e.slice(Ya + 1, Xa)
	};
}
function Qa() {
	return Ka.charCodeAt(++Ja);
}
function $a() {
	return Ja >= Ga;
}
function eo(e) {
	return e === 34 || e === 39;
}
function to(e) {
	var t = 1;
	for (Ya = Ja; !$a();) if (e = Qa(), eo(e)) no(e);
	else if (e === 91 && t++, e === 93 && t--, t === 0) {
		Xa = Ja;
		break;
	}
}
function no(e) {
	for (var t = e; !$a() && (e = Qa(), e !== t););
}
var ro = "__r", io = "__c";
function ao(e, t, n) {
	var r = t.value, i = t.modifiers, a = e.tag, o = e.attrsMap.type;
	if (e.component) return Ua(e, r, i), !1;
	if (a === "select") co(e, r, i);
	else if (a === "input" && o === "checkbox") oo(e, r, i);
	else if (a === "input" && o === "radio") so(e, r, i);
	else if (a === "input" || a === "textarea") lo(e, r, i);
	else if (!I.isReservedTag(a)) return Ua(e, r, i), !1;
	return !0;
}
function oo(e, t, n) {
	var r = n && n.number, i = Ba(e, "value") || "null", a = Ba(e, "true-value") || "true", o = Ba(e, "false-value") || "false";
	Na(e, "checked", `Array.isArray(${t})?_i(${t},${i})>-1` + (a === "true" ? `:(${t})` : `:_q(${t},${a})`)), Ra(e, "change", `var \$\$a=${t},\$\$el=\$event.target,\$\$c=\$\$el.checked?(${a}):(${o});if(Array.isArray(\$\$a)){var \$\$v=${r ? "_n(" + i + ")" : i},\$\$i=_i(\$\$a,\$\$v);if(\$\$el.checked){\$\$i<0&&(${Wa(t, "$$a.concat([$$v])")})}else{\$\$i>-1&&(${Wa(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))")})}}else{${Wa(t, "$$c")}}`, null, !0);
}
function so(e, t, n) {
	var r = n && n.number, i = Ba(e, "value") || "null";
	i = r ? `_n(${i})` : i, Na(e, "checked", `_q(${t},${i})`), Ra(e, "change", Wa(t, i), null, !0);
}
function co(e, t, n) {
	var r = `Array.prototype.filter.call(\$event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ${n && n.number ? "_n(val)" : "val"}})`, i = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]", a = `var \$\$selectedVal = ${r};`;
	a = `${a} ${Wa(t, i)}`, Ra(e, "change", a, null, !0);
}
function lo(e, t, n) {
	var r = e.attrsMap.type, i = n || {}, a = i.lazy, o = i.number, s = i.trim, c = !a && r !== "range", l = a ? "change" : r === "range" ? ro : "input", u = "$event.target.value";
	s && (u = "$event.target.value.trim()"), o && (u = `_n(${u})`);
	var d = Wa(t, u);
	c && (d = `if(\$event.target.composing)return;${d}`), Na(e, "value", `(${t})`), Ra(e, l, d, null, !0), (s || o) && Ra(e, "blur", "$forceUpdate()");
}
function uo(e) {
	/* istanbul ignore if */
	if (f(e[ro])) {
		var t = Te ? "change" : "input";
		e[t] = [].concat(e[ro], e[t] || []), delete e[ro];
	}
	/* istanbul ignore if */
	f(e[io]) && (e.change = [].concat(e[io], e.change || []), delete e[io]);
}
var fo;
function po(e, t, n) {
	var r = fo;
	return function i() {
		t.apply(null, arguments) !== null && go(e, i, n, r);
	};
}
var mo = Un && !(ke && Number(ke[1]) <= 53);
function ho(e, t, n, r) {
	if (mo) {
		var i = On, a = t;
		t = a._wrapper = function(e) {
			if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return a.apply(this, arguments);
		};
	}
	fo.addEventListener(e, t, je ? {
		capture: n,
		passive: r
	} : n);
}
function go(e, t, n, r) {
	(r || fo).removeEventListener(e, t._wrapper || t, n);
}
function _o(e, t) {
	if (!(d(e.data.on) && d(t.data.on))) {
		var n = t.data.on || {}, r = e.data.on || {};
		fo = t.elm || e.elm, uo(n), at(n, r, ho, go, po, t.context), fo = void 0;
	}
}
var vo = {
	create: _o,
	update: _o,
	destroy: function(e) {
		return _o(e, ca);
	}
}, yo;
function bo(e, t) {
	if (!(d(e.data.domProps) && d(t.data.domProps))) {
		var n, r, i = t.elm, a = e.data.domProps || {}, o = t.data.domProps || {};
		for (n in (f(o.__ob__) || p(o._v_attr_proxy)) && (o = t.data.domProps = N({}, o)), a) n in o || (i[n] = "");
		for (n in o) {
			if (r = o[n], n === "textContent" || n === "innerHTML") {
				if (t.children && (t.children.length = 0), r === a[n]) continue;
				i.childNodes.length === 1 && i.removeChild(i.childNodes[0]);
			}
			if (n === "value" && i.tagName !== "PROGRESS") {
				i._value = r;
				var s = d(r) ? "" : String(r);
				xo(i, s) && (i.value = s);
			} else if (n === "innerHTML" && Ri(i.tagName) && d(i.innerHTML)) {
				yo ||= document.createElement("div"), yo.innerHTML = `<svg>${r}</svg>`;
				for (var c = yo.firstChild; i.firstChild;) i.removeChild(i.firstChild);
				for (; c.firstChild;) i.appendChild(c.firstChild);
			} else if (r !== a[n]) try {
				i[n] = r;
			} catch {}
		}
	}
}
function xo(e, t) {
	return !e.composing && (e.tagName === "OPTION" || So(e, t) || Co(e, t));
}
function So(e, t) {
	var n = !0;
	try {
		n = document.activeElement !== e;
	} catch {}
	return n && e.value !== t;
}
function Co(e, t) {
	var n = e.value, r = e._vModifiers;
	if (f(r)) {
		if (r.number) return te(n) !== te(t);
		if (r.trim) return n.trim() !== t.trim();
	}
	return n !== t;
}
var wo = {
	create: bo,
	update: bo
}, To = k(function(e) {
	var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
	return e.split(n).forEach(function(e) {
		if (e) {
			var n = e.split(r);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
});
function Eo(e) {
	var t = Do(e.style);
	return e.staticStyle ? N(e.staticStyle, t) : t;
}
function Do(e) {
	return Array.isArray(e) ? le(e) : typeof e == "string" ? To(e) : e;
}
function Oo(e, t) {
	var n = {}, r;
	if (t) for (var i = e; i.componentInstance;) i = i.componentInstance._vnode, i && i.data && (r = Eo(i.data)) && N(n, r);
	(r = Eo(e.data)) && N(n, r);
	for (var a = e; a = a.parent;) a.data && (r = Eo(a.data)) && N(n, r);
	return n;
}
var ko = /^--/, Ao = /\s*!important$/, jo = function(e, t, n) {
	/* istanbul ignore if */
	if (ko.test(t)) e.style.setProperty(t, n);
	else if (Ao.test(n)) e.style.setProperty(M(t), n.replace(Ao, ""), "important");
	else {
		var r = Po(t);
		if (Array.isArray(n)) for (var i = 0, a = n.length; i < a; i++) e.style[r] = n[i];
		else e.style[r] = n;
	}
}, Mo = [
	"Webkit",
	"Moz",
	"ms"
], No, Po = k(function(e) {
	if (No ||= document.createElement("div").style, e = j(e), e !== "filter" && e in No) return e;
	for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Mo.length; n++) {
		var r = Mo[n] + t;
		if (r in No) return r;
	}
});
function Fo(e, t) {
	var n = t.data, r = e.data;
	if (!(d(n.staticStyle) && d(n.style) && d(r.staticStyle) && d(r.style))) {
		var i, a, o = t.elm, s = r.staticStyle, c = r.normalizedStyle || r.style || {}, l = s || c, u = Do(t.data.style) || {};
		t.data.normalizedStyle = f(u.__ob__) ? N({}, u) : u;
		var p = Oo(t, !0);
		for (a in l) d(p[a]) && jo(o, a, "");
		for (a in p) i = p[a], jo(o, a, i ?? "");
	}
}
var Io = {
	create: Fo,
	update: Fo
}, Lo = /\s+/;
function Ro(e, t) {
	/* istanbul ignore if */
	if (t &&= t.trim()) {
		/* istanbul ignore else */
		if (e.classList) t.indexOf(" ") > -1 ? t.split(Lo).forEach(function(t) {
			return e.classList.add(t);
		}) : e.classList.add(t);
		else {
			var n = ` ${e.getAttribute("class") || ""} `;
			n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
		}
	}
}
function zo(e, t) {
	/* istanbul ignore if */
	if (t &&= t.trim()) {
		/* istanbul ignore else */
		if (e.classList) t.indexOf(" ") > -1 ? t.split(Lo).forEach(function(t) {
			return e.classList.remove(t);
		}) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
		else {
			for (var n = ` ${e.getAttribute("class") || ""} `, r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
			n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class");
		}
	}
}
function Bo(e) {
	if (e) {
		/* istanbul ignore else */
		if (typeof e == "object") {
			var t = {};
			return e.css !== !1 && N(t, Vo(e.name || "v")), N(t, e), t;
		}
		if (typeof e == "string") return Vo(e);
	}
}
var Vo = k(function(e) {
	return {
		enterClass: `${e}-enter`,
		enterToClass: `${e}-enter-to`,
		enterActiveClass: `${e}-enter-active`,
		leaveClass: `${e}-leave`,
		leaveToClass: `${e}-leave-to`,
		leaveActiveClass: `${e}-leave-active`
	};
}), Ho = L && !Ee, Uo = "transition", Wo = "animation", Go = "transition", Ko = "transitionend", qo = "animation", Jo = "animationend";
Ho && 
/* istanbul ignore if */
(window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (Go = "WebkitTransition", Ko = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (qo = "WebkitAnimation", Jo = "webkitAnimationEnd"));
var Yo = L ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */ function(e) {
	return e();
};
function Xo(e) {
	Yo(function() {
		Yo(e);
	});
}
function Zo(e, t) {
	var n = e._transitionClasses ||= [];
	n.indexOf(t) < 0 && (n.push(t), Ro(e, t));
}
function Qo(e, t) {
	e._transitionClasses && D(e._transitionClasses, t), zo(e, t);
}
function $o(e, t, n) {
	var r = ts(e, t), i = r.type, a = r.timeout, o = r.propCount;
	if (!i) return n();
	var s = i === Uo ? Ko : Jo, c = 0, l = function() {
		e.removeEventListener(s, u), n();
	}, u = function(t) {
		t.target === e && ++c >= o && l();
	};
	setTimeout(function() {
		c < o && l();
	}, a + 1), e.addEventListener(s, u);
}
var es = /\b(transform|all)(,|$)/;
function ts(e, t) {
	var n = window.getComputedStyle(e), r = (n[Go + "Delay"] || "").split(", "), i = (n[Go + "Duration"] || "").split(", "), a = ns(r, i), o = (n[qo + "Delay"] || "").split(", "), s = (n[qo + "Duration"] || "").split(", "), c = ns(o, s), l, u = 0, d = 0;
	/* istanbul ignore if */
	t === Uo ? a > 0 && (l = Uo, u = a, d = i.length) : t === Wo ? c > 0 && (l = Wo, u = c, d = s.length) : (u = Math.max(a, c), l = u > 0 ? a > c ? Uo : Wo : null, d = l ? l === Uo ? i.length : s.length : 0);
	var f = l === Uo && es.test(n[Go + "Property"]);
	return {
		type: l,
		timeout: u,
		propCount: d,
		hasTransform: f
	};
}
function ns(e, t) {
	/* istanbul ignore next */
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max.apply(null, t.map(function(t, n) {
		return rs(t) + rs(e[n]);
	}));
}
function rs(e) {
	return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function is(e, t) {
	var n = e.elm;
	f(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
	var r = Bo(e.data.transition);
	if (!d(r) && !(f(n._enterCb) || n.nodeType !== 1)) {
		for (var i = r.css, a = r.type, o = r.enterClass, s = r.enterToClass, c = r.enterActiveClass, l = r.appearClass, u = r.appearToClass, p = r.appearActiveClass, m = r.beforeEnter, h = r.enter, v = r.afterEnter, y = r.enterCancelled, b = r.beforeAppear, x = r.appear, S = r.afterAppear, ee = r.appearCancelled, C = r.duration, w = dn, T = dn.$vnode; T && T.parent;) w = T.context, T = T.parent;
		var E = !w._isMounted || !e.isRootInsert;
		if (!E || x || x === "") {
			var D = E && l ? l : o, ne = E && p ? p : c, O = E && u ? u : s, k = E && b || m, A = E && g(x) ? x : h, j = E && S || v, re = E && ee || y, ie = te(_(C) ? C.enter : C), M = i !== !1 && !Ee, ae = ss(A), oe = n._enterCb = he(function() {
				M && (Qo(n, O), Qo(n, ne)), oe.cancelled ? (M && Qo(n, D), re && re(n)) : j && j(n), n._enterCb = null;
			});
			e.data.show || ot(e, "insert", function() {
				var t = n.parentNode, r = t && t._pending && t._pending[e.key];
				r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, oe);
			}), k && k(n), M && (Zo(n, D), Zo(n, ne), Xo(function() {
				Qo(n, D), oe.cancelled || (Zo(n, O), ae || (os(ie) ? setTimeout(oe, ie) : $o(n, a, oe)));
			})), e.data.show && (t && t(), A && A(n, oe)), !M && !ae && oe();
		}
	}
}
function as(e, t) {
	var n = e.elm;
	f(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
	var r = Bo(e.data.transition);
	if (d(r) || n.nodeType !== 1) return t();
	/* istanbul ignore if */
	if (f(n._leaveCb)) return;
	var i = r.css, a = r.type, o = r.leaveClass, s = r.leaveToClass, c = r.leaveActiveClass, l = r.beforeLeave, u = r.leave, p = r.afterLeave, m = r.leaveCancelled, h = r.delayLeave, g = r.duration, v = i !== !1 && !Ee, y = ss(u), b = te(_(g) ? g.leave : g), x = n._leaveCb = he(function() {
		n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), v && (Qo(n, s), Qo(n, c)), x.cancelled ? (v && Qo(n, o), m && m(n)) : (t(), p && p(n)), n._leaveCb = null;
	});
	h ? h(S) : S();
	function S() {
		x.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), l && l(n), v && (Zo(n, o), Zo(n, c), Xo(function() {
			Qo(n, o), x.cancelled || (Zo(n, s), y || (os(b) ? setTimeout(x, b) : $o(n, a, x)));
		})), u && u(n, x), !v && !y && x());
	}
}
function os(e) {
	return typeof e == "number" && !isNaN(e);
}
function ss(e) {
	if (d(e)) return !1;
	var t = e.fns;
	return f(t) ? ss(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
}
function cs(e, t) {
	t.data.show !== !0 && is(t);
}
var ls = pa({
	nodeOps: ia,
	modules: [
		Ta,
		Da,
		vo,
		wo,
		Io,
		L ? {
			create: cs,
			activate: cs,
			remove: function(e, t) {
				/* istanbul ignore else */
				e.data.show === !0 ? t() : as(e, t);
			}
		} : {}
	].concat(xa)
});
/* istanbul ignore if */
Ee && document.addEventListener("selectionchange", function() {
	var e = document.activeElement;
	e && e.vmodel && _s(e, "input");
});
var us = {
	inserted: function(e, t, n, r) {
		n.tag === "select" ? (r.elm && !r.elm._vOptions ? ot(n, "postpatch", function() {
			us.componentUpdated(e, t, n);
		}) : ds(e, t, n.context), e._vOptions = [].map.call(e.options, ms)) : (n.tag === "textarea" || Wi(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", hs), e.addEventListener("compositionend", gs), e.addEventListener("change", gs), Ee && (e.vmodel = !0)));
	},
	componentUpdated: function(e, t, n) {
		if (n.tag === "select") {
			ds(e, t, n.context);
			var r = e._vOptions, i = e._vOptions = [].map.call(e.options, ms);
			i.some(function(e, t) {
				return !pe(e, r[t]);
			}) && (e.multiple ? t.value.some(function(e) {
				return ps(e, i);
			}) : t.value !== t.oldValue && ps(t.value, i)) && _s(e, "change");
		}
	}
};
function ds(e, t, n) {
	/* istanbul ignore if */
	fs(e, t, n), (Te || De) && setTimeout(function() {
		fs(e, t, n);
	}, 0);
}
function fs(e, t, n) {
	var r = t.value, i = e.multiple;
	if (!i || Array.isArray(r)) {
		for (var a, o, s = 0, c = e.options.length; s < c; s++) if (o = e.options[s], i) a = me(r, ms(o)) > -1, o.selected !== a && (o.selected = a);
		else if (pe(ms(o), r)) {
			e.selectedIndex !== s && (e.selectedIndex = s);
			return;
		}
		i || (e.selectedIndex = -1);
	}
}
function ps(e, t) {
	return t.every(function(t) {
		return !pe(t, e);
	});
}
function ms(e) {
	return "_value" in e ? e._value : e.value;
}
function hs(e) {
	e.target.composing = !0;
}
function gs(e) {
	e.target.composing && (e.target.composing = !1, _s(e.target, "input"));
}
function _s(e, t) {
	var n = document.createEvent("HTMLEvents");
	n.initEvent(t, !0, !0), e.dispatchEvent(n);
}
function vs(e) {
	return e.componentInstance && (!e.data || !e.data.transition) ? vs(e.componentInstance._vnode) : e;
}
var ys = {
	model: us,
	show: {
		bind: function(e, t, n) {
			var r = t.value;
			n = vs(n);
			var i = n.data && n.data.transition, a = e.__vOriginalDisplay = e.style.display === "none" ? "" : e.style.display;
			r && i ? (n.data.show = !0, is(n, function() {
				e.style.display = a;
			})) : e.style.display = r ? a : "none";
		},
		update: function(e, t, n) {
			var r = t.value, i = t.oldValue;
			/* istanbul ignore if */
			!r != !i && (n = vs(n), n.data && n.data.transition ? (n.data.show = !0, r ? is(n, function() {
				e.style.display = e.__vOriginalDisplay;
			}) : as(n, function() {
				e.style.display = "none";
			})) : e.style.display = r ? e.__vOriginalDisplay : "none");
		},
		unbind: function(e, t, n, r, i) {
			i || (e.style.display = e.__vOriginalDisplay);
		}
	}
}, bs = {
	name: String,
	appear: Boolean,
	css: Boolean,
	mode: String,
	type: String,
	enterClass: String,
	leaveClass: String,
	enterToClass: String,
	leaveToClass: String,
	enterActiveClass: String,
	leaveActiveClass: String,
	appearClass: String,
	appearActiveClass: String,
	appearToClass: String,
	duration: [
		Number,
		String,
		Object
	]
};
function xs(e) {
	var t = e && e.componentOptions;
	return t && t.Ctor.options.abstract ? xs(Qt(t.children)) : e;
}
function Ss(e) {
	var t = {}, n = e.$options;
	for (var r in n.propsData) t[r] = e[r];
	var i = n._parentListeners;
	for (var r in i) t[j(r)] = i[r];
	return t;
}
function Cs(e, t) {
	if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData });
}
function ws(e) {
	for (; e = e.parent;) if (e.data.transition) return !0;
}
function Ts(e, t) {
	return t.key === e.key && t.tag === e.tag;
}
var Es = function(e) {
	return e.tag || It(e);
}, Ds = function(e) {
	return e.name === "show";
}, Os = {
	name: "transition",
	props: bs,
	abstract: !0,
	render: function(e) {
		var t = this, n = this.$slots.default;
		if (n && (n = n.filter(Es), n.length)) {
			var r = this.mode, i = n[0];
			if (ws(this.$vnode)) return i;
			var a = xs(i);
			/* istanbul ignore if */
			if (!a) return i;
			if (this._leaving) return Cs(e, i);
			var o = `__transition-${this._uid}-`;
			a.key = a.key == null ? a.isComment ? o + "comment" : o + a.tag : h(a.key) ? String(a.key).indexOf(o) === 0 ? a.key : o + a.key : a.key;
			var s = (a.data ||= {}).transition = Ss(this), c = this._vnode, l = xs(c);
			if (a.data.directives && a.data.directives.some(Ds) && (a.data.show = !0), l && l.data && !Ts(a, l) && !It(l) && !(l.componentInstance && l.componentInstance._vnode.isComment)) {
				var u = l.data.transition = N({}, s);
				if (r === "out-in") return this._leaving = !0, ot(u, "afterLeave", function() {
					t._leaving = !1, t.$forceUpdate();
				}), Cs(e, i);
				if (r === "in-out") {
					if (It(a)) return c;
					var d, f = function() {
						d();
					};
					ot(s, "afterEnter", f), ot(s, "enterCancelled", f), ot(u, "delayLeave", function(e) {
						d = e;
					});
				}
			}
			return i;
		}
	}
}, ks = N({
	tag: String,
	moveClass: String
}, bs);
delete ks.mode;
var As = {
	props: ks,
	beforeMount: function() {
		var e = this, t = this._update;
		this._update = function(n, r) {
			var i = fn(e);
			e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r);
		};
	},
	render: function(e) {
		for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], o = Ss(this), s = 0; s < i.length; s++) {
			var c = i[s];
			c.tag && c.key != null && String(c.key).indexOf("__vlist") !== 0 && (a.push(c), n[c.key] = c, (c.data ||= {}).transition = o);
		}
		if (r) {
			for (var l = [], u = [], s = 0; s < r.length; s++) {
				var c = r[s];
				c.data.transition = o, c.data.pos = c.elm.getBoundingClientRect(), n[c.key] ? l.push(c) : u.push(c);
			}
			this.kept = e(t, null, l), this.removed = u;
		}
		return e(t, null, a);
	},
	updated: function() {
		var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
		e.length && this.hasMove(e[0].elm, t) && (e.forEach(js), e.forEach(Ms), e.forEach(Ns), this._reflow = document.body.offsetHeight, e.forEach(function(e) {
			if (e.data.moved) {
				var n = e.elm, r = n.style;
				Zo(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ko, n._moveCb = function e(r) {
					r && r.target !== n || (!r || /transform$/.test(r.propertyName)) && (n.removeEventListener(Ko, e), n._moveCb = null, Qo(n, t));
				});
			}
		}));
	},
	methods: { hasMove: function(e, t) {
		/* istanbul ignore if */
		if (!Ho) return !1;
		/* istanbul ignore if */
		if (this._hasMove) return this._hasMove;
		var n = e.cloneNode();
		e._transitionClasses && e._transitionClasses.forEach(function(e) {
			zo(n, e);
		}), Ro(n, t), n.style.display = "none", this.$el.appendChild(n);
		var r = ts(n);
		return this.$el.removeChild(n), this._hasMove = r.hasTransform;
	} }
};
function js(e) {
	/* istanbul ignore if */
	e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
}
function Ms(e) {
	e.data.newPos = e.elm.getBoundingClientRect();
}
function Ns(e) {
	var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		e.data.moved = !0;
		var a = e.elm.style;
		a.transform = a.WebkitTransform = `translate(${r}px,${i}px)`, a.transitionDuration = "0s";
	}
}
var Ps = {
	Transition: Os,
	TransitionGroup: As
};
/* istanbul ignore next */
Q.config.mustUseProp = bi, Q.config.isReservedTag = Bi, Q.config.isReservedAttr = vi, Q.config.getTagNamespace = Vi, Q.config.isUnknownElement = Ui, N(Q.options.directives, ys), N(Q.options.components, Ps), Q.prototype.__patch__ = L ? ls : P, Q.prototype.$mount = function(e, t) {
	return e = e && L ? Gi(e) : void 0, hn(this, e, t);
}, L && setTimeout(function() {
	I.devtools && Fe && Fe.emit("init", Q);
}, 0);
var Fs = /\{\{((?:.|\r?\n)+?)\}\}/g, Is = /[-.*+?^${}()|[\]\/\\]/g, Ls = k(function(e) {
	var t = e[0].replace(Is, "\\$&"), n = e[1].replace(Is, "\\$&");
	return RegExp(t + "((?:.|\\n)+?)" + n, "g");
});
function Rs(e, t) {
	var n = t ? Ls(t) : Fs;
	if (n.test(e)) {
		for (var r = [], i = [], a = n.lastIndex = 0, o, s, c; o = n.exec(e);) {
			s = o.index, s > a && (i.push(c = e.slice(a, s)), r.push(JSON.stringify(c)));
			var l = ka(o[1].trim());
			r.push(`_s(${l})`), i.push({ "@binding": l }), a = s + o[0].length;
		}
		return a < e.length && (i.push(c = e.slice(a)), r.push(JSON.stringify(c))), {
			expression: r.join("+"),
			tokens: i
		};
	}
}
function zs(e, t) {
	t.warn;
	var n = $(e, "class");
	n && (e.staticClass = JSON.stringify(n.replace(/\s+/g, " ").trim()));
	var r = Ba(e, "class", !1);
	r && (e.classBinding = r);
}
function Bs(e) {
	var t = "";
	return e.staticClass && (t += `staticClass:${e.staticClass},`), e.classBinding && (t += `class:${e.classBinding},`), t;
}
var Vs = {
	staticKeys: ["staticClass"],
	transformNode: zs,
	genData: Bs
};
function Hs(e, t) {
	t.warn;
	var n = $(e, "style");
	n && (e.staticStyle = JSON.stringify(To(n)));
	var r = Ba(e, "style", !1);
	r && (e.styleBinding = r);
}
function Us(e) {
	var t = "";
	return e.staticStyle && (t += `staticStyle:${e.staticStyle},`), e.styleBinding && (t += `style:(${e.styleBinding}),`), t;
}
var Ws = {
	staticKeys: ["staticStyle"],
	transformNode: Hs,
	genData: Us
}, Gs, Ks = { decode: function(e) {
	return Gs ||= document.createElement("div"), Gs.innerHTML = e, Gs.textContent;
} }, qs = w("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), Js = w("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), Ys = w("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), Xs = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, Zs = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, Qs = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${ye.source}]*`, $s = `((?:${Qs}\\:)?${Qs})`, ec = RegExp(`^<${$s}`), tc = /^\s*(\/?)>/, nc = RegExp(`^<\\/${$s}[^>]*>`), rc = /^<!DOCTYPE [^>]+>/i, ic = /^<!\--/, ac = /^<!\[/, oc = w("script,style,textarea", !0), sc = {}, cc = {
	"&lt;": "<",
	"&gt;": ">",
	"&quot;": "\"",
	"&amp;": "&",
	"&#10;": "\n",
	"&#9;": "	",
	"&#39;": "'"
}, lc = /&(?:lt|gt|quot|amp|#39);/g, uc = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, dc = w("pre,textarea", !0), fc = function(e, t) {
	return e && dc(e) && t[0] === "\n";
};
function pc(e, t) {
	var n = t ? uc : lc;
	return e.replace(n, function(e) {
		return cc[e];
	});
}
function mc(e, t) {
	for (var n = [], r = t.expectHTML, i = t.isUnaryTag || ue, a = t.canBeLeftOpenTag || ue, o = 0, s, c, l = function() {
		if (s = e, !c || !oc(c)) {
			var n = e.indexOf("<");
			if (n === 0) {
				if (ic.test(e)) {
					var r = e.indexOf("-->");
					if (r >= 0) return t.shouldKeepComment && t.comment && t.comment(e.substring(4, r), o, o + r + 3), u(r + 3), "continue";
				}
				if (ac.test(e)) {
					var i = e.indexOf("]>");
					if (i >= 0) return u(i + 2), "continue";
				}
				var a = e.match(rc);
				if (a) return u(a[0].length), "continue";
				var l = e.match(nc);
				if (l) {
					var m = o;
					return u(l[0].length), p(l[1], m, o), "continue";
				}
				var h = d();
				if (h) return f(h), fc(h.tagName, e) && u(1), "continue";
			}
			var g = void 0, _ = void 0, v = void 0;
			if (n >= 0) {
				for (_ = e.slice(n); !nc.test(_) && !ec.test(_) && !ic.test(_) && !ac.test(_) && (v = _.indexOf("<", 1), !(v < 0));) n += v, _ = e.slice(n);
				g = e.substring(0, n);
			}
			n < 0 && (g = e), g && u(g.length), t.chars && g && t.chars(g, o - g.length, o);
		} else {
			var y = 0, b = c.toLowerCase(), x = sc[b] || (sc[b] = RegExp("([\\s\\S]*?)(</" + b + "[^>]*>)", "i")), _ = e.replace(x, function(e, n, r) {
				return y = r.length, !oc(b) && b !== "noscript" && (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), fc(b, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
			});
			o += e.length - _.length, e = _, p(b, o - y, o);
		}
		if (e === s) return t.chars && t.chars(e), "break";
	}; e && l() !== "break";);
	p();
	function u(t) {
		o += t, e = e.substring(t);
	}
	function d() {
		var t = e.match(ec);
		if (t) {
			var n = {
				tagName: t[1],
				attrs: [],
				start: o
			};
			u(t[0].length);
			for (var r = void 0, i = void 0; !(r = e.match(tc)) && (i = e.match(Zs) || e.match(Xs));) i.start = o, u(i[0].length), i.end = o, n.attrs.push(i);
			if (r) return n.unarySlash = r[1], u(r[0].length), n.end = o, n;
		}
	}
	function f(e) {
		var o = e.tagName, s = e.unarySlash;
		r && (c === "p" && Ys(o) && p(c), a(o) && c === o && p(o));
		for (var l = i(o) || !!s, u = e.attrs.length, d = Array(u), f = 0; f < u; f++) {
			var m = e.attrs[f], h = m[3] || m[4] || m[5] || "", g = o === "a" && m[1] === "href" ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
			d[f] = {
				name: m[1],
				value: pc(h, g)
			};
		}
		l || (n.push({
			tag: o,
			lowerCasedTag: o.toLowerCase(),
			attrs: d,
			start: e.start,
			end: e.end
		}), c = o), t.start && t.start(o, d, l, e.start, e.end);
	}
	function p(e, r, i) {
		var a, s;
		if (r ??= o, i ??= o, e) for (s = e.toLowerCase(), a = n.length - 1; a >= 0 && n[a].lowerCasedTag !== s; a--);
		else a = 0;
		if (a >= 0) {
			for (var l = n.length - 1; l >= a; l--) t.end && t.end(n[l].tag, r, i);
			n.length = a, c = a && n[a - 1].tag;
		} else s === "br" ? t.start && t.start(e, [], !0, r, i) : s === "p" && (t.start && t.start(e, [], !1, r, i), t.end && t.end(e, r, i));
	}
}
var hc = /^@|^v-on:/, gc = /^v-|^@|^:|^#/, _c = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, vc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, yc = /^\(|\)$/g, bc = /^\[.*\]$/, xc = /:(.*)$/, Sc = /^:|^\.|^v-bind:/, Cc = /\.[^.\]]+(?=[^\]]*$)/g, wc = /^v-slot(:|$)|^#/, Tc = /[\r\n]/, Ec = /[ \f\t\r\n]+/g, Dc = k(Ks.decode), Oc = "_empty_", kc, Ac, jc, Mc, Nc, Pc, Fc, Ic;
function Lc(e, t, n) {
	return {
		type: 1,
		tag: e,
		attrsList: t,
		attrsMap: il(t),
		rawAttrsMap: {},
		parent: n,
		children: []
	};
}
function Rc(e, t) {
	kc = t.warn || ja, Pc = t.isPreTag || ue, Fc = t.mustUseProp || ue, Ic = t.getTagNamespace || ue, t.isReservedTag, jc = Ma(t.modules, "transformNode"), Mc = Ma(t.modules, "preTransformNode"), Nc = Ma(t.modules, "postTransformNode"), Ac = t.delimiters;
	var n = [], r = t.preserveWhitespace !== !1, i = t.whitespace, a, o, s = !1, c = !1;
	function l(e) {
		if (u(e), !s && !e.processed && (e = Vc(e, t)), !n.length && e !== a && a.if && (e.elseif || e.else) && Yc(a, {
			exp: e.elseif,
			block: e
		}), o && !e.forbidden) {
			if (e.elseif || e.else) qc(e, o);
			else {
				if (e.slotScope) {
					var r = e.slotTarget || "\"default\"";
					(o.scopedSlots || (o.scopedSlots = {}))[r] = e;
				}
				o.children.push(e), e.parent = o;
			}
		}
		e.children = e.children.filter(function(e) {
			return !e.slotScope;
		}), u(e), e.pre && (s = !1), Pc(e.tag) && (c = !1);
		for (var i = 0; i < Nc.length; i++) Nc[i](e, t);
	}
	function u(e) {
		if (!c) for (var t = void 0; (t = e.children[e.children.length - 1]) && t.type === 3 && t.text === " ";) e.children.pop();
	}
	return mc(e, {
		warn: kc,
		expectHTML: t.expectHTML,
		isUnaryTag: t.isUnaryTag,
		canBeLeftOpenTag: t.canBeLeftOpenTag,
		shouldDecodeNewlines: t.shouldDecodeNewlines,
		shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
		shouldKeepComment: t.comments,
		outputSourceRange: t.outputSourceRange,
		start: function(e, r, i, u, d) {
			var f = o && o.ns || Ic(e);
			/* istanbul ignore if */
			Te && f === "svg" && (r = ll(r));
			var p = Lc(e, r, o);
			f && (p.ns = f), ol(p) && !Pe() && (p.forbidden = !0);
			for (var m = 0; m < Mc.length; m++) p = Mc[m](p, t) || p;
			s || (zc(p), p.pre && (s = !0)), Pc(p.tag) && (c = !0), s ? Bc(p) : p.processed || (Wc(p), Kc(p), Xc(p)), a ||= p, i ? l(p) : (o = p, n.push(p));
		},
		end: function(e, t, r) {
			var i = n[n.length - 1];
			--n.length, o = n[n.length - 1], l(i);
		},
		chars: function(e, t, n) {
			if (o && !(Te && o.tag === "textarea" && o.attrsMap.placeholder === e)) {
				var a = o.children;
				if (e = c || e.trim() ? al(o) ? e : Dc(e) : a.length ? i ? i === "condense" && Tc.test(e) ? "" : " " : r ? " " : "" : "", e) {
					!c && i === "condense" && (e = e.replace(Ec, " "));
					var l = void 0, u = void 0;
					!s && e !== " " && (l = Rs(e, Ac)) ? u = {
						type: 2,
						expression: l.expression,
						tokens: l.tokens,
						text: e
					} : (e !== " " || !a.length || a[a.length - 1].text !== " ") && (u = {
						type: 3,
						text: e
					}), u && a.push(u);
				}
			}
		},
		comment: function(e, t, n) {
			if (o) {
				var r = {
					type: 3,
					text: e,
					isComment: !0
				};
				o.children.push(r);
			}
		}
	}), a;
}
function zc(e) {
	$(e, "v-pre") != null && (e.pre = !0);
}
function Bc(e) {
	var t = e.attrsList, n = t.length;
	if (n) for (var r = e.attrs = Array(n), i = 0; i < n; i++) r[i] = {
		name: t[i].name,
		value: JSON.stringify(t[i].value)
	}, t[i].start != null && (r[i].start = t[i].start, r[i].end = t[i].end);
	else e.pre || (e.plain = !0);
}
function Vc(e, t) {
	Hc(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, Uc(e), Zc(e), $c(e), el(e);
	for (var n = 0; n < jc.length; n++) e = jc[n](e, t) || e;
	return tl(e), e;
}
function Hc(e) {
	var t = Ba(e, "key");
	t && (e.key = t);
}
function Uc(e) {
	var t = Ba(e, "ref");
	t && (e.ref = t, e.refInFor = nl(e));
}
function Wc(e) {
	var t;
	if (t = $(e, "v-for")) {
		var n = Gc(t);
		n && N(e, n);
	}
}
function Gc(e) {
	var t = e.match(_c);
	if (t) {
		var n = {};
		n.for = t[2].trim();
		var r = t[1].trim().replace(yc, ""), i = r.match(vc);
		return i ? (n.alias = r.replace(vc, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n;
	}
}
function Kc(e) {
	var t = $(e, "v-if");
	if (t) e.if = t, Yc(e, {
		exp: t,
		block: e
	});
	else {
		$(e, "v-else") != null && (e.else = !0);
		var n = $(e, "v-else-if");
		n && (e.elseif = n);
	}
}
function qc(e, t) {
	var n = Jc(t.children);
	n && n.if && Yc(n, {
		exp: e.elseif,
		block: e
	});
}
function Jc(e) {
	for (var t = e.length; t--;) if (e[t].type === 1) return e[t];
	else e.pop();
}
function Yc(e, t) {
	e.ifConditions ||= [], e.ifConditions.push(t);
}
function Xc(e) {
	$(e, "v-once") != null && (e.once = !0);
}
function Zc(e) {
	var t;
	e.tag === "template" ? (t = $(e, "scope"), e.slotScope = t || $(e, "slot-scope")) : (t = $(e, "slot-scope")) && (e.slotScope = t);
	var n = Ba(e, "slot");
	if (n && (e.slotTarget = n === "\"\"" ? "\"default\"" : n, e.slotTargetDynamic = !!(e.attrsMap[":slot"] || e.attrsMap["v-bind:slot"]), e.tag !== "template" && !e.slotScope && Pa(e, "slot", n, za(e, "slot"))), e.tag === "template") {
		var r = Va(e, wc);
		if (r) {
			var i = Qc(r), a = i.name, o = i.dynamic;
			e.slotTarget = a, e.slotTargetDynamic = o, e.slotScope = r.value || Oc;
		}
	} else {
		var r = Va(e, wc);
		if (r) {
			var s = e.scopedSlots ||= {}, c = Qc(r), l = c.name, o = c.dynamic, u = s[l] = Lc("template", [], e);
			u.slotTarget = l, u.slotTargetDynamic = o, u.children = e.children.filter(function(e) {
				if (!e.slotScope) return e.parent = u, !0;
			}), u.slotScope = r.value || Oc, e.children = [], e.plain = !1;
		}
	}
}
function Qc(e) {
	var t = e.name.replace(wc, "");
	return t || e.name[0] !== "#" && (t = "default"), bc.test(t) ? {
		name: t.slice(1, -1),
		dynamic: !0
	} : {
		name: `"${t}"`,
		dynamic: !1
	};
}
function $c(e) {
	e.tag === "slot" && (e.slotName = Ba(e, "name"));
}
function el(e) {
	var t;
	(t = Ba(e, "is")) && (e.component = t), $(e, "inline-template") != null && (e.inlineTemplate = !0);
}
function tl(e) {
	for (var t = e.attrsList, n = 0, r = t.length, i, a, o, s, c, l; n < r; n++) if (i = a = t[n].name, o = t[n].value, gc.test(i)) {
		if (e.hasBindings = !0, s = rl(i.replace(gc, "")), s && (i = i.replace(Cc, "")), Sc.test(i)) i = i.replace(Sc, ""), o = ka(o), l = bc.test(i), l && (i = i.slice(1, -1)), s && (s.prop && !l && (i = j(i), i === "innerHtml" && (i = "innerHTML")), s.camel && !l && (i = j(i)), s.sync && (c = Wa(o, "$event"), l ? Ra(e, `"update:"+(${i})`, c, null, !1, kc, t[n], !0) : (Ra(e, `update:${j(i)}`, c, null, !1, kc, t[n]), M(i) !== j(i) && Ra(e, `update:${M(i)}`, c, null, !1, kc, t[n])))), s && s.prop || !e.component && Fc(e.tag, e.attrsMap.type, i) ? Na(e, i, o, t[n], l) : Pa(e, i, o, t[n], l);
		else if (hc.test(i)) i = i.replace(hc, ""), l = bc.test(i), l && (i = i.slice(1, -1)), Ra(e, i, o, s, !1, kc, t[n], l);
		else {
			i = i.replace(gc, "");
			var u = i.match(xc), d = u && u[1];
			l = !1, d && (i = i.slice(0, -(d.length + 1)), bc.test(d) && (d = d.slice(1, -1), l = !0)), Ia(e, i, a, o, d, l, s, t[n]);
		}
	} else Pa(e, i, JSON.stringify(o), t[n]), !e.component && i === "muted" && Fc(e.tag, e.attrsMap.type, i) && Na(e, i, "true", t[n]);
}
function nl(e) {
	for (var t = e; t;) {
		if (t.for !== void 0) return !0;
		t = t.parent;
	}
	return !1;
}
function rl(e) {
	var t = e.match(Cc);
	if (t) {
		var n = {};
		return t.forEach(function(e) {
			n[e.slice(1)] = !0;
		}), n;
	}
}
function il(e) {
	for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
	return t;
}
function al(e) {
	return e.tag === "script" || e.tag === "style";
}
function ol(e) {
	return e.tag === "style" || e.tag === "script" && (!e.attrsMap.type || e.attrsMap.type === "text/javascript");
}
var sl = /^xmlns:NS\d+/, cl = /^NS\d+:/;
/* istanbul ignore next */
function ll(e) {
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		sl.test(r.name) || (r.name = r.name.replace(cl, ""), t.push(r));
	}
	return t;
}
function ul(e, t) {
	if (e.tag === "input") {
		var n = e.attrsMap;
		if (!n["v-model"]) return;
		var r = void 0;
		if ((n[":type"] || n["v-bind:type"]) && (r = Ba(e, "type")), !n.type && !r && n["v-bind"] && (r = `(${n["v-bind"]}).type`), r) {
			var i = $(e, "v-if", !0), a = i ? `&&(${i})` : "", o = $(e, "v-else", !0) != null, s = $(e, "v-else-if", !0), c = dl(e);
			Wc(c), Fa(c, "type", "checkbox"), Vc(c, t), c.processed = !0, c.if = `(${r})==='checkbox'` + a, Yc(c, {
				exp: c.if,
				block: c
			});
			var l = dl(e);
			$(l, "v-for", !0), Fa(l, "type", "radio"), Vc(l, t), Yc(c, {
				exp: `(${r})==='radio'` + a,
				block: l
			});
			var u = dl(e);
			return $(u, "v-for", !0), Fa(u, ":type", r), Vc(u, t), Yc(c, {
				exp: i,
				block: u
			}), o ? c.else = !0 : s && (c.elseif = s), c;
		}
	}
}
function dl(e) {
	return Lc(e.tag, e.attrsList.slice(), e.parent);
}
var fl = [
	Vs,
	Ws,
	{ preTransformNode: ul }
];
function pl(e, t) {
	t.value && Na(e, "textContent", `_s(${t.value})`, t);
}
function ml(e, t) {
	t.value && Na(e, "innerHTML", `_s(${t.value})`, t);
}
var hl = {
	expectHTML: !0,
	modules: fl,
	directives: {
		model: ao,
		text: pl,
		html: ml
	},
	isPreTag: zi,
	isUnaryTag: qs,
	mustUseProp: bi,
	canBeLeftOpenTag: Js,
	isReservedTag: Bi,
	getTagNamespace: Vi,
	staticKeys: fe(fl)
}, gl, _l, vl = k(bl);
function yl(e, t) {
	e && (gl = vl(t.staticKeys || ""), _l = t.isReservedTag || ue, xl(e), Sl(e, !1));
}
function bl(e) {
	return w("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
}
function xl(e) {
	if (e.static = Cl(e), e.type === 1) {
		if (!_l(e.tag) && e.tag !== "slot" && e.attrsMap["inline-template"] == null) return;
		for (var t = 0, n = e.children.length; t < n; t++) {
			var r = e.children[t];
			xl(r), r.static || (e.static = !1);
		}
		if (e.ifConditions) for (var t = 1, n = e.ifConditions.length; t < n; t++) {
			var i = e.ifConditions[t].block;
			xl(i), i.static || (e.static = !1);
		}
	}
}
function Sl(e, t) {
	if (e.type === 1) {
		if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (e.children.length !== 1 || e.children[0].type !== 3)) {
			e.staticRoot = !0;
			return;
		}
		if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) Sl(e.children[n], t || !!e.for);
		if (e.ifConditions) for (var n = 1, r = e.ifConditions.length; n < r; n++) Sl(e.ifConditions[n].block, t);
	}
}
function Cl(e) {
	return e.type === 2 ? !1 : e.type === 3 || !(!e.pre && (e.hasBindings || e.if || e.for || T(e.tag) || !_l(e.tag) || wl(e) || !Object.keys(e).every(gl)));
}
function wl(e) {
	for (; e.parent;) {
		if (e = e.parent, e.tag !== "template") return !1;
		if (e.for) return !0;
	}
	return !1;
}
var Tl = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, El = /\([^)]*?\);*$/, Dl = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/, Ol = {
	esc: 27,
	tab: 9,
	enter: 13,
	space: 32,
	up: 38,
	left: 37,
	right: 39,
	down: 40,
	delete: [8, 46]
}, kl = {
	esc: ["Esc", "Escape"],
	tab: "Tab",
	enter: "Enter",
	space: [" ", "Spacebar"],
	up: ["Up", "ArrowUp"],
	left: ["Left", "ArrowLeft"],
	right: ["Right", "ArrowRight"],
	down: ["Down", "ArrowDown"],
	delete: [
		"Backspace",
		"Delete",
		"Del"
	]
}, Al = function(e) {
	return `if(${e})return null;`;
}, jl = {
	stop: "$event.stopPropagation();",
	prevent: "$event.preventDefault();",
	self: Al("$event.target !== $event.currentTarget"),
	ctrl: Al("!$event.ctrlKey"),
	shift: Al("!$event.shiftKey"),
	alt: Al("!$event.altKey"),
	meta: Al("!$event.metaKey"),
	left: Al("'button' in $event && $event.button !== 0"),
	middle: Al("'button' in $event && $event.button !== 1"),
	right: Al("'button' in $event && $event.button !== 2")
};
function Ml(e, t) {
	var n = t ? "nativeOn:" : "on:", r = "", i = "";
	for (var a in e) {
		var o = Nl(e[a]);
		e[a] && e[a].dynamic ? i += `${a},${o},` : r += `"${a}":${o},`;
	}
	return r = `{${r.slice(0, -1)}}`, i ? n + `_d(${r},[${i.slice(0, -1)}])` : n + r;
}
function Nl(e) {
	if (!e) return "function(){}";
	if (Array.isArray(e)) return `[${e.map(function(e) {
		return Nl(e);
	}).join(",")}]`;
	var t = Dl.test(e.value), n = Tl.test(e.value), r = Dl.test(e.value.replace(El, ""));
	if (e.modifiers) {
		var i = "", a = "", o = [], s = function(t) {
			if (jl[t]) a += jl[t], Ol[t] && o.push(t);
			else if (t === "exact") {
				var n = e.modifiers;
				a += Al([
					"ctrl",
					"shift",
					"alt",
					"meta"
				].filter(function(e) {
					return !n[e];
				}).map(function(e) {
					return `\$event.${e}Key`;
				}).join("||"));
			} else o.push(t);
		};
		for (var c in e.modifiers) s(c);
		o.length && (i += Pl(o)), a && (i += a);
		var l = t ? `return ${e.value}.apply(null, arguments)` : n ? `return (${e.value}).apply(null, arguments)` : r ? `return ${e.value}` : e.value;
		return `function(\$event){${i}${l}}`;
	}
	return t || n ? e.value : `function(\$event){${r ? `return ${e.value}` : e.value}}`;
}
function Pl(e) {
	return `if(!\$event.type.indexOf('key')&&${e.map(Fl).join("&&")})return null;`;
}
function Fl(e) {
	var t = parseInt(e, 10);
	if (t) return `\$event.keyCode!==${t}`;
	var n = Ol[e], r = kl[e];
	return `_k(\$event.keyCode,${JSON.stringify(e)},${JSON.stringify(n)},\$event.key,${JSON.stringify(r)})`;
}
function Il(e, t) {
	e.wrapListeners = function(e) {
		return `_g(${e},${t.value})`;
	};
}
function Ll(e, t) {
	e.wrapData = function(n) {
		return `_b(${n},'${e.tag}',${t.value},${t.modifiers && t.modifiers.prop ? "true" : "false"}${t.modifiers && t.modifiers.sync ? ",true" : ""})`;
	};
}
var Rl = {
	on: Il,
	bind: Ll,
	cloak: P
}, zl = function() {
	function e(e) {
		this.options = e, this.warn = e.warn || ja, this.transforms = Ma(e.modules, "transformCode"), this.dataGenFns = Ma(e.modules, "genData"), this.directives = N(N({}, Rl), e.directives);
		var t = e.isReservedTag || ue;
		this.maybeComponent = function(e) {
			return !!e.component || !t(e.tag);
		}, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
	}
	return e;
}();
function Bl(e, t) {
	var n = new zl(t);
	return {
		render: `with(this){return ${e ? e.tag === "script" ? "null" : Vl(e, n) : "_c(\"div\")"}}`,
		staticRenderFns: n.staticRenderFns
	};
}
function Vl(e, t) {
	if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ul(e, t);
	if (e.once && !e.onceProcessed) return Wl(e, t);
	if (e.for && !e.forProcessed) return ql(e, t);
	if (e.if && !e.ifProcessed) return Gl(e, t);
	if (e.tag === "template" && !e.slotTarget && !t.pre) return tu(e, t) || "void 0";
	if (e.tag === "slot") return su(e, t);
	var n = void 0;
	if (e.component) n = cu(e.component, e, t);
	else {
		var r = void 0, i = t.maybeComponent(e);
		(!e.plain || e.pre && i) && (r = Jl(e, t));
		var a = void 0, o = t.options.bindings;
		i && o && o.__isScriptSetup !== !1 && (a = Hl(o, e.tag)), a ||= `'${e.tag}'`;
		var s = e.inlineTemplate ? null : tu(e, t, !0);
		n = `_c(${a}${r ? `,${r}` : ""}${s ? `,${s}` : ""})`;
	}
	for (var c = 0; c < t.transforms.length; c++) n = t.transforms[c](e, n);
	return n;
}
function Hl(e, t) {
	var n = j(t), r = re(n), i = function(i) {
		if (e[t] === i) return t;
		if (e[n] === i) return n;
		if (e[r] === i) return r;
	}, a = i("setup-const") || i("setup-reactive-const");
	if (a) return a;
	var o = i("setup-let") || i("setup-ref") || i("setup-maybe-ref");
	if (o) return o;
}
function Ul(e, t) {
	e.staticProcessed = !0;
	var n = t.pre;
	return e.pre && (t.pre = e.pre), t.staticRenderFns.push(`with(this){return ${Vl(e, t)}}`), t.pre = n, `_m(${t.staticRenderFns.length - 1}${e.staticInFor ? ",true" : ""})`;
}
function Wl(e, t) {
	if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Gl(e, t);
	if (e.staticInFor) {
		for (var n = "", r = e.parent; r;) {
			if (r.for) {
				n = r.key;
				break;
			}
			r = r.parent;
		}
		return n ? `_o(${Vl(e, t)},${t.onceId++},${n})` : Vl(e, t);
	}
	return Ul(e, t);
}
function Gl(e, t, n, r) {
	return e.ifProcessed = !0, Kl(e.ifConditions.slice(), t, n, r);
}
function Kl(e, t, n, r) {
	if (!e.length) return r || "_e()";
	var i = e.shift();
	return i.exp ? `(${i.exp})?${a(i.block)}:${Kl(e, t, n, r)}` : `${a(i.block)}`;
	function a(e) {
		return n ? n(e, t) : e.once ? Wl(e, t) : Vl(e, t);
	}
}
function ql(e, t, n, r) {
	var i = e.for, a = e.alias, o = e.iterator1 ? `,${e.iterator1}` : "", s = e.iterator2 ? `,${e.iterator2}` : "";
	return e.forProcessed = !0, `${r || "_l"}((${i}),function(${a}${o}${s}){return ${(n || Vl)(e, t)}})`;
}
function Jl(e, t) {
	var n = "{", r = Yl(e, t);
	r && (n += r + ","), e.key && (n += `key:${e.key},`), e.ref && (n += `ref:${e.ref},`), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += `tag:"${e.tag}",`);
	for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
	if (e.attrs && (n += `attrs:${lu(e.attrs)},`), e.props && (n += `domProps:${lu(e.props)},`), e.events && (n += `${Ml(e.events, !1)},`), e.nativeEvents && (n += `${Ml(e.nativeEvents, !0)},`), e.slotTarget && !e.slotScope && (n += `slot:${e.slotTarget},`), e.scopedSlots && (n += `${Zl(e, e.scopedSlots, t)},`), e.model && (n += `model:{value:${e.model.value},callback:${e.model.callback},expression:${e.model.expression}},`), e.inlineTemplate) {
		var a = Xl(e, t);
		a && (n += `${a},`);
	}
	return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = `_b(${n},"${e.tag}",${lu(e.dynamicAttrs)})`), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
}
function Yl(e, t) {
	var n = e.directives;
	if (n) {
		for (var r = "directives:[", i = !1, a = 0, o = n.length, s, c; a < o; a++) {
			s = n[a], c = !0;
			var l = t.directives[s.name];
			l && (c = !!l(e, s, t.warn)), c && (i = !0, r += `{name:"${s.name}",rawName:"${s.rawName}"${s.value ? `,value:(${s.value}),expression:${JSON.stringify(s.value)}` : ""}${s.arg ? `,arg:${s.isDynamicArg ? s.arg : `"${s.arg}"`}` : ""}${s.modifiers ? `,modifiers:${JSON.stringify(s.modifiers)}` : ""}},`);
		}
		if (i) return r.slice(0, -1) + "]";
	}
}
function Xl(e, t) {
	var n = e.children[0];
	if (n && n.type === 1) {
		var r = Bl(n, t.options);
		return `inlineTemplate:{render:function(){${r.render}},staticRenderFns:[${r.staticRenderFns.map(function(e) {
			return `function(){${e}}`;
		}).join(",")}]}`;
	}
}
function Zl(e, t, n) {
	var r = e.for || Object.keys(t).some(function(e) {
		var n = t[e];
		return n.slotTargetDynamic || n.if || n.for || $l(n);
	}), i = !!e.if;
	if (!r) for (var a = e.parent; a;) {
		if (a.slotScope && a.slotScope !== Oc || a.for) {
			r = !0;
			break;
		}
		a.if && (i = !0), a = a.parent;
	}
	var o = Object.keys(t).map(function(e) {
		return eu(t[e], n);
	}).join(",");
	return `scopedSlots:_u([${o}]${r ? ",null,true" : ""}${!r && i ? `,null,false,${Ql(o)}` : ""})`;
}
function Ql(e) {
	for (var t = 5381, n = e.length; n;) t = t * 33 ^ e.charCodeAt(--n);
	return t >>> 0;
}
function $l(e) {
	return e.type === 1 ? e.tag === "slot" || e.children.some($l) : !1;
}
function eu(e, t) {
	var n = e.attrsMap["slot-scope"];
	if (e.if && !e.ifProcessed && !n) return Gl(e, t, eu, "null");
	if (e.for && !e.forProcessed) return ql(e, t, eu);
	var r = e.slotScope === Oc ? "" : String(e.slotScope), i = `function(${r}){return ${e.tag === "template" ? e.if && n ? `(${e.if})?${tu(e, t) || "undefined"}:undefined` : tu(e, t) || "undefined" : Vl(e, t)}}`, a = r ? "" : ",proxy:true";
	return `{key:${e.slotTarget || "\"default\""},fn:${i}${a}}`;
}
function tu(e, t, n, r, i) {
	var a = e.children;
	if (a.length) {
		var o = a[0];
		if (a.length === 1 && o.for && o.tag !== "template" && o.tag !== "slot") {
			var s = n ? t.maybeComponent(o) ? ",1" : ",0" : "";
			return `${(r || Vl)(o, t)}${s}`;
		}
		var c = n ? nu(a, t.maybeComponent) : 0, l = i || iu;
		return `[${a.map(function(e) {
			return l(e, t);
		}).join(",")}]${c ? `,${c}` : ""}`;
	}
}
function nu(e, t) {
	for (var n = 0, r = 0; r < e.length; r++) {
		var i = e[r];
		if (i.type === 1) {
			if (ru(i) || i.ifConditions && i.ifConditions.some(function(e) {
				return ru(e.block);
			})) {
				n = 2;
				break;
			}
			(t(i) || i.ifConditions && i.ifConditions.some(function(e) {
				return t(e.block);
			})) && (n = 1);
		}
	}
	return n;
}
function ru(e) {
	return e.for !== void 0 || e.tag === "template" || e.tag === "slot";
}
function iu(e, t) {
	return e.type === 1 ? Vl(e, t) : e.type === 3 && e.isComment ? ou(e) : au(e);
}
function au(e) {
	return `_v(${e.type === 2 ? e.expression : uu(JSON.stringify(e.text))})`;
}
function ou(e) {
	return `_e(${JSON.stringify(e.text)})`;
}
function su(e, t) {
	var n = e.slotName || "\"default\"", r = tu(e, t), i = `_t(${n}${r ? `,function(){return ${r}}` : ""}`, a = e.attrs || e.dynamicAttrs ? lu((e.attrs || []).concat(e.dynamicAttrs || []).map(function(e) {
		return {
			name: j(e.name),
			value: e.value,
			dynamic: e.dynamic
		};
	})) : null, o = e.attrsMap["v-bind"];
	return (a || o) && !r && (i += ",null"), a && (i += `,${a}`), o && (i += `${a ? "" : ",null"},${o}`), i + ")";
}
function cu(e, t, n) {
	var r = t.inlineTemplate ? null : tu(t, n, !0);
	return `_c(${e},${Jl(t, n)}${r ? `,${r}` : ""})`;
}
function lu(e) {
	for (var t = "", n = "", r = 0; r < e.length; r++) {
		var i = e[r], a = uu(i.value);
		i.dynamic ? n += `${i.name},${a},` : t += `"${i.name}":${a},`;
	}
	return t = `{${t.slice(0, -1)}}`, n ? `_d(${t},[${n.slice(0, -1)}])` : t;
}
function uu(e) {
	return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
function du(e, t) {
	try {
		return Function(e);
	} catch (n) {
		return t.push({
			err: n,
			code: e
		}), P;
	}
}
function fu(e) {
	var t = Object.create(null);
	return function(n, r, i) {
		r = N({}, r), r.warn, delete r.warn;
		var a = r.delimiters ? String(r.delimiters) + n : n;
		if (t[a]) return t[a];
		var o = e(n, r), s = {}, c = [];
		return s.render = du(o.render, c), s.staticRenderFns = o.staticRenderFns.map(function(e) {
			return du(e, c);
		}), t[a] = s;
	};
}
function pu(e) {
	return function(t) {
		function n(n, r) {
			var i = Object.create(t), a = [], o = [], s = function(e, t, n) {
				(n ? o : a).push(e);
			};
			if (r) for (var c in r.modules && (i.modules = (t.modules || []).concat(r.modules)), r.directives && (i.directives = N(Object.create(t.directives || null), r.directives)), r) c !== "modules" && c !== "directives" && (i[c] = r[c]);
			i.warn = s;
			var l = e(n.trim(), i);
			return l.errors = a, l.tips = o, l;
		}
		return {
			compile: n,
			compileToFunctions: fu(n)
		};
	};
}
var mu = pu(function(e, t) {
	var n = Rc(e.trim(), t);
	t.optimize !== !1 && yl(n, t);
	var r = Bl(n, t);
	return {
		ast: n,
		render: r.render,
		staticRenderFns: r.staticRenderFns
	};
})(hl).compileToFunctions, hu;
function gu(e) {
	return hu ||= document.createElement("div"), hu.innerHTML = e ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>", hu.innerHTML.indexOf("&#10;") > 0;
}
var _u = L ? gu(!1) : !1, vu = L ? gu(!0) : !1, yu = k(function(e) {
	var t = Gi(e);
	return t && t.innerHTML;
}), bu = Q.prototype.$mount;
Q.prototype.$mount = function(e, t) {
	/* istanbul ignore if */
	if (e &&= Gi(e), e === document.body || e === document.documentElement) return this;
	var n = this.$options;
	if (!n.render) {
		var r = n.template;
		if (r) {
			if (typeof r == "string") r.charAt(0) === "#" && (r = yu(r));
			else if (r.nodeType) r = r.innerHTML;
			else return this;
		} else e && (r = xu(e));
		if (r) {
			var i = mu(r, {
				outputSourceRange: !1,
				shouldDecodeNewlines: _u,
				shouldDecodeNewlinesForHref: vu,
				delimiters: n.delimiters,
				comments: n.comments
			}, this), a = i.render, o = i.staticRenderFns;
			n.render = a, n.staticRenderFns = o;
		}
	}
	return bu.call(this, e, t);
};
function xu(e) {
	if (e.outerHTML) return e.outerHTML;
	var t = document.createElement("div");
	return t.appendChild(e.cloneNode(!0)), t.innerHTML;
}
Q.compile = mu;
//#endregion
//#region packages/core/src/toolbar.ts
var Su = 0;
function Cu() {
	let e, t = "", n = [], r = [];
	function i() {
		for (let e of r.splice(0)) e();
		e = void 0, t = "", n = [];
	}
	function a(a, o) {
		let s = a?.toolbar, c = ["toolbar", "toolbar-append"].map((e) => +o(e)).join("");
		if (s === e && t === c || (i(), e = s, t = c, !e)) return n;
		let l = e.querySelector("ul");
		if (!l) return n;
		function u(e, t) {
			let i = e === "toolbar-append" && t.tagName === "UL", a = document.createElement(i ? "li" : "span");
			a.className = `v-viewer-${e}-slot`, a.style.cssText = "display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;gap:4px;color:#fff;font-size:14px;line-height:1.4", i && (a.style.cssText += ";width:auto;height:auto;overflow:visible;background:none;border-radius:0;float:left;margin:0 0 0 4px;padding:0"), t.appendChild(a);
			let o = (e) => e.stopPropagation(), s = (e) => {
				let t = e.target;
				(e.key === "Enter" || e.key === " " || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) && e.stopPropagation();
			};
			a.addEventListener("click", o), a.addEventListener("keydown", s);
			for (let e of [
				"pointerdown",
				"mousedown",
				"touchstart",
				"dblclick"
			]) a.addEventListener(e, o);
			r.push(() => {
				a.removeEventListener("click", o), a.removeEventListener("keydown", s);
				for (let e of [
					"pointerdown",
					"mousedown",
					"touchstart",
					"dblclick"
				]) a.removeEventListener(e, o);
				a.remove();
			}), n.push({
				key: ++Su,
				slot: e,
				target: a
			});
		}
		if (o("toolbar")) {
			let t = l.style.display;
			l.style.display = "none", r.push(() => {
				l.style.display = t;
			}), u("toolbar", e);
		}
		if (o("toolbar-append") && u("toolbar-append", o("toolbar") ? e : l), n.length && typeof ResizeObserver < "u") {
			let t = -1, n = -1, i = new ResizeObserver(() => {
				!e || e.offsetWidth === t && e.offsetHeight === n || (t = e.offsetWidth, n = e.offsetHeight, a.resize?.());
			});
			i.observe(e), r.push(() => i.disconnect());
		}
		return n;
	}
	return {
		sync: a,
		clear: i
	};
}
function wu(e) {
	let t = e;
	return {
		image: t?.viewed ? t.image : void 0,
		index: t?.index ?? 0
	};
}
//#endregion
//#region packages/core/src/component.ts
var Tu = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t, n) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.Viewer = r());
	})(n, (function() {
		function e(e, t) {
			if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
		}
		function t(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, s(r.key), r);
			}
		}
		function n(e, n, r) {
			return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
		}
		function r(e, t, n) {
			return (t = s(t)) in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e;
		}
		function i(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})), n.push.apply(n, r);
			}
			return n;
		}
		function a(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t] == null ? {} : arguments[t];
				t % 2 ? i(Object(n), !0).forEach(function(t) {
					r(e, t, n[t]);
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
				});
			}
			return e;
		}
		function o(e, t) {
			if (typeof e != "object" || !e) return e;
			var n = e[Symbol.toPrimitive];
			if (n !== void 0) {
				var r = n.call(e, t || "default");
				if (typeof r != "object") return r;
				throw TypeError("@@toPrimitive must return a primitive value.");
			}
			return (t === "string" ? String : Number)(e);
		}
		function s(e) {
			var t = o(e, "string");
			return typeof t == "symbol" ? t : t + "";
		}
		function c(e) {
			"@babel/helpers - typeof";
			return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, c(e);
		}
		var l = {
			backdrop: !0,
			button: !0,
			navbar: !0,
			navigation: !1,
			title: !0,
			toolbar: !0,
			className: "",
			container: "body",
			filter: null,
			fullscreen: !0,
			inheritedAttributes: [
				"crossOrigin",
				"decoding",
				"isMap",
				"loading",
				"referrerPolicy",
				"sizes",
				"srcset",
				"useMap"
			],
			initialCoverage: .9,
			initialViewIndex: 0,
			inline: !1,
			autoplay: !0,
			interval: 5e3,
			keyboard: !0,
			focus: !0,
			loading: !0,
			loop: !0,
			preload: !0,
			minWidth: 200,
			minHeight: 100,
			movable: !0,
			magnifier: !1,
			rotatable: !0,
			rotateOnGesture: !0,
			rotateOnTouch: !0,
			scalable: !0,
			zoomable: !0,
			zoomOnTouch: !0,
			zoomOnGesture: !0,
			zoomOnWheel: !0,
			slideOnTouch: !0,
			slideOnWheel: !0,
			toggleOnDblclick: !0,
			tooltip: !0,
			transition: !0,
			zIndex: 2015,
			zIndexInline: 0,
			zoomRatio: .1,
			minZoomRatio: .01,
			maxZoomRatio: 100,
			url: "src",
			ready: null,
			show: null,
			shown: null,
			hide: null,
			hidden: null,
			view: null,
			viewed: null,
			move: null,
			moved: null,
			rotate: null,
			rotated: null,
			scale: null,
			scaled: null,
			zoom: null,
			zoomed: null,
			play: null,
			playing: null,
			stop: null
		}, u = "<div class=\"viewer-container\" tabindex=\"-1\" touch-action=\"none\"><div class=\"viewer-canvas\"></div><div class=\"viewer-magnifier\" aria-hidden=\"true\"><img class=\"viewer-magnifier-image\" alt=\"\"></div><div class=\"viewer-navigation\" aria-hidden=\"true\"><div class=\"viewer-prev\" data-viewer-action=\"prev\" role=\"button\" aria-label=\"Previous\"></div><div class=\"viewer-next\" data-viewer-action=\"next\" role=\"button\" aria-label=\"Next\"></div></div><div class=\"viewer-title\" aria-hidden=\"true\"></div><div class=\"viewer-toolbar\" aria-hidden=\"true\"></div><div class=\"viewer-navbar\" aria-hidden=\"true\"><ul class=\"viewer-list\" role=\"navigation\"></ul></div><div class=\"viewer-tooltip\" role=\"alert\" aria-hidden=\"true\"></div><div class=\"viewer-button\" data-viewer-action=\"mix\" role=\"button\" aria-hidden=\"true\"></div><div class=\"viewer-player\" aria-hidden=\"true\"></div></div>", d = typeof window < "u" && window.document !== void 0, f = d ? window : {}, p = d && f.document.documentElement ? "ontouchstart" in f.document.documentElement : !1, m = d ? "PointerEvent" in f : !1, h = "viewer", g = "move", _ = "rotate", v = "switch", y = "transform", b = "zoom", x = `${h}-active`, S = `${h}-close`, ee = `${h}-fade`, C = `${h}-fixed`, te = `${h}-fullscreen`, w = `${h}-fullscreen-exit`, T = `${h}-hide`, E = `${h}-hide-md-down`, D = `${h}-hide-sm-down`, ne = `${h}-hide-xs-down`, O = `${h}-in`, k = `${h}-invisible`, A = `${h}-loading`, j = `${h}-move`, re = `${h}-open`, ie = `${h}-show`, M = `${h}-transition`, ae = "click", oe = "dblclick", se = "dragstart", ce = "focusin", N = "keydown", le = "load", P = "error", ue = p ? "touchend touchcancel" : "mouseup", de = p ? "touchmove" : "mousemove", fe = m ? "pointerdown" : p ? "touchstart" : "mousedown", pe = m ? "pointerenter" : "mouseenter", me = m ? "pointerleave" : "mouseleave", he = m ? "pointermove" : de, ge = m ? "pointerup pointercancel" : ue, _e = "resize", F = "transitionend", ve = "wheel", I = "gesturestart gesturechange gestureend", ye = "ready", be = "show", xe = "shown", Se = "hide", Ce = "hidden", we = "view", L = "viewed", R = "move", Te = "moved", Ee = "rotate", De = "rotated", Oe = "scale", ke = "scaled", Ae = "zoom", je = "zoomed", Me = "play", Ne = "playing", Pe = "stop", Fe = `${h}Action`, Ie = /\s+/, Le = [
			"zoom-in",
			"zoom-out",
			"one-to-one",
			"reset",
			"prev",
			"play",
			"next",
			"rotate-left",
			"rotate-right",
			"flip-horizontal",
			"flip-vertical"
		];
		function Re(e) {
			return typeof e == "string";
		}
		var ze = {
			ctrl: "ctrlKey",
			shift: "shiftKey",
			alt: "altKey",
			meta: "metaKey"
		};
		function Be(e, t) {
			return e ? e === !0 || Re(e) && e.split("+").every(function(e) {
				return t[ze[e.trim().toLowerCase()]];
			}) : !1;
		}
		var Ve = Number.isNaN || f.isNaN;
		function z(e) {
			return typeof e == "number" && !Ve(e);
		}
		function B(e) {
			return e === void 0;
		}
		function He(e) {
			return c(e) === "object" && e !== null;
		}
		var Ue = Object.prototype.hasOwnProperty;
		function V(e) {
			if (!He(e)) return !1;
			try {
				var t = e.constructor, n = t.prototype;
				return t && n && Ue.call(n, "isPrototypeOf");
			} catch {
				return !1;
			}
		}
		function H(e) {
			return typeof e == "function";
		}
		function U(e, t) {
			if (e && H(t)) {
				if (Array.isArray(e) || z(e.length)) for (var n = e.length, r = 0; r < n && t.call(e, e[r], r, e) !== !1; r += 1);
				else He(e) && Object.keys(e).forEach(function(n) {
					t.call(e, e[n], n, e);
				});
			}
			return e;
		}
		function We(e, t, n) {
			U(n, function(n) {
				var r = t.getAttribute(n);
				r !== null && e.setAttribute(n, r);
			});
		}
		function W(e, t) {
			var n = e.transition;
			return n && n[t] !== !1;
		}
		var G = Object.assign || function(e) {
			var t = [...arguments].slice(1);
			return He(e) && t.length > 0 && t.forEach(function(t) {
				He(t) && Object.keys(t).forEach(function(n) {
					e[n] = t[n];
				});
			}), e;
		}, Ge = /^(?:width|height|left|top|marginLeft|marginTop)$/;
		function K(e, t) {
			var n = e.style;
			U(t, function(e, t) {
				Ge.test(t) && z(e) && (e += "px"), n[t] = e;
			});
		}
		function Ke(e) {
			return Re(e) ? e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : e;
		}
		function qe(e, t) {
			return !e || !t ? !1 : e.classList ? e.classList.contains(t) : e.className.split(Ie).indexOf(t) > -1;
		}
		function q(e, t) {
			if (e && t) {
				if (z(e.length)) U(e, function(e) {
					q(e, t);
				});
				else if (e.classList) e.classList.add(t);
				else {
					var n = e.className.trim();
					n ? n.indexOf(t) < 0 && (e.className = `${n} ${t}`) : e.className = t;
				}
			}
		}
		function J(e, t) {
			if (e && t) {
				if (z(e.length)) U(e, function(e) {
					J(e, t);
				});
				else if (e.classList) e.classList.remove(t);
				else {
					var n = e.className;
					n && n.indexOf(t) >= 0 && (e.className = n.split(Ie).filter(function(e) {
						return e && e !== t;
					}).join(" "));
				}
			}
		}
		function Je(e, t, n) {
			t && (z(e.length) ? U(e, function(e) {
				Je(e, t, n);
			}) : n ? q(e, t) : J(e, t));
		}
		var Ye = /([a-z\d])([A-Z])/g;
		function Xe(e) {
			return e.replace(Ye, "$1-$2").toLowerCase();
		}
		function Ze(e, t) {
			return He(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute(`data-${Xe(t)}`);
		}
		function Qe(e, t, n) {
			He(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute(`data-${Xe(t)}`, n);
		}
		var $e = function() {
			var e = !1;
			if (d) {
				var t = !1, n = function() {}, r = Object.defineProperty({}, "once", {
					get: function() {
						return e = !0, t;
					},
					set: function(e) {
						t = e;
					}
				});
				f.addEventListener("test", n, r), f.removeEventListener("test", n, r);
			}
			return e;
		}();
		function Y(e, t, n) {
			var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = n;
			t.trim().split(Ie).forEach(function(t) {
				if (!$e) {
					var a = e.listeners;
					a && a[t] && a[t][n] && (i = a[t][n], delete a[t][n], Object.keys(a[t]).length === 0 && delete a[t], Object.keys(a).length === 0 && delete e.listeners);
				}
				e.removeEventListener(t, i, r);
			});
		}
		function X(e, t, n) {
			var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = n;
			t.trim().split(Ie).forEach(function(t) {
				if (r.once && !$e) {
					var a = e.listeners, o = a === void 0 ? {} : a;
					i = function() {
						delete o[t][n], e.removeEventListener(t, i, r);
						var a = [...arguments];
						n.apply(e, a);
					}, o[t] || (o[t] = {}), o[t][n] && e.removeEventListener(t, o[t][n], r), o[t][n] = i, e.listeners = o;
				}
				e.addEventListener(t, i, r);
			});
		}
		function Z(e, t, n, r) {
			var i;
			return H(Event) && H(CustomEvent) ? i = new CustomEvent(t, a({
				bubbles: !0,
				cancelable: !0,
				detail: n
			}, r)) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, n)), e.dispatchEvent(i);
		}
		function et(e) {
			var t = e.getBoundingClientRect();
			return {
				left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
				top: t.top + (window.pageYOffset - document.documentElement.clientTop)
			};
		}
		function tt(e) {
			var t = e.rotate, n = e.scaleX, r = e.scaleY, i = e.translateX, a = e.translateY, o = [];
			z(i) && i !== 0 && o.push(`translateX(${i}px)`), z(a) && a !== 0 && o.push(`translateY(${a}px)`), z(t) && t !== 0 && o.push(`rotate(${t}deg)`), z(n) && z(r) && (n !== 1 || r !== 1) && (o.push(`scaleX(${n})`), o.push(`scaleY(${r})`));
			var s = o.length ? o.join(" ") : "none";
			return {
				WebkitTransform: s,
				msTransform: s,
				transform: s
			};
		}
		function nt(e) {
			return Re(e) ? decodeURIComponent(e.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
		}
		var rt = f.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(f.navigator.userAgent);
		function it(e, t, n) {
			var r = document.createElement("img");
			if (e.naturalWidth && !rt) return n(e.naturalWidth, e.naturalHeight), r;
			var i = document.body || document.documentElement;
			return r.onload = function() {
				n(r.width, r.height), rt || i.removeChild(r);
			}, We(r, e, t.inheritedAttributes), r.src = e.src, rt || (r.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", i.appendChild(r)), r;
		}
		function at(e) {
			switch (e) {
				case 2: return ne;
				case 3: return D;
				case 4: return E;
				default: return "";
			}
		}
		function ot(e) {
			var t = a({}, e), n = [];
			return U(e, function(e, r) {
				delete t[r], U(t, function(t) {
					var r = Math.abs(e.startX - t.startX), i = Math.abs(e.startY - t.startY), a = Math.abs(e.endX - t.endX), o = Math.abs(e.endY - t.endY), s = Math.sqrt(r * r + i * i), c = (Math.sqrt(a * a + o * o) - s) / s;
					n.push(c);
				});
			}), n.sort(function(e, t) {
				return Math.abs(e) < Math.abs(t);
			}), n[0];
		}
		function st(e) {
			var t = a({}, e), n = [];
			return U(e, function(e, r) {
				delete t[r], U(t, function(t) {
					var r = Math.atan2(t.startY - e.startY, t.startX - e.startX), i = Math.atan2(t.endY - e.endY, t.endX - e.endX) - r;
					i > Math.PI ? i -= Math.PI * 2 : i < -Math.PI && (i += Math.PI * 2), n.push(i * 180 / Math.PI);
				});
			}), n.sort(function(e, t) {
				return Math.abs(t) - Math.abs(e);
			}), n[0] || 0;
		}
		function ct(e, t) {
			var n = e.pageX, r = e.pageY, i = {
				endX: n,
				endY: r
			};
			return t ? i : a({
				timeStamp: Date.now(),
				startX: n,
				startY: r
			}, i);
		}
		function lt(e) {
			var t = 0, n = 0, r = 0;
			return U(e, function(e) {
				var i = e.startX, a = e.startY;
				t += i, n += a, r += 1;
			}), t /= r, n /= r, {
				pageX: t,
				pageY: n
			};
		}
		var ut = {
			render: function() {
				this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
			},
			initBody: function() {
				var e = this.ownerDocument, t = e.body || e.documentElement;
				this.body = t, this.scrollbarWidth = window.innerWidth - e.documentElement.clientWidth, this.initialBodyPaddingRight = t.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(t).paddingRight;
			},
			initContainer: function() {
				this.containerData = {
					width: window.innerWidth,
					height: window.innerHeight
				};
			},
			initViewer: function() {
				var e = this.options, t = this.parent, n;
				e.inline && (n = {
					width: Math.max(t.offsetWidth, e.minWidth),
					height: Math.max(t.offsetHeight, e.minHeight)
				}, this.parentData = n), (this.fulled || !n) && (n = this.containerData), this.viewerData = G({}, n);
			},
			renderViewer: function() {
				this.options.inline && !this.fulled && K(this.viewer, this.viewerData);
			},
			initList: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.index, n = this.element, r = this.options, i = this.list, a = [], o = V(r.navbar) ? r.navbar : {}, s = document.createElement("li");
				this.containerData || this.initContainer(), i.appendChild(s);
				var c = this.isNavbarVertical ? s.offsetHeight + parseInt(window.getComputedStyle(s).marginTop, 10) : s.offsetWidth + parseInt(window.getComputedStyle(s).marginLeft, 10);
				i.removeChild(s);
				var l = z(o.visibleItemCount) ? Math.floor(o.visibleItemCount) : Math.floor((this.isNavbarVertical ? this.containerData.height : this.containerData.width) / c);
				l = Math.min(l, this.length);
				var u = l > 0 ? Math.min(Math.max(0, t - Math.floor(l / 2)), Math.max(0, this.length - l)) : 0, d = l > 0 ? Math.min(this.length, u + l) : this.length;
				if (i.innerHTML = "", U(this.images, function(t, n) {
					if (!(l > 0 && (n < u || n >= d))) {
						var o = t.src, s = t.alt || nt(o), c = e.getImageURL(t);
						if (o || c) {
							var f = document.createElement("li"), p = document.createElement("img");
							We(p, t, r.inheritedAttributes), r.navbar && (p.src = o || c), p.alt = s, p.setAttribute("data-original-url", c || o), f.setAttribute("data-index", n), f.setAttribute("data-viewer-action", "view"), f.setAttribute("role", "button"), r.keyboard && f.setAttribute("tabindex", 0), f.appendChild(p), i.appendChild(f), a.push(f);
						}
					}
				}), this.items = a, this.viewed) {
					var f = this.getItem(this.index);
					f && (q(f, x), f.setAttribute("aria-selected", !0));
				}
				U(a, function(t) {
					var n = t.firstElementChild, i, a;
					Qe(n, "filled", !0), r.loading && q(t, A), X(n, le, i = function(i) {
						Y(n, P, a), r.loading && J(t, A), e.loadImage(i);
					}, { once: !0 }), X(n, P, a = function() {
						Y(n, le, i), r.loading && J(t, A);
					}, { once: !0 });
				}), W(r, "view") && X(n, L, function() {
					q(i, M);
				}, { once: !0 });
			},
			getItem: function(e) {
				var t;
				return U(this.items, function(n) {
					return Number(Ze(n, "index")) !== e || (t = n, !1);
				}), t;
			},
			renderList: function() {
				var e = this.index, t = this.getItem(e);
				if (t) {
					var n = t.nextElementSibling, i = parseInt(window.getComputedStyle(n || t)[this.isNavbarVertical ? "marginTop" : "marginLeft"], 10), a = this.isNavbarVertical ? t.offsetHeight : t.offsetWidth, o = a + i;
					K(this.list, G(r({}, this.isNavbarVertical ? "height" : "width", o * this.items.length - i), tt(r({}, this.isNavbarVertical ? "translateY" : "translateX", ((this.isNavbarVertical ? this.viewerData.height : this.viewerData.width) - a) / 2 - (this.isNavbarVertical ? t.offsetTop : t.offsetLeft)))));
				}
			},
			resetList: function() {
				var e = this.list;
				e.innerHTML = "", J(e, M), K(e, G(r({}, this.isNavbarVertical ? "height" : "width", 0), tt(r({}, this.isNavbarVertical ? "translateY" : "translateX", 0))));
			},
			initImage: function(e) {
				var t = this, n = this.options, r = this.image, i = this.viewerData, a = this.title, o = this.toolbar, s = this.navbar, c = {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}, l = this.imageData || {}, u = a.offsetHeight, d;
				u && (c.bottom = i.height - a.offsetTop), U([o, s], function(e) {
					var t = e.offsetWidth, n = e.offsetHeight;
					(t || n) && [
						"top",
						"right",
						"bottom",
						"left"
					].some(function(r) {
						if (qe(e, `${h}-${e === o ? "toolbar" : "navbar"}-${r}`)) {
							var a = e.offsetLeft + t;
							return r === "top" ? a = e.offsetTop + n : r === "right" ? a = i.width - e.offsetLeft : r === "bottom" && (a = i.height - e.offsetTop), c[r] = Math.max(c[r], a), !0;
						}
						return !1;
					});
				});
				var f = Math.max(i.width - c.left - c.right, c.left, c.right), p = Math.max(i.height - c.top - c.bottom, c.top, c.bottom);
				this.imageInitializing = { abort: function() {
					d.onload = null;
				} }, d = it(r, n, function(r, i) {
					var a = r / i, o = Math.max(0, Math.min(1, n.initialCoverage)), s = f, u = p;
					t.imageInitializing = !1, p * a > f ? u = f / a : s = p * a, o = z(o) ? o : .9, s = Math.min(s * o, r), u = Math.min(u * o, i);
					var d = c.left + (f - s) / 2, m = c.top + (p - u) / 2, h = {
						left: d,
						top: m,
						x: d,
						y: m,
						width: s,
						height: u,
						oldRatio: 1,
						ratio: s / r,
						aspectRatio: a,
						naturalWidth: r,
						naturalHeight: i
					}, g = G({}, h);
					n.rotatable && (h.rotate = l.rotate || 0, g.rotate = 0), n.scalable && (h.scaleX = l.scaleX || 1, h.scaleY = l.scaleY || 1, g.scaleX = 1, g.scaleY = 1), t.imageData = h, t.initialImageData = g, e && e();
				});
			},
			renderImage: function(e) {
				var t = this, n = this.image, r = this.imageData;
				if (K(n, G({
					width: r.width,
					height: r.height,
					marginLeft: r.x,
					marginTop: r.y
				}, tt(r))), this.magnifierPoint && this.renderMagnifier(), e) {
					var i = !1;
					if (this.viewing ? i = "view" : this.moving ? i = "move" : this.rotating ? i = "rotate" : this.scaling ? i = "scale" : this.zooming && (i = "zoom"), i && W(this.options, i) && qe(n, M)) {
						var a = function() {
							t.imageRendering = !1, e();
						};
						this.imageRendering = { abort: function() {
							Y(n, F, a);
						} }, X(n, F, a, { once: !0 });
					} else e();
				}
			},
			resetImage: function() {
				var e = this.image;
				e && (this.viewing && this.viewing.abort(), e.parentNode.removeChild(e), this.image = null, this.title.innerHTML = "");
			}
		}, dt = {
			bind: function() {
				var e = this.options, t = this.viewer, n = this.canvas, r = this.ownerDocument;
				X(t, ae, this.onClick = this.click.bind(this)), X(t, se, this.onDragStart = this.dragstart.bind(this)), X(t, pe, this.onMagnifyEnter = this.magnify.bind(this)), X(t, he, this.onMagnify = this.magnify.bind(this)), X(t, me, this.onMagnifierLeave = this.hideMagnifier.bind(this)), X(n, fe, this.onPointerDown = this.pointerdown.bind(this)), X(r, he, this.onPointerMove = this.pointermove.bind(this)), X(r, ge, this.onPointerUp = this.pointerup.bind(this)), X(r, N, this.onKeyDown = this.keydown.bind(this)), X(window, _e, this.onResize = this.resize.bind(this)), (e.zoomable && e.zoomOnWheel || e.slideOnWheel) && X(t, ve, this.onWheel = this.wheel.bind(this), {
					passive: !1,
					capture: !0
				}), (e.zoomable && e.zoomOnGesture || e.rotatable && e.rotateOnGesture) && X(t, I, this.onGesture = this.gesture.bind(this), { passive: !1 }), e.toggleOnDblclick && X(n, oe, this.onDblclick = this.dblclick.bind(this));
			},
			unbind: function() {
				var e = this.options, t = this.viewer, n = this.canvas, r = this.ownerDocument;
				Y(t, ae, this.onClick), Y(t, se, this.onDragStart), Y(t, pe, this.onMagnifyEnter), Y(t, he, this.onMagnify), Y(t, me, this.onMagnifierLeave), Y(n, fe, this.onPointerDown), Y(r, he, this.onPointerMove), Y(r, ge, this.onPointerUp), Y(r, N, this.onKeyDown), Y(window, _e, this.onResize), (e.zoomable && e.zoomOnWheel || e.slideOnWheel) && Y(t, ve, this.onWheel, {
					passive: !1,
					capture: !0
				}), (e.zoomable && e.zoomOnGesture || e.rotatable && e.rotateOnGesture) && Y(t, I, this.onGesture, { passive: !1 }), e.toggleOnDblclick && Y(n, oe, this.onDblclick);
			}
		}, ft = {
			click: function(e) {
				var t = this.options, n = this.imageData, r = e.target, i = Ze(r, Fe);
				switch (!i && r.localName === "img" && r.parentElement.localName === "li" && (r = r.parentElement, i = Ze(r, Fe)), p && e.isTrusted && r === this.canvas && clearTimeout(this.clickCanvasTimeout), this.actionEvent = e, i) {
					case "mix":
						this.played ? this.stop() : t.inline ? this.fulled ? this.exit() : this.full() : this.hide();
						break;
					case "hide":
						this.pointerMoved || this.hide();
						break;
					case "view":
						this.view(Ze(r, "index"));
						break;
					case "zoom-in":
						this.zoom(.1, !0);
						break;
					case "zoom-out":
						this.zoom(-.1, !0);
						break;
					case "one-to-one":
						this.toggle();
						break;
					case "reset":
						this.reset();
						break;
					case "prev":
						this.prev(t.loop);
						break;
					case "play":
						this.play(t.fullscreen);
						break;
					case "next":
						this.next(t.loop);
						break;
					case "rotate-left":
						this.rotate(-90);
						break;
					case "rotate-right":
						this.rotate(90);
						break;
					case "flip-horizontal":
						this.scaleX(-n.scaleX || -1);
						break;
					case "flip-vertical":
						this.scaleY(-n.scaleY || -1);
						break;
					default: this.played && this.stop();
				}
			},
			dblclick: function(e) {
				e.preventDefault(), this.viewed && e.target === this.image && (p && e.isTrusted && clearTimeout(this.doubleClickImageTimeout), this.actionEvent = e.isTrusted ? e : e.detail && e.detail.originalEvent, this.toggle());
			},
			load: function() {
				var e = this;
				this.timeout &&= (clearTimeout(this.timeout), !1);
				var t = this.element, n = this.options, r = this.image, i = this.index, a = this.viewerData;
				J(r, k), n.loading && J(this.canvas, A), r.style.cssText = `height:0;margin-left:${a.width / 2}px;margin-top:${a.height / 2}px;max-width:none!important;position:relative;width:0;`, this.initImage(function() {
					Je(r, j, n.movable), Je(r, M, W(n, "view")), e.renderImage(function() {
						e.viewed = !0, e.viewing = !1, setTimeout(function() {
							Je(r, M, n.transition);
						}, 300), H(n.viewed) && X(t, L, n.viewed, { once: !0 }), Z(t, L, {
							originalImage: e.images[i],
							index: i,
							image: r,
							originalEvent: e.viewOriginalEvent || null
						}, { cancelable: !1 }), e.viewOriginalEvent = null;
					});
				});
			},
			loadImage: function(e) {
				var t = e.target, n = t.parentNode, r = n.offsetWidth || 30, i = n.offsetHeight || 50, a = !!Ze(t, "filled");
				it(t, this.options, function(e, n) {
					var o = e / n, s = r, c = i;
					i * o > r ? a ? s = i * o : c = r / o : a ? c = r / o : s = i * o, K(t, G({
						width: s,
						height: c
					}, tt({
						translateX: (r - s) / 2,
						translateY: (i - c) / 2
					})));
				});
			},
			keydown: function(e) {
				var t = this.options;
				if (t.keyboard) {
					var n = e.keyCode || e.which || e.charCode;
					if (this.actionEvent = e, n === 13 && this.viewer.contains(e.target) && this.click(e), this.fulled) switch (n) {
						case 27:
							this.played ? this.stop() : t.inline ? this.fulled && this.exit() : this.hide();
							break;
						case 32:
							this.played && this.stop();
							break;
						case 37:
							this.played && this.playing ? this.playing.prev() : this.prev(t.loop);
							break;
						case 38:
							e.preventDefault(), this.zoom(t.zoomRatio, !0);
							break;
						case 39:
							this.played && this.playing ? this.playing.next() : this.next(t.loop);
							break;
						case 40:
							e.preventDefault(), this.zoom(-t.zoomRatio, !0);
							break;
						case 48:
						case 49: e.ctrlKey && (e.preventDefault(), this.toggle());
					}
				}
			},
			dragstart: function(e) {
				e.target.localName === "img" && e.preventDefault();
			},
			magnify: function(e) {
				e.changedTouches || e.pointerType && e.pointerType !== "mouse" ? this.hideMagnifier() : (this.magnifierPoint = {
					clientX: e.clientX,
					clientY: e.clientY
				}, this.renderMagnifier());
			},
			renderMagnifier: function() {
				var e = this.options, t = this.imageData, n = this.magnifier, r = this.magnifierImage, i = this.viewer, a = V(e.magnifier) ? e.magnifier : {}, o = this.magnifierPoint;
				if (!e.magnifier || !this.fulled || !this.viewed || !n || !r || !o) this.hideMagnifier();
				else {
					var s = Math.max(1, Number(a.size) || 100), c = Math.max(1, Number(a.zoomRatio) || 2), l = Number(a.opacity), u = i.getBoundingClientRect(), d = o.clientX - u.left, f = o.clientY - u.top, p = this.image.currentSrc || this.image.src, m = this.image.getBoundingClientRect();
					if (o.clientX < m.left || o.clientX > m.right || o.clientY < m.top || o.clientY > m.bottom) this.hideMagnifier();
					else {
						var h = z(t.scaleX) ? t.scaleX : 1, g = z(t.scaleY) ? t.scaleY : 1, _ = (t.rotate || 0) * Math.PI / 180, v = Math.cos(_), y = Math.sin(_), b = v * h, x = y * h, S = -y * g, ee = v * g, C = h * g;
						if (C === 0) this.hideMagnifier();
						else {
							var te = t.x + t.width / 2, w = t.y + t.height / 2, T = (ee * (d - te) - S * (f - w)) / C, E = (-x * (d - te) + b * (f - w)) / C, D = T + t.width / 2, ne = E + t.height / 2, O = t.width * c, k = t.height * c, A = b * (D * c - O / 2) + S * (ne * c - k / 2), j = x * (D * c - O / 2) + ee * (ne * c - k / 2);
							this.magnifierSourcePoint = {
								x: D,
								y: ne
							}, n.style.width = `${s}px`, n.style.height = `${s}px`, n.style.opacity = `${Math.max(0, Math.min(1, z(l) ? l : 1))}`, r.src = p, r.style.width = `${O}px`, r.style.height = `${k}px`, r.style.left = `${s / 2 - O / 2 - A}px`, r.style.top = `${s / 2 - k / 2 - j}px`, r.style.transform = `rotate(${t.rotate || 0}deg) scaleX(${h}) scaleY(${g})`, n.removeAttribute("aria-hidden"), q(n, "viewer-show");
						}
					}
				}
			},
			hideMagnifier: function() {
				this.magnifier && (J(this.magnifier, "viewer-show"), this.magnifier.setAttribute("aria-hidden", !0), this.magnifierPoint = null);
			},
			pointerdown: function(e) {
				var t = this.options, n = this.pointers, r = this.imageData, i = e.buttons, a = e.button, o = Object.keys(n).length === 0;
				if (this.pointerMoved = !1, !(!this.viewed || this.showing || this.viewing || this.hiding || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && (z(i) && i !== 1 || z(a) && a !== 0 || e.ctrlKey))) {
					e.preventDefault(), e.changedTouches ? U(e.changedTouches, function(e) {
						n[e.identifier] = ct(e);
					}) : n[e.pointerId || 0] = ct(e);
					var s = t.movable ? g : !1;
					(t.zoomable && t.zoomOnTouch || t.rotatable && t.rotateOnTouch) && Object.keys(n).length > 1 ? s = y : t.slideOnTouch && (e.pointerType === "touch" || e.type === "touchstart") && this.isSwitchable() && (s = v), s && J(this.image, M), o && (this.rotateThreshold = r.rotate === 0), this.switching = s === v && {
						x: r.x,
						y: r.y
					}, this.action = s;
				}
			},
			pointermove: function(e) {
				var t = this.pointers, n = this.action;
				this.viewed && n && (e.preventDefault(), e.changedTouches ? U(e.changedTouches, function(e) {
					G(t[e.identifier] || {}, ct(e, !0));
				}) : G(t[e.pointerId || 0] || {}, ct(e, !0)), this.change(e), J(this.image, M));
			},
			pointerup: function(e) {
				var t = this, n = this.options, r = this.action, i = this.pointers, a = this.viewerData, o;
				if (e.changedTouches ? U(e.changedTouches, function(e) {
					o = i[e.identifier], delete i[e.identifier];
				}) : (o = i[e.pointerId || 0], delete i[e.pointerId || 0]), Object.keys(i).length === 0) {
					if (this.rotateThreshold) {
						var s = Math.round(this.imageData.rotate / 90) * 90;
						s !== this.imageData.rotate && (this.actionEvent = e, this.rotateTo(s));
					}
					this.rotateThreshold = !1;
				}
				if (r) {
					e.preventDefault();
					var c = r === y ? W(n, b) || W(n, _) : W(n, r);
					if (Je(this.image, M, c), r === v && this.switching) {
						var l = this.imageData, u = this.switching, d = l.x - u.x;
						this.switching = !1, this.actionEvent = e, Math.abs(d) > a.width / 2 ? d > 0 ? this.prev(n.loop) : this.next(n.loop) : (l.x !== u.x || l.y !== u.y) && this.moveTo(u.x, u.y);
					}
					this.action = !1, p && r !== b && r !== y && o && Date.now() - o.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), n.toggleOnDblclick && this.viewed && e.target === this.image ? this.pointerMoved ? this.imageClicked = !1 : this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout(function() {
						Z(t.image, oe, { originalEvent: e });
					}, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
						t.imageClicked = !1;
					}, 500)) : (this.imageClicked = !1, n.backdrop && n.backdrop !== "static" && e.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
						Z(t.canvas, ae, { originalEvent: e });
					}, 50))));
				}
			},
			resize: function() {
				var e = this;
				if (this.isShown && !this.hiding && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), B((V(this.options.navbar) ? this.options.navbar : {}).visibleItemCount) && this.initList(this.index), this.renderList(), this.viewed && this.initImage(function() {
					e.renderImage();
				}), this.played)) {
					if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
						this.stop();
						return;
					}
					U(this.player.getElementsByTagName("img"), function(t) {
						X(t, le, e.loadImage.bind(e), { once: !0 }), Z(t, le);
					});
				}
			},
			wheel: function(e) {
				var t = this, n = this.options, r = this.navbar;
				if (this.viewed && (e.preventDefault(), !this.gesturing && !this.wheeling)) {
					this.wheeling = !0, setTimeout(function() {
						t.wheeling = !1;
					}, 50);
					var i = 1;
					if (e.deltaY ? i = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? i = -e.wheelDelta / 120 : e.detail && (i = e.detail > 0 ? 1 : -1), !(r && r.contains(e.target)) && n.zoomable && Be(n.zoomOnWheel, e)) {
						var a = Number(n.zoomRatio) || .1;
						this.actionEvent = e, this.zoom(-i * a, !0);
					} else Be(n.slideOnWheel, e) && (this.actionEvent = e, i > 0 ? this.next(n.loop) : i < 0 && this.prev(n.loop));
				}
			},
			gesture: function(e) {
				var t = this.options;
				if (this.viewed && (t.zoomOnGesture || t.rotateOnGesture)) switch (e.preventDefault(), e.type) {
					case "gesturestart":
						this.gesturing = !0, this.gestureScale = e.scale || 1, this.gestureRotation = e.rotation || 0;
						break;
					case "gesturechange":
						var n = e.scale || 1, r = n / (this.gestureScale || 1), i = Number(e.rotation), a = i - (this.gestureRotation || 0);
						this.gestureScale = n, t.zoomable && t.zoomOnGesture && r !== 1 && (this.actionEvent = e, this.zoom(r >= 1 ? r - 1 : 1 - 1 / r)), t.rotatable && t.rotateOnGesture && z(i) && (this.gestureRotation = i, a !== 0 && (this.actionEvent = e, this.rotate(a)));
						break;
					case "gestureend":
						if (t.rotatable && t.rotateOnGesture) {
							var o = Math.round(this.imageData.rotate / 90) * 90;
							o !== this.imageData.rotate && (this.actionEvent = e, this.rotateTo(o));
						}
						this.gesturing = !1, this.gestureScale = 1, this.gestureRotation = 0;
				}
			}
		}, pt = {
			show: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], t = this.element, n = this.options;
				if (n.inline || this.showing || this.isShown || this.showing) return this;
				if (!this.ready) return this.build(), this.ready && this.show(e), this;
				var r = this.actionEvent || this.showOriginalEvent || this.viewOriginalEvent || null;
				if (this.actionEvent = null, this.showOriginalEvent = r, H(n.show) && X(t, be, n.show, { once: !0 }), Z(t, be, { originalEvent: r }) === !1 || !this.ready) return this;
				this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
				var i = this.viewer;
				if (J(i, T), i.setAttribute("role", "dialog"), i.setAttribute("aria-labelledby", this.title.id), i.setAttribute("aria-modal", !0), i.removeAttribute("aria-hidden"), W(n, "show") && !e) {
					var a = this.shown.bind(this);
					this.transitioning = { abort: function() {
						Y(i, F, a), J(i, O);
					} }, q(i, M), i.initialOffsetWidth = i.offsetWidth, X(i, F, a, { once: !0 }), q(i, O);
				} else q(i, O), this.shown();
				return this;
			},
			hide: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n = this.element, r = this.options;
				if (r.inline || this.hiding || !(this.isShown || this.showing)) return this;
				var i = this.actionEvent || this.hideOriginalEvent || null;
				if (this.actionEvent = null, this.hideOriginalEvent = i, H(r.hide) && X(n, Se, r.hide, { once: !0 }), Z(n, Se, { originalEvent: i }) === !1 || this.destroyed) return this;
				this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
				var a = this.viewer, o = this.image, s = function() {
					J(a, O), e.hidden();
				};
				if (W(r, "hide") && !t) {
					var c = function(t) {
						t && t.target === a && (Y(a, F, c), e.hidden());
					}, l = function() {
						qe(a, M) ? (X(a, F, c), J(a, O)) : s();
					};
					this.transitioning = { abort: function() {
						e.viewed && qe(o, M) ? Y(o, F, l) : qe(a, M) && Y(a, F, c);
					} }, this.viewed && qe(o, M) ? (X(o, F, l, { once: !0 }), this.zoomable = !0, this.zoomTo(0, !1)) : l();
				} else s();
				return this;
			},
			view: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex, n = this.index;
				if (t = Number(t) || 0, this.hiding || this.played || t < 0 || t >= this.length || this.viewed && t === n) return this;
				var r = this.actionEvent || this.viewOriginalEvent || null;
				if (this.actionEvent = null, this.viewOriginalEvent = r, !this.isShown) return this.index = t, this.show();
				this.viewing && this.viewing.abort();
				var i = this.element, a = this.options, o = this.title, s = this.canvas, c = this.getItem(t);
				c ||= (this.initList(t), this.getItem(t));
				var l = c.querySelector("img"), u = Ze(l, "originalUrl"), d = l.getAttribute("alt"), f = document.createElement("img");
				if (We(f, l, a.inheritedAttributes), f.src = u, f.alt = d, H(a.view) && X(i, we, a.view, { once: !0 }), Z(i, we, {
					originalImage: this.images[t],
					index: t,
					image: f,
					originalEvent: r
				}) === !1 || !this.isShown || this.hiding || this.played) return this;
				this.hideMagnifier();
				var p = this.getItem(n);
				p && (J(p, x), p.removeAttribute("aria-selected")), q(c, x), c.setAttribute("aria-selected", !0), a.focus && c.focus(), this.image = f, this.viewed = !1, this.index = t, this.imageData = {}, q(f, k), a.loading && q(s, A), s.innerHTML = "", s.appendChild(f), this.renderList(), o.innerHTML = "";
				var m = function() {
					var r = e.imageData, i = Array.isArray(a.title) ? a.title[1] : a.title;
					if (o.innerHTML = Ke(H(i) ? i.call(e, f, r) : `${d} (${r.naturalWidth} × ${r.naturalHeight})`), a.preload) {
						var s = t < n ? -1 : 1, c = t + s;
						if ((c < 0 || c >= e.length) && (c = a.loop ? s > 0 ? 0 : e.length - 1 : -1), c !== t) {
							var l = e.images[c], u = document.createElement("img");
							We(u, l, a.inheritedAttributes), u.src = e.getImageURL(l) || l.src;
						}
					}
				};
				X(i, L, m, { once: !0 });
				var h = function() {
					var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n, r, o = function() {
						Y(f, le, n), Y(f, P, r), e.timeout &&= (clearTimeout(e.timeout), !1);
					};
					e.viewing = { abort: function() {
						Y(i, L, m), f.complete ? e.imageRendering ? e.imageRendering.abort() : e.imageInitializing && e.imageInitializing.abort() : (f.src = "", o());
					} }, f.complete ? e.load() : (X(f, le, n = function() {
						o(), e.load();
					}, { once: !0 }), X(f, P, r = function() {
						if (o(), !t) {
							var n = l.src;
							if (n && n !== f.src) {
								f.src = n, h(!0);
								return;
							}
						}
						J(f, k), a.loading && J(e.canvas, A);
					}, { once: !0 }), e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(function() {
						J(f, k), e.timeout = !1;
					}, 1e3));
				};
				return h(), this;
			},
			prev: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], t = this.index - 1;
				return t < 0 && (t = e ? this.length - 1 : 0), this.view(t), this;
			},
			next: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], t = this.length - 1, n = this.index + 1;
				return n > t && (n = e ? 0 : t), this.view(n), this;
			},
			move: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, n = this.imageData;
				return this.moveTo(B(e) ? e : n.x + Number(e), B(t) ? t : n.y + Number(t)), this;
			},
			moveTo: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = this.element, i = this.options, a = this.imageData;
				if (e = Number(e), n = Number(n), this.viewed && !this.played && i.movable) {
					var o = a.x, s = a.y, c = !1;
					if (z(e) ? c = !0 : e = o, z(n) ? c = !0 : n = s, c) {
						var l = this.actionEvent || null;
						if (this.actionEvent = null, H(i.move) && X(r, R, i.move, { once: !0 }), Z(r, R, {
							x: e,
							y: n,
							oldX: o,
							oldY: s,
							originalEvent: l
						}) === !1) return this;
						a.x = e, a.y = n, a.left = e, a.top = n, Je(this.image, M, W(i, "move")), this.moving = !0, this.renderImage(function() {
							t.moving = !1, H(i.moved) && X(r, Te, i.moved, { once: !0 }), Z(r, Te, {
								x: e,
								y: n,
								oldX: o,
								oldY: s,
								originalEvent: l
							}, { cancelable: !1 });
						});
					}
				}
				return this;
			},
			rotate: function(e) {
				return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this;
			},
			rotateTo: function(e) {
				var t = this, n = this.element, r = this.options, i = this.imageData;
				if (e = Number(e), z(e) && this.viewed && !this.played && r.rotatable) {
					var a = i.rotate, o = this.actionEvent || null;
					if (this.actionEvent = null, H(r.rotate) && X(n, Ee, r.rotate, { once: !0 }), Z(n, Ee, {
						degree: e,
						oldDegree: a,
						originalEvent: o
					}) === !1) return this;
					i.rotate = e, Je(this.image, M, W(r, "rotate")), this.rotating = !0, this.renderImage(function() {
						t.rotating = !1, H(r.rotated) && X(n, De, r.rotated, { once: !0 }), Z(n, De, {
							degree: e,
							oldDegree: a,
							originalEvent: o
						}, { cancelable: !1 });
					});
				}
				return this;
			},
			scaleX: function(e) {
				return this.scale(e, this.imageData.scaleY), this;
			},
			scaleY: function(e) {
				return this.scale(this.imageData.scaleX, e), this;
			},
			scale: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = this.element, i = this.options, a = this.imageData;
				if (e = Number(e), n = Number(n), this.viewed && !this.played && i.scalable) {
					var o = a.scaleX, s = a.scaleY, c = !1;
					if (z(e) ? c = !0 : e = o, z(n) ? c = !0 : n = s, c) {
						var l = this.actionEvent || null;
						if (this.actionEvent = null, H(i.scale) && X(r, Oe, i.scale, { once: !0 }), Z(r, Oe, {
							scaleX: e,
							scaleY: n,
							oldScaleX: o,
							oldScaleY: s,
							originalEvent: l
						}) === !1) return this;
						a.scaleX = e, a.scaleY = n, Je(this.image, M, W(i, "scale")), this.scaling = !0, this.renderImage(function() {
							t.scaling = !1, H(i.scaled) && X(r, ke, i.scaled, { once: !0 }), Z(r, ke, {
								scaleX: e,
								scaleY: n,
								oldScaleX: o,
								oldScaleY: s,
								originalEvent: l
							}, { cancelable: !1 });
						});
					}
				}
				return this;
			},
			zoom: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = this.imageData;
				return e = Number(e), e = e < 0 ? 1 / (1 - e) : 1 + e, this.zoomTo(r.width * e / r.naturalWidth, t, n), this;
			},
			zoomTo: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = this.element, a = this.options, o = this.pointers, s = this.imageData, c = this.zoomable, l = s.x, u = s.y, d = s.width, f = s.height, p = s.naturalWidth, m = s.naturalHeight;
				if (this.zoomable = !1, e = Math.max(0, e), z(e) && this.viewed && !this.played && (c || a.zoomable)) {
					if (!c) {
						var h = Math.max(.01, H(a.minZoomRatio) ? a.minZoomRatio.call(this, this.image, s) : a.minZoomRatio), g = Math.min(100, H(a.maxZoomRatio) ? a.maxZoomRatio.call(this, this.image, s) : a.maxZoomRatio);
						e = Math.min(Math.max(e, h), g);
					}
					var _ = this.actionEvent || null;
					if (this.actionEvent = null, _ && _.type !== ae) switch (_.type) {
						case "wheel":
							a.zoomRatio >= .055 && e > .95 && e < 1.05 && (e = 1);
							break;
						case "pointermove":
						case "touchmove":
						case "mousemove": e > .99 && e < 1.01 && (e = 1);
					}
					var v = p * e, y = m * e, b = v - d, x = y - f, S = s.ratio;
					if (H(a.zoom) && X(i, Ae, a.zoom, { once: !0 }), Z(i, Ae, {
						ratio: e,
						oldRatio: S,
						originalEvent: _
					}) === !1) return this;
					if (this.zooming = !0, _ && _.type !== ae) {
						var ee = et(this.viewer), C = o && Object.keys(o).length > 0 ? lt(o) : {
							pageX: _.pageX,
							pageY: _.pageY
						};
						s.x -= b * ((C.pageX - ee.left - l) / d), s.y -= x * ((C.pageY - ee.top - u) / f);
					} else V(r) && z(r.x) && z(r.y) ? (s.x -= b * ((r.x - l) / d), s.y -= x * ((r.y - u) / f)) : (s.x -= b / 2, s.y -= x / 2);
					s.left = s.x, s.top = s.y, s.width = v, s.height = y, s.oldRatio = S, s.ratio = e, Je(this.image, M, W(a, "zoom")), this.renderImage(function() {
						t.zooming = !1, H(a.zoomed) && X(i, je, a.zoomed, { once: !0 }), Z(i, je, {
							ratio: e,
							oldRatio: S,
							originalEvent: _
						}, { cancelable: !1 });
					}), n && this.tooltip();
				}
				return this;
			},
			play: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				if (!this.isShown || this.played) return this;
				var n = this.element, r = this.options, i = this.actionEvent || null;
				if (this.actionEvent = null, H(r.play) && X(n, Me, r.play, { once: !0 }), Z(n, Me, { originalEvent: i }) === !1) return this;
				var a = this.player, o = this.loadImage.bind(this), s = [], c = 0, l = 0;
				if (this.played = !0, this.onLoadWhenPlay = o, t && this.requestFullscreen(t), q(a, ie), a.removeAttribute("aria-hidden"), U(this.images, function(t, n) {
					var i = document.createElement("img");
					i.src = e.getImageURL(t) || t.src, i.alt = t.alt || "", i.referrerPolicy = t.referrerPolicy, c += 1, q(i, ee), Je(i, M, W(r, "play")), n === e.index && (q(i, O), l = n), s.push(i), X(i, le, o, { once: !0 }), a.appendChild(i);
				}), z(r.interval) && r.interval > 0) {
					var u = function() {
						clearTimeout(e.playing.timeout);
						var t = e.actionEvent || null;
						e.actionEvent = null;
						var i = l - 1;
						i = i >= 0 ? i : c - 1, H(r.playing) && X(n, Ne, r.playing, { once: !0 }), Z(n, Ne, {
							originalImage: e.images[i],
							index: i,
							image: s[i],
							originalEvent: t
						}) === !1 || (J(s[l], O), l = i, q(s[l], O)), e.playing.timeout = r.autoplay ? setTimeout(u, r.interval) : null;
					}, d = function() {
						clearTimeout(e.playing.timeout);
						var t = e.actionEvent || null;
						e.actionEvent = null;
						var i = l + 1;
						i = i < c ? i : 0, H(r.playing) && X(n, Ne, r.playing, { once: !0 }), Z(n, Ne, {
							originalImage: e.images[i],
							index: i,
							image: s[i],
							originalEvent: t
						}) === !1 || (J(s[l], O), l = i, q(s[l], O)), e.playing.timeout = r.autoplay ? setTimeout(d, r.interval) : null;
					};
					c > 1 && (this.playing = {
						prev: u,
						next: d,
						timeout: r.autoplay ? setTimeout(d, r.interval) : null
					});
				}
				return this;
			},
			stop: function() {
				var e = this;
				if (!this.played) return this;
				var t = this.element, n = this.options, r = this.actionEvent || null;
				if (this.actionEvent = null, H(n.stop) && X(t, Pe, n.stop, { once: !0 }), Z(t, Pe, { originalEvent: r }) === !1) return this;
				var i = this.player;
				return clearTimeout(this.playing.timeout), this.playing = !1, this.played = !1, U(i.getElementsByTagName("img"), function(t) {
					Y(t, le, e.onLoadWhenPlay);
				}), J(i, ie), i.setAttribute("aria-hidden", !0), i.innerHTML = "", this.exitFullscreen(), this;
			},
			full: function() {
				var e = this, t = this.options, n = this.viewer, r = this.image, i = this.list;
				return !this.isShown || this.played || this.fulled || !t.inline || (this.fulled = !0, this.open(), q(this.button, w), J(i, M), this.viewed && J(r, M), q(n, C), n.setAttribute("role", "dialog"), n.setAttribute("aria-labelledby", this.title.id), n.setAttribute("aria-modal", !0), n.removeAttribute("style"), K(n, { zIndex: t.zIndex }), t.focus && this.enforceFocus(), this.initContainer(), this.viewerData = G({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
					e.renderImage();
				})), this;
			},
			exit: function() {
				var e = this, t = this.options, n = this.viewer, r = this.image, i = this.list;
				return !this.isShown || this.played || !this.fulled || !t.inline || (this.fulled = !1, this.close(), J(this.button, w), J(i, M), this.viewed && J(r, M), t.focus && this.clearEnforceFocus(), n.removeAttribute("role"), n.removeAttribute("aria-labelledby"), n.removeAttribute("aria-modal"), J(n, C), K(n, { zIndex: t.zIndexInline }), this.viewerData = G({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
					e.renderImage();
				})), this;
			},
			tooltip: function() {
				var e = this, t = this.options, n = this.tooltipBox, r = this.imageData;
				return !this.viewed || this.played || !t.tooltip || (n.textContent = `${Math.round(r.ratio * 100)}%`, this.tooltipping ? clearTimeout(this.tooltipping) : W(t, "tooltip") ? (this.fading && Z(n, F), q(n, ie), q(n, ee), q(n, M), n.removeAttribute("aria-hidden"), n.initialOffsetWidth = n.offsetWidth, q(n, O)) : (q(n, ie), n.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
					W(t, "tooltip") ? (X(n, F, function() {
						J(n, ie), J(n, ee), J(n, M), n.setAttribute("aria-hidden", !0), e.fading = !1;
					}, { once: !0 }), J(n, O), e.fading = !0) : (J(n, ie), n.setAttribute("aria-hidden", !0)), e.tooltipping = !1;
				}, 1e3)), this;
			},
			toggle: function() {
				return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0) : this.zoomTo(1, !0), this;
			},
			reset: function() {
				return this.viewed && !this.played && (this.imageData = G({}, this.initialImageData), this.renderImage()), this;
			},
			update: function(e) {
				var t = this, n = this.element, r = this.options, i = this.isImg;
				if (V(e) && G(r, e), i && !n.parentNode) return this.destroy();
				var a = [];
				if (U(i ? [n] : n.querySelectorAll("img"), function(e) {
					H(r.filter) ? r.filter.call(t, e) && a.push(e) : t.getImageURL(e) && a.push(e);
				}), !a.length) return this;
				if (this.images = a, this.length = a.length, this.ready) {
					var o = [];
					if (U(this.items, function(e) {
						var t = e.querySelector("img"), n = Number(Ze(e, "index")), r = a[n];
						r && t ? (r.src !== t.src || r.alt !== t.alt) && o.push(n) : o.push(n);
					}), K(this.list, { width: "auto" }), this.initList(), this.isShown) {
						if (this.length) {
							if (this.viewed) {
								var s = o.indexOf(this.index);
								if (s >= 0) this.viewed = !1, this.view(Math.max(Math.min(this.index - s, this.length - 1), 0));
								else {
									var c = this.getItem(this.index);
									q(c, x), c.setAttribute("aria-selected", !0);
								}
							}
						} else this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = "";
					}
				} else this.build();
				return this;
			},
			destroy: function() {
				var e = this.element, t = this.options;
				return e[h] && (this.destroyed = !0, this.ready ? (this.played && this.stop(), t.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : t.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), t.inline || (Y(e, ae, this.onElementClick), Y(e, N, this.onElementKeyDown)), e[h] = void 0), this;
			}
		}, mt = {
			getImageURL: function(e) {
				var t = this.options.url;
				return t = Re(t) ? e.getAttribute(t) : H(t) ? t.call(this, e) : "", t;
			},
			enforceFocus: function() {
				var e = this;
				this.clearEnforceFocus(), X(document, ce, this.onFocusin = function(t) {
					var n = e.viewer, r = t.target;
					if (!(r === document || r === n || n.contains(r))) {
						for (; r;) {
							if (r.getAttribute("tabindex") !== null || r.getAttribute("aria-modal") === "true") return;
							r = r.parentElement;
						}
						n.focus();
					}
				});
			},
			clearEnforceFocus: function() {
				this.onFocusin &&= (Y(document, ce, this.onFocusin), null);
			},
			open: function() {
				var e = this.body;
				q(e, re), this.scrollbarWidth > 0 && (e.style.paddingRight = `${this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0)}px`);
			},
			close: function() {
				var e = this.body;
				J(e, re), this.scrollbarWidth > 0 && (e.style.paddingRight = this.initialBodyPaddingRight);
			},
			shown: function() {
				var e = this.element, t = this.options, n = this.viewer;
				this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, t.focus && (n.focus(), this.enforceFocus()), H(t.shown) && X(e, xe, t.shown, { once: !0 }), Z(e, xe, { originalEvent: this.showOriginalEvent || null }) !== !1 && (this.showOriginalEvent = null, this.ready && this.isShown && !this.hiding && this.view(this.index));
			},
			hidden: function() {
				var e = this.element, t = this.options, n = this.viewer, r = n.ownerDocument.activeElement;
				r && n.contains(r) && H(r.blur) && r.blur(), t.focus && this.clearEnforceFocus(), this.close(), this.unbind(), q(n, T), n.removeAttribute("role"), n.removeAttribute("aria-labelledby"), n.removeAttribute("aria-modal"), n.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.hiding = !1, this.destroyed || (H(t.hidden) && X(e, Ce, t.hidden, { once: !0 }), Z(e, Ce, { originalEvent: this.hideOriginalEvent || null }, { cancelable: !1 }), this.hideOriginalEvent = null);
			},
			requestFullscreen: function(e) {
				var t = this.ownerDocument;
				if (this.fulled && !(t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement)) {
					var n = t.documentElement;
					n.requestFullscreen ? V(e) ? n.requestFullscreen(e) : n.requestFullscreen() : n.webkitRequestFullscreen ? n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.msRequestFullscreen && n.msRequestFullscreen();
				}
			},
			exitFullscreen: function() {
				var e = this.ownerDocument;
				this.fulled && (e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement) && (e.exitFullscreen ? e.exitFullscreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen());
			},
			change: function(e) {
				var t = this.options, n = this.pointers, r = n[Object.keys(n)[0]];
				if (r) {
					var i = r.endX - r.startX, a = r.endY - r.startY;
					switch (this.action) {
						case g:
							(i !== 0 || a !== 0) && (this.pointerMoved = !0, this.actionEvent = e, this.move(i, a));
							break;
						case b:
							if (t.zoomable && t.zoomOnTouch) {
								var o = ot(n);
								o !== 0 && (this.actionEvent = e, this.zoom(o));
							}
							break;
						case _:
							if (t.rotatable && t.rotateOnTouch) {
								var s = st(n);
								s !== 0 && (this.actionEvent = e, this.rotate(s));
							}
							break;
						case y:
							if (t.zoomable && t.zoomOnTouch) {
								var c = ot(n);
								c !== 0 && (this.actionEvent = e, this.zoom(c));
							}
							if (t.rotatable && t.rotateOnTouch) {
								var l = st(n);
								l !== 0 && (this.actionEvent = e, this.rotate(l));
							}
							break;
						case v:
							var u = Math.abs(i);
							u > 1 && u > Math.abs(a) && (this.pointerMoved = !0, this.actionEvent = e, this.move(i, 0));
					}
					U(n, function(e) {
						e.startX = e.endX, e.startY = e.endY;
					});
				}
			},
			isSwitchable: function() {
				var e = this.imageData, t = this.viewerData;
				return this.length > 1 && e.x >= 0 && e.y >= 0 && e.width <= t.width && e.height <= t.height;
			}
		}, ht = f.Viewer, gt = function(e) {
			return function() {
				return e += 1, e;
			};
		}(-1), _t = /*#__PURE__*/ function() {
			function t(n) {
				var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				if (e(this, t), !n || n.nodeType !== 1 && n.nodeType !== 11) throw Error("The first argument is required and must be an element.");
				this.element = n, this.ownerDocument = n.ownerDocument || n.host.ownerDocument, this.options = G({}, l, V(r) && r), this.action = !1, this.actionEvent = null, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zoomable = !1, this.zooming = !1, this.pointerMoved = !1, this.id = gt(), this.init();
			}
			return n(t, [{
				key: "init",
				value: function() {
					var e = this, t = this.element, n = this.options;
					if (!t[h]) {
						t[h] = this, n.focus && !n.keyboard && (n.focus = !1);
						var r = t.localName === "img", i = [];
						if (U(r ? [t] : t.querySelectorAll("img"), function(t) {
							H(n.filter) ? n.filter.call(e, t) && i.push(t) : e.getImageURL(t) && i.push(t);
						}), this.isImg = r, this.length = i.length, this.images = i, this.initBody(), B(this.ownerDocument.createElement(h).style.transition) && (n.transition = !1), n.inline) {
							var a = 0, o = function() {
								if (a += 1, a === e.length) {
									var t;
									e.initializing = !1, e.delaying = { abort: function() {
										clearTimeout(t);
									} }, t = setTimeout(function() {
										e.delaying = !1, e.build();
									}, 0);
								}
							};
							this.initializing = { abort: function() {
								U(i, function(e) {
									e.complete || (Y(e, le, o), Y(e, P, o));
								});
							} }, U(i, function(e) {
								if (e.complete) o();
								else {
									var t, n;
									X(e, le, t = function() {
										Y(e, P, n), o();
									}, { once: !0 }), X(e, P, n = function() {
										Y(e, le, t), o();
									}, { once: !0 });
								}
							});
						} else X(t, ae, this.onElementClick = function(t) {
							var r = t.target;
							r.localName === "img" && (!H(n.filter) || n.filter.call(e, r)) && (e.actionEvent = t, e.view(e.images.indexOf(r)));
						}), X(t, N, this.onElementKeyDown = function(t) {
							var r = t.target, i = t.key;
							r.localName === "img" && (i === "Enter" || i === " ") && (t.preventDefault(), (!H(n.filter) || n.filter.call(e, r)) && (e.actionEvent = t, e.view(e.images.indexOf(r))));
						});
					}
				}
			}, {
				key: "build",
				value: function() {
					var e = this;
					if (!this.ready) {
						var t = this.element, n = this.options, r = t.parentNode, i = document.createElement("div");
						i.innerHTML = u;
						var a = i.querySelector(`.${h}-container`), o = a.querySelector(`.${h}-title`), s = a.querySelector(`.${h}-toolbar`), c = a.querySelector(`.${h}-navbar`), l = a.querySelector(`.${h}-navigation`), d = a.querySelector(`.${h}-button`), f = a.querySelector(`.${h}-canvas`);
						this.parent = r, this.viewer = a, this.title = o, this.toolbar = s, this.navbar = c, this.navigation = l, this.button = d, this.canvas = f, this.magnifier = a.querySelector(`.${h}-magnifier`), this.magnifierImage = a.querySelector(`.${h}-magnifier-image`), this.tooltipBox = a.querySelector(`.${h}-tooltip`), this.player = a.querySelector(`.${h}-player`), this.list = a.querySelector(`.${h}-list`), a.id = `${h}${this.id}`, o.id = `${h}Title${this.id}`, q(o, n.title ? at(Array.isArray(n.title) ? n.title[0] : n.title) : T), n.title && o.removeAttribute("aria-hidden");
						var p = V(n.navbar) ? n.navbar : {}, m = n.navbar, g = B(p.size) ? n.navbar : p.size, _ = [
							"top",
							"right",
							"bottom",
							"left"
						].indexOf(p.position) === -1 ? "bottom" : p.position;
						V(n.navbar) && (m = B(p.show) ? !0 : p.show), q(c, m ? at(m) : T), m && c.removeAttribute("aria-hidden"), [
							"small",
							"medium",
							"large"
						].indexOf(g) !== -1 && q(c, `${h}-${g}`);
						var v = _ === "left" || _ === "right";
						if (this.isNavbarVertical = v, q(c, `${h}-navbar-${_}`), m) {
							var y = v ? l : o, b = v ? "navigation" : "title";
							q(y, `${h}-${b}-navbar-${_}`), v && q(o, `${h}-title-navbar-${_}`), ["small", "large"].indexOf(g) !== -1 && (q(y, `${h}-${b}-navbar-${v ? `${_}-` : ""}${g}`), v && q(o, `${h}-title-navbar-${_}-${g}`));
						}
						if (V(n.navigation) ? U(l.querySelectorAll("[role=\"button\"]"), function(e) {
							var t = Ze(e, Fe), r = n.navigation[t], i = V(r), a = i && !B(r.show) ? r.show : r, o = i && !B(r.size) ? r.size : r;
							Je(e, T, !a), z(a) && q(e, at(a)), ["small", "large"].indexOf(o) !== -1 && q(e, `${h}-${o}`);
						}) : q(l, n.navigation ? at(n.navigation) : T), n.navigation && l.removeAttribute("aria-hidden"), Je(d, T, !n.button), n.button && d.removeAttribute("aria-hidden"), n.keyboard && (d.setAttribute("tabindex", 0), U(l.querySelectorAll("[role=\"button\"]"), function(e) {
							e.setAttribute("tabindex", 0);
						})), n.backdrop && (q(a, `${h}-backdrop`), !n.inline && n.backdrop !== "static" && Qe(f, Fe, "hide")), Re(n.className) && n.className && n.className.split(Ie).forEach(function(e) {
							q(a, e);
						}), n.toolbar) {
							var x = document.createElement("ul"), w = V(n.toolbar), E = w && [
								"top",
								"right",
								"bottom",
								"left"
							].indexOf(n.toolbar.position) !== -1 ? n.toolbar.position : "bottom", D = Le.slice(0, 3), ne = Le.slice(7, 9), O = Le.slice(9);
							w || q(s, at(n.toolbar)), s.removeAttribute("aria-hidden"), q(s, `${h}-toolbar-${E}`), q(o, `${h}-title-toolbar-${E}`), m && E === _ && (q(s, `${h}-toolbar-navbar-${_}`), ["small", "large"].indexOf(g) !== -1 && q(s, `${h}-toolbar-navbar-${g}`)), U(w ? n.toolbar : Le, function(t, r) {
								if (r !== "position") {
									var i = w && V(t), a = w ? Xe(r) : t, o = i && !B(t.show) ? t.show : t;
									if (!(!o || !n.zoomable && D.indexOf(a) !== -1 || !n.rotatable && ne.indexOf(a) !== -1 || !n.scalable && O.indexOf(a) !== -1)) {
										var s = i && !B(t.size) ? t.size : t, c = i && !B(t.click) ? t.click : t, l = document.createElement("li");
										n.keyboard && l.setAttribute("tabindex", 0), l.setAttribute("role", "button"), q(l, `${h}-${a}`), H(c) || Qe(l, Fe, a), z(o) && q(l, at(o)), ["small", "large"].indexOf(s) === -1 ? a === "play" && q(l, `${h}-large`) : q(l, `${h}-${s}`), H(c) && X(l, ae, c.bind(e)), x.appendChild(l);
									}
								}
							}), s.appendChild(x), (E === "left" || E === "right") && q(l, `${h}-navigation-toolbar-${E}`);
						} else q(s, T);
						if (!n.rotatable) {
							var A = s.querySelectorAll("li[class*=\"rotate\"]");
							q(A, k), U(A, function(e) {
								s.appendChild(e);
							});
						}
						if (n.inline) q(d, te), K(a, { zIndex: n.zIndexInline }), window.getComputedStyle(r).position === "static" && K(r, { position: "relative" }), r.insertBefore(a, t.nextSibling);
						else {
							q(d, S), q(a, C), q(a, ee), q(a, T), K(a, { zIndex: n.zIndex });
							var j = n.container;
							Re(j) && (j = this.ownerDocument.querySelector(j)), j ||= this.body, j.appendChild(a);
						}
						n.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, H(n.ready) && X(t, ye, n.ready, { once: !0 }), Z(t, ye) === !1 ? this.ready = !1 : this.ready && n.inline && this.view(this.index);
					}
				}
			}], [
				{
					key: "create",
					value: function(e, n) {
						return new t(e, n);
					}
				},
				{
					key: "setDefaults",
					value: function(e) {
						G(l, V(e) && e);
					}
				},
				{
					key: "noConflict",
					value: function() {
						return window.Viewer = ht, t;
					}
				}
			]);
		}();
		return G(_t.prototype, ut, dt, ft, pt, mt), _t;
	}));
})))(), 1), Eu = [
	"ready",
	"show",
	"shown",
	"hide",
	"hidden",
	"view",
	"viewed",
	"move",
	"moved",
	"rotate",
	"rotated",
	"scale",
	"scaled",
	"zoom",
	"zoomed",
	"play",
	"playing",
	"stop"
], Du = {
	backdrop: {
		type: [Boolean, String],
		default: void 0
	},
	button: {
		type: Boolean,
		default: void 0
	},
	className: {
		type: String,
		default: void 0
	},
	container: {
		type: [String, Object],
		default: void 0
	},
	filter: {
		type: Function,
		default: void 0
	},
	fullscreen: {
		type: [Boolean, Object],
		default: void 0
	},
	focus: {
		type: Boolean,
		default: void 0
	},
	inheritedAttributes: {
		type: Array,
		default: void 0
	},
	initialCoverage: {
		type: Number,
		default: void 0
	},
	initialViewIndex: {
		type: Number,
		default: void 0
	},
	inline: {
		type: Boolean,
		default: void 0
	},
	autoplay: {
		type: Boolean,
		default: void 0
	},
	interval: {
		type: Number,
		default: void 0
	},
	keyboard: {
		type: Boolean,
		default: void 0
	},
	loading: {
		type: Boolean,
		default: void 0
	},
	loop: {
		type: Boolean,
		default: void 0
	},
	magnifier: {
		type: [Boolean, Object],
		default: void 0
	},
	maxZoomRatio: {
		type: [Number, Function],
		default: void 0
	},
	minHeight: {
		type: Number,
		default: void 0
	},
	minWidth: {
		type: Number,
		default: void 0
	},
	minZoomRatio: {
		type: [Number, Function],
		default: void 0
	},
	movable: {
		type: Boolean,
		default: void 0
	},
	navbar: {
		type: [
			Boolean,
			Number,
			String,
			Object
		],
		default: void 0
	},
	navigation: {
		type: [
			Boolean,
			Number,
			Object
		],
		default: void 0
	},
	preload: {
		type: Boolean,
		default: void 0
	},
	rotatable: {
		type: Boolean,
		default: void 0
	},
	rotateOnGesture: {
		type: Boolean,
		default: void 0
	},
	rotateOnTouch: {
		type: Boolean,
		default: void 0
	},
	scalable: {
		type: Boolean,
		default: void 0
	},
	slideOnTouch: {
		type: Boolean,
		default: void 0
	},
	slideOnWheel: {
		type: [Boolean, String],
		default: void 0
	},
	title: {
		type: [
			Boolean,
			Number,
			Function,
			Array
		],
		default: void 0
	},
	toggleOnDblclick: {
		type: Boolean,
		default: void 0
	},
	toolbar: {
		type: [
			Boolean,
			Number,
			Object
		],
		default: void 0
	},
	tooltip: {
		type: Boolean,
		default: void 0
	},
	transition: {
		type: [Boolean, Object],
		default: void 0
	},
	url: {
		type: [String, Function],
		default: void 0
	},
	zIndex: {
		type: Number,
		default: void 0
	},
	zIndexInline: {
		type: Number,
		default: void 0
	},
	zoomOnGesture: {
		type: Boolean,
		default: void 0
	},
	zoomOnTouch: {
		type: Boolean,
		default: void 0
	},
	zoomOnWheel: {
		type: [Boolean, String],
		default: void 0
	},
	zoomRatio: {
		type: Number,
		default: void 0
	},
	zoomable: {
		type: Boolean,
		default: void 0
	}
};
function Ou(e) {
	let t = { ...e.options };
	for (let n of Object.keys(Du)) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}
function ku(e, t) {
	let n = Eu.map((n) => {
		let r = (r) => {
			r.target === e && t(n, r);
		};
		return e.addEventListener(n, r), () => e.removeEventListener(n, r);
	});
	return () => n.forEach((e) => e());
}
var Au = [
	"show",
	"hide",
	"view",
	"prev",
	"next",
	"move",
	"moveTo",
	"zoom",
	"zoomTo",
	"rotate",
	"rotateTo",
	"scale",
	"scaleX",
	"scaleY",
	"play",
	"stop",
	"full",
	"exit",
	"reset",
	"toggle"
];
function ju(e) {
	return {
		...Object.fromEntries(Au.map((t) => [t, (...n) => {
			let r = e();
			return (r?.[t])?.apply(r, n);
		}])),
		showTooltip: () => e()?.tooltip()
	};
}
//#endregion
//#region packages/core/src/index.ts
function Mu(e) {
	let t = (e.tagName === "IMG" ? [e] : Array.from(e.querySelectorAll("img"))).filter((e) => !e.closest(".viewer-container"));
	return {
		sources: t,
		attributes: JSON.stringify(t.map((e) => Array.from(e.attributes).map((e) => [e.name, e.value]).sort(([e], [t]) => e.localeCompare(t))))
	};
}
function Nu(e) {
	if (e.nodeType !== 1) return !1;
	let t = e;
	return t.closest(".viewer-container") ? !1 : t.tagName === "IMG" || Array.from(t.querySelectorAll("img")).some((e) => !e.closest(".viewer-container"));
}
function Pu(e) {
	return e.type === "attributes" ? e.target.tagName === "IMG" && !e.target.closest(".viewer-container") : [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].some(Nu);
}
function Fu(e, t = {}) {
	let n = { ...t }, r, i, a = Mu(e), o, s = 0, c = !1, l = n.onEvent ? ku(e, (e, t) => n.onEvent?.(e, t)) : void 0;
	function u() {
		n.onDestroy?.();
		let t = r;
		r = void 0, e.$viewer === t && delete e.$viewer, t?.destroy();
	}
	function d(t = n.rebuild ?? !1) {
		if (!c) {
			f(), i?.disconnect();
			try {
				if (t && u(), r) r.update();
				else {
					r = new Tu.default(e, { ...n.options });
					let t = r, i = t.build;
					t.build = function() {
						if (!this.destroyed) return i.call(this);
					};
				}
				e.$viewer = r, a = Mu(e);
			} finally {
				g();
			}
			return n.onInit?.(r), r;
		}
	}
	function f() {
		o !== void 0 && clearTimeout(o), o = void 0;
	}
	function p() {
		return typeof n.observe == "number" && Number.isFinite(n.observe) && n.observe >= 0 ? Math.min(n.observe, 2147483647) : 50;
	}
	function m() {
		c || n.observe === !1 || o !== void 0 || (s = Date.now(), h());
	}
	function h() {
		o = setTimeout(() => {
			if (o = void 0, c || n.observe === !1) return;
			let t = Mu(e);
			(t.attributes !== a.attributes || t.sources.length !== a.sources.length || t.sources.some((e, t) => e !== a.sources[t])) && d();
		}, Math.max(0, p() - (Date.now() - s)));
	}
	function g() {
		i?.disconnect(), !(c || n.observe === !1 || typeof MutationObserver > "u") && (i ??= new MutationObserver((e) => {
			e.some(Pu) && m();
		}), i.observe(e, {
			attributes: !0,
			childList: !0,
			subtree: !0
		}));
	}
	function _(e, t = !0) {
		if (!c) {
			if (n = {
				...n,
				...e
			}, !("options" in e) && !("rebuild" in e) && "observe" in e) {
				let e = o !== void 0;
				return f(), g(), n.observe !== !1 && (e ? h() : m()), r;
			}
			return d(t);
		}
	}
	function v() {
		c = !0, f(), i?.disconnect();
		try {
			u();
		} finally {
			l?.();
		}
	}
	try {
		d();
	} catch (e) {
		throw v(), e;
	}
	return {
		get viewer() {
			return r;
		},
		refresh: d,
		configure: _,
		dispose: v
	};
}
//#endregion
//#region packages/vue2/src/index.ts
var Iu = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ new WeakMap();
function Ru(e) {
	e.$viewer = void 0;
	let t = Lu.get(e);
	if (t) {
		for (let e of t.portals.values()) e.$destroy(), e.$el.remove();
		t.portals.clear(), t.bridge.clear();
	}
}
function zu(e) {
	let t = Lu.get(e);
	if (!t) return;
	let n = t.bridge.sync(e.$viewer, (t) => {
		if (t === "toolbar") {
			let t = e;
			return !!(e.$scopedSlots.toolbar?.({
				...ju(() => e.$viewer),
				update: () => t.update(),
				destroy: () => t.destroy(),
				...wu(e.$viewer)
			}) || e.$slots.toolbar)?.some((e) => !e.isComment && (!!e.tag || !!e.text?.trim()));
		}
		return !!e.$scopedSlots[t] || !!e.$slots[t];
	});
	for (let [e, r] of t.portals) n.indexOf(e) === -1 && (r.$destroy(), r.$el.remove(), t.portals.delete(e));
	for (let r of n) {
		let n = t.portals.get(r);
		if (n) {
			n.$forceUpdate();
			continue;
		}
		let i = ju(() => e.$viewer), a = new Q({
			parent: e,
			render(t) {
				let n = e, a = {
					...i,
					update: () => n.update(),
					destroy: () => n.destroy(),
					...wu(e.$viewer)
				};
				return t("span", { style: { display: "contents" } }, e.$scopedSlots[r.slot]?.(a) || e.$slots[r.slot]);
			}
		}).$mount();
		r.target.appendChild(a.$el), t.portals.set(r, a);
	}
}
var Bu = Object.fromEntries(Au.map((e) => [e, function(...t) {
	let n = this.$viewer;
	return (n?.[e])?.apply(n, t);
}])), Vu = Q.extend({
	name: "Viewer",
	props: {
		...Du,
		options: {
			type: Object,
			default: () => ({})
		},
		rebuild: Boolean,
		observe: {
			type: [Boolean, Number],
			default: !0
		}
	},
	computed: { viewerOptions() {
		return Ou(this.$props);
	} },
	mounted() {
		this.createViewer();
	},
	updated() {
		zu(this);
	},
	beforeDestroy() {
		this._viewerDisposed = !0, this.destroyViewer(), Lu.delete(this);
	},
	watch: {
		observe(e) {
			Iu.get(this)?.configure({ observe: e });
		},
		viewerOptions: {
			deep: !0,
			handler() {
				this.$nextTick(() => this.rebuildViewer());
			}
		},
		rebuild() {
			this.$nextTick(() => this.changeViewer());
		}
	},
	methods: {
		...Bu,
		showTooltip() {
			return this.$viewer?.tooltip();
		},
		update() {
			this.updateViewer();
		},
		destroy() {
			this.destroyViewer();
		},
		createViewer() {
			Iu.has(this) || this.$isServer || this._viewerDisposed || Iu.set(this, Fu(this.$el, {
				options: this.viewerOptions,
				rebuild: this.rebuild,
				observe: this.observe,
				onEvent: (e, t) => {
					zu(this), this.$emit(e, t);
				},
				onDestroy: () => Ru(this),
				onInit: (e) => {
					this.$viewer = e, zu(this);
				}
			}));
		},
		destroyViewer() {
			Iu.get(this)?.dispose(), Iu.delete(this), this.$viewer = void 0;
		},
		updateViewer() {
			Iu.has(this) ? Iu.get(this).refresh(!1) : this.createViewer();
		},
		rebuildViewer() {
			Iu.has(this) ? Iu.get(this).configure({
				options: this.viewerOptions,
				rebuild: this.rebuild
			}) : this.createViewer();
		},
		changeViewer() {
			Iu.get(this)?.configure({ rebuild: this.rebuild }, this.rebuild);
		}
	},
	beforeCreate() {
		Lu.set(this, {
			bridge: Cu(),
			portals: /* @__PURE__ */ new Map()
		}), this._viewerDisposed = !1;
	},
	destroyed() {
		this._viewerDisposed = !0;
	},
	render(e) {
		return e("div", this.$scopedSlots.default?.({ options: this.options }) || this.$slots.default);
	}
});
//#endregion
//#region docs/.vitepress/theme/configurator/mount-vue2.mjs
function Hu(e, t, n) {
	let r = document.createElement("div");
	e.appendChild(r);
	let i = new Q({
		...t,
		components: { Viewer: Vu },
		propsData: { report: n }
	}).$mount(r);
	return {
		send: (e) => i.receive(e),
		dispose() {
			i.$destroy(), i.$el.remove();
		}
	};
}
//#endregion
export { Hu as mount };
