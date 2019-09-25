import React, { Component } from 'react';
import "./map.scss";

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    // console.log(process.env.REACT_APP_GOOGLE_KEY);
    // console.log(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`)

    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map)
    }

    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBC4ILqEm-u_NZ3_kPFLGXDxhtlbVAFSdA`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    render() {

        return (
            <div style={{ width: 985, height: 500 }} id={this.props.id} />
        );
    }
}

export default Map