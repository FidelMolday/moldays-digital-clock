<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Javascript Digital Clock</title>
    </head>
    <body>
        <div class="container">
            <span id="hours">00</span>
            <span>:</span>
            <span id="minutes">00</span>
            <span>:</span>
            <span id="seconds">00</span>
            <span id="session">PM</span>
        </div>  
        <style>
            body{
                margin: 0%;
                padding: 0%;
                background-color: black;
            }
            .container{
                font-family: Arial, Helvetica, sans-serif;
                color: #fff;
                font-weight: bold;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                font-size: 70px;
            }
        </style>
        <script>
            function displayTime(){
                var dateTime = new Date();
                var hrs = dateTime.getHours();
                var min = dateTime.getMinutes();
                var sec = dateTime.getSeconds();
                var session = document.getElementById("session")
            
            if(hours>=12){
                session.innerHTML="PM";
            }
            else{
                session.innerHTML="AM";
            }
            if (hrs>12){
                hrs=hrs-12
            }
            document.getElementById("hours").innerHTML=hrs;
            document.getElementById("minutes").innerHTML=min;
            document.getElementById("seconds").innerHTML=sec;
        }
        setInterval(displayTime,10);
        </script>
    </body>
</html>
