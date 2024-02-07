const timeline = gsap.timeline({defaults: {ease: 'power1.out'}});

timeline.fromTo('#static', {opacity: 1}, {opacity: 0, duration: 2});
timeline.to('.menu-text', {x: '0%', duration: .75, stagger: 0.75}, '-=2');
