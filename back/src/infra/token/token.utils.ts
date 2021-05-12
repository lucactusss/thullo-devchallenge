import * as jwt from 'jsonwebtoken';
import { configuration } from '../../configuration';
import { DataStoredInToken, TokenData } from './TokenData';
import { User } from '../../models/database/User';
import { DocumentType } from '@typegoose/typegoose';

export function createToken(user: DocumentType<User>): TokenData {
  const expiresIn = 60 * 60; // an hour
  const dataStoredInToken: DataStoredInToken = {
    _id: user._id,
  };
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, configuration.JWT_SECRET, { expiresIn }),
  };
}

export function createCookie(tokenData: TokenData): string {
  return `Authorization=${tokenData.token}; HttpOnly; Path=/; Max-Age=${tokenData.expiresIn}`;
}
