<html>
<head>
<script type="text/javascript" src="scripts/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="scripts/clickanddrag.js"></script>
<script type="text/javascript"
    src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript"
    src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="stylesheet" type="text/css" href="calendar_style.css" />
<title>University of Cincinnati Course Planner
</title>
</head>
<body>
<div class="mainwrapper">
	<div class="menu">
		MenuTest | Items | Are | Here | Don't | Click | Or | You'll | Explode
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
        <div class="searchbar" style="display:none">Search for course name, department, college, etc..</div>
</div>

	
    <div class="searchresults">
    	<h3>Search Results</h3>
        <div class="row" id="row1">
            Row 1
        </div>
        <div class="row" id="row2">
            Row 2
        </div>
        <div class="row" id="row3">
            Row 3
        </div>
    </div>
   
	<div class="selectedcourses">
    <?php require "calendar.php"; ?>
	</div>
    </div>
		
	
	
</div>
</body>
</html>