import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'taxacondominio.db',
    entities: [__dirname + '../../../**/**/**/**/**/*.schema{.ts,.js}'],
    synchronize: true, // Sincroniza o esquema do banco de dados com as entidades automaticamente
    // logging: true,
};
