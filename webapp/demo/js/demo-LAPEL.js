    var TIMELINE;

    TIMELINE = 0;    

    function sayIntro() {
        console.log("sayIntro begins");
        meSpeak.speak("This is a voice interface. You must allow use of your browser's microphone. Click THEE allow button on the top right.");
          setTimeout(function() {
            //console.log("TIMELINE set to 100");
            TIMELINE = 100;
          }, 10000); //this is how long it takes for the reader to finish saying the line of text.
      };

      function sayEnabled() {
        if (TIMELINE == 100) {
          console.log("After checking it, TIMELINE is indeed set to 1.");
          meSpeak.speak("Voice enabled. Name a fruit that rhymes with ape.");
          setTimeout(function() {
            console.log("TIMELINE set to 200");
            TIMELINE = 200;
          }, 5000); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          setTimeout(function() {
            //console.log("reloaded sayEnabled");
            sayEnabled();
           }, 1000);
        }
       };

      function sayRecording() {
        if (TIMELINE == 200) {
          console.log("After checking it, TIMELINE is indeed set to 2.");
          setTimeout(function() {
            console.log("TIMELINE set to 300");
            TIMELINE = 300;
          }, 1000); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          setTimeout(function() {
            console.log("reloaded sayRecording");
            sayRecording();
           }, 999);
        }
       };

	  function LAPEL_initRecord() {
        if (TIMELINE == 300) {
          //var startBtn_BLEEP = document.getElementById('startBtn');
	      $("#startBtn").click();
          setTimeout(function() {
            console.log("TIMELINE set to 400");
            TIMELINE = 400;
          }, 3000); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          setTimeout(function() {
            console.log("reloaded LAPEL_initRecord");
            LAPEL_initRecord();
           }, 999);
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