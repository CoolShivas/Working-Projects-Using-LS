const headerAccess = document.querySelector(".heading-leader");
// console.log(headerAccess);
// // Successfully Accessible;
headerAccess.parentElement.style.backgroundColor = '#ccc'
headerAccess.style.borderBottom = 'solid 2px black'

////////////////////////////////////////////////////////////////////////////////////////////////


// // Creating new tag named as ul tag to store the li tag inside it:-

const ulTagForm = document.createElement('ul');
// console.log(ulTagForm);
// // Successfully form;

// // Creating ul tag id to grab it afterwards :-
ulTagForm.id = "ulTagMade";
// console.log(ulTagForm);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function storingDataOnLocalDisk(event){
    event.preventDefault();
    // console.log(8787);
    // // Successfully working;

    const latestObj = {
        fNameInput : event.target.fname.value,
        mNameInput : event.target.mname.value,
        lNameInput : event.target.lname.value,
        emailInput : event.target.mailing.value,
        mobilInput : event.target.mobile.value
    }
    localStorage.setItem(latestObj.fNameInput , JSON.stringify(latestObj));
    showingDataOfLocalStOnDisplay(latestObj);
}


function showingDataOfLocalStOnDisplay(latestObj){
    // const parentUlTag = document.querySelector("ulTagMade");
    // // Its not working ;
    const parentUlTag = document.getElementById("helloWorld");
    const childLiTag = document.createElement('li');
    childLiTag.className = "booking-details";
    childLiTag.appendChild(document.createTextNode(`${latestObj.fNameInput} ${latestObj.mNameInput} ${latestObj.lNameInput} - ${latestObj.emailInput} - ${latestObj.mobilInput} `));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.value = 'delete';

    deleteBtn.appendChild(document.createTextNode('DELETE'));

    deleteBtn.onclick = () => {
        localStorage.removeItem(latestObj.fNameInput);
        parentUlTag.removeChild(childLiTag);
    }

    childLiTag.appendChild(deleteBtn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success';
    editBtn.value = 'edit';

    editBtn.appendChild(document.createTextNode("EDIT"));

    editBtn.onclick = () => {
        localStorage.removeItem(latestObj.fNameInput);
        parentUlTag.removeChild(childLiTag);
        document.getElementById('fn').value = latestObj.fNameInput;
        document.getElementById('mn').value = latestObj.mNameInput;
        document.getElementById('ln').value = latestObj.lNameInput;
        document.getElementById('em').value = latestObj.emailInput;
        document.getElementById('pn').value = latestObj.mobilInput;
    }

    childLiTag.appendChild(editBtn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    parentUlTag.appendChild(childLiTag);
     
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById('fn').value = '';
    document.getElementById('mn').value = '';
    document.getElementById('ln').value = '';
    document.getElementById('em').value = '';
    document.getElementById('pn').value = '';
}
