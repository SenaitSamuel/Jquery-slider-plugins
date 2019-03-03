# Jquery-slider-plugins

Download  the file from here

Open the downloaded Jquery-slider-plugins archive file and extract the “.js” file inside  js folder

Load the required jQuery javascript library in your Html page.
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

Create the Html for a content slider/carousel with arrows navigation.

Create a css and js  folders inside your project.

add the dowlaoded .js ans .css file in the js and css folder respestively

add the style.css file in your html file in the header
Add the jquery.slider.js in your scrpit  tag in your html  file like <scrpit src= “jquery.slider.js” after the main jQuery source file, 
and before your custom JavaScript code
.
You can also manually turn any text into a slider in JavaScript as follows
$(".file").slider();

finally  you need to hook up the slider by adding the following code  
   <script>
         $(document).ready(function(){
             
              $(".example").slider()
              
              $(".example").slider()
         })
           
         </script>
