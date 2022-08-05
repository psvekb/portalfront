import pnList from "./pnList.js";
const UPS_EFFICIENCY = 0.94; // КПД ИБП
const kilo = 1000;

const [fullPower, pF, timeInMinutes, upsFamily] = [100, 0.8, 10, "E3M"]; //100 kVA, pF=0.8, 10 min
// console.log("input Array: ", inputArray);

const outputArray = ["U3MUPS100KH", "BC1100", "HF12-135W-X"];
console.log("output Array: ", outputArray);

const pnListArrayStrings = pnList.split(`\n`);
// console.log("pnList Array: ", pnListArrayStrings);

const pnListArray = pnListArrayStrings.map((string) => string.split(";"));

const batteryInfoStartIndex = 41;
const batteryInfoEndIndex = batteryInfoStartIndex + 21;
const batteryPowerStartIndex = 9;
const batteryPowerEndIndex = batteryPowerStartIndex + 5;

const batteryPowertable = pnListArray
  .slice(batteryInfoStartIndex, batteryInfoEndIndex)
  .map((row) => row.slice(batteryPowerStartIndex, batteryPowerEndIndex));
// console.log("batteryPowertable: ", batteryPowertable);

// let blockInString = 38; //36 ... 50
// let numberOfStrings = 1; //1..4
let activePower = fullPower * pF;

let [Rslope, Scal, Expo, Cap, Volt] = [0.094, 0.575, 1.213, 45.0, 12];

for (let strings = 1; strings <= 4; strings++) {
  for (let blockInString = 36; blockInString <= 50; blockInString += 2) {
    let powerFromBlock =
      (activePower / UPS_EFFICIENCY / blockInString / strings) * kilo; //
    // console.log("powerFormBlock : ", powerFromBlock);
    let time = (
      60 *
      Scal *
      (((Cap * Volt) / powerFromBlock) ** Expo - Rslope)
    ).toFixed(2);
    console.log(`string x bat : ${strings}x${blockInString} == time ${time}`);
  }
}
