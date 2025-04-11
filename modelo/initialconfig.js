
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

let currentTheme = darkTheme.matches ? true : false
let lastTheme = currentTheme

// Delay para o transition ser adicionado
window.addEventListener("load", () => {
   setTimeout(() => {
      document.documentElement.classList.add("loaded")
   }, 100)
})

// Carrega 
document.addEventListener("DOMContentLoaded", () => {
   if (darkTheme.matches) {
      lastTheme = !currentTheme
      switchThemes()
   }
   apagar()
});
// Evento que altera o tema de acordo com o tema do navegador (ou do sistema operacional, caso use o app do Notion para Desktop)
darkTheme.addEventListener("change", () => {
   lastTheme = currentTheme
   currentTheme = !currentTheme
   switchThemes()
})

// Botão para trocar o tema
document.getElementById("switchtheme").addEventListener("click", () => {
   lastTheme = currentTheme
   currentTheme = !currentTheme
   switchThemes()
})

// Função que troca o tema da página
function switchThemes() {
   if (lastTheme != currentTheme) {
      document.documentElement.classList.toggle('dark', currentTheme);
      if (currentTheme) document.getElementById("switchtheme").innerText = "Modo Claro"
      else document.getElementById("switchtheme").innerText = "Modo Escuro"
   }
}

function renderizar(info, content) {
   katex.render(content, document.getElementById(info), {
      throwOnError: false
   })
}