let pinGeneratorfield = document.querySelector(".pinnumber")
let pingenBtn = document.querySelector('.outer')
pingenBtn.addEventListener("click", function () {
    let number = Math.round((Math.random() * 1000) + 1000)
    pinGeneratorfield.value = number;
})


let showfield = document.querySelector(".showfield")

let numbers = document.querySelectorAll(".number")
for (let number of numbers) {
    number.addEventListener("click", function (e) {

        if (e.target.innerText == "C") {
            showfield.value = ""
        } else if (e.target.innerText == ">") {
            let lastChar = showfield.value[showfield.value.length - 1]
            let newValue = showfield.value.replace(lastChar, "")
            showfield.value = newValue;
        } else {
            showfield.value += e.target.innerText;
            e.stopPropagation();
        }


    }, false)

}




let rightMsg = document.querySelector(".right")
rightMsg.style.display = "none"

let wrongMsg = document.querySelector(".wrong")
wrongMsg.style.display = "none"

let valueBtn = document.querySelector(".valuebtn");

let submitBtn = document.querySelector(".submitbtn")
let countBtn = document.querySelector(".valuebtn")
let value = 2;
submitBtn.addEventListener("click", function () {
    if (pinGeneratorfield.value == "") {
        submitBtn.setAttribute("disbled", true);
    } else {
        if (pinGeneratorfield.value == showfield.value) {
            rightMsg.style.display = "block"
            wrongMsg.style.display = "none"
        } else {
            rightMsg.style.display = "none"
            wrongMsg.style.display = "block"

            valueBtn.innerText = `${value} left`
            if (value === 0) {
                valueBtn.style.display = "none"
                submitBtn.setAttribute("disabled", true)
            }
            value--;
        }
        pinGeneratorfield.value = ""
        showfield.value = ""
    }
})