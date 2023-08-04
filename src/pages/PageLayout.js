import React from 'react';
import { Layout } from 'antd';
import HeaderTemplate from '../component/Header';
import { contentStyle, footerStyle, ahrefLinkFooter } from '../styles/style';
const { Footer, Content } = Layout;

const PageLayout = ({ children }) => {
	return (
		<Layout>
			<HeaderTemplate />
			<Content style={contentStyle}>
				{children}
			</Content>
			<Footer style={footerStyle}>Library UI - <a href='https://emrecan.co' style={ahrefLinkFooter} target='_blank'>emrecan.co</a></Footer>
		</Layout>
	);
};

export default PageLayout;
