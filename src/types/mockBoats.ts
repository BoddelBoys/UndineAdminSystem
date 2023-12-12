export interface BmsLog {
    timestamp: Date;
    maxAllowableChargingVoltage: string;
    maxAllowableChargingCurrent: string;
    control: string;
    minCellVoltage: string;
    averageCellVoltage: string;
    totalVoltage: string;
    current: string;
    estimatedCharge: string;
    estimatedStateOfCharge: string;
}

export interface ChargerLog {
    timestamp: Date;
    outputVoltage: string;
    outputChargingVoltage: string;
    outputCurrent: string;
    chargerStatus: string;
}

export interface CoreMCULog {
    timestamp: Date;
    mosfet: string;
    outputVoltage: string;
}

export interface MotorLog {
    timestamp: Date;
    actualRPM: string;
    batteryCurrent: string;
    faultCode: string;
    subcode: string;
    motorCurrent: string;
    driveStatusIndicator: string;
    speedLimitIndicator: string;
    actualTorque: string;
    torqueLimitIndicator: string;
    controllerTemperature: string;
    motorTemperature: string;
    motorLimitIndicator: string;
    batteryVoltage: string;
    digitalOutputStatus: string;
    batteryDischargeIndicator: string;
}

export interface ThrottleLog {
    timestamp: Date;
    motorSpeed: string;
    currentAngle: string;
    targetAngle: string;
}

export interface BoatData {
    boatSystemId: number;
    boatSystemName: string;
    bmsLogs?: BmsLog[];
    chargerLogs?: ChargerLog[];
    coreMCULogs?: CoreMCULog[];
    motorLogs?: MotorLog[];
    throttleLogs?: ThrottleLog[];
}

const generateBmsLog = (): BmsLog => ({
    timestamp: new Date(),
    maxAllowableChargingVoltage: '12.5',
    maxAllowableChargingCurrent: '10',
    control: 'On',
    minCellVoltage: '3.2',
    averageCellVoltage: '3.5',
    totalVoltage: '48',
    current: '5',
    estimatedCharge: '80',
    estimatedStateOfCharge: 'High',
  });
const generateChargerLog = (): ChargerLog => ({
    timestamp: new Date(),
    outputVoltage: '13.5',
    outputChargingVoltage: '12',
    outputCurrent: '8',
    chargerStatus: 'Charging',
});

const generateCoreMCULog = (): CoreMCULog => ({
    timestamp: new Date(),
    mosfet: '100',
    outputVoltage: '12',
});

const generateMotorLog = (): MotorLog => ({
    timestamp: new Date(),
    actualRPM: '2000',
    batteryCurrent: '10',
    faultCode: 'None',
    subcode: 'None',
    motorCurrent: '15',
    driveStatusIndicator: 'On',
    speedLimitIndicator: 'Off',
    actualTorque: '20',
    torqueLimitIndicator: 'Off',
    controllerTemperature: '40',
    motorTemperature: '50',
    motorLimitIndicator: 'Off',
    batteryVoltage: '48',
    digitalOutputStatus: 'On',
    batteryDischargeIndicator: 'Off',
});

const generateThrottleLog = (): ThrottleLog => ({
    timestamp: new Date(),
    motorSpeed: '1000',
    currentAngle: '45',
    targetAngle: '90',
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