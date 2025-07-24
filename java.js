let show = document.getElementById("display")
let ask_amount = document.getElementById("amount")
let ask_tip = document.getElementById("tip")

let total_amount = 0
show.textContent = `${total_amount}`


function calculate(amount, tip){
    let tipAmount = (amount * tip) / 100;
    let final_amount = amount + tipAmount;
    total_amount += final_amount
    show.textContent = total_amount
}

document.getElementById("reset").addEventListener("click", () => {
    ask_amount.value = "";
    ask_tip.value = "";    
    show.textContent = "0"    
})

document.getElementById("submit").addEventListener("click", () => {
    let amount = Number(ask_amount.value);
    let tip = Number(ask_tip.value);
    calculate(amount, tip)
});