import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { TaxaCondominioModule } from './modules/taxa-condominio/taxa-condominio.module';

@Module({
    imports: [DatabaseModule, TaxaCondominioModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
