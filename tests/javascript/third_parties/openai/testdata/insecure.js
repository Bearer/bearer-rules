const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

// bearer:expected javascript_third_parties_openai
const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Hello world ${user.email}`,
})
console.log(completion.data.choices[0].text)
