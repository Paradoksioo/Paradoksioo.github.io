$(document).ready(function() { 
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });
    });

    gsap.utils.toArray('.about__info').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none",
            }
        });
    });
});