export class InsuranceQoute {
  public details: CarDetails
  constructor(
    public firstName: string,
    public lastName: string,
    public birthDate: string,
    public email: string,
    public phone: string,
    public address: string,
    public membershipId: string,
    public type: string,
    public autoRegisterToLoyalty: string
    
  ) { }
}

export class CarDetails {
  constructor(
    public subType: string,
    public make: string,
    public year: string,
    public model: string,
    public type: string,
    public style: string,
    public description: string,
    public colour: string,
    public purpose: string,
    public homeParkingType: string,
    public nightParkingAddress: string
  ) { }

}