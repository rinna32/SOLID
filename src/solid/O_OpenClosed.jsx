// Принцип открытости-закрытости
// Класс закрыт для изменения, но открыт для расширения

export class EmailNotification {
  sendMessage(message) {
    return `Email sent: ${message}`
  }
}

export class SmsNotification {
  sendMessage(message) {
    return `SMS sent: ${message}`
  }
}

// Если появится новый тип уведомления (Push, Telegram), 
// мы просто создаем новый класс, старые менять не нужно