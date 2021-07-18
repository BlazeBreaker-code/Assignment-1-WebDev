"use strict";
var btnSubmit = document.getElementById('submit');
var txtName = document.getElementById('name');
var commentData = document.getElementById('comment');
var templateInsertLocation = document.getElementById('response');
var rate1 = document.getElementById('star1');
var rate2 = document.getElementById('star2');
var rate3 = document.getElementById('star3');
var rate4 = document.getElementById('star4');
var rate5 = document.getElementById('star5');
var dateTime = new Date();
var ar = [];
btnSubmit.addEventListener("click", function (event) {
    var t = false;
    var myClone = getTemplateClone('responseTemplate');
    if (txtName.value != '') {
        var arr = [rate1, rate2, rate3, rate4, rate5];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var val = arr_1[_i];
            if (val.checked) {
                var inc = 0;
                myClone.content.getElementById('responseRate').innerText = val.value;
                ar.push(parseInt(val.value));
                var total = 0;
                for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
                    var i = ar_1[_a];
                    total = total + i;
                    inc++;
                }
                console.log(total);
                var average = total / inc;
                var result = "" + (total / inc).toFixed(2);
                document.getElementById('responseAvg').innerText = result;
                myClone.content.getElementById('responseName').innerText = txtName.value;
                myClone.content.getElementById('responseComment').innerText = commentData.value;
                myClone.content.getElementById('responseDate').innerText = dateTime.toLocaleDateString();
                templateInsertLocation.appendChild(myClone.content);
                var t = true;
            }
        }
    }
    else {
        alert("Please enter a name!");
    }
    if (t == false) {
        alert("Please enter a rating!");
    }
});
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById(templateID)) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
//# sourceMappingURL=myscript.js.map