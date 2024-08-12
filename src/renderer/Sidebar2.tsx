import { Button, ProgressBar, Tab, TabList, Text, type Theme } from "@fluentui/react-components";
import {
    AddRegular,
    ArchiveRegular,
    ArrowSquareUpRight24Filled,
    Question48Filled,
    BinRecycleRegular,
    DraftsRegular,
    FireRegular,
    MailRegular,
    StarRegular,
} from "@fluentui/react-icons";

export const Sidebar2 = ({ theme }: { theme: Theme }) => {
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
            <Button appearance="primary" size="large" shape="rounded" style={{height: '70px'}}>Start Talking</Button>
            <div style={{ flexGrow: 1 }}>
                <TabList size="large" vertical defaultSelectedValue="tab1" appearance="subtle">
                    <Tab icon={<StarRegular />} value="tab1">
                        Ideas
                    </Tab>
                    <Tab icon={<DraftsRegular />} value="tab2">
                        Your phrases 
                    </Tab>
                    <Tab icon={<Question48Filled />} value="tab3">
                        Ask Something 
                    </Tab>
                    <Tab icon={<StarRegular />} value="tab4">
                        History 
                    </Tab>
                    <Tab icon={<ArchiveRegular />} value="tab5">
                        Archive
                    </Tab>
                </TabList>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <ProgressBar value={0.7} />
                <Text size={200}>700.00 MB / 1.00 GB used</Text>
            </div>
        </div>
    );
};
