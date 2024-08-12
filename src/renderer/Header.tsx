import { Avatar, Input, Text } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";
import {
    MicRecord28Regular, Speaker048Filled, BrainCircuitFilled
} from "@fluentui/react-icons";
import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";

export const Header = (props: Partial<TextareaProps>) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "flex-end", gap: 10 }}>

                    <Field label="Output Speech" style={{ flexGrow: 5 }}>
                        <Textarea style={{fontSize: '60px', height: "80px" }}  {...props} />
                    </Field>
                    <Button style={{ height: "80px" }} size="large" appearance="primary" icon={<Speaker048Filled />}>
                        Speak 
                    </Button>
                    <Button style={{ height: "80px" }} size="large" appearance="primary" icon={<BrainCircuitFilled />}>
                        Generate
                    </Button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "flex-end", gap: 10 }}>
                    <Field label="Input Speech" style={{ flexGrow: 5 }}>
                        <Textarea style={{ height: "80px" }}  {...props} />
                    </Field>
                    <Button style={{ height: "80px" }} size="large" appearance="primary" icon={<MicRecord28Regular />}>
                        Listen
                    </Button>
                </div>
            </div>
        </div>
    );
};
