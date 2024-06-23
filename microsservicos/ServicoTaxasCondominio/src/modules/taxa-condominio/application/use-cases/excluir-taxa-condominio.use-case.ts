import { BadRequestException, Inject } from '@nestjs/common';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';

export class ExcluirTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
    ) {}

    async execute(id: number): Promise<void> {
        try {
            const taxasCondominio = await this.taxaCondominioRepo.findById(id);

            if (!taxasCondominio) {
                throw new BadRequestException('Taxa do condominio inválida');
            }

            await this.taxaCondominioRepo.delete(id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
