
import { Low, JSONFile } from 'lowdb';
import { 
    messageController, 
    webhookController
} from '../routes/index.js'

const adapter = new JSONFile('db.json');
const db = new Low(adapter);
await db.read();

db.data = db.data || { items: [] };
const { items } = db.data

export default (app) => {
    
    app.use( (req,res,next) => {
        req.items = items;
        req.db = db;
        next();
    });
    app.use(messageController);
    app.use(webhookController);

    app.listen(process.env.PORT || 3000);
}