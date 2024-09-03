// input for pay amount
// input for cc/cash
// bank to hold input

const submit = document.getElementById('submit')

submit.addEventListener(
    'click', ()=> {
        deposit()
    }
)

let bank = document.getElementById('bank')
let bankAmount = document.getElementById('bankAmount')
bank = 0

let message = document.getElementById('message')

const deposit=()=>{
    let date = document.getElementById('date')
    date = new Date()
    console.log(date)
    date.innerText = date
    let payInput = parseFloat(document.getElementById('payInput').value)
    let paytype = document.getElementById('payType').value
    console.log(payInput)
    depositAmount = bank + payInput
    console.log(depositAmount)
    bank = depositAmount
    bankAmount.innerText = '$' + bank.toFixed(2) 
    console.log(paytype)
    text = `You've just added $${payInput} to your bank!`
    message.innerText = text
    console.log(text)
}
