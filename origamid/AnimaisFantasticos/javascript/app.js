function initTab() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContet = document.querySelectorAll(".js-tabContent section");
  tabContet[0].classList.add("ativo");

  function activeTab(index) {
    tabContet.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContet[index].classList.add("ativo");
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

initTab();

function innitAcordion() {
  const accordianList = document.querySelectorAll(".js-accordion dt");

  accordianList[0].nextElementSibling.classList.add("ativo");

  function acctiveAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  accordianList.forEach((item) => {
    item.addEventListener("click", acctiveAccordion);
  });
}

innitAcordion();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-section");

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - 500;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

initAnimacaoScroll();
