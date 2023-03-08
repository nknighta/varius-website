import DocsIndex from '../index';
import {Box, Text} from "@chakra-ui/react";

export default function index () {
    let linkpadding = 20;
    return (
        <>
            <DocsIndex>
                <h1>v0.4.23</h1>
                <Box>
                    <h2>First release.</h2>
                    <Text fontSize={30}>this update is</Text>
                </Box>
                <br/>
                <br/>
                <Box>
                    <h2>API</h2>
                    <Text fontSize={30}>v0.2.0</Text>
                </Box>
                <br/>
                <br/>
                <Box>
                    <h2>SDK</h2>
                    <Text fontSize={30}>v0.1.0</Text>
                    <div style={{
                        paddingTop: linkpadding
                    }}>
                        <a>for Java Applications</a>
                    </div>
                    <div style={{
                        paddingTop: linkpadding
                    }}>
                        <a>for Python Applications</a>
                    </div>
                    <div style={{
                        paddingTop: linkpadding
                    }}>
                        <a>for Python Applications</a>
                    </div>
                </Box>
            </DocsIndex>
        </>
    )
}