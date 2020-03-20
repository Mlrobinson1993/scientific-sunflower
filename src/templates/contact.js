import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, safePrefix } from '../utils';
import ContactForm from '../components/ContactForm';
import Social from '../components/Social';

export default class Contact extends React.Component {
	render() {
		return (
			<Layout {...this.props}>
				<div className='outer'>
					<div className='inner'>
						<article className='post page post-full'>
							<header className='post-header inner-small'>
								<h1 className='post-title line-top'>
									{_.get(this.props, 'pageContext.frontmatter.title')}
								</h1>
								{_.get(this.props, 'pageContext.frontmatter.subtitle') && (
									<div className='post-subtitle'>
										{htmlToReact(
											_.get(this.props, 'pageContext.frontmatter.subtitle')
										)}
									</div>
								)}
								<a
									class='button'
									href='mailto:mrobinsonwebdev@gmail.com'
									target='_blank'
								>
									mrobinsonwebdev@gmail.com
								</a>
								{_.get(
									this.props,
									'pageContext.site.siteMetadata.footer.has_social'
								) && <Social {...this.props} />}
							</header>
							{_.get(this.props, 'pageContext.frontmatter.img_path') && (
								<div className='post-thumbnail'>
									<img
										src={safePrefix(
											_.get(this.props, 'pageContext.frontmatter.img_path')
										)}
										alt={_.get(this.props, 'pageContext.frontmatter.title')}
									/>
								</div>
							)}
							<div className='post-content inner-small'>
								{htmlToReact(_.get(this.props, 'pageContext.html'))}
								<ContactForm {...this.props} />
							</div>
						</article>
					</div>
				</div>
			</Layout>
		);
	}
}
