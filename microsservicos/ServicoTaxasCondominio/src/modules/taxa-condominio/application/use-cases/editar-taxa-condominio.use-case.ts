import { BadRequestException, Inject } from '@nestjs/common';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';
import { EditarTaxaCondominioDto } from '../../presentation/dtos/editar-taxa-condominio.dto';

export class EditarTaxaCondominioUseCase {
    constructor(
        @Inject('ITaxaCondominioRepository')
        private readonly taxaCondominioRepo: ITaxaCondominioRepository,
    ) {}

    async execute(id: number, data: EditarTaxaCondominioDto): Promise<void> {
        try {
            const taxaCondominio = await this.taxaCondominioRepo.findById(id);

            if (!taxaCondominio) {
                throw new BadRequestException('Taxa do condominio inválida');
            }

            taxaCondominio.valor = data.valor;
            taxaCondominio.dataVencimento = data.dataVencimento;
            taxaCondominio.status = data.status;
            await this.taxaCondominioRepo.update(id, taxaCondominio);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
