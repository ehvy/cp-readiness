const submitFunction =()=>{
    let query = document.getElementById("box").value;
    if(query.length === 0 || query.length === null){
        alert("Please type into the search box");
        return;
    }
    else{
        alert(`You typed ${query}.`);
        return;
    }
};

const submitFunctionAuto=()=>{
    alert("This feature is not active for now.");
    return;
};