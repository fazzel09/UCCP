<div class="calendar">
<!--     <tr><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td></tr>
 --> Calendar Implementation
   <table>
    <tr><td></td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>Sun</td></tr>
    <tr><td>7am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td><td class="30min"></td></tr>
    <tr><td>8am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>9am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>10am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>11am</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>12pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>1pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>2pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>3pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>4pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>5pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>6pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>7pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>8pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>9pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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