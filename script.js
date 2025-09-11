// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Tema claro / oscuro
const btn = document.getElementById("toggle-theme");
btn.addEventListener("click", () => {

    if (document.documentElement.getAttribute("data-theme") === "light") {
        document.documentElement.removeAttribute("data-theme");

    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
});