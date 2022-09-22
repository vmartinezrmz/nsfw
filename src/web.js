
const {
    messageController
} = require('../routes')

module.exports = (app) => {
    
    app.use('/message', messageController);

    app.listen(process.env.PORT || 3000);
}