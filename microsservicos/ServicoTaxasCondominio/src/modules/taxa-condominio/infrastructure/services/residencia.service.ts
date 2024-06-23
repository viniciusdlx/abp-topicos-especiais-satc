import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { environment } from 'src/config/environment';
import { Residencia } from '../../domain/entities/residencia.entity';

@Injectable()
export class ResidenciaService {
    constructor(private readonly axios: HttpService) {}

    async findById(id: number): Promise<Residencia> {
        try {
            const url = `${environment.urlResidencia}/residencia/${id}`;

            const req = await this.axios.axiosRef.get(url);

            const data = req.data as Residencia;

            return data;
        } catch (error) {
            console.log('error.message -> ', error);
            throw new Error(error.message);
        }
    }
}
