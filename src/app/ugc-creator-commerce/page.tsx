
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';

export default function UGCCreatorCommercePage() {
	return (
		<Wrapper>
			<HeaderOne />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<ServiceDetailTemplate
							title="UGC Creator Commerce"
							tagline="Authentic creators driving conversions."
							image="/assets/img/ugc.png"
							intro="We connect brands with creators to build commerce-driven user generated content at scale."
							description="From creator discovery, contracts and content funnels to paid distribution, we help brands scale creative that actually converts."
							sections={[]}
						/>
					</main>
					<FooterOne />
				</div>
			</div>
		</Wrapper>
	);
}
