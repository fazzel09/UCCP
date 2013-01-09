$(document).ready(function(){
	
	$('#results').click(function(event){
		console.log('Expand sections: ' + event.target.className);	
		toggleSections(event.target.className.split(' ')[1]);
	});
	$('#mandatorySearch').click(function(){
		$.ajax({
			type:'POST',
			url:'Scripts/database.php',
			dataType:'json',
			data:{
				search:$('#searchBox').val()
			},
			success:function(data){
				var html ="";
				
				updateResultsList(data)

			},
			error:function(){
				alert("Search failed");
			}
		});
	});
	
	function toggleSections( className )
	{
		console.log('class name' + className);
		if($('.sectionRow '+className).is(':visible'))
		{
			console.log('Is visible');
		}
		else
		{
			console.log('Not visible');	
		}
	}

function updateResultsList(data)
{
	$('#results').html("");
	var courseNum = null;
	$.each(data, function(key, value){
		
		if(value['courseNum'] != courseNum)
		{
			/*Generate the class row, and the first section row */
			courseNum = value['courseNum'];
			$('#results').append('<div class="courseRow '+value['courseNum']+'"><div class="courseInfo">'+value['CourseName']+'<br>'+value['courseNum']+'</div>'+
			'<div class="showSections '+ value['courseNum']+'">Show Sections</div><div class="sectionData'+value['courseNum']+'"></div></div>');	
			console.log('Adding sections');
			insertSectionInfo(value);
		}
		else
		{	
			insertSectionInfo(value);
		}

				
	});
	makeDraggable();
}

function insertSectionInfo(value)
{
	$('.sectionData'+value['courseNum']).append('<div class="sectionRow '+value['callNum']+'" >Section: '+value['sectNum']+' Call: '+value['callNum']+'</br>'+value['days']+'\t'+value['start_time']+'-'+value['end_time']+'</div>');
}
var dragElement
function makeDraggable(){
	
$('.sectionRow').draggable({
	//revert:true,
	helper:'clone',
	connectToSortable: '.selectedcourses',
});

$('.selectedcourses').sortable({
	receive: function(event, ui){
		console.log('Section Recieved: ' + ui.item.attr('class'));
	}
});
	
	
	$(".selectedcourses").sortable(
	{
		
	update:updateClasses
	});
	$(".sectionRow").draggable(
	{
		start:function(event,ui){
			console.log("Drag Started " + event.target.className );
			dragElement = event.target.className;	
		},
		stop: function(event, ui){
			console.log("Drag Stopped ");
			if($('.selectedcourses').find("."+dragElement).size()>1)
			{
				console.log("Already exists, can't add classes twice");
				$("." + event.target.className).draggable(
				{
					revert:true
				});
			}
			updateClasses(event, ui);
		},
		helper:"clone",
	});
};


function updateClasses(event, ui)
{
	console.log("Recieved item " + dragElement);
	console.log("Drag Element " + dragElement);
	//$(".searchresults "+dragElement).draggable('disable');
	
	$rowDelete = $('.selectedcourses '+dragElement+' > .delete');
	$row = $('.selectedcourses '+dragElement);
	
	$row.bind('mouseover',function(e) {
	  	console.log("dragElement" + dragElement);
		$rowDelete.css('display', 'block');

      return false;
    });
	
	$row.bind('mouseout',function(e) {
	  	console.log("mouseOut");
		$rowDelete.css('display', 'none');

      return false;
    });
	
	$rowDelete.bind('click', function(e){
		console.log("Delete Clicked");
		$row.remove();
	});
/*	$row.hover(function(){
		console.log("Test");
		console.log("dragElement");
		$rowDelete.css('display', 'block');
		//$rowDelete.css('float','right');
	});
	
	$row.mouseout(function(){
		console.log("Mouse out");
		$rowDelete.css('display', 'none');

	});
	*/
}
});
