//Will write animation JS here 

var sb = document.getElementById("sb");

//TweenMax.to(sb, 3, {left:800, top:300} );

TweenMax.to(sb, 3, {x:800, y:-500, rotation:720, scale:0.5, ease: Elastic.easeOut}, .5);

TweenMax.staggerTo(".bball", 1, {y:500, rotation:360, delay:0, ease: Bounce.easeOut}, .5 )

TweenMax.to(".bball, #sb", 1, {opacity:0, delay:8, onComplete:imDone});

function imDone(){
	alert("I'm Done!")
}