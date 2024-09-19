const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from(".nav-bar", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from(".herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    });
}
var timeout;
function circlChaptaKaro() {
    // Define default values
    var xScale = 1;
    var yScale = 1;

    var xPre = 0;
    var yPre = 0;

    window.addEventListener("mousemove", function(dets) {
        clearTimeout(timeout);
        
        xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xPre);  // Adjust scale factor as needed
        yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yPre);

        xPre = dets.clientX;
        yPre = dets.clientY;

        // Move the circle with the new scales
        circleMove(xScale, yScale);
        timeout=setTimeout(function(){
            document.querySelector(".minicircle").style.transform = 
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

        },100);
    });
}
circlChaptaKaro();

function circleMove(xScale, yScale) {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector(".minicircle").style.transform = 
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
    });
}

// firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function(dets) { // Added a comma after "mousemove"
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
           
        });
    });
});












