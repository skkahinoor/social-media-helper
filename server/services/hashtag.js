const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateHashtags({ keyword, niche }) {
  const prompt = `
Generate 25 Instagram hashtags.

Keyword: ${keyword}
Niche: ${niche}

Rules:
- Mix low, medium, and high competition hashtags
- No explanations
- Only hashtags separated by space
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}

module.exports = { generateHashtags };
