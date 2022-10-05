import express from 'express';
const router = express.Router();

router.get('/webhook', (req, res) => {

    res.send({ status: true, data: req.items }); 
});

router.get('/webhook/:id', (req, res) => {

    let item = req.items[parseInt(req.params.id) - 1];
    // let post = posts.find((p) => p.id === req.params.id)

    res.send({ status: true, data: item }); 
});
 
router.post('/webhook', (req, res) => {

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
