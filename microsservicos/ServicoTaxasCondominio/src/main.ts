import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
        .setTitle('API de Taxa de Condomínio')
        .setDescription('Documentação da API de Taxa de Condomínio')
        .setVersion('1.0')
        .addTag('taxacondominio')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const PORT = process.env.PORT || 3000;
    const HOST = process.env.HOST || '0.0.0.0';

    await app.listen(PORT);
    console.log(`Running on http://${HOST}:${PORT}`);
}
bootstrap();
