$(document).ready(function(){
   var $calendar = $('#scheds');
	$('#mandatorySearch').click(function(){
		$.ajax({
			type:'POST',
			url:'Scripts/database.php',
			dataType:'json',
			data:{
				search:$('#searchBox').val()
			},
			success:function(data){
				var html =""
				$('#results').html("");
				$.each(data, function(key, value){
					html = html+'<div class="row" id="'+value['courseNum']+'">'+value['CourseName']+'<br>'+value['courseNum']+'</div>';			
				});
				$('#results').html(html);
				makeDraggable();
			},
			error:function(){
				alert("Search failed");
			}
		});
	
	

	});

var dragElement
function makeDraggable(){

	$(".selectedcourses").sortable(
	{
		update:updateClasses
	});
	$(".row").draggable(
	{
		start:function(event,ui){
			console.log("Drag Started " + event.target.id);
			dragElement = event.target.id;	
		},
		stop: function(event, ui){
			console.log("Drag Stopped ");
			if($('.selectedcourses').find("#"+dragElement).size()>1)
			{
				console.log("Already exists, can't add classes twice");
				$("#" + event.target.id).draggable(
				{
					revert:true
				});
			}
		},
		helper:"clone",
		connectToSortable: '.selectedcourses'
	});
};

function updateClasses(event, ui)
{
	console.log("Recieved item " + event.target.id);
	console.log("Drag Element " + dragElement);
	$(".searchresults #"+dragElement).draggable('disable');

	$.ajax({
			type:'POST',
			url:'Scripts/database.php',
			dataType:'json',
			data:{
				searchSections:event.target.id
			},
			success:function(data){
				alert("Section search complete");
				$("#scheds").weekCalendar();			
},
			error:function(){
				alert("Search failed");
			}
	});
}
});
