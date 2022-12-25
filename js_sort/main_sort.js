// swap function
function swap(e1,e2){
    console.log('In swap()');

    let fl = e1.style.height;
    e1.style.height = e2.style.height;
    e2.style.height = fl;
}

// when sorting algorithm is running, then disable all the buttons
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector('.insertionSort').disabled = true;
    document.querySelector('.mergeSort').disabled = true;
    document.querySelector('.quickSort').disabled = true;
    document.querySelector('.selectionSort').disabled = true;
}

// when the sorting is completed, enable those buttons.
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector('.insertionSort').disabled = false;
    document.querySelector('.mergeSort').disabled = false;
    document.querySelector('.quickSort').disabled = false;
    document.querySelector('.selectionSort').disabled = false;
}

// to disable the size slider while algo is running
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled= true;
}
// to enable the size slider while algo is completed
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled= false;
}

// to disable the new array button while algo is running
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled= true;
}

// to enable the new array button while algo is completed
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled= false;
}


function waitforme(milisec){
    return new Promise(resolve =>{
        setTimeout(() => {resolve('') }, milisec);
    })
}

//set the size slider
let arraySize = document.querySelector('#arr_sz');

// to update the bars on the basis of input given
arraySize.addEventListener('input',function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
})
let delay = 260;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input',function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320- parseInt(delayElement.value);
});


// creating a new array to store randomly generated numbers
let array = [];

createNewArray();

function createNewArray(noOfBars = 60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
