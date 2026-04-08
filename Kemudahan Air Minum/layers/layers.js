var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KemudahanAirMinum_1 = new ol.format.GeoJSON();
var features_KemudahanAirMinum_1 = format_KemudahanAirMinum_1.readFeatures(json_KemudahanAirMinum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KemudahanAirMinum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KemudahanAirMinum_1.addFeatures(features_KemudahanAirMinum_1);
var lyr_KemudahanAirMinum_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KemudahanAirMinum_1, 
                style: style_KemudahanAirMinum_1,
                popuplayertitle: 'Kemudahan Air Minum',
                interactive: true,
    title: 'Kemudahan Air Minum<br />\
    <img src="styles/legend/KemudahanAirMinum_1_0.png" /> 1<br />\
    <img src="styles/legend/KemudahanAirMinum_1_1.png" /> 2<br />\
    <img src="styles/legend/KemudahanAirMinum_1_2.png" /> 3<br />\
    <img src="styles/legend/KemudahanAirMinum_1_3.png" /> 4<br />\
    <img src="styles/legend/KemudahanAirMinum_1_4.png" /> 5<br />' });
var format_Kawasan_Hutan_2 = new ol.format.GeoJSON();
var features_Kawasan_Hutan_2 = format_Kawasan_Hutan_2.readFeatures(json_Kawasan_Hutan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kawasan_Hutan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kawasan_Hutan_2.addFeatures(features_Kawasan_Hutan_2);
var lyr_Kawasan_Hutan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kawasan_Hutan_2, 
                style: style_Kawasan_Hutan_2,
                popuplayertitle: 'Kawasan_Hutan',
                interactive: true,
                title: '<img src="styles/legend/Kawasan_Hutan_2.png" /> Kawasan_Hutan'
            });
var format_Batas_Kecamatan_Line_3 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_Line_3 = format_Batas_Kecamatan_Line_3.readFeatures(json_Batas_Kecamatan_Line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_Line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_Line_3.addFeatures(features_Batas_Kecamatan_Line_3);
var lyr_Batas_Kecamatan_Line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_Line_3, 
                style: style_Batas_Kecamatan_Line_3,
                popuplayertitle: 'Batas_Kecamatan_Line',
                interactive: true,
                title: '<img src="styles/legend/Batas_Kecamatan_Line_3.png" /> Batas_Kecamatan_Line'
            });
var format_Batas_Desa_Line_4 = new ol.format.GeoJSON();
var features_Batas_Desa_Line_4 = format_Batas_Desa_Line_4.readFeatures(json_Batas_Desa_Line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_Line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_Line_4.addFeatures(features_Batas_Desa_Line_4);
var lyr_Batas_Desa_Line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Desa_Line_4, 
                style: style_Batas_Desa_Line_4,
                popuplayertitle: 'Batas_Desa_Line',
                interactive: true,
                title: '<img src="styles/legend/Batas_Desa_Line_4.png" /> Batas_Desa_Line'
            });

lyr_ESRINationalGeographic_0.setVisible(true);lyr_KemudahanAirMinum_1.setVisible(true);lyr_Kawasan_Hutan_2.setVisible(true);lyr_Batas_Kecamatan_Line_3.setVisible(true);lyr_Batas_Desa_Line_4.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,lyr_KemudahanAirMinum_1,lyr_Kawasan_Hutan_2,lyr_Batas_Kecamatan_Line_3,lyr_Batas_Desa_Line_4];
lyr_KemudahanAirMinum_1.set('fieldAliases', {'Id': 'Id', 'NmDesa': 'NmDesa', 'tipe': 'tipe', 'NmKec': 'NmKec', 'KdDesa': 'KdDesa', 'Ope_AirMn': 'Ope_AirMn', 'Ktrsdn_AirMn': 'Ktrsdn_AirMn', 'Kmdhn_AirMn': 'Kmdhn_AirMn', 'Kualts_AirMn': 'Kualts_AirMn', 'Prsn_RTLH': 'Prsn_RTLH', 'RTH': 'RTH', 'Tmn_Desa': 'Tmn_Desa', 'Trsd_NonFr': 'Trsd_NonFr', 'Trlbt_NonFr': 'Trlbt_NonFr', 'TPS': 'TPS', 'Smph': 'Smph', 'Olah_Smph': 'Olah_Smph', 'Rta_CemarLing': 'Rta_CemarLing', 'Kpmlkn_Jmbn': 'Kpmlkn_Jmbn', 'Kfngsi_Jmbn': 'Kfngsi_Jmbn', 'Ktrsdn_Sptank': 'Ktrsdn_Sptank', 'Kfngsi_Sptnk': 'Kfngsi_Sptnk', 'Air_Lmbh': 'Air_Lmbh', 'Ktsediaan_Info': 'Ktsediaan_Info', 'Fslts_Mtgsi': 'Fslts_Mtgsi', 'Jrk_Mtgsi': 'Jrk_Mtgsi', 'Fslts_Mtgsi_1': 'Fslts_Mtgsi_1', 'Srna_Mtgsi': 'Srna_Mtgsi', 'Akses_Mtgsi': 'Akses_Mtgsi', 'Aktv_Mtgsi': 'Aktv_Mtgsi', 'Fslts_TnggapDar': 'Fslts_TnggapDar', 'JnsPer_Jalan': 'JnsPer_Jalan', 'Jln_Nas': 'Jln_Nas', 'Jln_Prov': 'Jln_Prov', 'Jln_Kab': 'Jln_Kab', 'Jln_Ling': 'Jln_Ling', 'Kualts_Jln': 'Kualts_Jln', 'Ktrsdn_PJU': 'Ktrsdn_PJU', 'Opersi_PJU': 'Opersi_PJU', 'Ktrsdn_Litrik': 'Ktrsdn_Litrik', 'Durasi_Listrik': 'Durasi_Listrik', 'Aks_Tlpn': 'Aks_Tlpn', 'Aks_Internet': 'Aks_Internet', });
lyr_Kawasan_Hutan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'F_updt': 'F_updt', 'N_Kws': 'N_Kws', 'LUE': 'LUE', 'fungsi_hut': 'fungsi_hut', 'FillTransp': 'FillTransp', 'OutlineTra': 'OutlineTra', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kec': 'Kec', });
lyr_Batas_Kecamatan_Line_3.set('fieldAliases', {'klasifikas': 'klasifikas', 'Id': 'Id', });
lyr_Batas_Desa_Line_4.set('fieldAliases', {'klasifikas': 'klasifikas', 'Id': 'Id', });
lyr_KemudahanAirMinum_1.set('fieldImages', {'Id': 'TextEdit', 'NmDesa': 'TextEdit', 'tipe': 'TextEdit', 'NmKec': 'TextEdit', 'KdDesa': 'TextEdit', 'Ope_AirMn': 'TextEdit', 'Ktrsdn_AirMn': 'TextEdit', 'Kmdhn_AirMn': 'TextEdit', 'Kualts_AirMn': 'TextEdit', 'Prsn_RTLH': 'TextEdit', 'RTH': 'TextEdit', 'Tmn_Desa': 'TextEdit', 'Trsd_NonFr': 'TextEdit', 'Trlbt_NonFr': 'TextEdit', 'TPS': 'TextEdit', 'Smph': 'TextEdit', 'Olah_Smph': 'TextEdit', 'Rta_CemarLing': 'TextEdit', 'Kpmlkn_Jmbn': 'TextEdit', 'Kfngsi_Jmbn': 'TextEdit', 'Ktrsdn_Sptank': 'TextEdit', 'Kfngsi_Sptnk': 'TextEdit', 'Air_Lmbh': 'TextEdit', 'Ktsediaan_Info': 'TextEdit', 'Fslts_Mtgsi': 'TextEdit', 'Jrk_Mtgsi': 'TextEdit', 'Fslts_Mtgsi_1': 'TextEdit', 'Srna_Mtgsi': 'TextEdit', 'Akses_Mtgsi': 'TextEdit', 'Aktv_Mtgsi': 'TextEdit', 'Fslts_TnggapDar': 'TextEdit', 'JnsPer_Jalan': 'TextEdit', 'Jln_Nas': 'TextEdit', 'Jln_Prov': 'TextEdit', 'Jln_Kab': 'TextEdit', 'Jln_Ling': 'TextEdit', 'Kualts_Jln': 'TextEdit', 'Ktrsdn_PJU': 'TextEdit', 'Opersi_PJU': 'TextEdit', 'Ktrsdn_Litrik': 'TextEdit', 'Durasi_Listrik': 'TextEdit', 'Aks_Tlpn': 'TextEdit', 'Aks_Internet': 'TextEdit', });
lyr_Kawasan_Hutan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'F_updt': 'TextEdit', 'N_Kws': 'TextEdit', 'LUE': 'TextEdit', 'fungsi_hut': 'TextEdit', 'FillTransp': 'TextEdit', 'OutlineTra': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kec': 'TextEdit', });
lyr_Batas_Kecamatan_Line_3.set('fieldImages', {'klasifikas': 'TextEdit', 'Id': 'Range', });
lyr_Batas_Desa_Line_4.set('fieldImages', {'klasifikas': 'TextEdit', 'Id': 'Range', });
lyr_KemudahanAirMinum_1.set('fieldLabels', {'Id': 'no label', 'NmDesa': 'no label', 'tipe': 'no label', 'NmKec': 'no label', 'KdDesa': 'no label', 'Ope_AirMn': 'no label', 'Ktrsdn_AirMn': 'no label', 'Kmdhn_AirMn': 'no label', 'Kualts_AirMn': 'no label', 'Prsn_RTLH': 'no label', 'RTH': 'no label', 'Tmn_Desa': 'no label', 'Trsd_NonFr': 'no label', 'Trlbt_NonFr': 'no label', 'TPS': 'no label', 'Smph': 'no label', 'Olah_Smph': 'no label', 'Rta_CemarLing': 'no label', 'Kpmlkn_Jmbn': 'no label', 'Kfngsi_Jmbn': 'no label', 'Ktrsdn_Sptank': 'no label', 'Kfngsi_Sptnk': 'no label', 'Air_Lmbh': 'no label', 'Ktsediaan_Info': 'no label', 'Fslts_Mtgsi': 'no label', 'Jrk_Mtgsi': 'no label', 'Fslts_Mtgsi_1': 'no label', 'Srna_Mtgsi': 'no label', 'Akses_Mtgsi': 'no label', 'Aktv_Mtgsi': 'no label', 'Fslts_TnggapDar': 'no label', 'JnsPer_Jalan': 'no label', 'Jln_Nas': 'no label', 'Jln_Prov': 'no label', 'Jln_Kab': 'no label', 'Jln_Ling': 'no label', 'Kualts_Jln': 'no label', 'Ktrsdn_PJU': 'no label', 'Opersi_PJU': 'no label', 'Ktrsdn_Litrik': 'no label', 'Durasi_Listrik': 'no label', 'Aks_Tlpn': 'no label', 'Aks_Internet': 'no label', });
lyr_Kawasan_Hutan_2.set('fieldLabels', {'OBJECTID': 'no label', 'F_updt': 'no label', 'N_Kws': 'no label', 'LUE': 'no label', 'fungsi_hut': 'no label', 'FillTransp': 'no label', 'OutlineTra': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Kec': 'no label', });
lyr_Batas_Kecamatan_Line_3.set('fieldLabels', {'klasifikas': 'no label', 'Id': 'no label', });
lyr_Batas_Desa_Line_4.set('fieldLabels', {'klasifikas': 'no label', 'Id': 'no label', });
lyr_Batas_Desa_Line_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});