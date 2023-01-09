var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" />  11083.0000 - 28174.8000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" />  28174.8000 - 45266.6000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" />  45266.6000 - 62358.4000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" />  62358.4000 - 79450.2000 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" />  79450.2000 - 96542.0000 <br />'
        });var format_puskesmas_1 = new ol.format.GeoJSON();
var features_puskesmas_1 = format_puskesmas_1.readFeatures(json_puskesmas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmas_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_puskesmas_1.addFeatures(features_puskesmas_1);var lyr_puskesmas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puskesmas_1, 
                style: style_puskesmas_1,
                title: '<img src="styles/legend/puskesmas_1.png" /> puskesmas'
            });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);lyr_puskesmas_1.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,lyr_puskesmas_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Jumlah': 'Jumlah', });
lyr_puskesmas_1.set('fieldAliases', {'Puskesmas': 'Puskesmas', 'JML Kasus': 'JML Kasus', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_puskesmas_1.set('fieldImages', {'Puskesmas': 'TextEdit', 'JML Kasus': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Jumlah': 'inline label', });
lyr_puskesmas_1.set('fieldLabels', {'Puskesmas': 'inline label', 'JML Kasus': 'inline label', });
lyr_puskesmas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});