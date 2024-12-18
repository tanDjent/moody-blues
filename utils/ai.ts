import { OpenAI } from "langchain/llms/openai"

export const analyze = async (prompt) => {
  const model = new OpenAI({ temperature: 0, modelName: "gpt-4o-mini" })
  const result = await model.call(prompt)
  console.log(result)
}
