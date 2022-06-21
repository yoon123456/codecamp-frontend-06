import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayOutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  padding: 0px;
  margin: 0 auto;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`;
const HIDDEN_HEADERS = ["/"];
const HIDDEN_BANNER = ["/open-api"];
const HIDDEN_SIDEBAR = [
  "/",
  "/login",
  "/signup",
  "/boards",
  "/open-api",
  "/mypage",
  "/payment",
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenHeader && !isHiddenBanner && <LayoutBanner />}
      {!isHiddenHeader && <LayoutNavigation />}
      <BodyWrapper>
        <Body>{props.children}</Body>
        {!isHiddenSidebar && <LayOutSidebar />}
      </BodyWrapper>
      {!isHiddenHeader && <LayoutFooter />}
    </>
  );
}
