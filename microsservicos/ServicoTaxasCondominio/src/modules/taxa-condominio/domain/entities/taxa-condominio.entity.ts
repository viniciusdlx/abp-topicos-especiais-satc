import { TaxaCondominioStatus } from 'src/shared/enums/taxa-condominio-status.enum';

export class TaxaCondominio {
    id: number;
    residenciaId: number;
    moradorId: number;
    valor: number;
    dataVencimento: Date;
    status: TaxaCondominioStatus;

    constructor(props: Partial<TaxaCondominio>) {
        this.id = props.id;
        this.residenciaId = props.residenciaId;
        this.moradorId = props.moradorId;
        this.dataVencimento = props.dataVencimento;
        this.valor = props.valor;
        this.status = props.status;
    }
}
