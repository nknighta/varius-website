import React ,{useState } from 'react'
import {Box, Text,Button} from '@chakra-ui/react'
import {type} from "os";

export default function Login({children}) {
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
					<LoginForm />
					{children}
				</Box>
			</Box>
		</>
	)
}


const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`username: ${username}, password: ${password}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<Text>UserName</Text>
				<input   style={{
					backgroundColor: '#000',
					color: '#fff',
					width: 550,
					height: 55,
					margin: "10px 10px 30px 10px ",
					fontSize: "30px"}}
						 type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			</label>
			<label>
				<Text>Password:</Text>
				<input style={{
					backgroundColor: '#000',
					color: '#fff',
					width: 550,
					height: 55,
					margin: "10px 10px 30px 10px ",
					fontSize: "30px"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};