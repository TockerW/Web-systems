interface Animal {
  name: string;
  speed: number;
  canSwim?: boolean;
  canFly?: boolean;
  move(): void;
}

class Cat implements Animal {
  constructor(public name: string, public speed: number) {}

  move(): void {
    console.log(`${this.name} біжить зі швидкістю ${this.speed} км/год.`);
  }
}

class Bird implements Animal {
  canFly: boolean = true;

  constructor(public name: string, public speed: number) {}

  move(): void {
    console.log(`${this.name} летить у небі зі швидкістю ${this.speed} км/год.`);
  }
}

class Fish implements Animal {
  canSwim: boolean = true;

  constructor(public name: string, public speed: number) {}

  move(): void {
    console.log(`${this.name} пливе під водою зі швидкістю ${this.speed} км/год.`);
  }
}

const cat = new Cat("Сіма", 15);
const bird = new Bird("Папуга", 40);
const fish = new Fish("Окунь", 8);

cat.move();
bird.move();
fish.move();