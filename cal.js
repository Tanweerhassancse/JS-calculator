
alert("Created by Tanweer Hassan")

function insert(num) {

    var a = document.form.textview;

    a.value += num;
}
function equal() {
    var a = document.form.textview;
    var exp = a.value;

    if (exp) {
        a.value = eval(exp);
}
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;

    document.form.textview.value = exp.substring(0, exp.length-1);
}
