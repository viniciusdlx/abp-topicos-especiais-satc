import { Morador } from './morador.entity';

export class Residencia {
    id: number;
    endereco: string;
    numero: string;
    predio: string;
    andar: number;
    moradorAtualId: number; // Chave estrangeira para Morador
    morador?: Morador;
}
