function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar light.png")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar do google assets 1.png")
  }
}

//Poderia fazer esse código de uma maneira mais simples porque no JS já existe esse código, então ficaria assim:
//html.classList.toggle('light')
