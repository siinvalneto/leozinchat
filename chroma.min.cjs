
(function () {
    if (window.chroma) return;
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/chroma-js@2.4.2/chroma.min.js";
    s.onload = () => console.log("Chroma.js carregado");
    document.head.appendChild(s);
})();
