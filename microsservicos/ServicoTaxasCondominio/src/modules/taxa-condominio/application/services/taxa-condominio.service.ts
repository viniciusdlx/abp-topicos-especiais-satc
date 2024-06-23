import { Injectable } from '@nestjs/common';
import { TaxaCondominio } from '../../domain/entities/taxa-condominio.entity';
import { CadastroTaxaCondominioDto } from '../../presentation/dtos/cadastro-taxa-condominio.dto';
import { EditarTaxaCondominioDto } from '../../presentation/dtos/editar-taxa-condominio.dto';
import { BuscarTaxaCondominioUseCase } from '../use-cases/buscar-taxa-condominio.use-case';
import { BuscarTodosTaxaCondominioUseCase } from '../use-cases/buscar-todos-taxa-condominio-use-case';
import { CadastroTaxaCondominioUseCase } from '../use-cases/cadastro-taxa-condominio.use-case';
import { EditarTaxaCondominioUseCase } from '../use-cases/editar-taxa-condominio.use-case';
import { ExcluirTaxaCondominioUseCase } from '../use-cases/excluir-taxa-condominio.use-case';

@Injectable()
export class TaxaCondominioService {
    constructor(
        private readonly cadastroTaxaCondominioUseCase: CadastroTaxaCondominioUseCase,
        private readonly buscarTodosTaxaCondominioUseCase: BuscarTodosTaxaCondominioUseCase,
        private readonly buscarTaxaCondominioUseCase: BuscarTaxaCondominioUseCase,
        private readonly editarTaxaCondominioUseCase: EditarTaxaCondominioUseCase,
        private readonly excluirTaxaCondominioUseCase: ExcluirTaxaCondominioUseCase,
    ) {}

    async cadastro(
        cadastroTaxaCondominioDto: CadastroTaxaCondominioDto,
    ): Promise<TaxaCondominio> {
        return await this.cadastroTaxaCondominioUseCase.execute(
            cadastroTaxaCondominioDto,
        );
    }

    async buscarTodos(): Promise<TaxaCondominio[]> {
        return await this.buscarTodosTaxaCondominioUseCase.execute();
    }

    async buscarPorId(id: number): Promise<TaxaCondominio> {
        return await this.buscarTaxaCondominioUseCase.execute(id);
    }

    async editar(id: number, data: EditarTaxaCondominioDto): Promise<void> {
        await this.editarTaxaCondominioUseCase.execute(id, data);
    }

    async excluir(id: number): Promise<void> {
        await this.excluirTaxaCondominioUseCase.execute(id);
    }
}
