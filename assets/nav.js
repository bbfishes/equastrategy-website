// 行動版導覽切換
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('open');
  }
});

// 尊重減少動態偏好
var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 捲動浮現
(function () {
  var els = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// 數字滾動計數
(function () {
  var nums = document.querySelectorAll('[data-to]');
  function run(el) {
    var to = parseInt(el.getAttribute('data-to'), 10);
    if (reduceMotion) { el.textContent = to; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.6 });
  nums.forEach(function (el) { io.observe(el); });
})();
