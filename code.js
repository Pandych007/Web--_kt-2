// financial-calculator.js
class FinancialCalculator extends HTMLElement {
    constructor() {
      super();
  
      // Добавление стилей
      this.innerHTML = `
        <style>
          :host {
            display: block;
            max-width: 400px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
          }
  
          form {
            background-color: 8b00ff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          label {
            display: block;
            margin-bottom: 8px;
          }
  
          input {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
          }
  
          button {
            background-color: #8b00ff;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
  
          button:hover {
            background-color: red;
          }
  
          #results {
            margin-top: 20px;
          }
  
          span {
            font-weight: bold;
          }
        </style>
  
        <form id="calculator-form">
          <!-- Поля ввода для суммы кредита, процентной ставки, срока кредита -->
          <label for="loan-amount">Сумма кредита:</label>
          <input type="number" id="loan-amount" required>
  
          <label for="interest-rate">Процентная ставка (%):</label>
          <input type="number" id="interest-rate" required>
  
          <label for="loan-term">Срок кредита (месяцы):</label>
          <input type="number" id="loan-term" required>
  
          <!-- Кнопка для расчетов -->
          <button type="button" id="calculate-button">Рассчитать</button>
  
          <!-- Результаты расчетов -->
          <div id="results">
            <p>Ежемесячный платеж: <span id="monthly-payment">0</span></p>
            <p>Общая сумма к оплате: <span id="total-payment">0</span></p>
            <p>Общий процент по кредиту: <span id="total-interest">0</span></p>
          </div>
        </form>
      `;
  
      // Добавление обработчиков событий
      this.form = this.querySelector('#calculator-form');
      this.calculateButton = this.querySelector('#calculate-button');
  
      this.calculateButton.addEventListener('click', this.updateResults.bind(this));
    }
  
    connectedCallback() {
      console.log('Компонент создан');
    }
  
    disconnectedCallback() {
      console.log('Компонент удален');
    }
  
    updateResults() {
      // Логика расчетов и обновления результатов
      const loanAmount = parseFloat(this.querySelector('#loan-amount').value);
      const interestRate = parseFloat(this.querySelector('#interest-rate').value);
      const loanTerm = parseInt(this.querySelector('#loan-term').value);
  
      // Пример простого расчета (замените на вашу логику)
      const monthlyPayment = loanAmount * (1 + interestRate / 100) / loanTerm;
      const totalPayment = monthlyPayment * loanTerm;
      const totalInterest = totalPayment - loanAmount;
  
      // Обновление результатов
      this.querySelector('#monthly-payment').textContent = monthlyPayment.toFixed(2);
      this.querySelector('#total-payment').textContent = totalPayment.toFixed(2);
      this.querySelector('#total-interest').textContent = totalInterest.toFixed(2);
  
      console.log('Данные обновлены');
    }
  }
  
  customElements.define('financial-calculator', FinancialCalculator);
  