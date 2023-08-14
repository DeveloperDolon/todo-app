
const inputField = document.querySelector(".task-input");
const todoTable = document.querySelector(".todo-table tbody");

let colSpanForClear = 2;

document.querySelector(".task-add-btn").classList.add("disable");

inputField.addEventListener("input" , () => {
    document.querySelector(".task-add-btn").classList.remove("disable");
});



document.querySelector(".todo-container").addEventListener("click",(e) => {


    if(e.target.classList.contains("task-add-btn")) {
        const inputString = inputField.value;
        const trimmedString = inputString.replace(/\s+/g, ' ').trim();

        if(trimmedString === "") {
            alert("Please input some data.");
        } else {
            const tableRow = document.createElement("tr");
            const task = `
                <td><span class="status-incomplete">Not complete</span></td>
                <td>${trimmedString}</td>
                <td><button class="take-action">Complete This</button></td>
            `;
            
            colSpanForClear++;
            document.querySelector(".cls-btn").parentElement.rowSpan = colSpanForClear;

            tableRow.innerHTML = task;
            todoTable.appendChild(tableRow);
            inputField.value = "";
        }
    }

    if(e.target.classList.contains("take-action")) {
        e.target.offsetParent.previousElementSibling.style.textDecoration = "line-through";
        e.target.textContent = "Completed";
        e.target.offsetParent.previousElementSibling.previousElementSibling.children[0].textContent = "Complete Done";
        e.target.offsetParent.previousElementSibling.previousElementSibling.children[0].classList.remove("status-incomplete");
        e.target.offsetParent.previousElementSibling.previousElementSibling.children[0].classList.add("status-complete");
    }


    if(e.target.classList.contains("cls-btn")) {

        const parentChild = e.target.offsetParent.offsetParent.childNodes[1].childNodes;
        const arrOfElem = Array.from(parentChild).filter(node => node.nodeType === Node.ELEMENT_NODE && node !== e.target.offsetParent.parentElement);

        arrOfElem.forEach(elem => elem.remove());
    }


});




