import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Override
				slot="SectionContent"
				max-height="700px"
				height="700px"
				min-height="700px"
				order="0"
				position="static"
			/>
			<Box height="400px" width="400px" background="#000000">
				<Text color="#ffffff" font="55px sans-serif" text-align="center">
					Some text
				</Text>
				<Image
					width="350px"
					height="350px"
					src="https://images.unsplash.com/photo-1605915532179-0fd65403813e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000"
					position="absolute"
					bottom="auto"
					left="350px"
					right="auto"
					top="157px"
				/>
			</Box>
			<StackItem width="50%" display="flex" padding="50px 16px 16px 16px" margin="120px 0px 0px 0px">
				<Override slot="StackItemContent" margin="100px 0px 0px 0px" background="#000000" />
				{"        "}
				<Text
					font="--lead"
					margin="0px 0px 0px 0px"
					display="inline-block"
					color="#ffffff"
					text-align="center"
					width="200px"
				>
					{"            "}Second Item{"\n        "}
				</Text>
				<StackItem width="50%" display="flex">
					{"        "}{"    "}
				</StackItem>
				<Text
					font="--lead"
					margin="0px 0px 0px 0px"
					display="inline-block"
					width="200px"
					text-align="center"
					color="#ffffff"
				>
					{"            "}First Item{"\n        "}
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});