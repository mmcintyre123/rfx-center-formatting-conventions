import { GeneralObject } from "./util";

export const defaultSettings = [
  { "[html]": { "editor.defaultFormatter": "vscode.html-language-features" } },
  { "[typescript]": { "editor.defaultFormatter": "vscode.typescript-language-features" } },
  { "[css]": { "editor.defaultFormatter": "michelemelluso.code-beautifier" } },
  { "[scss]": { "editor.defaultFormatter": "michelemelluso.code-beautifier" } },
  { "[javascript]": { "editor.defaultFormatter": "vscode.typescript-language-features" } },
  { "[json]": { "editor.defaultFormatter": "vscode.json-language-features" } },
  { "[jsonc]": { "editor.defaultFormatter": "vscode.json-language-features" } },
  { "[shellscript]": { "editor.defaultFormatter": "foxundermoon.shell-format" } },
  { "[xml]": { "editor.defaultFormatter": "redhat.vscode-xml" } },
  { "[java]": { "editor.defaultFormatter": "redhat.java", "editor.rulers": [200], "editor.wordWrap": "off" } },
  { "[sql]": { "editor.defaultFormatter": "mtxr.sqltools" } }
] as GeneralObject[];
