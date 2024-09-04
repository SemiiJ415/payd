// input for pay amount
// input for cc/cash
// bank to hold input

const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1; // months from 1-12
const day     = dateObj.getUTCDate();
const year    = dateObj.getUTCFullYear();

const newDate = `${year}/${month}/${day}`;

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
    let payInput = parseFloat(document.getElementById('payInput').value)
    depositAmount = bank + payInput
    bank = depositAmount
    bankAmount.innerText = '$' + bank.toFixed(2) 
    text = `You've just added $${payInput} to your bank!`
    message.innerText = text
    addInput()
    // updateHistory()
}

let inputHistory = [];

        function addInput() {
            const payInput = document.getElementById('payInput').value;
            let paytype = document.getElementById('payType').value
            let dateHistory = document.getElementById('date-col')
            let amountHistory = document.getElementById('amount-col')
            let paytypeHistory = document.getElementById('paytype-col')


            if (payInput) {
                inputHistory.push(`${newDate}, ${payInput}, ${paytype}`);
                dateHistory.innerText = newDate
                amountHistory.innerText = '$' + payInput
                paytypeHistory.innerText = paytype
                console.log(inputHistory)
                
                // updateHistory();
            }
        }

        function updateHistory() {
            const bankHistory = document.getElementById('bank-history');
            console.log(bankHistory)
            inputHistory.forEach((input, index) => {
                console.log(inputHistory[0])
                let row = document.createElement('row');
                row.textContent = `${inputHistory}`;
                bankHistory.appendChild(row);
            });
        }