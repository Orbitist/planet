L.mapbox.accessToken = 'pk.eyJ1Ijoib3JiaXRpc3QiLCJhIjoiYnpUTnJBdyJ9.uxgaJ0R9ZNsCcEnPNfo2ag';
var map = L.mapbox.map('map').setView([37,-119], 6);
var layers = document.getElementById('menu-ui');

addLayer(L.mapbox.tileLayer('mapbox.streets'), 'Base Map', 1);
addLayer(L.tileLayer('https://tiles3.planet.com/v0/mosaics/landsat8_toa_rgb_mosaic/{z}/{x}/{y}.png'), 'Land Sat 8', 2);
addLayer(L.tileLayer('https://tiles3.planet.com/v0/mosaics/color_balance_mosaic/{z}/{x}/{y}.png'), 'Color Balanced', 3);


function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);

    // Create a simple layer switcher that
    // toggles layers on and off.
    var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            this.className = '';
        } else {
            map.addLayer(layer);
            this.className = 'active';
        }
    };

    layers.appendChild(link);
}