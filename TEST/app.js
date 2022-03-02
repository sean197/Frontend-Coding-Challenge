const radios = document.querySelectorAll('input[type=radio][name="color"]');
const colorGreen = document.getElementById("colorGreen");
const colorPink = document.getElementById("colorPink");

function changeHandler(e) {
    if(this.value === "dark"){
        colorGreen.style.backgroundColor = "black"
        colorGreen.style.color = "rgb(107, 241, 80)";
        colorPink.style.backgroundColor = "rgb(13, 0, 62)"
        colorPink.style.color = "rgb(196, 17, 130)";
    } else{
        colorGreen.style.backgroundColor = "rgb(78, 237, 78)"
        colorGreen.style.color = "black";
        colorPink.style.backgroundColor = "rgb(252, 129, 232)"
        colorPink.style.color = "white";
    }
 }

Array.prototype.forEach.call(radios, function(radio) {
    radio.addEventListener('change', changeHandler);
 }); 