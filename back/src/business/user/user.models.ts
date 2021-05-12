import { User } from '../../models/database/User';
import { DocumentType } from '@typegoose/typegoose';

/**
 * Class used to represent the parameters of the createUser API
 */
export class CreateUserDTO {
  private _username: string;

  private _email: string;

  private _password: string;

  private _firstName: string;

  private _lastName: string;

  constructor(
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    this._username = username;
    this._email = email;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
}

export class UserResponse {
  private _user: DocumentType<User>;
  private _cookie: string;

  constructor(user: DocumentType<User>, cookie: string) {
    this._user = user;
    this._cookie = cookie;
  }

  public get user(): DocumentType<User> {
    return this._user;
  }
  public set user(value: DocumentType<User>) {
    this._user = value;
  }

  public get cookie(): string {
    return this._cookie;
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
}

export class LoginUserDTO {
  private _username: string;

  private _password: string;

  constructor(username: string, password: string) {
    this._password = password;
    this._username = username;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
}
