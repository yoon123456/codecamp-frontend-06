import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayOutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 1100px;
`;
const HIDDEN_HEADERS = ["/12-05-modal-refactoring"];
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
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayOutSidebar />
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
