import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Sobre extends Component{
    render(){
        return (
            <div style={'margin-top:20px'} >
            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                },
                {type: 'line', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 920, height: 740, title: 'A Fancy Plot'} }
            />
            </div>
        );
    };
};
export default Sobre;