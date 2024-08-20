(function () {
    const theme = "system";

    function applyTheme(mode) {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        const toggles = document.querySelectorAll("[data-aw-toggle-color-scheme] > input");
        if (toggles && toggles.length) {
            toggles.forEach((toggle) => {
                toggle.checked = mode !== "dark";
            });
        }
    }

    if (theme && !theme.endsWith(":only")) {
        const savedTheme = localStorage.theme;
        if (savedTheme) {
            applyTheme(theme.replace(":only", ""));
        } else if ("dark" === savedTheme || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    }
})();
