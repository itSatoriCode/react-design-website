import React from 'react';
import Clients from '../components/Clients/Clients';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Features />
			<Clients />
			<Heading id="projects">Our Projects</Heading>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} />
		</>
	);
};

export default HomePage;
