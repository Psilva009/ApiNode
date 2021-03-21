const mongoose = require("mongoose")
require("../models/Professor")
const Professor = mongoose.model("professores")
const yup = require("yup")

class ProfessorController {
    async create(req,res, next) {
        const schema = yup.object().shape({
            nome: yup.string().required('O nome é obrigatório'),
            matricula: yup.string().required('A matricula é obrigatório'),
            curso: yup.string().required('O curso é obrigatório')
          });
    
        try{
            await schema.validate(req.body, {abortEarly: false});
        }catch(err){
            return res.status(400).json({
                "error": err.errors
            });
        }
    
        new Professor(req.body).save().then(() => {
            return res.status(200).json({
               "message":"Professor Cadastrado com Sucesso"
            });
        }).catch((err) => {
            return res.status(500).json({
                "message":"Não foi possível realizar o cadastro:"+err
            });
        });
    }

    async read(req, res){
        Professor.find().then((professores) =>{
            return res.status(200).json({
                "data": {professores: professores}
            })
        }).catch((err) => {
            return res.status(500).json({
                "message": "Erro ao listar"+err
            })
        }) 
    }
}

module.exports = ProfessorController;
