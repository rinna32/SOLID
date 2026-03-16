// Принцип инверсии зависимостей
// Верхний уровень зависит от абстракции, а не от деталей

// Способ оплаты: любой класс, у которого есть метод pay()
export class CashPayment {
  pay(amount) {
    return `Paid ${amount} by cash`
  }
}

export class CardPayment {
  pay(amount) {
    return `Paid ${amount} by card`
  }
}

// Магазин не зависит от конкретной оплаты
export class Shop {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod
  }

  checkout(amount) {
    return this.paymentMethod.pay(amount)
  }
}