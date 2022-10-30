import { Module } from '@nestjs/common';
import { AppProviders } from './app.provider';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  })],
  controllers: [],
  // providers: [...AppProviders],
  // exports: [...AppProviders]
})
export class AppModule {}
