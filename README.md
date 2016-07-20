Lapel
=====

## Simple(ish) voice interface
This project started when I was playing around with the all voice Bluetooth interface in my car to make a phone call. I suddenly became fascinated by voice interactions and wanted to start playing around with something. I have to admit, the first thing I thought was, "I'm sure there's got to be some open source voice library out there"...and of course, there was. Basically, among many things I found during my initial search, [pocketsphinx.js](https://github.com/syl22-00/pocketsphinx.js) and [meSpeak](http://www.masswerk.at/mespeak/) seemed to stand out because they are both open source javascript libraries that are reasonably straight forward to get started with.

Please note: this project is at the alpha-iest of all alphas... 

### The goal
Create a super simple interface module. i.e. something that you can use to implement one or more voice controlled features... like "next" or "previous" on a menu. That means:

* **Create a basic interaction module** that accepts inputs and maps to a conditional argument
* **Create a viable speech recognition loop** so that it may be incorporated into conditional functionality

### Demos and hacksaws
Basically the demo is currently a hack job of two demos: pocketsphinx.js and meSpeak. The pocketsphinx.js demo has a nice little set up where the user can turn on the microphone and watch the text from the words that it recognizes. However, to satisfy my goal of a simple interaction loop, I am working on automating the on and off of the microphone as well as simplifying the input interaction so that it is a keyword based conditional argument as opposed to a continual *dictation style* format. The speakMe stuff is added to replace most of the visual text on the page of the demo in order to achieve an all voice input/cue system. The visual text on the page that displays what the user says is part of the visual feedback system.

**Disclaimer #1**: this only works on Chrome for now...

**Disclaimer #2**: the js is pretty huge so it takes a while to load.

**Disclaimer #3**: you might need to re-load the page at least once for it to work.

DEMO ONLY WORKS LOCALLY
<!--[Click here to view the demo](http://istitch.net/lapel)-->

### Areas of interests:
* functional feedback cycles
* voice interface cues and timing
* voice combined with other sounds
* voice combined with visuals
* refactoring code so that timing can be better controlled and more linear
* consolidation of code while being able to update developing libraries
* optimization workflows
* compatibility with A-Frame projects and WebVR

### Additional research
In the process, I've been learning about speech recognition fundamentals as well as getting updates on the state of affairs from the [CMU Sphinx project](http://cmusphinx.sourceforge.net/). 


### License Information
* [pocketsphinx.js](https://github.com/syl22-00/pocketsphinx.js#9-license)
* [meSpeak](https://github.com/kripken/speak.js/blob/master/License.txt)





