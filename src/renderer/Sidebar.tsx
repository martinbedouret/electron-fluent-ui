import { Button, ProgressBar, Tab, TabList, Text, type Theme } from "@fluentui/react-components";
import {
    AddRegular,
    ArchiveRegular,
    ArrowSquareUpRight24Filled,
    BinRecycleRegular,
    People28Filled,
    Board28Filled,
    Speaker048Filled,
    DraftsRegular,
    FireRegular,
    MailRegular,
    StarRegular,
} from "@fluentui/react-icons";

export const Sidebar = ({ theme }: { theme: Theme }) => {
    return (
        <div
            style={{
                height: "40%",
                width: 300,
                display: "flex",
                flexDirection: "column",
                borderRightWidth: 1,
                borderRightColor: theme.colorNeutralStroke3,
                borderRightStyle: "solid",
                gap: 10,
                padding: 20,
                boxSizing: "border-box",
                flexShrink: 0,
            }}
        >
            <Button appearance="primary" size="large" shape="rounded" style={{height: '70px'}} icon={<AddRegular />}>New Interaction</Button>
            <div style={{ flexGrow: 1 }}>
                <TabList size="large" vertical defaultSelectedValue="tab1" appearance="subtle">
                    <Tab icon={<People28Filled />} value="tab1">
                        People 
                    </Tab>
                    <Tab icon={<Board28Filled />} value="tab2">
                        Your Boards 
                    </Tab>
                    <Tab icon={<Speaker048Filled />} value="tab3">
                        Quick Responses 
                    </Tab>
                </TabList>
            </div>
        </div>
    );
};
