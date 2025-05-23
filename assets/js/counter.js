!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.counterUp = t())
    : (e.counterUp = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        d: (t, n) => {
          for (var o in n)
            e.o(n, o) &&
              !e.o(t, o) &&
              Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    e.r(t), e.d(t, { default: () => n, divideNumbers: () => r });
    const n = (e, t = {}) => {
        const { action: n = "start", duration: i = 1e3, delay: u = 16 } = t;
        if ("stop" === n) return void o(e);
        if ((o(e), !/[0-9]/.test(e.innerHTML))) return;
        const l = r(e.innerHTML, {
          duration: i || e.getAttribute("data-duration"),
          delay: u || e.getAttribute("data-delay"),
        });
        (e._countUpOrigInnerHTML = e.innerHTML),
          (e.innerHTML = l[0] || "&nbsp;"),
          (e.style.visibility = "visible");
        const c = function () {
          (e.innerHTML = l.shift() || "&nbsp;"),
            l.length
              ? (clearTimeout(e.countUpTimeout),
                (e.countUpTimeout = setTimeout(c, u)))
              : (e._countUpOrigInnerHTML = void 0);
        };
        e.countUpTimeout = setTimeout(c, u);
      },
      o = (e) => {
        clearTimeout(e.countUpTimeout),
          e._countUpOrigInnerHTML &&
            ((e.innerHTML = e._countUpOrigInnerHTML),
            (e._countUpOrigInnerHTML = void 0)),
          (e.style.visibility = "");
      },
      r = (e, t = {}) => {
        const { duration: n = 1e3, delay: o = 16 } = t,
          r = n / o,
          i = e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),
          u = [];
        for (let e = 0; e < r; e++) u.push("");
        for (let e = 0; e < i.length; e++)
          if (/([0-9.][,.0-9]*[0-9]*)/.test(i[e]) && !/<[^>]+>/.test(i[e])) {
            let t = i[e];
            const n = [...t.matchAll(/[.,]/g)]
              .map((e) => ({ char: e[0], i: t.length - e.index - 1 }))
              .sort((e, t) => e.i - t.i);
            t = t.replace(/[.,]/g, "");
            let o = u.length - 1;
            for (let e = r; e >= 1; e--) {
              let i = parseInt((t / r) * e, 10);
              (i = n.reduce(
                (e, { char: t, i: n }) =>
                  e.length <= n ? e : e.slice(0, -n) + t + e.slice(-n),
                i.toString()
              )),
                (u[o--] += i);
            }
          } else for (let t = 0; t < r; t++) u[t] += i[e];
        return (u[u.length] = e.toString()), u;
      };
    return t;
  })();
});



