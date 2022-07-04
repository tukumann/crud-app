import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';

@Module({
  imports: [
<<<<<<< HEAD
    MongooseModule.forRoot('mongodb+srv://timriene:iriene23@maincluster.f5qdq.mongodb.net/?retryWrites=true&w=majority', {
=======
    MongooseModule.forRoot('mongodb://localhost/products-nest', {
>>>>>>> master
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
