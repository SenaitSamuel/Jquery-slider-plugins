# Jquery-slider-plugins

Download  the file from here

Open the downloaded Jquery-slider-plugins archive file and extract the “.js”  and.css  file from   js  css folder respestively 

Create a css and js  folders inside your project.

Add the dowlaoded .js ans .css file in the js and css folder respestively

Create the Html for a content slider/carousel 

Add  following stylesheet in the header
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

then add the style.css   stylesheet from plugin after this

In your html file  in body part:-
create an un-ordered list which has a few images inside them. 
create navigation section of the slider which allows us to move images back and forth.
create a controll

Load the required jQuery javascript library in your Html page.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

Add the jquery.slider.js in your scrpit  tag in your html  file like <scrpit src= “jquery.slider.js” after the main jQuery source file, 
and before your custom JavaScript code

finally  you need to hook up the slider by adding the following code  
   <script>
         $(document).ready(function(){
             
              $(".example").slider()
              
              $(".example").slider()
         })
           
         </script>
