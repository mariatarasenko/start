

    module.exports = function(){
        var sliderOn =(function(){
            const slides = [
                {
                    subtitle: "Сайт школы онлайн образования",
                    techs: "Pug, SCSS, Javascript",
                    link: "#",
                    img: "https://farm4.staticflickr.com/3685/13217706484_5ba0153343.jpg",
                    active: "active",
                }, 
                {
                    subtitle: "Корпоративный сайт школы йоги",
                    techs: "HTML, CSS, JavaScript",
                    link: "#",
                   img: "https://www.archbalt.org/wp-content/uploads/2017/08/pexels-photo-360912-600x400.jpg",
                    
                    active: "",
                }, 
                {
                    subtitle: "Сайт бизнес центра",
                    techs: "HTML, CSS, Jquery, Javascript",
                    link: "#",
                   img: "http://cdn-image.travelandleisure.com/sites/default/files/1508856604/pacific-northwest-usa-northern-lights-SEATTLEAURORA1017.jpg",
                    
                    active: "",
                }
            ];
        
            const  slider      = document.querySelector('.slider'),
                   openedSlide = document.querySelector('.slider__show_img'), 
                   nextSlide   = document.querySelector('.slider__img_down'),
                   prevSlide   = document.querySelector('.slider__img_up'),
                   nextBtn     = document.querySelector('.slider__btns_down'),
                   prevBtn     = document.querySelector('.slider__btns_up'),
                   subtitle    = document.querySelector('.works__list_title'),
                   techs       = document.querySelector('.works__list_techn'),
                   link        = document.querySelector('.works__button');
            var    currentSlide = 0,
                   slidesLength = slides.length;
        
            function slideLimiter(eq) {
                if(eq >= slidesLength) {
                        return 0;
                } else if(eq < 0) {
                        return slidesLength - 1;
                } else {
                        return eq;
                       }
                }
        
                function fillSlider() {
                    const prev = slideLimiter(currentSlide - 1),
                          next = slideLimiter(currentSlide + 1);
            
                    openedSlide.setAttribute('src', slides[currentSlide].img);
                    subtitle.innerText = slides[currentSlide].subtitle;
                    techs.innerText = slides[currentSlide].techs;
                    link.setAttribute('href', slides[currentSlide].link);
                    prevSlide.setAttribute('src', slides[prev].img);
                    nextSlide.setAttribute('src', slides[next].img);
                }
            
                    fillSlider();
                
               
                    nextBtn.addEventListener('click', function(e){
                        currentSlide = slideLimiter(currentSlide + 1);
                        fillSlider();
                        
                    });
                
        
                
                    prevBtn.addEventListener('click', function(e){
                        currentSlide = slideLimiter(currentSlide - 1);
                        fillSlider();
                    });
                
        });

        sliderOn();

        }