import {
    Display,
    LargeTitle,
    Title1,
    Title2,
    Title3,
    Subtitle1,
    Subtitle2,
    Body1,
    Caption1,
    Caption2,
} from "@fluentui/react-components";
import { FC } from "react";

export const Welcome: FC = () => {
    return (
        <>
            <LargeTitle block>LargeTitle text wrapper, semibold, base900</LargeTitle>
            <Title1 block>Title1 text wrapper, semibold, base800</Title1>
            <Title2 block>Title2 text wrapper, semibold, base700</Title2>
            <Title3 block>Title3 text wrapper, semibold, base600</Title3>
            <Subtitle1 block>Subtitle1 text wrapper, semibold, base500</Subtitle1>
            <Subtitle2 block>Subtitle2 text wrapper, semibold, base400</Subtitle2>
            <Body1 block>Body1 text wrapper, regular, base300</Body1>
            <Caption1 block>Caption1 text wrapper, regular, base200</Caption1>
            <Caption2 block>Caption2 text wrapper, regular, base100</Caption2>
        </>
    );
};
