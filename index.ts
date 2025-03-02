import { ModelOperations } from "@vscode/vscode-languagedetection";
import model from "./model.json" with { type: "file" };

if (Bun.argv.length !== 3) {
  console.error("Usage: guesslang-bun <file>");
  process.exit(1);
}

const filePath = Bun.argv[2];
const fileContents = await Bun.file(filePath).text();

const modelOperations = new ModelOperations({
  modelJsonLoaderFunc: async (): Promise<{[key: string]: any}> => {
    return model;
  }
});

const result = await modelOperations.runModel(fileContents);

console.log(result[0].languageId);
