let callInput = document.getElementById("input");
let callCircle = document.getElementById("circle");
let callDemo = document.getElementById("demo");
let callButton = document.getElementById("button");
callCircle.addEventListener('click', () => {
 
 parseInt(callInput.value.innerHtml = sum()) ;
})

function sum(){
    if(callInput.value < 33){
        callInput.value++;
        callDemo.innerHTML = "Faxriddin";
    } else if (callInput.value < 66) {
        callInput.value++;
        callDemo.innerHTML = "Farhod";
    } else if (callInput.value < 99) {
        callInput.value++;
        callDemo.innerHTML = "Shaxriyor";
    }

  //
 

}









