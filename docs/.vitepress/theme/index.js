import ElementPlus from "element-plus";
import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
  },
}
