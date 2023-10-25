const listInp = document.querySelector('#listInp')
const unOrderList = document.querySelector('#list-body')
const sbmtBtn = document.querySelector('#sbmtBtn')

function addListData() {
    let inpVal = listInp.value
    const li = `
        <li id="${inpVal}" >
            <h2>${inpVal}</h2>
            <div>
                <span id="edit" onclick="editListData(${inpVal})"><i class="far fa-edit"></i></span>
                <span id="delete" onclick="deleteListData(${inpVal})"><i class="fas fa-trash-alt"></i></span>
            </div>
        </li>`
        unOrderList.innerHTML += li
        listInp.value = ""
    }

function editListData(list) {
    const ID = list.getAttribute('id')
    const li = document.getElementById(ID)
    listInp.value = list.children[0].textContent
    sbmtBtn.value = 'Update' 
    sbmtBtn.setAttribute('onclick', `updateListData('${ID}')`)
}

function updateListData(item) {
    
    const li = document.getElementById(item)
    li.children[0].innerHTML = listInp.value
    li.setAttribute('id', `${listInp.value}`)
    li.children[1].children[0].setAttribute('onclick', `editListData(${listInp.value})`)
    li.children[1].children[1].setAttribute('onclick', `deleteListData(${listInp.value})`)
    sbmtBtn.value = 'Add'
    sbmtBtn.setAttribute('onclick', `addListData()`)
    listInp.value = ""
}

function deleteListData(item) {
    unOrderList.removeChild(item)
}