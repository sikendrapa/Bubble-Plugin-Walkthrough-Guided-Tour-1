function(instance, properties, context) {

	var elementID = "#" + properties.elemid;
    var data_intro = properties.dataintro;
    var data_title = properties.datatitle;
    var data_position = properties.dataposition.toLowerCase();
    var data_step = properties.datastep;

    document.querySelector(elementID).setAttribute("data-intro", data_intro);
    document.querySelector(elementID).setAttribute("data-title", data_title);
    document.querySelector(elementID).setAttribute("data-step", data_step);
    document.querySelector(elementID).setAttribute("data-position", data_position);

}