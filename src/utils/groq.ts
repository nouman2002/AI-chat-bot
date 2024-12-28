import { searchProducts, formatPrice } from './productUtils';

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

function generateProductContext(): string {
  return `You are a knowledgeable retail assistant with access to our product catalog. 
Here are some key points about our inventory:
- We offer various categories including Shirts, Pants, Dresses, Jackets, T-Shirts, and Skirts
- Sizes available are S, M, L, and XL
- Prices range from $9.99 to $99.99
- All items have real-time stock tracking`;
}

export async function getAIResponse(message: string, language: string): Promise<string> {
  // Search for relevant products based on the user's message
  const relevantProducts = searchProducts(message);
  let productContext = '';
  
  if (relevantProducts.length > 0) {
    productContext = `\nRelevant products:\n${relevantProducts.map(p => 
      `- ${p.name} (${p.color}, ${p.size}): ${formatPrice(p.price)}, ${p.stockQuantity} in stock`
    ).join('\n')}`;
  }

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: `${generateProductContext()}${productContext}\nRespond in ${language}.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling GROQ API:', error);
    return 'I apologize, but I encountered an error processing your request. Please try again.';
  }
}