import React from 'react';
import { Container } from '../../globalStyles';
import {
	ClientSection,
	ClientColumn,
	ClientText,
	ClientTitle,
	ClientRow,
	ClientWrapper,
	ClientImage,
	ClientTextWrapper,
} from './ClientsStyles';
import { clientsData } from '../../data/ClientsData';

const Clients = () => {
	return (
		<ClientSection id="clients">
			<Container>
				<ClientTextWrapper>
					<ClientTitle>Our Clients</ClientTitle>
					<ClientText>We’ve been working with the teams around the world.</ClientText>
				</ClientTextWrapper>

				<ClientRow>
					{clientsData.map((clients, clientsIndex) => (
						<ClientColumn key={clientsIndex}>
							{clients.map((el, index) => (
								<ClientWrapper key={index}>
									<ClientImage src={`./images/companies/${el.name}.svg`} />
								</ClientWrapper>
							))}
						</ClientColumn>
					))}
				</ClientRow>
			</Container>
		</ClientSection>
	);
};

export default Clients;
