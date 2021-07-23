(function () {
  // 创建触摸监听，当浏览器打开页面时，点击触发事件，进行音频播放
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$audio = document.getElementById('audio');
  document.addEventListener('click', function () {
    const audioAutoPlay = () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$audio.play();
    };
    audioAutoPlay();
    setTimeout(() => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$audio.pause();
    }, 2000);
  });
  // 创建触摸监听，当浏览器打开页面时，触摸触发事件，进行音频播放
  document.addEventListener('touchstart', function () {
    const audioAutoPlay = () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$audio.play();
    };
    audioAutoPlay();
    setTimeout(() => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$audio.pause();
    }, 2000);
  });
})();

//# sourceMappingURL=index.c408b831.js.map
