import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken ='pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';



class Map extends React.Component {


    // This holds our geojson data for our map to populate
    // It gets populated by grabbing the needed information from our api
    // Then it gets filled in using the populateGeojsonData function
    geojson = {
        type: 'FeatureCollection',
        features: []
    };

    // During our call to populateGeojsonData we additionally fill in our coordinates here
    // For use with drawing the green line that links them up
    coordinates = [];

    populateGeojsonData = () => {
        this.props.tour.locations.forEach(location => {
            this.geojson.features.push(
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: location.coordinates
                        // coordinates: [-112.987418, 37.198125]
                    },
                    properties: {
                        description: location.description
                        // description: 'Zion Canyon National Park'
                    }
                }
            );

            this.coordinates.push(location.coordinates);
        })
    };

    componentDidMount() {
        // const map = new mapboxgl.Map({
        //     container: this.mapContainer,
        //     style: 'mapbox://styles/mapbox/streets-v11',
        //     center: [this.state.lng, this.state.lat],
        //     zoom: this.state.zoom
        // });


        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/jonasschmedtmann/cjnxfn3zk7bj52rpegdltx58h',
            scrollZoom: false
        });

        ((map) => {
            const bounds = new mapboxgl.LngLatBounds();

            this.geojson.features.forEach(function (marker) {
                var el = document.createElement('div');
                el.className = 'marker';

                new mapboxgl.Marker({
                    element: el,
                    anchor: 'bottom'
                })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);

                new mapboxgl.Popup({
                    offset: 30,
                    closeOnClick: false
                })
                    .setLngLat(marker.geometry.coordinates)
                    .setHTML('<p>' + marker.properties.description + '</p>')
                    .addTo(map);

                bounds.extend(marker.geometry.coordinates);
            });

            map.fitBounds(bounds, {
                padding: {
                    top: 200,
                    bottom: 150,
                    left: 50,
                    right: 50
                }
            });
            // ((cords) => {
            //     map.on('load', function () {
            //         map.addLayer({
            //             id: 'route',
            //             type: 'line',
            //             source: {
            //                 type: 'geojson',
            //                 data: {
            //                     type: 'Feature',
            //                     properties: {},
            //                     geometry: {
            //                         type: 'LineString',
            //                         coordinates: cords
            //                         // coordinates: [
            //                         //     [-112.987418, 37.198125],
            //                         //     [-111.376161, 36.86438],
            //                         //     [-112.115763, 36.058973],
            //                         //     [-116.107963, 34.011646]
            //                         // ]
            //                     }
            //                 }
            //             },
            //             layout: {
            //                 'line-join': 'round',
            //                 'line-cap': 'round'
            //             },
            //             paint: {
            //                 'line-color': '#55c57a',
            //                 'line-opacity': 0.6,
            //                 'line-width': 3
            //             }
            //         });
            //     });
            // })(this.coordinates);
        })(this.map);

        // map.on('load', function () {
        //     map.addLayer({
        //         id: 'route',
        //         type: 'line',
        //         source: {
        //             type: 'geojson',
        //             data: {
        //                 type: 'Feature',
        //                 properties: {},
        //                 geometry: {
        //                     type: 'LineString',
        //                     coordinates: [
        //                         [-112.987418, 37.198125],
        //                         [-111.376161, 36.86438],
        //                         [-112.115763, 36.058973],
        //                         [-116.107963, 34.011646]
        //                     ]
        //                 }
        //             }
        //         },
        //         layout: {
        //             'line-join': 'round',
        //             'line-cap': 'round'
        //         },
        //         paint: {
        //             'line-color': '#55c57a',
        //             'line-opacity': 0.6,
        //             'line-width': 3
        //         }
        //     });
        // });

        // map.on('move', () => {
        //     this.setState({
        //         lng: map.getCenter().lng.toFixed(4),
        //         lat: map.getCenter().lat.toFixed(4),
        //         zoom: map.getZoom().toFixed(2)
        //     });
        // });
        console.log(this.map);
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        console.log(this.props.tour);

        const style = {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        };

        this.populateGeojsonData();

        return (
            <div>
                <section className="section-map">
                    <div id="map"></div>
                    <div ref={el => this.mapContainer = el} style={style}/>
                </section>
            </div>
        )
    }

}

export default Map;
