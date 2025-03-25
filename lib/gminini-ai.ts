import { SYSTEM_SUMMARY_PROMPT } from "@/utils/prompt";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generateSummaryFromGeminiAI = async (pdfText: string) => {
  try {
    const model= ai.getGenerativeModel({
        model:"gemini-1.5-pro-002",
        generationConfig:{
          temperature:0.7,
          maxOutputTokens:1500
        }
    })
    const prompt= {
      contents:[
        {
          role:"user",
          parts:[
            {text:SYSTEM_SUMMARY_PROMPT},
            {text:`Transform this document into an engaging, easy to read summary with contextual emojis and proper markdown formatting:\n\n${pdfText}\n`}
          ]
        }
      ]
    }

    const result= await model.generateContent(prompt);
    const response= await result.response;
    if(!response.text()){
      throw new Error(`Empty response from Gemini AI`);
    }
    return response.text();

  } catch (error: any) {
    
    throw new Error("An error occurred while generating the summary.");
  }
};
