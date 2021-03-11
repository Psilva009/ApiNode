const mongoose = require("mongoose")
require("../models/Professor")
const Professor = mongoose.model("professores")

exports.post =(req,res, next) => {
    const novoProfessor ={
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso
    }
    new Professor(novoProfessor).save().then(() => {
        res.status(200).json({
           "message":"Professor Cadastrado com Sucesso"
        });
    }).catch((err) => {
        res.status(500).json({
            "message":"Não foi possível realizar o cadastro:"+err
        });
    });
}

exports.get =(req,res) => {
    Professor.find().then((professores) =>{
        res.status(200).json({
            "data": {professores: professores}
        })
    }).catch((err) => {
        res.status(500).json({
            "message": "Erro ao listar"+err
        })
    })
}
