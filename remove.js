import { writeFile } from "fs/promises";

try {
  const data = [];
  await writeFile("./data/data.json", JSON.stringify(data));

  console.log("Data has Been Remove all");
} catch (error) {
  console.log(error.message);
}
