"use server";

import { generateSummaryFromGeminiAI } from "@/lib/gminini-ai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";

export async function GeneratePdfSummary(
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }
  ]
) {
  if (!uploadResponse) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];
  if (!pdfUrl) {
    return {
      success: false,
      message: "Failed to generate summary for the uploaded file",
      data: null,
    };
  }
  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    let summary;
    try {
      summary= await generateSummaryFromGeminiAI(pdfText);
      return {
        success: true,
        message: "Generate Summary Successfully",
        data: summary,
      };
    
      
    } catch (error) {
      // console.log("Hello",error)
      // if(error instanceof Error && error.message==="RATE_LIMIT_EXCEEDED"){
      //   try {
      //     summary= await generateSummaryFromGeminiAI(pdfText);
      //     console.log(summary)
          
      //   } catch (error) {
      //     throw error;
          
      //   }
      // }
    }
    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary.",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to generate summary for the uploaded file",
      data: null,
    };
  }
}
