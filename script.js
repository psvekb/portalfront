import pnList from "./pnList.js";
const UPS_EFFICIENCY = 0.94; // КПД ИБП
const kilo = 1000;

const [fullPower, pF, requestedTimeInMinutes, upsFamily] = [
  100,
  0.8,
  10,
  "E3M",
]; //100 kVA, pF=0.8, 10 min
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
// console.log("batteryPowertable: ", batteryPowertable);

// let blockInString = 38; //36 ... 50
// let numberOfStrings = 1; //1..4
let activePower = fullPower * pF;

const getMinBattery = () => {
  for (let strings = 1; strings <= 4; strings++) {
    for (let blockInString = 36; blockInString <= 50; blockInString += 2) {
      let powerFromBlock =
        (activePower / UPS_EFFICIENCY / blockInString / strings) * kilo; //
      let time = //Peukert's law - формула Пекерта
        (
          60 *
          Scal *
          (((Cap * Volt) / powerFromBlock) ** Expo - Rslope)
        ).toFixed(2);
      if (time >= requestedTimeInMinutes) {
        console.log(
          `string x bat : ${strings}x${blockInString} == time ${time} price ${(
            batteryPrice *
            strings *
            blockInString
          ).toFixed(0)} USD`
        );
        return strings * blockInString;
      }
    }
  }
};

for (let i = 0; i < batteryPowertable.length; i++) {
  var [batteryPrice, Rslope, Scal, Expo, Cap, Volt] = batteryPowertable[i];

  console.log(getMinBattery());
}
