export const toggleTheme = () => {
  const body = document.querySelector("body");
  const isDarkMode = localStorage.getItem("theme") === "dark";
  if (body) {
    console.log(isDarkMode);
    if (isDarkMode) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
};
