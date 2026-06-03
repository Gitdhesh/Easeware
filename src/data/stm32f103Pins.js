export const stm32f103Pins = [
  // ===== LEFT SIDE (PB) =====
  { name: "PB0", side: "left", cy: 68, functions: ["GPIO", "ADC8", "TIM3_CH3"] },
  { name: "PB1", side: "left", cy: 92, functions: ["GPIO", "ADC9", "TIM3_CH4"] },

  { name: "PB6", side: "left", cy: 128, functions: ["GPIO", "I2C1_SCL", "TIM4_CH1"] },
  { name: "PB7", side: "left", cy: 152, functions: ["GPIO", "I2C1_SDA", "TIM4_CH2"] },
  { name: "PB8", side: "left", cy: 176, functions: ["GPIO", "I2C1_SCL", "TIM4_CH3"] },
  { name: "PB9", side: "left", cy: 200, functions: ["GPIO", "I2C1_SDA", "TIM4_CH4"] },

  { name: "PB10", side: "left", cy: 236, functions: ["GPIO", "I2C2_SCL", "USART3_TX"] },
  { name: "PB11", side: "left", cy: 260, functions: ["GPIO", "I2C2_SDA", "USART3_RX"] },

  { name: "PB12", side: "left", cy: 296, functions: ["GPIO", "SPI2_NSS"] },
  { name: "PB13", side: "left", cy: 320, functions: ["GPIO", "SPI2_SCK"] },
  { name: "PB14", side: "left", cy: 344, functions: ["GPIO", "SPI2_MISO"] },
  { name: "PB15", side: "left", cy: 368, functions: ["GPIO", "SPI2_MOSI"] },

  // ===== RIGHT SIDE (PA) =====
  { name: "PA0", side: "right", cy: 68, functions: ["GPIO", "ADC0", "WKUP"] },
  { name: "PA1", side: "right", cy: 92, functions: ["GPIO", "ADC1"] },
  { name: "PA2", side: "right", cy: 116, functions: ["GPIO", "ADC2", "USART2_TX"] },
  { name: "PA3", side: "right", cy: 140, functions: ["GPIO", "ADC3", "USART2_RX"] },

  { name: "PA4", side: "right", cy: 164, functions: ["GPIO", "ADC4", "SPI1_NSS"] },
  { name: "PA5", side: "right", cy: 188, functions: ["GPIO", "ADC5", "SPI1_SCK"] },
  { name: "PA6", side: "right", cy: 212, functions: ["GPIO", "ADC6", "SPI1_MISO"] },
  { name: "PA7", side: "right", cy: 236, functions: ["GPIO", "ADC7", "SPI1_MOSI"] },

  { name: "PA8", side: "right", cy: 260, functions: ["GPIO", "MCO", "TIM1_CH1"] },
  { name: "PA9", side: "right", cy: 284, functions: ["GPIO", "USART1_TX", "TIM1_CH2"] },
  { name: "PA10", side: "right", cy: 308, functions: ["GPIO", "USART1_RX", "TIM1_CH3"] },
  { name: "PA11", side: "right", cy: 332, functions: ["GPIO", "USB_DM", "TIM1_CH4"] },
  { name: "PA12", side: "right", cy: 356, functions: ["GPIO", "USB_DP"] },

  { name: "PA13", side: "right", cy: 380, functions: ["GPIO", "SWDIO", "JTMS"] },
  { name: "PA14", side: "right", cy: 404, functions: ["GPIO", "SWCLK", "JTCK"] },

  { name: "PC13", side: "right", cy: 428, functions: ["GPIO", "LED"] }
];
