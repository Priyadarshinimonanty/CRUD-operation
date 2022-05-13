var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readformdata();
        if (selectedRow == null) {

            insertnewrecord(formData);
        }
        else {

            updateRecord(formData);
        }
        resetform();
    }
}
function readformdata() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["fname"] = document.getElementById("fname").value;
    formData["mname"] = document.getElementById("mname").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertnewrecord(data) {
    var table = document.getElementById("tableList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fname;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mname;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onclick="onEdit(this)"> Edit</button>
                    <button onclick="onDelete(this)"> Delete</button> `

}
function resetform() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mname").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.fname;
    selectedRow.cells[3].innerHTML = formData.mname;
    selectedRow.cells[4].innerHTML = formData.city;
}
function onDelete(td) {
    if (confirm("Are you sure to delete?")) {
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetform();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
