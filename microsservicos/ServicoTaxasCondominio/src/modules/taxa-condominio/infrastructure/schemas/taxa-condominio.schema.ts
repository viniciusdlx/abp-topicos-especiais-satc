import { TaxaCondominioStatus } from 'src/shared/enums/taxa-condominio-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('taxa_condominio')
export class TaxaCondominioSchema {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ name: 'residencia_id' })
    residenciaId: number;

    @Column({ name: 'morador_id' })
    moradorId: number;

    @Column('decimal', { precision: 10, scale: 2 })
    valor: number;

    @Column({ type: 'date', name: 'data_vencimento' })
    dataVencimento: Date;

    @Column({
        type: 'text',
        enum: TaxaCondominioStatus,
        default: TaxaCondominioStatus.NaoPago,
    })
    status: TaxaCondominioStatus;
}
