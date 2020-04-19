export default class Place {
  City: string | undefined;
  State: string | undefined;
  District: string | undefined;

  constructor(placeRes: any) {
    this.City = placeRes.city;
    this.State = placeRes.state;
    this.District = placeRes.district;
  }
}
