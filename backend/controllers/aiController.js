const { GoogleGenerativeAI } = require("@google/generative-ai");
const { questionAnswerPrompt, conceptExplainPrompt } = require("../utils/prompts");
require("dotenv").config();

// Initialize Gemini with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Utility: Extract and parse raw JSON output
const extractJSON = async (response) => {
  const rawText = await response.text();

  try {
    const cleaned = rawText
      .replace(/^\s*```json\s*/, "")
      .replace(/\s*```\s*$/, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    console.error("❌ JSON Parse Error:", err.message);
    console.log("↪ Raw Output:", rawText);
    throw new Error("Failed to parse AI response as JSON");
  }
};

// POST: /api/ai/generate-questions
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = questionAnswerPrompt(role, experience, topicsToFocus, numberOfQuestions);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // or gemini-1.5-pro
    const result = await model.generateContent(prompt);
    const response = result.response;

    const data = await extractJSON(response);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

// POST: /api/ai/generate-explanation
const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = conceptExplainPrompt(question);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;

    const data = await extractJSON(response);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};

module.exports = {
  generateInterviewQuestions,
  generateConceptExplanation,
};
