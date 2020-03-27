import React, { Component, Fragment } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";

class MapContainer extends Component {
  

  render() {
    return (
      <Fragment>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyByH2Os0LM2S5q86rIEXfGmVf-Dkv_ceUI"
})(MapContainer);
