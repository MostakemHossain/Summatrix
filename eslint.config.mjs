import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends:["next/core-web-vitals","next/typescript","prettier",
      "plugin:tailwindcss/recommended",
    ],
    plugins:["prettier"],
    rules: {
      "prettier/prettier": "error",
      "react/no-escape-entries":"off"
    }
  })
];

export default eslintConfig;
