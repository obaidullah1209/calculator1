function inputValue(value) {
    var input = document.getElementById("input");
    input.value += value;
  }
  
  function result() {
    var input = document.getElementById("input");
    var ans = eval(input.value);
    console.log("ans", ans);
    input.value = ans;
  }
  
  function allClear() {
    var input = document.getElementById("input");
    input.value = "";
  }
// function clearLast(){
//    var lastName = document.getElementById("1st")
//    console.log(lastName.value)
// }
function clearLast() {
    var  inputField = document.getElementById('input');
    var  currentValue = inputField.value;
    
    if (currentValue) {
        inputField.value = currentValue.slice(0, -1); 
    }
}
