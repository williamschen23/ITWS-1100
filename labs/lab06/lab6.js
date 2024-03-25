/* eslint-disable no-undef */
/* Lab 6 JavaScript File  */

// this is the block that allows code to execute only after the DOM
// is fully loaded:
$(document).ready(function () {

   //alert("The DOM is now loaded and can be manipulated.");
   //alert("The instructions for this lab are in the lab6.js file.");

   // example event handler:
   $('#labButton').click(function () {
      alert('You\'ve clicked the lab button');
   });


   // once the class is clicked, change the css
   $('.myName').click(function() {
      $('.myName').text('Williams Chen').css({'font-variety': 'small-caps', 'color': 'red', 'font-size': '110%'});
   });

   // the text fades out over 4 seconds
   $('#hideText').click(function(){
      $('#showHideBlock p').fadeOut(4000);
   });

   // the text fades in over 2 seconds
   $('#showText').click(function(){
      $('#showHideBlock p').fadeIn(2000);
   });

   // remove class if it already has a red class, otherwise add the class
   $('#labList').on('click', 'li', function(){
      if($(this).hasClass('red')){
         $(this).removeClass('red');
      } else {
         $(this).addClass('red');
      }

      // bonus ternary operator
      // $(this).hasClass('red') ? $(this).removeClass('red') : $(this).addClass('red');
   });

   // adds a list item every time a list item is added
   $('#AddListItem').click(function(){
      $('#labList').append(`<li>List item ${$('#labList li').length+1}</li>`)
   })


   // toggles the text over 4/10 seconds
   $('#toggleText').click(function(){
      $('#showHideBlock p').fadeToggle(400);
   })

});
