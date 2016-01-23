var map = L.map('map').setView([37, -119], 10);

L.tileLayer('https://tiles2.planet.com/v0/mosaics/landsat8_toa_rgb_mosaic/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://planet.com">Planet Labs</a>',
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(map);