$(document).ready(function(){
	$('.mainwrapper').disableSelection();
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
				
				generateArrays(data);
				
				updateResultsList(data);

			},
			error:function(){
				alert("Search failed");
			}
		});
	});
	
	function toggleSections( className )
	{
		if($('.sectionData.'+className).is(':visible'))
		{
			console.log("It's visible");
			$(".sectionData."+className).hide();
			$('.showSections.'+className).html('Show Sections');	
		}
		else
		{
			console.log('Not Visible');
			$(".sectionData."+className).show();
			$('.showSections.'+className).html('Hide Sections');	
		}
		console.log('class name ' + className);

		/*if($('.sectionData.'+className).is(':visible'))
		{
			$('.sectionData').css('display','block');
		}
		else
		{
			console.log('Not visible');	
		}*/
	}
	
	var searchResults = new Array();
	var selectedCourses = new Array();

	function generateArrays(data)
	{
		var courseNum = null;
		$.each(data, function(key,value)
		{
			
			courseNum = value['courseNum'];
			searchResults.push(new Course(value));

		});
	}

	function Course(value)
	{
		this.courseName = value['CourseName'];
		this.courseNum = value['courseNum'];	
		this.courseName = value['CourseName'];
		this.courseNum = value['courseNum'];	
		this.callNum = value['callNum'];
		this.section = value['sectNum'];
		this.days = value['days'];
		this.startTime = value['start_time'];
		this.endTime = value['end_time'];
		
		this.courseRow = '<div class="courseRow '+this.courseNum+'"><div class="courseInfo">'+this.courseName+'<br>'+this.courseNum+
			'</div><div class="showSections '+this.courseNum+'" id="showSections">Show Sections</div><div class="sectionData '+this.courseNum+'"></div></div>';
		this.sectionRow = '<div class="sectionRow '+this.callNum+'" >Section: '+this.section+' Call: '+this.callNum+'</br>'+this.days+'\t'+
			this.startTime+'-'+this.endTime+'</div>';
		this.selectedRow = '<div class="selectedRow '+this.callNum+'">'+this.courseNum+'<br/>'+this.days+'\t'+this.startTime+'-'+this.endTime+'</div>';
	}

	function updateResultsList(data)
	{
		$('#results').html("");
		var courseNum = null;
		var curRow;
		for(var i =0;i<searchResults.length; i++)
		{
			curRow = searchResults[i];
			if(curRow.courseNum != courseNum)
			{
				//add a course row, and the first section
				courseNum = curRow.courseNum;
				$('#results').append(curRow.courseRow);
				$('.sectionData.'+courseNum).append(curRow.sectionRow);
			}
			else
			{
				//add a section row
				$('.sectionData.'+courseNum).append(curRow.sectionRow);
			}
		}
		$(".sectionData").hide();
		$('.showSections').click(function(event){
			
		toggleSections(event.target.className.split(' ')[1]);
	});
		makeDraggable();
	}

	var dragElement
	function makeDraggable(){
		
		$('.sectionRow').draggable({
			//revert:true,
			helper:'clone',
			connectToSortable: '.selectedcourses',
			revert:true
		});
	
		$('.selectedcourses').sortable({
			receive: function(event, ui){
				console.log('Section Recieved: ' + ui.item.attr('class'));
				var callnum = ui.item.attr('class').split(' ')[1];
				$('.sectionRow.'+callnum).draggable('disable');
			}
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
