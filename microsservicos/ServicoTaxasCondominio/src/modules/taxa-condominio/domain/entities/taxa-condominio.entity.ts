import { BadRequestException } from '@nestjs/common';
import { TaxaCondominioStatusEnum } from 'src/shared/enums/taxa-condominio-status.enum';

export class TaxaCondominio {
    id: number;
    residenciaId: number;
    moradorId: number;
    valor: number;
    dataVencimento: Date;
    status: TaxaCondominioStatusEnum;

    constructor(props: Partial<TaxaCondominio>) {
        if (!props.residenciaId) {
            throw new BadRequestException('Residencia inválida');
        }
        if (!props.moradorId) {
            throw new BadRequestException('Morador inválido');
        }

        this.id = props.id;
        this.residenciaId = props.residenciaId;
        this.moradorId = props.moradorId;
        this.dataVencimento = props.dataVencimento;
        this.valor = props.valor;
        this.status = props.status;
    }
}
