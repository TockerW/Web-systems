interface Payable {
  pay(): void;
}

abstract class Employee {
  constructor(
    public name: string,
    public age: number,
    public salary: number
  ) {}

  abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.10;
  }

  pay(): void {
    console.log(`Виплачено розробнику ${this.name}: зарплата ${this.salary} грн + бонус ${this.getAnnualBonus()} грн.`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.20;
  }

  pay(): void {
    console.log(`Виплачено менеджеру ${this.name}: зарплата ${this.salary} грн + бонус ${this.getAnnualBonus()} грн.`);
  }
}

const staff: Employee[] = [
  new Developer("Іван", 25, 80000),
  new Developer("Оксана", 28, 95000),
  new Manager("Сергій", 40, 120000),
  new Manager("Наталя", 35, 110000)
];

const totalAnnualBonuses = staff.reduce((acc, emp) => acc + emp.getAnnualBonus(), 0);
console.log(`Загальна річна сума бонусів: ${totalAnnualBonuses} грн`);

(staff as unknown as Payable[]).forEach(person => person.pay());