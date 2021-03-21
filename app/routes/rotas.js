const express = require("express");
const AlunoController = require("../controllers/AlunoController");
const ProfessorController = require("../controllers/ProfessorController");
const router = express.Router()
const controllerAluno = new AlunoController();
const controllerProfessor = new ProfessorController();

router.post("/api/aluno/store", controllerAluno.create);
router.get("/api/alunos", controllerAluno.read);

router.post("/api/professor/store", controllerProfessor.create);
router.get("/api/professores", controllerProfessor.read);

module.exports = router