// Принцип подстановки Лисков
// Наследник должен корректно заменять родителя

export class Account {
  constructor(balance) {
    this.balance = balance
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
  }
}

// Добавляем возможность оплаты
export class PaymentAccount extends Account {
  payment(amount) {
    this.balance -= amount
  }
}

// Наследник, который полностью поддерживает родителя
export class SalaryAccount extends PaymentAccount {}

// Наследник, который НЕ поддерживает оплату
export class DepositAccount extends Account {}