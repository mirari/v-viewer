//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n));
//#endregion
//#region node_modules/.pnpm/@vue+shared@3.5.43/node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function u(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var d = {}, f = [], p = () => {}, m = () => !1, h = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), g = (e) => e.startsWith("onUpdate:"), _ = Object.assign, v = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, y = Object.prototype.hasOwnProperty, b = (e, t) => y.call(e, t), x = Array.isArray, S = (e) => ne(e) === "[object Map]", C = (e) => ne(e) === "[object Set]", w = (e) => ne(e) === "[object Date]", ee = (e) => ne(e) === "[object RegExp]", T = (e) => typeof e == "function", E = (e) => typeof e == "string", D = (e) => typeof e == "symbol", O = (e) => typeof e == "object" && !!e, te = (e) => (O(e) || T(e)) && T(e.then) && T(e.catch), k = Object.prototype.toString, ne = (e) => k.call(e), re = (e) => ne(e).slice(8, -1), ie = (e) => ne(e) === "[object Object]", A = (e) => E(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ae = /* @__PURE__ */ u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), j = /* @__PURE__ */ u("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), oe = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, se = /-\w/g, M = oe((e) => e.replace(se, (e) => e.slice(1).toUpperCase())), ce = /\B([A-Z])/g, N = oe((e) => e.replace(ce, "-$1").toLowerCase()), le = oe((e) => e.charAt(0).toUpperCase() + e.slice(1)), ue = oe((e) => e ? `on${le(e)}` : ""), de = (e, t) => !Object.is(e, t), fe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, pe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, me = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, he = (e) => {
	let t = E(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ge, _e = () => ge ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ve(e, t) {
	return e + JSON.stringify(t, (e, t) => typeof t == "function" ? t.toString() : t);
}
var ye = /* @__PURE__ */ u("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function be(e) {
	if (x(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = E(r) ? we(r) : be(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (E(e) || O(e)) return e;
}
var xe = /;(?![^(]*\))/g, Se = /:([^]+)/, Ce = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function we(e) {
	let t = {};
	return e.replace(Ce, (e) => e.startsWith("/*") ? "" : e).split(xe).forEach((e) => {
		if (e) {
			let n = e.split(Se);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Te(e) {
	let t = "";
	if (E(e)) t = e;
	else if (x(e)) for (let n = 0; n < e.length; n++) {
		let r = Te(e[n]);
		r && (t += r + " ");
	}
	else if (O(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function Ee(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !E(t) && (e.class = Te(t)), n && (e.style = be(n)), e;
}
var De = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Oe = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ke = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ae = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", je = /* @__PURE__ */ u(De), Me = /* @__PURE__ */ u(Oe), Ne = /* @__PURE__ */ u(ke), Pe = /* @__PURE__ */ u(Ae), Fe = /* @__PURE__ */ u("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function Ie(e) {
	return !!e || e === "";
}
function Le(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ve(e[i], t[i], n);
	return r;
}
function Re(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ve(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function ze(e, t, n) {
	let r = S(e), i = S(t);
	if (r || i || (r = C(e), i = C(t), r || i)) return r && i ? Re(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ve(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Be(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ve(e, t, n) {
	if (e === t) return !0;
	let r = w(e), i = w(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = D(e), i = D(t), r || i ? e === t : (r = x(e), i = x(t), r || i ? r && i ? Be(e, t, n, Le) : !1 : (r = O(e), i = O(t), r || i ? !r || !i ? !1 : Be(e, t, n, ze) : String(e) === String(t))));
}
function He(e, t) {
	return e.findIndex((e) => Ve(e, t));
}
var Ue = (e) => !!(e && e.__v_isRef === !0), We = (e) => E(e) ? e : e == null ? "" : x(e) || O(e) && (e.toString === k || !T(e.toString)) ? Ue(e) ? We(e.value) : JSON.stringify(e, Ge, 2) : String(e), Ge = (e, t) => Ue(t) ? Ge(e, t.value) : S(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ke(t, r) + " =>"] = n, e), {}) } : C(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ke(e)) } : D(t) ? Ke(t) : O(t) && !x(t) && !ie(t) ? String(t) : t, Ke = (e, t = "") => D(e) ? `Symbol(${e.description ?? t})` : e;
function P(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/.pnpm/@vue+reactivity@3.5.43/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var F, qe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && F && (F.active ? (this.parent = F, this.index = (F.scopes || (F.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = F;
			try {
				return F = this, e();
			} finally {
				F = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = F, F = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (F === this) F = this.prevScope;
			else {
				let e = F;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Je(e) {
	return new qe(e);
}
function Ye() {
	return F;
}
function I(e, t = !1) {
	F && F.cleanups.push(e);
}
var L, Xe = /* @__PURE__ */ new WeakSet(), Ze = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, F && (F.active ? F.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Xe.has(this) && (Xe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tt(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, dt(this), z(this);
		let e = L, t = V;
		L = this, V = !0;
		try {
			return this.fn();
		} finally {
			rt(this), L = e, V = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) ot(e);
			this.deps = this.depsTail = void 0, dt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Xe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		it(this) && this.run();
	}
	get dirty() {
		return it(this);
	}
}, Qe = 0, $e, et;
function tt(e, t = !1) {
	e.flags |= 8, t ? (e.next = et, et = e) : (e.next = $e, $e = e);
}
function nt() {
	Qe++;
}
function R() {
	if (--Qe > 0) return;
	if (et) {
		let e = et;
		for (et = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; $e;) {
		let t = $e;
		for ($e = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function z(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function rt(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), ot(r), st(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function it(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (at(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function at(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ft) || (e.globalVersion = ft, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !it(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = L, r = V;
	L = e, V = !0;
	try {
		z(e);
		let n = e.fn(e._value);
		(t.version === 0 || de(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		L = n, V = r, rt(e), e.flags &= -3;
	}
}
function ot(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) ot(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function st(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function ct(e, t) {
	e.effect instanceof Ze && (e = e.effect.fn);
	let n = new Ze(e);
	t && _(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function B(e) {
	e.effect.stop();
}
var V = !0, H = [];
function lt() {
	H.push(V), V = !1;
}
function ut() {
	let e = H.pop();
	V = e === void 0 || e;
}
function dt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = L;
		L = void 0;
		try {
			t();
		} finally {
			L = e;
		}
	}
}
var ft = 0, pt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, mt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!L || !V || L === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== L) t = this.activeLink = new pt(L, this), L.deps ? (t.prevDep = L.depsTail, L.depsTail.nextDep = t, L.depsTail = t) : L.deps = L.depsTail = t, ht(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = L.depsTail, t.nextDep = void 0, L.depsTail.nextDep = t, L.depsTail = t, L.deps === t && (L.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, ft++, this.notify(e);
	}
	notify(e) {
		nt();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			R();
		}
	}
};
function ht(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ht(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var gt = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol(""), vt = /* @__PURE__ */ Symbol(""), yt = /* @__PURE__ */ Symbol("");
function bt(e, t, n) {
	if (V && L) {
		let t = gt.get(e);
		t || gt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new mt()), r.map = t, r.key = n), r.track();
	}
}
function xt(e, t, n, r, i, a) {
	let o = gt.get(e);
	if (!o) {
		ft++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (nt(), t === "clear") o.forEach(s);
	else {
		let i = x(e), a = i && A(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === yt || !D(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(yt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(_t)), S(e) && s(o.get(vt)));
				break;
			case "delete":
				i || (s(o.get(_t)), S(e) && s(o.get(vt)));
				break;
			case "set": S(e) && s(o.get(_t));
		}
	}
	R();
}
function St(e, t) {
	let n = gt.get(e);
	return n && n.get(t);
}
function Ct(e) {
	let t = /* @__PURE__ */ U(e);
	return t === e || (bt(t, "iterate", yt), /* @__PURE__ */ fn(e)) ? t : /* @__PURE__ */ dn(e) ? /* @__PURE__ */ un(e) ? t.map((e) => gn(hn(e))) : t.map(gn) : t.map(hn);
}
function wt(e) {
	return bt(e = /* @__PURE__ */ U(e), "iterate", yt), e;
}
function Tt(e, t) {
	return /* @__PURE__ */ dn(e) ? gn(/* @__PURE__ */ un(e) ? hn(t) : t) : hn(t);
}
var Et = {
	__proto__: null,
	[Symbol.iterator]() {
		return Dt(this, Symbol.iterator, (e) => Tt(this, e));
	},
	concat(...e) {
		return Ct(this).concat(...e.map((e) => x(e) ? Ct(e) : e));
	},
	entries() {
		return Dt(this, "entries", (e) => (e[1] = Tt(this, e[1]), e));
	},
	every(e, t) {
		return kt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return kt(this, "filter", e, t, (e) => e.map((e) => Tt(this, e)), arguments);
	},
	find(e, t) {
		return kt(this, "find", e, t, (e) => Tt(this, e), arguments);
	},
	findIndex(e, t) {
		return kt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return kt(this, "findLast", e, t, (e) => Tt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return kt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return kt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return jt(this, "includes", e);
	},
	indexOf(...e) {
		return jt(this, "indexOf", e);
	},
	join(e) {
		return Ct(this).join(e);
	},
	lastIndexOf(...e) {
		return jt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return kt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Mt(this, "pop");
	},
	push(...e) {
		return Mt(this, "push", e);
	},
	reduce(e, ...t) {
		return At(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return At(this, "reduceRight", e, t);
	},
	shift() {
		return Mt(this, "shift");
	},
	some(e, t) {
		return kt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Mt(this, "splice", e);
	},
	toReversed() {
		return Ct(this).toReversed();
	},
	toSorted(e) {
		return Ct(this).toSorted(e);
	},
	toSpliced(...e) {
		return Ct(this).toSpliced(...e);
	},
	unshift(...e) {
		return Mt(this, "unshift", e);
	},
	values() {
		return Dt(this, "values", (e) => Tt(this, e));
	}
};
function Dt(e, t, n) {
	let r = wt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ fn(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var Ot = Array.prototype;
function kt(e, t, n, r, i, a) {
	let o = wt(e), s = o !== e && !/* @__PURE__ */ fn(e), c = o[t];
	if (c !== Ot[t]) {
		let t = c.apply(e, a);
		return s ? hn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, Tt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function At(e, t, n, r) {
	let i = wt(e), a = i !== e && !/* @__PURE__ */ fn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = Tt(e, t)), n.call(this, t, Tt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? Tt(e, c) : c;
}
function jt(e, t, n) {
	let r = /* @__PURE__ */ U(e);
	bt(r, "iterate", yt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ pn(n[0]) ? (n[0] = /* @__PURE__ */ U(n[0]), r[t](...n)) : i;
}
function Mt(e, t, n = []) {
	lt(), nt();
	let r = (/* @__PURE__ */ U(e))[t].apply(e, n);
	return R(), ut(), r;
}
var Nt = /* @__PURE__ */ u("__proto__,__v_isRef,__isVue"), Pt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(D));
function Ft(e) {
	D(e) || (e = String(e));
	let t = /* @__PURE__ */ U(this);
	return bt(t, "has", e), t.hasOwnProperty(e);
}
var It = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? nn : tn : i ? en : $t).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = x(e);
		if (!r) {
			let e;
			if (a && (e = Et[t])) return e;
			if (t === "hasOwnProperty") return Ft;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ _n(e) ? e : n);
		if ((D(t) ? Pt.has(t) : Nt(t)) || (r || bt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ _n(o)) {
			let e = a && A(t) ? o : o.value;
			return r && O(e) ? /* @__PURE__ */ sn(e) : e;
		}
		return O(o) ? r ? /* @__PURE__ */ sn(o) : /* @__PURE__ */ an(o) : o;
	}
}, Lt = class extends It {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = x(e) && A(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ dn(i);
			if (!/* @__PURE__ */ fn(n) && !/* @__PURE__ */ dn(n) && (i = /* @__PURE__ */ U(i), n = /* @__PURE__ */ U(n)), !a && /* @__PURE__ */ _n(i) && !/* @__PURE__ */ _n(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : b(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ _n(e) ? e : r);
		return e === /* @__PURE__ */ U(r) && s && (o ? de(n, i) && xt(e, "set", t, n, i) : xt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = b(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && xt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!D(t) || !Pt.has(t)) && bt(e, "has", t), n;
	}
	ownKeys(e) {
		return bt(e, "iterate", x(e) ? "length" : _t), Reflect.ownKeys(e);
	}
}, Rt = class extends It {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, zt = /* @__PURE__ */ new Lt(), Bt = /* @__PURE__ */ new Rt(), Vt = /* @__PURE__ */ new Lt(!0), Ht = /* @__PURE__ */ new Rt(!0), Ut = (e) => e, Wt = (e) => Reflect.getPrototypeOf(e);
function Gt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ U(i), o = S(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Ut : t ? gn : hn;
		return !t && bt(a, "iterate", c ? vt : _t), _(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function Kt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function qt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ U(r), a = /* @__PURE__ */ U(n);
			e || (de(n, a) && bt(i, "get", n), bt(i, "get", a));
			let { has: o } = Wt(i), s = t ? Ut : e ? gn : hn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && bt(/* @__PURE__ */ U(t), "iterate", _t), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ U(n), i = /* @__PURE__ */ U(t);
			return e || (de(t, i) && bt(r, "has", t), bt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ U(a), s = t ? Ut : e ? gn : hn;
			return !e && bt(o, "iterate", _t), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return _(n, e ? {
		add: Kt("add"),
		set: Kt("set"),
		delete: Kt("delete"),
		clear: Kt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ U(this), r = Wt(n), i = /* @__PURE__ */ U(e), a = !t && !/* @__PURE__ */ fn(e) && !/* @__PURE__ */ dn(e) ? i : e;
			return r.has.call(n, a) || de(e, a) && r.has.call(n, e) || de(i, a) && r.has.call(n, i) || (n.add(a), xt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ fn(n) && !/* @__PURE__ */ dn(n) && (n = /* @__PURE__ */ U(n));
			let r = /* @__PURE__ */ U(this), { has: i, get: a } = Wt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ U(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? de(n, s) && xt(r, "set", e, n, s) : xt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ U(this), { has: n, get: r } = Wt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ U(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && xt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ U(this), t = e.size !== 0, n = e.clear();
			return t && xt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Gt(r, e, t);
	}), n;
}
function Jt(e, t) {
	let n = qt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(b(n, r) && r in t ? n : t, r, i);
}
var Yt = { get: /* @__PURE__ */ Jt(!1, !1) }, Xt = { get: /* @__PURE__ */ Jt(!1, !0) }, Zt = { get: /* @__PURE__ */ Jt(!0, !1) }, Qt = { get: /* @__PURE__ */ Jt(!0, !0) }, $t = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap();
function rn(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return /* @__PURE__ */ dn(e) ? e : ln(e, !1, zt, Yt, $t);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return ln(e, !1, Vt, Xt, en);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return ln(e, !0, Bt, Zt, tn);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
	return ln(e, !0, Ht, Qt, nn);
}
function ln(e, t, n, r, i) {
	if (!O(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = rn(re(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function un(e) {
	return /* @__PURE__ */ dn(e) ? /* @__PURE__ */ un(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ U(t) : e;
}
function mn(e) {
	return !b(e, "__v_skip") && Object.isExtensible(e) && pe(e, "__v_skip", !0), e;
}
var hn = (e) => O(e) ? /* @__PURE__ */ an(e) : e, gn = (e) => O(e) ? /* @__PURE__ */ sn(e) : e;
// @__NO_SIDE_EFFECTS__
function _n(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
	return bn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
	return bn(e, !0);
}
function bn(e, t) {
	return /* @__PURE__ */ _n(e) ? e : new xn(e, t);
}
var xn = class {
	constructor(e, t) {
		this.dep = new mt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ U(e), this._value = t ? e : hn(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ fn(e) || /* @__PURE__ */ dn(e);
		e = n ? e : /* @__PURE__ */ U(e), de(e, t) && (this._rawValue = e, this._value = n ? e : hn(e), this.dep.trigger());
	}
};
function Sn(e) {
	e.dep && e.dep.trigger();
}
function Cn(e) {
	return /* @__PURE__ */ _n(e) ? e.value : e;
}
function wn(e) {
	return T(e) ? e() : Cn(e);
}
var Tn = {
	get: (e, t, n) => t === "__v_raw" ? e : Cn(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ _n(i) && !/* @__PURE__ */ _n(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function En(e) {
	return /* @__PURE__ */ un(e) ? e : new Proxy(e, Tn);
}
var Dn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new mt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function On(e) {
	return new Dn(e);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
	let t = x(e) ? Array(e.length) : {};
	for (let n in e) t[n] = Nn(e, n);
	return t;
}
var An = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = D(t) ? t : String(t), this._raw = /* @__PURE__ */ U(e);
		let r = !0, i = e;
		if (!x(e) || D(this._key) || !A(this._key)) do
			r = !/* @__PURE__ */ pn(i) || /* @__PURE__ */ fn(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = Cn(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ _n(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ _n(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return St(this._raw, this._key);
	}
}, jn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Mn(e, t, n) {
	return /* @__PURE__ */ _n(e) ? e : T(e) ? new jn(e) : O(e) && arguments.length > 1 ? Nn(e, t, n) : /* @__PURE__ */ vn(e);
}
function Nn(e, t, n) {
	return new An(e, t, n);
}
var Pn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new mt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ft - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && L !== this) return tt(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return at(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function Fn(e, t, n = !1) {
	let r, i;
	return T(e) ? r = e : (r = e.get, i = e.set), new Pn(r, i, n);
}
var In = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, Ln = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, Rn = {}, zn = /* @__PURE__ */ new WeakMap(), Bn = void 0;
function Vn() {
	return Bn;
}
function Hn(e, t = !1, n = Bn) {
	if (n) {
		let t = zn.get(n);
		t || zn.set(n, t = []), t.push(e);
	}
}
function Un(e, t, n = d) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ fn(e) || i === !1 || i === 0 ? Wn(e, 1) : Wn(e), u, f, m, h, g = !1, _ = !1;
	if (/* @__PURE__ */ _n(e) ? (f = () => e.value, g = /* @__PURE__ */ fn(e)) : /* @__PURE__ */ un(e) ? (f = () => l(e), g = !0) : x(e) ? (_ = !0, g = e.some((e) => /* @__PURE__ */ un(e) || /* @__PURE__ */ fn(e)), f = () => e.map((e) => {
		if (/* @__PURE__ */ _n(e)) return e.value;
		if (/* @__PURE__ */ un(e)) return l(e);
		if (T(e)) return c ? c(e, 2) : e();
	})) : f = T(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (m) {
			lt();
			try {
				m();
			} finally {
				ut();
			}
		}
		let t = Bn;
		Bn = u;
		try {
			return c ? c(e, 3, [h]) : e(h);
		} finally {
			Bn = t;
		}
	} : p, t && i) {
		let e = f, t = i === !0 ? Infinity : i;
		f = () => Wn(e(), t);
	}
	let y = Ye(), b = () => {
		u.stop(), y && y.active && v(y.effects, u);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return b(), n;
		};
	}
	let S = _ ? Array(e.length).fill(Rn) : Rn, C = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || g || (_ ? n.some((e, t) => de(e, S[t])) : de(n, S))) {
					m && m();
					let e = Bn;
					Bn = u;
					try {
						let e = [
							n,
							S === Rn ? void 0 : _ && S[0] === Rn ? [] : S,
							h
						];
						S = n, c ? c(t, 3, e) : t(...e);
					} finally {
						Bn = e;
					}
				}
			} else u.run();
		}
	};
	return s && s(C), u = new Ze(f), u.scheduler = o ? () => o(C, !1) : C, h = (e) => Hn(e, !1, u), m = u.onStop = () => {
		let e = zn.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			zn.delete(u);
		}
	}, t ? r ? C(!0) : S = u.run() : o ? o(C.bind(null, !0), !0) : u.run(), b.pause = u.pause.bind(u), b.resume = u.resume.bind(u), b.stop = b, b;
}
function Wn(e, t = Infinity, n) {
	if (t <= 0 || !O(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ _n(e)) Wn(e.value, t, n);
	else if (x(e)) for (let r = 0; r < e.length; r++) Wn(e[r], t, n);
	else if (C(e) || S(e)) e.forEach((e) => {
		Wn(e, t, n);
	});
	else if (ie(e)) {
		for (let r in e) Wn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Wn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@vue+runtime-core@3.5.43/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Gn = [];
function Kn(e) {
	Gn.push(e);
}
function qn() {
	Gn.pop();
}
function Jn(e, t) {}
var Yn = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, Xn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Zn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		$n(e, t, n);
	}
}
function Qn(e, t, n, r) {
	if (T(e)) {
		let i = Zn(e, t, n, r);
		return i && te(i) && i.catch((e) => {
			$n(e, t, n);
		}), i;
	}
	if (x(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Qn(e[a], t, n, r));
		return i;
	}
}
function $n(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || d;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			lt(), Zn(a, null, 10, [
				e,
				i,
				o
			]), ut();
			return;
		}
	}
	er(e, n, i, r, o);
}
function er(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var tr = [], nr = -1, rr = [], ir = null, ar = 0, or = /* @__PURE__ */ Promise.resolve(), sr = null;
function cr(e) {
	let t = sr || or;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function lr(e) {
	let t = nr + 1, n = tr.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = tr[r], a = hr(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function ur(e) {
	if (!(e.flags & 1)) {
		let t = hr(e), n = tr[tr.length - 1];
		!n || !(e.flags & 2) && t >= hr(n) ? tr.push(e) : tr.splice(lr(t), 0, e), e.flags |= 1, dr();
	}
}
function dr() {
	sr ||= or.then(gr);
}
function fr(e) {
	if (!x(e)) ir && e.id === -1 ? ir.splice(ar + 1, 0, e) : e.flags & 1 || (rr.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) rr.push(e[t]);
	dr();
}
function pr(e, t, n = nr + 1) {
	for (; n < tr.length; n++) {
		let t = tr[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			tr.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function mr(e) {
	if (rr.length) {
		let e = [...new Set(rr)].sort((e, t) => hr(e) - hr(t));
		if (rr.length = 0, ir) {
			for (let t = 0; t < e.length; t++) ir.push(e[t]);
			return;
		}
		for (ir = e, ar = 0; ar < ir.length; ar++) {
			let e = ir[ar];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		ir = null, ar = 0;
	}
}
var hr = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function gr(e) {
	try {
		for (nr = 0; nr < tr.length; nr++) {
			let e = tr[nr];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Zn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; nr < tr.length; nr++) {
			let e = tr[nr];
			e && (e.flags &= -2);
		}
		nr = -1, tr.length = 0, mr(e), sr = null, (tr.length || rr.length) && gr(e);
	}
}
var _r, vr = [];
function yr(e, t) {
	_r = e, _r ? (_r.enabled = !0, vr.forEach(({ event: e, args: t }) => _r.emit(e, ...t)), vr = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		yr(e, t);
	}), setTimeout(() => {
		_r || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vr = []);
	}, 3e3)) : vr = [];
}
var br = null, xr = null;
function Sr(e) {
	let t = br;
	return br = e, xr = e && e.type.__scopeId || null, t;
}
function Cr(e) {
	xr = e;
}
function wr() {
	xr = null;
}
var Tr = (e) => Er;
function Er(e, t = br, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Os(-1);
		let i = Sr(t), a = Cs.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Cs.length; e > a; e--) Es();
			Sr(i), r._d && Os(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Dr(e, t) {
	if (br === null) return e;
	let n = gc(br), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = d] = t[e];
		i && (T(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && Wn(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function Or(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (lt(), Qn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), ut());
	}
}
function kr(e, t) {
	if (Qs) {
		let n = Qs.provides, r = Qs.parent && Qs.parent.provides;
		r === n && (n = Qs.provides = Object.create(r)), n[e] = t;
	}
}
function Ar(e, t, n = !1) {
	let r = $s();
	if (r || go) {
		let i = go ? go._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && T(t) ? t.call(r && r.proxy) : t;
	}
}
function jr() {
	return !!($s() || go);
}
var Mr = /* @__PURE__ */ Symbol.for("v-scx"), Nr = () => Ar(Mr);
function Pr(e, t) {
	return Rr(e, null, t);
}
function Fr(e, t) {
	return Rr(e, null, { flush: "post" });
}
function Ir(e, t) {
	return Rr(e, null, { flush: "sync" });
}
function Lr(e, t, n) {
	return Rr(e, t, n);
}
function Rr(e, t, n = d) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = _({}, n), c = t && r || !t && a !== "post", l;
	if (ac) {
		if (a === "sync") {
			let e = Nr();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = p, e.resume = p, e.pause = p, e;
		}
	}
	let u = Qs;
	s.call = (e, t, n) => Qn(e, u, t, n);
	let f = !1;
	a === "post" ? s.scheduler = (e) => {
		Yo(e, u && u.suspense);
	} : a !== "sync" && (f = !0, s.scheduler = (e, t) => {
		t ? e() : ur(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), f && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let m = Un(e, t, s);
	return ac && (l ? l.push(m) : c && m()), m;
}
function zr(e, t, n) {
	let r = this.proxy, i = E(e) ? e.includes(".") ? Br(r, e) : () => r[e] : e.bind(r, r), a;
	T(t) ? a = t : (a = t.handler, n = t);
	let o = nc(this), s = Rr(i, a.bind(r), n);
	return o(), s;
}
function Br(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Vr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ Symbol("_vte"), Ur = (e) => e.__isTeleport, Wr = (e) => e && (e.disabled || e.disabled === ""), Gr = (e) => e && (e.defer || e.defer === ""), Kr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Jr = (e, t) => {
	let n = e && e.to;
	return E(n) ? t ? t(n) : null : n;
}, Yr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Wr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Wr(e.props), r = e.target = Jr(e.props, m), a = ei(r, e, h, p);
			r && (o !== "svg" && Kr(r) ? o = "svg" : o !== "mathml" && qr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), $r(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Vr.get(e) === t) {
					if (Vr.delete(e), Wr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), $r(e, !0);
					}
					x(e);
				}
			};
			Vr.set(e, t), Yo(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Gr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), $r(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Vr.get(e);
			if (u) {
				u.flags |= 8, Vr.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Wr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || Kr(p) ? o = "svg" : (o === "mathml" || qr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), ns(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = Jr(t.props, m);
				e && (t.target = e, Xr(t, e, null, l, 0));
			} else g && Xr(t, p, h, l, 1);
			$r(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Wr(f), m = a || !p, h = Vr.get(e);
		if (h && (h.flags |= 8, Vr.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: Xr,
	hydrate: Zr
};
function Xr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Vr.has(e) && (!d || Wr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Zr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Jr(t.props, c), h = Wr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || ei(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || ei(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), $r(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var Qr = Yr;
function $r(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function ei(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Hr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var ti = /* @__PURE__ */ Symbol("_leaveCb"), ni = /* @__PURE__ */ Symbol("_enterCb");
function ri() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return la(() => {
		e.isMounted = !0;
	}), fa(() => {
		e.isUnmounting = !0;
	}), e;
}
var ii = [Function, Array], ai = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ii,
	onEnter: ii,
	onAfterEnter: ii,
	onEnterCancelled: ii,
	onBeforeLeave: ii,
	onLeave: ii,
	onAfterLeave: ii,
	onLeaveCancelled: ii,
	onBeforeAppear: ii,
	onAppear: ii,
	onAfterAppear: ii,
	onAppearCancelled: ii
}, oi = (e) => {
	let t = e.subTree;
	return t.component ? oi(t.component) : t;
}, si = {
	name: "BaseTransition",
	props: ai,
	setup(e, { slots: t }) {
		let n = $s(), r = ri();
		return () => {
			let i = t.default && hi(t.default(), !0), a = i && i.length ? ci(i) : n.subTree ? Us() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ U(e), { mode: s } = o;
			if (r.isLeaving) return fi(a);
			let c = pi(a);
			if (!c) return fi(a);
			let l = di(c, o, r, n, (e) => l = e);
			c.type !== W && mi(c, l);
			let u = n.subTree && pi(n.subTree);
			if (u && u.type !== W && !Ns(u, c) && oi(n).type !== W) {
				let e = di(u, o, r, n);
				if (mi(u, e), s === "out-in" && c.type !== W) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, fi(a);
				s === "in-out" && c.type !== W ? e.delayLeave = (e, t, n) => {
					let i = ui(r, u);
					i[String(u.key)] = u, e[ti] = () => {
						t(), e[ti] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function ci(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== W) {
			t = n;
			break;
		}
	}
	return t;
}
var li = si;
function ui(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function di(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: p, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: _, onAfterAppear: v, onAppearCancelled: y } = t, b = String(e.key), S = ui(n, e), C = (e, t) => {
		e && Qn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), x(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, ee = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = g || c;
				else return;
			}
			t[ti] && t[ti](!0);
			let i = S[b];
			i && Ns(e, i) && i.el[ti] && i.el[ti](), C(r, [t]);
		},
		enter(t) {
			if (S[b] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) {
				if (a) r = _ || l, i = v || u, o = y || d;
				else return;
			}
			let s = !1;
			t[ni] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), ee.delayedLeave && ee.delayedLeave(), t[ni] = void 0);
			};
			let c = t[ni].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[ni] && t[ni](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[ti] = (n) => {
				a || (a = !0, r(), C(n ? h : m, [t]), t[ti] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[ti].bind(null, !1);
			S[i] = e, p ? w(p, [t, o]) : o();
		},
		clone(e) {
			let a = di(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return ee;
}
function fi(e) {
	if (Zi(e)) return e = Bs(e), e.children = null, e;
}
function pi(e) {
	if (!Zi(e)) return Ur(e.type) && e.children ? ci(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && T(n.default)) return n.default();
	}
}
function mi(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		mi(Ur(n.type) && pi(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hi(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === bs ? (o.patchFlag & 128 && i++, r = r.concat(hi(o.children, t, s))) : (t || o.type !== W) && r.push(s == null ? o : Bs(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
	return T(e) ? /* @__PURE__ */ _({ name: e.name }, t, { setup: e }) : e;
}
function _i() {
	let e = $s();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function vi(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function yi(e) {
	let t = $s(), n = /* @__PURE__ */ yn(null);
	if (t) {
		let r = t.refs === d ? t.refs = {} : t.refs;
		Object.defineProperty(r, e, {
			enumerable: !0,
			get: () => n.value,
			set: (e) => n.value = e
		});
	}
	return n;
}
function bi(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var xi = /* @__PURE__ */ new WeakMap();
function Si(e, t, n, r, i = !1) {
	if (x(e)) {
		e.forEach((e, a) => Si(e, t && (x(t) ? t[a] : t), n, r, i));
		return;
	}
	if (Ji(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Si(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? gc(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === d ? s.refs = {} : s.refs, f = s.setupState, p = /* @__PURE__ */ U(f), h = f === d ? m : (e) => !bi(u, e) && b(p, e), g = (e, t) => !(t && bi(u, t));
	if (l != null && l !== c) {
		if (Ci(t), E(l)) u[l] = null, h(l) && (f[l] = null);
		else if (/* @__PURE__ */ _n(l)) {
			let e = t;
			g(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (T(c)) Zn(c, s, 12, [o, u]);
	else {
		let t = E(c), r = /* @__PURE__ */ _n(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? h(c) ? f[c] : u[c] : g(c) || !e.k ? c.value : u[e.k];
					if (i) x(n) && v(n, a);
					else if (x(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], h(c) && (f[c] = u[c]);
					else {
						let t = [a];
						g(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, h(c) && (f[c] = o)) : r && (g(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), xi.delete(e);
				};
				t.id = -1, xi.set(e, t), Yo(t, n);
			} else Ci(e), s();
		}
	}
}
function Ci(e) {
	let t = xi.get(e);
	t && (t.flags |= 8, xi.delete(e));
}
var wi = !1, Ti = () => {
	wi ||= (console.error("Hydration completed but contains mismatches."), !0);
}, Ei = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Di = (e) => e.namespaceURI.includes("MathML"), Oi = (e) => {
	if (e.nodeType === 1) {
		if (Ei(e)) return "svg";
		if (Di(e)) return "mathml";
	}
}, ki = (e) => e.nodeType === 8;
function Ai(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: o, remove: s, insert: c, createComment: l } } = e, u = (e, t) => {
		t.hasChildNodes() ? (d(t.firstChild, e, null, null, null), mr(), t._vnode = e) : (n(null, e, t), mr(), t._vnode = e);
	}, d = (n, r, s, l, u, h = !1) => {
		h ||= !!r.dynamicChildren;
		let b = ki(n) && n.data === "[", x = () => g(n, r, s, l, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: ee } = r, T = n.nodeType;
		r.el = n, ee === -2 && (h = !1, r.dynamicChildren = null);
		let E = null;
		switch (S) {
			case xs:
				T === 3 ? (n.data !== r.children && (Ti(), n.data = r.children), E = a(n)) : r.children === "" ? (c(r.el = i(""), o(n), n), E = n) : E = x();
				break;
			case W:
				y(n) ? (E = a(n), v(r.el = n.content.firstChild, n, s)) : E = T !== 8 || b ? x() : a(n);
				break;
			case Ss:
				if (b && (n = a(n), T = n.nodeType), T === 1 || T === 3) {
					E = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += E.nodeType === 1 ? E.outerHTML : E.data), t === r.staticCount - 1 && (r.anchor = E), E = a(E);
					return b ? a(E) : E;
				}
				x();
				break;
			case bs:
				E = b ? m(n, r, s, l, u, h) : x();
				break;
			default: if (w & 1) E = (T !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !y(n) ? x() : f(n, r, s, l, u, h);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = o(n);
				if (E = b ? _(n) : ki(n) && n.data === "teleport start" ? _(n, n.data, "teleport end") : a(n), t(r, e, null, s, l, Oi(e), h), (Ji(r) || r.component.asyncDep) && !r.component.subTree) {
					let t;
					b ? (t = G(Ss), t.anchor = E ? E.previousSibling : e.lastChild) : t = n.nodeType === 3 ? Vs("") : G(n.nodeType === 8 ? W : "div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? E = T === 8 ? r.type.hydrate(n, r, s, l, u, h, e, p) : x() : w & 128 && (E = r.type.hydrate(n, r, s, l, Oi(o(n)), u, h, e, d));
		}
		return C != null && Si(C, null, l, r), E;
	}, f = (e, t, n, i, a, o) => {
		o ||= !!t.dynamicChildren;
		let { type: c, dynamicProps: l, props: u, patchFlag: d, shapeFlag: f, dirs: m, transition: g } = t, _ = c === "input" || c === "option", b = !!l;
		if (_ || b || d !== -1) {
			m && Or(t, null, n, "created");
			let c = !1;
			if (y(e)) {
				c = ts(null, g) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (c) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), g.beforeEnter(r);
				}
				v(r, e, n), t.el = e = r;
			}
			if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
				let r = p(e.firstChild, t, e, n, i, a, o);
				for (r && !Fi(e, 1) && Ti(); r;) {
					let e = r;
					r = r.nextSibling, s(e);
				}
			} else if (f & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (Fi(e, 0) || Ti(), e.textContent = t.children);
			}
			if (u) {
				if (_ || b || !o || d & 48) {
					let t = e.tagName.includes("-"), i = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
					for (let a in u) if (_ && (a.endsWith("value") || a === "indeterminate") || h(a) && !ae(a) || a[0] === "." || t && !ae(a) || l && l.includes(a)) {
						if (Mi(e, a, u[a])) continue;
						r(e, a, null, u[a], i, n);
					}
				} else if (u.onClick) r(e, "onClick", null, u.onClick, void 0, n);
				else if (d & 4 && /* @__PURE__ */ un(u.style)) for (let e in u.style) u.style[e];
			}
			let x;
			(x = u && u.onVnodeBeforeMount) && Js(x, n, t), m && Or(t, null, n, "beforeMount"), ((x = u && u.onVnodeMounted) || m || c) && _s(() => {
				x && Js(x, n, t), c && g.enter(e), m && Or(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, p = (e, t, r, o, s, l, u) => {
		u ||= !!t.dynamicChildren;
		let f = t.children, p = f.length, m = !1;
		for (let t = 0; t < p; t++) {
			let h = u ? f[t] : f[t] = Ws(f[t]), g = h.type === xs;
			e ? (g && !u && t + 1 < p && Ws(f[t + 1]).type === xs && (c(i(e.data.slice(h.children.length)), r, a(e)), e.data = h.children), e = d(e, h, o, s, l, u)) : g && !h.children ? c(h.el = i(""), r) : (m || (m = !0, Fi(r, 1) || Ti()), n(null, h, r, null, o, s, Oi(r), l));
		}
		return e;
	}, m = (e, t, n, r, i, s) => {
		let { slotScopeIds: u } = t;
		u && (i = i ? i.concat(u) : u);
		let d = o(e), f = p(a(e), t, d, n, r, i, s);
		return f && ki(f) && f.data === "]" ? a(t.anchor = f) : (Ti(), c(t.anchor = l("]"), d, f), f);
	}, g = (e, t, r, i, c, l) => {
		if (Li(e, t) || Ti(), t.el = null, l) {
			let t = _(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) s(n);
				else break;
			}
		}
		let u = a(e), d = o(e);
		return s(e), n(null, t, d, u, r, i, Oi(d), c), r && (r.vnode.el = t.el, Ao(r, t.el)), u;
	}, _ = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && ki(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, v = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [u, d];
}
var ji = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"href",
	"poster"
]);
function Mi(e, t, n) {
	return ji.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
var Ni = "data-allow-mismatch", Pi = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function Fi(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(Ni);) e = e.parentElement;
	return Ii(e && e.getAttribute(Ni), t);
}
function Ii(e, t) {
	if (e == null) return !1;
	if (e === "") return !0;
	{
		let n = e.split(",");
		return t === 0 && n.includes("children") ? !0 : n.includes(Pi[t]);
	}
}
function Li(e, t) {
	return Fi(e.parentElement, 1) || Ri(e) || zi(t);
}
function Ri(e) {
	return e.nodeType === 1 && Ii(e.getAttribute(Ni), 1);
}
function zi({ props: e }) {
	let t = e && e[Ni];
	return typeof t == "string" && Ii(t, 1);
}
var Bi = _e().requestIdleCallback || ((e) => setTimeout(e, 1)), Vi = _e().cancelIdleCallback || ((e) => clearTimeout(e)), Hi = (e = 1e4) => (t) => {
	let n = Bi(t, { timeout: e });
	return () => Vi(n);
};
function Ui(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Wi = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e);
	return n((e) => {
		if (e instanceof Element) {
			if (Ui(e)) return t(), r.disconnect(), !1;
			r.observe(e);
		}
	}), () => r.disconnect();
}, Gi = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, Ki = (e = []) => (t, n) => {
	E(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function qi(e, t) {
	if (ki(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (ki(r)) {
				if (r.data === "]") {
					if (--n === 0) break;
				} else r.data === "[" && n++;
			}
			r = r.nextSibling;
		}
	} else t(e);
}
var Ji = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Yi(e) {
	T(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => e !== l && l ? l : (t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), u = t, t)));
	};
	return /* @__PURE__ */ gi({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = e.isConnected, i = !1;
			(t.bu ||= []).push(() => i = !0);
			let o = () => {
				i || !e.parentNode || r && !e.isConnected || n();
			}, s = a ? () => {
				let n = a(o, (t) => qi(e, t));
				n && (t.bum ||= []).push(n);
			} : o;
			u ? s() : p().then(() => !t.isUnmounted && s());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = Qs;
			if (vi(e), u) return () => Xi(u, e);
			let t = (t) => {
				l = null, $n(t, e, 13, !r);
			};
			if (s && e.suspense || ac) return p().then((t) => () => Xi(t, e)).catch((e) => (t(e), () => r ? G(r, { error: e }) : null));
			let a = /* @__PURE__ */ vn(!1), c = /* @__PURE__ */ vn(), d = /* @__PURE__ */ vn(!!i), f, m;
			return pa(() => {
				f != null && clearTimeout(f), m != null && clearTimeout(m);
			}), i && (m = setTimeout(() => {
				e.isUnmounted || (d.value = !1);
			}, i)), o != null && (f = setTimeout(() => {
				if (!e.isUnmounted && !a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o)), p().then(() => {
				e.isUnmounted || (a.value = !0, e.parent && Zi(e.parent.vnode) && e.parent.update());
			}).catch((n) => {
				e.isUnmounted ? l = null : (t(n), c.value = n);
			}), () => {
				if (a.value && u) return Xi(u, e);
				if (c.value && r) return G(r, { error: c.value });
				if (n && !d.value) return Xi(n, e);
			};
		}
	});
}
function Xi(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = G(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var Zi = (e) => e.type.__isKeepAlive, Qi = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = $s(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null, s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), Yo(() => {
				a.isDeactivated = !1, a.a && fe(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && Js(t, a.parent, e);
			}, s);
		}, r.deactivate = (e) => {
			let t = e.component;
			as(t.m), as(t.a), l(e, f, null, 1, s), Yo(() => {
				t.da && fe(t.da);
				let n = e.props && e.props.onVnodeUnmounted;
				n && Js(n, t.parent, e), t.isDeactivated = !0;
			}, s);
		};
		function p(e) {
			ia(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = _c(Ji(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !Ns(t, o)) ? p(t) : o && ia(o), i.delete(e), a.delete(e);
		}
		Lr(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => $i(e, t)), t && m((e) => !$i(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			g != null && (ss(n.subTree.type) ? Yo(() => {
				let e = aa(n.subTree);
				e.component && i.set(g, e);
			}, n.subTree.suspense) : i.set(g, aa(n.subTree)));
		};
		return la(_), da(_), fa(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = aa(t);
				if (e.type === i.type && e.key === i.key) {
					ia(i);
					let e = i.component.da;
					e && Yo(e, r);
				} else p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return o = null, n;
			if (!Ms(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = aa(r);
			if (s.type === W) return o = null, s;
			let c = s.type, l = _c(Ji(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !$i(u, l)) || d && l && $i(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = Bs(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && mi(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, ss(r.type) ? r : s;
		};
	}
};
function $i(e, t) {
	return x(e) ? e.some((e) => $i(e, t)) : E(e) ? e.split(",").includes(t) : ee(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function ea(e, t) {
	na(e, "a", t);
}
function ta(e, t) {
	na(e, "da", t);
}
function na(e, t, n = Qs) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (oa(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Zi(e.parent.vnode) && ra(r, t, n, e), e = e.parent;
	}
}
function ra(e, t, n, r) {
	let i = oa(t, e, r, !0);
	pa(() => {
		v(r[t], i);
	}, n);
}
function ia(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function aa(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function oa(e, t, n = Qs, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			lt();
			let i = nc(n), a = Qn(t, n, e, r);
			return i(), ut(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var sa = (e) => (t, n = Qs) => {
	(!ac || e === "sp") && oa(e, (...e) => t(...e), n);
}, ca = sa("bm"), la = sa("m"), ua = sa("bu"), da = sa("u"), fa = sa("bum"), pa = sa("um"), ma = sa("sp"), ha = sa("rtg"), ga = sa("rtc");
function _a(e, t = Qs) {
	oa("ec", e, t);
}
var va = "components", ya = "directives";
function ba(e, t) {
	return wa(va, e, !0, t) || e;
}
var xa = /* @__PURE__ */ Symbol.for("v-ndc");
function Sa(e) {
	return E(e) ? wa(va, e, !1) || e : e || xa;
}
function Ca(e) {
	return wa(ya, e);
}
function wa(e, t, n = !0, r = !1) {
	let i = br || Qs;
	if (i) {
		let n = i.type;
		if (e === va) {
			let e = _c(n, !1);
			if (e && (e === t || e === M(t) || e === le(M(t)))) return n;
		}
		let a = Ta(i[e] || n[e], t) || Ta(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Ta(e, t) {
	return e && (e[t] || e[M(t)] || e[le(M(t))]);
}
function Ea(e, t, n, r) {
	let i, a = n && n[r], o = x(e);
	if (o || E(e)) {
		let n = o && /* @__PURE__ */ un(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ fn(e), s = /* @__PURE__ */ dn(e), e = wt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? gn(hn(e[n])) : hn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (O(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function Da(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (x(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function Oa(e, t, n, r, i, a) {
	if (n ??= {}, br.ce || br.parent && Ji(br.parent) && br.parent.ce) {
		let e = a != null && n.key == null ? _({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), Ts(), js(bs, null, [G("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let s = Cs.length;
	Ts();
	let c;
	try {
		let i = o && ka(o(n)), s = n.key || a || i && i.key;
		c = js(bs, { key: (s && !D(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = Cs.length; e > s; e--) Es();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function ka(e) {
	return e.some((e) => !Ms(e) || !(e.type === W || e.type === bs && !ka(e.children))) ? e : null;
}
function Aa(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : ue(r)] = e[r];
	return n;
}
var ja = (e) => e ? ic(e) ? gc(e) : ja(e.parent) : null, Ma = /* @__PURE__ */ _(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => ja(e.parent),
	$root: (e) => ja(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => no(e),
	$forceUpdate: (e) => e.f ||= () => {
		ur(e.update);
	},
	$nextTick: (e) => e.n ||= cr.bind(e.proxy),
	$watch: (e) => zr.bind(e)
}), Na = (e, t) => e !== d && !e.__isScriptSetup && b(e, t), Pa = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (Na(r, t)) return o[t] = 1, r[t];
			else if (i !== d && b(i, t)) return o[t] = 2, i[t];
			else if (b(a, t)) return o[t] = 3, a[t];
			else if (n !== d && b(n, t)) return o[t] = 4, n[t];
			else Za && (o[t] = 0);
		}
		let l = Ma[t], u, f;
		if (l) return t === "$attrs" && bt(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== d && b(n, t)) return o[t] = 4, n[t];
		if (f = c.config.globalProperties, b(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Na(i, t) ? (i[t] = n, !0) : r !== d && b(r, t) ? (r[t] = n, !0) : b(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== d && s[0] !== "$" && b(e, s) || Na(t, s) || b(a, s) || b(r, s) || b(Ma, s) || b(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? b(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
}, Fa = /* @__PURE__ */ _({}, Pa, {
	get(e, t) {
		if (t !== Symbol.unscopables) return Pa.get(e, t, e);
	},
	has(e, t) {
		return t[0] !== "_" && !ye(t);
	}
});
function Ia() {
	return null;
}
function La() {
	return null;
}
function Ra(e) {}
function za(e) {}
function Ba() {
	return null;
}
function Va() {}
function Ha(e, t) {
	return null;
}
function Ua() {
	return Ga("useSlots").slots;
}
function Wa() {
	return Ga("useAttrs").attrs;
}
function Ga(e) {
	let t = $s();
	return t.setupContext ||= hc(t);
}
function Ka(e) {
	return x(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function qa(e, t) {
	let n = Ka(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? x(r) || T(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function Ja(e, t) {
	return !e || !t ? e || t : x(e) && x(t) ? e.concat(t) : _({}, Ka(e), Ka(t));
}
function Ya(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function Xa(e) {
	let t = $s(), n = ac, r = e();
	rc(), n && tc(!1);
	let i = () => {
		nc(t), n && tc(!0);
	}, a = () => {
		$s() !== t && t.scope.off(), rc(), n && tc(!1);
	};
	return te(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
var Za = !0;
function Qa(e) {
	let t = no(e), n = e.proxy, r = e.ctx;
	Za = !1, t.beforeCreate && eo(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: m, updated: h, activated: g, deactivated: _, beforeDestroy: v, beforeUnmount: y, destroyed: b, unmounted: S, render: C, renderTracked: w, renderTriggered: ee, errorCaptured: E, serverPrefetch: D, expose: te, inheritAttrs: k, components: ne, directives: re, filters: ie } = t;
	if (l && $a(l, r, null), o) for (let e in o) {
		let t = o[e];
		T(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		O(t) && (e.data = /* @__PURE__ */ an(t));
	}
	if (Za = !0, a) for (let e in a) {
		let t = a[e], i = yc({
			get: T(t) ? t.bind(n, n) : T(t.get) ? t.get.bind(n, n) : p,
			set: !T(t) && T(t.set) ? t.set.bind(n) : p
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) to(s[e], r, n, e);
	if (c) {
		let e = T(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			kr(t, e[t]);
		});
	}
	u && eo(u, e, "c");
	function A(e, t) {
		x(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(ca, d), A(la, f), A(ua, m), A(da, h), A(ea, g), A(ta, _), A(_a, E), A(ga, w), A(ha, ee), A(fa, y), A(pa, S), A(ma, D), x(te)) {
		if (te.length) {
			let t = e.exposed ||= {};
			te.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	C && e.render === p && (e.render = C), k != null && (e.inheritAttrs = k), ne && (e.components = ne), re && (e.directives = re), D && vi(e);
}
function $a(e, t, n = p) {
	x(e) && (e = so(e));
	for (let n in e) {
		let r = e[n], i;
		i = O(r) ? "default" in r ? Ar(r.from || n, r.default, !0) : Ar(r.from || n) : Ar(r), /* @__PURE__ */ _n(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function eo(e, t, n) {
	Qn(x(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function to(e, t, n, r) {
	let i = r.includes(".") ? Br(n, r) : () => n[r];
	if (E(e)) {
		let n = t[e];
		T(n) && Lr(i, n);
	} else if (T(e)) Lr(i, e.bind(n));
	else if (O(e)) {
		if (x(e)) e.forEach((e) => to(e, t, n, r));
		else {
			let r = T(e.handler) ? e.handler.bind(n) : t[e.handler];
			T(r) && Lr(i, r, e);
		}
	}
}
function no(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ro(c, e, o, !0)), ro(c, t, o)), O(t) && a.set(t, c), c;
}
function ro(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ro(e, a, n, !0), i && i.forEach((t) => ro(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = io[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var io = {
	data: ao,
	props: uo,
	emits: uo,
	methods: lo,
	computed: lo,
	beforeCreate: co,
	created: co,
	beforeMount: co,
	mounted: co,
	beforeUpdate: co,
	updated: co,
	beforeDestroy: co,
	beforeUnmount: co,
	destroyed: co,
	unmounted: co,
	activated: co,
	deactivated: co,
	errorCaptured: co,
	serverPrefetch: co,
	components: lo,
	directives: lo,
	watch: fo,
	provide: ao,
	inject: oo
};
function ao(e, t) {
	return t ? e ? function() {
		return _(T(e) ? e.call(this, this) : e, T(t) ? t.call(this, this) : t);
	} : t : e;
}
function oo(e, t) {
	return lo(so(e), so(t));
}
function so(e) {
	if (x(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function co(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function lo(e, t) {
	return e ? _(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function uo(e, t) {
	return e ? x(e) && x(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _(/* @__PURE__ */ Object.create(null), Ka(e), Ka(t ?? {})) : t;
}
function fo(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = _(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = co(e[r], t[r]);
	return n;
}
function po() {
	return {
		app: null,
		config: {
			isNativeTag: m,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var mo = 0;
function ho(e, t) {
	return function(n, r = null) {
		T(n) || (n = _({}, n)), r != null && !O(r) && (r = null);
		let i = po(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: mo++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: wc,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && T(e.install) ? (a.add(e), e.install(c, ...t)) : T(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || G(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, gc(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Qn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = go;
				go = c;
				try {
					return e();
				} finally {
					go = t;
				}
			}
		};
		return c;
	};
}
var go = null;
function _o(e, t, n = d) {
	let r = $s(), i = M(t), a = N(t), o = vo(e, i), s = On((o, s) => {
		let c, l = d, u;
		return Ir(() => {
			let t = e[i];
			de(c, t) && (c = t, s());
		}), {
			get() {
				return o(), n.get ? n.get(c) : c;
			},
			set(e) {
				let o = n.set ? n.set(e) : e;
				if (!de(o, c) && !(l !== d && de(e, l))) return;
				let f = r.vnode.props, p = !!(f && (t in f || i in f || a in f) && (`onUpdate:${t}` in f || `onUpdate:${i}` in f || `onUpdate:${a}` in f));
				p || (c = e, s()), r.emit(`update:${t}`, o), de(e, l) && (de(e, o) && !de(o, u) || p && l !== d && !de(o, c)) && s(), l = e, u = o;
			}
		};
	});
	return s[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? o || d : s,
				done: !1
			} : { done: !0 };
		} };
	}, s;
}
var vo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${M(t)}Modifiers`] || e[`${N(t)}Modifiers`];
function yo(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || d, i = n, a = t.startsWith("update:"), o = a && vo(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => E(e) ? e.trim() : e)), o.number && (i = i.map(me)));
	let s, c = r[s = ue(t)] || r[s = ue(M(t))];
	!c && a && (c = r[s = ue(N(t))]), c && Qn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Qn(l, e, 6, i);
	}
}
var bo = /* @__PURE__ */ new WeakMap();
function xo(e, t, n = !1) {
	let r = n ? bo : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!T(e)) {
		let r = (e) => {
			let n = xo(e, t, !0);
			n && (s = !0, _(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (O(e) && r.set(e, null), null) : (x(a) ? a.forEach((e) => o[e] = null) : _(o, a), O(e) && r.set(e, o), o);
}
function So(e, t) {
	return !e || !h(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), b(e, t[0].toLowerCase() + t.slice(1)) || b(e, N(t)) || b(e, t));
}
function Co(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, _ = Sr(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ws(l.call(t, e, u, d, p, f, m)), y = s;
		} else {
			let e = t;
			v = Ws(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), y = t.props ? s : To(s);
		}
	} catch (t) {
		Cs.length = 0, $n(t, e, 1), v = G(W);
	}
	let b = v;
	if (y && h !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(g) && (y = Eo(y, a)), b = Bs(b, y, !1, !0));
	}
	return n.dirs && (b = Bs(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && mi(Ur(b.type) && pi(b) || b, n.transition), v = b, Sr(_), v;
}
function wo(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Ms(r)) {
			if (r.type !== W || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var To = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || h(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Eo = (e, t) => {
	let n = {};
	for (let r in e) (!g(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Do(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Oo(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ko(o, r, n) && !So(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Oo(r, o, l) : !!o;
	return !1;
}
function Oo(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ko(t, e, a) && !So(n, a)) return !0;
	}
	return !1;
}
function ko(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && O(r) && O(i) ? !Ve(r, i) : r !== i;
}
function Ao({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var jo = {}, Mo = () => Object.create(jo), No = (e) => Object.getPrototypeOf(e) === jo;
function Po(e, t, n, r = !1) {
	let i = {}, a = Mo();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Io(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ on(i) : e.type.props ? i : a, e.attrs = a;
}
function Fo(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ U(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (So(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (b(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = M(o);
						i[t] = Lo(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Io(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !b(t, a) && ((r = N(a)) === a || !b(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Lo(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !b(t, e)) && (delete a[e], l = !0);
	}
	l && xt(e.attrs, "set", "");
}
function Io(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (ae(c)) continue;
		let l = t[c], u;
		i && b(i, u = M(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : So(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ U(n), r = s || d;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Lo(i, t, s, r[s], e, !b(r, s));
		}
	}
	return o;
}
function Lo(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = b(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && T(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = nc(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === N(n)) && (r = !0));
	}
	return r;
}
var Ro = /* @__PURE__ */ new WeakMap();
function zo(e, t, n = !1) {
	let r = n ? Ro : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!T(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = zo(e, t, !0);
			_(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return O(e) && r.set(e, f), f;
	if (x(a)) for (let e = 0; e < a.length; e++) {
		let t = M(a[e]);
		Bo(t) && (o[t] = d);
	}
	else if (a) for (let e in a) {
		let t = M(e);
		if (Bo(t)) {
			let n = a[e], r = o[t] = x(n) || T(n) ? { type: n } : _({}, n), i = r.type, c = !1, l = !0;
			if (x(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = T(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = T(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || b(r, "default")) && s.push(t);
		}
	}
	let l = [o, s];
	return O(e) && r.set(e, l), l;
}
function Bo(e) {
	return e[0] !== "$" && !ae(e);
}
var Vo = (e) => e === "_" || e === "_ctx" || e === "$stable", Ho = (e) => x(e) ? e.map(Ws) : [Ws(e)], Uo = (e, t, n) => {
	if (t._n) return t;
	let r = Er((...e) => Ho(t(...e)), n);
	return r._c = !1, r;
}, Wo = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Vo(n)) continue;
		let i = e[n];
		if (T(i)) t[n] = Uo(n, i, r);
		else if (i != null) {
			let e = Ho(i);
			t[n] = () => e;
		}
	}
}, Go = (e, t) => {
	let n = Ho(t);
	e.slots.default = () => n;
}, Ko = (e, t, n) => {
	for (let r in t) (n || !Vo(r)) && (e[r] = t[r]);
}, qo = (e, t, n) => {
	let r = e.slots = Mo();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ko(r, t, n), n && pe(r, "_", e, !0)) : Wo(t, r);
	} else t && Go(e, t);
}, Jo = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = d;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Ko(i, t, n) : (a = !t.$stable, Wo(t, i)), o = t;
	} else t && (Go(e, t), o = { default: 1 });
	if (a) for (let e in i) !Vo(e) && o[e] == null && delete i[e];
}, Yo = _s;
function Xo(e) {
	return Qo(e);
}
function Zo(e) {
	return Qo(e, Ai);
}
function Qo(e, t) {
	let n = _e();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: m, nextSibling: h, setScopeId: g = p, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ns(e, t) && (r = me(e), N(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === f && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case xs:
				y(e, t, n, r);
				break;
			case W:
				b(e, t, n, r);
				break;
			case Ss:
				e ?? x(t, n, r, o);
				break;
			case bs:
				k(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ne(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, ve);
		}
		u != null && i ? Si(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Si(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), D(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && E(e.children, f, null, i, s, $o(e, c), l, d), _ && Or(e, null, i, "created"), T(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !ae(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Js(p, i, e);
		}
		_ && Or(e, null, i, "beforeMount");
		let v = ts(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && Yo(() => {
			try {
				p && Js(p, i, e), v && g.enter(f), _ && Or(e, null, i, "mounted");
			} finally {}
		}, s);
	}, T = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ss(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Gs(e[l]) : Ws(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, D = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: f, dirs: p } = t;
		l |= e.patchFlag & 16;
		let m = e.props || d, h = t.props || d, g;
		if (n && es(n, !1), (g = h.onVnodeBeforeUpdate) && Js(g, n, t, e), p && Or(t, e, n, "beforeUpdate"), n && es(n, !0), f && (!e.dynamicChildren || e.dynamicChildren.length !== f.length) && (l = 0, s = !1, f = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && u(c, ""), f ? O(e.dynamicChildren, f, c, n, r, $o(t, i), o) : s || oe(e, t, c, null, n, r, $o(t, i), o, !1), l > 0) {
			if (l & 16) te(c, m, h, n, i);
			else if (l & 2 && m.class !== h.class && a(c, "class", null, h.class, i), l & 4 && a(c, "style", m.style, h.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = m[r], s = h[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && f == null && te(c, m, h, n, i);
		((g = h.onVnodeUpdated) || p) && Yo(() => {
			g && Js(g, n, t, e), p && Or(t, e, n, "updated");
		}, r);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === bs || !Ns(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, te = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== d) for (let o in t) !ae(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ae(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, k = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), E(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && ns(e, t, !0)) : oe(e, t, n, f, a, o, c, l, u);
	}, ne = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : re(t, n, r, i, a, o, c) : ie(e, t, c);
	}, re = (e, t, n, r, i, a, o) => {
		let s = e.component = Zs(e, r, i);
		if (Zi(e) && (s.ctx.renderer = ve), oc(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, A, o), !e.el) {
				let r = s.subTree = G(W);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else A(s, e, t, n, i, a, o);
	}, ie = (e, t, n) => {
		let r = t.component = e.component;
		if (Do(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, j(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, A = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = is(e);
					if (n) {
						t && (t.el = c.el, j(e, t, o)), n.asyncDep.then(() => {
							Yo(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				es(e, !1), t ? (t.el = c.el, j(e, t, o)) : t = c, n && fe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Js(d, s, t, c), es(e, !0);
				let f = Co(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), me(p), e, i, a), t.el = f.el, u === null && Ao(e, f.el), r && Yo(r, i), (d = t.props && t.props.onVnodeUpdated) && Yo(() => Js(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Ji(t);
				if (es(e, !1), l && fe(l), !m && (o = c && c.onVnodeBeforeMount) && Js(o, d, t), es(e, !0), s && be) {
					let t = () => {
						e.subTree = Co(e), be(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Co(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Yo(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Yo(() => Js(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Ji(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Yo(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ze(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => ur(u), es(e, !0), l();
	}, j = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Fo(e, t.props, r, n), Jo(e, t.children, n), lt(), pr(e), ut();
	}, oe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				M(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				se(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && pe(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? M(l, f, n, r, i, a, o, s, c) : pe(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && E(f, n, r, i, a, o, s, c));
	}, se = (e, t, n, r, i, a, o, s, c) => {
		e ||= f, t ||= f;
		let l = e.length, u = t.length, d = Math.min(l, u), p = 0;
		for (; p < d; p++) {
			let r = t[p] = c ? Gs(t[p]) : Ws(t[p]);
			v(e[p], r, n, null, i, a, o, s, c);
		}
		l > u ? pe(e, i, a, !0, !1, d) : E(t, n, r, i, a, o, s, c, d);
	}, M = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, p = u - 1;
		for (; l <= d && l <= p;) {
			let r = e[l], u = t[l] = c ? Gs(t[l]) : Ws(t[l]);
			if (Ns(r, u)) v(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= p;) {
			let r = e[d], l = t[p] = c ? Gs(t[p]) : Ws(t[p]);
			if (Ns(r, l)) v(r, l, n, null, i, a, o, s, c);
			else break;
			d--, p--;
		}
		if (l > d) {
			if (l <= p) {
				let e = p + 1, d = e < u ? t[e].el : r;
				for (; l <= p;) v(null, t[l] = c ? Gs(t[l]) : Ws(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > p) for (; l <= d;) N(e[l], i, a, !0), l++;
		else {
			let m = l, h = l, g = /* @__PURE__ */ new Map();
			for (l = h; l <= p; l++) {
				let e = t[l] = c ? Gs(t[l]) : Ws(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (l = 0; l < b; l++) C[l] = 0;
			for (l = m; l <= d; l++) {
				let r = e[l];
				if (y >= b) {
					N(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Ns(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? N(r, i, a, !0) : (C[u - h] = l + 1, u >= S ? S = u : x = !0, v(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let w = x ? rs(C) : f;
			for (_ = w.length - 1, l = b - 1; l >= 0; l--) {
				let e = h + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || os(f) : r;
				C[l] === 0 ? v(null, d, n, p, i, a, o, s, c) : x && (_ < 0 || l !== w[_] ? ce(d, n, p, 2) : _--);
			}
		}
	}, ce = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ce(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, ve);
		else if (c === bs) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) ce(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === Ss) S(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[ti] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), Yo(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[ti];
					s._isLeaving && s[ti](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, N = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (lt(), Si(s, null, n, e, !0), ut()), p != null && (!e.ctx || e.ctx === t) && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Ji(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Js(_, t, e), u & 6) de(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Or(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ve, r) : l && !l.hasOnce && (a !== bs || d > 0 && d & 64) ? pe(l, t, n, !1, !0) : (a === bs && d & 384 || !i && u & 16) && pe(c, t, n), r && le(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Yo(() => {
			_ && Js(_, t, e), h && Or(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, le = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === bs) {
			ue(n, r);
			return;
		}
		if (t === Ss) {
			C(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, ue = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, de = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		as(c), as(l), r && fe(r), i.stop(), a ? (a.flags |= 8, N(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, N(o, e, t, n)), s && Yo(s, t), Yo(() => {
			e.isUnmounted = !0;
		}, t);
	}, pe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) N(e[o], t, n, r, i);
	}, me = (e) => {
		if (e.shapeFlag & 6) return me(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Hr];
		return n ? h(n) : t;
	}, he = !1, ge = (e, t, n) => {
		let r;
		e == null ? t._vnode && (N(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, he ||= (he = !0, pr(r), mr(), !1);
	}, ve = {
		p: v,
		um: N,
		m: ce,
		r: le,
		mt: re,
		mc: E,
		pc: oe,
		pbc: O,
		n: me,
		o: e
	}, ye, be;
	return t && ([ye, be] = t(ve)), {
		render: ge,
		hydrate: ye,
		createApp: ho(ge, ye)
	};
}
function $o({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function es({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ts(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ns(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (x(r) && x(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Gs(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ns(t, a)), a.type === xs && (a.patchFlag === -1 && (a = i[e] = Gs(a)), a.el = t.el), a.type === W && !a.el && (a.el = t.el);
	}
}
function rs(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function is(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : is(t);
}
function as(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function os(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? os(t.subTree) : null;
}
var ss = (e) => e.__isSuspense, cs = 0, ls = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) ds(t, n, r, i, a, o, s, c, l);
		else {
			if (a && a.deps > 0 && !e.suspense.isInFallback && !a.isHydrating) {
				t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
				return;
			}
			fs(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: ms,
	normalize: hs
};
function us(e, t) {
	let n = e.props && e.props[t];
	T(n) && n();
}
function ds(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = ps(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (us(e, "onPending"), us(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), vs(f, e.ssFallback)) : f.resolve(!1, !0);
}
function fs(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, Ns(h, f) ? (d.deps++, c(h, f, _ ? n : d.hiddenContainer, null, i, d, a, o, s), d.deps--, d.deps <= 0 ? d.resolve() : g && !_ && !d.isFallbackMountPending && (c(m, p, n, r, i, null, a, o, s), vs(d, p))) : (d.pendingId = cs++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : d.isFallbackMountPending || (c(m, p, n, r, i, null, a, o, s), vs(d, p))) : m && Ns(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && Ns(m, f)) c(m, f, n, r, i, d, a, o, s), vs(d, f);
	else if (us(t, "onPending"), d.pendingBranch = f, d.pendingId = f.shapeFlag & 512 ? f.component.suspenseId : cs++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e, pendingId: t } = d;
		e > 0 ? setTimeout(() => {
			d.pendingId === t && d.fallback(p);
		}, e) : e === 0 && d.fallback(p);
	}
}
function ps(e, t, n, r, i, a, o, s, c, l, u = !1) {
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = ys(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? he(e.props.timeout) : void 0, b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: cs++,
		timeout: typeof y == "number" ? y : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && (f(o, u, a === b && !e ? m(i) : a, 0), fr(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && Yo(() => r.ssFallback.el = null, x)), g || f(o, u, a, 0);
			}
			x.isFallbackMountPending = !1, vs(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = x.parent, S = !1;
			for (; y;) {
				if (y.pendingBranch) {
					for (let e = 0; e < c.length; e++) y.effects.push(c[e]);
					S = !0;
					break;
				}
				y = y.parent;
			}
			!S && !g && fr(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (_ = void 0, t.deps--, t.deps === 0 && !n && t.resolve()), us(r, "onResolve");
		},
		fallback(e) {
			if (!x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			us(t, "onFallback");
			let o = m(n), l = () => {
				if (x.isFallbackMountPending = !1, !x.isInFallback) return;
				let e = x.vnode.ssFallback;
				d(null, e, i, o, r, null, a, s, c), vs(x, e);
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n) {
			let r = !!x.pendingBranch;
			r && x.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				$n(t, e, 0);
			}).then((a) => {
				if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId) return;
				if (rc(), i && !e.scope.active) {
					r && --x.deps === 0 && x.resolve();
					return;
				}
				e.asyncResolved = !0;
				let { vnode: s } = e;
				cc(e, a, !1), i && (s.el = i);
				let c = !i && e.subTree.el;
				t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n), c && (s.placeholder = null, g(c)), Ao(e, s.el), r && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			x.isUnmounted = !0, x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && p(x.pendingBranch, n, e, t);
		}
	};
	return x;
}
function ms(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = ps(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function hs(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = gs(r ? n.default : n), e.ssFallback = r ? gs(n.fallback) : G(W);
}
function gs(e) {
	let t;
	if (T(e)) {
		let n = Ds && e._c;
		n && (e._d = !1, Ts()), e = e(), n && (e._d = !0, t = ws, Es());
	}
	return x(e) && (e = wo(e)), e = Ws(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function _s(e, t) {
	t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : fr(e);
}
function vs(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, Ao(r, i));
}
function ys(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var bs = /* @__PURE__ */ Symbol.for("v-fgt"), xs = /* @__PURE__ */ Symbol.for("v-txt"), W = /* @__PURE__ */ Symbol.for("v-cmt"), Ss = /* @__PURE__ */ Symbol.for("v-stc"), Cs = [], ws = null;
function Ts(e = !1) {
	Cs.push(ws = e ? null : []);
}
function Es() {
	Cs.pop(), ws = Cs[Cs.length - 1] || null;
}
var Ds = 1;
function Os(e, t = !1) {
	Ds += e, e < 0 && ws && t && (ws.hasOnce = !0);
}
function ks(e) {
	return e.dynamicChildren = Ds > 0 ? ws || f : null, Es(), Ds > 0 && ws && ws.push(e), e;
}
function As(e, t, n, r, i, a) {
	return ks(Ls(e, t, n, r, i, a, !0));
}
function js(e, t, n, r, i) {
	return ks(G(e, t, n, r, i, !0));
}
function Ms(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ns(e, t) {
	return e.type === t.type && e.key === t.key;
}
function Ps(e) {}
var Fs = ({ key: e }) => e ?? null, Is = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : E(e) || /* @__PURE__ */ _n(e) || T(e) ? {
	i: br,
	r: e,
	k: t,
	f: !!n
} : e);
function Ls(e, t = null, n = null, r = 0, i = null, a = e === bs ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Fs(t),
		ref: t && Is(t),
		scopeId: xr,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: br
	};
	return s ? (Ks(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= E(n) ? 8 : 16), Ds > 0 && !o && ws && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ws.push(c), c;
}
var G = Rs;
function Rs(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === xa) && (e = W), Ms(e)) {
		let r = Bs(e, t, !0);
		return n && Ks(r, n), Ds > 0 && !a && ws && (r.shapeFlag & 6 ? ws[ws.indexOf(e)] = r : ws.push(r)), r.patchFlag = -2, r;
	}
	if (vc(e) && (e = e.__vccOpts), t) {
		t = zs(t);
		let { class: e, style: n } = t;
		e && !E(e) && (t.class = Te(e)), O(n) && (/* @__PURE__ */ pn(n) && !x(n) && (n = _({}, n)), t.style = be(n));
	}
	let o = E(e) ? 1 : ss(e) ? 128 : Ur(e) ? 64 : O(e) ? 4 : T(e) ? 2 : 0;
	return Ls(e, t, n, r, i, o, a, !0);
}
function zs(e) {
	return e ? /* @__PURE__ */ pn(e) || No(e) ? _({}, e) : e : null;
}
function Bs(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? qs(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Fs(l),
		ref: t && t.ref ? n && a ? x(a) ? a.concat(Is(t)) : [a, Is(t)] : Is(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== bs ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Bs(e.ssContent),
		ssFallback: e.ssFallback && Bs(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && mi(u, c.clone(u)), u;
}
function Vs(e = " ", t = 0) {
	return G(xs, null, e, t);
}
function Hs(e, t) {
	let n = G(Ss, null, e);
	return n.staticCount = t, n;
}
function Us(e = "", t = !1) {
	return t ? (Ts(), js(W, null, e)) : G(W, null, e);
}
function Ws(e) {
	return e == null || typeof e == "boolean" ? G(W) : x(e) ? G(bs, null, e.slice()) : Ms(e) ? Gs(e) : G(xs, null, String(e));
}
function Gs(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bs(e);
}
function Ks(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (x(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ks(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !No(t) ? t._ctx = br : r === 3 && br && (br.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (T(t)) {
		if (r & 65) {
			Ks(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: br
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Vs(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function qs(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Te([t.class, r.class]));
		else if (e === "style") t.style = be([t.style, r.style]);
		else if (h(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(x(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !g(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Js(e, t, n, r = null) {
	Qn(e, t, 7, [n, r]);
}
var Ys = po(), Xs = 0;
function Zs(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Ys, a = {
		uid: Xs++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new qe(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: zo(r, i),
		emitsOptions: xo(r, i),
		emit: null,
		emitted: null,
		propsDefaults: d,
		inheritAttrs: r.inheritAttrs,
		ctx: d,
		data: d,
		props: d,
		attrs: d,
		slots: d,
		refs: d,
		setupState: d,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = yo.bind(null, a), e.ce && e.ce(a), a;
}
var Qs = null, $s = () => Qs || br, ec, tc;
{
	let e = _e(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ec = t("__VUE_INSTANCE_SETTERS__", (e) => Qs = e), tc = t("__VUE_SSR_SETTERS__", (e) => ac = e);
}
var nc = (e) => {
	let t = Qs;
	return ec(e), e.scope.on(), () => {
		e.scope.off(), ec(t);
	};
}, rc = () => {
	Qs && Qs.scope.off(), ec(null);
};
function ic(e) {
	return e.vnode.shapeFlag & 4;
}
var ac = !1;
function oc(e, t = !1, n = !1) {
	t && tc(t);
	let { props: r, children: i } = e.vnode, a = ic(e);
	Po(e, r, a, t), qo(e, i, n || t);
	let o = a ? sc(e, t) : void 0;
	return t && tc(!1), o;
}
function sc(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pa);
	let { setup: r } = n;
	if (r) {
		lt();
		let n = e.setupContext = r.length > 1 ? hc(e) : null, i = nc(e), a = Zn(r, e, 0, [e.props, n]), o = te(a);
		if (ut(), i(), (o || e.sp) && !Ji(e) && vi(e), o) {
			if (a.then(rc, rc), t) return a.then((n) => {
				tc(!0);
				try {
					cc(e, n, t);
				} finally {
					tc(!1);
				}
			}).catch((t) => {
				$n(t, e, 0);
			});
			e.asyncDep = a;
		} else cc(e, a, t);
	} else pc(e, t);
}
function cc(e, t, n) {
	T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : O(t) && (e.setupState = En(t)), pc(e, n);
}
var lc, uc;
function dc(e) {
	lc = e, uc = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, Fa));
	};
}
var fc = () => !lc;
function pc(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && lc && !r.render) {
			let t = r.template || no(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = _(_({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = lc(t, s);
			}
		}
		e.render = r.render || p, uc && uc(e);
	}
	{
		let t = nc(e);
		lt();
		try {
			Qa(e);
		} finally {
			ut(), t();
		}
	}
}
var mc = { get(e, t) {
	return bt(e, "get", ""), e[t];
} };
function hc(e) {
	return {
		attrs: new Proxy(e.attrs, mc),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function gc(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(En(mn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ma) return Ma[n](e);
		},
		has(e, t) {
			return t in e || t in Ma;
		}
	}) : e.proxy;
}
function _c(e, t = !0) {
	return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vc(e) {
	return T(e) && "__vccOpts" in e;
}
var yc = (e, t) => /* @__PURE__ */ Fn(e, t, ac);
function bc(e, t, n) {
	try {
		Os(-1);
		let r = arguments.length;
		return r === 2 ? O(t) && !x(t) ? Ms(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ms(n) && (n = [n]), G(e, t, n));
	} finally {
		Os(1);
	}
}
function xc() {}
function Sc(e, t, n, r) {
	let i = n[r];
	if (i && Cc(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function Cc(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (de(n[e], t[e])) return !1;
	return Ds > 0 && ws && ws.push(e), !0;
}
var wc = "3.5.43", Tc = p, Ec = Xn, Dc = _r, Oc = yr, kc = {
	createComponentInstance: Zs,
	setupComponent: oc,
	renderComponentRoot: Co,
	setCurrentRenderingInstance: Sr,
	isVNode: Ms,
	normalizeVNode: Ws,
	getComponentPublicInstance: gc,
	ensureValidVNode: ka,
	pushWarningContext: Kn,
	popWarningContext: qn
}, Ac = /* @__PURE__ */ s({
	BaseTransition: () => li,
	BaseTransitionPropsValidators: () => ai,
	Comment: () => W,
	DeprecationTypes: () => null,
	EffectScope: () => qe,
	ErrorCodes: () => Yn,
	ErrorTypeStrings: () => Ec,
	Fragment: () => bs,
	KeepAlive: () => Qi,
	ReactiveEffect: () => Ze,
	Static: () => Ss,
	Suspense: () => ls,
	Teleport: () => Qr,
	Text: () => xs,
	TrackOpTypes: () => In,
	Transition: () => Wc,
	TransitionGroup: () => $l,
	TriggerOpTypes: () => Ln,
	VueElement: () => Gl,
	assertNumber: () => Jn,
	callWithAsyncErrorHandling: () => Qn,
	callWithErrorHandling: () => Zn,
	camelize: () => M,
	capitalize: () => le,
	cloneVNode: () => Bs,
	compatUtils: () => null,
	computed: () => yc,
	createApp: () => Iu,
	createBlock: () => js,
	createCommentVNode: () => Us,
	createElementBlock: () => As,
	createElementVNode: () => Ls,
	createHydrationRenderer: () => Zo,
	createPropsRestProxy: () => Ya,
	createRenderer: () => Xo,
	createSSRApp: () => Lu,
	createSlots: () => Da,
	createStaticVNode: () => Hs,
	createTextVNode: () => Vs,
	createVNode: () => G,
	customRef: () => On,
	defineAsyncComponent: () => Yi,
	defineComponent: () => gi,
	defineCustomElement: () => Hl,
	defineEmits: () => La,
	defineExpose: () => Ra,
	defineModel: () => Va,
	defineOptions: () => za,
	defineProps: () => Ia,
	defineSSRCustomElement: () => Ul,
	defineSlots: () => Ba,
	devtools: () => Dc,
	effect: () => ct,
	effectScope: () => Je,
	getCurrentInstance: () => $s,
	getCurrentScope: () => Ye,
	getCurrentWatcher: () => Vn,
	getTransitionRawChildren: () => hi,
	guardReactiveProps: () => zs,
	h: () => bc,
	handleError: () => $n,
	hasInjectionContext: () => jr,
	hydrate: () => Fu,
	hydrateOnIdle: () => Hi,
	hydrateOnInteraction: () => Ki,
	hydrateOnMediaQuery: () => Gi,
	hydrateOnVisible: () => Wi,
	initCustomFormatter: () => xc,
	initDirectivesForSSR: () => Vu,
	inject: () => Ar,
	isMemoSame: () => Cc,
	isProxy: () => pn,
	isReactive: () => un,
	isReadonly: () => dn,
	isRef: () => _n,
	isRuntimeOnly: () => fc,
	isShallow: () => fn,
	isVNode: () => Ms,
	markRaw: () => mn,
	mergeDefaults: () => qa,
	mergeModels: () => Ja,
	mergeProps: () => qs,
	nextTick: () => cr,
	nodeOps: () => Rc,
	normalizeClass: () => Te,
	normalizeProps: () => Ee,
	normalizeStyle: () => be,
	onActivated: () => ea,
	onBeforeMount: () => ca,
	onBeforeUnmount: () => fa,
	onBeforeUpdate: () => ua,
	onDeactivated: () => ta,
	onErrorCaptured: () => _a,
	onMounted: () => la,
	onRenderTracked: () => ga,
	onRenderTriggered: () => ha,
	onScopeDispose: () => I,
	onServerPrefetch: () => ma,
	onUnmounted: () => pa,
	onUpdated: () => da,
	onWatcherCleanup: () => Hn,
	openBlock: () => Ts,
	patchProp: () => Rl,
	popScopeId: () => wr,
	provide: () => kr,
	proxyRefs: () => En,
	pushScopeId: () => Cr,
	queuePostFlushCb: () => fr,
	reactive: () => an,
	readonly: () => sn,
	ref: () => vn,
	registerRuntimeCompiler: () => dc,
	render: () => Pu,
	renderList: () => Ea,
	renderSlot: () => Oa,
	resolveComponent: () => ba,
	resolveDirective: () => Ca,
	resolveDynamicComponent: () => Sa,
	resolveFilter: () => null,
	resolveTransitionHooks: () => di,
	setBlockTracking: () => Os,
	setDevtoolsHook: () => Oc,
	setTransitionHooks: () => mi,
	shallowReactive: () => on,
	shallowReadonly: () => cn,
	shallowRef: () => yn,
	ssrContextKey: () => Mr,
	ssrUtils: () => kc,
	stop: () => B,
	toDisplayString: () => We,
	toHandlerKey: () => ue,
	toHandlers: () => Aa,
	toRaw: () => U,
	toRef: () => Mn,
	toRefs: () => kn,
	toValue: () => wn,
	transformVNodeArgs: () => Ps,
	triggerRef: () => Sn,
	unref: () => Cn,
	useAttrs: () => Wa,
	useCssModule: () => Jl,
	useCssVars: () => fl,
	useHost: () => Kl,
	useId: () => _i,
	useModel: () => _o,
	useSSRContext: () => Nr,
	useShadowRoot: () => ql,
	useSlots: () => Ua,
	useTemplateRef: () => yi,
	useTransitionState: () => ri,
	vModelCheckbox: () => fu,
	vModelDynamic: () => bu,
	vModelRadio: () => mu,
	vModelSelect: () => hu,
	vModelText: () => du,
	vShow: () => cl,
	version: () => wc,
	warn: () => Tc,
	watch: () => Lr,
	watchEffect: () => Pr,
	watchPostEffect: () => Fr,
	watchSyncEffect: () => Ir,
	withAsyncContext: () => Xa,
	withCtx: () => Er,
	withDefaults: () => Ha,
	withDirectives: () => Dr,
	withKeys: () => Ou,
	withMemo: () => Sc,
	withModifiers: () => Eu,
	withScopeId: () => Tr
}), jc = void 0, Mc = typeof window < "u" && window.trustedTypes;
if (Mc) try {
	jc = /* @__PURE__ */ Mc.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Nc = jc ? (e) => jc.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", Fc = "http://www.w3.org/1998/Math/MathML", Ic = typeof document < "u" ? document : null, Lc = Ic && /* @__PURE__ */ Ic.createElement("template"), Rc = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ic.createElementNS(Pc, e) : t === "mathml" ? Ic.createElementNS(Fc, e) : n ? Ic.createElement(e, { is: n }) : Ic.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ic.createTextNode(e),
	createComment: (e) => Ic.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ic.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Lc.innerHTML = Nc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Lc.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, zc = "transition", Bc = "animation", Vc = /* @__PURE__ */ Symbol("_vtc"), Hc = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Uc = /* @__PURE__ */ _({}, ai, Hc), Wc = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Uc, e))((e, { slots: t }) => bc(li, qc(e), t)), Gc = (e, t = []) => {
	x(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Kc = (e) => e ? x(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function qc(e) {
	let t = {};
	for (let n in e) n in Hc || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = Jc(i), h = m && m[0], g = m && m[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, T = (e, t, n, r) => {
		e._enterCancelled = r, Zc(e, t ? u : s), Zc(e, t ? l : o), n && n();
	}, E = (e, t) => {
		e._isLeaving = !1, Zc(e, d), Zc(e, p), Zc(e, f), t && t();
	}, D = (e) => (t, n) => {
		let i = e ? w : y, o = () => T(t, e, n);
		Gc(i, [t, o]), Qc(() => {
			Zc(t, e ? c : a), Xc(t, e ? u : s), Kc(i) || el(t, r, h, o);
		});
	};
	return _(t, {
		onBeforeEnter(e) {
			Gc(v, [e]), Xc(e, a), Xc(e, o);
		},
		onBeforeAppear(e) {
			Gc(C, [e]), Xc(e, c), Xc(e, l);
		},
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => E(e, t);
			Xc(e, d), e._enterCancelled ? (Xc(e, f), il(e)) : (il(e), Xc(e, f)), Qc(() => {
				e._isLeaving && (Zc(e, d), Xc(e, p), Kc(x) || el(e, r, g, n));
			}), Gc(x, [e, n]);
		},
		onEnterCancelled(e) {
			T(e, !1, void 0, !0), Gc(b, [e]);
		},
		onAppearCancelled(e) {
			T(e, !0, void 0, !0), Gc(ee, [e]);
		},
		onLeaveCancelled(e) {
			E(e), Gc(S, [e]);
		}
	});
}
function Jc(e) {
	if (e == null) return null;
	if (O(e)) return [Yc(e.enter), Yc(e.leave)];
	{
		let t = Yc(e);
		return [t, t];
	}
}
function Yc(e) {
	return he(e);
}
function Xc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Vc] || (e[Vc] = /* @__PURE__ */ new Set())).add(t);
}
function Zc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[Vc];
	n && (n.delete(t), n.size || (e[Vc] = void 0));
}
function Qc(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var $c = 0;
function el(e, t, n, r) {
	let i = e._endId = ++$c, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = tl(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function tl(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${zc}Delay`), a = r(`${zc}Duration`), o = nl(i, a), s = r(`${Bc}Delay`), c = r(`${Bc}Duration`), l = nl(s, c), u = null, d = 0, f = 0;
	t === zc ? o > 0 && (u = zc, d = o, f = a.length) : t === Bc ? l > 0 && (u = Bc, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? zc : Bc : null, f = u ? u === zc ? a.length : c.length : 0);
	let p = u === zc && /\b(?:transform|all)(?:,|$)/.test(r(`${zc}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function nl(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => rl(t) + rl(e[n])));
}
function rl(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function il(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function al(e, t, n) {
	let r = e[Vc];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ol = /* @__PURE__ */ Symbol("_vod"), sl = /* @__PURE__ */ Symbol("_vsh"), cl = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[ol] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ll(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), ll(e, !0), r.enter(e)) : r.leave(e, () => {
			ll(e, !1);
		}) : ll(e, t));
	},
	beforeUnmount(e, { value: t }) {
		ll(e, t);
	}
};
function ll(e, t) {
	e.style.display = t ? e[ol] : "none", e[sl] = !t;
}
function ul() {
	cl.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var dl = /* @__PURE__ */ Symbol("");
function fl(e) {
	let t = $s();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => ml(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? ml(t.ce, r) : pl(t.subTree, r), n(r);
	};
	ua(() => {
		fr(r);
	}), la(() => {
		Lr(r, p, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), pa(() => e.disconnect());
	});
}
function pl(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			pl(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) ml(e.el, t);
	else if (e.type === bs) e.children.forEach((e) => pl(e, t));
	else if (e.type === Ss) {
		let { el: n, anchor: r } = e;
		for (; n && (ml(n, t), n !== r);) n = n.nextSibling;
	}
}
function ml(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = P(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[dl] = r;
	}
}
var hl = /(?:^|;)\s*display\s*:/;
function gl(e, t, n) {
	let r = e.style, i = E(n), a = !1;
	if (n && !i) {
		if (t) {
			if (E(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? vl(r, t, "");
			}
			else for (let e in t) n[e] ?? vl(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? vl(r, i, "") : Sl(e, i, !E(t) && t ? t[i] : void 0, o) || vl(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[dl];
			e && (n += ";" + e), r.cssText = n, a = hl.test(n);
		}
	} else t && e.removeAttribute("style");
	ol in e && (e[ol] = a ? r.display : "", e[sl] && (r.display = "none"));
}
var _l = /\s*!important$/;
function vl(e, t, n) {
	if (x(n)) n.forEach((n) => vl(e, t, n));
	else if (n ??= "", t.startsWith("--")) _l.test(n) ? e.setProperty(t, n.replace(_l, ""), "important") : e.setProperty(t, n);
	else {
		let r = xl(e, t);
		_l.test(n) ? e.setProperty(N(r), n.replace(_l, ""), "important") : e[r] = n;
	}
}
var yl = [
	"Webkit",
	"Moz",
	"ms"
], bl = {};
function xl(e, t) {
	let n = bl[t];
	if (n) return n;
	let r = M(t);
	if (r !== "filter" && r in e) return bl[t] = r;
	r = le(r);
	for (let n = 0; n < yl.length; n++) {
		let i = yl[n] + r;
		if (i in e) return bl[t] = i;
	}
	return t;
}
function Sl(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && E(r) && n === r;
}
var Cl = "http://www.w3.org/1999/xlink";
function wl(e, t, n, r, i, a = Fe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Cl, t.slice(6, t.length)) : e.setAttributeNS(Cl, t, n) : n == null || a && !Ie(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : D(n) ? String(n) : n);
}
function Tl(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Nc(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Ie(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function El(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Dl(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ol = /* @__PURE__ */ Symbol("_vei");
function kl(e, t, n, r, i = null) {
	let a = e[Ol] || (e[Ol] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ml(t);
		r ? El(e, n, a[t] = Il(r, i), s) : o && (Dl(e, n, o, s), a[t] = void 0);
	}
}
var Al = /(Once|Passive|Capture)$/, jl = /^on:?(?:Once|Passive|Capture)$/;
function Ml(e) {
	let t, n;
	for (; (n = e.match(Al)) && !jl.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : N(e.slice(2)), t];
}
var Nl = 0, Pl = /* @__PURE__ */ Promise.resolve(), Fl = () => Nl ||= (Pl.then(() => Nl = 0), Date.now());
function Il(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (x(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Qn(e, t, 5, a);
			}
		} else Qn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Fl(), n;
}
var Ll = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rl = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? al(e, r, o) : t === "style" ? gl(e, n, r) : h(t) ? g(t) || kl(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : zl(e, t, r, o)) ? (Tl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wl(e, t, r, o, a, t !== "value")) : e._isVueCE && (Bl(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !E(r))) ? Tl(e, M(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), wl(e, t, r, o));
};
function zl(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ll(t) && T(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ll(t) && E(n) ? !1 : t in e;
}
function Bl(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = M(t);
	return Array.isArray(n) ? n.some((e) => M(e) === r) : Object.keys(n).some((e) => M(e) === r);
}
var Vl = {};
// @__NO_SIDE_EFFECTS__
function Hl(e, t, n) {
	let r = /* @__PURE__ */ gi(e, t);
	ie(r) && (r = _({}, r, t));
	class i extends Gl {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var Ul = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ Hl(e, t, Lu)), Wl = typeof HTMLElement < "u" ? HTMLElement : class {}, Gl = class e extends Wl {
	constructor(e, t = {}, n = Iu) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== Iu ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(_({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, cr(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !x(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = he(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[M(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) b(this, e) || Object.defineProperty(this, e, { get: () => Cn(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = x(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(M)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : Vl, r = M(e);
		t && this._numberProps && this._numberProps[r] && (n = he(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === Vl ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(N(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(N(e), t + "") : t || this.removeAttribute(N(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), Pu(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = G(this._def, _(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, ie(t[0]) ? _({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), N(e) !== e && t(N(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function Kl(e) {
	let t = $s();
	return t && t.ce || null;
}
function ql() {
	let e = Kl();
	return e && e.shadowRoot;
}
function Jl(e = "$style") {
	{
		let t = $s();
		if (!t) return d;
		let n = t.type.__cssModules;
		return n && n[e] || d;
	}
}
var Yl = /* @__PURE__ */ new WeakMap(), Xl = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ Symbol("_moveCb"), Ql = /* @__PURE__ */ Symbol("_enterCb"), $l = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ _({}, Uc, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = $s(), r = ri(), i, a;
		return da(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!iu(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(eu), i.forEach(tu);
			let r = i.filter(nu);
			il(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				Xc(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Zl] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Zl] = null, Zc(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ U(e), s = qc(o), c = o.tag || bs;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[sl] && (i.push(t), mi(t, di(t, s, r, n)), Yl.set(t, ru(t.el)));
			}
			a = t.default ? hi(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && mi(t, di(t, s, r, n));
			}
			return G(c, null, a);
		};
	}
});
function eu(e) {
	let t = e.el;
	t[Zl] && t[Zl](), t[Ql] && t[Ql]();
}
function tu(e) {
	Xl.set(e, ru(e.el));
}
function nu(e) {
	let t = Yl.get(e), n = Xl.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function ru(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function iu(e, t, n) {
	let r = e.cloneNode(), i = e[Vc];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = tl(r);
	return a.removeChild(r), o;
}
var au = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return x(t) ? (e) => fe(t, e) : t;
};
function ou(e) {
	e.target.composing = !0;
}
function su(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var cu = /* @__PURE__ */ Symbol("_assign"), lu = /* @__PURE__ */ Symbol("_initialValue");
function uu(e, t, n) {
	return t && (e = e.trim()), n && (e = me(e)), e;
}
var du = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[lu] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lu] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[cu] = au(i);
		let a = r || i.props && i.props.type === "number";
		El(e, t ? "change" : "input", (t) => {
			t.target.composing || e[cu](uu(e.value, n, a));
		}), (n || a) && El(e, "change", () => {
			e.value = uu(e.value, n, a);
		}), t || (El(e, "compositionstart", ou), El(e, "compositionend", su), El(e, "change", su));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[lu];
		delete e[lu], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[cu](uu(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[cu] = au(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? me(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, fu = {
	deep: !0,
	created(e, t, n) {
		e[cu] = au(n), El(e, "change", () => {
			let t = e._modelValue, n = vu(e), r = e.checked, i = e[cu];
			if (x(t)) {
				let e = He(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (C(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(yu(e, r));
		});
	},
	mounted: pu,
	beforeUpdate(e, t, n) {
		e[cu] = au(n), pu(e, t, n);
	}
};
function pu(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (x(t)) i = He(t, r.props.value) > -1;
	else if (C(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ve(t, yu(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var mu = {
	created(e, { value: t }, n) {
		e.checked = Ve(t, n.props.value), e[cu] = au(n), El(e, "change", () => {
			e[cu](vu(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[cu] = au(r), t !== n && (e.checked = Ve(t, r.props.value));
	}
}, hu = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, El(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? me(vu(e)) : vu(e)), r = e.multiple, i = r ? C(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? x(i) ? t.slice() : t : i];
			try {
				e[cu](i);
			} finally {
				cr(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[cu] = au(r);
	},
	mounted(e, { value: t }) {
		_u(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[cu] = au(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !gu(t, n[1], n[0])) && _u(e, t);
	}
};
function gu(e, t, n) {
	if (!n || x(e)) return Ve(e, t);
	if (C(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function _u(e, t) {
	let n = e.multiple, r = x(t);
	if (!n || r || C(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = vu(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : He(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Ve(vu(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function vu(e) {
	return "_value" in e ? e._value : e.value;
}
function yu(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var bu = {
	created(e, t, n) {
		Su(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		Su(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		Su(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		Su(e, t, n, r, "updated");
	}
};
function xu(e, t) {
	switch (e) {
		case "SELECT": return hu;
		case "TEXTAREA": return du;
		default: switch (t) {
			case "checkbox": return fu;
			case "radio": return mu;
			default: return du;
		}
	}
}
function Su(e, t, n, r, i) {
	let a = xu(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function Cu() {
	du.getSSRProps = ({ value: e }) => ({ value: e }), mu.getSSRProps = ({ value: e }, t) => {
		if (t.props && Ve(t.props.value, e)) return { checked: !0 };
	}, fu.getSSRProps = ({ value: e }, t) => {
		if (x(e)) {
			if (t.props && He(e, t.props.value) > -1) return { checked: !0 };
		} else if (C(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, bu.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = xu(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var wu = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Tu = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => wu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Eu = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Tu[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Du = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Ou = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = N(n.key);
		if (t.some((e) => e === r || Du[e] === r)) return e(n);
	}));
}, ku = /* @__PURE__ */ _({ patchProp: Rl }, Rc), Au, ju = !1;
function Mu() {
	return Au ||= Xo(ku);
}
function Nu() {
	return Au = ju ? Au : Zo(ku), ju = !0, Au;
}
var Pu = ((...e) => {
	Mu().render(...e);
}), Fu = ((...e) => {
	Nu().hydrate(...e);
}), Iu = ((...e) => {
	let t = Mu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = zu(e);
		if (!r) return;
		let i = t._component;
		!T(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Ru(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), Lu = ((...e) => {
	let t = Nu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = zu(e);
		if (t) return n(t, !0, Ru(t));
	}, t;
});
function Ru(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function zu(e) {
	return E(e) ? document.querySelector(e) : e;
}
var Bu = !1, Vu = () => {
	Bu || (Bu = !0, Cu(), ul());
}, Hu = /* @__PURE__ */ Symbol(""), Uu = /* @__PURE__ */ Symbol(""), Wu = /* @__PURE__ */ Symbol(""), Gu = /* @__PURE__ */ Symbol(""), Ku = /* @__PURE__ */ Symbol(""), qu = /* @__PURE__ */ Symbol(""), Ju = /* @__PURE__ */ Symbol(""), Yu = /* @__PURE__ */ Symbol(""), Xu = /* @__PURE__ */ Symbol(""), Zu = /* @__PURE__ */ Symbol(""), Qu = /* @__PURE__ */ Symbol(""), $u = /* @__PURE__ */ Symbol(""), ed = /* @__PURE__ */ Symbol(""), td = /* @__PURE__ */ Symbol(""), nd = /* @__PURE__ */ Symbol(""), rd = /* @__PURE__ */ Symbol(""), id = /* @__PURE__ */ Symbol(""), ad = /* @__PURE__ */ Symbol(""), od = /* @__PURE__ */ Symbol(""), sd = /* @__PURE__ */ Symbol(""), cd = /* @__PURE__ */ Symbol(""), ld = /* @__PURE__ */ Symbol(""), ud = /* @__PURE__ */ Symbol(""), dd = /* @__PURE__ */ Symbol(""), fd = /* @__PURE__ */ Symbol(""), pd = /* @__PURE__ */ Symbol(""), md = /* @__PURE__ */ Symbol(""), hd = /* @__PURE__ */ Symbol(""), gd = /* @__PURE__ */ Symbol(""), _d = /* @__PURE__ */ Symbol(""), vd = /* @__PURE__ */ Symbol(""), yd = /* @__PURE__ */ Symbol(""), bd = /* @__PURE__ */ Symbol(""), xd = /* @__PURE__ */ Symbol(""), Sd = /* @__PURE__ */ Symbol(""), Cd = /* @__PURE__ */ Symbol(""), wd = /* @__PURE__ */ Symbol(""), Td = /* @__PURE__ */ Symbol(""), Ed = /* @__PURE__ */ Symbol(""), Dd = {
	[Hu]: "Fragment",
	[Uu]: "Teleport",
	[Wu]: "Suspense",
	[Gu]: "KeepAlive",
	[Ku]: "BaseTransition",
	[qu]: "openBlock",
	[Ju]: "createBlock",
	[Yu]: "createElementBlock",
	[Xu]: "createVNode",
	[Zu]: "createElementVNode",
	[Qu]: "createCommentVNode",
	[$u]: "createTextVNode",
	[ed]: "createStaticVNode",
	[td]: "resolveComponent",
	[nd]: "resolveDynamicComponent",
	[rd]: "resolveDirective",
	[id]: "resolveFilter",
	[ad]: "withDirectives",
	[od]: "renderList",
	[sd]: "renderSlot",
	[cd]: "createSlots",
	[ld]: "toDisplayString",
	[ud]: "mergeProps",
	[dd]: "normalizeClass",
	[fd]: "normalizeStyle",
	[pd]: "normalizeProps",
	[md]: "guardReactiveProps",
	[hd]: "toHandlers",
	[gd]: "camelize",
	[_d]: "capitalize",
	[vd]: "toHandlerKey",
	[yd]: "setBlockTracking",
	[bd]: "pushScopeId",
	[xd]: "popScopeId",
	[Sd]: "withCtx",
	[Cd]: "unref",
	[wd]: "isRef",
	[Td]: "withMemo",
	[Ed]: "isMemoSame"
};
function Od(e) {
	Object.getOwnPropertySymbols(e).forEach((t) => {
		Dd[t] = e[t];
	});
}
var kd = {
	start: {
		line: 1,
		column: 1,
		offset: 0
	},
	end: {
		line: 1,
		column: 1,
		offset: 0
	},
	source: ""
};
function Ad(e, t = "") {
	return {
		type: 0,
		source: t,
		children: e,
		helpers: /* @__PURE__ */ new Set(),
		components: [],
		directives: [],
		hoists: [],
		imports: [],
		cached: [],
		temps: 0,
		codegenNode: void 0,
		loc: kd
	};
}
function jd(e, t, n, r, i, a, o, s = !1, c = !1, l = !1, u = kd) {
	return e && (s ? (e.helper(qu), e.helper(Vd(e.inSSR, l))) : e.helper(Bd(e.inSSR, l)), o && e.helper(ad)), {
		type: 13,
		tag: t,
		props: n,
		children: r,
		patchFlag: i,
		dynamicProps: a,
		directives: o,
		isBlock: s,
		disableTracking: c,
		isComponent: l,
		loc: u
	};
}
function Md(e, t = kd) {
	return {
		type: 17,
		loc: t,
		elements: e
	};
}
function Nd(e, t = kd) {
	return {
		type: 15,
		loc: t,
		properties: e
	};
}
function K(e, t) {
	return {
		type: 16,
		loc: kd,
		key: E(e) ? q(e, !0) : e,
		value: t
	};
}
function q(e, t = !1, n = kd, r = 0) {
	return {
		type: 4,
		loc: n,
		content: e,
		isStatic: t,
		constType: t ? 3 : r
	};
}
function Pd(e, t = kd) {
	return {
		type: 8,
		loc: t,
		children: e
	};
}
function Fd(e, t = [], n = kd) {
	return {
		type: 14,
		loc: n,
		callee: e,
		arguments: t
	};
}
function Id(e, t = void 0, n = !1, r = !1, i = kd) {
	return {
		type: 18,
		params: e,
		returns: t,
		newline: n,
		isSlot: r,
		loc: i
	};
}
function Ld(e, t, n, r = !0) {
	return {
		type: 19,
		test: e,
		consequent: t,
		alternate: n,
		newline: r,
		loc: kd
	};
}
function Rd(e, t, n = !1, r = !1) {
	return {
		type: 20,
		index: e,
		value: t,
		needPauseTracking: n,
		inVOnce: r,
		needArraySpread: !1,
		loc: kd
	};
}
function zd(e) {
	return {
		type: 21,
		body: e,
		loc: kd
	};
}
function Bd(e, t) {
	return e || t ? Xu : Zu;
}
function Vd(e, t) {
	return e || t ? Ju : Yu;
}
function Hd(e, { helper: t, removeHelper: n, inSSR: r }) {
	e.isBlock || (e.isBlock = !0, n(Bd(r, e.isComponent)), t(qu), t(Vd(r, e.isComponent)));
}
var Ud = new Uint8Array([123, 123]), Wd = new Uint8Array([125, 125]);
function Gd(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Kd(e) {
	return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function qd(e) {
	return e === 47 || e === 62 || Kd(e);
}
function Jd(e) {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
	return t;
}
var Yd = {
	Cdata: new Uint8Array([
		67,
		68,
		65,
		84,
		65,
		91
	]),
	CdataEnd: new Uint8Array([
		93,
		93,
		62
	]),
	CommentEnd: new Uint8Array([
		45,
		45,
		62
	]),
	ScriptEnd: new Uint8Array([
		60,
		47,
		115,
		99,
		114,
		105,
		112,
		116
	]),
	StyleEnd: new Uint8Array([
		60,
		47,
		115,
		116,
		121,
		108,
		101
	]),
	TitleEnd: new Uint8Array([
		60,
		47,
		116,
		105,
		116,
		108,
		101
	]),
	TextareaEnd: new Uint8Array([
		60,
		47,
		116,
		101,
		120,
		116,
		97,
		114,
		101,
		97
	])
}, Xd = class {
	constructor(e, t) {
		this.stack = e, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Ud, this.delimiterClose = Wd, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
	}
	get inSFCRoot() {
		return this.mode === 2 && this.stack.length === 0;
	}
	reset() {
		this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Ud, this.delimiterClose = Wd;
	}
	getPos(e) {
		let t = 1, n = e + 1, r = this.newlines.length, i = -1;
		if (r > 100) {
			let t = -1, n = r;
			for (; t + 1 < n;) {
				let r = t + n >>> 1;
				this.newlines[r] < e ? t = r : n = r;
			}
			i = t;
		} else for (let t = r - 1; t >= 0; t--) if (e > this.newlines[t]) {
			i = t;
			break;
		}
		return i >= 0 && (t = i + 2, n = e - this.newlines[i]), {
			column: n,
			line: t,
			offset: e
		};
	}
	peek() {
		return this.buffer.charCodeAt(this.index + 1);
	}
	stateText(e) {
		e === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e));
	}
	stateInterpolationOpen(e) {
		if (e === this.delimiterOpen[this.delimiterIndex]) {
			if (this.delimiterIndex === this.delimiterOpen.length - 1) {
				let e = this.index + 1 - this.delimiterOpen.length;
				e > this.sectionStart && this.cbs.ontext(this.sectionStart, e), this.state = 3, this.sectionStart = e;
			} else this.delimiterIndex++;
		} else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e)) : (this.state = 1, this.stateText(e));
	}
	stateInterpolation(e) {
		e === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e));
	}
	stateInterpolationClose(e) {
		e === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e));
	}
	stateSpecialStartSequence(e) {
		let t = this.sequenceIndex === this.currentSequence.length;
		if (!(t ? qd(e) : (e | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = !1;
		else if (!t) {
			this.sequenceIndex++;
			return;
		}
		this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e);
	}
	stateInRCDATA(e) {
		if (this.sequenceIndex === this.currentSequence.length) {
			if (e === 62 || Kd(e)) {
				let t = this.index - this.currentSequence.length;
				if (this.sectionStart < t) {
					let e = this.index;
					this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = e;
				}
				this.sectionStart = t + 2, this.stateInClosingTagName(e), this.inRCDATA = !1;
				return;
			}
			this.sequenceIndex = 0;
		}
		(e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Yd.TitleEnd || this.currentSequence === Yd.TextareaEnd && !this.inSFCRoot ? !this.inVPre && e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(e === 60);
	}
	stateCDATASequence(e) {
		e === Yd.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Yd.Cdata.length && (this.state = 28, this.currentSequence = Yd.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e));
	}
	fastForwardTo(e) {
		for (; ++this.index < this.buffer.length;) {
			let t = this.buffer.charCodeAt(this.index);
			if (t === 10 && this.newlines.push(this.index), t === e) return !0;
		}
		return this.index = this.buffer.length - 1, !1;
	}
	stateInCommentLike(e) {
		e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Yd.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
	}
	startSpecial(e, t) {
		this.enterRCDATA(e, t), this.state = 31;
	}
	enterRCDATA(e, t) {
		this.inRCDATA = !0, this.currentSequence = e, this.sequenceIndex = t;
	}
	stateBeforeTagName(e) {
		e === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : e === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : Gd(e) ? (this.sectionStart = this.index, this.state = this.mode === 0 ? 6 : this.inSFCRoot ? 34 : this.inXML ? 6 : e === 116 ? 30 : e === 115 ? 29 : 6) : e === 47 ? this.state = 8 : (this.state = 1, this.stateText(e));
	}
	stateInTagName(e) {
		qd(e) && this.handleTagName(e);
	}
	stateInSFCRootTagName(e) {
		if (qd(e)) {
			let t = this.buffer.slice(this.sectionStart, this.index);
			t !== "template" && this.enterRCDATA(Jd("</" + t), 0), this.handleTagName(e);
		}
	}
	handleTagName(e) {
		this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e);
	}
	stateBeforeClosingTagName(e) {
		Kd(e) || (e === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = Gd(e) ? 9 : 27, this.sectionStart = this.index));
	}
	stateInClosingTagName(e) {
		(e === 62 || Kd(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e));
	}
	stateAfterClosingTagName(e) {
		e === 62 && (this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeAttrName(e) {
		e === 62 ? (this.cbs.onopentagend(this.index), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : e === 47 ? this.state = 7 : e === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Kd(e) || this.handleAttrStart(e);
	}
	handleAttrStart(e) {
		e === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : e === 46 || e === 58 || e === 64 || e === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
	}
	stateInSelfClosingTag(e) {
		e === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Kd(e) || (this.state = 11, this.stateBeforeAttrName(e));
	}
	stateInAttrName(e) {
		(e === 61 || qd(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e));
	}
	stateInDirName(e) {
		e === 61 || qd(e) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : e === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
	}
	stateInDirArg(e) {
		e === 61 || qd(e) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 91 ? this.state = 15 : e === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
	}
	stateInDynamicDirArg(e) {
		e === 93 ? this.state = 14 : (e === 61 || qd(e)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e));
	}
	stateInDirModifier(e) {
		e === 61 || qd(e) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
	}
	handleAttrNameEnd(e) {
		this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e);
	}
	stateAfterAttrName(e) {
		e === 61 ? this.state = 18 : e === 47 || e === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e)) : Kd(e) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e));
	}
	stateBeforeAttrValue(e) {
		e === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : e === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Kd(e) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e));
	}
	handleInAttrValue(e, t) {
		(e === t || this.fastForwardTo(t)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === 34 ? 3 : 2, this.index + 1), this.state = 11);
	}
	stateInAttrValueDoubleQuotes(e) {
		this.handleInAttrValue(e, 34);
	}
	stateInAttrValueSingleQuotes(e) {
		this.handleInAttrValue(e, 39);
	}
	stateInAttrValueNoQuotes(e) {
		Kd(e) || e === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e)) : (e === 39 || e === 60 || e === 61 || e === 96) && this.cbs.onerr(18, this.index);
	}
	stateBeforeDeclaration(e) {
		e === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = e === 45 ? 25 : 23;
	}
	stateInDeclaration(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
	}
	stateInProcessingInstruction(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeComment(e) {
		e === 45 ? (this.state = 28, this.currentSequence = Yd.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
	}
	stateInSpecialComment(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeSpecialS(e) {
		e === Yd.ScriptEnd[3] ? this.startSpecial(Yd.ScriptEnd, 4) : e === Yd.StyleEnd[3] ? this.startSpecial(Yd.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e));
	}
	stateBeforeSpecialT(e) {
		e === Yd.TitleEnd[3] ? this.startSpecial(Yd.TitleEnd, 4) : e === Yd.TextareaEnd[3] ? this.startSpecial(Yd.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e));
	}
	startEntity() {}
	stateInEntity() {}
	parse(e) {
		for (this.buffer = e; this.index < this.buffer.length;) {
			let e = this.buffer.charCodeAt(this.index);
			switch (e === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
				case 1:
					this.stateText(e);
					break;
				case 2:
					this.stateInterpolationOpen(e);
					break;
				case 3:
					this.stateInterpolation(e);
					break;
				case 4:
					this.stateInterpolationClose(e);
					break;
				case 31:
					this.stateSpecialStartSequence(e);
					break;
				case 32:
					this.stateInRCDATA(e);
					break;
				case 26:
					this.stateCDATASequence(e);
					break;
				case 19:
					this.stateInAttrValueDoubleQuotes(e);
					break;
				case 12:
					this.stateInAttrName(e);
					break;
				case 13:
					this.stateInDirName(e);
					break;
				case 14:
					this.stateInDirArg(e);
					break;
				case 15:
					this.stateInDynamicDirArg(e);
					break;
				case 16:
					this.stateInDirModifier(e);
					break;
				case 28:
					this.stateInCommentLike(e);
					break;
				case 27:
					this.stateInSpecialComment(e);
					break;
				case 11:
					this.stateBeforeAttrName(e);
					break;
				case 6:
					this.stateInTagName(e);
					break;
				case 34:
					this.stateInSFCRootTagName(e);
					break;
				case 9:
					this.stateInClosingTagName(e);
					break;
				case 5:
					this.stateBeforeTagName(e);
					break;
				case 17:
					this.stateAfterAttrName(e);
					break;
				case 20:
					this.stateInAttrValueSingleQuotes(e);
					break;
				case 18:
					this.stateBeforeAttrValue(e);
					break;
				case 8:
					this.stateBeforeClosingTagName(e);
					break;
				case 10:
					this.stateAfterClosingTagName(e);
					break;
				case 29:
					this.stateBeforeSpecialS(e);
					break;
				case 30:
					this.stateBeforeSpecialT(e);
					break;
				case 21:
					this.stateInAttrValueNoQuotes(e);
					break;
				case 7:
					this.stateInSelfClosingTag(e);
					break;
				case 23:
					this.stateInDeclaration(e);
					break;
				case 22:
					this.stateBeforeDeclaration(e);
					break;
				case 25:
					this.stateBeforeComment(e);
					break;
				case 24:
					this.stateInProcessingInstruction(e);
					break;
				case 33: this.stateInEntity();
			}
			this.index++;
		}
		this.cleanup(), this.finish();
	}
	cleanup() {
		this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
	}
	finish() {
		this.handleTrailingData(), this.cbs.onend();
	}
	handleTrailingData() {
		let e = this.buffer.length;
		this.sectionStart >= e || (this.state === 28 ? this.currentSequence === Yd.CdataEnd ? this.cbs.oncdata(this.sectionStart, e) : this.cbs.oncomment(this.sectionStart, e) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, e));
	}
	emitCodePoint(e, t) {}
};
function Zd(e, { compatConfig: t }) {
	let n = t && t[e];
	return e === "MODE" ? n || 3 : n;
}
function Qd(e, t) {
	let n = Zd("MODE", t), r = Zd(e, t);
	return n === 3 ? r === !0 : r !== !1;
}
function $d(e, t, n, ...r) {
	return Qd(e, t);
}
function ef(e) {
	throw e;
}
function tf(e) {}
function J(e, t, n, r) {
	let i = `https://vuejs.org/error-reference/#compiler-${e}`, a = SyntaxError(String(i));
	return a.code = e, a.loc = t, a;
}
var nf = (e) => e.type === 4 && e.isStatic;
function rf(e) {
	switch (e) {
		case "Teleport":
		case "teleport": return Uu;
		case "Suspense":
		case "suspense": return Wu;
		case "KeepAlive":
		case "keep-alive": return Gu;
		case "BaseTransition":
		case "base-transition": return Ku;
	}
}
var af = /^$|^\d|[^\$\w\xA0-\uFFFF]/, of = (e) => !af.test(e), sf = /[A-Za-z_$\xA0-\uFFFF]/, cf = /[\.\?\w$\xA0-\uFFFF]/, lf = /\s+[.[]\s*|\s*[.[]\s+/g, uf = (e) => e.type === 4 ? e.content : e.loc.source, df = (e) => {
	let t = uf(e).trim().replace(lf, (e) => e.trim()), n = 0, r = [], i = 0, a = 0, o = null;
	for (let e = 0; e < t.length; e++) {
		let s = t.charAt(e);
		switch (n) {
			case 0:
				if (s === "[") r.push(n), n = 1, i++;
				else if (s === "(") r.push(n), n = 2, a++;
				else if (!(e === 0 ? sf : cf).test(s)) return !1;
				break;
			case 1:
				s === "'" || s === "\"" || s === "`" ? (r.push(n), n = 3, o = s) : s === "[" ? i++ : s === "]" && (--i || (n = r.pop()));
				break;
			case 2:
				if (s === "'" || s === "\"" || s === "`") r.push(n), n = 3, o = s;
				else if (s === "(") a++;
				else if (s === ")") {
					if (e === t.length - 1) return !1;
					--a || (n = r.pop());
				}
				break;
			case 3: s === o && (n = r.pop(), o = null);
		}
	}
	return !i && !a;
}, ff = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/, pf = (e) => ff.test(uf(e));
function mf(e, t, n = !1) {
	for (let r = 0; r < e.props.length; r++) {
		let i = e.props[r];
		if (i.type === 7 && (n || i.exp) && (E(t) ? i.name === t : t.test(i.name))) return i;
	}
}
function hf(e, t, n = !1, r = !1) {
	for (let i = 0; i < e.props.length; i++) {
		let a = e.props[i];
		if (a.type === 6) {
			if (n) continue;
			if (a.name === t && (a.value || r)) return a;
		} else if (a.name === "bind" && (a.exp || r) && gf(a.arg, t)) return a;
	}
}
function gf(e, t) {
	return !!(e && nf(e) && e.content === t);
}
function _f(e) {
	return e.props.some((e) => e.type === 7 && e.name === "bind" && (!e.arg || e.arg.type !== 4 || !e.arg.isStatic));
}
function vf(e) {
	return e.type === 5 || e.type === 2;
}
function yf(e) {
	return e.type === 7 && e.name === "pre";
}
function bf(e) {
	return e.type === 7 && e.name === "slot";
}
function xf(e) {
	return e.type === 1 && e.tagType === 3;
}
function Sf(e) {
	return e.type === 1 && e.tagType === 2;
}
var Cf = /* @__PURE__ */ new Set([pd, md]);
function wf(e, t = []) {
	if (e && !E(e) && e.type === 14) {
		let n = e.callee;
		if (!E(n) && Cf.has(n)) return wf(e.arguments[0], t.concat(e));
	}
	return [e, t];
}
function Tf(e, t, n) {
	if (e.type !== 13 && Ef(e, t)) return;
	let r, i = e.type === 13 ? e.props : e.arguments[2], a = [], o;
	if (i && !E(i) && i.type === 14) {
		let e = wf(i);
		i = e[0], a = e[1], o = a[a.length - 1];
	}
	if (i == null || E(i)) r = Nd([t]);
	else if (i.type === 14) {
		let e = i.arguments[0];
		!E(e) && e.type === 15 ? Df(t, e) || e.properties.unshift(t) : i.callee === hd ? r = Fd(n.helper(ud), [Nd([t]), i]) : i.arguments.unshift(Nd([t])), !r && (r = i);
	} else i.type === 15 ? (Df(t, i) || i.properties.unshift(t), r = i) : (r = Fd(n.helper(ud), [Nd([t]), i]), o && o.callee === md && (o = a[a.length - 2]));
	e.type === 13 ? o ? o.arguments[0] = r : e.props = r : o ? o.arguments[0] = r : e.arguments[2] = r;
}
function Ef(e, t) {
	var n, r, i;
	if (t.key.type !== 4 || t.key.content !== "key") return !1;
	let a = e.arguments[2];
	if (a && !E(a)) {
		let [e] = wf(a);
		if (e && !E(e) && e.type === 15 && Df(t, e)) return !0;
	}
	return (n = e.arguments)[2] || (n[2] = "{}"), (r = e.arguments)[3] || (r[3] = "undefined"), (i = e.arguments)[4] || (i[4] = "undefined"), e.arguments[5] = t.value, !0;
}
function Df(e, t) {
	let n = !1;
	if (e.key.type === 4) {
		let r = e.key.content;
		n = t.properties.some((e) => e.key.type === 4 && e.key.content === r);
	}
	return n;
}
function Of(e, t) {
	return `_${t}_${e.replace(/[^\w]/g, (t, n) => t === "-" ? "_" : e.charCodeAt(n).toString())}`;
}
function kf(e) {
	return e.type === 14 && e.callee === Td ? e.arguments[1].returns : e;
}
var Af = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
function jf(e) {
	for (let t = 0; t < e.length; t++) if (!Kd(e.charCodeAt(t))) return !1;
	return !0;
}
function Mf(e) {
	return e.type === 2 && jf(e.content) || e.type === 12 && Mf(e.content);
}
function Nf(e) {
	return e.type === 3 || Mf(e);
}
var Pf = {
	parseMode: "base",
	ns: 0,
	delimiters: ["{{", "}}"],
	getNamespace: () => 0,
	isVoidTag: m,
	isPreTag: m,
	isIgnoreNewlineTag: m,
	isCustomElement: m,
	onError: ef,
	onWarn: tf,
	comments: !1,
	prefixIdentifiers: !1
}, Y = Pf, Ff = null, If = "", Lf = null, X = null, Rf = "", zf = -1, Bf = -1, Vf = 0, Hf = !1, Uf = null, Z = [], Q = new Xd(Z, {
	onerr: fp,
	ontext(e, t) {
		Yf(qf(e, t), e, t);
	},
	ontextentity(e, t, n) {
		Yf(e, t, n);
	},
	oninterpolation(e, t) {
		if (Hf) return Yf(qf(e, t), e, t);
		let n = e + Q.delimiterOpen.length, r = t - Q.delimiterClose.length;
		for (; Kd(If.charCodeAt(n));) n++;
		for (; Kd(If.charCodeAt(r - 1));) r--;
		let i = qf(n, r);
		i.includes("&") && (i = Y.decodeEntities(i, !1)), sp({
			type: 5,
			content: dp(i, !1, $(n, r)),
			loc: $(e, t)
		});
	},
	onopentagname(e, t) {
		let n = qf(e, t);
		Lf = {
			type: 1,
			tag: n,
			ns: Y.getNamespace(n, Z[0], Y.ns),
			tagType: 0,
			props: [],
			children: [],
			loc: $(e - 1, t),
			codegenNode: void 0
		};
	},
	onopentagend(e) {
		Jf(e);
	},
	onclosetag(e, t) {
		let n = qf(e, t);
		if (!Y.isVoidTag(n)) {
			let r = !1;
			for (let e = 0; e < Z.length; e++) if (Z[e].tag.toLowerCase() === n.toLowerCase()) {
				r = !0, e > 0 && fp(24, Z[0].loc.start.offset);
				for (let n = 0; n <= e; n++) Xf(Z.shift(), t, n < e);
				break;
			}
			r || fp(23, Qf(e, 60));
		}
	},
	onselfclosingtag(e) {
		let t = Lf.tag;
		Lf.isSelfClosing = !0, Jf(e), Z[0] && Z[0].tag === t && Xf(Z.shift(), e);
	},
	onattribname(e, t) {
		X = {
			type: 6,
			name: qf(e, t),
			nameLoc: $(e, t),
			value: void 0,
			loc: $(e)
		};
	},
	ondirname(e, t) {
		let n = qf(e, t), r = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
		if (!Hf && r === "" && fp(26, e), Hf || r === "") X = {
			type: 6,
			name: n,
			nameLoc: $(e, t),
			value: void 0,
			loc: $(e)
		};
		else if (X = {
			type: 7,
			name: r,
			rawName: n,
			exp: void 0,
			arg: void 0,
			modifiers: n === "." ? [q("prop")] : [],
			loc: $(e)
		}, r === "pre") {
			Hf = Q.inVPre = !0, Uf = Lf;
			let e = Lf.props;
			for (let t = 0; t < e.length; t++) e[t].type === 7 && (e[t] = up(e[t]));
		}
	},
	ondirarg(e, t) {
		if (e === t) return;
		let n = qf(e, t);
		if (Hf && !yf(X)) X.name += n, lp(X.nameLoc, t);
		else {
			let r = n[0] !== "[";
			X.arg = dp(r ? n : n.slice(1, -1), r, $(e, t), r ? 3 : 0);
		}
	},
	ondirmodifier(e, t) {
		let n = qf(e, t);
		if (Hf && !yf(X)) X.name += "." + n, lp(X.nameLoc, t);
		else if (X.name === "slot") {
			let e = X.arg;
			e && (e.content += "." + n, lp(e.loc, t));
		} else {
			let r = q(n, !0, $(e, t));
			X.modifiers.push(r);
		}
	},
	onattribdata(e, t) {
		Rf += qf(e, t), zf < 0 && (zf = e), Bf = t;
	},
	onattribentity(e, t, n) {
		Rf += e, zf < 0 && (zf = t), Bf = n;
	},
	onattribnameend(e) {
		let t = X.loc.start.offset, n = qf(t, e);
		X.type === 7 && (X.rawName = n), Lf.props.some((e) => (e.type === 7 ? e.rawName : e.name) === n) && fp(2, t);
	},
	onattribend(e, t) {
		if (Lf && X) {
			if (lp(X.loc, t), e !== 0) {
				if (Rf.includes("&") && (Rf = Y.decodeEntities(Rf, !0)), X.type === 6) X.name === "class" && (Rf = op(Rf).trim()), e === 1 && !Rf && fp(13, t), X.value = {
					type: 2,
					content: Rf,
					loc: e === 1 ? $(zf, Bf) : $(zf - 1, Bf + 1)
				}, Q.inSFCRoot && Lf.tag === "template" && X.name === "lang" && Rf && Rf !== "html" && Q.enterRCDATA(Jd("</template"), 0);
				else {
					X.exp = dp(Rf, !1, $(zf, Bf), 0, 0), X.name === "for" && (X.forParseResult = Kf(X.exp));
					let e = -1;
					X.name === "bind" && (e = X.modifiers.findIndex((e) => e.content === "sync")) > -1 && $d("COMPILER_V_BIND_SYNC", Y, X.loc, X.arg.loc.source) && (X.name = "model", X.modifiers.splice(e, 1));
				}
			}
			(X.type !== 7 || X.name !== "pre") && Lf.props.push(X);
		}
		Rf = "", zf = Bf = -1;
	},
	oncomment(e, t) {
		Y.comments && sp({
			type: 3,
			content: qf(e, t),
			loc: $(e - 4, t + 3)
		});
	},
	onend() {
		let e = If.length;
		for (let t = 0; t < Z.length; t++) Xf(Z[t], e - 1), fp(24, Z[t].loc.start.offset);
	},
	oncdata(e, t) {
		(Z[0] ? Z[0].ns : Y.ns) === 0 ? fp(1, e - 9) : Yf(qf(e, t), e, t);
	},
	onprocessinginstruction(e) {
		(Z[0] ? Z[0].ns : Y.ns) === 0 && fp(21, e - 1);
	}
}), Wf = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Gf = /^\(|\)$/g;
function Kf(e) {
	let t = e.loc, n = e.content, r = n.match(Af);
	if (!r) return;
	let [, i, a] = r, o = (e, n, r = !1) => {
		let i = t.start.offset + n;
		return dp(e, !1, $(i, i + e.length), 0, +!!r);
	}, s = {
		source: o(a.trim(), n.indexOf(a, i.length)),
		value: void 0,
		key: void 0,
		index: void 0,
		finalized: !1
	}, c = i.trim().replace(Gf, "").trim(), l = i.indexOf(c), u = c.match(Wf);
	if (u) {
		c = c.replace(Wf, "").trim();
		let e = u[1].trim(), t;
		if (e && (t = n.indexOf(e, l + c.length), s.key = o(e, t, !0)), u[2]) {
			let r = u[2].trim();
			r && (s.index = o(r, n.indexOf(r, s.key ? t + e.length : l + c.length), !0));
		}
	}
	return c && (s.value = o(c, l, !0)), s;
}
function qf(e, t) {
	return If.slice(e, t);
}
function Jf(e) {
	Q.inSFCRoot && (Lf.innerLoc = $(e + 1, e + 1)), sp(Lf);
	let { tag: t, ns: n } = Lf;
	n === 0 && Y.isPreTag(t) && Vf++, Y.isVoidTag(t) ? Xf(Lf, e) : (Z.unshift(Lf), (n === 1 || n === 2) && (Q.inXML = !0)), Lf = null;
}
function Yf(e, t, n) {
	{
		let t = Z[0] && Z[0].tag;
		t !== "script" && t !== "style" && e.includes("&") && (e = Y.decodeEntities(e, !1));
	}
	let r = Z[0] || Ff, i = r.children[r.children.length - 1];
	i && i.type === 2 ? (i.content += e, lp(i.loc, n)) : r.children.push({
		type: 2,
		content: e,
		loc: $(t, n)
	});
}
function Xf(e, t, n = !1) {
	n ? lp(e.loc, Qf(t, 60)) : lp(e.loc, Zf(t, 62) + 1), Q.inSFCRoot && (e.children.length ? e.innerLoc.end = _({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = _({}, e.innerLoc.start), e.innerLoc.source = qf(e.innerLoc.start.offset, e.innerLoc.end.offset));
	let { tag: r, ns: i, children: a } = e;
	if (Hf || (r === "slot" ? e.tagType = 2 : ep(e) ? e.tagType = 3 : tp(e) && (e.tagType = 1)), Q.inRCDATA || (e.children = ip(a)), i === 0 && Y.isIgnoreNewlineTag(r)) {
		let e = a[0];
		e && e.type === 2 && (e.content = e.content.replace(/^\r?\n/, ""));
	}
	i === 0 && Y.isPreTag(r) && Vf--, Uf === e && (Hf = Q.inVPre = !1, Uf = null), Q.inXML && (Z[0] ? Z[0].ns : Y.ns) === 0 && (Q.inXML = !1);
	{
		let t = e.props;
		if (!Q.inSFCRoot && Qd("COMPILER_NATIVE_TEMPLATE", Y) && e.tag === "template" && !ep(e)) {
			let t = Z[0] || Ff, n = t.children.indexOf(e);
			t.children.splice(n, 1, ...e.children);
		}
		let n = t.find((e) => e.type === 6 && e.name === "inline-template");
		n && $d("COMPILER_INLINE_TEMPLATE", Y, n.loc) && e.children.length && (n.value = {
			type: 2,
			content: qf(e.children[0].loc.start.offset, e.children[e.children.length - 1].loc.end.offset),
			loc: n.loc
		});
	}
}
function Zf(e, t) {
	let n = e;
	for (; If.charCodeAt(n) !== t && n < If.length - 1;) n++;
	return n;
}
function Qf(e, t) {
	let n = e;
	for (; If.charCodeAt(n) !== t && n >= 0;) n--;
	return n;
}
var $f = /* @__PURE__ */ new Set([
	"if",
	"else",
	"else-if",
	"for",
	"slot"
]);
function ep({ tag: e, props: t }) {
	if (e === "template") {
		for (let e = 0; e < t.length; e++) if (t[e].type === 7 && $f.has(t[e].name)) return !0;
	}
	return !1;
}
function tp({ tag: e, props: t }) {
	if (Y.isCustomElement(e)) return !1;
	if (e === "component" || np(e.charCodeAt(0)) || rf(e) || Y.isBuiltInComponent && Y.isBuiltInComponent(e) || Y.isNativeTag && !Y.isNativeTag(e)) return !0;
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n.type === 6) {
			if (n.name === "is" && n.value && (n.value.content.startsWith("vue:") || $d("COMPILER_IS_ON_ELEMENT", Y, n.loc))) return !0;
		} else if (n.name === "bind" && gf(n.arg, "is") && $d("COMPILER_IS_ON_ELEMENT", Y, n.loc)) return !0;
	}
	return !1;
}
function np(e) {
	return e > 64 && e < 91;
}
var rp = /\r\n/g;
function ip(e) {
	let t = Y.whitespace !== "preserve", n = !1;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i.type === 2) {
			if (Vf) i.content = i.content.replace(rp, "\n");
			else if (jf(i.content)) {
				let a = e[r - 1] && e[r - 1].type, o = e[r + 1] && e[r + 1].type;
				!a || !o || t && (a === 3 && (o === 3 || o === 1) || a === 1 && (o === 3 || o === 1 && ap(i.content))) ? (n = !0, e[r] = null) : i.content = " ";
			} else t && (i.content = op(i.content));
		}
	}
	return n ? e.filter(Boolean) : e;
}
function ap(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e.charCodeAt(t);
		if (n === 10 || n === 13) return !0;
	}
	return !1;
}
function op(e) {
	let t = "", n = !1;
	for (let r = 0; r < e.length; r++) Kd(e.charCodeAt(r)) ? n ||= (t += " ", !0) : (t += e[r], n = !1);
	return t;
}
function sp(e) {
	(Z[0] || Ff).children.push(e);
}
function $(e, t) {
	return {
		start: Q.getPos(e),
		end: t == null ? t : Q.getPos(t),
		source: t == null ? t : qf(e, t)
	};
}
function cp(e) {
	return $(e.start.offset, e.end.offset);
}
function lp(e, t) {
	e.end = Q.getPos(t), e.source = qf(e.start.offset, t);
}
function up(e) {
	let t = {
		type: 6,
		name: e.rawName,
		nameLoc: $(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
		value: void 0,
		loc: e.loc
	};
	if (e.exp) {
		let n = e.exp.loc;
		n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
			type: 2,
			content: e.exp.content,
			loc: n
		};
	}
	return t;
}
function dp(e, t = !1, n, r = 0, i = 0) {
	return q(e, t, n, r);
}
function fp(e, t, n) {
	Y.onError(J(e, $(t, t), void 0, n));
}
function pp() {
	Q.reset(), Lf = null, X = null, Rf = "", zf = -1, Bf = -1, Z.length = 0;
}
function mp(e, t) {
	if (pp(), If = e, Y = _({}, Pf), t) {
		let e;
		for (e in t) t[e] != null && (Y[e] = t[e]);
	}
	Q.mode = Y.parseMode === "html" ? 1 : Y.parseMode === "sfc" ? 2 : 0, Q.inXML = Y.ns === 1 || Y.ns === 2;
	let n = t && t.delimiters;
	n && (Q.delimiterOpen = Jd(n[0]), Q.delimiterClose = Jd(n[1]));
	let r = Ff = Ad([], e);
	return Q.parse(If), r.loc = $(0, e.length), r.children = ip(r.children), Ff = null, r;
}
function hp(e, t) {
	_p(e, void 0, t, !!gp(e));
}
function gp(e) {
	let t = e.children.filter((e) => e.type !== 3);
	return t.length === 1 && t[0].type === 1 && !Sf(t[0]) ? t[0] : null;
}
function _p(e, t, n, r = !1, i = !1) {
	let { children: a } = e, o = [];
	for (let t = 0; t < a.length; t++) {
		let s = a[t];
		if (s.type === 1 && s.tagType === 0) {
			let e = r ? 0 : vp(s, n);
			if (e > 0) {
				if (e >= 2) {
					s.codegenNode.patchFlag = -1, o.push(s);
					continue;
				}
			} else {
				let e = s.codegenNode;
				if (e.type === 13) {
					let t = e.patchFlag;
					if ((t === void 0 || t === 512 || t === 1) && xp(s, n) >= 2) {
						let t = Sp(s);
						t && (e.props = n.hoist(t));
					}
					e.dynamicProps &&= n.hoist(e.dynamicProps);
				}
			}
		} else if (s.type === 12 && (r ? 0 : vp(s, n)) >= 2) {
			s.codegenNode.type === 14 && s.codegenNode.arguments.length > 0 && s.codegenNode.arguments.push("-1"), o.push(s);
			continue;
		}
		if (s.type === 1) {
			let t = s.tagType === 1;
			t && n.scopes.vSlot++, _p(s, e, n, !1, i), t && n.scopes.vSlot--;
		} else if (s.type === 11) _p(s, e, n, s.children.length === 1, !0);
		else if (s.type === 9) for (let t = 0; t < s.branches.length; t++) _p(s.branches[t], e, n, s.branches[t].children.length === 1, i);
	}
	let s = !1;
	if (o.length === a.length && e.type === 1) {
		if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && x(e.codegenNode.children)) e.codegenNode.children = c(Md(e.codegenNode.children)), s = !0;
		else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !x(e.codegenNode.children) && e.codegenNode.children.type === 15) {
			let t = l(e.codegenNode, "default");
			t && (t.returns = c(Md(t.returns)), s = !0);
		} else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !x(t.codegenNode.children) && t.codegenNode.children.type === 15) {
			let n = mf(e, "slot", !0), r = n && n.arg && l(t.codegenNode, n.arg);
			r && (r.returns = c(Md(r.returns)), s = !0);
		}
	}
	if (!s) for (let e of o) e.codegenNode = n.cache(e.codegenNode);
	function c(e) {
		let t = n.cache(e);
		return t.needArraySpread = !0, t;
	}
	function l(e, t) {
		if (e.children && !x(e.children) && e.children.type === 15) {
			let n = e.children.properties.find((e) => e.key === t || e.key.content === t);
			return n && n.value;
		}
	}
	o.length && n.transformHoist && n.transformHoist(a, n, e);
}
function vp(e, t) {
	let { constantCache: n } = t;
	switch (e.type) {
		case 1:
			if (e.tagType !== 0) return 0;
			let r = n.get(e);
			if (r !== void 0) return r;
			let i = e.codegenNode;
			if (i.type !== 13 || i.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math") return 0;
			if (i.patchFlag === void 0) {
				let r = 3, a = xp(e, t);
				if (a === 0) return n.set(e, 0), 0;
				a < r && (r = a);
				for (let i = 0; i < e.children.length; i++) {
					let a = vp(e.children[i], t);
					if (a === 0) return n.set(e, 0), 0;
					a < r && (r = a);
				}
				if (r > 1) for (let i = 0; i < e.props.length; i++) {
					let a = e.props[i];
					if (a.type === 7 && a.name === "bind" && a.exp) {
						let i = vp(a.exp, t);
						if (i === 0) return n.set(e, 0), 0;
						i < r && (r = i);
					}
				}
				if (i.isBlock) {
					for (let t = 0; t < e.props.length; t++) if (e.props[t].type === 7) return n.set(e, 0), 0;
					t.removeHelper(qu), t.removeHelper(Vd(t.inSSR, i.isComponent)), i.isBlock = !1, t.helper(Bd(t.inSSR, i.isComponent));
				}
				return n.set(e, r), r;
			}
			return n.set(e, 0), 0;
		case 2:
		case 3: return 3;
		case 9:
		case 11:
		case 10: return 0;
		case 5:
		case 12: return vp(e.content, t);
		case 4: return e.constType;
		case 8:
			let a = 3;
			for (let n = 0; n < e.children.length; n++) {
				let r = e.children[n];
				if (E(r) || D(r)) continue;
				let i = vp(r, t);
				if (i === 0) return 0;
				i < a && (a = i);
			}
			return a;
		case 20: return 2;
		default: return 0;
	}
}
var yp = /* @__PURE__ */ new Set([
	dd,
	fd,
	pd,
	md
]);
function bp(e, t) {
	if (e.type === 14 && !E(e.callee) && yp.has(e.callee)) {
		let n = e.arguments[0];
		if (n.type === 4) return vp(n, t);
		if (n.type === 14) return bp(n, t);
	}
	return 0;
}
function xp(e, t) {
	let n = 3, r = Sp(e);
	if (r && r.type === 15) {
		let { properties: e } = r;
		for (let r = 0; r < e.length; r++) {
			let { key: i, value: a } = e[r], o = vp(i, t);
			if (o === 0) return o;
			o < n && (n = o);
			let s;
			if (s = a.type === 4 ? vp(a, t) : a.type === 14 ? bp(a, t) : 0, s === 0) return s;
			s < n && (n = s);
		}
	}
	return n;
}
function Sp(e) {
	let t = e.codegenNode;
	if (t.type === 13) return t.props;
}
function Cp(e, { filename: t = "", prefixIdentifiers: n = !1, hoistStatic: r = !1, hmr: i = !1, cacheHandlers: a = !1, nodeTransforms: o = [], directiveTransforms: s = {}, transformHoist: c = null, isBuiltInComponent: l = p, isCustomElement: u = p, expressionPlugins: f = [], scopeId: m = null, slotted: h = !0, ssr: g = !1, inSSR: _ = !1, ssrCssVars: v = "", bindingMetadata: y = d, inline: b = !1, isTS: x = !1, onError: S = ef, onWarn: C = tf, compatConfig: w }) {
	let ee = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), T = {
		filename: t,
		selfName: ee && le(M(ee[1])),
		prefixIdentifiers: n,
		hoistStatic: r,
		hmr: i,
		cacheHandlers: a,
		nodeTransforms: o,
		directiveTransforms: s,
		transformHoist: c,
		isBuiltInComponent: l,
		isCustomElement: u,
		expressionPlugins: f,
		scopeId: m,
		slotted: h,
		ssr: g,
		inSSR: _,
		ssrCssVars: v,
		bindingMetadata: y,
		inline: b,
		isTS: x,
		onError: S,
		onWarn: C,
		compatConfig: w,
		root: e,
		helpers: /* @__PURE__ */ new Map(),
		components: /* @__PURE__ */ new Set(),
		directives: /* @__PURE__ */ new Set(),
		hoists: [],
		imports: [],
		cached: [],
		constantCache: /* @__PURE__ */ new WeakMap(),
		vForMemoKeyedNodes: /* @__PURE__ */ new WeakSet(),
		temps: 0,
		identifiers: /* @__PURE__ */ Object.create(null),
		scopes: {
			vFor: 0,
			vSlot: 0,
			vPre: 0,
			vOnce: 0
		},
		parent: null,
		grandParent: null,
		currentNode: e,
		childIndex: 0,
		inVOnce: !1,
		helper(e) {
			let t = T.helpers.get(e) || 0;
			return T.helpers.set(e, t + 1), e;
		},
		removeHelper(e) {
			let t = T.helpers.get(e);
			if (t) {
				let n = t - 1;
				n ? T.helpers.set(e, n) : T.helpers.delete(e);
			}
		},
		helperString(e) {
			return `_${Dd[T.helper(e)]}`;
		},
		replaceNode(e) {
			T.parent.children[T.childIndex] = T.currentNode = e;
		},
		removeNode(e) {
			let t = T.parent.children, n = e ? t.indexOf(e) : T.currentNode ? T.childIndex : -1;
			!e || e === T.currentNode ? (T.currentNode = null, T.onNodeRemoved()) : T.childIndex > n && (T.childIndex--, T.onNodeRemoved()), T.parent.children.splice(n, 1);
		},
		onNodeRemoved: p,
		addIdentifiers(e) {},
		removeIdentifiers(e) {},
		hoist(e) {
			E(e) && (e = q(e)), T.hoists.push(e);
			let t = q(`_hoisted_${T.hoists.length}`, !1, e.loc, 2);
			return t.hoisted = e, t;
		},
		cache(e, t = !1, n = !1) {
			let r = Rd(T.cached.length, e, t, n);
			return T.cached.push(r), r;
		}
	};
	return T.filters = /* @__PURE__ */ new Set(), T;
}
function wp(e, t) {
	let n = Cp(e, t);
	Dp(e, n), t.hoistStatic && hp(e, n), t.ssr || Tp(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Tp(e, t) {
	let { helper: n } = t, { children: r } = e;
	if (r.length === 1) {
		let n = gp(e);
		if (n && n.codegenNode) {
			let r = n.codegenNode;
			r.type === 13 && Hd(r, t), e.codegenNode = r;
		} else e.codegenNode = r[0];
	} else r.length > 1 && (e.codegenNode = jd(t, n(Hu), void 0, e.children, 64, void 0, void 0, !0, void 0, !1));
}
function Ep(e, t) {
	let n = 0, r = () => {
		n--;
	};
	for (; n < e.children.length; n++) {
		let i = e.children[n];
		E(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = r, Dp(i, t));
	}
}
function Dp(e, t) {
	t.currentNode = e;
	let { nodeTransforms: n } = t, r = [];
	for (let i = 0; i < n.length; i++) {
		let a = n[i](e, t);
		if (a && (x(a) ? r.push(...a) : r.push(a)), t.currentNode) e = t.currentNode;
		else return;
	}
	switch (e.type) {
		case 3:
			t.ssr || t.helper(Qu);
			break;
		case 5:
			t.ssr || t.helper(ld);
			break;
		case 9:
			for (let n = 0; n < e.branches.length; n++) Dp(e.branches[n], t);
			break;
		case 10:
		case 11:
		case 1:
		case 0: Ep(e, t);
	}
	t.currentNode = e;
	let i = r.length;
	for (; i--;) r[i]();
}
function Op(e, t) {
	let n = E(e) ? (t) => t === e : (t) => e.test(t);
	return (e, r) => {
		if (e.type === 1) {
			let { props: i } = e;
			if (e.tagType === 3 && i.some(bf)) return;
			let a = [];
			for (let o = 0; o < i.length; o++) {
				let s = i[o];
				if (s.type === 7 && n(s.name)) {
					i.splice(o, 1), o--;
					let n = t(e, s, r);
					n && a.push(n);
				}
			}
			return a;
		}
	};
}
var kp = "/*@__PURE__*/", Ap = (e) => `${Dd[e]}: _${Dd[e]}`;
function jp(e, { mode: t = "function", prefixIdentifiers: n = t === "module", sourceMap: r = !1, filename: i = "template.vue.html", scopeId: a = null, optimizeImports: o = !1, runtimeGlobalName: s = "Vue", runtimeModuleName: c = "vue", ssrRuntimeModuleName: l = "vue/server-renderer", ssr: u = !1, isTS: d = !1, inSSR: f = !1 }) {
	let p = {
		mode: t,
		prefixIdentifiers: n,
		sourceMap: r,
		filename: i,
		scopeId: a,
		optimizeImports: o,
		runtimeGlobalName: s,
		runtimeModuleName: c,
		ssrRuntimeModuleName: l,
		ssr: u,
		isTS: d,
		inSSR: f,
		source: e.source,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		indentLevel: 0,
		pure: !1,
		map: void 0,
		helper(e) {
			return `_${Dd[e]}`;
		},
		push(e, t = -2, n) {
			p.code += e;
		},
		indent() {
			m(++p.indentLevel);
		},
		deindent(e = !1) {
			e ? --p.indentLevel : m(--p.indentLevel);
		},
		newline() {
			m(p.indentLevel);
		}
	};
	function m(e) {
		p.push("\n" + "  ".repeat(e), 0);
	}
	return p;
}
function Mp(e, t = {}) {
	let n = jp(e, t);
	t.onContextCreated && t.onContextCreated(n);
	let { mode: r, push: i, prefixIdentifiers: a, indent: o, deindent: s, newline: c, scopeId: l, ssr: u } = n, d = Array.from(e.helpers), f = d.length > 0, p = !a && r !== "module";
	if (Np(e, n), i(`function ${u ? "ssrRender" : "render"}(${(u ? [
		"_ctx",
		"_push",
		"_parent",
		"_attrs"
	] : ["_ctx", "_cache"]).join(", ")}) {`), o(), p && (i("with (_ctx) {"), o(), f && (i(`const { ${d.map(Ap).join(", ")} } = _Vue
`, -1), c())), e.components.length && (Pp(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (Pp(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), Pp(e.filters, "filter", n), c()), e.temps > 0) {
		i("let ");
		for (let t = 0; t < e.temps; t++) i(`${t > 0 ? ", " : ""}_temp${t}`);
	}
	return (e.components.length || e.directives.length || e.temps) && (i("\n", 0), c()), u || i("return "), e.codegenNode ? Rp(e.codegenNode, n) : i("null"), p && (s(), i("}")), s(), i("}"), {
		ast: e,
		code: n.code,
		preamble: "",
		map: n.map ? n.map.toJSON() : void 0
	};
}
function Np(e, t) {
	let { ssr: n, prefixIdentifiers: r, push: i, newline: a, runtimeModuleName: o, runtimeGlobalName: s, ssrRuntimeModuleName: c } = t, l = s, u = Array.from(e.helpers);
	u.length > 0 && (i(`const _Vue = ${l}
`, -1), e.hoists.length && i(`const { ${[
		Xu,
		Zu,
		Qu,
		$u,
		ed
	].filter((e) => u.includes(e)).map(Ap).join(", ")} } = _Vue
`, -1)), Fp(e.hoists, t), a(), i("return ");
}
function Pp(e, t, { helper: n, push: r, newline: i, isTS: a }) {
	let o = n(t === "filter" ? id : t === "component" ? td : rd);
	for (let n = 0; n < e.length; n++) {
		let s = e[n], c = s.endsWith("__self");
		c && (s = s.slice(0, -6)), r(`const ${Of(s, t)} = ${o}(${JSON.stringify(s)}${c ? ", true" : ""})${a ? "!" : ""}`), n < e.length - 1 && i();
	}
}
function Fp(e, t) {
	if (!e.length) return;
	t.pure = !0;
	let { push: n, newline: r } = t;
	r();
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a && (n(`const _hoisted_${i + 1} = `), Rp(a, t), r());
	}
	t.pure = !1;
}
function Ip(e, t) {
	let n = e.length > 3 || !1;
	t.push("["), n && t.indent(), Lp(e, t, n), n && t.deindent(), t.push("]");
}
function Lp(e, t, n = !1, r = !0) {
	let { push: i, newline: a } = t;
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		E(s) ? i(s, -3) : x(s) ? Ip(s, t) : Rp(s, t), o < e.length - 1 && (n ? (r && i(","), a()) : r && i(", "));
	}
}
function Rp(e, t) {
	if (E(e)) t.push(e, -3);
	else if (D(e)) t.push(t.helper(e));
	else switch (e.type) {
		case 1:
		case 9:
		case 11:
			Rp(e.codegenNode, t);
			break;
		case 2:
			zp(e, t);
			break;
		case 4:
			Bp(e, t);
			break;
		case 5:
			Vp(e, t);
			break;
		case 12:
			Rp(e.codegenNode, t);
			break;
		case 8:
			Hp(e, t);
			break;
		case 3:
			Wp(e, t);
			break;
		case 13:
			Gp(e, t);
			break;
		case 14:
			qp(e, t);
			break;
		case 15:
			Jp(e, t);
			break;
		case 17:
			Yp(e, t);
			break;
		case 18:
			Xp(e, t);
			break;
		case 19:
			Zp(e, t);
			break;
		case 20:
			Qp(e, t);
			break;
		case 21: Lp(e.body, t, !0, !1);
	}
}
function zp(e, t) {
	t.push(JSON.stringify(e.content), -3, e);
}
function Bp(e, t) {
	let { content: n, isStatic: r } = e;
	t.push(r ? JSON.stringify(n) : n, -3, e);
}
function Vp(e, t) {
	let { push: n, helper: r, pure: i } = t;
	i && n(kp), n(`${r(ld)}(`), Rp(e.content, t), n(")");
}
function Hp(e, t) {
	for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		E(r) ? t.push(r, -3) : Rp(r, t);
	}
}
function Up(e, t) {
	let { push: n } = t;
	e.type === 8 ? (n("["), Hp(e, t), n("]")) : e.isStatic ? n(of(e.content) ? e.content : JSON.stringify(e.content), -2, e) : n(`[${e.content}]`, -3, e);
}
function Wp(e, t) {
	let { push: n, helper: r, pure: i } = t;
	i && n(kp), n(`${r(Qu)}(${JSON.stringify(e.content)})`, -3, e);
}
function Gp(e, t) {
	let { push: n, helper: r, pure: i } = t, { tag: a, props: o, children: s, patchFlag: c, dynamicProps: l, directives: u, isBlock: d, disableTracking: f, isComponent: p } = e, m;
	c && (m = String(c)), u && n(r(ad) + "("), d && n(`(${r(qu)}(${f ? "true" : ""}), `), i && n(kp), n(r(d ? Vd(t.inSSR, p) : Bd(t.inSSR, p)) + "(", -2, e), Lp(Kp([
		a,
		o,
		s,
		m,
		l
	]), t), n(")"), d && n(")"), u && (n(", "), Rp(u, t), n(")"));
}
function Kp(e) {
	let t = e.length;
	for (; t-- && e[t] == null;);
	return e.slice(0, t + 1).map((e) => e || "null");
}
function qp(e, t) {
	let { push: n, helper: r, pure: i } = t, a = E(e.callee) ? e.callee : r(e.callee);
	i && n(kp), n(a + "(", -2, e), Lp(e.arguments, t), n(")");
}
function Jp(e, t) {
	let { push: n, indent: r, deindent: i, newline: a } = t, { properties: o } = e;
	if (!o.length) {
		n("{}", -2, e);
		return;
	}
	let s = o.length > 1 || !1;
	n(s ? "{" : "{ "), s && r();
	for (let e = 0; e < o.length; e++) {
		let { key: r, value: i } = o[e];
		Up(r, t), n(": "), Rp(i, t), e < o.length - 1 && (n(","), a());
	}
	s && i(), n(s ? "}" : " }");
}
function Yp(e, t) {
	Ip(e.elements, t);
}
function Xp(e, t) {
	let { push: n, indent: r, deindent: i } = t, { params: a, returns: o, body: s, newline: c, isSlot: l } = e;
	l && n(`_${Dd[Sd]}(`), n("(", -2, e), x(a) ? Lp(a, t) : a && Rp(a, t), n(") => "), (c || s) && (n("{"), r()), o ? (c && n("return "), x(o) ? Ip(o, t) : Rp(o, t)) : s && Rp(s, t), (c || s) && (i(), n("}")), l && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Zp(e, t) {
	let { test: n, consequent: r, alternate: i, newline: a } = e, { push: o, indent: s, deindent: c, newline: l } = t;
	if (n.type === 4) {
		let e = !of(n.content);
		e && o("("), Bp(n, t), e && o(")");
	} else o("("), Rp(n, t), o(")");
	a && s(), t.indentLevel++, a || o(" "), o("? "), Rp(r, t), t.indentLevel--, a && l(), a || o(" "), o(": ");
	let u = i.type === 19;
	u || t.indentLevel++, Rp(i, t), u || t.indentLevel--, a && c(!0);
}
function Qp(e, t) {
	let { push: n, helper: r, indent: i, deindent: a, newline: o } = t, { needPauseTracking: s, needArraySpread: c } = e;
	c && n("[...("), n(`_cache[${e.index}] || (`), s && (i(), n(`${r(yd)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")), n(`_cache[${e.index}] = `), Rp(e.value, t), s && (n(`).cacheIndex = ${e.index},`), o(), n(`${r(yd)}(1),`), o(), n(`_cache[${e.index}]`), a()), n(")"), c && n(")]");
}
RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
var $p = Op(/^(?:if|else|else-if)$/, (e, t, n) => em(e, t, n, (e, t, r) => {
	let i = n.parent.children, a = i.indexOf(e), o = 0;
	for (; a-- >= 0;) {
		let e = i[a];
		e && e.type === 9 && (o += e.branches.length);
	}
	return () => {
		if (r) e.codegenNode = nm(t, o, n);
		else {
			let r = im(e.codegenNode);
			r.alternate = nm(t, o + e.branches.length - 1, n);
		}
	};
}));
function em(e, t, n, r) {
	if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
		let r = t.exp ? t.exp.loc : e.loc;
		n.onError(J(28, t.loc)), t.exp = q("true", !1, r);
	}
	if (t.name === "if") {
		let i = tm(e, t), a = {
			type: 9,
			loc: cp(e.loc),
			branches: [i]
		};
		if (n.replaceNode(a), r) return r(a, i, !0);
	} else {
		let i = n.parent.children, a = i.indexOf(e);
		for (; a-- >= -1;) {
			let o = i[a];
			if (o && Nf(o)) n.removeNode(o);
			else {
				if (o && o.type === 9) {
					(t.name === "else-if" || t.name === "else") && o.branches[o.branches.length - 1].condition === void 0 && n.onError(J(30, e.loc)), n.removeNode();
					let i = tm(e, t);
					o.branches.push(i);
					let a = r && r(o, i, !1);
					Dp(i, n), a && a(), n.currentNode = null;
				} else n.onError(J(30, e.loc));
				break;
			}
		}
	}
}
function tm(e, t) {
	let n = e.tagType === 3;
	return {
		type: 10,
		loc: e.loc,
		condition: t.name === "else" ? void 0 : t.exp,
		children: n && !mf(e, "for") ? e.children : [e],
		userKey: hf(e, "key"),
		isTemplateIf: n
	};
}
function nm(e, t, n) {
	return e.condition ? Ld(e.condition, rm(e, t, n), Fd(n.helper(Qu), ["\"\"", "true"])) : rm(e, t, n);
}
function rm(e, t, n) {
	let { helper: r } = n, i = K("key", q(`${t}`, !1, kd, 2)), { children: a } = e, o = a[0];
	if (a.length !== 1 || o.type !== 1) {
		if (a.length === 1 && o.type === 11) {
			let e = o.codegenNode;
			return Tf(e, i, n), e;
		}
		return jd(n, r(Hu), Nd([i]), a, 64, void 0, void 0, !0, !1, !1, e.loc);
	}
	{
		let e = o.codegenNode, t = kf(e);
		return t.type === 13 && Hd(t, n), Tf(t, i, n), e;
	}
}
function im(e) {
	for (;;) if (e.type === 19) {
		if (e.alternate.type === 19) e = e.alternate;
		else return e;
	} else e.type === 20 && (e = e.value);
}
var am = Op("for", (e, t, n) => {
	let { helper: r, removeHelper: i } = n;
	return om(e, t, n, (t) => {
		let a = Fd(r(od), [t.source]), o = xf(e), s = mf(e, "memo"), c = hf(e, "key", !1, !0);
		c && c.type;
		let l = c && (c.type === 6 ? c.value ? q(c.value.content, !0) : void 0 : c.exp), u = l ? K("key", l) : null, d = t.source.type === 4 && t.source.constType > 0, f = d ? 64 : c ? 128 : 256;
		return t.codegenNode = jd(n, r(Hu), void 0, a, f, void 0, void 0, !0, !d, !1, e.loc), () => {
			let c, { children: f } = t, p = f.length !== 1 || f[0].type !== 1, m = Sf(e) ? e : o && e.children.length === 1 && Sf(e.children[0]) ? e.children[0] : null;
			if (m) c = m.codegenNode, o && u && Tf(c, u, n);
			else if (p) c = jd(n, r(Hu), u ? Nd([u]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1);
			else {
				c = f[0].codegenNode, o && u && Tf(c, u, n);
				let e = !d || c.isBlockRequired === !0;
				c.isBlock !== e && (c.isBlock ? (i(qu), i(Vd(n.inSSR, c.isComponent))) : i(Bd(n.inSSR, c.isComponent))), c.isBlock = e, c.isBlock ? (r(qu), r(Vd(n.inSSR, c.isComponent))) : (r(Bd(n.inSSR, c.isComponent)), c.needsPatch && (c.patchFlag = (c.patchFlag ?? 0) | 512));
			}
			if (s) {
				let e = Id(cm(t.parseResult, [q("_cached")]));
				e.body = zd([
					Pd([
						"const _memo = (",
						s.exp,
						")"
					]),
					Pd([
						"if (_cached && _cached.el",
						...l ? [" && _cached.key === ", l] : [],
						` && ${n.helperString(Ed)}(_cached, _memo)) return _cached`
					]),
					Pd(["const _item = ", c]),
					q("_item.memo = _memo"),
					q("return _item")
				]), a.arguments.push(e, q("_cache"), q(String(n.cached.length))), n.cached.push(null);
			} else a.arguments.push(Id(cm(t.parseResult), c, !0));
		};
	});
});
function om(e, t, n, r) {
	if (!t.exp) {
		n.onError(J(31, t.loc));
		return;
	}
	let i = t.forParseResult;
	if (!i) {
		n.onError(J(32, t.loc));
		return;
	}
	sm(i, n);
	let { addIdentifiers: a, removeIdentifiers: o, scopes: s } = n, { source: c, value: l, key: u, index: d } = i, f = {
		type: 11,
		loc: t.loc,
		source: c,
		valueAlias: l,
		keyAlias: u,
		objectIndexAlias: d,
		parseResult: i,
		children: xf(e) ? e.children : [e]
	};
	n.replaceNode(f), s.vFor++;
	let p = r && r(f);
	return () => {
		s.vFor--, p && p();
	};
}
function sm(e, t) {
	e.finalized ||= !0;
}
function cm({ value: e, key: t, index: n }, r = []) {
	return lm([
		e,
		t,
		n,
		...r
	]);
}
function lm(e) {
	let t = e.length;
	for (; t-- && !e[t];);
	return e.slice(0, t + 1).map((e, t) => e || q("_".repeat(t + 1), !1));
}
var um = q("undefined", !1), dm = (e, t) => {
	if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
		let n = mf(e, "slot");
		if (n) return n.exp, t.scopes.vSlot++, () => {
			t.scopes.vSlot--;
		};
	}
}, fm = (e, t, n, r) => Id(e, n, !1, !0, n.length ? n[0].loc : r);
function pm(e, t, n = fm) {
	t.helper(Sd);
	let { children: r, loc: i } = e, a = [], o = [], s = t.scopes.vSlot > 0 || t.scopes.vFor > 0, c = mf(e, "slot", !0);
	if (c) {
		let { arg: e, exp: t } = c;
		e && !nf(e) && (s = !0), a.push(K(e || q("default", !0), n(t, void 0, r, i)));
	}
	let l = !1, u = !1, d = [], f = /* @__PURE__ */ new Set(), p = 0;
	for (let e = 0; e < r.length; e++) {
		let i = r[e], m;
		if (!xf(i) || !(m = mf(i, "slot", !0))) {
			i.type !== 3 && d.push(i);
			continue;
		}
		if (c) {
			t.onError(J(37, m.loc));
			break;
		}
		l = !0;
		let { children: h, loc: g } = i, { arg: _ = q("default", !0), exp: v, loc: y } = m, b;
		nf(_) ? b = _ ? _.content : "default" : s = !0;
		let x = mf(i, "for"), S = n(v, x, h, g), C, w;
		if (C = mf(i, "if")) s = !0, o.push(Ld(C.exp, mm(_, S, p++), um));
		else if (w = mf(i, /^else(?:-if)?$/, !0)) {
			let n = e, i;
			for (; n-- && (i = r[n], Nf(i)););
			if (i && xf(i) && mf(i, /^(?:else-)?if$/)) {
				let e = o[o.length - 1];
				for (; e.alternate.type === 19;) e = e.alternate;
				e.alternate = w.exp ? Ld(w.exp, mm(_, S, p++), um) : mm(_, S, p++);
			} else t.onError(J(30, w.loc));
		} else if (x) {
			s = !0;
			let e = x.forParseResult;
			e ? (sm(e, t), o.push(Fd(t.helper(od), [e.source, Id(cm(e), mm(_, S), !0)]))) : t.onError(J(32, x.loc));
		} else {
			if (b) {
				if (f.has(b)) {
					t.onError(J(38, y));
					continue;
				}
				f.add(b), b === "default" && (u = !0);
			}
			a.push(K(_, S));
		}
	}
	if (!c) {
		let e = (e, r) => {
			let a = n(e, void 0, r, i);
			return t.compatConfig && (a.isNonScopedSlot = !0), K("default", a);
		};
		l ? d.length && !d.every(Mf) && (u ? t.onError(J(39, d[0].loc)) : a.push(e(void 0, d))) : a.push(e(void 0, r));
	}
	let m = s ? 2 : hm(e.children) ? 3 : 1, h = Nd(a.concat(K("_", q(m + "", !1))), i);
	return o.length && (h = Fd(t.helper(cd), [h, Md(o)])), {
		slots: h,
		hasDynamicSlots: s
	};
}
function mm(e, t, n) {
	let r = [K("name", e), K("fn", t)];
	return n != null && r.push(K("key", q(String(n), !0))), Nd(r);
}
function hm(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		switch (n.type) {
			case 1:
				if (n.tagType === 2 || hm(n.children)) return !0;
				break;
			case 9:
				if (hm(n.branches)) return !0;
				break;
			case 10:
			case 11: if (hm(n.children)) return !0;
		}
	}
	return !1;
}
var gm = /* @__PURE__ */ new WeakMap(), _m = (e, t) => function() {
	if (e = t.currentNode, e.type !== 1 || e.tagType !== 0 && e.tagType !== 1) return;
	let { tag: n, props: r } = e, i = e.tagType === 1, a = i ? vm(e, t) : `"${n}"`, o = O(a) && a.callee === nd, s, c, l = 0, u, d, f, p = !1, m = !1, h = o || a === Uu || a === Wu || !i && (n === "svg" || n === "foreignObject" || n === "math");
	if (r.length > 0) {
		let n = ym(e, t, void 0, i, o);
		s = n.props, l = n.patchFlag, d = n.dynamicPropNames, p = n.needsPatch, m = n.isBlockRequired;
		let r = n.directives;
		f = r && r.length ? Md(r.map((e) => Sm(e, t))) : void 0, n.shouldUseBlock && (h = !0);
	}
	if (e.children.length > 0) {
		if (a === Gu && (h = !0, l |= 1024), i && a !== Uu && a !== Gu) {
			let { slots: n, hasDynamicSlots: r } = pm(e, t);
			c = n, r && (l |= 1024);
		} else if (e.children.length === 1 && a !== Uu) {
			let n = e.children[0], r = n.type, i = r === 5 || r === 8;
			i && vp(n, t) === 0 && (l |= 1), c = i || r === 2 ? n : e.children;
		} else c = e.children;
	}
	d && d.length && (u = Cm(d));
	let g = e.codegenNode = jd(t, a, s, c, l === 0 ? void 0 : l, u, f, !!h, !1, i, e.loc);
	p &&= l === 0 || l === 32, p && (g.needsPatch = !0), m && (g.isBlockRequired = !0);
};
function vm(e, t, n = !1) {
	let { tag: r } = e, i = wm(r), a = hf(e, "is", !1, !0);
	if (a) {
		if (i || Qd("COMPILER_IS_ON_ELEMENT", t)) {
			let e;
			if (a.type === 6 ? e = a.value && q(a.value.content, !0) : (e = a.exp, e ||= q("is", !1, a.arg.loc)), e) return Fd(t.helper(nd), [e]);
		} else a.type === 6 && a.value.content.startsWith("vue:") && (r = a.value.content.slice(4));
	}
	let o = rf(r) || t.isBuiltInComponent(r);
	return o ? (n || t.helper(o), o) : (t.helper(td), t.components.add(r), Of(r, "component"));
}
function ym(e, t, n = e.props, r, i, a = !1) {
	let { tag: o, loc: s, children: c } = e, l = [], u = [], d = [], f = c.length > 0, p = !1, m = !1, g = 0, _ = !1, v = !1, y = !1, b = !1, x = !1, S = !1, C = [], w = (e) => {
		l.length && (u.push(Nd(bm(l), s)), l = []), e && u.push(e);
	}, ee = () => {
		t.scopes.vFor > 0 && l.push(K(q("ref_for", !0), q("true")));
	}, T = ({ key: e, value: n }) => {
		if (nf(e)) {
			let a = e.content, o = h(a);
			if (o && (!r || i) && a.toLowerCase() !== "onclick" && a !== "onUpdate:modelValue" && !ae(a) && (b = !0), o && ae(a) && (S = !0), a === "ref" && (_ = !0), o && n.type === 14 && (n = n.arguments[0]), n.type === 20 || (n.type === 4 || n.type === 8) && vp(n, t) > 0) return;
			a === "class" ? v = !0 : a === "style" ? y = !0 : a !== "ref" && a !== "key" && !C.includes(a) && C.push(a), r && (a === "class" || a === "style") && !C.includes(a) && C.push(a);
		} else x = !0;
	};
	for (let i = 0; i < n.length; i++) {
		let c = n[i];
		if (c.type === 6) {
			let { loc: e, name: n, nameLoc: r, value: i } = c;
			if (n === "ref" && (_ = !0, ee()), n === "is" && (wm(o) || i && i.content.startsWith("vue:") || Qd("COMPILER_IS_ON_ELEMENT", t))) continue;
			l.push(K(q(n, !0, r), q(i ? i.content : "", !0, i ? i.loc : e)));
		} else {
			let { name: n, arg: i, exp: h, loc: _, modifiers: v } = c, y = n === "bind", b = n === "on";
			if (n === "slot") {
				r || t.onError(J(40, _));
				continue;
			}
			if (n === "once" || n === "memo" || n === "is" || y && gf(i, "is") && (wm(o) || Qd("COMPILER_IS_ON_ELEMENT", t)) || b && a) continue;
			if (y && gf(i, "key") && (p = !0), b && f && i && nf(i) && M(i.content) === "vue:beforeUpdate" && (p = !0, m = !0), y && gf(i, "ref") && ee(), !i && (y || b)) {
				if (x = !0, h) {
					if (y) {
						if (w(), Qd("COMPILER_V_BIND_OBJECT_ORDER", t)) {
							u.unshift(h);
							continue;
						}
						ee(), w(), u.push(h);
					} else w({
						type: 14,
						loc: _,
						callee: t.helper(hd),
						arguments: r ? [h] : [h, "true"]
					});
				} else t.onError(J(y ? 34 : 35, _));
				continue;
			}
			y && v.some((e) => e.content === "prop") && (g |= 32);
			let S = t.directiveTransforms[n];
			if (S) {
				let { props: n, needRuntime: r } = S(c, e, t);
				!a && n.forEach(T), b && i && !nf(i) ? w(Nd(n, s)) : l.push(...n), r && (d.push(c), D(r) && gm.set(c, r));
			} else j(n) || (d.push(c), f && (p = !0, m = !0));
		}
	}
	let E;
	u.length ? (w(), E = u.length > 1 ? Fd(t.helper(ud), u, s) : u[0]) : l.length && (E = Nd(bm(l), s)), x ? g |= 16 : (v && !r && (g |= 2), y && !r && (g |= 4), C.length && (g |= 8), b && (g |= 32));
	let O = (g === 0 || g === 32) && (_ || S || d.length > 0);
	if (!p && O && (g |= 512), !t.inSSR && E) switch (E.type) {
		case 15:
			let e = -1, n = -1, r = !1;
			for (let t = 0; t < E.properties.length; t++) {
				let i = E.properties[t].key;
				nf(i) ? i.content === "class" ? e = t : i.content === "style" && (n = t) : i.isHandlerKey || (r = !0);
			}
			let i = E.properties[e], a = E.properties[n];
			r ? E = Fd(t.helper(pd), [E]) : (i && !nf(i.value) && (i.value = Fd(t.helper(dd), [i.value])), a && (y || a.value.type === 4 && a.value.content.trim()[0] === "[" || a.value.type === 17) && (a.value = Fd(t.helper(fd), [a.value])));
			break;
		case 14: break;
		default: E = Fd(t.helper(pd), [Fd(t.helper(md), [E])]);
	}
	return {
		props: E,
		directives: d,
		patchFlag: g,
		dynamicPropNames: C,
		shouldUseBlock: p,
		needsPatch: O,
		isBlockRequired: m
	};
}
function bm(e) {
	let t = /* @__PURE__ */ new Map(), n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i.key.type === 8 || !i.key.isStatic) {
			n.push(i);
			continue;
		}
		let a = i.key.content, o = t.get(a);
		o ? (a === "style" || a === "class" || h(a)) && xm(o, i) : (t.set(a, i), n.push(i));
	}
	return n;
}
function xm(e, t) {
	e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Md([e.value, t.value], e.loc);
}
function Sm(e, t) {
	let n = [], r = gm.get(e);
	r ? n.push(t.helperString(r)) : (t.helper(rd), t.directives.add(e.name), n.push(Of(e.name, "directive")));
	let { loc: i } = e;
	if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
		e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
		let t = q("true", !1, i);
		n.push(Nd(e.modifiers.map((e) => K(e, t)), i));
	}
	return Md(n, e.loc);
}
function Cm(e) {
	let t = "[";
	for (let n = 0, r = e.length; n < r; n++) t += JSON.stringify(e[n]), n < r - 1 && (t += ", ");
	return t + "]";
}
function wm(e) {
	return e === "component" || e === "Component";
}
var Tm = (e, t) => {
	if (Sf(e)) {
		let { children: n, loc: r } = e, { slotName: i, slotProps: a } = Em(e, t), o = [
			t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
			i,
			"{}",
			"undefined",
			"true"
		], s = 2;
		a && (o[2] = a, s = 3), n.length && (o[3] = Id([], n, !1, !1, r), s = 4), t.scopeId && !t.slotted && (s = 5), o.splice(s), e.codegenNode = Fd(t.helper(sd), o, r);
	}
};
function Em(e, t) {
	let n = "\"default\"", r, i = [];
	for (let t = 0; t < e.props.length; t++) {
		let r = e.props[t];
		r.type === 6 ? r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = M(r.name), i.push(r))) : r.name === "bind" && gf(r.arg, "name") ? r.exp ? n = r.exp : r.arg && r.arg.type === 4 && (n = r.exp = q(M(r.arg.content), !1, r.arg.loc)) : (r.name === "bind" && r.arg && nf(r.arg) && (r.arg.content = M(r.arg.content)), i.push(r));
	}
	if (i.length > 0) {
		let { props: n, directives: a } = ym(e, t, i, !1, !1);
		r = n, a.length && t.onError(J(36, a[0].loc));
	}
	return {
		slotName: n,
		slotProps: r
	};
}
var Dm = (e, t, n, r) => {
	let { loc: i, modifiers: a, arg: o } = e;
	!e.exp && !a.length && n.onError(J(35, i));
	let s;
	if (o.type === 4) {
		if (o.isStatic) {
			let e = o.content;
			e.startsWith("vue:") && (e = `vnode-${e.slice(4)}`), s = q(t.tagType !== 0 || e.startsWith("vnode") || !/[A-Z]/.test(e) ? ue(M(e)) : `on:${e}`, !0, o.loc);
		} else s = Pd([
			`${n.helperString(vd)}(`,
			o,
			")"
		]);
	} else s = o, s.children.unshift(`${n.helperString(vd)}(`), s.children.push(")");
	let c = e.exp;
	c && !c.content.trim() && (c = void 0);
	let l = n.cacheHandlers && !c && !n.inVOnce;
	if (c) {
		let e = df(c), t = !(e || pf(c)), n = c.content.includes(";");
		(t || l && e) && (c = Pd([
			`${t ? "$event" : "(...args)"} => ${n ? "{" : "("}`,
			c,
			n ? "}" : ")"
		]));
	}
	let u = { props: [K(s, c || q("() => {}", !1, i))] };
	return r && (u = r(u)), l && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((e) => e.key.isHandlerKey = !0), u;
}, Om = (e, t, n) => {
	let { modifiers: r, loc: i } = e, a = e.arg, { exp: o } = e;
	return o && o.type === 4 && !o.content.trim() && (o = void 0), a.type === 4 ? a.isStatic || (a.content = a.content ? `${a.content} || ""` : "\"\"") : (a.children.unshift("("), a.children.push(") || \"\"")), r.some((e) => e.content === "camel") && (a.type === 4 ? a.content = a.isStatic ? M(a.content) : `${n.helperString(gd)}(${a.content})` : (a.children.unshift(`${n.helperString(gd)}(`), a.children.push(")"))), n.inSSR || (r.some((e) => e.content === "prop") && km(a, "."), r.some((e) => e.content === "attr") && km(a, "^")), { props: [K(a, o)] };
}, km = (e, t) => {
	e.type === 4 ? e.content = e.isStatic ? t + e.content : `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, Am = (e, t) => {
	if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10) return () => {
		let n = e.children, r, i = !1;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			if (vf(t)) {
				i = !0;
				for (let i = e + 1; i < n.length; i++) {
					let a = n[i];
					if (vf(a)) r ||= n[e] = Pd([t], t.loc), r.children.push(" + ", a), n.splice(i, 1), i--;
					else {
						r = void 0;
						break;
					}
				}
			}
		}
		if (i && (n.length !== 1 || e.type !== 0 && (e.type !== 1 || e.tagType !== 0 || e.props.find((e) => e.type === 7 && !t.directiveTransforms[e.name]) || e.tag === "template"))) for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (vf(r) || r.type === 8) {
				let i = [];
				(r.type !== 2 || r.content !== " ") && i.push(r), !t.ssr && vp(r, t) === 0 && i.push("1"), n[e] = {
					type: 12,
					content: r,
					loc: r.loc,
					codegenNode: Fd(t.helper($u), i)
				};
			}
		}
	};
}, jm = /* @__PURE__ */ new WeakSet(), Mm = (e, t) => {
	if (e.type === 1 && mf(e, "once", !0)) return jm.has(e) || t.inVOnce || t.inSSR ? void 0 : (jm.add(e), t.inVOnce = !0, t.helper(yd), () => {
		t.inVOnce = !1;
		let e = t.currentNode;
		e.codegenNode &&= t.cache(e.codegenNode, !0, !0);
	});
}, Nm = (e, t, n) => {
	let { exp: r, arg: i } = e;
	if (!r) return n.onError(J(41, e.loc)), Pm();
	let a = r.loc.source.trim(), o = r.type === 4 ? r.content : a, s = n.bindingMetadata[a];
	if (s === "props" || s === "props-aliased") return n.onError(J(44, r.loc)), Pm();
	if (s === "literal-const" || s === "setup-const") return n.onError(J(45, r.loc)), Pm();
	if (!o.trim() || !df(r)) return n.onError(J(42, r.loc)), Pm();
	let c = i || q("modelValue", !0), l = i ? nf(i) ? `onUpdate:${M(i.content)}` : Pd(["\"onUpdate:\" + ", i]) : "onUpdate:modelValue", u;
	u = Pd([
		`${n.isTS ? "($event: any)" : "$event"} => ((`,
		r,
		") = $event)"
	]);
	let d = [K(c, e.exp), K(l, u)];
	if (e.modifiers.length && t.tagType === 1) {
		let t = e.modifiers.map((e) => e.content).map((e) => (of(e) ? e : JSON.stringify(e)) + ": true").join(", "), n = i ? nf(i) ? `${i.content}Modifiers` : Pd([i, " + \"Modifiers\""]) : "modelModifiers";
		d.push(K(n, q(`{ ${t} }`, !1, e.loc, 2)));
	}
	return Pm(d);
};
function Pm(e = []) {
	return { props: e };
}
var Fm = /[\w).+\-_$\]]/, Im = (e, t) => {
	Qd("COMPILER_FILTERS", t) && (e.type === 5 ? Lm(e.content, t) : e.type === 1 && e.props.forEach((e) => {
		e.type === 7 && e.name !== "for" && e.exp && Lm(e.exp, t);
	}));
};
function Lm(e, t) {
	if (e.type === 4) Rm(e, t);
	else for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		typeof r == "object" && (r.type === 4 ? Rm(r, t) : r.type === 8 ? Lm(r, t) : r.type === 5 && Lm(r.content, t));
	}
}
function Rm(e, t) {
	let n = e.content, r = !1, i = !1, a = !1, o = !1, s = 0, c = 0, l = 0, u = 0, d, f, p, m, h = [];
	for (p = 0; p < n.length; p++) if (f = d, d = n.charCodeAt(p), r) d === 39 && f !== 92 && (r = !1);
	else if (i) d === 34 && f !== 92 && (i = !1);
	else if (a) d === 96 && f !== 92 && (a = !1);
	else if (o) d === 47 && f !== 92 && (o = !1);
	else if (d === 124 && n.charCodeAt(p + 1) !== 124 && n.charCodeAt(p - 1) !== 124 && !s && !c && !l) m === void 0 ? (u = p + 1, m = n.slice(0, p).trim()) : g();
	else {
		switch (d) {
			case 34:
				i = !0;
				break;
			case 39:
				r = !0;
				break;
			case 96:
				a = !0;
				break;
			case 40:
				l++;
				break;
			case 41:
				l--;
				break;
			case 91:
				c++;
				break;
			case 93:
				c--;
				break;
			case 123:
				s++;
				break;
			case 125: s--;
		}
		if (d === 47) {
			let e = p - 1, t;
			for (; e >= 0 && (t = n.charAt(e), t === " "); e--);
			(!t || !Fm.test(t)) && (o = !0);
		}
	}
	m === void 0 ? m = n.slice(0, p).trim() : u !== 0 && g();
	function g() {
		h.push(n.slice(u, p).trim()), u = p + 1;
	}
	if (h.length) {
		for (p = 0; p < h.length; p++) m = zm(m, h[p], t);
		e.content = m, e.ast = void 0;
	}
}
function zm(e, t, n) {
	n.helper(id);
	let r = t.indexOf("(");
	if (r < 0) return n.filters.add(t), `${Of(t, "filter")}(${e})`;
	{
		let i = t.slice(0, r), a = t.slice(r + 1);
		return n.filters.add(i), `${Of(i, "filter")}(${e}${a === ")" ? a : "," + a}`;
	}
}
var Bm = /* @__PURE__ */ new WeakSet(), Vm = (e, t) => {
	if (e.type === 1) {
		let n = mf(e, "memo");
		return !n || Bm.has(e) || t.inSSR ? void 0 : (Bm.add(e), () => {
			let r = e.codegenNode || t.currentNode.codegenNode;
			r && r.type === 13 && (e.tagType !== 1 && Hd(r, t), e.codegenNode = Fd(t.helper(Td), [
				n.exp,
				Id(void 0, r),
				"_cache",
				String(t.cached.length)
			]), t.cached.push(null));
		});
	}
}, Hm = (e, t) => {
	if (e.type === 1) {
		for (let n of e.props) if (n.type === 7 && n.name === "bind" && (!n.exp || n.exp.type === 4 && !n.exp.content.trim()) && n.arg) {
			let e = n.arg;
			if (e.type !== 4 || !e.isStatic) t.onError(J(53, e.loc)), n.exp = q("", !0, e.loc);
			else {
				let t = M(e.content);
				(sf.test(t[0]) || t[0] === "-") && (n.exp = q(t, !1, e.loc));
			}
		}
	}
};
function Um(e) {
	return [[
		Hm,
		Mm,
		$p,
		Vm,
		am,
		Im,
		Tm,
		_m,
		dm,
		Am
	], {
		on: Dm,
		bind: Om,
		model: Nm
	}];
}
function Wm(e, t = {}) {
	let n = t.onError || ef, r = t.mode === "module";
	t.prefixIdentifiers === !0 ? n(J(48)) : r && n(J(49)), t.cacheHandlers && n(J(50)), t.scopeId && !r && n(J(51));
	let i = _({}, t, { prefixIdentifiers: !1 }), a = E(e) ? mp(e, i) : e, [o, s] = Um();
	return wp(a, _({}, i, {
		nodeTransforms: [...o, ...t.nodeTransforms || []],
		directiveTransforms: _({}, s, t.directiveTransforms || {})
	})), Mp(a, i);
}
var Gm = () => ({ props: [] }), Km = /* @__PURE__ */ Symbol(""), qm = /* @__PURE__ */ Symbol(""), Jm = /* @__PURE__ */ Symbol(""), Ym = /* @__PURE__ */ Symbol(""), Xm = /* @__PURE__ */ Symbol(""), Zm = /* @__PURE__ */ Symbol(""), Qm = /* @__PURE__ */ Symbol(""), $m = /* @__PURE__ */ Symbol(""), eh = /* @__PURE__ */ Symbol(""), th = /* @__PURE__ */ Symbol("");
Od({
	[Km]: "vModelRadio",
	[qm]: "vModelCheckbox",
	[Jm]: "vModelText",
	[Ym]: "vModelSelect",
	[Xm]: "vModelDynamic",
	[Zm]: "withModifiers",
	[Qm]: "withKeys",
	[$m]: "vShow",
	[eh]: "Transition",
	[th]: "TransitionGroup"
});
var nh;
function rh(e, t = !1) {
	return nh ||= document.createElement("div"), t ? (nh.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, nh.children[0].getAttribute("foo")) : (nh.innerHTML = e, nh.textContent);
}
var ih = {
	parseMode: "html",
	isVoidTag: Pe,
	isNativeTag: (e) => je(e) || Me(e) || Ne(e),
	isPreTag: (e) => e === "pre",
	isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
	decodeEntities: rh,
	isBuiltInComponent: (e) => {
		if (e === "Transition" || e === "transition") return eh;
		if (e === "TransitionGroup" || e === "transition-group") return th;
	},
	getNamespace(e, t, n) {
		let r = t ? t.ns : n;
		if (t && r === 2) {
			if (t.tag === "annotation-xml") {
				if (e === "svg") return 1;
				t.props.some((e) => e.type === 6 && e.name === "encoding" && e.value != null && (e.value.content === "text/html" || e.value.content === "application/xhtml+xml")) && (r = 0);
			} else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (r = 0);
		} else t && r === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (r = 0);
		if (r === 0) {
			if (e === "svg") return 1;
			if (e === "math") return 2;
		}
		return r;
	}
}, ah = (e) => {
	e.type === 1 && e.props.forEach((t, n) => {
		t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
			type: 7,
			name: "bind",
			arg: q("style", !0, t.loc),
			exp: oh(t.value.content, t.loc),
			modifiers: [],
			loc: t.loc
		});
	});
}, oh = (e, t) => {
	let n = we(e);
	return q(JSON.stringify(n), !1, t, 3);
};
function sh(e, t) {
	return J(e, t, void 0);
}
var ch = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(sh(54, i)), t.children.length && (n.onError(sh(55, i)), t.children.length = 0), { props: [K(q("innerHTML", !0, i), r || q("", !0))] };
}, lh = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(sh(56, i)), t.children.length && (n.onError(sh(57, i)), t.children.length = 0), { props: [K(q("textContent", !0), r ? vp(r, n) > 0 ? r : Fd(n.helperString(ld), [r], i) : q("", !0))] };
}, uh = (e, t, n) => {
	let r = Nm(e, t, n);
	if (!r.props.length || t.tagType === 1) return r;
	e.arg && n.onError(sh(59, e.arg.loc));
	let { tag: i } = t, a = n.isCustomElement(i);
	if (i === "input" || i === "textarea" || i === "select" || a) {
		let o = Jm, s = !1;
		if (i === "input" || a) {
			let r = hf(t, "type");
			if (r) {
				if (r.type === 7) o = Xm;
				else if (r.value) switch (r.value.content) {
					case "radio":
						o = Km;
						break;
					case "checkbox":
						o = qm;
						break;
					case "file": s = !0, n.onError(sh(60, e.loc));
				}
			} else _f(t) && (o = Xm);
		} else i === "select" && (o = Ym);
		s || (r.needRuntime = n.helper(o));
	} else n.onError(sh(58, e.loc));
	return r.props = r.props.filter((e) => e.key.type !== 4 || e.key.content !== "modelValue"), r;
}, dh = /* @__PURE__ */ u("passive,once,capture"), fh = /* @__PURE__ */ u("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"), ph = /* @__PURE__ */ u("left,right"), mh = /* @__PURE__ */ u("onkeyup,onkeydown,onkeypress"), hh = (e, t, n, r) => {
	let i = [], a = [], o = [];
	for (let s = 0; s < t.length; s++) {
		let c = t[s].content;
		c === "native" && $d("COMPILER_V_ON_NATIVE", n, r) || dh(c) ? o.push(c) : ph(c) ? nf(e) ? mh(e.content.toLowerCase()) ? i.push(c) : a.push(c) : (i.push(c), a.push(c)) : fh(c) ? a.push(c) : i.push(c);
	}
	return {
		keyModifiers: i,
		nonKeyModifiers: a,
		eventOptionModifiers: o
	};
}, gh = (e, t) => nf(e) && e.content.toLowerCase() === "onclick" ? q(t, !0) : e.type === 4 ? e : Pd([
	"(",
	e,
	`) === "onClick" ? "${t}" : (`,
	e,
	")"
]), _h = (e, t, n) => Dm(e, t, n, (t) => {
	let { modifiers: r } = e;
	if (!r.length) return t;
	let { key: i, value: a } = t.props[0], { keyModifiers: o, nonKeyModifiers: s, eventOptionModifiers: c } = hh(i, r, n, e.loc);
	if (s.includes("right") && (i = gh(i, "onContextmenu")), s.includes("middle") && (i = gh(i, "onMouseup")), s.length && (a = Fd(n.helper(Zm), [a, JSON.stringify(s)])), o.length && (!nf(i) || mh(i.content.toLowerCase())) && (a = Fd(n.helper(Qm), [a, JSON.stringify(o)])), c.length) {
		let e = c.map(le).join("");
		i = nf(i) ? q(`${i.content}${e}`, !0) : Pd([
			"(",
			i,
			`) + "${e}"`
		]);
	}
	return { props: [K(i, a)] };
}), vh = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(sh(62, i)), {
		props: [],
		needRuntime: n.helper($m)
	};
}, yh = (e, t) => {
	e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && t.removeNode();
}, bh = [ah], xh = {
	cloak: Gm,
	html: ch,
	text: lh,
	model: uh,
	on: _h,
	show: vh
};
function Sh(e, t = {}) {
	return Wm(e, _({}, ih, t, {
		nodeTransforms: [
			yh,
			...bh,
			...t.nodeTransforms || []
		],
		directiveTransforms: _({}, xh, t.directiveTransforms || {}),
		transformHoist: null
	}));
}
//#endregion
//#region node_modules/.pnpm/vue@3.5.43_typescript@7.0.2/node_modules/vue/dist/vue.esm-bundler.js
var Ch = /* @__PURE__ */ Object.create(null);
function wh(e, t) {
	if (!E(e)) {
		if (e.nodeType) e = e.innerHTML;
		else return p;
	}
	let n = ve(e, t), r = Ch[n];
	if (r) return r;
	if (e[0] === "#") {
		let t = document.querySelector(e);
		e = t ? t.innerHTML : "";
	}
	let i = _({
		hoistStatic: !0,
		onError: void 0,
		onWarn: p
	}, t);
	!i.isCustomElement && typeof customElements < "u" && (i.isCustomElement = (e) => !!customElements.get(e));
	let { code: a } = Sh(e, i), o = Function("Vue", a)(Ac);
	return o._rc = !0, Ch[n] = o;
}
dc(wh);
//#endregion
//#region packages/core/src/component.ts
var Th = /* @__PURE__ */ l((/* @__PURE__ */ o(((e, t, n) => {
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
		}, u = "<div class=\"viewer-container\" tabindex=\"-1\" touch-action=\"none\"><div class=\"viewer-canvas\"></div><div class=\"viewer-magnifier\" aria-hidden=\"true\"><img class=\"viewer-magnifier-image\" alt=\"\"></div><div class=\"viewer-navigation\" aria-hidden=\"true\"><div class=\"viewer-prev\" data-viewer-action=\"prev\" role=\"button\" aria-label=\"Previous\"></div><div class=\"viewer-next\" data-viewer-action=\"next\" role=\"button\" aria-label=\"Next\"></div></div><div class=\"viewer-title\" aria-hidden=\"true\"></div><div class=\"viewer-toolbar\" aria-hidden=\"true\"></div><div class=\"viewer-navbar\" aria-hidden=\"true\"><ul class=\"viewer-list\" role=\"navigation\"></ul></div><div class=\"viewer-tooltip\" role=\"alert\" aria-hidden=\"true\"></div><div class=\"viewer-button\" data-viewer-action=\"mix\" role=\"button\" aria-hidden=\"true\"></div><div class=\"viewer-player\" aria-hidden=\"true\"></div></div>", d = typeof window < "u" && window.document !== void 0, f = d ? window : {}, p = d && f.document.documentElement ? "ontouchstart" in f.document.documentElement : !1, m = d ? "PointerEvent" in f : !1, h = "viewer", g = "move", _ = "rotate", v = "switch", y = "transform", b = "zoom", x = `${h}-active`, S = `${h}-close`, C = `${h}-fade`, w = `${h}-fixed`, ee = `${h}-fullscreen`, T = `${h}-fullscreen-exit`, E = `${h}-hide`, D = `${h}-hide-md-down`, O = `${h}-hide-sm-down`, te = `${h}-hide-xs-down`, k = `${h}-in`, ne = `${h}-invisible`, re = `${h}-loading`, ie = `${h}-move`, A = `${h}-open`, ae = `${h}-show`, j = `${h}-transition`, oe = "click", se = "dblclick", M = "dragstart", ce = "focusin", N = "keydown", le = "load", ue = "error", de = p ? "touchend touchcancel" : "mouseup", fe = p ? "touchmove" : "mousemove", pe = m ? "pointerdown" : p ? "touchstart" : "mousedown", me = m ? "pointerenter" : "mouseenter", he = m ? "pointerleave" : "mouseleave", ge = m ? "pointermove" : fe, _e = m ? "pointerup pointercancel" : de, ve = "resize", ye = "transitionend", be = "wheel", xe = "gesturestart gesturechange gestureend", Se = "ready", Ce = "show", we = "shown", Te = "hide", Ee = "hidden", De = "view", Oe = "viewed", ke = "move", Ae = "moved", je = "rotate", Me = "rotated", Ne = "scale", Pe = "scaled", Fe = "zoom", Ie = "zoomed", Le = "play", Re = "playing", ze = "stop", Be = `${h}Action`, Ve = /\s+/, He = [
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
		function Ue(e) {
			return typeof e == "string";
		}
		var We = {
			ctrl: "ctrlKey",
			shift: "shiftKey",
			alt: "altKey",
			meta: "metaKey"
		};
		function Ge(e, t) {
			return e ? e === !0 || Ue(e) && e.split("+").every(function(e) {
				return t[We[e.trim().toLowerCase()]];
			}) : !1;
		}
		var Ke = Number.isNaN || f.isNaN;
		function P(e) {
			return typeof e == "number" && !Ke(e);
		}
		function F(e) {
			return e === void 0;
		}
		function qe(e) {
			return c(e) === "object" && e !== null;
		}
		var Je = Object.prototype.hasOwnProperty;
		function Ye(e) {
			if (!qe(e)) return !1;
			try {
				var t = e.constructor, n = t.prototype;
				return t && n && Je.call(n, "isPrototypeOf");
			} catch {
				return !1;
			}
		}
		function I(e) {
			return typeof e == "function";
		}
		function L(e, t) {
			if (e && I(t)) {
				if (Array.isArray(e) || P(e.length)) for (var n = e.length, r = 0; r < n && t.call(e, e[r], r, e) !== !1; r += 1);
				else qe(e) && Object.keys(e).forEach(function(n) {
					t.call(e, e[n], n, e);
				});
			}
			return e;
		}
		function Xe(e, t, n) {
			L(n, function(n) {
				var r = t.getAttribute(n);
				r !== null && e.setAttribute(n, r);
			});
		}
		function Ze(e, t) {
			var n = e.transition;
			return n && n[t] !== !1;
		}
		var Qe = Object.assign || function(e) {
			var t = [...arguments].slice(1);
			return qe(e) && t.length > 0 && t.forEach(function(t) {
				qe(t) && Object.keys(t).forEach(function(n) {
					e[n] = t[n];
				});
			}), e;
		}, $e = /^(?:width|height|left|top|marginLeft|marginTop)$/;
		function et(e, t) {
			var n = e.style;
			L(t, function(e, t) {
				$e.test(t) && P(e) && (e += "px"), n[t] = e;
			});
		}
		function tt(e) {
			return Ue(e) ? e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : e;
		}
		function nt(e, t) {
			return !e || !t ? !1 : e.classList ? e.classList.contains(t) : e.className.split(Ve).indexOf(t) > -1;
		}
		function R(e, t) {
			if (e && t) {
				if (P(e.length)) L(e, function(e) {
					R(e, t);
				});
				else if (e.classList) e.classList.add(t);
				else {
					var n = e.className.trim();
					n ? n.indexOf(t) < 0 && (e.className = `${n} ${t}`) : e.className = t;
				}
			}
		}
		function z(e, t) {
			if (e && t) {
				if (P(e.length)) L(e, function(e) {
					z(e, t);
				});
				else if (e.classList) e.classList.remove(t);
				else {
					var n = e.className;
					n && n.indexOf(t) >= 0 && (e.className = n.split(Ve).filter(function(e) {
						return e && e !== t;
					}).join(" "));
				}
			}
		}
		function rt(e, t, n) {
			t && (P(e.length) ? L(e, function(e) {
				rt(e, t, n);
			}) : n ? R(e, t) : z(e, t));
		}
		var it = /([a-z\d])([A-Z])/g;
		function at(e) {
			return e.replace(it, "$1-$2").toLowerCase();
		}
		function ot(e, t) {
			return qe(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute(`data-${at(t)}`);
		}
		function st(e, t, n) {
			qe(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute(`data-${at(t)}`, n);
		}
		var ct = function() {
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
		function B(e, t, n) {
			var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = n;
			t.trim().split(Ve).forEach(function(t) {
				if (!ct) {
					var a = e.listeners;
					a && a[t] && a[t][n] && (i = a[t][n], delete a[t][n], Object.keys(a[t]).length === 0 && delete a[t], Object.keys(a).length === 0 && delete e.listeners);
				}
				e.removeEventListener(t, i, r);
			});
		}
		function V(e, t, n) {
			var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = n;
			t.trim().split(Ve).forEach(function(t) {
				if (r.once && !ct) {
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
		function H(e, t, n, r) {
			var i;
			return I(Event) && I(CustomEvent) ? i = new CustomEvent(t, a({
				bubbles: !0,
				cancelable: !0,
				detail: n
			}, r)) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, n)), e.dispatchEvent(i);
		}
		function lt(e) {
			var t = e.getBoundingClientRect();
			return {
				left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
				top: t.top + (window.pageYOffset - document.documentElement.clientTop)
			};
		}
		function ut(e) {
			var t = e.rotate, n = e.scaleX, r = e.scaleY, i = e.translateX, a = e.translateY, o = [];
			P(i) && i !== 0 && o.push(`translateX(${i}px)`), P(a) && a !== 0 && o.push(`translateY(${a}px)`), P(t) && t !== 0 && o.push(`rotate(${t}deg)`), P(n) && P(r) && (n !== 1 || r !== 1) && (o.push(`scaleX(${n})`), o.push(`scaleY(${r})`));
			var s = o.length ? o.join(" ") : "none";
			return {
				WebkitTransform: s,
				msTransform: s,
				transform: s
			};
		}
		function dt(e) {
			return Ue(e) ? decodeURIComponent(e.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
		}
		var ft = f.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(f.navigator.userAgent);
		function pt(e, t, n) {
			var r = document.createElement("img");
			if (e.naturalWidth && !ft) return n(e.naturalWidth, e.naturalHeight), r;
			var i = document.body || document.documentElement;
			return r.onload = function() {
				n(r.width, r.height), ft || i.removeChild(r);
			}, Xe(r, e, t.inheritedAttributes), r.src = e.src, ft || (r.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", i.appendChild(r)), r;
		}
		function mt(e) {
			switch (e) {
				case 2: return te;
				case 3: return O;
				case 4: return D;
				default: return "";
			}
		}
		function ht(e) {
			var t = a({}, e), n = [];
			return L(e, function(e, r) {
				delete t[r], L(t, function(t) {
					var r = Math.abs(e.startX - t.startX), i = Math.abs(e.startY - t.startY), a = Math.abs(e.endX - t.endX), o = Math.abs(e.endY - t.endY), s = Math.sqrt(r * r + i * i), c = (Math.sqrt(a * a + o * o) - s) / s;
					n.push(c);
				});
			}), n.sort(function(e, t) {
				return Math.abs(e) < Math.abs(t);
			}), n[0];
		}
		function gt(e) {
			var t = a({}, e), n = [];
			return L(e, function(e, r) {
				delete t[r], L(t, function(t) {
					var r = Math.atan2(t.startY - e.startY, t.startX - e.startX), i = Math.atan2(t.endY - e.endY, t.endX - e.endX) - r;
					i > Math.PI ? i -= Math.PI * 2 : i < -Math.PI && (i += Math.PI * 2), n.push(i * 180 / Math.PI);
				});
			}), n.sort(function(e, t) {
				return Math.abs(t) - Math.abs(e);
			}), n[0] || 0;
		}
		function _t(e, t) {
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
		function vt(e) {
			var t = 0, n = 0, r = 0;
			return L(e, function(e) {
				var i = e.startX, a = e.startY;
				t += i, n += a, r += 1;
			}), t /= r, n /= r, {
				pageX: t,
				pageY: n
			};
		}
		var yt = {
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
				}, this.parentData = n), (this.fulled || !n) && (n = this.containerData), this.viewerData = Qe({}, n);
			},
			renderViewer: function() {
				this.options.inline && !this.fulled && et(this.viewer, this.viewerData);
			},
			initList: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.index, n = this.element, r = this.options, i = this.list, a = [], o = Ye(r.navbar) ? r.navbar : {}, s = document.createElement("li");
				this.containerData || this.initContainer(), i.appendChild(s);
				var c = this.isNavbarVertical ? s.offsetHeight + parseInt(window.getComputedStyle(s).marginTop, 10) : s.offsetWidth + parseInt(window.getComputedStyle(s).marginLeft, 10);
				i.removeChild(s);
				var l = P(o.visibleItemCount) ? Math.floor(o.visibleItemCount) : Math.floor((this.isNavbarVertical ? this.containerData.height : this.containerData.width) / c);
				l = Math.min(l, this.length);
				var u = l > 0 ? Math.min(Math.max(0, t - Math.floor(l / 2)), Math.max(0, this.length - l)) : 0, d = l > 0 ? Math.min(this.length, u + l) : this.length;
				if (i.innerHTML = "", L(this.images, function(t, n) {
					if (!(l > 0 && (n < u || n >= d))) {
						var o = t.src, s = t.alt || dt(o), c = e.getImageURL(t);
						if (o || c) {
							var f = document.createElement("li"), p = document.createElement("img");
							Xe(p, t, r.inheritedAttributes), r.navbar && (p.src = o || c), p.alt = s, p.setAttribute("data-original-url", c || o), f.setAttribute("data-index", n), f.setAttribute("data-viewer-action", "view"), f.setAttribute("role", "button"), r.keyboard && f.setAttribute("tabindex", 0), f.appendChild(p), i.appendChild(f), a.push(f);
						}
					}
				}), this.items = a, this.viewed) {
					var f = this.getItem(this.index);
					f && (R(f, x), f.setAttribute("aria-selected", !0));
				}
				L(a, function(t) {
					var n = t.firstElementChild, i, a;
					st(n, "filled", !0), r.loading && R(t, re), V(n, le, i = function(i) {
						B(n, ue, a), r.loading && z(t, re), e.loadImage(i);
					}, { once: !0 }), V(n, ue, a = function() {
						B(n, le, i), r.loading && z(t, re);
					}, { once: !0 });
				}), Ze(r, "view") && V(n, Oe, function() {
					R(i, j);
				}, { once: !0 });
			},
			getItem: function(e) {
				var t;
				return L(this.items, function(n) {
					return Number(ot(n, "index")) !== e || (t = n, !1);
				}), t;
			},
			renderList: function() {
				var e = this.index, t = this.getItem(e);
				if (t) {
					var n = t.nextElementSibling, i = parseInt(window.getComputedStyle(n || t)[this.isNavbarVertical ? "marginTop" : "marginLeft"], 10), a = this.isNavbarVertical ? t.offsetHeight : t.offsetWidth, o = a + i;
					et(this.list, Qe(r({}, this.isNavbarVertical ? "height" : "width", o * this.items.length - i), ut(r({}, this.isNavbarVertical ? "translateY" : "translateX", ((this.isNavbarVertical ? this.viewerData.height : this.viewerData.width) - a) / 2 - (this.isNavbarVertical ? t.offsetTop : t.offsetLeft)))));
				}
			},
			resetList: function() {
				var e = this.list;
				e.innerHTML = "", z(e, j), et(e, Qe(r({}, this.isNavbarVertical ? "height" : "width", 0), ut(r({}, this.isNavbarVertical ? "translateY" : "translateX", 0))));
			},
			initImage: function(e) {
				var t = this, n = this.options, r = this.image, i = this.viewerData, a = this.title, o = this.toolbar, s = this.navbar, c = {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}, l = this.imageData || {}, u = a.offsetHeight, d;
				u && (c.bottom = i.height - a.offsetTop), L([o, s], function(e) {
					var t = e.offsetWidth, n = e.offsetHeight;
					(t || n) && [
						"top",
						"right",
						"bottom",
						"left"
					].some(function(r) {
						if (nt(e, `${h}-${e === o ? "toolbar" : "navbar"}-${r}`)) {
							var a = e.offsetLeft + t;
							return r === "top" ? a = e.offsetTop + n : r === "right" ? a = i.width - e.offsetLeft : r === "bottom" && (a = i.height - e.offsetTop), c[r] = Math.max(c[r], a), !0;
						}
						return !1;
					});
				});
				var f = Math.max(i.width - c.left - c.right, c.left, c.right), p = Math.max(i.height - c.top - c.bottom, c.top, c.bottom);
				this.imageInitializing = { abort: function() {
					d.onload = null;
				} }, d = pt(r, n, function(r, i) {
					var a = r / i, o = Math.max(0, Math.min(1, n.initialCoverage)), s = f, u = p;
					t.imageInitializing = !1, p * a > f ? u = f / a : s = p * a, o = P(o) ? o : .9, s = Math.min(s * o, r), u = Math.min(u * o, i);
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
					}, g = Qe({}, h);
					n.rotatable && (h.rotate = l.rotate || 0, g.rotate = 0), n.scalable && (h.scaleX = l.scaleX || 1, h.scaleY = l.scaleY || 1, g.scaleX = 1, g.scaleY = 1), t.imageData = h, t.initialImageData = g, e && e();
				});
			},
			renderImage: function(e) {
				var t = this, n = this.image, r = this.imageData;
				if (et(n, Qe({
					width: r.width,
					height: r.height,
					marginLeft: r.x,
					marginTop: r.y
				}, ut(r))), this.magnifierPoint && this.renderMagnifier(), e) {
					var i = !1;
					if (this.viewing ? i = "view" : this.moving ? i = "move" : this.rotating ? i = "rotate" : this.scaling ? i = "scale" : this.zooming && (i = "zoom"), i && Ze(this.options, i) && nt(n, j)) {
						var a = function() {
							t.imageRendering = !1, e();
						};
						this.imageRendering = { abort: function() {
							B(n, ye, a);
						} }, V(n, ye, a, { once: !0 });
					} else e();
				}
			},
			resetImage: function() {
				var e = this.image;
				e && (this.viewing && this.viewing.abort(), e.parentNode.removeChild(e), this.image = null, this.title.innerHTML = "");
			}
		}, bt = {
			bind: function() {
				var e = this.options, t = this.viewer, n = this.canvas, r = this.ownerDocument;
				V(t, oe, this.onClick = this.click.bind(this)), V(t, M, this.onDragStart = this.dragstart.bind(this)), V(t, me, this.onMagnifyEnter = this.magnify.bind(this)), V(t, ge, this.onMagnify = this.magnify.bind(this)), V(t, he, this.onMagnifierLeave = this.hideMagnifier.bind(this)), V(n, pe, this.onPointerDown = this.pointerdown.bind(this)), V(r, ge, this.onPointerMove = this.pointermove.bind(this)), V(r, _e, this.onPointerUp = this.pointerup.bind(this)), V(r, N, this.onKeyDown = this.keydown.bind(this)), V(window, ve, this.onResize = this.resize.bind(this)), (e.zoomable && e.zoomOnWheel || e.slideOnWheel) && V(t, be, this.onWheel = this.wheel.bind(this), {
					passive: !1,
					capture: !0
				}), (e.zoomable && e.zoomOnGesture || e.rotatable && e.rotateOnGesture) && V(t, xe, this.onGesture = this.gesture.bind(this), { passive: !1 }), e.toggleOnDblclick && V(n, se, this.onDblclick = this.dblclick.bind(this));
			},
			unbind: function() {
				var e = this.options, t = this.viewer, n = this.canvas, r = this.ownerDocument;
				B(t, oe, this.onClick), B(t, M, this.onDragStart), B(t, me, this.onMagnifyEnter), B(t, ge, this.onMagnify), B(t, he, this.onMagnifierLeave), B(n, pe, this.onPointerDown), B(r, ge, this.onPointerMove), B(r, _e, this.onPointerUp), B(r, N, this.onKeyDown), B(window, ve, this.onResize), (e.zoomable && e.zoomOnWheel || e.slideOnWheel) && B(t, be, this.onWheel, {
					passive: !1,
					capture: !0
				}), (e.zoomable && e.zoomOnGesture || e.rotatable && e.rotateOnGesture) && B(t, xe, this.onGesture, { passive: !1 }), e.toggleOnDblclick && B(n, se, this.onDblclick);
			}
		}, xt = {
			click: function(e) {
				var t = this.options, n = this.imageData, r = e.target, i = ot(r, Be);
				switch (!i && r.localName === "img" && r.parentElement.localName === "li" && (r = r.parentElement, i = ot(r, Be)), p && e.isTrusted && r === this.canvas && clearTimeout(this.clickCanvasTimeout), this.actionEvent = e, i) {
					case "mix":
						this.played ? this.stop() : t.inline ? this.fulled ? this.exit() : this.full() : this.hide();
						break;
					case "hide":
						this.pointerMoved || this.hide();
						break;
					case "view":
						this.view(ot(r, "index"));
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
				z(r, ne), n.loading && z(this.canvas, re), r.style.cssText = `height:0;margin-left:${a.width / 2}px;margin-top:${a.height / 2}px;max-width:none!important;position:relative;width:0;`, this.initImage(function() {
					rt(r, ie, n.movable), rt(r, j, Ze(n, "view")), e.renderImage(function() {
						e.viewed = !0, e.viewing = !1, setTimeout(function() {
							rt(r, j, n.transition);
						}, 300), I(n.viewed) && V(t, Oe, n.viewed, { once: !0 }), H(t, Oe, {
							originalImage: e.images[i],
							index: i,
							image: r,
							originalEvent: e.viewOriginalEvent || null
						}, { cancelable: !1 }), e.viewOriginalEvent = null;
					});
				});
			},
			loadImage: function(e) {
				var t = e.target, n = t.parentNode, r = n.offsetWidth || 30, i = n.offsetHeight || 50, a = !!ot(t, "filled");
				pt(t, this.options, function(e, n) {
					var o = e / n, s = r, c = i;
					i * o > r ? a ? s = i * o : c = r / o : a ? c = r / o : s = i * o, et(t, Qe({
						width: s,
						height: c
					}, ut({
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
				var e = this.options, t = this.imageData, n = this.magnifier, r = this.magnifierImage, i = this.viewer, a = Ye(e.magnifier) ? e.magnifier : {}, o = this.magnifierPoint;
				if (!e.magnifier || !this.fulled || !this.viewed || !n || !r || !o) this.hideMagnifier();
				else {
					var s = Math.max(1, Number(a.size) || 100), c = Math.max(1, Number(a.zoomRatio) || 2), l = Number(a.opacity), u = i.getBoundingClientRect(), d = o.clientX - u.left, f = o.clientY - u.top, p = this.image.currentSrc || this.image.src, m = this.image.getBoundingClientRect();
					if (o.clientX < m.left || o.clientX > m.right || o.clientY < m.top || o.clientY > m.bottom) this.hideMagnifier();
					else {
						var h = P(t.scaleX) ? t.scaleX : 1, g = P(t.scaleY) ? t.scaleY : 1, _ = (t.rotate || 0) * Math.PI / 180, v = Math.cos(_), y = Math.sin(_), b = v * h, x = y * h, S = -y * g, C = v * g, w = h * g;
						if (w === 0) this.hideMagnifier();
						else {
							var ee = t.x + t.width / 2, T = t.y + t.height / 2, E = (C * (d - ee) - S * (f - T)) / w, D = (-x * (d - ee) + b * (f - T)) / w, O = E + t.width / 2, te = D + t.height / 2, k = t.width * c, ne = t.height * c, re = b * (O * c - k / 2) + S * (te * c - ne / 2), ie = x * (O * c - k / 2) + C * (te * c - ne / 2);
							this.magnifierSourcePoint = {
								x: O,
								y: te
							}, n.style.width = `${s}px`, n.style.height = `${s}px`, n.style.opacity = `${Math.max(0, Math.min(1, P(l) ? l : 1))}`, r.src = p, r.style.width = `${k}px`, r.style.height = `${ne}px`, r.style.left = `${s / 2 - k / 2 - re}px`, r.style.top = `${s / 2 - ne / 2 - ie}px`, r.style.transform = `rotate(${t.rotate || 0}deg) scaleX(${h}) scaleY(${g})`, n.removeAttribute("aria-hidden"), R(n, "viewer-show");
						}
					}
				}
			},
			hideMagnifier: function() {
				this.magnifier && (z(this.magnifier, "viewer-show"), this.magnifier.setAttribute("aria-hidden", !0), this.magnifierPoint = null);
			},
			pointerdown: function(e) {
				var t = this.options, n = this.pointers, r = this.imageData, i = e.buttons, a = e.button, o = Object.keys(n).length === 0;
				if (this.pointerMoved = !1, !(!this.viewed || this.showing || this.viewing || this.hiding || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && (P(i) && i !== 1 || P(a) && a !== 0 || e.ctrlKey))) {
					e.preventDefault(), e.changedTouches ? L(e.changedTouches, function(e) {
						n[e.identifier] = _t(e);
					}) : n[e.pointerId || 0] = _t(e);
					var s = t.movable ? g : !1;
					(t.zoomable && t.zoomOnTouch || t.rotatable && t.rotateOnTouch) && Object.keys(n).length > 1 ? s = y : t.slideOnTouch && (e.pointerType === "touch" || e.type === "touchstart") && this.isSwitchable() && (s = v), s && z(this.image, j), o && (this.rotateThreshold = r.rotate === 0), this.switching = s === v && {
						x: r.x,
						y: r.y
					}, this.action = s;
				}
			},
			pointermove: function(e) {
				var t = this.pointers, n = this.action;
				this.viewed && n && (e.preventDefault(), e.changedTouches ? L(e.changedTouches, function(e) {
					Qe(t[e.identifier] || {}, _t(e, !0));
				}) : Qe(t[e.pointerId || 0] || {}, _t(e, !0)), this.change(e), z(this.image, j));
			},
			pointerup: function(e) {
				var t = this, n = this.options, r = this.action, i = this.pointers, a = this.viewerData, o;
				if (e.changedTouches ? L(e.changedTouches, function(e) {
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
					var c = r === y ? Ze(n, b) || Ze(n, _) : Ze(n, r);
					if (rt(this.image, j, c), r === v && this.switching) {
						var l = this.imageData, u = this.switching, d = l.x - u.x;
						this.switching = !1, this.actionEvent = e, Math.abs(d) > a.width / 2 ? d > 0 ? this.prev(n.loop) : this.next(n.loop) : (l.x !== u.x || l.y !== u.y) && this.moveTo(u.x, u.y);
					}
					this.action = !1, p && r !== b && r !== y && o && Date.now() - o.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), n.toggleOnDblclick && this.viewed && e.target === this.image ? this.pointerMoved ? this.imageClicked = !1 : this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout(function() {
						H(t.image, se, { originalEvent: e });
					}, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
						t.imageClicked = !1;
					}, 500)) : (this.imageClicked = !1, n.backdrop && n.backdrop !== "static" && e.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
						H(t.canvas, oe, { originalEvent: e });
					}, 50))));
				}
			},
			resize: function() {
				var e = this;
				if (this.isShown && !this.hiding && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), F((Ye(this.options.navbar) ? this.options.navbar : {}).visibleItemCount) && this.initList(this.index), this.renderList(), this.viewed && this.initImage(function() {
					e.renderImage();
				}), this.played)) {
					if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
						this.stop();
						return;
					}
					L(this.player.getElementsByTagName("img"), function(t) {
						V(t, le, e.loadImage.bind(e), { once: !0 }), H(t, le);
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
					if (e.deltaY ? i = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? i = -e.wheelDelta / 120 : e.detail && (i = e.detail > 0 ? 1 : -1), !(r && r.contains(e.target)) && n.zoomable && Ge(n.zoomOnWheel, e)) {
						var a = Number(n.zoomRatio) || .1;
						this.actionEvent = e, this.zoom(-i * a, !0);
					} else Ge(n.slideOnWheel, e) && (this.actionEvent = e, i > 0 ? this.next(n.loop) : i < 0 && this.prev(n.loop));
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
						this.gestureScale = n, t.zoomable && t.zoomOnGesture && r !== 1 && (this.actionEvent = e, this.zoom(r >= 1 ? r - 1 : 1 - 1 / r)), t.rotatable && t.rotateOnGesture && P(i) && (this.gestureRotation = i, a !== 0 && (this.actionEvent = e, this.rotate(a)));
						break;
					case "gestureend":
						if (t.rotatable && t.rotateOnGesture) {
							var o = Math.round(this.imageData.rotate / 90) * 90;
							o !== this.imageData.rotate && (this.actionEvent = e, this.rotateTo(o));
						}
						this.gesturing = !1, this.gestureScale = 1, this.gestureRotation = 0;
				}
			}
		}, St = {
			show: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], t = this.element, n = this.options;
				if (n.inline || this.showing || this.isShown || this.showing) return this;
				if (!this.ready) return this.build(), this.ready && this.show(e), this;
				var r = this.actionEvent || this.showOriginalEvent || this.viewOriginalEvent || null;
				if (this.actionEvent = null, this.showOriginalEvent = r, I(n.show) && V(t, Ce, n.show, { once: !0 }), H(t, Ce, { originalEvent: r }) === !1 || !this.ready) return this;
				this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
				var i = this.viewer;
				if (z(i, E), i.setAttribute("role", "dialog"), i.setAttribute("aria-labelledby", this.title.id), i.setAttribute("aria-modal", !0), i.removeAttribute("aria-hidden"), Ze(n, "show") && !e) {
					var a = this.shown.bind(this);
					this.transitioning = { abort: function() {
						B(i, ye, a), z(i, k);
					} }, R(i, j), i.initialOffsetWidth = i.offsetWidth, V(i, ye, a, { once: !0 }), R(i, k);
				} else R(i, k), this.shown();
				return this;
			},
			hide: function() {
				var e = this, t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n = this.element, r = this.options;
				if (r.inline || this.hiding || !(this.isShown || this.showing)) return this;
				var i = this.actionEvent || this.hideOriginalEvent || null;
				if (this.actionEvent = null, this.hideOriginalEvent = i, I(r.hide) && V(n, Te, r.hide, { once: !0 }), H(n, Te, { originalEvent: i }) === !1 || this.destroyed) return this;
				this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
				var a = this.viewer, o = this.image, s = function() {
					z(a, k), e.hidden();
				};
				if (Ze(r, "hide") && !t) {
					var c = function(t) {
						t && t.target === a && (B(a, ye, c), e.hidden());
					}, l = function() {
						nt(a, j) ? (V(a, ye, c), z(a, k)) : s();
					};
					this.transitioning = { abort: function() {
						e.viewed && nt(o, j) ? B(o, ye, l) : nt(a, j) && B(a, ye, c);
					} }, this.viewed && nt(o, j) ? (V(o, ye, l, { once: !0 }), this.zoomable = !0, this.zoomTo(0, !1)) : l();
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
				var l = c.querySelector("img"), u = ot(l, "originalUrl"), d = l.getAttribute("alt"), f = document.createElement("img");
				if (Xe(f, l, a.inheritedAttributes), f.src = u, f.alt = d, I(a.view) && V(i, De, a.view, { once: !0 }), H(i, De, {
					originalImage: this.images[t],
					index: t,
					image: f,
					originalEvent: r
				}) === !1 || !this.isShown || this.hiding || this.played) return this;
				this.hideMagnifier();
				var p = this.getItem(n);
				p && (z(p, x), p.removeAttribute("aria-selected")), R(c, x), c.setAttribute("aria-selected", !0), a.focus && c.focus(), this.image = f, this.viewed = !1, this.index = t, this.imageData = {}, R(f, ne), a.loading && R(s, re), s.innerHTML = "", s.appendChild(f), this.renderList(), o.innerHTML = "";
				var m = function() {
					var r = e.imageData, i = Array.isArray(a.title) ? a.title[1] : a.title;
					if (o.innerHTML = tt(I(i) ? i.call(e, f, r) : `${d} (${r.naturalWidth} × ${r.naturalHeight})`), a.preload) {
						var s = t < n ? -1 : 1, c = t + s;
						if ((c < 0 || c >= e.length) && (c = a.loop ? s > 0 ? 0 : e.length - 1 : -1), c !== t) {
							var l = e.images[c], u = document.createElement("img");
							Xe(u, l, a.inheritedAttributes), u.src = e.getImageURL(l) || l.src;
						}
					}
				};
				V(i, Oe, m, { once: !0 });
				var h = function() {
					var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n, r, o = function() {
						B(f, le, n), B(f, ue, r), e.timeout &&= (clearTimeout(e.timeout), !1);
					};
					e.viewing = { abort: function() {
						B(i, Oe, m), f.complete ? e.imageRendering ? e.imageRendering.abort() : e.imageInitializing && e.imageInitializing.abort() : (f.src = "", o());
					} }, f.complete ? e.load() : (V(f, le, n = function() {
						o(), e.load();
					}, { once: !0 }), V(f, ue, r = function() {
						if (o(), !t) {
							var n = l.src;
							if (n && n !== f.src) {
								f.src = n, h(!0);
								return;
							}
						}
						z(f, ne), a.loading && z(e.canvas, re);
					}, { once: !0 }), e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(function() {
						z(f, ne), e.timeout = !1;
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
				return this.moveTo(F(e) ? e : n.x + Number(e), F(t) ? t : n.y + Number(t)), this;
			},
			moveTo: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = this.element, i = this.options, a = this.imageData;
				if (e = Number(e), n = Number(n), this.viewed && !this.played && i.movable) {
					var o = a.x, s = a.y, c = !1;
					if (P(e) ? c = !0 : e = o, P(n) ? c = !0 : n = s, c) {
						var l = this.actionEvent || null;
						if (this.actionEvent = null, I(i.move) && V(r, ke, i.move, { once: !0 }), H(r, ke, {
							x: e,
							y: n,
							oldX: o,
							oldY: s,
							originalEvent: l
						}) === !1) return this;
						a.x = e, a.y = n, a.left = e, a.top = n, rt(this.image, j, Ze(i, "move")), this.moving = !0, this.renderImage(function() {
							t.moving = !1, I(i.moved) && V(r, Ae, i.moved, { once: !0 }), H(r, Ae, {
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
				if (e = Number(e), P(e) && this.viewed && !this.played && r.rotatable) {
					var a = i.rotate, o = this.actionEvent || null;
					if (this.actionEvent = null, I(r.rotate) && V(n, je, r.rotate, { once: !0 }), H(n, je, {
						degree: e,
						oldDegree: a,
						originalEvent: o
					}) === !1) return this;
					i.rotate = e, rt(this.image, j, Ze(r, "rotate")), this.rotating = !0, this.renderImage(function() {
						t.rotating = !1, I(r.rotated) && V(n, Me, r.rotated, { once: !0 }), H(n, Me, {
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
					if (P(e) ? c = !0 : e = o, P(n) ? c = !0 : n = s, c) {
						var l = this.actionEvent || null;
						if (this.actionEvent = null, I(i.scale) && V(r, Ne, i.scale, { once: !0 }), H(r, Ne, {
							scaleX: e,
							scaleY: n,
							oldScaleX: o,
							oldScaleY: s,
							originalEvent: l
						}) === !1) return this;
						a.scaleX = e, a.scaleY = n, rt(this.image, j, Ze(i, "scale")), this.scaling = !0, this.renderImage(function() {
							t.scaling = !1, I(i.scaled) && V(r, Pe, i.scaled, { once: !0 }), H(r, Pe, {
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
				if (this.zoomable = !1, e = Math.max(0, e), P(e) && this.viewed && !this.played && (c || a.zoomable)) {
					if (!c) {
						var h = Math.max(.01, I(a.minZoomRatio) ? a.minZoomRatio.call(this, this.image, s) : a.minZoomRatio), g = Math.min(100, I(a.maxZoomRatio) ? a.maxZoomRatio.call(this, this.image, s) : a.maxZoomRatio);
						e = Math.min(Math.max(e, h), g);
					}
					var _ = this.actionEvent || null;
					if (this.actionEvent = null, _ && _.type !== oe) switch (_.type) {
						case "wheel":
							a.zoomRatio >= .055 && e > .95 && e < 1.05 && (e = 1);
							break;
						case "pointermove":
						case "touchmove":
						case "mousemove": e > .99 && e < 1.01 && (e = 1);
					}
					var v = p * e, y = m * e, b = v - d, x = y - f, S = s.ratio;
					if (I(a.zoom) && V(i, Fe, a.zoom, { once: !0 }), H(i, Fe, {
						ratio: e,
						oldRatio: S,
						originalEvent: _
					}) === !1) return this;
					if (this.zooming = !0, _ && _.type !== oe) {
						var C = lt(this.viewer), w = o && Object.keys(o).length > 0 ? vt(o) : {
							pageX: _.pageX,
							pageY: _.pageY
						};
						s.x -= b * ((w.pageX - C.left - l) / d), s.y -= x * ((w.pageY - C.top - u) / f);
					} else Ye(r) && P(r.x) && P(r.y) ? (s.x -= b * ((r.x - l) / d), s.y -= x * ((r.y - u) / f)) : (s.x -= b / 2, s.y -= x / 2);
					s.left = s.x, s.top = s.y, s.width = v, s.height = y, s.oldRatio = S, s.ratio = e, rt(this.image, j, Ze(a, "zoom")), this.renderImage(function() {
						t.zooming = !1, I(a.zoomed) && V(i, Ie, a.zoomed, { once: !0 }), H(i, Ie, {
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
				if (this.actionEvent = null, I(r.play) && V(n, Le, r.play, { once: !0 }), H(n, Le, { originalEvent: i }) === !1) return this;
				var a = this.player, o = this.loadImage.bind(this), s = [], c = 0, l = 0;
				if (this.played = !0, this.onLoadWhenPlay = o, t && this.requestFullscreen(t), R(a, ae), a.removeAttribute("aria-hidden"), L(this.images, function(t, n) {
					var i = document.createElement("img");
					i.src = e.getImageURL(t) || t.src, i.alt = t.alt || "", i.referrerPolicy = t.referrerPolicy, c += 1, R(i, C), rt(i, j, Ze(r, "play")), n === e.index && (R(i, k), l = n), s.push(i), V(i, le, o, { once: !0 }), a.appendChild(i);
				}), P(r.interval) && r.interval > 0) {
					var u = function() {
						clearTimeout(e.playing.timeout);
						var t = e.actionEvent || null;
						e.actionEvent = null;
						var i = l - 1;
						i = i >= 0 ? i : c - 1, I(r.playing) && V(n, Re, r.playing, { once: !0 }), H(n, Re, {
							originalImage: e.images[i],
							index: i,
							image: s[i],
							originalEvent: t
						}) === !1 || (z(s[l], k), l = i, R(s[l], k)), e.playing.timeout = r.autoplay ? setTimeout(u, r.interval) : null;
					}, d = function() {
						clearTimeout(e.playing.timeout);
						var t = e.actionEvent || null;
						e.actionEvent = null;
						var i = l + 1;
						i = i < c ? i : 0, I(r.playing) && V(n, Re, r.playing, { once: !0 }), H(n, Re, {
							originalImage: e.images[i],
							index: i,
							image: s[i],
							originalEvent: t
						}) === !1 || (z(s[l], k), l = i, R(s[l], k)), e.playing.timeout = r.autoplay ? setTimeout(d, r.interval) : null;
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
				if (this.actionEvent = null, I(n.stop) && V(t, ze, n.stop, { once: !0 }), H(t, ze, { originalEvent: r }) === !1) return this;
				var i = this.player;
				return clearTimeout(this.playing.timeout), this.playing = !1, this.played = !1, L(i.getElementsByTagName("img"), function(t) {
					B(t, le, e.onLoadWhenPlay);
				}), z(i, ae), i.setAttribute("aria-hidden", !0), i.innerHTML = "", this.exitFullscreen(), this;
			},
			full: function() {
				var e = this, t = this.options, n = this.viewer, r = this.image, i = this.list;
				return !this.isShown || this.played || this.fulled || !t.inline || (this.fulled = !0, this.open(), R(this.button, T), z(i, j), this.viewed && z(r, j), R(n, w), n.setAttribute("role", "dialog"), n.setAttribute("aria-labelledby", this.title.id), n.setAttribute("aria-modal", !0), n.removeAttribute("style"), et(n, { zIndex: t.zIndex }), t.focus && this.enforceFocus(), this.initContainer(), this.viewerData = Qe({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
					e.renderImage();
				})), this;
			},
			exit: function() {
				var e = this, t = this.options, n = this.viewer, r = this.image, i = this.list;
				return !this.isShown || this.played || !this.fulled || !t.inline || (this.fulled = !1, this.close(), z(this.button, T), z(i, j), this.viewed && z(r, j), t.focus && this.clearEnforceFocus(), n.removeAttribute("role"), n.removeAttribute("aria-labelledby"), n.removeAttribute("aria-modal"), z(n, w), et(n, { zIndex: t.zIndexInline }), this.viewerData = Qe({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
					e.renderImage();
				})), this;
			},
			tooltip: function() {
				var e = this, t = this.options, n = this.tooltipBox, r = this.imageData;
				return !this.viewed || this.played || !t.tooltip || (n.textContent = `${Math.round(r.ratio * 100)}%`, this.tooltipping ? clearTimeout(this.tooltipping) : Ze(t, "tooltip") ? (this.fading && H(n, ye), R(n, ae), R(n, C), R(n, j), n.removeAttribute("aria-hidden"), n.initialOffsetWidth = n.offsetWidth, R(n, k)) : (R(n, ae), n.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
					Ze(t, "tooltip") ? (V(n, ye, function() {
						z(n, ae), z(n, C), z(n, j), n.setAttribute("aria-hidden", !0), e.fading = !1;
					}, { once: !0 }), z(n, k), e.fading = !0) : (z(n, ae), n.setAttribute("aria-hidden", !0)), e.tooltipping = !1;
				}, 1e3)), this;
			},
			toggle: function() {
				return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0) : this.zoomTo(1, !0), this;
			},
			reset: function() {
				return this.viewed && !this.played && (this.imageData = Qe({}, this.initialImageData), this.renderImage()), this;
			},
			update: function(e) {
				var t = this, n = this.element, r = this.options, i = this.isImg;
				if (Ye(e) && Qe(r, e), i && !n.parentNode) return this.destroy();
				var a = [];
				if (L(i ? [n] : n.querySelectorAll("img"), function(e) {
					I(r.filter) ? r.filter.call(t, e) && a.push(e) : t.getImageURL(e) && a.push(e);
				}), !a.length) return this;
				if (this.images = a, this.length = a.length, this.ready) {
					var o = [];
					if (L(this.items, function(e) {
						var t = e.querySelector("img"), n = Number(ot(e, "index")), r = a[n];
						r && t ? (r.src !== t.src || r.alt !== t.alt) && o.push(n) : o.push(n);
					}), et(this.list, { width: "auto" }), this.initList(), this.isShown) {
						if (this.length) {
							if (this.viewed) {
								var s = o.indexOf(this.index);
								if (s >= 0) this.viewed = !1, this.view(Math.max(Math.min(this.index - s, this.length - 1), 0));
								else {
									var c = this.getItem(this.index);
									R(c, x), c.setAttribute("aria-selected", !0);
								}
							}
						} else this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = "";
					}
				} else this.build();
				return this;
			},
			destroy: function() {
				var e = this.element, t = this.options;
				return e[h] && (this.destroyed = !0, this.ready ? (this.played && this.stop(), t.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : t.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), t.inline || (B(e, oe, this.onElementClick), B(e, N, this.onElementKeyDown)), e[h] = void 0), this;
			}
		}, Ct = {
			getImageURL: function(e) {
				var t = this.options.url;
				return t = Ue(t) ? e.getAttribute(t) : I(t) ? t.call(this, e) : "", t;
			},
			enforceFocus: function() {
				var e = this;
				this.clearEnforceFocus(), V(document, ce, this.onFocusin = function(t) {
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
				this.onFocusin &&= (B(document, ce, this.onFocusin), null);
			},
			open: function() {
				var e = this.body;
				R(e, A), this.scrollbarWidth > 0 && (e.style.paddingRight = `${this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0)}px`);
			},
			close: function() {
				var e = this.body;
				z(e, A), this.scrollbarWidth > 0 && (e.style.paddingRight = this.initialBodyPaddingRight);
			},
			shown: function() {
				var e = this.element, t = this.options, n = this.viewer;
				this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, t.focus && (n.focus(), this.enforceFocus()), I(t.shown) && V(e, we, t.shown, { once: !0 }), H(e, we, { originalEvent: this.showOriginalEvent || null }) !== !1 && (this.showOriginalEvent = null, this.ready && this.isShown && !this.hiding && this.view(this.index));
			},
			hidden: function() {
				var e = this.element, t = this.options, n = this.viewer, r = n.ownerDocument.activeElement;
				r && n.contains(r) && I(r.blur) && r.blur(), t.focus && this.clearEnforceFocus(), this.close(), this.unbind(), R(n, E), n.removeAttribute("role"), n.removeAttribute("aria-labelledby"), n.removeAttribute("aria-modal"), n.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.hiding = !1, this.destroyed || (I(t.hidden) && V(e, Ee, t.hidden, { once: !0 }), H(e, Ee, { originalEvent: this.hideOriginalEvent || null }, { cancelable: !1 }), this.hideOriginalEvent = null);
			},
			requestFullscreen: function(e) {
				var t = this.ownerDocument;
				if (this.fulled && !(t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement)) {
					var n = t.documentElement;
					n.requestFullscreen ? Ye(e) ? n.requestFullscreen(e) : n.requestFullscreen() : n.webkitRequestFullscreen ? n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.msRequestFullscreen && n.msRequestFullscreen();
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
								var o = ht(n);
								o !== 0 && (this.actionEvent = e, this.zoom(o));
							}
							break;
						case _:
							if (t.rotatable && t.rotateOnTouch) {
								var s = gt(n);
								s !== 0 && (this.actionEvent = e, this.rotate(s));
							}
							break;
						case y:
							if (t.zoomable && t.zoomOnTouch) {
								var c = ht(n);
								c !== 0 && (this.actionEvent = e, this.zoom(c));
							}
							if (t.rotatable && t.rotateOnTouch) {
								var l = gt(n);
								l !== 0 && (this.actionEvent = e, this.rotate(l));
							}
							break;
						case v:
							var u = Math.abs(i);
							u > 1 && u > Math.abs(a) && (this.pointerMoved = !0, this.actionEvent = e, this.move(i, 0));
					}
					L(n, function(e) {
						e.startX = e.endX, e.startY = e.endY;
					});
				}
			},
			isSwitchable: function() {
				var e = this.imageData, t = this.viewerData;
				return this.length > 1 && e.x >= 0 && e.y >= 0 && e.width <= t.width && e.height <= t.height;
			}
		}, wt = f.Viewer, Tt = function(e) {
			return function() {
				return e += 1, e;
			};
		}(-1), Et = /*#__PURE__*/ function() {
			function t(n) {
				var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				if (e(this, t), !n || n.nodeType !== 1 && n.nodeType !== 11) throw Error("The first argument is required and must be an element.");
				this.element = n, this.ownerDocument = n.ownerDocument || n.host.ownerDocument, this.options = Qe({}, l, Ye(r) && r), this.action = !1, this.actionEvent = null, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zoomable = !1, this.zooming = !1, this.pointerMoved = !1, this.id = Tt(), this.init();
			}
			return n(t, [{
				key: "init",
				value: function() {
					var e = this, t = this.element, n = this.options;
					if (!t[h]) {
						t[h] = this, n.focus && !n.keyboard && (n.focus = !1);
						var r = t.localName === "img", i = [];
						if (L(r ? [t] : t.querySelectorAll("img"), function(t) {
							I(n.filter) ? n.filter.call(e, t) && i.push(t) : e.getImageURL(t) && i.push(t);
						}), this.isImg = r, this.length = i.length, this.images = i, this.initBody(), F(this.ownerDocument.createElement(h).style.transition) && (n.transition = !1), n.inline) {
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
								L(i, function(e) {
									e.complete || (B(e, le, o), B(e, ue, o));
								});
							} }, L(i, function(e) {
								if (e.complete) o();
								else {
									var t, n;
									V(e, le, t = function() {
										B(e, ue, n), o();
									}, { once: !0 }), V(e, ue, n = function() {
										B(e, le, t), o();
									}, { once: !0 });
								}
							});
						} else V(t, oe, this.onElementClick = function(t) {
							var r = t.target;
							r.localName === "img" && (!I(n.filter) || n.filter.call(e, r)) && (e.actionEvent = t, e.view(e.images.indexOf(r)));
						}), V(t, N, this.onElementKeyDown = function(t) {
							var r = t.target, i = t.key;
							r.localName === "img" && (i === "Enter" || i === " ") && (t.preventDefault(), (!I(n.filter) || n.filter.call(e, r)) && (e.actionEvent = t, e.view(e.images.indexOf(r))));
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
						this.parent = r, this.viewer = a, this.title = o, this.toolbar = s, this.navbar = c, this.navigation = l, this.button = d, this.canvas = f, this.magnifier = a.querySelector(`.${h}-magnifier`), this.magnifierImage = a.querySelector(`.${h}-magnifier-image`), this.tooltipBox = a.querySelector(`.${h}-tooltip`), this.player = a.querySelector(`.${h}-player`), this.list = a.querySelector(`.${h}-list`), a.id = `${h}${this.id}`, o.id = `${h}Title${this.id}`, R(o, n.title ? mt(Array.isArray(n.title) ? n.title[0] : n.title) : E), n.title && o.removeAttribute("aria-hidden");
						var p = Ye(n.navbar) ? n.navbar : {}, m = n.navbar, g = F(p.size) ? n.navbar : p.size, _ = [
							"top",
							"right",
							"bottom",
							"left"
						].indexOf(p.position) === -1 ? "bottom" : p.position;
						Ye(n.navbar) && (m = F(p.show) ? !0 : p.show), R(c, m ? mt(m) : E), m && c.removeAttribute("aria-hidden"), [
							"small",
							"medium",
							"large"
						].indexOf(g) !== -1 && R(c, `${h}-${g}`);
						var v = _ === "left" || _ === "right";
						if (this.isNavbarVertical = v, R(c, `${h}-navbar-${_}`), m) {
							var y = v ? l : o, b = v ? "navigation" : "title";
							R(y, `${h}-${b}-navbar-${_}`), v && R(o, `${h}-title-navbar-${_}`), ["small", "large"].indexOf(g) !== -1 && (R(y, `${h}-${b}-navbar-${v ? `${_}-` : ""}${g}`), v && R(o, `${h}-title-navbar-${_}-${g}`));
						}
						if (Ye(n.navigation) ? L(l.querySelectorAll("[role=\"button\"]"), function(e) {
							var t = ot(e, Be), r = n.navigation[t], i = Ye(r), a = i && !F(r.show) ? r.show : r, o = i && !F(r.size) ? r.size : r;
							rt(e, E, !a), P(a) && R(e, mt(a)), ["small", "large"].indexOf(o) !== -1 && R(e, `${h}-${o}`);
						}) : R(l, n.navigation ? mt(n.navigation) : E), n.navigation && l.removeAttribute("aria-hidden"), rt(d, E, !n.button), n.button && d.removeAttribute("aria-hidden"), n.keyboard && (d.setAttribute("tabindex", 0), L(l.querySelectorAll("[role=\"button\"]"), function(e) {
							e.setAttribute("tabindex", 0);
						})), n.backdrop && (R(a, `${h}-backdrop`), !n.inline && n.backdrop !== "static" && st(f, Be, "hide")), Ue(n.className) && n.className && n.className.split(Ve).forEach(function(e) {
							R(a, e);
						}), n.toolbar) {
							var x = document.createElement("ul"), T = Ye(n.toolbar), D = T && [
								"top",
								"right",
								"bottom",
								"left"
							].indexOf(n.toolbar.position) !== -1 ? n.toolbar.position : "bottom", O = He.slice(0, 3), te = He.slice(7, 9), k = He.slice(9);
							T || R(s, mt(n.toolbar)), s.removeAttribute("aria-hidden"), R(s, `${h}-toolbar-${D}`), R(o, `${h}-title-toolbar-${D}`), m && D === _ && (R(s, `${h}-toolbar-navbar-${_}`), ["small", "large"].indexOf(g) !== -1 && R(s, `${h}-toolbar-navbar-${g}`)), L(T ? n.toolbar : He, function(t, r) {
								if (r !== "position") {
									var i = T && Ye(t), a = T ? at(r) : t, o = i && !F(t.show) ? t.show : t;
									if (!(!o || !n.zoomable && O.indexOf(a) !== -1 || !n.rotatable && te.indexOf(a) !== -1 || !n.scalable && k.indexOf(a) !== -1)) {
										var s = i && !F(t.size) ? t.size : t, c = i && !F(t.click) ? t.click : t, l = document.createElement("li");
										n.keyboard && l.setAttribute("tabindex", 0), l.setAttribute("role", "button"), R(l, `${h}-${a}`), I(c) || st(l, Be, a), P(o) && R(l, mt(o)), ["small", "large"].indexOf(s) === -1 ? a === "play" && R(l, `${h}-large`) : R(l, `${h}-${s}`), I(c) && V(l, oe, c.bind(e)), x.appendChild(l);
									}
								}
							}), s.appendChild(x), (D === "left" || D === "right") && R(l, `${h}-navigation-toolbar-${D}`);
						} else R(s, E);
						if (!n.rotatable) {
							var re = s.querySelectorAll("li[class*=\"rotate\"]");
							R(re, ne), L(re, function(e) {
								s.appendChild(e);
							});
						}
						if (n.inline) R(d, ee), et(a, { zIndex: n.zIndexInline }), window.getComputedStyle(r).position === "static" && et(r, { position: "relative" }), r.insertBefore(a, t.nextSibling);
						else {
							R(d, S), R(a, w), R(a, C), R(a, E), et(a, { zIndex: n.zIndex });
							var ie = n.container;
							Ue(ie) && (ie = this.ownerDocument.querySelector(ie)), ie ||= this.body, ie.appendChild(a);
						}
						n.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, I(n.ready) && V(t, Se, n.ready, { once: !0 }), H(t, Se) === !1 ? this.ready = !1 : this.ready && n.inline && this.view(this.index);
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
						Qe(l, Ye(e) && e);
					}
				},
				{
					key: "noConflict",
					value: function() {
						return window.Viewer = wt, t;
					}
				}
			]);
		}();
		return Qe(Et.prototype, yt, bt, xt, St, Ct), Et;
	}));
})))(), 1), Eh = [
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
], Dh = {
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
function Oh(e) {
	let t = { ...e.options };
	for (let n of Object.keys(Dh)) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}
function kh(e, t) {
	let n = Eh.map((n) => {
		let r = (r) => {
			r.target === e && t(n, r);
		};
		return e.addEventListener(n, r), () => e.removeEventListener(n, r);
	});
	return () => n.forEach((e) => e());
}
var Ah = [
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
function jh(e) {
	return {
		...Object.fromEntries(Ah.map((t) => [t, (...n) => {
			let r = e();
			return (r?.[t])?.apply(r, n);
		}])),
		showTooltip: () => e()?.tooltip()
	};
}
//#endregion
//#region packages/core/src/index.ts
function Mh(e) {
	let t = (e.tagName === "IMG" ? [e] : Array.from(e.querySelectorAll("img"))).filter((e) => !e.closest(".viewer-container"));
	return {
		sources: t,
		attributes: JSON.stringify(t.map((e) => Array.from(e.attributes).map((e) => [e.name, e.value]).sort(([e], [t]) => e.localeCompare(t))))
	};
}
function Nh(e) {
	if (e.nodeType !== 1) return !1;
	let t = e;
	return t.closest(".viewer-container") ? !1 : t.tagName === "IMG" || Array.from(t.querySelectorAll("img")).some((e) => !e.closest(".viewer-container"));
}
function Ph(e) {
	return e.type === "attributes" ? e.target.tagName === "IMG" && !e.target.closest(".viewer-container") : [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].some(Nh);
}
function Fh(e, t = {}) {
	let n = { ...t }, r, i, a = Mh(e), o, s = 0, c = !1, l = n.onEvent ? kh(e, (e, t) => n.onEvent?.(e, t)) : void 0;
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
					r = new Th.default(e, { ...n.options });
					let t = r, i = t.build;
					t.build = function() {
						if (!this.destroyed) return i.call(this);
					};
				}
				e.$viewer = r, a = Mh(e);
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
			let t = Mh(e);
			(t.attributes !== a.attributes || t.sources.length !== a.sources.length || t.sources.some((e, t) => e !== a.sources[t])) && d();
		}, Math.max(0, p() - (Date.now() - s)));
	}
	function g() {
		i?.disconnect(), !(c || n.observe === !1 || typeof MutationObserver > "u") && (i ??= new MutationObserver((e) => {
			e.some(Ph) && m();
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
function Ih(e) {
	return Array.isArray(e) ? e.map(Ih) : e && Object.prototype.toString.call(e) === "[object Object]" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ih(t)])) : e;
}
function Lh(e, t) {
	if (e === t) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
	let n = (e) => Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
	if (!n(e) || !n(t)) return !1;
	let r = Object.keys(e);
	return r.length === Object.keys(t).length && r.every((n) => Object.prototype.hasOwnProperty.call(t, n) && Lh(e[n], t[n]));
}
function Rh() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		mount(t, n) {
			e.get(t)?.controller.dispose();
			let { observe: r, rebuild: i, ...a } = n.value ?? {}, o = i ?? !!n.modifiers.rebuild;
			e.set(t, {
				options: Ih(a),
				observe: r,
				rebuild: o,
				controller: Fh(t, {
					options: a,
					rebuild: o,
					observe: r
				})
			});
		},
		update(t, n) {
			let r = e.get(t);
			if (!r) return;
			let { observe: i, rebuild: a, ...o } = n.value ?? {}, s = a ?? !!n.modifiers.rebuild, c = !Lh(r.options, o);
			c || s !== r.rebuild ? r.controller.configure({
				options: o,
				rebuild: s,
				observe: i
			}, c || s) : i !== r.observe && r.controller.configure({ observe: i }), r.options = Ih(o), r.observe = i, r.rebuild = s;
		},
		unmount(t) {
			e.get(t)?.controller.dispose(), e.delete(t);
		}
	};
}
//#endregion
//#region packages/core/src/toolbar.ts
var zh = 0;
function Bh() {
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
				key: ++zh,
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
function Vh(e) {
	let t = e;
	return {
		image: t?.viewed ? t.image : void 0,
		index: t?.index ?? 0
	};
}
//#endregion
//#region packages/vue3/src/index.ts
var Hh = /* @__PURE__ */ gi({
	props: { content: {
		type: Function,
		required: !0
	} },
	render() {
		return bc("span", { style: { display: "contents" } }, this.content());
	}
}), Uh = /* @__PURE__ */ gi({
	name: "Viewer",
	props: {
		...Dh,
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
	emits: [...Eh],
	setup(e, { emit: t, expose: n, slots: r }) {
		let i = /* @__PURE__ */ vn(), a = /* @__PURE__ */ yn(), o, s = !1, c = Bh(), l = /* @__PURE__ */ yn([]), u = /* @__PURE__ */ yn(Vh(void 0)), d = () => {
			l.value = c.sync(a.value, (e) => !!r[e]);
			let e = Vh(a.value);
			(e.image !== u.value.image || e.index !== u.value.index) && (u.value = e);
		}, f = () => {
			a.value = void 0, c.clear(), l.value = [], u.value = Vh(void 0);
		}, p = () => Oh(e), m = () => {
			s || !i.value || o || (o = Fh(i.value, {
				options: p(),
				rebuild: e.rebuild,
				observe: e.observe,
				onEvent: (e, n) => {
					d(), t(e, n);
				},
				onDestroy: f,
				onInit: (e) => {
					a.value = e, d();
				}
			}));
		}, h = () => {
			o?.dispose(), o = void 0, a.value = void 0;
		}, g = () => o ? o.refresh(!1) : m(), _ = () => o ? o.configure({
			options: p(),
			rebuild: e.rebuild
		}) : m();
		Lr(p, _, {
			deep: !0,
			flush: "post"
		}), Lr(() => e.observe, (e) => o?.configure({ observe: e }), { flush: "post" }), Lr(() => e.rebuild, () => {
			o?.configure({ rebuild: e.rebuild }, e.rebuild);
		}, { flush: "post" }), la(m), da(d), fa(() => {
			s = !0, h();
		});
		let v = {
			...jh(() => a.value),
			update: g,
			destroy: h,
			viewer: a,
			createViewer: m,
			updateViewer: g,
			rebuildViewer: _,
			destroyViewer: h
		};
		n?.(v);
		let y = () => ({
			...v,
			...u.value
		});
		return {
			...v,
			root: i,
			toolbarMounts: l,
			toolbarScope: y
		};
	},
	render() {
		return bc("div", { ref: "root" }, [this.$slots.default?.({ options: this.options }), ...this.toolbarMounts.map((e) => bc(Qr, {
			to: e.target,
			key: e.key
		}, [bc(Hh, { content: () => this.$slots[e.slot]?.(this.toolbarScope()) })]))]);
	}
}), Wh = Rh();
Wh.mount, Wh.update, Wh.unmount;
//#endregion
//#region docs/.vitepress/theme/configurator/mount-vue3.mjs
function Gh(e, t, n) {
	let r = Iu({
		...t,
		components: { Viewer: Uh }
	}, { report: n }), i = r.mount(e);
	return {
		send: (e) => i.receive(e),
		dispose: () => r.unmount()
	};
}
//#endregion
export { Gh as mount };
