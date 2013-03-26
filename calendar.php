<div id="calendar">
    <table>
    <tr><td width="50 dayHeader"></td><td div class="M dayHeader">Mon</td><td div class="T dayHeader">Tue</td><td div class="W dayHeader">Wed</td><td div class="R dayHeader">Thu</td><td div class="F dayHeader">Fri</td><td div class="S dayHeader">Sat</td><td div class="U dayHeader">Sun</td></tr>
    <?php
	$hourCounter = 7;
	for($i=0;$i<15;$i++)
	{		
		$hourString = $hourCounter;
		if($hourCounter<10) {
			$hourCounter = '0'.$hourCounter;
		}
		if($hourCounter == 12) {
			$hourString = ($hourCounter).'pm';	
		}
		elseif($hourCounter>12) {
			$hourString = ($hourCounter -12).'pm';	
		}
		else {
			$hourString = $hourString.'am';	
		}
		echo('<tr><td  width="50" rowspan="2" valign="top" class ="'.$hourCounter.' 00 hourHeader">'.$hourString.'</td><td class="'.$hourCounter.' M 00"></td><td class="'.$hourCounter.' T 00"></td><td class="'.$hourCounter.' W 00">'.
             '</td><td class="'.$hourCounter.' R 00"></td><td class="'.$hourCounter.' F 00"></td><td class="'.$hourCounter.' S 00"></td><td class="'.$hourCounter.' U 00"></td></tr>');
		echo('<tr><td class="'.$hourCounter.'30 M 30"></td><td class="'.$hourCounter.'30 T 30"></td><td class="'.$hourCounter.'30 W 30">'.
            '</td><td class="'.$hourCounter.'30 R 30"></td><td class="'.$hourCounter.'30 F 30"></td><td class="'.$hourCounter.'30 S 30"></td><td class="'.$hourCounter.'30 U 30"></td></tr>');
	$hourCounter++;			
	}
	?>
    </table>
    </div> 