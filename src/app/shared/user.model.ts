export class User {
  public user_name: string;
  public user_email: string;
  public password: string;

  constructor(user_name: string, email: string, password: string) {
    this.user_name = user_name;
    this.user_email = email;
    this.password = password;
  }
}
