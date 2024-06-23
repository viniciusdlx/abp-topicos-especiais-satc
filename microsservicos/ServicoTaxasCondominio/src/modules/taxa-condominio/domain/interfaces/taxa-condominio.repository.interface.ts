import { TaxaCondominio } from '../entities/taxa-condominio.entity';

export interface ITaxaCondominioRepository {
    insert(taxaCondominio: TaxaCondominio): Promise<TaxaCondominio>;
    findAll(): Promise<TaxaCondominio[]>;
    findById(id: number): Promise<TaxaCondominio>;
    findUnpaid(): Promise<TaxaCondominio[]>;
    update(id: number, data: Partial<TaxaCondominio>): Promise<void>;
    delete(id: number): Promise<void>;
}
