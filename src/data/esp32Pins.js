// ESP32-WROOM-32 (Dev Module) pinout
// Normalized for pill-based tooltip system

const START_Y = 60;
const GAP = 22;

const esp32Pins = [
  // ===== LEFT SIDE =====
  { pin: "3V3", side: "left", y: START_Y + 0 * GAP, functions: ["POWER"] },
  { pin: "EN", side: "left", y: START_Y + 1 * GAP, functions: ["RESET"] },

  { pin: "GPIO36", side: "left", y: START_Y + 2 * GAP, functions: ["GPIO", "ADC", "INPUT_ONLY"] },
  { pin: "GPIO39", side: "left", y: START_Y + 3 * GAP, functions: ["GPIO", "ADC", "INPUT_ONLY"] },
  { pin: "GPIO34", side: "left", y: START_Y + 4 * GAP, functions: ["GPIO", "ADC", "INPUT_ONLY"] },
  { pin: "GPIO35", side: "left", y: START_Y + 5 * GAP, functions: ["GPIO", "ADC", "INPUT_ONLY"] },

  { pin: "GPIO32", side: "left", y: START_Y + 6 * GAP, functions: ["GPIO", "ADC", "TOUCH"] },
  { pin: "GPIO33", side: "left", y: START_Y + 7 * GAP, functions: ["GPIO", "ADC", "TOUCH"] },

  { pin: "GPIO25", side: "left", y: START_Y + 8 * GAP, functions: ["GPIO", "DAC", "PWM"] },
  { pin: "GPIO26", side: "left", y: START_Y + 9 * GAP, functions: ["GPIO", "DAC", "PWM"] },

  { pin: "GPIO27", side: "left", y: START_Y + 10 * GAP, functions: ["GPIO", "TOUCH"] },

  { pin: "GPIO14", side: "left", y: START_Y + 11 * GAP, functions: ["GPIO", "SPI_CLK", "PWM"] },
  { pin: "GPIO12", side: "left", y: START_Y + 12 * GAP, functions: ["GPIO", "SPI_MISO", "BOOT"] },

  { pin: "GND", side: "left", y: START_Y + 13 * GAP, functions: ["GND"] },

  { pin: "GPIO13", side: "left", y: START_Y + 14 * GAP, functions: ["GPIO", "SPI_MOSI", "PWM"] },

  { pin: "GPIO9", side: "left", y: START_Y + 15 * GAP, functions: ["FLASH"] },
  { pin: "GPIO10", side: "left", y: START_Y + 16 * GAP, functions: ["FLASH"] },
  { pin: "GPIO11", side: "left", y: START_Y + 17 * GAP, functions: ["FLASH"] },

  { pin: "5V", side: "left", y: START_Y + 18 * GAP, functions: ["POWER"] },

  // ===== RIGHT SIDE =====
  { pin: "GND", side: "right", y: START_Y + 0 * GAP, functions: ["GND"] },

  { pin: "GPIO23", side: "right", y: START_Y + 1 * GAP, functions: ["GPIO", "SPI_MOSI", "PWM"] },
  { pin: "GPIO22", side: "right", y: START_Y + 2 * GAP, functions: ["GPIO", "I2C_SCL"] },

  { pin: "GPIO1", side: "right", y: START_Y + 3 * GAP, functions: ["GPIO", "UART_TX"] },
  { pin: "GPIO3", side: "right", y: START_Y + 4 * GAP, functions: ["GPIO", "UART_RX"] },

  { pin: "GPIO21", side: "right", y: START_Y + 5 * GAP, functions: ["GPIO", "I2C_SDA"] },

  { pin: "GND", side: "right", y: START_Y + 6 * GAP, functions: ["GND"] },

  { pin: "GPIO19", side: "right", y: START_Y + 7 * GAP, functions: ["GPIO", "SPI_MISO", "PWM"] },
  { pin: "GPIO18", side: "right", y: START_Y + 8 * GAP, functions: ["GPIO", "SPI_CLK", "PWM"] },
  { pin: "GPIO5", side: "right", y: START_Y + 9 * GAP, functions: ["GPIO", "SPI_CS"] },

  { pin: "GPIO17", side: "right", y: START_Y + 10 * GAP, functions: ["GPIO", "UART2_TX"] },
  { pin: "GPIO16", side: "right", y: START_Y + 11 * GAP, functions: ["GPIO", "UART2_RX"] },

  { pin: "GPIO4", side: "right", y: START_Y + 12 * GAP, functions: ["GPIO", "TOUCH"] },

  { pin: "GPIO0", side: "right", y: START_Y + 13 * GAP, functions: ["BOOT"] },
  { pin: "GPIO2", side: "right", y: START_Y + 14 * GAP, functions: ["GPIO", "BOOT", "LED"] },

  { pin: "GPIO15", side: "right", y: START_Y + 15 * GAP, functions: ["GPIO", "SPI_CS"] },

  { pin: "GPIO8", side: "right", y: START_Y + 16 * GAP, functions: ["FLASH"] },
  { pin: "GPIO7", side: "right", y: START_Y + 17 * GAP, functions: ["FLASH"] },
  { pin: "GPIO6", side: "right", y: START_Y + 18 * GAP, functions: ["FLASH"] },
];

export default esp32Pins;
