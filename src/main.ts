import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { trpcMiddleware } from './trpc/trpc.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //trpc
  const trpcApp = app.getHttpAdapter().getInstance();
  //trpc middleware
  trpcApp.use('/trpc', trpcMiddleware);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
