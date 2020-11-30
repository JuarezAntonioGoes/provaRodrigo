document.querySelector('#salvar')
    .addEventListener('click', newLineTable)

function newLineTable(e) {

    const tableBody = document.querySelector('#table-body')
    const tableTR = document.createElement('tr')
    tableBody.insertAdjacentElement('afterbegin', tableTR)
    const selectTH = tableBody.querySelector('tr')

    const inputsForm = document.querySelectorAll('input[type="text"]')

        .forEach(campo => {
            

            selectTH.innerHTML += `<td>${campo.value}</td>`
        })

    console.log(tableBody);

}