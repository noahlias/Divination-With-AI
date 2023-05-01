import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f916",
    name: "Tarot reader",
    context: [
      {
        role: "user",
        content:
          'I will accept your question and use a virtual Tarot deck for a Tarot reading. Please note that I will shuffle the deck before drawing three random cards. I will also introduce the deck that I am using in this reading. Please provide your question, and I will proceed with the reading',
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
  },
  {
    avatar: "1f916",
    name: "The role of a traditional Chinese astrology expert",
    context: [
      {
        role: "user",
        content:"Assuming the role of a traditional Chinese astrology expert who reads a person's fate based on their birthdate, I will provide you with my birthday and ask you to calculate my fate. Please analyze my Five Elements attributes, auspicious and inauspicious fortunes, wealth, marriage, health, career, and provide me with relevant guidance and advice.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
  }
];
