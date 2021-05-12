import * as bcrypt from 'bcrypt';
import { Context } from '../../infra/logging/Context';
import { DocumentType } from '@typegoose/typegoose';
import UserModel, { User } from '../../models/database/User';
import { CreateUserDTO, UserResponse, LoginUserDTO } from './user.models';
import { createCookie, createToken } from '../../infra/token/token.utils';
import { TokenData } from '../../infra/token/TokenData';

class UserService {
  public async createUser(
    context: Context,
    user: CreateUserDTO
  ): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const createdUser: DocumentType<User> = await UserModel.create({
      username: user.username,
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    // Setting password to empty string to avoid returnin it
    createdUser.password = '';
    const tokenData: TokenData = createToken(createdUser);

    return new UserResponse(createdUser, createCookie(tokenData));
  }

  public async loginUser(
    context: Context,
    user: LoginUserDTO
  ): Promise<UserResponse> {
    const dbUser: DocumentType<User> | null = await UserModel.findOne({
      username: user.username,
    });
    if (!dbUser) {
      throw new Error('Username does not exist !');
    }
    const isPasswordMatching = await bcrypt.compare(
      user.password,
      dbUser.password
    );
    if (!isPasswordMatching) {
      throw new Error('Password does not match with username !');
    }
    dbUser.password = '';
    const tokenData: TokenData = createToken(dbUser);
    return new UserResponse(dbUser, createCookie(tokenData));
  }
}

export default UserService;
