import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { environment } from 'src/config/environment';
import { Morador } from '../../domain/entities/morador.entity';
import { MoradorInadimplenteDto } from '../../presentation/dtos/morador-inadimplente.dto';

@Injectable()
export class MoradorService {
    constructor(private readonly axios: HttpService) {}

    async findById(id: number): Promise<Morador> {
        try {
            const url = `${environment.urlMorador}/morador/${id}`;

            const req = await this.axios.axiosRef.get(url);

            const data = req.data as Morador;

            return data;
        } catch (error) {
            console.log('error.message -> ', error.message);
            throw new Error(error.message);
        }
    }

    async update(id: number, data: MoradorInadimplenteDto): Promise<void> {
        try {
            const url = `${environment.urlMorador}/morador/${id}`;

            const req = await this.axios.axiosRef.put(url, {
                inadimplente: data.inadimplente,
            });

            console.log('req -> ', req);
        } catch (error) {
            console.log('error.message -> ', error.message);
            throw new Error(error.message);
        }
    }
}
