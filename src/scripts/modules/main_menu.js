module.exports = function(){
    $(document).ready(function() {
    // opened burger-menu
    $('.hamburger').on('click', (e) => {
        e.preventDefault();
        
        $('.background__left').toggleClass('active');
        $('.backround__right').toggleClass('active');
        $('.hamburger').css({
            'z-index': 201
        });
    });

    $(".hamburger").on("click", function() {
        const that = $(this);    
        if (that.hasClass("is-open")) {
          that.removeClass("is-open").addClass("is-closed"); 
          $('.nav__menu_hidden').removeClass('open');         
        } 

         else { 
          that.removeClass("is-closed").addClass("is-open");
          $('.nav__menu_hidden').addClass('open');    
        }    
      });
   
    });
        
}
    