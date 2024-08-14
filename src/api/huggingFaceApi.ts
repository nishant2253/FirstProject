// src/api/huggingFaceApi.ts
import axios from 'axios';

const API_URL =
  'https://api-inference.huggingface.co/models/google/flan-t5-large';
const API_KEY = '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'; // Replace with your actual API key

export async function getBreadRecommendation(
  slicesPerDay: number,
  daysOfStock: number,
  averagePrice: number,
): Promise<string> {
  const prompt = `
    User consumes ${slicesPerDay} slices of bread daily.
    They want to stock bread for ${daysOfStock} days.
    Their average purchase price for bread is $${averagePrice}.
    Available bread options:
    - Harvest: 10 slices per packet, $2.3 per packet
    - Britannia: 20 slices per packet, $2.4 per packet
    how many packets of bread should purchase in numbers of which brand Harvest or Britannia ?.
  `;

  try {
    const response = await axios.post(
      API_URL,
      {inputs: prompt},
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data[0].generated_text;
  } catch (error) {
    console.error('Error calling Hugging Face API:', error);
    throw error;
  }
}
