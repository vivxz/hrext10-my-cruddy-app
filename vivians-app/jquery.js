// $(document).ready(function() {
// //Check Off Specific Todos By Clicking
// 	$("ul").on("click", "li", function(){
// 		$(this).toggleClass("completed");
// 	}); 

// 	//Click on X to delete todo
// 	// Second argument specifies allies that may or may not be on the page yet
// 	$("ul ").on("click", "span", function(event){
// 		//.parent() gives you the li because it only removes the span
// 		$(this).parent().fadeOut(500, function(){
// 	        // localStorage.setItem('todo', JSON.stringify(todos));
// 			$(this).remove();
// 		});
// 		//Stops it from bubbling up to other elements
// 		event.stopPropagation();
// 	});

// 	$("input[type='text']").keypress(function(event){
// 		if(event.which === 13){
// 			//Grabbing new todo text from input
// 			var todoText = $(this).val();
// 	        // localStorage.setItem('todo', JSON.stringify(todos));
// 			//Clear out the input
// 			$(this).val("");
// 			//Create a new li and add to ul
// 			$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + " </li>");

// 		}
// 	});

// 	$(".fa-plus").click(function(){
// 		$("input[type='text']").fadeToggle();
// 	});
// });