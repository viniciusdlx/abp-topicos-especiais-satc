import { CadastroTaxaCondominioDto } from '../../presentation/dtos/cadastro-taxa-condominio.dto';
import { TaxaCondominio } from '../entities/taxa-condominio.entity';

export interface ITaxaCondominioService {
    cadastro(
        cadastroTaxaCondominioDto: CadastroTaxaCondominioDto,
    ): Promise<TaxaCondominio>;
}
