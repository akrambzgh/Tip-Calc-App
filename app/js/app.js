// All Input
let monyInput = document.querySelector(".mony-input");
let peopleNumInput = document.querySelector(".people-input");
let customPerInput = document.querySelector(".custom-input");

// All Buttons
let AllpersentigeButton = document.querySelectorAll(".persentige");
let resetButton = document.querySelector(".reset-btn");

// All Results
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");

spanError = document.querySelector(".error-text");
 
function getAmounts() {
    AllpersentigeButton.forEach((btn) => {
        btn.addEventListener("click", () => {
            let persentigeButtonContent = parseInt(btn.textContent);
            let tipPrice = monyInput.value * persentigeButtonContent / 100;
            function caclTotla() {
                peopleNumInput.oninput = function () {
                    let totalPrice = parseInt(monyInput.value) / parseInt(peopleNumInput.value) + tipPrice;

                    if (peopleNumInput.value != "" || peopleNumInput.value != "0") {
                        totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
                        tipAmount.textContent = `$${tipPrice.toFixed(2)}`
                    }
                    if (peopleNumInput.value == "" || peopleNumInput.value == "0") {
                        totalAmount.textContent = "$0";
                        tipAmount.textContent = "$0";
                    }
                }
            }
            caclTotla();
        });
    });
}
getAmounts();

function resetText() {
    resetButton.addEventListener("click", () => {
        tipAmount.textContent = "$0";
        totalAmount.textContent = "$0";
        monyInput.value = "";
        peopleNumInput.value = "";
    });
};
resetText();

function costumeTip() {
    
};
costumeTip();