const mongoose = require("mongoose")
require("../models/Aluno")
const Aluno = mongoose.model("alunos")

exports.post =(req,res, next) => {
    const novoAluno ={
        nome: req.body.nome,
        ra: req.body.ra,
        curso: req.body.curso
    }
    new Aluno(novoAluno).save().then(() => {
        res.status(200).json({
            "message":"Aluno Cadastrado com Sucesso"
        });
    }).catch((err) => {
        res.status(500).json({
            "message":"Não foi possível realizar o cadastro:"+err
        });
    });
}

exports.get =(req,res) => {
    Aluno.find().then((alunos) =>{
        res.status(200).json({
            "data": {alunos: alunos}
        })
    }).catch((err) => {
        res.status(500).json({
            "message": "Erro ao listar"+err
        })
    })
}