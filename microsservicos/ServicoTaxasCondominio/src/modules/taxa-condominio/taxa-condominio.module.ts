import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxaCondominioService } from './application/services/taxa-condominio.service';
import { CadastroTaxaCondominioUseCase } from './application/use-cases/cadastro-taxa-condominio.use-case';
import { TaxaCondominioTypeOrmRepository } from './infrastructure/repositories/taxa-condominio.typeorm-repository';
import { TaxaCondominioSchema } from './infrastructure/schemas/taxa-condominio.schema';
import { TaxaCondominioController } from './presentation/controllers/taxa-condominio.controller';

export const ITaxaCondominioRepository = {
    provide: 'ITaxaCondominioRepository',
    useExisting: TaxaCondominioTypeOrmRepository,
};

export const ITaxaCondominioService = {
    provide: 'ITaxaCondominioService',
    useExisting: TaxaCondominioService,
};

@Module({
    imports: [TypeOrmModule.forFeature([TaxaCondominioSchema])],
    controllers: [TaxaCondominioController],
    providers: [
        TaxaCondominioService,
        ITaxaCondominioRepository,
        ITaxaCondominioService,
        TaxaCondominioTypeOrmRepository,
        CadastroTaxaCondominioUseCase,
    ],
})
export class TaxaCondominioModule {}
