const currency_el_one = document.getElementById('currency-one');
const currency_el_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const currency_one = currency_el_one.value;
    const currency_two = currency_el_two.value;

    fetch(` https://v6.exchangerate-api.com/v6/5f7d09803c65758edbec49b6/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rates = data.conversion_rates[currency_two];

            rate.innerText=`1 ${currency_one} = ${rates} ${currency_two}`;
            amount_two.value = amount_one.value * rates;
        });
    

};

currency_el_one.addEventListener('change', calculate);
currency_el_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);


swap.addEventListener('click', function(){
    const temp= currency_el_one.value;
    currency_el_one.value=currency_el_two.value;
    currency_el_two.value=temp;
    calculate();
});

calculate();