import { TodoResolver } from './todo.resolvers'
import { TodoService } from './todo.service'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'todo', schema: TodoSchema }]),
  ],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}