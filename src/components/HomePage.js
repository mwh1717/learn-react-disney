import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import querySnapshot from '../firebase';

function HomePage() {

	// useEffect(() => {
	// 	querySnapshot.forEach((doc) => {
	// 		// doc.data() is never undefined for query doc snapshots
	// 		console.log(doc.id, " => ", doc.data());
	// 	});
	// }, []);

	return (
		<HomeContainer>
			<ImageSlider />
			<Viewers />
			<Movies />
		</HomeContainer>
	)
}

export default HomePage

const HomeContainer = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3vw + 5px);
	position: relative;
	overflow-x: hidden;
	
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