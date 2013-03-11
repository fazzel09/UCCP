$(document).ready(function(){
	$('body').disableSelection();
	$('#results').nanoScroller();
	
	/* ----- Data types used for local course information ----- */
	function Course(value)
	{
		this.courseName = value['CourseName'];
		this.courseNum = value['courseNum'];	
		this.callNum = value['callNum'];
		this.section = value['sectNum'];
		this.days = value['days'];
		this.startTime = new Time( value['start_time']);
		this.endTime = new Time( value['end_time']);
		this.duration = new Duration(this.startTime, this.endTime);
		this.color = getRandomColor();
		
		// These are the rows in the search results list.
		this.courseRow = '<div class="courseRow '+this.courseNum+'"><div class="courseInfo">'+this.courseNum+':'+this.courseName+'</div><img class="showSections '
			+this.courseNum	+'" id="showSections" ><div class="sectionData '+this.courseNum+'"></div></div>';
		this.sectionRow = '<div class="sectionRow '+this.callNum+'" ><div class="deleteSection '
			+this.callNum+'">X</div><div class="courseNum">'+this.courseNum+'</div><div class="sectionInfo">'+this.days+':'+this.startTime.string+'-'
			+this.endTime.string+' Instructor here</div><img class="sectionAddButton '+this.callNum+'"></div>';
		
		//The detailed information that goes into the popover when you mouse over a section on the calendar.	
		this.detailedSectionInfo = '<table>'
			+'<tr><td>Course Number</td><td>'+this.courseNum+'</td></tr>'
			+'<tr><td>Call Number</td><td>'+this.callNum+'</td></tr>'
			+'<tr><td>Days</td><td>'+this.days+'</td></tr>'
			+'<tr><td>Times</td><td>'+this.startTime.string+'-'+this.endTime.string+'</td></tr>'
			+'</table>';
			
		// This is the blocks displayed over the calendar
		this.sectionBlock = '<div class="deleteSection '+this.callNum+'">X</div><div class="courseNum">'+this.courseNum+'</div>';
	}
	
	function Time(value)
	{
		var parsed = value.split(':');
		this.hour = parsed[0];
		this.minute = parsed[1];
		this.numeric = parseInt(this.hour+this.minute);
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
	
	function TimeSlot(course)
	{
		this.courses = new Array();
		this.courses.push(course);
		this.startTime = course.startTime.numeric;
		this.endTime = course.endTime.numeric;	
		this.sectionBlocks = new Array();	
		this.sectionBlocks.push(new SectionBlock(course));
	}

	function Day()
	{
		this.timeSlots = new Array();
		this.sectionBlocks = new Array();
	}
	
	function SectionBlock(course)
	{
		this.course = course;
		this.width = dayWidth;
		this.conflicts = 0;
	}
	
	/* ----- search Functions -----*/
	function search()
	{
		$('.selectionBox').css('opacity','.5');
		if(!searchStartTime)
		{
			searchStartTime='0700';
			searchEndTime='2200';
		}

		//Add a '00' onto the end of times with only the hours: 10 becomes 1000
		if(searchStartTime.length<3)
		{
			searchStartTime+=00;	
		}
		
		if(searchStartTime>searchEndTime)
		{
			var temp = searchStartTime;
			searchStartTime = searchEndTime;
			searchEndTime = temp;	
		}
			
		searchStartTime = searchStartTime.substring(0, 2) + ':' + searchStartTime.substring(2, searchStartTime.length);
		
		
		if(searchEndTime.length<3)
		{
			searchEndTime+=':00';
		}
		else
		{
			searchEndTime = searchEndTime.substring(0, 2) + ':' + searchEndTime.substring(2, searchEndTime.length)
		}
		
		console.log('start: '+searchStartTime+', end: '+searchEndTime);
		$.ajax({
			type:'POST',
			url:'Scripts/database.php',
			dataType:'json',
			data:{
				search:$('#searchBox').val(),
				days:searchDays,
				startTime:searchStartTime,
				endTime:searchEndTime,
				discipline:searchDiscipline,
				college:searchCollege,
				bok:searchBOK
			},
			success:function(data){
				console.log("Success");
				generateArrays(data);
				addFilter($('#searchBox').val());
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
		resetSearchItems();		
	}
	
	/* Adding a filter to the search */
	function addFilter( filter )
	{
		//console.log("adding filter");
		// need to add to the filters array as well
		$('#filters').append('<div class="oneFilter" id="filter-'+filter+'">'+filter+'</div>');
		$('#filter-'+filter).append('<div class="deleteFilter">X</div>');
		$('#filter-'+filter).find('.deleteFilter').click(function(e)
			{
				$('#filter-'+filter).remove();
				//need to remove from the filters array as well.
			});
	}
	
	/* ----- Selection functions, picking time slots on Calendar ----- */
	
	/* Removes the selection box when cancel is clicked. */
	$('#cancelSelection').click(function(e)
	{
		$('.selectionBox').remove();
		$('.selectionOptions').css('display','none');
	});
	
	
	/*Search results functions: formatting, switching displays, etc */

	/*Add a new course to the search results array*/
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

	/*Replaces the previous results list with the most recent results */
	function updateResultsList(data)
	{
		$('#results .content').html("");
		var courseNum = null;
		var curRow;
		$('#results .content').remove('.courseRow');
		for(var i =0;i<searchResults.length; i++)
		{
			curRow = searchResults[i];
			if(curRow.courseNum != courseNum)
			{
				//add a course row, and the first section
				courseNum = curRow.courseNum;
				$('#results .content').append(curRow.courseRow);
				$('.sectionData.'+courseNum).append(curRow.sectionRow);
				setSectionRowListeners(curRow.callNum);
				$('.sectionRow.'+curRow.callNum).css('background', 'rgba('+curRow.color+')');
			}
			else
			{
				//add a section row
				$('.sectionData.'+courseNum).append(curRow.sectionRow);
				setSectionRowListeners(curRow.callNum);
				$('.sectionRow.'+curRow.callNum).css('background', 'rgba('+curRow.color+')');
			}
		}
		$(".sectionData").hide();
		
		$('#results').nanoScroller();
		$('.showSections').toggle(
		function(event){
			$(".sectionData."+event.target.className.split(' ')[1]).show();
			$(this).toggleClass('expanded');
			$('#results').nanoScroller();
		},
		function(event){
			$(".sectionData."+event.target.className.split(' ')[1]).hide();
			$(this).toggleClass('expanded');
			$('#results').nanoScroller();
		});
	}

	/*Set all the listeners on the section rows in the results list*/
	function setSectionRowListeners(callNum){
		//If we already selected this course, make it not draggable.
		for(var i=0; i<selectedCourses.length; i++)
		{
			if(callNum == selectedCourses[i].callNum)
			{
				$('.sectionRow.'+callNum).toggleClass('disabled', true);
				return;
			}
		}
		
		var row = $('#results .sectionRow.'+callNum);
		
		$('.sectionAddButton.'+callNum).attr('cursor', 'pointer');
		
		row.dblclick(function(e)
		{
			console.log('DblClick: '+$(this).attr('class'));
			addSection($(this).attr('class').split(' ')[1]);
		});
		
		row.click(function(e)
		{
			addSection($(this).attr('class').split(' ')[1]);
		});
		
		//Shows the section overlay on the calendar when we hover over a section.
		row.hover(
		function(e)
		{
			displaySectionOverlay($(this).attr('class').split(' ')[1]);
		},
		function(e)
		{
			$('.sectionOverlay').remove();
		});
	};
	
	//Search the selected courses for a given callNum.
	function findCourse(callNum)
	{
		for(var i=0;i<selectedCourses.length; i++)
		{
			if(selectedCourses[i].callNum == callNum)
			{
				console.log('course found');
				return selectedCourses[i];
			}
		}
		for(var i=0;i<searchResults.length; i++)
		{
			if(searchResults[i].callNum == callNum)
			{
				console.log('course found');
				return searchResults[i];
			}
		}

		return null;
	}
	
	function displaySectionOverlay(callNum)
	{
		var addedCourse = findCourse(callNum);
		
		var startPositionY = Math.round(($('.'+addedCourse.startTime.hour).offset().top - $('#calendar').offset().top)+ addedCourse.startTime.minute/60*hourHeight);
		
		var blockHeight=(addedCourse.duration.hours*hourHeight) + (addedCourse.duration.minutes/60*hourHeight);
		
		//For each day the section is on, compute the width
		for(var i=0;i<addedCourse.days.length;i++)
		{	
			var addedCourseDay = addedCourse.days[i];
			var startPositionX = $('.'+addedCourseDay).offset().left - $('#calendar').offset().left
			
			$('#calendar').append('<div class="sectionOverlay '+addedCourse.callNum+' '+addedCourseDay+'">'+addedCourse.sectionBlock+'</div>');
			$('.sectionOverlay.'+addedCourse.callNum+'.'+addedCourseDay).css({width:dayWidth,
				height:blockHeight,
				top:startPositionY,
				left:startPositionX+20,
				background: 'rgba('+addedCourse.color+')',
				width: dayWidth-20
			});
		}
	}
	
	//Add a section to the appropriate arrays
	function addSection(callNum)
	{
		$('.selectionBox').remove();
		$('.sectionOverlay').remove();
		//Find the course corresponding with this callnum
		var course = findCourse(callNum);
		
/*		//If the course doesn't already exist, add the course to the selected Courses box.
		if(!$('s .sectionRow.'+callNum).is('*'))
		{
			$('s').append(course.sectionRow);	
		}*/
	
		$('.sectionRow.'+callNum).css('background', 'rgba('+course.color+')');
		//$('.sectionRow.'+callNum).draggable('disable');
		$('#results .content .'+callNum).unbind();
		$('.sectionAddButton.'+callNum).unbind()
		$('.sectionRow.'+callNum).attr('cursor', 'default');
		$('.sectionRow.'+callNum).toggleClass('disabled', true);
		
		addToCalendar(course);
		selectedCourses.push(course);
		
		$('.deleteSection.'+callNum).click( function()
		{
			console.log("Delete Clicked");
			deleteSelectedCourse(callNum);
		});
	}
	
	//Adds a section to the calendar
	function addToCalendar(addedCourse)
	{
		var startPositionY = Math.round(($('.'+addedCourse.startTime.hour).offset().top - $('#calendar').offset().top)+ addedCourse.startTime.minute/60*hourHeight);
		
		var blockHeight=(addedCourse.duration.hours*hourHeight) + (addedCourse.duration.minutes/60*hourHeight);
		
		//Add the course to the day arrays.
		iterateOverDays(addedCourse.days, addedCourse, addCourseToDayArray);
		
		//For each day the section is on, compute the size, color, etc...
		for(var i=0;i<addedCourse.days.length;i++)
		{	
			var addedCourseDay = addedCourse.days[i];
			var startPositionX = $('.'+addedCourseDay).offset().left - $('#calendar').offset().left
			
			$('#calendar').append('<div class="sectionBlock '+addedCourse.callNum+' '+addedCourseDay+'">'+addedCourse.sectionBlock+'</div>');
			$('.sectionBlock.'+addedCourse.callNum+'.'+addedCourseDay).css({
				'width':dayWidth,
				'height':blockHeight,
				'background':'rgba('+addedCourse.color+')',
				'top':startPositionY} );
		}
		
		iterateOverDays(addedCourse.days, addedCourse.callNum, checkConflicts);
		
		$('.sectionBlock').hover(function(e)
		{
			console.log('Hover: '+$(this).attr('class'));
			console.log('Height: '+$(this).height());
			
			var course = findCourse($(this).attr('class').split(' ')[1]);
			
			$('#sectionInfoDialog').dialog( "option", "title", course.courseName);
			$('#sectionInfoDialog').html(course.detailedSectionInfo);
			$('#sectionInfoDialog').dialog( "option", "position", [e.pageX+20,$(this).offset().top +$(this).height() - $(window).scrollTop()+20] );
			$('#sectionInfoDialog').dialog('open');
			
		},
		function(e)
		{
			console.log('HoverOut');
			$('#sectionInfoDialog').dialog('close');
		});
	};
	
	/* add a new course to the approprate Day Array */
	function addCourseToDayArray(array, course, dayChar)
	{
/*		var startHour = course.startTime.hour;
		var startMin = course.startTime.minute;
		var startIndex = ((course.startTime.hour-7) * 12)+(course.startTime.minute/5);
		var endIndex = ((course.endTime.hour-7) * 12)+(course.endTime.minute/5);
		
		for(var i=startIndex; i<=endIndex; i++)
		{
			array[i].courses.push(course.callNum);
		}*/
		
		for(var i=0; i<array.timeSlots.length; i++)
		{
			var timeSlot = array.timeSlots[i];
			var inserted = false;
			if((course.startTime.numeric >= timeSlot.startTime && course.startTime.numeric <= timeSlot.endTime)||
				(course.endTime.numeric >= timeSlot.startTime && course.endTime.numeric <= timeSlot.endTime))
			{
				inserted = true;
				if(course.startTime.numeric < timeSlot.startTime)
				    timeSlot.startTime = course.startTime.numeric;
				if(course.endTime.numeric > timeSlot.endTime)
					timeSlot.endTime = course.endTime.numeric;	
					
				timeSlot.courses.push(course);
				timeSlot.sectionBlocks.push(course);
			}
		}
		
		if(!inserted)
		{
			array.timeSlots.push(new TimeSlot(course));	
		}
	}
/*	
	function addToTimeSlot(timeSlot, course)
	{
		for(var i =timeSlot.courses.length-1; i>=0; i++)
		{
			if(
		}
	}*/
	
	// Each element in selectedcourses is a "calendarBlock", it has an array of courses that are currently selected at that particular time.
	function CalendarBlock(value)
	{
		if(value == null)
		{
			this.courses = new Array()
			return;
		}	
		this.courses.push(callNum);	
	}
	
	function iterateOverDays(days, variable, operation)
	{
		for(i=0;i<days.length;i++)
		{
			switch(days[i])
			{
				case 'M':
					operation(monday, variable, 'M');
					break;
				case 'T':
					operation(tuesday, variable, 'T');
					break;
				case 'W':
					operation(wednesday, variable, 'W');
					break;
				case 'R':
					operation(thursday, variable, 'R');
					break;
				case 'F':
					operation(friday, variable, 'F');
					break;
				case 'S':
					operation(saturday, variable, 'S');
					break;
				case 'U':
					operation(sunday, variable, 'U');
					break;
				default:
					break;		
			}
		}
	}
	
	function checkConflicts(dayArray, callNum, day)
	{	
		for(var i = 0;i< dayArray.timeSlots.length; i++)
		{
			timeSlot = dayArray.timeSlots[i];
			var numRows = 0;
			for(var j=timeSlot.startTime; j<=timeSlot.endTime; j+=5)
			{
				var numConflicts = 0;
				var conflictedCourses = new Array();
				for(var k = 0; k<timeSlot.courses.length; k++)
				{
					var course = timeSlot.courses[k];
					if(course.startTime.numeric >= j && j <= course.endTime.numeric)
						numConflicts++;
					
					conflictedCourses.push(course);
				}
				for(var k = 0;k<conflictedCourses.length;k++)
					setSectionBlockConflicts(timeSlot.sectionBlocks, conflictedCourses[k], numConflicts);
				if(numConflicts > numRows)
					numRows = numConflicts;
			}
			var rowIndex = 0;
			for(var j = 0; j<timeSlot.sectionBlocks.length; j++)
			{
				var sectBlock = timeSlot.sectionBlocks[j];
				var rowWidth = dayWidth/numRows;
				var blockWidth = rowWidth * (numRows - sectBlock.conflicts);
				var left = $('.'+day).position().left+(rowWidth*rowIndex);
				rowIndex++;
				if(rowIndex>= numRows)
					rowIndex = 0;
				
				$('.sectionBlock.'+sectBlock.course.callNum+'.'+day).css({
				'width':rowWidth,
				'left':left});
			}
		}
		
		console.log("NumRows: "+numRows);
	}
	
	function setSectionBlockConflicts(sectionBlocks, course, numConflicts)
	{
		for(var i = 0; i<sectionBlocks.length; i++)
		{
			var sectionBlock = sectionBlocks[i];	
			if(sectionBlock.course == course)
			{
				if(sectionBlock.conflicts < numConflicts)
				{
					sectionBlock.conflicts = numConflicts
				}
				break;
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
		$('#sectionInfoDialog').dialog('close');
		$('s .sectionRow.'+callNum+', .sectionBlock.'+callNum).remove();
		//$('.sectionBlock.'+callNum).remove();
		$('.sectionRow.'+callNum).toggleClass('disabled', false);
		
		for(var i=0; i<selectedCourses.length; i++)
		{
			if(selectedCourses[i].callNum == callNum)
			{
				selectedCourses.splice(i,1);
				break;
			}
		}
		iterateOverDays('MTWRF', callNum, removeCourseFromDayArray);
		iterateOverDays('MTWRF', callNum, checkConflicts);
		
		setSectionRowListeners(callNum);
	};
	
	function outputSelectedCourses()
	{
		console.log("SelectedCourses: ");
		for(var i =0;i<selectedCourses.length; i++)
		{
			console.log(i+": "+selectedCourses[i].callNum);
		}
	}
	
	//When you double click on the calendar, find the free space before and after the location of your click.
	function findFreeSlot(array, index, day)
	{
		var startIndex = index;
		var endIndex = index;
		for(var i=index; i<array.length; i++)
		{
			if(array[i].courses.length == 0)
				endIndex = i;	
			else
				break;
		}
		
		for(var i=index-1; i>=0; i--)
		{
			if(array[i].courses.length == 0)
				startIndex = i;	
			else
				break;
		}
		
		var duration = endIndex - startIndex;
		
		var height = duration/12 * hourHeight;
		var left = $('.'+day).position().left+'px';
		var top = (startIndex/12*hourHeight) +($('.07.M').position().top);
		$('.selectionBox').remove();
		$('#calendar').append('<div class="selectionBox '+day+'"></div>');
		$('.selectionBox').css('top', top);
		$('.selectionBox').css('left', left);
		$('.selectionBox').css('width', dayWidth);
		$('.selectionBox').css('height', height);
		
		searchDay = day;
		var hour = Math.floor((startIndex/12) + 7) 
		if(hour<10)
		{
			hour = '0'+hour;	
		}
		var minute = (startIndex%12)*5;
		if(minute<10)
		{
			minute = '0'+minute;
		}
		searchStartTime = hour +''+ minute;
		
		var hour = Math.floor((endIndex/12) + 7) 
		if(hour<10)
			hour = '0'+hour;	
		
		
		var minute = (endIndex%12)*5;
		if(minute<10)
		{
			minute = '0'+minute;
		}
		
		searchEndTime = hour +''+minute;
		
		console.log('startTime: '+searchStartTime+', '+searchEndTime);
	}
	
	$('#calendar table').dblclick(function(e)
	{
		console.log('doubleClick');
		var time = e.target.className.split(' ')[0];
		var day = e.target.className.split(' ')[1];
		if(time.length == 2)
		{
			var index = (time - 7) * 12;
		}
		else
		{
			var index = ((time.slice(0,2)-7)*12) + 6;	
		}
		
		iterateOverDays(day, index, findFreeSlot);
		search();
	});
	
	//Reset the listeners that display the selection box over the calendar. This must be done after a selection, to be ready for the next selection.
	function resetSelectionListeners()
	{		
		$('#calendar td').mousedown(function(e)
		{	
			searchStartTime = e.target.className.split(' ')[0];
			searchDay = e.target.className.split(' ')[1];
			
			var top = $(this).offset().top - $('#calendar').offset().top;
			var left = $(this).offset().left - $('#calendar').offset().left;
			$('.selectionBox').remove();
			
			$('#calendar').append('<div class="selectionBox '+searchDay+'"></div>');
			$('.selectionBox').css({'top': top, 'left': left, 'width': dayWidth, 'height': '0'});
	
			$('#calendar .'+searchDay+', .selectionBox').mousemove(function(e)
			{
				//console.log('target: ' + e.target.className);
				var height = e.pageY - $('#calendar').offset().top - top;
				if(height<0)
				{
					$('.selectionBox').css('top', top+height+2);
					height = Math.abs(height) - 2;	
				}
				else
				{
					$('.selectionBox').css('top', top);	
				}
				$('.selectionBox').css('height', height)
			});
			
			$('#calendar td').mouseup(function(e)
			{
				searchEndTime = e.target.className.split(' ')[0];
				$('.selectionBox, #calendar td, #calendar, #calendar .'+searchDay+', .sectionBlock').unbind();
				console.log('mouseup '+e.target.className+' Start/end time: '+searchStartTime+'/'+searchEndTime);
				resetSelectionListeners();
				if(searchStartTime != searchEndTime)
				{
					search();	
				}
			});
			
			$('.sectionBlock').mouseover(function(e)
			{
				$('.selectionBox, #calendar td, #calendar, #calendar .'+searchDay+', .sectionBlock').unbind();
				console.log('mouseup '+e.target.className);
				resetSelectionListeners();
			});
		});
		
		//Add a listener on the section block on the calendar to overlay detailed section info.
		$('.sectionBlock').hover(function(e)
		{
			console.log('Hover: '+$(this).attr('class'));
			console.log('Height: '+$(this).height());
			
			var course = findCourse($(this).attr('class').split(' ')[1]);
			
			$('#sectionInfoDialog').dialog( "option", "title", course.courseName);
			$('#sectionInfoDialog').html(course.detailedSectionInfo);
			$('#sectionInfoDialog').dialog( "option", "position", [$(this).offset().left+20,$(this).offset().top +$(this).height() - $(window).scrollTop()+20] );
			$('#sectionInfoDialog').dialog('open');
			
		},
		function(e)
		{
			console.log('HoverOut');
			$('#sectionInfoDialog').dialog('close');
		});
	}
	
	
				
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '';
		for (var i = 0; i < 3; i++ ) {
			color += Math.round(Math.random() * 155 + 100)+', ';
		}
		color += '1'
		console.log('Color'+color);
		return color;
	}
	
	$(window).resize(function(e)
	{
		console.log('Resize');
		dayWidth = $('.T').position().left - $('.M').position().left;
		
		if($('.selectionBox').length)
		{
			$('.selectionBox').css('width',dayWidth);
			$('.selectionBox.M').css('left',$('.M').offset().left - $('#calendar').offset().left);
			$('.selectionBox.T').css('left',$('.T').offset().left - $('#calendar').offset().left);
			$('.selectionBox.W').css('left',$('.W').offset().left - $('#calendar').offset().left);
			$('.selectionBox.R').css('left',$('.H').offset().left - $('#calendar').offset().left);
			$('.selectionBox.F').css('left',$('.F').offset().left - $('#calendar').offset().left);
			$('.selectionBox.S').css('left',$('.S').offset().left - $('#calendar').offset().left);
			$('.selectionBox.U').css('left',$('.U').offset().left - $('#calendar').offset().left);
		}
		
		checkConflicts(monday, null, 'M' );
		checkConflicts(tuesday, null, 'T' );
		checkConflicts(wednesday, null, 'W' );
		checkConflicts(thursday, null, 'H' );
		checkConflicts(friday, null, 'F' );
		checkConflicts(saturday, null, 'S' );
		checkConflicts(sunday, null, 'U' );
		
	});
			
	$('#searchDialog').dialog({
		autoOpen:false,
		modal:true,
		height:150,
		resizable:false,
		buttons:{ "Search":function(){console.log('Search');}, "Cancel":			function(){$(this).dialog("close");}},
		close:function(){$('.selectionBox').remove();}
	});
	
	$('#sectionInfoDialog').dialog({
		autoOpen:false,
		modal:false,
		height:150,
		width:230,
		resizable:false
	});
	
	$('#mandatorySearch').click(function(){
		search();
	});
	
	function resetSearchItems()
	{
		searchStartTime = '0700';
		searchEndTime = '2200';
		searchDays = 'MTWHFSU';
		searchDiscipline = '';
		searchCollege= '';
		searchBOK = ''
	}
	
	var searchStartTime;
	var searchEndTime;
	var searchDays;
	var searchDiscipline;
	var searchCollege;
	var searchBOK;
		
	var searchResults = new Array();
	var selectedCourses = new Array();
	var hourHeight = $('.08').position().top - $('.07').position().top
	var dayWidth = $('.T').position().left - $('.M').position().left-3;
	
	var monday = new Day();
	var tuesday = new Day();
	var wednesday = new Day();
	var thursday = new Day();
	var friday = new Day();
	var saturday = new Day();
	var sunday = new Day();
	
/*	for(var i=0;i<181;i++)
	{
		monday[i]=new CalendarBlock(null);
		tuesday[i]=new CalendarBlock(null);
		wednesday[i]=new CalendarBlock(null);
		thursday[i]=new CalendarBlock(null);
		friday[i]=new CalendarBlock(null);
		saturday[i]=new CalendarBlock(null);
		sunday[i]=new CalendarBlock(null);
	}*/
	var filters = new Array()
	
	
	resetSelectionListeners();
});
