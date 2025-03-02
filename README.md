# guesslang-bun

To install dependencies:

```bash
bun install
```

Copy the model.json file from the vscode-languagedetection package:

```bash
cp node_modules/@vscode/vscode-languagedetection/model/model.json .
```

To build as a standalone executable:

```bash
bun build index.ts --compile --outfile guesslang-bun --assets model.json
```

To run the executable:

```bash
./guesslang-bun path-to-file
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
