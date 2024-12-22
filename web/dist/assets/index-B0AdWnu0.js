(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ia = { exports: {} },
  xl = {},
  Fa = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = Symbol.for("react.element"),
  gf = Symbol.for("react.portal"),
  yf = Symbol.for("react.fragment"),
  wf = Symbol.for("react.strict_mode"),
  Sf = Symbol.for("react.profiler"),
  kf = Symbol.for("react.provider"),
  xf = Symbol.for("react.context"),
  Ef = Symbol.for("react.forward_ref"),
  Cf = Symbol.for("react.suspense"),
  Nf = Symbol.for("react.memo"),
  Pf = Symbol.for("react.lazy"),
  vu = Symbol.iterator;
function _f(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Oa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Da = Object.assign,
  Ma = {};
function mn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ma),
    (this.updater = n || Oa);
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ua() {}
Ua.prototype = mn.prototype;
function hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ma),
    (this.updater = n || Oa);
}
var mi = (hi.prototype = new Ua());
mi.constructor = hi;
Da(mi, mn.prototype);
mi.isPureReactComponent = !0;
var gu = Array.isArray,
  Aa = Object.prototype.hasOwnProperty,
  vi = { current: null },
  Ha = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ba(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Aa.call(t, r) && !Ha.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: ar,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: vi.current,
  };
}
function Rf(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function Tf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yu = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tf("" + e.key)
    : t.toString(36);
}
function Dr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ar:
          case gf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + $l(i, 0) : r),
      gu(l)
        ? ((n = ""),
          e != null && (n = e.replace(yu, "$&/") + "/"),
          Dr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (gi(l) &&
            (l = Rf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(yu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), gu(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + $l(o, a);
      i += Dr(o, t, n, u, l);
    }
  else if (((u = _f(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + $l(o, a++)), (i += Dr(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Dr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Lf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Mr = { transition: null },
  jf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: vi,
  };
function Va() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: yr,
  forEach: function (e, t, n) {
    yr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = mn;
I.Fragment = yf;
I.Profiler = Sf;
I.PureComponent = hi;
I.StrictMode = wf;
I.Suspense = Cf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf;
I.act = Va;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Da({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = vi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Aa.call(t, u) &&
        !Ha.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: xf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kf, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Ba;
I.createFactory = function (e) {
  var t = Ba.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Ef, render: e };
};
I.isValidElement = gi;
I.lazy = function (e) {
  return { $$typeof: Pf, _payload: { _status: -1, _result: e }, _init: Lf };
};
I.memo = function (e, t) {
  return { $$typeof: Nf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
I.unstable_act = Va;
I.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ce.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
I.useId = function () {
  return ce.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ce.current.useRef(e);
};
I.useState = function (e) {
  return ce.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ce.current.useTransition();
};
I.version = "18.3.1";
Fa.exports = I;
var g = Fa.exports;
const $a = za(g);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf = g,
  If = Symbol.for("react.element"),
  Ff = Symbol.for("react.fragment"),
  Of = Object.prototype.hasOwnProperty,
  Df = zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Of.call(t, r) && !Mf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: If,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Df.current,
  };
}
xl.Fragment = Ff;
xl.jsx = Wa;
xl.jsxs = Wa;
Ia.exports = xl;
var k = Ia.exports,
  yo = {},
  Qa = { exports: {} },
  Ee = {},
  Ka = { exports: {} },
  Ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, j) {
    var z = P.length;
    P.push(j);
    e: for (; 0 < z; ) {
      var Y = (z - 1) >>> 1,
        Z = P[Y];
      if (0 < l(Z, j)) (P[Y] = j), (P[z] = Z), (z = Y);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var j = P[0],
      z = P.pop();
    if (z !== j) {
      P[0] = z;
      e: for (var Y = 0, Z = P.length, vr = Z >>> 1; Y < vr; ) {
        var Ct = 2 * (Y + 1) - 1,
          Vl = P[Ct],
          Nt = Ct + 1,
          gr = P[Nt];
        if (0 > l(Vl, z))
          Nt < Z && 0 > l(gr, Vl)
            ? ((P[Y] = gr), (P[Nt] = z), (Y = Nt))
            : ((P[Y] = Vl), (P[Ct] = z), (Y = Ct));
        else if (Nt < Z && 0 > l(gr, z)) (P[Y] = gr), (P[Nt] = z), (Y = Nt);
        else break e;
      }
    }
    return j;
  }
  function l(P, j) {
    var z = P.sortIndex - j.sortIndex;
    return z !== 0 ? z : P.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    h = null,
    m = 3,
    v = !1,
    w = !1,
    S = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null) r(s);
      else if (j.startTime <= P)
        r(s), (j.sortIndex = j.expirationTime), t(u, j);
      else break;
      j = n(s);
    }
  }
  function y(P) {
    if (((S = !1), p(P), !w))
      if (n(u) !== null) (w = !0), Hl(C);
      else {
        var j = n(s);
        j !== null && Bl(y, j.startTime - P);
      }
  }
  function C(P, j) {
    (w = !1), S && ((S = !1), f(T), (T = -1)), (v = !0);
    var z = m;
    try {
      for (
        p(j), h = n(u);
        h !== null && (!(h.expirationTime > j) || (P && !de()));

      ) {
        var Y = h.callback;
        if (typeof Y == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = Y(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(u) && r(u),
            p(j);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var vr = !0;
      else {
        var Ct = n(s);
        Ct !== null && Bl(y, Ct.startTime - j), (vr = !1);
      }
      return vr;
    } finally {
      (h = null), (m = z), (v = !1);
    }
  }
  var R = !1,
    _ = null,
    T = -1,
    F = 5,
    L = -1;
  function de() {
    return !(e.unstable_now() - L < F);
  }
  function Sn() {
    if (_ !== null) {
      var P = e.unstable_now();
      L = P;
      var j = !0;
      try {
        j = _(!0, P);
      } finally {
        j ? kn() : ((R = !1), (_ = null));
      }
    } else R = !1;
  }
  var kn;
  if (typeof c == "function")
    kn = function () {
      c(Sn);
    };
  else if (typeof MessageChannel < "u") {
    var mu = new MessageChannel(),
      vf = mu.port2;
    (mu.port1.onmessage = Sn),
      (kn = function () {
        vf.postMessage(null);
      });
  } else
    kn = function () {
      E(Sn, 0);
    };
  function Hl(P) {
    (_ = P), R || ((R = !0), kn());
  }
  function Bl(P, j) {
    T = E(function () {
      P(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Hl(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var z = m;
      m = j;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, j) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = m;
      m = P;
      try {
        return j();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, j, z) {
      var Y = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Y + z : Y))
          : (z = Y),
        P)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (P = {
          id: d++,
          callback: j,
          priorityLevel: P,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > Y
          ? ((P.sortIndex = z),
            t(s, P),
            n(u) === null &&
              P === n(s) &&
              (S ? (f(T), (T = -1)) : (S = !0), Bl(y, z - Y)))
          : ((P.sortIndex = Z), t(u, P), w || v || ((w = !0), Hl(C))),
        P
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (P) {
      var j = m;
      return function () {
        var z = m;
        m = j;
        try {
          return P.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(Ya);
Ka.exports = Ya;
var Uf = Ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Af = g,
  xe = Uf;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ga = new Set(),
  Wn = {};
function Ut(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ga.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wo = Object.prototype.hasOwnProperty,
  Hf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  Su = {};
function Bf(e) {
  return wo.call(Su, e)
    ? !0
    : wo.call(wu, e)
    ? !1
    : Hf.test(e)
    ? (Su[e] = !0)
    : ((wu[e] = !0), !1);
}
function Vf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $f(e, t, n, r) {
  if (t === null || typeof t > "u" || Vf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yi = /[\-:]([a-z])/g;
function wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yi, wi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yi, wi);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yi, wi);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Si(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($f(t, n, l, r) && (n = null),
    r || l === null
      ? Bf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  Wt = Symbol.for("react.fragment"),
  ki = Symbol.for("react.strict_mode"),
  So = Symbol.for("react.profiler"),
  qa = Symbol.for("react.provider"),
  Xa = Symbol.for("react.context"),
  xi = Symbol.for("react.forward_ref"),
  ko = Symbol.for("react.suspense"),
  xo = Symbol.for("react.suspense_list"),
  Ei = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  Ja = Symbol.for("react.offscreen"),
  ku = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ku && e[ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Wl;
function jn(e) {
  if (Wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wl = (t && t[1]) || "";
    }
  return (
    `
` +
    Wl +
    e
  );
}
var Ql = !1;
function Kl(e, t) {
  if (!e || Ql) return "";
  Ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ql = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : "";
}
function Wf(e) {
  switch (e.tag) {
    case 5:
      return jn(e.type);
    case 16:
      return jn("Lazy");
    case 13:
      return jn("Suspense");
    case 19:
      return jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kl(e.type, !1)), e;
    case 11:
      return (e = Kl(e.type.render, !1)), e;
    case 1:
      return (e = Kl(e.type, !0)), e;
    default:
      return "";
  }
}
function Eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case $t:
      return "Portal";
    case So:
      return "Profiler";
    case ki:
      return "StrictMode";
    case ko:
      return "Suspense";
    case xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xa:
        return (e.displayName || "Context") + ".Consumer";
      case qa:
        return (e._context.displayName || "Context") + ".Provider";
      case xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ei:
        return (
          (t = e.displayName || null), t !== null ? t : Eo(e.type) || "Memo"
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return Eo(e(t));
        } catch {}
    }
  return null;
}
function Qf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Eo(t);
    case 8:
      return t === ki ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Za(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Kf(e) {
  var t = Za(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = Kf(e));
}
function ba(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Za(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Co(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function es(e, t) {
  (t = t.checked), t != null && Si(e, "checked", t, !1);
}
function No(e, t) {
  es(e, t);
  var n = yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Po(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Po(e, t.type, yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Po(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yt(n) };
}
function ts(e, t) {
  var n = yt(t.value),
    r = yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ns(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ro(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ns(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kr,
  rs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var On = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yf = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function (e) {
  Yf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
  });
});
function ls(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
    ? ("" + t).trim()
    : t + "px";
}
function os(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ls(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Gf = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function To(e, t) {
  if (t) {
    if (Gf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Lo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jo = null;
function Ci(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zo = null,
  nn = null,
  rn = null;
function Pu(e) {
  if ((e = fr(e))) {
    if (typeof zo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = _l(t)), zo(e.stateNode, e.type, t));
  }
}
function is(e) {
  nn ? (rn ? rn.push(e) : (rn = [e])) : (nn = e);
}
function us() {
  if (nn) {
    var e = nn,
      t = rn;
    if (((rn = nn = null), Pu(e), t)) for (e = 0; e < t.length; e++) Pu(t[e]);
  }
}
function as(e, t) {
  return e(t);
}
function ss() {}
var Yl = !1;
function cs(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return as(e, t, n);
  } finally {
    (Yl = !1), (nn !== null || rn !== null) && (ss(), us());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _l(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Io = !1;
if (Xe)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        Io = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    Io = !1;
  }
function qf(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Dn = !1,
  Zr = null,
  br = !1,
  Fo = null,
  Xf = {
    onError: function (e) {
      (Dn = !0), (Zr = e);
    },
  };
function Jf(e, t, n, r, l, o, i, a, u) {
  (Dn = !1), (Zr = null), qf.apply(Xf, arguments);
}
function Zf(e, t, n, r, l, o, i, a, u) {
  if ((Jf.apply(this, arguments), Dn)) {
    if (Dn) {
      var s = Zr;
      (Dn = !1), (Zr = null);
    } else throw Error(x(198));
    br || ((br = !0), (Fo = s));
  }
}
function At(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _u(e) {
  if (At(e) !== e) throw Error(x(188));
}
function bf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = At(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return _u(l), e;
        if (o === r) return _u(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function ds(e) {
  return (e = bf(e)), e !== null ? ps(e) : null;
}
function ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hs = xe.unstable_scheduleCallback,
  Ru = xe.unstable_cancelCallback,
  ed = xe.unstable_shouldYield,
  td = xe.unstable_requestPaint,
  G = xe.unstable_now,
  nd = xe.unstable_getCurrentPriorityLevel,
  Ni = xe.unstable_ImmediatePriority,
  ms = xe.unstable_UserBlockingPriority,
  el = xe.unstable_NormalPriority,
  rd = xe.unstable_LowPriority,
  vs = xe.unstable_IdlePriority,
  El = null,
  Be = null;
function ld(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : ud,
  od = Math.log,
  id = Math.LN2;
function ud(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((od(e) / id) | 0)) | 0;
}
var xr = 64,
  Er = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = In(a)) : ((o &= i), o !== 0 && (r = In(o)));
  } else (i = n & ~l), i !== 0 ? (r = In(i)) : o !== 0 && (r = In(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ad(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = ad(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Oo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gs() {
  var e = xr;
  return (xr <<= 1), !(xr & 4194240) && (xr = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function cd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Pi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function ys(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ws,
  _i,
  Ss,
  ks,
  xs,
  Do = !1,
  Cr = [],
  ct = null,
  ft = null,
  dt = null,
  Yn = new Map(),
  Gn = new Map(),
  it = [],
  fd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ct = null;
      break;
    case "dragenter":
    case "dragleave":
      ft = null;
      break;
    case "mouseover":
    case "mouseout":
      dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = fr(t)), t !== null && _i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function dd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ct = Cn(ct, e, t, n, r, l)), !0;
    case "dragenter":
      return (ft = Cn(ft, e, t, n, r, l)), !0;
    case "mouseover":
      return (dt = Cn(dt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Yn.set(o, Cn(Yn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Gn.set(o, Cn(Gn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Es(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = At(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fs(n)), t !== null)) {
          (e.blockedOn = t),
            xs(e.priority, function () {
              Ss(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jo = r), n.target.dispatchEvent(r), (jo = null);
    } else return (t = fr(n)), t !== null && _i(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lu(e, t, n) {
  Ur(e) && n.delete(t);
}
function pd() {
  (Do = !1),
    ct !== null && Ur(ct) && (ct = null),
    ft !== null && Ur(ft) && (ft = null),
    dt !== null && Ur(dt) && (dt = null),
    Yn.forEach(Lu),
    Gn.forEach(Lu);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Do ||
      ((Do = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, pd)));
}
function qn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Cr.length) {
    Nn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ct !== null && Nn(ct, e),
      ft !== null && Nn(ft, e),
      dt !== null && Nn(dt, e),
      Yn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < it.length;
    n++
  )
    (r = it[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < it.length && ((n = it[0]), n.blockedOn === null); )
    Es(n), n.blockedOn === null && it.shift();
}
var ln = et.ReactCurrentBatchConfig,
  nl = !0;
function hd(e, t, n, r) {
  var l = D,
    o = ln.transition;
  ln.transition = null;
  try {
    (D = 1), Ri(e, t, n, r);
  } finally {
    (D = l), (ln.transition = o);
  }
}
function md(e, t, n, r) {
  var l = D,
    o = ln.transition;
  ln.transition = null;
  try {
    (D = 4), Ri(e, t, n, r);
  } finally {
    (D = l), (ln.transition = o);
  }
}
function Ri(e, t, n, r) {
  if (nl) {
    var l = Mo(e, t, n, r);
    if (l === null) lo(e, t, r, rl, n), Tu(e, r);
    else if (dd(l, e, t, n, r)) r.stopPropagation();
    else if ((Tu(e, r), t & 4 && -1 < fd.indexOf(e))) {
      for (; l !== null; ) {
        var o = fr(l);
        if (
          (o !== null && ws(o),
          (o = Mo(e, t, n, r)),
          o === null && lo(e, t, r, rl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else lo(e, t, r, null, n);
  }
}
var rl = null;
function Mo(e, t, n, r) {
  if (((rl = null), (e = Ci(r)), (e = Rt(e)), e !== null))
    if (((t = At(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rl = e), null;
}
function Cs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nd()) {
        case Ni:
          return 1;
        case ms:
          return 4;
        case el:
        case rd:
          return 16;
        case vs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Ti = null,
  Ar = null;
function Ns() {
  if (Ar) return Ar;
  var e,
    t = Ti,
    n = t.length,
    r,
    l = "value" in at ? at.value : at.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ar = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Hr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function ju() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Nr
        : ju),
      (this.isPropagationStopped = ju),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
var vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Li = Ce(vn),
  cr = Q({}, vn, { view: 0, detail: 0 }),
  vd = Ce(cr),
  ql,
  Xl,
  Pn,
  Cl = Q({}, cr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ji,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((ql = e.screenX - Pn.screenX), (Xl = e.screenY - Pn.screenY))
              : (Xl = ql = 0),
            (Pn = e)),
          ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xl;
    },
  }),
  zu = Ce(Cl),
  gd = Q({}, Cl, { dataTransfer: 0 }),
  yd = Ce(gd),
  wd = Q({}, cr, { relatedTarget: 0 }),
  Jl = Ce(wd),
  Sd = Q({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kd = Ce(Sd),
  xd = Q({}, vn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ed = Ce(xd),
  Cd = Q({}, vn, { data: 0 }),
  Iu = Ce(Cd),
  Nd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Pd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _d = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _d[e]) ? !!t[e] : !1;
}
function ji() {
  return Rd;
}
var Td = Q({}, cr, {
    key: function (e) {
      if (e.key) {
        var t = Nd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Pd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ji,
    charCode: function (e) {
      return e.type === "keypress" ? Hr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ld = Ce(Td),
  jd = Q({}, Cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fu = Ce(jd),
  zd = Q({}, cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ji,
  }),
  Id = Ce(zd),
  Fd = Q({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Od = Ce(Fd),
  Dd = Q({}, Cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Md = Ce(Dd),
  Ud = [9, 13, 27, 32],
  zi = Xe && "CompositionEvent" in window,
  Mn = null;
Xe && "documentMode" in document && (Mn = document.documentMode);
var Ad = Xe && "TextEvent" in window && !Mn,
  Ps = Xe && (!zi || (Mn && 8 < Mn && 11 >= Mn)),
  Ou = " ",
  Du = !1;
function _s(e, t) {
  switch (e) {
    case "keyup":
      return Ud.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function Hd(e, t) {
  switch (e) {
    case "compositionend":
      return Rs(t);
    case "keypress":
      return t.which !== 32 ? null : ((Du = !0), Ou);
    case "textInput":
      return (e = t.data), e === Ou && Du ? null : e;
    default:
      return null;
  }
}
function Bd(e, t) {
  if (Qt)
    return e === "compositionend" || (!zi && _s(e, t))
      ? ((e = Ns()), (Ar = Ti = at = null), (Qt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ps && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vd[e.type] : t === "textarea";
}
function Ts(e, t, n, r) {
  is(r),
    (t = ll(t, "onChange")),
    0 < t.length &&
      ((n = new Li("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  Xn = null;
function $d(e) {
  Hs(e, 0);
}
function Nl(e) {
  var t = Gt(e);
  if (ba(t)) return e;
}
function Wd(e, t) {
  if (e === "change") return t;
}
var Ls = !1;
if (Xe) {
  var Zl;
  if (Xe) {
    var bl = "oninput" in document;
    if (!bl) {
      var Uu = document.createElement("div");
      Uu.setAttribute("oninput", "return;"),
        (bl = typeof Uu.oninput == "function");
    }
    Zl = bl;
  } else Zl = !1;
  Ls = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Au() {
  Un && (Un.detachEvent("onpropertychange", js), (Xn = Un = null));
}
function js(e) {
  if (e.propertyName === "value" && Nl(Xn)) {
    var t = [];
    Ts(t, Xn, e, Ci(e)), cs($d, t);
  }
}
function Qd(e, t, n) {
  e === "focusin"
    ? (Au(), (Un = t), (Xn = n), Un.attachEvent("onpropertychange", js))
    : e === "focusout" && Au();
}
function Kd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Nl(Xn);
}
function Yd(e, t) {
  if (e === "click") return Nl(t);
}
function Gd(e, t) {
  if (e === "input" || e === "change") return Nl(t);
}
function qd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : qd;
function Jn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wo.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bu(e, t) {
  var n = Hu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hu(n);
  }
}
function zs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Is() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Xd(e) {
  var t = Is(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ii(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Bu(n, o));
        var i = Bu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jd = Xe && "documentMode" in document && 11 >= document.documentMode,
  Kt = null,
  Uo = null,
  An = null,
  Ao = !1;
function Vu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    Kt == null ||
    Kt !== Jr(r) ||
    ((r = Kt),
    "selectionStart" in r && Ii(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (An && Jn(An, r)) ||
      ((An = r),
      (r = ll(Uo, "onSelect")),
      0 < r.length &&
        ((t = new Li("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  eo = {},
  Fs = {};
Xe &&
  ((Fs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yt.animationend.animation,
    delete Yt.animationiteration.animation,
    delete Yt.animationstart.animation),
  "TransitionEvent" in window || delete Yt.transitionend.transition);
function Pl(e) {
  if (eo[e]) return eo[e];
  if (!Yt[e]) return e;
  var t = Yt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fs) return (eo[e] = t[n]);
  return e;
}
var Os = Pl("animationend"),
  Ds = Pl("animationiteration"),
  Ms = Pl("animationstart"),
  Us = Pl("transitionend"),
  As = new Map(),
  $u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  As.set(e, t), Ut(t, [e]);
}
for (var to = 0; to < $u.length; to++) {
  var no = $u[to],
    Zd = no.toLowerCase(),
    bd = no[0].toUpperCase() + no.slice(1);
  kt(Zd, "on" + bd);
}
kt(Os, "onAnimationEnd");
kt(Ds, "onAnimationIteration");
kt(Ms, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Us, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ep = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zf(r, t, void 0, e), (e.currentTarget = null);
}
function Hs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          Wu(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Wu(l, a, s), (o = u);
        }
    }
  }
  if (br) throw ((e = Fo), (br = !1), (Fo = null), e);
}
function A(e, t) {
  var n = t[Wo];
  n === void 0 && (n = t[Wo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bs(t, e, 2, !1), n.add(r));
}
function ro(e, t, n) {
  var r = 0;
  t && (r |= 4), Bs(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[_r]) {
    (e[_r] = !0),
      Ga.forEach(function (n) {
        n !== "selectionchange" && (ep.has(n) || ro(n, !1, e), ro(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || ((t[_r] = !0), ro("selectionchange", !1, t));
  }
}
function Bs(e, t, n, r) {
  switch (Cs(t)) {
    case 1:
      var l = hd;
      break;
    case 4:
      l = md;
      break;
    default:
      l = Ri;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Io ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function lo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Rt(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  cs(function () {
    var s = o,
      d = Ci(n),
      h = [];
    e: {
      var m = As.get(e);
      if (m !== void 0) {
        var v = Li,
          w = e;
        switch (e) {
          case "keypress":
            if (Hr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ld;
            break;
          case "focusin":
            (w = "focus"), (v = Jl);
            break;
          case "focusout":
            (w = "blur"), (v = Jl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Jl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Id;
            break;
          case Os:
          case Ds:
          case Ms:
            v = kd;
            break;
          case Us:
            v = Od;
            break;
          case "scroll":
            v = vd;
            break;
          case "wheel":
            v = Md;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ed;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Fu;
        }
        var S = (t & 4) !== 0,
          E = !S && e === "scroll",
          f = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var c = s, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              f !== null && ((y = Kn(c, f)), y != null && S.push(bn(c, y, p)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((m = new v(m, w, null, n, d)), h.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== jo &&
            (w = n.relatedTarget || n.fromElement) &&
            (Rt(w) || w[Je]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = s),
              (w = w ? Rt(w) : null),
              w !== null &&
                ((E = At(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = s)),
          v !== w)
        ) {
          if (
            ((S = zu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Fu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (E = v == null ? m : Gt(v)),
            (p = w == null ? m : Gt(w)),
            (m = new S(y, c + "leave", v, n, d)),
            (m.target = E),
            (m.relatedTarget = p),
            (y = null),
            Rt(d) === s &&
              ((S = new S(f, c + "enter", w, n, d)),
              (S.target = p),
              (S.relatedTarget = E),
              (y = S)),
            (E = y),
            v && w)
          )
            t: {
              for (S = v, f = w, c = 0, p = S; p; p = Vt(p)) c++;
              for (p = 0, y = f; y; y = Vt(y)) p++;
              for (; 0 < c - p; ) (S = Vt(S)), c--;
              for (; 0 < p - c; ) (f = Vt(f)), p--;
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Vt(S)), (f = Vt(f));
              }
              S = null;
            }
          else S = null;
          v !== null && Qu(h, m, v, S, !1),
            w !== null && E !== null && Qu(h, E, w, S, !0);
        }
      }
      e: {
        if (
          ((m = s ? Gt(s) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var C = Wd;
        else if (Mu(m))
          if (Ls) C = Gd;
          else {
            C = Kd;
            var R = Qd;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Yd);
        if (C && (C = C(e, s))) {
          Ts(h, C, n, d);
          break e;
        }
        R && R(e, m, s),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            Po(m, "number", m.value);
      }
      switch (((R = s ? Gt(s) : window), e)) {
        case "focusin":
          (Mu(R) || R.contentEditable === "true") &&
            ((Kt = R), (Uo = s), (An = null));
          break;
        case "focusout":
          An = Uo = Kt = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ao = !1), Vu(h, n, d);
          break;
        case "selectionchange":
          if (Jd) break;
        case "keydown":
        case "keyup":
          Vu(h, n, d);
      }
      var _;
      if (zi)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Qt
          ? _s(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Ps &&
          n.locale !== "ko" &&
          (Qt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Qt && (_ = Ns())
            : ((at = d),
              (Ti = "value" in at ? at.value : at.textContent),
              (Qt = !0))),
        (R = ll(s, T)),
        0 < R.length &&
          ((T = new Iu(T, e, null, n, d)),
          h.push({ event: T, listeners: R }),
          _ ? (T.data = _) : ((_ = Rs(n)), _ !== null && (T.data = _)))),
        (_ = Ad ? Hd(e, n) : Bd(e, n)) &&
          ((s = ll(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new Iu("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: s }),
            (d.data = _)));
    }
    Hs(h, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Kn(e, n)),
      o != null && r.unshift(bn(e, o, l)),
      (o = Kn(e, t)),
      o != null && r.push(bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Kn(n, o)), u != null && i.unshift(bn(n, u, a)))
        : l || ((u = Kn(n, o)), u != null && i.push(bn(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var tp = /\r\n?/g,
  np = /\u0000|\uFFFD/g;
function Ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tp,
      `
`
    )
    .replace(np, "");
}
function Rr(e, t, n) {
  if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(x(425));
}
function ol() {}
var Ho = null,
  Bo = null;
function Vo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $o = typeof setTimeout == "function" ? setTimeout : void 0,
  rp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yu = typeof Promise == "function" ? Promise : void 0,
  lp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yu < "u"
      ? function (e) {
          return Yu.resolve(null).then(e).catch(op);
        }
      : $o;
function op(e) {
  setTimeout(function () {
    throw e;
  });
}
function oo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  qn(t);
}
function pt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + gn,
  er = "__reactProps$" + gn,
  Je = "__reactContainer$" + gn,
  Wo = "__reactEvents$" + gn,
  ip = "__reactListeners$" + gn,
  up = "__reactHandles$" + gn;
function Rt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gu(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fr(e) {
  return (
    (e = e[He] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function _l(e) {
  return e[er] || null;
}
var Qo = [],
  qt = -1;
function xt(e) {
  return { current: e };
}
function H(e) {
  0 > qt || ((e.current = Qo[qt]), (Qo[qt] = null), qt--);
}
function U(e, t) {
  qt++, (Qo[qt] = e.current), (e.current = t);
}
var wt = {},
  ue = xt(wt),
  me = xt(!1),
  It = wt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function il() {
  H(me), H(ue);
}
function qu(e, t, n) {
  if (ue.current !== wt) throw Error(x(168));
  U(ue, t), U(me, n);
}
function Vs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Qf(e) || "Unknown", l));
  return Q({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (It = ue.current),
    U(ue, e),
    U(me, me.current),
    !0
  );
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Vs(e, t, It)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(me),
      H(ue),
      U(ue, e))
    : H(me),
    U(me, n);
}
var Qe = null,
  Rl = !1,
  io = !1;
function $s(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function ap(e) {
  (Rl = !0), $s(e);
}
function Et() {
  if (!io && Qe !== null) {
    io = !0;
    var e = 0,
      t = D;
    try {
      var n = Qe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (Rl = !1);
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), hs(Ni, Et), l);
    } finally {
      (D = t), (io = !1);
    }
  }
  return null;
}
var Xt = [],
  Jt = 0,
  al = null,
  sl = 0,
  Ne = [],
  Pe = 0,
  Ft = null,
  Ke = 1,
  Ye = "";
function Pt(e, t) {
  (Xt[Jt++] = sl), (Xt[Jt++] = al), (al = e), (sl = t);
}
function Ws(e, t, n) {
  (Ne[Pe++] = Ke), (Ne[Pe++] = Ye), (Ne[Pe++] = Ft), (Ft = e);
  var r = Ke;
  e = Ye;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ke = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ye = o + e);
  } else (Ke = (1 << o) | (n << l) | r), (Ye = e);
}
function Fi(e) {
  e.return !== null && (Pt(e, 1), Ws(e, 1, 0));
}
function Oi(e) {
  for (; e === al; )
    (al = Xt[--Jt]), (Xt[Jt] = null), (sl = Xt[--Jt]), (Xt[Jt] = null);
  for (; e === Ft; )
    (Ft = Ne[--Pe]),
      (Ne[Pe] = null),
      (Ye = Ne[--Pe]),
      (Ne[Pe] = null),
      (Ke = Ne[--Pe]),
      (Ne[Pe] = null);
}
var ke = null,
  we = null,
  B = !1,
  Fe = null;
function Qs(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (we = pt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Ke, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (B) {
    var t = we;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (Ko(e)) throw Error(x(418));
        t = pt(n.nextSibling);
        var r = ke;
        t && Ju(e, t)
          ? Qs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e));
      }
    } else {
      if (Ko(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e);
    }
  }
}
function Zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Tr(e) {
  if (e !== ke) return !1;
  if (!B) return Zu(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Ko(e)) throw (Ks(), Error(x(418)));
    for (; t; ) Qs(e, t), (t = pt(t.nextSibling));
  }
  if ((Zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = pt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ks() {
  for (var e = we; e; ) e = pt(e.nextSibling);
}
function cn() {
  (we = ke = null), (B = !1);
}
function Di(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var sp = et.ReactCurrentBatchConfig;
function _n(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function bu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ys(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = gt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = ho(p, f.mode, y)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function u(f, c, p, y) {
    var C = p.type;
    return C === Wt
      ? d(f, c, p.props.children, y, p.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === lt &&
            bu(C) === c.type))
      ? ((y = l(c, p.props)), (y.ref = _n(f, c, p)), (y.return = f), y)
      : ((y = Yr(p.type, p.key, p.props, null, f.mode, y)),
        (y.ref = _n(f, c, p)),
        (y.return = f),
        y);
  }
  function s(f, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = mo(p, f.mode, y)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function d(f, c, p, y, C) {
    return c === null || c.tag !== 7
      ? ((c = zt(p, f.mode, y, C)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ho("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wr:
          return (
            (p = Yr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = _n(f, null, c)),
            (p.return = f),
            p
          );
        case $t:
          return (c = mo(c, f.mode, p)), (c.return = f), c;
        case lt:
          var y = c._init;
          return h(f, y(c._payload), p);
      }
      if (zn(c) || xn(c))
        return (c = zt(c, f.mode, p, null)), (c.return = f), c;
      Lr(f, c);
    }
    return null;
  }
  function m(f, c, p, y) {
    var C = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : a(f, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case wr:
          return p.key === C ? u(f, c, p, y) : null;
        case $t:
          return p.key === C ? s(f, c, p, y) : null;
        case lt:
          return (C = p._init), m(f, c, C(p._payload), y);
      }
      if (zn(p) || xn(p)) return C !== null ? null : d(f, c, p, y, null);
      Lr(f, p);
    }
    return null;
  }
  function v(f, c, p, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(p) || null), a(c, f, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case wr:
          return (f = f.get(y.key === null ? p : y.key) || null), u(c, f, y, C);
        case $t:
          return (f = f.get(y.key === null ? p : y.key) || null), s(c, f, y, C);
        case lt:
          var R = y._init;
          return v(f, c, p, R(y._payload), C);
      }
      if (zn(y) || xn(y)) return (f = f.get(p) || null), d(c, f, y, C, null);
      Lr(c, y);
    }
    return null;
  }
  function w(f, c, p, y) {
    for (
      var C = null, R = null, _ = c, T = (c = 0), F = null;
      _ !== null && T < p.length;
      T++
    ) {
      _.index > T ? ((F = _), (_ = null)) : (F = _.sibling);
      var L = m(f, _, p[T], y);
      if (L === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && L.alternate === null && t(f, _),
        (c = o(L, c, T)),
        R === null ? (C = L) : (R.sibling = L),
        (R = L),
        (_ = F);
    }
    if (T === p.length) return n(f, _), B && Pt(f, T), C;
    if (_ === null) {
      for (; T < p.length; T++)
        (_ = h(f, p[T], y)),
          _ !== null &&
            ((c = o(_, c, T)), R === null ? (C = _) : (R.sibling = _), (R = _));
      return B && Pt(f, T), C;
    }
    for (_ = r(f, _); T < p.length; T++)
      (F = v(_, f, T, p[T], y)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? T : F.key),
          (c = o(F, c, T)),
          R === null ? (C = F) : (R.sibling = F),
          (R = F));
    return (
      e &&
        _.forEach(function (de) {
          return t(f, de);
        }),
      B && Pt(f, T),
      C
    );
  }
  function S(f, c, p, y) {
    var C = xn(p);
    if (typeof C != "function") throw Error(x(150));
    if (((p = C.call(p)), p == null)) throw Error(x(151));
    for (
      var R = (C = null), _ = c, T = (c = 0), F = null, L = p.next();
      _ !== null && !L.done;
      T++, L = p.next()
    ) {
      _.index > T ? ((F = _), (_ = null)) : (F = _.sibling);
      var de = m(f, _, L.value, y);
      if (de === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && de.alternate === null && t(f, _),
        (c = o(de, c, T)),
        R === null ? (C = de) : (R.sibling = de),
        (R = de),
        (_ = F);
    }
    if (L.done) return n(f, _), B && Pt(f, T), C;
    if (_ === null) {
      for (; !L.done; T++, L = p.next())
        (L = h(f, L.value, y)),
          L !== null &&
            ((c = o(L, c, T)), R === null ? (C = L) : (R.sibling = L), (R = L));
      return B && Pt(f, T), C;
    }
    for (_ = r(f, _); !L.done; T++, L = p.next())
      (L = v(_, f, T, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? T : L.key),
          (c = o(L, c, T)),
          R === null ? (C = L) : (R.sibling = L),
          (R = L));
    return (
      e &&
        _.forEach(function (Sn) {
          return t(f, Sn);
        }),
      B && Pt(f, T),
      C
    );
  }
  function E(f, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Wt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case wr:
          e: {
            for (var C = p.key, R = c; R !== null; ) {
              if (R.key === C) {
                if (((C = p.type), C === Wt)) {
                  if (R.tag === 7) {
                    n(f, R.sibling),
                      (c = l(R, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  R.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === lt &&
                    bu(C) === R.type)
                ) {
                  n(f, R.sibling),
                    (c = l(R, p.props)),
                    (c.ref = _n(f, R, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, R);
                break;
              } else t(f, R);
              R = R.sibling;
            }
            p.type === Wt
              ? ((c = zt(p.props.children, f.mode, y, p.key)),
                (c.return = f),
                (f = c))
              : ((y = Yr(p.type, p.key, p.props, null, f.mode, y)),
                (y.ref = _n(f, c, p)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case $t:
          e: {
            for (R = p.key; c !== null; ) {
              if (c.key === R)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = mo(p, f.mode, y)), (c.return = f), (f = c);
          }
          return i(f);
        case lt:
          return (R = p._init), E(f, c, R(p._payload), y);
      }
      if (zn(p)) return w(f, c, p, y);
      if (xn(p)) return S(f, c, p, y);
      Lr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = ho(p, f.mode, y)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return E;
}
var fn = Ys(!0),
  Gs = Ys(!1),
  cl = xt(null),
  fl = null,
  Zt = null,
  Mi = null;
function Ui() {
  Mi = Zt = fl = null;
}
function Ai(e) {
  var t = cl.current;
  H(cl), (e._currentValue = t);
}
function Go(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function on(e, t) {
  (fl = e),
    (Mi = Zt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (Mi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zt === null)) {
      if (fl === null) throw Error(x(308));
      (Zt = e), (fl.dependencies = { lanes: 0, firstContext: e });
    } else Zt = Zt.next = e;
  return t;
}
var Tt = null;
function Hi(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function qs(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Hi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ot = !1;
function Bi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xs(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Hi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pi(e, n);
  }
}
function ea(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function dl(e, t, n, r) {
  var l = e.updateQueue;
  ot = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (d = s = u = null), (a = o);
    do {
      var m = a.lane,
        v = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((m = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(v, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (m = typeof w == "function" ? w.call(v, h, m) : w),
                m == null)
              )
                break e;
              h = Q({}, h, m);
              break e;
            case 2:
              ot = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = v), (u = h)) : (d = d.next = v),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Dt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function ta(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var dr = {},
  Ve = xt(dr),
  tr = xt(dr),
  nr = xt(dr);
function Lt(e) {
  if (e === dr) throw Error(x(174));
  return e;
}
function Vi(e, t) {
  switch ((U(nr, t), U(tr, e), U(Ve, dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ro(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ro(t, e));
  }
  H(Ve), U(Ve, t);
}
function dn() {
  H(Ve), H(tr), H(nr);
}
function Js(e) {
  Lt(nr.current);
  var t = Lt(Ve.current),
    n = Ro(t, e.type);
  t !== n && (U(tr, e), U(Ve, n));
}
function $i(e) {
  tr.current === e && (H(Ve), H(tr));
}
var V = xt(0);
function pl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var uo = [];
function Wi() {
  for (var e = 0; e < uo.length; e++)
    uo[e]._workInProgressVersionPrimary = null;
  uo.length = 0;
}
var Vr = et.ReactCurrentDispatcher,
  ao = et.ReactCurrentBatchConfig,
  Ot = 0,
  $ = null,
  X = null,
  b = null,
  hl = !1,
  Hn = !1,
  rr = 0,
  cp = 0;
function le() {
  throw Error(x(321));
}
function Qi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Ki(e, t, n, r, l, o) {
  if (
    ((Ot = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? hp : mp),
    (e = n(r, l)),
    Hn)
  ) {
    o = 0;
    do {
      if (((Hn = !1), (rr = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (b = X = null),
        (t.updateQueue = null),
        (Vr.current = vp),
        (e = n(r, l));
    } while (Hn);
  }
  if (
    ((Vr.current = ml),
    (t = X !== null && X.next !== null),
    (Ot = 0),
    (b = X = $ = null),
    (hl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Yi() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function Ae() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? ($.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
  if (X === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? $.memoizedState : b.next;
  if (t !== null) (b = t), (X = e);
  else {
    if (e === null) throw Error(x(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      b === null ? ($.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function so(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var d = s.lane;
      if ((Ot & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = h), (i = r)) : (u = u.next = h),
          ($.lanes |= d),
          (Dt |= d);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      Me(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Dt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function co(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Zs() {}
function bs(e, t) {
  var n = $,
    r = Le(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    Gi(nc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, tc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(x(349));
    Ot & 30 || ec(n, t, l);
  }
  return l;
}
function ec(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rc(t) && lc(e);
}
function nc(e, t, n) {
  return n(function () {
    rc(t) && lc(e);
  });
}
function rc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function lc(e) {
  var t = Ze(e, 1);
  t !== null && De(t, e, 1, -1);
}
function na(e) {
  var t = Ae();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pp.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oc() {
  return Le().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ae();
  ($.flags |= e),
    (l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function Tl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Qi(r, i.deps))) {
      l.memoizedState = or(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = or(1 | t, n, o, r));
}
function ra(e, t) {
  return $r(8390656, 8, e, t);
}
function Gi(e, t) {
  return Tl(2048, 8, e, t);
}
function ic(e, t) {
  return Tl(4, 2, e, t);
}
function uc(e, t) {
  return Tl(4, 4, e, t);
}
function ac(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Tl(4, 4, ac.bind(null, t, e), n)
  );
}
function qi() {}
function cc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dc(e, t, n) {
  return Ot & 21
    ? (Me(n, t) || ((n = gs()), ($.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function fp(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ao.transition;
  ao.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (ao.transition = r);
  }
}
function pc() {
  return Le().memoizedState;
}
function dp(e, t, n) {
  var r = vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hc(e))
  )
    mc(t, n);
  else if (((n = qs(e, t, n, r)), n !== null)) {
    var l = se();
    De(n, e, r, l), vc(n, t, r);
  }
}
function pp(e, t, n) {
  var r = vt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hc(e)) mc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Me(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Hi(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = qs(e, t, l, r)),
      n !== null && ((l = se()), De(n, e, r, l), vc(n, t, r));
  }
}
function hc(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function mc(e, t) {
  Hn = hl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pi(e, n);
  }
}
var ml = {
    readContext: Te,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  hp = {
    readContext: Te,
    useCallback: function (e, t) {
      return (Ae().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: ra,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $r(4194308, 4, ac.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ae();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ae();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = dp.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ae();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: na,
    useDebugValue: qi,
    useDeferredValue: function (e) {
      return (Ae().memoizedState = e);
    },
    useTransition: function () {
      var e = na(!1),
        t = e[0];
      return (e = fp.bind(null, e[1])), (Ae().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Ae();
      if (B) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(x(349));
        Ot & 30 || ec(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ra(nc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        or(9, tc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ae(),
        t = ee.identifierPrefix;
      if (B) {
        var n = Ye,
          r = Ke;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mp = {
    readContext: Te,
    useCallback: cc,
    useContext: Te,
    useEffect: Gi,
    useImperativeHandle: sc,
    useInsertionEffect: ic,
    useLayoutEffect: uc,
    useMemo: fc,
    useReducer: so,
    useRef: oc,
    useState: function () {
      return so(lr);
    },
    useDebugValue: qi,
    useDeferredValue: function (e) {
      var t = Le();
      return dc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = so(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Zs,
    useSyncExternalStore: bs,
    useId: pc,
    unstable_isNewReconciler: !1,
  },
  vp = {
    readContext: Te,
    useCallback: cc,
    useContext: Te,
    useEffect: Gi,
    useImperativeHandle: sc,
    useInsertionEffect: ic,
    useLayoutEffect: uc,
    useMemo: fc,
    useReducer: co,
    useRef: oc,
    useState: function () {
      return co(lr);
    },
    useDebugValue: qi,
    useDeferredValue: function (e) {
      var t = Le();
      return X === null ? (t.memoizedState = e) : dc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = co(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Zs,
    useSyncExternalStore: bs,
    useId: pc,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? At(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = vt(e),
      o = Ge(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ht(e, o, l)),
      t !== null && (De(t, e, l, r), Br(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = vt(e),
      o = Ge(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ht(e, o, l)),
      t !== null && (De(t, e, l, r), Br(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = vt(e),
      l = Ge(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ht(e, l, r)),
      t !== null && (De(t, e, r, n), Br(t, e, r));
  },
};
function la(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jn(n, r) || !Jn(l, o)
      : !0
  );
}
function gc(e, t, n) {
  var r = !1,
    l = wt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Te(o))
      : ((l = ve(t) ? It : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? sn(e, l) : wt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function oa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function Xo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Bi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Te(o))
    : ((o = ve(t) ? It : ue.current), (l.context = sn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
      dl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function pn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function fo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gp = typeof WeakMap == "function" ? WeakMap : Map;
function yc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gl || ((gl = !0), (ui = r)), Jo(e, t);
    }),
    n
  );
}
function wc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Jo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Jo(e, t),
          typeof r != "function" &&
            (mt === null ? (mt = new Set([this])) : mt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = jp.bind(null, e, t, n)), t.then(e, e));
}
function ua(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function aa(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yp = et.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Gs(t, null, n, r) : fn(t, e.child, n, r);
}
function sa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    on(t, l),
    (r = Ki(e, t, n, r, o, l)),
    (n = Yi()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (B && n && Fi(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function ca(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ru(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Sc(e, t, o, r, l))
      : ((e = Yr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref)
    )
      return be(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = gt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jn(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), be(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(en, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(en, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(en, ye),
        (ye |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(en, ye),
      (ye |= r);
  return ae(e, t, l, n), t.child;
}
function xc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var o = ve(n) ? It : ue.current;
  return (
    (o = sn(t, o)),
    on(t, l),
    (n = Ki(e, t, n, r, o, l)),
    (r = Yi()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (B && r && Fi(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function fa(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    ul(t);
  } else o = !1;
  if ((on(t, l), t.stateNode === null))
    Wr(e, t), gc(t, n, r), Xo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Te(s))
      : ((s = ve(n) ? It : ue.current), (s = sn(t, s)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && oa(t, i, r, s)),
      (ot = !1);
    var m = t.memoizedState;
    (i.state = m),
      dl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || me.current || ot
        ? (typeof d == "function" && (qo(t, n, d, r), (u = t.memoizedState)),
          (a = ot || la(t, n, a, r, m, u, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Xs(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ze(t.type, a)),
      (i.props = s),
      (h = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Te(u))
        : ((u = ve(n) ? It : ue.current), (u = sn(t, u)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== h || m !== u) && oa(t, i, r, u)),
      (ot = !1),
      (m = t.memoizedState),
      (i.state = m),
      dl(t, r, i, l);
    var w = t.memoizedState;
    a !== h || m !== w || me.current || ot
      ? (typeof v == "function" && (qo(t, n, v, r), (w = t.memoizedState)),
        (s = ot || la(t, n, s, r, m, w, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bo(e, t, n, r, o, l);
}
function bo(e, t, n, r, l, o) {
  xc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Xu(t, n, !1), be(e, t, o);
  (r = t.stateNode), (yp.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = fn(t, e.child, null, o)), (t.child = fn(t, null, a, o)))
      : ae(e, t, a, o),
    (t.memoizedState = r.state),
    l && Xu(t, n, !0),
    t.child
  );
}
function Ec(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qu(e, t.context, !1),
    Vi(e, t.containerInfo);
}
function da(e, t, n, r, l) {
  return cn(), Di(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
function ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(V, l & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Il(i, r, 0, null)),
              (e = zt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ti(n)),
              (t.memoizedState = ei),
              e)
            : Xi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return wp(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = gt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = gt(a, o)) : ((o = zt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ti(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ei),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = gt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xi(e, t) {
  return (
    (t = Il({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Di(r),
    fn(t, e.child, null, n),
    (e = Xi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fo(Error(x(422)))), jr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Il({ mode: "visible", children: r.children }, l, 0, null)),
        (o = zt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fn(t, e.child, null, i),
        (t.child.memoizedState = ti(i)),
        (t.memoizedState = ei),
        o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(x(419))), (r = fo(o, r, void 0)), jr(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), he || a)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ze(e, l), De(r, e, l, -1));
    }
    return nu(), (r = fo(Error(x(421)))), jr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = pt(l.nextSibling)),
      (ke = t),
      (B = !0),
      (Fe = null),
      e !== null &&
        ((Ne[Pe++] = Ke),
        (Ne[Pe++] = Ye),
        (Ne[Pe++] = Ft),
        (Ke = e.id),
        (Ye = e.overflow),
        (Ft = t)),
      (t = Xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Go(e.return, t, n);
}
function po(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Nc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ae(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pa(e, n, t);
        else if (e.tag === 19) pa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && pl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          po(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && pl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        po(t, !0, n, null, o);
        break;
      case "together":
        po(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Sp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ec(t), cn();
      break;
    case 5:
      Js(t);
      break;
    case 1:
      ve(t.type) && ul(t);
      break;
    case 4:
      Vi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(cl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cc(e, t, n)
          : (U(V, V.current & 1),
            (e = be(e, t, n)),
            e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kc(e, t, n);
  }
  return be(e, t, n);
}
var Pc, ni, _c, Rc;
Pc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ni = function () {};
_c = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Lt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Co(e, l)), (r = Co(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = _o(e, l)), (r = _o(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ol);
    }
    To(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Wn.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Wn.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && A("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Rc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kp(e, t, n) {
  var r = t.pendingProps;
  switch ((Oi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ve(t.type) && il(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        H(me),
        H(ue),
        Wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (ci(Fe), (Fe = null)))),
        ni(e, t),
        oe(t),
        null
      );
    case 5:
      $i(t);
      var l = Lt(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _c(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return oe(t), null;
        }
        if (((e = Lt(Ve.current)), Tr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[He] = t), (r[er] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) A(Fn[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A("error", r), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              xu(r, o), A("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                A("invalid", r);
              break;
            case "textarea":
              Cu(r, o), A("invalid", r);
          }
          To(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Wn.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  A("scroll", r);
            }
          switch (n) {
            case "input":
              Sr(r), Eu(r, o, !0);
              break;
            case "textarea":
              Sr(r), Nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ol);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ns(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[He] = t),
            (e[er] = r),
            Pc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Lo(n, r)), n)) {
              case "dialog":
                A("cancel", e), A("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) A(Fn[l], e);
                l = r;
                break;
              case "source":
                A("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", e), A("load", e), (l = r);
                break;
              case "details":
                A("toggle", e), (l = r);
                break;
              case "input":
                xu(e, r), (l = Co(e, r)), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  A("invalid", e);
                break;
              case "textarea":
                Cu(e, r), (l = _o(e, r)), A("invalid", e);
                break;
              default:
                l = r;
            }
            To(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? os(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && rs(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Qn(e, u)
                    : typeof u == "number" && Qn(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Wn.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && A("scroll", e)
                      : u != null && Si(e, o, u, i));
              }
            switch (n) {
              case "input":
                Sr(e), Eu(e, r, !1);
                break;
              case "textarea":
                Sr(e), Nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? tn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      tn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Lt(nr.current)), Lt(Ve.current), Tr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (H(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && we !== null && t.mode & 1 && !(t.flags & 128))
          Ks(), cn(), (t.flags |= 98560), (o = !1);
        else if (((o = Tr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[He] = t;
          } else
            cn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Fe !== null && (ci(Fe), (Fe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? J === 0 && (J = 3) : nu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        dn(), ni(e, t), e === null && Zn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Ai(t.type._context), oe(t), null;
    case 17:
      return ve(t.type) && il(), oe(t), null;
    case 19:
      if ((H(V), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Rn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = pl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Rn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > hn &&
            ((t.flags |= 128), (r = !0), Rn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !B)
            )
              return oe(t), null;
          } else
            2 * G() - o.renderingStartTime > hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = V.current),
          U(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        tu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function xp(e, t) {
  switch ((Oi(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && il(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        H(me),
        H(ue),
        Wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $i(t), null;
    case 13:
      if ((H(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        cn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(V), null;
    case 4:
      return dn(), null;
    case 10:
      return Ai(t.type._context), null;
    case 22:
    case 23:
      return tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  ie = !1,
  Ep = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function ri(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var ha = !1;
function Cp(e, t) {
  if (((Ho = nl), (e = Is()), Ii(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (m = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++s === l && (a = i),
                m === o && ++d === r && (u = i),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = v;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bo = { focusedElem: e, selectionRange: n }, nl = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    E = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ze(t.type, S),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (y) {
          K(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (w = ha), (ha = !1), w;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ri(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function li(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Tc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[er], delete t[Wo], delete t[ip], delete t[up])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), (e = e.sibling);
}
function ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ii(e, t, n), e = e.sibling; e !== null; ) ii(e, t, n), (e = e.sibling);
}
var te = null,
  Ie = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) jc(e, t, n), (n = n.sibling);
}
function jc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(El, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || bt(n, t);
    case 6:
      var r = te,
        l = Ie;
      (te = null),
        rt(e, t, n),
        (te = r),
        (Ie = l),
        te !== null &&
          (Ie
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Ie
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? oo(e.parentNode, n)
              : e.nodeType === 1 && oo(e, n),
            qn(e))
          : oo(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = Ie),
        (te = n.stateNode.containerInfo),
        (Ie = !0),
        rt(e, t, n),
        (te = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ri(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          K(n, t, a);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), rt(e, t, n), (ie = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function va(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ep()),
      t.forEach(function (r) {
        var l = Ip.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (te = a.stateNode), (Ie = !1);
              break e;
            case 3:
              (te = a.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (te = a.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          a = a.return;
        }
        if (te === null) throw Error(x(160));
        jc(o, i, l), (te = null), (Ie = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        K(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zc(t, e), (t = t.sibling);
}
function zc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Ue(e), r & 4)) {
        try {
          Bn(3, e, e.return), jl(3, e);
        } catch (S) {
          K(e, e.return, S);
        }
        try {
          Bn(5, e, e.return);
        } catch (S) {
          K(e, e.return, S);
        }
      }
      break;
    case 1:
      je(t, e), Ue(e), r & 512 && n !== null && bt(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        Ue(e),
        r & 512 && n !== null && bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (S) {
          K(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && es(l, o),
              Lo(a, i);
            var s = Lo(a, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                h = u[i + 1];
              d === "style"
                ? os(l, h)
                : d === "dangerouslySetInnerHTML"
                ? rs(l, h)
                : d === "children"
                ? Qn(l, h)
                : Si(l, d, h, s);
            }
            switch (a) {
              case "input":
                No(l, o);
                break;
              case "textarea":
                ts(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? tn(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? tn(l, !!o.multiple, o.defaultValue, !0)
                      : tn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[er] = o;
          } catch (S) {
            K(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((je(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          K(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (S) {
          K(e, e.return, S);
        }
      break;
    case 4:
      je(t, e), Ue(e);
      break;
    case 13:
      je(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (bi = G())),
        r & 4 && va(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (s = ie) || d), je(t, e), (ie = s)) : je(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (N = e, d = e.child; d !== null; ) {
            for (h = N = d; N !== null; ) {
              switch (((m = N), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, m, m.return);
                  break;
                case 1:
                  bt(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      K(r, n, S);
                    }
                  }
                  break;
                case 5:
                  bt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ya(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (N = v)) : ya(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = ls("display", i)));
              } catch (S) {
                K(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (S) {
                K(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Ue(e), r & 4 && va(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
          var o = ma(e);
          ii(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ma(e);
          oi(e, a, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Np(e, t, n) {
  (N = e), Ic(e);
}
function Ic(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zr;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || ie;
        a = zr;
        var s = ie;
        if (((zr = i), (ie = u) && !s))
          for (N = l; N !== null; )
            (i = N),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wa(l)
                : u !== null
                ? ((u.return = i), (N = u))
                : wa(l);
        for (; o !== null; ) (N = o), Ic(o), (o = o.sibling);
        (N = l), (zr = a), (ie = s);
      }
      ga(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : ga(e);
  }
}
function ga(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ta(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ta(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && qn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ie || (t.flags & 512 && li(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ya(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function wa(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (u) {
            K(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(t, l, u);
            }
          }
          var o = t.return;
          try {
            li(t);
          } catch (u) {
            K(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            li(t);
          } catch (u) {
            K(t, i, u);
          }
      }
    } catch (u) {
      K(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var Pp = Math.ceil,
  vl = et.ReactCurrentDispatcher,
  Ji = et.ReactCurrentOwner,
  Re = et.ReactCurrentBatchConfig,
  O = 0,
  ee = null,
  q = null,
  ne = 0,
  ye = 0,
  en = xt(0),
  J = 0,
  ir = null,
  Dt = 0,
  zl = 0,
  Zi = 0,
  Vn = null,
  pe = null,
  bi = 0,
  hn = 1 / 0,
  We = null,
  gl = !1,
  ui = null,
  mt = null,
  Ir = !1,
  st = null,
  yl = 0,
  $n = 0,
  ai = null,
  Qr = -1,
  Kr = 0;
function se() {
  return O & 6 ? G() : Qr !== -1 ? Qr : (Qr = G());
}
function vt(e) {
  return e.mode & 1
    ? O & 2 && ne !== 0
      ? ne & -ne
      : sp.transition !== null
      ? (Kr === 0 && (Kr = gs()), Kr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cs(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < $n) throw (($n = 0), (ai = null), Error(x(185)));
  sr(e, n, r),
    (!(O & 2) || e !== ee) &&
      (e === ee && (!(O & 2) && (zl |= n), J === 4 && ut(e, ne)),
      ge(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((hn = G() + 500), Rl && Et()));
}
function ge(e, t) {
  var n = e.callbackNode;
  sd(e, t);
  var r = tl(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ru(n), t === 1))
      e.tag === 0 ? ap(Sa.bind(null, e)) : $s(Sa.bind(null, e)),
        lp(function () {
          !(O & 6) && Et();
        }),
        (n = null);
    else {
      switch (ys(r)) {
        case 1:
          n = Ni;
          break;
        case 4:
          n = ms;
          break;
        case 16:
          n = el;
          break;
        case 536870912:
          n = vs;
          break;
        default:
          n = el;
      }
      n = Bc(n, Fc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fc(e, t) {
  if (((Qr = -1), (Kr = 0), O & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = tl(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = Dc();
    (ee !== e || ne !== t) && ((We = null), (hn = G() + 500), jt(e, t));
    do
      try {
        Tp();
        break;
      } catch (a) {
        Oc(e, a);
      }
    while (!0);
    Ui(),
      (vl.current = o),
      (O = l),
      q !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oo(e)), l !== 0 && ((r = l), (t = si(e, l)))), t === 1)
    )
      throw ((n = ir), jt(e, 0), ut(e, r), ge(e, G()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !_p(l) &&
          ((t = wl(e, r)),
          t === 2 && ((o = Oo(e)), o !== 0 && ((r = o), (t = si(e, o)))),
          t === 1))
      )
        throw ((n = ir), jt(e, 0), ut(e, r), ge(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          _t(e, pe, We);
          break;
        case 3:
          if (
            (ut(e, r), (r & 130023424) === r && ((t = bi + 500 - G()), 10 < t))
          ) {
            if (tl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = $o(_t.bind(null, e, pe, We), t);
            break;
          }
          _t(e, pe, We);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Pp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $o(_t.bind(null, e, pe, We), r);
            break;
          }
          _t(e, pe, We);
          break;
        case 5:
          _t(e, pe, We);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ge(e, G()), e.callbackNode === n ? Fc.bind(null, e) : null;
}
function si(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && ci(t)),
    e
  );
}
function ci(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function _p(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ut(e, t) {
  for (
    t &= ~Zi,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sa(e) {
  if (O & 6) throw Error(x(327));
  un();
  var t = tl(e, 0);
  if (!(t & 1)) return ge(e, G()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oo(e);
    r !== 0 && ((t = r), (n = si(e, r)));
  }
  if (n === 1) throw ((n = ir), jt(e, 0), ut(e, t), ge(e, G()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, pe, We),
    ge(e, G()),
    null
  );
}
function eu(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((hn = G() + 500), Rl && Et());
  }
}
function Mt(e) {
  st !== null && st.tag === 0 && !(O & 6) && un();
  var t = O;
  O |= 1;
  var n = Re.transition,
    r = D;
  try {
    if (((Re.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Re.transition = n), (O = t), !(O & 6) && Et();
  }
}
function tu() {
  (ye = en.current), H(en);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rp(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((Oi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && il();
          break;
        case 3:
          dn(), H(me), H(ue), Wi();
          break;
        case 5:
          $i(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          H(V);
          break;
        case 19:
          H(V);
          break;
        case 10:
          Ai(r.type._context);
          break;
        case 22:
        case 23:
          tu();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (q = e = gt(e.current, null)),
    (ne = ye = t),
    (J = 0),
    (ir = null),
    (Zi = zl = Dt = 0),
    (pe = Vn = null),
    Tt !== null)
  ) {
    for (t = 0; t < Tt.length; t++)
      if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Tt = null;
  }
  return e;
}
function Oc(e, t) {
  do {
    var n = q;
    try {
      if ((Ui(), (Vr.current = ml), hl)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        hl = !1;
      }
      if (
        ((Ot = 0),
        (b = X = $ = null),
        (Hn = !1),
        (rr = 0),
        (Ji.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (ir = t), (q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ne),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            d = a,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = ua(i);
          if (v !== null) {
            (v.flags &= -257),
              aa(v, i, a, o, t),
              v.mode & 1 && ia(o, s, t),
              (t = v),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ia(o, s, t), nu();
              break e;
            }
            u = Error(x(426));
          }
        } else if (B && a.mode & 1) {
          var E = ua(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              aa(E, i, a, o, t),
              Di(pn(u, a));
            break e;
          }
        }
        (o = u = pn(u, a)),
          J !== 4 && (J = 2),
          Vn === null ? (Vn = [o]) : Vn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = yc(o, u, t);
              ea(o, f);
              break e;
            case 1:
              a = u;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (mt === null || !mt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = wc(o, a, t);
                ea(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Uc(n);
    } catch (C) {
      (t = C), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Dc() {
  var e = vl.current;
  return (vl.current = ml), e === null ? ml : e;
}
function nu() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Dt & 268435455) && !(zl & 268435455)) || ut(ee, ne);
}
function wl(e, t) {
  var n = O;
  O |= 2;
  var r = Dc();
  (ee !== e || ne !== t) && ((We = null), jt(e, t));
  do
    try {
      Rp();
      break;
    } catch (l) {
      Oc(e, l);
    }
  while (!0);
  if ((Ui(), (O = n), (vl.current = r), q !== null)) throw Error(x(261));
  return (ee = null), (ne = 0), J;
}
function Rp() {
  for (; q !== null; ) Mc(q);
}
function Tp() {
  for (; q !== null && !ed(); ) Mc(q);
}
function Mc(e) {
  var t = Hc(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Uc(e) : (q = t),
    (Ji.current = null);
}
function Uc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xp(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (q = null);
        return;
      }
    } else if (((n = kp(n, t, ye)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function _t(e, t, n) {
  var r = D,
    l = Re.transition;
  try {
    (Re.transition = null), (D = 1), Lp(e, t, n, r);
  } finally {
    (Re.transition = l), (D = r);
  }
  return null;
}
function Lp(e, t, n, r) {
  do un();
  while (st !== null);
  if (O & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (cd(e, o),
    e === ee && ((q = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ir ||
      ((Ir = !0),
      Bc(el, function () {
        return un(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Re.transition), (Re.transition = null);
    var i = D;
    D = 1;
    var a = O;
    (O |= 4),
      (Ji.current = null),
      Cp(e, n),
      zc(n, e),
      Xd(Bo),
      (nl = !!Ho),
      (Bo = Ho = null),
      (e.current = n),
      Np(n),
      td(),
      (O = a),
      (D = i),
      (Re.transition = o);
  } else e.current = n;
  if (
    (Ir && ((Ir = !1), (st = e), (yl = l)),
    (o = e.pendingLanes),
    o === 0 && (mt = null),
    ld(n.stateNode),
    ge(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gl) throw ((gl = !1), (e = ui), (ui = null), e);
  return (
    yl & 1 && e.tag !== 0 && un(),
    (o = e.pendingLanes),
    o & 1 ? (e === ai ? $n++ : (($n = 0), (ai = e))) : ($n = 0),
    Et(),
    null
  );
}
function un() {
  if (st !== null) {
    var e = ys(yl),
      t = Re.transition,
      n = D;
    try {
      if (((Re.transition = null), (D = 16 > e ? 16 : e), st === null))
        var r = !1;
      else {
        if (((e = st), (st = null), (yl = 0), O & 6)) throw Error(x(331));
        var l = O;
        for (O |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (N = s; N !== null; ) {
                  var d = N;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (N = h);
                  else
                    for (; N !== null; ) {
                      d = N;
                      var m = d.sibling,
                        v = d.return;
                      if ((Tc(d), d === s)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (N = m);
                        break;
                      }
                      N = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var E = S.sibling;
                    (S.sibling = null), (S = E);
                  } while (S !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (N = f);
                break e;
              }
              N = o.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (N = p);
          else
            e: for (i = c; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, a);
                  }
                } catch (C) {
                  K(a, a.return, C);
                }
              if (a === i) {
                N = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (N = y);
                break e;
              }
              N = a.return;
            }
        }
        if (
          ((O = l), Et(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(El, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Re.transition = t);
    }
  }
  return !1;
}
function ka(e, t, n) {
  (t = pn(n, t)),
    (t = yc(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = se()),
    e !== null && (sr(e, 1, t), ge(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (mt === null || !mt.has(r)))
        ) {
          (e = pn(n, e)),
            (e = wc(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = se()),
            t !== null && (sr(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > G() - bi)
        ? jt(e, 0)
        : (Zi |= n)),
    ge(e, t);
}
function Ac(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = se();
  (e = Ze(e, t)), e !== null && (sr(e, t, n), ge(e, n));
}
function zp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ac(e, n);
}
function Ip(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Ac(e, n);
}
var Hc;
Hc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Sp(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), B && t.flags & 1048576 && Ws(t, sl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var l = sn(t, ue.current);
      on(t, n), (l = Ki(null, t, r, e, l, n));
      var o = Yi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), ul(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bi(t),
            (l.updater = Ll),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xo(t, r, e, n),
            (t = bo(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && Fi(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Op(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = sa(null, t, r, e, n);
            break e;
          case 14:
            t = ca(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        fa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ec(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Xs(e, t),
          dl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = pn(Error(x(423)), t)), (t = da(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = pn(Error(x(424)), t)), (t = da(e, t, r, n, l));
            break e;
          } else
            for (
              we = pt(t.stateNode.containerInfo.firstChild),
                ke = t,
                B = !0,
                Fe = null,
                n = Gs(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cn(), r === l)) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Js(t),
        e === null && Yo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Vo(r, l) ? (i = null) : o !== null && Vo(r, o) && (t.flags |= 32),
        xc(e, t),
        ae(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Cc(e, t, n);
    case 4:
      return (
        Vi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        sa(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          U(cl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !me.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ge(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Go(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Go(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        on(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        ca(e, t, r, l, n)
      );
    case 15:
      return Sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Wr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), ul(t)) : (e = !1),
        on(t, n),
        gc(t, r, l),
        Xo(t, r, l, n),
        bo(null, t, r, !0, e, n)
      );
    case 19:
      return Nc(e, t, n);
    case 22:
      return kc(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Bc(e, t) {
  return hs(e, t);
}
function Fp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _e(e, t, n, r) {
  return new Fp(e, t, n, r);
}
function ru(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Op(e) {
  if (typeof e == "function") return ru(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xi)) return 11;
    if (e === Ei) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ru(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Wt:
        return zt(n.children, l, o, t);
      case ki:
        (i = 8), (l |= 8);
        break;
      case So:
        return (
          (e = _e(12, n, t, l | 2)), (e.elementType = So), (e.lanes = o), e
        );
      case ko:
        return (e = _e(13, n, t, l)), (e.elementType = ko), (e.lanes = o), e;
      case xo:
        return (e = _e(19, n, t, l)), (e.elementType = xo), (e.lanes = o), e;
      case Ja:
        return Il(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qa:
              i = 10;
              break e;
            case Xa:
              i = 9;
              break e;
            case xi:
              i = 11;
              break e;
            case Ei:
              i = 14;
              break e;
            case lt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function zt(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function Il(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = Ja),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ho(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function mo(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function lu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Dp(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = _e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bi(o),
    e
  );
}
function Mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vc(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (At(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Vs(e, n, t);
  }
  return t;
}
function $c(e, t, n, r, l, o, i, a, u) {
  return (
    (e = lu(n, r, !0, e, l, o, i, a, u)),
    (e.context = Vc(null)),
    (n = e.current),
    (r = se()),
    (l = vt(n)),
    (o = Ge(r, l)),
    (o.callback = t ?? null),
    ht(n, o, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ge(e, r),
    e
  );
}
function Fl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = vt(l);
  return (
    (n = Vc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(l, t, i)),
    e !== null && (De(e, l, i, o), Br(e, l, i)),
    i
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ou(e, t) {
  xa(e, t), (e = e.alternate) && xa(e, t);
}
function Up() {
  return null;
}
var Wc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
Ol.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Fl(e, t, null, null);
};
Ol.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      Fl(null, e, null, null);
    }),
      (t[Je] = null);
  }
};
function Ol(e) {
  this._internalRoot = e;
}
Ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ks();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++);
    it.splice(n, 0, e), n === 0 && Es(e);
  }
};
function uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ea() {}
function Ap(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Sl(i);
        o.call(s);
      };
    }
    var i = $c(t, r, e, 0, null, !1, !1, "", Ea);
    return (
      (e._reactRootContainer = i),
      (e[Je] = i.current),
      Zn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Sl(u);
      a.call(s);
    };
  }
  var u = lu(e, 0, !1, null, null, !1, !1, "", Ea);
  return (
    (e._reactRootContainer = u),
    (e[Je] = u.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      Fl(t, u, n, r);
    }),
    u
  );
}
function Ml(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Sl(i);
        a.call(u);
      };
    }
    Fl(t, i, e, l);
  } else i = Ap(n, t, e, l, r);
  return Sl(i);
}
ws = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (Pi(t, n | 1), ge(t, G()), !(O & 6) && ((hn = G() + 500), Et()));
      }
      break;
    case 13:
      Mt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = se();
          De(r, e, 1, l);
        }
      }),
        ou(e, 1);
  }
};
_i = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    ou(e, 134217728);
  }
};
Ss = function (e) {
  if (e.tag === 13) {
    var t = vt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    ou(e, t);
  }
};
ks = function () {
  return D;
};
xs = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
zo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((No(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = _l(r);
            if (!l) throw Error(x(90));
            ba(r), No(r, l);
          }
        }
      }
      break;
    case "textarea":
      ts(e, n);
      break;
    case "select":
      (t = n.value), t != null && tn(e, !!n.multiple, t, !1);
  }
};
as = eu;
ss = Mt;
var Hp = { usingClientEntryPoint: !1, Events: [fr, Gt, _l, is, us, eu] },
  Tn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Bp = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ds(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Up,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      (El = Fr.inject(Bp)), (Be = Fr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hp;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uu(t)) throw Error(x(200));
  return Mp(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!uu(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = Wc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = ds(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Mt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Dl(t)) throw Error(x(200));
  return Ml(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!uu(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Wc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = $c(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Je] = t.current),
    Zn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ol(t);
};
Ee.render = function (e, t, n) {
  if (!Dl(t)) throw Error(x(200));
  return Ml(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Dl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Je] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = eu;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Dl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Ml(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function Qc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qc);
    } catch (e) {
      console.error(e);
    }
}
Qc(), (Qa.exports = Ee);
var Vp = Qa.exports,
  Ca = Vp;
(yo.createRoot = Ca.createRoot), (yo.hydrateRoot = Ca.hydrateRoot);
const $p = "/assets/apuntes-tablet-CnhrkzUb.jpg",
  Wp = "/assets/mujer_tech2-RpfGiOYt.png",
  Qp =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M64%2096c0-35.3%2028.7-64%2064-64H512c35.3%200%2064%2028.7%2064%2064V352H512V96H128V352H64V96zM0%20403.2C0%20392.6%208.6%20384%2019.2%20384H620.8c10.6%200%2019.2%208.6%2019.2%2019.2c0%2042.4-34.4%2076.8-76.8%2076.8H76.8C34.4%20480%200%20445.6%200%20403.2zM281%20209l-31%2031%2031%2031c9.4%209.4%209.4%2024.6%200%2033.9s-24.6%209.4-33.9%200l-48-48c-9.4-9.4-9.4-24.6%200-33.9l48-48c9.4-9.4%2024.6-9.4%2033.9%200s9.4%2024.6%200%2033.9zM393%20175l48%2048c9.4%209.4%209.4%2024.6%200%2033.9l-48%2048c-9.4%209.4-24.6%209.4-33.9%200s-9.4-24.6%200-33.9l31-31-31-31c-9.4-9.4-9.4-24.6%200-33.9s24.6-9.4%2033.9%200z'/%3e%3c/svg%3e",
  Kp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAABQCAYAAAAEEqmpAAAABGdBTUEAALGPC/xhBQAADQlJREFUeAHtXUtsY1cZPsdx4ggJyWWBhIRUR0iUFXjYUolElVqyYqrOMGkokkeobFjMRBULVok3CITKZCRY0SquhKYzzIwmLNCMZhNXwIYNhg1qhRqzQKJigVF52Intw/9f+0+uj8+5D9+nnf9K0bnn/Z/vnO9+53GvIwRfjEAMCFSPj8r4F0NRF7KIwoVsNTc6fgS6xao4WT6uvv+bvfgLX/wSmYiL38dpthAUUe5W3//tcfWD39XSrHje62IiznsP5tP+ilDqgAkZvHOYiMGx4pThEWBCBsSMiRgQKE4WCQEmpA98TEQfgDg6VgSYkBY4mYgWYDg4UQSYkBq8TEQNEPamigATcgw3EzHVcceVWRC48IRkIlpGBgdngsCFJSQTMZPxxpX6IHDhCMlE9BkRHJ0pAheGkEzETMcZVx4QgYUnJBMx4EjgZLlAYGEJyUTMxfhiI0IisHCEZCKGHAGcPFcILAwhmYi5GldszIwIzD0hmYgz9jxnyyUCc0tIJmIuxxMbFRGBuSMkEzFij3P2MQKr/ZYQqg6+To4wmRtCyhyBxqYsAALOD0idFG/CT2bcgObAT2fk6moLKeutz3+lkSurwBgmYt56ZEHsYUKG60gmYji8OHVIBJiQwQBjIgbDiVNFRIAJ6Q0gE9EbH46NGQEmpBlQJqIZFw5NGAEm5CTATMRJPNiXMgJMyBHgmRNxa2urcvfu3XaU/r+y9dp6kPwP7v6iGSRd2DSXL9fKh4eNSOdniENfFCt63UnZrNcTtR8Qg+Jqv6qXa/IXRb+t9/lFJ2SmRMTOWyqd/GHQW7kUZSBfubatTB1uCWvBoc2vimLY0AeDJb1v8CvXtg8KUrx3/+6dhm9iS4IrW9t7QoldPfrBvTuJ95HzIFOD3Qf33t3Q6w/qH5UxPAqaHtK1lFL1h79899CdxyFkb7kGfYTnkBV3XA7uEzuHzPTNmuLqyU0YZRV0UwS5igO+rwrHV669egsfBlHqRiWBNtSGBhJFKTfVvEBCOFJeDzqziMm2qpTyET7E3OW11jY6rS88v9967vk1OHy/DnFtd3zG94m9qZMZER0CKOepB29GiRtRCTFbB8mbqMhXr24HmlKZ6jhVBUfF8IFydWu7ZkqT57AR+eS6Y6NDyHStxYeYMxswVItvwOSVkKrbPfjcw7ePK2+/WTOYHjooMyKOVZDUCNYXqariGVBIIFUQR7OQkdSQCptLVZwgX+qqOILO50GcJ0KqXk/8+4MPRef3LdH/Z6eilDh49q03IxMyEyJOqCGNYp/OoGQJuWUkY1hVJjUkm+ZNFSfUkBoxQUwKTNwtF0unNb9asiSkm4CnH/1DNzUyITMhoqaG1Kh4VVGKOm504F+/t/KMkIUNmAPvQ2UdqlBzYTD0HmlhVq+uhpRwrlTRSLq4VVHuONgj/vAnpbhOWLldJdSX3H6v+zQJ6UNA3cwzQn7t4Gc1PdLLnzoRjWpIFiakirgji8cAsCu4A6RcA+U6pCon3eCDUFdDKmdeVNGohtQII0EpMqQrZcvBHvGHP9xZVoYNGClUJWTJIklChiSgbnrlz4PuwQuNnx5Xfv7jdT3S5C+aApMMc9RQWT+PIVXcS8qG8THJy7hbB6SpTdUzGoTNqXBXAKphXxnyjtOMVbHhypK/W6edgIDxGj2QYjnDVMNbsDvtmoXIMlRZmapWyvemwgIGICEhacP5L8VK4eZZBf5mupCA//nr34Rh+hm6vL/0exWYBRw9+9ZPmlIN6u3Xv9e0FZKqInqqIVmYkCpS8eTC2eWO6cmM2/hINEpncm1qSGlheOd6B9VTDakR8aliFTE9/xPgn77UULWmQ8OFRFHIiAroY6haVyNCHtkUMlUiWtaGeiNIFfXwWP2ojHAIXzcVejqUxsGCaW1rQ72cXK8VA5Es+DRdb/ss/sFJqTlLPlOeMIRMloC6dXZCpkbEQGpIdqekiqfdlUOq0u3Kgp2IfmpI5eRVFV/5xquXR+pElnq4gQjrkT9EVLF0chQieaCkXoRMl4C6udOETI2IAdWQLE5NFanCIK6HGnZM+XOpilLeMtlqDktVFau2g32zbcFD3YRU/+u26RwwjnVgcCtMKc8JmQoRvdTQtp2Nb9v4rdVMTUsyzKqGUtyGo5GmXnfeVBHf/EGbdDtxrWzvB3z9LdLVGmGD+DgYgd9yJTgTevz4ceWHH3781R/9fVD5zmlJVJaWLUakHgzYq3dSIaJdDRVtZzcMzS9bB74h8SxBzgMiYEYvNex3V/aFXKqbisqTKtpswbWy7VgBp7GjzR1T6wKEycIOvkx+/nfnUlEO1yCniZDl5dWTywFKDZwECfjkyZMDKQvH0JYaZvziJ8ri+595Tnz3U5/NkpAdqUT9mRe+fKn97TcaiRPRSw1p8C7LoXEQSzheSFIVbZ1u2sGzPhRADemcMs+q6KWG9NWIbfNKxLxWxK9egIwvm9gEX2QEPtg35acwEwEpjtyMCOkQUC4V1tqvv7GHL7mjPYkT0UsN6ZwKOwamRw0CyO1aCeBONMM9PiBsCrFcmNxK91VDqj/Hqmhrq5t8iaki4eNyx5+gmVSx6koW+jYIAfVCUyLkBAHb13ccApItiRIxiBqSIWmrInx1cQsUt0L1n7uqqX+naH0YjNWQ8o4eLPlbKwZRQ2qDFBLWu4YrZlUc11DRa4L6JwaoHm/zz0JAvayECOlJQLIhUSLa1BDVj9SQDElLFfHhcPXa9iOc9lLdE66mavhVhiVtx1kbTmQGj5afom2KRPFJura63WpI9fd7yw24N5Ah4lqRKhi740/GylqwUFL8UQ/z8sdBQL38mAgZiIBUd2KvuI3U8OQGVeR2beqH4fDBbs2dFu+RCDA9rOtKpafz8jsbDmrwdSFOavAgmBoAo7zKeR/SXY4qKNjuBwv0S1NDisYHDLzS1YQ86xSGLpTgvG1D6zF3nNd9kC19KLttKxcHPHyqU9HrAAzaDwy/KIDrXajzNuxa7+p5xmvF5lR4iACc5vdFAW2aLh/KMa3PTcUjAeHDYihD1kzxcYQhIfHvT//tiF//6yPRHpwGKRYJeFsUC/v69NMrc2JEdNTQ8E4pDADrT1Qg0eAd0AYMrJpu9Hh6eF0Pt/qho+EnNM47Ww0hKZRsvzpFqSbKH5F3uG7IYlZDSoiqqKbzjZWpQckCuZYB684LXy40wd9wh9E91mlqtUkNKQ8qPRyw40NUe2CNVFGfzVA+o6uGR9APZ1Hwjq71gqi2/tMZeuI0CKjXGZCQMxGQ6kpkauq1NrSpIRlki4fBlOQOakcOxcaU4trWRRY1pDbkZa0YZm1ItqPrvBgPbXSHnd3bMDlLEOFGqR1b7iSmoLa6bOGWKWuoKait7ESI6LU2nBrsmmUYj6qpBTte66aJKXHwMIeE9+/fabmzeLwY7a2GVEgO1oph1oZkNrnj9W+H/OduvGtFKhf73KSGeSAg2UjumJCdb37y03U6hggzDaVy3G7sRIyihmRYWqqInY/fJ+okdOywPfl91JDakLUqzqqGZH+6qqj2H967M7EsyCMBx9h0YH1bL5VW1n5w7Vt7UQlIeMdOxChqSEYlqYq4DoEtgX18uwM73xlwVPHYjayGVF6GqhhFDcn8pFURlhuH+NU+frBNdT59+rSqvwlDcRm7ZwTc3Hxpb2NjdBAfl02xb9bIgThUS4WmbuCgW5yY+unxuh+/F4QfrH1HD4fOm76gM6cDp0NMP2w7nUoITNeXxaky5WDYMRHXVAaGOTuoW69NlwNxOHNwl4W/swp1NjFf2AvtcufBsqXsX3eH0f192NWlez8X7YPjmw3oz7KeFjFyh/Whf6G/ptrqTuO+x/Tu9oMCrku5tDscqnWfTTV3MWncIwFvr66u7MdNPrfx0u3he0YgbQSIgDBLWU+7bp/6UiEg2cBEJCTYTRUBJuAk3EzESTzYlzACOSYgtFw1SqXSTpJTUBu8TEQbMhweKwJAQHgTZukgh1NQaKdq4P/h2NzcbMfa6BCFMRFDgMVJwyMwImCyr6KFt4pyZE9AsoSJSEiwGysCTMBwcDIRw+HFqX0QYAL6AGSJZiJagOHgcAgcHR2Ve70efqlSC5czjdT5mYLaWhv7gb6tIg5fbAS63S78v8NCLV+tzD8BCS8mIiHB7gIhMD8EJNCZiIQEuwuAwPwRkEBnIhIS7M4xAvNLQAKdiUhIsDuHCMw/AQl0JiIhwe4cIbA4BCTQmYiEBLtzgMDiEZBAZyISEuzmGIHFJSCBzkQkJNjNIQKyWSiInRdffCnUR+U5bIivSUxEX4g4QfoIyKaCf3UNX0M00687mxqZiNngzrUaEbh4BCQYmIiEBLsZInBxCUigMxEJCXYzQIAJSKAzEQkJdlNEgAmog81E1BFhf4IIMAFt4DIRbchweIwIMAH9wGQi+iHE8REQYAIGBY+JGBQpThcCASZgCLCcpP8HY6u482HbREEAAAAASUVORK5CYII=";
function Kc() {
  return k.jsx("img", {
    className: "logoSponsor",
    src: Kp,
    alt: "Logo Adalab",
  });
}
var au = {};
Object.defineProperty(au, "__esModule", { value: !0 });
au.parse = bp;
au.serialize = eh;
const Yp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  Gp = /^[\u0021-\u003A\u003C-\u007E]*$/,
  qp =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  Xp = /^[\u0020-\u003A\u003D-\u007E]*$/,
  Jp = Object.prototype.toString,
  Zp = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function bp(e, t) {
  const n = new Zp(),
    r = e.length;
  if (r < 2) return n;
  const l = (t == null ? void 0 : t.decode) || th;
  let o = 0;
  do {
    const i = e.indexOf("=", o);
    if (i === -1) break;
    const a = e.indexOf(";", o),
      u = a === -1 ? r : a;
    if (i > u) {
      o = e.lastIndexOf(";", i - 1) + 1;
      continue;
    }
    const s = Na(e, o, i),
      d = Pa(e, i, s),
      h = e.slice(s, d);
    if (n[h] === void 0) {
      let m = Na(e, i + 1, u),
        v = Pa(e, u, m);
      const w = l(e.slice(m, v));
      n[h] = w;
    }
    o = u + 1;
  } while (o < r);
  return n;
}
function Na(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function Pa(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function eh(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!Yp.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const l = r(t);
  if (!Gp.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
  let o = e + "=" + l;
  if (!n) return o;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    o += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!qp.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Xp.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!nh(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    o += "; Expires=" + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (o += "; HttpOnly"),
    n.secure && (o += "; Secure"),
    n.partitioned && (o += "; Partitioned"),
    n.priority)
  )
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return o;
}
function th(e) {
  if (e.indexOf("%") === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function nh(e) {
  return Jp.call(e) === "[object Date]";
}
/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _a = "popstate";
function rh(e = {}) {
  function t(l, o) {
    let {
      pathname: i = "/",
      search: a = "",
      hash: u = "",
    } = Ht(l.location.hash.substring(1));
    return (
      !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
      fi(
        "",
        { pathname: i, search: a, hash: u },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      a = "";
    if (i && i.getAttribute("href")) {
      let u = l.location.href,
        s = u.indexOf("#");
      a = s === -1 ? u : u.slice(0, s);
    }
    return a + "#" + (typeof o == "string" ? o : ur(o));
  }
  function r(l, o) {
    tt(
      l.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        o
      )})`
    );
  }
  return oh(t, n, r, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function tt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function lh() {
  return Math.random().toString(36).substring(2, 10);
}
function Ra(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fi(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Ht(t) : t),
    state: n,
    key: (t && t.key) || r || lh(),
  };
}
function ur({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function Ht(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function oh(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = "POP",
    u = null,
    s = d();
  s == null && ((s = 0), i.replaceState({ ...i.state, idx: s }, ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    a = "POP";
    let E = d(),
      f = E == null ? null : E - s;
    (s = E), u && u({ action: a, location: S.location, delta: f });
  }
  function m(E, f) {
    a = "PUSH";
    let c = fi(S.location, E, f);
    n && n(c, E), (s = d() + 1);
    let p = Ra(c, s),
      y = S.createHref(c);
    try {
      i.pushState(p, "", y);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(y);
    }
    o && u && u({ action: a, location: S.location, delta: 1 });
  }
  function v(E, f) {
    a = "REPLACE";
    let c = fi(S.location, E, f);
    n && n(c, E), (s = d());
    let p = Ra(c, s),
      y = S.createHref(c);
    i.replaceState(p, "", y),
      o && u && u({ action: a, location: S.location, delta: 0 });
  }
  function w(E) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof E == "string" ? E : ur(E);
    return (
      (c = c.replace(/ $/, "%20")),
      W(
        f,
        `No window.location.(origin|href) available to create URL for href: ${c}`
      ),
      new URL(c, f)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(_a, h),
        (u = E),
        () => {
          l.removeEventListener(_a, h), (u = null);
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: w,
    encodeLocation(E) {
      let f = w(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: v,
    go(E) {
      return i.go(E);
    },
  };
  return S;
}
function Yc(e, t, n = "/") {
  return ih(e, t, n, !1);
}
function ih(e, t, n, r) {
  let l = typeof t == "string" ? Ht(t) : t,
    o = St(l.pathname || "/", n);
  if (o == null) return null;
  let i = Gc(e);
  uh(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) {
    let s = yh(o);
    a = vh(i[u], s, r);
  }
  return a;
}
function Gc(e, t = [], n = [], r = "") {
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (W(
        u.relativePath.startsWith(r),
        `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = qe([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${s}".`
      ),
      Gc(o.children, t, d, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: hh(s, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of qc(o.path)) l(o, i, u);
    }),
    t
  );
}
function qc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = qc(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function uh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : mh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var ah = /^:[\w-]+$/,
  sh = 3,
  ch = 2,
  fh = 1,
  dh = 10,
  ph = -2,
  Ta = (e) => e === "*";
function hh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ta) && (r += ph),
    t && (r += ch),
    n
      .filter((l) => !Ta(l))
      .reduce((l, o) => l + (ah.test(o) ? sh : o === "" ? fh : dh), r)
  );
}
function mh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vh(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      h = kl(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        d
      ),
      m = u.route;
    if (
      (!h &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (h = kl(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !h)
    )
      return null;
    Object.assign(l, h.params),
      i.push({
        params: l,
        pathname: qe([o, h.pathname]),
        pathnameBase: xh(qe([o, h.pathnameBase])),
        route: m,
      }),
      h.pathnameBase !== "/" && (o = qe([o, h.pathnameBase]));
  }
  return i;
}
function kl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = gh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, { paramName: d, isOptional: h }, m) => {
      if (d === "*") {
        let w = a[m] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[m];
      return (
        h && !v ? (s[d] = void 0) : (s[d] = (v || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function gh(e, t = !1, n = !0) {
  tt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function yh(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      tt(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function St(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function wh(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ht(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Sh(n, t)) : t,
    search: Eh(r),
    hash: Ch(l),
  };
}
function Sh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vo(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function kh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xc(e) {
  let t = kh(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function Jc(e, t, n, r = !1) {
  let l;
  typeof e == "string"
    ? (l = Ht(e))
    : ((l = { ...e }),
      W(
        !l.pathname || !l.pathname.includes("?"),
        vo("?", "pathname", "search", l)
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        vo("#", "pathname", "hash", l)
      ),
      W(!l.search || !l.search.includes("#"), vo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (h -= 1);
      l.pathname = m.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let u = wh(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || d) && (u.pathname += "/"), u;
}
var qe = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Eh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ch = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Nh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Zc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Zc);
var Ph = ["GET", ...Zc];
new Set(Ph);
var yn = g.createContext(null);
yn.displayName = "DataRouter";
var Ul = g.createContext(null);
Ul.displayName = "DataRouterState";
var bc = g.createContext({ isTransitioning: !1 });
bc.displayName = "ViewTransition";
var _h = g.createContext(new Map());
_h.displayName = "Fetchers";
var Rh = g.createContext(null);
Rh.displayName = "Await";
var $e = g.createContext(null);
$e.displayName = "Navigation";
var pr = g.createContext(null);
pr.displayName = "Location";
var nt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nt.displayName = "Route";
var su = g.createContext(null);
su.displayName = "RouteError";
function Th(e, { relative: t } = {}) {
  W(hr(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = g.useContext($e),
    { hash: l, pathname: o, search: i } = mr(e, { relative: t }),
    a = o;
  return (
    n !== "/" && (a = o === "/" ? n : qe([n, o])),
    r.createHref({ pathname: a, search: i, hash: l })
  );
}
function hr() {
  return g.useContext(pr) != null;
}
function Bt() {
  return (
    W(
      hr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    g.useContext(pr).location
  );
}
var ef =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function tf(e) {
  g.useContext($e).static || g.useLayoutEffect(e);
}
function Lh() {
  let { isDataRoute: e } = g.useContext(nt);
  return e ? $h() : jh();
}
function jh() {
  W(
    hr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = g.useContext(yn),
    { basename: t, navigator: n } = g.useContext($e),
    { matches: r } = g.useContext(nt),
    { pathname: l } = Bt(),
    o = JSON.stringify(Xc(r)),
    i = g.useRef(!1);
  return (
    tf(() => {
      i.current = !0;
    }),
    g.useCallback(
      (u, s = {}) => {
        if ((tt(i.current, ef), !i.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let d = Jc(u, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : qe([t, d.pathname])),
          (s.replace ? n.replace : n.push)(d, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
g.createContext(null);
function mr(e, { relative: t } = {}) {
  let { matches: n } = g.useContext(nt),
    { pathname: r } = Bt(),
    l = JSON.stringify(Xc(n));
  return g.useMemo(() => Jc(e, JSON.parse(l), r, t === "path"), [e, l, r, t]);
}
function zh(e, t) {
  return nf(e, t);
}
function nf(e, t, n, r) {
  var S;
  W(
    hr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = g.useContext($e),
    { matches: o } = g.useContext(nt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = Bt(),
    d;
  if (t) {
    let E = typeof t == "string" ? Ht(t) : t;
    W(
      u === "/" || ((S = E.pathname) == null ? void 0 : S.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${E.pathname}" was given in the \`location\` prop.`
    ),
      (d = E);
  } else d = s;
  let h = d.pathname || "/",
    m = h;
  if (u !== "/") {
    let E = u.replace(/^\//, "").split("/");
    m = "/" + h.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let v = Yc(e, { pathname: m }),
    w = Mh(
      v &&
        v.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: qe([
              u,
              l.encodeLocation
                ? l.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? u
                : qe([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? g.createElement(
        pr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...d,
            },
            navigationType: "POP",
          },
        },
        w
      )
    : w;
}
function Ih() {
  let e = Vh(),
    t = Nh(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: l }, n) : null,
    null
  );
}
var Fh = g.createElement(Ih, null),
  Oh = class extends g.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? g.createElement(
            nt.Provider,
            { value: this.props.routeContext },
            g.createElement(su.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Dh({ routeContext: e, match: t, children: n }) {
  let r = g.useContext(yn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    g.createElement(nt.Provider, { value: e }, n)
  );
}
function Mh(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let l = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let u = l.findIndex(
      (s) => s.route.id && (o == null ? void 0 : o[s.route.id]) !== void 0
    );
    W(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, u + 1)));
  }
  let i = !1,
    a = -1;
  if (n)
    for (let u = 0; u < l.length; u++) {
      let s = l[u];
      if (
        ((s.route.HydrateFallback || s.route.hydrateFallbackElement) && (a = u),
        s.route.id)
      ) {
        let { loaderData: d, errors: h } = n,
          m =
            s.route.loader &&
            !d.hasOwnProperty(s.route.id) &&
            (!h || h[s.route.id] === void 0);
        if (s.route.lazy || m) {
          (i = !0), a >= 0 ? (l = l.slice(0, a + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((u, s, d) => {
    let h,
      m = !1,
      v = null,
      w = null;
    n &&
      ((h = o && s.route.id ? o[s.route.id] : void 0),
      (v = s.route.errorElement || Fh),
      i &&
        (a < 0 && d === 0
          ? (Wh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (m = !0),
            (w = null))
          : a === d &&
            ((m = !0), (w = s.route.hydrateFallbackElement || null))));
    let S = t.concat(l.slice(0, d + 1)),
      E = () => {
        let f;
        return (
          h
            ? (f = v)
            : m
            ? (f = w)
            : s.route.Component
            ? (f = g.createElement(s.route.Component, null))
            : s.route.element
            ? (f = s.route.element)
            : (f = u),
          g.createElement(Dh, {
            match: s,
            routeContext: { outlet: u, matches: S, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || d === 0)
      ? g.createElement(Oh, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: h,
          children: E(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function cu(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Uh(e) {
  let t = g.useContext(yn);
  return W(t, cu(e)), t;
}
function Ah(e) {
  let t = g.useContext(Ul);
  return W(t, cu(e)), t;
}
function Hh(e) {
  let t = g.useContext(nt);
  return W(t, cu(e)), t;
}
function fu(e) {
  let t = Hh(e),
    n = t.matches[t.matches.length - 1];
  return (
    W(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Bh() {
  return fu("useRouteId");
}
function Vh() {
  var r;
  let e = g.useContext(su),
    t = Ah("useRouteError"),
    n = fu("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function $h() {
  let { router: e } = Uh("useNavigate"),
    t = fu("useNavigate"),
    n = g.useRef(!1);
  return (
    tf(() => {
      n.current = !0;
    }),
    g.useCallback(
      async (l, o = {}) => {
        tt(n.current, ef),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var La = {};
function Wh(e, t, n) {
  La[e] || ((La[e] = !0), tt(!1, n));
}
g.memo(Qh);
function Qh({ routes: e, future: t, state: n }) {
  return nf(e, void 0, n, t);
}
function Gr(e) {
  W(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Kh({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: l,
  static: o = !1,
}) {
  W(
    !hr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let i = e.replace(/^\/*/, "/"),
    a = g.useMemo(
      () => ({ basename: i, navigator: l, static: o, future: {} }),
      [i, l, o]
    );
  typeof n == "string" && (n = Ht(n));
  let {
      pathname: u = "/",
      search: s = "",
      hash: d = "",
      state: h = null,
      key: m = "default",
    } = n,
    v = g.useMemo(() => {
      let w = St(u, i);
      return w == null
        ? null
        : {
            location: { pathname: w, search: s, hash: d, state: h, key: m },
            navigationType: r,
          };
    }, [i, u, s, d, h, m, r]);
  return (
    tt(
      v != null,
      `<Router basename="${i}"> is not able to match the URL "${u}${s}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : g.createElement(
          $e.Provider,
          { value: a },
          g.createElement(pr.Provider, { children: t, value: v })
        )
  );
}
function Yh({ children: e, location: t }) {
  return zh(di(e), t);
}
function di(e, t = []) {
  let n = [];
  return (
    g.Children.forEach(e, (r, l) => {
      if (!g.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === g.Fragment) {
        n.push.apply(n, di(r.props.children, o));
        return;
      }
      W(
        r.type === Gr,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        W(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = di(r.props.children, o)), n.push(i);
    }),
    n
  );
}
var qr = "get",
  Xr = "application/x-www-form-urlencoded";
function Al(e) {
  return e != null && typeof e.tagName == "string";
}
function Gh(e) {
  return Al(e) && e.tagName.toLowerCase() === "button";
}
function qh(e) {
  return Al(e) && e.tagName.toLowerCase() === "form";
}
function Xh(e) {
  return Al(e) && e.tagName.toLowerCase() === "input";
}
function Jh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Zh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Jh(e);
}
var Or = null;
function bh() {
  if (Or === null)
    try {
      new FormData(document.createElement("form"), 0), (Or = !1);
    } catch {
      Or = !0;
    }
  return Or;
}
var em = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function go(e) {
  return e != null && !em.has(e)
    ? (tt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xr}"`
      ),
      null)
    : e;
}
function tm(e, t) {
  let n, r, l, o, i;
  if (qh(e)) {
    let a = e.getAttribute("action");
    (r = a ? St(a, t) : null),
      (n = e.getAttribute("method") || qr),
      (l = go(e.getAttribute("enctype")) || Xr),
      (o = new FormData(e));
  } else if (Gh(e) || (Xh(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = u ? St(u, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || qr),
      (l =
        go(e.getAttribute("formenctype")) ||
        go(a.getAttribute("enctype")) ||
        Xr),
      (o = new FormData(a, e)),
      !bh())
    ) {
      let { name: s, type: d, value: h } = e;
      if (d === "image") {
        let m = s ? `${s}.` : "";
        o.append(`${m}x`, "0"), o.append(`${m}y`, "0");
      } else s && o.append(s, h);
    }
  } else {
    if (Al(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = qr), (r = null), (l = Xr), (i = e);
  }
  return (
    o && l === "text/plain" && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
function du(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function nm(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function rm(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function lm(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let i = await nm(o, n);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return am(
    r
      .flat(1)
      .filter(rm)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function ja(e, t, n, r, l, o) {
  let i = (u, s) => (n[s] ? u.route.id !== n[s].route.id : !0),
    a = (u, s) => {
      var d;
      return (
        n[s].pathname !== u.pathname ||
        (((d = n[s].route.path) == null ? void 0 : d.endsWith("*")) &&
          n[s].params["*"] !== u.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((u, s) => i(u, s) || a(u, s))
    : o === "data"
    ? t.filter((u, s) => {
        var h;
        let d = r.routes[u.route.id];
        if (!d || !d.hasLoader) return !1;
        if (i(u, s) || a(u, s)) return !0;
        if (u.route.shouldRevalidate) {
          let m = u.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: u.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof m == "boolean") return m;
        }
        return !0;
      })
    : [];
}
function om(e, t) {
  return im(
    e
      .map((n) => {
        let r = t.routes[n.route.id];
        if (!r) return [];
        let l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function im(e) {
  return [...new Set(e)];
}
function um(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function am(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let o = JSON.stringify(um(l));
      return n.has(o) || (n.add(o), r.push({ key: o, link: l })), r;
    }, [])
  );
}
function sm(e) {
  let t =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    t.pathname === "/"
      ? (t.pathname = "_root.data")
      : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
    t
  );
}
function cm() {
  let e = g.useContext(yn);
  return (
    du(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function fm() {
  let e = g.useContext(Ul);
  return (
    du(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var pu = g.createContext(void 0);
pu.displayName = "FrameworkContext";
function rf() {
  let e = g.useContext(pu);
  return (
    du(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function dm(e, t) {
  let n = g.useContext(pu),
    [r, l] = g.useState(!1),
    [o, i] = g.useState(!1),
    {
      onFocus: a,
      onBlur: u,
      onMouseEnter: s,
      onMouseLeave: d,
      onTouchStart: h,
    } = t,
    m = g.useRef(null);
  g.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let S = (f) => {
          f.forEach((c) => {
            i(c.isIntersecting);
          });
        },
        E = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        m.current && E.observe(m.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    g.useEffect(() => {
      if (r) {
        let S = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [r]);
  let v = () => {
      l(!0);
    },
    w = () => {
      l(!1), i(!1);
    };
  return n
    ? e !== "intent"
      ? [o, m, {}]
      : [
          o,
          m,
          {
            onFocus: Ln(a, v),
            onBlur: Ln(u, w),
            onMouseEnter: Ln(s, v),
            onMouseLeave: Ln(d, w),
            onTouchStart: Ln(h, v),
          },
        ]
    : [!1, m, {}];
}
function Ln(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function pm({ page: e, ...t }) {
  let { router: n } = cm(),
    r = g.useMemo(() => Yc(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? g.createElement(mm, { page: e, matches: r, ...t })
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function hm(e) {
  let { manifest: t, routeModules: n } = rf(),
    [r, l] = g.useState([]);
  return (
    g.useEffect(() => {
      let o = !1;
      return (
        lm(e, t, n).then((i) => {
          o || l(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function mm({ page: e, matches: t, ...n }) {
  let r = Bt(),
    { manifest: l, routeModules: o } = rf(),
    { loaderData: i, matches: a } = fm(),
    u = g.useMemo(() => ja(e, t, a, l, r, "data"), [e, t, a, l, r]),
    s = g.useMemo(() => ja(e, t, a, l, r, "assets"), [e, t, a, l, r]),
    d = g.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        w = !1;
      if (
        (t.forEach((E) => {
          var c;
          let f = l.routes[E.route.id];
          !f ||
            !f.hasLoader ||
            ((!u.some((p) => p.route.id === E.route.id) &&
              E.route.id in i &&
              (c = o[E.route.id]) != null &&
              c.shouldRevalidate) ||
            f.hasClientLoader
              ? (w = !0)
              : v.add(E.route.id));
        }),
        v.size === 0)
      )
        return [];
      let S = sm(e);
      return (
        w &&
          v.size > 0 &&
          S.searchParams.set(
            "_routes",
            t
              .filter((E) => v.has(E.route.id))
              .map((E) => E.route.id)
              .join(",")
          ),
        [S.pathname + S.search]
      );
    }, [i, r, l, u, t, e, o]),
    h = g.useMemo(() => om(s, l), [s, l]),
    m = hm(s);
  return g.createElement(
    g.Fragment,
    null,
    d.map((v) =>
      g.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...n,
      })
    ),
    h.map((v) =>
      g.createElement("link", { key: v, rel: "modulepreload", href: v, ...n })
    ),
    m.map(({ key: v, link: w }) => g.createElement("link", { key: v, ...w }))
  );
}
function vm(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var lf =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  lf && (window.__reactRouterVersion = "7.0.1");
} catch {}
function gm({ basename: e, children: t, window: n }) {
  let r = g.useRef();
  r.current == null && (r.current = rh({ window: n, v5Compat: !0 }));
  let l = r.current,
    [o, i] = g.useState({ action: l.action, location: l.location }),
    a = g.useCallback(
      (u) => {
        g.startTransition(() => i(u));
      },
      [i]
    );
  return (
    g.useLayoutEffect(() => l.listen(a), [l, a]),
    g.createElement(Kh, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
var of = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wn = g.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: l,
      reloadDocument: o,
      replace: i,
      state: a,
      target: u,
      to: s,
      preventScrollReset: d,
      viewTransition: h,
      ...m
    },
    v
  ) {
    let { basename: w } = g.useContext($e),
      S = typeof s == "string" && of.test(s),
      E,
      f = !1;
    if (typeof s == "string" && S && ((E = s), lf))
      try {
        let F = new URL(window.location.href),
          L = s.startsWith("//") ? new URL(F.protocol + s) : new URL(s),
          de = St(L.pathname, w);
        L.origin === F.origin && de != null
          ? (s = de + L.search + L.hash)
          : (f = !0);
      } catch {
        tt(
          !1,
          `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let c = Th(s, { relative: l }),
      [p, y, C] = dm(r, m),
      R = km(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: l,
        viewTransition: h,
      });
    function _(F) {
      t && t(F), F.defaultPrevented || R(F);
    }
    let T = g.createElement("a", {
      ...m,
      ...C,
      href: E || c,
      onClick: f || o ? t : _,
      ref: vm(v, y),
      target: u,
      "data-discover": !S && n === "render" ? "true" : void 0,
    });
    return p && !S
      ? g.createElement(g.Fragment, null, T, g.createElement(pm, { page: c }))
      : T;
  });
wn.displayName = "Link";
var ym = g.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: l = !1,
    style: o,
    to: i,
    viewTransition: a,
    children: u,
    ...s
  },
  d
) {
  let h = mr(i, { relative: s.relative }),
    m = Bt(),
    v = g.useContext(Ul),
    { navigator: w, basename: S } = g.useContext($e),
    E = v != null && Pm(h) && a === !0,
    f = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
    c = m.pathname,
    p =
      v && v.navigation && v.navigation.location
        ? v.navigation.location.pathname
        : null;
  n ||
    ((c = c.toLowerCase()),
    (p = p ? p.toLowerCase() : null),
    (f = f.toLowerCase())),
    p && S && (p = St(p, S) || p);
  const y = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
  let C = c === f || (!l && c.startsWith(f) && c.charAt(y) === "/"),
    R =
      p != null &&
      (p === f || (!l && p.startsWith(f) && p.charAt(f.length) === "/")),
    _ = { isActive: C, isPending: R, isTransitioning: E },
    T = C ? t : void 0,
    F;
  typeof r == "function"
    ? (F = r(_))
    : (F = [
        r,
        C ? "active" : null,
        R ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let L = typeof o == "function" ? o(_) : o;
  return g.createElement(
    wn,
    {
      ...s,
      "aria-current": T,
      className: F,
      ref: d,
      style: L,
      to: i,
      viewTransition: a,
    },
    typeof u == "function" ? u(_) : u
  );
});
ym.displayName = "NavLink";
var wm = g.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: o,
      method: i = qr,
      action: a,
      onSubmit: u,
      relative: s,
      preventScrollReset: d,
      viewTransition: h,
      ...m
    },
    v
  ) => {
    let w = Cm(),
      S = Nm(a, { relative: s }),
      E = i.toLowerCase() === "get" ? "get" : "post",
      f = typeof a == "string" && of.test(a),
      c = (p) => {
        if ((u && u(p), p.defaultPrevented)) return;
        p.preventDefault();
        let y = p.nativeEvent.submitter,
          C = (y == null ? void 0 : y.getAttribute("formmethod")) || i;
        w(y || p.currentTarget, {
          fetcherKey: t,
          method: C,
          navigate: n,
          replace: l,
          state: o,
          relative: s,
          preventScrollReset: d,
          viewTransition: h,
        });
      };
    return g.createElement("form", {
      ref: v,
      method: E,
      action: S,
      onSubmit: r ? u : c,
      ...m,
      "data-discover": !f && e === "render" ? "true" : void 0,
    });
  }
);
wm.displayName = "Form";
function Sm(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function uf(e) {
  let t = g.useContext(yn);
  return W(t, Sm(e)), t;
}
function km(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: o,
    viewTransition: i,
  } = {}
) {
  let a = Lh(),
    u = Bt(),
    s = mr(e, { relative: o });
  return g.useCallback(
    (d) => {
      if (Zh(d, t)) {
        d.preventDefault();
        let h = n !== void 0 ? n : ur(u) === ur(s);
        a(e, {
          replace: h,
          state: r,
          preventScrollReset: l,
          relative: o,
          viewTransition: i,
        });
      }
    },
    [u, a, s, n, r, t, e, l, o, i]
  );
}
var xm = 0,
  Em = () => `__${String(++xm)}__`;
function Cm() {
  let { router: e } = uf("useSubmit"),
    { basename: t } = g.useContext($e),
    n = Bh();
  return g.useCallback(
    async (r, l = {}) => {
      let { action: o, method: i, encType: a, formData: u, body: s } = tm(r, t);
      if (l.navigate === !1) {
        let d = l.fetcherKey || Em();
        await e.fetch(d, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function Nm(e, { relative: t } = {}) {
  let { basename: n } = g.useContext($e),
    r = g.useContext(nt);
  W(r, "useFormAction must be used inside a RouteContext");
  let [l] = r.matches.slice(-1),
    o = { ...mr(e || ".", { relative: t }) },
    i = Bt();
  if (e == null) {
    o.search = i.search;
    let a = new URLSearchParams(o.search),
      u = a.getAll("index");
    if (u.some((d) => d === "")) {
      a.delete("index"),
        u.filter((h) => h).forEach((h) => a.append("index", h));
      let d = a.toString();
      o.search = d ? `?${d}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : qe([n, o.pathname])),
    ur(o)
  );
}
function Pm(e, t = {}) {
  let n = g.useContext(bc);
  W(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = uf("useViewTransitionState"),
    l = mr(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = St(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = St(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return kl(l.pathname, i) != null || kl(l.pathname, o) != null;
}
new TextEncoder();
function _m() {
  return k.jsxs("header", {
    className: "header",
    children: [
      k.jsxs("a", {
        className: "header__brand",
        href: "./",
        title: "Haz click para volver a la página inicial",
        children: [
          k.jsx(wn, {
            to: "/",
            children: k.jsx("img", {
              className: "header__companyLogo",
              src: Qp,
              alt: "Logo proyectos molones",
            }),
          }),
          k.jsx("h1", { className: "header__title", children: "4Code" }),
        ],
      }),
      k.jsx(Kc, {}),
    ],
  });
}
var af = { exports: {} },
  Rm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Tm = Rm,
  Lm = Tm;
function sf() {}
function cf() {}
cf.resetWarningCache = sf;
var jm = function () {
  function e(r, l, o, i, a, u) {
    if (u !== Lm) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: cf,
    resetWarningCache: sf,
  };
  return (n.PropTypes = n), n;
};
af.exports = jm();
var zm = af.exports;
const Se = za(zm);
function pi({ onChangeInput: e, text: t }) {
  const n = new FileReader(),
    r = $a.createRef(),
    l = (i) => {
      if (
        (console.log("La usuaria ha abierto la ventana para elegir ficheros"),
        console.log(
          "La usuaria ha elegido los ficheros",
          i.currentTarget.files
        ),
        console.log(
          "El primero de los ficheros elegidos es",
          i.currentTarget.files[0]
        ),
        i.currentTarget.files.length > 0)
      ) {
        const a = i.currentTarget.files[0];
        n.addEventListener("load", o), n.readAsDataURL(a);
      }
    },
    o = () => {
      const i = n.result;
      e(i);
    };
  return k.jsx("div", {
    className: "get-avatar",
    children: k.jsxs("label", {
      className: "get-avatar__label",
      children: [
        t,
        k.jsx("input", {
          type: "file",
          ref: r,
          style: { display: "none" },
          onChange: l,
        }),
      ],
    }),
  });
}
pi.propTypes = { onChangeInput: Se.func.isRequired, text: Se.string };
const Im = (e, t) => {
    const n = localStorage.getItem(e);
    return n === null ? t : JSON.parse(n);
  },
  Fm = (e, t) => {
    const n = JSON.stringify(t);
    localStorage.setItem(e, n);
  },
  Om = (e) => {
    localStorage.removeItem(e);
  },
  Dm = () => {
    localStorage.clear();
  },
  M = { get: Im, set: Fm, remove: Om, clear: Dm };
function ff({ onChangeInput: e, onSubmitForm: t, urlCard: n, projectInfo: r }) {
  const l = (u) => {
      e(u.target.value, u.target.id);
    },
    o = (u) => {
      e(u, "image");
    },
    i = (u) => {
      e(u, "photo");
    },
    a = (u) => {
      u.preventDefault(), t();
    };
  return k.jsxs("form", {
    className: "addForm",
    children: [
      k.jsx("h2", { className: "title", children: "Información" }),
      k.jsxs("fieldset", {
        className: "addForm__group",
        children: [
          k.jsx("legend", {
            className: "addForm__title",
            children: "Cuéntanos sobre el proyecto",
          }),
          k.jsx("input", {
            className: "addForm__input",
            type: "text",
            name: "nameProject",
            id: "nameProject",
            placeholder: "Nombre del proyecto",
            value: M.get("nameProject") === void 0 ? "" : r.nameProject,
            onChange: l,
          }),
          k.jsx("input", {
            className: "addForm__input",
            type: "text",
            name: "slogan",
            id: "slogan",
            placeholder: "Slogan",
            value: M.get("slogan") === void 0 ? "" : r.slogan,
            onChange: l,
          }),
          k.jsxs("div", {
            className: "addForm__2col",
            children: [
              k.jsx("input", {
                className: "addForm__input",
                type: "url",
                name: "repo",
                id: "repo",
                placeholder: "Repositorio (copia y pega la url)",
                value: M.get("repo") === void 0 ? "" : r.repo,
                onChange: l,
              }),
              k.jsx("input", {
                className: "addForm__input",
                type: "url",
                name: "demo",
                id: "demo",
                placeholder: "Demo (copia y pega la url)",
                value: M.get("demo") === void 0 ? "" : r.demo,
                onChange: l,
              }),
            ],
          }),
          k.jsx("input", {
            className: "addForm__input",
            type: "text",
            name: "technologies",
            id: "technologies",
            placeholder: "Tecnologías",
            value: M.get("technologies") === void 0 ? "" : r.technologies,
            onChange: l,
          }),
          k.jsx("textarea", {
            className: "addForm__input",
            type: "text",
            name: "description",
            id: "description",
            placeholder: "descripción",
            value: M.get("description") === void 0 ? "" : r.description,
            rows: "5",
            onChange: l,
          }),
        ],
      }),
      k.jsxs("fieldset", {
        className: "addForm__group",
        children: [
          k.jsx("legend", {
            className: "addForm__title",
            children: "Cuéntanos sobre la autora",
          }),
          k.jsx("input", {
            className: "addForm__input",
            type: "text",
            name: "autor",
            id: "autor",
            placeholder: "Nombre",
            value: M.get("autor") === void 0 ? "" : r.autor,
            onChange: l,
          }),
          k.jsx("input", {
            className: "addForm__input",
            type: "text",
            name: "job",
            id: "job",
            placeholder: "Trabajo",
            value: M.get("job") === void 0 ? "" : r.job,
            onChange: l,
          }),
        ],
      }),
      k.jsxs("fieldset", {
        className: "addForm__group--upload",
        children: [
          k.jsx("label", {
            htmlFor: "image",
            className: "button",
            children: k.jsx(pi, {
              onChangeInput: o,
              text: "Subir foto del proyecto",
            }),
          }),
          k.jsx("input", {
            className: "addForm__hidden",
            type: "file",
            name: "image",
            id: "image",
          }),
          k.jsx("label", {
            htmlFor: "photo",
            className: "button",
            children: k.jsx(pi, {
              onChangeInput: i,
              text: "Subir foto de la autora",
            }),
          }),
          k.jsx("input", {
            className: "addForm__hidden",
            type: "file",
            name: "photo",
            id: "photo",
          }),
          k.jsx("button", {
            onClick: a,
            className: "button--large",
            children: "Guardar proyecto",
          }),
        ],
      }),
      k.jsx("a", {
        className: "form__link button__link",
        href: n,
        target: "_blank",
        children:
          n &&
          k.jsx("p", {
            className: "button",
            children: "Click para ver tu proyecto",
          }),
      }),
    ],
  });
}
ff.propTypes = {
  onChangeInput: Se.func.isRequired,
  onSubmitForm: Se.func.isRequired,
  urlCard: Se.string.isRequired,
  projectInfo: Se.object.isRequired,
};
function df(e) {
  return k.jsxs("section", {
    className: "hero",
    children: [
      k.jsx("h2", { className: "title", children: "4Code" }),
      k.jsx("p", {
        className: "hero__text",
        children:
          "Escaparate en línea para recoger ideas a través de la tecnología",
      }),
      e.children,
    ],
  });
}
function hu({ projectInfo: e }) {
  return k.jsx(k.Fragment, {
    children: k.jsxs("article", {
      className: "card",
      children: [
        k.jsx("button", { children: "X" }),
        k.jsx("h2", {
          className: "card__projectTitle",
          children: k.jsx("span", {
            className: "card__projectTitle--text",
            children: "Personal project card",
          }),
        }),
        k.jsxs("div", {
          className: "card__author",
          children: [
            k.jsx("div", {
              className: "card__authorPhoto",
              style: { backgroundImage: `url(${e.photo})` },
            }),
            k.jsx("p", { className: "card__job", children: e.job }),
            k.jsx("h3", { className: "card__name__autor", children: e.autor }),
          ],
        }),
        k.jsxs("div", {
          className: "card__project",
          children: [
            k.jsx("h3", { className: "card__name", children: e.nameProject }),
            k.jsx("p", { className: "card__slogan", children: e.slogan }),
            k.jsx("p", {
              className: "card__description",
              children: e.description,
            }),
            k.jsxs("div", {
              className: "card__technicalInfo",
              children: [
                k.jsx("p", {
                  className: "card__technologies",
                  children: e.technologies,
                }),
                k.jsx("a", {
                  className: "icon icon__www",
                  href: e.demo,
                  target: "_blank",
                  title: "Haz click para ver el proyecto online",
                }),
                k.jsx("a", {
                  className: "icon icon__github",
                  href: e.repo,
                  target: "_blank",
                  title: "Haz click para ver el código del proyecto",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
hu.propTypes = { projectInfo: Se.object.isRequired };
function pf({ projectInfo: e }) {
  return k.jsxs("section", {
    className: "preview",
    children: [
      k.jsx("div", {
        className: "projectImage",
        style: { backgroundImage: `url(${e.image})` },
      }),
      k.jsx(hu, { projectInfo: e }),
    ],
  });
}
pf.propTypes = { projectInfo: Se.object.isRequired };
function hf({ projectInfo: e, onChangeInput: t, onSubmitForm: n, urlCard: r }) {
  return k.jsxs("main", {
    className: "main",
    children: [
      k.jsx(df, {
        children: k.jsx(wn, {
          className: "button--link",
          to: "/ShowProjects",
          children: "Ver proyectos",
        }),
      }),
      k.jsx(pf, { projectInfo: e }),
      k.jsx(ff, {
        onChangeInput: t,
        onSubmitForm: n,
        urlCard: r,
        projectInfo: e,
      }),
    ],
  });
}
hf.propTypes = {
  onChangeInput: Se.func.isRequired,
  projectInfo: Se.object.isRequired,
  onSubmitForm: Se.func.isRequired,
  urlCard: Se.string.isRequired,
};
function Mm() {
  return k.jsx("footer", { className: "footer", children: k.jsx(Kc, {}) });
}
function Um() {
  return k.jsx(k.Fragment, {
    children: k.jsxs("main", {
      className: "container-landing",
      children: [
        k.jsx("h1", { className: "title-landing", children: "4Code" }),
        k.jsx("p", {
          className: "subtitle",
          children:
            "Escaparate en línea para recoger ideas a través de la tecnología",
        }),
        k.jsx("div", {
          className: "button btn",
          children: k.jsx(wn, {
            to: "/main",
            children: k.jsx("a", { href: "", children: "Comenzar" }),
          }),
        }),
      ],
    }),
  });
}
function mf({ allProjects: e }) {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx("header", {
        children: k.jsx(df, {
          children: k.jsx(wn, {
            className: "button--link",
            to: "/main",
            children: "Nuevo proyecto",
          }),
        }),
      }),
      k.jsx("main", {
        className: "showProjects__container",
        children: k.jsx("section", {
          className: "showProjects__cards",
          children: e.map((t) => k.jsx(hu, { projectInfo: t }, t.id)),
        }),
      }),
    ],
  });
}
mf.propTypes = { allProjects: Se.array.isRequired };
const Am = {
  BASE_URL: "/",
  DEV: !1,
  MODE: "production",
  PROD: !0,
  SSR: !1,
  VITE_PORT: "5002",
};
function Hm() {
  const [e, t] = g.useState({
      nameProject: M.get("nameProject", "Elegant workspace"),
      slogan: M.get("slogan", "Diseños Exclusivos"),
      technologies: M.get("technologies", "React JS - HTML - CSS"),
      demo: M.get("demo", "Web Link"),
      repo: M.get("repo", "GitHub Link"),
      description: M.get(
        "description",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquidº"
      ),
      autor: M.get("autor", "Emmelie Bjôrklund"),
      job: M.get("job", "Full stack Developer"),
      image: M.get("image", $p),
      photo: M.get("photo", Wp),
    }),
    [n, r] = g.useState(""),
    [l, o] = g.useState([]),
    i = (d, h) => {
      h === "nameProject"
        ? (M.set("nameProject", d), t({ ...e, nameProject: d }))
        : h === "slogan"
        ? (M.set("slogan", d), t({ ...e, slogan: d }))
        : h === "repo"
        ? (M.set("repo", d), t({ ...e, repo: d }))
        : h === "demo"
        ? (M.set("demo", d), t({ ...e, demo: d }))
        : h === "technologies"
        ? (M.set("technologies", d), t({ ...e, technologies: d }))
        : h === "description"
        ? (M.set("description", d), t({ ...e, description: d }))
        : h === "autor"
        ? (M.set("autor", d), t({ ...e, autor: d }))
        : h === "job"
        ? (M.set("job", d), t({ ...e, job: d }))
        : h === "image"
        ? (M.set("image", d), t({ ...e, image: d }))
        : h === "photo" && (M.set("photo", d), t({ ...e, photo: d }));
    },
    u = "https://promo-a-module-4-team-2-proyectos.onrender.com";
  console.log(Am),
    g.useEffect(() => {
      fetch(`${u}/ShowProjects`)
        .then((d) => d.json())
        .then((d) => {
          o(d.message);
        });
    }, []);
  const s = () => {
    fetch(`${u}/api/projects`, {
      method: "POST",
      body: JSON.stringify(e),
      headers: { "Content-type": "application/json" },
    })
      .then((d) => d.json())
      .then((d) => {
        r(d.cardURL);
      });
  };
  return k.jsx(k.Fragment, {
    children: k.jsxs("div", {
      className: "container",
      children: [
        k.jsx(_m, {}),
        k.jsxs(Yh, {
          children: [
            k.jsx(Gr, { path: "/", element: k.jsx(Um, {}) }),
            k.jsx(Gr, {
              path: "/main",
              element: k.jsx(hf, {
                projectInfo: e,
                onChangeInput: i,
                onSubmitForm: s,
                urlCard: n,
              }),
            }),
            k.jsx(Gr, {
              path: "/showProjects",
              element: k.jsx(mf, { projectInfo: e, allProjects: l }),
            }),
          ],
        }),
        k.jsx(Mm, {}),
      ],
    }),
  });
}
yo.createRoot(document.getElementById("root")).render(
  k.jsx(gm, { children: k.jsx($a.StrictMode, { children: k.jsx(Hm, {}) }) })
);
