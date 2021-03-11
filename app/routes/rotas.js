const express = require("express")
const router = express.Router()
const controllerAluno = require('../controllers/AlunoController')
const controllerProfessor = require('../controllers/ProfessorController')

router.post("/api/aluno/store", controllerAluno.post);
router.get("/api/alunos", controllerAluno.get);

router.post("/api/professor/store", controllerProfessor.post);
router.get("/api/professores", controllerProfessor.get);

module.exports = router