import { Injectable } from '@nestjs/common';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioService } from '../../domain/interfaces/taxa-condominio.service.interface';
import { CadastroTaxaCondominioDto } from '../../presentation/dtos/cadastro-taxa-condominio.dto';
import { CadastroTaxaCondominioUseCase } from '../use-cases/cadastro-taxa-condominio.use-case';

@Injectable()
export class TaxaCondominioService implements ITaxaCondominioService {
    constructor(
        private readonly cadastroTaxaCondominioUseCase: CadastroTaxaCondominioUseCase,
    ) {}

    async cadastro(
        cadastroTaxaCondominioDto: CadastroTaxaCondominioDto,
    ): Promise<TaxaCondominio> {
        return await this.cadastroTaxaCondominioUseCase.execute(
            cadastroTaxaCondominioDto,
        );
    }
}
