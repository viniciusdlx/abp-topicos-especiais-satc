import { BadRequestException, Inject } from '@nestjs/common';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';

export class BuscarTodosTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
    ) {}

    async execute(): Promise<TaxaCondominio[]> {
        try {
            const taxasCondominio = await this.taxaCondominioRepo.findAll();
            return taxasCondominio;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
