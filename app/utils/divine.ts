// 投掷圣杯的结果类型
export type DivineResult = {
  isHoly: boolean;  // 是否为圣杯
  message: string;  // 提示信息
};

// 投掷圣杯的概率配置
const HOLY_CUP_PROBABILITY = 0.5; // 50% 的概率出现圣杯

// 投掷圣杯
export function throwHolyCup(): DivineResult {
  const random = Math.random();
  
  if (random < HOLY_CUP_PROBABILITY) {
    return {
      isHoly: true,
      message: "恭喜，您得到了圣杯，这是一个吉兆！"
    };
  } else {
    return {
      isHoly: false,
      message: "您得到了阴杯，建议重新求签。"
    };
  }
}
