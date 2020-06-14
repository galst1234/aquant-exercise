// @ts-ignore
import {ReactBingmaps} from 'react-bingmaps';
import React, {useState} from "react";
import {Layout} from "antd";
import {AddPin} from "../Components/Forms/AddPin";
import {Pin} from "../Interfaces/Pin";
import {Lines} from "../Interfaces/Lines";

export function Main() {
    const [pins, setPins] = useState<Pin[]>([]);
    const [lines, setLines] = useState<Lines>({location: []});

    function handleAddPin(values: { x: number, y: number }) {
        const isFirstPin = pins.length === 0;
        const insertedPin = [values.x, values.y];

        setPins([...pins, {location: insertedPin, option: {color: 'red'}}]);

        if (isFirstPin)
            setLines({location: [insertedPin]})
        else {
            let newLineLocations = [...lines.location];
            newLineLocations.splice(1, 0, insertedPin);
            polySort(newLineLocations)
            setLines({location: [...newLineLocations, newLineLocations[0]]});
        }
    }

    // This section was copied from stack overflow, I didn't have much time left to mess with it too much :(
    function squaredPolar(point: any, centre: any) {
        return [
            Math.atan2(point[1] - centre[1], point[0] - centre[0]),
            (point[0] - centre[0]) ** 2 + (point[1] - centre[1]) ** 2
        ];
    }

    function polySort(points: any) {
        let centre = [points.reduce((sum: any, p: any) => sum + p[0], 0) / points.length,
            points.reduce((sum: any, p: any) => sum + p[1], 0) / points.length];

        for (let point of points) point.push(...squaredPolar(point, centre));
        points.sort((a: any, b: any) => a[2] - b[2] || a[3] - b[3]);
        for (let point of points) point.length -= 2;
    }
    // end section

    return (
        <Layout style={{height: '100vh'}}>
            <Layout.Sider
                width='25vw'
            >
                <AddPin onFinish={handleAddPin}/>
            </Layout.Sider>
            <Layout.Content>
                <ReactBingmaps
                    bingmapKey="Ar35sygI8qL7GUw_9hJk0fmUlmor4UTApHNA2Uq3kBrNNWJrDf2-XZ69FB6XKdub"
                    center={[13.0827, 80.2707]}
                    pushPins={pins}
                    polyline={lines}
                >
                </ReactBingmaps>
            </Layout.Content>
        </Layout>
    );
}