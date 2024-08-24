let counter = 1;
const numOfSlides = 5; // Number of slides
const interval = 5000; // Interval in milliseconds (5 seconds)

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > numOfSlides){
        counter = 1;
    }
}, interval);
