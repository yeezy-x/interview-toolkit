const Question = require("../models/Question");
const Session = require("../models/Session");

// @desc    Add additional questions to an existing session
// @route   POST /api/questions/add
// @access  Private
exports.addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !Array.isArray(questions) || questions.length === 0 || !questions) {
      return res.status(400).json({ message: "Session ID and questions are required" });
    }

    // Verify session belongs to user
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Create new questions
    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({ 
        session :sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );

    const newQuestionIds = createdQuestions.map((q) => q._id);

    // Add to session
    session.questions.push(...newQuestionIds);
    await session.save();

    res.status(201).json({ message: "Questions added", questions: createdQuestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Pin or unpin a question
// @route   POST /api/questions/:id/pin
// @access  Private
exports.togglePinQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.isPinned=!question.isPinned;
    await question.save();

    res.status(200).json({ message: `Question ${question.isPinned ? "pinned" : "unpinned"}`, pinned: question.isPinned });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Update a note for a question
// @route   POST /api/questions/:id/note
// @access  Private
exports.updateQuestionNote = async (req, res) => {
  try {
    const { note } = req.body;

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.note = note || "";
    await question.save();

    res.status(200).json({ message: "Note updated", note: question.note });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
