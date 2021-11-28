var idNum =1;
function addListItem(){
    var inputText = document.getElementById('inputField').value;
    var createElement = document.createElement("div");
    createElement.id = idNum;
    createElement.className = "itemRow";
    createElement.innerHTML = '<span class="text">'+inputText+'</span><span class="btn" onclick=deleteItem("'+idNum+'")>delete</span><span class="btn">Edit</span>';
    var parentDiv = document.getElementById('listBox');
    parentDiv.appendChild(createElement);
    idNum++;

}

function deleteItem(idNum){
    var removeEle = document.getElementById(idNum);
    removeEle.remove();
}