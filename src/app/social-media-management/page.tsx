
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';

export default function SocialMediaManagementPage() {
	return (
		<Wrapper>
			<HeaderOne />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<ServiceDetailTemplate
							title="Social Media Management"
							tagline="Bcccccccccccccccild communities, not just followers."
							image="/assets/img/socialmedia.png"
							intro="Strategic posting, community management and paid amplification to grow your brand organically and via performance channels."
							description="We craft social strategies that combine creative storytelling with data-driven distribution to grow meaningful audiences and measurable business outcomes."
							sections={[]}
						/>
					</main>
					<FooterOne />
				</div>
			</div>
		</Wrapper>
	);
}
