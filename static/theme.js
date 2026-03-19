(function () {
  var root = document.documentElement;

  // Restore saved theme before paint (also done inline in <head>, this handles the button)
  var saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  function effectiveTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateButton(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '\u2600' : '\u263e';
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    btn.setAttribute('aria-label', btn.title);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButton(effectiveTheme());

    document.querySelectorAll('.circle').forEach(function (circle) {
      circle.addEventListener('click', function () {
        var lightness = this.dataset.lightness;
        var chroma = this.dataset.chroma;
        var randomHue = Math.floor(Math.random() * 361);
        this.style.backgroundColor = 'oklch(' + lightness + ' ' + chroma + ' ' + randomHue + ')';
      });
    });

    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateButton(next);
      });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!localStorage.getItem('theme')) {
        updateButton(effectiveTheme());
      }
    });
  });
})();
