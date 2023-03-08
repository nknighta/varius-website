import React from 'react';
import {Html, Main, NextScript, Head} from 'next/document';
import {Text, Box, Flex, Button} from '@chakra-ui/react';

export default function document() {
    let headerheight = 50;
    let headerwidthR = "50%";
    const HeaderLink = ({link, text}: any) => {
        return (
            <a href={link} style={{marginLeft: 10, marginRight: 10, color: '#fff'}}>
                {text}
            </a>
        )
    }
    return (
        <Html>
            <Head/>
            <title>VARIUS inc.</title>
            <Box
                bgColor={"#000"}
                textColor={"#fff"}
                h={headerheight}
                paddingX={30}>
                <Flex>
                    <Box w={headerwidthR}>
                        <a href="/" style={{fontSize: '2em', color: '#fff'}}>VARIUS</a>
                    </Box>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"end"}
                        h={headerheight}
                        w={headerwidthR}>
                        <Text>for all developer and ceaters!!</Text>
                        <HeaderLink link="/about" text="about"/>
                        <HeaderLink link="/docs" text="docs"/>
                        <Button style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            width: 100,
                            height: 40,
                            borderRadius: 5,
                        }}
                                marginX={10}
                                as={"a"} href="/sighin">
                            Sigh In
                        </Button>
                    </Box>
                </Flex>
            </Box>
            <body>
            <Main/>
            <NextScript/>
            </body>
            <div style={{
                color: '#fff',
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                padding: 20,
                height: 300
            }}>
                    <HeaderLink link="https://twitter.com/ama_p213" text="owner twitter"/>
                    <HeaderLink link="https://github.com/NknightA" text="Github Account"/>
                    <Text>@NknightA 2023</Text>

            </div>
            <div style={{
                color: '#fff',
                background: '#000',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: 20,
                height: 300
            }}>
                <Box>
                    <Text>I make app in Takasaki Gunma. I love here</Text>
                </Box>
            </div>
        </Html>
    )
}
