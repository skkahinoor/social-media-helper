const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateInstagramCaption({ topic, tone, niche, emoji }) {
  const prompt = `
Generate 3 Instagram captions.

Topic: ${topic}
Tone: ${tone}
Niche: ${niche}
Include emojis: ${emoji === "yes" ? "yes" : "no"}

Make captions short, engaging, and mobile-friendly.
`;

const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}

module.exports = { generateInstagramCaption };
