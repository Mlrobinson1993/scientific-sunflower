import React from 'react';
import _ from 'lodash';
import Social from './Social';

import { markdownify } from '../utils';

export default class HeroBlock extends React.Component {
	render() {
		return (
			<section
				id={_.get(this.props, 'section.section_id')}
				className='block hero-block outer'
			>
				<div className='hero-container'>
					<div className='hero_image-container'>
						<img
							className='hero_image'
							loading='lazy'
							alt='photograph of Mikey standing in front of a colourful wall'
							src={_.get(this.props, 'section.image')}
						/>
					</div>
					<div className='inner-small'>
						<div className='block-header'>
							<h2>{_.get(this.props, 'section.title')}</h2>
						</div>
						<div className='block-content'>
							<div className='block-copy'>
								{markdownify(_.get(this.props, 'section.content'))}
							</div>
							<div className='hero_button-container'>
								<a
									class='button'
									href={_.get(this.props, 'section.resumeURL')}
									download
								>
									Download my resume
								</a>
								<a
									class='button'
									href='www.github.com/mlrobinson1993'
									target='_blank'
								>
									Check out my Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
