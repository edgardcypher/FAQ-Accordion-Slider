/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//accordion

var action="click";
var speed="500";

$(document).ready(function(){
    /*action performed when clicked on the question*/
    $('li.q').on(action,function(){
        //toggle the next li that follow the one we click
        $(this).next()
                .slideToggle(speed)
                     // all the li with the class="a" will be slide up(close) if opened 
                    .siblings('li.a')
                        .slideUp();
    var image=$(this).children('img');// we grab the value image of this clicked element
    $('img').not(image).removeClass('rotate');//remove rotate class from all the non active li
    image.toggleClass('rotate');
        
    });
});
