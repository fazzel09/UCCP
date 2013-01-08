<?php
class DB{

	public function connect(){
		mysql_connect("localhost", "conradjr", "LincolnLog") or die(mysql_error());
		mysql_select_db("conradjr") or die(mysql_error());
		
		return true;
	}
	
	public function addCourse($courseNum, $credits, $courseName, $courseDesc)
	{
		$sql = "INSERT INTO Courses (courseNum, creditHours, CourseName, description) VALUES( '".$courseNum."',".$credits.",'".$courseName."','".$courseDesc."')";
		 mysql_query($sql) or die(mysql_error());
	}	
	public function addSection($courseNum, $sectNum, $callNum, $instruction, $campus, $days, $times, $location)
	{
		
		$sql = "INSERT INTO sections (courseNum, sectNum, callNum, campus, instruction, days, times, location) VALUES( '".$courseNum."',".$sectNum.",'".$callNum."','".$campus."','".$instruction."','".$days."','".$times."','".$location."')";
		 mysql_query($sql) or die(mysql_error());
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
			echo "<tr><td>".$row['courseNum']."</td><td>".$row['sectNum']."</td><td>".$row['callNum']."</td><td>".$row['instruction']."</td><td>".$row['campus']."</td><td>".$row['days']."</td><td>".$row['times']."</td><td>".$row['location']."</td></tr>";
		}
	}
	
	public function searchCourses($search)
	{
		$sql = "Select * FROM Courses WHERE courseNum LIKE '%".$search."%' OR CourseName LIKE '%".$search."%'";
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

?>