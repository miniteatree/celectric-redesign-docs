(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function normalizeText(value) {
    return value.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function markActiveNavigation() {
    var page = document.body.getAttribute("data-page");
    var navKey = "home";

    if (page === "product") {
      navKey = "products";
    } else if (page === "brand" || page === "brands") {
      navKey = "brands";
    } else if (page === "blog") {
      navKey = "blog";
    }

    document.querySelectorAll(".c-main-nav a[data-nav]").forEach(function (link) {
      if (link.getAttribute("data-nav") === navKey) {
        link.classList.add("is-active");
      }
    });
  }

  function initMobileMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var mobileNav = document.querySelector('.c-mobile-nav');
    var closeButtons = document.querySelectorAll('[data-menu-close]');

    if (!toggle || !mobileNav) {
      return;
    }

    function setMenuState(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileNav.hidden = !open;
      document.body.classList.toggle('has-mobile-menu', open);
    }

    setMenuState(false);

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen);
    });

    closeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });

    mobileNav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenuState(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 980) {
        setMenuState(false);
      }
    });
  }

  function initRevealAnimation() {
    var elements = document.querySelectorAll("[data-reveal]");

    if (!elements.length || !("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initAutocomplete() {
    var root = document.querySelector("[data-autocomplete]");
    if (!root || !window.CELECTRIC_CATALOG) {
      return;
    }

    var input = root.querySelector("input");
    var submitButton = root.querySelector('button[type="button"]');
    var list = root.querySelector("[data-suggestion-list]");
    var emptyState = root.querySelector("[data-empty-state]");
    var suggestions = window.CELECTRIC_CATALOG.searchSuggestions || [];
    var activeIndex = -1;
    var currentResults = [];

    function closeList() {
      root.classList.remove("is-open");
      list.innerHTML = "";
      emptyState.hidden = true;
      activeIndex = -1;
      currentResults = [];
    }

    function openList() {
      root.classList.add("is-open");
    }

    function scoreItem(item, query) {
      var label = normalizeText(item.label);
      var subtitle = normalizeText(item.subtitle || "");
      var terms = (item.terms || []).map(normalizeText);
      var best = 0;

      if (label === query) {
        best = 6;
      } else if (label.indexOf(query) === 0) {
        best = 5;
      } else if (label.indexOf(query) > -1) {
        best = 4;
      }

      terms.forEach(function (term) {
        if (term === query) {
          best = Math.max(best, 6);
        } else if (term.indexOf(query) === 0) {
          best = Math.max(best, 5);
        } else if (term.indexOf(query) > -1) {
          best = Math.max(best, 4);
        }
      });

      if (!best && subtitle.indexOf(query) > -1) {
        best = 3;
      }

      if (item.type === "Variant" && query.indexOf("nm") > -1) {
        best += 1;
      }

      return best;
    }

    function renderResults(results) {
      list.innerHTML = "";

      if (!results.length) {
        emptyState.hidden = false;
        openList();
        return;
      }

      emptyState.hidden = true;

      results.forEach(function (item, index) {
        var li = document.createElement("li");
        li.className = "c-search-suggestion";

        var button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-url", item.url);
        button.setAttribute("data-index", String(index));
        button.setAttribute("aria-selected", "false");
        button.innerHTML =
          '<span class="c-search-suggestion__main">' +
          escapeHtml(item.label) +
          '</span>' +
          '<span class="c-search-suggestion__meta">' +
          escapeHtml(item.type) +
          " | " +
          escapeHtml(item.subtitle) +
          "</span>";

        li.appendChild(button);
        list.appendChild(li);
      });

      openList();
    }

    function updateActiveResult() {
      var buttons = list.querySelectorAll("button[data-index]");

      buttons.forEach(function (button, index) {
        var isActive = index === activeIndex;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }

    function goToResult(index) {
      var selected = currentResults[index];
      if (!selected) {
        return;
      }
      window.location.href = selected.url;
    }

    function updateResults(queryText) {
      var query = normalizeText(queryText);

      if (query.length < 2) {
        closeList();
        return;
      }

      currentResults = suggestions
        .map(function (item) {
          return {
            item: item,
            score: scoreItem(item, query)
          };
        })
        .filter(function (entry) {
          return entry.score > 0;
        })
        .sort(function (a, b) {
          return b.score - a.score;
        })
        .slice(0, 7)
        .map(function (entry) {
          return entry.item;
        });

      activeIndex = -1;
      renderResults(currentResults);
    }

    input.addEventListener("input", function (event) {
      updateResults(event.target.value);
    });

    input.addEventListener("focus", function () {
      updateResults(input.value);
    });

    input.addEventListener("keydown", function (event) {
      if (!currentResults.length) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = (activeIndex + 1) % currentResults.length;
        updateActiveResult();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = activeIndex <= 0 ? currentResults.length - 1 : activeIndex - 1;
        updateActiveResult();
      } else if (event.key === "Enter") {
        event.preventDefault();
        goToResult(activeIndex >= 0 ? activeIndex : 0);
      } else if (event.key === "Escape") {
        closeList();
      }
    });

    if (submitButton) {
      submitButton.addEventListener("click", function () {
        updateResults(input.value);
        if (currentResults.length) {
          goToResult(0);
        }
      });
    }

    list.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-index]");
      if (!button) {
        return;
      }

      var index = Number(button.getAttribute("data-index"));
      goToResult(index);
    });

    document.addEventListener("click", function (event) {
      if (root.contains(event.target)) {
        return;
      }
      closeList();
    });
  }

  function renderDocItem(item, scope, checked) {
    var id = 'doc-' + scope + '-' + item.id;
    return (
      '<li class="c-docs__item c-docs__item--selectable">' +
      '  <label class="c-docs__check" for="' + escapeHtml(id) + '">' +
      '    <input type="checkbox" id="' + escapeHtml(id) + '" data-doc-checkbox data-doc-scope="' + escapeHtml(scope) + '" data-doc-id="' + escapeHtml(item.id) + '" ' + (checked ? 'checked' : '') + ' />' +
      '    <span></span>' +
      '  </label>' +
      '  <div>' +
      '    <p class="c-docs__title">' + escapeHtml(item.title) + '</p>' +
      '    <p class="c-docs__meta">' + escapeHtml(scope === 'base' ? 'Product file' : 'Variant file') + ' | ' + escapeHtml(item.type) + ' | ' + escapeHtml(item.size) + '</p>' +
      '  </div>' +
      '  <a href="#" aria-label="Preview ' + escapeHtml(item.title) + '">Preview</a>' +
      '</li>'
    );
  }

  function initVariantSelector() {
    var root = document.querySelector("[data-variant-root]");
    if (!root || !window.CELECTRIC_CATALOG || !window.CELECTRIC_CATALOG.product) {
      return;
    }

    var product = window.CELECTRIC_CATALOG.product;
    var variantButtons = root.querySelectorAll("[data-variant]");
    var modelCode = root.querySelector("[data-model-code]");
    var variantNote = root.querySelector("[data-variant-note]");
    var variantSpecs = root.querySelector("[data-variant-specs]");
    var baseDocsList = root.querySelector("[data-base-docs]");
    var variantDocsList = root.querySelector("[data-variant-docs]");
    var rfqVariant = root.querySelector("[data-rfq-variant]");
    var docSelectionSummary = root.querySelector("[data-doc-selection-summary]");
    var docEmailStatus = root.querySelector("[data-doc-email-status]");
    var docEmailForm = root.querySelector("[data-doc-email]");

    function fillBaseDocuments() {
      if (!baseDocsList) {
        return;
      }

      baseDocsList.innerHTML = product.baseDocuments.map(function (item) {
        return renderDocItem(item, 'base', false);
      }).join("");
    }

    function renderVariantSpecs(specs) {
      if (!variantSpecs) {
        return;
      }

      variantSpecs.innerHTML = Object.keys(specs)
        .map(function (key) {
          return '<div><dt>' + escapeHtml(key) + '</dt><dd>' + escapeHtml(specs[key]) + '</dd></div>';
        })
        .join("");
    }

    function renderVariantDocuments(documents) {
      if (!variantDocsList) {
        return;
      }
      variantDocsList.innerHTML = documents.map(function (item) {
        return renderDocItem(item, 'variant', false);
      }).join("");
    }

    function getSelectedVariantKey() {
      return rfqVariant ? rfqVariant.value : "20nm";
    }

    function getCurrentVariantDocuments() {
      var variantKey = getSelectedVariantKey();
      var variant = product.variants[variantKey];
      return variant ? variant.documents : [];
    }

    function getCurrentSelectionData() {
      return {
        base: product.baseDocuments.map(function (item, index) {
          return Object.assign({ id: item.id || 'base-' + index }, item);
        }),
        variant: getCurrentVariantDocuments().map(function (item, index) {
          return Object.assign({ id: item.id || 'variant-' + index }, item);
        })
      };
    }

    function getSelectedDocuments() {
      var selectionData = getCurrentSelectionData();
      var lookup = {};

      selectionData.base.forEach(function (item) {
        lookup['base:' + item.id] = item;
      });

      selectionData.variant.forEach(function (item) {
        lookup['variant:' + item.id] = item;
      });

      return Array.prototype.slice.call(root.querySelectorAll('[data-doc-checkbox]:checked')).map(function (checkbox) {
        return lookup[checkbox.getAttribute('data-doc-scope') + ':' + checkbox.getAttribute('data-doc-id')];
      }).filter(Boolean);
    }

    function updateDocumentSelectionSummary() {
      if (!docSelectionSummary) {
        return;
      }

      var selected = getSelectedDocuments();
      if (!selected.length) {
        docSelectionSummary.textContent = '0 files selected.';
        return;
      }

      var fileNames = selected.map(function (item) {
        return item.title;
      });
      docSelectionSummary.textContent = selected.length + ' file(s) selected: ' + fileNames.join(', ');
    }

    function setAllDocumentCheckboxes(checked) {
      root.querySelectorAll('[data-doc-checkbox]').forEach(function (checkbox) {
        checkbox.checked = checked;
      });
      updateDocumentSelectionSummary();
    }

    function setVariant(variantKey, syncUrl) {
      var variant = product.variants[variantKey];
      if (!variant) {
        return;
      }

      if (modelCode) {
        modelCode.textContent = variant.code;
      }

      if (variantNote) {
        variantNote.textContent = variant.subtitle;
      }

      if (rfqVariant) {
        rfqVariant.value = variantKey;
      }

      renderVariantSpecs(variant.specs);
      renderVariantDocuments(variant.documents);
      updateDocumentSelectionSummary();

      variantButtons.forEach(function (button) {
        var isActive = button.getAttribute("data-variant") === variantKey;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      if (syncUrl) {
        var nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set("variant", variantKey);
        history.replaceState({}, "", nextUrl.toString());
      }
    }

    fillBaseDocuments();

    var params = new URLSearchParams(window.location.search);
    var requestedVariant = params.get("variant");
    var defaultVariant = product.variants[requestedVariant] ? requestedVariant : "20nm";

    setVariant(defaultVariant, false);

    variantButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        setVariant(button.getAttribute("data-variant"), true);
      });
    });

    root.addEventListener('change', function (event) {
      if (!event.target.matches('[data-doc-checkbox]')) {
        return;
      }
      updateDocumentSelectionSummary();
    });

    root.addEventListener('click', function (event) {
      var selectAction = event.target.closest('[data-doc-select]');
      if (!selectAction) {
        return;
      }

      var mode = selectAction.getAttribute('data-doc-select');
      if (mode === 'all') {
        setAllDocumentCheckboxes(true);
      } else if (mode === 'clear') {
        setAllDocumentCheckboxes(false);
      }
    });

    if (docEmailForm) {
      docEmailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var selected = getSelectedDocuments();
        if (!docEmailStatus) {
          return;
        }

        if (!selected.length) {
          docEmailStatus.hidden = false;
          docEmailStatus.textContent = 'Please select at least one document before sending.';
          docEmailStatus.classList.add('is-error');
          return;
        }

        var emailField = root.querySelector('#doc-client-email');
        var clientEmail = emailField ? emailField.value.trim() : 'client@company.com';
        var variantLabel = getSelectedVariantKey();
        docEmailStatus.hidden = false;
        docEmailStatus.classList.remove('is-error');
        docEmailStatus.textContent =
          'Mockup only: would email ' + selected.length + ' selected file(s) for ' + product.model + ' (' + variantLabel + ') to ' + clientEmail + '.';
      });
    }
  }

  onReady(function () {
    if (window.CelectricComponents && typeof window.CelectricComponents.mount === "function") {
      window.CelectricComponents.mount();
    }

    markActiveNavigation();
    initMobileMenu();
    initRevealAnimation();
    initAutocomplete();
    initVariantSelector();
  });
})();
