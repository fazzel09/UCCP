<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
<script type="text/javascript" src="Scripts/coursePlanner.js"></script>
<script type="text/javascript" src="Scripts/jquery.nanoscroller.min.js"></script>

  
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="stylesheet" type="text/css" href="nanoscroller.css"> 
<title>University of Cincinnati Course Planner
</title>
</head>
<body>

<?php
REQUIRE('Scripts/database.php');
$DB = new DB();
$DB -> connect();
?>

<div class="mainwrapper">
	<!--
        <div class="menu">
		    <a href="admin.php"> Admin page</a>
	    </div>
    -->
    <div class="title">UC CoursePlanner</div>
	<div class="midwrapper">
	<!--
		<div class="welcomedialog">
		<div class="dialogtitle">
		Welcome!
		</div>
		
		Here is where you login!
		
		Sign in here.
		</div>
	-->
    <!--
	<div class="coursesearch">
		
		Please input all of this bs information
		<p />
		email address
		<p />
		major
		<p />
		year
	</div>
    -->
            <!--
        <div id="calendar_find_courses">
            1. Search Bar (span) - Name, Department, College, Course Number 
            //As one is selected, add it by name (ex: Name: Intro to CS or Department: "Computer Science")
            2. Course Level (Multi-select drag+color)
            3. BoK Category
            4. "Find Courses" button
            -->
            <div class="searchresults">
		        <div class="searchbar" style="display:none">Search for course name, department, college, etc..</div>
		        <input type="text" name="searchInput" id="searchBox">
		        <input type="button" id="mandatorySearch" value="">
		        <div id="filters"></div>
		        <div id="results" class="nano">
                <div class="content"></div>
                </div>
            </div>
	
        <div class="schedule">
        <?php require "calendar.php"; ?>
    
            <div class="scheduleButtons">
                <button id="showSelectedCourses" value="showSelectedCourses">Show Courses</button>
                <button id="export" value="export">Export</button>
            </div>
        </div>
        <div class="selectedcourses">
            <h3>Selected Courses</h3>
        </div>
	</div>

</div>

<div id="searchDialog">
	Times: <input type="text" name="times" id="selectionSearchTimes"><br/>
    Days: <input type="text" id="selectionSearchDays" name="days"><br/>
    <input type="button" id="selectionSearch" value="search">
</div>

<div id="sectionInfoDialog">

</div>

</body>
</html>