import 'dotenv/config';
import { OpenAI } from "langchain/llms/openai";
import promptSync from 'prompt-sync';
const prompt = promptSync();
const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9 });
while (true) {
    const name = prompt('What is your name?');
    const res = await model.call(name);
    console.log(res);
}
