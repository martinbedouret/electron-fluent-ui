
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import {
    FluentProvider,
    Link,
    MessageBar,
    MessageBarBody,
    MessageBarTitle,
    MessageBarIntent,
    Button,
    Table,
    TableBody,
    TableHeader,
    TableHeaderCell,
    TableRow,
    webDarkTheme,
    webLightTheme,
    makeStyles,
    type Theme,
    TableCell,
    Skeleton,
    SkeletonItem,
    Avatar,
} from "@fluentui/react-components";
import {
    AppGeneric48Filled
} from "@fluentui/react-icons";
import { Field, Textarea } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Header2 } from "./Header2";
import { Mails } from "./Mails";
import { Sidebar } from "./Sidebar";
import "./index.css";
import { Sidebar2 } from './Sidebar2';

const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];

const shouldUseDarkColors = (): boolean =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const getTheme = () => (shouldUseDarkColors() ? webDarkTheme : webLightTheme);

const useClasses = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
    }
});

export const App = () => {
    const classes = useClasses();

    const [theme, setTheme] = useState<Theme>(getTheme());
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        window.ContextBridge.onNativeThemeChanged(() => setTheme(getTheme()));
    }, []);

    return (
        <FluentProvider theme={theme} style={{ height: "100vh", background: "transparent" }}>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxSizing: "border-box",
                    }}
                >
                    <Sidebar theme={theme} />
                    <Sidebar2 theme={theme} />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: 20,
                        padding: 20,
                        boxSizing: "border-box",
                    }}
                >
                    <Header />
                    <div style={{ flexGrow: 1 }}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderCell style={{ width: 70 }}>Actions</TableHeaderCell>
                                    <TableHeaderCell>Suggestions</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow style={{ margin: '20px' }}>
                                    <TableCell>
                                        <Link>Refresh</Link>
                                    </TableCell>
                                    <TableCell>
                                        <MessageBar shape="rounded" layout='multiline' style={{ height: '70px', margin: '10px' }} key='0' intent="success">
                                            <MessageBarBody style={{ textAlign: 'center' }}>
                                                <MessageBarTitle style={{ textAlign: 'left' }}>Agree</MessageBarTitle>
                                                Oh no, Hector! Fixing your bike might take some time. Have you considered using public transportation in the meantime to make your daily commute in Carlos Paz easier?
                                            </MessageBarBody>
                                        </MessageBar>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Link>Refresh</Link>
                                    </TableCell>
                                    <TableCell>
                                        <MessageBar layout='multiline' shape="rounded" style={{ height: '70px', margin: '10px' }} key='1' intent="error">
                                            <MessageBarBody style={{ textAlign: 'center' }}>
                                                <MessageBarTitle style={{ textAlign: 'left' }}>Disagree</MessageBarTitle>
                                                Hector, fixing your bike could be a lengthy process. Perhaps you can carpool with a friend or colleague to get to and from Carlos Paz until it's fixed?
                                            </MessageBarBody>
                                        </MessageBar>
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <Link>Refresh</Link>
                                    </TableCell>
                                    <TableCell>
                                        <MessageBar layout='multiline' shape="rounded" style={{ height: '70px', margin: '10px' }} key='2' intent="warning">
                                            <MessageBarBody style={{ textAlign: 'center' }}>
                                                <MessageBarTitle style={{ textAlign: 'left' }}>More info</MessageBarTitle>
                                                {"      "}Uh-oh, Hector! Repairing your bike might take a while. Considering the hilly terrain in Carlos Paz, have you thought about using an electric bike or scooter as a temporary alternative for your daily commute?
                                            </MessageBarBody>
                                        </MessageBar>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <Link>Refresh</Link>
                                    </TableCell>
                                    <TableCell>
                                        <MessageBar layout='multiline' shape="rounded" style={{ height: '70px', margin: '10px' }} key='3' intent="info">
                                            <MessageBarBody style={{ textAlign: 'center' }}>
                                                <MessageBarTitle style={{ textAlign: 'left' }}>Change subject​</MessageBarTitle>
                                                Oh dear, Hector! Your bike repairs might affect your daily commute in Carlos Paz. Maybe you can work remotely for a few days or adjust your work schedule to avoid rush hour traffic?
                                            </MessageBarBody>
                                        </MessageBar>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "flex-end", gap: 10 }}>

                        <Keyboard
                            theme={"hg-theme-default myTheme1"}
                            layoutName='default'></Keyboard>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );
};
