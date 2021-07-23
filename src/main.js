//创建触摸监听，当浏览器打开页面时，点击触发事件，进行音频播放
const audio = document.getElementById('audio');
document.addEventListener('click', function () {
    const audioAutoPlay=()=>{
        audio.play();
    }
    audioAutoPlay();
    setTimeout(()=>{
        audio.pause()
    },2000)
});
//创建触摸监听，当浏览器打开页面时，触摸触发事件，进行音频播放
document.addEventListener('touchstart', function () {
    const audioAutoPlay=()=>{
        audio.play();
    }
    audioAutoPlay();
    setTimeout(()=>{
        audio.pause()
    },2000)
});

