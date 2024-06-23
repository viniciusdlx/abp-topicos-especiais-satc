import { TaxaCondominio } from '../entities/taxa-condominio.entity';

export interface ITaxaCondominioRepository {
    insert(taxaCondominio: TaxaCondominio): Promise<TaxaCondominio>;
}
