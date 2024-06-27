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

            const moradores = await this.moradorService.findAll();

            // verifica se o tamanho de taxas inadimplentes é maior que 0
            if (tcInadimplentes.length > 0) {
                // faz um for dos inadimplentes no array
                for (const inadimplente of tcInadimplentes) {
                    // faz um for dos moradores do microsserviço
                    for (const morador of moradores) {
                        // se o morador não estiver inadimplente, atualiza como inadimplente pois não está pago a taxa
                        if (!morador.inadimplente) {
                            await this.moradorService.update(
                                inadimplente.moradorId,
                                {
                                    inadimplente: true,
                                },
                            );
                        }
                    }
                }
            }

            return tcInadimplentes;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
