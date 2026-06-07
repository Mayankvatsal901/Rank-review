const axios = require("axios");

const generateReview = async (
    review,
    location,
    sentiment
) => {

const prompt = `
Rewrite the following customer review into a professional ${sentiment} review.

IMPORTANT:
- Return ONLY the final optimized review.
- Do NOT add headings.
- Do NOT add stars or ratings.
- Do NOT add explanations.
- Do NOT say "Here is the rewritten review".
- Keep it natural and human sounding.

Location: ${location}

Review: ${review}
`;
    const response = await axios.post(
        "https://router.huggingface.co/v1/chat/completions",
        {
            model:"Qwen/Qwen2.5-72B-Instruct",

            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        },

        {
            headers: {
                Authorization: `Bearer ${process.env.HF_TOKEN}`,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data.choices[0].message.content;
};

module.exports = {
    generateReview
};