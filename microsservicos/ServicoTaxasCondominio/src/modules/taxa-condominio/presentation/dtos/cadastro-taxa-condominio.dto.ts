import { ApiProperty } from '@nestjs/swagger';

export class CadastroTaxaCondominioDto {
    @ApiProperty({ description: 'ID da residência' })
    residenciaId: number;

    @ApiProperty({ description: 'ID do morador' })
    moradorId: number;

    @ApiProperty({ description: 'Valor da taxa' })
    valor: number;

    @ApiProperty({ description: 'Data de vencimento da taxa', type: Date })
    dataVencimento: Date;
}
