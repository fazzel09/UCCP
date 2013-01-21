<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
<script type="text/javascript" src="Scripts/clickanddrag.js"></script>
<script type="text/javascript" src="Scripts/coursePlanner.js"></script>
<script type="text/javascript" src="Scripts/jquery.weekcalendar.js"></script>
<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="stylesheet" type="text/css" href="calendar_style.css" />
<link rel="stylesheet" type="text/css" href="jquery.weekcalendar.css"/>
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
	<div class="menu">
		MenuTest | Items | Are | Here | Don't | Click | Or | You'll | Explode |<a href="admin.php"> Admin page</a>
	</div>
	
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
	<div class="calendar">
    <div class="title">Test Calendar</div>
    <div class="daybar">
        <div class="days" style="border-left:1px solid gray">Mon</div>
        <div class="days">Tue</div>
        <div class="days">Wed</div>
        <div class="days">Thu</div>
        <div class="days">Fri</div>
        <div class="days">Sat</div>
        <div class="days">Sun</div>
    </div>
    <div class="timebar">
        <div class="times">7am</div>
        <div class="times">8am</div>
        <div class="times">9am</div>
        <div class="times">10am</div>
        <div class="times">11am</div>
        <div class="times">12pm</div>
        <div class="times">1pm</div>
        <div class="times">2pm</div>
        <div class="times">3pm</div>
        <div class="times">4pm</div>
        <div class="times">5pm</div>
        <div class="times">6pm</div>
        <div class="times">7pm</div>
        <div class="times">8pm</div>
        <div class="times">9pm</div>
    </div>
    <div class="grid"> <!-- for full hours, 15x7.  For half-hours, 30x7. 
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>
<div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div><div class="gridobject2"></div>
    <div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div><div class="gridobject"></div>

            </div>
</div>
-->
<div id="calendar_find_courses">
        <!--
        1. Search Bar (span) - Name, Department, College, Course Number 
        //As one is selected, add it by name (ex: Name: Intro to CS or Department: "Computer Science")
        2. Course Level (Multi-select drag+color)
        3. BoK Category
        4. "Find Courses" button
        -->
        <div class="searchbar" style="display:none">Search for course name, department, college, etc..</div>

</div>

	
    <div class="searchresults">
    			<form action="">
		<input type="text" name="searchInput" id="searchBox"><br>
		<input type="button" id="mandatorySearch" value="Search">
		</form>
    	<h3>Results</h3>
        <div id="results">
        </div>
    </div>
    

    
	<div class="selectedcourses">
		<h3>Selected Courses</h3>
    </div>
	
	<div class="possiblescheds">
		<h3>Possible Schedules</h3>
		<div id="scheds">
		<? include_once('calendar.php'); ?> 
		</div>
	</div>
	
	
</div>
</body>
</html>