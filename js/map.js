var map = L.map('map', {
    center: [-17.987086, -70.236070],
    zoom: 17,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-17.9914807224,-70.2434796155], [-17.9824347403,-70.2281826674]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var baseGoogleTerrain = GoogleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var baseGoogleSat = GoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});



var MZ_133 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_133", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_133.addTo(map);

var MZ_134 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_134", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_134.addTo(map);

var MZ_135 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_135", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_135.addTo(map);

var MZ_136 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_136", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_136.addTo(map);

var MZ_137 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_137", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_137.addTo(map);

var MZ_138 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_138", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_138.addTo(map);

var MZ_139 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_139", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_139.addTo(map);

var MZ_140 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_140", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_140.addTo(map);

var MZ_141 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_141", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_141.addTo(map);

var MZ_142 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_142", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_142.addTo(map);

var MZ_143 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_143", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_143.addTo(map);

var MZ_144 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_144", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_144.addTo(map);

var MZ_145 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_145", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_145.addTo(map);

var MZ_146 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_146", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_146.addTo(map);

var MZ_147 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_147", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_147.addTo(map);

var MZ_148 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_148", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_148.addTo(map);

var MZ_149 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_149", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_149.addTo(map);

var MZ_150 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_150", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_150.addTo(map);

var MZ_151 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_151", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_151.addTo(map);

var MZ_152 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_152", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_152.addTo(map);

var MZ_153 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_153", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_153.addTo(map);

var MZ_154 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_154", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_154.addTo(map);

var MZ_155 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_155", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_155.addTo(map);

var MZ_156 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_156", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_156.addTo(map);

var MZ_157 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_157", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_157.addTo(map);

var MZ_158 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:MZ_158", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_158.addTo(map);

var area_154 = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_ciudad_nueva/wms?", {
layers: "	proyecto_ciudad_nueva:area_154", //gisweb:manzanas
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
area_154.addTo(map);

var baseMaps = {
"OSM": basemapOSM,
"GoogleTerrain": baseGoogleTerrain,
"GoogleSat": baseGoogleSat
};
var overlayMaps = {
"Manzana 133": MZ_133,
"Manzana 134": MZ_134,
"Manzana 135": MZ_135,
"Manzana 136": MZ_136,
"Manzana 137": MZ_137,
"Manzana 138": MZ_138,
"Manzana 139": MZ_139,
"Manzana 140": MZ_140,
"Manzana 141": MZ_141,
"Manzana 142": MZ_142,
"Manzana 143": MZ_143,
"Manzana 144": MZ_144,
"Manzana 145": MZ_145,
"Manzana 146": MZ_146,
"Manzana 147": MZ_147,
"Manzana 148": MZ_148,
"Manzana 149": MZ_149,
"Manzana 150": MZ_150,
"Manzana 151": MZ_151,
"Manzana 152": MZ_152,
"Manzana 153": MZ_153,
"Manzana 154": MZ_154,
"Manzana 155": MZ_155,
"Manzana 156": MZ_156,
"Manzana 157": MZ_157,
"Manzana 158": MZ_158
};

L.control.layers(baseMaps, overlayMaps,{
position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
collapsed: false // true
}).addTo(map);

