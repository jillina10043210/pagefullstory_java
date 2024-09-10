window.addEventListener("wheel", (e) => e.preventDefault(), { passive: false });
window.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
        e.preventDefault();
    }
});