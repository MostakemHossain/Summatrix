"use server";

import { fetchAndExtractPdfText } from "@/lib/langchain";

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
      file: { url:pdfUrl, name: fileName },
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
    const pdfText= await fetchAndExtractPdfText(pdfUrl);
    console.log(pdfText)
    
  } catch (error) {
    return {
      success: false,
      message: "Failed to generate summary for the uploaded file",
      data: null,
    };
    
  }
}
