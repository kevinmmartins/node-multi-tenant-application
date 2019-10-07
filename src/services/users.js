import {getConnection} from '../infra/connectionManager';

export const getAll = async (req, res) => {
    res.json({body: await getConnection().select('*').from('users')});
}
