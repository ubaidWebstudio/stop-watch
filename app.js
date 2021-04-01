//define vare to hold time value
let seconds = 0;
let minutes = 0;
let hours = 0;

///define var to hold"display" value
let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;
// difine var to hold setintervel()function
let interval = null;
///define var to hold stopwatch status
let status = "stopped"


/// stop watch function (logic to determine when to increment next value,etc)

    function stopWatch(){

       seconds++;
       ///logic to determine wten to increment next value
      if(seconds / 60 === 1){
          seconds = 0;
          minutes++;









        
            if(minutes / 60 === 1){
                minutes = 0;
              hours++;
    
            }
        
        }

       ///if seconds/minutes/hours are only one digit,add a leading 0 to hte value
       if(seconds < 10){
           displayseconds = "0" + seconds.toString();
       }
       else{ 
           displayseconds = seconds;
       }
       if(minutes < 10){
           displayminutes = "0" + minutes.toString();
       }
       else{
           diaplayminutes = minutes;
       }
       if(hours < 10){
           displayhours = "0" + hours.toString();
       }
       else{
           displayhours = hours;
       }
     ///displayupdated time value to user
         document.getElementById("display").innerHTML =displayhours  +":" + displayminutes + ":" + displayseconds;
    
    
    
    
    
    }
    
function startstop(){
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startstop").innerHTML = "stop"
         status = "started";
    }
         else{
         window.clearInterval(interval);
         document.getElementById("startstop").innerHTML = "start"    
         status = "stopped";
        }



}
function reset(){
    window.clearInterval(interval);
    secinds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00"
    document.getElementById("startstop").innerHTML ="start";

}