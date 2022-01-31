
var resultfield = $("#result");

function insertNumber(number){
    var existingNumber = resultfield.val();
    resultfield.val(existingNumber + number)
}
function clearresult(){
    resultfield.val('')
}
function calculate(){
    var result = eval(resultfield.val())
    resultfield.val(result)
}
function deletenumber(){
    var presentvalue = resultfield.val();
    if(resultfield!=''){
        resultfield.val(resultfield.val().slice (0,-1))
    }

}