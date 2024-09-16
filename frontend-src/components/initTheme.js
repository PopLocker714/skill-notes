export const initTheme = () => {
  const body = document.querySelector("html");

  if (localStorage.getItem("theme") === "dark") {
    body?.classList.add("dark");
    return;
  }

  if (localStorage.getItem("theme") === "light") {
    body?.classList.add("light");
    return;
  }

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkMode) {
    body?.classList.add("dark");
  } else {
    body?.classList.add("light");
  }
};
