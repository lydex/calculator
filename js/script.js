$(document).ready(function() {
	var butt;
	$('.buttons').click(function(){
		butt = $(this).val();


		if(butt==="tan"){
			var exp = $('#input').val();
			var exp2 = eval(exp);
	  	var sol =  Math.tan(exp2);		 
			$('#input').val(sol);
			$('#input').clear();
		}

		else if(butt==="cos"){
			var exp = $('#input').val();
			var exp2 = eval(exp);
			var sol =  Math.cos(exp2);		 
			$('#input').val(sol);
			$('#input').clear();
		}

		else if(butt==="sin"){
			var exp = $('#input').val();
			var exp2 = eval(exp);
	  	var sol =  Math.sin(exp2);		 
			$('#input').val(sol);
			$('#input').clear();
		}

		else if(butt==="c"){
			$('#input').val("");
			$('#input').clear();
		}

		else if(butt==="="){
			var exp = $('#input').val();
			var check =(/\^/.test(exp))
			if(check === true){						
				var arr = [];
		  	arr = exp.split("^");
		  	var left = eval(arr[0]);
		  	var right = eval(arr[1])
		  	console.log(left);
		  	console.log(right)
		  	var sol = Math.pow(Number(left),Number(right));
		  	console.log(sol);
				$('#input').val(sol);				
			}
			else if (check=== false){
				var exp = $('#input').val();
				var sol = eval(exp);		
				$('#input').val(sol);				
			}
			$('#input').clear();
		}
	});	

	$('.buttons').click(function() {
  	var num = $(this).val();
  	var x =$('#input').val();
  	$('#input').val(x+num);
  	});

	$('#root').click(function(){
		var exp = $('#input').val();
		var exp2 = eval(exp);
		var sol =  Math.sqrt(exp2);		 
		$('#input').val(sol);		
	});
});