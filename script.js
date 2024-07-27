function scrollToElement(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}

// Adiciona um ouvinte de evento de clique para cada elemento com a classe "scroll"
const scrollLinks = document.querySelectorAll(".scroll");
scrollLinks.forEach((link) => {
  link.addEventListener("click", scrollToElement);
});


  // Função para verificar o scroll da página
  function checkScroll() {
    const navbar = document.querySelector(".navbar");

    const head = document.querySelector(".titulonome");

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("transparent");

      head.classList.add("d-none")
      head.classList.remove("transparent");

    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("transparent");

      head.classList.remove("d-none");
      head.classList.add("transparent");
    }
  }

  // Adiciona um ouvinte de evento de scroll para verificar quando a página é rolada
  window.addEventListener("scroll", checkScroll);

  // Chama a função checkScroll() quando a página é carregada
  window.addEventListener("load", checkScroll);