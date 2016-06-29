$(document).ready(function(){
    reerMap.init();
});

var reerMap = {
    options : {
        baseLayerUrl : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        defaultZoom : 8,
        defaultCenter: [44.45534933372025, 10.5413818359375]
    },
    map : {},
    baseLayer : {},
    init: function(){
		reerMap.initEvents();
		reerMap.initMap();
	},
    initEvents : function(){
        $("#sidebar-toggle").click(function(e) {
            e.preventDefault();
            var sidebarVisible = $("#sidebar-wrapper" ).width() > 0 ? 1 : 0;
            var width = sidebarVisible ? 0 : 250;
            $("#sidebar-wrapper").animate({width: width},750,function(){
                reerMap.map.invalidateSize({pan: false},false);
            })
        });

		$('#button_findMe').on('click', function(evt){
			reerMap.map.locate({setView:true});
		});
	},
    initMap : function(){
		reerMap.baseLayer = L.tileLayer(reerMap.options.baseLayerUrl, {
			attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
		});

		reerMap.map = L.map('map', {
			center: reerMap.options.defaultCenter,
			zoom: reerMap.options.defaultZoom
		});
		reerMap.map.addLayer(reerMap.baseLayer);
	}
}
