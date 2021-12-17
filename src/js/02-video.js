import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const currentTime = localStorage.getItem("videoplayer-current-time")
    const videoTimeCheck= e => {
    console.log(e.seconds)
    localStorage.setItem("videoplayer-current-time",e.seconds)
}

    player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

    player.on('play', function() {
        console.log('played the video!');

    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



player.on("timeupdate", throttle(videoTimeCheck, 1000))

