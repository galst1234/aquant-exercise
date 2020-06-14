import {Button, Form, InputNumber} from "antd";
import React from "react";

export function AddPin(props: { onFinish: (values: any) => void }) {
    return (
        <Form
            onFinish={
                props.onFinish
            }
        >
            <Form.Item
                name="x"
                label="X"
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item
                name="y"
                label="Y"
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Place pin
                </Button>
            </Form.Item>
        </Form>
    );
}