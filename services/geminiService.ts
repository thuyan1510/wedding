import { GoogleGenAI } from "@google/genai";
import { ToneType } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateWeddingWish = async (
  guestName: string,
  relationship: string,
  tone: ToneType
): Promise<string> => {
  if (!apiKey) {
    console.warn("API_KEY is missing. Returning mock response.");
    return `Congratulations Tú Nam & Thúy An! Wishing you a lifetime of love and happiness. (AI disabled)`;
  }

  try {
    const prompt = `
      You are a helpful assistant for a wedding guest.
      Write a wedding wish for the couple "Tú Nam & Thúy An".
      
      Guest Name: ${guestName || 'A Guest'}
      Relationship to couple: ${relationship || 'Friend'}
      Tone: ${tone}
      
      Keep it under 60 words. Make it personal and warm.
      Do not include "Subject:" or any other headers. Just the wish text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Happy Wedding Day!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Wishing you both a lifetime of everlasting love and happiness!";
  }
};