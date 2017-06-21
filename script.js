$(document).ready(function(){

	let operatorOn = true
	let screenIn = $( ".screen-input" )
	let screenOut = $( ".screen-output" )
	let result = () => eval( screenOut.html() + screenIn.html() )
	let resultFromInput = () => eval ( screenIn.html() )
	let operatorsReg = /[+-/*]/


	//listener for operator keys (except for dot)
	$(".operator").on( "click", function(){

		//if we pressed operator key previously, it will not register again
		if( !operatorOn ){
			
			screenIn.html(screenIn.html() + this.innerHTML)
			operatorOn = true
		}


	})

	//listener for dot
	$(".dot").on( "click", () => {
		let reg = /\./

		if( !reg.test( screenIn.html() ) ) {
		
			screenIn.html( screenIn.html() + "." )
			operatorOn = true
		}	
	})

	//listener for normal key values
	$(".key").on("click", function(){
		//clear out initial zero 
		if(screenIn.html().length === 1 && screenIn.html() == 0){
			screenIn.empty()
		} 
		
		screenIn.html(screenIn.html() + this.innerHTML)
		operatorOn = false
	})
	
	function isValid(str){
	 return !operatorsReg.test(str.charAt(0));
	}

	$(".evaluate").on("click", () => {
		//if there are any special chars in the input string
		// replace result with input (don't do any evaluation)
		if( isValid( screenIn.html() ) ) {

			screenOut.html( resultFromInput ) 
		} else{

			screenOut.html( result )
		}

		//if the result is a float value then return up to 8 decimal places
		
		screenIn.empty()

	})

	$(".clear").on("click", () => {
		//clea out input and output, and insert 0
		screenOut.html(0)
		screenIn.html(0)  

	})
	
	$(".delete").on("click", () => {

		let x = screenIn.html().length 
		//remove last character in the string
		screenIn.html(screenIn.html().substring(0,x-1))

	})
	
	//key bindings for numeric pad
	$('window').keydown( (e) => {

		alert( $(this).val() )

	})

	$(document).keydown(function(e){

		switch(e.which){
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
			case 106: $('#key*').click()
				break
			case 107: $('#key+').click()
				break
			case 109: $('#key-').click()
				break
			case 110: $('#key.').click()
				break
			case 111: $('#key/').click()
				break
			case 13: $('#key=').click()
				break					

		}
	                
	 })
})
