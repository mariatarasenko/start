module.exports = function(){ 
(function(){
        const bg = document.querySelector('.mountains_back');
        const user = document.querySelector('.works__user');
       function moveLayers(block,windowScroll,strafeAmount) {
        let strafe = windowScroll / -strafeAmount + '%';
        let style = block.style;
        style.transform = `translate3d(0,${strafe},0)`;
    }
    function parallaxScrollInit() {
        window.addEventListener('scroll',function () {
            let wScroll = window.pageYOffset;
            moveLayers(bg,wScroll,45);
            moveLayers(user,wScroll,15);
        });
    } 
       parallaxScrollInit(); 
    }());
    
}