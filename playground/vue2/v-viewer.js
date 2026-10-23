import e from "vue";
import t from "viewerjs";
//#region packages/core/src/toolbar.ts
var n = 0;
function r() {
	let e, t = "", r = [], i = [];
	function a() {
		for (let e of i.splice(0)) e();
		e = void 0, t = "", r = [];
	}
	function o(o, s) {
		let c = o?.toolbar, l = ["toolbar", "toolbar-append"].map((e) => +s(e)).join("");
		if (c === e && t === l || (a(), e = c, t = l, !e)) return r;
		let u = e.querySelector("ul");
		if (!u) return r;
		function d(e, t) {
			let a = e === "toolbar-append" && t.tagName === "UL", o = document.createElement(a ? "li" : "span");
			o.className = `v-viewer-${e}-slot`, o.style.cssText = "display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;gap:4px;color:#fff;font-size:14px;line-height:1.4", a && (o.style.cssText += ";width:auto;height:auto;overflow:visible;background:none;border-radius:0;float:left;margin:0 0 0 4px;padding:0"), t.appendChild(o);
			let s = (e) => e.stopPropagation(), c = (e) => {
				let t = e.target;
				(e.key === "Enter" || e.key === " " || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) && e.stopPropagation();
			};
			o.addEventListener("click", s), o.addEventListener("keydown", c);
			for (let e of [
				"pointerdown",
				"mousedown",
				"touchstart",
				"dblclick"
			]) o.addEventListener(e, s);
			i.push(() => {
				o.removeEventListener("click", s), o.removeEventListener("keydown", c);
				for (let e of [
					"pointerdown",
					"mousedown",
					"touchstart",
					"dblclick"
				]) o.removeEventListener(e, s);
				o.remove();
			}), r.push({
				key: ++n,
				slot: e,
				target: o
			});
		}
		if (s("toolbar")) {
			let t = u.style.display;
			u.style.display = "none", i.push(() => {
				u.style.display = t;
			}), d("toolbar", e);
		}
		if (s("toolbar-append") && d("toolbar-append", s("toolbar") ? e : u), r.length && typeof ResizeObserver < "u") {
			let t = -1, n = -1, r = new ResizeObserver(() => {
				!e || e.offsetWidth === t && e.offsetHeight === n || (t = e.offsetWidth, n = e.offsetHeight, o.resize?.());
			});
			r.observe(e), i.push(() => r.disconnect());
		}
		return r;
	}
	return {
		sync: o,
		clear: a
	};
}
function i(e) {
	let t = e;
	return {
		image: t?.viewed ? t.image : void 0,
		index: t?.index ?? 0
	};
}
//#endregion
//#region packages/core/src/component.ts
var a = [
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
], o = {
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
function s(e) {
	let t = { ...e.options };
	for (let n of Object.keys(o)) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}
function c(e, t) {
	let n = a.map((n) => {
		let r = (r) => {
			r.target === e && t(n, r);
		};
		return e.addEventListener(n, r), () => e.removeEventListener(n, r);
	});
	return () => n.forEach((e) => e());
}
var l = [
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
function u(e) {
	return {
		...Object.fromEntries(l.map((t) => [t, (...n) => {
			let r = e();
			return (r?.[t])?.apply(r, n);
		}])),
		showTooltip: () => e()?.tooltip()
	};
}
//#endregion
//#region packages/core/src/index.ts
function d(e) {
	let t = (e.tagName === "IMG" ? [e] : Array.from(e.querySelectorAll("img"))).filter((e) => !e.closest(".viewer-container"));
	return {
		sources: t,
		attributes: JSON.stringify(t.map((e) => Array.from(e.attributes).map((e) => [e.name, e.value]).sort(([e], [t]) => e.localeCompare(t))))
	};
}
function f(e) {
	if (e.nodeType !== 1) return !1;
	let t = e;
	return t.closest(".viewer-container") ? !1 : t.tagName === "IMG" || Array.from(t.querySelectorAll("img")).some((e) => !e.closest(".viewer-container"));
}
function p(e) {
	return e.type === "attributes" ? e.target.tagName === "IMG" && !e.target.closest(".viewer-container") : [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].some(f);
}
function m(e, n = {}) {
	let r = { ...n }, i, a, o = d(e), s, l = 0, u = !1, f = r.onEvent ? c(e, (e, t) => r.onEvent?.(e, t)) : void 0;
	function m() {
		r.onDestroy?.();
		let t = i;
		i = void 0, e.$viewer === t && delete e.$viewer, t?.destroy();
	}
	function h(n = r.rebuild ?? !1) {
		if (!u) {
			g(), a?.disconnect();
			try {
				if (n && m(), i) i.update();
				else {
					i = new t(e, { ...r.options });
					let n = i, a = n.build;
					n.build = function() {
						if (!this.destroyed) return a.call(this);
					};
				}
				e.$viewer = i, o = d(e);
			} finally {
				b();
			}
			return r.onInit?.(i), i;
		}
	}
	function g() {
		s !== void 0 && clearTimeout(s), s = void 0;
	}
	function _() {
		return typeof r.observe == "number" && Number.isFinite(r.observe) && r.observe >= 0 ? Math.min(r.observe, 2147483647) : 50;
	}
	function v() {
		u || r.observe === !1 || s !== void 0 || (l = Date.now(), y());
	}
	function y() {
		s = setTimeout(() => {
			if (s = void 0, u || r.observe === !1) return;
			let t = d(e);
			(t.attributes !== o.attributes || t.sources.length !== o.sources.length || t.sources.some((e, t) => e !== o.sources[t])) && h();
		}, Math.max(0, _() - (Date.now() - l)));
	}
	function b() {
		a?.disconnect(), !(u || r.observe === !1 || typeof MutationObserver > "u") && (a ??= new MutationObserver((e) => {
			e.some(p) && v();
		}), a.observe(e, {
			attributes: !0,
			childList: !0,
			subtree: !0
		}));
	}
	function x(e, t = !0) {
		if (!u) {
			if (r = {
				...r,
				...e
			}, !("options" in e) && !("rebuild" in e) && "observe" in e) {
				let e = s !== void 0;
				return g(), b(), r.observe !== !1 && (e ? y() : v()), i;
			}
			return h(t);
		}
	}
	function S() {
		u = !0, g(), a?.disconnect();
		try {
			m();
		} finally {
			f?.();
		}
	}
	try {
		h();
	} catch (e) {
		throw S(), e;
	}
	return {
		get viewer() {
			return i;
		},
		refresh: h,
		configure: x,
		dispose: S
	};
}
function h({ images: e, options: n = {} }) {
	if (typeof document > "u") throw Error("v-viewer: showViewer must be called in a browser");
	let r = document.createElement("div");
	r.hidden = !0, r.className = "v-viewer-token";
	for (let t of e) {
		let e = document.createElement("img"), n = typeof t == "string" ? { src: t } : t;
		for (let [t, r] of Object.entries(n)) /^on/i.test(t) || e.setAttribute(t, r);
		r.appendChild(e);
	}
	document.body.appendChild(r);
	let i;
	try {
		i = new t(r, {
			...g(n),
			inline: !1
		});
	} catch (e) {
		throw r.remove(), e;
	}
	let a = i.destroy.bind(i), o = !1, s = (e) => {
		e.target === r && i.destroy();
	};
	i.destroy = () => {
		if (o) return i;
		o = !0, r.removeEventListener("hidden", s);
		try {
			a();
		} finally {
			r.remove();
		}
		return i;
	}, r.addEventListener("hidden", s);
	try {
		i.show();
	} catch (e) {
		throw i.destroy(), e;
	}
	return i;
}
function g(e) {
	return Array.isArray(e) ? e.map(g) : e && Object.prototype.toString.call(e) === "[object Object]" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, g(t)])) : e;
}
function _(e, t) {
	if (e === t) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
	let n = (e) => Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]";
	if (!n(e) || !n(t)) return !1;
	let r = Object.keys(e);
	return r.length === Object.keys(t).length && r.every((n) => Object.prototype.hasOwnProperty.call(t, n) && _(e[n], t[n]));
}
function v() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		mount(t, n) {
			e.get(t)?.controller.dispose();
			let { observe: r, rebuild: i, ...a } = n.value ?? {}, o = i ?? !!n.modifiers.rebuild;
			e.set(t, {
				options: g(a),
				observe: r,
				rebuild: o,
				controller: m(t, {
					options: a,
					rebuild: o,
					observe: r
				})
			});
		},
		update(t, n) {
			let r = e.get(t);
			if (!r) return;
			let { observe: i, rebuild: a, ...o } = n.value ?? {}, s = a ?? !!n.modifiers.rebuild, c = !_(r.options, o);
			c || s !== r.rebuild ? r.controller.configure({
				options: o,
				rebuild: s,
				observe: i
			}, c || s) : i !== r.observe && r.controller.configure({ observe: i }), r.options = g(o), r.observe = i, r.rebuild = s;
		},
		unmount(t) {
			e.get(t)?.controller.dispose(), e.delete(t);
		}
	};
}
//#endregion
//#region packages/vue2/src/index.ts
var y = h, b = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
function S(e) {
	e.$viewer = void 0;
	let t = x.get(e);
	if (t) {
		for (let e of t.portals.values()) e.$destroy(), e.$el.remove();
		t.portals.clear(), t.bridge.clear();
	}
}
function C(t) {
	let n = x.get(t);
	if (!n) return;
	let r = n.bridge.sync(t.$viewer, (e) => {
		if (e === "toolbar") {
			let e = t;
			return !!(t.$scopedSlots.toolbar?.({
				...u(() => t.$viewer),
				update: () => e.update(),
				destroy: () => e.destroy(),
				...i(t.$viewer)
			}) || t.$slots.toolbar)?.some((e) => !e.isComment && (!!e.tag || !!e.text?.trim()));
		}
		return !!t.$scopedSlots[e] || !!t.$slots[e];
	});
	for (let [e, t] of n.portals) r.indexOf(e) === -1 && (t.$destroy(), t.$el.remove(), n.portals.delete(e));
	for (let a of r) {
		let r = n.portals.get(a);
		if (r) {
			r.$forceUpdate();
			continue;
		}
		let o = u(() => t.$viewer), s = new e({
			parent: t,
			render(e) {
				let n = t, r = {
					...o,
					update: () => n.update(),
					destroy: () => n.destroy(),
					...i(t.$viewer)
				};
				return e("span", { style: { display: "contents" } }, t.$scopedSlots[a.slot]?.(r) || t.$slots[a.slot]);
			}
		}).$mount();
		a.target.appendChild(s.$el), n.portals.set(a, s);
	}
}
var w = Object.fromEntries(l.map((e) => [e, function(...t) {
	let n = this.$viewer;
	return (n?.[e])?.apply(n, t);
}])), T = e.extend({
	name: "Viewer",
	props: {
		...o,
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
		return s(this.$props);
	} },
	mounted() {
		this.createViewer();
	},
	updated() {
		C(this);
	},
	beforeDestroy() {
		this._viewerDisposed = !0, this.destroyViewer(), x.delete(this);
	},
	watch: {
		observe(e) {
			b.get(this)?.configure({ observe: e });
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
		...w,
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
			b.has(this) || this.$isServer || this._viewerDisposed || b.set(this, m(this.$el, {
				options: this.viewerOptions,
				rebuild: this.rebuild,
				observe: this.observe,
				onEvent: (e, t) => {
					C(this), this.$emit(e, t);
				},
				onDestroy: () => S(this),
				onInit: (e) => {
					this.$viewer = e, C(this);
				}
			}));
		},
		destroyViewer() {
			b.get(this)?.dispose(), b.delete(this), this.$viewer = void 0;
		},
		updateViewer() {
			b.has(this) ? b.get(this).refresh(!1) : this.createViewer();
		},
		rebuildViewer() {
			b.has(this) ? b.get(this).configure({
				options: this.viewerOptions,
				rebuild: this.rebuild
			}) : this.createViewer();
		},
		changeViewer() {
			b.get(this)?.configure({ rebuild: this.rebuild }, this.rebuild);
		}
	},
	beforeCreate() {
		x.set(this, {
			bridge: r(),
			portals: /* @__PURE__ */ new Map()
		}), this._viewerDisposed = !1;
	},
	destroyed() {
		this._viewerDisposed = !0;
	},
	render(e) {
		return e("div", this.$scopedSlots.default?.({ options: this.options }) || this.$slots.default);
	}
}), E = v(), D = /* @__PURE__ */ new WeakMap(), O = (e, t, n) => {
	if (D.get(e)?.(), n.context) {
		let r = n.context.$watch(() => t.value, () => E.update(e, t), { deep: !0 });
		D.set(e, r);
	}
}, k = {
	inserted(e, t, n, r) {
		E.mount(e, t), O(e, t, n, r);
	},
	componentUpdated(e, t, n, r) {
		E.update(e, t), O(e, t, n, r);
	},
	unbind(e) {
		D.get(e)?.(), D.delete(e), E.unmount(e);
	}
}, A = {
	install(e, { name: n = "viewer", defaultOptions: r } = {}) {
		r && t.setDefaults(r), e.component(n, T), e.directive(n, k), e.prototype[`$${n}Api`] = y;
	},
	setDefaults: (e) => t.setDefaults(e)
};
//#endregion
export { T as Viewer, t as ViewerJs, A as default, k as vViewer, y as viewerApi };
