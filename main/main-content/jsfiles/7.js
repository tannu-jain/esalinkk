"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [488], {
        7994: function(e, s) {
            s.Z = {
                src: "/main/main-content/gallary/esalink_logo.007ee946.svg",
                height: 572,
                width: 1878
            }
        },
        7488: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return g
                }
            });
            var a = l(5893),
                i = l(7814),
                t = l(9417),
                n = l(5675),
                r = l.n(n),
                o = l(7294),
                c = l(7994),
                d = l(8785),
                x = l(1664),
                h = l.n(x),
                m = l(7041);

            function u() {
                let e = [{
                        label: "FR",
                        value: "/auto/fr"
                    }, {
                        label: "EN",
                        value: "/auto/en"
                    }, {
                        label: "TR",
                        value: "/auto/tr"
                    }],
                    [s, l] = (0, o.useState)(e[0]);
                (0, o.useEffect)(() => {
                    if ((0, m.getCookie)("googtrans") === e[0].value) n(), document.body.classList.remove("translate-style");
                    else {
                        document.body.classList.add("translate-style");
                        var s, a = document.createElement("script");
                        a.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"), document.body.appendChild(a), window.googleTranslateElementInit = i
                    }(0, m.hasCookie)("googtrans") ? l(null !== (s = e.filter(e => e.value === (0, m.getCookie)("googtrans"))[0]) && void 0 !== s ? s : e[0]): l(e[0])
                }, []);
                let i = () => {
                        new window.google.translate.TranslateElement({
                            pageLanguage: "auto",
                            autoDisplay: !1,
                            includedLanguages: "fr,en,tr",
                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                        }, "google_translate_element")
                    },
                    t = e => {
                        n(), (0, m.setCookie)("googtrans", null == e ? void 0 : e.target.value), l(null == e ? void 0 : e.target.value), window.location.reload()
                    },
                    n = () => {
                        (0, m.deleteCookie)("googtrans", {
                            domain: ".esalink.com"
                        }), (0, m.deleteCookie)("googtrans", {
                            domain: "www.esalink.com"
                        }), (0, m.deleteCookie)("googtrans", {
                            domain: ".www.esalink.com"
                        })
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        id: "google_translate_element",
                        style: {
                            width: "0px",
                            height: "0px",
                            position: "absolute",
                            left: "50%",
                            zIndex: -99999
                        }
                    }), (0, a.jsx)("select", {
                        title: "Select translation",
                        id: "select-translate",
                        className: "select-translate",
                        name: "translate",
                        onChange: t,
                        value: s.value,
                        children: e.map((e, s) => (0, a.jsx)("option", {
                            value: e.value,
                            className: "notranslate",
                            children: e.label
                        }, s))
                    })]
                })
            }

            function g() {
                let [e, s] = (0, o.useState)(!1), [l, n] = (0, o.useState)(null), x = () => s(!e), m = e => {
                    n(l === e ? null : e)
                };
                return (0, o.useEffect)(() => {
                    var e = document.getElementById("header-nav"),
                        s = document.getElementById("img-notfixed"),
                        l = document.getElementById("img-fixed"),
                        a = document.getElementById("select-translate");
                    if (document.getElementsByClassName("css-tj5bde-Svg")[0], window.matchMedia("(min-width: 896px)").matches) {
                        let i = "scroll-up",
                            t = "scroll-down",
                            n = 0;
                        window.addEventListener("scroll", () => {
                            let r = window.pageYOffset;
                            if (r <= 40) {
                                e.classList.remove("is-fixed"), e.classList.add("relative"), e.classList.add("[--parent-color:white]"), e.classList.remove("[--parent-color:gray-900]"), a.classList.remove("[--parent-color:gray-900]"), s.classList.remove("hidden"), l.classList.add("hidden");
                                return
                            }
                            r > 40 && (e.classList.add("is-fixed"), e.classList.remove("relative"), e.classList.remove("[--parent-color:white]"), e.classList.add("[--parent-color:gray-900]"), a.classList.add("[--parent-color:gray-900]"), s.classList.add("hidden"), l.classList.remove("hidden")), r > 620 && r > n && !e.classList.contains(t) ? (e.classList.remove(i), e.classList.add(t)) : r < n && e.classList.contains(t) && (e.classList.remove(t), e.classList.add(i)), n = r
                        })
                    }
                }, []), (0, a.jsxs)("nav", {
                    className: "h-[104px]",
                    children: [(0, a.jsx)("div", {
                        className: "z-50 w-full text-white",
                        id: "header-nav",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto px-4 z-50 flex items-center justify-between py-5",
                            children: [(0, a.jsx)("div", {
                                className: "w-auto",
                                children: (0, a.jsx)("div", {
                                    className: "flex flex-wrap items-center",
                                    children: (0, a.jsx)("div", {
                                        className: "w-auto mr-14",
                                        children: (0, a.jsxs)(h(), {
                                            href: "/",
                                            children: [(0, a.jsx)(r(), {
                                                src: d.Z,
                                                className: "w-[199px]",
                                                alt: "Logo Esalink Blanc | Esalink",
                                                id: "img-notfixed"
                                            }), (0, a.jsx)(r(), {
                                                src: c.Z,
                                                className: "hidden w-[199px]",
                                                alt: "Logo Esalink Couleur | Esalink",
                                                id: "img-fixed"
                                            })]
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-auto hidden xl:block",
                                children: (0, a.jsxs)("ul", {
                                    className: "flex items-center mr-10",
                                    children: [(0, a.jsx)("li", {
                                        className: "group font-heading mr-7 text-lg",
                                        children: (0, a.jsxs)(h(), {
                                            href: "/expertise/facturation-electronique",
                                            className: "btn-fac-2024",
                                            children: [(0, a.jsx)("i", {
                                                className: "fa-solid fa-award pr-2"
                                            }), " Facturation \xe9lectronique 2024"]
                                        })
                                    }), (0, a.jsxs)("li", {
                                        className: "group hover-trigger font-heading mr-9 text-lg z-50 ",
                                        children: [(0, a.jsx)("div", {
                                            className: "group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer",
                                            children: "Expertise"
                                        }), (0, a.jsx)("div", {
                                            className: "hover-target submenu absolute group-hover:transition duration-300 shadow-xl",
                                            children: (0, a.jsx)("div", {
                                                className: "bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex gap-5",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "w-[270px] border-r pr-4",
                                                        children: [(0, a.jsxs)("label", {
                                                            className: "text-xl font-semibold font-heading ",
                                                            children: ["NOTRE", (0, a.jsx)("br", {}), "EXPERTISE"]
                                                        }), (0, a.jsx)("p", {
                                                            className: "text-base text-gray-600 font-heading mt-2",
                                                            children: "Optimisez vos \xe9changes de donn\xe9es B2B au profit de votre productivit\xe9 en ad\xe9quation avec vos exigences sectorielles"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-base font-heading pl-4 flex flex-col justify-center",
                                                        children: (0, a.jsxs)("ul", {
                                                            className: "leading-8 text-esalink-orange",
                                                            children: [(0, a.jsx)("li", {
                                                                className: "font-semibold hover:opacity-90",
                                                                children: (0, a.jsx)(h(), {
                                                                    href: "/expertise/edi",
                                                                    children: "EDI - L'\xe9change de Donn\xe9es Informatis\xe9"
                                                                })
                                                            }), (0, a.jsx)("li", {
                                                                className: "font-semibold hover:opacity-90 mt-2",
                                                                children: (0, a.jsx)(h(), {
                                                                    href: "/expertise/facturation-electronique",
                                                                    children: "La facturation \xe9lectronique"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        className: "group hover-trigger font-heading mr-9 text-lg z-50 ",
                                        children: [(0, a.jsx)("div", {
                                            className: "group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer",
                                            children: (0, a.jsx)(h(), {
                                                href: "/solutions",
                                                children: "Solutions"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "hover-target submenu absolute group-hover:transition duration-300 shadow-xl",
                                            children: (0, a.jsx)("div", {
                                                className: "bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex gap-5",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "w-[270px] border-r pr-4",
                                                        children: [(0, a.jsxs)("label", {
                                                            className: "text-xl font-semibold font-heading ",
                                                            children: ["NOS", (0, a.jsx)("br", {}), "SOLUTIONS"]
                                                        }), (0, a.jsx)("p", {
                                                            className: "text-base text-gray-600 font-heading mt-2",
                                                            children: "Catalysez la collaboration au sein de votre \xe9cosyst\xe8me \xe0 travers une large gamme de solutions de d\xe9mat\xe9rialisation adapt\xe9es \xe0 vos besoins"
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "text-base font-heading pl-4 ",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "border-b mb-3 pb-2",
                                                            children: (0, a.jsx)(h(), {
                                                                href: "/solutions",
                                                                className: "font-semibold hover:text-esalink-orange",
                                                                children: "Nos solutions"
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "flex gap-10 justify-center ",
                                                            children: [(0, a.jsxs)("ul", {
                                                                className: "leading-8",
                                                                children: [(0, a.jsx)("li", {
                                                                    className: "font-semibold",
                                                                    children: "On premise"
                                                                }), (0, a.jsx)("li", {
                                                                    className: "text-esalink-orange hover:opacity-90",
                                                                    children: (0, a.jsx)(h(), {
                                                                        href: "/solutions/tradexpress",
                                                                        children: "TradeXpress"
                                                                    })
                                                                }), (0, a.jsx)("li", {
                                                                    className: "text-esalink-orange hover:opacity-90",
                                                                    children: (0, a.jsx)(h(), {
                                                                        href: "/solutions/ibm-sterling",
                                                                        children: "IBM Sterling"
                                                                    })
                                                                }), (0, a.jsx)("li", {
                                                                    className: "text-esalink-orange hover:opacity-90",
                                                                    children: (0, a.jsx)(h(), {
                                                                        href: "/solutions/cleo",
                                                                        children: "Cleo"
                                                                    })
                                                                })]
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "leading-8",
                                                                children: [(0, a.jsx)("li", {
                                                                    className: "font-semibold",
                                                                    children: "Cloud"
                                                                }), (0, a.jsx)("li", {
                                                                    className: "text-esalink-orange hover:opacity-90",
                                                                    children: (0, a.jsx)(h(), {
                                                                        href: "/solutions/hubtimize",
                                                                        children: "Hubtimize\xae"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        className: "group hover-trigger font-heading mr-9 text-lg z-50 ",
                                        children: [(0, a.jsx)("div", {
                                            className: "group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer",
                                            children: (0, a.jsx)(h(), {
                                                href: "/nos-services",
                                                children: "Services"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "hover-target submenu absolute group-hover:transition duration-300 shadow-xl",
                                            children: (0, a.jsx)("div", {
                                                className: "bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex gap-5",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "w-[270px] border-r pr-4",
                                                        children: [(0, a.jsxs)("label", {
                                                            className: "text-xl font-semibold font-heading ",
                                                            children: ["NOS", (0, a.jsx)("br", {}), "SERVICES"]
                                                        }), (0, a.jsx)("p", {
                                                            className: "text-base text-gray-600 font-heading mt-2",
                                                            children: "Optimisez vos \xe9changes de donn\xe9es B2B au profit de votre productivit\xe9 en ad\xe9quation avec vos exigences sectorielles"
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "text-base font-heading pl-4 flex flex-col justify-center",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "border-b mb-3 pb-2",
                                                            children: (0, a.jsx)(h(), {
                                                                href: "/nos-services",
                                                                className: "font-semibold hover:text-esalink-orange",
                                                                children: "Nos services"
                                                            })
                                                        }), (0, a.jsx)("div", {
                                                            className: "flex gap-10 justify-center",
                                                            children: (0, a.jsxs)("ul", {
                                                                className: "leading-8 text-esalink-orange",
                                                                children: [(0, a.jsx)("li", {
                                                                    className: "font-semibold hover:opacity-90 ",
                                                                    children: (0, a.jsx)(h(), {
                                                                        href: "/nos-services/tma",
                                                                        children: "TMA - Tierce maintenance applicative"
                                                                    })
                                                                }), (0, a.jsx)("li", {
                                                                    className: "font-semibold hover:opacity-90",
                                                                    children: (0, a.jsx)(h(), {
                                                                        href: "/nos-services/regie",
                                                                        children: "R\xe9gie"
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    }), (0, a.jsx)("li", {
                                        className: "group font-heading text-lg",
                                        children: (0, a.jsx)(h(), {
                                            href: "/blog",
                                            className: "group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2",
                                            children: "Blog"
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-auto",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-wrap items-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "w-auto hidden 2xl:block",
                                        children: (0, a.jsx)("a", {
                                            href: "https://support.esalink.com/",
                                            className: "hover:underline hover:underline-offset-[3px] hover:decoration-2 font-heading block py-3.5 px-5 uppercase text-xs tracking-px font-bold transition ease-in rounded-10",
                                            children: "Connexion TMA"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "w-auto hidden xl:block",
                                        children: (0, a.jsx)(h(), {
                                            href: "/contact",
                                            className: "btn-demo font-heading block py-3.5 px-5 uppercase text-xs tracking-px font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10",
                                            children: "Obtenir une d\xe9mo"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "w-auto xl:hidden",
                                        children: (0, a.jsx)("button", {
                                            children: (0, a.jsxs)("svg", {
                                                className: "navbar-burger text-gray-800",
                                                width: "51",
                                                height: "51",
                                                viewBox: "0 0 56 56",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                onClick: x,
                                                children: [(0, a.jsx)("rect", {
                                                    width: "56",
                                                    height: "56",
                                                    rx: "28",
                                                    fill: "currentColor"
                                                }), (0, a.jsx)("path", {
                                                    d: "M37 32H19M37 24H19",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })]
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "hidden xl:block ml-5",
                                        children: (0, a.jsx)(u, {})
                                    })]
                                })
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "".concat(e ? "" : "hidden", " navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"),
                        children: [(0, a.jsx)("div", {
                            className: "navbar-backdrop fixed inset-0 bg-gray-800 opacity-80",
                            onClick: x
                        }), (0, a.jsx)("nav", {
                            className: "relative z-10 bg-white h-full overflow-y-auto overflow-x-hidden",
                            children: (0, a.jsxs)("div", {
                                className: "",
                                children: [(0, a.jsx)("div", {
                                    className: "w-full",
                                    children: (0, a.jsx)("div", {
                                        className: "flex items-center justify-between -m-2 flex-row-reverse pt-2 pr-2",
                                        children: (0, a.jsx)("div", {
                                            className: "w-auto p-2",
                                            children: (0, a.jsx)("button", {
                                                className: "navbar-burger",
                                                onClick: x,
                                                children: (0, a.jsx)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, a.jsx)("path", {
                                                        d: "M6 18L18 6M6 6L18 18",
                                                        stroke: "#111827",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto p-2 mx-auto",
                                    children: (0, a.jsx)(h(), {
                                        href: "/",
                                        children: (0, a.jsx)(r(), {
                                            src: c.Z,
                                            className: "h-40 w-52 mx-auto",
                                            alt: "Logo Esalink | Esalink"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-full",
                                    children: (0, a.jsxs)("ul", {
                                        children: [(0, a.jsxs)("li", {
                                            children: [(0, a.jsxs)("button", {
                                                id: "button_expertise",
                                                onClick: () => m("expertise"),
                                                className: "group flex justify-between border border-b-0 w-full text-left py-3",
                                                children: [(0, a.jsx)("a", {
                                                    className: "font-heading ml-7 font-medium text-lg text-gray-900 hover:text-gray-700",
                                                    href: "#",
                                                    children: "Expertise"
                                                }), (0, a.jsx)(i.G, {
                                                    icon: t.ptq,
                                                    className: "text-sm mr-3 my-auto transition duration-300",
                                                    id: "chevron_expertise"
                                                })]
                                            }), (0, a.jsx)("div", {
                                                id: "dropdown_expertise",
                                                className: "".concat("expertise" !== l ? "hidden" : ""),
                                                children: (0, a.jsxs)("ul", {
                                                    className: "py-3 ml-4",
                                                    children: [(0, a.jsx)("li", {
                                                        className: "font-semibold py-2 pl-4 text-esalink-orange",
                                                        children: "Notre expertise"
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/expertise/edi",
                                                            children: "EDI - L'\xe9change de Donn\xe9es Informatis\xe9"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/expertise/facturation-electronique",
                                                            children: "La facturation \xe9lectronique"
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "",
                                            children: [(0, a.jsxs)("button", {
                                                id: "button_solutions",
                                                onClick: () => m("solutions"),
                                                className: "flex justify-between border border-b-0 w-full text-left py-3 focus:bg-[#f4f7fc]",
                                                children: [(0, a.jsx)("a", {
                                                    className: "font-heading ml-7 font-medium text-lg text-gray-900 hover:text-gray-700",
                                                    href: "#",
                                                    children: "Solutions"
                                                }), (0, a.jsx)(i.G, {
                                                    icon: t.ptq,
                                                    className: "text-sm mr-3 my-auto transition duration-300",
                                                    id: "chevron_expertise"
                                                })]
                                            }), (0, a.jsx)("div", {
                                                id: "dropdown_solutions",
                                                className: "".concat("solutions" !== l ? "hidden" : ""),
                                                children: (0, a.jsxs)("ul", {
                                                    className: "py-3 ml-4",
                                                    children: [(0, a.jsx)("li", {
                                                        className: "font-semibold py-2 pl-4 text-gray-800",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/solutions",
                                                            children: "Nos solutions"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "font-semibold py-2 pl-4 text-esalink-orange",
                                                        children: "On premise"
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/solutions/tradexpress",
                                                            children: "TradeXpress"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/solutions/ibm-sterling",
                                                            children: "IBM Sterling"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/solutions/cleo",
                                                            children: "Cleo"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "font-semibold py-2 pl-4 text-esalink-orange",
                                                        children: "Cloud"
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/solutions/hubtimize",
                                                            children: "Hubtimize\xae"
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "",
                                            children: [(0, a.jsxs)("button", {
                                                id: "button_services",
                                                onClick: () => m("services"),
                                                className: "flex justify-between border border-b-0 w-full text-left py-3 focus:bg-[#f4f7fc]",
                                                children: [(0, a.jsx)("a", {
                                                    className: "font-heading ml-7 font-medium text-lg text-gray-900 hover:text-gray-700",
                                                    href: "#",
                                                    children: "Services"
                                                }), (0, a.jsx)(i.G, {
                                                    icon: t.ptq,
                                                    className: "text-sm mr-3 my-auto transition duration-300",
                                                    id: "chevron_expertise"
                                                })]
                                            }), (0, a.jsx)("div", {
                                                id: "dropdown_services",
                                                className: "".concat("services" !== l ? "hidden" : ""),
                                                children: (0, a.jsxs)("ul", {
                                                    className: "py-3 ml-4",
                                                    children: [(0, a.jsx)("li", {
                                                        className: "font-semibold py-2 pl-4 text-gray-800",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/nos-services",
                                                            children: "Nos services"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/nos-services/tma",
                                                            children: "TMA - Tierce maintenance applicative"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: "py-2 pl-4",
                                                        children: (0, a.jsx)(h(), {
                                                            href: "/nos-services/regie",
                                                            children: "R\xe9gie"
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, a.jsx)("li", {
                                            className: "",
                                            children: (0, a.jsx)("div", {
                                                className: "border w-full text-left py-3",
                                                children: (0, a.jsx)(h(), {
                                                    className: "font-heading ml-7 font-medium text-lg text-gray-900 hover:text-gray-700",
                                                    href: "/blog",
                                                    children: "Blog"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "w-full my-8",
                                    children: [(0, a.jsx)("div", {
                                        children: (0, a.jsx)("button", {
                                            className: "p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10",
                                            children: (0, a.jsx)("div", {
                                                className: "py-2 px-5 rounded-10",
                                                children: (0, a.jsx)("p", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "https://support.esalink.com/",
                                                        children: "Connexion TMA"
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "w-full px-9",
                                        children: (0, a.jsx)(h(), {
                                            className: "font-heading block py-3.5 px-5 uppercase text-xs text-center tracking-px font-bold bg-slate-400 bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10",
                                            href: "/contact",
                                            children: "Obtenir une d\xe9mo"
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "ml-7",
                                    children: (0, a.jsx)(u, {})
                                })]
                            })
                        })]
                    })]
                })
            }
        }
    }
]);