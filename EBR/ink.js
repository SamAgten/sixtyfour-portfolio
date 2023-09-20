!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self).inkjs =
          {})
      );
})(this, function (t) {
  "use strict";
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      e(t)
    );
  }
  function n(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(
          t,
          ((r = i.key),
          (a = void 0),
          "symbol" ==
          typeof (a = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" != typeof i) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(r, "string"))
            ? a
            : String(a)),
          i
        );
    }
    var r, a;
  }
  function r(t, e, n) {
    return (
      e && i(t.prototype, e),
      n && i(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function a(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && o(t, e);
  }
  function s(t) {
    return (
      (s = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      s(t)
    );
  }
  function o(t, e) {
    return (
      (o = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      o(t, e)
    );
  }
  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function l(t, e, n) {
    return (
      (l = u()
        ? Reflect.construct.bind()
        : function (t, e, n) {
            var i = [null];
            i.push.apply(i, e);
            var r = new (Function.bind.apply(t, i))();
            return n && o(r, n.prototype), r;
          }),
      l.apply(null, arguments)
    );
  }
  function h(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (h = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, i);
        }
        function i() {
          return l(t, arguments, s(this).constructor);
        }
        return (
          (i.prototype = Object.create(t.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          o(i, t)
        );
      }),
      h(t)
    );
  }
  function c(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function f(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return c(t);
  }
  function v(t) {
    var e = u();
    return function () {
      var n,
        i = s(t);
      if (e) {
        var r = s(this).constructor;
        n = Reflect.construct(i, arguments, r);
      } else n = i.apply(this, arguments);
      return f(this, n);
    };
  }
  function d(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var i,
            r,
            a,
            s,
            o = [],
            u = !0,
            l = !1;
          try {
            if (((a = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              u = !1;
            } else
              for (
                ;
                !(u = (i = a.call(n)).done) &&
                (o.push(i.value), o.length !== e);
                u = !0
              );
          } catch (t) {
            (l = !0), (r = t);
          } finally {
            try {
              if (!u && null != n.return && ((s = n.return()), Object(s) !== s))
                return;
            } finally {
              if (l) throw r;
            }
          }
          return o;
        }
      })(t, e) ||
      y(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function p(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return m(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      y(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function y(t, e) {
    if (t) {
      if ("string" == typeof t) return m(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? m(t, e)
          : void 0
      );
    }
  }
  function m(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  function g(t, e) {
    var n =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!n) {
      if (
        Array.isArray(t) ||
        (n = y(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        n && (t = n);
        var i = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
          },
          e: function (t) {
            throw t;
          },
          f: r,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      s = !0,
      o = !1;
    return {
      s: function () {
        n = n.call(t);
      },
      n: function () {
        var t = n.next();
        return (s = t.done), t;
      },
      e: function (t) {
        (o = !0), (a = t);
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (o) throw a;
        }
      },
    };
  }
  var S,
    k = (function () {
      function t() {
        if (
          (n(this, t),
          (this._components = []),
          (this._componentsString = null),
          (this._isRelative = !1),
          "string" == typeof arguments[0])
        ) {
          var e = arguments[0];
          this.componentsString = e;
        } else if (
          arguments[0] instanceof t.Component &&
          arguments[1] instanceof t
        ) {
          var i = arguments[0],
            r = arguments[1];
          this._components.push(i),
            (this._components = this._components.concat(r._components));
        } else if (arguments[0] instanceof Array) {
          var a = arguments[0],
            s = !!arguments[1];
          (this._components = this._components.concat(a)),
            (this._isRelative = s);
        }
      }
      return (
        r(
          t,
          [
            {
              key: "isRelative",
              get: function () {
                return this._isRelative;
              },
            },
            {
              key: "componentCount",
              get: function () {
                return this._components.length;
              },
            },
            {
              key: "head",
              get: function () {
                return this._components.length > 0 ? this._components[0] : null;
              },
            },
            {
              key: "tail",
              get: function () {
                return this._components.length >= 2
                  ? new t(this._components.slice(1, this._components.length))
                  : t.self;
              },
            },
            {
              key: "length",
              get: function () {
                return this._components.length;
              },
            },
            {
              key: "lastComponent",
              get: function () {
                var t = this._components.length - 1;
                return t >= 0 ? this._components[t] : null;
              },
            },
            {
              key: "containsNamedComponent",
              get: function () {
                for (var t = 0, e = this._components.length; t < e; t++)
                  if (!this._components[t].isIndex) return !0;
                return !1;
              },
            },
            {
              key: "GetComponent",
              value: function (t) {
                return this._components[t];
              },
            },
            {
              key: "PathByAppendingPath",
              value: function (e) {
                for (
                  var n = new t(), i = 0, r = 0;
                  r < e._components.length && e._components[r].isParent;
                  ++r
                )
                  i++;
                for (var a = 0; a < this._components.length - i; ++a)
                  n._components.push(this._components[a]);
                for (var s = i; s < e._components.length; ++s)
                  n._components.push(e._components[s]);
                return n;
              },
            },
            {
              key: "componentsString",
              get: function () {
                return (
                  null == this._componentsString &&
                    ((this._componentsString = this._components.join(".")),
                    this.isRelative &&
                      (this._componentsString = "." + this._componentsString)),
                  this._componentsString
                );
              },
              set: function (e) {
                if (
                  ((this._components.length = 0),
                  (this._componentsString = e),
                  null != this._componentsString &&
                    "" != this._componentsString)
                ) {
                  "." == this._componentsString[0] &&
                    ((this._isRelative = !0),
                    (this._componentsString =
                      this._componentsString.substring(1)));
                  var n,
                    i = g(this._componentsString.split("."));
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var r = n.value;
                      /^(\-|\+)?([0-9]+|Infinity)$/.test(r)
                        ? this._components.push(new t.Component(parseInt(r)))
                        : this._components.push(new t.Component(r));
                    }
                  } catch (t) {
                    i.e(t);
                  } finally {
                    i.f();
                  }
                }
              },
            },
            {
              key: "toString",
              value: function () {
                return this.componentsString;
              },
            },
            {
              key: "Equals",
              value: function (t) {
                if (null == t) return !1;
                if (t._components.length != this._components.length) return !1;
                if (t.isRelative != this.isRelative) return !1;
                for (var e = 0, n = t._components.length; e < n; e++)
                  if (!t._components[e].Equals(this._components[e])) return !1;
                return !0;
              },
            },
            {
              key: "PathByAppendingComponent",
              value: function (e) {
                var n,
                  i = new t();
                return (
                  (n = i._components).push.apply(n, p(this._components)),
                  i._components.push(e),
                  i
                );
              },
            },
          ],
          [
            {
              key: "self",
              get: function () {
                var e = new t();
                return (e._isRelative = !0), e;
              },
            },
          ]
        ),
        t
      );
    })();
  function C(t, e) {
    return t instanceof e ? E(t) : null;
  }
  function b(t, e) {
    if (t instanceof e) return E(t);
    throw new Error("".concat(t, " is not of type ").concat(e));
  }
  function w(t) {
    return t.hasValidName && t.name ? t : null;
  }
  function _(t) {
    return void 0 === t ? null : t;
  }
  function T(t) {
    return "object" === e(t) && "function" == typeof t.Equals;
  }
  function E(t, e) {
    return t;
  }
  (k.parentId = "^"),
    (function (t) {
      var e = (function () {
        function e(t) {
          n(this, e),
            (this.index = -1),
            (this.name = null),
            "string" == typeof t ? (this.name = t) : (this.index = t);
        }
        return (
          r(
            e,
            [
              {
                key: "isIndex",
                get: function () {
                  return this.index >= 0;
                },
              },
              {
                key: "isParent",
                get: function () {
                  return this.name == t.parentId;
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.isIndex ? this.index.toString() : this.name;
                },
              },
              {
                key: "Equals",
                value: function (t) {
                  return (
                    null != t &&
                    t.isIndex == this.isIndex &&
                    (this.isIndex ? this.index == t.index : this.name == t.name)
                  );
                },
              },
            ],
            [
              {
                key: "ToParent",
                value: function () {
                  return new e(t.parentId);
                },
              },
            ]
          ),
          e
        );
      })();
      t.Component = e;
    })(k || (k = {})),
    (function (t) {
      function e(t, e) {
        if (!t)
          throw (
            (void 0 !== e && console.warn(e),
            console.trace && console.trace(),
            new Error(""))
          );
      }
      (t.AssertType = function (t, n, i) {
        e(t instanceof n, i);
      }),
        (t.Assert = e);
    })(S || (S = {}));
  var O = (function (t) {
    a(i, t);
    var e = v(i);
    function i() {
      return n(this, i), e.apply(this, arguments);
    }
    return r(i);
  })(h(Error));
  function P(t) {
    throw new O("".concat(t, " is null or undefined"));
  }
  var N = (function () {
      function t() {
        n(this, t),
          (this.parent = null),
          (this._debugMetadata = null),
          (this._path = null);
      }
      return (
        r(t, [
          {
            key: "debugMetadata",
            get: function () {
              return null === this._debugMetadata && this.parent
                ? this.parent.debugMetadata
                : this._debugMetadata;
            },
            set: function (t) {
              this._debugMetadata = t;
            },
          },
          {
            key: "ownDebugMetadata",
            get: function () {
              return this._debugMetadata;
            },
          },
          {
            key: "DebugLineNumberOfPath",
            value: function (t) {
              if (null === t) return null;
              var e = this.rootContentContainer;
              if (e) {
                var n = e.ContentAtPath(t).obj;
                if (n) {
                  var i = n.debugMetadata;
                  if (null !== i) return i.startLineNumber;
                }
              }
              return null;
            },
          },
          {
            key: "path",
            get: function () {
              if (null == this._path)
                if (null == this.parent) this._path = new k();
                else {
                  for (var t = [], e = this, n = C(e.parent, K); null !== n; ) {
                    var i = w(e);
                    if (null != i && i.hasValidName) {
                      if (null === i.name) return P("namedChild.name");
                      t.unshift(new k.Component(i.name));
                    } else t.unshift(new k.Component(n.content.indexOf(e)));
                    (e = n), (n = C(n.parent, K));
                  }
                  this._path = new k(t);
                }
              return this._path;
            },
          },
          {
            key: "ResolvePath",
            value: function (t) {
              if (null === t) return P("path");
              if (t.isRelative) {
                var e = C(this, K);
                return (
                  null === e &&
                    (S.Assert(
                      null !== this.parent,
                      "Can't resolve relative path because we don't have a parent"
                    ),
                    (e = C(this.parent, K)),
                    S.Assert(null !== e, "Expected parent to be a container"),
                    S.Assert(t.GetComponent(0).isParent),
                    (t = t.tail)),
                  null === e ? P("nearestContainer") : e.ContentAtPath(t)
                );
              }
              var n = this.rootContentContainer;
              return null === n ? P("contentContainer") : n.ContentAtPath(t);
            },
          },
          {
            key: "ConvertPathToRelative",
            value: function (t) {
              for (
                var e = this.path,
                  n = Math.min(t.length, e.length),
                  i = -1,
                  r = 0;
                r < n;
                ++r
              ) {
                var a = e.GetComponent(r),
                  s = t.GetComponent(r);
                if (!a.Equals(s)) break;
                i = r;
              }
              if (-1 == i) return t;
              for (var o = e.componentCount - 1 - i, u = [], l = 0; l < o; ++l)
                u.push(k.Component.ToParent());
              for (var h = i + 1; h < t.componentCount; ++h)
                u.push(t.GetComponent(h));
              return new k(u, !0);
            },
          },
          {
            key: "CompactPathString",
            value: function (t) {
              var e = null,
                n = null;
              t.isRelative
                ? ((n = t.componentsString),
                  (e = this.path.PathByAppendingPath(t).componentsString))
                : ((n = this.ConvertPathToRelative(t).componentsString),
                  (e = t.componentsString));
              return n.length < e.length ? n : e;
            },
          },
          {
            key: "rootContentContainer",
            get: function () {
              for (var t = this; t.parent; ) t = t.parent;
              return C(t, K);
            },
          },
          {
            key: "Copy",
            value: function () {
              throw Error("Not Implemented: Doesn't support copying");
            },
          },
          {
            key: "SetChild",
            value: function (t, e, n) {
              t[e] && (t[e] = null), (t[e] = n), t[e] && (t[e].parent = this);
            },
          },
          {
            key: "Equals",
            value: function (t) {
              return t === this;
            },
          },
        ]),
        t
      );
    })(),
    A = (function () {
      function t(e) {
        n(this, t), (e = void 0 !== e ? e.toString() : ""), (this.string = e);
      }
      return (
        r(t, [
          {
            key: "Length",
            get: function () {
              return this.string.length;
            },
          },
          {
            key: "Append",
            value: function (t) {
              null !== t && (this.string += t);
            },
          },
          {
            key: "AppendLine",
            value: function (t) {
              void 0 !== t && this.Append(t), (this.string += "\n");
            },
          },
          {
            key: "AppendFormat",
            value: function (t) {
              for (
                var e = arguments.length,
                  n = new Array(e > 1 ? e - 1 : 0),
                  i = 1;
                i < e;
                i++
              )
                n[i - 1] = arguments[i];
              this.string += t.replace(/{(\d+)}/g, function (t, e) {
                return void 0 !== n[e] ? n[e] : t;
              });
            },
          },
          {
            key: "toString",
            value: function () {
              return this.string;
            },
          },
          {
            key: "Clear",
            value: function () {
              this.string = "";
            },
          },
        ]),
        t
      );
    })(),
    I = (function () {
      function t() {
        if (
          (n(this, t),
          (this.originName = null),
          (this.itemName = null),
          void 0 !== arguments[1])
        ) {
          var e = arguments[0],
            i = arguments[1];
          (this.originName = e), (this.itemName = i);
        } else if (arguments[0]) {
          var r = arguments[0].toString().split(".");
          (this.originName = r[0]), (this.itemName = r[1]);
        }
      }
      return (
        r(
          t,
          [
            {
              key: "isNull",
              get: function () {
                return null == this.originName && null == this.itemName;
              },
            },
            {
              key: "fullName",
              get: function () {
                return (
                  (null !== this.originName ? this.originName : "?") +
                  "." +
                  this.itemName
                );
              },
            },
            {
              key: "toString",
              value: function () {
                return this.fullName;
              },
            },
            {
              key: "Equals",
              value: function (e) {
                if (e instanceof t) {
                  var n = e;
                  return (
                    n.itemName == this.itemName &&
                    n.originName == this.originName
                  );
                }
                return !1;
              },
            },
            {
              key: "copy",
              value: function () {
                return new t(this.originName, this.itemName);
              },
            },
            {
              key: "serialized",
              value: function () {
                return JSON.stringify({
                  originName: this.originName,
                  itemName: this.itemName,
                });
              },
            },
          ],
          [
            {
              key: "Null",
              get: function () {
                return new t(null, null);
              },
            },
            {
              key: "fromSerializedKey",
              value: function (e) {
                var n = JSON.parse(e);
                if (!t.isLikeInkListItem(n)) return t.Null;
                var i = n;
                return new t(i.originName, i.itemName);
              },
            },
            {
              key: "isLikeInkListItem",
              value: function (t) {
                return (
                  "object" === e(t) &&
                  !(
                    !t.hasOwnProperty("originName") ||
                    !t.hasOwnProperty("itemName")
                  ) &&
                  ("string" == typeof t.originName ||
                    null === e(t.originName)) &&
                  ("string" == typeof t.itemName || null === e(t.itemName))
                );
              },
            },
          ]
        ),
        t
      );
    })(),
    F = (function (t) {
      a(s, t);
      var i = v(s);
      function s() {
        var t,
          r = arguments;
        if (
          (n(this, s),
          ((t = i.call(this, r[0] instanceof s ? r[0] : [])).origins = null),
          (t._originNames = []),
          arguments[0] instanceof s)
        ) {
          var a = arguments[0],
            o = a.originNames;
          null !== o && (t._originNames = o.slice()),
            null !== a.origins && (t.origins = a.origins.slice());
        } else if ("string" == typeof arguments[0]) {
          var u = arguments[0],
            l = arguments[1];
          if ((t.SetInitialOriginName(u), null === l.listDefinitions))
            return f(t, P("originStory.listDefinitions"));
          var h = l.listDefinitions.TryListGetDefinition(u, null);
          if (!h.exists)
            throw new Error(
              "InkList origin could not be found in story when constructing new list: " +
                u
            );
          if (null === h.result) return f(t, P("def.result"));
          t.origins = [h.result];
        } else if (
          "object" === e(arguments[0]) &&
          arguments[0].hasOwnProperty("Key") &&
          arguments[0].hasOwnProperty("Value")
        ) {
          var c = arguments[0];
          t.Add(c.Key, c.Value);
        }
        return t;
      }
      return (
        r(
          s,
          [
            {
              key: "AddItem",
              value: function (t) {
                if (t instanceof I) {
                  var e = t;
                  if (null == e.originName)
                    return void this.AddItem(e.itemName);
                  if (null === this.origins) return P("this.origins");
                  var n,
                    i = g(this.origins);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var r = n.value;
                      if (r.name == e.originName) {
                        var a = r.TryGetValueForItem(e, 0);
                        if (a.exists) return void this.Add(e, a.result);
                        throw new Error(
                          "Could not add the item " +
                            e +
                            " to this list because it doesn't exist in the original list definition in ink."
                        );
                      }
                    }
                  } catch (t) {
                    i.e(t);
                  } finally {
                    i.f();
                  }
                  throw new Error(
                    "Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found."
                  );
                }
                var s = t,
                  o = null;
                if (null === this.origins) return P("this.origins");
                var u,
                  l = g(this.origins);
                try {
                  for (l.s(); !(u = l.n()).done; ) {
                    var h = u.value;
                    if (null === s) return P("itemName");
                    if (h.ContainsItemWithName(s)) {
                      if (null != o)
                        throw new Error(
                          "Could not add the item " +
                            s +
                            " to this list because it could come from either " +
                            h.name +
                            " or " +
                            o.name
                        );
                      o = h;
                    }
                  }
                } catch (t) {
                  l.e(t);
                } finally {
                  l.f();
                }
                if (null == o)
                  throw new Error(
                    "Could not add the item " +
                      s +
                      " to this list because it isn't known to any list definitions previously associated with this list."
                  );
                var c = new I(o.name, s),
                  f = o.ValueForItem(c);
                this.Add(c, f);
              },
            },
            {
              key: "ContainsItemNamed",
              value: function (t) {
                var e,
                  n = g(this);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var i = d(e.value, 1)[0];
                    if (I.fromSerializedKey(i).itemName == t) return !0;
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return !1;
              },
            },
            {
              key: "ContainsKey",
              value: function (t) {
                return this.has(t.serialized());
              },
            },
            {
              key: "Add",
              value: function (t, e) {
                var n = t.serialized();
                if (this.has(n))
                  throw new Error(
                    "The Map already contains an entry for ".concat(t)
                  );
                this.set(n, e);
              },
            },
            {
              key: "Remove",
              value: function (t) {
                return this.delete(t.serialized());
              },
            },
            {
              key: "Count",
              get: function () {
                return this.size;
              },
            },
            {
              key: "originOfMaxItem",
              get: function () {
                if (null == this.origins) return null;
                var t = this.maxItem.Key.originName,
                  e = null;
                return (
                  this.origins.every(function (n) {
                    return n.name != t || ((e = n), !1);
                  }),
                  e
                );
              },
            },
            {
              key: "originNames",
              get: function () {
                if (this.Count > 0) {
                  null == this._originNames && this.Count > 0
                    ? (this._originNames = [])
                    : (this._originNames || (this._originNames = []),
                      (this._originNames.length = 0));
                  var t,
                    e = g(this);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      var n = d(t.value, 1)[0],
                        i = I.fromSerializedKey(n);
                      if (null === i.originName) return P("item.originName");
                      this._originNames.push(i.originName);
                    }
                  } catch (t) {
                    e.e(t);
                  } finally {
                    e.f();
                  }
                }
                return this._originNames;
              },
            },
            {
              key: "SetInitialOriginName",
              value: function (t) {
                this._originNames = [t];
              },
            },
            {
              key: "SetInitialOriginNames",
              value: function (t) {
                this._originNames = null == t ? null : t.slice();
              },
            },
            {
              key: "maxItem",
              get: function () {
                var t,
                  e = { Key: I.Null, Value: 0 },
                  n = g(this);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var i = d(t.value, 2),
                      r = i[0],
                      a = i[1],
                      s = I.fromSerializedKey(r);
                    (e.Key.isNull || a > e.Value) && (e = { Key: s, Value: a });
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return e;
              },
            },
            {
              key: "minItem",
              get: function () {
                var t,
                  e = { Key: I.Null, Value: 0 },
                  n = g(this);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var i = d(t.value, 2),
                      r = i[0],
                      a = i[1],
                      s = I.fromSerializedKey(r);
                    (e.Key.isNull || a < e.Value) && (e = { Key: s, Value: a });
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return e;
              },
            },
            {
              key: "inverse",
              get: function () {
                var t = new s();
                if (null != this.origins) {
                  var e,
                    n = g(this.origins);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var i,
                        r = g(e.value.items);
                      try {
                        for (r.s(); !(i = r.n()).done; ) {
                          var a = d(i.value, 2),
                            o = a[0],
                            u = a[1],
                            l = I.fromSerializedKey(o);
                          this.ContainsKey(l) || t.Add(l, u);
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                }
                return t;
              },
            },
            {
              key: "all",
              get: function () {
                var t = new s();
                if (null != this.origins) {
                  var e,
                    n = g(this.origins);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var i,
                        r = g(e.value.items);
                      try {
                        for (r.s(); !(i = r.n()).done; ) {
                          var a = d(i.value, 2),
                            o = a[0],
                            u = a[1],
                            l = I.fromSerializedKey(o);
                          t.set(l.serialized(), u);
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                }
                return t;
              },
            },
            {
              key: "Union",
              value: function (t) {
                var e,
                  n = new s(this),
                  i = g(t);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    var r = d(e.value, 2),
                      a = r[0],
                      o = r[1];
                    n.set(a, o);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                return n;
              },
            },
            {
              key: "Intersect",
              value: function (t) {
                var e,
                  n = new s(),
                  i = g(this);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    var r = d(e.value, 2),
                      a = r[0],
                      o = r[1];
                    t.has(a) && n.set(a, o);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                return n;
              },
            },
            {
              key: "HasIntersection",
              value: function (t) {
                var e,
                  n = g(this);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var i = d(e.value, 1)[0];
                    if (t.has(i)) return !0;
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return !1;
              },
            },
            {
              key: "Without",
              value: function (t) {
                var e,
                  n = new s(this),
                  i = g(t);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    var r = d(e.value, 1)[0];
                    n.delete(r);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                return n;
              },
            },
            {
              key: "Contains",
              value: function (t) {
                if ("string" == typeof t) return this.ContainsItemNamed(t);
                var e = t;
                if (0 == e.size || 0 == this.size) return !1;
                var n,
                  i = g(e);
                try {
                  for (i.s(); !(n = i.n()).done; ) {
                    var r = d(n.value, 1)[0];
                    if (!this.has(r)) return !1;
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                return !0;
              },
            },
            {
              key: "GreaterThan",
              value: function (t) {
                return (
                  0 != this.Count &&
                  (0 == t.Count || this.minItem.Value > t.maxItem.Value)
                );
              },
            },
            {
              key: "GreaterThanOrEquals",
              value: function (t) {
                return (
                  0 != this.Count &&
                  (0 == t.Count ||
                    (this.minItem.Value >= t.minItem.Value &&
                      this.maxItem.Value >= t.maxItem.Value))
                );
              },
            },
            {
              key: "LessThan",
              value: function (t) {
                return (
                  0 != t.Count &&
                  (0 == this.Count || this.maxItem.Value < t.minItem.Value)
                );
              },
            },
            {
              key: "LessThanOrEquals",
              value: function (t) {
                return (
                  0 != t.Count &&
                  (0 == this.Count ||
                    (this.maxItem.Value <= t.maxItem.Value &&
                      this.minItem.Value <= t.minItem.Value))
                );
              },
            },
            {
              key: "MaxAsList",
              value: function () {
                return this.Count > 0 ? new s(this.maxItem) : new s();
              },
            },
            {
              key: "MinAsList",
              value: function () {
                return this.Count > 0 ? new s(this.minItem) : new s();
              },
            },
            {
              key: "ListWithSubRange",
              value: function (t, e) {
                if (0 == this.Count) return new s();
                var n = this.orderedItems,
                  i = 0,
                  r = Number.MAX_SAFE_INTEGER;
                Number.isInteger(t)
                  ? (i = t)
                  : t instanceof s && t.Count > 0 && (i = t.minItem.Value),
                  Number.isInteger(e)
                    ? (r = e)
                    : t instanceof s && t.Count > 0 && (r = e.maxItem.Value);
                var a = new s();
                a.SetInitialOriginNames(this.originNames);
                var o,
                  u = g(n);
                try {
                  for (u.s(); !(o = u.n()).done; ) {
                    var l = o.value;
                    l.Value >= i && l.Value <= r && a.Add(l.Key, l.Value);
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
                return a;
              },
            },
            {
              key: "Equals",
              value: function (t) {
                if (t instanceof s == !1) return !1;
                if (t.Count != this.Count) return !1;
                var e,
                  n = g(this);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var i = d(e.value, 1)[0];
                    if (!t.has(i)) return !1;
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return !0;
              },
            },
            {
              key: "orderedItems",
              get: function () {
                var t,
                  e = new Array(),
                  n = g(this);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var i = d(t.value, 2),
                      r = i[0],
                      a = i[1],
                      s = I.fromSerializedKey(r);
                    e.push({ Key: s, Value: a });
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return (
                  e.sort(function (t, e) {
                    return null === t.Key.originName
                      ? P("x.Key.originName")
                      : null === e.Key.originName
                      ? P("y.Key.originName")
                      : t.Value == e.Value
                      ? t.Key.originName.localeCompare(e.Key.originName)
                      : t.Value < e.Value
                      ? -1
                      : t.Value > e.Value
                      ? 1
                      : 0;
                  }),
                  e
                );
              },
            },
            {
              key: "toString",
              value: function () {
                for (
                  var t = this.orderedItems, e = new A(), n = 0;
                  n < t.length;
                  n++
                ) {
                  n > 0 && e.Append(", ");
                  var i = t[n].Key;
                  if (null === i.itemName) return P("item.itemName");
                  e.Append(i.itemName);
                }
                return e.toString();
              },
            },
            {
              key: "valueOf",
              value: function () {
                return NaN;
              },
            },
          ],
          [
            {
              key: "FromString",
              value: function (t, e) {
                var n,
                  i =
                    null === (n = e.listDefinitions) || void 0 === n
                      ? void 0
                      : n.FindSingleItemListWithName(t);
                if (i)
                  return null === i.value
                    ? P("listValue.value")
                    : new s(i.value);
                throw new Error(
                  "Could not find the InkListItem from the string '" +
                    t +
                    "' to create an InkList because it doesn't exist in the original list definition in ink."
                );
              },
            },
          ]
        ),
        s
      );
    })(h(Map)),
    x = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        var r;
        return (
          n(this, i),
          ((r = e.call(this, t)).useEndLineNumber = !1),
          (r.message = t),
          (r.name = "StoryException"),
          r
        );
      }
      return r(i);
    })(h(Error));
  function W(t, e, n) {
    if (null === t) return { result: n, exists: !1 };
    var i = t.get(e);
    return void 0 === i ? { result: n, exists: !1 } : { result: i, exists: !0 };
  }
  var V,
    L = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        return n(this, i), e.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "Copy",
              value: function () {
                return b(i.Create(this.valueObject), N);
              },
            },
            {
              key: "BadCastException",
              value: function (t) {
                return new x(
                  "Can't cast " +
                    this.valueObject +
                    " from " +
                    this.valueType +
                    " to " +
                    t
                );
              },
            },
          ],
          [
            {
              key: "Create",
              value: function (t, e) {
                if (e) {
                  if (e === V.Int && Number.isInteger(Number(t)))
                    return new D(Number(t));
                  if (e === V.Float && !isNaN(t)) return new B(Number(t));
                }
                return "boolean" == typeof t
                  ? new R(Boolean(t))
                  : "string" == typeof t
                  ? new G(String(t))
                  : Number.isInteger(Number(t))
                  ? new D(Number(t))
                  : isNaN(t)
                  ? t instanceof k
                    ? new M(b(t, k))
                    : t instanceof F
                    ? new U(b(t, F))
                    : null
                  : new B(Number(t));
              },
            },
          ]
        ),
        i
      );
    })(N),
    j = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        var r;
        return n(this, i), ((r = e.call(this)).value = t), r;
      }
      return (
        r(i, [
          {
            key: "valueObject",
            get: function () {
              return this.value;
            },
          },
          {
            key: "toString",
            value: function () {
              return null === this.value
                ? P("Value.value")
                : this.value.toString();
            },
          },
        ]),
        i
      );
    })(L),
    R = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        return n(this, i), e.call(this, t || !1);
      }
      return (
        r(i, [
          {
            key: "isTruthy",
            get: function () {
              return Boolean(this.value);
            },
          },
          {
            key: "valueType",
            get: function () {
              return V.Bool;
            },
          },
          {
            key: "Cast",
            value: function (t) {
              if (null === this.value) return P("Value.value");
              if (t == this.valueType) return this;
              if (t == V.Int) return new D(this.value ? 1 : 0);
              if (t == V.Float) return new B(this.value ? 1 : 0);
              if (t == V.String) return new G(this.value ? "true" : "false");
              throw this.BadCastException(t);
            },
          },
          {
            key: "toString",
            value: function () {
              return this.value ? "true" : "false";
            },
          },
        ]),
        i
      );
    })(j),
    D = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        return n(this, i), e.call(this, t || 0);
      }
      return (
        r(i, [
          {
            key: "isTruthy",
            get: function () {
              return 0 != this.value;
            },
          },
          {
            key: "valueType",
            get: function () {
              return V.Int;
            },
          },
          {
            key: "Cast",
            value: function (t) {
              if (null === this.value) return P("Value.value");
              if (t == this.valueType) return this;
              if (t == V.Bool) return new R(0 !== this.value);
              if (t == V.Float) return new B(this.value);
              if (t == V.String) return new G("" + this.value);
              throw this.BadCastException(t);
            },
          },
        ]),
        i
      );
    })(j),
    B = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        return n(this, i), e.call(this, t || 0);
      }
      return (
        r(i, [
          {
            key: "isTruthy",
            get: function () {
              return 0 != this.value;
            },
          },
          {
            key: "valueType",
            get: function () {
              return V.Float;
            },
          },
          {
            key: "Cast",
            value: function (t) {
              if (null === this.value) return P("Value.value");
              if (t == this.valueType) return this;
              if (t == V.Bool) return new R(0 !== this.value);
              if (t == V.Int) return new D(this.value);
              if (t == V.String) return new G("" + this.value);
              throw this.BadCastException(t);
            },
          },
        ]),
        i
      );
    })(j),
    G = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        var r;
        return (
          n(this, i),
          ((r = e.call(this, t || ""))._isNewline = "\n" == r.value),
          (r._isInlineWhitespace = !0),
          null === r.value
            ? f(r, P("Value.value"))
            : (r.value.length > 0 &&
                r.value.split("").every(function (t) {
                  return (
                    " " == t || "\t" == t || ((r._isInlineWhitespace = !1), !1)
                  );
                }),
              r)
        );
      }
      return (
        r(i, [
          {
            key: "valueType",
            get: function () {
              return V.String;
            },
          },
          {
            key: "isTruthy",
            get: function () {
              return null === this.value
                ? P("Value.value")
                : this.value.length > 0;
            },
          },
          {
            key: "isNewline",
            get: function () {
              return this._isNewline;
            },
          },
          {
            key: "isInlineWhitespace",
            get: function () {
              return this._isInlineWhitespace;
            },
          },
          {
            key: "isNonWhitespace",
            get: function () {
              return !this.isNewline && !this.isInlineWhitespace;
            },
          },
          {
            key: "Cast",
            value: function (t) {
              if (t == this.valueType) return this;
              if (t == V.Int) {
                var e = (function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n = parseInt(t);
                  return Number.isNaN(n)
                    ? { result: e, exists: !1 }
                    : { result: n, exists: !0 };
                })(this.value);
                if (e.exists) return new D(e.result);
                throw this.BadCastException(t);
              }
              if (t == V.Float) {
                var n = (function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n = parseFloat(t);
                  return Number.isNaN(n)
                    ? { result: e, exists: !1 }
                    : { result: n, exists: !0 };
                })(this.value);
                if (n.exists) return new B(n.result);
                throw this.BadCastException(t);
              }
              throw this.BadCastException(t);
            },
          },
        ]),
        i
      );
    })(j),
    M = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return n(this, i), e.call(this, t);
      }
      return (
        r(i, [
          {
            key: "valueType",
            get: function () {
              return V.DivertTarget;
            },
          },
          {
            key: "targetPath",
            get: function () {
              return null === this.value ? P("Value.value") : this.value;
            },
            set: function (t) {
              this.value = t;
            },
          },
          {
            key: "isTruthy",
            get: function () {
              throw new Error(
                "Shouldn't be checking the truthiness of a divert target"
              );
            },
          },
          {
            key: "Cast",
            value: function (t) {
              if (t == this.valueType) return this;
              throw this.BadCastException(t);
            },
          },
          {
            key: "toString",
            value: function () {
              return "DivertTargetValue(" + this.targetPath + ")";
            },
          },
        ]),
        i
      );
    })(j),
    J = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        var r,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return n(this, i), ((r = e.call(this, t))._contextIndex = a), r;
      }
      return (
        r(i, [
          {
            key: "contextIndex",
            get: function () {
              return this._contextIndex;
            },
            set: function (t) {
              this._contextIndex = t;
            },
          },
          {
            key: "variableName",
            get: function () {
              return null === this.value ? P("Value.value") : this.value;
            },
            set: function (t) {
              this.value = t;
            },
          },
          {
            key: "valueType",
            get: function () {
              return V.VariablePointer;
            },
          },
          {
            key: "isTruthy",
            get: function () {
              throw new Error(
                "Shouldn't be checking the truthiness of a variable pointer"
              );
            },
          },
          {
            key: "Cast",
            value: function (t) {
              if (t == this.valueType) return this;
              throw this.BadCastException(t);
            },
          },
          {
            key: "toString",
            value: function () {
              return "VariablePointerValue(" + this.variableName + ")";
            },
          },
          {
            key: "Copy",
            value: function () {
              return new i(this.variableName, this.contextIndex);
            },
          },
        ]),
        i
      );
    })(j),
    U = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t, r) {
        var a;
        return (
          n(this, i),
          (a = e.call(this, null)),
          t || r
            ? t instanceof F
              ? (a.value = new F(t))
              : t instanceof I &&
                "number" == typeof r &&
                (a.value = new F({ Key: t, Value: r }))
            : (a.value = new F()),
          a
        );
      }
      return (
        r(
          i,
          [
            {
              key: "isTruthy",
              get: function () {
                return null === this.value
                  ? P("this.value")
                  : this.value.Count > 0;
              },
            },
            {
              key: "valueType",
              get: function () {
                return V.List;
              },
            },
            {
              key: "Cast",
              value: function (t) {
                if (null === this.value) return P("Value.value");
                if (t == V.Int) {
                  var e = this.value.maxItem;
                  return e.Key.isNull ? new D(0) : new D(e.Value);
                }
                if (t == V.Float) {
                  var n = this.value.maxItem;
                  return n.Key.isNull ? new B(0) : new B(n.Value);
                }
                if (t == V.String) {
                  var i = this.value.maxItem;
                  return i.Key.isNull ? new G("") : new G(i.Key.toString());
                }
                if (t == this.valueType) return this;
                throw this.BadCastException(t);
              },
            },
          ],
          [
            {
              key: "RetainListOriginsForAssignment",
              value: function (t, e) {
                var n = C(t, i),
                  r = C(e, i);
                return r && null === r.value
                  ? P("newList.value")
                  : n && null === n.value
                  ? P("oldList.value")
                  : void (
                      n &&
                      r &&
                      0 == r.value.Count &&
                      r.value.SetInitialOriginNames(n.value.originNames)
                    );
              },
            },
          ]
        ),
        i
      );
    })(j);
  !(function (t) {
    (t[(t.Bool = -1)] = "Bool"),
      (t[(t.Int = 0)] = "Int"),
      (t[(t.Float = 1)] = "Float"),
      (t[(t.List = 2)] = "List"),
      (t[(t.String = 3)] = "String"),
      (t[(t.DivertTarget = 4)] = "DivertTarget"),
      (t[(t.VariablePointer = 5)] = "VariablePointer");
  })(V || (V = {}));
  var q = (function () {
      function t() {
        n(this, t), (this.obj = null), (this.approximate = !1);
      }
      return (
        r(t, [
          {
            key: "correctObj",
            get: function () {
              return this.approximate ? null : this.obj;
            },
          },
          {
            key: "container",
            get: function () {
              return this.obj instanceof K ? this.obj : null;
            },
          },
          {
            key: "copy",
            value: function () {
              var e = new t();
              return (e.obj = this.obj), (e.approximate = this.approximate), e;
            },
          },
        ]),
        t
      );
    })(),
    K = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t;
        return (
          n(this, i),
          ((t = e.apply(this, arguments)).name = null),
          (t._content = []),
          (t.namedContent = new Map()),
          (t.visitsShouldBeCounted = !1),
          (t.turnIndexShouldBeCounted = !1),
          (t.countingAtStartOnly = !1),
          (t._pathToFirstLeafContent = null),
          t
        );
      }
      return (
        r(i, [
          {
            key: "hasValidName",
            get: function () {
              return null != this.name && this.name.length > 0;
            },
          },
          {
            key: "content",
            get: function () {
              return this._content;
            },
            set: function (t) {
              this.AddContent(t);
            },
          },
          {
            key: "namedOnlyContent",
            get: function () {
              var t,
                e = new Map(),
                n = g(this.namedContent);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var i = d(t.value, 2),
                    r = i[0],
                    a = b(i[1], N);
                  e.set(r, a);
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              var s,
                o = g(this.content);
              try {
                for (o.s(); !(s = o.n()).done; ) {
                  var u = w(s.value);
                  null != u && u.hasValidName && e.delete(u.name);
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
              return 0 == e.size && (e = null), e;
            },
            set: function (t) {
              var e = this.namedOnlyContent;
              if (null != e) {
                var n,
                  i = g(e);
                try {
                  for (i.s(); !(n = i.n()).done; ) {
                    var r = d(n.value, 1)[0];
                    this.namedContent.delete(r);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
              }
              if (null != t) {
                var a,
                  s = g(t);
                try {
                  for (s.s(); !(a = s.n()).done; ) {
                    var o = w(d(a.value, 2)[1]);
                    null != o && this.AddToNamedContentOnly(o);
                  }
                } catch (t) {
                  s.e(t);
                } finally {
                  s.f();
                }
              }
            },
          },
          {
            key: "countFlags",
            get: function () {
              var t = 0;
              return (
                this.visitsShouldBeCounted && (t |= i.CountFlags.Visits),
                this.turnIndexShouldBeCounted && (t |= i.CountFlags.Turns),
                this.countingAtStartOnly && (t |= i.CountFlags.CountStartOnly),
                t == i.CountFlags.CountStartOnly && (t = 0),
                t
              );
            },
            set: function (t) {
              var e = t;
              (e & i.CountFlags.Visits) > 0 &&
                (this.visitsShouldBeCounted = !0),
                (e & i.CountFlags.Turns) > 0 &&
                  (this.turnIndexShouldBeCounted = !0),
                (e & i.CountFlags.CountStartOnly) > 0 &&
                  (this.countingAtStartOnly = !0);
            },
          },
          {
            key: "pathToFirstLeafContent",
            get: function () {
              return (
                null == this._pathToFirstLeafContent &&
                  (this._pathToFirstLeafContent = this.path.PathByAppendingPath(
                    this.internalPathToFirstLeafContent
                  )),
                this._pathToFirstLeafContent
              );
            },
          },
          {
            key: "internalPathToFirstLeafContent",
            get: function () {
              for (var t = [], e = this; e instanceof i; )
                e.content.length > 0 &&
                  (t.push(new k.Component(0)), (e = e.content[0]));
              return new k(t);
            },
          },
          {
            key: "AddContent",
            value: function (t) {
              if (t instanceof Array) {
                var e,
                  n = g(t);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var i = e.value;
                    this.AddContent(i);
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
              } else {
                var r = t;
                if ((this._content.push(r), r.parent))
                  throw new Error("content is already in " + r.parent);
                (r.parent = this), this.TryAddNamedContent(r);
              }
            },
          },
          {
            key: "TryAddNamedContent",
            value: function (t) {
              var e = w(t);
              null != e && e.hasValidName && this.AddToNamedContentOnly(e);
            },
          },
          {
            key: "AddToNamedContentOnly",
            value: function (t) {
              if (
                (S.AssertType(
                  t,
                  N,
                  "Can only add Runtime.Objects to a Runtime.Container"
                ),
                (b(t, N).parent = this),
                null === t.name)
              )
                return P("namedContentObj.name");
              this.namedContent.set(t.name, t);
            },
          },
          {
            key: "ContentAtPath",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : -1;
              -1 == n && (n = t.length);
              var r = new q();
              r.approximate = !1;
              for (var a = this, s = this, o = e; o < n; ++o) {
                var u = t.GetComponent(o);
                if (null == a) {
                  r.approximate = !0;
                  break;
                }
                var l = a.ContentWithPathComponent(u);
                if (null == l) {
                  r.approximate = !0;
                  break;
                }
                (s = l), (a = C(l, i));
              }
              return (r.obj = s), r;
            },
          },
          {
            key: "InsertContent",
            value: function (t, e) {
              if ((this.content.splice(e, 0, t), t.parent))
                throw new Error("content is already in " + t.parent);
              (t.parent = this), this.TryAddNamedContent(t);
            },
          },
          {
            key: "AddContentsOfContainer",
            value: function (t) {
              var e;
              (e = this.content).push.apply(e, p(t.content));
              var n,
                i = g(t.content);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = n.value;
                  (r.parent = this), this.TryAddNamedContent(r);
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
            },
          },
          {
            key: "ContentWithPathComponent",
            value: function (t) {
              if (t.isIndex)
                return t.index >= 0 && t.index < this.content.length
                  ? this.content[t.index]
                  : null;
              if (t.isParent) return this.parent;
              if (null === t.name) return P("component.name");
              var e = W(this.namedContent, t.name, null);
              return e.exists ? b(e.result, N) : null;
            },
          },
          {
            key: "BuildStringOfHierarchy",
            value: function () {
              var t;
              if (0 == arguments.length)
                return (
                  (t = new A()),
                  this.BuildStringOfHierarchy(t, 0, null),
                  t.toString()
                );
              t = arguments[0];
              var e = arguments[1],
                n = arguments[2];
              function r() {
                for (var n = 0; n < 4 * e; ++n) t.Append(" ");
              }
              r(),
                t.Append("["),
                this.hasValidName && t.AppendFormat(" ({0})", this.name),
                this == n && t.Append("  <---"),
                t.AppendLine(),
                e++;
              for (var a = 0; a < this.content.length; ++a) {
                var s = this.content[a];
                if (s instanceof i) s.BuildStringOfHierarchy(t, e, n);
                else
                  r(),
                    s instanceof G
                      ? (t.Append('"'),
                        t.Append(s.toString().replace("\n", "\\n")),
                        t.Append('"'))
                      : t.Append(s.toString());
                a != this.content.length - 1 && t.Append(","),
                  s instanceof i || s != n || t.Append("  <---"),
                  t.AppendLine();
              }
              var o,
                u = new Map(),
                l = g(this.namedContent);
              try {
                for (l.s(); !(o = l.n()).done; ) {
                  var h = d(o.value, 2),
                    c = h[0],
                    f = h[1];
                  this.content.indexOf(b(f, N)) >= 0 || u.set(c, f);
                }
              } catch (t) {
                l.e(t);
              } finally {
                l.f();
              }
              if (u.size > 0) {
                r(), t.AppendLine("-- named: --");
                var v,
                  p = g(u);
                try {
                  for (p.s(); !(v = p.n()).done; ) {
                    var y = d(v.value, 2)[1];
                    S.AssertType(y, i, "Can only print out named Containers"),
                      y.BuildStringOfHierarchy(t, e, n),
                      t.AppendLine();
                  }
                } catch (t) {
                  p.e(t);
                } finally {
                  p.f();
                }
              }
              e--, r(), t.Append("]");
            },
          },
        ]),
        i
      );
    })(N);
  !(function (t) {
    var e;
    ((e = t.CountFlags || (t.CountFlags = {}))[(e.Visits = 1)] = "Visits"),
      (e[(e.Turns = 2)] = "Turns"),
      (e[(e.CountStartOnly = 4)] = "CountStartOnly");
  })(K || (K = {}));
  var z,
    H = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        return n(this, i), e.apply(this, arguments);
      }
      return (
        r(i, [
          {
            key: "toString",
            value: function () {
              return "Glue";
            },
          },
        ]),
        i
      );
    })(N),
    X = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t,
          r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.CommandType.NotSet;
        return n(this, i), ((t = e.call(this))._commandType = r), t;
      }
      return (
        r(
          i,
          [
            {
              key: "commandType",
              get: function () {
                return this._commandType;
              },
            },
            {
              key: "Copy",
              value: function () {
                return new i(this.commandType);
              },
            },
            {
              key: "toString",
              value: function () {
                return this.commandType.toString();
              },
            },
          ],
          [
            {
              key: "EvalStart",
              value: function () {
                return new i(i.CommandType.EvalStart);
              },
            },
            {
              key: "EvalOutput",
              value: function () {
                return new i(i.CommandType.EvalOutput);
              },
            },
            {
              key: "EvalEnd",
              value: function () {
                return new i(i.CommandType.EvalEnd);
              },
            },
            {
              key: "Duplicate",
              value: function () {
                return new i(i.CommandType.Duplicate);
              },
            },
            {
              key: "PopEvaluatedValue",
              value: function () {
                return new i(i.CommandType.PopEvaluatedValue);
              },
            },
            {
              key: "PopFunction",
              value: function () {
                return new i(i.CommandType.PopFunction);
              },
            },
            {
              key: "PopTunnel",
              value: function () {
                return new i(i.CommandType.PopTunnel);
              },
            },
            {
              key: "BeginString",
              value: function () {
                return new i(i.CommandType.BeginString);
              },
            },
            {
              key: "EndString",
              value: function () {
                return new i(i.CommandType.EndString);
              },
            },
            {
              key: "NoOp",
              value: function () {
                return new i(i.CommandType.NoOp);
              },
            },
            {
              key: "ChoiceCount",
              value: function () {
                return new i(i.CommandType.ChoiceCount);
              },
            },
            {
              key: "Turns",
              value: function () {
                return new i(i.CommandType.Turns);
              },
            },
            {
              key: "TurnsSince",
              value: function () {
                return new i(i.CommandType.TurnsSince);
              },
            },
            {
              key: "ReadCount",
              value: function () {
                return new i(i.CommandType.ReadCount);
              },
            },
            {
              key: "Random",
              value: function () {
                return new i(i.CommandType.Random);
              },
            },
            {
              key: "SeedRandom",
              value: function () {
                return new i(i.CommandType.SeedRandom);
              },
            },
            {
              key: "VisitIndex",
              value: function () {
                return new i(i.CommandType.VisitIndex);
              },
            },
            {
              key: "SequenceShuffleIndex",
              value: function () {
                return new i(i.CommandType.SequenceShuffleIndex);
              },
            },
            {
              key: "StartThread",
              value: function () {
                return new i(i.CommandType.StartThread);
              },
            },
            {
              key: "Done",
              value: function () {
                return new i(i.CommandType.Done);
              },
            },
            {
              key: "End",
              value: function () {
                return new i(i.CommandType.End);
              },
            },
            {
              key: "ListFromInt",
              value: function () {
                return new i(i.CommandType.ListFromInt);
              },
            },
            {
              key: "ListRange",
              value: function () {
                return new i(i.CommandType.ListRange);
              },
            },
            {
              key: "ListRandom",
              value: function () {
                return new i(i.CommandType.ListRandom);
              },
            },
            {
              key: "BeginTag",
              value: function () {
                return new i(i.CommandType.BeginTag);
              },
            },
            {
              key: "EndTag",
              value: function () {
                return new i(i.CommandType.EndTag);
              },
            },
          ]
        ),
        i
      );
    })(N);
  !(function (t) {
    var e;
    ((e = t.CommandType || (t.CommandType = {}))[(e.NotSet = -1)] = "NotSet"),
      (e[(e.EvalStart = 0)] = "EvalStart"),
      (e[(e.EvalOutput = 1)] = "EvalOutput"),
      (e[(e.EvalEnd = 2)] = "EvalEnd"),
      (e[(e.Duplicate = 3)] = "Duplicate"),
      (e[(e.PopEvaluatedValue = 4)] = "PopEvaluatedValue"),
      (e[(e.PopFunction = 5)] = "PopFunction"),
      (e[(e.PopTunnel = 6)] = "PopTunnel"),
      (e[(e.BeginString = 7)] = "BeginString"),
      (e[(e.EndString = 8)] = "EndString"),
      (e[(e.NoOp = 9)] = "NoOp"),
      (e[(e.ChoiceCount = 10)] = "ChoiceCount"),
      (e[(e.Turns = 11)] = "Turns"),
      (e[(e.TurnsSince = 12)] = "TurnsSince"),
      (e[(e.ReadCount = 13)] = "ReadCount"),
      (e[(e.Random = 14)] = "Random"),
      (e[(e.SeedRandom = 15)] = "SeedRandom"),
      (e[(e.VisitIndex = 16)] = "VisitIndex"),
      (e[(e.SequenceShuffleIndex = 17)] = "SequenceShuffleIndex"),
      (e[(e.StartThread = 18)] = "StartThread"),
      (e[(e.Done = 19)] = "Done"),
      (e[(e.End = 20)] = "End"),
      (e[(e.ListFromInt = 21)] = "ListFromInt"),
      (e[(e.ListRange = 22)] = "ListRange"),
      (e[(e.ListRandom = 23)] = "ListRandom"),
      (e[(e.BeginTag = 24)] = "BeginTag"),
      (e[(e.EndTag = 25)] = "EndTag"),
      (e[(e.TOTAL_VALUES = 26)] = "TOTAL_VALUES");
  })(X || (X = {})),
    (function (t) {
      (t[(t.Tunnel = 0)] = "Tunnel"),
        (t[(t.Function = 1)] = "Function"),
        (t[(t.FunctionEvaluationFromGame = 2)] = "FunctionEvaluationFromGame");
    })(z || (z = {}));
  var $ = (function () {
      function t() {
        n(this, t),
          (this.container = null),
          (this.index = -1),
          2 === arguments.length &&
            ((this.container = arguments[0]), (this.index = arguments[1]));
      }
      return (
        r(
          t,
          [
            {
              key: "Resolve",
              value: function () {
                return this.index < 0
                  ? this.container
                  : null == this.container
                  ? null
                  : 0 == this.container.content.length
                  ? this.container
                  : this.index >= this.container.content.length
                  ? null
                  : this.container.content[this.index];
              },
            },
            {
              key: "isNull",
              get: function () {
                return null == this.container;
              },
            },
            {
              key: "path",
              get: function () {
                return this.isNull
                  ? null
                  : this.index >= 0
                  ? this.container.path.PathByAppendingComponent(
                      new k.Component(this.index)
                    )
                  : this.container.path;
              },
            },
            {
              key: "toString",
              value: function () {
                return this.container
                  ? "Ink Pointer -> " +
                      this.container.path.toString() +
                      " -- index " +
                      this.index
                  : "Ink Pointer (null)";
              },
            },
            {
              key: "copy",
              value: function () {
                return new t(this.container, this.index);
              },
            },
          ],
          [
            {
              key: "StartOf",
              value: function (e) {
                return new t(e, 0);
              },
            },
            {
              key: "Null",
              get: function () {
                return new t(null, -1);
              },
            },
          ]
        ),
        t
      );
    })(),
    Y = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        var r;
        return (
          n(this, i),
          ((r = e.call(this))._targetPath = null),
          (r._targetPointer = $.Null),
          (r.variableDivertName = null),
          (r.pushesToStack = !1),
          (r.stackPushType = 0),
          (r.isExternal = !1),
          (r.externalArgs = 0),
          (r.isConditional = !1),
          (r.pushesToStack = !1),
          void 0 !== t && ((r.pushesToStack = !0), (r.stackPushType = t)),
          r
        );
      }
      return (
        r(i, [
          {
            key: "targetPath",
            get: function () {
              if (null != this._targetPath && this._targetPath.isRelative) {
                var t = this.targetPointer.Resolve();
                t && (this._targetPath = t.path);
              }
              return this._targetPath;
            },
            set: function (t) {
              (this._targetPath = t), (this._targetPointer = $.Null);
            },
          },
          {
            key: "targetPointer",
            get: function () {
              if (this._targetPointer.isNull) {
                var t = this.ResolvePath(this._targetPath).obj;
                if (null === this._targetPath) return P("this._targetPath");
                if (null === this._targetPath.lastComponent)
                  return P("this._targetPath.lastComponent");
                if (this._targetPath.lastComponent.isIndex) {
                  if (null === t) return P("targetObj");
                  (this._targetPointer.container =
                    t.parent instanceof K ? t.parent : null),
                    (this._targetPointer.index =
                      this._targetPath.lastComponent.index);
                } else
                  this._targetPointer = $.StartOf(t instanceof K ? t : null);
              }
              return this._targetPointer.copy();
            },
          },
          {
            key: "targetPathString",
            get: function () {
              return null == this.targetPath
                ? null
                : this.CompactPathString(this.targetPath);
            },
            set: function (t) {
              this.targetPath = null == t ? null : new k(t);
            },
          },
          {
            key: "hasVariableTarget",
            get: function () {
              return null != this.variableDivertName;
            },
          },
          {
            key: "Equals",
            value: function (t) {
              var e = t;
              return (
                e instanceof i &&
                this.hasVariableTarget == e.hasVariableTarget &&
                (this.hasVariableTarget
                  ? this.variableDivertName == e.variableDivertName
                  : null === this.targetPath
                  ? P("this.targetPath")
                  : this.targetPath.Equals(e.targetPath))
              );
            },
          },
          {
            key: "toString",
            value: function () {
              if (this.hasVariableTarget)
                return "Divert(variable: " + this.variableDivertName + ")";
              if (null == this.targetPath) return "Divert(null)";
              var t = new A(),
                e = this.targetPath.toString();
              return (
                t.Append("Divert"),
                this.isConditional && t.Append("?"),
                this.pushesToStack &&
                  (this.stackPushType == z.Function
                    ? t.Append(" function")
                    : t.Append(" tunnel")),
                t.Append(" -> "),
                t.Append(this.targetPathString),
                t.Append(" ("),
                t.Append(e),
                t.Append(")"),
                t.toString()
              );
            },
          },
        ]),
        i
      );
    })(N),
    Q = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t,
          r =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (
          n(this, i),
          ((t = e.call(this))._pathOnChoice = null),
          (t.hasCondition = !1),
          (t.hasStartContent = !1),
          (t.hasChoiceOnlyContent = !1),
          (t.isInvisibleDefault = !1),
          (t.onceOnly = !0),
          (t.onceOnly = r),
          t
        );
      }
      return (
        r(i, [
          {
            key: "pathOnChoice",
            get: function () {
              if (null != this._pathOnChoice && this._pathOnChoice.isRelative) {
                var t = this.choiceTarget;
                t && (this._pathOnChoice = t.path);
              }
              return this._pathOnChoice;
            },
            set: function (t) {
              this._pathOnChoice = t;
            },
          },
          {
            key: "choiceTarget",
            get: function () {
              return null === this._pathOnChoice
                ? P("ChoicePoint._pathOnChoice")
                : this.ResolvePath(this._pathOnChoice).container;
            },
          },
          {
            key: "pathStringOnChoice",
            get: function () {
              return null === this.pathOnChoice
                ? P("ChoicePoint.pathOnChoice")
                : this.CompactPathString(this.pathOnChoice);
            },
            set: function (t) {
              this.pathOnChoice = new k(t);
            },
          },
          {
            key: "flags",
            get: function () {
              var t = 0;
              return (
                this.hasCondition && (t |= 1),
                this.hasStartContent && (t |= 2),
                this.hasChoiceOnlyContent && (t |= 4),
                this.isInvisibleDefault && (t |= 8),
                this.onceOnly && (t |= 16),
                t
              );
            },
            set: function (t) {
              (this.hasCondition = (1 & t) > 0),
                (this.hasStartContent = (2 & t) > 0),
                (this.hasChoiceOnlyContent = (4 & t) > 0),
                (this.isInvisibleDefault = (8 & t) > 0),
                (this.onceOnly = (16 & t) > 0);
            },
          },
          {
            key: "toString",
            value: function () {
              return null === this.pathOnChoice
                ? P("ChoicePoint.pathOnChoice")
                : "Choice: -> " + this.pathOnChoice.toString();
            },
          },
        ]),
        i
      );
    })(N),
    Z = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t,
          r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
        return (
          n(this, i), ((t = e.call(this)).pathForCount = null), (t.name = r), t
        );
      }
      return (
        r(i, [
          {
            key: "containerForCount",
            get: function () {
              return null === this.pathForCount
                ? null
                : this.ResolvePath(this.pathForCount).container;
            },
          },
          {
            key: "pathStringForCount",
            get: function () {
              return null === this.pathForCount
                ? null
                : this.CompactPathString(this.pathForCount);
            },
            set: function (t) {
              this.pathForCount = null === t ? null : new k(t);
            },
          },
          {
            key: "toString",
            value: function () {
              return null != this.name
                ? "var(" + this.name + ")"
                : "read_count(" + this.pathStringForCount + ")";
            },
          },
        ]),
        i
      );
    })(N),
    tt = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t, r) {
        var a;
        return (
          n(this, i),
          ((a = e.call(this)).variableName = t || null),
          (a.isNewDeclaration = !!r),
          (a.isGlobal = !1),
          a
        );
      }
      return (
        r(i, [
          {
            key: "toString",
            value: function () {
              return "VarAssign to " + this.variableName;
            },
          },
        ]),
        i
      );
    })(N),
    et = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        return n(this, i), e.apply(this, arguments);
      }
      return r(i);
    })(N),
    nt = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t;
        if (
          (n(this, i),
          ((t = e.call(this))._name = null),
          (t._numberOfParameters = 0),
          (t._prototype = null),
          (t._isPrototype = !1),
          (t._operationFuncs = null),
          0 === arguments.length)
        )
          i.GenerateNativeFunctionsIfNecessary();
        else if (1 === arguments.length) {
          var r = arguments[0];
          i.GenerateNativeFunctionsIfNecessary(), (t.name = r);
        } else if (2 === arguments.length) {
          var a = arguments[0],
            s = arguments[1];
          (t._isPrototype = !0), (t.name = a), (t.numberOfParameters = s);
        }
        return t;
      }
      return (
        r(
          i,
          [
            {
              key: "name",
              get: function () {
                return null === this._name
                  ? P("NativeFunctionCall._name")
                  : this._name;
              },
              set: function (t) {
                (this._name = t),
                  this._isPrototype ||
                    (null === i._nativeFunctions
                      ? P("NativeFunctionCall._nativeFunctions")
                      : (this._prototype =
                          i._nativeFunctions.get(this._name) || null));
              },
            },
            {
              key: "numberOfParameters",
              get: function () {
                return this._prototype
                  ? this._prototype.numberOfParameters
                  : this._numberOfParameters;
              },
              set: function (t) {
                this._numberOfParameters = t;
              },
            },
            {
              key: "Call",
              value: function (t) {
                if (this._prototype) return this._prototype.Call(t);
                if (this.numberOfParameters != t.length)
                  throw new Error("Unexpected number of parameters");
                var e,
                  n = !1,
                  i = g(t);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    var r = e.value;
                    if (r instanceof et)
                      throw new x(
                        'Attempting to perform operation on a void value. Did you forget to "return" a value from a function you called here?'
                      );
                    r instanceof U && (n = !0);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                if (2 == t.length && n) return this.CallBinaryListOperation(t);
                var a = this.CoerceValuesToSingleType(t),
                  s = a[0].valueType;
                return s == V.Int ||
                  s == V.Float ||
                  s == V.String ||
                  s == V.DivertTarget ||
                  s == V.List
                  ? this.CallType(a)
                  : null;
              },
            },
            {
              key: "CallType",
              value: function (t) {
                var e = b(t[0], j),
                  n = e.valueType,
                  r = e,
                  a = t.length;
                if (2 == a || 1 == a) {
                  if (null === this._operationFuncs)
                    return P("NativeFunctionCall._operationFuncs");
                  var s = this._operationFuncs.get(n);
                  if (!s) {
                    var o = V[n];
                    throw new x(
                      "Cannot perform operation " + this.name + " on " + o
                    );
                  }
                  if (2 == a) {
                    var u = b(t[1], j),
                      l = s;
                    if (null === r.value || null === u.value)
                      return P("NativeFunctionCall.Call BinaryOp values");
                    var h = l(r.value, u.value);
                    return j.Create(h);
                  }
                  var c = s;
                  if (null === r.value)
                    return P("NativeFunctionCall.Call UnaryOp value");
                  var f = c(r.value);
                  return this.name === i.Int
                    ? j.Create(f, V.Int)
                    : this.name === i.Float
                    ? j.Create(f, V.Float)
                    : j.Create(f, e.valueType);
                }
                throw new Error(
                  "Unexpected number of parameters to NativeFunctionCall: " +
                    t.length
                );
              },
            },
            {
              key: "CallBinaryListOperation",
              value: function (t) {
                if (
                  ("+" == this.name || "-" == this.name) &&
                  t[0] instanceof U &&
                  t[1] instanceof D
                )
                  return this.CallListIncrementOperation(t);
                var e = b(t[0], j),
                  n = b(t[1], j);
                if (
                  !(
                    ("&&" != this.name && "||" != this.name) ||
                    (e.valueType == V.List && n.valueType == V.List)
                  )
                ) {
                  if (null === this._operationFuncs)
                    return P("NativeFunctionCall._operationFuncs");
                  var i = this._operationFuncs.get(V.Int);
                  if (null === i)
                    return P("NativeFunctionCall.CallBinaryListOperation op");
                  var r = (function (t) {
                    if ("boolean" == typeof t) return t;
                    throw new Error("".concat(t, " is not a boolean"));
                  })(i(e.isTruthy ? 1 : 0, n.isTruthy ? 1 : 0));
                  return new R(r);
                }
                if (e.valueType == V.List && n.valueType == V.List)
                  return this.CallType([e, n]);
                throw new x(
                  "Can not call use " +
                    this.name +
                    " operation on " +
                    V[e.valueType] +
                    " and " +
                    V[n.valueType]
                );
              },
            },
            {
              key: "CallListIncrementOperation",
              value: function (t) {
                var e = b(t[0], U),
                  n = b(t[1], D),
                  i = new F();
                if (null === e.value)
                  return P(
                    "NativeFunctionCall.CallListIncrementOperation listVal.value"
                  );
                var r,
                  a = g(e.value);
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var s = d(r.value, 2),
                      o = s[0],
                      u = s[1],
                      l = I.fromSerializedKey(o);
                    if (null === this._operationFuncs)
                      return P("NativeFunctionCall._operationFuncs");
                    var h = this._operationFuncs.get(V.Int);
                    if (null === n.value)
                      return P(
                        "NativeFunctionCall.CallListIncrementOperation intVal.value"
                      );
                    var c = h(u, n.value),
                      f = null;
                    if (null === e.value.origins)
                      return P(
                        "NativeFunctionCall.CallListIncrementOperation listVal.value.origins"
                      );
                    var v,
                      p = g(e.value.origins);
                    try {
                      for (p.s(); !(v = p.n()).done; ) {
                        var y = v.value;
                        if (y.name == l.originName) {
                          f = y;
                          break;
                        }
                      }
                    } catch (t) {
                      p.e(t);
                    } finally {
                      p.f();
                    }
                    if (null != f) {
                      var m = f.TryGetItemWithValue(c, I.Null);
                      m.exists && i.Add(m.result, c);
                    }
                  }
                } catch (t) {
                  a.e(t);
                } finally {
                  a.f();
                }
                return new U(i);
              },
            },
            {
              key: "CoerceValuesToSingleType",
              value: function (t) {
                var e,
                  n = V.Int,
                  i = null,
                  r = g(t);
                try {
                  for (r.s(); !(e = r.n()).done; ) {
                    var a = b(e.value, j);
                    a.valueType > n && (n = a.valueType),
                      a.valueType == V.List && (i = C(a, U));
                  }
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
                var s = [];
                if (V[n] == V[V.List]) {
                  var o,
                    u = g(t);
                  try {
                    for (u.s(); !(o = u.n()).done; ) {
                      var l = b(o.value, j);
                      if (l.valueType == V.List) s.push(l);
                      else {
                        if (l.valueType != V.Int) {
                          var h = V[l.valueType];
                          throw new x(
                            "Cannot mix Lists and " +
                              h +
                              " values in this operation"
                          );
                        }
                        var c = parseInt(l.valueObject);
                        if (null === (i = b(i, U)).value)
                          return P(
                            "NativeFunctionCall.CoerceValuesToSingleType specialCaseList.value"
                          );
                        var f = i.value.originOfMaxItem;
                        if (null === f)
                          return P(
                            "NativeFunctionCall.CoerceValuesToSingleType list"
                          );
                        var v = f.TryGetItemWithValue(c, I.Null);
                        if (!v.exists)
                          throw new x(
                            "Could not find List item with the value " +
                              c +
                              " in " +
                              f.name
                          );
                        var d = new U(v.result, c);
                        s.push(d);
                      }
                    }
                  } catch (t) {
                    u.e(t);
                  } finally {
                    u.f();
                  }
                } else {
                  var p,
                    y = g(t);
                  try {
                    for (y.s(); !(p = y.n()).done; ) {
                      var m = b(p.value, j).Cast(n);
                      s.push(m);
                    }
                  } catch (t) {
                    y.e(t);
                  } finally {
                    y.f();
                  }
                }
                return s;
              },
            },
            {
              key: "AddOpFuncForType",
              value: function (t, e) {
                null == this._operationFuncs &&
                  (this._operationFuncs = new Map()),
                  this._operationFuncs.set(t, e);
              },
            },
            {
              key: "toString",
              value: function () {
                return 'Native "' + this.name + '"';
              },
            },
          ],
          [
            {
              key: "CallWithName",
              value: function (t) {
                return new i(t);
              },
            },
            {
              key: "CallExistsWithName",
              value: function (t) {
                return (
                  this.GenerateNativeFunctionsIfNecessary(),
                  this._nativeFunctions.get(t)
                );
              },
            },
            {
              key: "Identity",
              value: function (t) {
                return t;
              },
            },
            {
              key: "GenerateNativeFunctionsIfNecessary",
              value: function () {
                if (null == this._nativeFunctions) {
                  (this._nativeFunctions = new Map()),
                    this.AddIntBinaryOp(this.Add, function (t, e) {
                      return t + e;
                    }),
                    this.AddIntBinaryOp(this.Subtract, function (t, e) {
                      return t - e;
                    }),
                    this.AddIntBinaryOp(this.Multiply, function (t, e) {
                      return t * e;
                    }),
                    this.AddIntBinaryOp(this.Divide, function (t, e) {
                      return Math.floor(t / e);
                    }),
                    this.AddIntBinaryOp(this.Mod, function (t, e) {
                      return t % e;
                    }),
                    this.AddIntUnaryOp(this.Negate, function (t) {
                      return -t;
                    }),
                    this.AddIntBinaryOp(this.Equal, function (t, e) {
                      return t == e;
                    }),
                    this.AddIntBinaryOp(this.Greater, function (t, e) {
                      return t > e;
                    }),
                    this.AddIntBinaryOp(this.Less, function (t, e) {
                      return t < e;
                    }),
                    this.AddIntBinaryOp(
                      this.GreaterThanOrEquals,
                      function (t, e) {
                        return t >= e;
                      }
                    ),
                    this.AddIntBinaryOp(this.LessThanOrEquals, function (t, e) {
                      return t <= e;
                    }),
                    this.AddIntBinaryOp(this.NotEquals, function (t, e) {
                      return t != e;
                    }),
                    this.AddIntUnaryOp(this.Not, function (t) {
                      return 0 == t;
                    }),
                    this.AddIntBinaryOp(this.And, function (t, e) {
                      return 0 != t && 0 != e;
                    }),
                    this.AddIntBinaryOp(this.Or, function (t, e) {
                      return 0 != t || 0 != e;
                    }),
                    this.AddIntBinaryOp(this.Max, function (t, e) {
                      return Math.max(t, e);
                    }),
                    this.AddIntBinaryOp(this.Min, function (t, e) {
                      return Math.min(t, e);
                    }),
                    this.AddIntBinaryOp(this.Pow, function (t, e) {
                      return Math.pow(t, e);
                    }),
                    this.AddIntUnaryOp(this.Floor, i.Identity),
                    this.AddIntUnaryOp(this.Ceiling, i.Identity),
                    this.AddIntUnaryOp(this.Int, i.Identity),
                    this.AddIntUnaryOp(this.Float, function (t) {
                      return t;
                    }),
                    this.AddFloatBinaryOp(this.Add, function (t, e) {
                      return t + e;
                    }),
                    this.AddFloatBinaryOp(this.Subtract, function (t, e) {
                      return t - e;
                    }),
                    this.AddFloatBinaryOp(this.Multiply, function (t, e) {
                      return t * e;
                    }),
                    this.AddFloatBinaryOp(this.Divide, function (t, e) {
                      return t / e;
                    }),
                    this.AddFloatBinaryOp(this.Mod, function (t, e) {
                      return t % e;
                    }),
                    this.AddFloatUnaryOp(this.Negate, function (t) {
                      return -t;
                    }),
                    this.AddFloatBinaryOp(this.Equal, function (t, e) {
                      return t == e;
                    }),
                    this.AddFloatBinaryOp(this.Greater, function (t, e) {
                      return t > e;
                    }),
                    this.AddFloatBinaryOp(this.Less, function (t, e) {
                      return t < e;
                    }),
                    this.AddFloatBinaryOp(
                      this.GreaterThanOrEquals,
                      function (t, e) {
                        return t >= e;
                      }
                    ),
                    this.AddFloatBinaryOp(
                      this.LessThanOrEquals,
                      function (t, e) {
                        return t <= e;
                      }
                    ),
                    this.AddFloatBinaryOp(this.NotEquals, function (t, e) {
                      return t != e;
                    }),
                    this.AddFloatUnaryOp(this.Not, function (t) {
                      return 0 == t;
                    }),
                    this.AddFloatBinaryOp(this.And, function (t, e) {
                      return 0 != t && 0 != e;
                    }),
                    this.AddFloatBinaryOp(this.Or, function (t, e) {
                      return 0 != t || 0 != e;
                    }),
                    this.AddFloatBinaryOp(this.Max, function (t, e) {
                      return Math.max(t, e);
                    }),
                    this.AddFloatBinaryOp(this.Min, function (t, e) {
                      return Math.min(t, e);
                    }),
                    this.AddFloatBinaryOp(this.Pow, function (t, e) {
                      return Math.pow(t, e);
                    }),
                    this.AddFloatUnaryOp(this.Floor, function (t) {
                      return Math.floor(t);
                    }),
                    this.AddFloatUnaryOp(this.Ceiling, function (t) {
                      return Math.ceil(t);
                    }),
                    this.AddFloatUnaryOp(this.Int, function (t) {
                      return Math.floor(t);
                    }),
                    this.AddFloatUnaryOp(this.Float, i.Identity),
                    this.AddStringBinaryOp(this.Add, function (t, e) {
                      return t + e;
                    }),
                    this.AddStringBinaryOp(this.Equal, function (t, e) {
                      return t === e;
                    }),
                    this.AddStringBinaryOp(this.NotEquals, function (t, e) {
                      return !(t === e);
                    }),
                    this.AddStringBinaryOp(this.Has, function (t, e) {
                      return t.includes(e);
                    }),
                    this.AddStringBinaryOp(this.Hasnt, function (t, e) {
                      return !t.includes(e);
                    }),
                    this.AddListBinaryOp(this.Add, function (t, e) {
                      return t.Union(e);
                    }),
                    this.AddListBinaryOp(this.Subtract, function (t, e) {
                      return t.Without(e);
                    }),
                    this.AddListBinaryOp(this.Has, function (t, e) {
                      return t.Contains(e);
                    }),
                    this.AddListBinaryOp(this.Hasnt, function (t, e) {
                      return !t.Contains(e);
                    }),
                    this.AddListBinaryOp(this.Intersect, function (t, e) {
                      return t.Intersect(e);
                    }),
                    this.AddListBinaryOp(this.Equal, function (t, e) {
                      return t.Equals(e);
                    }),
                    this.AddListBinaryOp(this.Greater, function (t, e) {
                      return t.GreaterThan(e);
                    }),
                    this.AddListBinaryOp(this.Less, function (t, e) {
                      return t.LessThan(e);
                    }),
                    this.AddListBinaryOp(
                      this.GreaterThanOrEquals,
                      function (t, e) {
                        return t.GreaterThanOrEquals(e);
                      }
                    ),
                    this.AddListBinaryOp(
                      this.LessThanOrEquals,
                      function (t, e) {
                        return t.LessThanOrEquals(e);
                      }
                    ),
                    this.AddListBinaryOp(this.NotEquals, function (t, e) {
                      return !t.Equals(e);
                    }),
                    this.AddListBinaryOp(this.And, function (t, e) {
                      return t.Count > 0 && e.Count > 0;
                    }),
                    this.AddListBinaryOp(this.Or, function (t, e) {
                      return t.Count > 0 || e.Count > 0;
                    }),
                    this.AddListUnaryOp(this.Not, function (t) {
                      return 0 == t.Count ? 1 : 0;
                    }),
                    this.AddListUnaryOp(this.Invert, function (t) {
                      return t.inverse;
                    }),
                    this.AddListUnaryOp(this.All, function (t) {
                      return t.all;
                    }),
                    this.AddListUnaryOp(this.ListMin, function (t) {
                      return t.MinAsList();
                    }),
                    this.AddListUnaryOp(this.ListMax, function (t) {
                      return t.MaxAsList();
                    }),
                    this.AddListUnaryOp(this.Count, function (t) {
                      return t.Count;
                    }),
                    this.AddListUnaryOp(this.ValueOfList, function (t) {
                      return t.maxItem.Value;
                    });
                  this.AddOpToNativeFunc(
                    this.Equal,
                    2,
                    V.DivertTarget,
                    function (t, e) {
                      return t.Equals(e);
                    }
                  ),
                    this.AddOpToNativeFunc(
                      this.NotEquals,
                      2,
                      V.DivertTarget,
                      function (t, e) {
                        return !t.Equals(e);
                      }
                    );
                }
              },
            },
            {
              key: "AddOpToNativeFunc",
              value: function (t, e, n, r) {
                if (null === this._nativeFunctions)
                  return P("NativeFunctionCall._nativeFunctions");
                var a = this._nativeFunctions.get(t);
                a || ((a = new i(t, e)), this._nativeFunctions.set(t, a)),
                  a.AddOpFuncForType(n, r);
              },
            },
            {
              key: "AddIntBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, V.Int, e);
              },
            },
            {
              key: "AddIntUnaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 1, V.Int, e);
              },
            },
            {
              key: "AddFloatBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, V.Float, e);
              },
            },
            {
              key: "AddFloatUnaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 1, V.Float, e);
              },
            },
            {
              key: "AddStringBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, V.String, e);
              },
            },
            {
              key: "AddListBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, V.List, e);
              },
            },
            {
              key: "AddListUnaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 1, V.List, e);
              },
            },
          ]
        ),
        i
      );
    })(N);
  (nt.Add = "+"),
    (nt.Subtract = "-"),
    (nt.Divide = "/"),
    (nt.Multiply = "*"),
    (nt.Mod = "%"),
    (nt.Negate = "_"),
    (nt.Equal = "=="),
    (nt.Greater = ">"),
    (nt.Less = "<"),
    (nt.GreaterThanOrEquals = ">="),
    (nt.LessThanOrEquals = "<="),
    (nt.NotEquals = "!="),
    (nt.Not = "!"),
    (nt.And = "&&"),
    (nt.Or = "||"),
    (nt.Min = "MIN"),
    (nt.Max = "MAX"),
    (nt.Pow = "POW"),
    (nt.Floor = "FLOOR"),
    (nt.Ceiling = "CEILING"),
    (nt.Int = "INT"),
    (nt.Float = "FLOAT"),
    (nt.Has = "?"),
    (nt.Hasnt = "!?"),
    (nt.Intersect = "^"),
    (nt.ListMin = "LIST_MIN"),
    (nt.ListMax = "LIST_MAX"),
    (nt.All = "LIST_ALL"),
    (nt.Count = "LIST_COUNT"),
    (nt.ValueOfList = "LIST_VALUE"),
    (nt.Invert = "LIST_INVERT"),
    (nt._nativeFunctions = null);
  var it = (function (t) {
      a(i, t);
      var e = v(i);
      function i(t) {
        var r;
        return n(this, i), ((r = e.call(this)).text = t.toString() || ""), r;
      }
      return (
        r(i, [
          {
            key: "toString",
            value: function () {
              return "# " + this.text;
            },
          },
        ]),
        i
      );
    })(N),
    rt = (function (t) {
      a(i, t);
      var e = v(i);
      function i() {
        var t;
        return (
          n(this, i),
          ((t = e.apply(this, arguments)).text = ""),
          (t.index = 0),
          (t.threadAtGeneration = null),
          (t.sourcePath = ""),
          (t.targetPath = null),
          (t.isInvisibleDefault = !1),
          (t.tags = null),
          (t.originalThreadIndex = 0),
          t
        );
      }
      return (
        r(i, [
          {
            key: "pathStringOnChoice",
            get: function () {
              return null === this.targetPath
                ? P("Choice.targetPath")
                : this.targetPath.toString();
            },
            set: function (t) {
              this.targetPath = new k(t);
            },
          },
        ]),
        i
      );
    })(N),
    at = (function () {
      function t(e, i) {
        n(this, t),
          (this._name = e || ""),
          (this._items = null),
          (this._itemNameToValues = i || new Map());
      }
      return (
        r(t, [
          {
            key: "name",
            get: function () {
              return this._name;
            },
          },
          {
            key: "items",
            get: function () {
              if (null == this._items) {
                this._items = new Map();
                var t,
                  e = g(this._itemNameToValues);
                try {
                  for (e.s(); !(t = e.n()).done; ) {
                    var n = d(t.value, 2),
                      i = n[0],
                      r = n[1],
                      a = new I(this.name, i);
                    this._items.set(a.serialized(), r);
                  }
                } catch (t) {
                  e.e(t);
                } finally {
                  e.f();
                }
              }
              return this._items;
            },
          },
          {
            key: "ValueForItem",
            value: function (t) {
              if (!t.itemName) return 0;
              var e = this._itemNameToValues.get(t.itemName);
              return void 0 !== e ? e : 0;
            },
          },
          {
            key: "ContainsItem",
            value: function (t) {
              return (
                !!t.itemName &&
                t.originName == this.name &&
                this._itemNameToValues.has(t.itemName)
              );
            },
          },
          {
            key: "ContainsItemWithName",
            value: function (t) {
              return this._itemNameToValues.has(t);
            },
          },
          {
            key: "TryGetItemWithValue",
            value: function (t, e) {
              var n,
                i = g(this._itemNameToValues);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = d(n.value, 2),
                    a = r[0];
                  if (r[1] == t)
                    return { result: new I(this.name, a), exists: !0 };
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              return { result: I.Null, exists: !1 };
            },
          },
          {
            key: "TryGetValueForItem",
            value: function (t, e) {
              if (!t.itemName) return { result: 0, exists: !1 };
              var n = this._itemNameToValues.get(t.itemName);
              return n ? { result: n, exists: !0 } : { result: 0, exists: !1 };
            },
          },
        ]),
        t
      );
    })(),
    st = (function () {
      function t(e) {
        n(this, t),
          (this._lists = new Map()),
          (this._allUnambiguousListValueCache = new Map());
        var i,
          r = g(e);
        try {
          for (r.s(); !(i = r.n()).done; ) {
            var a = i.value;
            this._lists.set(a.name, a);
            var s,
              o = g(a.items);
            try {
              for (o.s(); !(s = o.n()).done; ) {
                var u = d(s.value, 2),
                  l = u[0],
                  h = u[1],
                  c = I.fromSerializedKey(l),
                  f = new U(c, h);
                if (!c.itemName)
                  throw new Error("item.itemName is null or undefined.");
                this._allUnambiguousListValueCache.set(c.itemName, f),
                  this._allUnambiguousListValueCache.set(c.fullName, f);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      }
      return (
        r(t, [
          {
            key: "lists",
            get: function () {
              var t,
                e = [],
                n = g(this._lists);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var i = d(t.value, 2)[1];
                  e.push(i);
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              return e;
            },
          },
          {
            key: "TryListGetDefinition",
            value: function (t, e) {
              if (null === t) return { result: e, exists: !1 };
              var n = this._lists.get(t);
              return n ? { result: n, exists: !0 } : { result: e, exists: !1 };
            },
          },
          {
            key: "FindSingleItemListWithName",
            value: function (t) {
              if (null === t) return P("name");
              var e = this._allUnambiguousListValueCache.get(t);
              return void 0 !== e ? e : null;
            },
          },
        ]),
        t
      );
    })(),
    ot = (function () {
      function t() {
        n(this, t);
      }
      return (
        r(t, null, [
          {
            key: "JArrayToRuntimeObjList",
            value: function (t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = t.length;
              e && n--;
              for (var i = [], r = 0; r < n; r++) {
                var a = t[r],
                  s = this.JTokenToRuntimeObject(a);
                if (null === s) return P("runtimeObj");
                i.push(s);
              }
              return i;
            },
          },
          {
            key: "WriteDictionaryRuntimeObjs",
            value: function (t, e) {
              t.WriteObjectStart();
              var n,
                i = g(e);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = d(n.value, 2),
                    a = r[0],
                    s = r[1];
                  t.WritePropertyStart(a),
                    this.WriteRuntimeObject(t, s),
                    t.WritePropertyEnd();
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              t.WriteObjectEnd();
            },
          },
          {
            key: "WriteListRuntimeObjs",
            value: function (t, e) {
              t.WriteArrayStart();
              var n,
                i = g(e);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = n.value;
                  this.WriteRuntimeObject(t, r);
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              t.WriteArrayEnd();
            },
          },
          {
            key: "WriteIntDictionary",
            value: function (t, e) {
              t.WriteObjectStart();
              var n,
                i = g(e);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = d(n.value, 2),
                    a = r[0],
                    s = r[1];
                  t.WriteIntProperty(a, s);
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              t.WriteObjectEnd();
            },
          },
          {
            key: "WriteRuntimeObject",
            value: function (e, n) {
              var i = C(n, K);
              if (i) this.WriteRuntimeContainer(e, i);
              else {
                var r = C(n, Y);
                if (r) {
                  var a,
                    s = "->";
                  return (
                    r.isExternal
                      ? (s = "x()")
                      : r.pushesToStack &&
                        (r.stackPushType == z.Function
                          ? (s = "f()")
                          : r.stackPushType == z.Tunnel && (s = "->t->")),
                    (a = r.hasVariableTarget
                      ? r.variableDivertName
                      : r.targetPathString),
                    e.WriteObjectStart(),
                    e.WriteProperty(s, a),
                    r.hasVariableTarget && e.WriteProperty("var", !0),
                    r.isConditional && e.WriteProperty("c", !0),
                    r.externalArgs > 0 &&
                      e.WriteIntProperty("exArgs", r.externalArgs),
                    void e.WriteObjectEnd()
                  );
                }
                var o = C(n, Q);
                if (o)
                  return (
                    e.WriteObjectStart(),
                    e.WriteProperty("*", o.pathStringOnChoice),
                    e.WriteIntProperty("flg", o.flags),
                    void e.WriteObjectEnd()
                  );
                var u = C(n, R);
                if (u) e.WriteBool(u.value);
                else {
                  var l = C(n, D);
                  if (l) e.WriteInt(l.value);
                  else {
                    var h = C(n, B);
                    if (h) e.WriteFloat(h.value);
                    else {
                      var c = C(n, G);
                      if (c)
                        c.isNewline
                          ? e.Write("\n", !1)
                          : (e.WriteStringStart(),
                            e.WriteStringInner("^"),
                            e.WriteStringInner(c.value),
                            e.WriteStringEnd());
                      else {
                        var f = C(n, U);
                        if (f) this.WriteInkList(e, f);
                        else {
                          var v = C(n, M);
                          if (v)
                            return (
                              e.WriteObjectStart(),
                              null === v.value
                                ? P("divTargetVal.value")
                                : (e.WriteProperty(
                                    "^->",
                                    v.value.componentsString
                                  ),
                                  void e.WriteObjectEnd())
                            );
                          var d = C(n, J);
                          if (d)
                            return (
                              e.WriteObjectStart(),
                              e.WriteProperty("^var", d.value),
                              e.WriteIntProperty("ci", d.contextIndex),
                              void e.WriteObjectEnd()
                            );
                          if (C(n, H)) e.Write("<>");
                          else {
                            var p = C(n, X);
                            if (p)
                              e.Write(t._controlCommandNames[p.commandType]);
                            else {
                              var y = C(n, nt);
                              if (y) {
                                var m = y.name;
                                return "^" == m && (m = "L^"), void e.Write(m);
                              }
                              var g = C(n, Z);
                              if (g) {
                                e.WriteObjectStart();
                                var S = g.pathStringForCount;
                                return (
                                  null != S
                                    ? e.WriteProperty("CNT?", S)
                                    : e.WriteProperty("VAR?", g.name),
                                  void e.WriteObjectEnd()
                                );
                              }
                              var k = C(n, tt);
                              if (k) {
                                e.WriteObjectStart();
                                var b = k.isGlobal ? "VAR=" : "temp=";
                                return (
                                  e.WriteProperty(b, k.variableName),
                                  k.isNewDeclaration ||
                                    e.WriteProperty("re", !0),
                                  void e.WriteObjectEnd()
                                );
                              }
                              if (C(n, et)) e.Write("void");
                              else {
                                var w = C(n, it);
                                if (w)
                                  return (
                                    e.WriteObjectStart(),
                                    e.WriteProperty("#", w.text),
                                    void e.WriteObjectEnd()
                                  );
                                var _ = C(n, rt);
                                if (!_)
                                  throw new Error(
                                    "Failed to convert runtime object to Json token: " +
                                      n
                                  );
                                this.WriteChoice(e, _);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
          },
          {
            key: "JObjectToDictionaryRuntimeObjs",
            value: function (t) {
              var e = new Map();
              for (var n in t)
                if (t.hasOwnProperty(n)) {
                  var i = this.JTokenToRuntimeObject(t[n]);
                  if (null === i) return P("inkObject");
                  e.set(n, i);
                }
              return e;
            },
          },
          {
            key: "JObjectToIntDictionary",
            value: function (t) {
              var e = new Map();
              for (var n in t) t.hasOwnProperty(n) && e.set(n, parseInt(t[n]));
              return e;
            },
          },
          {
            key: "JTokenToRuntimeObject",
            value: function (n) {
              if (("number" == typeof n && !isNaN(n)) || "boolean" == typeof n)
                return j.Create(n);
              if ("string" == typeof n) {
                var i = n.toString(),
                  r = i[0];
                if ("^" == r) return new G(i.substring(1));
                if ("\n" == r && 1 == i.length) return new G("\n");
                if ("<>" == i) return new H();
                for (var a = 0; a < t._controlCommandNames.length; ++a) {
                  if (i == t._controlCommandNames[a]) return new X(a);
                }
                if (("L^" == i && (i = "^"), nt.CallExistsWithName(i)))
                  return nt.CallWithName(i);
                if ("->->" == i) return X.PopTunnel();
                if ("~ret" == i) return X.PopFunction();
                if ("void" == i) return new et();
              }
              if ("object" === e(n) && !Array.isArray(n)) {
                var s,
                  o = n;
                if (o["^->"]) return (s = o["^->"]), new M(new k(s.toString()));
                if (o["^var"]) {
                  s = o["^var"];
                  var u = new J(s.toString());
                  return (
                    "ci" in o && ((s = o.ci), (u.contextIndex = parseInt(s))), u
                  );
                }
                var l = !1,
                  h = !1,
                  c = z.Function,
                  f = !1;
                if (
                  ((s = o["->"])
                    ? (l = !0)
                    : (s = o["f()"])
                    ? ((l = !0), (h = !0), (c = z.Function))
                    : (s = o["->t->"])
                    ? ((l = !0), (h = !0), (c = z.Tunnel))
                    : (s = o["x()"]) &&
                      ((l = !0), (f = !0), (h = !1), (c = z.Function)),
                  l)
                ) {
                  var v = new Y();
                  (v.pushesToStack = h),
                    (v.stackPushType = c),
                    (v.isExternal = f);
                  var d = s.toString();
                  return (
                    (s = o.var)
                      ? (v.variableDivertName = d)
                      : (v.targetPathString = d),
                    (v.isConditional = !!o.c),
                    f && (s = o.exArgs) && (v.externalArgs = parseInt(s)),
                    v
                  );
                }
                if ((s = o["*"])) {
                  var p = new Q();
                  return (
                    (p.pathStringOnChoice = s.toString()),
                    (s = o.flg) && (p.flags = parseInt(s)),
                    p
                  );
                }
                if ((s = o["VAR?"])) return new Z(s.toString());
                if ((s = o["CNT?"])) {
                  var y = new Z();
                  return (y.pathStringForCount = s.toString()), y;
                }
                var m = !1,
                  g = !1;
                if (
                  ((s = o["VAR="])
                    ? ((m = !0), (g = !0))
                    : (s = o["temp="]) && ((m = !0), (g = !1)),
                  m)
                ) {
                  var S = s.toString(),
                    C = !o.re,
                    b = new tt(S, C);
                  return (b.isGlobal = g), b;
                }
                if (void 0 !== o["#"])
                  return (s = o["#"]), new it(s.toString());
                if ((s = o.list)) {
                  var w = s,
                    _ = new F();
                  if ((s = o.origins)) {
                    var T = s;
                    _.SetInitialOriginNames(T);
                  }
                  for (var E in w)
                    if (w.hasOwnProperty(E)) {
                      var O = w[E],
                        P = new I(E),
                        N = parseInt(O);
                      _.Add(P, N);
                    }
                  return new U(_);
                }
                if (null != o.originalChoicePath)
                  return this.JObjectToChoice(o);
              }
              if (Array.isArray(n)) return this.JArrayToContainer(n);
              if (null == n) return null;
              throw new Error(
                "Failed to convert token to runtime object: " +
                  this.toJson(n, ["parent"])
              );
            },
          },
          {
            key: "toJson",
            value: function (t, e, n) {
              return JSON.stringify(
                t,
                function (t, n) {
                  return (
                    null == e
                      ? void 0
                      : e.some(function (e) {
                          return e === t;
                        })
                  )
                    ? void 0
                    : n;
                },
                n
              );
            },
          },
          {
            key: "WriteRuntimeContainer",
            value: function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if ((t.WriteArrayStart(), null === e)) return P("container");
              var i,
                r = g(e.content);
              try {
                for (r.s(); !(i = r.n()).done; ) {
                  var a = i.value;
                  this.WriteRuntimeObject(t, a);
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              var s = e.namedOnlyContent,
                o = e.countFlags,
                u = null != e.name && !n,
                l = null != s || o > 0 || u;
              if ((l && t.WriteObjectStart(), null != s)) {
                var h,
                  c = g(s);
                try {
                  for (c.s(); !(h = c.n()).done; ) {
                    var f = d(h.value, 2),
                      v = f[0],
                      p = f[1],
                      y = v,
                      m = C(p, K);
                    t.WritePropertyStart(y),
                      this.WriteRuntimeContainer(t, m, !0),
                      t.WritePropertyEnd();
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
              }
              o > 0 && t.WriteIntProperty("#f", o),
                u && t.WriteProperty("#n", e.name),
                l ? t.WriteObjectEnd() : t.WriteNull(),
                t.WriteArrayEnd();
            },
          },
          {
            key: "JArrayToContainer",
            value: function (t) {
              var e = new K();
              e.content = this.JArrayToRuntimeObjList(t, !0);
              var n = t[t.length - 1];
              if (null != n) {
                var i = new Map();
                for (var r in n)
                  if ("#f" == r) e.countFlags = parseInt(n[r]);
                  else if ("#n" == r) e.name = n[r].toString();
                  else {
                    var a = this.JTokenToRuntimeObject(n[r]),
                      s = C(a, K);
                    s && (s.name = r), i.set(r, a);
                  }
                e.namedOnlyContent = i;
              }
              return e;
            },
          },
          {
            key: "JObjectToChoice",
            value: function (t) {
              var e = new rt();
              return (
                (e.text = t.text.toString()),
                (e.index = parseInt(t.index)),
                (e.sourcePath = t.originalChoicePath.toString()),
                (e.originalThreadIndex = parseInt(t.originalThreadIndex)),
                (e.pathStringOnChoice = t.targetPath.toString()),
                e
              );
            },
          },
          {
            key: "WriteChoice",
            value: function (t, e) {
              t.WriteObjectStart(),
                t.WriteProperty("text", e.text),
                t.WriteIntProperty("index", e.index),
                t.WriteProperty("originalChoicePath", e.sourcePath),
                t.WriteIntProperty(
                  "originalThreadIndex",
                  e.originalThreadIndex
                ),
                t.WriteProperty("targetPath", e.pathStringOnChoice),
                t.WriteObjectEnd();
            },
          },
          {
            key: "WriteInkList",
            value: function (t, e) {
              var n = e.value;
              if (null === n) return P("rawList");
              t.WriteObjectStart(),
                t.WritePropertyStart("list"),
                t.WriteObjectStart();
              var i,
                r = g(n);
              try {
                for (r.s(); !(i = r.n()).done; ) {
                  var a = d(i.value, 2),
                    s = a[0],
                    o = a[1],
                    u = I.fromSerializedKey(s),
                    l = o;
                  if (null === u.itemName) return P("item.itemName");
                  t.WritePropertyNameStart(),
                    t.WritePropertyNameInner(u.originName ? u.originName : "?"),
                    t.WritePropertyNameInner("."),
                    t.WritePropertyNameInner(u.itemName),
                    t.WritePropertyNameEnd(),
                    t.Write(l),
                    t.WritePropertyEnd();
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              if (
                (t.WriteObjectEnd(),
                t.WritePropertyEnd(),
                0 == n.Count &&
                  null != n.originNames &&
                  n.originNames.length > 0)
              ) {
                t.WritePropertyStart("origins"), t.WriteArrayStart();
                var h,
                  c = g(n.originNames);
                try {
                  for (c.s(); !(h = c.n()).done; ) {
                    var f = h.value;
                    t.Write(f);
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
                t.WriteArrayEnd(), t.WritePropertyEnd();
              }
              t.WriteObjectEnd();
            },
          },
          {
            key: "ListDefinitionsToJToken",
            value: function (t) {
              var e,
                n = {},
                i = g(t.lists);
              try {
                for (i.s(); !(e = i.n()).done; ) {
                  var r,
                    a = e.value,
                    s = {},
                    o = g(a.items);
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var u = d(r.value, 2),
                        l = u[0],
                        h = u[1],
                        c = I.fromSerializedKey(l);
                      if (null === c.itemName) return P("item.itemName");
                      s[c.itemName] = h;
                    }
                  } catch (t) {
                    o.e(t);
                  } finally {
                    o.f();
                  }
                  n[a.name] = s;
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              return n;
            },
          },
          {
            key: "JTokenToListDefinitions",
            value: function (t) {
              var e = t,
                n = [];
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var r = i.toString(),
                    a = e[i],
                    s = new Map();
                  for (var o in a)
                    if (e.hasOwnProperty(i)) {
                      var u = a[o];
                      s.set(o, parseInt(u));
                    }
                  var l = new at(r, s);
                  n.push(l);
                }
              return new st(n);
            },
          },
        ]),
        t
      );
    })();
  ot._controlCommandNames = (function () {
    var t = [];
    (t[X.CommandType.EvalStart] = "ev"),
      (t[X.CommandType.EvalOutput] = "out"),
      (t[X.CommandType.EvalEnd] = "/ev"),
      (t[X.CommandType.Duplicate] = "du"),
      (t[X.CommandType.PopEvaluatedValue] = "pop"),
      (t[X.CommandType.PopFunction] = "~ret"),
      (t[X.CommandType.PopTunnel] = "->->"),
      (t[X.CommandType.BeginString] = "str"),
      (t[X.CommandType.EndString] = "/str"),
      (t[X.CommandType.NoOp] = "nop"),
      (t[X.CommandType.ChoiceCount] = "choiceCnt"),
      (t[X.CommandType.Turns] = "turn"),
      (t[X.CommandType.TurnsSince] = "turns"),
      (t[X.CommandType.ReadCount] = "readc"),
      (t[X.CommandType.Random] = "rnd"),
      (t[X.CommandType.SeedRandom] = "srnd"),
      (t[X.CommandType.VisitIndex] = "visit"),
      (t[X.CommandType.SequenceShuffleIndex] = "seq"),
      (t[X.CommandType.StartThread] = "thread"),
      (t[X.CommandType.Done] = "done"),
      (t[X.CommandType.End] = "end"),
      (t[X.CommandType.ListFromInt] = "listInt"),
      (t[X.CommandType.ListRange] = "range"),
      (t[X.CommandType.ListRandom] = "lrnd"),
      (t[X.CommandType.BeginTag] = "#"),
      (t[X.CommandType.EndTag] = "/#");
    for (var e = 0; e < X.CommandType.TOTAL_VALUES; ++e)
      if (null == t[e])
        throw new Error("Control command not accounted for in serialisation");
    return t;
  })();
  var ut = (function () {
    function e() {
      if (
        (n(this, e),
        (this._threadCounter = 0),
        (this._startOfRoot = $.Null),
        arguments[0] instanceof t.Story)
      ) {
        var i = arguments[0];
        (this._startOfRoot = $.StartOf(i.rootContentContainer)), this.Reset();
      } else {
        var r = arguments[0];
        this._threads = [];
        var a,
          s = g(r._threads);
        try {
          for (s.s(); !(a = s.n()).done; ) {
            var o = a.value;
            this._threads.push(o.Copy());
          }
        } catch (t) {
          s.e(t);
        } finally {
          s.f();
        }
        (this._threadCounter = r._threadCounter),
          (this._startOfRoot = r._startOfRoot.copy());
      }
    }
    return (
      r(e, [
        {
          key: "elements",
          get: function () {
            return this.callStack;
          },
        },
        {
          key: "depth",
          get: function () {
            return this.elements.length;
          },
        },
        {
          key: "currentElement",
          get: function () {
            var t = this._threads[this._threads.length - 1].callstack;
            return t[t.length - 1];
          },
        },
        {
          key: "currentElementIndex",
          get: function () {
            return this.callStack.length - 1;
          },
        },
        {
          key: "currentThread",
          get: function () {
            return this._threads[this._threads.length - 1];
          },
          set: function (t) {
            S.Assert(
              1 == this._threads.length,
              "Shouldn't be directly setting the current thread when we have a stack of them"
            ),
              (this._threads.length = 0),
              this._threads.push(t);
          },
        },
        {
          key: "canPop",
          get: function () {
            return this.callStack.length > 1;
          },
        },
        {
          key: "Reset",
          value: function () {
            (this._threads = []),
              this._threads.push(new e.Thread()),
              this._threads[0].callstack.push(
                new e.Element(z.Tunnel, this._startOfRoot)
              );
          },
        },
        {
          key: "SetJsonToken",
          value: function (t, n) {
            this._threads.length = 0;
            var i,
              r = g(t.threads);
            try {
              for (r.s(); !(i = r.n()).done; ) {
                var a = i.value,
                  s = new e.Thread(a, n);
                this._threads.push(s);
              }
            } catch (t) {
              r.e(t);
            } finally {
              r.f();
            }
            (this._threadCounter = parseInt(t.threadCounter)),
              (this._startOfRoot = $.StartOf(n.rootContentContainer));
          },
        },
        {
          key: "WriteJson",
          value: function (t) {
            var e = this;
            t.WriteObject(function (t) {
              t.WritePropertyStart("threads"), t.WriteArrayStart();
              var n,
                i = g(e._threads);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  n.value.WriteJson(t);
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              t.WriteArrayEnd(),
                t.WritePropertyEnd(),
                t.WritePropertyStart("threadCounter"),
                t.WriteInt(e._threadCounter),
                t.WritePropertyEnd();
            });
          },
        },
        {
          key: "PushThread",
          value: function () {
            var t = this.currentThread.Copy();
            this._threadCounter++,
              (t.threadIndex = this._threadCounter),
              this._threads.push(t);
          },
        },
        {
          key: "ForkThread",
          value: function () {
            var t = this.currentThread.Copy();
            return (
              this._threadCounter++, (t.threadIndex = this._threadCounter), t
            );
          },
        },
        {
          key: "PopThread",
          value: function () {
            if (!this.canPopThread) throw new Error("Can't pop thread");
            this._threads.splice(this._threads.indexOf(this.currentThread), 1);
          },
        },
        {
          key: "canPopThread",
          get: function () {
            return this._threads.length > 1 && !this.elementIsEvaluateFromGame;
          },
        },
        {
          key: "elementIsEvaluateFromGame",
          get: function () {
            return this.currentElement.type == z.FunctionEvaluationFromGame;
          },
        },
        {
          key: "Push",
          value: function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              r = new e.Element(t, this.currentElement.currentPointer, !1);
            (r.evaluationStackHeightWhenPushed = n),
              (r.functionStartInOutputStream = i),
              this.callStack.push(r);
          },
        },
        {
          key: "CanPop",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            return (
              !!this.canPop && (null == t || this.currentElement.type == t)
            );
          },
        },
        {
          key: "Pop",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            if (!this.CanPop(t))
              throw new Error("Mismatched push/pop in Callstack");
            this.callStack.pop();
          },
        },
        {
          key: "GetTemporaryVariableWithName",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : -1;
            -1 == e && (e = this.currentElementIndex + 1);
            var n = W(this.callStack[e - 1].temporaryVariables, t, null);
            return n.exists ? n.result : null;
          },
        },
        {
          key: "SetTemporaryVariable",
          value: function (t, e, n) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : -1;
            -1 == i && (i = this.currentElementIndex + 1);
            var r = this.callStack[i - 1];
            if (!n && !r.temporaryVariables.get(t))
              throw new Error("Could not find temporary variable to set: " + t);
            var a = W(r.temporaryVariables, t, null);
            a.exists && U.RetainListOriginsForAssignment(a.result, e),
              r.temporaryVariables.set(t, e);
          },
        },
        {
          key: "ContextForVariableNamed",
          value: function (t) {
            return this.currentElement.temporaryVariables.get(t)
              ? this.currentElementIndex + 1
              : 0;
          },
        },
        {
          key: "ThreadWithIndex",
          value: function (t) {
            var e = this._threads.filter(function (e) {
              if (e.threadIndex == t) return e;
            });
            return e.length > 0 ? e[0] : null;
          },
        },
        {
          key: "callStack",
          get: function () {
            return this.currentThread.callstack;
          },
        },
        {
          key: "callStackTrace",
          get: function () {
            for (var t = new A(), e = 0; e < this._threads.length; e++) {
              var n = this._threads[e],
                i = e == this._threads.length - 1;
              t.AppendFormat(
                "=== THREAD {0}/{1} {2}===\n",
                e + 1,
                this._threads.length,
                i ? "(current) " : ""
              );
              for (var r = 0; r < n.callstack.length; r++) {
                n.callstack[r].type == z.Function
                  ? t.Append("  [FUNCTION] ")
                  : t.Append("  [TUNNEL] ");
                var a = n.callstack[r].currentPointer;
                if (!a.isNull) {
                  if ((t.Append("<SOMEWHERE IN "), null === a.container))
                    return P("pointer.container");
                  t.Append(a.container.path.toString()), t.AppendLine(">");
                }
              }
            }
            return t.toString();
          },
        },
      ]),
      e
    );
  })();
  !(function (t) {
    var e = (function () {
      function t(e, i) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        n(this, t),
          (this.evaluationStackHeightWhenPushed = 0),
          (this.functionStartInOutputStream = 0),
          (this.currentPointer = i.copy()),
          (this.inExpressionEvaluation = r),
          (this.temporaryVariables = new Map()),
          (this.type = e);
      }
      return (
        r(t, [
          {
            key: "Copy",
            value: function () {
              var e = new t(
                this.type,
                this.currentPointer,
                this.inExpressionEvaluation
              );
              return (
                (e.temporaryVariables = new Map(this.temporaryVariables)),
                (e.evaluationStackHeightWhenPushed =
                  this.evaluationStackHeightWhenPushed),
                (e.functionStartInOutputStream =
                  this.functionStartInOutputStream),
                e
              );
            },
          },
        ]),
        t
      );
    })();
    t.Element = e;
    var i = (function () {
      function t() {
        if (
          (n(this, t),
          (this.threadIndex = 0),
          (this.previousPointer = $.Null),
          (this.callstack = []),
          arguments[0] && arguments[1])
        ) {
          var i = arguments[0],
            r = arguments[1];
          this.threadIndex = parseInt(i.threadIndex);
          var a,
            s = g(i.callstack);
          try {
            for (s.s(); !(a = s.n()).done; ) {
              var o = a.value,
                u = parseInt(o.type),
                l = $.Null,
                h = void 0,
                c = o.cPath;
              if (void 0 !== c) {
                h = c.toString();
                var f = r.ContentAtPath(new k(h));
                if (
                  ((l.container = f.container),
                  (l.index = parseInt(o.idx)),
                  null == f.obj)
                )
                  throw new Error(
                    "When loading state, internal story location couldn't be found: " +
                      h +
                      ". Has the story changed since this save data was created?"
                  );
                if (f.approximate) {
                  if (null === l.container) return P("pointer.container");
                  r.Warning(
                    "When loading state, exact internal story location couldn't be found: '" +
                      h +
                      "', so it was approximated to '" +
                      l.container.path.toString() +
                      "' to recover. Has the story changed since this save data was created?"
                  );
                }
              }
              var v = !!o.exp,
                d = new e(u, l, v),
                p = o.temp;
              void 0 !== p
                ? (d.temporaryVariables = ot.JObjectToDictionaryRuntimeObjs(p))
                : d.temporaryVariables.clear(),
                this.callstack.push(d);
            }
          } catch (t) {
            s.e(t);
          } finally {
            s.f();
          }
          var y = i.previousContentObject;
          if (void 0 !== y) {
            var m = new k(y.toString());
            this.previousPointer = r.PointerAtPath(m);
          }
        }
      }
      return (
        r(t, [
          {
            key: "Copy",
            value: function () {
              var e = new t();
              e.threadIndex = this.threadIndex;
              var n,
                i = g(this.callstack);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = n.value;
                  e.callstack.push(r.Copy());
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              return (e.previousPointer = this.previousPointer.copy()), e;
            },
          },
          {
            key: "WriteJson",
            value: function (t) {
              t.WriteObjectStart(),
                t.WritePropertyStart("callstack"),
                t.WriteArrayStart();
              var e,
                n = g(this.callstack);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var i = e.value;
                  if ((t.WriteObjectStart(), !i.currentPointer.isNull)) {
                    if (null === i.currentPointer.container)
                      return P("el.currentPointer.container");
                    t.WriteProperty(
                      "cPath",
                      i.currentPointer.container.path.componentsString
                    ),
                      t.WriteIntProperty("idx", i.currentPointer.index);
                  }
                  t.WriteProperty("exp", i.inExpressionEvaluation),
                    t.WriteIntProperty("type", i.type),
                    i.temporaryVariables.size > 0 &&
                      (t.WritePropertyStart("temp"),
                      ot.WriteDictionaryRuntimeObjs(t, i.temporaryVariables),
                      t.WritePropertyEnd()),
                    t.WriteObjectEnd();
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              if (
                (t.WriteArrayEnd(),
                t.WritePropertyEnd(),
                t.WriteIntProperty("threadIndex", this.threadIndex),
                !this.previousPointer.isNull)
              ) {
                var r = this.previousPointer.Resolve();
                if (null === r) return P("this.previousPointer.Resolve()");
                t.WriteProperty("previousContentObject", r.path.toString());
              }
              t.WriteObjectEnd();
            },
          },
        ]),
        t
      );
    })();
    t.Thread = i;
  })(ut || (ut = {}));
  var lt = (function (t) {
    a(i, t);
    var e = v(i);
    function i(t, r) {
      var a;
      n(this, i),
        ((a = e.call(this)).variableChangedEventCallbacks = []),
        (a.patch = null),
        (a._batchObservingVariableChanges = !1),
        (a._defaultGlobalVariables = new Map()),
        (a._changedVariablesForBatchObs = new Set()),
        (a._globalVariables = new Map()),
        (a._callStack = t),
        (a._listDefsOrigin = r);
      try {
        return f(
          a,
          new Proxy(c(a), {
            get: function (t, e) {
              return e in t ? t[e] : t.$(e);
            },
            set: function (t, e, n) {
              return e in t ? (t[e] = n) : t.$(e, n), !0;
            },
          })
        );
      } catch (t) {}
      return a;
    }
    return (
      r(i, [
        {
          key: "variableChangedEvent",
          value: function (t, e) {
            var n,
              i = g(this.variableChangedEventCallbacks);
            try {
              for (i.s(); !(n = i.n()).done; ) {
                (0, n.value)(t, e);
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
          },
        },
        {
          key: "batchObservingVariableChanges",
          get: function () {
            return this._batchObservingVariableChanges;
          },
          set: function (t) {
            if (((this._batchObservingVariableChanges = t), t))
              this._changedVariablesForBatchObs = new Set();
            else if (null != this._changedVariablesForBatchObs) {
              var e,
                n = g(this._changedVariablesForBatchObs);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var i = e.value,
                    r = this._globalVariables.get(i);
                  r ? this.variableChangedEvent(i, r) : P("currentValue");
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              this._changedVariablesForBatchObs = null;
            }
          },
        },
        {
          key: "callStack",
          get: function () {
            return this._callStack;
          },
          set: function (t) {
            this._callStack = t;
          },
        },
        {
          key: "$",
          value: function (t, e) {
            if (void 0 === e) {
              var n = null;
              return null !== this.patch &&
                (n = this.patch.TryGetGlobal(t, null)).exists
                ? n.result.valueObject
                : (void 0 === (n = this._globalVariables.get(t)) &&
                    (n = this._defaultGlobalVariables.get(t)),
                  void 0 !== n ? n.valueObject : null);
            }
            if (void 0 === this._defaultGlobalVariables.get(t))
              throw new x(
                "Cannot assign to a variable (" +
                  t +
                  ") that hasn't been declared in the story"
              );
            var i = j.Create(e);
            if (null == i)
              throw null == e
                ? new Error("Cannot pass null to VariableState")
                : new Error(
                    "Invalid value passed to VariableState: " + e.toString()
                  );
            this.SetGlobal(t, i);
          },
        },
        {
          key: "ApplyPatch",
          value: function () {
            if (null === this.patch) return P("this.patch");
            var t,
              e = g(this.patch.globals);
            try {
              for (e.s(); !(t = e.n()).done; ) {
                var n = d(t.value, 2),
                  i = n[0],
                  r = n[1];
                this._globalVariables.set(i, r);
              }
            } catch (t) {
              e.e(t);
            } finally {
              e.f();
            }
            if (null !== this._changedVariablesForBatchObs) {
              var a,
                s = g(this.patch.changedVariables);
              try {
                for (s.s(); !(a = s.n()).done; ) {
                  var o = a.value;
                  this._changedVariablesForBatchObs.add(o);
                }
              } catch (t) {
                s.e(t);
              } finally {
                s.f();
              }
            }
            this.patch = null;
          },
        },
        {
          key: "SetJsonToken",
          value: function (t) {
            this._globalVariables.clear();
            var e,
              n = g(this._defaultGlobalVariables);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var i = d(e.value, 2),
                  r = i[0],
                  a = i[1],
                  s = t[r];
                if (void 0 !== s) {
                  var o = ot.JTokenToRuntimeObject(s);
                  if (null === o) return P("tokenInkObject");
                  this._globalVariables.set(r, o);
                } else this._globalVariables.set(r, a);
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
          },
        },
        {
          key: "WriteJson",
          value: function (t) {
            t.WriteObjectStart();
            var e,
              n = g(this._globalVariables);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = d(e.value, 2),
                  a = r[0],
                  s = r[1],
                  o = a,
                  u = s;
                if (
                  i.dontSaveDefaultValues &&
                  this._defaultGlobalVariables.has(o)
                ) {
                  var l = this._defaultGlobalVariables.get(o);
                  if (this.RuntimeObjectsEqual(u, l)) continue;
                }
                t.WritePropertyStart(o),
                  ot.WriteRuntimeObject(t, u),
                  t.WritePropertyEnd();
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
            t.WriteObjectEnd();
          },
        },
        {
          key: "RuntimeObjectsEqual",
          value: function (t, e) {
            if (null === t) return P("obj1");
            if (null === e) return P("obj2");
            if (t.constructor !== e.constructor) return !1;
            var n = C(t, R);
            if (null !== n) return n.value === b(e, R).value;
            var i = C(t, D);
            if (null !== i) return i.value === b(e, D).value;
            var r = C(t, B);
            if (null !== r) return r.value === b(e, B).value;
            var a = C(t, j),
              s = C(e, j);
            if (null !== a && null !== s)
              return T(a.valueObject) && T(s.valueObject)
                ? a.valueObject.Equals(s.valueObject)
                : a.valueObject === s.valueObject;
            throw new Error(
              "FastRoughDefinitelyEquals: Unsupported runtime object type: " +
                t.constructor.name
            );
          },
        },
        {
          key: "GetVariableWithName",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : -1,
              n = this.GetRawVariableWithName(t, e),
              i = C(n, J);
            return null !== i && (n = this.ValueAtVariablePointer(i)), n;
          },
        },
        {
          key: "TryGetDefaultVariableValue",
          value: function (t) {
            var e = W(this._defaultGlobalVariables, t, null);
            return e.exists ? e.result : null;
          },
        },
        {
          key: "GlobalVariableExistsWithName",
          value: function (t) {
            return (
              this._globalVariables.has(t) ||
              (null !== this._defaultGlobalVariables &&
                this._defaultGlobalVariables.has(t))
            );
          },
        },
        {
          key: "GetRawVariableWithName",
          value: function (t, e) {
            if (0 == e || -1 == e) {
              var n = null;
              if (
                null !== this.patch &&
                (n = this.patch.TryGetGlobal(t, null)).exists
              )
                return n.result;
              if ((n = W(this._globalVariables, t, null)).exists)
                return n.result;
              if (
                null !== this._defaultGlobalVariables &&
                (n = W(this._defaultGlobalVariables, t, null)).exists
              )
                return n.result;
              if (null === this._listDefsOrigin)
                return P("VariablesState._listDefsOrigin");
              var i = this._listDefsOrigin.FindSingleItemListWithName(t);
              if (i) return i;
            }
            return this._callStack.GetTemporaryVariableWithName(t, e);
          },
        },
        {
          key: "ValueAtVariablePointer",
          value: function (t) {
            return this.GetVariableWithName(t.variableName, t.contextIndex);
          },
        },
        {
          key: "Assign",
          value: function (t, e) {
            var n = t.variableName;
            if (null === n) return P("name");
            var i = -1,
              r = !1;
            if (
              ((r = t.isNewDeclaration
                ? t.isGlobal
                : this.GlobalVariableExistsWithName(n)),
              t.isNewDeclaration)
            ) {
              var a = C(e, J);
              if (null !== a) e = this.ResolveVariablePointer(a);
            } else {
              var s = null;
              do {
                null != (s = C(this.GetRawVariableWithName(n, i), J)) &&
                  ((n = s.variableName), (r = 0 == (i = s.contextIndex)));
              } while (null != s);
            }
            r
              ? this.SetGlobal(n, e)
              : this._callStack.SetTemporaryVariable(
                  n,
                  e,
                  t.isNewDeclaration,
                  i
                );
          },
        },
        {
          key: "SnapshotDefaultGlobals",
          value: function () {
            this._defaultGlobalVariables = new Map(this._globalVariables);
          },
        },
        {
          key: "RetainListOriginsForAssignment",
          value: function (t, e) {
            var n = b(t, U),
              i = b(e, U);
            n.value &&
              i.value &&
              0 == i.value.Count &&
              i.value.SetInitialOriginNames(n.value.originNames);
          },
        },
        {
          key: "SetGlobal",
          value: function (t, e) {
            var n = null;
            if (
              (null === this.patch && (n = W(this._globalVariables, t, null)),
              null !== this.patch &&
                ((n = this.patch.TryGetGlobal(t, null)).exists ||
                  (n = W(this._globalVariables, t, null))),
              U.RetainListOriginsForAssignment(n.result, e),
              null === t)
            )
              return P("variableName");
            if (
              (null !== this.patch
                ? this.patch.SetGlobal(t, e)
                : this._globalVariables.set(t, e),
              null !== this.variableChangedEvent &&
                null !== n &&
                e !== n.result)
            )
              if (this.batchObservingVariableChanges) {
                if (null === this._changedVariablesForBatchObs)
                  return P("this._changedVariablesForBatchObs");
                null !== this.patch
                  ? this.patch.AddChangedVariable(t)
                  : null !== this._changedVariablesForBatchObs &&
                    this._changedVariablesForBatchObs.add(t);
              } else this.variableChangedEvent(t, e);
          },
        },
        {
          key: "ResolveVariablePointer",
          value: function (t) {
            var e = t.contextIndex;
            -1 == e &&
              (e = this.GetContextIndexOfVariableNamed(t.variableName));
            var n = C(this.GetRawVariableWithName(t.variableName, e), J);
            return null != n ? n : new J(t.variableName, e);
          },
        },
        {
          key: "GetContextIndexOfVariableNamed",
          value: function (t) {
            return this.GlobalVariableExistsWithName(t)
              ? 0
              : this._callStack.currentElementIndex;
          },
        },
        {
          key: "ObserveVariableChange",
          value: function (t) {
            this.variableChangedEventCallbacks.push(t);
          },
        },
      ]),
      i
    );
  })(
    (function () {
      return r(function t() {
        n(this, t);
      });
    })()
  );
  lt.dontSaveDefaultValues = !0;
  var ht = (function () {
      function t(e) {
        n(this, t),
          (this.seed = e % 2147483647),
          this.seed <= 0 && (this.seed += 2147483646);
      }
      return (
        r(t, [
          {
            key: "next",
            value: function () {
              return (this.seed = (48271 * this.seed) % 2147483647);
            },
          },
          {
            key: "nextFloat",
            value: function () {
              return (this.next() - 1) / 2147483646;
            },
          },
        ]),
        t
      );
    })(),
    ct = (function () {
      function t() {
        if (
          (n(this, t),
          (this._changedVariables = new Set()),
          (this._visitCounts = new Map()),
          (this._turnIndices = new Map()),
          1 === arguments.length && null !== arguments[0])
        ) {
          var e = arguments[0];
          (this._globals = new Map(e._globals)),
            (this._changedVariables = new Set(e._changedVariables)),
            (this._visitCounts = new Map(e._visitCounts)),
            (this._turnIndices = new Map(e._turnIndices));
        } else
          (this._globals = new Map()),
            (this._changedVariables = new Set()),
            (this._visitCounts = new Map()),
            (this._turnIndices = new Map());
      }
      return (
        r(t, [
          {
            key: "globals",
            get: function () {
              return this._globals;
            },
          },
          {
            key: "changedVariables",
            get: function () {
              return this._changedVariables;
            },
          },
          {
            key: "visitCounts",
            get: function () {
              return this._visitCounts;
            },
          },
          {
            key: "turnIndices",
            get: function () {
              return this._turnIndices;
            },
          },
          {
            key: "TryGetGlobal",
            value: function (t, e) {
              return null !== t && this._globals.has(t)
                ? { result: this._globals.get(t), exists: !0 }
                : { result: e, exists: !1 };
            },
          },
          {
            key: "SetGlobal",
            value: function (t, e) {
              this._globals.set(t, e);
            },
          },
          {
            key: "AddChangedVariable",
            value: function (t) {
              return this._changedVariables.add(t);
            },
          },
          {
            key: "TryGetVisitCount",
            value: function (t, e) {
              return this._visitCounts.has(t)
                ? { result: this._visitCounts.get(t), exists: !0 }
                : { result: e, exists: !1 };
            },
          },
          {
            key: "SetVisitCount",
            value: function (t, e) {
              this._visitCounts.set(t, e);
            },
          },
          {
            key: "SetTurnIndex",
            value: function (t, e) {
              this._turnIndices.set(t, e);
            },
          },
          {
            key: "TryGetTurnIndex",
            value: function (t, e) {
              return this._turnIndices.has(t)
                ? { result: this._turnIndices.get(t), exists: !0 }
                : { result: e, exists: !1 };
            },
          },
        ]),
        t
      );
    })(),
    ft = (function () {
      function t() {
        n(this, t);
      }
      return (
        r(t, null, [
          {
            key: "TextToDictionary",
            value: function (e) {
              return new t.Reader(e).ToDictionary();
            },
          },
          {
            key: "TextToArray",
            value: function (e) {
              return new t.Reader(e).ToArray();
            },
          },
        ]),
        t
      );
    })();
  !(function (t) {
    var e = (function () {
      function t(e) {
        n(this, t), (this._rootObject = JSON.parse(e));
      }
      return (
        r(t, [
          {
            key: "ToDictionary",
            value: function () {
              return this._rootObject;
            },
          },
          {
            key: "ToArray",
            value: function () {
              return this._rootObject;
            },
          },
        ]),
        t
      );
    })();
    t.Reader = e;
    var i = (function () {
      function e() {
        n(this, e),
          (this._currentPropertyName = null),
          (this._currentString = null),
          (this._stateStack = []),
          (this._collectionStack = []),
          (this._propertyNameStack = []),
          (this._jsonObject = null);
      }
      return (
        r(e, [
          {
            key: "WriteObject",
            value: function (t) {
              this.WriteObjectStart(), t(this), this.WriteObjectEnd();
            },
          },
          {
            key: "WriteObjectStart",
            value: function () {
              this.StartNewObject(!0);
              var e = {};
              if (this.state === t.Writer.State.Property) {
                this.Assert(null !== this.currentCollection),
                  this.Assert(null !== this.currentPropertyName);
                var n = this._propertyNameStack.pop();
                (this.currentCollection[n] = e), this._collectionStack.push(e);
              } else
                this.state === t.Writer.State.Array
                  ? (this.Assert(null !== this.currentCollection),
                    this.currentCollection.push(e),
                    this._collectionStack.push(e))
                  : (this.Assert(this.state === t.Writer.State.None),
                    (this._jsonObject = e),
                    this._collectionStack.push(e));
              this._stateStack.push(
                new t.Writer.StateElement(t.Writer.State.Object)
              );
            },
          },
          {
            key: "WriteObjectEnd",
            value: function () {
              this.Assert(this.state === t.Writer.State.Object),
                this._collectionStack.pop(),
                this._stateStack.pop();
            },
          },
          {
            key: "WriteProperty",
            value: function (t, e) {
              if (
                (this.WritePropertyStart(t), arguments[1] instanceof Function)
              ) {
                (0, arguments[1])(this);
              } else {
                var n = arguments[1];
                this.Write(n);
              }
              this.WritePropertyEnd();
            },
          },
          {
            key: "WriteIntProperty",
            value: function (t, e) {
              this.WritePropertyStart(t),
                this.WriteInt(e),
                this.WritePropertyEnd();
            },
          },
          {
            key: "WriteFloatProperty",
            value: function (t, e) {
              this.WritePropertyStart(t),
                this.WriteFloat(e),
                this.WritePropertyEnd();
            },
          },
          {
            key: "WritePropertyStart",
            value: function (e) {
              this.Assert(this.state === t.Writer.State.Object),
                this._propertyNameStack.push(e),
                this.IncrementChildCount(),
                this._stateStack.push(
                  new t.Writer.StateElement(t.Writer.State.Property)
                );
            },
          },
          {
            key: "WritePropertyEnd",
            value: function () {
              this.Assert(this.state === t.Writer.State.Property),
                this.Assert(1 === this.childCount),
                this._stateStack.pop();
            },
          },
          {
            key: "WritePropertyNameStart",
            value: function () {
              this.Assert(this.state === t.Writer.State.Object),
                this.IncrementChildCount(),
                (this._currentPropertyName = ""),
                this._stateStack.push(
                  new t.Writer.StateElement(t.Writer.State.Property)
                ),
                this._stateStack.push(
                  new t.Writer.StateElement(t.Writer.State.PropertyName)
                );
            },
          },
          {
            key: "WritePropertyNameEnd",
            value: function () {
              this.Assert(this.state === t.Writer.State.PropertyName),
                this.Assert(null !== this._currentPropertyName),
                this._propertyNameStack.push(this._currentPropertyName),
                (this._currentPropertyName = null),
                this._stateStack.pop();
            },
          },
          {
            key: "WritePropertyNameInner",
            value: function (e) {
              this.Assert(this.state === t.Writer.State.PropertyName),
                this.Assert(null !== this._currentPropertyName),
                (this._currentPropertyName += e);
            },
          },
          {
            key: "WriteArrayStart",
            value: function () {
              this.StartNewObject(!0);
              var e = [];
              if (this.state === t.Writer.State.Property) {
                this.Assert(null !== this.currentCollection),
                  this.Assert(null !== this.currentPropertyName);
                var n = this._propertyNameStack.pop();
                (this.currentCollection[n] = e), this._collectionStack.push(e);
              } else
                this.state === t.Writer.State.Array
                  ? (this.Assert(null !== this.currentCollection),
                    this.currentCollection.push(e),
                    this._collectionStack.push(e))
                  : (this.Assert(this.state === t.Writer.State.None),
                    (this._jsonObject = e),
                    this._collectionStack.push(e));
              this._stateStack.push(
                new t.Writer.StateElement(t.Writer.State.Array)
              );
            },
          },
          {
            key: "WriteArrayEnd",
            value: function () {
              this.Assert(this.state === t.Writer.State.Array),
                this._collectionStack.pop(),
                this._stateStack.pop();
            },
          },
          {
            key: "Write",
            value: function (t) {
              null !== t
                ? (this.StartNewObject(!1), this._addToCurrentObject(t))
                : console.error("Warning: trying to write a null value");
            },
          },
          {
            key: "WriteBool",
            value: function (t) {
              null !== t &&
                (this.StartNewObject(!1), this._addToCurrentObject(t));
            },
          },
          {
            key: "WriteInt",
            value: function (t) {
              null !== t &&
                (this.StartNewObject(!1),
                this._addToCurrentObject(Math.floor(t)));
            },
          },
          {
            key: "WriteFloat",
            value: function (t) {
              null !== t &&
                (this.StartNewObject(!1),
                t == Number.POSITIVE_INFINITY
                  ? this._addToCurrentObject(34e37)
                  : t == Number.NEGATIVE_INFINITY
                  ? this._addToCurrentObject(-34e37)
                  : isNaN(t)
                  ? this._addToCurrentObject(0)
                  : this._addToCurrentObject(t));
            },
          },
          {
            key: "WriteNull",
            value: function () {
              this.StartNewObject(!1), this._addToCurrentObject(null);
            },
          },
          {
            key: "WriteStringStart",
            value: function () {
              this.StartNewObject(!1),
                (this._currentString = ""),
                this._stateStack.push(
                  new t.Writer.StateElement(t.Writer.State.String)
                );
            },
          },
          {
            key: "WriteStringEnd",
            value: function () {
              this.Assert(this.state == t.Writer.State.String),
                this._stateStack.pop(),
                this._addToCurrentObject(this._currentString),
                (this._currentString = null);
            },
          },
          {
            key: "WriteStringInner",
            value: function (e) {
              this.Assert(this.state === t.Writer.State.String),
                null !== e
                  ? (this._currentString += e)
                  : console.error("Warning: trying to write a null string");
            },
          },
          {
            key: "toString",
            value: function () {
              return null === this._jsonObject
                ? ""
                : JSON.stringify(this._jsonObject);
            },
          },
          {
            key: "StartNewObject",
            value: function (e) {
              e
                ? this.Assert(
                    this.state === t.Writer.State.None ||
                      this.state === t.Writer.State.Property ||
                      this.state === t.Writer.State.Array
                  )
                : this.Assert(
                    this.state === t.Writer.State.Property ||
                      this.state === t.Writer.State.Array
                  ),
                this.state === t.Writer.State.Property &&
                  this.Assert(0 === this.childCount),
                (this.state !== t.Writer.State.Array &&
                  this.state !== t.Writer.State.Property) ||
                  this.IncrementChildCount();
            },
          },
          {
            key: "state",
            get: function () {
              return this._stateStack.length > 0
                ? this._stateStack[this._stateStack.length - 1].type
                : t.Writer.State.None;
            },
          },
          {
            key: "childCount",
            get: function () {
              return this._stateStack.length > 0
                ? this._stateStack[this._stateStack.length - 1].childCount
                : 0;
            },
          },
          {
            key: "currentCollection",
            get: function () {
              return this._collectionStack.length > 0
                ? this._collectionStack[this._collectionStack.length - 1]
                : null;
            },
          },
          {
            key: "currentPropertyName",
            get: function () {
              return this._propertyNameStack.length > 0
                ? this._propertyNameStack[this._propertyNameStack.length - 1]
                : null;
            },
          },
          {
            key: "IncrementChildCount",
            value: function () {
              this.Assert(this._stateStack.length > 0);
              var t = this._stateStack.pop();
              t.childCount++, this._stateStack.push(t);
            },
          },
          {
            key: "Assert",
            value: function (t) {
              if (!t) throw Error("Assert failed while writing JSON");
            },
          },
          {
            key: "_addToCurrentObject",
            value: function (e) {
              this.Assert(null !== this.currentCollection),
                this.state === t.Writer.State.Array
                  ? (this.Assert(Array.isArray(this.currentCollection)),
                    this.currentCollection.push(e))
                  : this.state === t.Writer.State.Property &&
                    (this.Assert(!Array.isArray(this.currentCollection)),
                    this.Assert(null !== this.currentPropertyName),
                    (this.currentCollection[this.currentPropertyName] = e),
                    this._propertyNameStack.pop());
            },
          },
        ]),
        e
      );
    })();
    (t.Writer = i),
      (function (e) {
        var i;
        ((i = e.State || (e.State = {}))[(i.None = 0)] = "None"),
          (i[(i.Object = 1)] = "Object"),
          (i[(i.Array = 2)] = "Array"),
          (i[(i.Property = 3)] = "Property"),
          (i[(i.PropertyName = 4)] = "PropertyName"),
          (i[(i.String = 5)] = "String");
        var a = r(function e(i) {
          n(this, e),
            (this.type = t.Writer.State.None),
            (this.childCount = 0),
            (this.type = i);
        });
        e.StateElement = a;
      })((i = t.Writer || (t.Writer = {})));
  })(ft || (ft = {}));
  var vt,
    dt,
    pt,
    yt = (function () {
      function t() {
        n(this, t);
        var e = arguments[0],
          i = arguments[1];
        if (((this.name = e), (this.callStack = new ut(i)), arguments[2])) {
          var r = arguments[2];
          this.callStack.SetJsonToken(r.callstack, i),
            (this.outputStream = ot.JArrayToRuntimeObjList(r.outputStream)),
            (this.currentChoices = ot.JArrayToRuntimeObjList(r.currentChoices));
          var a = r.choiceThreads;
          void 0 !== a && this.LoadFlowChoiceThreads(a, i);
        } else (this.outputStream = []), (this.currentChoices = []);
      }
      return (
        r(t, [
          {
            key: "WriteJson",
            value: function (t) {
              var e = this;
              t.WriteObjectStart(),
                t.WriteProperty("callstack", function (t) {
                  return e.callStack.WriteJson(t);
                }),
                t.WriteProperty("outputStream", function (t) {
                  return ot.WriteListRuntimeObjs(t, e.outputStream);
                });
              var n,
                i = !1,
                r = g(this.currentChoices);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var a = n.value;
                  if (null === a.threadAtGeneration)
                    return P("c.threadAtGeneration");
                  (a.originalThreadIndex = a.threadAtGeneration.threadIndex),
                    null ===
                      this.callStack.ThreadWithIndex(a.originalThreadIndex) &&
                      (i ||
                        ((i = !0),
                        t.WritePropertyStart("choiceThreads"),
                        t.WriteObjectStart()),
                      t.WritePropertyStart(a.originalThreadIndex),
                      a.threadAtGeneration.WriteJson(t),
                      t.WritePropertyEnd());
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              i && (t.WriteObjectEnd(), t.WritePropertyEnd()),
                t.WriteProperty("currentChoices", function (t) {
                  t.WriteArrayStart();
                  var n,
                    i = g(e.currentChoices);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var r = n.value;
                      ot.WriteChoice(t, r);
                    }
                  } catch (t) {
                    i.e(t);
                  } finally {
                    i.f();
                  }
                  t.WriteArrayEnd();
                }),
                t.WriteObjectEnd();
            },
          },
          {
            key: "LoadFlowChoiceThreads",
            value: function (t, e) {
              var n,
                i = g(this.currentChoices);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = n.value,
                    a = this.callStack.ThreadWithIndex(r.originalThreadIndex);
                  if (null !== a) r.threadAtGeneration = a.Copy();
                  else {
                    var s = t["".concat(r.originalThreadIndex)];
                    r.threadAtGeneration = new ut.Thread(s, e);
                  }
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
            },
          },
        ]),
        t
      );
    })(),
    mt = (function () {
      function e(t) {
        n(this, e),
          (this.kInkSaveStateVersion = 10),
          (this.kMinCompatibleLoadVersion = 8),
          (this.onDidLoadState = null),
          (this._currentErrors = null),
          (this._currentWarnings = null),
          (this.divertedPointer = $.Null),
          (this._currentTurnIndex = 0),
          (this.storySeed = 0),
          (this.previousRandom = 0),
          (this.didSafeExit = !1),
          (this._currentText = null),
          (this._currentTags = null),
          (this._outputStreamTextDirty = !0),
          (this._outputStreamTagsDirty = !0),
          (this._patch = null),
          (this._aliveFlowNames = null),
          (this._namedFlows = null),
          (this.kDefaultFlowName = "DEFAULT_FLOW"),
          (this._aliveFlowNamesDirty = !0),
          (this.story = t),
          (this._currentFlow = new yt(this.kDefaultFlowName, t)),
          this.OutputStreamDirty(),
          (this._aliveFlowNamesDirty = !0),
          (this._evaluationStack = []),
          (this._variablesState = new lt(this.callStack, t.listDefinitions)),
          (this._visitCounts = new Map()),
          (this._turnIndices = new Map()),
          (this.currentTurnIndex = -1);
        var i = new Date().getTime();
        (this.storySeed = new ht(i).next() % 100),
          (this.previousRandom = 0),
          this.GoToStart();
      }
      return (
        r(e, [
          {
            key: "ToJson",
            value: function () {
              var t = new ft.Writer();
              return this.WriteJson(t), t.toString();
            },
          },
          {
            key: "toJson",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return this.ToJson(t);
            },
          },
          {
            key: "LoadJson",
            value: function (t) {
              var e = ft.TextToDictionary(t);
              this.LoadJsonObj(e),
                null !== this.onDidLoadState && this.onDidLoadState();
            },
          },
          {
            key: "VisitCountAtPathString",
            value: function (t) {
              var e;
              if (null !== this._patch) {
                var n = this.story.ContentAtPath(new k(t)).container;
                if (null === n)
                  throw new Error("Content at path not found: " + t);
                if ((e = this._patch.TryGetVisitCount(n, 0)).exists)
                  return e.result;
              }
              return (e = W(this._visitCounts, t, null)).exists ? e.result : 0;
            },
          },
          {
            key: "VisitCountForContainer",
            value: function (t) {
              if (null === t) return P("container");
              if (!t.visitsShouldBeCounted)
                return (
                  this.story.Error(
                    "Read count for target (" +
                      t.name +
                      " - on " +
                      t.debugMetadata +
                      ") unknown. The story may need to be compiled with countAllVisits flag (-c)."
                  ),
                  0
                );
              if (null !== this._patch) {
                var e = this._patch.TryGetVisitCount(t, 0);
                if (e.exists) return e.result;
              }
              var n = t.path.toString(),
                i = W(this._visitCounts, n, null);
              return i.exists ? i.result : 0;
            },
          },
          {
            key: "IncrementVisitCountForContainer",
            value: function (t) {
              if (null !== this._patch) {
                var e = this.VisitCountForContainer(t);
                return e++, void this._patch.SetVisitCount(t, e);
              }
              var n = t.path.toString(),
                i = W(this._visitCounts, n, null);
              i.exists
                ? this._visitCounts.set(n, i.result + 1)
                : this._visitCounts.set(n, 1);
            },
          },
          {
            key: "RecordTurnIndexVisitToContainer",
            value: function (t) {
              if (null === this._patch) {
                var e = t.path.toString();
                this._turnIndices.set(e, this.currentTurnIndex);
              } else this._patch.SetTurnIndex(t, this.currentTurnIndex);
            },
          },
          {
            key: "TurnsSinceForContainer",
            value: function (t) {
              if (
                (t.turnIndexShouldBeCounted ||
                  this.story.Error(
                    "TURNS_SINCE() for target (" +
                      t.name +
                      " - on " +
                      t.debugMetadata +
                      ") unknown. The story may need to be compiled with countAllVisits flag (-c)."
                  ),
                null !== this._patch)
              ) {
                var e = this._patch.TryGetTurnIndex(t, 0);
                if (e.exists) return this.currentTurnIndex - e.result;
              }
              var n = t.path.toString(),
                i = W(this._turnIndices, n, 0);
              return i.exists ? this.currentTurnIndex - i.result : -1;
            },
          },
          {
            key: "callstackDepth",
            get: function () {
              return this.callStack.depth;
            },
          },
          {
            key: "outputStream",
            get: function () {
              return this._currentFlow.outputStream;
            },
          },
          {
            key: "currentChoices",
            get: function () {
              return this.canContinue ? [] : this._currentFlow.currentChoices;
            },
          },
          {
            key: "generatedChoices",
            get: function () {
              return this._currentFlow.currentChoices;
            },
          },
          {
            key: "currentErrors",
            get: function () {
              return this._currentErrors;
            },
          },
          {
            key: "currentWarnings",
            get: function () {
              return this._currentWarnings;
            },
          },
          {
            key: "variablesState",
            get: function () {
              return this._variablesState;
            },
            set: function (t) {
              this._variablesState = t;
            },
          },
          {
            key: "callStack",
            get: function () {
              return this._currentFlow.callStack;
            },
          },
          {
            key: "evaluationStack",
            get: function () {
              return this._evaluationStack;
            },
          },
          {
            key: "currentTurnIndex",
            get: function () {
              return this._currentTurnIndex;
            },
            set: function (t) {
              this._currentTurnIndex = t;
            },
          },
          {
            key: "currentPathString",
            get: function () {
              var t = this.currentPointer;
              return t.isNull
                ? null
                : null === t.path
                ? P("pointer.path")
                : t.path.toString();
            },
          },
          {
            key: "currentPointer",
            get: function () {
              return this.callStack.currentElement.currentPointer.copy();
            },
            set: function (t) {
              this.callStack.currentElement.currentPointer = t.copy();
            },
          },
          {
            key: "previousPointer",
            get: function () {
              return this.callStack.currentThread.previousPointer.copy();
            },
            set: function (t) {
              this.callStack.currentThread.previousPointer = t.copy();
            },
          },
          {
            key: "canContinue",
            get: function () {
              return !this.currentPointer.isNull && !this.hasError;
            },
          },
          {
            key: "hasError",
            get: function () {
              return (
                null != this.currentErrors && this.currentErrors.length > 0
              );
            },
          },
          {
            key: "hasWarning",
            get: function () {
              return (
                null != this.currentWarnings && this.currentWarnings.length > 0
              );
            },
          },
          {
            key: "currentText",
            get: function () {
              if (this._outputStreamTextDirty) {
                var t,
                  e = new A(),
                  n = !1,
                  i = g(this.outputStream);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var r = t.value,
                      a = C(r, G);
                    if (n || null === a) {
                      var s = C(r, X);
                      null !== s &&
                        (s.commandType == X.CommandType.BeginTag
                          ? (n = !0)
                          : s.commandType == X.CommandType.EndTag && (n = !1));
                    } else e.Append(a.value);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                (this._currentText = this.CleanOutputWhitespace(e.toString())),
                  (this._outputStreamTextDirty = !1);
              }
              return this._currentText;
            },
          },
          {
            key: "CleanOutputWhitespace",
            value: function (t) {
              for (var e = new A(), n = -1, i = 0, r = 0; r < t.length; r++) {
                var a = t.charAt(r),
                  s = " " == a || "\t" == a;
                s && -1 == n && (n = r),
                  s ||
                    ("\n" != a && n > 0 && n != i && e.Append(" "), (n = -1)),
                  "\n" == a && (i = r + 1),
                  s || e.Append(a);
              }
              return e.toString();
            },
          },
          {
            key: "currentTags",
            get: function () {
              if (this._outputStreamTagsDirty) {
                this._currentTags = [];
                var t,
                  e = !1,
                  n = new A(),
                  i = g(this.outputStream);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var r = t.value,
                      a = C(r, X);
                    if (null != a) {
                      if (a.commandType == X.CommandType.BeginTag) {
                        if (e && n.Length > 0) {
                          var s = this.CleanOutputWhitespace(n.toString());
                          this._currentTags.push(s), n.Clear();
                        }
                        e = !0;
                      } else if (a.commandType == X.CommandType.EndTag) {
                        if (n.Length > 0) {
                          var o = this.CleanOutputWhitespace(n.toString());
                          this._currentTags.push(o), n.Clear();
                        }
                        e = !1;
                      }
                    } else if (e) {
                      var u = C(r, G);
                      null !== u && n.Append(u.value);
                    } else {
                      var l = C(r, it);
                      null != l &&
                        null != l.text &&
                        l.text.length > 0 &&
                        this._currentTags.push(l.text);
                    }
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                if (n.Length > 0) {
                  var h = this.CleanOutputWhitespace(n.toString());
                  this._currentTags.push(h), n.Clear();
                }
                this._outputStreamTagsDirty = !1;
              }
              return this._currentTags;
            },
          },
          {
            key: "currentFlowName",
            get: function () {
              return this._currentFlow.name;
            },
          },
          {
            key: "currentFlowIsDefaultFlow",
            get: function () {
              return this._currentFlow.name == this.kDefaultFlowName;
            },
          },
          {
            key: "aliveFlowNames",
            get: function () {
              if (this._aliveFlowNamesDirty) {
                if (((this._aliveFlowNames = []), null != this._namedFlows)) {
                  var t,
                    e = g(this._namedFlows.keys());
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      var n = t.value;
                      n != this.kDefaultFlowName &&
                        this._aliveFlowNames.push(n);
                    }
                  } catch (t) {
                    e.e(t);
                  } finally {
                    e.f();
                  }
                }
                this._aliveFlowNamesDirty = !1;
              }
              return this._aliveFlowNames;
            },
          },
          {
            key: "inExpressionEvaluation",
            get: function () {
              return this.callStack.currentElement.inExpressionEvaluation;
            },
            set: function (t) {
              this.callStack.currentElement.inExpressionEvaluation = t;
            },
          },
          {
            key: "GoToStart",
            value: function () {
              this.callStack.currentElement.currentPointer = $.StartOf(
                this.story.mainContentContainer
              );
            },
          },
          {
            key: "SwitchFlow_Internal",
            value: function (t) {
              if (null === t)
                throw new Error(
                  "Must pass a non-null string to Story.SwitchFlow"
                );
              if (
                (null === this._namedFlows &&
                  ((this._namedFlows = new Map()),
                  this._namedFlows.set(
                    this.kDefaultFlowName,
                    this._currentFlow
                  )),
                t !== this._currentFlow.name)
              ) {
                var e,
                  n = W(this._namedFlows, t, null);
                n.exists
                  ? (e = n.result)
                  : ((e = new yt(t, this.story)),
                    this._namedFlows.set(t, e),
                    (this._aliveFlowNamesDirty = !0)),
                  (this._currentFlow = e),
                  (this.variablesState.callStack = this._currentFlow.callStack),
                  this.OutputStreamDirty();
              }
            },
          },
          {
            key: "SwitchToDefaultFlow_Internal",
            value: function () {
              null !== this._namedFlows &&
                this.SwitchFlow_Internal(this.kDefaultFlowName);
            },
          },
          {
            key: "RemoveFlow_Internal",
            value: function (t) {
              if (null === t)
                throw new Error(
                  "Must pass a non-null string to Story.DestroyFlow"
                );
              if (t === this.kDefaultFlowName)
                throw new Error("Cannot destroy default flow");
              if (
                (this._currentFlow.name === t &&
                  this.SwitchToDefaultFlow_Internal(),
                null === this._namedFlows)
              )
                return P("this._namedFlows");
              this._namedFlows.delete(t), (this._aliveFlowNamesDirty = !0);
            },
          },
          {
            key: "CopyAndStartPatching",
            value: function () {
              var t,
                n,
                i,
                r,
                a,
                s = new e(this.story);
              if (
                ((s._patch = new ct(this._patch)),
                (s._currentFlow.name = this._currentFlow.name),
                (s._currentFlow.callStack = new ut(
                  this._currentFlow.callStack
                )),
                (t = s._currentFlow.currentChoices).push.apply(
                  t,
                  p(this._currentFlow.currentChoices)
                ),
                (n = s._currentFlow.outputStream).push.apply(
                  n,
                  p(this._currentFlow.outputStream)
                ),
                s.OutputStreamDirty(),
                null !== this._namedFlows)
              ) {
                s._namedFlows = new Map();
                var o,
                  u = g(this._namedFlows);
                try {
                  for (u.s(); !(o = u.n()).done; ) {
                    var l = d(o.value, 2),
                      h = l[0],
                      c = l[1];
                    s._namedFlows.set(h, c), (s._aliveFlowNamesDirty = !0);
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
                s._namedFlows.set(this._currentFlow.name, s._currentFlow);
              }
              this.hasError &&
                ((s._currentErrors = []),
                (r = s._currentErrors).push.apply(
                  r,
                  p(this.currentErrors || [])
                ));
              this.hasWarning &&
                ((s._currentWarnings = []),
                (a = s._currentWarnings).push.apply(
                  a,
                  p(this.currentWarnings || [])
                ));
              return (
                (s.variablesState = this.variablesState),
                (s.variablesState.callStack = s.callStack),
                (s.variablesState.patch = s._patch),
                (i = s.evaluationStack).push.apply(i, p(this.evaluationStack)),
                this.divertedPointer.isNull ||
                  (s.divertedPointer = this.divertedPointer.copy()),
                (s.previousPointer = this.previousPointer.copy()),
                (s._visitCounts = this._visitCounts),
                (s._turnIndices = this._turnIndices),
                (s.currentTurnIndex = this.currentTurnIndex),
                (s.storySeed = this.storySeed),
                (s.previousRandom = this.previousRandom),
                (s.didSafeExit = this.didSafeExit),
                s
              );
            },
          },
          {
            key: "RestoreAfterPatch",
            value: function () {
              (this.variablesState.callStack = this.callStack),
                (this.variablesState.patch = this._patch);
            },
          },
          {
            key: "ApplyAnyPatch",
            value: function () {
              if (null !== this._patch) {
                this.variablesState.ApplyPatch();
                var t,
                  e = g(this._patch.visitCounts);
                try {
                  for (e.s(); !(t = e.n()).done; ) {
                    var n = d(t.value, 2),
                      i = n[0],
                      r = n[1];
                    this.ApplyCountChanges(i, r, !0);
                  }
                } catch (t) {
                  e.e(t);
                } finally {
                  e.f();
                }
                var a,
                  s = g(this._patch.turnIndices);
                try {
                  for (s.s(); !(a = s.n()).done; ) {
                    var o = d(a.value, 2),
                      u = o[0],
                      l = o[1];
                    this.ApplyCountChanges(u, l, !1);
                  }
                } catch (t) {
                  s.e(t);
                } finally {
                  s.f();
                }
                this._patch = null;
              }
            },
          },
          {
            key: "ApplyCountChanges",
            value: function (t, e, n) {
              (n ? this._visitCounts : this._turnIndices).set(
                t.path.toString(),
                e
              );
            },
          },
          {
            key: "WriteJson",
            value: function (e) {
              var n = this;
              if (
                (e.WriteObjectStart(),
                e.WritePropertyStart("flows"),
                e.WriteObjectStart(),
                null !== this._namedFlows)
              ) {
                var i,
                  r = g(this._namedFlows);
                try {
                  var a = function () {
                    var t = d(i.value, 2),
                      n = t[0],
                      r = t[1];
                    e.WriteProperty(n, function (t) {
                      return r.WriteJson(t);
                    });
                  };
                  for (r.s(); !(i = r.n()).done; ) a();
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
              } else
                e.WriteProperty(this._currentFlow.name, function (t) {
                  return n._currentFlow.WriteJson(t);
                });
              if (
                (e.WriteObjectEnd(),
                e.WritePropertyEnd(),
                e.WriteProperty("currentFlowName", this._currentFlow.name),
                e.WriteProperty("variablesState", function (t) {
                  return n.variablesState.WriteJson(t);
                }),
                e.WriteProperty("evalStack", function (t) {
                  return ot.WriteListRuntimeObjs(t, n.evaluationStack);
                }),
                !this.divertedPointer.isNull)
              ) {
                if (null === this.divertedPointer.path)
                  return P("divertedPointer");
                e.WriteProperty(
                  "currentDivertTarget",
                  this.divertedPointer.path.componentsString
                );
              }
              e.WriteProperty("visitCounts", function (t) {
                return ot.WriteIntDictionary(t, n._visitCounts);
              }),
                e.WriteProperty("turnIndices", function (t) {
                  return ot.WriteIntDictionary(t, n._turnIndices);
                }),
                e.WriteIntProperty("turnIdx", this.currentTurnIndex),
                e.WriteIntProperty("storySeed", this.storySeed),
                e.WriteIntProperty("previousRandom", this.previousRandom),
                e.WriteIntProperty("inkSaveVersion", this.kInkSaveStateVersion),
                e.WriteIntProperty(
                  "inkFormatVersion",
                  t.Story.inkVersionCurrent
                ),
                e.WriteObjectEnd();
            },
          },
          {
            key: "LoadJsonObj",
            value: function (t) {
              var e = t,
                n = e.inkSaveVersion;
              if (null == n)
                throw new Error("ink save format incorrect, can't load.");
              if (parseInt(n) < this.kMinCompatibleLoadVersion)
                throw new Error(
                  "Ink save format isn't compatible with the current version (saw '" +
                    n +
                    "', but minimum is " +
                    this.kMinCompatibleLoadVersion +
                    "), so can't load."
                );
              var i = e.flows;
              if (null != i) {
                var r = i;
                1 === Object.keys(r).length
                  ? (this._namedFlows = null)
                  : null === this._namedFlows
                  ? (this._namedFlows = new Map())
                  : this._namedFlows.clear();
                for (var a = 0, s = Object.entries(r); a < s.length; a++) {
                  var o = d(s[a], 2),
                    u = o[0],
                    l = o[1],
                    h = new yt(u, this.story, l);
                  if (1 === Object.keys(r).length)
                    this._currentFlow = new yt(u, this.story, l);
                  else {
                    if (null === this._namedFlows) return P("this._namedFlows");
                    this._namedFlows.set(u, h);
                  }
                }
                if (null != this._namedFlows && this._namedFlows.size > 1) {
                  var c = e.currentFlowName;
                  this._currentFlow = this._namedFlows.get(c);
                }
              } else {
                (this._namedFlows = null),
                  (this._currentFlow.name = this.kDefaultFlowName),
                  this._currentFlow.callStack.SetJsonToken(
                    e.callstackThreads,
                    this.story
                  ),
                  (this._currentFlow.outputStream = ot.JArrayToRuntimeObjList(
                    e.outputStream
                  )),
                  (this._currentFlow.currentChoices = ot.JArrayToRuntimeObjList(
                    e.currentChoices
                  ));
                var f = e.choiceThreads;
                this._currentFlow.LoadFlowChoiceThreads(f, this.story);
              }
              this.OutputStreamDirty(),
                (this._aliveFlowNamesDirty = !0),
                this.variablesState.SetJsonToken(e.variablesState),
                (this.variablesState.callStack = this._currentFlow.callStack),
                (this._evaluationStack = ot.JArrayToRuntimeObjList(
                  e.evalStack
                ));
              var v = e.currentDivertTarget;
              if (null != v) {
                var p = new k(v.toString());
                this.divertedPointer = this.story.PointerAtPath(p);
              }
              (this._visitCounts = ot.JObjectToIntDictionary(e.visitCounts)),
                (this._turnIndices = ot.JObjectToIntDictionary(e.turnIndices)),
                (this.currentTurnIndex = parseInt(e.turnIdx)),
                (this.storySeed = parseInt(e.storySeed)),
                (this.previousRandom = parseInt(e.previousRandom));
            },
          },
          {
            key: "ResetErrors",
            value: function () {
              (this._currentErrors = null), (this._currentWarnings = null);
            },
          },
          {
            key: "ResetOutput",
            value: function () {
              var t,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
              (this.outputStream.length = 0),
                null !== e && (t = this.outputStream).push.apply(t, p(e)),
                this.OutputStreamDirty();
            },
          },
          {
            key: "PushToOutputStream",
            value: function (t) {
              var e = C(t, G);
              if (null !== e) {
                var n = this.TrySplittingHeadTailWhitespace(e);
                if (null !== n) {
                  var i,
                    r = g(n);
                  try {
                    for (r.s(); !(i = r.n()).done; ) {
                      var a = i.value;
                      this.PushToOutputStreamIndividual(a);
                    }
                  } catch (t) {
                    r.e(t);
                  } finally {
                    r.f();
                  }
                  return void this.OutputStreamDirty();
                }
              }
              this.PushToOutputStreamIndividual(t), this.OutputStreamDirty();
            },
          },
          {
            key: "PopFromOutputStream",
            value: function (t) {
              this.outputStream.splice(this.outputStream.length - t, t),
                this.OutputStreamDirty();
            },
          },
          {
            key: "TrySplittingHeadTailWhitespace",
            value: function (t) {
              var e = t.value;
              if (null === e) return P("single.value");
              for (var n = -1, i = -1, r = 0; r < e.length; r++) {
                var a = e[r];
                if ("\n" != a) {
                  if (" " == a || "\t" == a) continue;
                  break;
                }
                -1 == n && (n = r), (i = r);
              }
              for (var s = -1, o = -1, u = e.length - 1; u >= 0; u--) {
                var l = e[u];
                if ("\n" != l) {
                  if (" " == l || "\t" == l) continue;
                  break;
                }
                -1 == s && (s = u), (o = u);
              }
              if (-1 == n && -1 == s) return null;
              var h = [],
                c = 0,
                f = e.length;
              if (-1 != n) {
                if (n > 0) {
                  var v = new G(e.substring(0, n));
                  h.push(v);
                }
                h.push(new G("\n")), (c = i + 1);
              }
              if ((-1 != s && (f = o), f > c)) {
                var d = e.substring(c, f);
                h.push(new G(d));
              }
              if (-1 != s && o > i && (h.push(new G("\n")), s < e.length - 1)) {
                var p = e.length - s - 1,
                  y = new G(e.substring(s + 1, s + 1 + p));
                h.push(y);
              }
              return h;
            },
          },
          {
            key: "PushToOutputStreamIndividual",
            value: function (t) {
              var e = C(t, H),
                n = C(t, G),
                i = !0;
              if (e) this.TrimNewlinesFromOutputStream(), (i = !0);
              else if (n) {
                var r = -1,
                  a = this.callStack.currentElement;
                a.type == z.Function && (r = a.functionStartInOutputStream);
                for (
                  var s = -1, o = this.outputStream.length - 1;
                  o >= 0;
                  o--
                ) {
                  var u = this.outputStream[o],
                    l = u instanceof X ? u : null;
                  if (null != (u instanceof H ? u : null)) {
                    s = o;
                    break;
                  }
                  if (null != l && l.commandType == X.CommandType.BeginString) {
                    o >= r && (r = -1);
                    break;
                  }
                }
                if (
                  -1 != (-1 != s && -1 != r ? Math.min(r, s) : -1 != s ? s : r)
                ) {
                  if (n.isNewline) i = !1;
                  else if (
                    n.isNonWhitespace &&
                    (s > -1 && this.RemoveExistingGlue(), r > -1)
                  )
                    for (
                      var h = this.callStack.elements, c = h.length - 1;
                      c >= 0;
                      c--
                    ) {
                      var f = h[c];
                      if (f.type != z.Function) break;
                      f.functionStartInOutputStream = -1;
                    }
                } else
                  n.isNewline &&
                    ((!this.outputStreamEndsInNewline &&
                      this.outputStreamContainsContent) ||
                      (i = !1));
              }
              if (i) {
                if (null === t) return P("obj");
                this.outputStream.push(t), this.OutputStreamDirty();
              }
            },
          },
          {
            key: "TrimNewlinesFromOutputStream",
            value: function () {
              for (var t = -1, e = this.outputStream.length - 1; e >= 0; ) {
                var n = this.outputStream[e],
                  i = C(n, X),
                  r = C(n, G);
                if (null != i || (null != r && r.isNonWhitespace)) break;
                null != r && r.isNewline && (t = e), e--;
              }
              if (t >= 0)
                for (e = t; e < this.outputStream.length; ) {
                  C(this.outputStream[e], G)
                    ? this.outputStream.splice(e, 1)
                    : e++;
                }
              this.OutputStreamDirty();
            },
          },
          {
            key: "RemoveExistingGlue",
            value: function () {
              for (var t = this.outputStream.length - 1; t >= 0; t--) {
                var e = this.outputStream[t];
                if (e instanceof H) this.outputStream.splice(t, 1);
                else if (e instanceof X) break;
              }
              this.OutputStreamDirty();
            },
          },
          {
            key: "outputStreamEndsInNewline",
            get: function () {
              if (this.outputStream.length > 0)
                for (var t = this.outputStream.length - 1; t >= 0; t--) {
                  if (this.outputStream[t] instanceof X) break;
                  var e = this.outputStream[t];
                  if (e instanceof G) {
                    if (e.isNewline) return !0;
                    if (e.isNonWhitespace) break;
                  }
                }
              return !1;
            },
          },
          {
            key: "outputStreamContainsContent",
            get: function () {
              var t,
                e = g(this.outputStream);
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  if (t.value instanceof G) return !0;
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
              return !1;
            },
          },
          {
            key: "inStringEvaluation",
            get: function () {
              for (var t = this.outputStream.length - 1; t >= 0; t--) {
                var e = C(this.outputStream[t], X);
                if (
                  e instanceof X &&
                  e.commandType == X.CommandType.BeginString
                )
                  return !0;
              }
              return !1;
            },
          },
          {
            key: "PushEvaluationStack",
            value: function (t) {
              var e = C(t, U);
              if (e) {
                var n = e.value;
                if (null === n) return P("rawList");
                if (null != n.originNames) {
                  n.origins || (n.origins = []), (n.origins.length = 0);
                  var i,
                    r = g(n.originNames);
                  try {
                    for (r.s(); !(i = r.n()).done; ) {
                      var a = i.value;
                      if (null === this.story.listDefinitions)
                        return P("StoryState.story.listDefinitions");
                      var s = this.story.listDefinitions.TryListGetDefinition(
                        a,
                        null
                      );
                      if (null === s.result) return P("StoryState def.result");
                      n.origins.indexOf(s.result) < 0 &&
                        n.origins.push(s.result);
                    }
                  } catch (t) {
                    r.e(t);
                  } finally {
                    r.f();
                  }
                }
              }
              if (null === t) return P("obj");
              this.evaluationStack.push(t);
            },
          },
          {
            key: "PopEvaluationStack",
            value: function (t) {
              if (void 0 === t) return _(this.evaluationStack.pop());
              if (t > this.evaluationStack.length)
                throw new Error("trying to pop too many objects");
              return _(
                this.evaluationStack.splice(this.evaluationStack.length - t, t)
              );
            },
          },
          {
            key: "PeekEvaluationStack",
            value: function () {
              return this.evaluationStack[this.evaluationStack.length - 1];
            },
          },
          {
            key: "ForceEnd",
            value: function () {
              this.callStack.Reset(),
                (this._currentFlow.currentChoices.length = 0),
                (this.currentPointer = $.Null),
                (this.previousPointer = $.Null),
                (this.didSafeExit = !0);
            },
          },
          {
            key: "TrimWhitespaceFromFunctionEnd",
            value: function () {
              S.Assert(this.callStack.currentElement.type == z.Function);
              var t = this.callStack.currentElement.functionStartInOutputStream;
              -1 == t && (t = 0);
              for (var e = this.outputStream.length - 1; e >= t; e--) {
                var n = this.outputStream[e],
                  i = C(n, G),
                  r = C(n, X);
                if (null != i) {
                  if (r) break;
                  if (!i.isNewline && !i.isInlineWhitespace) break;
                  this.outputStream.splice(e, 1), this.OutputStreamDirty();
                }
              }
            },
          },
          {
            key: "PopCallStack",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              this.callStack.currentElement.type == z.Function &&
                this.TrimWhitespaceFromFunctionEnd(),
                this.callStack.Pop(t);
            },
          },
          {
            key: "SetChosenPath",
            value: function (t, e) {
              this._currentFlow.currentChoices.length = 0;
              var n = this.story.PointerAtPath(t);
              n.isNull || -1 != n.index || (n.index = 0),
                (this.currentPointer = n),
                e && this.currentTurnIndex++;
            },
          },
          {
            key: "StartFunctionEvaluationFromGame",
            value: function (t, e) {
              this.callStack.Push(
                z.FunctionEvaluationFromGame,
                this.evaluationStack.length
              ),
                (this.callStack.currentElement.currentPointer = $.StartOf(t)),
                this.PassArgumentsToEvaluationStack(e);
            },
          },
          {
            key: "PassArgumentsToEvaluationStack",
            value: function (t) {
              if (null !== t)
                for (var e = 0; e < t.length; e++) {
                  if (
                    !(
                      "number" == typeof t[e] ||
                      "string" == typeof t[e] ||
                      "boolean" == typeof t[e] ||
                      t[e] instanceof F
                    )
                  )
                    throw new Error((_(arguments[e]), "null"));
                  this.PushEvaluationStack(j.Create(t[e]));
                }
            },
          },
          {
            key: "TryExitFunctionEvaluationFromGame",
            value: function () {
              return (
                this.callStack.currentElement.type ==
                  z.FunctionEvaluationFromGame &&
                ((this.currentPointer = $.Null), (this.didSafeExit = !0), !0)
              );
            },
          },
          {
            key: "CompleteFunctionEvaluationFromGame",
            value: function () {
              if (
                this.callStack.currentElement.type !=
                z.FunctionEvaluationFromGame
              )
                throw new Error(
                  "Expected external function evaluation to be complete. Stack trace: " +
                    this.callStack.callStackTrace
                );
              for (
                var t =
                    this.callStack.currentElement
                      .evaluationStackHeightWhenPushed,
                  e = null;
                this.evaluationStack.length > t;

              ) {
                var n = this.PopEvaluationStack();
                null === e && (e = n);
              }
              if ((this.PopCallStack(z.FunctionEvaluationFromGame), e)) {
                if (e instanceof et) return null;
                var i = b(e, j);
                return i.valueType == V.DivertTarget
                  ? i.valueObject.toString()
                  : i.valueObject;
              }
              return null;
            },
          },
          {
            key: "AddError",
            value: function (t, e) {
              e
                ? (null == this._currentWarnings &&
                    (this._currentWarnings = []),
                  this._currentWarnings.push(t))
                : (null == this._currentErrors && (this._currentErrors = []),
                  this._currentErrors.push(t));
            },
          },
          {
            key: "OutputStreamDirty",
            value: function () {
              (this._outputStreamTextDirty = !0),
                (this._outputStreamTagsDirty = !0);
            },
          },
        ]),
        e
      );
    })(),
    gt = (function () {
      function t() {
        n(this, t), (this.startTime = void 0);
      }
      return (
        r(t, [
          {
            key: "ElapsedMilliseconds",
            get: function () {
              return void 0 === this.startTime
                ? 0
                : new Date().getTime() - this.startTime;
            },
          },
          {
            key: "Start",
            value: function () {
              this.startTime = new Date().getTime();
            },
          },
          {
            key: "Stop",
            value: function () {
              this.startTime = void 0;
            },
          },
        ]),
        t
      );
    })();
  !(function (t) {
    (t[(t.Author = 0)] = "Author"),
      (t[(t.Warning = 1)] = "Warning"),
      (t[(t.Error = 2)] = "Error");
  })(vt || (vt = {})),
    Number.isInteger ||
      (Number.isInteger = function (t) {
        return (
          "number" == typeof t &&
          isFinite(t) &&
          t > -9007199254740992 &&
          t < 9007199254740992 &&
          Math.floor(t) === t
        );
      }),
    (t.Story = (function (t) {
      a(s, t);
      var i = v(s);
      function s() {
        var t, e;
        n(this, s),
          ((t = i.call(this)).inkVersionMinimumCompatible = 18),
          (t.onError = null),
          (t.onDidContinue = null),
          (t.onMakeChoice = null),
          (t.onEvaluateFunction = null),
          (t.onCompleteEvaluateFunction = null),
          (t.onChoosePathString = null),
          (t._prevContainers = []),
          (t.allowExternalFunctionFallbacks = !1),
          (t._listDefinitions = null),
          (t._variableObservers = null),
          (t._hasValidatedExternals = !1),
          (t._temporaryEvaluationContainer = null),
          (t._asyncContinueActive = !1),
          (t._stateSnapshotAtLastNewline = null),
          (t._sawLookaheadUnsafeFunctionAfterNewline = !1),
          (t._recursiveContinueCount = 0),
          (t._asyncSaving = !1),
          (t._profiler = null);
        var r = null,
          a = null;
        if (arguments[0] instanceof K)
          (e = arguments[0]),
            void 0 !== arguments[1] && (r = arguments[1]),
            (t._mainContentContainer = e);
        else if ("string" == typeof arguments[0]) {
          var o = arguments[0];
          a = ft.TextToDictionary(o);
        } else a = arguments[0];
        if (
          (null != r && (t._listDefinitions = new st(r)),
          (t._externals = new Map()),
          null !== a)
        ) {
          var u = a,
            l = u.inkVersion;
          if (null == l)
            throw new Error(
              "ink version number not found. Are you sure it's a valid .ink.json file?"
            );
          var h = parseInt(l);
          if (h > s.inkVersionCurrent)
            throw new Error(
              "Version of ink used to build story was newer than the current version of the engine"
            );
          if (h < t.inkVersionMinimumCompatible)
            throw new Error(
              "Version of ink used to build story is too old to be loaded by this version of the engine"
            );
          h != s.inkVersionCurrent &&
            console.warn(
              "WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising."
            );
          var c,
            f = u.root;
          if (null == f)
            throw new Error(
              "Root node for ink not found. Are you sure it's a valid .ink.json file?"
            );
          (c = u.listDefs) &&
            (t._listDefinitions = ot.JTokenToListDefinitions(c)),
            (t._mainContentContainer = b(ot.JTokenToRuntimeObject(f), K)),
            t.ResetState();
        }
        return t;
      }
      return (
        r(s, [
          {
            key: "currentChoices",
            get: function () {
              var t = [];
              if (null === this._state) return P("this._state");
              var e,
                n = g(this._state.currentChoices);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var i = e.value;
                  i.isInvisibleDefault || ((i.index = t.length), t.push(i));
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              return t;
            },
          },
          {
            key: "currentText",
            get: function () {
              return (
                this.IfAsyncWeCant(
                  "call currentText since it's a work in progress"
                ),
                this.state.currentText
              );
            },
          },
          {
            key: "currentTags",
            get: function () {
              return (
                this.IfAsyncWeCant(
                  "call currentTags since it's a work in progress"
                ),
                this.state.currentTags
              );
            },
          },
          {
            key: "currentErrors",
            get: function () {
              return this.state.currentErrors;
            },
          },
          {
            key: "currentWarnings",
            get: function () {
              return this.state.currentWarnings;
            },
          },
          {
            key: "currentFlowName",
            get: function () {
              return this.state.currentFlowName;
            },
          },
          {
            key: "currentFlowIsDefaultFlow",
            get: function () {
              return this.state.currentFlowIsDefaultFlow;
            },
          },
          {
            key: "aliveFlowNames",
            get: function () {
              return this.state.aliveFlowNames;
            },
          },
          {
            key: "hasError",
            get: function () {
              return this.state.hasError;
            },
          },
          {
            key: "hasWarning",
            get: function () {
              return this.state.hasWarning;
            },
          },
          {
            key: "variablesState",
            get: function () {
              return this.state.variablesState;
            },
          },
          {
            key: "listDefinitions",
            get: function () {
              return this._listDefinitions;
            },
          },
          {
            key: "state",
            get: function () {
              return this._state;
            },
          },
          { key: "StartProfiling", value: function () {} },
          { key: "EndProfiling", value: function () {} },
          {
            key: "ToJson",
            value: function (t) {
              var e = this,
                n = !1;
              if (
                (t || ((n = !0), (t = new ft.Writer())),
                t.WriteObjectStart(),
                t.WriteIntProperty("inkVersion", s.inkVersionCurrent),
                t.WriteProperty("root", function (t) {
                  return ot.WriteRuntimeContainer(t, e._mainContentContainer);
                }),
                null != this._listDefinitions)
              ) {
                t.WritePropertyStart("listDefs"), t.WriteObjectStart();
                var i,
                  r = g(this._listDefinitions.lists);
                try {
                  for (r.s(); !(i = r.n()).done; ) {
                    var a = i.value;
                    t.WritePropertyStart(a.name), t.WriteObjectStart();
                    var o,
                      u = g(a.items);
                    try {
                      for (u.s(); !(o = u.n()).done; ) {
                        var l = d(o.value, 2),
                          h = l[0],
                          c = l[1],
                          f = I.fromSerializedKey(h),
                          v = c;
                        t.WriteIntProperty(f.itemName, v);
                      }
                    } catch (t) {
                      u.e(t);
                    } finally {
                      u.f();
                    }
                    t.WriteObjectEnd(), t.WritePropertyEnd();
                  }
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
                t.WriteObjectEnd(), t.WritePropertyEnd();
              }
              if ((t.WriteObjectEnd(), n)) return t.toString();
            },
          },
          {
            key: "ResetState",
            value: function () {
              this.IfAsyncWeCant("ResetState"),
                (this._state = new mt(this)),
                this._state.variablesState.ObserveVariableChange(
                  this.VariableStateDidChangeEvent.bind(this)
                ),
                this.ResetGlobals();
            },
          },
          {
            key: "ResetErrors",
            value: function () {
              if (null === this._state) return P("this._state");
              this._state.ResetErrors();
            },
          },
          {
            key: "ResetCallstack",
            value: function () {
              if ((this.IfAsyncWeCant("ResetCallstack"), null === this._state))
                return P("this._state");
              this._state.ForceEnd();
            },
          },
          {
            key: "ResetGlobals",
            value: function () {
              if (this._mainContentContainer.namedContent.get("global decl")) {
                var t = this.state.currentPointer.copy();
                this.ChoosePath(new k("global decl"), !1),
                  this.ContinueInternal(),
                  (this.state.currentPointer = t);
              }
              this.state.variablesState.SnapshotDefaultGlobals();
            },
          },
          {
            key: "SwitchFlow",
            value: function (t) {
              if ((this.IfAsyncWeCant("switch flow"), this._asyncSaving))
                throw new Error(
                  "Story is already in background saving mode, can't switch flow to " +
                    t
                );
              this.state.SwitchFlow_Internal(t);
            },
          },
          {
            key: "RemoveFlow",
            value: function (t) {
              this.state.RemoveFlow_Internal(t);
            },
          },
          {
            key: "SwitchToDefaultFlow",
            value: function () {
              this.state.SwitchToDefaultFlow_Internal();
            },
          },
          {
            key: "Continue",
            value: function () {
              return this.ContinueAsync(0), this.currentText;
            },
          },
          {
            key: "canContinue",
            get: function () {
              return this.state.canContinue;
            },
          },
          {
            key: "asyncContinueComplete",
            get: function () {
              return !this._asyncContinueActive;
            },
          },
          {
            key: "ContinueAsync",
            value: function (t) {
              this._hasValidatedExternals || this.ValidateExternalBindings(),
                this.ContinueInternal(t);
            },
          },
          {
            key: "ContinueInternal",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              null != this._profiler && this._profiler.PreContinue();
              var e = t > 0;
              if (
                (this._recursiveContinueCount++, !this._asyncContinueActive)
              ) {
                if (((this._asyncContinueActive = e), !this.canContinue))
                  throw new Error(
                    "Can't continue - should check canContinue before calling Continue"
                  );
                (this._state.didSafeExit = !1),
                  this._state.ResetOutput(),
                  1 == this._recursiveContinueCount &&
                    (this._state.variablesState.batchObservingVariableChanges =
                      !0);
              }
              var n = new gt();
              n.Start();
              var i = !1;
              this._sawLookaheadUnsafeFunctionAfterNewline = !1;
              do {
                try {
                  i = this.ContinueSingleStep();
                } catch (t) {
                  if (!(t instanceof x)) throw t;
                  this.AddError(t.message, void 0, t.useEndLineNumber);
                  break;
                }
                if (i) break;
                if (this._asyncContinueActive && n.ElapsedMilliseconds > t)
                  break;
              } while (this.canContinue);
              if (
                (n.Stop(),
                (!i && this.canContinue) ||
                  (null !== this._stateSnapshotAtLastNewline &&
                    this.RestoreStateSnapshot(),
                  this.canContinue ||
                    (this.state.callStack.canPopThread &&
                      this.AddError(
                        "Thread available to pop, threads should always be flat by the end of evaluation?"
                      ),
                    0 != this.state.generatedChoices.length ||
                      this.state.didSafeExit ||
                      null != this._temporaryEvaluationContainer ||
                      (this.state.callStack.CanPop(z.Tunnel)
                        ? this.AddError(
                            "unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?"
                          )
                        : this.state.callStack.CanPop(z.Function)
                        ? this.AddError(
                            "unexpectedly reached end of content. Do you need a '~ return'?"
                          )
                        : this.state.callStack.canPop
                        ? this.AddError(
                            "unexpectedly reached end of content for unknown reason. Please debug compiler!"
                          )
                        : this.AddError(
                            "ran out of content. Do you need a '-> DONE' or '-> END'?"
                          ))),
                  (this.state.didSafeExit = !1),
                  (this._sawLookaheadUnsafeFunctionAfterNewline = !1),
                  1 == this._recursiveContinueCount &&
                    (this._state.variablesState.batchObservingVariableChanges =
                      !1),
                  (this._asyncContinueActive = !1),
                  null !== this.onDidContinue && this.onDidContinue()),
                this._recursiveContinueCount--,
                null != this._profiler && this._profiler.PostContinue(),
                this.state.hasError || this.state.hasWarning)
              ) {
                if (null === this.onError) {
                  var r = new A();
                  throw (
                    (r.Append("Ink had "),
                    this.state.hasError &&
                      (r.Append("".concat(this.state.currentErrors.length)),
                      r.Append(
                        1 == this.state.currentErrors.length
                          ? " error"
                          : "errors"
                      ),
                      this.state.hasWarning && r.Append(" and ")),
                    this.state.hasWarning &&
                      (r.Append("".concat(this.state.currentWarnings.length)),
                      r.Append(
                        1 == this.state.currentWarnings.length
                          ? " warning"
                          : "warnings"
                      ),
                      this.state.hasWarning && r.Append(" and ")),
                    r.Append(
                      ". It is strongly suggested that you assign an error handler to story.onError. The first issue was: "
                    ),
                    r.Append(
                      this.state.hasError
                        ? this.state.currentErrors[0]
                        : this.state.currentWarnings[0]
                    ),
                    new x(r.toString()))
                  );
                }
                if (this.state.hasError) {
                  var a,
                    s = g(this.state.currentErrors);
                  try {
                    for (s.s(); !(a = s.n()).done; ) {
                      var o = a.value;
                      this.onError(o, vt.Error);
                    }
                  } catch (o) {
                    s.e(o);
                  } finally {
                    s.f();
                  }
                }
                if (this.state.hasWarning) {
                  var u,
                    l = g(this.state.currentWarnings);
                  try {
                    for (l.s(); !(u = l.n()).done; ) {
                      var h = u.value;
                      this.onError(h, vt.Warning);
                    }
                  } catch (o) {
                    l.e(o);
                  } finally {
                    l.f();
                  }
                }
                this.ResetErrors();
              }
            },
          },
          {
            key: "ContinueSingleStep",
            value: function () {
              if (
                (null != this._profiler && this._profiler.PreStep(),
                this.Step(),
                null != this._profiler && this._profiler.PostStep(),
                this.canContinue ||
                  this.state.callStack.elementIsEvaluateFromGame ||
                  this.TryFollowDefaultInvisibleChoice(),
                null != this._profiler && this._profiler.PreSnapshot(),
                !this.state.inStringEvaluation)
              ) {
                if (null !== this._stateSnapshotAtLastNewline) {
                  if (null === this._stateSnapshotAtLastNewline.currentTags)
                    return P("this._stateAtLastNewline.currentTags");
                  if (null === this.state.currentTags)
                    return P("this.state.currentTags");
                  var t = this.CalculateNewlineOutputStateChange(
                    this._stateSnapshotAtLastNewline.currentText,
                    this.state.currentText,
                    this._stateSnapshotAtLastNewline.currentTags.length,
                    this.state.currentTags.length
                  );
                  if (
                    t == s.OutputStateChange.ExtendedBeyondNewline ||
                    this._sawLookaheadUnsafeFunctionAfterNewline
                  )
                    return this.RestoreStateSnapshot(), !0;
                  t == s.OutputStateChange.NewlineRemoved &&
                    this.DiscardSnapshot();
                }
                this.state.outputStreamEndsInNewline &&
                  (this.canContinue
                    ? null == this._stateSnapshotAtLastNewline &&
                      this.StateSnapshot()
                    : this.DiscardSnapshot());
              }
              return (
                null != this._profiler && this._profiler.PostSnapshot(), !1
              );
            },
          },
          {
            key: "CalculateNewlineOutputStateChange",
            value: function (t, e, n, i) {
              if (null === t) return P("prevText");
              if (null === e) return P("currText");
              var r =
                e.length >= t.length &&
                t.length > 0 &&
                "\n" == e.charAt(t.length - 1);
              if (n == i && t.length == e.length && r)
                return s.OutputStateChange.NoChange;
              if (!r) return s.OutputStateChange.NewlineRemoved;
              if (i > n) return s.OutputStateChange.ExtendedBeyondNewline;
              for (var a = t.length; a < e.length; a++) {
                var o = e.charAt(a);
                if (" " != o && "\t" != o)
                  return s.OutputStateChange.ExtendedBeyondNewline;
              }
              return s.OutputStateChange.NoChange;
            },
          },
          {
            key: "ContinueMaximally",
            value: function () {
              this.IfAsyncWeCant("ContinueMaximally");
              for (var t = new A(); this.canContinue; )
                t.Append(this.Continue());
              return t.toString();
            },
          },
          {
            key: "ContentAtPath",
            value: function (t) {
              return this.mainContentContainer.ContentAtPath(t);
            },
          },
          {
            key: "KnotContainerWithName",
            value: function (t) {
              var e = this.mainContentContainer.namedContent.get(t);
              return e instanceof K ? e : null;
            },
          },
          {
            key: "PointerAtPath",
            value: function (t) {
              if (0 == t.length) return $.Null;
              var e = new $(),
                n = t.length,
                i = null;
              return null === t.lastComponent
                ? P("path.lastComponent")
                : (t.lastComponent.isIndex
                    ? ((n = t.length - 1),
                      (i = this.mainContentContainer.ContentAtPath(
                        t,
                        void 0,
                        n
                      )),
                      (e.container = i.container),
                      (e.index = t.lastComponent.index))
                    : ((i = this.mainContentContainer.ContentAtPath(t)),
                      (e.container = i.container),
                      (e.index = -1)),
                  null == i.obj || (i.obj == this.mainContentContainer && n > 0)
                    ? this.Error(
                        "Failed to find content at path '" +
                          t +
                          "', and no approximation of it was possible."
                      )
                    : i.approximate &&
                      this.Warning(
                        "Failed to find content at path '" +
                          t +
                          "', so it was approximated to: '" +
                          i.obj.path +
                          "'."
                      ),
                  e);
            },
          },
          {
            key: "StateSnapshot",
            value: function () {
              (this._stateSnapshotAtLastNewline = this._state),
                (this._state = this._state.CopyAndStartPatching());
            },
          },
          {
            key: "RestoreStateSnapshot",
            value: function () {
              null === this._stateSnapshotAtLastNewline &&
                P("_stateSnapshotAtLastNewline"),
                this._stateSnapshotAtLastNewline.RestoreAfterPatch(),
                (this._state = this._stateSnapshotAtLastNewline),
                (this._stateSnapshotAtLastNewline = null),
                this._asyncSaving || this._state.ApplyAnyPatch();
            },
          },
          {
            key: "DiscardSnapshot",
            value: function () {
              this._asyncSaving || this._state.ApplyAnyPatch(),
                (this._stateSnapshotAtLastNewline = null);
            },
          },
          {
            key: "CopyStateForBackgroundThreadSave",
            value: function () {
              if (
                (this.IfAsyncWeCant("start saving on a background thread"),
                this._asyncSaving)
              )
                throw new Error(
                  "Story is already in background saving mode, can't call CopyStateForBackgroundThreadSave again!"
                );
              var t = this._state;
              return (
                (this._state = this._state.CopyAndStartPatching()),
                (this._asyncSaving = !0),
                t
              );
            },
          },
          {
            key: "BackgroundSaveComplete",
            value: function () {
              null === this._stateSnapshotAtLastNewline &&
                this._state.ApplyAnyPatch(),
                (this._asyncSaving = !1);
            },
          },
          {
            key: "Step",
            value: function () {
              var t = !0,
                e = this.state.currentPointer.copy();
              if (!e.isNull) {
                for (
                  var n = C(e.Resolve(), K);
                  n && (this.VisitContainer(n, !0), 0 != n.content.length);

                )
                  n = C((e = $.StartOf(n)).Resolve(), K);
                (this.state.currentPointer = e.copy()),
                  null != this._profiler &&
                    this._profiler.Step(this.state.callStack);
                var i = e.Resolve(),
                  r = this.PerformLogicAndFlowControl(i);
                if (!this.state.currentPointer.isNull) {
                  r && (t = !1);
                  var a = C(i, Q);
                  if (a) {
                    var s = this.ProcessChoice(a);
                    s && this.state.generatedChoices.push(s),
                      (i = null),
                      (t = !1);
                  }
                  if ((i instanceof K && (t = !1), t)) {
                    var o = C(i, J);
                    if (o && -1 == o.contextIndex) {
                      var u = this.state.callStack.ContextForVariableNamed(
                        o.variableName
                      );
                      i = new J(o.variableName, u);
                    }
                    this.state.inExpressionEvaluation
                      ? this.state.PushEvaluationStack(i)
                      : this.state.PushToOutputStream(i);
                  }
                  this.NextContent();
                  var l = C(i, X);
                  l &&
                    l.commandType == X.CommandType.StartThread &&
                    this.state.callStack.PushThread();
                }
              }
            },
          },
          {
            key: "VisitContainer",
            value: function (t, e) {
              (t.countingAtStartOnly && !e) ||
                (t.visitsShouldBeCounted &&
                  this.state.IncrementVisitCountForContainer(t),
                t.turnIndexShouldBeCounted &&
                  this.state.RecordTurnIndexVisitToContainer(t));
            },
          },
          {
            key: "VisitChangedContainersDueToDivert",
            value: function () {
              var t = this.state.previousPointer.copy(),
                e = this.state.currentPointer.copy();
              if (!e.isNull && -1 != e.index) {
                if (((this._prevContainers.length = 0), !t.isNull))
                  for (var n = C(t.Resolve(), K) || C(t.container, K); n; )
                    this._prevContainers.push(n), (n = C(n.parent, K));
                var i = e.Resolve();
                if (null != i)
                  for (
                    var r = C(i.parent, K), a = !0;
                    r &&
                    (this._prevContainers.indexOf(r) < 0 ||
                      r.countingAtStartOnly);

                  ) {
                    var s = r.content.length > 0 && i == r.content[0] && a;
                    s || (a = !1),
                      this.VisitContainer(r, s),
                      (i = r),
                      (r = C(r.parent, K));
                  }
              }
            },
          },
          {
            key: "PopChoiceStringAndTags",
            value: function (t) {
              for (
                var e = b(this.state.PopEvaluationStack(), G);
                this.state.evaluationStack.length > 0 &&
                null != C(this.state.PeekEvaluationStack(), it);

              ) {
                var n = C(this.state.PopEvaluationStack(), it);
                n && t.push(n.text);
              }
              return e.value;
            },
          },
          {
            key: "ProcessChoice",
            value: function (t) {
              var e = !0;
              if (t.hasCondition) {
                var n = this.state.PopEvaluationStack();
                this.IsTruthy(n) || (e = !1);
              }
              var i = "",
                r = "",
                a = [];
              (t.hasChoiceOnlyContent &&
                (r = this.PopChoiceStringAndTags(a) || ""),
              t.hasStartContent && (i = this.PopChoiceStringAndTags(a) || ""),
              t.onceOnly) &&
                this.state.VisitCountForContainer(t.choiceTarget) > 0 &&
                (e = !1);
              if (!e) return null;
              var s = new rt();
              return (
                (s.targetPath = t.pathOnChoice),
                (s.sourcePath = t.path.toString()),
                (s.isInvisibleDefault = t.isInvisibleDefault),
                (s.threadAtGeneration = this.state.callStack.ForkThread()),
                (s.tags = a.reverse()),
                (s.text = (i + r).replace(/^[ \t]+|[ \t]+$/g, "")),
                s
              );
            },
          },
          {
            key: "IsTruthy",
            value: function (t) {
              if (t instanceof j) {
                var e = t;
                if (e instanceof M) {
                  var n = e;
                  return (
                    this.Error(
                      "Shouldn't use a divert target (to " +
                        n.targetPath +
                        ") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"
                    ),
                    !1
                  );
                }
                return e.isTruthy;
              }
              return !1;
            },
          },
          {
            key: "PerformLogicAndFlowControl",
            value: function (t) {
              if (null == t) return !1;
              if (t instanceof Y) {
                var e = t;
                if (e.isConditional) {
                  var n = this.state.PopEvaluationStack();
                  if (!this.IsTruthy(n)) return !0;
                }
                if (e.hasVariableTarget) {
                  var i = e.variableDivertName,
                    r = this.state.variablesState.GetVariableWithName(i);
                  if (null == r)
                    this.Error(
                      "Tried to divert using a target from a variable that could not be found (" +
                        i +
                        ")"
                    );
                  else if (!(r instanceof M)) {
                    var a = C(r, D),
                      s =
                        "Tried to divert to a target from a variable, but the variable (" +
                        i +
                        ") didn't contain a divert target, it ";
                    a instanceof D && 0 == a.value
                      ? (s += "was empty/null (the value 0).")
                      : (s += "contained '" + r + "'."),
                      this.Error(s);
                  }
                  var o = b(r, M);
                  this.state.divertedPointer = this.PointerAtPath(o.targetPath);
                } else {
                  if (e.isExternal)
                    return (
                      this.CallExternalFunction(
                        e.targetPathString,
                        e.externalArgs
                      ),
                      !0
                    );
                  this.state.divertedPointer = e.targetPointer.copy();
                }
                return (
                  e.pushesToStack &&
                    this.state.callStack.Push(
                      e.stackPushType,
                      void 0,
                      this.state.outputStream.length
                    ),
                  this.state.divertedPointer.isNull &&
                    !e.isExternal &&
                    (e && e.debugMetadata && null != e.debugMetadata.sourceName
                      ? this.Error(
                          "Divert target doesn't exist: " +
                            e.debugMetadata.sourceName
                        )
                      : this.Error("Divert resolution failed: " + e)),
                  !0
                );
              }
              if (t instanceof X) {
                var u = t;
                switch (u.commandType) {
                  case X.CommandType.EvalStart:
                    this.Assert(
                      !1 === this.state.inExpressionEvaluation,
                      "Already in expression evaluation?"
                    ),
                      (this.state.inExpressionEvaluation = !0);
                    break;
                  case X.CommandType.EvalEnd:
                    this.Assert(
                      !0 === this.state.inExpressionEvaluation,
                      "Not in expression evaluation mode"
                    ),
                      (this.state.inExpressionEvaluation = !1);
                    break;
                  case X.CommandType.EvalOutput:
                    if (this.state.evaluationStack.length > 0) {
                      var l = this.state.PopEvaluationStack();
                      if (!(l instanceof et)) {
                        var h = new G(l.toString());
                        this.state.PushToOutputStream(h);
                      }
                    }
                    break;
                  case X.CommandType.NoOp:
                    break;
                  case X.CommandType.Duplicate:
                    this.state.PushEvaluationStack(
                      this.state.PeekEvaluationStack()
                    );
                    break;
                  case X.CommandType.PopEvaluatedValue:
                    this.state.PopEvaluationStack();
                    break;
                  case X.CommandType.PopFunction:
                  case X.CommandType.PopTunnel:
                    var c =
                        u.commandType == X.CommandType.PopFunction
                          ? z.Function
                          : z.Tunnel,
                      f = null;
                    if (c == z.Tunnel) {
                      var v = this.state.PopEvaluationStack();
                      null === (f = C(v, M)) &&
                        this.Assert(
                          v instanceof et,
                          "Expected void if ->-> doesn't override target"
                        );
                    }
                    if (this.state.TryExitFunctionEvaluationFromGame()) break;
                    if (
                      this.state.callStack.currentElement.type == c &&
                      this.state.callStack.canPop
                    )
                      this.state.PopCallStack(),
                        f &&
                          (this.state.divertedPointer = this.PointerAtPath(
                            f.targetPath
                          ));
                    else {
                      var d = new Map();
                      d.set(z.Function, "function return statement (~ return)"),
                        d.set(z.Tunnel, "tunnel onwards statement (->->)");
                      var p = d.get(this.state.callStack.currentElement.type);
                      this.state.callStack.canPop ||
                        (p = "end of flow (-> END or choice)");
                      var y = "Found " + d.get(c) + ", when expected " + p;
                      this.Error(y);
                    }
                    break;
                  case X.CommandType.BeginString:
                    this.state.PushToOutputStream(u),
                      this.Assert(
                        !0 === this.state.inExpressionEvaluation,
                        "Expected to be in an expression when evaluating a string"
                      ),
                      (this.state.inExpressionEvaluation = !1);
                    break;
                  case X.CommandType.BeginTag:
                    this.state.PushToOutputStream(u);
                    break;
                  case X.CommandType.EndTag:
                    if (this.state.inStringEvaluation) {
                      for (
                        var m = [],
                          S = 0,
                          k = this.state.outputStream.length - 1;
                        k >= 0;
                        --k
                      ) {
                        var w = this.state.outputStream[k];
                        S++;
                        var _ = C(w, X);
                        if (null != _) {
                          if (_.commandType == X.CommandType.BeginTag) break;
                          this.Error(
                            "Unexpected ControlCommand while extracting tag from choice"
                          );
                          break;
                        }
                        w instanceof G && m.push(w);
                      }
                      this.state.PopFromOutputStream(S);
                      for (var T = new A(), E = 0, O = m; E < O.length; E++) {
                        var N = O[E];
                        T.Append(N.toString());
                      }
                      var W = new it(
                        this.state.CleanOutputWhitespace(T.toString())
                      );
                      this.state.PushEvaluationStack(W);
                    } else this.state.PushToOutputStream(u);
                    break;
                  case X.CommandType.EndString:
                    for (
                      var V = [],
                        L = [],
                        R = 0,
                        B = this.state.outputStream.length - 1;
                      B >= 0;
                      --B
                    ) {
                      var J = this.state.outputStream[B];
                      R++;
                      var q = C(J, X);
                      if (q && q.commandType == X.CommandType.BeginString)
                        break;
                      J instanceof it && L.push(J), J instanceof G && V.push(J);
                    }
                    this.state.PopFromOutputStream(R);
                    for (var H = 0, Q = L; H < Q.length; H++) {
                      var rt = Q[H];
                      this.state.PushToOutputStream(rt);
                    }
                    V = V.reverse();
                    var at,
                      st = new A(),
                      ot = g(V);
                    try {
                      for (ot.s(); !(at = ot.n()).done; ) {
                        var ut = at.value;
                        st.Append(ut.toString());
                      }
                    } catch (t) {
                      ot.e(t);
                    } finally {
                      ot.f();
                    }
                    (this.state.inExpressionEvaluation = !0),
                      this.state.PushEvaluationStack(new G(st.toString()));
                    break;
                  case X.CommandType.ChoiceCount:
                    var lt = this.state.generatedChoices.length;
                    this.state.PushEvaluationStack(new D(lt));
                    break;
                  case X.CommandType.Turns:
                    this.state.PushEvaluationStack(
                      new D(this.state.currentTurnIndex + 1)
                    );
                    break;
                  case X.CommandType.TurnsSince:
                  case X.CommandType.ReadCount:
                    var ct = this.state.PopEvaluationStack();
                    if (!(ct instanceof M)) {
                      var ft = "";
                      ct instanceof D &&
                        (ft =
                          ". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?"),
                        this.Error(
                          "TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw " +
                            ct +
                            ft
                        );
                      break;
                    }
                    var vt,
                      dt = b(ct, M),
                      pt = C(this.ContentAtPath(dt.targetPath).correctObj, K);
                    null != pt
                      ? (vt =
                          u.commandType == X.CommandType.TurnsSince
                            ? this.state.TurnsSinceForContainer(pt)
                            : this.state.VisitCountForContainer(pt))
                      : ((vt =
                          u.commandType == X.CommandType.TurnsSince ? -1 : 0),
                        this.Warning(
                          "Failed to find container for " +
                            u.toString() +
                            " lookup at " +
                            dt.targetPath.toString()
                        )),
                      this.state.PushEvaluationStack(new D(vt));
                    break;
                  case X.CommandType.Random:
                    var yt = C(this.state.PopEvaluationStack(), D),
                      mt = C(this.state.PopEvaluationStack(), D);
                    if (null == mt || mt instanceof D == !1)
                      return this.Error(
                        "Invalid value for minimum parameter of RANDOM(min, max)"
                      );
                    if (null == yt || mt instanceof D == !1)
                      return this.Error(
                        "Invalid value for maximum parameter of RANDOM(min, max)"
                      );
                    if (null === yt.value) return P("maxInt.value");
                    if (null === mt.value) return P("minInt.value");
                    var gt = yt.value - mt.value + 1;
                    (!isFinite(gt) || gt > Number.MAX_SAFE_INTEGER) &&
                      ((gt = Number.MAX_SAFE_INTEGER),
                      this.Error(
                        "RANDOM was called with a range that exceeds the size that ink numbers can use."
                      )),
                      gt <= 0 &&
                        this.Error(
                          "RANDOM was called with minimum as " +
                            mt.value +
                            " and maximum as " +
                            yt.value +
                            ". The maximum must be larger"
                        );
                    var St = this.state.storySeed + this.state.previousRandom,
                      kt = new ht(St).next(),
                      Ct = (kt % gt) + mt.value;
                    this.state.PushEvaluationStack(new D(Ct)),
                      (this.state.previousRandom = kt);
                    break;
                  case X.CommandType.SeedRandom:
                    var bt = C(this.state.PopEvaluationStack(), D);
                    if (null == bt || bt instanceof D == !1)
                      return this.Error("Invalid value passed to SEED_RANDOM");
                    if (null === bt.value) return P("minInt.value");
                    (this.state.storySeed = bt.value),
                      (this.state.previousRandom = 0),
                      this.state.PushEvaluationStack(new et());
                    break;
                  case X.CommandType.VisitIndex:
                    var wt =
                      this.state.VisitCountForContainer(
                        this.state.currentPointer.container
                      ) - 1;
                    this.state.PushEvaluationStack(new D(wt));
                    break;
                  case X.CommandType.SequenceShuffleIndex:
                    var _t = this.NextSequenceShuffleIndex();
                    this.state.PushEvaluationStack(new D(_t));
                    break;
                  case X.CommandType.StartThread:
                    break;
                  case X.CommandType.Done:
                    this.state.callStack.canPopThread
                      ? this.state.callStack.PopThread()
                      : ((this.state.didSafeExit = !0),
                        (this.state.currentPointer = $.Null));
                    break;
                  case X.CommandType.End:
                    this.state.ForceEnd();
                    break;
                  case X.CommandType.ListFromInt:
                    var Tt = C(this.state.PopEvaluationStack(), D),
                      Et = b(this.state.PopEvaluationStack(), G);
                    if (null === Tt)
                      throw new x(
                        "Passed non-integer when creating a list element from a numerical value."
                      );
                    var Ot = null;
                    if (null === this.listDefinitions)
                      return P("this.listDefinitions");
                    var Pt = this.listDefinitions.TryListGetDefinition(
                      Et.value,
                      null
                    );
                    if (!Pt.exists)
                      throw new x("Failed to find LIST called " + Et.value);
                    if (null === Tt.value) return P("minInt.value");
                    var Nt = Pt.result.TryGetItemWithValue(Tt.value, I.Null);
                    Nt.exists && (Ot = new U(Nt.result, Tt.value)),
                      null == Ot && (Ot = new U()),
                      this.state.PushEvaluationStack(Ot);
                    break;
                  case X.CommandType.ListRange:
                    var At = C(this.state.PopEvaluationStack(), j),
                      It = C(this.state.PopEvaluationStack(), j),
                      Ft = C(this.state.PopEvaluationStack(), U);
                    if (null === Ft || null === It || null === At)
                      throw new x(
                        "Expected list, minimum and maximum for LIST_RANGE"
                      );
                    if (null === Ft.value) return P("targetList.value");
                    var xt = Ft.value.ListWithSubRange(
                      It.valueObject,
                      At.valueObject
                    );
                    this.state.PushEvaluationStack(new U(xt));
                    break;
                  case X.CommandType.ListRandom:
                    var Wt = this.state.PopEvaluationStack();
                    if (null === Wt)
                      throw new x("Expected list for LIST_RANDOM");
                    var Vt = Wt.value,
                      Lt = null;
                    if (null === Vt) throw P("list");
                    if (0 == Vt.Count) Lt = new F();
                    else {
                      for (
                        var jt =
                            this.state.storySeed + this.state.previousRandom,
                          Rt = new ht(jt).next(),
                          Dt = Rt % Vt.Count,
                          Bt = Vt.entries(),
                          Gt = 0;
                        Gt <= Dt - 1;
                        Gt++
                      )
                        Bt.next();
                      var Mt = Bt.next().value,
                        Jt = { Key: I.fromSerializedKey(Mt[0]), Value: Mt[1] };
                      if (null === Jt.Key.originName)
                        return P("randomItem.Key.originName");
                      (Lt = new F(Jt.Key.originName, this)).Add(
                        Jt.Key,
                        Jt.Value
                      ),
                        (this.state.previousRandom = Rt);
                    }
                    this.state.PushEvaluationStack(new U(Lt));
                    break;
                  default:
                    this.Error("unhandled ControlCommand: " + u);
                }
                return !0;
              }
              if (t instanceof tt) {
                var Ut = t,
                  qt = this.state.PopEvaluationStack();
                return this.state.variablesState.Assign(Ut, qt), !0;
              }
              if (t instanceof Z) {
                var Kt = t,
                  zt = null;
                if (null != Kt.pathForCount) {
                  var Ht = Kt.containerForCount,
                    Xt = this.state.VisitCountForContainer(Ht);
                  zt = new D(Xt);
                } else
                  null ==
                    (zt = this.state.variablesState.GetVariableWithName(
                      Kt.name
                    )) &&
                    (this.Warning(
                      "Variable not found: '" +
                        Kt.name +
                        "'. Using default value of 0 (false). This can happen with temporary variables if the declaration hasn't yet been hit. Globals are always given a default value on load if a value doesn't exist in the save state."
                    ),
                    (zt = new D(0)));
                return this.state.PushEvaluationStack(zt), !0;
              }
              if (t instanceof nt) {
                var $t = t,
                  Yt = this.state.PopEvaluationStack($t.numberOfParameters),
                  Qt = $t.Call(Yt);
                return this.state.PushEvaluationStack(Qt), !0;
              }
              return !1;
            },
          },
          {
            key: "ChoosePathString",
            value: function (t) {
              var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
              if (
                (this.IfAsyncWeCant("call ChoosePathString right now"),
                null !== this.onChoosePathString &&
                  this.onChoosePathString(t, n),
                e)
              )
                this.ResetCallstack();
              else if (this.state.callStack.currentElement.type == z.Function) {
                var i = "",
                  r =
                    this.state.callStack.currentElement.currentPointer
                      .container;
                throw (
                  (null != r && (i = "(" + r.path.toString() + ") "),
                  new Error(
                    "Story was running a function " +
                      i +
                      "when you called ChoosePathString(" +
                      t +
                      ") - this is almost certainly not not what you want! Full stack trace: \n" +
                      this.state.callStack.callStackTrace
                  ))
                );
              }
              this.state.PassArgumentsToEvaluationStack(n),
                this.ChoosePath(new k(t));
            },
          },
          {
            key: "IfAsyncWeCant",
            value: function (t) {
              if (this._asyncContinueActive)
                throw new Error(
                  "Can't " +
                    t +
                    ". Story is in the middle of a ContinueAsync(). Make more ContinueAsync() calls or a single Continue() call beforehand."
                );
            },
          },
          {
            key: "ChoosePath",
            value: function (t) {
              var e =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              this.state.SetChosenPath(t, e),
                this.VisitChangedContainersDueToDivert();
            },
          },
          {
            key: "ChooseChoiceIndex",
            value: function (t) {
              var e = this.currentChoices;
              this.Assert(t >= 0 && t < e.length, "choice out of range");
              var n = e[t];
              return (
                null !== this.onMakeChoice && this.onMakeChoice(n),
                null === n.threadAtGeneration
                  ? P("choiceToChoose.threadAtGeneration")
                  : null === n.targetPath
                  ? P("choiceToChoose.targetPath")
                  : ((this.state.callStack.currentThread =
                      n.threadAtGeneration),
                    void this.ChoosePath(n.targetPath))
              );
            },
          },
          {
            key: "HasFunction",
            value: function (t) {
              try {
                return null != this.KnotContainerWithName(t);
              } catch (t) {
                return !1;
              }
            },
          },
          {
            key: "EvaluateFunction",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              if (
                (null !== this.onEvaluateFunction &&
                  this.onEvaluateFunction(t, e),
                this.IfAsyncWeCant("evaluate a function"),
                null == t)
              )
                throw new Error("Function is null");
              if ("" == t || "" == t.trim())
                throw new Error("Function is empty or white space.");
              var i = this.KnotContainerWithName(t);
              if (null == i)
                throw new Error("Function doesn't exist: '" + t + "'");
              var r = [];
              r.push.apply(r, p(this.state.outputStream)),
                this._state.ResetOutput(),
                this.state.StartFunctionEvaluationFromGame(i, e);
              for (var a = new A(); this.canContinue; )
                a.Append(this.Continue());
              var s = a.toString();
              this._state.ResetOutput(r);
              var o = this.state.CompleteFunctionEvaluationFromGame();
              return (
                null != this.onCompleteEvaluateFunction &&
                  this.onCompleteEvaluateFunction(t, e, s, o),
                n ? { returned: o, output: s } : o
              );
            },
          },
          {
            key: "EvaluateExpression",
            value: function (t) {
              var e = this.state.callStack.elements.length;
              this.state.callStack.Push(z.Tunnel),
                (this._temporaryEvaluationContainer = t),
                this.state.GoToStart();
              var n = this.state.evaluationStack.length;
              return (
                this.Continue(),
                (this._temporaryEvaluationContainer = null),
                this.state.callStack.elements.length > e &&
                  this.state.PopCallStack(),
                this.state.evaluationStack.length > n
                  ? this.state.PopEvaluationStack()
                  : null
              );
            },
          },
          {
            key: "CallExternalFunction",
            value: function (t, n) {
              if (null === t) return P("funcName");
              var i = this._externals.get(t),
                r = null,
                a = void 0 !== i;
              if (
                !a ||
                i.lookAheadSafe ||
                null === this._stateSnapshotAtLastNewline
              ) {
                if (!a) {
                  if (this.allowExternalFunctionFallbacks)
                    return (
                      (r = this.KnotContainerWithName(t)),
                      this.Assert(
                        null !== r,
                        "Trying to call EXTERNAL function '" +
                          t +
                          "' which has not been bound, and fallback ink function could not be found."
                      ),
                      this.state.callStack.Push(
                        z.Function,
                        void 0,
                        this.state.outputStream.length
                      ),
                      void (this.state.divertedPointer = $.StartOf(r))
                    );
                  this.Assert(
                    !1,
                    "Trying to call EXTERNAL function '" +
                      t +
                      "' which has not been bound (and ink fallbacks disabled)."
                  );
                }
                for (var s = [], o = 0; o < n; ++o) {
                  var u = b(this.state.PopEvaluationStack(), j).valueObject;
                  s.push(u);
                }
                s.reverse();
                var l = i.function(s),
                  h = null;
                null != l
                  ? ((h = j.Create(l)),
                    this.Assert(
                      null !== h,
                      "Could not create ink value from returned object of type " +
                        e(l)
                    ))
                  : (h = new et()),
                  this.state.PushEvaluationStack(h);
              } else this._sawLookaheadUnsafeFunctionAfterNewline = !0;
            },
          },
          {
            key: "BindExternalFunctionGeneral",
            value: function (t, e) {
              var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              this.IfAsyncWeCant("bind an external function"),
                this.Assert(
                  !this._externals.has(t),
                  "Function '" + t + "' has already been bound."
                ),
                this._externals.set(t, { function: e, lookAheadSafe: n });
            },
          },
          {
            key: "TryCoerce",
            value: function (t) {
              return t;
            },
          },
          {
            key: "BindExternalFunction",
            value: function (t, e) {
              var n = this,
                i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              this.Assert(null != e, "Can't bind a null function"),
                this.BindExternalFunctionGeneral(
                  t,
                  function (t) {
                    n.Assert(
                      t.length >= e.length,
                      "External function expected " + e.length + " arguments"
                    );
                    for (var i = [], r = 0, a = t.length; r < a; r++)
                      i[r] = n.TryCoerce(t[r]);
                    return e.apply(null, i);
                  },
                  i
                );
            },
          },
          {
            key: "UnbindExternalFunction",
            value: function (t) {
              this.IfAsyncWeCant("unbind an external a function"),
                this.Assert(
                  this._externals.has(t),
                  "Function '" + t + "' has not been bound."
                ),
                this._externals.delete(t);
            },
          },
          {
            key: "ValidateExternalBindings",
            value: function () {
              var t = null,
                e = null,
                n = arguments[1] || new Set();
              if (
                (arguments[0] instanceof K && (t = arguments[0]),
                arguments[0] instanceof N && (e = arguments[0]),
                null === t && null === e)
              )
                if (
                  (this.ValidateExternalBindings(this._mainContentContainer, n),
                  (this._hasValidatedExternals = !0),
                  0 == n.size)
                )
                  this._hasValidatedExternals = !0;
                else {
                  var i = "Error: Missing function binding for external";
                  (i += n.size > 1 ? "s" : ""),
                    (i += ": '"),
                    (i += Array.from(n).join("', '")),
                    (i += "' "),
                    (i += this.allowExternalFunctionFallbacks
                      ? ", and no fallback ink function found."
                      : " (ink fallbacks disabled)"),
                    this.Error(i);
                }
              else if (null != t) {
                var r,
                  a = g(t.content);
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var s = r.value;
                    (null != s && s.hasValidName) ||
                      this.ValidateExternalBindings(s, n);
                  }
                } catch (t) {
                  a.e(t);
                } finally {
                  a.f();
                }
                var o,
                  u = g(t.namedContent);
                try {
                  for (u.s(); !(o = u.n()).done; ) {
                    var l = d(o.value, 2)[1];
                    this.ValidateExternalBindings(C(l, N), n);
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
              } else if (null != e) {
                var h = C(e, Y);
                if (h && h.isExternal) {
                  var c = h.targetPathString;
                  if (null === c) return P("name");
                  if (!this._externals.has(c))
                    if (this.allowExternalFunctionFallbacks)
                      this.mainContentContainer.namedContent.has(c) || n.add(c);
                    else n.add(c);
                }
              }
            },
          },
          {
            key: "ObserveVariable",
            value: function (t, e) {
              if (
                (this.IfAsyncWeCant("observe a new variable"),
                null === this._variableObservers &&
                  (this._variableObservers = new Map()),
                !this.state.variablesState.GlobalVariableExistsWithName(t))
              )
                throw new Error(
                  "Cannot observe variable '" +
                    t +
                    "' because it wasn't declared in the ink story."
                );
              this._variableObservers.has(t)
                ? this._variableObservers.get(t).push(e)
                : this._variableObservers.set(t, [e]);
            },
          },
          {
            key: "ObserveVariables",
            value: function (t, e) {
              for (var n = 0, i = t.length; n < i; n++)
                this.ObserveVariable(t[n], e[n]);
            },
          },
          {
            key: "RemoveVariableObserver",
            value: function (t, e) {
              if (
                (this.IfAsyncWeCant("remove a variable observer"),
                null !== this._variableObservers)
              )
                if (null != e) {
                  if (this._variableObservers.has(e))
                    if (null != t) {
                      var n = this._variableObservers.get(e);
                      null != n &&
                        (n.splice(n.indexOf(t), 1),
                        0 === n.length && this._variableObservers.delete(e));
                    } else this._variableObservers.delete(e);
                } else if (null != t) {
                  var i,
                    r = g(this._variableObservers.keys());
                  try {
                    for (r.s(); !(i = r.n()).done; ) {
                      var a = i.value,
                        s = this._variableObservers.get(a);
                      null != s &&
                        (s.splice(s.indexOf(t), 1),
                        0 === s.length && this._variableObservers.delete(a));
                    }
                  } catch (t) {
                    r.e(t);
                  } finally {
                    r.f();
                  }
                }
            },
          },
          {
            key: "VariableStateDidChangeEvent",
            value: function (t, e) {
              if (null !== this._variableObservers) {
                var n = this._variableObservers.get(t);
                if (void 0 !== n) {
                  if (!(e instanceof j))
                    throw new Error(
                      "Tried to get the value of a variable that isn't a standard type"
                    );
                  var i,
                    r = b(e, j),
                    a = g(n);
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      (0, i.value)(t, r.valueObject);
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                }
              }
            },
          },
          {
            key: "globalTags",
            get: function () {
              return this.TagsAtStartOfFlowContainerWithPathString("");
            },
          },
          {
            key: "TagsForContentAtPath",
            value: function (t) {
              return this.TagsAtStartOfFlowContainerWithPathString(t);
            },
          },
          {
            key: "TagsAtStartOfFlowContainerWithPathString",
            value: function (t) {
              var e = new k(t),
                n = this.ContentAtPath(e).container;
              if (null === n) return P("flowContainer");
              for (;;) {
                var i = n.content[0];
                if (!(i instanceof K)) break;
                n = i;
              }
              var r,
                a = !1,
                s = null,
                o = g(n.content);
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var u = r.value,
                    l = C(u, X);
                  if (null != l)
                    l.commandType == X.CommandType.BeginTag
                      ? (a = !0)
                      : l.commandType == X.CommandType.EndTag && (a = !1);
                  else {
                    if (!a) break;
                    var h = C(u, G);
                    null !== h
                      ? (null === s && (s = []),
                        null !== h.value && s.push(h.value))
                      : this.Error(
                          "Tag contained non-text content. Only plain text is allowed when using globalTags or TagsAtContentPath. If you want to evaluate dynamic content, you need to use story.Continue()."
                        );
                  }
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
              return s;
            },
          },
          {
            key: "BuildStringOfHierarchy",
            value: function () {
              var t = new A();
              return (
                this.mainContentContainer.BuildStringOfHierarchy(
                  t,
                  0,
                  this.state.currentPointer.Resolve()
                ),
                t.toString()
              );
            },
          },
          {
            key: "BuildStringOfContainer",
            value: function (t) {
              var e = new A();
              return (
                t.BuildStringOfHierarchy(
                  e,
                  0,
                  this.state.currentPointer.Resolve()
                ),
                e.toString()
              );
            },
          },
          {
            key: "NextContent",
            value: function () {
              if (
                ((this.state.previousPointer =
                  this.state.currentPointer.copy()),
                this.state.divertedPointer.isNull ||
                  ((this.state.currentPointer =
                    this.state.divertedPointer.copy()),
                  (this.state.divertedPointer = $.Null),
                  this.VisitChangedContainersDueToDivert(),
                  this.state.currentPointer.isNull)) &&
                !this.IncrementContentPointer()
              ) {
                var t = !1;
                this.state.callStack.CanPop(z.Function)
                  ? (this.state.PopCallStack(z.Function),
                    this.state.inExpressionEvaluation &&
                      this.state.PushEvaluationStack(new et()),
                    (t = !0))
                  : this.state.callStack.canPopThread
                  ? (this.state.callStack.PopThread(), (t = !0))
                  : this.state.TryExitFunctionEvaluationFromGame(),
                  t && !this.state.currentPointer.isNull && this.NextContent();
              }
            },
          },
          {
            key: "IncrementContentPointer",
            value: function () {
              var t = !0,
                e = this.state.callStack.currentElement.currentPointer.copy();
              if ((e.index++, null === e.container))
                return P("pointer.container");
              for (; e.index >= e.container.content.length; ) {
                t = !1;
                var n = C(e.container.parent, K);
                if (n instanceof K == !1) break;
                var i = n.content.indexOf(e.container);
                if (-1 == i) break;
                if (((e = new $(n, i)).index++, (t = !0), null === e.container))
                  return P("pointer.container");
              }
              return (
                t || (e = $.Null),
                (this.state.callStack.currentElement.currentPointer = e.copy()),
                t
              );
            },
          },
          {
            key: "TryFollowDefaultInvisibleChoice",
            value: function () {
              var t = this._state.currentChoices,
                e = t.filter(function (t) {
                  return t.isInvisibleDefault;
                });
              if (0 == e.length || t.length > e.length) return !1;
              var n = e[0];
              return null === n.targetPath
                ? P("choice.targetPath")
                : null === n.threadAtGeneration
                ? P("choice.threadAtGeneration")
                : ((this.state.callStack.currentThread = n.threadAtGeneration),
                  null !== this._stateSnapshotAtLastNewline &&
                    (this.state.callStack.currentThread =
                      this.state.callStack.ForkThread()),
                  this.ChoosePath(n.targetPath, !1),
                  !0);
            },
          },
          {
            key: "NextSequenceShuffleIndex",
            value: function () {
              var t = C(this.state.PopEvaluationStack(), D);
              if (!(t instanceof D))
                return (
                  this.Error(
                    "expected number of elements in sequence for shuffle index"
                  ),
                  0
                );
              var e = this.state.currentPointer.container;
              if (null === e) return P("seqContainer");
              if (null === t.value) return P("numElementsIntVal.value");
              var n = t.value,
                i = b(this.state.PopEvaluationStack(), D).value;
              if (null === i) return P("seqCount");
              for (
                var r = i / n,
                  a = i % n,
                  s = e.path.toString(),
                  o = 0,
                  u = 0,
                  l = s.length;
                u < l;
                u++
              )
                o += s.charCodeAt(u) || 0;
              for (
                var h = o + r + this.state.storySeed,
                  c = new ht(Math.floor(h)),
                  f = [],
                  v = 0;
                v < n;
                ++v
              )
                f.push(v);
              for (var d = 0; d <= a; ++d) {
                var p = c.next() % f.length,
                  y = f[p];
                if ((f.splice(p, 1), d == a)) return y;
              }
              throw new Error("Should never reach here");
            },
          },
          {
            key: "Error",
            value: function (t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = new x(t);
              throw ((n.useEndLineNumber = e), n);
            },
          },
          {
            key: "Warning",
            value: function (t) {
              this.AddError(t, !0);
            },
          },
          {
            key: "AddError",
            value: function (t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                i = this.currentDebugMetadata,
                r = e ? "WARNING" : "ERROR";
              if (null != i) {
                var a = n ? i.endLineNumber : i.startLineNumber;
                t =
                  "RUNTIME " +
                  r +
                  ": '" +
                  i.fileName +
                  "' line " +
                  a +
                  ": " +
                  t;
              } else
                t = this.state.currentPointer.isNull
                  ? "RUNTIME " + r + ": " + t
                  : "RUNTIME " +
                    r +
                    ": (" +
                    this.state.currentPointer +
                    "): " +
                    t;
              this.state.AddError(t, e), e || this.state.ForceEnd();
            },
          },
          {
            key: "Assert",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              if (0 == t)
                throw (
                  (null == e && (e = "Story assert"),
                  new Error(e + " " + this.currentDebugMetadata))
                );
            },
          },
          {
            key: "currentDebugMetadata",
            get: function () {
              var t,
                e = this.state.currentPointer;
              if (
                !e.isNull &&
                null !== e.Resolve() &&
                null !== (t = e.Resolve().debugMetadata)
              )
                return t;
              for (
                var n = this.state.callStack.elements.length - 1;
                n >= 0;
                --n
              )
                if (
                  !(e = this.state.callStack.elements[n].currentPointer)
                    .isNull &&
                  null !== e.Resolve() &&
                  null !== (t = e.Resolve().debugMetadata)
                )
                  return t;
              for (var i = this.state.outputStream.length - 1; i >= 0; --i) {
                if (null !== (t = this.state.outputStream[i].debugMetadata))
                  return t;
              }
              return null;
            },
          },
          {
            key: "mainContentContainer",
            get: function () {
              return this._temporaryEvaluationContainer
                ? this._temporaryEvaluationContainer
                : this._mainContentContainer;
            },
          },
        ]),
        s
      );
    })(N)),
    (t.Story.inkVersionCurrent = 21),
    (dt = t.Story || (t.Story = {})),
    ((pt = dt.OutputStateChange || (dt.OutputStateChange = {}))[
      (pt.NoChange = 0)
    ] = "NoChange"),
    (pt[(pt.ExtendedBeyondNewline = 1)] = "ExtendedBeyondNewline"),
    (pt[(pt.NewlineRemoved = 2)] = "NewlineRemoved"),
    (t.InkList = F),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=ink.js.map
