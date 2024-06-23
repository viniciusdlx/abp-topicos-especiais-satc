import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { environment } from 'src/config/environment';
import { Morador } from '../../domain/entities/morador.entity';

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
}
