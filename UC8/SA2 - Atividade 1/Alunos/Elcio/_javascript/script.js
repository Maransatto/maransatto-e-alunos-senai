function funcao_clique(img) {
    var modalJ = document.getElementById("JanelaModal");
    var modalI = document.getElementById("imgModal");
    var modalB = document.getElementById("btFechar");
    modalJ.style.display = "block";
    modalI.src = img;
    modalB.onclick = function () {
        modalJ.style.display = "none";
    }
}
