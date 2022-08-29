import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    const currentTime = data
        localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
};

    player.on('timeupdate', throttle(onPlay, 1000));

    const setCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))

    player.setCurrentTime(setCurrentTime.seconds).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

