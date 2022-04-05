import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
// import LayOutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`;
const HIDDEN_HEADERS = ["/"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenHeader && <LayoutBanner />}
      {!isHiddenHeader && <LayoutNavigation />}
      <BodyWrapper>
        {/* <LayOutSidebar /> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
