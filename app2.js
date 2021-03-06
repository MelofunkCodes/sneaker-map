//trying to create just ONE marker on the map



function initMap() {
    var wework = new google.maps.LatLng(45.502057, -73.57153917); //same as {lat: 45.5, lng: -73.57}
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: wework
    });

    var markers = [];

    results.forEach(function(eachStore) {
        var marker = new google.maps.Marker({
            position: toLatLng(eachStore.geo_loc),
            map: map,
            title: eachStore.supplier_name
        });

        var contentString = `
        	<div id="content">
        		<div id="siteNotice"></div>
        		<h1 id="firstHeading" class="firstHeading">${eachStore.supplier_name}</h1>
        		<div id="bodyContent">
	        		<p>${eachStore.address}</p>
	        		<p>${eachStore.city}, ${eachStore.province}</p>
	        		<p>${eachStore.tel}</p>
        		</div>
        	</div>`;

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        //cannot get infowindows to close when user clicks on another marker
        marker.addListener('click', function() {
            infowindow.open(map, this);
        });

        markers.push(marker);


    })

}


//=========================================lat2lng=====================================
function toLatLng(geo_loc){
    //var array = "45 -73".split(" ").map(element => +element); //returns [45, -73]
    var array = geo_loc.split(" ")
                .map(element => +element);
                
    var latLng = {lat: array[0], lng: array[1]};
    return latLng;
}
//=========================================STORES=====================================

var results = [{
    id: 1,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "New Balance Montreal",
    address: "654 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3B 1B8",
    tel: "514-844-2777",
    geo_loc: "45.503307 -73.56968049999999"
}, {
    id: 2,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Vans",
    address: "1334 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3G 2B2",
    tel: "514-871-2626",
    geo_loc: "45.4974153 -73.5751275"
}, {
    id: 3,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Sam Tabak",
    address: "915 Rue Notre Dame",
    province: "QC",
    city: "Lachine",
    postcode: "H8S 2C1",
    tel: "514-637-9654",
    geo_loc: "45.4347462 -73.67179279999999"
}, {
    id: 4,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Sport Style Urbain",
    address: "7036 Rue St-Hubert",
    province: "QC",
    city: "Montreal",
    postcode: "H2S 2M9",
    tel: "514-270-4021",
    geo_loc: "45.5397483 -73.6116845"
}, {
    id: 5,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Schreter's Clothing and Footwear",
    address: "4358 Boulevard Saint-Laurent",
    province: "QC",
    city: "Montreal",
    postcode: "H2W 1Z5",
    tel: "514-845-4321",
    geo_loc: "45.519088 -73.5843749"
}, {
    id: 6,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Exclucity",
    address: "1326 Notre-Dame Ouest",
    province: "QC",
    city: "Montreal",
    postcode: "H3C 1K7",
    tel: "514-846-8887",
    geo_loc: "45.4924572 -73.56490939999999"
}, {
    id: 7,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Exclucity",
    address: "9415 Boulevard Leduc Suite 35",
    province: "QC",
    city: "Brossard",
    postcode: "J4Y 0A5",
    tel: "450-443-8887",
    geo_loc: "45.44134709999999 -73.4384202"
}, {
    id: 8,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Exclucity",
    address: "790 Boulevard Le Corbusier",
    province: "QC",
    city: "Laval",
    postcode: "H7N 0A8",
    tel: "450-681-8777",
    geo_loc: "45.55694700000001 -73.724825"
}, {
    id: 9,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Exclucity",
    address: "4870 Rene-Emard",
    province: "QC",
    city: "Pierrefonds",
    postcode: "H9A 2Y1",
    tel: "514-626-4434",
    geo_loc: "45.4927048 -73.849814"
}, {
    id: 10,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Off The Hook",
    address: "1021 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3B 1H1",
    tel: "514-499-1021",
    geo_loc: "45.5003149 -73.5726165"
}, {
    id: 11,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Boutique Fake",
    address: "72 Rue Rachel E",
    province: "QC",
    city: "Montreal",
    postcode: "H2W 1C6",
    tel: "514-750-3253",
    geo_loc: "45.5187606 -73.580871"
}, {
    id: 12,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Foot Locker",
    address: "4201 Rue Saint-Denis",
    province: "QC",
    city: "Montreal",
    postcode: "H2J 2K9",
    tel: "514-288-0427",
    geo_loc: "45.5221521 -73.57832499999999"
}, {
    id: 13,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Foot Locker",
    address: "900 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3B 1E2",
    tel: "514-866-7069",
    geo_loc: "45.50161629999999 -73.5713616"
}, {
    id: 14,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Foot Locker",
    address: "1183 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3B 1K5",
    tel: "514-840-1371",
    geo_loc: "45.4991418 -73.5740515"
}, {
    id: 15,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Adidas Originals Montreal",
    address: "1238 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3G 1P1",
    tel: "514-315-9546",
    geo_loc: "45.4983057 -73.57463"
}, {
    id: 16,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "Reebok",
    address: "1204 Rue Sainte-Catherine O",
    province: "QC",
    city: "Montreal",
    postcode: "H3B 1K1",
    tel: "514-876-4143",
    geo_loc: "45.4986516 -73.57404319999999"
}, {
    id: 17,
    date_created: "0000-00-00 00:00:00",
    date_updated: "0000-00-00 00:00:00",
    supplier_name: "La Mode Kar Nam",
    address: "6550 Rue St-Hubert",
    province: "QC",
    city: "Montreal",
    postcode: "H2S 2M3",
    tel: "514-273-4855",
    geo_loc: "45.5364752 -73.60411239999999"
}];
