import {AppProps} from 'react'
import React from 'react'
import {ChakraProvider} from '@chakra-ui/react';

export default function Entry({Component, pageProps}: AppProps) {
	return (
		<ChakraProvider>
			<Component{...pageProps} />
		</ChakraProvider>
	);
}
