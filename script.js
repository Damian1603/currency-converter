let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")
let formElement = document.querySelector(".js-form")

formElement.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let amount = amountElement.value
    let currency = currencyElement.value

    let currencyEUR = 4.7004;
    let currencyUSD = 4.3066;
    let currencyGBP = 5.3505;

    switch (currency) {
        case "EUR":
            result = amount * currencyEUR;
            break;
        case "USD":
            result = amount * currencyUSD;
            break;
        case "GBP":
            result = amount * currencyGBP
    }
    resultElement.value = result.toFixed(2);
});