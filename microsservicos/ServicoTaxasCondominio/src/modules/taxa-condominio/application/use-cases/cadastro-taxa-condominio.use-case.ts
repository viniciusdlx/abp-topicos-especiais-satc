import { Inject } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';
import { CadastroTaxaCondominioDto } from '../../presentation/dtos/cadastro-taxa-condominio.dto';

export class CadastroTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
    ) {}

    async execute(cadastroTaxaCondominioDto: CadastroTaxaCondominioDto) {
        try {
            const taxaCondominio = new TaxaCondominio({
                residenciaId: cadastroTaxaCondominioDto.residenciaId,
                moradorId: cadastroTaxaCondominioDto.moradorId,
                dataVencimento: cadastroTaxaCondominioDto.dataVencimento,
                valor: cadastroTaxaCondominioDto.valor,
            });

            return await this.taxaCondominioRepo.insert(taxaCondominio);
        } catch (error) {
            throw new ExecutionContextHost(error.message);
        }
    }
}
