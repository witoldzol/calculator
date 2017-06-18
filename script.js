$(document).ready(function(){

	let operatorOn = true
	let screenIn = $( ".screen-input" )
	let screenOut = $( ".screen-output" )
	let result = () => eval( screenIn.html() )

	//listener for operator keys
	$(".operator").on( "click", function(){

		//if we pressed operator key previously, it will not register again
		if( !operatorOn ){
			
			screenIn.html(screenIn.html() + this.innerHTML)
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
	

	$(".evaluate").on("click", () => 
		//if the result is a float value then return up to 8 decimal places
		screenOut.html( result )

	)

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
	
	

		

})
