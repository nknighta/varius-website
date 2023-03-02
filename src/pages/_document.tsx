import React from 'react';
import {Html, Main, NextScript, Head} from 'next/document';
import {Text, Box, Flex, Button} from '@chakra-ui/react';

export default function document() {
	let headerheight = 50;
	let headerwidthR = "50%";
	const HeaderLink = ({link, text}: any) => {
		return (
			<a href={link} style={{marginLeft: 10, marginRight: 10}}>
				{text}
			</a>
		)
	}
	return (
		<Html>
			<Head />
			<title>VARIUS inc.</title>
			<Box
			bgColor={"#000"}
				textColor={"#fff"}
				h={headerheight}
				paddingX={30}>
				<Flex>
					<Box w={headerwidthR}>
						<a href="/" style={{fontSize: '2em'}}>VARIUS inc.</a>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"end"}
						h={headerheight}
						w={headerwidthR}>
						<Text>for all developer and ceaters!!</Text>
						<HeaderLink link="/about" text="about" />
						<HeaderLink link="/docs" text="docs" />
						<Button style={{
							backgroundColor: '#fff',
							color: '#000',
							width: 100,
							height: 40,
							borderRadius: 5,
						}}
							marginX={10}
							as={"a"} href="/login">
							Sigh In
						</Button>
					</Box>
				</Flex>
			</Box>
			<body style={{backgroundColor: '#000'}}>
				<Main />
				<NextScript />
			</body>
			<div style={{color: '#fff', width: '100%', display: 'flex', justifyContent: 'center', padding: 20}}>
				<Text>
					<HeaderLink link="https://twitter.com/ama_p213" text="owner twitter" />
					<HeaderLink link="https://github.com/NknightA" text="Github Account" />
					<Text>@NknightA 2023</Text>
				</Text>
			</div>
		</Html>
	)
}
