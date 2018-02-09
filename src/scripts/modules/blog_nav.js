module.exports = function () {
    $(window).scroll(function(){
        var topScroll = $(this).scrollTop();

       
        if(topScroll > 130){
            $('.articles').addClass('absolute');
        }
        if(topScroll > $('#article_first').offset().top - 100) {
            $('.title_text').parent().children().removeClass('active');
            $('.title_text.article_first ').addClass('active');
            $('.articles').removeClass('absolute'); 
     
        }
   
            
        

        if(topScroll > $('#article_second').offset().top - 100) {
            $('.title_text').parent().children().removeClass('active');
            $('.title_text.article_second ').addClass('active');
            $('.articles').removeClass('absolute'); 

            
        }

        if(topScroll > $('#article_third').offset().top - 100) {
            $('.title_text').parent().children().removeClass('active');
            $('.title_text.article_third ').addClass('active');

            
        }

        if(topScroll > $('#article_fourth').offset().top - 100) {
            $('.title_text').parent().children().removeClass('active');
            $('.title_text.article_fourth ').addClass('active');

            
        }
    });
};