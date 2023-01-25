//console.log("hello");

// access to table body
const table  = document.querySelector("#storeList tbody")


// add operation
function addingRow(){
    event.preventDefault();

    // input value access
    var productCode_value = document.getElementById("productCode").value;
    var productName_value = document.getElementById("product").value;
    var qty_value = document.getElementById("qty").value;
    var perPrice_value = document.getElementById("perPrice").value;

    // create new Element
    const productCode = document.createElement('td');
    const product = document.createElement('td');
    const qty = document.createElement('td');
    const perPrice = document.createElement('td');
    const deleteBtn = document.createElement('td');
    const btn = document.createElement('button');

    deleteBtn.appendChild(btn);
    btn.textContent = "delete";
    btn.setAttribute('onclick', 'delet(this)') // 


    // store value in new Element
    productCode.innerHTML = productCode_value;
    product.innerHTML = productName_value;
    qty.innerHTML = qty_value;
    perPrice.innerHTML = perPrice_value;

//    create a table row and add all Element
    const tableRow = document.createElement('tr');
    tableRow.appendChild(productCode)
    tableRow.appendChild(product)
    tableRow.appendChild(qty)
    tableRow.appendChild(perPrice)
    tableRow.appendChild(deleteBtn)
    table.appendChild(tableRow)

}

// Delete operation

function delet(ele){
    const parent  = ele.parentNode;
    const GrantP = parent.parentNode;
    GrantP.remove();
 }