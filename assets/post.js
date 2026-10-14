// Renders ./post.md into #post. Shared by every page under blog/ and projects/.
//
// Figure syntax (see WRITING.md):
//   ![Caption](figures/a.png)            image or video on its own line -> full-width figure
//
//   ```row 1:2
//   ![Left caption](figures/a.png)
//   ![Right caption](figures/b.mp4)
//   caption: Optional caption for the whole row.
//   ```                                  side-by-side figures, widths in the given ratio

(function () {
  var VIDEO = /\.(mp4|webm|mov)$/i;

  function media(src, alt) {
    if (VIDEO.test(src)) {
      return '<video src="' + src + '" autoplay loop muted playsinline></video>';
    }
    return '<img src="' + src + '" alt="' + alt.replace(/"/g, '&quot;') + '" loading="lazy">';
  }

  function figure(src, caption, style) {
    return '<figure' + (style ? ' style="' + style + '"' : '') + '>' + media(src, caption) +
      (caption ? '<figcaption>' + marked.parseInline(caption) + '</figcaption>' : '') + '</figure>';
  }

  function row(text, lang) {
    var ratios = (lang.split(/\s+/)[1] || '').split(':').map(Number).filter(function (n) { return n > 0; });
    var items = [], caption = '';
    text.split('\n').forEach(function (line) {
      var m = line.match(/^\s*!\[(.*?)\]\((.*?)\)\s*$/);
      if (m) items.push({ caption: m[1], src: m[2] });
      else if (/^\s*caption:/i.test(line)) caption = line.replace(/^\s*caption:\s*/i, '');
    });
    var cells = items.map(function (it, i) {
      return figure(it.src, it.caption, 'flex:' + (ratios[i] || 1) + ' 1 0');
    }).join('');
    return '<div class="fig-row-wrap"><div class="fig-row">' + cells + '</div>' +
      (caption ? '<p class="fig-row-caption">' + marked.parseInline(caption) + '</p>' : '') + '</div>';
  }

  marked.use({
    renderer: {
      paragraph: function (token) {
        var t = token.tokens.filter(function (x) { return !(x.type === 'text' && !x.text.trim()); });
        if (t.length === 1 && t[0].type === 'image') return figure(t[0].href, t[0].text) + '\n';
        return false;
      },
      code: function (token) {
        if (token.lang && /^row\b/.test(token.lang)) return row(token.text, token.lang);
        return false;
      }
    }
  });

  // Pull math out before Markdown runs so underscores and asterisks inside it survive.
  function protectMath(src) {
    var math = [];
    var keep = function (tex, display) { math.push({ tex: tex, display: display }); return 'MATHPLACEHOLDER' + (math.length - 1) + 'X'; };
    src = src.replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) { return keep(tex, true); });
    src = src.replace(/(^|[^\\$])\$(?!\s)([^$\n]+?)(?<!\s)\$/g, function (_, pre, tex) { return pre + keep(tex, false); });
    return { src: src, math: math };
  }

  function restoreMath(html, math) {
    return html.replace(/MATHPLACEHOLDER(\d+)X/g, function (_, i) {
      var m = math[+i];
      try { return katex.renderToString(m.tex, { displayMode: m.display, throwOnError: false }); }
      catch (e) { return m.tex; }
    });
  }

  var el = document.getElementById('post');
  fetch('post.md', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (md) {
      var p = protectMath(md);
      el.innerHTML = restoreMath(marked.parse(p.src), p.math);
      var h1 = el.querySelector('h1');
      if (h1) document.title = h1.textContent + ' | Brian Chao';
    })
    .catch(function () {
      el.innerHTML = '<p>Could not load <code>post.md</code>. When previewing locally, run ' +
        '<code>python3 -m http.server</code> in the website folder and open <code>http://localhost:8000</code>.</p>';
    });
})();
