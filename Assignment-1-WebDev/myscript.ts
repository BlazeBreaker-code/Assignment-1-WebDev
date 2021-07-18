const btnSubmit = document.getElementById('submit') as HTMLButtonElement;
const txtName = document.getElementById('name') as HTMLInputElement;
const commentData = document.getElementById('comment') as HTMLInputElement; 
const templateInsertLocation = document.getElementById('response') as HTMLElement;
const rate1 = document.getElementById('star1') as HTMLInputElement;
const rate2 = document.getElementById('star2') as HTMLInputElement;
const rate3 = document.getElementById('star3') as HTMLInputElement;
const rate4 = document.getElementById('star4') as HTMLInputElement;
const rate5 = document.getElementById('star5') as HTMLInputElement;
var dateTime = new Date();
let ar: Array<number> = [];



btnSubmit.addEventListener("click", (event)=>{
    var t = false;
    let myClone = getTemplateClone('responseTemplate');
    if(txtName.value != ''){
            let arr = [rate1, rate2, rate3, rate4, rate5];
            for (var val of arr) {
                if(val.checked) {
                    let inc = 0;
                    myClone.content.getElementById('responseRate')!.innerText = val.value;
                    ar.push(parseInt(val.value));
                    let total = 0;
                    for(var i of ar) {
                        total = total + i;  
                        inc++;
                    }
                    console.log(total);
                    let average = total/inc;
                    let result: string|number = `${(total/inc).toFixed(2)}`;
                    document.getElementById('responseAvg')!.innerText = result;
                    myClone.content.getElementById('responseName')!.innerText = txtName.value;
                    myClone.content.getElementById('responseComment')!.innerText = commentData.value;
                    myClone.content.getElementById('responseDate')!.innerText = dateTime.toLocaleDateString();
                    templateInsertLocation.appendChild(myClone.content);  
                    var t = true;
                } 
            } 
        }
    else{
        alert("Please enter a name!");
    } 
    if(t == false) {
        alert("Please enter a rating!");
    }
});

function getTemplateClone(templateID: string)
{
    return document.getElementById(templateID)?.cloneNode(true) as HTMLTemplateElement;
}