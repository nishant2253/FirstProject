// import axios from 'axios';

export interface UserInput {
  slicesPerDay: number;
  daysToConsume: number;
  avgPrice: number;
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

export const getHuggingFaceResponse = async (
  userInput: UserInput,
  retries: number = MAX_RETRIES,
): Promise<string> => {
  const prompt = `
User consumes ${userInput.slicesPerDay} slices of bread per day and wants to stock for ${userInput.daysToConsume} days, on an average purchase price for bread, is $${userInput.avgPrice}. Available bread options: 
1. Harvest: 10 slices per packet, $2.3 per packet 
2. Britannia: 20 slices per packet, $2.4 per packet. 
Which bread user should buy Britannia or Harvest Gold and why?
`;

  const data = {inputs: prompt};
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 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', // Replace with your Hugging Face API key
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/google/flan-t5-large',
      options,
    );
    const result = await response.json();

    if (result && result.generated_text) {
      return result.generated_text.trim();
    } else {
      throw new Error('No valid content received from Hugging Face API');
    }
  } catch (error) {
    console.error('Error:', error);

    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries}`);
      await new Promise(res => setTimeout(res, RETRY_DELAY));
      return getHuggingFaceResponse(userInput, retries - 1);
    }
    throw new Error(
      'Failed to get Hugging Face response after multiple attempts',
    );
  }
};

//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
