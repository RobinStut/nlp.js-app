import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { settings } from './settings';

@Module({
  imports: [TypeOrmModule.forRoot(settings.db), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
