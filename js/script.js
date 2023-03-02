{
    const calculateResult = (amount, currency) => {

        const currencyEUR = 4.7004;
        const currencyUSD = 4.3066;
        const currencyGBP = 5.3505;

        switch (currency) {
            case "EUR":
                return amount * currencyEUR;

            case "USD":
                return amount * currencyUSD;

            case "GBP":
                return amount * currencyGBP
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
};

















