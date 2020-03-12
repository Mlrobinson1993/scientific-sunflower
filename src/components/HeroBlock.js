import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { markdownify } from '../utils';

export default class HeroBlock extends React.Component {
	render() {
		return (
			<section
				id={_.get(this.props, 'section.section_id')}
				className='block hero-block outer'
			>
				<Container>
					<ImageContainer>
						<Img
							loading='lazy'
							alt='photograph of Mikey standing in front of a colourful wall'
							src={_.get(this.props, 'section.image')}
						/>
					</ImageContainer>
					<div className='inner-small'>
						<div className='block-header'>
							<h2>{_.get(this.props, 'section.title')}</h2>
						</div>
						<div className='block-content'>
							<div className='block-copy'>
								{markdownify(_.get(this.props, 'section.content'))}
							</div>
							<a
								class='button'
								href={_.get(this.props, 'section.resumeURL')}
								download
							>
								Download my resume
							</a>
						</div>
					</div>
				</Container>
			</section>
		);
	}
}

const Container = styled.div`
	margin: 0 auto;
	width: 90vw;
	display: flex;
	align-items: center;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;
const ImageContainer = styled.div`
	width: 25vw;
	height: 25vw;
	margin: 0px auto;
	overflow: hidden;
	border-radius: 50%;
	border: 4px solid white;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px;

	@media (max-width: 1000px) {
		width: 35vw;
		height: 35vw;
		margin-bottom: 2rem;
	}
`;

const Img = styled.img`
	width: 100%;
	max-width: auto;
	margin: 0 auto;
	height: auto;
`;
