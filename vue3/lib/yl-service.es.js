import { defineComponent as r, openBlock as u, createElementBlock as a, normalizeClass as i, renderSlot as f } from "vue";
const d = {
  name: "YlButton"
}, p = /* @__PURE__ */ r({
  ...d,
  props: {
    type: { default: "" },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (n, e) => (u(), a("button", {
      type: "button",
      class: i(["yl-button", {
        "yl-button--primary": t.type === "primary",
        "yl-button--success": t.type === "success",
        "yl-button--info": t.type === "info",
        "yl-button--warning": t.type === "warning",
        "yl-button--danger": t.type === "danger",
        "is-plain": t.plain,
        "is-round": t.round
      }])
    }, [
      f(n.$slots, "default")
    ], 2));
  }
}), l = (t) => (t.install = function(n) {
  n.component(t.name, t);
}, t);
const y = l(p), m = {
  name: "YlInput"
}, b = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, s] of n)
    e[o] = s;
  return e;
}, _ = { class: "yl-input" };
function $(t, n, e, o, s, x) {
  return u(), a("div", _, "\u6211\u662F\u8F93\u5165\u6846\u7EC4\u4EF6");
}
const g = /* @__PURE__ */ b(m, [["render", $]]);
const B = l(g), c = [y, B], h = (t) => {
  c.forEach((n) => {
    t.component(n.name, n);
  });
}, Y = {
  install: h,
  ...c
};
export {
  Y as default
};
