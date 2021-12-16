import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const videoTimeCheck= e => {
    console.log(e.seconds)
    localStorage.setItem("videoplayer-current-time",e.seconds)
}

player.on("timeupdate", throttle(videoTimeCheck, 1000))



const currentTime = localStorage.getItem("videoplayer-current-time")
onUpdatePage(currentTime)

function onUpdatePage(time) {
  player.setCurrentTime(time)  
}