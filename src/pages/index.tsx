import React from 'react'
import {Box, Text, Flex} from '@chakra-ui/react'

export default function index() {
	return (
	<>
			<Box
				bgColor={"#fff"}
				display={"flex"}
				alignItems={"flex-start"}
				justifyContent={"center"}
			>
				
				<Box display="inlne-block">
				<Text fontSize={50}>
					Todays
				</Text> 
					<a href='/dev/game-test'>Game Display</a>
					<br />
						<Flex>
							<Feed>
								<Text fontSize={40}>Blog</Text>
								<HomeLink link='/blog/2023-03' text='first post official blog.'/>
							</Feed> 
							<Feed>
								<Text fontSize={40}>Released</Text>
								<HomeLink link='/' text='release new version v0.4.33'/>		 
							</Feed> 
						</Flex>
					<Box>
						
					</Box>
				<Box display="inlne-block">
					<Text fontSize={50}>
						Apps
					</Text>
						<br />
					<Box bgColor='#000' color='#fff'  m={10} p={10}>
						<Text fontSize={30}>For developers</Text>
						<HomeLink link={"/apps/varius-app-api"} text={"VARIUS App API"}/>
						<br/>
						<br/>
						<Text fontSize={30}>For Players</Text>
						<HomeLink link={"/apps/v-metaverse"} text={"V metaverse"}/>
						<br/>
						<br/>
						<Text fontSize={30}>For Creators</Text>
						<HomeLink link={"/"} text={"V metaverse"}/>
						<br/>
						<br/>
					</Box>
				</Box>
					<Box display="inlne-block">
						<Text fontSize={50}>
							User Ranking
						</Text>
						<br />
						<Box bgColor='#000' color='#fff'  m={10} p={10}>
							<Text fontSize={30}>For developers</Text>
							<Text fontSize={30}>For Players</Text>
							<Text fontSize={30}>For Creators</Text>
						</Box>
					</Box>
				</Box>

			</Box>
		</>
	)
}

function Feed ({children, color}:any) {
	return (
			<Box w={500} 
				 h={500}
			   	p={7} m={30} 
				bgColor={"#000"}
				color={"#fff"}>
								{children}
						</Box>
	)
}

function HomeLink ({link, text}:any) {
	return (
		<a href={link} style={{color: '#fff', fontSize: 25}}>
			{text}
		</a>
	)
}
