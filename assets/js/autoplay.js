$(document).ready(function() {
    let options = {
        root: null,    // browser viewport
        rootMargin: '0px',
        threshold: 0.66 // target element visible 66%
    }

    let observer = new IntersectionObserver(playOnFocus, options);
    let targets = document.querySelectorAll('.video-autoplay');
    targets.forEach(target => {    // adding observer for all videos
        observer.observe(target);
    });
});

const playOnFocus = (entries, observer) => {    // callback
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.play();    // play target video
        } else {
            entry.target.pause();    // pause video
        }
    });
};