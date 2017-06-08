    var TIMELINE;

    TIMELINE = 0;    

    function sayIntro() {
        console.log("sayIntro begins");
        meSpeak.speak("This is a voice interface.");
          setTimeout(function() {
            TIMELINE = 100;
            console.log("TIMELINE set to 100");
          }, 2000); //this is how long it takes for the reader to finish saying the line of text.
      };

      function sayEnabled() {
        if (TIMELINE == 100) {
          console.log("After checking it, TIMELINE is set to 100.");
          meSpeak.speak("Name a fruit that rhymes with ape.");
          setTimeout(function() {
            console.log("TIMELINE set to 200");
            TIMELINE = 200;
          }, 500	); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          setTimeout(function() {
            //console.log("reloaded sayEnabled");
            sayEnabled();
           }, 500);
        }
       };

      function sayRecording() {
        if (TIMELINE == 200) {
          console.log("After checking it, TIMELINE is set to 200.");
          setTimeout(function() {
            console.log("TIMELINE set to 300");
            TIMELINE = 300;
          }, 1500); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          setTimeout(function() {
            console.log("reloaded sayRecording");
            sayRecording();
           }, 500); //this is the time before the speech recognizer starts
        }
       };

	  function LAPEL_initRecord() {
        if (TIMELINE == 300) {
          //var startBtn_BLEEP = document.getElementById('startBtn');
	      $("#startBtn").click();
          setTimeout(function() {
            console.log("TIMELINE set to 400");
            TIMELINE = 400;
          }, 1000); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          setTimeout(function() {
            console.log("reloaded LAPEL_initRecord");
            LAPEL_initRecord();
           }, 500);
        }
	  };
	
	
      $( "#startBtn" ).click(function() {
        meSpeak.speak("Speak.");
      });

	
$(document).ready(function() {
	meSpeak.resetQueue();
    sayIntro();
    sayEnabled();
    sayRecording();
});
