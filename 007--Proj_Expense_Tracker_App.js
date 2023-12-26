// // Accessing the form with the help of form id to take our control for modification :-

const formAccess = document.getElementById("unique");
// console.log(formAccess);
// // Successfully accessible;


////////////////////////////////////////////////////////////////////////////////////////////////



// // Formation of local storage to store all the expense details :-

function storingDataOnLocalStorage(event){
    // // Creation of prevent default to take overflow of submit button or to control over the 
    // // click functionality to perfrom only single click either it will continuously perform action;
    event.preventDefault();
    // console.log(420);
    // // Successfully working;


    // // Creation of object that we want to store in the local storage :-
    const exclusiveObj ={
        expAmtInput : event.target.expenseAmount.value,
        descriInput : event.target.descriptDetails.value,
        categoInput : event.target.categories.value
    }
    // // Finally saving into the local storage :-
    localStorage.setItem(exclusiveObj.expAmtInput , JSON.stringify(exclusiveObj) );
    
    // // Creation of function name to make the function with the local storage :-
    displayingDataOfLocalStorageOnScreen(exclusiveObj);
    
}

// // Formation of functionality with the help of local storage :-

function displayingDataOfLocalStorageOnScreen(exclusiveObj){

    // // Grabbing the Ul Tag id to store the details on the screen :-
    let parentUlTag = document.getElementById("special");
    // console.log(parentUlTag);
     // // Successfully working;


     // // Making the new Li Tag under the Ul Tag to have the details on it :-
    let childUlTag = document.createElement('li');
    childUlTag.className = "details-list";
    
    let childUlTagText = document.createTextNode(`${exclusiveObj.expAmtInput} - ${exclusiveObj.descriInput} - ${exclusiveObj.categoInput}`);

    // // Pushing the text inside the childUlTag :-
    childUlTag.appendChild(childUlTagText);


    // // Making the delete button and its functionality :-
    let delBtn = document.createElement('button');
    delBtn.value = 'delete';
    delBtn.className = 'btn btn-warning'
    delBtn.appendChild(document.createTextNode('DELETE'));
    delBtn.onclick=()=>{
        // // Both local and parentUlTag will remove the details from them :-
        localStorage.removeItem(exclusiveObj.expAmtInput);
        parentUlTag.removeChild(childUlTag);
    }
    // // Pushing the delete button inside the childUlTag :-
    childUlTag.appendChild(delBtn);


    // // Making the edit button and its functionality :-
    let editBtn = document.createElement('button');
    editBtn.value = 'edit';
    editBtn.className = 'btn btn-success '
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.onclick=()=>{
        // // Both local and parentUlTag will remove the details from them :-
        localStorage.removeItem(exclusiveObj.expAmtInput);
        parentUlTag.removeChild(childUlTag);
        // // Grabbing again the details of local storage with the help of there id's and values for editing or modification :-
        document.getElementById("expAmt").value = exclusiveObj.expAmtInput;
        document.getElementById("des").value = exclusiveObj.descriInput;
        document.getElementById("cat").value = exclusiveObj.categoInput;
    }
    // // Pushing the edit button inside the childUlTag :-
    childUlTag.appendChild(editBtn);
    
    // // Pushing the childUlTag inside the main Ul tag i.e, parentUlTag :-
    parentUlTag.appendChild(childUlTag);

    // // After filling the details once we make the fields blanks while grabbing their id's and value :-
    document.getElementById("expAmt").value = "";
    document.getElementById("des").value = "";
    document.getElementById("cat").value = "";

}