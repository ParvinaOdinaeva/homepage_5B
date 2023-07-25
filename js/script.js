{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.5;
    const rateUSD = 4.1;
    const rateGBP = 5.2;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "GBP":
        return amount / rateGBP;
    }
  }


  const resultReset = () => {
    const resultElement = document.querySelector(".js-result");
    const resetButton = document.querySelector(".js-resetButton");

    resetButton.addEventListener("click", () => {
      resultElement.innerText = "";
    });

  };


  const onFormSubmit = (event) => {
      event.preventDefault();
  
      const amountElement = document.querySelector(".js-amountField");
      const currencyElement = document.querySelector(".js-currencyField");
      const resultElement = document.querySelector(".js-result");
  
      const amount = +amountElement.value;
      const currency = currencyElement.value;
  
      const result = calculateResult(amount, currency);
  
      resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }
  

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit); 
  }

  init();
  resultReset();
}
