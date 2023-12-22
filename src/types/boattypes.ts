export interface BmsLog {
  Timestamp: Date;
  MaxAllowableChargingVoltage: string;
  MaxAllowableChargingCurrent: string;
  Control: string;
  MinCellVoltage: string;
  AverageCellVoltage: string;
  TotalVoltage: string;
  Current: string;
  EstimatedCharge: string;
  EstimatedStateOfCharge: string;
}

export interface ChargerLog {
  Timestamp: Date;
  OutputVoltage: string;
  OutputChargingVoltage: string;
  OutputCurrent: string;
  ChargerStatus: string;
}

export interface CoreMCULog {
  Timestamp: Date;
  Mosfet: string;
  OutputVoltage: string;
}

export interface MotorLog {
  Timestamp: Date;
  ActualRPM: string;
  BatteryCurrent: string;
  FaultCode: string;
  Subcode: string;
  MotorCurrent: string;
  DriveStatusIndicator: string;
  SpeedLimitIndicator: string;
  ActualTorque: string;
  TorqueLimitIndicator: string;
  ControllerTemperature: string;
  MotorTemperature: string;
  MotorLimitIndicator: string;
  BatteryVoltage: string;
  DigitalOutputStatus: string;
  BatteryDischargeIndicator: string;
}

export interface ThrottleLog {
  Timestamp: Date;
  MotorSpeed: string;
  CurrentAngle: string;
  TargetAngle: string;
}

export interface BoatData {
  bmsLogs?: BmsLog[];
  chargerLogs?: ChargerLog[];
  coreMCULogs?: CoreMCULog[];
  motorLogs?: MotorLog[];
  throttleLogs?: ThrottleLog[];
}

const generateBmsLog = (): BmsLog => ({
  Timestamp: new Date(),
  MaxAllowableChargingVoltage: "12.5",
  MaxAllowableChargingCurrent: "10",
  Control: "On",
  MinCellVoltage: "3.2",
  AverageCellVoltage: "3.5",
  TotalVoltage: "48",
  Current: "5",
  EstimatedCharge: "80",
  EstimatedStateOfCharge: "High",
});
const generateChargerLog = (): ChargerLog => ({
  Timestamp: new Date(),
  OutputVoltage: "13.5",
  OutputChargingVoltage: "12",
  OutputCurrent: "8",
  ChargerStatus: "Charging",
});

const generateCoreMCULog = (): CoreMCULog => ({
  Timestamp: new Date(),
  Mosfet: "100",
  OutputVoltage: "12",
});

const generateMotorLog = (): MotorLog => ({
  Timestamp: new Date(),
  ActualRPM: "2000",
  BatteryCurrent: "10",
  FaultCode: "None",
  Subcode: "None",
  MotorCurrent: "15",
  DriveStatusIndicator: "On",
  SpeedLimitIndicator: "Off",
  ActualTorque: "20",
  TorqueLimitIndicator: "Off",
  ControllerTemperature: "40",
  MotorTemperature: "50",
  MotorLimitIndicator: "Off",
  BatteryVoltage: "48",
  DigitalOutputStatus: "On",
  BatteryDischargeIndicator: "Off",
});

const generateThrottleLog = (): ThrottleLog => ({
  Timestamp: new Date(),
  MotorSpeed: "1000",
  CurrentAngle: "45",
  TargetAngle: "90",
});

// Mock data generation function
export const MockBoatData = (): BoatData[] => {
  const boatData: BoatData[] = [];

  for (let i = 1; i <= 50; i++) {
    const newBoatData: BoatData = {
      boatSystemId: i,
      boatSystemName: `Victor er sej ${i}`,
      bmsLogs: Array.from({ length: 50 }, generateBmsLog),
      chargerLogs: Array.from({ length: 50 }, generateChargerLog),
      coreMCULogs: Array.from({ length: 50 }, generateCoreMCULog),
      motorLogs: Array.from({ length: 50 }, generateMotorLog),
      throttleLogs: Array.from({ length: 50 }, generateThrottleLog),
    };
    boatData.push(newBoatData);
  }

  return boatData;
};
