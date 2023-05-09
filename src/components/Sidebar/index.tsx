import React from "react";
import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import MenuLinks from "../MenuLinks";
import * as S from "./styled";

export type SidebarProps = { children?: React.ReactNode };
export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
      {children}
    </S.SidebarWrapper>
  );
};
export default Sidebar;
