import { ApiProperty } from '@nestjs/swagger';
import { TaxaCondominioStatusEnum } from 'src/shared/enums/taxa-condominio-status.enum';

export class EditarTaxaCondominioDto {
    @ApiProperty({ description: 'Valor da taxa' })
    valor: number;

    @ApiProperty({ description: 'Data de vencimento da taxa', type: Date })
    dataVencimento: Date;

    @ApiProperty({ description: 'Status da taxa' })
    status: TaxaCondominioStatusEnum;
}
