import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  // 全ソースでの設定
  {
    files: ["**/*.{js,mjs,ts,mts}"], // 解析対象の拡張子
    // モジュールで指定されているルールの読み込み
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    // ユーザが追加で定義できるルール
    rules: {
      // エラー部分(CI通らない)
      semi: ["error", "always"], // 末尾にセミコロンがない場合エラー
      strict: ["error", "global"], // 常に厳格モード
      // 警告部分
      quotes: ["warn", "double"], // 文字列を " で括っていないと警告
      // 参考: https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint
      // if 文などの条件式が入るところに boolean 以外の型を認めない
      "@typescript-eslint/strict-boolean-expressions": [
        "warn",
        {
          "allowString": false,
          "allowNumber": false,
          "allowNullableObject": false,
        }
      ],
      // 暗黙の型強制を禁じる(適切なキャストで解決可)
      "no-implicit-coercion": "warn",
      // 異なる型同士の演算を禁じる(適切なキャストで解決可)
      "@typescript-eslint/restrict-plus-operands": [
        "warn",
        {
          "allowBoolean": false,
          "allowNullish": false,
          "allowNumberAndString": false,
          "allowRegExp": false,
          "allowAny": false
        }
      ],
    },
    // 実行環境・構文解析の設定
    languageOptions: {
      // 実行環境の設定
      globals: {
        ...globals.browser, // ブラウザで実行
        ...globals.node, // node で実行
      },
    },
  },
  // typescript 用の設定
  {
    files: ["**/*.{ts,mts}"],
    // ts 用の構文解析
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  {
    ignores: ["dist", "eslint.config.mjs"], // トランスパイル後のコードとこのファイルを対象外とする
  },
]);
