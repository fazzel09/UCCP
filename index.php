<html>
<head>
<script type="text/javascript" src="scripts/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="scripts/clickanddrag.js"></script>
<script type="text/javascript"
    src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript"
    src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.js"></script>
<script type="text/javascript" src="Scripts/coursePlanner.js"></script>
  
  <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="stylesheet" type="text/css" href="calendar_style.css" />
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

    

	

   
<div id="calendar_find_courses">
        <!--
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
			<div id="filters">
			</div>
			
			<div id="results">
			</div>
		
        </div>
</div>
	
   
	<div class="selectedcourses">
    <h3>Selected Courses</h3>
	</div>
    
    <div class="schedule">
    <?php require "calendar.php"; ?>
    
    <div class="selectionOptions">
        <button id="selectionSearch" value="selectionSearch">Find Courses</button>
        <button id="cancelSelection" value="cancelSelection">Cancel</button>
    </div>
    
    </div>
    </div>
		
    
	
	
</div>

<div id="searchDialog">
	Times: <input type="text" name="times" id="selectionSearchTimes"><br/>
    Days: <input type="text" id="selectionSearchDays" name="days"><br/>
    <input type="button" id="selectionSearch" value="search">
</div>

</body>
</html>