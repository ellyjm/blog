$(function(){"use strict";$("#eform").submit(function(e){e.preventDefault();var t=$("#subscribe"),a=$("#email").val(),s=$("#reason").val();t.attr("disabled","disabled"),t.html("Please, wait..."),send_email(a,"I'd like to receive monthly updates from yegor256.com, please add me to the list of subscribers.\n\n"+s,"I would like to receive monthly updates",function(){$("#eform").html('<p class="green"><b>Many thanks!</b> Your request was sent. I\'ll reply by email to <code>'+a+"</code>.</p>")},function(){t.attr("disabled",""),t.html("Oops :( Try again...")})})});