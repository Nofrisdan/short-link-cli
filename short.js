import { readFile, writeFile } from "fs/promises";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Link : ", async (link) => {
  // console.log(`Link anda ${link}`);

  const urlRandom = RandomStr(5);
  const baseUrl = "http://localhost:3000/" + urlRandom;
  await saveLink(link, urlRandom);

  console.log(`Your URL short : ${baseUrl}`);
  rl.close();
});

async function saveLink(link, id) {
  // baca file
  const file = await readFile("./data/data.json", "utf-8");
  const data = JSON.parse(file);
  data.push({
    id,
    link,
  });

  // write file
  await writeFile("./data/data.json", JSON.stringify(data));

  return true;
}

function RandomStr(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
