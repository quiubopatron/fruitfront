export class Fruit{
  public idFruit: number
  public name: string;
  public description: string;
  public pricePerKg: number;
  public dateCreated: Date;

  constructor(name: string, pricePerKg: number){
    this.name = name;
    this.pricePerKg = pricePerKg;
  }
}
