"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [850], {
        6489: function(e, n) {
            /*!
             * cookie
             * Copyright(c) 2012-2014 Roman Shtylman
             * Copyright(c) 2015 Douglas Christopher Wilson
             * MIT Licensed
             */
            n.parse = function(e, n) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                for (var r = {}, o = e.split(";"), i = (n || {}).decode || t, u = 0; u < o.length; u++) {
                    var a = o[u],
                        c = a.indexOf("=");
                    if (!(c < 0)) {
                        var s = a.substring(0, c).trim();
                        if (void 0 == r[s]) {
                            var f = a.substring(c + 1, a.length).trim();
                            '"' === f[0] && (f = f.slice(1, -1)), r[s] = function(e, n) {
                                try {
                                    return n(e)
                                } catch (t) {
                                    return e
                                }
                            }(f, i)
                        }
                    }
                }
                return r
            }, n.serialize = function(e, n, t) {
                var i = t || {},
                    u = i.encode || r;
                if ("function" != typeof u) throw TypeError("option encode is invalid");
                if (!o.test(e)) throw TypeError("argument name is invalid");
                var a = u(n);
                if (a && !o.test(a)) throw TypeError("argument val is invalid");
                var c = e + "=" + a;
                if (null != i.maxAge) {
                    var s = i.maxAge - 0;
                    if (isNaN(s) || !isFinite(s)) throw TypeError("option maxAge is invalid");
                    c += "; Max-Age=" + Math.floor(s)
                }
                if (i.domain) {
                    if (!o.test(i.domain)) throw TypeError("option domain is invalid");
                    c += "; Domain=" + i.domain
                }
                if (i.path) {
                    if (!o.test(i.path)) throw TypeError("option path is invalid");
                    c += "; Path=" + i.path
                }
                if (i.expires) {
                    if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
                    c += "; Expires=" + i.expires.toUTCString()
                }
                if (i.httpOnly && (c += "; HttpOnly"), i.secure && (c += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                    case !0:
                    case "strict":
                        c += "; SameSite=Strict";
                        break;
                    case "lax":
                        c += "; SameSite=Lax";
                        break;
                    case "none":
                        c += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return c
            };
            var t = decodeURIComponent,
                r = encodeURIComponent,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        7041: function(e, n, t) {
            var r = this && this.__assign || function() {
                    return (r = Object.assign || function(e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++)
                            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        return e
                    }).apply(this, arguments)
                },
                o = this && this.__rest || function(e, n) {
                    var t = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > n.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
                    return t
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.checkCookies = n.hasCookie = n.removeCookies = n.deleteCookie = n.setCookies = n.setCookie = n.getCookie = n.getCookies = void 0;
            var i = t(6489),
                u = function() {
                    return "undefined" != typeof window
                },
                a = function(e) {
                    void 0 === e && (e = "");
                    try {
                        var n = JSON.stringify(e);
                        return /^[\{\[]/.test(n) ? n : e
                    } catch (t) {
                        return e
                    }
                };
            n.getCookies = function(e) {
                if (e && (n = e.req), !u()) return n && n.cookies ? n.cookies : n && n.headers && n.headers.cookie ? (0, i.parse)(n.headers.cookie) : {};
                for (var n, t = {}, r = document.cookie ? document.cookie.split("; ") : [], o = 0, a = r.length; o < a; o++) {
                    var c = r[o].split("="),
                        s = c.slice(1).join("=");
                    t[c[0]] = s
                }
                return t
            }, n.getCookie = function(e, t) {
                var r, o = (0, n.getCookies)(t)[e];
                if (void 0 !== o) return "true" === (r = o ? o.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : o) || "false" !== r && ("undefined" !== r ? "null" === r ? null : r : void 0)
            }, n.setCookie = function(e, n, t) {
                if (t) {
                    var c, s, f, d = t.req,
                        l = t.res,
                        p = o(t, ["req", "res"]);
                    s = d, f = l, c = p
                }
                var v = (0, i.serialize)(e, a(n), r({
                    path: "/"
                }, c));
                if (u()) document.cookie = v;
                else if (f && s) {
                    var m = f.getHeader("Set-Cookie");
                    if (Array.isArray(m) || (m = m ? [String(m)] : []), f.setHeader("Set-Cookie", m.concat(v)), s && s.cookies) {
                        var g = s.cookies;
                        "" === n ? delete g[e] : g[e] = a(n)
                    }
                    if (s && s.headers && s.headers.cookie) {
                        var g = (0, i.parse)(s.headers.cookie);
                        "" === n ? delete g[e] : g[e] = a(n), s.headers.cookie = Object.entries(g).reduce(function(e, n) {
                            return e.concat("".concat(n[0], "=").concat(n[1], ";"))
                        }, "")
                    }
                }
            }, n.setCookies = function(e, t, r) {
                return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, n.setCookie)(e, t, r)
            }, n.deleteCookie = function(e, t) {
                return (0, n.setCookie)(e, "", r(r({}, t), {
                    maxAge: -1
                }))
            }, n.removeCookies = function(e, t) {
                return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, n.deleteCookie)(e, t)
            }, n.hasCookie = function(e, t) {
                return !!e && (0, n.getCookies)(t).hasOwnProperty(e)
            }, n.checkCookies = function(e, t) {
                return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, n.hasCookie)(e, t)
            }
        },
        5585: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var r = t(7294),
                o = t(1689);

            function i(e) {
                return e.concat().sort(function(e, n) {
                    return e.name > n.name ? 1 : -1
                }).map(function(e) {
                    return e.options
                })
            }

            function u(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = []);
                var t = (0, r.useRef)(o.Z.optionsHandler()),
                    a = (0, r.useRef)(e),
                    c = (0, r.useRef)(n),
                    s = (0, r.useState)(),
                    f = s[0],
                    d = s[1],
                    l = (0, r.useState)(),
                    p = l[0],
                    v = l[1],
                    m = (0, r.useCallback)(function() {
                        f && f.reInit(a.current, c.current)
                    }, [f]);
                return (0, r.useEffect)(function() {
                    if ("undefined" != typeof window && window.document && window.document.createElement && p) {
                        o.Z.globalOptions = u.globalOptions;
                        var e = (0, o.Z)(p, a.current, c.current);
                        return d(e),
                            function() {
                                return e.destroy()
                            }
                    }
                    d(void 0)
                }, [p, d]), (0, r.useEffect)(function() {
                    t.current.areEqual(a.current, e) || (a.current = e, m())
                }, [e, m]), (0, r.useEffect)(function() {
                    ! function(e, n) {
                        if (e.length !== n.length) return !1;
                        var t = o.Z.optionsHandler().areEqual,
                            r = i(e),
                            u = i(n);
                        return r.every(function(e, n) {
                            return t(e, u[n])
                        })
                    }(c.current, n) && (c.current = n, m())
                }, [n, m]), [v, f]
            }
            u.globalOptions = void 0
        },
        1689: function(e, n, t) {
            function r(e) {
                return "number" == typeof e
            }

            function o(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                return o(e) || Array.isArray(e)
            }

            function u(e) {
                return Math.abs(e)
            }

            function a(e) {
                return e ? e / u(e) : 0
            }

            function c(e) {
                return d(e).map(Number)
            }

            function s(e) {
                return e[f(e)]
            }

            function f(e) {
                return Math.max(0, e.length - 1)
            }

            function d(e) {
                return Object.keys(e)
            }

            function l(e, n) {
                var t = u(e - n);

                function r(t) {
                    return t < e || t > n
                }
                return {
                    length: t,
                    max: n,
                    min: e,
                    constrain: function(t) {
                        return r(t) ? t < e ? e : n : t
                    },
                    reachedAny: r,
                    reachedMax: function(e) {
                        return e > n
                    },
                    reachedMin: function(n) {
                        return n < e
                    },
                    removeOffset: function(e) {
                        return t ? e - t * Math.ceil((e - n) / t) : e
                    }
                }
            }

            function p() {
                var e = [],
                    n = {
                        add: function(t, r, o, i) {
                            return void 0 === i && (i = !1), t.addEventListener(r, o, i), e.push(function() {
                                return t.removeEventListener(r, o, i)
                            }), n
                        },
                        removeAll: function() {
                            return e = e.filter(function(e) {
                                return e()
                            }), n
                        }
                    };
                return n
            }

            function v(e) {
                var n = e;

                function t(e) {
                    return n /= e, i
                }

                function o(e) {
                    return r(e) ? e : e.get()
                }
                var i = {
                    add: function(e) {
                        return n += o(e), i
                    },
                    divide: t,
                    get: function() {
                        return n
                    },
                    multiply: function(e) {
                        return n *= e, i
                    },
                    normalize: function() {
                        return 0 !== n && t(n), i
                    },
                    set: function(e) {
                        return n = o(e), i
                    },
                    subtract: function(e) {
                        return n -= o(e), i
                    }
                };
                return i
            }

            function m(e, n, t) {
                var r = "x" === e.scroll ? function(e) {
                        return "translate3d(".concat(e, "px,0px,0px)")
                    } : function(e) {
                        return "translate3d(0px,".concat(e, "px,0px)")
                    },
                    o = t.style,
                    i = !1;
                return {
                    clear: function() {
                        i || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
                    },
                    to: function(e) {
                        i || (o.transform = r(n.apply(e.get())))
                    },
                    toggleActive: function(e) {
                        i = !e
                    }
                }
            }
            t.d(n, {
                Z: function() {
                    return y
                }
            });
            var g = {
                align: "center",
                axis: "x",
                containScroll: "",
                direction: "ltr",
                slidesToScroll: 1,
                breakpoints: {},
                dragFree: !1,
                draggable: !0,
                inViewThreshold: 0,
                loop: !1,
                skipSnaps: !1,
                speed: 10,
                startIndex: 0,
                active: !0
            };

            function h() {
                function e(e, n) {
                    return function e(n, t) {
                        return [n, t].reduce(function(n, t) {
                            return d(t).forEach(function(r) {
                                var i = n[r],
                                    u = t[r],
                                    a = o(i) && o(u);
                                n[r] = a ? e(i, u) : u
                            }), n
                        }, {})
                    }(e, n || {})
                }
                return {
                    merge: e,
                    areEqual: function(e, n) {
                        return JSON.stringify(d(e.breakpoints || {})) === JSON.stringify(d(n.breakpoints || {})) && function e(n, t) {
                            var r = d(n),
                                o = d(t);
                            return r.length === o.length && r.every(function(r) {
                                var o = n[r],
                                    u = t[r];
                                return "function" == typeof o ? "".concat(o) === "".concat(u) : i(o) && i(u) ? e(o, u) : o === u
                            })
                        }(e, n)
                    },
                    atMedia: function(n) {
                        var t = n.breakpoints || {},
                            r = d(t).filter(function(e) {
                                return window.matchMedia(e).matches
                            }).map(function(e) {
                                return t[e]
                            }).reduce(function(n, t) {
                                return e(n, t)
                            }, {});
                        return e(n, r)
                    }
                }
            }

            function y(e, n, t) {
                var o, i, d, x, k, w, S, b = p(),
                    C = h(),
                    E = function() {
                        var e = h(),
                            n = e.atMedia,
                            t = e.areEqual,
                            r = [],
                            o = [];

                        function i(e) {
                            var r = n(e.options);
                            return function() {
                                return !t(r, n(e.options))
                            }
                        }
                        return {
                            init: function(e, t) {
                                return o = e.map(i), (r = e.filter(function(e) {
                                    return n(e.options).active
                                })).forEach(function(e) {
                                    return e.init(t)
                                }), e.reduce(function(e, n) {
                                    var t;
                                    return Object.assign(e, ((t = {})[n.name] = n, t))
                                }, {})
                            },
                            destroy: function() {
                                r = r.filter(function(e) {
                                    return e.destroy()
                                })
                            },
                            haveChanged: function() {
                                return o.some(function(e) {
                                    return e()
                                })
                            }
                        }
                    }(),
                    A = (o = {}, i = {
                        emit: function(e) {
                            return (o[e] || []).forEach(function(n) {
                                return n(e)
                            }), i
                        },
                        off: function(e, n) {
                            return o[e] = (o[e] || []).filter(function(e) {
                                return e !== n
                            }), i
                        },
                        on: function(e, n) {
                            return o[e] = (o[e] || []).concat([n]), i
                        }
                    }),
                    O = A.on,
                    T = A.off,
                    M = !1,
                    I = C.merge(g, y.globalOptions),
                    P = C.merge(I),
                    N = [],
                    B = 0;

                function R(n, t) {
                    if (!M) {
                        var o, i;
                        if (o = "container" in e && e.container, i = "slides" in e && e.slides, k = "root" in e ? e.root : e, w = o || k.children[0], S = i || [].slice.call(w.children), I = C.merge(I, n), B = (d = function(e, n, t, o, i) {
                                var d, g, h, y, x, k, w, S, b, C, E, A, O, T, M, I, P, N, B, R, z, L, j, D, H, U, _, q, V, Z, F, W, J, G = o.align,
                                    X = o.axis,
                                    Y = o.direction,
                                    $ = o.startIndex,
                                    K = o.inViewThreshold,
                                    Q = o.loop,
                                    ee = o.speed,
                                    en = o.dragFree,
                                    et = o.slidesToScroll,
                                    er = o.skipSnaps,
                                    eo = o.containScroll,
                                    ei = n.getBoundingClientRect(),
                                    eu = t.map(function(e) {
                                        return e.getBoundingClientRect()
                                    }),
                                    ea = (x = "rtl" === Y ? -1 : 1, {
                                        apply: function(e) {
                                            return e * x
                                        }
                                    }),
                                    ec = {
                                        scroll: k = "y" === X ? "y" : "x",
                                        cross: "y" === X ? "x" : "y",
                                        startEdge: "y" === k ? "top" : "rtl" === Y ? "right" : "left",
                                        endEdge: "y" === k ? "bottom" : "rtl" === Y ? "left" : "right",
                                        measureSize: function(e) {
                                            var n = e.width,
                                                t = e.height;
                                            return "x" === k ? n : t
                                        }
                                    },
                                    es = ec.measureSize(ei),
                                    ef = {
                                        measure: function(e) {
                                            return es * (e / 100)
                                        }
                                    },
                                    ed = (d = {
                                        start: function() {
                                            return 0
                                        },
                                        center: function(e) {
                                            return (es - e) / 2
                                        },
                                        end: function(e) {
                                            return es - e
                                        }
                                    }, {
                                        measure: function(e) {
                                            return r(G) ? es * Number(G) : d[G](e)
                                        }
                                    }),
                                    el = !Q && "" !== eo,
                                    ep = (w = Q || "" !== eo, S = ec.measureSize, b = ec.startEdge, C = ec.endEdge, E = function() {
                                        if (!w) return 0;
                                        var e = eu[0];
                                        return u(ei[b] - e[b])
                                    }(), A = w ? parseFloat(window.getComputedStyle(s(t)).getPropertyValue("margin-".concat(C))) : 0, O = eu.map(S), T = eu.map(function(e, n, t) {
                                        var r = n === f(t);
                                        return n ? r ? O[n] + A : t[n + 1][b] - e[b] : O[n] + E
                                    }).map(u), {
                                        slideSizes: O,
                                        slideSizesWithGaps: T
                                    }),
                                    ev = ep.slideSizes,
                                    em = ep.slideSizesWithGaps,
                                    eg = (M = r(et), {
                                        groupSlides: function(e) {
                                            return M ? c(e).filter(function(e) {
                                                return e % et == 0
                                            }).map(function(n) {
                                                return e.slice(n, n + et)
                                            }) : c(e).reduce(function(e, n) {
                                                var t = em.slice(s(e), n + 1).reduce(function(e, n) {
                                                    return e + n
                                                }, 0);
                                                return !n || t > es ? e.concat(n) : e
                                            }, []).map(function(n, t, r) {
                                                return e.slice(n, r[t + 1])
                                            })
                                        }
                                    }),
                                    eh = (I = ec.startEdge, P = ec.endEdge, B = (N = eg.groupSlides)(eu).map(function(e) {
                                        return s(e)[P] - e[0][I]
                                    }).map(u).map(ed.measure), g = s(R = eu.map(function(e) {
                                        return ei[I] - e[I]
                                    }).map(function(e) {
                                        return -u(e)
                                    })) - s(em), z = N(R).map(function(e) {
                                        return e[0]
                                    }).map(function(e, n, t) {
                                        var r = n === f(t);
                                        return el && !n ? 0 : el && r ? g : e + B[n]
                                    }), {
                                        snaps: R,
                                        snapsAligned: z
                                    }),
                                    ey = eh.snaps,
                                    ex = eh.snapsAligned,
                                    ek = -s(ey) + s(em),
                                    ew = (L = l(-ek + es, ex[0]), j = ex.map(L.constrain), {
                                        snapsContained: function() {
                                            if (ek <= es) return [L.max];
                                            if ("keepSnaps" === eo) return j;
                                            var e, n, t = (e = j[0], n = s(j), l(j.lastIndexOf(e), j.indexOf(n) + 1)),
                                                r = t.min,
                                                o = t.max;
                                            return j.slice(r, o)
                                        }()
                                    }).snapsContained,
                                    eS = el ? ew : ex,
                                    eb = {
                                        limit: (h = eS[0], y = s(eS), l(Q ? h - ek : y, h))
                                    }.limit,
                                    eC = function e(n, t, r) {
                                        var o = l(0, n),
                                            i = o.min,
                                            a = o.constrain,
                                            c = n + 1,
                                            s = f(t);

                                        function f(e) {
                                            return r ? u((c + e) % c) : a(e)
                                        }

                                        function d(e) {
                                            return s = f(e), p
                                        }
                                        var p = {
                                            add: function(e) {
                                                return d(s + e)
                                            },
                                            clone: function() {
                                                return e(n, s, r)
                                            },
                                            get: function() {
                                                return s
                                            },
                                            set: d,
                                            min: i,
                                            max: n
                                        };
                                        return p
                                    }(f(eS), $, Q),
                                    eE = eC.clone(),
                                    eA = c(t),
                                    eO = function(e) {
                                        var n = 0;

                                        function t(e, t) {
                                            return function() {
                                                !!n === e && t()
                                            }
                                        }

                                        function r() {
                                            n = window.requestAnimationFrame(e)
                                        }
                                        return {
                                            proceed: t(!0, r),
                                            start: t(!1, r),
                                            stop: t(!0, function() {
                                                window.cancelAnimationFrame(n), n = 0
                                            })
                                        }
                                    }(function() {
                                        Q || eL.scrollBounds.constrain(eL.dragHandler.pointerDown()), eL.scrollBody.seek(eI).update();
                                        var e = eL.scrollBody.settle(eI);
                                        e && !eL.dragHandler.pointerDown() && (eL.animation.stop(), i.emit("settle")), e || i.emit("scroll"), Q && (eL.scrollLooper.loop(eL.scrollBody.direction()), eL.slideLooper.loop()), eL.translate.to(eM), eL.animation.proceed()
                                    }),
                                    eT = eS[eC.get()],
                                    eM = v(eT),
                                    eI = v(eT),
                                    eP = function(e, n, t) {
                                        var r = v(0),
                                            o = v(0),
                                            i = v(0),
                                            u = 0,
                                            c = n,
                                            s = t;

                                        function f(e) {
                                            return c = e, l
                                        }

                                        function d(e) {
                                            return s = e, l
                                        }
                                        var l = {
                                            direction: function() {
                                                return u
                                            },
                                            seek: function(n) {
                                                i.set(n).subtract(e);
                                                var t = 0 + (c - 0) * ((i.get() - 0) / 100);
                                                return u = a(i.get()), i.normalize().multiply(t).subtract(r), i.divide(s), o.add(i), l
                                            },
                                            settle: function(n) {
                                                var t = !(Math.round((n.get() - e.get()) * 100) / 100);
                                                return t && e.set(n), t
                                            },
                                            update: function() {
                                                r.add(o), e.add(r), o.multiply(0)
                                            },
                                            useBaseMass: function() {
                                                return d(t)
                                            },
                                            useBaseSpeed: function() {
                                                return f(n)
                                            },
                                            useMass: d,
                                            useSpeed: f
                                        };
                                        return l
                                    }(eM, ee, 1),
                                    eN = function(e, n, t, r, o) {
                                        var i = r.reachedAny,
                                            c = r.removeOffset,
                                            s = r.constrain;

                                        function f(e) {
                                            return e.concat().sort(function(e, n) {
                                                return u(e) - u(n)
                                            })[0]
                                        }

                                        function d(n, r) {
                                            var o = [n, n + t, n - t];
                                            return e ? r ? f(o.filter(function(e) {
                                                return a(e) === r
                                            })) : f(o) : o[0]
                                        }
                                        return {
                                            byDistance: function(t, r) {
                                                var a, f = o.get() + t,
                                                    l = (a = e ? c(f) : s(f), {
                                                        index: n.map(function(e) {
                                                            return e - a
                                                        }).map(function(e) {
                                                            return d(e, 0)
                                                        }).map(function(e, n) {
                                                            return {
                                                                diff: e,
                                                                index: n
                                                            }
                                                        }).sort(function(e, n) {
                                                            return u(e.diff) - u(n.diff)
                                                        })[0].index,
                                                        distance: a
                                                    }),
                                                    p = l.index,
                                                    v = l.distance,
                                                    m = !e && i(f);
                                                if (!r || m) return {
                                                    index: p,
                                                    distance: t
                                                };
                                                var g = t + d(n[p] - v, 0);
                                                return {
                                                    index: p,
                                                    distance: g
                                                }
                                            },
                                            byIndex: function(e, t) {
                                                var r = d(n[e] - o.get(), t);
                                                return {
                                                    index: e,
                                                    distance: r
                                                }
                                            },
                                            shortcut: d
                                        }
                                    }(Q, eS, ek, eb, eI),
                                    eB = function(e, n, t, r, o, i) {
                                        function u(r) {
                                            var u = r.distance,
                                                a = r.index !== n.get();
                                            u && (e.start(), o.add(u)), a && (t.set(n.get()), n.set(r.index), i.emit("select"))
                                        }
                                        return {
                                            distance: function(e, n) {
                                                u(r.byDistance(e, n))
                                            },
                                            index: function(e, t) {
                                                var o = n.clone().set(e);
                                                u(r.byIndex(o.get(), t))
                                            }
                                        }
                                    }(eO, eC, eE, eN, eI, i),
                                    eR = function(e, n, t, r, o, i, u) {
                                        var a = o.removeOffset,
                                            c = o.constrain,
                                            s = i ? [0, n, -n] : [0],
                                            f = d(s, u);

                                        function d(n, o) {
                                            var i, u = (i = o || 0, t.map(function(e) {
                                                return l(.5, e - .5).constrain(e * i)
                                            }));
                                            return (n || s).reduce(function(n, o) {
                                                var i = r.map(function(n, r) {
                                                    return {
                                                        start: n - t[r] + u[r] + o,
                                                        end: n + e - u[r] + o,
                                                        index: r
                                                    }
                                                });
                                                return n.concat(i)
                                            }, [])
                                        }
                                        return {
                                            check: function(e, n) {
                                                var t = i ? a(e) : c(e);
                                                return (n || f).reduce(function(e, n) {
                                                    var r = n.index,
                                                        o = n.start,
                                                        i = n.end;
                                                    return !(-1 !== e.indexOf(r)) && o < t && i > t ? e.concat([r]) : e
                                                }, [])
                                            },
                                            findSlideBounds: d
                                        }
                                    }(es, ek, ev, ey, eb, Q, K),
                                    ez = function(e, n, t, r, o, i, c, s, f, d, l, m, g, h, y, x) {
                                        var k = e.cross,
                                            w = ["INPUT", "SELECT", "TEXTAREA"],
                                            S = v(0),
                                            b = p(),
                                            C = p(),
                                            E = g.measure(20),
                                            A = {
                                                mouse: 300,
                                                touch: 400
                                            },
                                            O = {
                                                mouse: 500,
                                                touch: 600
                                            },
                                            T = y ? 5 : 16,
                                            M = 0,
                                            I = 0,
                                            P = !1,
                                            N = !1,
                                            B = !1,
                                            R = !1;

                                        function z(e) {
                                            if (!(R = "mousedown" === e.type) || 0 === e.button) {
                                                var n, a, c = u(r.get() - i.get()) >= 2,
                                                    s = R || !c,
                                                    d = (n = e.target.nodeName || "", !(w.indexOf(n) > -1)),
                                                    l = c || R && d;
                                                P = !0, o.pointerDown(e), S.set(r), r.set(i), f.useBaseMass().useSpeed(80), a = R ? document : t, C.add(a, "touchmove", L).add(a, "touchend", j).add(a, "mousemove", L).add(a, "mouseup", j), M = o.readPoint(e), I = o.readPoint(e, k), m.emit("pointerDown"), s && (B = !1), l && e.preventDefault()
                                            }
                                        }

                                        function L(e) {
                                            if (!N && !R) {
                                                if (!e.cancelable) return j(e);
                                                var t = o.readPoint(e),
                                                    i = o.readPoint(e, k);
                                                if (!(N = u(t - M) > u(i - I)) && !B) return j(e)
                                            }
                                            var a = o.pointerMove(e);
                                            !B && a && (B = !0), c.start(), r.add(n.apply(a)), e.preventDefault()
                                        }

                                        function j(e) {
                                            var t, i, c, p, v = d.byDistance(0, !1).index !== l.get(),
                                                g = o.pointerUp(e) * (y ? O : A)[R ? "mouse" : "touch"],
                                                k = (t = n.apply(g), c = (i = l.clone().add(-1 * a(t))).get() === l.min || i.get() === l.max, p = d.byDistance(t, !y).distance, y || u(t) < E ? p : !h && c ? .4 * p : x && v ? .5 * p : d.byIndex(i.get(), 0).distance),
                                                w = function(e, n) {
                                                    if (0 === e || 0 === n || u(e) <= u(n)) return 0;
                                                    var t, r, o = (t = u(e), r = u(n), u(t - r));
                                                    return u(o / e)
                                                }(g, k),
                                                b = u(r.get() - S.get()) >= .5,
                                                M = v && w > .75,
                                                I = u(g) < E;
                                            b && !R && (B = !0), N = !1, P = !1, C.removeAll(), f.useSpeed(I ? 9 : M ? 10 : T).useMass(M ? 1 + 2.5 * w : 1), s.distance(k, !y), R = !1, m.emit("pointerUp")
                                        }

                                        function D(e) {
                                            B && e.preventDefault()
                                        }
                                        return {
                                            addActivationEvents: function() {
                                                b.add(t, "touchmove", function() {}).add(t, "touchend", function() {}).add(t, "touchstart", z).add(t, "mousedown", z).add(t, "touchcancel", j).add(t, "contextmenu", j).add(t, "click", D)
                                            },
                                            clickAllowed: function() {
                                                return !B
                                            },
                                            pointerDown: function() {
                                                return P
                                            },
                                            removeAllEvents: function() {
                                                b.removeAll(), C.removeAll()
                                            }
                                        }
                                    }(ec, ea, e, eI, function(e) {
                                        var n, t;

                                        function r(e) {
                                            return "undefined" != typeof TouchEvent && e instanceof TouchEvent
                                        }

                                        function o(e) {
                                            return e.timeStamp
                                        }

                                        function i(n, t) {
                                            var o = t || e.scroll;
                                            return (r(n) ? n.touches[0] : n)["client".concat("x" === o ? "X" : "Y")]
                                        }
                                        return {
                                            isTouchEvent: r,
                                            pointerDown: function(e) {
                                                return n = e, t = e, i(e)
                                            },
                                            pointerMove: function(e) {
                                                var r = i(e) - i(t),
                                                    u = o(e) - o(n) > 170;
                                                return t = e, u && (n = e), r
                                            },
                                            pointerUp: function(e) {
                                                if (!n || !t) return 0;
                                                var r = i(t) - i(n),
                                                    a = o(e) - o(n),
                                                    c = o(e) - o(t) > 170,
                                                    s = r / a;
                                                return a && !c && u(s) > .1 ? s : 0
                                            },
                                            readPoint: i
                                        }
                                    }(ec), eM, eO, eB, eP, eN, eC, i, ef, Q, en, er),
                                    eL = {
                                        containerRect: ei,
                                        slideRects: eu,
                                        animation: eO,
                                        axis: ec,
                                        direction: ea,
                                        dragHandler: ez,
                                        eventStore: p(),
                                        percentOfView: ef,
                                        index: eC,
                                        indexPrevious: eE,
                                        limit: eb,
                                        location: eM,
                                        options: o,
                                        scrollBody: eP,
                                        scrollBounds: (H = ef.measure(10), U = ef.measure(50), _ = !1, {
                                            constrain: function(e) {
                                                if (!_ && eb.reachedAny(eI.get()) && eb.reachedAny(eM.get())) {
                                                    var n = eb.reachedMin(eM.get()) ? "min" : "max",
                                                        t = u(eb[n] - eM.get()),
                                                        r = eI.get() - eM.get();
                                                    eI.subtract(r * Math.min(t / U, .85)), !e && u(r) < H && (eI.set(eb.constrain(eI.get())), eP.useSpeed(10).useMass(3))
                                                }
                                            },
                                            toggleActive: function(e) {
                                                _ = !e
                                            }
                                        }),
                                        scrollLooper: (q = [eM, eI], Z = (V = l(eb.min + .1, eb.max + .1)).reachedMin, F = V.reachedMax, {
                                            loop: function(e) {
                                                if (1 === e ? F(eM.get()) : -1 === e && Z(eM.get())) {
                                                    var n = ek * (-1 * e);
                                                    q.forEach(function(e) {
                                                        return e.add(n)
                                                    })
                                                }
                                            }
                                        }),
                                        scrollProgress: (W = eb.max, J = eb.length, {
                                            get: function(e) {
                                                return -((e - W) / J)
                                            }
                                        }),
                                        scrollSnaps: eS,
                                        scrollTarget: eN,
                                        scrollTo: eB,
                                        slideLooper: function(e, n, t, r, o, i, u, a, s) {
                                            var f = c(o),
                                                d = g(p(c(o).reverse(), i[0] - 1), "end").concat(g(p(f, t - i[0] - 1), "start"));

                                            function l(e, n) {
                                                return e.reduce(function(e, n) {
                                                    return e - o[n]
                                                }, n)
                                            }

                                            function p(e, n) {
                                                return e.reduce(function(e, t) {
                                                    return l(e, n) > 0 ? e.concat([t]) : e
                                                }, [])
                                            }

                                            function g(t, o) {
                                                var i = "start" === o,
                                                    c = u.findSlideBounds([i ? -r : r]);
                                                return t.map(function(t) {
                                                    var o = i ? 0 : -r,
                                                        u = i ? r : 0,
                                                        f = c.filter(function(e) {
                                                            return e.index === t
                                                        })[0][i ? "end" : "start"],
                                                        d = v(-1),
                                                        l = v(-1),
                                                        p = m(e, n, s[t]);
                                                    return {
                                                        index: t,
                                                        location: l,
                                                        translate: p,
                                                        target: function() {
                                                            return d.set(a.get() > f ? o : u)
                                                        }
                                                    }
                                                })
                                            }
                                            return {
                                                canLoop: function() {
                                                    return d.every(function(e) {
                                                        var n = e.index;
                                                        return .1 >= l(f.filter(function(e) {
                                                            return e !== n
                                                        }), t)
                                                    })
                                                },
                                                clear: function() {
                                                    d.forEach(function(e) {
                                                        return e.translate.clear()
                                                    })
                                                },
                                                loop: function() {
                                                    d.forEach(function(e) {
                                                        var n = e.target,
                                                            t = e.translate,
                                                            r = e.location,
                                                            o = n();
                                                        o.get() !== r.get() && (0 === o.get() ? t.clear() : t.to(o), r.set(o))
                                                    })
                                                },
                                                loopPoints: d
                                            }
                                        }(ec, ea, es, ek, em, eS, eR, eM, t),
                                        slidesToScroll: eg,
                                        slidesInView: eR,
                                        slideIndexes: eA,
                                        target: eI,
                                        translate: m(ec, ea, n)
                                    };
                                return eL
                            }(k, w, S, P = C.atMedia(I), A)).axis.measureSize(k.getBoundingClientRect()), !P.active) return L();
                        if (d.translate.to(d.location), N = t || N, x = E.init(N, U), P.loop) {
                            if (!d.slideLooper.canLoop()) return L(), R({
                                loop: !1
                            }, t);
                            d.slideLooper.loop()
                        }
                        P.draggable && w.offsetParent && S.length && d.dragHandler.addActivationEvents()
                    }
                }

                function z(e, n) {
                    var t = H();
                    L(), R(C.merge({
                        startIndex: t
                    }, e), n), A.emit("reInit")
                }

                function L() {
                    d.dragHandler.removeAllEvents(), d.animation.stop(), d.eventStore.removeAll(), d.translate.clear(), d.slideLooper.clear(), E.destroy()
                }

                function j(e) {
                    var n = d[e ? "target" : "location"].get(),
                        t = P.loop ? "removeOffset" : "constrain";
                    return d.slidesInView.check(d.limit[t](n))
                }

                function D(e, n, t) {
                    P.active && !M && (d.scrollBody.useBaseMass().useSpeed(n ? 100 : P.speed), d.scrollTo.index(e, t || 0))
                }

                function H() {
                    return d.index.get()
                }
                var U = {
                    canScrollNext: function() {
                        return d.index.clone().add(1).get() !== H()
                    },
                    canScrollPrev: function() {
                        return d.index.clone().add(-1).get() !== H()
                    },
                    clickAllowed: function() {
                        return d.dragHandler.clickAllowed()
                    },
                    containerNode: function() {
                        return w
                    },
                    internalEngine: function() {
                        return d
                    },
                    destroy: function() {
                        M || (M = !0, b.removeAll(), L(), A.emit("destroy"))
                    },
                    off: T,
                    on: O,
                    plugins: function() {
                        return x
                    },
                    previousScrollSnap: function() {
                        return d.indexPrevious.get()
                    },
                    reInit: z,
                    rootNode: function() {
                        return k
                    },
                    scrollNext: function(e) {
                        D(d.index.clone().add(1).get(), !0 === e, -1)
                    },
                    scrollPrev: function(e) {
                        D(d.index.clone().add(-1).get(), !0 === e, 1)
                    },
                    scrollProgress: function() {
                        return d.scrollProgress.get(d.location.get())
                    },
                    scrollSnapList: function() {
                        return d.scrollSnaps.map(d.scrollProgress.get)
                    },
                    scrollTo: D,
                    selectedScrollSnap: H,
                    slideNodes: function() {
                        return S
                    },
                    slidesInView: j,
                    slidesNotInView: function(e) {
                        var n = j(e);
                        return d.slideIndexes.filter(function(e) {
                            return -1 === n.indexOf(e)
                        })
                    }
                };
                return R(n, t), b.add(window, "resize", function() {
                    var e = C.atMedia(I),
                        n = !C.areEqual(e, P),
                        t = B !== d.axis.measureSize(k.getBoundingClientRect()),
                        r = E.haveChanged();
                    (t || n || r) && z(), A.emit("resize")
                }), setTimeout(function() {
                    return A.emit("init")
                }, 0), U
            }
            y.globalOptions = void 0, y.optionsHandler = h
        }
    }
]);