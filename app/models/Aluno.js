const mongoose = require ("mongoose");

const AlunoSchema = mongoose.Schema({
    ra: {
        type: String,
        require: true,
    },
    nome: {
        type: String,
        require: true,
    },
    curso:{
        type: String,
        require:true
    } 
});

mongoose.model('alunos', AlunoSchema);