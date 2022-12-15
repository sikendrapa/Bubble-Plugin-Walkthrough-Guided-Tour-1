function(instance, properties, context) {

  introJs().setOptions({
  steps: [{
    intro: "Hello world!"
  }, {
    element: document.querySelector('#myHeader'),
    intro: "Click here to login!"
  }]
}).start();
    


}