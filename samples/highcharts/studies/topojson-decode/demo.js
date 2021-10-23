(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/europe.topo.json'
        // 'https://code.highcharts.com/mapdata/countries/us/us-all-all.topo.json'
    ).then(response => response.json());

    // Create a dummy data value for each feature
    const data = topology.objects.default.geometries.map((g, i) => i % 5);

    // Initialize the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'TopoJSON in Highcharts Maps'
        },

        mapView: {
            projection: {
                name: 'Orthographic',
                rotation: [-10, -40]
            }
        },

        colorAxis: {
            tickPixelInterval: 100,
            minColor: '#F1EEF6',
            maxColor: '#900037'
        },

        series: [{
            data,
            joinBy: null,
            name: 'Random data',
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }]
    });
})();
