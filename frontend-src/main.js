// @ts-check
import "./style.css";

import "./themes/1/light.css";
import "./themes/1/dark.css";

import 'material-icons/iconfont/material-icons.css';

// import javascriptLogo from "/javascript.svg";
// import viteLogo from "/vite.svg";

// import "@material/web/button/filled-button.js";
// import "@material/web/button/outlined-button.js";
// import "@material/web/checkbox/checkbox.js";

import Navigo from "navigo";
import { AuthScreen } from "./screens/auth/auth";
import { initTheme } from "./components/initTheme";

const app = document.querySelector("#app");

initTheme();

if (app) {
  const router = new Navigo("/", { hash: true });

  router.notFound(() => {
    app.innerHTML = `
    <h1>404</h1>
    `;
  });

  router.on("/dashboard", () => {
    app.innerHTML = `
    <h1>Dashboard</h1>
    `;
  });

  router.on("/", () => {
    AuthScreen(app);
  });

  if (localStorage.getItem("jwt")) {
    router.navigate("/dashboard");
  } else {
    router.navigate("/");
  }

  router.resolve();
}
