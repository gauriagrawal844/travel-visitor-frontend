// pages/ourservice.js
import React from 'react';
import styled from 'styled-components';

const servicesData = [
  { title: 'Smart Contracts', description: `Automates processes like booking, payment, and check-in through self-executing contracts on the blockchain.` },
  { title: 'Decentralized Identity', description: `Users control their personal data using decentralized identity solutions, enhancing privacy and security.` },
  { title: 'Tokenization', description: `Hotels can create tokens on the blockchain for payments or loyalty programs, representing ownership or access rights.` },
  { title: 'Transparency', description: `Blockchain's transparent and immutable nature allows customers to verify details about the hotel.` },
  { title: 'Reviews and Reputation', description: `Decentralized review systems ensure that reviews are authentic and not manipulated.` },
  { title: 'Interoperability', description: `Enables seamless integration between different services, like hotel and flight bookings.` },
  { title: 'P2P Transactions', description: `Guests can directly pay hosts, reducing fees and transaction times.` },
  { title: 'Supply Chain Management', description: `Hotels can use blockchain to verify the authenticity of supplies, ensuring quality for guests.` },
];

const ServiceCard = ({ title, description }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </Card>
);

const OurService = () => (
  <PageContainer>
    <Header>
      <HeaderText>Our Services</HeaderText>
    </Header>

    <Section>
      <ServiceContainer>
        <VRCard>
          <CardTitle>VR Tours</CardTitle>
          <CenteredImage src="https://static.thenounproject.com/png/337515-200.png" alt="VR Tours" />
          <CardDescription>
            Immerse users in the wonders of virtual reality (VR) tours by stepping into a whole new dimension of exploration as we bring destinations to life right in front of user eyes. With our VR tours, individuals can travel to iconic landmarks, bustling cities, serene landscapes, and cultural hotspots from the comfort of their own spaces. Whether they are planning their next adventure or simply curious to see the world from a different perspective, our VR tours offer an exciting and engaging way to satisfy individual’s wanderlust.
          </CardDescription>
        </VRCard>

        <VRCard>
          <CardTitle>Africa’s Cultural Education</CardTitle>
          <CenteredImage src="https://thumbs.dreamstime.com/b/teacher-teaching-presentation-icon-vector-design-template-white-background-191503749.jpg" alt="Cultural Education" />
          <CardDescription>
            Incorporating Africa’s rich cultures by creating immersive experiences that showcase diverse traditions, languages, arts, and history. By utilizing interactive elements like 3D models, virtual tours, and multimedia to engage users and educate them about the continent’s heritage. Collaborate with local experts to ensure accurate representation and respect for cultural nuances.
          </CardDescription>
        </VRCard>
      </ServiceContainer>
    </Section>

    <Section>
      <IntegrationContainer>
        <IntegrationIcon src="https://www.freeiconspng.com/thumbs/office-icon/building-business-garage-office-icon--icon-search-engine-3.png" alt="Hotel Icon" />
        <IntegrationTextContainer>
          <SectionHeader>Website Integration in Hotel Services</SectionHeader>
          <SectionDescription>
            Web3 refers to the next evolution of internet, where decentralized technologies like blockchain enable more secure, transparent and user-centric applications. When it comes to Hotel services, we wish to integrate in areas of:
          </SectionDescription>
        </IntegrationTextContainer>
      </IntegrationContainer>

      <ServiceGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </ServiceGrid>
    </Section>

    <CTASection>
      <CTAText>Do you need a customized trip?</CTAText>
      <CTASubText>Drop us a line below, we’d love to talk.</CTASubText>
      <CTAButton href="/contact-us">Let’s Talk</CTAButton>
    </CTASection>
  </PageContainer>
);

export default OurService;

// Styled Components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  background-color: #4a90e2;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
`;

const HeaderText = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const VRCard = styled.div`
  width: 45%;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CenteredImage = styled.img`
  width: auto;
  height: 100px;
  margin: 0 auto 1rem auto;
  display: block;
`;

const IntegrationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IntegrationIcon = styled.img`
  width: 70px;
  height: 70px;
  display: block;
`;

const IntegrationTextContainer = styled.div`
  flex: 1;
  min-width: 250px;
`;

const SectionHeader = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const CTASection = styled.div`
  background-color: #4a90e2;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  max-width: 600px;
  margin: 2rem auto;
`;

const CTAText = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CTASubText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const CTAButton = styled.a`
  padding: 0.5rem 1rem;
  border: 2px solid #fff;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #4a90e2;
  }
`;
