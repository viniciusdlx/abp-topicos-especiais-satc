import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { TaxaCondominioService } from '../../application/services/taxa-condominio.service';
import { CadastroTaxaCondominioDto } from '../dtos/cadastro-taxa-condominio.dto';
import { EditarTaxaCondominioDto } from '../dtos/editar-taxa-condominio.dto';

@ApiTags('taxacondominio')
@Controller('taxacondominio')
export class TaxaCondominioController {
    constructor(
        private readonly taxaCondominioService: TaxaCondominioService,
    ) {}

    @ApiOperation({ summary: 'Inserir taxa de condomínio' })
    @ApiResponse({
        status: 201,
        description: 'Taxa de condomínio inserida com sucesso',
    })
    @ApiBadRequestResponse({ description: 'Dados inválidos ou faltando' })
    @Post()
    async insert(
        @Body() cadastroTaxaCondominioDto: CadastroTaxaCondominioDto,
        @Res() res: Response,
    ) {
        try {
            const taxaCondominio = await this.taxaCondominioService.cadastro(
                cadastroTaxaCondominioDto,
            );
            return res.status(HttpStatus.CREATED).json(taxaCondominio);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.args || error.message,
            });
        }
    }

    @ApiOperation({ summary: 'Buscar todas as taxas de condomínio' })
    @ApiResponse({
        status: 200,
        description: 'Busca realizada com sucesso',
    })
    @ApiBadRequestResponse({
        description: 'Erro ao buscar taxas de condomínio',
    })
    @Get()
    async findAll(@Res() res: Response) {
        try {
            const taxaCondominio =
                await this.taxaCondominioService.buscarTodos();
            return res.status(HttpStatus.OK).json(taxaCondominio);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }

    @ApiOperation({ summary: 'Buscar taxa de condomínio por ID' })
    @ApiResponse({
        status: 200,
        description: 'Busca realizada com sucesso',
    })
    @ApiBadRequestResponse({ description: 'Erro ao buscar taxa de condomínio' })
    @Get(':id')
    async findById(@Param('id') id: string, @Res() res: Response) {
        try {
            const taxaCondominio = await this.taxaCondominioService.buscarPorId(
                Number(id),
            );
            return res.status(HttpStatus.OK).json(taxaCondominio);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }

    @ApiOperation({ summary: 'Atualizar taxa de condomínio por ID' })
    @ApiResponse({
        status: 200,
        description: 'Taxa de condomínio atualizada com sucesso',
    })
    @ApiBadRequestResponse({
        description: 'Erro ao atualizar taxa de condomínio',
    })
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() body: EditarTaxaCondominioDto,
        @Res() res: Response,
    ) {
        try {
            const taxaCondominio = await this.taxaCondominioService.editar(
                Number(id),
                body,
            );
            return res.status(HttpStatus.OK).json(taxaCondominio);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }

    @ApiOperation({ summary: 'Excluir taxa de condomínio por ID' })
    @ApiResponse({
        status: 200,
        description: 'Taxa de condomínio excluída com sucesso',
    })
    @ApiBadRequestResponse({
        description: 'Erro ao excluir taxa de condomínio',
    })
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
            const taxaCondominio = await this.taxaCondominioService.excluir(
                Number(id),
            );
            return res.status(HttpStatus.OK).json(taxaCondominio);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }
}
