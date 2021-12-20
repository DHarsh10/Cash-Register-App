var billAmount = document.querySelector("#billamount-txt")
var cashGiven = document.querySelector("#cashgiven-txt")
var checkBtn = document.querySelector("#check-btn")
var errorMessage = document.querySelector("#msg")
var notesInTable = document.querySelectorAll(".notesNumber")


errorMessage.style.display = "none";
const availableNotes = [2000, 500, 100, 50, 20, 10, 1];

function errorHandler(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function changeCalculation(cashToBeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(cashToBeReturn / availableNotes[i]);

        cashToBeReturn = cashToBeReturn % availableNotes[i];

        notesInTable[i].innerText = noOfNotes;
    }
}

function notesCounter(givenCash, amountBill) {

    if (givenCash >= amountBill) {
        var cashToBeReturn = cashGiven.value - billAmount.value;
        changeCalculation(cashToBeReturn);
    } else {
        errorHandler("Error: Given Cash should be greater than Bill amount")
    }

}



function clickHandler() {

    var cashGivenValue = cashGiven.value;
    var billAmountValue = billAmount.value;

    if (billAmountValue > 0) {
        notesCounter(cashGivenValue, billAmountValue);
    } else {
        errorHandler("Error: Bill amount should be greater than 0");
    }
}



checkBtn.addEventListener("click", clickHandler)