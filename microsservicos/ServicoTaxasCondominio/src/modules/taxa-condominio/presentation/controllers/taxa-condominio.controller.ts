import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ITaxaCondominioService } from '../../domain/interfaces/taxa-condominio.service.interface';
import { CadastroTaxaCondominioDto } from '../dtos/cadastro-taxa-condominio.dto';

@ApiTags('taxacondominio')
@Controller('taxacondominio')
export class TaxaCondominioController {
    constructor(
        @Inject('ITaxaCondominioService')
        private readonly taxaCondominioService: ITaxaCondominioService,
    ) {}

    @ApiOperation({ summary: 'Inserir taxa de condomínio' })
    @ApiResponse({
        status: 201,
        description: 'Taxa de condomínio inserida com sucesso',
    })
    @ApiBadRequestResponse({ description: 'Dados inválidos ou faltando' })
    @Post()
    async insert(@Body() cadastroTaxaCondominioDto: CadastroTaxaCondominioDto) {
        return await this.taxaCondominioService.cadastro(
            cadastroTaxaCondominioDto,
        );
    }
}
