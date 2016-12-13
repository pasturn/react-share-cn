import React, { Component } from 'react';
import { openWindow } from './utils';
import * as links from './share-links'

class Share extends Component {
	// constructor(props){
	// 	super(props);
	// }

	shareToSocialMedia = (name) => {
		const { shareUrl, shareTitle, sharePic, shareFrom } = this.props
		openWindow(links[name](shareUrl, {
			title: shareTitle,
			pic: sharePic,
			from: shareFrom
		}))
	}

	render() {
		return (
			<div className="ishare">
				<ul>
					<li onClick={this.shareToSocialMedia.bind(this, 'weibo')}>微博</li>
					<li>微信</li>
					<li onClick={this.shareToSocialMedia.bind(this, 'douban')}>豆瓣</li>
					<li onClick={this.shareToSocialMedia.bind(this, 'tieba')}>贴吧</li>
					<li onClick={this.shareToSocialMedia.bind(this, 'tmb')}>腾讯微博</li>
					<li onClick={this.shareToSocialMedia.bind(this, 'qzone')}>QQ空间</li>
					<li onClick={this.shareToSocialMedia.bind(this, 'renren')}>人人网</li>
					<li onClick={this.shareToSocialMedia.bind(this, 'kaixin')}>开心网</li>
				</ul>
			</div>
		);
	}
}

Share.propTypes = {
	shareUrl: React.PropTypes.string,
	shareTitle: React.PropTypes.string,
	sharePic: React.PropTypes.string,
	shareDesciption: React.PropTypes.string,
	shareFrom: React.PropTypes.string,
	shareOption: React.PropTypes.array
}

Share.defaultProps = {
	shareUrl: location.href,
	shareTitle: document.title,
	sharePic: '',
	shareFrom: '',
	shareOption: []
}

export default Share