export interface scatterData {
  type: string;
  torque: number;
  value: number;
}

export const MockScatterData = (): scatterData[] => {
  const scatterData: scatterData[] = [];
  for (let i = 0; i < 400; i++) {
    scatterData.push(
      {
        type: "amps",
        torque: Math.random() * 200, // Random torque between 0 and 200
        value: Math.random() * 200, // Random value between 0 and 200 (amps max)
      },
      {
        type: "watts",
        torque: Math.random() * 200, // Random torque between 0 and 200
        value: Math.random() * 10000, // Random value between 0 and 10000 (watts max)
      },
      {
        type: "volts",
        torque: Math.random() * 200, // Random torque between 0 and 200
        value: Math.random() * 100, // Random value between 0 and 100 (volts max)
      },
      {
        type: "eff",
        torque: Math.random() * 200, // Random torque between 0 and 200
        value: Math.random(), // Random value between 0 and 1 (eff max)
      },
      {
        type: "RPM",
        torque: Math.random() * 200, // Random torque between 0 and 200
        value: Math.random() * 5000, // Random value between 0 and 5000 (RPM max)
      },
    );
  }
  return scatterData;
};
