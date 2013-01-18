$(document).ready(function(){
	$('body').disableSelection();
	
	$('#mandatorySearch').click(function(){
		$.ajax({
			type:'POST',
			url:'Scripts/database.php',
			dataType:'json',
			data:{
				search:$('#searchBox').val()
			},
			success:function(data){
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
	
	$('#selectionSearch').click(function()
	{
	if(searchStartTime.length<3)
		{
			searchStartTime+=':00';	
		}
		else
		{
			searchStartTime = searchStartTime.substring(0, 2) + ':' + searchStartTime.substring(2, searchStartTime.length)
		}
		
		if(searchEndTime.length<3)
		{
			searchEndTime+=':00';
		}
		else
		{
			searchEndTime = searchEndTime.substring(0, 2) + ':' + searchEndTime.substring(2, searchEndTime.length)
		}
		
		console.log('Days: '+searchDay+', Times: '+searchStartTime+'-'+searchEndTime);
		
		$.ajax({
			type:'POST',
			url:'Scripts/database.php',
			dataType:'json',
			data:{
				selectionSearchDay: searchDay, 
				searchStartTime: searchStartTime,
				searchEndTime: searchEndTime
			},
			success:function(data){
				console.log("sectionSearch success");
				generateArrays(data);
				updateResultsList(data);
				$('#selectionBox').remove();
				$('.selectionOptions').css('display','none');
			},
			error:function(xhr, ajaxOptions, thrownError)
			{
				console.log("selectionSearch failed" + thrownError);
				if(xhr.status == 200)
				{
					alert("No results found");
				}
				else
				{
				alert("Search failed. Response status: "+xhr.status);
				}
			}
		});
	});
	
	$('#cancelSelection').click(function(e)
	{
		$('#selectionBox').remove();
		$('.selectionOptions').css('display','none');
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
		
		for(var i=0; i<selectedCourses.length; i++)
		{
			$('#results .sectionRow.'+selectedCourses[i].callNum).draggable('disable');	
		}
	
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
				selectedCourses.push(course);
				
				$('.deleteSection.'+callNum).click( function()
				{
					console.log("Delete Clicked");
					deleteSelectedCourse(callNum);
				});
			}
		});
	};
	
	function addToCalendar(addedCourse)
	{
		var startPositionX = Math.round($('.'+addedCourse.startTime.hour).position().top + addedCourse.startTime.minute/60*hourHeight);
		var blockHeight=(addedCourse.duration.hours*hourHeight) + (addedCourse.duration.minutes/60*hourHeight);
		
		
		updateDayArrays(addedCourse.days, addedCourse, addCourseToDayArray)
		//For each day the section is on, compute the width
		for(var i=0;i<addedCourse.days.length;i++)
		{	
			var addedCourseDay = addedCourse.days[i];
			
			$('.schedule').append('<div class="sectionBlock '+addedCourse.callNum+' '+addedCourseDay+'"></div>');
			$('.sectionBlock.'+addedCourse.callNum+'.'+addedCourseDay).css('width',dayWidth);
			$('.sectionBlock.'+addedCourse.callNum+'.'+addedCourseDay).css('height',blockHeight);
			$('.sectionBlock.'+addedCourse.callNum+'.'+addedCourseDay).css('background-color',addedCourse.color);
			$('.sectionBlock.'+addedCourse.callNum+'.'+addedCourseDay).css('top',startPositionX);
			console.log("course Day: "+$('.'+addedCourseDay).position());
			$('.sectionBlock.'+addedCourse.callNum+'.'+addedCourseDay).css('left',$('.'+addedCourseDay).position().left+'px');
		}

		//updateDisplay(addedCourse);
		updateDayArrays(addedCourse.days, addedCourse.callNum, checkConflicts);
	};
	function addCourseToDayArray(array, course, notUsed)
	{
		var startHour = course.startTime.hour;
		var startMin = course.startTime.minute;
		var startIndex = ((course.startTime.hour-7) * 12)+(course.startTime.minute/5);
		var endIndex = ((course.endTime.hour-7) * 12)+(course.endTime.minute/5);
		
		for(var i=startIndex; i<=endIndex; i++)
		{
			addCourse(course.callNum, array[i]);	
		}
	}
	
	function addCourse(callNum, calendarBlock)
	{
		calendarBlock.courses.push(callNum);	
	}
	function outputCourseDayArrays()
	{
		for(var i=0; i<monday.length; i++)
		{
			console.log('M '+ monday[i].courses[0] + 'T' +tuesday[i].courses[0]);	
		}
	}
	

	
	function CalendarBlock(value)
	{
		if(value == null)
		{
			this.courses = new Array()
			return;
		}
		
		
		this.courses.push(callNum);	
		
	}
	
	function updateDayArrays(days, callNum, operation)
	{
		for(i=0;i<days.length;i++)
		{
			switch(days[i])
			{
				case 'M':
					operation(monday, callNum, 'M');
				break;
				case 'T':
					operation(tuesday, callNum, 'T');
					break;
				case 'W':
					operation(wednesday, callNum, 'W');
					break;
				case 'R':
					operation(thursday, callNum, 'R');
					break;
				case 'F':
					operation(friday, callNum, 'F');
					break;
				default:
					break;		
			}
		}
	}
	
	function checkConflicts(dayArray, callNum, day)
	{
		for(var i=0; i<dayArray.length; i++)
		{
			var curBlock = dayArray[i]
			
			for(var j=0;j<curBlock.courses.length;j++)
			{
				$('.sectionBlock.'+curBlock.courses[j]+'.'+day).css('width',dayWidth/curBlock.courses.length);
				$('.sectionBlock.'+curBlock.courses[j]+'.'+day).css('left',($('.'+day).position().left)+j*60/curBlock.courses.length+'px');
			}		
		}
	}
	
	function removeCourseFromDayArray(dayArray, callNum, day)
	{
		for(var i=0; i<dayArray.length; i++)
		{
			var curBlock = dayArray[i];
			for(var j=0; j<curBlock.courses.length;j++)
			{
				if(curBlock.courses[j] == callNum)
				{
					curBlock.courses.splice(j,1);	
				}
			}
		}
	}

	function deleteSelectedCourse(callNum)
	{
		$('.selectedcourses .sectionRow.'+callNum).remove();
		$('.sectionBlock.'+callNum).remove();
		$('.sectionRow.'+callNum).draggable('enable');
		for(var i=0; i<selectedCourses.length; i++)
		{
			if(selectedCourses[i].callNum == callNum)
			{
				selectedCourses.splice(i,1);
				break;
			}
		}
		updateDayArrays('MTWRF', callNum, removeCourseFromDayArray);
		updateDayArrays('MTWRF', callNum, checkConflicts);
		
	};
	
	function outputSelectedCourses()
	{
		console.log("selectedCourses: ");
		for(var i =0;i<selectedCourses.length; i++)
		{
			console.log(i+": "+selectedCourses[i].callNum);
		}
	}
	
	$('#selectionBox').dblclick(function(e)
	{
			console.log('Double Click');	
	});
	
	function resetSelectionListeners()
	{
		$('.calendar td').mousedown(function(e)
		{
			$('.selectionOptions').css('display', 'inline');
			console.log('target: '+e.target.className);
			var target = e.target;
			
			searchStartTime = e.target.className.split(' ')[0];
			searchDay = e.target.className.split(' ')[1];
			
			var top = $(this).offset().top;
			var left = $(this).offset().left;
			
			$('body').append('<div id="selectionBox"></div>');
			$('#selectionBox').css('top', top);
			$('#selectionBox').css('left', left);
			$('#selectionBox').css('width', dayWidth);
			$('#selectionBox').css('height', '0');
	
			$('.calendar .'+target.className.split(' ')[1]+', #selectionBox').mouseover(function(e)
			{
				$('#selectionBox').css('height', ($(this).offset().top - top))
			});
			
			$('#selectionBox, .calendar td').mouseup(function(e)
			{
				searchEndTime = e.target.className.split(' ')[0];
				$('#selectionBox, .calendar td').unbind();
				console.log('mouseup '+e.target.className);
				resetSelectionListeners();
			});
		});
	}
	
	resetSelectionListeners();
		
		
	
	$('#searchDialog').dialog({
		autoOpen:false,
		modal:true,
		height:200,
		buttons:{ "Search":function(){console.log('Search');}, "Cancel":			function(){$(this).dialog("close");}},
		close:function(){$('#selectionBox').remove();}
	});
	
	var searchStartTime;
	var searchEndTime;
	var searchDay;
		
	var searchResults = new Array();
	var selectedCourses = new Array();
	var hourHeight = $('.08').position().top - $('.07').position().top
	var dayWidth = 60;
	var colors = new Array('blue', 'red','orange','green','yellow','pink','purple');
	var colorIndex = 0;
	
	var monday = new Array();
	var tuesday = new Array();
	var wednesday = new Array();
	var thursday = new Array();
	var friday = new Array();
	
	for(var i=0;i<169;i++)
	{
		monday[i]=new CalendarBlock(null);
		tuesday[i]=new CalendarBlock(null);
		wednesday[i]=new CalendarBlock(null);
		thursday[i]=new CalendarBlock(null);
		friday[i]=new CalendarBlock(null);
	}
	
	var hour =12;
	var halfHour = 6;
	var quarterHour = 3;
});
