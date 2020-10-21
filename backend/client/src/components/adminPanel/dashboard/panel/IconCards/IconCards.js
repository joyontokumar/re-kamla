import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { CanvasJSChart } from 'canvasjs-react-charts'
class IconCards extends Component {

    render() {
        const one ={
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2",
            title: {
                text: "Doctors Categories"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: 20, label: "Mental Health" },
                    { y: 24, label: "Space and Language" },
                    { y: 20, label: "Accomodation" },
                    { y: 14, label: "Phyotherapist" },
                    { y: 12, label: "Clinical Psychotherepist" },
                    { y: 10, label: "Occupotional Therepist" }
                ]
            }]
        }
        const two = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", //"light1", "dark1", "dark2"
            title: {
                text: "Faculty"
            },
            axisY: {
                includeZero: true
            },
            data: [{
                type: "column",
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: [
                    { x: 10, y: 71 },
                    { x: 20, y: 55 },
                    { x: 30, y: 50 },
                    { x: 40, y: 65 },
                    { x: 50, y: 71 },
                    { x: 60, y: 68 },
                    { x: 70, y: 38 },
                    { x: 80, y: 92, indexLabel: "Highest" },
                    { x: 90, y: 54 },
                    { x: 100, y: 60 },
                    { x: 110, y: 21 },
                    { x: 120, y: 49 },
                    { x: 130, y: 36 }
                ]
            }]
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <CanvasJSChart options={one} />
                    </div>
                    <div className="col-lg-6">
                        <CanvasJSChart options={two} />
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default IconCards