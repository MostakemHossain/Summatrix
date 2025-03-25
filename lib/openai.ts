import { SYSTEM_SUMMARY_PROMPT } from "@/utils/prompt";
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummaryFromOpenAI(pdfText: string) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: SYSTEM_SUMMARY_PROMPT,
        },
        {
          role: "user",
          content: `Transform this document into an engaging, easy to read summary with contextual emojis and proper markdown formatting:\n\n${pdfText}\n`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });
    return completion.choices[0].message.content;
  } catch (error: any) {
    console.log(error.status)
    if (error.status === 429) {
      throw  error;
    }
  }
}
