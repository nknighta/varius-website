import React from 'react'
import {Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import {useRouter} from "next/router";

export default function DocsIndex({children}:any) {
	const router = useRouter();
	const docsid = router.query.auth;
	const DocsContent = () =>{
		if(docsid === '1'){
			return <h1>AAA</h1>
		}
		else {
			return <h1>select</h1>
		}
	}
	return (
		<>
			<Box
				bgColor={"#fff"}
				h={"50em"}
				display={"flex"}
			>
				<Box h={"100%"} w={"20%"}>
					<Accordion>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as="span" flex='1' textAlign='left'>
										App ver : v0.4.23
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Box as="span" flex='1' textAlign='left'>
									<a href={"/docs/test"}>test</a>
								</Box>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Box>
				<Box h={"100%"} w={"60%"}>
					{children}
				</Box>
			</Box>
		</>
	)
}
