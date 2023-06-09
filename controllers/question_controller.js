const service = require("../services/question_services");

const createQuestion = async (req, res) => {
  console.log("question created here");
  try {
    const { Title, Options, Answer, Type } = req.body;
    const { id } = req.query.id;
    await service.createQuestion(id, Title, Options, Answer, Type);
    res.status(200).send({ msg: "question Added in question bank" });
  } catch (error) {
    throw { message: `error in creating question :- ${error.message}` };
  }
};
// const question = require("../models/questionBank_schema");

//1.get question
const getAllQuestions = async (req, res) => {
  console.log("question getting  here");
  try {
    let all = await service.getQuestion();
    res.status(200).send(all);
  } catch (error) {
    console.log("error during question Creation :", error);
    res.status(400).send({ message: error.message });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const questionid = req.params.quesId;
    const userId = req.params.userId;
    const question = await service.deleteQuestion(questionid, userId);
    res.status(200).send({ message: "succesfully deleted a question" });
  } catch (error) {
    // console.error(error);
    res.status(400).send({ message: error.message });
  }
};

const UpdateQuestion = async (req, res) => {
  try {
    const questionid = req.params.quesId;
    const userId = req.params.userId;
    const { Title, Answer } = req.body;
    const question = await service.updateQuestion(questionid, {
      Title,
      Answer,
      userId,
      questionid,
    });
    res.status(200).send(question);
  } catch (error) {
    // console.error(error);
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  getAllQuestions,
  deleteQuestion,
  UpdateQuestion,
  createQuestion,
};
