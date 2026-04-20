(function () {
  var components = {
    "site-header": function () {
      return (
        '<header class="c-site-header">' +
        '  <div class="o-container c-site-header__inner">' +
        '    <a class="c-brand" href="index.html" aria-label="Celectric home">' +
        '      <span class="c-brand__mark">CE</span>' +
        '      <span class="c-brand__text">Celectric Catalog</span>' +
        '    </a>' +
        '    <button class="c-menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-menu-toggle>' +
        '      <span></span><span></span><span></span>' +
        '      <span class="sr-only">Open menu</span>' +
        '    </button>' +
        '    <nav class="c-main-nav" aria-label="Primary">' +
        '      <a data-nav="home" href="index.html">Home</a>' +
        '      <a data-nav="products" href="products.html">Products</a>' +
        '      <a data-nav="brands" href="brands.html">Brands</a>' +
        '      <a data-nav="solutions" href="index.html#solutions">Solutions</a>' +
        '      <a data-nav="blog" href="blog.html">Blog</a>' +
        '      <a data-nav="resources" href="search.html">Resources</a>' +
        '    </nav>' +
        '    <a class="c-btn c-btn--sm c-btn--solid c-header-cta" href="index.html#rfq">Request Quote</a>' +
        '  </div>' +
        '  <button class="c-mobile-nav__overlay" type="button" aria-label="Close menu" data-menu-close hidden></button>' +
        '  <div class="c-mobile-nav" id="mobile-nav" hidden>' +
        '    <div class="o-container c-mobile-nav__inner">' +
        '      <div class="c-mobile-nav__head">' +
        '        <span class="c-mobile-nav__title">Menu</span>' +
        '        <button class="c-mobile-nav__close" type="button" aria-label="Close menu" data-menu-close>×</button>' +
        '      </div>' +
        '      <a data-nav="home" href="index.html">Home</a>' +
        '      <a data-nav="products" href="products.html">Products</a>' +
        '      <a data-nav="brands" href="brands.html">Brands</a>' +
        '      <a data-nav="solutions" href="index.html#solutions">Solutions</a>' +
        '      <a data-nav="blog" href="blog.html">Blog</a>' +
        '      <a data-nav="resources" href="search.html">Resources</a>' +
        '      <a class="c-btn c-btn--solid" href="index.html#rfq">Request Quote</a>' +
        '    </div>' +
        '  </div>' +
        '</header>'
      );
    },
    "site-footer": function () {
      var year = new Date().getFullYear();
      return (
        '<footer class="c-site-footer">' +
        '  <div class="o-container c-site-footer__inner">' +
        '    <div>' +
        '      <p class="c-site-footer__title">Celectric Industrial Catalog Mockup</p>' +
        '      <p class="c-site-footer__meta">RFQ-first catalog concept inspired by documented sitemap and SEO rules.</p>' +
        '    </div>' +
        '    <div class="c-site-footer__links">' +
        '      <a href="index.html">Home</a>' +
        '      <a href="brands.html">Brand Index</a>' +
        '      <a href="products.html">Products</a>' +
        '      <a href="blog.html">Blog</a>' +
        '      <a href="product-cea-410.html">Product Detail</a>' +
        '      <a href="mailto:sales@celectric.example">sales@celectric.example</a>' +
        '    </div>' +
        '    <p class="c-site-footer__copy">&copy; ' + year + ' Celectric. Internal preview only.</p>' +
        '  </div>' +
        '</footer>'
      );
    },
    "cta-strip": function (el) {
      var title = el.getAttribute("data-title") || "Need a formal quotation?";
      var copy =
        el.getAttribute("data-copy") ||
        "Send project specs and quantity requirements. Celectric engineering will respond with a matched model recommendation.";
      var cta = el.getAttribute("data-cta") || "Start RFQ";
      var href = el.getAttribute("data-href") || "index.html#rfq";

      return (
        '<section class="c-cta-strip">' +
        '  <div class="o-container c-cta-strip__inner">' +
        '    <div>' +
        '      <p class="c-overline">RFQ Flow</p>' +
        '      <h2>' + title + '</h2>' +
        '      <p>' + copy + '</p>' +
        '    </div>' +
        '    <a class="c-btn c-btn--solid" href="' + href + '">' + cta + '</a>' +
        '  </div>' +
        '</section>'
      );
    }
  };

  function mountComponents() {
    var placeholders = document.querySelectorAll("[data-component]");

    placeholders.forEach(function (el) {
      var key = el.getAttribute("data-component");
      var renderer = components[key];

      if (!renderer) {
        return;
      }

      el.outerHTML = renderer(el);
    });
  }

  window.CelectricComponents = {
    mount: mountComponents
  };
})();
