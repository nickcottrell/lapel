
       // This is the list of words that need to be added to the recognizer
       // This follows the CMU dictionary format
       // http://www.speech.cs.cmu.edu/cgi-bin/cmudict

      var wordList = [
["ONE", "W AH N"],
["TWO", "T UW"], 
["THREE", "TH R IY"], 
["FOUR", "F AO R"], 
["FIVE", "F AY V"], 
["SIX", "S IH K S"], 
["SEVEN", "S EH V AH N"], 
["EIGHT", "EY T"], 
["NINE", "N AY N"], 
["ZERO", "Z IH R OW"], 
["NEW-YORK", "N UW Y AO R K"], 
["NEW-YORK-CITY", "N UW Y AO R K S IH T IY"], 
["PARIS", "P AE R IH S"] , 
["PARIS(2)", "P EH R IH S"], 
["SHANGHAI", "SH AE NG HH AY"], 
["SAN-FRANCISCO", "S AE N F R AE N S IH S K OW"], 
["LONDON", "L AH N D AH N"], 
["BERLIN", "B ER L IH N"], 
["SUCKS", "S AH K S"], 
["ROCKS", "R AA K S"], 
["IS", "IH Z"], 
["NOT", "N AA T"], 
["GOOD", "G IH D"], 
["GOOD(2)", "G UH D"], 
["GREAT", "G R EY T"], 
["WINDOWS", "W IH N D OW Z"], 
["LINUX", "L IH N AH K S"], 
["UNIX", "Y UW N IH K S"], 
["MAC", "M AE K"], 
["AND", "AE N D"], 
["AND(2)", "AH N D"], 
["O", "OW"], 
["S", "EH S"], 
["X", "EH K S"], 
//***LAPEL***
["PEAR", "P EY R"], 
["GRAPE", "G R EY P"], 
["APPLE", "AE P AH L"],
["STRAWBERRY", "S T R AO B EH R IY"],
["ORANGE", "AO R AH N JH"],
["PEACH", "P IY CH"],
["CHERRY", "CH EH R IY"],
["PINEAPPLE", "P AY N AE P AH L"],
["KIWI", "K IY W IY"],
["WATERMELON", "W AO T ER M EH L AH N"],
["MANGO", "M AE NG G OW"],
["LEMON", "L EH M AH N"],
["BANANA", "B AH N AE N AH"],
["CANTALOUPE", "K AE N T AH L OW P"],
["APRICOT", "EY P R AH K AA T"],
["BLACKBERRY", "B L AE K B EH R IY"],
["PAPAYA", "P AH P AY AH"],
["TANGERINE", "T AE N JH ER IY N"],
["POMEGRANATE", "P AA M AH G R AE N AH T"],
["CRANBERRY", "K R AE N B EH R IY"]
];

 	  
      // ***LAPEL*** This grammar recognizes fruits and is the only one used for the LAPEL DEMO
      var grammarFruits = {numStates: 1, start: 0, end: 0, transitions: [
	{from: 0, to: 0, word: "PEAR"}, 
	{from: 0, to: 0, word: "GRAPE"}, 
	{from: 0, to: 0, word: "APPLE"},
	{from: 0, to: 0, word: "STRAWBERRY"},
	{from: 0, to: 0, word: "ORANGE"},
	{from: 0, to: 0, word: "PEACH"},
	{from: 0, to: 0, word: "CHERRY"},
	{from: 0, to: 0, word: "PINEAPPLE"},
	{from: 0, to: 0, word: "KIWI"},
	{from: 0, to: 0, word: "WATERMELON"},
	{from: 0, to: 0, word: "MANGO"},
	{from: 0, to: 0, word: "LEMON"},
	{from: 0, to: 0, word: "BANANA"},
	{from: 0, to: 0, word: "CANTALOUPE"},
	{from: 0, to: 0, word: "APRICOT"},
	{from: 0, to: 0, word: "BLACKBERRY"},
	{from: 0, to: 0, word: "PAPAYA"},
	{from: 0, to: 0, word: "TANGERINE"},
	{from: 0, to: 0, word: "POMEGRANATE"},
	{from: 0, to: 0, word: "CRANBERRY"}
	]};
      
      // This grammar recognizes digits ***LAPEL***NOT BEING USED***LAPEL***
      var grammarDigits = {numStates: 1, start: 0, end: 0, transitions: [{from: 0, to: 0, word: "ONE"},{from: 0, to: 0, word: "TWO"},{from: 0, to: 0, word: "THREE"},{from: 0, to: 0, word: "FOUR"},{from: 0, to: 0, word: "FIVE"},{from: 0, to: 0, word: "SIX"},{from: 0, to: 0, word: "SEVEN"},{from: 0, to: 0, word: "EIGHT"},{from: 0, to: 0, word: "NINE"},{from: 0, to: 0, word: "ZERO"}]};
      
      // This grammar recognizes a few cities names ***LAPEL***NOT BEING USED***LAPEL***
      var grammarCities = {numStates: 1, start: 0, end: 0, transitions: [{from: 0, to: 0, word: "NEW-YORK"}, {from: 0, to: 0, word: "NEW-YORK-CITY"}, {from: 0, to: 0, word: "PARIS"}, {from: 0, to: 0, word: "SHANGHAI"}, {from: 0, to: 0, word: "SAN-FRANCISCO"}, {from: 0, to: 0, word: "LONDON"}, {from: 0, to: 0, word: "BERLIN"}]};
      
      var grammars = [{title: "Digits", g: grammarDigits}, {title: "Cities", g: grammarCities}, {title: "Fruits", g: grammarFruits}];

      var grammarIds = [];


