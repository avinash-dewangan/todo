export default class Person {
  id: number | undefined;
  name: string | undefined;
  // username: string | undefined;
  // email: string | undefined;

  constructor(userRes: any) {
    this.id = userRes.id;
    this.name = userRes.name;
    // this.username = userRes.username;
    // this.email = userRes.email;
  }
}
