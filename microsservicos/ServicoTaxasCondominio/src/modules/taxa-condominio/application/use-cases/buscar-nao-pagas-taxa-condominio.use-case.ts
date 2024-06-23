import { BadRequestException, Inject } from '@nestjs/common';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';
import { MoradorService } from '../../infrastructure/services/morador.service';

export class BuscarNaoPagasTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
        private readonly moradorService: MoradorService,
    ) {}

    async execute(): Promise<TaxaCondominio[] | any> {
        try {
            const tcInadimplentes = await this.taxaCondominioRepo.findUnpaid();

            console.log('tcInadimplentes -> ', tcInadimplentes);

            return tcInadimplentes;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
