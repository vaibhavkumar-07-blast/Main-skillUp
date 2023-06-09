const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  deleteQuestion,
  UpdateQuestion,
} = require("../controllers/question_controller");

router.use(express.json());
router.route("/createQuestion/:id").post(createQuestion);
router.route("/getAllQuestions").get(getAllQuestions);
router.route("/updateQuestion/:quesId/:userId").put(UpdateQuestion);
router.route("/deleteQuestion/:quesId/:userId").delete(deleteQuestion);

module.exports = router;
