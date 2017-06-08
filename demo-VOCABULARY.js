
// This is the list of words that need to be added to the recognizer
// This follows the CMU dictionary format
// http://www.speech.cs.cmu.edu/cgi-bin/cmudict

var wordList = [

//bool
["YES", "Y EH S"], 
["NO", "N OW"], 

//fruits
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
var grammarCombo = {numStates: 1, start: 0, end: 0, transitions: [
{from: 0, to: 0, word: "YES"}, 
{from: 0, to: 0, word: "NO"},

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
   

      
      
var grammars = [{title: "Combo", g: grammarCombo}];

var grammarIds = [];


