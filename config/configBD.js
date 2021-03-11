const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbApiSD', { 
    useNewUrlParser:true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Conectado ao mongoDB com sucesso");
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB: "+err);
});

module.exports = mongoose