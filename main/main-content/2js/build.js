self.__BUILD_MANIFEST = function(s, e, c, t, a, i, o, n) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/wp/:path*"
            }, {
                source: "/app/:path*"
            }],
            fallback: []
        },
        "/": [c, e, t, a, s, i, "static/chunks/pages/index-220c9c2af51996d6.js"],
        "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
        "/blog": [s, o, "static/chunks/pages/blog-6fb350644ef0596a.js"],
        "/blog/category/[slug]": [s, o, "static/chunks/pages/blog/category/[slug]-72d8ab81a6d47621.js"],
        "/blog/[slug]": [e, "static/chunks/817-21a0e743f32375f4.js", s, "static/chunks/pages/blog/[slug]-31a6386b3d214ab8.js"],
        "/contact": [s, "static/chunks/pages/contact-5b612b86574a5c69.js"],
        "/expertise/edi": [n, s, "static/chunks/pages/expertise/edi-a986c744353bd6de.js"],
        "/expertise/facturation-electronique": [c, t, n, "static/chunks/454-a7b38bacb24b1ec2.js", s, "static/chunks/pages/expertise/facturation-electronique-61071966da3886ae.js"],
        "/legal-notices": [s, "static/chunks/pages/legal-notices-0c6571bff3599162.js"],
        "/nos-services": [c, e, t, a, s, i, "static/chunks/pages/nos-services-82fc28e901478ef7.js"],
        "/nos-services/regie": [e, s, "static/chunks/pages/nos-services/regie-e56683b1f1022cba.js"],
        "/nos-services/tma": [e, s, "static/chunks/pages/nos-services/tma-98b981fed8d3a8f2.js"],
        "/privacy-policy": [s, "static/chunks/pages/privacy-policy-f7834b98d0891919.js"],
        "/solutions": [e, s, "static/chunks/pages/solutions-15840f4a76a15873.js"],
        "/solutions/cleo": [e, s, "static/chunks/pages/solutions/cleo-ad291edbc14e1ab6.js"],
        "/solutions/hubtimize": [e, s, "static/chunks/pages/solutions/hubtimize-55880be4068f00ed.js"],
        "/solutions/ibm-sterling": [s, "static/chunks/pages/solutions/ibm-sterling-afca9769065b29d1.js"],
        "/solutions/tradexpress": [s, "static/chunks/pages/solutions/tradexpress-9cd3759d4b00c1cd.js"],
        sortedPages: ["/", "/_app", "/_error", "/blog", "/blog/category/[slug]", "/blog/[slug]", "/contact", "/expertise/edi", "/expertise/facturation-electronique", "/legal-notices", "/nos-services", "/nos-services/regie", "/nos-services/tma", "/privacy-policy", "/solutions", "/solutions/cleo", "/solutions/hubtimize", "/solutions/ibm-sterling", "/solutions/tradexpress"]
    }
}("static/chunks/488-16586e040a43df13.js", "static/chunks/850-bfbca2ab43c80bfe.js", "static/chunks/94726e6d-808de5cfe86fd960.js", "static/chunks/990-96fa4510a07bd2f7.js", "static/chunks/377-bcaf9aa4ce0cd98c.js", "static/chunks/710-83b502000423d143.js", "static/chunks/852-fea10e029ef27a71.js", "static/chunks/670-a9e6ea4a8cebba3d.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();