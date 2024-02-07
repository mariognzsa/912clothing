const timeline2 = gsap.timeline({defaults: {ease: 'power1.out'}});

$(".menu-text").hover(function(){
    $(".menu-hide").css("overflow", "visible");  
    $(this).css("color", generateRandomColor());
    }, function(){
    $(this).css("color", "white");
});

let rng = 0;
var intervalId = setInterval(function() {
    if(rng > 255) rng = 0;
    $("#brandName").css("color", 'rgba('+rng.toString()+','+rng.toString()+','+rng.toString()+','+rng.toString()+')');
    $("#coming").css("color", 'rgba('+rng.toString()+','+rng.toString()+','+rng.toString()+','+rng.toString()+')');
    rng+=1;
    // console.log("RBGA", rng.toString());
}, 50);

var intervalId2 = setInterval(function() {
    timeline2.fromTo('#static', {opacity: 0}, {opacity: 0.2, duration: 2});
    timeline2.fromTo('#static', {opacity: 0.2}, {opacity: 0, duration: 1});
}, 6000);

function generateRandomColor(){
    let rgb = (255 * Math.random() | 50).toString();
    return 'rgb('+rgb+','+rgb+','+rgb+')';
}