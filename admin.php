<html>
<head>

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
if(isset($_POST['addCourse'])) {
	$DB -> addCourse($_POST['courseNum'], $_POST['creditHours'], $_POST['courseName'], $_POST['courseDesc']);
}
if(isset($_POST['addSection'])){
	$DB -> addSection($_POST['courseNum'], $_POST['sectNum'], $_POST['callNum'], $_POST['instruction'], $_POST['campus'], $_POST['days'], $_POST['times'], $_POST['location']);
	}	

?>
<div class="mainwrapper">
	<div class="menu">
		Menu | Items | Are | Here | Don't | Click | Or | You'll | Explode
	</div>
	
	<h2>Don't leave any values NULL. See the existing entries for the formatting</h2>
	
	<div class="addCourse">
	<h3>Add Course</h3>
	<form method="post">
	Course Number:<input type="text" name="courseNum">
	Course Name:<input type="text" name="courseName"><br>
	Credit Hours:<input type="text" name="creditHours">
	Couse Description:<input type="text" name="courseDesc"><br>
	<input type="submit" name="addCourse" value="submit">
	</form>
	
	</div>
	<div class="addSection">
	<h3>Add Section</h3>
	<form method="post">
	Course Number:<input type="text" name="courseNum">
	Section Number:<input type="text" name="sectNum">
	Call Number:<input type="text" name="callNum"><br>
	Instruction:<input type="text" name="instruction">
	Days:<input type="text" name="days">
	Times:<input type="text" name="times">
	Campus:<input type="text" name="campus">
	Location:<input type="text" name="location"><br>
	<input type="submit"name="addSection" value="submit">
	</form>
	</div>
	
	<div class="dbContents">
	<div class="courses">
	<h3> Courses in the database: </h3>
	<table>
	<tr><th>Course Number</th><th>Credit Hours</th><th>Course Name</th><th>Description</th></tr>
	<?php
		$DB->loadCourses();
	?>
	</table>
	</div>
	
	<div class="sections">
	<h3> Sections in the database: </h3>
	<table>
	<tr><th>Course Number</th><th>Section</th><th>Call Number</th><th>Instruction</th><th>Campus</th><th>Days</th><th>Times</th><th>Location</th></tr>
	<?php
		$DB->loadSections();
	?>
	</table
	
	</div>
	</div>

	
</div>

</body>
</html>