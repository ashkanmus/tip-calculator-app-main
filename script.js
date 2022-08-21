//outputs
const outTip = document.getElementById('tip')
const outTotal = document.getElementById('total')

//inputs
const inBill = document.getElementById('bill');
const inpeopleCount = document.getElementById('numberOfPeople');
const inRadios = document.getElementsByName('percentage');
const inCustomPercentage = document.getElementById('custom');



//warning
const warningMsg = document.getElementById('warning')
const warninInp = document.getElementById('numberOfPeople-input')


//Calculation Function
const calculateTip = (bill, percentage, peopleCount) => { 
    //calculate
    tip = bill * percentage * 0.01 / peopleCount
    total = (bill / peopleCount) + tip
    
    // render
    outTip.innerHTML = tip.toFixed(2)
    outTotal.innerHTML = total.toFixed(2)
}

// Gets value from radio input
let percentage = 0
for(radio in inRadios) {
    inRadios[radio].onclick = function() {
        document.getElementById('custom').value = '';
        percentage = this.value;
        calculateTip(inBill.value,percentage, inpeopleCount.value)
    }
}

//EventListener based on changes in Bill/People Count/Tip 
[inBill, inpeopleCount, inCustomPercentage ].forEach((element) => {
    element.addEventListener('input', () =>{
        const inBill = document.getElementById('bill').value;
        const inpeopleCount = document.getElementById('numberOfPeople').value;
        const custom = document.getElementById('custom').value;
        
        if (custom !== '' && custom <= 100) {
            percentage = custom
            for(radio in inRadios) {
                inRadios[radio].checked = false;
            }
    
        if (inpeopleCount < 1 || inpeopleCount == ''){
            warningMsg.style.display = "block";
            warninInp.style.border = '2px solid #ff0000';
            // document.getElementById('numberOfPeople').value = '1';
        } else {
            warningMsg.style.display = "none";
            warninInp.style.border = '2px solid transparent';
            calculateTip(inBill,percentage, inpeopleCount)
        }
    }
})
})

//Reset button
const reset = () => {
    inBill.value = ''
    inpeopleCount.value = '1'
    document.getElementById('custom').value = ''

    for(radio in inRadios) {
        inRadios[radio].checked = false;
    }
    calculateTip(0,0,1)
    
}
