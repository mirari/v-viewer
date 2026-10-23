import * as e from "vue";
import { Teleport as t, defineComponent as n, h as r, onBeforeUnmount as i, onMounted as a, onUpdated as o, ref as s, shallowRef as c, unref as l, watch as u } from "vue";
import d from "viewerjs";
//#region packages/core/src/component.ts
var f = [
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
], p = {
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
function m(e) {
	let t = { ...e.options };
	for (let n of Object.keys(p)) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}
function h(e, t) {
	let n = f.map((n) => {
		let r = (r) => {
			r.target === e && t(n, r);
		};
		return e.addEventListener(n, r), () => e.removeEventListener(n, r);
	});
	return () => n.forEach((e) => e());
}
var g = [
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
function _(e) {
	return {
		...Object.fromEntries(g.map((t) => [t, (...n) => {
			let r = e();
			return (r?.[t])?.apply(r, n);
		}])),
		showTooltip: () => e()?.tooltip()
	};
}
//#endregion
//#region packages/core/src/index.ts
function v(e) {
	let t = (e.tagName === "IMG" ? [e] : Array.from(e.querySelectorAll("img"))).filter((e) => !e.closest(".viewer-container"));
	return {
		sources: t,
		attributes: JSON.stringify(t.map((e) => Array.from(e.attributes).map((e) => [e.name, e.value]).sort(([e], [t]) => e.localeCompare(t))))
	};
}
function y(e) {
	if (e.nodeType !== 1) return !1;
	let t = e;
	return t.closest(".viewer-container") ? !1 : t.tagName === "IMG" || Array.from(t.querySelectorAll("img")).some((e) => !e.closest(".viewer-container"));
}
function b(e) {
	return e.type === "attributes" ? e.target.tagName === "IMG" && !e.target.closest(".viewer-container") : [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].some(y);
}
function x(e, t = {}) {
	let n = { ...t }, r, i, a = v(e), o, s = 0, c = !1, l = n.onEvent ? h(e, (e, t) => n.onEvent?.(e, t)) : void 0;
	function u() {
		n.onDestroy?.();
		let t = r;
		r = void 0, e.$viewer === t && delete e.$viewer, t?.destroy();
	}
	function f(t = n.rebuild ?? !1) {
		if (!c) {
			p(), i?.disconnect();
			try {
				if (t && u(), r) r.update();
				else {
					r = new d(e, { ...n.options });
					let t = r, i = t.build;
					t.build = function() {
						if (!this.destroyed) return i.call(this);
					};
				}
				e.$viewer = r, a = v(e);
			} finally {
				y();
			}
			return n.onInit?.(r), r;
		}
	}
	function p() {
		o !== void 0 && clearTimeout(o), o = void 0;
	}
	function m() {
		return typeof n.observe == "number" && Number.isFinite(n.observe) && n.observe >= 0 ? Math.min(n.observe, 2147483647) : 50;
	}
	function g() {
		c || n.observe === !1 || o !== void 0 || (s = Date.now(), _());
	}
	function _() {
		o = setTimeout(() => {
			if (o = void 0, c || n.observe === !1) return;
			let t = v(e);
			(t.attributes !== a.attributes || t.sources.length !== a.sources.length || t.sources.some((e, t) => e !== a.sources[t])) && f();
		}, Math.max(0, m() - (Date.now() - s)));
	}
	function y() {
		i?.disconnect(), !(c || n.observe === !1 || typeof MutationObserver > "u") && (i ??= new MutationObserver((e) => {
			e.some(b) && g();
		}), i.observe(e, {
			attributes: !0,
			childList: !0,
			subtree: !0
		}));
	}
	function x(e, t = !0) {
		if (!c) {
			if (n = {
				...n,
				...e
			}, !("options" in e) && !("rebuild" in e) && "observe" in e) {
				let e = o !== void 0;
				return p(), y(), n.observe !== !1 && (e ? _() : g()), r;
			}
			return f(t);
		}
	}
	function S() {
		c = !0, p(), i?.disconnect();
		try {
			u();
		} finally {
			l?.();
		}
	}
	try {
		f();
	} catch (e) {
		throw S(), e;
	}
	return {
		get viewer() {
			return r;
		},
		refresh: f,
		configure: x,
		dispose: S
	};
}
function S({ images: e, options: t = {} }) {
	if (typeof document > "u") throw Error("v-viewer: showViewer must be called in a browser");
	let n = document.createElement("div");
	n.hidden = !0, n.className = "v-viewer-token";
	for (let t of e) {
		let e = document.createElement("img"), r = typeof t == "string" ? { src: t } : t;
		for (let [t, n] of Object.entries(r)) /^on/i.test(t) || e.setAttribute(t, n);
		n.appendChild(e);
	}
	document.body.appendChild(n);
	let r;
	try {
		r = new d(n, {
			...C(t),
			inline: !1
		});
	} catch (e) {
		throw n.remove(), e;
	}
	let i = r.destroy.bind(r), a = !1, o = (e) => {
		e.target === n && r.destroy();
	};
	r.destroy = () => {
		if (a) return r;
		a = !0, n.removeEventListener("hidden", o);
		try {
			i();
		} finally {
			n.remove();
		}
		return r;
	}, n.addEventListener("hidden", o);
	try {
		r.show();
	} catch (e) {
		throw r.destroy(), e;
	}
	return r;
}
function C(e) {
	return Array.isArray(e) ? e.map(C) : e && Object.prototype.toString.call(e) === "[object Object]" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, C(t)])) : e;
}
function w(e, t) {
	if (e === t) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
	let n = (e) => Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
	if (!n(e) || !n(t)) return !1;
	let r = Object.keys(e);
	return r.length === Object.keys(t).length && r.every((n) => Object.prototype.hasOwnProperty.call(t, n) && w(e[n], t[n]));
}
function T() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		mount(t, n) {
			e.get(t)?.controller.dispose();
			let { observe: r, rebuild: i, ...a } = n.value ?? {}, o = i ?? !!n.modifiers.rebuild;
			e.set(t, {
				options: C(a),
				observe: r,
				rebuild: o,
				controller: x(t, {
					options: a,
					rebuild: o,
					observe: r
				})
			});
		},
		update(t, n) {
			let r = e.get(t);
			if (!r) return;
			let { observe: i, rebuild: a, ...o } = n.value ?? {}, s = a ?? !!n.modifiers.rebuild, c = !w(r.options, o);
			c || s !== r.rebuild ? r.controller.configure({
				options: o,
				rebuild: s,
				observe: i
			}, c || s) : i !== r.observe && r.controller.configure({ observe: i }), r.options = C(o), r.observe = i, r.rebuild = s;
		},
		unmount(t) {
			e.get(t)?.controller.dispose(), e.delete(t);
		}
	};
}
//#endregion
//#region packages/core/src/toolbar.ts
var E = 0;
function D() {
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
				key: ++E,
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
function O(e) {
	let t = e;
	return {
		image: t?.viewed ? t.image : void 0,
		index: t?.index ?? 0
	};
}
//#endregion
//#region packages/vue3/src/index.ts
var k = n({
	props: { content: {
		type: Function,
		required: !0
	} },
	render() {
		return r("span", { style: { display: "contents" } }, this.content());
	}
}), A = n({
	name: "Viewer",
	props: {
		...p,
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
	emits: [...f],
	setup(e, { emit: t, expose: n, slots: r }) {
		let l = s(), d = c(), f, p = !1, h = D(), g = c([]), v = c(O(void 0)), y = () => {
			g.value = h.sync(d.value, (e) => !!r[e]);
			let e = O(d.value);
			(e.image !== v.value.image || e.index !== v.value.index) && (v.value = e);
		}, b = () => {
			d.value = void 0, h.clear(), g.value = [], v.value = O(void 0);
		}, S = () => m(e), C = () => {
			p || !l.value || f || (f = x(l.value, {
				options: S(),
				rebuild: e.rebuild,
				observe: e.observe,
				onEvent: (e, n) => {
					y(), t(e, n);
				},
				onDestroy: b,
				onInit: (e) => {
					d.value = e, y();
				}
			}));
		}, w = () => {
			f?.dispose(), f = void 0, d.value = void 0;
		}, T = () => f ? f.refresh(!1) : C(), E = () => f ? f.configure({
			options: S(),
			rebuild: e.rebuild
		}) : C();
		u(S, E, {
			deep: !0,
			flush: "post"
		}), u(() => e.observe, (e) => f?.configure({ observe: e }), { flush: "post" }), u(() => e.rebuild, () => {
			f?.configure({ rebuild: e.rebuild }, e.rebuild);
		}, { flush: "post" }), a(C), o(y), i(() => {
			p = !0, w();
		});
		let k = {
			..._(() => d.value),
			update: T,
			destroy: w,
			viewer: d,
			createViewer: C,
			updateViewer: T,
			rebuildViewer: E,
			destroyViewer: w
		};
		n?.(k);
		let A = () => ({
			...k,
			...v.value
		});
		return {
			...k,
			root: l,
			toolbarMounts: g,
			toolbarScope: A
		};
	},
	render() {
		return r("div", { ref: "root" }, [this.$slots.default?.({ options: this.options }), ...this.toolbarMounts.map((e) => r(t, {
			to: e.target,
			key: e.key
		}, [r(k, { content: () => this.$slots[e.slot]?.(this.toolbarScope()) })]))]);
	}
}), j = T(), M = {
	deep: !0,
	mounted: j.mount,
	updated: j.update,
	beforeUnmount: j.unmount,
	getSSRProps: () => ({})
}, N = (e) => typeof e == "function" ? e() : l(e);
function P(t = {}) {
	let n = c(), r = s(!1), a = !1;
	function o() {
		n.value?.destroy(), n.value = void 0, r.value = !1;
	}
	function l(e) {
		if (a || typeof document > "u") return;
		let i = n.value;
		if (i) return e === void 0 ? i.show() : i.view(e), i;
		let o = t.options ? N(t.options) : {}, { shown: s, hidden: c } = o, l;
		try {
			l = S({
				images: t.images ? N(t.images) : [],
				options: {
					...o,
					...e === void 0 ? {} : { initialViewIndex: e },
					shown(e) {
						r.value = !0, s?.call(this, e);
					},
					hidden(e) {
						r.value = !1, n.value = void 0, c?.call(this, e);
					}
				}
			});
		} catch (e) {
			throw r.value = !1, e;
		}
		let u = l.destroy.bind(l);
		return l.destroy = () => {
			try {
				return u();
			} finally {
				n.value === l && (n.value = void 0, r.value = !1);
			}
		}, n.value = l, l;
	}
	function u() {
		n.value?.hide();
	}
	let d = () => {
		a = !0, o();
	};
	return e.getCurrentScope?.() ? e.onScopeDispose(d) : i(d), {
		viewer: n,
		isShown: r,
		show: l,
		hide: u,
		destroy: o
	};
}
//#endregion
export { A as Viewer, d as ViewerJs, P as useViewer, M as vViewer };
