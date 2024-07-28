import parser from "jsonc-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["!**/*", "**/node_modules"],
}, ...compat.extends("./.eslintrc.base.json"), {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {},
}, {
    files: ["**/*.js", "**/*.jsx"],
    rules: {},
}, {
    files: ["**/*.json"],

    languageOptions: {
        parser: parser,
    },

    rules: {
        "@nx/dependency-checks": ["error", {
            ignoredFiles: ["{projectRoot}/vite.config.{js,ts,mjs,mts}"],
        }],
    },
}];