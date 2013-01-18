<div class="calendar">
<!--     <tr><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td></tr>
 --> Calendar Implementation
   <table>
    <tr class='dayHeader'><td></td><td div class="M">Mon</td><td div class="T">Tue</td><td div class="W">Wed</td><td div class="R">Thu</td><td div class="F">Fri</td><td div class="S">Sat</td><td div class="U">Sun</td></tr>
    <?php
	$hourCounter = 7;
	for($i=0;$i<15;$i++)
	{		
		if($hourCounter<10)
		{
			$hourCounter = '0'.$hourCounter;
		}
		if($hourCounter>12)
		{
			$hourString = ($hourCounter -12).'pm';	
		}
		else
		{
			$hourString = $hourCounter.'am';	
		}
		echo('<tr><td class ="'.$hourCounter.' 00 hourHeader">'.$hourString.'</td><td class="'.$hourCounter.' M"></td><td class="'.$hourCounter.' T"></td><td class="'.$hourCounter.' W">'.
			'</td><td class="'.$hourCounter.' R"></td><td class="'.$hourCounter.' F"></td><td class="'.$hourCounter.' S"></td><td class="'.$hourCounter.' U"></td></tr>');
		echo('<tr><td class ="'.$hourCounter.' 30 hourHeader"></td><td class="'.$hourCounter.'30 M"></td><td class="'.$hourCounter.'30 T"></td><td class="'.$hourCounter.'30 W">'.
			'</td><td class="'.$hourCounter.'30 R"></td><td class="'.$hourCounter.'30 F"></td><td class="'.$hourCounter.'30 S"></td><td class="'.$hourCounter.'30 U"></td></tr>');
	$hourCounter++;			
	}
	?>
    <!--<tr><td class = "07">7am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td></tr>
    <tr><td class = "08">8am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "09">9am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "10">10am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "11">11am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "12">12pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "13">1pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "14">2pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "15">3pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "16">4pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "17">5pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "18">6pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "19">7pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "20">8pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class = "21">9pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>-->
   </table>
   </div>   
 <!--   //////////////////////// DIV CALENDAR IMPLEMENTATION ////////////////////////////////
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
    <div class="grid"> <!-- for full hours, 15x7.  For half-hours, 30x7. --> <!--
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
-->