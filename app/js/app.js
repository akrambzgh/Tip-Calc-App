// All Input
let monyInput = document.querySelector(".mony-input")
let peopleNumInput = document.querySelector(".people-input")
let customPerInput = document.querySelector(".custom-input")

// All Buttons
let AllpersentigeButton = document.querySelectorAll(".persentige")
let resetButton = document.querySelector(".reset-btn")

// All Results
let tipAmount = document.querySelector(".tip-amount")
let totalAmount = document.querySelector(".total-amount")

let spanError = document.querySelector(".error-text")
 
function getAmounts() {
    AllpersentigeButton.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            AllpersentigeButton.forEach((btn) => {
                btn.classList.remove("selected")
            })
            e.currentTarget.classList.add("selected")

            let persentigeButtonContent = parseInt(btn.textContent)
            let tipPrice = monyInput.value * persentigeButtonContent / 100

            function caclTotla() {
                peopleNumInput.oninput = function () {
                    let totalPrice = parseInt(monyInput.value) / parseInt(peopleNumInput.value) + tipPrice

                    if (peopleNumInput.value != "" || peopleNumInput.value != "0") {
                        totalAmount.textContent = `$${totalPrice.toFixed(2)}`
                        tipAmount.textContent = `$${tipPrice.toFixed(2)}`
                        spanError.classList.remove("error")
                    }
                    if (peopleNumInput.value == "" || peopleNumInput.value == "0") {
                        totalAmount.textContent = "$0"
                        tipAmount.textContent = "$0"
                        spanError.classList.add("error")
                    }
                }
            }
            caclTotla()
        })
    })
}
getAmounts()

function resetText() {
    resetButton.addEventListener("click", () => {
        tipAmount.textContent = "$0"
        totalAmount.textContent = "$0"
        monyInput.value = ""
        peopleNumInput.value = ""
        customPerInput.value = ""
        AllpersentigeButton.forEach((btn) => {
            btn.classList.remove("selected")
        })
    })
}
resetText()

function costumeTip() {
    peopleNumInput.oninput = function () {
        let costomtipPrice = monyInput.value * customPerInput.value / 100
        let costumtotalPrice = parseInt(monyInput.value) / parseInt(peopleNumInput.value) + costomtipPrice
        tipAmount.textContent = `$${costomtipPrice}`
        totalAmount.textContent = `$${costumtotalPrice}`
        if (customPerInput.value != "" || customPerInput.value != "0") {

            totalAmount.textContent = `$${costumtotalPrice.toFixed(2)}`
            tipAmount.textContent = `$${costomtipPrice.toFixed(2)}`
        }
        if (customPerInput.value == "" || customPerInput.value == "0") {
            totalAmount.textContent = "$0"
            tipAmount.textContent = "$0"
        }
    }
}
costumeTip()