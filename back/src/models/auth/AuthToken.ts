export default class AuthToken {
  _id: string;
  email: string;
  token: string;

  constructor(_id: string, email: string, token: string) {
    this._id = _id;
    this.email = email;
    this.token = token;
  }
}
