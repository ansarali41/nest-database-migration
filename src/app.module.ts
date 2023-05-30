import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestUser } from './entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import { Repository } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [TestUser],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TestUser]),
  ],
  controllers: [AppController],
  providers: [AppService, Repository],
})
export class AppModule {}
