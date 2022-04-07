function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}
function equal(){
    var vales = document.form.textview.value;
    console.log(vales);
    var arr = vales.split(/[-+%*//]+/);
    console.log(arr[0]);
    var num1 = Number(arr[0]);
    var num2 = Number(arr[1]);


    if(vales.indexOf('+') != -1){
        document.form.textview.value =  num1+num2; 
    }else if (vales.indexOf('-') != -1){
        document.form.textview.value =  num1-num2; 
    } else if (vales.indexOf('/') != -1){
        document.form.textview.value =  num1/num2; 
    }else if (vales.indexOf('*') != -1){
        document.form.textview.value =  num1*num2; 
    }else if (vales.indexOf('%') != -1){
        document.form.textview.value =  num1%num2; 
    }
}

function clears(){
    document.form.textview.value = null;
}

function clearOne(){

    var arr2 = Array.from(document.form.textview.value) ;
    arr2.pop();   
    document.form.textview.value = arr2.join('');

}