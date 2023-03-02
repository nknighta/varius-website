import React from 'react'
import {Box, Text} from '@chakra-ui/react'

export default function index({props}) {
	return (
		<>
			<Box
				bgColor={"#fff"}
				h={"50em"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Text fontSize={50}>
					<br />
					this is dev page.
					<br/>
				</Text>
				<pre><code>{JSON.stringify(props,null,2)}</code></pre>
			</Box>
		</>
	)
}
export async function getServerSideProps (context) {
	try {
		const host = context.req.headers.host || 'app-terminal.vercel.app'
		const protocol = /^localhost/.test(host) ? 'http' : 'https'
		const data = await fetch(`${protocol}://${host}/api/products`)
			.then(data => data.json())
		return {
			props: {
				data,
			}
		}
	} catch (e) {
		console.log(e)
		return {
			props: {
				data: [],
			}
		}
	}
}