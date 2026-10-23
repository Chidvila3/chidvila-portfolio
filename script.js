

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isOpen);
});
