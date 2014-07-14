    $(document).ready(function() { 
    var hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("id", "uniqueIdentifier");
    hiddenInput.setAttribute("type", "hidden");                     
    hiddenInput.setAttribute("value", 'ID');
    hiddenInput.setAttribute("class", "ListItem");

$('body').append(hiddenInput);
                 });

