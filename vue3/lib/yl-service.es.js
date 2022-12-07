import { defineComponent as o, openBlock as l, createElementBlock as a, normalizeClass as s, renderSlot as u } from "vue";
const c = {
  name: "YlButton"
}, i = /* @__PURE__ */ o({
  ...c,
  props: {
    type: { default: "" },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (n, d) => (l(), a("button", {
      type: "button",
      class: s(["yl-button", {
        "yl-button--primary": t.type === "primary",
        "yl-button--success": t.type === "success",
        "yl-button--info": t.type === "info",
        "yl-button--warning": t.type === "warning",
        "yl-button--danger": t.type === "danger",
        "is-plain": t.plain,
        "is-round": t.round
      }])
    }, [
      u(n.$slots, "default")
    ], 2));
  }
}), r = (t) => (t.install = function(n) {
  n.component(t.name, t);
}, t);
const y = r(i), e = [y], f = (t) => {
  e.forEach((n) => {
    t.component(n.name, n);
  });
}, m = {
  install: f,
  ...e
};
export {
  m as default
};
