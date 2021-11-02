import React from "react";
import {ComposableMap,Geographies,Geography,Marker} from "react-simple-maps";
class Map extends React.Component {
  render() {
    let center = [0, 0];
    let zoom = 10;

    let width = 1000;
    let height = 500;
    const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return (
      <div>
        <ComposableMap height={height} width={width}>
          <Geographies center={center} zoom={zoom} geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker coordinates={[this.props.lon, this.props.lat]}>
            <circle r={8} fill="#F53" />
          </Marker>
        </ComposableMap>
      </div>
    );
  }
}
export default Map;
