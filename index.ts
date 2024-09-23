import { ModelOperations } from "@vscode/vscode-languagedetection";

if (Bun.argv.length !== 3) {
  console.error("Usage: guesslang-bun <file>");
  process.exit(1);
}

const filePath = Bun.argv[2];
const fileContents = await Bun.file(filePath).text();

const modelOperations = new ModelOperations();

const result = await modelOperations.runModel(fileContents);

console.log(result[0].languageId);
