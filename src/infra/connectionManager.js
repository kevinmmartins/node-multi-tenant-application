import knex from 'knex';

import commonDBConnection from './commonDBConnection';
import { getNamespace } from 'continuation-local-storage';

let connectionMap;

export const connectAllDb = async () => {
    let tenants;
    try {
        tenants = await commonDBConnection.select('*').from('tenants');
    } catch (e) {
        console.log('error', e);
        return;
    }
    connectionMap =
        tenants
            .map(tenant => {
                return {
                    [tenant.slug]: knex(createConnectionConfig(tenant))
                }
            })
            .reduce((prev, next) => {
                return Object.assign({}, prev, next);
            }, {});
}

const createConnectionConfig = (tenant) => {
    return {
        client: process.env.DB_CLIENT,
        connection: {
            host: tenant.db_host,
            port: tenant.db_port,
            user: tenant.db_username,
            database: tenant.db_name,
            password: tenant.db_password
        },
        pool: {min: 2, max: 20}
    };
}

export  const getConnectionBySlug = (slug) => {
    return connectionMap ? connectionMap[slug] : null;
}

export const getConnection = () => {
    const nameSpace = getNamespace('unique context');
    const conn = nameSpace.get('connection');
    if (!conn) {
        throw 'Connection is not set for any tenant database.';
    }
    return conn;
}
