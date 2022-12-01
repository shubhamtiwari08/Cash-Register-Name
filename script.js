var billAmount = document.querySelector("#bill-amount")
var amountGiven = document.querySelector("#amount-given")
var checkButton = document.querySelector("#check-btn")

var noOfNotes = document.querySelectorAll(".number-of-notes")



var denominations = [2000, 500, 200, 100, 10, 5, 1]


var errorMessage = document.querySelector("#validation-para")

checkButton.addEventListener("click", function validation() {

    if (billAmount.value > 0) {
        if (amountGiven.value > billAmount.value) {
            const amountToBeReturned = amountGiven.value - billAmount.value;
            calculate(amountToBeReturned)
        } else {
            showMessage("cash should be greater than bill amount.")
        }
    } else {
        showMessage("Invalid Bill Amount")
    }
})

function calculate(amountToBeReturned) {
    for (i = 0; i < denominations.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / denominations[i]
        )
        amountToBeReturned = amountToBeReturned % denominations[i]

        noOfNotes[i].innerHTML = numberOfNotes
    }

}









function showMessage(message) {
    errorMessage.innerHTML = message;
}