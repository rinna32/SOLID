// Принцип разделения интерфейсов
// Классы реализуют только то, что им нужно

// Интерфейс для онлайн-платежей
export class WebPayment {
  payWebMoney(amount) {
    return `Paid ${amount} via WebMoney`
  }
}

// Интерфейс для терминалов
export class TerminalPayment {
  payByCard(amount) {
    return `Paid ${amount} via Card Terminal`
  }
}

// TerminalPaymentService не обязан реализовывать WebMoney
// WebPaymentService не обязан реализовывать терминал