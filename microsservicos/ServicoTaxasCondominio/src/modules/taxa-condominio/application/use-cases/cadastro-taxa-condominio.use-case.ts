import { BadRequestException, Inject } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';
import { MoradorService } from '../../infrastructure/services/morador.service';
import { ResidenciaService } from '../../infrastructure/services/residencia.service';
import { CadastroTaxaCondominioDto } from '../../presentation/dtos/cadastro-taxa-condominio.dto';

export class CadastroTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
        private readonly residenciaService: ResidenciaService,
        private readonly moradorService: MoradorService,
    ) {}

    async execute(cadastroTaxaCondominioDto: CadastroTaxaCondominioDto) {
        if (cadastroTaxaCondominioDto.valor <= 0) {
            throw new BadRequestException('Valor inválido');
        }

        if (cadastroTaxaCondominioDto.dataVencimento < new Date()) {
            throw new BadRequestException('Data de vencimento inválida');
        }

        const morador = await this.moradorService.findById(
            cadastroTaxaCondominioDto.moradorId,
        );

        if (!morador) {
            throw new BadRequestException('Morador inválido');
        }

        const residencia = await this.residenciaService.findById(
            cadastroTaxaCondominioDto.residenciaId,
        );

        if (!residencia) {
            throw new BadRequestException('Residencia inválida');
        }

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
