import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import { name } from "./package.json";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { babel } from "@rollup/plugin-babel";

// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import Unocss from 'unocss/vite'
// https://vitejs.dev/config/

export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [
    vue(),
    vueJsx({
      // 排除所有react_app目录
      exclude: [/[/\\]react_app[\\/$]+/],
    }),
    babel({
      exclude: [/node_modules/],
      presets: [
        // 需要提前安装 @vue/cli-plugin-babel
        "@vue/cli-plugin-babel/preset",
        "veaury/babel/ReactPreset",
      ],
      babelHelpers: "runtime",
    }),
  ],
  build: {
    lib: {
      name,
      entry: "src/index.ts",
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        //In UMD build mode, a global variable is provided for these externalized dependencies
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
});
