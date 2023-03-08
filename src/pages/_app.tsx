import {AppProps} from 'next/app';
import React from 'react'
import {ChakraProvider} from '@chakra-ui/react';
import {NextUIProvider} from '@nextui-org/react';
import './global.sass'

export default function Entry({Component, pageProps}: AppProps) {
	return (
		<ChakraProvider>
			<NextUIProvider>
			<Component{...pageProps} />
			</NextUIProvider>
		</ChakraProvider>
	);
}
