function carregar() {
let body = document.querySelector('body')
let msg = document.querySelector('#msg')
let img = document.querySelector('#imagem')
let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()
if (hora >= 0 && hora < 12) {
  img.src = 'manha.png'
  msg.innerHTML = `Bom dia, agora são ${hora} horas e ${minuto} minutos.`
  body.style.background = "hsla(57, 65%, 58%, 1)"
}
 else if (hora >= 12 && hora < 18) {
  img.src = 'tarde.png'
  msg.innerHTML = `Boa Tarde<br> Agora são ${hora} horas e ${minuto} minutos.`
  body.style.background = "hsla(30, 65%, 52%, 1)"
}
else {
  img.src = 'noite.png'
  msg.innerHTML = `Boa Noite<br> Agora são ${hora} horas e ${minuto} minutos.`
}
}
