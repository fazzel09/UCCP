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
				console.log("Success");
				generateArrays(data);
				
				updateResultsList(data);

			},
			error:function(xhr, ajaxOptions, thrownError){
				if(xhr.status == 200)
				{
					alert("No results found");
				}else
				
				alert("Search failed. Response status: "+xhr.status);
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
	}

	function generateArrays(data)
	{
		searchResults = new Array();
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
		this.startTime = new Time( value['start_time']);
		this.endTime = new Time( value['end_time']);
		this.duration = new Duration(this.startTime, this.endTime);
		this.color = null;
		
		this.courseRow = '<div class="courseRow '+this.courseNum+'"><div class="courseInfo">'
			+this.courseName+'<br>'+this.courseNum+'</div><div class="showSections '+this.courseNum
			+'" id="showSections">Show Sections</div><div class="sectionData '+this.courseNum+'"></div></div>';
		this.sectionRow = '<div class="sectionRow '+this.callNum+'" ><div class="deleteSection '
			+this.callNum+'">X</div><div class="courseNum">'+this.courseNum+'</div><div class="sectionInfo">Section: '
			+this.section+' Call: '+this.callNum+'</div></br>'+this.days+'\t'+
			this.startTime.string+'-'+this.endTime.string+'</div>';
	}
	
	function Time(value)
	{
		var parsed = value.split(':');
		this.hour = parsed[0];
		this.minute = parsed[1];
		if(this.hour > 12)
		{
			this.hourString = this.hour-12;
		}
		else
		{
			this.hourString = this.hour;	
		}
		this.string = this.hourString+':'+this.minute;
	}

	function Duration(start, end)
	{
		this.hours = end.hour-start.hour;
		this.minutes = end.minute-start.minute;
		
		if(this.hours < 0)
		{
			this.hours = this.hours+12;
		}
		if(this.minutes < 0)
		{
			this.hours = this.hours-1;
			this.minutes = this.minutes + 60;
		}
	}
	function updateResultsList(data)
	{
		$('#results').html("");
		var courseNum = null;
		var curRow;
		$('#results').remove('.courseRow');
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

	function makeDraggable(){
		
		$('.sectionRow').draggable({
			//revert:true,
			helper:'clone',
			connectToSortable: '.selectedcourses',
		});
	
		$('.selectedcourses').sortable({
			receive: function(event, ui){
				console.log('Section Recieved: ' + ui.item.attr('class'));
				
				var callNum = ui.item.attr('class').split(' ')[1];
				
				//Find the course corresponding with this callnum
				for(var i=0;i<searchResults.length; i++)
					{
						if(searchResults[i].callNum == callNum)
						{
							console.log('course found');
							var course = searchResults[i];
							break;
						}
					}
				
				if(colorIndex >= colors.length)
				{
					colorIndex = 0;
				}
				course.color = colors[colorIndex];
				colorIndex++;
				
				$('.selectedcourses .sectionRow.'+callNum).css('background-color', course.color);
				$('.sectionRow.'+callNum).draggable('disable');
				addToCalendar(course);
				$('.deleteSection.'+callNum).click( function()
				{
					console.log("Delete Clicked");
					$('.selectedcourses .sectionRow.'+callNum).remove();
					$('.sectionBlock.'+callNum).remove();
					$('.sectionRow.'+callNum).draggable('enable');
					
				});
			}
		});
	};
	
	function addToCalendar(course)
	{
		var startPositionX = Math.round($('.'+course.startTime.hour).position().top + course.startTime.minute/60*hourHeight);
		var blockHeight=(course.duration.hours*hourHeight) + (course.duration.minutes/60*hourHeight);

		
		for(var i=0;i<course.days.length;i++)
		{		
		$('.schedule').append('<div class="sectionBlock '+course.callNum+' '+course.days[i]+'">'+course.callNum+'</div>');
		$('.sectionBlock.'+course.callNum+'.'+course.days[i]).css('width',dayWidth);
		$('.sectionBlock.'+course.callNum+'.'+course.days[i]).css('height',blockHeight);
		$('.sectionBlock.'+course.callNum+'.'+course.days[i]).css('background-color',course.color);
		$('.sectionBlock.'+course.callNum+'.'+course.days[i]).css('top',startPositionX);
		console.log("course Day: "+$('.'+course.days[i]).position());
		$('.sectionBlock.'+course.callNum+'.'+course.days[i]).css('left',$('.'+course.days[i]).position().left + 'px');
		}
	};
		
	var searchResults = new Array();
	var selectedCourses = new Array();
	var hourHeight = $('.08').position().top - $('.07').position().top
	var dayWidth = 60;
	var colors = new Array('blue', 'red','orange','green','yellow','pink','purple');
	var colorIndex = 0;
});
