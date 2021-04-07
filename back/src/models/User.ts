import { getModelForClass, prop } from '@typegoose/typegoose';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import AuthToken from './auth/AuthToken';

enum Gender {
  male = 'male',
  female = 'female',
  undisclosed = 'undisclosed',
}

class Address {
  @prop({ type: () => String })
  street!: string;

  @prop({ type: () => String })
  city!: string;

  @prop({ type: () => String })
  postCode!: string;
}

export class User {
  // change the type of _id to string
  @prop()
  public _id!: ObjectId;

  // Mongoose validation goes inside the @Props arguments
  @prop({ type: () => String, required: true, unique: true })
  email!: string;

  @prop({ type: () => String, required: true })
  firstName!: string;

  @prop({ type: () => String, required: true })
  lastName!: string;

  @prop({ type: () => String, required: true })
  hash!: string;

  @prop({ type: () => String, required: true })
  salt!: string;

  // Enum of values male, female or undisclosed
  @prop({ type: () => String, enum: Object.values(Gender) })
  gender!: string;

  // Embedded sub document
  @prop({ type: () => Address })
  address!: Address;

  public set setPassword(password: string) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex');
  }

  public validatePassword(password: string): boolean {
    const hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex');
    return this.hash === hash;
  }

  public get generateJWT(): string {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        email: this.email,
        id: this._id,
        exp: expirationDate.getTime() / 1000,
      },
      'secret'
    );
  }

  public get toAuthJSON(): AuthToken {
    return {
      _id: this._id.toString(),
      email: this.email,
      token: this.generateJWT,
    };
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
