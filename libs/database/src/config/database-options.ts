// database-options.ts

import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getDatabaseOptions(
    config: ConfigService,
): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.database'),

        autoLoadEntities: true,

        synchronize: false,

        logging: false,
    };
}