import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxaCondominioStatusEnum } from 'src/shared/enums/taxa-condominio-status.enum';
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
            throw new InternalServerErrorException(error.message);
        }
    }

    async findAll(): Promise<TaxaCondominio[]> {
        try {
            return await this.ormRepo.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findById(id: number): Promise<TaxaCondominio> {
        try {
            return await this.ormRepo.findOne({ where: { id: id } });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findUnpaid(): Promise<TaxaCondominio[]> {
        try {
            return await this.ormRepo.find({
                where: { status: TaxaCondominioStatusEnum.NaoPago },
            });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(id: number, data: Partial<TaxaCondominio>): Promise<void> {
        try {
            await this.ormRepo.update(id, data);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.ormRepo.delete(id);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
