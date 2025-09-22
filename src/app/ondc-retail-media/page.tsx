
import AboutHomeFour from '@/components/about/AboutHomeFour';
// import Hero component placeholder if needed: import HeroHomeThree from '@/components/hero/HeroHomeThree';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export default function Page() {
	return (
		<Wrapper>
			<HeaderOne />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						{/* Placeholder - replace with a proper hero and content for ONDC Retail Media */}
						<section>
							<div className="container">
								<h2 className="cs_section_title">ONDC & Retail Media</h2>
								<p className="anim_text">We help e-commerce and retail businesses grow using ONDC integrations and retail media strategies.</p>
							</div>
						</section>
						<AboutHomeFour />
					</main>
					<FooterOne />
				</div>
			</div>
		</Wrapper>
	);
}
