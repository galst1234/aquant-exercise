// @ts-ignore
import {ReactBingmaps} from 'react-bingmaps';
import React from "react";
import {Layout} from "antd";

export function Main() {
    return (
        <Layout style={{height: '100vh'}}>
            <Layout.Sider
                width='25vw'
            >
                <span>Sider</span>
            </Layout.Sider>
            <Layout.Content>
                <ReactBingmaps
                    bingmapKey="Ar35sygI8qL7GUw_9hJk0fmUlmor4UTApHNA2Uq3kBrNNWJrDf2-XZ69FB6XKdub">
                </ReactBingmaps>
            </Layout.Content>
        </Layout>
    );
}