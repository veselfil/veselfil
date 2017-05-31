document.addEventListener("DOMContentLoaded", function() {

    particlesJS.load('hero', 'assets/particlesjs-config.json', function () {
        console.log("Particles.js Config Loaded")
    });

    $('#a-mouse').on("click", function(e){
        e.preventDefault();
        $('body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500)
    })

}, false);



