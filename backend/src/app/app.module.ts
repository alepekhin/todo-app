import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
/*
  "myapp" is mongo database that should be created before starting the app
  about { useFindAndModify: false } see
  https://mongoosejs.com/docs/deprecations.html#findandmodify
*/

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/myapp',{ useFindAndModify: false }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    TodoModule,
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
