const share_container = document.querySelector(".share");
const share_toggle = document.querySelector('button[aria-controls="share"]');

share_toggle.addEventListener("click", () => {
    if (share_toggle.getAttribute("aria-expanded") === "false") {
        share_toggle.setAttribute("aria-expanded", "true");
        share_container.setAttribute("data-visible", "true");
    } else {
        share_toggle.setAttribute("aria-expanded", "false");
        share_container.setAttribute("data-visible", "false");
    }
});