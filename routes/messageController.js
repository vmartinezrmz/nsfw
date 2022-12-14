import express from 'express';
const router = express.Router();

router.get('/message', (req, res) => {
    
    res.send(req.items); 
});

router.post('/message', (req, res) => {
  
    const item = req.items.push(req.body)
    req.db.write()
        .then(response => {

            res.send({ "status": true, message: { id: item } });
        })
        .catch(err => {
            res.status(400).send({ status: false, message: err.message });
        })  
});

export default router;
