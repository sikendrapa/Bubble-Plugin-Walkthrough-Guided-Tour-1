function(instance, properties, context) {
	var ch = properties.theme.toLowerCase();
	if (ch != "default")  //If default is selected, use default theme
    {	
    var code = "<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/usablica/intro.js/themes/introjs-"+ch+".css'/>";
	$('head').append(code);  //Change themes by appending header
    }
    else 
    {
        
    }
    var titlecolor = properties.titlecolor;
    var introcolor = properties.introcolor;
    var lineheight = properties.lineheight;
    var styleTag = $('<style>.customTooltip { color: ' + introcolor + '; } .customTooltip .introjs-tooltip-title { color: ' + titlecolor + '; } .introjs-tooltiptext {line-height: ' + lineheight + '; }</style>');
	$('html > head').append(styleTag);
    instance.data.showbutton = properties.showbutton;
    instance.data.showbullets = properties.showbullets;
    instance.data.showstepnumbers = properties.showstepnumbers;
    instance.data.showprogress = properties.showprogress; 
    instance.data.exitonoverlayclick = properties.exitonoverlayclick;
    instance.data.overlayopacity = properties.overlayopacity;
    instance.data.nextlabel = properties.nextlabel;
    instance.data.prevlabel = properties.prevlabel;
    instance.data.donelabel = properties.donelabel;
}