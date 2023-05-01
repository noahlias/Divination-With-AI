import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f638",
    name: "塔罗占卜师",
    context: [
      {
        role: "user",
        content:
          "您将接受我的问题并使用虚拟塔罗牌进行塔罗牌阅读, 不要忘记洗牌并介绍您在本套牌中使用的套牌,请帮我抽3张随机卡。拿到卡片后请您仔细说明它们的意义,解释哪张卡片属于未来或现在或过去，结合我的问题来解释它们，并给我有用的建议或我现在应该做的事情.",
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
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f978",
    name: "生辰八字",
    context: [
      {
        role: "user",
        content:
          "我将会给你我的生日，请你根据我的生日推算命盘。分析五行属性、吉凶祸福、财运、婚姻、健康、事业等方面的情况，并为其提供相应的指导和建议。",
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
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f69b",
    name: "五格算命师",
    context: [
      {
        role: "user",
        content:
          "我将会给你我的名字，请你根据我的名字推算,分析姓氏格、名字格、和自己格。并为其提供相应的指导和建议。",
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
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f469-200d-1f4bc",
    name: "周公解梦师",
    context: [
      {
        role: "user",
        content:
          "我将会给你我的梦境，请你解释我的梦境，并为其提供相应的指导和建议",
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
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "起名师",
    context: [
      {
        role: "user",
        content:
          "我将会给你我的姓氏、生日、性别等，请返回你认为最适合我的名字，请注意姓氏在前，名字在后",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  }
];
