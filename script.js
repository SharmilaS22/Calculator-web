var num1;
var num2;
var ans;
var op;
var val1,val2;
function dispnum(num) {
	num1=document.getElementById('value1');
	num2=document.getElementById('value2');
	op=document.getElementById('opera');
	if(num=='+'||num=='-'||num=='*'||num=='/'||num=='%'){
		op.innerText=num;
	}
	else if(op.innerText=='+'||op.innerText=='-'||op.innerText=='*'||op.innerText=='/'||op.innerText=='%'){
        num2.innerText=num2.innerText+num;
    }
    else{
        num1.innerText=num1.innerText+num;
    }
}
function add() {
	num1=document.getElementById('value1');
	val1=Number(num1.innerText);
  dispnum('+');
}
function sub() {
	num1=document.getElementById('value1');
	val1=Number(num1.innerText);
	dispnum('-');
}
function mult() {
	num1=document.getElementById('value1');
  val1=Number(num1.innerText);
  dispnum('*');
}
function divi() {
	num1=document.getElementById('value1');
	val1=Number(num1.innerText);
  dispnum('/');
}
function ce() {
	num1=document.getElementById('value1');
	num2=document.getElementById('value2');
	ans=document.getElementById('answ');
	op=document.getElementById('opera');
	num1.innerText="";
	num2.innerText="";
	ans.innerText="";
	op.innerText="";
}
function backspace() {
    num1=document.getElementById('value1');
    num2=document.getElementById('value2');
    op=document.getElementById('opera')
	if ((num2.innerText=="")&&(op.innerText=="")) {
		var min=num1.innerText.toLocaleString("en");
		var comp="";
		for (var i = 0; i < min.length-1; i++) {
			comp=comp+min[i];
		}
		num1.innerText=comp;
	}
	else if((op.innerText!="")&&(num2.innerText=="")){
		op.innerText="";
	}
	else {
		num2=document.getElementById('value2');
		var min=num2.innerText.toLocaleString("en");
		var comp="";
		for (var i = 0; i < min.length-1; i++) {
			comp=comp+min[i];
		}
		num2.innerText=comp;
	}
}
function giveans() {

    num1=document.getElementById('value1');
	num2=document.getElementById('value2');
	ans=document.getElementById('answ');
	op=document.getElementById('opera');

	val2 = Number(num2.innerText);
    var ops = op.innerText;

    switch(ops){
    	case '+': ans.innerText=(val1+val2);break;
    	case '-': ans.innerText=(val1-val2);break;
    	case '*': ans.innerText=(val1*val2);break;
    	case '/': ans.innerText=(val1/val2);break;
    	case '%': ans.innerText=(val1%val2);
    }
}
