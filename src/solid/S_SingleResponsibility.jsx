// Принцип единственной ответственности
// Каждый класс выполняет только одну задачу

export class Car {
  constructor(number, type) {
    this.number = number
    this.type = type
  }
}

// Отвечает только за работу с машинами
export class CarService {
  constructor() {
    this.cars = []
  }

  addCar(car) {
    this.cars.push(car)
  }

  findCar(number) {
    return this.cars.find(car => car.number === number)
  }
}

// Отвечает только за получение информации о машине
export class CarInfoService {
  getCarInfo(car) {
    return `Car number: ${car.number}, type: ${car.type}`
  }
}

// Отвечает только за печать заказа
export class PrinterService {
  printOrder(car) {
    return `Order printed for car ${car.number}`
  }
}

// Отвечает только за бронирование машины
export class RentCarService {
  rentCar(car) {
    return `Car ${car.number} booked`
  }
}