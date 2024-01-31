//helps to generate the RGB value
function RGB(value){
    return `rgb(${value},${value},${value})`
}

//get form
const form = document.querySelector("#frm");

//add event Listener on form
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var colorNo = document.querySelector("#color").value;
    var body = document.querySelector(".bdy");
    body.style.backgroundColor = RGB(colorNo);
});