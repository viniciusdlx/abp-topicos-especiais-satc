import { Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { ITaxaCondominioRepository } from '../../domain/interfaces/taxa-condominio.repository.interface';
import { TaxaCondominioSchema } from '../schemas/taxa-condominio.schema';

@Injectable()
export class TaxaCondominioTypeOrmRepository
    implements ITaxaCondominioRepository
{
    constructor(
        @InjectRepository(TaxaCondominioSchema)
        private readonly ormRepo: Repository<TaxaCondominioSchema>,
    ) {}

    async insert(taxaCondominio: TaxaCondominio): Promise<TaxaCondominio> {
        try {
            const taxaCondominioCadastrado =
                await this.ormRepo.save(taxaCondominio);
            return taxaCondominioCadastrado;
        } catch (error) {
            console.log('error.message -> ', error.message);
            throw new ExceptionsHandler(error.message);
        }
    }
}
