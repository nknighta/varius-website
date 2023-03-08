import {Text,Box} from "@chakra-ui/react";

export default function Index () {
    return (
        <Box p={45}>
            <h1>VARIUS App API</h1>

            <h2>About</h2>
                <Text fontSize={30}>VARIUS App API is a set of proprietary packages for developers of Web3, Web5, and Metaverse platforms,<br/>
                     enabling smooth application development with libraries that can be used with npm, JavaFX, etc.</Text>
            <Box pt={28}>
                <h2>Links</h2>
                <div>
                    <h4>SDK</h4>
                    <a>SDK v0.2.0</a>
                </div>
                <br/>
                <div>
                    <h4>API (for online server etc.)</h4>
                    <a>API v4.3.0 - [jump docs page]</a>
                </div>
            </Box>
        </Box>
    )
}