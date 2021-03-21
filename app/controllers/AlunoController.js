const { response } = require("express")
const mongoose = require("mongoose")
require("../models/Aluno")
const Aluno = mongoose.model("alunos")
const yup = require("yup")

class AlunoController {
    async create(req,res, next) {
        const schema = yup.object().shape({
            nome: yup.string().required('O nome é obrigatório'),
            ra: yup.string().required('O ra é obrigatório'),
            curso: yup.string().required('O curso é obrigatório')
          });
    
        try{
            await schema.validate(req.body, {abortEarly: false});
        }catch(err){
            return res.status(400).json({
                "error": err.errors
            });
        }
    
        new Aluno(req.body).save().then(() => {
            return res.status(200).json({
                "message":"Aluno Cadastrado com Sucesso"
            });
        }).catch((err) => {
            return res.status(500).json({
                "message":"Não foi possível realizar o cadastro:"+err
            });
        });
    }

    async read(req, res){
        Aluno.find().then((alunos) =>{
            return res.status(200).json({
                "data": {alunos: alunos}
            })
        }).catch((err) => {
            return res.status(500).json({
                "message": "Erro ao listar"+err
            })
        })   
    }
}

module.exports = AlunoController;