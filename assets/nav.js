// 行動版導覽切換
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('open');
  }
});
