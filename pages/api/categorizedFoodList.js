import axios from 'axios';

export default async function handler(req, res) {
  const { foodList } = req.body;

  const foodNames = foodList.map(item => item.name);

  const promptString = "You are an AI model trained by OpenAI with extensive language understanding capabilities. I need your help to categorize the following food items into appropriate categories such as fruits, vegetables, dairy, meat, and grains. \n\nYour task is to list each category, followed by a colon. Then list the items in that category, each separated by a comma. If a category does not contain any of the provided food items, please specify it as 'None'. \n\nHere is the exact format and order I want you to follow:\n\n'Fruits: item1, item2\nVegetables: item3, item4\nDairy: None\nMeat: item5\nGrains: item6, item7'\n\nPlease stick to this format and order strictly. It is crucial for the processing of the data. Now, please categorize the following items: ";

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo-0613',
        messages: [
          {
            role: 'system',
            content: 'You are a smart kitchen assistant. Categorize the following food items into appropriate categories like fruits, vegetables, dairy, meat, and grains.',
          },
          {
            role: 'user',
            content: `${promptString} ${foodNames.join(", ")}`,
          },
        ],
        max_tokens: 1500,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      }
    );

    const generatedCategories = response.data.choices[0].message.content;
    console.log("Generated Categories:", generatedCategories);

    const categories = {};
    const lines = generatedCategories.split('\n');
    for (const line of lines) {
      if(line) {
        const [category, items] = line.split(':');
        categories[category] = items && items.split(',').map(item => item.trim());
      }
    }

    res.status(200).json({ categorizedFoodList: categories });
  } catch (error) {
    console.error('Error categorizing food items:', error.message );
    res.status(500).json({ error: 'Failed to categorize food items' });
  }
}
