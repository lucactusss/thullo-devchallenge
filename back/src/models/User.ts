import { getModelForClass, prop } from '@typegoose/typegoose';

export class User {
  // Mongoose validation goes inside the @Props arguments
  @prop({ type: () => String, required: true, unique: true })
  email!: string;

  @prop({ type: () => String, required: true })
  firstName!: string;

  @prop({ type: () => String, required: true })
  lastName!: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
