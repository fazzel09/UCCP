<?php
class DB{

	public function connect(){
		mysql_connect("localhost", "root", "") or die(mysql_error());
		mysql_select_db("courseplanner") or die(mysql_error());
		
		return true;
	}
	
	public function addCourse($courseNum, $credits, $courseName, $courseDesc)
	{
		$sql = "INSERT INTO Courses (courseNum, creditHours, CourseName, description) VALUES( '".$courseNum."',".$credits.",'".$courseName."','".$courseDesc."')";
		 mysql_query($sql) or die(mysql_error());
	}	
	public function addSection($courseNum, $sectNum, $callNum, $instruction, $campus, $days, $startTime, $endTime, $location)
	{
		
		$sql = "INSERT INTO sections ( course_id, sectNum, callNum, campus, instruction, days, start_time, end_time , location) VALUES(
		 (select id from courses where courseNum like '".$courseNum."' limit 0,1), 
		 '".$sectNum."','".$callNum."','".$campus."','".$instruction."','".$days."','".$startTime."','".$endTime."','".$location."')";
		 mysql_query($sql) or die(mysql_error(
		 	
		 ));
	}
	
	public function loadCourses()
	{
		$sql = "SELECT * FROM Courses";
		
		$result =  mysql_query($sql) or die(mysql_error());
		while($row = mysql_fetch_array($result)){
			echo "<tr><td>".$row['courseNum']."</td><td>".$row['creditHours']."</td><td>".$row['CourseName']."</td><td>".$row['description']."</td></tr>";
			}
		
	}
	
	public function loadSections()
	{
		$sql = "SELECT * FROM sections";
		
		$result = mysql_query($sql) or die(mysql_error());
		while($row = mysql_fetch_array($result))
		{
			echo "<tr><td></td><td>".$row['sectNum']."</td><td>".$row['callNum']."</td><td>".$row['instruction']."</td><td>".$row['campus']."</td><td>".$row['days']."</td><td>".$row['start_time']."-".$row['end_time']."</td><td>".$row['location']."</td></tr>";
		}
	}
	
	public function searchCourses($search)
	{
		$sql = "Select courses.CourseName, courses.courseNum, courses.creditHours, sections.sectNum, sections.start_time, sections.end_time, sections.days, sections.callNum FROM Courses JOIN sections ON courses.id = sections.course_id WHERE courseNum LIKE '%".$search."%' OR CourseName LIKE '%".$search."%' ORDER BY courses.courseNum, sections.sectNum";
		$result = mysql_query($sql) or die(mysql_error());
		
		while($row = mysql_fetch_array($result)){
    		$rows[] = $row; 
		}
		
		echo json_encode($rows);
	}
	
	public function searchSections($search)
	{
		$sql = "Select * FROM sections WHERE courseNum = '".$search."'";
		$result = mysql_query($sql) or die(mysql_error());
		
		while($row = mysql_fetch_array($result)){
   		$rows[] = $row; 
		}
	
		echo json_encode($rows);
	}
	
	public function selectionSearch($days, $startTime, $endTime)
	{
		$sql = "Select courses.CourseName, courses.courseNum, courses.creditHours, sections.sectNum, sections.start_time, sections.end_time, sections.days, sections.callNum FROM Courses JOIN sections ON courses.id = sections.course_id WHERE sections.days LIKE '%".$days."%' AND (sections.start_time > '".$startTime."' AND sections.end_time < '".$endTime."')";
		$result = mysql_query($sql) or die (mysql_error());
		
		while($row = mysql_fetch_array($result)){
			$rows[] = $row;
		}
		
		echo json_encode($rows);
	}
}

$DB = new DB();
$DB->connect();
if(isset($_POST['search']))
{
	$DB->searchCourses($_POST['search']);	
}
if(isset($_POST['searchSections']))
{
	$DB->searchSections($_POST['searchSections']);
}
if(isset($_POST['selectionSearchDay']) && isset($_POST['searchStartTime']) && isset($_POST['searchEndTime']))
{	
	$DB->selectionSearch($_POST['selectionSearchDay'], $_POST['searchStartTime'], $_POST['searchEndTime'] );	
}

?>