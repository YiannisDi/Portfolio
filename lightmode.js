const themeSwitch = document.getElementById("theme-switch");
const THEME_KEY = "lightmode";

function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme === "active") {
        return "light";
    }
    if (savedTheme === "inactive") {
        return "dark";
    }
    
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
    }
    
    return "dark";
}

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("lightmode");
        themeSwitch.setAttribute("aria-pressed", "true");
    } else {
        document.body.classList.remove("lightmode");
        themeSwitch.setAttribute("aria-pressed", "false");
    }
}

function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme === "light" ? "active" : "inactive");
}

function toggleTheme() {
    const isLightMode = document.body.classList.contains("lightmode");
    const newTheme = isLightMode ? "dark" : "light";
    
    applyTheme(newTheme);
    saveTheme(newTheme);
}

const initialTheme = getInitialTheme();
applyTheme(initialTheme);
saveTheme(initialTheme);

themeSwitch.addEventListener("click", toggleTheme);

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (!savedTheme || savedTheme === "null") {
        const newTheme = e.matches ? "light" : "dark";
        applyTheme(newTheme);
    }
});