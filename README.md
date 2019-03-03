# Jquery-slider-plugins

Download  the file
Open the downloaded jquery plugin archive file and extract the “.js” file inside  js folder
Add the jquery.slider.js in your scrpit  tag in your html  file like <scrpit src= “jquery.slider.js” after the main jQuery source file, 
and before your custom JavaScript code.
finally  you need to hook up the slider by adding the following code  
   <script>
         $(document).ready(function(){
             
              $(".next").slider()
              
              $(".prev").slider()
         })
           
         </script>
