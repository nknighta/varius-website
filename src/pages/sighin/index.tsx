import React from 'react'
import {Box, Text,Button} from '@chakra-ui/react'

export default function index() {
	return (
		<>
			<Box
				bgColor={"#fff"}
				h={"50em"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Box display="inline-block">
					<Text fontSize={50}>
						Welcome.
					</Text>
					<Box>
						<Inputfield inputtype="type/email" />
					</Box>
						<Inputfield inputtype={"type/password"}/>
					<Box>
					<Box>
						<Button>Sigh in with github</Button>
					</Box>
						<a href="">Create accout.</a>
					</Box>
				</Box>
			</Box>
		</>
	)
}

const Inputfield = ({inputtype}:any) => {
	return (
				<input type={inputtype} style={{
								backgroundColor: '#000',
								color: '#fff',
								width: 550,
								height: 55,
								margin: "10px 10px 30px 10px ",
								fontSize: "30px"
							}}/>
	)
}
