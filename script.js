function startBooth(){

    alert("Navigate to Camera Page (Prototype)");

}

const template = document.querySelector("select");

template.addEventListener("change",function(){

    alert("Selected Template : " + this.value);

});