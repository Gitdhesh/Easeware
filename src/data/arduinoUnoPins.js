const arduinoUnoPins = [
  // ===== POWER =====
  { pin: "IOREF", side: "left", functions: ["POWER"] },
  { pin: "RESET", side: "left", functions: ["RESET"] },
  { pin: "3.3V", side: "left", functions: ["POWER"] },
  { pin: "5V", side: "left", functions: ["POWER"] },
  { pin: "GND", side: "left", functions: ["GND"] },
  { pin: "GND", side: "left", functions: ["GND"] },
  { pin: "VIN", side: "left", functions: ["POWER"] },

  // ===== ANALOG =====
  { pin: "A0", side: "left", functions: ["ANALOG"] },
  { pin: "A1", side: "left", functions: ["ANALOG"] },
  { pin: "A2", side: "left", functions: ["ANALOG"] },
  { pin: "A3", side: "left", functions: ["ANALOG"] },
  { pin: "A4", side: "left", functions: ["ANALOG", "I2C"] }, // SDA
  { pin: "A5", side: "left", functions: ["ANALOG", "I2C"] }, // SCL

  // ===== DIGITAL =====
  { pin: "D0", side: "right", functions: ["UART"] }, // RX
  { pin: "D1", side: "right", functions: ["UART"] }, // TX
  { pin: "D2", side: "right", functions: ["GPIO", "INTERRUPT"] },
  { pin: "D3", side: "right", functions: ["GPIO", "PWM", "INTERRUPT"] },
  { pin: "D4", side: "right", functions: ["GPIO"] },
  { pin: "D5", side: "right", functions: ["GPIO", "PWM"] },
  { pin: "D6", side: "right", functions: ["GPIO", "PWM"] },
  { pin: "D7", side: "right", functions: ["GPIO"] },
  { pin: "D8", side: "right", functions: ["GPIO"] },
  { pin: "D9", side: "right", functions: ["GPIO", "PWM"] },
  { pin: "D10", side: "right", functions: ["GPIO", "PWM", "SPI"] }, // SS
  { pin: "D11", side: "right", functions: ["GPIO", "PWM", "SPI"] }, // MOSI
  { pin: "D12", side: "right", functions: ["GPIO", "SPI"] },        // MISO
  { pin: "D13", side: "right", functions: ["GPIO", "SPI", "LED"] }, // SCK
];

export default arduinoUnoPins;

