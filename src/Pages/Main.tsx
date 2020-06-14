// @ts-ignore
import {ReactBingmaps} from 'react-bingmaps';
import React, {useState} from "react";
import {Layout} from "antd";
import {AddPin} from "../Components/Forms/AddPin";
import {Pin} from "../Interfaces/Pin";
import {Lines} from "../Interfaces/Lines";

export function Main() {
    const [pins, setPins] = useState<Pin[]>([]);
    const [lines, setLines] = useState<Lines>({location:[]});

    function handleAddPin(values: { x: number, y: number }) {
        const isFirstPin = pins.length === 0;
        const insertedPin = [values.x, values.y];

        setPins([...pins, {location: insertedPin, option: {color: 'red'}}]);

        if (isFirstPin)
            setLines({location: [insertedPin, insertedPin]})
        else {
            let newLineLocations = [...lines.location];
            newLineLocations.splice(1, 0, insertedPin);
            setLines({location: newLineLocations});
        }
    }

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