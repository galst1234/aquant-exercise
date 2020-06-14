// @ts-ignore
import {ReactBingmaps} from 'react-bingmaps';
import React, {useState} from "react";
import {Layout} from "antd";
import {AddPin} from "../Components/Forms/AddPin";

interface Pin {
    location: number[],
    option: { color: string },
}

export function Main() {
    const [pins, setPins] = useState<Pin[]>([]);

    function handleAddPin(values: {x: number, y: number}) {
        setPins([...pins, {location: [values.x, values.y], option: {color: 'red'}}]);
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
                >
                </ReactBingmaps>
            </Layout.Content>
        </Layout>
    );
}