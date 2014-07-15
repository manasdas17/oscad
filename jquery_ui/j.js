
$(document).ready(function() { 
        $('path') .dblclick(function(){
        $(function() {
        $( "#dialog" ).dialog();
        });
    });
        $('.cat') .click(function(){
        $(function(){
        $('#dialog').dialog('close');
        });
     });
});

