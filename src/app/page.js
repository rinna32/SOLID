"use client"

import { useEffect, useState } from "react"

// S
import { Car, CarService, CarInfoService, PrinterService, RentCarService } from "../solid/S_SingleResponsibility"

// O
import { EmailNotification, SmsNotification } from "../solid/O_OpenClosed"

// L
import { SalaryAccount, DepositAccount } from "../solid/L_LiskovSubstitution"

// I
import { WebPayment, TerminalPayment } from "../solid/I_InterfaceSegregation"

// D
import { Shop, CashPayment, CardPayment } from "../solid/D_DependencyInversion"

export default function Page() {

  const [output, setOutput] = useState([])

  useEffect(() => {

    // === S ===
    const carService = new CarService()
    const infoService = new CarInfoService()
    const printer = new PrinterService()
    const rentService = new RentCarService()

    const car = new Car("A123BC", "sedan")
    carService.addCar(car)

    const foundCar = carService.findCar("A123BC")
    const info = infoService.getCarInfo(foundCar)
    const rent = rentService.rentCar(foundCar)
    const print = printer.printOrder(foundCar)

    // === O ===
    const email = new EmailNotification()
    const sms = new SmsNotification()
    const emailMessage = email.sendMessage("Car booked")
    const smsMessage = sms.sendMessage("Car booked")

    // === L ===
    const salary = new SalaryAccount(1000)
    salary.payment(200)
    const deposit = new DepositAccount(500)

    // === I ===
    const web = new WebPayment()
    const terminal = new TerminalPayment()
    const webPay = web.payWebMoney(50)
    const termPay = terminal.payByCard(100)

    // === D ===
    const shopCash = new Shop(new CashPayment())
    const shopCard = new Shop(new CardPayment())
    const payCash = shopCash.checkout(25)
    const payCard = shopCard.checkout(60)

    setOutput([
      info, rent, print,
      emailMessage, smsMessage,
      `Salary balance: ${salary.getBalance()}`,
      `Deposit balance: ${deposit.getBalance()}`,
      webPay, termPay,
      payCash, payCard
    ])

  }, [])

  return (
    <div>
      <h1>SOLID Example</h1>
      {output.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  )
}