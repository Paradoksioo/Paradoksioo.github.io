document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const endValue = parseInt(statElement.getAttribute('data-count'));

                gsap.fromTo(statElement, 
                    { innerText: 0 }, 
                    { 
                        innerText: endValue, 
                        duration: 3, 
                        ease: 'power1.out',
                        snap: { innerText: 1 }, 
                        onUpdate: function() {
                            statElement.innerText = Math.ceil(statElement.innerText).toLocaleString();
                        }
                    }
                );

                observer.unobserve(statElement);
            }
        });
    }, { threshold: 1.0 });

    const statElements = document.querySelectorAll('#statCount, #statTon, #statMetr');
    statElements.forEach(element => observer.observe(element));
});