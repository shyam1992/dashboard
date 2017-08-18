import React, { Component } from 'react';
import { Data_Map } from '../data/data_map';
import { MapStyleArr } from '../data/mapStyle';

const google = window.google;

class GoogleMap extends Component {
	componentDidMount(){
		let countryMap = new Map();
		let bounds = new google.maps.LatLngBounds();
		let infoWindow = new google.maps.InfoWindow(), marker;
		const latlng = {lat : 0,lng : 0};
		if(google){
		const map = new google.maps.Map(this.refs.map,
			{
			  zoom: 2,
			  center : latlng,
			  styles : MapStyleArr
			});
		for(let key in Data_Map){
			for(let individual of Data_Map[key]){
				if(countryMap.has(individual.code)){
					let target = Object.assign({},
						countryMap.get(individual.code),
						{visits: countryMap.get(individual.code).visits + individual.nb_visits}
						);
					countryMap.set(individual.code,target);
				}else {
					countryMap.set(individual.code,
						{
							label:individual.label,
							visits:individual.nb_visits,
							lat : individual.lat,
							lng : individual.lng
						});
				}
			}
		}
		countryMap.forEach((val, key) =>{
			let marKerLatLng = {lat : val.lat, lng : val.lng};
			bounds.extend(marKerLatLng);
			    marker = new google.maps.Marker({
                position: marKerLatLng,
                map: map,
                title: val.label,
                icon: {
            			path: google.maps.SymbolPath.CIRCLE,
            			scale: 5
          		},
       		});
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(`<div style="font-weight:bold;"><p>${val.label}</p><p>${val.visits}</p></div>`);
                infoWindow.open(map, marker);
            }
        })(marker));
		});
		map.fitBounds(bounds);
		}
	}
	render(){
		return <div ref="map"/>;
	}
}

export default GoogleMap;