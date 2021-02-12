console.log("hello")





// var button = document.getElementById('create')
// console.log(button)

document.getElementById('create').onclick = function addRow() {
    var getFirst = document.getElementById('firstName').value
    var getLast = document.getElementById('lastName').value
    var getEmail = document.getElementById('inputEmail4').value
    var getTitle = document.getElementById('inputTitle')
    var moreTitle = getTitle.options[getTitle.selectedIndex].text
    var body = document.getElementById('newBody')
    var newRow = document.createElement('tr')
    console.log(getFirst)

    var newFirst = document.createElement('td')
    newFirst.innerHTML = getFirst 
    var newLast = document.createElement('td')
    newLast.innerHTML = getLast
    var newEmail = document.createElement('td')
    newEmail.innerHTML = getEmail
    var newTitle = document.createElement('td')
    newTitle.innerHTML = moreTitle

    console.log(typeof getFirst)
    console.log(body)
    console.log(newFirst)
    body.appendChild(newRow)
    newRow.append(newFirst)
    newRow.append(newLast)
    newRow.append(newEmail)
    newRow.append(newTitle)

    




    // console.log(moreTitle)
}

