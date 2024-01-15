const inp = document.getElementById('inputtext')
const btn = document.querySelectorAll('button')

function cal(inp) {
  console.log(inp)
  try {
    return new Function('return ' + inp)()
  } catch (e) {
    console.log(e)
  }
}

function opn(btnvalue) {
  if (btnvalue == 'C') {
    inp.value = ''
  }
  else if (btnvalue == 'DEL') {
    inp.value = inp.value.slice(0, -1)
  } else if (btnvalue == '=') {
    inp.value = cal(inp.value)
  } else {
    inp.value += btnvalue
  }

}

btn.forEach((btn) => {
  let buttonValue = btn.innerText;
  btn.addEventListener('click', () => {
    opn(buttonValue)
  })
})