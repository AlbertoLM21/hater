document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".neon-button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    console.log("Botones Neón Cargados");
});