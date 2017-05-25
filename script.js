
/*  Find and display total sum of numbers from 1 to 3;*/
console.log('Find and display total sum of numbers from 1 to 3');
function sum (){
	var sum = 0;
	for (var i=1; i<=3; i++){
		sum = sum+i;
	}
	return sum;
}
console.log(sum());



/*  Find and display total sum of numbers from 20 to 220;*/
console.log('Find and display total sum of numbers from 20 to 220');
function sum1(){
	var sum = 0;
	for (var i=20; i<=220; i++){
		sum = sum+i;
	}
	return sum;
}
console.log(sum1());



/*  Display even numbers from 1 to 20 by using for loop (do it with using ‘continue’)*/
console.log('Display even numbers from 1 to 20 using ‘continue’ ');
function evenNumbers() {
	for (var i = 1; i <= 20; i++){

		if(i % 2 == 0)
            console.log(i); 
       
        else if (i % 2 !== 0)
        	continue;         
	}
}
evenNumbers();



/*  Display even numbers from 1 to 20 by using for loop ( do it without using ‘continue’)*/
console.log('Display even numbers from 1 to 20 without ‘continue’ ');
function evenNumbers() {
	for (var i = 1; i <= 20; i++){

		if(i % 2 == 0)
            console.log(i); 
	}
}
evenNumbers();



/*  Display odd numbers from 10 to 30 by using ‘while’ loop.*/
console.log('Display odd numbers from 10 to 30 by using ‘while’ loop');
function oddNumbers() {
	var i = 10;
	while(i < 30){
		if (i % 2 !== 0) {
			console.log(i);
		}
		i++;
	}
}
oddNumbers();



/*  Display numbers from 1 to 15 using ‘for’ loop, once num of iteration is equal the num of month of your birthday then stop execution of loop*/
console.log('Display numbers from 1 to 15 using ‘for’ loop');
function toBirthdayNumbers() {
	for (var i = 1; i<=15; i++){
		if(i==4){
          break;
        }
      	console.log(i);
	}
}
toBirthdayNumbers();



 /*  Rewrite code from using ‘for’ to using ‘while’
for(var i = 0; i < 5; i++) {
   console.log(`number ${i}  =)`)
*/
console.log('Rewrite code from using ‘for’');
function changeFunction(){
var i = 0;
	while (i < 5){
		console.log(`number ${i}  =)`);
		i++;
	}
} 
changeFunction();



/*  Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt
(do it using ‘while)*/
/*console.log('Write code which will ask user (prompt ) to put number greater than 100 (do it using ‘while)');
function numberBiggerThan100(){
		var number = 0;
		while (number <= 100){
			number = prompt("Please, enter number bigger than 100!", 101);
			
		}	
}
numberBiggerThan100();*/



/*  Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt
(do it using ‘do while)*/
console.log('Write code which will ask user (prompt ) to put number greater than 100 (do it using ‘do while)');
function DoNumberBiggerThan100(){
		do {
			number = prompt("Please, enter number bigger than 100!", 101);
		}
		while(number <= 100);	
}
DoNumberBiggerThan100();


/*Show in console '#' using for.*/
console.log('Show in console numberSign using for')
function charSign(){
    var numberSign = 8;
    var char = "";
    for (var i = 0; i <= numberSign; i++) {
       char = char + "#";
       console.log(char);
    }
}
charSign();


 



 




	





