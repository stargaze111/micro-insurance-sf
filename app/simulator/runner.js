


var i = 1;                     //  set your counter to 1

var stop = false;

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      console.log("running");;          //  your code here
      i++;                     //  increment the counter
      if (!stop) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 3000)
}




self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      stop = false;
      self.postMessage('WORKER STARTED: ' + data.msg);
      myLoop();

      break;
    case 'stop':
      stop = true;
      self.postMessage('WORKER STOPPED: ' + data.msg +
                       '. (buttons will no longer work)');
    
     // self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage('Unknown command: ' + data.msg);
  };
}, false);
