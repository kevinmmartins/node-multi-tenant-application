import { createNamespace } from 'continuation-local-storage';

import { getConnectionBySlug } from '../infra/connectionManager';


let nameSpace = createNamespace('unique context');


export const  resolve = (req, res, next) => {
    const slug = req.query.slug;
    if (!slug) {
        res.json({ message: `Please provide tenant's slug to connect.` });
        return;
    }
    nameSpace.run(() => {
        nameSpace.set('connection', getConnectionBySlug(slug));
        next();
    });
}
