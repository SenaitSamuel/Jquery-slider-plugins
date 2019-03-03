

(function($){
 
    $.fn.slider = function (){
        
        
        // Get parent element
        var slideContainer= $("#slide-container");

        // Slides images
        var listImages = slideContainer.find('.list-images');
        // Get all slides
        var images = listImages.find('li');

        // Get pager div
        var page = slideContainer.find('.page');

        // Set currentSlide to first child
        var currentSlide = images.first();
        var slideIndex = 1;
   

        
    return this.on("click",function (){
         
         currentSlide.removeClass('active');

            if(slideIndex == images.length) {
                currentSlide = images.first();
                currentSlide.addClass('active');
                slideIndex = 1;
            } else {
                slideIndex++;
                currentSlide = currentSlide.next();
                currentSlide.addClass('active');
            }

            page.text(slideIndex+' / '+images.length);
        
     })
     
     
   return this.on("click",function(){
         
       currentSlide.removeClass('active');

           if(slideIndex == 1) {
              currentSlide = images.last();
              currentSlide.addClass('active');
              slideIndex = images.length;
             } else {
               slideIndex--;
                currentSlide = currentSlide.prev();
               currentSlide.addClass('active');
         }

            page.text(slideIndex+' / '+images.length);
      
        
     })
     
    
    
    

    
        
    }
    

   
})(jQuery);







     
                  
                  
                  
       