// @ts-check
import "./auth.css";
import "@material/web/elevation/elevation.js";
import "@material/web/switch/switch.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/icon/icon.js";

import { toggleTheme } from "../../components/toggleTheme";

/** @type {(app: Element) => void} */
export const AuthScreen = (app) => {
  app.innerHTML = `
    <div class="auth-container">
      <div class="auth-card" id="md-elevation-auth">
        <md-elevation></md-elevation>
        <form class="auth-card-content" action="">
          <h1>Авторизация</h1>
          <md-outlined-text-field class="auth-input-name" label="Имя">
            <md-icon slot="leading-icon">
              <span class="material-icons">person</span>
            </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field class="auth-input-password" label="Пароль" type="password">
            <md-icon slot="leading-icon">
              <span class="material-icons">key</span>
            </md-icon>
          </md-outlined-text-field>

          <div class="auth-buttons">
            <md-button class="md-raised md-primary">Войти</md-button>
            <md-button class="md-raised md-outlined">Зарегистрироваться</md-button>
          </div>
        </form>
      </div>
      <div class="toggle-container">
        Toggle theme
        <md-switch
          id="theme-switch"
          aria-label="theme"
          ${localStorage.getItem("theme") === "dark" ? "selected" : ""}
        >
        </md-switch>
      </div>
    </div>
  `;

  const elevation = document.querySelector("#md-elevation-auth");
  const switchTheme = document.querySelector("#theme-switch");



  switchTheme?.addEventListener("change", (e) => {
    toggleTheme();
  });
  setTimeout(() => {
    elevation?.classList.add("active");
  }, 300);
};
