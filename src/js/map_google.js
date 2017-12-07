function initMap() {
    var mapEl = document.getElementById('map');
    var image = '../burger/images/find/map-marker.png';
    var style = [ 
        { 
        "featureType": "administrative.land_parcel", 
        "elementType": "all", 
        "stylers": [ 
        { 
        "visibility": "off" 
        } 
        ] 
        }, 
        { 
        "featureType": "landscape.man_made", 
        "elementType": "all", 
        "stylers": [ 
        { 
        "visibility": "simplified" 
        }, 
        { 
        "gamma": "1.83" 
        }, 
        { 
        "saturation": "-63" 
        }, 
        { 
        "color": "#ffbe60" 
        }, 
        { 
        "lightness": "76" 
        } 
        ] 
        }, 
        { 
        "featureType": "poi", 
        "elementType": "labels", 
        "stylers": [ 
        { 
        "visibility": "off" 
        } 
        ] 
        }, 
        { 
        "featureType": "road", 
        "elementType": "labels", 
        "stylers": [ 
        { 
        "visibility": "simplified" 
        }, 
        { 
        "lightness": 20 
        } 
        ] 
        }, 
        { 
        "featureType": "road.highway", 
        "elementType": "geometry", 
        "stylers": [ 
        { 
        "visibility": "on" 
        }, 
        { 
        "saturation": "25" 
        }, 
        { 
        "gamma": "1.37" 
        }, 
        { 
        "weight": "1.00" 
        }, 
        { 
        "lightness": "100" 
        }, 
        { 
        "color": "#ffbe60" 
        } 
        ] 
        }, 
        { 
        "featureType": "road.highway", 
        "elementType": "labels", 
        "stylers": [ 
        { 
        "visibility": "simplified" 
        } 
        ] 
        }, 
        { 
        "featureType": "road.arterial", 
        "elementType": "geometry", 
        "stylers": [ 
        { 
        "hue": "#fad959" 
        } 
        ] 
        }, 
        { 
        "featureType": "road.arterial", 
        "elementType": "labels", 
        "stylers": [ 
        { 
        "visibility": "off" 
        } 
        ] 
        }, 
        { 
        "featureType": "road.local", 
        "elementType": "all", 
        "stylers": [ 
        { 
        "visibility": "on" 
        }, 
        { 
        "saturation": "16" 
        } 
        ] 
        }, 
        { 
        "featureType": "road.local", 
        "elementType": "geometry", 
        "stylers": [ 
        { 
        "visibility": "simplified" 
        } 
        ] 
        }, 
        { 
        "featureType": "road.local", 
        "elementType": "labels", 
        "stylers": [ 
        { 
        "visibility": "simplified" 
        } 
        ] 
        }, 
        { 
        "featureType": "transit", 
        "elementType": "all", 
        "stylers": [ 
        { 
        "visibility": "off" 
        } 
        ] 
        }, 
        { 
        "featureType": "transit", 
        "elementType": "geometry.fill", 
        "stylers": [ 
        { 
        "visibility": "simplified" 
        } 
        ] 
        }, 
        { 
        "featureType": "transit.line", 
        "elementType": "all", 
        "stylers": [ 
        { 
        "visibility": "off" 
        } 
        ] 
        }, 
        { 
        "featureType": "transit.line", 
        "elementType": "geometry.fill", 
        "stylers": [ 
        { 
        "saturation": "-63" 
        }, 
        { 
        "lightness": "41" 
        }, 
        { 
        "gamma": "6.78" 
        }, 
        { 
        "weight": "6.58" 
        } 
        ] 
        }, 
        { 
        "featureType": "transit.line", 
        "elementType": "labels.text.stroke", 
        "stylers": [ 
        { 
        "gamma": "9.14" 
        }, 
        { 
        "lightness": "-51" 
        }, 
        { 
        "saturation": "53" 
        } 
        ] 
        }, 
        { 
        "featureType": "water", 
        "elementType": "all", 
        "stylers": [ 
        { 
        "hue": "#a1cdfc" 
        }, 
        { 
        "saturation": 30 
        }, 
        { 
        "lightness": 49 
        } 
        ] 
        } 
        ];
    var uluru = {         
        lat: 59.939095,
        
        lng: 30.315868
    };
    
    var locations = [ 
        {lat: 59.978750,  lng: 30.291330},
        {lat: 59.949486,  lng: 30.386431},
        {lat: 59.886223, lng:  30.313303},
        {lat:59.927949, lng:  30.497515}
    ]; 

    var map = new google.maps.Map( mapEl, {
      zoom: 11,
      center: uluru,
      styles: style,
      gestureHandling: 'cooperative'
    });
    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          map: map,
          icon: image
        });
      });
      
       var markerCluster = new MarkerClusterer(
           map, 
           markers,
         {
             imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        }
    );
   }



    // var marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    //   icon: image
      
    // });
