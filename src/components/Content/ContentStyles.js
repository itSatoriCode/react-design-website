import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentSec = styled.div`
	padding: 100px 0;
	background: #fff;
	@media screen and (max-width: 768px) {
		padding: 70px 0;
	}
`;

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ContentButton = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fafeff')};
	cursor: pointer;
	color: white;

	&:hover {
		box-shadow: 0 0 32px 4px #cfcfcf;
		transition: box-shadow 0.3s ease-in;
	}
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;
	justify-content: center;
	box-shadow: 0 0 32px 4px #dfdfdf;
	border-radius: 1rem;
	position: relative;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fafeff')};
	&:before {
		width: 100%;
		height: 100%;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		background-image: url('./images/hero-pattern-bg.png');
		background-size: 100% auto;
		object-fit: cover;
	}
`;

export const TopLine = styled(motion.div)`
	font-size: 0.9rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	height: 300px;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: #1c2237;

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#a9b3c1' : '#1c2237')};
`;
