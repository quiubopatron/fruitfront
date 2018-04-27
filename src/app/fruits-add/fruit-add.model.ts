export class Fruit{
  public idFruit: number
  public name: string;
  public description: string;
  public pricePerKg: string;
  public dateCreated: Date;

  constructor(name: string, pricePerKg: string){
    this.name = name;
    this.pricePerKg = pricePerKg;
  }
}
