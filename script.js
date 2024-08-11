const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

document.getElementById("inicio-botao").addEventListener("click", function() {
    document.getElementById("inicio").style = "display:block;"
    document.getElementById("pacotes").style = "display:none;"
})

document.getElementById("pacotes-botao").addEventListener("click", function() {
    document.getElementById("inicio").style = "display:none;"
    document.getElementById("pacotes").style = "display:block;"
})

document.getElementById("boston").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("boston-descricao").style = "display:block;"
})

document.getElementById("india").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("india-descricao").style = "display:block;"
})

document.getElementById("japao").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("japao-descricao").style = "display:block;"
})

document.getElementById("chile").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("chile-descricao").style = "display:block;"
})

document.getElementById("canada").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("canada-descricao").style = "display:block;"
})

document.getElementById("natal").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("natal-descricao").style = "display:block;"
})

document.getElementById("bonito").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("bonito-descricao").style = "display:block;"
})

document.getElementById("ubatuba").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("ubatuba-descricao").style = "display:block;"
})

document.getElementById("guaruja").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("guaruja-descricao").style = "display:block;"
})

document.getElementById("capao-da-canoa").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("capao-da-canoa-descricao").style = "display:block;"
})

document.getElementById("canela").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("canela-descricao").style = "display:block;"
})

document.getElementById("matinhos").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("matinhos-descricao").style = "display:block;"
})

document.getElementById("guaratuba").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("guaratuba-descricao").style = "display:block;"
})

document.getElementById("garopaba").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("garopaba-descricao").style = "display:block;"
})

document.getElementById("foz-do-iguacu").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("foz-do-iguacu-descricao").style = "display:block;"
})

document.getElementById("bombinhas").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("bombinhas-descricao").style = "display:block;"
})

document.getElementById("florianopolis").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("florianopolis-descricao").style = "display:block;"
})

document.getElementById("balneario-picarras").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("balneario-picarras-descricao").style = "display:block;"
})

document.getElementById("balneario-camboriu").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("balneario-camboriu-descricao").style = "display:block;"
})

document.getElementById("bali").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("bali-descricao").style = "display:block;"
})

document.getElementById("maldivas").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("maldivas-descricao").style = "display:block;"
})

document.getElementById("noruega").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("noruega-descricao").style = "display:block;"
})

document.getElementById("roma").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("roma-descricao").style = "display:block;"
})

document.getElementById("paris").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("paris-descricao").style = "display:block;"
})

document.getElementById("londres").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("londres-descricao").style = "display:block;"
})

document.getElementById("dubai").addEventListener("click", function() {
  document.getElementById("pacotes").style = "display:none;"
  document.getElementById("dubai-descricao").style = "display:block;"
})
