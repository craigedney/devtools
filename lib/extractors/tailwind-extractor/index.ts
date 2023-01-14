export const extractValues = (
  obj: object,
  format: "JSON" | "CSS" | "SCSS"
): string {
  let output = "";

  if (format === "JSON") {
    output = JSON.stringify(obj, null, 2);
  } else if (format === "CSS") {
    output += ":root {\n";
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        for (const subKey in obj[key]) {
          output += `    --${key}-${subKey}: "${obj[key][subKey]}";\n`;
        }
      } else {
        output += `    --${key}: "${obj[key]}";\n`;
      }
    }
    output += "}";
  } else if (format === "SCSS") {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        output += `$${key}: (\n`;
        for (const subKey in obj[key]) {
          output += `        ${subKey}: "${obj[key][subKey]}",\n`;
        }
        output += ");\n";
      } else {
        output += `$${key}: "${obj[key]}";\n`;
      }
    }
  }

  return output;
}
