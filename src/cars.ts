abstract class Car {
  public brand: string;
  protected enginePower: number;
  private vinCode: string;

  constructor(brand: string, enginePower: number, vinCode: string) {
    this.brand = brand;
    this.enginePower = enginePower;
    this.vinCode = vinCode;
  }

  public abstract displayInfo(): void;

  protected getVinCode(): string {
    return this.vinCode;
  }
}

class BMW extends Car {
  public model: string;
  private mPackage: boolean;

  constructor(model: string, enginePower: number, vin: string, mPackage: boolean) {
    super("BMW", enginePower, vin);
    this.model = model;
    this.mPackage = mPackage;
  }

  public displayInfo(): void {
    console.log(`[BMW] Модель: ${this.model}, Потужність: ${this.enginePower} к.с., M-пакет: ${this.mPackage}, VIN: ${this.getVinCode()}`);
  }
}

class Audi extends Car {
  public model: string;
  public quattro: boolean;

  constructor(model: string, enginePower: number, vin: string, quattro: boolean) {
    super("Audi", enginePower, vin);
    this.model = model;
    this.quattro = quattro;
  }

  public displayInfo(): void {
    console.log(`[Audi] Модель: ${this.model}, Потужність: ${this.enginePower} к.с., Quattro: ${this.quattro}, VIN: ${this.getVinCode()}`);
  }
}

class Tesla extends Car {
  public model: string;
  private batteryCapacity: number;

  constructor(model: string, enginePower: number, vin: string, batteryCapacity: number) {
    super("Tesla", enginePower, vin);
    this.model = model;
    this.batteryCapacity = batteryCapacity;
  }

  public displayInfo(): void {
    console.log(`[Tesla] Модель: ${this.model}, Потужність: ${this.enginePower} к.с., Батарея: ${this.batteryCapacity} кВт-год, VIN: ${this.getVinCode()}`);
  }
}

const bmw1 = new BMW("M3", 510, "WBA1234567890BMW1", true);
const bmw2 = new BMW("320i", 184, "WBA1234567890BMW2", false);

const audi1 = new Audi("RS6", 600, "WAU1234567890AUD1", true);
const audi2 = new Audi("A4", 150, "WAU1234567890AUD2", false);

const tesla1 = new Tesla("Model S Plaid", 1020, "5YJ1234567890TSL1", 100);
const tesla2 = new Tesla("Model 3", 283, "5YJ1234567890TSL2", 60);

const fleet: Car[] = [bmw1, bmw2, audi1, audi2, tesla1, tesla2];
fleet.forEach(car => car.displayInfo());