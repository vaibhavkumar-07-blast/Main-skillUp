const Test = require("../models/test_schema");

const createTest = async (name, createdBy, questions, solvers) => {
  try {
    const test = new Test({ name, createdBy, questions, solvers });
    await test.save();
    return test;
  } catch (error) {
    throw new Error("Failed to create test: " + error.message);
  }
};

const getAllTest = async () => {
  try {
    const test = Test.find();
    return test;
  } catch (error) {
    throw new Error("Failed to create test: " + error.message);
  }
};

const getTestByID = async (_id) => {
  try {
    const test = Test.findById(_id);
    if (!test) throw new Error(`no such id found`);
    return test;
  } catch (error) {
    throw new Error("Failed to create test: " + error.message);
  }
};

const delTestByID = async (_id) => {
  try {
    const find = Test.findById(_id);
    if (!find) {
      throw new Error("no test found to delete in database ");
    }
    const test = Test.deleteOne(_id);
    return test;
  } catch (error) {
    throw new Error("Failed to create test: " + error.message);
  }
};

const modTestByID = async (_id) => {
  try {
    const find = Test.findById(_id);
    if (!find) {
      throw new Error("no test found to delete in database ");
    }
    const test = Test.Test.findByIdAndUpdate(
      _id,
      { $set: { questions: questions } },
      { new: true }
    );
    return test;
  } catch (error) {
    throw new Error("Failed to create test: " + error.message);
  }
};

module.exports = {
  createTest,
  getAllTest,
  getTestByID,
  delTestByID,
  modTestByID,
};
