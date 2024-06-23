import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxaCondominioService } from './application/services/taxa-condominio.service';
import { BuscarTaxaCondominioUseCase } from './application/use-cases/buscar-taxa-condominio.use-case';
import { BuscarTodosTaxaCondominioUseCase } from './application/use-cases/buscar-todos-taxa-condominio-use-case';
import { CadastroTaxaCondominioUseCase } from './application/use-cases/cadastro-taxa-condominio.use-case';
import { EditarTaxaCondominioUseCase } from './application/use-cases/editar-taxa-condominio.use-case';
import { ExcluirTaxaCondominioUseCase } from './application/use-cases/excluir-taxa-condominio.use-case';
import { TaxaCondominioTypeOrmRepository } from './infrastructure/repositories/taxa-condominio.typeorm-repository';
import { TaxaCondominioSchema } from './infrastructure/schemas/taxa-condominio.schema';
import { MoradorService } from './infrastructure/services/morador.service';
import { ResidenciaService } from './infrastructure/services/residencia.service';
import { TaxaCondominioController } from './presentation/controllers/taxa-condominio.controller';

export const ITaxaCondominioRepository = {
    provide: 'ITaxaCondominioRepository',
    useExisting: TaxaCondominioTypeOrmRepository,
};

@Module({
    imports: [TypeOrmModule.forFeature([TaxaCondominioSchema]), HttpModule],
    controllers: [TaxaCondominioController],
    providers: [
        TaxaCondominioService,
        ITaxaCondominioRepository,
        TaxaCondominioTypeOrmRepository,
        CadastroTaxaCondominioUseCase,
        MoradorService,
        ResidenciaService,
        BuscarTodosTaxaCondominioUseCase,
        BuscarTaxaCondominioUseCase,
        EditarTaxaCondominioUseCase,
        ExcluirTaxaCondominioUseCase,
    ],
})
export class TaxaCondominioModule {}
