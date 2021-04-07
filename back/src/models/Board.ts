import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { User } from './User';

export class Board {
  // Take
  @prop({ type: () => String })
  public name!: string;

  // A reference to another document
  @prop({ type: () => User })
  public owner: Ref<User>;
}

const BoardModel = getModelForClass(Board);

export default BoardModel;
