import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateTodoInput {
  @Field(() => String)
  user: string;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  done: boolean;
}

@InputType()
export class ListTodoInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true })
  done?: boolean;
}

@InputType()
export class UpdateTodoInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true })
  done?: boolean;
}
