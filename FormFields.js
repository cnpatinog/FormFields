$(document).ready(function (){
  var sel = $("select.formControl");
  for (var i=0; i<sel.length;i++){
    options = $($(sel[i]).children());
    iconInputField = $($($(sel[i]).parent()).parent());
    iconInputField.after('<div class="selectInputBox"><div class="searchSelectBox"><div class="iconInputField"><div class="inputIcon"><i class="fas fa-search"></i></div><div class="inputField"><input class="formControl" type="text" name="searchSelect" placeholder="Search..."></input></div></div></div><div class="SelectItems"></div></div>');
    var FormGroup = $(iconInputField.parent());
    var SelectItems = $(FormGroup.children(".selectInputBox")).children(".SelectItems")
    for (var j=0;j < options.length;j++){
      var optionString = '<div class="SelectOption">'+$(options[j]).html()+'</div>';
      SelectItems.append(optionString);
    }
    $(sel[i]).on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(SelectItems.children()).filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  }

})
