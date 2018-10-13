
add = (number) => {
    document.form.textinput.value = document.form.textinput.value + number
}

resolveExpression = () => {
    const expression = document.form.textinput.value
    if (expression) {
        document.form.textinput.value = eval(expression)
        createHistoric(`${expression} = ${document.form.textinput.value}`)
    }
}

cleanInput = () => {
    document.form.textinput.value = ''
}

removeLast = () => {
    const expression = document.form.textinput.value
    document.form.textinput.value = expression.substring(0, expression.length - 1)
}


createHistoric = (texto) => {
    const newLi = document.createElement('li')
    const value = document.createTextNode(texto)
    newLi.className = 'card'
    newLi.appendChild(value)
    document.getElementById('historic').appendChild(newLi)
}