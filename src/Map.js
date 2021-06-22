import {
    Popup,
    Marker,
    MapContainer
} from "react-leaflet";
import icon from "./ico"
import React, { Component } from "react";
import axios from "axios";
import "./App.css"
import MapTile from "./map-tile";
import LeafletgeoSearch from "./map-search";

const api = axios.create({
    baseURL: "http://localhost:5000/",
});
export default class Map extends Component {
    state = {
        districts: [],
        nearby: []
    };
    constructor() {
        super();
        
    }
    render() {
        return (
            <>
                <MapContainer center={[-13.7, 34.45]} zoom={7} scrollWheelZoom={true}>
                <LeafletgeoSearch />
                    <MapTile />
                    
                </MapContainer>
            </>
        );
    }
}
