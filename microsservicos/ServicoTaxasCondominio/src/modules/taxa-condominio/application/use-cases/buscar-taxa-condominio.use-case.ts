import { BadRequestException, Inject } from '@nestjs/common';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';

export class BuscarTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
    ) {}

    async execute(id: number): Promise<TaxaCondominio> {
        try {
            const taxasCondominio = await this.taxaCondominioRepo.findById(id);
            return taxasCondominio;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
