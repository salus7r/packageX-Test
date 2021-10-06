import React, { FC } from "react";
import { AppContainer, AppMainLayout, AppSiderWrapper, AppBodyLayout, AppHeaderWrapper, AppContentWrapper } from "./App.styled";
import { SideMenu, Header } from "@components/index";
import GlobalStyle from "@theme/globalStyle";

import "antd/dist/antd.less";
import Content from "@containers/content";

const App: FC<{}> = () => {
	return (
		<>
			<GlobalStyle />
			<AppContainer className="App">
				<AppMainLayout>
					<AppSiderWrapper breakpoint="md" collapsedWidth="0">
						<SideMenu />
					</AppSiderWrapper>
					<AppBodyLayout>
						<AppHeaderWrapper>
							<Header />
						</AppHeaderWrapper>
						<AppContentWrapper>
							<Content />
						</AppContentWrapper>
					</AppBodyLayout>
				</AppMainLayout>
			</AppContainer>
		</>
	);
};

export default App;
