import React from 'react'
import styled from 'styled-components'

function HomePage() {
	return (
		<HomeContainer>
			HOME PAGE
		</HomeContainer>
	)
}

export default HomePage

const HomeContainer = styled.main`
	min-height: calc(100vh - 70px);
	position: relative;
	
	&:before {
		background: url("/images/home-background.png") center center / cover no-repeat fixed;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -10;
	}
`