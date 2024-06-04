from openai import OpenAI

client = OpenAI(
  organization='ORG_ID',
  project='PROJECT_ID',
)

# bearer:expected python_third_parties_openai
stream = client.chat.completions.create(
  model="gpt-number-next",
  messages=[{"role": "user", "content": f"Say hello to {current_user.fullname}"}],
  stream=True,
)