const mongoose = require ("mongoose");

const ProfessorSchema = mongoose.Schema({
    matricula: {
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

mongoose.model('professores', ProfessorSchema);
