module.exports = function(){    
    var float = (function(){
        const authoBtn = document.querySelectorAll('.authorisation');
        const flipBox = document.querySelector('.welcome__flip');
        const flipReturn = document.querySelector('.avto__link_main');
        const authoBlock = document.querySelector('.authorisation_block');
         
          
                authoBtn.forEach(btn => {
                    btn.addEventListener('click',()=>{
                        flipBox.classList.add('flip');
                        authoBlock.classList.add('hidden');
                },false);
            });

            function returnFlip() {
                flipReturn.addEventListener('click', function(){
                    flipBox.classList.remove('flip');
                    authoBlock.classList.remove('hidden');
                });
            }

            returnFlip();
            
    });
    float();
        }