import pnList from "./pnList.js";
const UPS_EFFICIENCY = 0.94; // КПД ИБП
const KILO = 1000;

// get from API in future
const {
  upsFamily,
  outputPower,
  LoadpF,
  redundancy,
  actualLoadPercentage,
  batteryRuntime,
  batteryTypeAndPlacement,
  ingressProtection,
} = {
  upsFamily: "E3M",
  outputPower: 100, //kVA
  LoadpF: 0.8,
  redundancy: "N",
  actualLoadPercentage: 100, // %
  batteryRuntime: 10, //min
  batteryTypeAndPlacement: "racks",
  ingressProtection: "IP20",
}; //100 kVA, LoadpF=0.8, 10 min
// console.log("input Array: ", inputArray);

const outputArray = ["U3MUPS100KH", "BC1100", "HF12-135W-X"];
console.log("output Array: ", outputArray);

const pnListArrayStrings = pnList.split(`\n`);
// console.log("pnList Array: ", pnListArrayStrings);

const pnListArray = pnListArrayStrings.map((string) => string.split(";"));

const batteryInfoStartIndex = 41;
const batteryInfoEndIndex = batteryInfoStartIndex + 21;
const batteryPowerStartIndex = 8;
const batteryPowerEndIndex = batteryPowerStartIndex + 6;

const batteryPowertable = pnListArray
  .slice(batteryInfoStartIndex, batteryInfoEndIndex)
  .map((row) => row.slice(batteryPowerStartIndex, batteryPowerEndIndex));

let powerFromBattery = outputPower * LoadpF * (actualLoadPercentage / 100);

const getMinimumBatteryLength = (batteryPower) => {
  let [batteryPrice, Rslope, Scal, Expo, Cap, Volt] = batteryPower;

  for (let strings = 1; strings <= 4; strings++) {
    for (let blockInString = 36; blockInString <= 50; blockInString += 2) {
      let powerFromBlock =
        (powerFromBattery / UPS_EFFICIENCY / blockInString / strings) * KILO; //
      let time = //Peukert's law - формула Пекерта
        (
          60 *
          Scal *
          (((Cap * Volt) / powerFromBlock) ** Expo - Rslope)
        ).toFixed(2);
      if (time >= batteryRuntime) {
        console.log(
          `string x bat : ${strings}x${blockInString} == time ${time} price ${(
            batteryPrice *
            strings *
            blockInString
          ).toFixed(0)} USD`
        );
        return [strings, blockInString, batteryPrice * strings * blockInString];
      }
    }
  }
  return false;
};

const getBatteryVariantsTable = (batteryPowertable) => {
  let batteryCalculatedLengthPriceTable = [];
  for (let i = 0; i < batteryPowertable.length; i++) {
    let batteryPower = batteryPowertable[i];
    let search = getMinimumBatteryLength(batteryPower);
    if (search) {
      batteryCalculatedLengthPriceTable.push([i, ...search]);
    }
  }
  batteryCalculatedLengthPriceTable.sort((a, b) => a[3] - b[3]);

  return batteryCalculatedLengthPriceTable;
};

console.log(getBatteryVariantsTable(batteryPowertable));
