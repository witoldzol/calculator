"use strict"

$(document).ready(function(){
	

	$('#key+').css("background-color:blue")
	$('#key-').css("background-color:blue")
	

	//switches 
	let canUseOperator = true
	let canUseDot = true
	//top screen
	let screenIn = $( ".screen-input" )
	//botton screen (output)
	let screenOut = $( ".screen-output" )
	//evaluation of both screens
	let result = () => eval( screenOut.html() + screenIn.html() )
	//evaluation of only input screen
	let resultFromInput = () => eval ( screenIn.html() )
	//regEx
	let operatorReg = /[-+*/]/
	let operatorDot = /\./

	//listener for normal key values
	$(".key").on("click", function(){

		//clear out initial zero 
		if(screenIn.html().length === 1 && screenIn.html() == 0){
			screenIn.empty()
		} 
		//append new input
		screenIn.html(screenIn.html() + this.innerHTML)
		//flip the switch (allow operator)
		canUseOperator = true
	})

	//listener for OPERATOR keys (except for dot)
	$(".operator").on( "click", function(){

		//test the last character in input field
		//if it's a DOT do not let operator to be inserted 
		if( operatorDot.test( screenIn.html().substring( screenIn.html().length -1, screenIn.html().length) ) ){
			
			return
		}
		//same as above, for operator (fail safe)
		if( operatorReg.test( screenIn.html().substring( screenIn.html().length -1, screenIn.html().length) ) ){
			
			return
		}

		//clear out initial zero
		if(screenIn.html().length === 1 && screenIn.html() == 0){
			screenIn.empty()
		} 

		//if we pressed operator key previously, it will not register again
		if( canUseOperator ){
			
			screenIn.html(screenIn.html() + this.innerHTML)
			canUseOperator = false
			canUseDot = true
		}


	})

	//listener for DOT
	$(".dot").on( "click", () => {
		
		if( canUseDot ) {
		
			screenIn.html( screenIn.html() + "." )
			canUseDot = false
			canUseOperator = true
		}	
	})

	//function that checks if operator is NOT in the first character of input string
	//if TRUE, then we replace previous answer with new calculation
	function isValid(str){
	 return !operatorReg.test(str.charAt(0));
	}

	//EVALUATION (equals sign)
	$(".evaluate").on("click", () => {
		//if there are any special chars in the input string
		// replace result with input (don't do any evaluation)
		if( isValid( screenIn.html() ) ) {
			//evaluate only input and replace previous results
			screenOut.html( resultFromInput ) 
			canUseDot = true
			canUseOperator = true

		} else{
			//evaluate input with the previous answer together
			screenOut.html( result )
			canUseDot = true
			canUseOperator = true
		}

		//after evaluation clear the input field
		screenIn.empty()

	})

	// 'C' button that clears all inputs / outputs
	$(".clear").on("click", () => {
		//clea out input and output, and insert 0
		screenOut.html(0)
		screenIn.html(0)  
		canUseDot = true
		canUseOperator = true

	})

	// 'DEL' button that removes last character from input field
	$(".delete").on("click", () => {

		let x = screenIn.html().length 
		let last = screenIn.html().substring(x-1,x)
		//remove last character in the string
		screenIn.html(screenIn.html().substring(0,x-1))

		//examine deleted character
		//if it was operator, reset operator switch
		if( operatorReg.test(last) ){

			let y = screenIn.html().length 
			let newLast = screenIn.html().substring(y-1,y)
			if ( !operatorDot.test(newLast) ){

				canUseOperator = true

			}

		//if dot was deleted, reset dot switch
		} else if( operatorDot.test(last) ){

			canUseDot = true

		}

	})
	
	//key bindings for numeric pad
	$('window').keydown( (e) => {

		alert( $(this).val() )

	})

	$(document).keydown(function(e){

		switch( e.which ){

			case 97: $('#key1').click()
				break
			case 98: $('#key2').click()
				break
			case 99: $('#key3').click()
				break
			case 100: $('#key4').click()
				break
			case 101: $('#key5').click()
				break
			case 102: $('#key6').click()
				break
			case 103: $('#key7').click()
				break
			case 104: $('#key8').click()
				break
			case 105: $('#key9').click()
				break
			case 106: $('#keyMul').click()
				break
			case 107: $('#keyAdd').click()
				break
			case 109: $('#keySub').click()
				break
			case 110: $('#keyDot').click()
				break
			case 111: $('#keyDiv').click()
				break
			case 13: $('#keyEval').click()
				break	
			case 8: $('#keyDel').click()
				break					

		}
	                
	 })

})
