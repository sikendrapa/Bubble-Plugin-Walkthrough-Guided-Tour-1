function(instance, properties, context) {
    instance.data.stepp = 1;
    instance.data.isActive = true;
    instance.publishState("isActive", instance.data.isActive)

introJs().setOptions({ 
  'nextLabel': instance.data.nextlabel,
  'prevLabel' : instance.data.prevlabel,
  'doneLabel' : instance.data.donelabel,
  'exitOnOverlayClick' : instance.data.exitonoverlayclick,
  'showButtons' : instance.data.showbutton,
  'showStepNumbers' : instance.data.showstepnumbers,
  'showBullets' : instance.data.showbullets,
  'showProgress' : instance.data.showprogress,
  'overlayOpacity' :instance.data.overlayopacity,
  'tooltipClass' : 'customTooltip'
   
}).onchange(function() {
    instance.publishState("stepnumber", instance.data.stepp)
	instance.triggerEvent("onchange");
    instance.data.stepp += 1
}).onexit(function() {
  instance.triggerEvent("onexit");
  instance.data.isActive = false;
  instance.publishState("isActive", instance.data.isActive)
}).oncomplete(function() {
  instance.triggerEvent("oncomplete");
  instance.data.isActive = false;
  instance.publishState("isActive", instance.data.isActive)
  var ElementsWithAttribute = document.querySelectorAll("[data-intro]");
    for(let i = 0; i < ElementsWithAttribute.length; i++){
        ElementsWithAttribute[i].removeAttribute("data-intro");
    }
}).start();


}