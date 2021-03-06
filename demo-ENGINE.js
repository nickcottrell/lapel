
const TIME_TO_WAIT = 999;
const WAIT_FOR_RED_DOT = 500;
const WAIT_TO_RESPOND = 2000;

let timeLineNumber = 42;
console.log("timeLineNumber set to "+timeLineNumber);  


$.getScript("../demo-VOCABULARY.js", function(){
	console.log("ENGINE: demo-VOCABULARY script loaded and executed.");
});


$(document).ready(function() {
  meSpeak.resetQueue();
    sayEnabled(QUESTION, QUESTION_TIME);
    //sayRecording();
});

timeLineNumber = 100;
console.log("timeLineNumber set to "+timeLineNumber);  


$( "#startBtn" ).click(function() {
  meSpeak.speak("Speak");
});
      
      function sayEnabled(q, timing) {
        if (timeLineNumber == 100) {
          setTimeout(function(){
          meSpeak.speak(q);

          }, 1000 );
          setTimeout(function() {
            timeLineNumber = 200;
            console.log("The timeLineNumber is supposed to be 200");   
            console.log("timeLineNumber set to "+timeLineNumber);   
            sayRecording();
          }, timing ); //this is how long it takes for the reader to finish saying the line of text.
        } else {
         //relaunching to create a loop
         console.log("sayEnabled ELSE invoked. timeLineNumber is actually:"+timeLineNumber);   
         setTimeout(function() {
           sayEnabled();
           }, 500);
        }
       };

      function sayRecording() {
        if (timeLineNumber == 200) {
          console.log("After checking it, timeLineNumber is set to "+timeLineNumber);
          setTimeout(function() {
            timeLineNumber = 300;
            console.log("The timeLineNumber is supposed to be 300");   
            console.log("timeLineNumber set to "+timeLineNumber); 
          }, 3000); //this is how long it takes for the reader to finish saying the line of text.
        } else {
        	//relaunching to create a loop
          console.log("sayRecording ELSE invoked. timeLineNumber is actually:"+timeLineNumber);   
          setTimeout(function() {
            sayRecording();
           }, 500); //this is the time before the speech recognizer starts
        }
       };

    function LAPEL_initRecord() {

    	 console.log("LAPEL_initRecord check timeLineNumber is"+timeLineNumber);   
        if (timeLineNumber == 300) {
          //var startBtn_BLEEP = document.getElementById('startBtn');
        $("#startBtn").click();
          setTimeout(function() {
            let timeLineNumber = 400;
            console.log("The timeLineNumber is supposed to be 400");   
            console.log("timeLineNumber set to "+timeLineNumber); 
          }, 1000); //this is how long it takes for the reader to finish saying the line of text.
        } else {
          //relaunching to create a loop
    	 console.log("LAPEL_initRecord ELSE invoked. timeLineNumber is actually:"+timeLineNumber);   
          setTimeout(function() {
            console.log("reloaded LAPEL_initRecord");
            LAPEL_initRecord();
            audio_context.resume();//********************BUG FIX -- need to learn more about audio initializer
           }, 500);
        }
    };
  
  



      // These will be initialized later
      var recognizer, recorder, callbackManager, audio_context;
      // Only when both recorder and recognizer do we have a ready application
      var recorderReady = recognizerReady = false;

      // A convenience function to post a message to the recognizer and associate
      // a callback to its response
      function postRecognizerJob(message, callback) {
        var msg = message || {};
        if(callbackManager) msg.callbackId = callbackManager.add(callback);
        if (recognizer) recognizer.postMessage(msg);
      };

      // This function initializes an instance of the recorder
      // it posts a message right away and calls onReady when it
      // is ready so that onmessage can be properly set
      function spawnWorker(workerurl, onReady) {
          recognizer = new Worker(workerurl);
          recognizer.onmessage = function(event) {
            onReady(recognizer);
          };
          recognizer.postMessage({});
      };

      // To display the hypothesis sent by the recognizer
      function updateHyp(hyp) {
        output.innerHTML = hyp;
      };

      // This updates the UI when the app might get ready
      // Only when both recorder and recognizer are ready do we enable the buttons
      function updateUI() {
        if (recorderReady && recognizerReady) startBtn.disabled = stopBtn.disabled = false;
      };

      // This is just a logging window where we display the status
      function updateStatus(newStatus) {
        console.log("PX: UPDATE STATUS:" + newStatus + "\n");
      };

      // A not-so-great recording indicator
      function displayRecording(display) {
        if (display) document.getElementById('recording-indicator').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        else document.getElementById('recording-indicator').innerHTML = "";
      };

      // Callback function once the user authorises access to the microphone
      // in it, we instanciate the recorder
      function startUserMedia(stream) {
        var input = audio_context.createMediaStreamSource(stream);
        var audioRecorderConfig = {errorCallback: function(x) {updateStatus("Error from recorder: " + x);}};
        recorder = new AudioRecorder(input, audioRecorderConfig);
        // If a recognizer is ready, we pass it to the recorder
        if (recognizer) recorder.recognizer = recognizer;
        recorderReady = true;
		
		updateUI();
        //updateStatus("Audio recorder ready");			
        console.log("PX: Audio recorder ready");			
		
        //***LAPEL*** hacked the interface so that the button is clicked at the appropriate time in the queue  
		LAPEL_initRecord(); 
        //***LAPEL*** 
      };

    
           // This starts recording. We first need to get the id of the grammar to use    
        var startRecording = function() {
          //***LAPEL*** added a set timeout so that it won't record the mespeak cue
          setTimeout(function() {
          var id = document.getElementById('grammars').value;
          if (recorder && recorder.start(id)) displayRecording(true);
          }, WAIT_FOR_RED_DOT); //*******************THIS NUMBER CONTROLS HOW LONG IT TAKES FOR THE RED DOT TO TURN ON 
        };


      // Stops recording
      var stopRecording = function() {
        recorder && recorder.stop();
        displayRecording(false);
      };

      // Called once the recognizer is ready
      // We then add the grammars to the input select tag and update the UI
      var recognizerReady = function() {
           updateGrammars();
           recognizerReady = true;
           updateUI();
           updateStatus("PX: Recognizer ready");
      };

      // We get the grammars defined below and fill in the input select tag
      var updateGrammars = function() {
        var selectTag = document.getElementById('grammars');
        for (var i = 0 ; i < grammarIds.length ; i++) {
            var newElt = document.createElement('option');
            newElt.value=grammarIds[i].id;
            newElt.innerHTML = grammarIds[i].title;
            selectTag.appendChild(newElt);
        }                          
      };

      // This adds a grammar from the grammars array
      // We add them one by one and call it again as
      // a callback.
      // Once we are done adding all grammars, we can call
      // recognizerReady()
      var feedGrammar = function(g, index, id) {
        if (id && (grammarIds.length > 0)) grammarIds[0].id = id.id;
        if (index < g.length) {
          grammarIds.unshift({title: g[index].title})
	  postRecognizerJob({command: 'addGrammar', data: g[index].g},
                             function(id) {feedGrammar(grammars, index + 1, {id:id});});
        } else {
          recognizerReady();
        }
      };

      // This adds words to the recognizer. When it calls back, we add grammars
      var feedWords = function(words) {
           postRecognizerJob({command: 'addWords', data: words},
                        function() {feedGrammar(grammars, 0);});
      };

      // This initializes the recognizer. When it calls back, we add words
      var initRecognizer = function() {
          // You can pass parameters to the recognizer, such as : {command: 'initialize', data: [["-hmm", "my_model"], ["-fwdflat", "no"]]}
          postRecognizerJob({command: 'initialize'},
                            function() {
                                        if (recorder) recorder.recognizer = recognizer;
                                        feedWords(wordList);});
      };

      // When the page is loaded, we spawn a new recognizer worker and call getUserMedia to
      // request access to the microphone
      window.onload = function init() {
        updateStatus("PX: Initializing Web Audio and speech recognizer, waiting for approval to access your microphone");

        callbackManager = new CallbackManager();
        spawnWorker("js/recognizer.js", function(worker) {
            // This is the onmessage function, once the worker is fully loaded
            worker.onmessage = function(e) {
                // This is the case when we have a callback id to be called
                if (e.data.hasOwnProperty('id')) {
                  var clb = callbackManager.get(e.data['id']);
                  var data = {};
                  if( e.data.hasOwnProperty('data')) data = e.data.data;
                  if(clb) clb(data);
                }
                // This is a case when the recognizer has a new hypothesis

                if (e.data.hasOwnProperty('hyp')) {
                  var newHyp = e.data.hyp;

                  if (e.data.hasOwnProperty('final') &&  e.data.final)
                  updateHyp(newHyp);
					
					         //***LAPEL*** record until you hear something. then automatically click the stop button
					         if (newHyp != 0) { 
    					     
                      var stopBtn_BLEEP = document.getElementById('stopBtn');
                    stopBtn_BLEEP.click();
                    //let the user know that you have received the input
                    meSpeak.speak("ok, got it.");

                   
						        //delay for WAIT_TO_RESPOND time, determine if it's correct, then respond accordingly
						        //RESPONSE MESSAGE
                    setTimeout(function() {
							         if (newHyp == CORRECT_ANSWER) {
								        meSpeak.speak(YES_MESSAGE);
							         } else {
							         meSpeak.speak(NO_MESSAGE);
							         };
						        }, WAIT_TO_RESPOND); //***************** THIS IS THE NUMBER BEFORE THE RESPONSE TO THE ANSWER
					         
                   //RESET the number
                   timeLineNumber = 100;
                      console.log("RESETTING timeLineNumber to 100");   
                      console.log("timeLineNumber set to "+timeLineNumber); 
                        meSpeak.resetQueue();
              
                            setTimeout(function(){
                            sayEnabled(QUESTION, QUESTION_TIME);
                            }, 7000); //THE TIME NEEDS TO BE BASED on the length of the RESPONSE MESSAGE statement
                                    //setTimeout(function() {
                                    //document.getElementById('startBtn').click();
                                    //let timeLineNumber = 400;
                                    //console.log("The timeLineNumber is supposed to be 400");   
                                    //console.log("timeLineNumber set to "+timeLineNumber); 
                                    //}, 4000); //this is based on something...*/


                   };
          
                  }

				





                
                // This is the case when we have an error
                if (e.data.hasOwnProperty('status') && (e.data.status == "error")) {
                  updateStatus("PX: Error in " + e.data.command + " with code " + e.data.code);

                }

            };
            // Once the worker is fully loaded, we can call the initialize function
            initRecognizer();
        });
        // The following is to initialize Web Audio
        try {
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
          window.URL = window.URL || window.webkitURL;
          audio_context = new AudioContext();
        } catch (e) {
          updateStatus("PX: Error initializing Web Audio browser");

        }
        if (navigator.getUserMedia) navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
                                        updateStatus("PX: No live audio input in this browser");
                                    });
        else updateStatus("PX: No web audio support in this browser");

      // Wiring JavaScript to the UI
      var startBtn = document.getElementById('startBtn');
      var stopBtn = document.getElementById('stopBtn');
	  startBtn.disabled = false;
      stopBtn.disabled = false;
      startBtn.onclick = startRecording;
      stopBtn.onclick = stopRecording;
      };






