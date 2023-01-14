import { extractValues } from "./index";

const obj = {
  firstKey: "",
  secondKey: "",
  thirdKey: {
    firstSubKey: "",
    secondSubKey: "",
    thirdSubKey: "",
  },
};
console.log(extractValues(obj, "JSON"));
console.log(extractValues(obj, "CSS"));
console.log(extractValues(obj, "SCSS"));
