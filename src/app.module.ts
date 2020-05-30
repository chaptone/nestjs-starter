import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppConfigModule } from './config/app/app.config.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './user/user.service';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
