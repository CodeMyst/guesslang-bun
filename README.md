# guesslang-bun

To install dependencies:

```bash
bun install
```

Copy the model.json and weights file from the vscode-languagedetection package:

```bash
cp node_modules/@vscode/vscode-languagedetection/model/model.json .
cp node_modules/@vscode/vscode-languagedetection/model/group1-shard1of1.bin .
```

To build as a standalone executable:

```bash
bun build index.ts --compile --outfile guesslang-bun --assets model.json group1-shard1of1.bin
```

To run the executable:

```bash
./guesslang-bun path-to-file
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
