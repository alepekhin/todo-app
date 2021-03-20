import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

/*
The @Schema() decorator marks a class as a schema definition. 
It maps our Todo class to a MongoDB collection of the same name
in LOWER case and with an additional “s” at the end

Create todos collection in myapp database before running the app!

*/
@ObjectType()
@Schema()
export class Todo {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;
    
    @Field(() => String)
    @Prop()
    user: string;
    
    @Field(() => String)
    @Prop()
    description: string;
    
    @Field(() => Boolean)
    @Prop()
    done: boolean;
}

export type TodoDocument = Todo & Document;

export const TodoSchema = SchemaFactory.createForClass(Todo);