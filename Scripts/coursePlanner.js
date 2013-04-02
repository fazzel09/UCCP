$(document).ready(function () {
    $('body').disableSelection();
    $('#results').nanoScroller();
    $('.ui-autocomplete').nanoScroller();

    /* ----- Data types used for local course information ----- */
    function Course(name, num, callNum, section, days, startTime, endTime, creditHours, description, isUnderGrad, isGrad, instructor, startDate, endDate) {
        this.courseName = name.trim();
        this.courseNum = num.trim();
        this.callNum = callNum.trim();
        this.section = section.trim();
        this.days = days.trim();
        this.startTime = new Time(startTime.trim());
        this.endTime = new Time(endTime.trim());
        this.duration = new Duration(this.startTime, this.endTime);
        this.color = getRandomColor();
        this.creditHours = creditHours.trim();
        this.description = description.trim();
        this.startDate = startDate.trim();
        this.endDate = endDate.trim();
        this.isUnderGrad = isUnderGrad.trim();
        this.isGrad = isGrad.trim();
        this.instructor = instructor.trim();

        // These are the rows in the search results list.
        this.courseRow = '<div class="courseRow ' + this.courseNum + '"><div class="courseInfo">' + this.courseNum + ':' + this.courseName + '</div><img class="showSections '
			+ this.courseNum + '" id="showSections" ><div class="sectionData ' + this.courseNum + '"></div></div>';
        this.sectionRow = '<div class="sectionRow ' + this.callNum + '" ><div class="deleteSection '
			+ this.callNum + '">X</div><div class="courseNum">' + this.courseNum + '</div><div class="sectionInfo">' + this.days + ':' + this.startTime.string + '-'
			+ this.endTime.string + ' ' + this.instructor + '</div><img class="sectionAddButton ' + this.callNum + '"></div>';


        //The detailed information that goes into the popover when you mouse over a section on the calendar.	
        //        this.detailedSectionInfo = '<table>'
        //			+ '<tr><td>Name:</td><td>' + this.courseName + '</td></tr>'
        //			+ '<tr><td>Number:</td><td>' + this.courseNum + '</td></tr>'
        //			+ '<tr><td>Call Number:</td><td>' + this.callNum + '</td></tr>'
        //			+ '<tr><td>Days:</td><td>' + this.days + '</td></tr>'
        //			+ '<tr><td>Times:</td><td>' + this.startTime.string + '-' + this.endTime.string + '</td></tr>'
        //			+ '</table>';

        //Tom's suggested format for detailed section information to go into the popup when you mouse over a section on the calendar.
        this.detailedSectionInfo = '<table>'
			+ '<tr><td><b>' + this.courseNum + '</b></td></tr>'
			+ '<tr><td><b>' + this.courseName + '</b></td></tr>'
        //+ '<tr><td>Call Number:</td><td>' + this.callNum + '</td></tr>'
			+ '<tr><td>' + this.days + ' ' + this.startTime.string + '-' + this.endTime.string + '</td></tr>'
			+ '<tr><td>Instructor: ' + this.instructor + '</td></tr>'
			+ '<tr><td>Credit Hours: ' + this.creditHours + '</td></tr>'
			+ '<tr><td>' + this.description + '</td></tr>'
			+ '</table>';
        //this.

        // This is the blocks displayed over the calendar
        this.sectionBlock = '<div class="deleteSection ' + this.callNum + '">X</div><div class="courseNum">'
				+ this.courseNum + '<br />' + this.courseName + '</div>';
        //+ this.courseNum + '<br />' + this.courseName + '<br />' + this.callNum + '<br />' + this.days + ' '
        //+ this.startTime.string + '-' + this.endTime.string + '</div>';
    }

    function Time(value) {
        var parsed = value.split(':');
        this.hour = parsed[0];
        this.minute = parsed[1];
        this.numeric = parseInt(this.hour + this.minute);
        if (this.hour > 12) {
            this.hourString = this.hour - 12;
        }
        else {
            this.hourString = this.hour;
        }
        this.string = this.hourString + ':' + this.minute;
    }

    function Duration(start, end) {
        this.hours = end.hour - start.hour;
        this.minutes = end.minute - start.minute;

        if (this.hours < 0) {
            this.hours = this.hours + 12;
        }
        if (this.minutes < 0) {
            this.hours = this.hours - 1;
            this.minutes = this.minutes + 60;
        }
    }

    function TimeSlot(course) {
        this.courses = new Array();
        this.courses.push(course);
        this.startTime = course.startTime.numeric;
        this.endTime = course.endTime.numeric;
    }

    function Day() {
        this.timeSlots = new Array();
        this.sectionBlocks = new Array();
    }

    function jsonCallback(data) {
        console.log("Callback");
    }
    function buildRequest() {
        var request = "https://webservices-webdev2.uc.edu/CoursePlanner/CoursePlannerService.svc/GetCoursePlanner?termID='2013B03'"
        for (var i = 0; i < filterArray.length; i++) {
            var filter = filterArray[i];
            if (filter[0] == 'timeSlot') {
                var startTime = filter[1].split('-')[0];
                startTime = [startTime.slice(0, 2), ':', startTime.slice(2)].join('');
                var endTime = filter[1].split('-')[1];
                endTime = [endTime.slice(0, 2), ':', endTime.slice(2)].join('')
                request += "&meetingStartTime='" + startTime + "'";
                request += "&meetingStopTime='" + endTime + "'";
            }
            else {
                request += "&" + searchKeys[filter[0]] + "='" + filter[1] + "'";
            }
        }

        return request;
    }
    /* ----- search Functions -----*/
    function search() {
        $('.selectionBox').css('opacity', '.5');

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                //console.log(request.responseText);
                searchResults = new Array();
                parser = new DOMParser();
                var xmlDoc = parser.parseFromString(request.responseText, "text/xml");
                console.log(xmlDoc);

                $(xmlDoc).find('element').each(function () {
                    var course = new Course(
						$(this).find('AbbreviatedTitle').text(),
						$(this).find('CourseNumber').text(),
						$(this).find('CallNumber').text(),
						$(this).find('SectionNumber').text(),
						$(this).find('DaysOfTheWeek').text(),
						$(this).find('MeetingStartTime').text(),
						$(this).find('MeetingStopTime').text(),
						$(this).find('CreditHourMinimum').text(),
						$(this).find('Descript').text(),
						$(this).find('IsUndergraduate').text(),
						$(this).find('IsGraduate').text(),
						$(this).find('InstructorName').text(),
						$(this).find('BeginDate').text(),
						$(this).find('EndDate').text()
					);

                    if ($(this).find('MeetingStartTime').text() != '')
                        searchResults.push(course);
                });

                updateResultsList();
            }
        }
        var URL = buildRequest();
        console.log(URL);
        request.open("GET", URL, true);
        request.send();

        resetSearchItems();
    }
    $('#filters').hide();
    var filterArray = new Array();

    /* Adding a filter to the search */
    function addFilter(item) {
        $('#searchBox').val("");
        for (var i = 0; i < filterArray.length; i++) {
            if (item.key == filterArray[i][1]) {
                alert("Filter already added");

                return;
            }
        }
        var filter = new Array();
        var key = item.key;
        var label = item.label;
        var cat = item.category;

        var filterRow = '<div class="filterRow ' + key + '">' + item.disp + '<div class="deleteFilter">x</div></div>';

        $('#filterList').append(filterRow);

        filter.push(item.category, key);
        filterArray.push(filter);

        $('#filters').show();

        resizeResults();

        $('.deleteFilter').unbind();
        $('.deleteFilter').click(function (event) {
            var className = event.target.parentElement.className.split(' ')[1];
            for (var i = 0; i < filterArray.length; i++) {
                if (filterArray[i][1] == className) {
                    $('.filterRow.' + className).remove();
                    filterArray.splice(i, 1);
                    break;
                }
            }

            if (filterArray.length == 0) {
                $('#filters').hide();
            }
        });

        $('#clearFilters').unbind();
        $('#clearFilters').click(function (event) {
            $('.filterRow').remove();

            filterArray = new Array();
            $('#filters').hide();
        });

    }

    function resizeResults() {
        var height = $('.searchresults').height() - $('.searchBar').height();
        $('#results').height(height + 'px');
        $('#results').nanoScroller();
    }




    /* ----- Selection functions, picking time slots on Calendar ----- */

    /* Removes the selection box when cancel is clicked. */
    $('#cancelSelection').click(function (e) {
        $('.selectionBox').remove();
        $('.selectionOptions').css('display', 'none');
    });


    /*Search results functions: formatting, switching displays, etc */

    /*Add a new course to the search results array*/
    function generateArrays(data) {
        searchResults = new Array();
        var courseNum = null;
        $.each(data, function (key, value) {
            courseNum = value['courseNum'];
            searchResults.push(new Course(value));
        });
    }

    /*Replaces the previous results list with the most recent results */
    function updateResultsList(data) {
        $('#results .content').html("");
        var courseNum = null;
        var curRow;
        $('#results .content').remove('.courseRow');
        for (var i = 0; i < searchResults.length; i++) {
            curRow = searchResults[i];
            if (curRow.courseNum != courseNum) {
                //add a course row, and the first section
                courseNum = curRow.courseNum;
                $('#results .content').append(curRow.courseRow);
                $('.sectionData.' + courseNum).append(curRow.sectionRow);
                setSectionRowListeners(curRow.callNum);
                $('.sectionRow.' + curRow.callNum).css('background', 'rgba(' + curRow.color + ')');
            }
            else {
                //add a section row
                $('.sectionData.' + courseNum).append(curRow.sectionRow);
                setSectionRowListeners(curRow.callNum);
                $('.sectionRow.' + curRow.callNum).css('background', 'rgba(' + curRow.color + ')');
            }
        }
        $(".sectionData").hide();

        $('#results').nanoScroller();

        $('.showSections').click(function (e) {
            if ($(this).hasClass('expanded')) {
                $(".sectionData." + event.target.className.split(' ')[1]).hide();
                $(this).toggleClass('expanded');
                $('#results').nanoScroller();
            }
            else {
                $(".sectionData." + event.target.className.split(' ')[1]).show();
                $(this).toggleClass('expanded');
                $('#results').nanoScroller();
            }
        });

        /*		$('.showSections').toggle(
        function(event){
        $(".sectionData."+event.target.className.split(' ')[1]).show();
        $(this).toggleClass('expanded');
        $('#results').nanoScroller();
        },
        function(event){
        $(".sectionData."+event.target.className.split(' ')[1]).hide();
        $(this).toggleClass('expanded');
        $('#results').nanoScroller();
        });*/
    }

    /*Set all the listeners on the section rows in the results list*/
    function setSectionRowListeners(callNum) {
        //If we already selected this course, make it not draggable.
        for (var i = 0; i < selectedCourses.length; i++) {
            if (callNum == selectedCourses[i].callNum) {
                $('.sectionRow.' + callNum).toggleClass('disabled', true);
                return;
            }
        }

        var row = $('#results .sectionRow.' + callNum);

        $('.sectionAddButton.' + callNum).attr('cursor', 'pointer');

        row.dblclick(function (e) {
            console.log('DblClick: ' + $(this).attr('class'));
            addSection($(this).attr('class').split(' ')[1]);
        });

        row.click(function (e) {
            addSection($(this).attr('class').split(' ')[1]);
        });

        //Shows the section overlay on the calendar when we hover over a section.
        row.hover(
		function (e) {
		    displaySectionOverlay($(this).attr('class').split(' ')[1]);
		},
		function (e) {
		    $('.sectionOverlay').remove();
		});
    };

    //Search the selected courses for a given callNum.
    function findCourse(callNum) {
        for (var i = 0; i < selectedCourses.length; i++) {
            if (selectedCourses[i].callNum == callNum) {
                console.log('course found1');
                return selectedCourses[i];
            }
        }
        for (var i = 0; i < searchResults.length; i++) {
            if (searchResults[i].callNum == callNum) {
                console.log('course found2');
                return searchResults[i];
            }
        }

        return null;
    }

    function displaySectionOverlay(callNum) {
        var addedCourse = findCourse(callNum);

        var startPositionY = Math.round(($('.' + addedCourse.startTime.hour).offset().top - $('#calendar').offset().top) + addedCourse.startTime.minute / 60 * hourHeight);

        var blockHeight = (addedCourse.duration.hours * hourHeight) + (addedCourse.duration.minutes / 60 * hourHeight);

        //For each day the section is on, compute the width
        for (var i = 0; i < addedCourse.days.length; i++) {
            var addedCourseDay = addedCourse.days[i];
            var startPositionX = $('.' + addedCourseDay).offset().left - $('#calendar').offset().left

            $('#calendar').append('<div class="sectionOverlay ' + addedCourse.callNum + ' ' + addedCourseDay + '">' + addedCourse.sectionBlock + '</div>');
            $('.sectionOverlay.' + addedCourse.callNum + '.' + addedCourseDay).css({ width: dayWidth,
                height: blockHeight,
                top: startPositionY,
                left: startPositionX + 20,
                background: 'rgba(' + addedCourse.color + ')',
                width: dayWidth - 20
            });
        }
    }

    //Add a section to the appropriate arrays
    function addSection(callNum) {
        $('.selectionBox').remove();
        $('.sectionOverlay').remove();
        //Find the course corresponding with this callnum
        var course = findCourse(callNum);

        $('.sectionRow.' + callNum).css('background', 'rgba(' + course.color + ')');
        //$('.sectionRow.'+callNum).draggable('disable');
        $('#results .content .' + callNum).unbind();
        $('.sectionAddButton.' + callNum).unbind()
        $('.sectionRow.' + callNum).attr('cursor', 'default');
        $('.sectionRow.' + callNum).toggleClass('disabled', true);

        addToCalendar(course);
        selectedCourses.push(course);

        $('.deleteSection.' + callNum).click(function () {
            console.log("Delete Clicked");
            deleteSelectedCourse(callNum);
        });
    }

    //Adds a section to the calendar
    function addToCalendar(addedCourse) {
        var startPositionY = Math.round(($('.' + addedCourse.startTime.hour).offset().top - $('#calendar').offset().top) + addedCourse.startTime.minute / 60 * hourHeight);

        var blockHeight = (addedCourse.duration.hours * hourHeight) + (addedCourse.duration.minutes / 60 * hourHeight);

        //Add the course to the day arrays.
        iterateOverDays(addedCourse.days, addedCourse, addCourseToDayArray);

        //For each day the section is on, compute the size, color, etc...
        for (var i = 0; i < addedCourse.days.length; i++) {
            var addedCourseDay = addedCourse.days[i];
            var startPositionX = $('.' + addedCourseDay).offset().left - $('#calendar').offset().left

            $('#calendar').append('<div class="sectionBlock ' + addedCourse.callNum + ' ' + addedCourseDay + '">' + addedCourse.sectionBlock + '</div>');
            $('.sectionBlock.' + addedCourse.callNum + '.' + addedCourseDay).css({
                'width': dayWidth,
                'height': blockHeight,
                'background': 'rgba(' + addedCourse.color + ')',
                'top': startPositionY
            });
        }

        iterateOverDays(addedCourse.days, addedCourse.callNum, checkConflicts);

        $('.sectionBlock').hover(function (e) {
            console.log('Hover: ' + $(this).attr('class'));

            //Britney's resizing calendar section
            //console.log('Height: '+$(this).height());
            var course = findCourse($(this).attr('class').split(' ')[1]);
            //            if ($(this).height() < 100)
            //                $(this).css("height", "100");
            //$("."+this.callNum).css("height","200px");
            //--------------
//            var background_color =  'rgba(' + course.color + ')';
            //Colored calendar popup
            $('#hoverOnCalendar').html(course.detailedSectionInfo);
            //            $('#hoverOnCalendar').css({ 'top': e.pageY+20, 'left': e.pageX }); //Position the window 20 pixels below the cursor
            $('#hoverOnCalendar').css({ 'top':50, 'left':50 }); 
            $('#hoverOnCalendar').css({ 'display': 'block', 'background-color': 'rgba(' + course.color + ')' });



            //Original calendar popup
            //$('#sectInfoDialog').dialog( "option", "title", course.courseName);
            //$('#sectInfoDialog').html(course.detailedSectionInfo);
            //$('#sectInfoDialog').dialog( "option", "position", [e.pageX+20,$(this).offset().top +$(this).height() - $(window).scrollTop()+20] );
            //$('#sectInfoDialog').dialog('open');
            //$('#sectInfoDialog').show();
            //$('.ui-dialog').show();
        },
		function (e) {
		    console.log('HoverOut');

		    //Colored calendar popup
		    $('#hoverOnCalendar').css('display', 'none');

		    //Britney's resizing calendar section
		    //		    if ($(this).height() <= 100) {
		    //		        var course = findCourse($(this).attr('class').split(' ')[1]);

		    //		        var hours = Math.floor(course.endTime.numeric / 100) - Math.floor(course.startTime.numeric / 100);
		    //		        var mins = (course.endTime.numeric % 100) - (course.startTime.numeric % 100);
		    //		        if (mins < 0) {
		    //		            mins += 60;
		    //		            hours--;
		    //		        }
		    //		        var durationDecimal = hours + (mins / 60);
		    //		        var height = (durationDecimal * hourHeight);
		    //		        console.log("height: " + height + " start time: " + course.startTime.string + " end time: " + course.endTime.string + " hourHeight: " + hourHeight);
		    //		        $(this).css("height", height);
		    //		    }
		    //$('#sectInfoDialog').dialog('close');
		    //$('#sectInfoDialog').dialog('close');
		    //$('.ui-dialog').hide();
		});
    };

    /* add a new course to the approprate Day Array */
    function addCourseToDayArray(dayArray, course, dayChar) {
        var inserted = new Array();
        for (var i = 0; i < dayArray.timeSlots.length; i++) {
            var timeSlot = dayArray.timeSlots[i];

            if ((course.startTime.numeric >= timeSlot.startTime && course.startTime.numeric <= timeSlot.endTime) ||
				(course.endTime.numeric >= timeSlot.startTime && course.endTime.numeric <= timeSlot.endTime) ||
				(course.startTime.numeric < timeSlot.startTime && course.endTime.numeric > timeSlot.endTime)) {
                inserted.push(timeSlot);
            }
        }

        if (inserted.length == 0) {
            dayArray.timeSlots.push(new TimeSlot(course));
        }
        else {
            //Add the course to the first timeslot it conflicts with.
            var masterTimeSlot = inserted[0];
            if (course.startTime.numeric < masterTimeSlot.startTime)
                masterTimeSlot.startTime = course.startTime.numeric;
            if (course.endTime.numeric > masterTimeSlot.endTime)
                masterTimeSlot.endTime = course.endTime.numeric;

            masterTimeSlot.courses.push(course);

            //Remove timeslot that was inserted into
            inserted.splice(0, 1);

            //If the course conflicts with multiple time slots, combine all the time slots.
            for (var i = 0; i < inserted.length; inserted++) {
                var mergedTimeSlot = inserted[0];

                //Add all the courses from this timeslot to the master timeslot
                for (var j = 0; j < mergedTimeSlot.courses.length; j++) {
                    masterTimeSlot.courses.push(mergedTimeSlot.courses[j]);
                }

                if (mergedTimeSlot.startTime < masterTimeSlot.startTime)
                    masterTimeSlot.startTime = course.startTime.numeric;
                if (mergedTimeSlot.endTime > masterTimeSlot.endTime)
                    masterTimeSlot.endTime = course.endTime.numeric;

                //Remove the merged time slot from the day Array
                for (var j = 0; j < dayArray.timeSlots.length; j++) {
                    if (dayArray.timeSlots[j] == mergedTimeSlot) {
                        dayArray.timeSlots.splice(j, 1);
                        break;
                    }
                }
            }
        }

    }

    // Each element in selectedcourses is a "calendarBlock", it has an array of courses that are currently selected at that particular time.
    function CalendarBlock(value) {
        if (value == null) {
            this.courses = new Array()
            return;
        }
        this.courses.push(callNum);
    }

    function iterateOverDays(days, variable, operation) {
        for (i = 0; i < days.length; i++) {
            switch (days[i]) {
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

    function checkConflicts(dayArray, callNum, day) {
        //Organize the classes into rows
        for (var i = 0; i < dayArray.timeSlots.length; i++) {
            var rows = new Array(); //2 Dimensional array, each index contains the callnums of classes in that row index.
            var curTimeSlot = dayArray.timeSlots[i];
            var coursesToInsert = copyArray(curTimeSlot.courses);

            while (coursesToInsert.length > 0) {
                //Find the earliest course, to start the row.
                var earliestCourse = coursesToInsert[0];
                var earliestCourseIndex = 0;

                for (var j = 1; j < coursesToInsert.length; j++) {
                    var course = coursesToInsert[j];
                    if (course.startTime.numeric < earliestCourse.startTime.numeric) {
                        earliestCourse = course;
                        earliestCourseIndex = j;
                    }
                }

                //Add earliest course to row array;

                var row = new Array();
                row.push(earliestCourse.callNum);

                //Remove inserted course from coursesToInsertArray
                coursesToInsert.splice(earliestCourseIndex, 1);

                //Find any more courses that can still fit in the row.
                //Append  courses, until row full
                var earliestStartTime = earliestCourse.endTime.numeric;
                var earliestClassBeginTime = curTimeSlot.endTime;
                var found = true;
                var courseToInsert = null;
                var courseToInsertIndex = -1;

                while (earliestStartTime < curTimeSlot.endTime && found) {
                    var found = false;
                    for (var k = 0; k < coursesToInsert.length; k++) {
                        var course = coursesToInsert[k];
                        if (course.startTime.numeric > earliestStartTime && course.startTime.numeric < earliestClassBeginTime) {
                            earliestClassBeginTime = course.startTime.numeric;
                            courseToInsert = course;
                            courseToInsertIndex = k;
                            found = true;
                        }
                    }

                    if (found) {
                        //Add to the row, remove from inserted Courses
                        row.push(courseToInsert.callNum);
                        coursesToInsert.splice(courseToInsertIndex, 1);
                    }
                }

                //Row Complete, push row to rows
                rows.push(row);
            }

            //position classes based on row array

            var rowWidth = dayWidth / rows.length;
            for (var j = 0; j < rows.length; j++) {
                var curRow = rows[j];
                for (var k = 0; k < curRow.length; k++) {
                    var left = $('.' + day).position().left + (rowWidth * j);

                    $('.sectionBlock.' + curRow[k] + '.' + day).css({
                        'width': rowWidth,
                        'left': left
                    });
                }
            }
        }
    }

    function copyArray(array) {
        var tempArray = new Array();
        for (var i = 0; i < array.length; i++) {
            tempArray[i] = array[i]
        }
        return tempArray;
    }

    function removeCourseFromDayArray(dayArray, deletedCourse, day) {
        for (var i = 0; i < dayArray.timeSlots.length; i++) {
            var timeSlot = dayArray.timeSlots[i];

            var found = false;

            //Find the timeslot that contains deletedCourse, remove deleted course from Timeslot
            for (var j = 0; j < timeSlot.courses.length; j++) {
                if (timeSlot.courses[j].callNum == deletedCourse.callNum) {
                    timeSlot.courses.splice(j, 1);
                    found = true;
                    break;
                }
            }

            if (!found) {
                continue;
            }
            //Get remaining courses, delete timeslot
            var courses = timeSlot.courses;
            dayArray.timeSlots.splice(i, 1);

            //Add remaining courses back into the dayArray, need to do this to regenerate the timeSlots correctly.
            for (var j = 0; j < courses.length; j++) {
                addCourseToDayArray(dayArray, courses[j], null);
            }

            //Theoretically, a class will only be in one time slot per day, so break out of loop early.
            break;
        }

    }

    function deleteSelectedCourse(callNum) {
        $('.ui-dialog').hide();
        $('s .sectionRow.' + callNum + ', .sectionBlock.' + callNum).hide();
        $('s .sectionRow.' + callNum + ', .sectionBlock.' + callNum).remove();
        //$('.sectionBlock.'+callNum).remove();
        $('.sectionRow.' + callNum).toggleClass('disabled', false);

        for (var i = 0; i < selectedCourses.length; i++) {
            if (selectedCourses[i].callNum == callNum) {
                var deletedCourse = selectedCourses[i];
                selectedCourses.splice(i, 1);
                break;
            }
        }
        iterateOverDays(deletedCourse.days, deletedCourse, removeCourseFromDayArray);
        iterateOverDays(deletedCourse.days, deletedCourse, checkConflicts);

        setSectionRowListeners(callNum);
    };

    function outputSelectedCourses() {
        console.log("SelectedCourses: ");
        for (var i = 0; i < selectedCourses.length; i++) {
            console.log(i + ": " + selectedCourses[i].callNum);
        }
    }

    //When you double click on the calendar, find the free space before and after the location of your click.
    function findFreeSlot(array, time, day) {
        if (time.length == 2) {
            time += "00"
        }

        if (time[0] == 0) {
            time = parseInt(time.slice(1, 4));
        }

        //Check if clicked in an existing timeslot
        for (var i = 0; i < array.timeSlots.length; i++) {
            var timeSlot = array.timeSlots[i];
            if (timeSlot.startTime < time && timeSlot.endTime > time) {
                return;
            }
        }

        //find the earliest start time, up to time && the latest end time, up to time.
        var startTime = 700;
        var endTime = 2200;
        for (var i = 0; i < array.timeSlots.length; i++) {
            var timeSlot = array.timeSlots[i];
            if (timeSlot.endTime >= startTime && timeSlot.endTime <= time) {
                startTime = timeSlot.endTime;
            }

            if (timeSlot.startTime <= endTime && timeSlot.startTime >= time) {
                endTime = timeSlot.startTime
            }
        }

        //compute duration of timeslot
        var hours = Math.floor(endTime / 100) - Math.floor(startTime / 100);
        var mins = (endTime % 100) - (startTime % 100);
        if (mins < 0) {
            mins += 60;
            hours--;
        }
        var durationDecimal = hours + (mins / 60);
        var startTimeDecimal = Math.floor(startTime / 100) + (startTime % 100 / 60);
        //var duration = endIndex - startIndex;

        var height = (durationDecimal * hourHeight);
        var left = $('.' + day).position().left + 'px';
        var top = ((startTimeDecimal - 7) * hourHeight) + ($('.07.M').position().top);
        $('.selectionBox').remove();
        $('#calendar').append('<div class="selectionBox ' + day + '"></div>');
        $('.selectionBox').css('top', top);
        $('.selectionBox').css('left', left);
        $('.selectionBox').css('width', dayWidth);
        $('.selectionBox').css('height', height);

        searchStartTime = String(startTime);
        searchEndTime = String(endTime);
        console.log('startTime: ' + searchStartTime + ', ' + searchEndTime);

        addTimeSlotFilter();
    }

    function addTimeSlotFilter() {
        var labelString;
        var key;

        if (searchStartTime.length == 3) {
            searchStartTime = "0" + searchStartTime;
        }
        if (searchEndTime.length == 3) {
            searchEndTime = "0" + searchStartTime;
        }

        if (searchStartTime.length < 3) {
            searchStartTime = searchStartTime + "00";
        }

        if (searchEndTime.length < 3) {
            searchEndTime = searchEndTime + "00";
        }

        labelString = [searchStartTime.slice(0, 2), ':', searchStartTime.slice(2)].join('') + "-" + [searchEndTime.slice(0, 2), ':', searchEndTime.slice(2)].join('');

        console.log(labelString);
        addFilter({
            category: "timeSlot",
            disp: labelString,
            key: searchStartTime + "-" + searchEndTime
        });

        $('.selectionBox').css('opacity', .5);
    }

    $('#calendar table').dblclick(function (e) {
        console.log('doubleClick');
        var time = e.target.className.split(' ')[0];
        var day = e.target.className.split(' ')[1];
        if (time.length == 2) {
            var index = (time - 7) * 12;
        }
        else {
            var index = ((time.slice(0, 2) - 7) * 12) + 6;
        }

        iterateOverDays(day, time, findFreeSlot);
        //search();
    });

    //Reset the listeners that display the selection box over the calendar. This must be done after a selection, to be ready for the next selection.
    function resetSelectionListeners() {
        $('#calendar td').mousedown(function (e) {
            searchStartTime = e.target.className.split(' ')[0];
            searchDay = e.target.className.split(' ')[1];

            var top = $(this).offset().top - $('#calendar').offset().top;
            var left = $(this).offset().left - $('#calendar').offset().left;
            $('.selectionBox').remove();

            $('#calendar').append('<div class="selectionBox ' + searchDay + '"></div>');
            $('.selectionBox').css({ 'top': top, 'left': left, 'width': dayWidth, 'height': '0' });

            $('#calendar .' + searchDay + ', .selectionBox').mousemove(function (e) {
                //console.log('target: ' + e.target.className);
                var height = e.pageY - $('#calendar').offset().top - top;
                if (height < 0) {
                    $('.selectionBox').css('top', top + height + 2);
                    height = Math.abs(height) - 2;
                }
                else {
                    $('.selectionBox').css('top', top);
                }
                $('.selectionBox').css('height', height)
            });

            $('#calendar td').mouseup(function (e) {
                searchEndTime = e.target.className.split(' ')[0];
                $('.selectionBox, #calendar td, #calendar, #calendar .' + searchDay + ', .sectionBlock').unbind();
                console.log('mouseup ' + e.target.className + ' Start/end time: ' + searchStartTime + '/' + searchEndTime);
                resetSelectionListeners();
                if (searchStartTime != searchEndTime) {
                    addTimeSlotFilter();
                }
            });

            $('.sectionBlock').mouseover(function (e) {
                $('.selectionBox, #calendar td, #calendar, #calendar .' + searchDay + ', .sectionBlock').unbind();
                console.log('mouseup ' + e.target.className);
                resetSelectionListeners();
            });
        });

        //Add a listener on the section block on the calendar to overlay detailed section info.
        /*
        $('.sectionBlock').hover(function(e)
        {
        var course = findCourse($(this).attr('class').split(' ')[1]);
			
        $('#sectInfoDialog').dialog( "option", "title", course.courseName);
        $('#sectInfoDialog').html(course.detailedSectionInfo);
        $('#sectInfoDialog').dialog( "option", "position", [$(this).offset().left+20,$(this).offset().top +$(this).height() - $(window).scrollTop()+20] );
        $('#sectInfoDialog').dialog('open');
			
        },
        function(e)
        {
        $('#sectInfoDialog').dialog('close');
        });
        */
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '';
        for (var i = 0; i < 3; i++) {
            color += Math.round(Math.random() * 155 + 100) + ', ';
        }
        color += '1'
        return color;
    }

    $("#export").click(function () {

        $('#exportTable').html('<tr><th>Course Name</th><th>Call Number</th><th>Credits</th><th>G/UG</th></tr>');
        for (var i = 0; i < selectedCourses.length; i++) {
            $('#exportTable tr:last').after('<tr><td>' + selectedCourses[i].courseName + '</td>'
					+ '<td>' + selectedCourses[i].callNum + '</td>'
					+ '<td>' + selectedCourses[i].courseCredits + '</td>'
					+ '<td>U</td>');
        }

        $("#exportInfo").css('display', 'block');
    });

    $("#closeExport").click(function () {
        $("#exportInfo").css('display', 'none');
    });

    $(window).resize(function (e) {
        console.log('Resize');
        dayWidth = $('.T').position().left - $('.M').position().left;

        if ($('.selectionBox').length) {
            $('.selectionBox').css('width', dayWidth);
            $('.selectionBox.M').css('left', $('.M').offset().left - $('#calendar').offset().left);
            $('.selectionBox.T').css('left', $('.T').offset().left - $('#calendar').offset().left);
            $('.selectionBox.W').css('left', $('.W').offset().left - $('#calendar').offset().left);
            $('.selectionBox.R').css('left', $('.H').offset().left - $('#calendar').offset().left);
            $('.selectionBox.F').css('left', $('.F').offset().left - $('#calendar').offset().left);
            $('.selectionBox.S').css('left', $('.S').offset().left - $('#calendar').offset().left);
            $('.selectionBox.U').css('left', $('.U').offset().left - $('#calendar').offset().left);
        }

        checkConflicts(monday, null, 'M');
        checkConflicts(tuesday, null, 'T');
        checkConflicts(wednesday, null, 'W');
        checkConflicts(thursday, null, 'R');
        checkConflicts(friday, null, 'F');
        checkConflicts(saturday, null, 'S');
        checkConflicts(sunday, null, 'U');

    });

    $('#searchDialog').dialog({
        autoOpen: false,
        modal: true,
        height: 150,
        resizable: false,
        buttons: { "Search": function () { console.log('Search'); }, "Cancel": function () { $(this).dialog("close"); } },
        close: function () { $('.selectionBox').remove(); }
    });

    $('#sectInfoDialog').dialog({
        autoOpen: false,
        modal: false,
        height: 150,
        width: 230,
        resizable: false
    });

    $.widget("custom.catcomplete", $.ui.autocomplete,
	{
	    _renderMenu: function (ul, items) {
	        var that = this, currentCategory = "";
	        $.each(items, function (index, item) {
	            var itemCategory = autocompleteCategories[item.category];
	            if (itemCategory != currentCategory) {
	                ul.append("<li class='ui-autocomplete-category'>" + itemCategory + "</li>");
	                currentCategory = itemCategory;
	            }
	            that._renderItemData(ul, item);
	        });
	    }

	});

    //Reset the listeners that display the selection box over the calendar. This must be done after a selection, to be ready for the next selection.
    function resetSelectionListeners() {
        $('#calendar td').mousedown(function (e) {
            searchStartTime = e.target.className.split(' ')[0];
            searchDay = e.target.className.split(' ')[1];

            var top = $(this).offset().top - $('#calendar').offset().top;
            var left = $(this).offset().left - $('#calendar').offset().left;
            $('.selectionBox').remove();

            $('#calendar').append('<div class="selectionBox ' + searchDay + '"></div>');
            $('.selectionBox').css({ 'top': top, 'left': left, 'width': dayWidth, 'height': '0' });

            $('#calendar .' + searchDay + ', .selectionBox').mousemove(function (e) {
                //console.log('target: ' + e.target.className);
                var height = e.pageY - $('#calendar').offset().top - top;
                if (height < 0) {
                    $('.selectionBox').css('top', top + height + 2);
                    height = Math.abs(height) - 2;
                }
                else {
                    $('.selectionBox').css('top', top);
                }
                $('.selectionBox').css('height', height)
            });

            $('#calendar td').mouseup(function (e) {
                searchEndTime = e.target.className.split(' ')[0];
                $('.selectionBox, #calendar td, #calendar, #calendar .' + searchDay + ', .sectionBlock').unbind();
                console.log('mouseup ' + e.target.className + ' Start/end time: ' + searchStartTime + '/' + searchEndTime);
                resetSelectionListeners();
                if (searchStartTime != searchEndTime) {
                    addTimeSlotFilter();
                }
            });

            $('.sectionBlock').mouseover(function (e) {
                $('.selectionBox, #calendar td, #calendar, #calendar .' + searchDay + ', .sectionBlock').unbind();
                console.log('mouseup ' + e.target.className);
                resetSelectionListeners();
            });
        });

        //Add a listener on the section block on the calendar to overlay detailed section info.
        /*
        $('.sectionBlock').hover(function(e)
        {
        var course = findCourse($(this).attr('class').split(' ')[1]);
			
        $('#sectInfoDialog').dialog( "option", "title", course.courseName);
        $('#sectInfoDialog').html(course.detailedSectionInfo);
        $('#sectInfoDialog').dialog( "option", "position", [$(this).offset().left+20,$(this).offset().top +$(this).height() - $(window).scrollTop()+20] );
        $('#sectInfoDialog').dialog('open');
			
        },
        function(e)
        {
        $('#sectInfoDialog').dialog('close');
        });
        */
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '';
        for (var i = 0; i < 3; i++) {
            color += Math.round(Math.random() * 155 + 100) + ', ';
        }
        color += '1'
        return color;
    }

    $("#export").click(function () {

        $('#exportTable').html('<tr><th>Course Name</th><th>Call Number</th><th>Credits</th><th>G/UG</th></tr>');
        for (var i = 0; i < selectedCourses.length; i++) {
            $('#exportTable tr:last').after('<tr><td>' + selectedCourses[i].courseName + '</td>'
					+ '<td>' + selectedCourses[i].callNum + '</td>'
					+ '<td>' + selectedCourses[i].courseCredits + '</td>'
					+ '<td>U</td>');
        }

        $("#exportInfo").css('display', 'block');
    });

    $("#closeExport").click(function () {
        $("#exportInfo").css('display', 'none');
    });

    $(window).resize(function (e) {
        console.log('Resize');
        dayWidth = $('.T').position().left - $('.M').position().left;

        if ($('.selectionBox').length) {
            $('.selectionBox').css('width', dayWidth);
            $('.selectionBox.M').css('left', $('.M').offset().left - $('#calendar').offset().left);
            $('.selectionBox.T').css('left', $('.T').offset().left - $('#calendar').offset().left);
            $('.selectionBox.W').css('left', $('.W').offset().left - $('#calendar').offset().left);
            $('.selectionBox.R').css('left', $('.R').offset().left - $('#calendar').offset().left);
            $('.selectionBox.F').css('left', $('.F').offset().left - $('#calendar').offset().left);
            $('.selectionBox.S').css('left', $('.S').offset().left - $('#calendar').offset().left);
            $('.selectionBox.U').css('left', $('.U').offset().left - $('#calendar').offset().left);
        }

        checkConflicts(monday, null, 'M');
        checkConflicts(tuesday, null, 'T');
        checkConflicts(wednesday, null, 'W');
        checkConflicts(thursday, null, 'R');
        checkConflicts(friday, null, 'F');
        checkConflicts(saturday, null, 'S');
        checkConflicts(sunday, null, 'U');

    });

    $('#searchDialog').dialog({
        autoOpen: false,
        modal: true,
        height: 150,
        resizable: false,
        buttons: { "Search": function () { console.log('Search'); }, "Cancel": function () { $(this).dialog("close"); } },
        close: function () { $('.selectionBox').remove(); }
    });

    $('#sectInfoDialog').dialog({
        autoOpen: false,
        modal: false,
        height: 150,
        width: 230,
        resizable: false
    });

    $.widget("custom.catcomplete", $.ui.autocomplete,
	{
	    _renderMenu: function (ul, items) {
	        var that = this, currentCategory = "";
	        $.each(items, function (index, item) {
	            var itemCategory = autocompleteCategories[item.category];
	            if (itemCategory != currentCategory) {
	                ul.append("<li class='ui-autocomplete-category'>" + itemCategory + "</li>");
	                currentCategory = itemCategory;
	            }
	            that._renderItemData(ul, item);
	        });
	    }

	});

    var autocompleteCategories = ["Attributes", "Campuses", "Colleges", "Disciplines", "Formats", "General Education", "Courses"];

    var searchKeys = ["Attribute", "schedulingAreaCode", "offeringCollegeCode", "disciplineCode", "classFormat", "genEdCode", "courseNum"];
    $('#searchBox').catcomplete({
        minLength: 2,
        select: function (event, ui) {
            addFilter(ui.item);
            event.preventDefault();
        },

        source: function (request, response) {
            console.log("Term:" + request.term);
            $.ajax({
                type: 'POST',
                url: 'Scripts/database.php',
                dataType: 'json',
                data: {
                    autoComplete: request.term
                },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item[1],
                            category: parseInt(item[0]) - 1,
                            key: item[2],
                            disp: item[3]
                        }
                    }));
                }
            });

        }
    });

    $('#mandatorySearch').click(function () {
        search();
    });

    function resetSearchItems() {
        searchStartTime = '0700';
        searchEndTime = '2200';
        searchDays = 'MTWRFSU';
        searchDiscipline = '';
        searchCollege = '';
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
    var dayWidth = $('.T').position().left - $('.M').position().left - 3;

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

