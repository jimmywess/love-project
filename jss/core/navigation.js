    (function () {
  function redirect(page) {
    if (!page) return;
    window.location.href = page;
  }

  window.navigateTo = function (page, delay = 0) {
    if (delay > 0) {
      setTimeout(() => redirect(page), delay);
    } else {
      redirect(page);
    }
  };
})();
