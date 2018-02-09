module.exports = function(){ 
     
    let imagesTotal = document.images,
        imagesTotalCount = imagesTotal.length,
        imagesLoadCount = 0,
        preload = document.getElementById('preloader__pic'),
        imagesLoadPerc = document.getElementById('percent__text');
        content = document.getElementById('preloader');

        for(let i = 0; i < imagesTotalCount; i++ ){
            var imgCounter = new Image();
                imgCounter.onload = imgLoaded;
                imgCounter.onerror = imgLoaded;
                imgCounter.src = imagesTotal[i].src;
                
        }

        function imgLoaded() {
            document.body.style.overflow='hidden';
            imagesLoadCount++;
            imagesLoadPerc.innerHTML =  Math.ceil((100 / imagesTotalCount) * imagesLoadCount);;
            
            if(imagesLoadCount >= imagesTotalCount){
                setTimeout(function() {
                    if (!content.classList.contains('done')){
                        content.classList.add('done');
                        document.body.style.overflow='auto';
                        
                    }
                }, 500);
            }
        }

        

    };

