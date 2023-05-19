import { OpenAI } from "langchain/llms/openai";
import promptSync from 'prompt-sync';
const prompt = promptSync();
const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY!, temperature: 0 });
while (true) {
  const UserInput: string = prompt('User ==>  ');
  const res = await model.call(UserInput);
  if (res === 'exit()') {
    break;
  }
  console.log(res);
} 


