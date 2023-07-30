import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async (event) => {
  try {
    const configuration = new Configuration({
      apiKey: "",
    });
    const openai = new OpenAIApi(configuration);
    const body = await readBody(event);
    const { prompt } = body;
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt,
    });

    return completion.data.choices[0].text;
  } catch (e) {
    console.log("Error ", e);
    return e;
  }
});
