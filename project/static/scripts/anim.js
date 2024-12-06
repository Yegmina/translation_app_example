import {getElement, getValueById} from './basic.js';

console.log("anim connected successfully")
const video = getElement("id", "backgroundVideo");
console.log(video.src);

video.addEventListener('error', () => {
    console.error('Video failed to load');
});

video.addEventListener('loadeddata', () => {
    console.log('Video loaded successfully', video.readyState);
});

video.addEventListener('play', () => {
    console.log('Video is playing');
});

video.addEventListener('canplay', () => {
    console.log('Video can play');
});
