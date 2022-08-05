import pnList from "./pnList.js";

const inputArray = [100, 0.8, 10]; //100 kVA, pF=0.8, 10 min
console.log("input Array: ", inputArray);

const outputArray = ["U3MUPS100KH", "BC1100", "HF12-135W-X"];
console.log("output Array: ", outputArray);

const pnListArrayStrings = pnList.split(`\n`);
console.log("pnList Array: ", pnListArrayStrings);

const pnListArray = pnListArrayStrings.map((string) => string.split(";"));
console.log("pnList Array: ", pnListArray);
