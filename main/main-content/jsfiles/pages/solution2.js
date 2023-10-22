(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(6998)
            }])
        },
        2896: function(e, t) {
            "use strict";
            t.Z = {
                src: "/main/main-content/gallary/graph.039a9252.svg",
                height: 51,
                width: 51
            }
        },
        8497: function(e, t) {
            "use strict";
            t.Z = {
                src: "/main/main-content/gallary/partner.3d9b5630.svg",
                height: 260,
                width: 295
            }
        },
        8375: function(e, t) {
            "use strict";
            t.Z = {
                src: "/main/main-content/gallary/sheet.f04b3e28.svg",
                height: 67,
                width: 70
            }
        },
        1233: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return f
                }
            });
            var a = s(5893),
                i = s(7294),
                n = s(5585),
                l = s(9417),
                r = s(7814);
            let o = e => {
                    let t;
                    let {
                        selected: s,
                        imgSrc: i,
                        index: n,
                        fa: o,
                        onClick: c,
                        id: d
                    } = e;
                    switch (o) {
                        case "faBox":
                            t = (0, a.jsx)(r.G, {
                                icon: l.hVM,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-red-400"
                            });
                            break;
                        case "faCar":
                            t = (0, a.jsx)(r.G, {
                                icon: l.yn$,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-red-400"
                            });
                            break;
                        case "faHospitalUser":
                            t = (0, a.jsx)(r.G, {
                                icon: l.u13,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-blue-400"
                            });
                            break;
                        case "faPersonDigging":
                            t = (0, a.jsx)(r.G, {
                                icon: l.$tV,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-yellow-500"
                            });
                            break;
                        case "faWheatAwn":
                            t = (0, a.jsx)(r.G, {
                                icon: l.jTV,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-yellow-300"
                            });
                            break;
                        case "faIndustry":
                            t = (0, a.jsx)(r.G, {
                                icon: l.jPh,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-blue-600"
                            });
                            break;
                        case "faBuildingColumns":
                            t = (0, a.jsx)(r.G, {
                                icon: l.Bkr,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-green-500"
                            });
                            break;
                        case "faShop":
                            t = (0, a.jsx)(r.G, {
                                icon: l.YyO,
                                className: s ? "text-white text-4xl" : "text-gray-300 text-4xl group-hover:text-indigo-500"
                            })
                    }
                    return (0, a.jsx)("div", {
                        className: "embla-thumbs__slide".concat(s ? " embla-thumbs__slide--selected" : ""),
                        children: (0, a.jsxs)("button", {
                            id: "sctactivite" + d,
                            onClick: c,
                            className: "group btnsctactivite min-w-[120px] px-4 py-6 rounded-xl bg-gray-50 hover:bg-gray-100 text-lg ".concat(s ? "bg-gradientblue-esalink" : ""),
                            type: "button",
                            children: [t, (0, a.jsx)("div", {
                                className: "embla-thumbs__slide__number",
                                children: (0, a.jsx)("span", {
                                    className: s ? "mt-1 text-base md:text-lg text-white font-semibold font-heading" : "mt-1 text-base md:text-lg text-gray-500 font-semibold font-heading",
                                    children: n
                                })
                            })]
                        })
                    })
                },
                c = [{
                    id: 0,
                    name: "Logistique",
                    src: "/images/slider/sliderActivite/logistique.webp",
                    fa: "faBox",
                    anim: 200,
                    content: ["R\xe9pondre aux besoins \xe9volutifs de votre march\xe9 avec rapidit\xe9 et fiabilit\xe9", "Informations en temps r\xe9el et communication efficace entre l’exp\xe9diteur et le destinataire", "Augmentation de votre ROI \xe0 travers l’optimisation du cycle O2C (commande \xe0 paiement)"],
                    buttonText: "Automatiser mes flux"
                }, {
                    id: 1,
                    name: "Automobile - A\xe9ronautique",
                    src: "/images/slider/sliderActivite/auto.webp",
                    fa: "faCar",
                    anim: 500,
                    content: ["Gestion simplifi\xe9e de la production en flux tendue", "Fluidification des \xe9changes en parfaite ad\xe9quation avec les besoins r\xe9els de la production", "Automatisation et optimisation efficace de la supply chain"],
                    buttonText: "Optimiser mes \xe9changes"
                }, {
                    id: 2,
                    name: "Sant\xe9",
                    fa: "faHospitalUser",
                    src: "/images/slider/sliderActivite/sante.webp",
                    anim: 800,
                    content: ["Acc\xe9l\xe9ration des processus de commande et de facturation", "Simplification des d\xe9marches administratives et tra\xe7abilit\xe9 en temps r\xe9el", "Modernisation de vos relations avec vos partenaires gr\xe2ce au Cloud intuitif"],
                    buttonText: "Fiabiliser ma gestion"
                }, {
                    id: 3,
                    name: "BTP",
                    fa: "faPersonDigging",
                    src: "/images/slider/sliderActivite/btp.webp",
                    anim: 1100,
                    content: ["R\xe9pondez aux besoins \xe9volutifs de votre secteur avec une approche agile", "Rapidit\xe9, pr\xe9cision et efficacit\xe9 dans vos \xe9changes", "R\xe9duisez les d\xe9lais et vos co\xfbts"],
                    buttonText: "Automatiser mes \xe9changes"
                }, {
                    id: 4,
                    name: "Agroalimentaire",
                    src: "/images/slider/sliderActivite/agroalimentaire.webp",
                    fa: "faWheatAwn",
                    anim: 1400,
                    content: ["Renforcer l’int\xe9gration num\xe9rique au sein de votre supply chain pour une meilleure productivit\xe9", "Gestion fiable, flexible et simplifi\xe9e de l’approvisionnement multiproduits", "Tra\xe7abilit\xe9 et respect des exigences suppl\xe9mentaires sp\xe9cifiques au secteur"],
                    buttonText: "Am\xe9liorer mes \xe9changes"
                }, {
                    id: 5,
                    name: "Industrie",
                    src: "/images/slider/sliderActivite/industrie.webp",
                    fa: "faIndustry",
                    anim: 1700,
                    content: ["Automatiser vos transactions", "Augmenter votre visibilit\xe9 sur vos stocks avec des donn\xe9es en temps r\xe9elles sur votre cha\xeene d’approvisionnement", "Acc\xe9l\xe9rer vos transactions commerciales et \xe9liminer les litiges"],
                    buttonText: "Optimiser ma supply chain"
                }, {
                    id: 6,
                    name: "Banques",
                    src: "/images/slider/sliderActivite/banque.webp",
                    fa: "faBuildingColumns",
                    anim: 2e3,
                    content: ["Assurer des hauts standards de s\xe9curit\xe9 des donn\xe9es personnelles", "G\xe9rer efficacement d’importantes volum\xe9tries de donn\xe9es et fiabiliser vos flux", "Optimiser vos \xe9changes avec la mise en place de protocoles sp\xe9cifiques, tels que SWIFT et EBICS"],
                    buttonText: "Fluidifier mes flux"
                }, {
                    id: 7,
                    name: "Grande distribution",
                    src: "/images/slider/sliderActivite/grande-distri.webp",
                    fa: "faShop",
                    anim: 2300,
                    content: ["Harmoniser les proc\xe9dures de r\xe9ception et de livraison directe", "Synchroniser facilement et rapidement vos donn\xe9es entre les entit\xe9s", "R\xe9duction des d\xe9lais, des litiges et des erreurs", "Solidifier la supply chain avec souplesse et agilit\xe9"],
                    buttonText: "Am\xe9liorer mes \xe9changes"
                }];
            var d = s(1664),
                x = s.n(d),
                u = s(5675),
                m = s.n(u);
            let h = e => {
                let {
                    slides: t,
                    options: s
                } = e, [l, r] = (0, i.useState)(0), [d, u] = (0, n.Z)(s), [h, f] = (0, n.Z)({
                    containScroll: "keepSnaps",
                    dragFree: !0
                }), p = (0, i.useCallback)(e => {
                    u && f && f.clickAllowed() && u.scrollTo(e)
                }, [u, f]), g = (0, i.useCallback)(() => {
                    u && f && (r(u.selectedScrollSnap()), f.scrollTo(u.selectedScrollSnap()))
                }, [u, f, r]);
                return (0, i.useEffect)(() => {
                    u && (g(), u.on("select", g), u.on("reInit", g))
                }, [u, g]), (0, a.jsx)("section", {
                    className: "py-28",
                    children: (0, a.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, a.jsxs)("div", {
                            className: "max-w-2xl mx-auto mb-16 text-center",
                            children: [(0, a.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "mb-8 font-heading text-6xl md:text-8xl xl:text-10xl font-semibold text-center",
                                children: ["Nos secteurs", (0, a.jsx)("label", {
                                    style: {
                                        color: "#eb9018"
                                    },
                                    children: " d'activit\xe9s"
                                })]
                            }), (0, a.jsx)("span", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                className: "text-lg text-gray-400",
                                children: "Quel que soit votre secteur d'activit\xe9, nous sommes l\xe0 pour vous accompagner."
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "embla",
                            children: [(0, a.jsx)("div", {
                                className: "hidden embla-thumbs md:flex justify-center sm:justify-between flex-wrap gap-8 mb-10",
                                children: c.map(e => (0, a.jsx)("div", {
                                    className: "embla-thumbs__viewport",
                                    ref: h,
                                    "data-aos": "fade-left",
                                    "data-aos-duration": e.anim,
                                    children: (0, a.jsx)("div", {
                                        className: "",
                                        children: (0, a.jsx)(o, {
                                            onClick: () => p(e.id),
                                            selected: e.id === l,
                                            index: e.name,
                                            id: e.id,
                                            fa: e.fa
                                        }, e.id)
                                    })
                                }, e.id))
                            }), (0, a.jsx)("div", {
                                className: "embla__viewport !h-auto sm:!h-[50vh]",
                                ref: d,
                                children: (0, a.jsx)("div", {
                                    className: "embla__container w-full mt-4",
                                    children: c.map(e => (0, a.jsx)("div", {
                                        className: "embla__slide bg-gray-50 p-6 rounded",
                                        children: (0, a.jsxs)("div", {
                                            className: "contentSct flex flex-wrap items-center justify-center",
                                            children: [(0, a.jsx)("div", {
                                                className: "contentimg w-full px-4 mb-4 lg:mb-0",
                                                children: (0, a.jsx)("div", {
                                                    className: "md:w-full h-72 relative ml-10",
                                                    children: (0, a.jsx)(m(), {
                                                        className: "absolute w-full h-full rounded-2xl object-cover",
                                                        src: e.src,
                                                        width: 700,
                                                        height: 700,
                                                        alt: e.name
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "contenttxt w-full pr-4 pl-11",
                                                children: [(0, a.jsx)("h3", {
                                                    className: "text-2xl mb-4 font-bold font-heading",
                                                    children: e.name
                                                }), (0, a.jsx)("ul", {
                                                    className: "text-lg text-gray-500 marker:text-esalink-orange list-outside list-disc leading-7",
                                                    children: e.content.map((e, t) => (0, a.jsx)("li", {
                                                        className: "list-disc ml-5",
                                                        children: e
                                                    }, t))
                                                }), (0, a.jsx)("div", {
                                                    className: "text-right mt-4",
                                                    children: (0, a.jsxs)(x(), {
                                                        className: "group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden",
                                                        href: "/contact?src=accueil&name=slider",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "mb-1",
                                                            children: e.buttonText
                                                        }), (0, a.jsx)("div", {
                                                            className: "w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    }, e.name))
                                })
                            })]
                        })]
                    })
                })
            };
            var f = h
        },
        3155: function(e, t, s) {
            "use strict";

            function a(e, t) {
                var s, a;
                return l(null !== (s = e.eventFields.eventStartDate) && void 0 !== s ? s : e.eventFields.eventEndDate).getTime() - l(null !== (a = t.eventFields.eventStartDate) && void 0 !== a ? a : t.eventFields.eventEndDate).getTime()
            }

            function i(e) {
                if (!e.eventFields.eventEndDate) return l(e.eventFields.eventStartDate).toLocaleDateString();
                if (!e.eventFields.eventStartDate) return l(e.eventFields.eventEndDate).toLocaleDateString();
                let t = l(e.eventFields.eventStartDate),
                    s = l(e.eventFields.eventEndDate);
                return t.getFullYear() !== s.getFullYear() ? "".concat(t.toLocaleDateString(), " au ").concat(s.toLocaleDateString()) : t.getMonth() !== s.getMonth() ? "".concat(n(t.getDate()), "/").concat(n(t.getMonth() + 1), " au ").concat(s.toLocaleDateString()) : t.getDate() !== s.getDate() ? "".concat(n(t.getDate()), " au ").concat(s.toLocaleDateString()) : s.toLocaleDateString()
            }

            function n(e) {
                return e > 9 ? e : "0".concat(e)
            }

            function l(e) {
                var t = e.split("/");
                return new Date(parseInt(t[2], 10), parseInt(t[1], 10) - 1, parseInt(t[0], 10))
            }
            s.d(t, {
                Bu: function() {
                    return a
                },
                rd: function() {
                    return i
                }
            })
        },
        6998: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return ex
                },
                default: function() {
                    return eu
                }
            });
            var a = s(5893),
                i = s(9008),
                n = s.n(i),
                l = s(5675),
                r = s.n(l),
                o = s(7488),
                c = s(3338),
                d = s(2701),
                x = s(6818),
                u = s(9708),
                m = s(697),
                h = s(8898),
                f = s(9462),
                p = s(6165);
            let g = [{
                name: "\xcatre accompagn\xe9 sur ma solution EDI",
                slug: "accompagne_edi"
            }, {
                name: "Passer \xe0 la facturation \xe9lectonique",
                slug: "facturation_electonique"
            }, {
                name: "Optimiser mon cycle client",
                slug: "cycle_client"
            }, {
                name: "Optimiser mon cycle fournisseur",
                slug: "cycle_fournisseur"
            }, {
                name: "Int\xe9grer mes flux B2B",
                slug: "flux_b2b"
            }, {
                name: "Demander un audit",
                slug: "demande_audit"
            }, {
                name: "Construire un projet EDI",
                slug: "construire_edi"
            }];
            var b = s(4963),
                v = s(1664),
                j = s.n(v);

            function w() {
                return (0, a.jsxs)("header", {
                    className: "bg-gradient-fuchsia background-animate overflow-hidden bg-gradient-esalink ",
                    children: [(0, a.jsx)(o.Z, {}), (0, a.jsxs)("div", {
                        className: "flex container mx-auto px-4 pt-12 pb-20",
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                "data-aos": "fade-down",
                                "data-aos-duration": "900",
                                className: "mb-6 font-heading flex xl:block justify-center",
                                children: (0, a.jsx)(r(), {
                                    src: c.Z,
                                    alt: "ISO 27001 Logo | Esalink",
                                    className: "w-40 transform-white opacity-80"
                                })
                            }), (0, a.jsxs)("h1", {
                                "data-aos": "fade-up",
                                "data-aos-easing": "ease-in-out-cubic",
                                className: "text-center xl:text-left font-heading text-white text-5xl md:text-9xl xl:text-10xl 2xl:text-12xl font-medium mb-6",
                                children: ["La d\xe9mat\xe9rialisation", (0, a.jsx)("br", {}), "au service de votre business"]
                            }), (0, a.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "text-center xl:text-left font-medium text-xl 2x:text-2xl text-white mb-10",
                                children: "Esalink vous accompagne dans la digitalisation de vos flux B2B"
                            }), (0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-col justify-center items-center xl:items-start xl:justify-start md:flex-row gap-8",
                                children: [(0, a.jsx)(j(), {
                                    href: "/solutions",
                                    className: "block w-fit font-heading text-white bg-white py-2 px-6 rounded-lg cursor-pointer text-lg 2xl:text-xl bg-opacity-30 hover:bg-opacity-20 transition ease-in",
                                    children: "Trouver votre solution EDI"
                                }), (0, a.jsx)(j(), {
                                    href: "/contact?src=accueil&name=passer_facturation_electronique",
                                    className: "block w-max w-fit font-heading text-white bg-white py-2 px-6 rounded-lg cursor-pointer text-lg 2xl:text-xl bg-opacity-30 hover:bg-opacity-20 transition ease-in",
                                    children: "Passer \xe0 la facturation \xe9lectronique"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-wrap justify-center xl:justify-start items-center flex-row mt-20 gap-14 2xl:gap-20",
                                children: [(0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(j(), {
                                        href: "/solutions/tradexpress",
                                        children: (0, a.jsx)(r(), {
                                            src: d.Z,
                                            alt: "Logo Generix Group Blanc | Esalink",
                                            className: "w-40",
                                            "data-aos": "slide-left",
                                            "data-aos-duration": "200"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(j(), {
                                        href: "/solutions/cleo",
                                        children: (0, a.jsx)(r(), {
                                            src: x.Z,
                                            alt: "Logo Cleo Blanc | Esalink",
                                            className: "w-20",
                                            "data-aos": "slide-left",
                                            "data-aos-duration": "500"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(j(), {
                                        href: "/solutions/hubtimize",
                                        children: (0, a.jsx)(r(), {
                                            src: u.Z,
                                            alt: "Logo Hubtimize Blanc | Esalink",
                                            className: "w-32",
                                            "data-aos": "slide-left",
                                            "data-aos-duration": "800"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-24",
                                    children: (0, a.jsx)(j(), {
                                        href: "/solutions/ibm-sterling",
                                        children: (0, a.jsx)(r(), {
                                            src: m.Z,
                                            alt: "Logo IBM Blanc | Esalink",
                                            className: "w-24",
                                            "data-aos": "slide-left",
                                            "data-aos-duration": "1100"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-18",
                                    children: (0, a.jsx)(r(), {
                                        src: h.Z,
                                        alt: "Logo GS1 Blanc | Esalink",
                                        className: "w-18",
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "1400"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(r(), {
                                        src: f.Z,
                                        alt: "Logo FNE Blanc | Esalink",
                                        className: "w-20 opacity-70",
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "1700"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "hidden xl:block absolute w-[390px] lg:w-[584px] xl:w-[502px] 2xl:w-[584px] top-72 lg:top-40 xl:top-28 opacity-30 xl:-right-[11.5rem] 2xl:-right-[5.5rem]",
                            children: (0, a.jsx)(r(), {
                                src: p.Z,
                                alt: "Globe | Esalink",
                                "data-aos": "fade-left",
                                "data-aos-duration": "800",
                                loading: "eager"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        "data-aos": "fade-up",
                        className: "absolute left-0 right-0 z-40 -mt-9 flex justify-center",
                        children: (0, a.jsx)(b.Z, {
                            options: g
                        })
                    })]
                })
            }
            var N = s(990),
                A = s(6855),
                y = s(7294);

            function k() {
                let e = N.ZP.timeline({
                        defaults: {
                            duration: .8
                        }
                    }),
                    t = N.ZP.timeline({
                        defaults: {
                            duration: .8
                        }
                    }),
                    s = N.ZP.timeline({
                        defaults: {
                            duration: .8
                        }
                    }),
                    i = (0, y.useRef)(),
                    n = (0, y.useRef)(),
                    l = (0, y.useRef)(),
                    o = (0, y.useRef)(),
                    c = (0, y.useRef)(),
                    d = (0, y.useRef)(),
                    x = (0, y.useRef)(),
                    u = (0, y.useRef)(),
                    m = (0, y.useRef)(),
                    h = (0, y.useRef)(),
                    f = function() {
                        e.to(i.current, {
                            rotation: 0,
                            ease: "circ.inOut"
                        }, 0).to(n.current, {
                            opacity: 1,
                            ease: "circ.inOut"
                        }, 0).to(l.current, {
                            scale: 1,
                            ease: "circ.inOut"
                        }, 0).to(o.current, {
                            opacity: 1,
                            ease: "circ.inOut"
                        }, 0).to(c.current, {
                            opacity: .1,
                            ease: "circ.inOut"
                        }, 0).to(d.current, {
                            scale: .5,
                            ease: "circ.inOut"
                        }, 0).to(x.current, {
                            opacity: 0,
                            ease: "circ.inOut"
                        }, 0).to(u.current, {
                            opacity: .1,
                            ease: "circ.inOut"
                        }, 0).to(m.current, {
                            scale: .5,
                            ease: "circ.inOut"
                        }, 0).to(h.current, {
                            opacity: 0,
                            ease: "circ.inOut"
                        }, 0), e.reverse(), t.to(i.current, {
                            rotation: -120,
                            ease: "circ.inOut"
                        }, 0).to(n.current, {
                            opacity: .1,
                            ease: "circ.inOut"
                        }, 0).to(l.current, {
                            scale: .5,
                            ease: "circ.inOut"
                        }, 0).to(o.current, {
                            opacity: 0,
                            ease: "circ.inOut"
                        }, 0).to(c.current, {
                            opacity: 1,
                            ease: "circ.inOut"
                        }, 0).to(d.current, {
                            scale: 1,
                            ease: "circ.inOut"
                        }, 0).to(x.current, {
                            opacity: 1,
                            ease: "circ.inOut"
                        }, 0).to(u.current, {
                            opacity: .1,
                            ease: "circ.inOut"
                        }, 0).to(m.current, {
                            scale: .5,
                            ease: "circ.inOut"
                        }, 0).to(h.current, {
                            opacity: 0,
                            ease: "circ.inOut"
                        }, 0), t.reverse(), s.to(i.current, {
                            rotation: 130,
                            ease: "circ.inOut"
                        }, 0).to(n.current, {
                            opacity: .1,
                            ease: "circ.inOut"
                        }, 0).to(l.current, {
                            scale: .5,
                            ease: "circ.inOut"
                        }, 0).to(o.current, {
                            opacity: 0,
                            ease: "circ.inOut"
                        }, 0).to(c.current, {
                            opacity: .1,
                            ease: "circ.inOut"
                        }, 0).to(d.current, {
                            scale: .5,
                            ease: "circ.inOut"
                        }, 0).to(x.current, {
                            opacity: 0,
                            ease: "circ.inOut"
                        }, 0).to(u.current, {
                            opacity: 1,
                            ease: "circ.inOut"
                        }, 0).to(m.current, {
                            scale: 1,
                            ease: "circ.inOut"
                        }, 0).to(h.current, {
                            opacity: 1,
                            ease: "circ.inOut"
                        }, 0), s.reverse()
                    };
                void 0 !== i.current && f(), (0, y.useEffect)(() => {
                    f()
                }, []), N.ZP.defaults({
                    overwrite: "auto"
                });
                let [p, g] = (0, y.useState)("panel1"), b = function(a) {
                    if (p != a) switch (g(a), a) {
                        case "panel1":
                            e.play(0);
                            break;
                        case "panel2":
                            t.play(0);
                            break;
                        case "panel3":
                            s.play(0)
                    }
                };
                return (0, a.jsxs)("section", {
                    className: "relative overflow-hidden pb-24 pt-10 bg-slate-50",
                    children: [(0, a.jsxs)("h2", {
                        className: "font-heading text-6xl md:text-8xl xl:text-10xl font-semibold text-center pt-14 mb-10",
                        "data-aos": "fade-up",
                        "data-aos-duration": "500",
                        children: ["Acc\xe9l\xe9rez vos", (0, a.jsx)("label", {
                            style: {
                                color: "#eb9018"
                            },
                            children: " flux"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "container mx-auto px-4",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center -m-6",
                            children: [(0, a.jsx)("div", {
                                className: "w-full xl:w-1/2 p-8 xl:p-16 flex flex-col items-center gap-8",
                                "data-aos": "fade-right",
                                "data-aos-duration": "500",
                                children: (0, a.jsx)("div", {
                                    className: "anim-snap hidden xl:block w-[553px]",
                                    children: (0, a.jsx)("div", {
                                        className: "relative flex justify-center items-center",
                                        children: (0, a.jsxs)("div", {
                                            className: "circle",
                                            children: [(0, a.jsxs)("div", {
                                                ref: i,
                                                className: "circle_content w-full flex items-center justify-center",
                                                children: [(0, a.jsx)(r(), {
                                                    src: A.Z,
                                                    alt: "Circle | Esalink",
                                                    className: "circle_big w-full"
                                                }), (0, a.jsx)("div", {
                                                    ref: l,
                                                    className: "circle_1 absolute rounded-full bg-gradient-orange flex justify-center xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 items-center xl:-left-11 2xl:-left-14",
                                                    children: (0, a.jsx)("svg", {
                                                        ref: o,
                                                        fill: "#FFF",
                                                        className: "w-1/2",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 512 512",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                                                        })
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    ref: d,
                                                    className: "circle_2 absolute rounded-full bg-gradient-orange flex justify-center items-center xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 top-0 right-10",
                                                    children: (0, a.jsx)("svg", {
                                                        ref: x,
                                                        fill: "#FFF",
                                                        className: "w-1/2 opacity-0 rotate-[120deg]",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 640 512",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1c-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86C176.8 69.17 126.7 136.2 124.6 139.1c-7.844 10.69-5.531 25.72 5.125 33.57c4.281 3.157 9.281 4.657 14.19 4.657c7.406 0 14.69-3.375 19.38-9.782c.4062-.5626 40.19-53.91 100.5-63.23c7.457-.9611 14.98 .67 21.56 4.483L227.2 168.2C214.8 180.5 207.1 196.1 207.1 214.5c0 17.5 6.812 33.94 19.16 46.29C239.5 273.2 255.9 279.1 273.4 279.1s33.94-6.813 46.31-19.19l11.35-11.35l124.2 100.9c2.312 1.875 2.656 5.251 .5 7.97l-27.69 35.75c-1.844 2.25-5.25 2.594-7.156 1.063l-22.22-18.69l-26.19 27.75c-2.344 2.875-5.344 3.563-6.906 3.719c-1.656 .1562-4.562 .125-6.812-1.719l-32.41-27.66L310.7 392.3l-2.812 2.938c-5.844 7.157-14.09 11.66-23.28 12.6c-9.469 .8126-18.25-1.75-24.5-6.782L170.3 319.8H96V128.3L0 128.3v255.6l64 .0404c11.74 0 21.57-6.706 27.14-16.14h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.4376c13.62-1.406 26.41-6.063 37.47-13.5l.9062 .8126c12.03 9.876 27.28 14.41 42.69 12.78c13.19-1.375 25.28-7.032 33.91-15.35c21.09 8.188 46.09 2.344 61.25-16.47l27.69-35.75c18.47-22.82 14.97-56.48-7.844-75.01l-120.3-97.76l8.381-8.382c9.375-9.376 9.375-24.57 0-33.94c-9.375-9.376-24.56-9.376-33.94 0L285.8 226.8C279.2 233.5 267.7 233.5 261.1 226.8c-3.312-3.282-5.125-7.657-5.125-12.31c0-4.688 1.812-9.064 5.281-12.53l85.91-87.64c7.812-7.845 18.53-11.75 28.94-10.03c59.75 9.22 100.2 62.73 100.6 63.29c3.088 4.155 7.264 6.946 11.84 8.376H544v175.1c0 17.67 14.33 32.05 31.1 32.05L640 384V128.1L506.1 127.1zM48 352c-8.75 0-16-7.245-16-15.99c0-8.876 7.25-15.99 16-15.99S64 327.2 64 336.1C64 344.8 56.75 352 48 352zM592 352c-8.75 0-16-7.245-16-15.99c0-8.876 7.25-15.99 16-15.99s16 7.117 16 15.99C608 344.8 600.8 352 592 352z"
                                                        })
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    ref: m,
                                                    className: "circle_3 absolute rounded-full bg-gradient-orange flex justify-center items-center xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 bottom-0 right-10",
                                                    children: (0, a.jsx)("svg", {
                                                        ref: h,
                                                        fill: "#FFF",
                                                        className: "w-1/2 opacity-0 rotate-[230deg] -ml-[6px] -mt-[3px]",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 512 512",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("ul", {
                                                children: [(0, a.jsx)("li", {
                                                    ref: n,
                                                    className: "panel_1_title",
                                                    children: "Conseil"
                                                }), (0, a.jsx)("li", {
                                                    ref: c,
                                                    className: "panel_2_title",
                                                    children: "Accompagnement"
                                                }), (0, a.jsx)("li", {
                                                    ref: u,
                                                    className: "panel_3_title",
                                                    children: "Int\xe9gration"
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-full xl:w-1/2 p-8 xl:p-16",
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h2", {
                                        className: "mb-10 font-heading font-semibold text-4xl sm:text-5xl text-gray-900",
                                        children: "Nous vous accompagnons dans toutes les \xe9tapes de vos projets de d\xe9mat\xe9rialisation"
                                    }), (0, a.jsxs)("div", {
                                        className: "accordion arrows",
                                        children: [(0, a.jsx)("div", {
                                            id: "integration-link",
                                            className: "step-div cursor-pointer",
                                            onClick: () => {
                                                b("panel1")
                                            },
                                            children: (0, a.jsxs)("section", {
                                                className: "box ".concat("panel1" === p ? "open" : ""),
                                                children: [(0, a.jsx)("div", {
                                                    className: "mb-6 bg-gradient-cyan h-px"
                                                }), (0, a.jsxs)("label", {
                                                    className: "box-title font-heading font-semibold text-lg text-gray-900 mb-5 flex items-center justify-between",
                                                    children: ["Conseil", (0, a.jsx)("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 18 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M3.75 11.25L9 6L14.25 11.25",
                                                            stroke: "#18181B",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "box-content hidden mb-5 text-base text-gray-600",
                                                    children: ["A travers un audit technico-fonctionnel nos experts diagnostiquent vos syst\xe8mes d’informations et vos configurations.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "A l’issue de cette \xe9tude, nous \xe9tablissons un rapport structur\xe9 accompagn\xe9 d’un plan d’actions pour r\xe9pondre \xe0 vos enjeux d’Echange de Donn\xe9es Informatis\xe9.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "EsaLink vous propose des solutions EDI certifi\xe9es, en parfaite ad\xe9quation avec vos besoins et projets les plus sp\xe9cifiques.", (0, a.jsx)("div", {
                                                        className: "text-center mt-6",
                                                        children: (0, a.jsx)(j(), {
                                                            id: "btnFindSolution",
                                                            className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                                            href: "/contact?src=accueil&name=initier_projet_edi",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "relative py-2 px-9 bg-white rounded",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                                                }), (0, a.jsx)("span", {
                                                                    className: "relative z-10 font-semibold",
                                                                    children: "Initier un projet EDI"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "mb-6 bg-gradient-cyan h-px"
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            id: "accompagnement-link",
                                            className: "step-div cursor-pointer",
                                            onClick: () => {
                                                b("panel2")
                                            },
                                            children: (0, a.jsxs)("section", {
                                                className: "box ".concat("panel2" === p ? "open" : ""),
                                                children: [(0, a.jsxs)("label", {
                                                    className: "box-title font-heading font-semibold text-lg text-gray-900 mb-5 flex items-center justify-between",
                                                    children: ["Accompagnement", (0, a.jsx)("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 18 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M3.75 11.25L9 6L14.25 11.25",
                                                            stroke: "#18181B",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "box-content hidden mb-5 text-base text-gray-600",
                                                    children: ["Peu importe votre solution, install\xe9e ou non par EsaLink, nous proposons plusieurs mod\xe8les d’assistance pour la r\xe9solution ou la pr\xe9vention de vos incidents.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "De la TMA (Tierce Maintenance Applicative) \xe0 l’Assistance en R\xe9gie, des interventions ponctuelles ou des formations sur-mesure, nos \xe9quipes vous assistent sur tout et partout pour vous assurer l’efficacit\xe9 de vos solutions EDI.", (0, a.jsx)("div", {
                                                        className: "text-center mt-6",
                                                        children: (0, a.jsx)(j(), {
                                                            id: "btnFindSolution",
                                                            className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                                            href: "/nos-services",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "relative py-2 px-9 bg-white rounded",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                                                }), (0, a.jsx)("span", {
                                                                    className: "relative z-10 font-semibold",
                                                                    children: "Obtenir un service de support"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            id: "conseil-link",
                                            className: "step-div cursor-pointer",
                                            onClick: () => {
                                                b("panel3")
                                            },
                                            children: (0, a.jsxs)("section", {
                                                className: "box ".concat("panel3" === p ? "open" : ""),
                                                children: [(0, a.jsx)("div", {
                                                    className: "mb-6 bg-gradient-cyan h-px"
                                                }), (0, a.jsxs)("label", {
                                                    className: "box-title font-heading font-semibold text-lg text-gray-900 mb-5 flex items-center justify-between",
                                                    children: ["Int\xe9gration", (0, a.jsx)("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 18 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M3.75 11.25L9 6L14.25 11.25",
                                                            stroke: "#18181B",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "box-content hidden mb-5 text-base text-gray-600",
                                                    children: ["Mod\xe8le SaaS (private Cloud) ou On Premise, nous ", (0, a.jsx)("b", {
                                                        children: "installons, configurons ou migrons"
                                                    }), " votre solution de la mani\xe8re la plus optimale.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Nos experts EDI ", (0, a.jsx)("b", {
                                                        children: "int\xe8grent les modules"
                                                    }), " en parfaite symbiose avec vos infrastructures et votre \xe9cosyst\xe8me.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Nous ", (0, a.jsx)("b", {
                                                        children: "testons"
                                                    }), " et ", (0, a.jsx)("b", {
                                                        children: "appliquons"
                                                    }), " toutes les connexions et ajustements sensibles qui vous permettent d’obtenir enti\xe8re satisfaction de votre solution.", (0, a.jsx)("div", {
                                                        className: "text-center mt-6",
                                                        children: (0, a.jsx)(j(), {
                                                            id: "btnFindSolution",
                                                            className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                                            href: "/solutions",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "relative py-2 px-9 bg-white rounded",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                                                }), (0, a.jsx)("span", {
                                                                    className: "relative z-10 font-semibold",
                                                                    children: "Trouver votre solution EDI"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "mb-6 bg-gradient-cyan h-px"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
            var E = s(1233),
                I = s(2208),
                D = {
                    src: "/main/main-content/gallary/cedric.58f118ba.webp",
                    height: 43,
                    width: 43,
                    blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoIAAgAAkA4JYgCdAYqXkrJZJW4AP5Otcg3U/5b3s0qxiZkS/nPTi9BuKkUP+tSJfC5c7Ye068vjfn6lJLcTgAA",
                    blurWidth: 8,
                    blurHeight: 8
                },
                L = {
                    src: "/main/main-content/gallary/thomas.460a66c2.webp",
                    height: 43,
                    width: 43,
                    blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAkA4JQBOgCBvYr7OAAD9Oy8M0nV3C4z+vbJzDZZDjfvR8CKL8ayfzKdEDHg+P8xVe8PYBEncwQyCK7KAAAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                C = {
                    src: "/main/main-content/gallary/khaleelah.91597bc5.webp",
                    height: 43,
                    width: 43,
                    blurDataURL: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACwAQCdASoIAAgAAkA4JQBOgBulyVIgAP75CE6axhkbKY+fE+nuROfvixtkw7etdlzaCR3lj38YAEionOGrH9KoUl89aIRTed9E5vvwZtYas8AA",
                    blurWidth: 8,
                    blurHeight: 8
                },
                B = s(5607),
                S = s(1460),
                _ = s(8834);

            function z() {
                return (0, a.jsx)("section", {
                    className: "relative pb-32 overflow-hidden bg-white",
                    children: (0, a.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, a.jsx)("h2", {
                            className: "mb-5 mx-auto font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900",
                            "data-aos": "fade-up",
                            "data-aos-duration": "500",
                            children: "La satisfaction client ? Notre priorit\xe9 !"
                        }), (0, a.jsx)("p", {
                            className: "mb-16 text-lg max-w-2xl mx-auto text-center text-gray-600",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            children: "Nos diff\xe9rents clients et partenaires nous permettent de vous apporter la meilleure des Solutions propos\xe9es gr\xe2ce aux multiples retours d’exp\xe9rience et \xe0 de fr\xe9quentes veilles technologiques."
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-wrap -m-5",
                            children: [(0, a.jsx)("div", {
                                className: "w-full md:w-1/3 p-5",
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: (0, a.jsx)("div", {
                                    className: "h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000",
                                    children: (0, a.jsxs)("div", {
                                        className: "h-full px-7 py-8 bg-white rounded-lg",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, a.jsx)(r(), {
                                                src: D,
                                                alt: "Cedric T-DB | Esalink",
                                                className: "mb-8 rounded-full"
                                            }), (0, a.jsx)(r(), {
                                                src: B.Z,
                                                alt: "Claire Fontaine Petit | Esalink",
                                                className: "h-10 w-auto opacity-50"
                                            })]
                                        }), (0, a.jsx)("p", {
                                            className: "mb-8 text-lg text-gray-900 text-justify",
                                            children: "“Le groupe Exacompta-Clairefontaine collabore avec EsaLink pour tous les projets li\xe9s \xe0 la plateforme TradeXpress EDI. Nous sommes satisfaits d’EsaLink, compos\xe9 de consultants exp\xe9riment\xe9s et qualifi\xe9s. L’\xe9quipe est r\xe9active, les projets sont r\xe9alis\xe9s dans les d\xe9lais pr\xe9vus.”"
                                        }), (0, a.jsx)("h3", {
                                            className: "mb-1.5 font-heading font-bold text-lg text-gray-900",
                                            children: "Cedric T-DB"
                                        }), (0, a.jsx)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "DSI. EXACOMPTA - CLAIRFONTAINE"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "hidden md:block w-full md:w-1/3 p-5",
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                children: (0, a.jsx)("div", {
                                    className: "h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000",
                                    children: (0, a.jsxs)("div", {
                                        className: "h-full px-7 py-8 bg-white rounded-lg",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, a.jsx)(r(), {
                                                src: L,
                                                alt: "Thomas M. | Esalink",
                                                className: "mb-8 rounded-full"
                                            }), (0, a.jsx)(r(), {
                                                src: S.Z,
                                                alt: "Nestl\xe9 Petit | Esalink",
                                                className: "h-10 w-auto opacity-50"
                                            })]
                                        }), (0, a.jsx)("p", {
                                            className: "mb-8 text-lg text-gray-900 text-justify",
                                            children: "“Travailler chez NESTLE, c'est travailler dans l’un des plus gros groupes mondiaux. En immersion totale dans leur \xe9quipe EDI, nous intervenons comme le catalyseur de toutes les sources d'information, et notre mission n'est pas simplement l'expertise EDI mais aussi l'accompagnement des diff\xe9rents interlocuteurs.”"
                                        }), (0, a.jsx)("h3", {
                                            className: "mb-1.5 font-heading font-bold text-lg text-gray-900",
                                            children: "Thomas M."
                                        }), (0, a.jsx)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Expert EDI EsaLink. NESTL\xc9"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "hidden md:block w-full md:w-1/3 p-5",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1100",
                                children: (0, a.jsx)("div", {
                                    className: "h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000",
                                    children: (0, a.jsxs)("div", {
                                        className: "h-full px-7 py-8 bg-white rounded-lg",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, a.jsx)(r(), {
                                                src: C,
                                                alt: "Khaleelah PEERBOCUS | Esalink",
                                                className: "mb-8 rounded-full"
                                            }), (0, a.jsx)(r(), {
                                                src: _.Z,
                                                alt: "Maccs Empowering | Esalink",
                                                className: "h-10 w-auto opacity-50"
                                            })]
                                        }), (0, a.jsx)("p", {
                                            className: "mb-8 text-lg text-gray-900 text-justify",
                                            children: "“L’\xe9quipe EsaLink a facilement compris nos exigences, et aujourd'hui MACCS fournit non seulement un service de qualit\xe9 en ce qui concerne les messages EDI, mais nous avons \xe9galement des experts EDI en interne gr\xe2ce aux formations des experts EsaLink. La proximit\xe9 et la convivialit\xe9 d'EsaLink ont \xe9t\xe9 tr\xe8s appr\xe9ci\xe9es. Ce sont des experts dans le domaine.”"
                                        }), (0, a.jsx)("h3", {
                                            className: "mb-1.5 font-heading font-bold text-lg text-gray-900",
                                            children: "Khaleelah PEERBOCUS"
                                        }), (0, a.jsx)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Head Software Delivery. MACCS"
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            var q = {
                    src: "/main/main-content/gallary/bg-color.37b51bd6.webp",
                    height: 645,
                    width: 1920,
                    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAMAAkA4JZACdAEO9sW/AAD++DhNEFQ2BuhuxA4CuOtVRtSt2cjs4wivIvavCed1IgAA",
                    blurWidth: 8,
                    blurHeight: 3
                },
                P = {
                    src: "/main/main-content/gallary/screens.94ff050c.webp",
                    height: 2495,
                    width: 3500,
                    blurDataURL: "data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAAAAAAAAAAABAgICAwQEAQE216C/2hMCLdjw/+3/6hYzoWVUcNXNDQADBgYLNyMCAFZQOCBOAAAAsAEAnQEqCAAGAAJAOCWkAALnD2G7QAD+7S5Dv/tnT1+Je9STFv0/x/Yokv7Ot7WLeokV+uoC/30gav/bKEDU7zkR/P4HzZpX1tF6gAAA",
                    blurWidth: 8,
                    blurHeight: 6
                },
                U = {
                    src: "/main/main-content/gallary/esalinkxibm.a88428e1.webp",
                    height: 180,
                    width: 877,
                    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAKDUvIA6ElFoAAAQCADJEKABWUDggMAAAAJABAJ0BKggAAgACQDglpAAC50/dYAD+7S3RYnz5x/9/8L0vyTllQp4nRC43ngAAAA==",
                    blurWidth: 8,
                    blurHeight: 2
                },
                R = s(8375),
                O = s(8497),
                F = s(2896),
                M = s(7814),
                T = s(9417);

            function Q() {
                return (0, a.jsxs)("div", {
                    className: "container mt-24 mx-auto h-full rounded-xl p-2 bg-gradient-cyan transform transition",
                    children: [(0, a.jsxs)("section", {
                        id: "hubtimize-banner",
                        className: "hubtimize-pres bg-slate-50 rounded-lg",
                        children: [(0, a.jsxs)("div", {
                            className: "container mx-auto px-4",
                            children: [(0, a.jsxs)("h2", {
                                className: "pt-20 mb-5 font-heading font-semibold text-4xl sm:text-7xl text-gray-900 text-center",
                                children: ["D\xe9couvrez ", (0, a.jsx)("label", {
                                    style: {
                                        color: "#eb9018"
                                    },
                                    children: "HUBTIMIZE\xae"
                                })]
                            }), (0, a.jsx)("p", {
                                className: "mb-8 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px",
                                children: "La derni\xe8re solution CLOUD au cœur de votre business"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "text-center mb-18",
                            children: (0, a.jsx)(j(), {
                                className: "inline-block group p-0.5 font-heading text-base text-gray-900 font-bold bg-white hover:bg-gray-50 overflow-hidden rounded-md bg-gradientblue-esalink",
                                href: "/solutions/hubtimize",
                                children: (0, a.jsxs)("div", {
                                    className: "relative py-2 px-6 bg-slate-50 rounded",
                                    children: [(0, a.jsx)("div", {
                                        className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradientblue-esalink"
                                    }), (0, a.jsx)("span", {
                                        className: "relative z-10",
                                        children: "En savoir plus"
                                    })]
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "main-container mx-auto text-white relative duration-[0.8s]",
                            children: [(0, a.jsx)("div", {
                                className: "resizer w-full h-full absolute left-0 top-0 bg-cover bg-center origin-bottom duration-[0.8s]",
                                style: {
                                    backgroundImage: "url(".concat(q.src, ")")
                                }
                            }), (0, a.jsxs)("div", {
                                className: "content-section flex flex-row ",
                                children: [(0, a.jsxs)("div", {
                                    className: "text overflow-hidden relative flex-grow w-0",
                                    children: [(0, a.jsx)("div", {
                                        className: "relative w-full h-full esaxibm-parent scale-150 duration-[0.8s]",
                                        children: (0, a.jsx)("div", {
                                            className: "esaxibm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 origin-top-left duration-[0.8s]",
                                            children: (0, a.jsx)(r(), {
                                                src: U,
                                                alt: "Esalink EDI Excellence | Esalink"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "hidden-text absolute opacity-0 top-0 w-full h-full duration-[0.8s]",
                                        children: (0, a.jsxs)("div", {
                                            className: "relative text-parent left-[15%] top-[-15%] duration-[0.8s]",
                                            children: [(0, a.jsxs)("div", {
                                                className: "relative top-0 left-0 trade-opt duration-[0.8s]",
                                                children: [(0, a.jsx)("span", {
                                                    className: "text-2xl md:text-6xl font-semibold m:text-extrabig block pb-3",
                                                    children: "HUBTIMIZE"
                                                }), (0, a.jsx)("span", {
                                                    className: "text-xl md:text-4xl md:text-titlexl block",
                                                    children: "Trade OptimizeR"
                                                })]
                                            }), (0, a.jsxs)("span", {
                                                className: "relative text-sm md:text-base lg:text-2xl xl:text-4xl font-medium bottom-text top-[-10px] duration-[0.8s]",
                                                children: ["Solution All-In-One", (0, a.jsx)("br", {}), "100% Saas", (0, a.jsx)("br", {}), "E-invoice", (0, a.jsx)("br", {}), "EDI", (0, a.jsx)(j(), {
                                                    href: "/solutions/hubtimize",
                                                    className: "hidden xl:block w-max w-fit font-heading text-white bg-white py-1 px-5 rounded-lg cursor-pointer text-xl mt-4 2xl:mt-6 2xl:text-3xl bg-opacity-30 hover:bg-opacity-20 transition ease-in",
                                                    children: "D\xe9couvrez Hubtimize\xae"
                                                })]
                                            })]
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "image relative flex-grow w-0 z-10",
                                    children: (0, a.jsx)(r(), {
                                        src: P,
                                        className: "relative origin-bottom-right opacity-[0.6] duration-[0.8s]",
                                        alt: "Plein d \xe9cran Hubtimize | Esalink"
                                    })
                                })]
                            })]
                        })]
                    }), (0, a.jsx)("section", {
                        className: "relative pt-24 overflow-hidden bg-white",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto px-4 mb-12",
                            children: [(0, a.jsxs)("div", {
                                className: "max-w-3xl mx-auto text-center mb-12 lg:mb-20",
                                children: [(0, a.jsxs)("h2", {
                                    className: "mb-6 text-4xl lg:text-5xl text-gray-900 font-semibold font-heading",
                                    children: ["Quand l'EDI rencontre ", (0, a.jsx)("label", {
                                        style: {
                                            color: "#eb9018"
                                        },
                                        children: "l'innovation"
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "mb-8 text-lg text-gray-500",
                                    children: "Une solution d’int\xe9gration B2B qui allie les technologies de pointe \xe0 l’exp\xe9rience utilisateur."
                                }), (0, a.jsxs)(j(), {
                                    href: "/contact?src=accueil&name=demander_demonstration",
                                    children: [" ", (0, a.jsxs)("button", {
                                        className: "group relative font-heading px-6 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                        children: [(0, a.jsx)("div", {
                                            className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                        }), (0, a.jsx)("p", {
                                            className: "relative z-10",
                                            children: "Demander une d\xe9monstration"
                                        })]
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-wrap max-w-4xl mx-auto",
                                children: [(0, a.jsx)("div", {
                                    className: "w-full md:w-1/2 p-8 border-b md:border-r border-gray-200",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-wrap -m-4",
                                        children: (0, a.jsx)("div", {
                                            className: "flex-1 p-4",
                                            children: (0, a.jsxs)("div", {
                                                className: "group text-right",
                                                children: [(0, a.jsx)("h3", {
                                                    "data-aos": "slide-right",
                                                    "data-aos-duration": "800",
                                                    className: "mb-5 font-heading font-bold text-gray-900 text-lg group-hover:underline bg-clip-text text-transparent bg-gradient-purple2",
                                                    children: "Design"
                                                }), (0, a.jsx)("p", {
                                                    "data-aos": "fade-right",
                                                    "data-aos-duration": "1000",
                                                    className: "mb-5 text-gray-600 text-base",
                                                    children: "Une interface moderne et intuitive alliant efficacit\xe9 et simplicit\xe9."
                                                })]
                                            })
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-full md:w-1/2 p-8 border-b border-gray-200",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-wrap -m-4",
                                        children: (0, a.jsx)("div", {
                                            className: "flex-1 p-4",
                                            children: (0, a.jsxs)("div", {
                                                className: "group",
                                                children: [(0, a.jsx)("h3", {
                                                    "data-aos": "slide-left",
                                                    "data-aos-duration": "800",
                                                    className: "mb-5 font-heading font-bold text-gray-900 text-lg group-hover:underline bg-clip-text text-transparent bg-gradient-purple2",
                                                    children: "Flexibilit\xe9"
                                                }), (0, a.jsx)("p", {
                                                    "data-aos": "fade-left",
                                                    "data-aos-duration": "1000",
                                                    className: "mb-5 text-gray-600 text-base",
                                                    children: "Un usage sur-mesure r\xe9pondant int\xe9gralement \xe0 vos besoins."
                                                })]
                                            })
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-gray-200",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-wrap -m-4",
                                        children: (0, a.jsx)("div", {
                                            className: "flex-1 p-4",
                                            children: (0, a.jsxs)("div", {
                                                className: "group text-right",
                                                children: [(0, a.jsx)("h3", {
                                                    "data-aos": "slide-up",
                                                    "data-aos-duration": "1200",
                                                    className: "mb-5 font-heading font-bold text-gray-900 text-lg group-hover:underline bg-clip-text text-transparent bg-gradient-purple2",
                                                    children: "Performance"
                                                }), (0, a.jsx)("p", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-duration": "1200",
                                                    className: "mb-5 text-gray-600 text-base",
                                                    children: "Un cœur de fonctionnement puissant."
                                                })]
                                            })
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-full md:w-1/2 p-8",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-wrap -m-4",
                                        children: (0, a.jsx)("div", {
                                            className: "flex-1 p-4",
                                            children: (0, a.jsxs)("div", {
                                                className: "group",
                                                children: [(0, a.jsx)("h3", {
                                                    "data-aos": "slide-up",
                                                    "data-aos-duration": "1200",
                                                    className: "mb-5 font-heading font-bold text-gray-900 text-lg group-hover:underline bg-clip-text text-transparent bg-gradient-purple2 ",
                                                    children: "S\xe9curit\xe9"
                                                }), (0, a.jsx)("p", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-duration": "1200",
                                                    className: "mb-5 text-gray-600 text-base",
                                                    children: "Une protection des donn\xe9es sans faille."
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    }), (0, a.jsx)("section", {
                        className: "py-20 bg-slate-50",
                        children: (0, a.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [(0, a.jsx)("div", {
                                className: "max-w-3xl mx-auto text-center mb-12 lg:mb-20",
                                children: (0, a.jsxs)("h2", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "mb-6 text-4xl lg:text-5xl text-gray-900 font-semibold font-heading !leading-[52px]",
                                    children: [" ", (0, a.jsx)("label", {
                                        style: {
                                            color: "#eb9018"
                                        },
                                        children: "HUBTIMIZE\xae"
                                    }), " a \xe9t\xe9 sp\xe9cialement con\xe7u sur les retours directs des utilisateurs d’EDI."]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-wrap -mx-4",
                                children: [(0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center",
                                    children: [(0, a.jsx)("span", {
                                        className: "bg-gradient-green mx-auto mb-6 flex items-center justify-center bg-gray-400 rounded-full w-16 h-16",
                                        children: (0, a.jsx)(M.G, {
                                            icon: T.Y$T,
                                            className: "text-white text-2xl"
                                        })
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 text-2xl font-semibold font-heading",
                                        children: "R&D Innovation"
                                    }), (0, a.jsx)("p", {
                                        className: "text-gray-500 leading-loose max-w-sm mx-auto",
                                        children: "HUBTIMIZE\xae a \xe9t\xe9 d\xe9velopp\xe9e par des experts dans leurs domaines et \xe0 l’\xe9coute des derni\xe8res exigences des utilisateurs."
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1000",
                                    className: "w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center",
                                    children: [(0, a.jsx)("span", {
                                        className: "bg-gradient-green mx-auto mb-6 flex items-center justify-center bg-gray-400 rounded-full w-16 h-16",
                                        children: (0, a.jsx)(M.G, {
                                            icon: T.SoD,
                                            className: "text-white text-2xl"
                                        })
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 text-2xl font-semibold font-heading",
                                        children: "Exp\xe9rience utilisateur"
                                    }), (0, a.jsx)("p", {
                                        className: "text-gray-500 leading-loose max-w-sm mx-auto",
                                        children: "Une interface moderne et intuitive, utilisable \xe0 la fois par des profils techniques et non techniques. Toutes les informations \xe0 port\xe9e de mains en quelques clics. Un support technique accessible en direct gr\xe2ce au chat int\xe9gr\xe9."
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1500",
                                    className: "w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center",
                                    children: [(0, a.jsx)("span", {
                                        className: "bg-gradient-green mx-auto mb-6 flex items-center justify-center bg-gray-400 rounded-full w-16 h-16",
                                        children: (0, a.jsx)(M.G, {
                                            icon: T.ESn,
                                            className: "text-white text-2xl"
                                        })
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 text-2xl font-semibold font-heading",
                                        children: "Haute disponibilit\xe9"
                                    }), (0, a.jsx)("p", {
                                        className: "text-gray-500 leading-loose max-w-sm mx-auto",
                                        children: "Une solution robuste cod\xe9velopp\xe9e avec IBM et h\xe9berg\xe9e sur AWS. HUBTIMIZE\xae vous propose les plus hauts standards de performance et de s\xe9curit\xe9 gr\xe2ce \xe0 des technologies de pointes certifi\xe9es. Une haute disponibilit\xe9 \xe0 toute \xe9preuve."
                                    })]
                                })]
                            })]
                        })
                    }), (0, a.jsx)("section", {
                        className: "relative py-24 overflow-hidden bg-white",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto px-20 mb-12",
                            children: [(0, a.jsx)("h2", {
                                className: "mb-8 max-w-6xl mx-auto font-heading font-semibold text-center text-6xl sm:text-6xl text-gray-900",
                                children: "Une plateforme unique"
                            }), (0, a.jsxs)("h3", {
                                className: "mb-8 max-w-6xl mx-auto font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900",
                                children: [(0, a.jsx)("label", {
                                    className: "text-esalink-orange",
                                    children: "HUBTIMIZE"
                                }), " B2B Solution"]
                            }), (0, a.jsx)("p", {
                                className: "mb-4 text-lg text-gray-500 text-center",
                                children: "Automatisez – fiabilisez - acc\xe9l\xe9rez vos \xe9changes B2B et B2G."
                            }), (0, a.jsx)("p", {
                                className: "mb-16 text-lg text-gray-500 text-center",
                                children: "R\xe9duisez les erreurs – les d\xe9lais – les co\xfbts"
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-wrap -m-8",
                                children: [(0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "w-full md:w-1/3 p-8",
                                    children: [(0, a.jsxs)(j(), {
                                        className: "group",
                                        href: "/solutions/hubtimize",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-9 overflow-hidden flex rounded-full aspect-square sm:w-[300px] sm:h-[300px] items-center justify-center mx-auto",
                                            style: {
                                                backgroundImage: "linear-gradient(112.84deg,#b9ddda.33%,#b9dddab0 38.23%)"
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: "h-60 transform hover:scale-110 w-full transition ease-out duration-500 flex flex-col items-center justify-center",
                                                children: (0, a.jsx)(r(), {
                                                    src: R.Z,
                                                    className: "ml-auto mr-auto w-28",
                                                    alt: "Sheet | Esalink"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline text-center",
                                            children: "E-invoicing"
                                        }), (0, a.jsx)("p", {
                                            className: "mb-5 text-gray-600 text-base text-center",
                                            children: "La facturation \xe9lectronique et l’archivage en conformit\xe9 avec les exigences l\xe9gales."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "mx-auto w-fit",
                                        children: (0, a.jsxs)(j(), {
                                            className: "group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden",
                                            href: "/solutions/hubtimize",
                                            children: [(0, a.jsx)("p", {
                                                className: "mb-1",
                                                children: "En savoir plus"
                                            }), (0, a.jsx)("div", {
                                                className: "w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1000",
                                    className: "w-full md:w-1/3 p-8",
                                    children: [(0, a.jsxs)(j(), {
                                        className: "group",
                                        href: "/solutions/hubtimize",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-9 overflow-hidden flex rounded-full aspect-square sm:w-[300px] sm:h-[300px] items-center justify-center mx-auto",
                                            style: {
                                                backgroundImage: "linear-gradient(112.84deg,#F7E5C0.33%,#f7e5c0b3 38.23%)"
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: "h-60 transform hover:scale-110 w-full transition ease-out duration-500 flex flex-col items-center justify-center",
                                                children: (0, a.jsx)(r(), {
                                                    src: O.Z,
                                                    className: "ml-auto mr-auto w-28",
                                                    alt: "Partenaire | Esalink"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline text-center",
                                            children: "Partner Portal"
                                        }), (0, a.jsx)("p", {
                                            className: "mb-5 text-gray-600 text-base text-center",
                                            children: "Un acc\xe8s WebEDI pour embarquer tous vos partenaires dans votre \xe9cosyst\xe8me."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "mx-auto w-fit",
                                        children: (0, a.jsxs)(j(), {
                                            className: "group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden",
                                            href: "/solutions/hubtimize",
                                            children: [(0, a.jsx)("p", {
                                                className: "mb-1",
                                                children: "En savoir plus"
                                            }), (0, a.jsx)("div", {
                                                className: "w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1500",
                                    className: "w-full md:w-1/3 p-8",
                                    children: [(0, a.jsxs)(j(), {
                                        className: "group",
                                        href: "/solutions/hubtimize",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-9 overflow-hidden flex rounded-full aspect-square sm:w-[300px] sm:h-[300px] items-center justify-center mx-auto",
                                            style: {
                                                backgroundImage: "linear-gradient(112.84deg,#E3CDC7.33%,#E3CDC7b0 38.23%)"
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: "h-60 transform hover:scale-110 w-full transition ease-out duration-500 flex flex-col items-center justify-center",
                                                children: (0, a.jsx)(r(), {
                                                    src: F.Z,
                                                    className: "ml-auto mr-auto w-28",
                                                    alt: "Graphique EDI | Esalink"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline text-center",
                                            children: "Data Intelligence"
                                        }), (0, a.jsx)("p", {
                                            className: "mb-5 text-gray-600 text-base text-center",
                                            children: "Des donn\xe9es personnalisables sur tous vos flux commerciaux et les KPIs de votre \xe9cosyst\xe8me."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "mx-auto w-fit",
                                        children: (0, a.jsxs)(j(), {
                                            className: "group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden",
                                            href: "/solutions/hubtimize",
                                            children: [(0, a.jsx)("p", {
                                                className: "mb-1",
                                                children: "En savoir plus"
                                            }), (0, a.jsx)("div", {
                                                className: "w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
            var Z = {
                    src: "/main/main-content/gallary/ibm-bg.fe5c9eac.webp",
                    height: 4024,
                    width: 6024,
                    blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAkA4JQBOgB5vWYwAAP7vqKN+KTQLWaaUH2NCeeOJ0VZbBnEI9un4bRX2ONP6UBtZwikikrIAAAA=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                G = {
                    src: "/main/main-content/gallary/generix-bg.a4e0e56d.webp",
                    height: 4024,
                    width: 6048,
                    blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JYwCdAEXe4ZiEAD2v9+FV/SmdgTzkemGpH7dDM2RlX5kaPZQFAByfG7xlAAX8YEUAAAA",
                    blurWidth: 8,
                    blurHeight: 5
                },
                H = {
                    src: "/main/main-content/gallary/cleo-bg.3746d80c.webp",
                    height: 747,
                    width: 1328,
                    blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JZQCdAD0MYq6AAD+wE8JvzgbmpX+NbY+2xeGrDiFMPBh5RDkUgSaXtOduHnCyFkI6ulYYAA=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                V = {
                    src: "/main/main-content/gallary/IBM.5905977c.svg",
                    height: 60,
                    width: 149
                },
                W = {
                    src: "/main/main-content/gallary/generix.9154aa5e.svg",
                    height: 48,
                    width: 187
                },
                J = {
                    src: "/main/main-content/gallary/Cleo.876e6ebc.svg",
                    height: 60,
                    width: 148
                },
                Y = s(3908);

            function X() {
                return (0, a.jsxs)("section", {
                    id: "partners",
                    className: "partners mb-24",
                    children: [(0, a.jsxs)("h2", {
                        className: "pt-16 mb-5 font-heading font-semibold text-6xl sm:text-7xl text-gray-900 text-center",
                        "data-aos": "fade-up",
                        "data-aos-duration": "500",
                        children: ["Besoin de solutions", (0, a.jsxs)("label", {
                            style: {
                                color: "#eb9018"
                            },
                            children: [(0, a.jsx)("br", {}), "ON PREMISE ?"]
                        })]
                    }), (0, a.jsx)("p", {
                        className: "mb-20 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px",
                        "data-aos": "fade-up",
                        "data-aos-duration": "800",
                        children: "D\xe9couvrez nos solutions PARTENAIRES CERTIFI\xc9ES"
                    }), (0, a.jsx)("div", {
                        className: "partners-block",
                        children: (0, a.jsx)("div", {
                            className: "img-accordion-container mx-auto w-full h-[600px] overflow-hidden",
                            children: (0, a.jsxs)("div", {
                                className: "img-accordion flex items-stretch justify-around gap-1 h-full flex-col",
                                children: [(0, a.jsxs)("div", {
                                    className: "img-item relative",
                                    children: [(0, a.jsx)("div", {
                                        className: "bg-image absolute w-full h-full -z-10",
                                        children: (0, a.jsx)(r(), {
                                            src: Z,
                                            className: "object-cover w-full h-full",
                                            alt: "Fond ecran IBM | Esalink"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "img-container flex flex-col justify-center items-center h-full",
                                        children: [(0, a.jsx)(r(), {
                                            src: V,
                                            alt: "Logo IBM | Esalink"
                                        }), (0, a.jsx)("span", {
                                            className: "text-regular text-white px-2 py-5 whitespace-nowrap",
                                            children: "IBM Sterling B2B Integrator"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "text-container flex flex-row justify-between absolute bottom-0 text-white",
                                        children: [(0, a.jsxs)("div", {
                                            className: "text flex flex-col px-10",
                                            children: [(0, a.jsx)(r(), {
                                                src: V,
                                                className: "title-logo w-fit pb-7",
                                                alt: "Logo IBM | Esalink"
                                            }), (0, a.jsx)("p", {
                                                children: "Int\xe9grer vos processus B2B et EDI dans une passerelle unique prenant en charge la transformation de donn\xe9es. Flexible, solide et s\xe9curis\xe9e, une solution phare sans compromis sur la performance et couvrant un large panel de protocoles de communication certifi\xe9s."
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "cta items-end pr-4 pb-4",
                                            children: (0, a.jsx)(j(), {
                                                href: "/solutions/ibm-sterling",
                                                children: (0, a.jsx)(r(), {
                                                    src: Y.Z,
                                                    className: "max-w-none transition delay-150 hover:rotate-45 w-28",
                                                    alt: "CTA | Esalink"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "img-item relative",
                                    children: [(0, a.jsx)("div", {
                                        className: "bg-image absolute w-full h-full -z-10",
                                        children: (0, a.jsx)(r(), {
                                            src: H,
                                            className: "object-cover w-full h-full",
                                            alt: "Fond ecran CLEO | Esalink"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "img-container flex flex-col justify-center items-center h-full",
                                        children: [(0, a.jsx)(r(), {
                                            src: J,
                                            alt: "Logo Cleo | Esalink"
                                        }), (0, a.jsx)("span", {
                                            className: "text-regular text-white px-2 py-5 whitespace-nowrap",
                                            children: "CIC"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "text-container flex flex-row justify-between absolute bottom-0 text-white",
                                        children: [(0, a.jsxs)("div", {
                                            className: "text flex flex-col px-10",
                                            children: [(0, a.jsx)(r(), {
                                                src: J,
                                                className: "title-logo w-fit pb-7",
                                                alt: "Logo Cleo | Esalink"
                                            }), (0, a.jsx)("p", {
                                                children: "Plateforme optimis\xe9e d’int\xe9gration B2B. Condens\xe9 de technologie visant \xe0 offrir flexibilit\xe9 et facilit\xe9 dans l’int\xe9gration des applications inter et intra-entreprise, des int\xe9grations EDI et non EDI et r\xe9pondant aux hauts standards de s\xe9curit\xe9."
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "cta items-end pr-4 pb-4",
                                            children: (0, a.jsx)(j(), {
                                                href: "/solutions/cleo",
                                                children: (0, a.jsx)(r(), {
                                                    src: Y.Z,
                                                    className: "max-w-none transition delay-150 hover:rotate-45 w-28",
                                                    alt: "CTA | Esalink"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "img-item relative",
                                    children: [(0, a.jsx)("div", {
                                        className: "bg-image absolute w-full h-full -z-10",
                                        children: (0, a.jsx)(r(), {
                                            src: G,
                                            className: "object-cover w-full h-full",
                                            alt: "Fond ecran Generix | Esalink"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "img-container flex flex-col justify-center items-center h-full",
                                        children: [(0, a.jsx)(r(), {
                                            src: W,
                                            alt: "Logo Generix | Esalink"
                                        }), (0, a.jsx)("span", {
                                            className: "text-regular text-white px-2 py-5 whitespace-nowrap",
                                            children: "TradeXpress"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "text-container flex flex-row justify-between absolute bottom-0 text-white",
                                        children: [(0, a.jsxs)("div", {
                                            className: "text flex flex-col px-10",
                                            children: [(0, a.jsx)(r(), {
                                                src: W,
                                                className: "title-logo w-fit pb-7",
                                                alt: "Logo Generix | Esalink"
                                            }), (0, a.jsx)("p", {
                                                children: "Gateway d’int\xe9gration B2B inter et intra-entreprises av\xe9r\xe9. Optez pour une des r\xe9f\xe9rences dans l’int\xe9gration EDI, B2B Integration, EAI, MFT, etc. Une solution de confiance utilis\xe9e par des milliers d’entreprises \xe0 travers le monde."
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "cta items-end pr-4 pb-4",
                                            children: (0, a.jsx)(j(), {
                                                href: "/solutions/tradexpress",
                                                children: (0, a.jsx)(r(), {
                                                    src: Y.Z,
                                                    className: "max-w-none transition delay-150 hover:rotate-45 w-28",
                                                    alt: "CTA | Esalink"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            var K = {
                    src: "/main/main-content/gallary/DAF.e041499d.webp",
                    height: 1400,
                    width: 3840,
                    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoIAAMAAkA4JagCdLoAAyKkUdugAP7WBHZKK2sodApQaIBDT/3HYG68W//EOdu/W3n0AAAA",
                    blurWidth: 8,
                    blurHeight: 3
                },
                $ = {
                    src: "/main/main-content/gallary/DSI.4fe7db65.webp",
                    height: 1400,
                    width: 3840,
                    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAABQAgCdASoIAAMAAkA4JbACdLoB+AADIPyu7AAA/kT1auxrsZcj/43duMPlf/+YQeIPPhuIEfvl0zAA",
                    blurWidth: 8,
                    blurHeight: 3
                };

            function ee() {
                let [e, t] = (0, y.useState)("block3"), [s, i] = (0, y.useState)("block2Part2"), n = s => {
                    t(e === s ? null : s)
                }, l = e => {
                    i(s === e ? null : e)
                };
                return (0, y.useEffect)(() => {
                    var e = document.getElementById("uare1"),
                        t = document.getElementById("uare2");
                    null !== e && e.addEventListener("click", function() {
                        document.getElementById("dsidiv").classList.add("showDsi"), document.getElementById("dafdiv").classList.remove("showDaf"), document.getElementById("uare1line").classList.add("bg-gradient-cyan"), document.getElementById("uare2line").classList.remove("bg-gradient-cyan")
                    }), null !== t && t.addEventListener("click", function() {
                        document.getElementById("dafdiv").classList.add("showDaf"), document.getElementById("dsidiv").classList.remove("showDsi"), document.getElementById("uare2line").classList.add("bg-gradient-cyan"), document.getElementById("uare1line").classList.remove("bg-gradient-cyan")
                    })
                }), (0, a.jsxs)("section", {
                    className: "sliderUAre w-full h-auto overflow-hidden bg-slate-50 pt-8",
                    children: [(0, a.jsxs)("h2", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "500",
                        className: "mb-8 font-heading text-6xl md:text-8xl xl:text-10xl font-semibold text-center pt-10",
                        children: ["Des enjeux, des", (0, a.jsx)("label", {
                            style: {
                                color: "#eb9018"
                            },
                            children: " solutions."
                        })]
                    }), (0, a.jsx)("p", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "800",
                        className: "font-heading text-xl md:text-3xl xl:text-5xl font-semibold text-center pt-10",
                        children: "Vous \xeates ?"
                    }), (0, a.jsxs)("div", {
                        className: "sliderUdiv mx-auto h-full flex flex-col justify-center items-center",
                        children: [(0, a.jsxs)("div", {
                            className: "sliderUbutton my-4 mb-8 flex-col sm:flex-row text-center sm:text-left w-full h-auto flex justify-center items-center",
                            children: [(0, a.jsx)("div", {
                                "data-aos": "fade-left",
                                "data-aos-duration": "500",
                                className: "w-auto p-6",
                                children: (0, a.jsxs)("button", {
                                    id: "uare1",
                                    className: "group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-lg overflow-hidden cursor-pointer",
                                    children: [(0, a.jsx)("p", {
                                        className: "mb-2 px-7",
                                        children: "Directeur des Syst\xe8mes d'Information"
                                    }), (0, a.jsx)("div", {
                                        id: "uare1line",
                                        className: "w-full transform -translate-x-0 h-0.5 bg-gradient-cyan bg-slate-200 transition ease-in-out duration-500"
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                "data-aos": "fade-right",
                                "data-aos-duration": "500",
                                className: "w-auto p-6",
                                children: (0, a.jsxs)("button", {
                                    id: "uare2",
                                    className: "group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-lg overflow-hidden cursor-pointer",
                                    children: [(0, a.jsx)("p", {
                                        className: "mb-2 px-7",
                                        children: "Directeur Administratif et Financier "
                                    }), (0, a.jsx)("div", {
                                        id: "uare2line",
                                        className: "w-full transform translate-x-0 h-0.5 bg-slate-200 transition ease-in-out duration-500"
                                    })]
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "sliderUcontent relative w-full h-auto flex justify-center items-center",
                            children: [(0, a.jsx)("div", {
                                id: "dsidiv",
                                className: "dsidiv p-0.5 showDsi",
                                style: {
                                    backgroundImage: "url(".concat($.src, ")"),
                                    backgroundSize: "cover"
                                },
                                children: (0, a.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "container px-4 mx-auto h-full flex flex-col sm:flex-row sm:justify-end",
                                    children: (0, a.jsxs)("div", {
                                        className: "w-full sm:w-6/12 py-6 sm:py-10 text-white",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-8 cursor-pointer",
                                            onClick: () => n("block1"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Fa\xeetes le choix de l’efficacit\xe9 en digitalisant et automatisant tous vos flux B2B"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block1" == e ? "rotate-45 -mt-10" : "", " -mt-5 transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("p", {
                                            className: "".concat("block1" !== e ? "hidden" : "block", " mb-8 -mt-4"),
                                            children: ["Profitez des outils les plus performants et adapt\xe9s \xe0 vos besoins les plus sp\xe9cifiques.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Optimisez et s\xe9curisez le fonctionnement de votre \xe9cosyst\xe8me en minimisant toute intervention humaine. D\xe9bloquez votre potentiel de productivit\xe9."]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-8 cursor-pointer ",
                                            onClick: () => n("block2"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Pilotez sereinement vos flux EDI"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block2" == e ? "rotate-45 -mt-4" : "", " transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("p", {
                                            className: "".concat("block2" !== e ? "hidden" : "block", " mb-8 -mt-4"),
                                            children: ["Pilotez sereinement vos flux EDI.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Suivez, contr\xf4lez et tracez vos \xe9changes financiers ou de supply-chain et \xe0 chaque \xe9tape de votre activit\xe9."]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-4 cursor-pointer",
                                            onClick: () => n("block3"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Reprenez le contr\xf4le par la flexibilit\xe9"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block3" == e ? "rotate-45 -mt-4" : "", " transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "".concat("block3" !== e ? "hidden" : "block"),
                                            children: ["Fluidifiez l’int\xe9gration de vos nouveaux partenaires et commencez sans perdre de temps \xe0 \xe9changer. Gagnez en autonomie et efficacit\xe9 dans vos \xe9changes commerciaux :", (0, a.jsxs)("ul", {
                                                className: "bullet-li-esa",
                                                children: [(0, a.jsx)("li", {
                                                    className: "ml-4 mb-2",
                                                    children: "Optimisation des \xe9changes de donn\xe9es avec vos partenaires, une interop\xe9rabilit\xe9 sans faille"
                                                }), (0, a.jsx)("li", {
                                                    className: "ml-4 mb-2",
                                                    children: "R\xe9activit\xe9 aux diff\xe9rentes sollicitations et demandes"
                                                }), (0, a.jsx)("li", {
                                                    className: "ml-4 mb-2",
                                                    children: "Am\xe9lioration de votre relation client : efficacit\xe9, fiabilit\xe9, s\xe9curit\xe9 et r\xe9activit\xe9"
                                                }), (0, a.jsx)("li", {
                                                    className: "ml-4 mb-2",
                                                    children: "Anticipation : garder une longueur d’avance sur vos concurrents"
                                                }), (0, a.jsx)("li", {
                                                    className: "ml-4 mb-2",
                                                    children: "Int\xe9gration facilit\xe9 des partenaires (TPE – PME – GE) dans votre \xe9cosyst\xe8me \xe0 travers une unique plateforme EDI."
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                id: "dafdiv",
                                className: "dafdiv bg-gradient-cyan2 p-0.5 rounded-lg",
                                style: {
                                    backgroundImage: "url(".concat(K.src, ")"),
                                    backgroundSize: "cover"
                                },
                                children: (0, a.jsx)("div", {
                                    className: "container px-4 mx-auto h-full flex flex-col sm:flex-row sm:justify-start",
                                    children: (0, a.jsxs)("div", {
                                        className: "sm:w-6/12 py-6 sm:py-10 text-white",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-8 cursor-pointer",
                                            onClick: () => l("block1Part2"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Passez \xe0 la facturation \xe9lectronique"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block1Part2" == s ? "rotate-45 -mt-4" : "", " transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right "
                                                })
                                            })]
                                        }), (0, a.jsx)("p", {
                                            className: "".concat("block1Part2" !== s ? "hidden" : "block", " mb-8 -mt-4"),
                                            children: "Optez d\xe8s maintenant pour la d\xe9mat\xe9rialisation fiscale afin de r\xe9duire vos co\xfbts et automatiser le traitement de vos factures fournisseurs et clients."
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-8 cursor-pointer",
                                            onClick: () => l("block2Part2"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Soyez en ad\xe9quation avec la r\xe9glementation fiscale de demain"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block2Part2" == s ? "rotate-45 -mt-4" : "", " transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("p", {
                                            className: "".concat("block2Part2" !== s ? "hidden" : "block", " mb-8 -mt-4"),
                                            children: ["La facturation \xe9lectronique ainsi que son archivage seront progressivement obligatoires \xe0 partir de mi-2024.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "A l’issue de la r\xe9forme men\xe9e par la DGFiP et la Loi de Finances, toutes les entreprises devront recevoir et \xe9mettre leurs factures B2B et B2G exclusivement sous format \xe9lectronique.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Assurez-vous une communication automatis\xe9e et s\xe9curis\xe9e avec la Plateforme de Facturation Publique Chorus Pro."]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-8 cursor-pointer",
                                            onClick: () => l("block3Part2"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Simplifiez votre gestion"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block3Part2" == s ? "rotate-45 -mt-4" : "", " transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right"
                                                })
                                            })]
                                        }), (0, a.jsx)("p", {
                                            className: "".concat("block3Part2" !== s ? "hidden" : "block", " mb-8 -mt-4"),
                                            children: "Acc\xe9dez \xe0 une vision globale et intelligente de votre activit\xe9 avec une tra\xe7abilit\xe9 en temps r\xe9el. Optimisez vos co\xfbts de gestions commerciales."
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-between items-center mb-8 cursor-pointer",
                                            onClick: () => l("block4Part2"),
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-medium",
                                                children: "Am\xe9liorez votre comp\xe9titivit\xe9 en pilotant vos \xe9changes"
                                            }), (0, a.jsx)("div", {
                                                className: "".concat("block4Part2" == s ? "rotate-45 -mt-4" : "", " transition duration-300"),
                                                children: (0, a.jsx)("i", {
                                                    className: "fa-solid fa-arrow-right w-[34px] text-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("p", {
                                            className: "".concat("block4Part2" !== s ? "hidden" : "block", " mb-8 -mt-4"),
                                            children: ["Fluidifiez tout votre processus de facturation \xe0 travers l’automatisation de vos \xe9changes avec vos partenaires.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Diminuez les risques d’erreurs, de non-conformit\xe9 et neutralisez ainsi les d\xe9lais de paiement au profit de votre tr\xe9sorerie."]
                                        })]
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
            var et = s(2601),
                es = s(5585);
            let ea = e => {
                    let {
                        enabled: t,
                        onClick: s
                    } = e;
                    return (0, a.jsx)("button", {
                        className: "embla__button embla__button--prev !left-0",
                        onClick: s,
                        disabled: !t,
                        children: (0, a.jsx)("svg", {
                            className: "embla__button__svg",
                            viewBox: "137.718 -1.001 366.563 644",
                            children: (0, a.jsx)("path", {
                                d: "M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
                            })
                        })
                    })
                },
                ei = e => {
                    let {
                        enabled: t,
                        onClick: s
                    } = e;
                    return (0, a.jsx)("button", {
                        className: "embla__button embla__button--next !right-0",
                        onClick: s,
                        disabled: !t,
                        children: (0, a.jsx)("svg", {
                            className: "embla__button__svg",
                            viewBox: "0 0 238.003 238.003",
                            children: (0, a.jsx)("path", {
                                d: "M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
                            })
                        })
                    })
                },
                en = e => {
                    var t;
                    let {
                        posts: s,
                        options: i
                    } = e, [n, l] = (0, es.Z)(i), [o, c] = (0, y.useState)(!1), [d, x] = (0, y.useState)(!1), [u, m] = (0, y.useState)(0), [h, f] = (0, y.useState)([]), p = (0, y.useCallback)(() => l && l.scrollPrev(), [l]), g = (0, y.useCallback)(() => l && l.scrollNext(), [l]);
                    (0, y.useCallback)(e => l && l.scrollTo(e), [l]);
                    let b = (0, y.useCallback)(() => {
                        l && (m(l.selectedScrollSnap()), c(l.canScrollPrev()), x(l.canScrollNext()))
                    }, [l, m]);
                    return (0, y.useEffect)(() => {
                        l && (b(), f(l.scrollSnapList()), l.on("select", b), l.on("reInit", b))
                    }, [l, f, b]), (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: "embla relative",
                            children: [(0, a.jsx)("div", {
                                className: "embla__viewport !h-[50vh]",
                                ref: n,
                                children: (0, a.jsx)("div", {
                                    className: "embla__container mx-6",
                                    children: s.map((e, s) => {
                                        var i;
                                        return (0, a.jsx)("div", {
                                            className: "embla__slide !flex-[0_0_100%] lg:!flex-[0_0_50%] px-6 w-full h-full",
                                            children: (0, a.jsxs)(j(), {
                                                href: "/blog/".concat(e.slug),
                                                className: "h-64 w-full relative",
                                                children: [(0, a.jsx)(r(), {
                                                    className: "absolute w-full h-full rounded-3xl",
                                                    src: null !== (t = null === (i = e.featuredImage) || void 0 === i ? void 0 : i.node.gallaryItemUrl) && void 0 !== t ? t : "/images/home/cleo-bg.webp",
                                                    width: 500,
                                                    height: 500,
                                                    alt: e.title
                                                }), (0, a.jsx)("div", {
                                                    className: "absolute bottom-0 left-0 w-full p-2.5",
                                                    children: (0, a.jsx)("div", {
                                                        className: "p-5 w-full bg-black bg-opacity-40 rounded-2xl",
                                                        children: (0, a.jsx)("p", {
                                                            className: "font-heading font-semibold text-lg text-white group-hover:underline",
                                                            children: e.title
                                                        })
                                                    })
                                                })]
                                            })
                                        }, s)
                                    })
                                })
                            }), (0, a.jsx)(ea, {
                                onClick: p,
                                enabled: o
                            }), (0, a.jsx)(ei, {
                                onClick: g,
                                enabled: d
                            })]
                        })
                    })
                };
            var el = s(3155);

            function er(e) {
                let {
                    posts: t,
                    events: s,
                    otherActualities: i
                } = e;
                return (0, a.jsx)("section", {
                    className: "py-20 overflow-hidden bg-slate-50",
                    children: (0, a.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, a.jsx)("div", {
                            className: "mx-auto text-center",
                            children: (0, a.jsxs)("h2", {
                                className: "mb-4 font-heading font-semibold text-6xl sm:text-7xl text-black",
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: ["Suivez ", (0, a.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "l'actualit\xe9 "
                                }), " avec ", (0, a.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: " EsaLink"
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex w-full flex-col lg:flex-row mt-2 md:mt-20",
                            children: [(0, a.jsx)("div", {
                                className: "w-full lg:w-[65%] xl:w-[70%] mr-5",
                                children: (0, a.jsx)(en, {
                                    posts: t.nodes,
                                    options: {
                                        loop: !0,
                                        align: "start"
                                    }
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-full lg:w-[35%] xl:w-[30%] flex justify-center items-center ",
                                children: (0, a.jsx)("div", {
                                    className: "group w-[100%] p-0.5 bg-gradient-cyan transform rounded-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "h-auto px-7 py-8 bg-white rounded-lg flex flex-col justify-center items-start",
                                        children: [(0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-lg font-medium underline uppercase mb-2",
                                                children: "Evenements"
                                            }), (0, a.jsx)("ul", {
                                                className: "",
                                                children: s.nodes.sort(el.Bu).map((e, t) => (0, a.jsx)("li", {
                                                    className: "hover:text-esalink-purple",
                                                    children: e.eventFields.eventLink ? (0, a.jsxs)(j(), {
                                                        href: e.eventFields.eventLink,
                                                        children: [(0, el.rd)(e), " - ", e.title]
                                                    }) : (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, el.rd)(e), " - ", e.title]
                                                    })
                                                }, t))
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "mt-8",
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-lg font-medium underline uppercase mb-2",
                                                children: "Actualit\xe9s diverses"
                                            }), (0, a.jsx)("ul", {
                                                className: "",
                                                children: i.nodes.map((e, t) => (0, a.jsx)("li", {
                                                    className: "hover:text-esalink-purple",
                                                    children: e.otherActualityFields.actualityLink ? (0, a.jsx)(j(), {
                                                        href: e.otherActualityFields.actualityLink,
                                                        children: e.title
                                                    }) : (0, a.jsx)(a.Fragment, {
                                                        children: e.title
                                                    })
                                                }, t))
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                })
            }

            function eo(e) {
                let {
                    faqs: t
                } = e, [s, i] = (0, y.useState)(0), n = e => {
                    i(s === e ? s : e)
                }, [l, r] = (0, y.useState)(0), o = e => {
                    l !== e && (r(e), i(0))
                }, c = t[l].items.length, d = Math.ceil(c / 2), x = t[l].items.slice(0, d), u = t[l].items.slice(d, c);
                return (0, a.jsx)("section", {
                    className: "py-20 overflow-hidden bg-white",
                    children: (0, a.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, a.jsxs)("h2", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "500",
                            className: "font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900 mb-16",
                            children: ["Une question ? Consultez notre ", (0, a.jsx)("label", {
                                style: {
                                    color: "#eb9018"
                                },
                                children: "FAQ"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "mx-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex flex-wrap justify-center -m-6 mx-auto max-w-3xl mb-12",
                                children: t.map((e, t) => {
                                    let {
                                        title: s
                                    } = e;
                                    return (0, a.jsx)("div", {
                                        "data-aos": "fade-left",
                                        "data-aos-duration": "500",
                                        className: "w-auto p-6",
                                        children: (0, a.jsxs)("button", {
                                            className: "font-heading font-semibold text-lg text-gray-900 hover:text-gray-800",
                                            onClick: () => o(t),
                                            children: [(0, a.jsx)("p", {
                                                className: "mb-2 px-7",
                                                children: s
                                            }), (0, a.jsx)("div", {
                                                className: "".concat(l !== t ? "bg-gray-200" : "bg-gradient-cyan", " h-0.5")
                                            })]
                                        })
                                    }, t)
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "mx-auto p-0.5 flex flex-col xl:flex-row xl:gap-10",
                            children: [(0, a.jsx)("div", {
                                className: "w-full xl:w-1/2",
                                children: x.map((e, t) => (0, a.jsx)("div", {
                                    className: "w-full",
                                    children: (0, a.jsx)("div", {
                                        onClick: () => n(t),
                                        children: (0, a.jsx)("div", {
                                            className: "pb-0.5 bg-gradient-cyan",
                                            children: (0, a.jsx)("div", {
                                                className: "py-3.5 px-5 bg-white",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex flex-wrap justify-between -m-2",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex-1 p-2",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "".concat(s !== t ? "" : "mb-5", " font-heading font-semibold text-lg text-gray-900 cursor-pointer"),
                                                            children: e.title
                                                        }), (0, a.jsx)("div", {
                                                            className: "".concat(s !== t ? "hidden" : ""),
                                                            children: (0, a.jsx)("p", {
                                                                className: "text-base text-black",
                                                                children: e.content
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "w-auto p-2",
                                                        children: (0, a.jsx)("svg", {
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 18 18",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "".concat(s !== t ? "rotate-90" : "rotate-[135deg]", " transition duration-300"),
                                                            children: (0, a.jsx)("path", {
                                                                d: "M3.75 7.5L9 2.25M9 2.25L14.25 7.5M9 2.25V15.75",
                                                                stroke: "#111827",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                }, t))
                            }), (0, a.jsx)("div", {
                                className: "w-full xl:w-1/2",
                                children: u.map((e, t) => (0, a.jsx)("div", {
                                    className: "w-full",
                                    children: (0, a.jsx)("div", {
                                        onClick: () => n(t + d),
                                        children: (0, a.jsx)("div", {
                                            className: "pb-0.5 bg-gradient-cyan",
                                            children: (0, a.jsx)("div", {
                                                className: "py-3.5 px-5 bg-white",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex flex-wrap justify-between -m-2",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex-1 p-2",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "".concat(s !== t + d ? "" : "mb-5", " font-heading font-semibold text-lg text-gray-900 cursor-pointer"),
                                                            children: e.title
                                                        }), (0, a.jsx)("div", {
                                                            className: "".concat(s !== t + d ? "hidden" : ""),
                                                            children: (0, a.jsx)("p", {
                                                                className: "text-base text-black",
                                                                children: e.content
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "w-auto p-2",
                                                        children: (0, a.jsx)("svg", {
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 18 18",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "".concat(s !== t + d ? "rotate-90" : "rotate-[135deg]", " transition duration-300"),
                                                            children: (0, a.jsx)("path", {
                                                                d: "M3.75 7.5L9 2.25M9 2.25L14.25 7.5M9 2.25V15.75",
                                                                stroke: "#111827",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                }, t))
                            })]
                        })]
                    })
                })
            }
            let ec = [{
                title: "L'EDI",
                items: [{
                    id: "edi1",
                    title: "Quelle est la diff\xe9rence entre EDI et API ?",
                    content: "L’Echange de Donn\xe9es Informatis\xe9 (EDI) est un Middleware (intergiciel). Il permet \xe0 travers sa fonction de passerelle de faciliter la communication d’informations entre deux entreprises. L’Interface de Programmation Applicative (API) correspond en revanche, \xe0 un acc\xe8s sp\xe9cifique que l’on accorde aux services d’une application."
                }, {
                    id: "edi2",
                    title: "Quelle est la diff\xe9rence entre EDI et EAI ?",
                    content: "L’Echange de Donn\xe9es Informatis\xe9 (EDI) est un middleware : un moyen de \xab passerelle \xbb qui permet de faciliter la communication d’information entre deux entreprises. L’Int\xe9gration d’Applications d’Entreprise (EAI) est un Middleware interne \xe0 une entreprise, qui permet \xe0 ses diff\xe9rents logiciels de communiquer entre eux."
                }, {
                    id: "edi3",
                    title: "A quoi sert l’EDI ?",
                    content: "L’Echange de Donn\xe9es Informatis\xe9 (EDI) sert \xe0 optimiser les \xe9changes d’informations entre entreprises \xe0 travers des transferts de donn\xe9es \xe9lectroniques. Pour communiquer correctement et faciliter le traitement des donn\xe9es, il est primordial de parler le m\xeame langage que l’on retrouve aujourd’hui \xe0 travers des standards, protocoles et formats EDI bien d\xe9finis. L’EDI est un langage commun permettant de traiter les informations re\xe7ues de mani\xe8re compr\xe9hensible par son logiciel interne de gestion commerciale. L’EDI agit int\xe9gralement sur les flux entrants et sortants de votre entreprise. Pour plus d’informations \xe0 ce sujet, consultez l’onglet l’EDI."
                }, {
                    id: "edi4",
                    title: "Combien de temps faut-il pour d\xe9ployer un projet EDI ?",
                    content: "Le temps n\xe9cessaire \xe0 la r\xe9alisation d’un projet EDI d\xe9pend de l’ampleur et de la complexit\xe9 des configurations souhait\xe9es. Le nombre flux entrants et sortants, le nombre d’interlocuteur (partenaires) et l’\xe9tat actuel de vos syst\xe8mes d’Informations ainsi que d’autres param\xe8tres sont autant de facteurs \xe0 prendre en compte pour \xe9valuer la charge de travail. Un projet peut ainsi durer quelques semaines, comme plusieurs mois. Dans la plupart des cas, un audit sera n\xe9cessaire pour bien pr\xe9parer le terrain et conna\xeetre les rouages et dynamiques de votre soci\xe9t\xe9. Rendez-vous dans l’onglet Audit pour en savoir plus, ou contactez-nous pour y voir plus clair \xe0 ce sujet."
                }, {
                    id: "edi5",
                    title: "Comment Migrer sa Solution EDI ?",
                    content: "Avant toute migration, il est indispensable d’effectuer un Audit de votre solution EDI actuelle. Pour r\xe9ussir une migration, l’ensemble des flux entrants et sortants doivent \xeatre identifi\xe9s, leur volum\xe9trie, les soucis actuels de fonctionnement doivent \xeatre comprises. La cl\xe9 du succ\xe8s passe par la fluidit\xe9 des \xe9changes entre les services internes et soci\xe9t\xe9s externes, mais aussi en notre capacit\xe9 \xe0 cerner les param\xe8tres et le fonctionnement de votre entreprise et de votre configuration actuelle. Gr\xe2ce \xe0 leurs connaissances pointues sur le large panel des solutions EDI, nos experts EsaLink effectueront sans difficult\xe9s votre migration. Pour plus de renseignements, consultez l’onglet Migration."
                }]
            }, {
                title: "La d\xe9materialisation fiscale",
                items: [{
                    id: "fisc1",
                    title: "Comment D\xe9mat\xe9rialiser une Facture ?",
                    content: "La d\xe9mat\xe9rialisation d’une facture s’op\xe8re gr\xe2ce \xe0 la mise en place d’un outil qui automatise sa certification qui repose sur les normes, standards et formats inh\xe9rents aux exigences de conformit\xe9 \xe9tablie par la DGFiP. Deux cas de factures d\xe9mat\xe9rialis\xe9es sont possibles : Structur\xe9e (XML, EDI) et Non structur\xe9e (pdf, jpeg). La facture structur\xe9e est r\xe9dig\xe9e en suivant les recommandations GS1 (norme EN 16931), et permets d’y faire appara\xeetre toutes les informations obligatoires. Le cahier des charges GS1 permets de retrouver les m\xeames types d’informations dans une facture, quel que soit l’entreprise \xe9mettrice. La facture non structur\xe9e repose sur une signature \xe9lectronique de l’\xe9metteur. En signant la facture, il se rend responsable de son contenu, et s’engage sur les informations qui y sont d\xe9taill\xe9es. Ces deux m\xe9thodes de factures \xe9lectroniques font foi de pi\xe8ces originales et comptables. Il n’est ainsi plus n\xe9cessaire et bient\xf4t impossible d’envoyer une facture papier en B2B. Pour plus d’informations \xe0 ce sujet, consultez l’onglet La D\xe9mat\xe9rialisation."
                }, {
                    id: "fisc2",
                    title: "Est-ce au fournisseur ou au client de d\xe9mat\xe9rialiser ?",
                    content: "Deux cas de figures existent : 1. Le fournisseur \xe9met des factures d\xe9mat\xe9rialis\xe9es car il a mis en place un outil de d\xe9mat\xe9rialisation. Le client re\xe7ois donc automatiquement une facture conforme, et n’a pas besoin d’installer un outil de d\xe9mat\xe9rialisation puisque le travail de certification a d\xe9j\xe0 \xe9t\xe9 op\xe9r\xe9 c\xf4t\xe9 fournisseur. 2. Le fournisseur ne b\xe9n\xe9ficie pas d’outil de d\xe9mat\xe9rialisation. Il envoie alors des factures papier, ou PDF \xab classique \xbb (non certifi\xe9). Le client d\xe9mat\xe9rialise alors les factures re\xe7ues afin de les int\xe9grer plus facilement dans son outil de gestion commerciale. Dans ce cas, la pi\xe8ce comptable conforme se retrouve chez le client (puisque certifi\xe9e conforme de son c\xf4t\xe9). L’archivage des factures \xe9lectroniques, selon le droit comptable, est de 10 ans. Attention, \xe0 l’horizon 2024, toutes les factures \xe9mises en B2B devront obligatoirement \xeatre d\xe9mat\xe9rialis\xe9es. Pour plus d’informations \xe0 ce sujet, consultez l’onglet La D\xe9mat\xe9rialisation."
                }, {
                    id: "fisc3",
                    title: "Combien de temps faut-il pour int\xe9grer la d\xe9mat\xe9rialisation fiscale ?",
                    content: "Passer \xe0 la facture \xe9lectronique n\xe9cessite d’analyser les contraintes et obligations contractuelles de votre entreprise. Le temps d’int\xe9gration d’une solution de d\xe9mat\xe9rialisation varie dons d’une soci\xe9t\xe9 \xe0 une autre selon ses besoins EDI. Vous souhaitez en savoir plus \xe0 ce sujet ? Contactez-nous pour analyser ensemble vos besoins."
                }, {
                    id: "fisc4",
                    title: "Quelle est la diff\xe9rence entre une Facture \xc9lectronique et une Facture D\xe9mat\xe9rialis\xe9e ?",
                    content: "La facture \xe9lectronique doit respecter un certain nombre de conditions l\xe9gales afin d’\xeatre certifi\xe9e conforme et servir de pi\xe8ce comptable originale (Piste d’Audit Fiable). Que l’on utilise le terme facture \xab \xe9lectronique \xbb ou \xab d\xe9mat\xe9rialis\xe9e \xbb, les m\xeames obligations de conformit\xe9 s’appliquent. Il s’agit donc de la m\xeame chose qui r\xe9pond au concept de d\xe9mat\xe9rialisation fiscale."
                }]
            }];
            var ed = s(1163),
                ex = !0;

            function eu(e) {
                let {
                    posts: t,
                    events: s,
                    otherActualities: i
                } = e, l = "Expertise en int\xe9gration B2B / EDI / E-facturation | ESALINK", r = "Prestataire de Solutions et Services sur-mesure pour vos projets d'int\xe9gration de flux B2B : EDI / EAI / Facturation \xc9lectronique et E-reporting conformes.", {
                    asPath: o
                } = (0, ed.useRouter)(), c = {
                    loop: !0
                }, d = Array.from([, ].keys());
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(n(), {
                        children: [(0, a.jsx)("title", {
                            children: l
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: r
                        }), (0, a.jsx)("meta", {
                            name: "author",
                            content: "EsaLink"
                        }), (0, a.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, a.jsx)("meta", {
                            property: "og:site_name",
                            content: l
                        }), (0, a.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.esalink.com".concat(o)
                        }), (0, a.jsx)("meta", {
                            name: "image",
                            property: "og:image",
                            content: "https://www.esalink.com/images/esalink_linkedin.jpg"
                        }), (0, a.jsx)("meta", {
                            name: "twitter:description",
                            content: r
                        }), (0, a.jsx)("meta", {
                            name: "twitter:title",
                            content: l
                        }), (0, a.jsx)("meta", {
                            name: "twitter:image",
                            content: ""
                        }), (0, a.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, a.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.esalink.com".concat(o)
                        }, "canonical")]
                    }), (0, a.jsx)(w, {}), (0, a.jsxs)("main", {
                        id: "beginMain",
                        children: [(0, a.jsx)(k, {}), (0, a.jsx)(I.Z, {
                            slides: d,
                            options: c
                        }), (0, a.jsx)(Q, {}), (0, a.jsx)(X, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(E.Z, {
                            options: c
                        }), (0, a.jsx)(z, {}), (0, a.jsx)(et.Z, {}), (0, a.jsx)(er, {
                            posts: t,
                            events: s,
                            otherActualities: i
                        }), (0, a.jsx)(eo, {
                            faqs: ec
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [802, 850, 990, 377, 488, 710, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);