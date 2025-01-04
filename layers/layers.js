var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ManjeeraSingoor_2 = new ol.format.GeoJSON();
var features_ManjeeraSingoor_2 = format_ManjeeraSingoor_2.readFeatures(json_ManjeeraSingoor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManjeeraSingoor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManjeeraSingoor_2.addFeatures(features_ManjeeraSingoor_2);
var lyr_ManjeeraSingoor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManjeeraSingoor_2, 
                style: style_ManjeeraSingoor_2,
                popuplayertitle: 'Manjeera-Singoor',
                interactive: true,
    title: 'Manjeera-Singoor<br />\
    <img src="styles/legend/ManjeeraSingoor_2_0.png" /> Phase I<br />\
    <img src="styles/legend/ManjeeraSingoor_2_1.png" /> Phase III<br />\
    <img src="styles/legend/ManjeeraSingoor_2_2.png" /> Phase IV<br />'
        });
var format_Krishna_3 = new ol.format.GeoJSON();
var features_Krishna_3 = format_Krishna_3.readFeatures(json_Krishna_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krishna_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krishna_3.addFeatures(features_Krishna_3);
var lyr_Krishna_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Krishna_3, 
                style: style_Krishna_3,
                popuplayertitle: 'Krishna',
                interactive: true,
    title: 'Krishna<br />\
    <img src="styles/legend/Krishna_3_0.png" /> Division-XI<br />\
    <img src="styles/legend/Krishna_3_1.png" /> Krishna Phase-I<br />\
    <img src="styles/legend/Krishna_3_2.png" /> Krishna Phase-II<br />\
    <img src="styles/legend/Krishna_3_3.png" /> Proposed Krishna Phase-III<br />'
        });
var format_WTPs_4 = new ol.format.GeoJSON();
var features_WTPs_4 = format_WTPs_4.readFeatures(json_WTPs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WTPs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTPs_4.addFeatures(features_WTPs_4);
var lyr_WTPs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WTPs_4, 
                style: style_WTPs_4,
                popuplayertitle: 'WTPs',
                interactive: true,
                title: '<img src="styles/legend/WTPs_4.png" /> WTPs'
            });
var format_River_5 = new ol.format.GeoJSON();
var features_River_5 = format_River_5.readFeatures(json_River_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_5.addFeatures(features_River_5);
var lyr_River_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_5, 
                style: style_River_5,
                popuplayertitle: 'River',
                interactive: true,
                title: '<img src="styles/legend/River_5.png" /> River'
            });
var format_HMWSSBSources_6 = new ol.format.GeoJSON();
var features_HMWSSBSources_6 = format_HMWSSBSources_6.readFeatures(json_HMWSSBSources_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HMWSSBSources_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HMWSSBSources_6.addFeatures(features_HMWSSBSources_6);
var lyr_HMWSSBSources_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HMWSSBSources_6, 
                style: style_HMWSSBSources_6,
                popuplayertitle: 'HMWSSB Sources',
                interactive: true,
                title: '<img src="styles/legend/HMWSSBSources_6.png" /> HMWSSB Sources'
            });
var format_ORR_7 = new ol.format.GeoJSON();
var features_ORR_7 = format_ORR_7.readFeatures(json_ORR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORR_7.addFeatures(features_ORR_7);
var lyr_ORR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORR_7, 
                style: style_ORR_7,
                popuplayertitle: 'ORR',
                interactive: true,
                title: '<img src="styles/legend/ORR_7.png" /> ORR'
            });
var format_RRR_8 = new ol.format.GeoJSON();
var features_RRR_8 = format_RRR_8.readFeatures(json_RRR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RRR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RRR_8.addFeatures(features_RRR_8);
var lyr_RRR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RRR_8, 
                style: style_RRR_8,
                popuplayertitle: ' RRR',
                interactive: true,
                title: '<img src="styles/legend/RRR_8.png" />  RRR'
            });
var format_TelanganaState_9 = new ol.format.GeoJSON();
var features_TelanganaState_9 = format_TelanganaState_9.readFeatures(json_TelanganaState_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TelanganaState_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TelanganaState_9.addFeatures(features_TelanganaState_9);
var lyr_TelanganaState_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TelanganaState_9, 
                style: style_TelanganaState_9,
                popuplayertitle: ' TelanganaState',
                interactive: true,
                title: '<img src="styles/legend/TelanganaState_9.png" />  TelanganaState'
            });
var group_WaterSupplyLine = new ol.layer.Group({
                                layers: [lyr_ManjeeraSingoor_2,lyr_Krishna_3,lyr_WTPs_4,],
                                fold: "open",
                                title: 'Water Supply Line'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ManjeeraSingoor_2.setVisible(true);lyr_Krishna_3.setVisible(true);lyr_WTPs_4.setVisible(true);lyr_River_5.setVisible(true);lyr_HMWSSBSources_6.setVisible(true);lyr_ORR_7.setVisible(true);lyr_RRR_8.setVisible(true);lyr_TelanganaState_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_WaterSupplyLine,lyr_River_5,lyr_HMWSSBSources_6,lyr_ORR_7,lyr_RRR_8,lyr_TelanganaState_9];
lyr_ManjeeraSingoor_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Length': 'Length', 'Phase': 'Phase', 'Diameter': 'Diameter', 'Remarks': 'Remarks', 'Start_Node': 'Start_Node', 'End_Node': 'End_Node', 'Symbology': 'Symbology', 'Shape_Length': 'Shape_Length', });
lyr_Krishna_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Length': 'Length', 'Type': 'Type', });
lyr_WTPs_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phase': 'Phase', 'Capacity': 'Capacity', 'Year': 'Year', 'Type': 'Type', 'Remarks': 'Remarks', 'Source': 'Source', });
lyr_River_5.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'rivname': 'rivname', 'rilcode': 'rilcode', 'origin': 'origin', 'major_trib': 'major_trib', 'bacode': 'bacode', 'ba_name': 'ba_name', 'sub_basin': 'sub_basin', 'shape_Leng': 'shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', });
lyr_HMWSSBSources_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Year': 'Year of Construction', 'FTL': 'Storage Capacity at FTL in TMC', 'NormalDrawls': 'Normal Drawls in MGD', 'NormalDrawl_1': 'Normal Drawls in MLD', 'PresentDrawl': 'Present Drawls in MGD', 'PresentDrawl_1': 'Present Drawls in MLD', 'Alloct_Hyd': 'Allocated to Hyderabad', 'FRL': 'Full Reservoir Level', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ORR_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Perimeter': 'Perimeter in KMs', 'Area': 'Area(SQ.KM)', 'No_ULB': 'No of ULBs', 'Pop_2025': 'Population(2025)', 'Pop_2040': 'Population(2040)', 'Pop_2055': 'Population(2055)', 'WD_2025': 'Water Demand(2025)', 'WD_2040': 'Water Demand(2040)', 'WD_2055': 'Water Demand(2055)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RRR_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Length': 'Length', 'Name': 'Name', 'area': 'area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TelanganaState_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Area_SQ_KM': 'Area_SQ_KM', 'Population': 'Population(2011)', 'Pop_Den': 'Population Density(P/Sq.Km)', 'No_ULBs': 'No_ULBs', 'Urban_pop': 'Urban(ULBs Population)', 'Area': 'ULB Area(SQ.KM)', 'ULB_P_Dens': 'ULBs PopDensity(P/SQ.KM)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ManjeeraSingoor_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Length': 'TextEdit', 'Phase': 'TextEdit', 'Diameter': 'TextEdit', 'Remarks': 'TextEdit', 'Start_Node': 'TextEdit', 'End_Node': 'TextEdit', 'Symbology': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Krishna_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'Range', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Length': 'TextEdit', 'Type': 'TextEdit', });
lyr_WTPs_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Phase': 'TextEdit', 'Capacity': 'TextEdit', 'Year': 'TextEdit', 'Type': 'TextEdit', 'Remarks': 'TextEdit', 'Source': 'TextEdit', });
lyr_River_5.set('fieldImages', {'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'objectid': 'Range', 'rivname': 'TextEdit', 'rilcode': 'TextEdit', 'origin': 'TextEdit', 'major_trib': 'TextEdit', 'bacode': 'TextEdit', 'ba_name': 'TextEdit', 'sub_basin': 'TextEdit', 'shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_HMWSSBSources_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'FTL': 'TextEdit', 'NormalDrawls': 'TextEdit', 'NormalDrawl_1': 'TextEdit', 'PresentDrawl': 'TextEdit', 'PresentDrawl_1': 'TextEdit', 'Alloct_Hyd': 'TextEdit', 'FRL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ORR_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', 'No_ULB': 'TextEdit', 'Pop_2025': 'TextEdit', 'Pop_2040': 'TextEdit', 'Pop_2055': 'TextEdit', 'WD_2025': 'TextEdit', 'WD_2040': 'TextEdit', 'WD_2055': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RRR_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'Length': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TelanganaState_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area_SQ_KM': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', 'No_ULBs': 'Range', 'Urban_pop': 'Range', 'Area': 'TextEdit', 'ULB_P_Dens': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ManjeeraSingoor_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Phase': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Remarks': 'hidden field', 'Start_Node': 'inline label - visible with data', 'End_Node': 'inline label - visible with data', 'Symbology': 'inline label - visible with data', 'Shape_Length': 'hidden field', });
lyr_Krishna_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Length': 'inline label - visible with data', 'Type': 'inline label - visible with data', });
lyr_WTPs_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Phase': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Remarks': 'hidden field', 'Source': 'inline label - visible with data', });
lyr_River_5.set('fieldLabels', {'OBJECTID_12': 'hidden field', 'OBJECTID_1': 'hidden field', 'objectid': 'hidden field', 'rivname': 'inline label - visible with data', 'rilcode': 'hidden field', 'origin': 'inline label - visible with data', 'major_trib': 'inline label - visible with data', 'bacode': 'hidden field', 'ba_name': 'hidden field', 'sub_basin': 'hidden field', 'shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_HMWSSBSources_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'FTL': 'inline label - visible with data', 'NormalDrawls': 'inline label - visible with data', 'NormalDrawl_1': 'hidden field', 'PresentDrawl': 'inline label - visible with data', 'PresentDrawl_1': 'hidden field', 'Alloct_Hyd': 'inline label - visible with data', 'FRL': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ORR_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Perimeter': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'No_ULB': 'inline label - visible with data', 'Pop_2025': 'inline label - visible with data', 'Pop_2040': 'inline label - visible with data', 'Pop_2055': 'inline label - visible with data', 'WD_2025': 'inline label - visible with data', 'WD_2040': 'inline label - visible with data', 'WD_2055': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RRR_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'Length': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TelanganaState_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area_SQ_KM': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', 'No_ULBs': 'inline label - visible with data', 'Urban_pop': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'ULB_P_Dens': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TelanganaState_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});