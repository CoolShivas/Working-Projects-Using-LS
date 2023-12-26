// /*// Watch this videos for project details 
 


// // Link -->          https://www.youtube.com/watch?v=1dSO9dl5SPo




// // Solution-->*/

///////*************************************************************************************************************** */

// const containerAccess = document.getElementsByTagName("container");
// console.log(containerAccess)

const containerAccess = document.querySelector("#contain");
// console.log(containerAccess)
// // Successfully working;
containerAccess.parentElement.style.color = 'voilet';
containerAccess.style.fontWeight = 'bold';
containerAccess.style.backgroundColor = 'orange';

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cardBodyAccess = document.querySelector('#crd');
// console.log(cardBodyAccess);
// // Successfully working;
cardBodyAccess.style.backgroundColor = 'yellow';

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const productListAccess = document.querySelector("#proList")    ;
// console.log(productListAccess);
productListAccess.style.borderBottom = 'solid 3px #000'

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let totalAmount = 0;  // Globally initializing total amount ;



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////*************************************************************************************************************** */




function storingToServer(event){
    event.preventDefault();
    // console.log(1008);
    // // Successfully working;

    const sellerObj = {
        sellingPriceInput : event.target.sellprice.value,
        productNameInput : event.target.productName.value
    }
    localStorage.setItem(sellerObj.sellingPriceInput , JSON.stringify(sellerObj));
    showingProductDetailsOnScreen(sellerObj);
    calculateTotalAmount(); // Update total amount after adding a product
}



///////*************************************************************************************************************** */




function showingProductDetailsOnScreen(sellerObj){
    const parentUlTag = document.getElementById('highLightPro');
    // console.log(parentUlTag);
    // // Successfully working;
    const childLiTag = document.createElement('li');
    childLiTag.className = 'adding-pro-details';
    
    const childLiTagText =  document.createTextNode(`${sellerObj.sellingPriceInput} - ${sellerObj.productNameInput} `);

    childLiTag.appendChild(childLiTagText);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const delBtn = document.createElement('button');
    delBtn.value = 'delete';
    delBtn.className = 'btn btn-danger float-right';
    delBtn.appendChild(document.createTextNode('DELETE'));
    delBtn.onclick = () => {
        localStorage.removeItem(sellerObj.sellingPriceInput);
        parentUlTag.removeChild(childLiTag);
    }

    childLiTag.appendChild(delBtn);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const editBtn = document.createElement('button');
    editBtn.value = 'edit';
    editBtn.className = 'btn btn-success float-right';
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.onclick = () => {
        localStorage.removeItem(sellerObj.sellingPriceInput);
        parentUlTag.removeChild(childLiTag);
        document.getElementById('sp').value = sellerObj.sellingPriceInput;
        document.getElementById('pn').value = sellerObj.productNameInput;       
    }

    childLiTag.appendChild(editBtn);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    parentUlTag.appendChild(childLiTag);

    document.getElementById('sp').value = '';
    document.getElementById('pn').value = '';
}



///////*************************************************************************************************************** */



function calculateTotalAmount(){
    totalAmount = 0; // Resetting the total amount
    for(let i = 0 ; i < localStorage.length; i++)
    {
        const itemsAmtAdd = JSON.parse(localStorage.getItem(localStorage.key(i)));
        totalAmount = totalAmount + parseFloat(itemsAmtAdd.sellingPriceInput);
    }
    const totalAmountUlTag = document.getElementById("accumulatedAmt");
    totalAmountUlTag.innerHTML = ''; // Clear previous total
    totalAmountUlTag.textContent = totalAmount; // Display updated total

  // Calculate total amount on page load (for existing products)
}

calculateTotalAmount()

