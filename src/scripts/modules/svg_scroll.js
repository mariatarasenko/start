// module.exports = function(){
//     var svgScroll = (function(){
//         const circle = document.querySelectorAll('.skills__circles');
//         const frontCircle = document.querySelectorAll('.skills__circles .circle__front');
//         const windowMargin = window.innerHeight / 3;
//         const svgRect = circle.getBoundingClientRect();
//         const svgPos = svgRect.top;
//         return{
//             grow: function(wScroll){
//                var startAnimate = wScroll - svgPos + windowMargin;
//                var pixelsElapsed = svgPos - wScroll;
//                var percentElapsed = 100 - Math.ceil(pixelsElapsed/windowMargin);
//                 var percentsDraw = 1200/100 * pixelsElapsed;

               
//             }
//         };
//     });

//     window.onscroll = function(){
//         var wScroll = pageYOffset;

//         svgScroll.grow(wScroll);
        
//     };
// };