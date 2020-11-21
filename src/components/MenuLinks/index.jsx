import React from "react";
import { links } from "./content";

import * as S from "./styled";

const MenuLinks = () => {
  return (
    <S.MenuLinksWarpper>
      <S.MenuLinksList>
        {links.map((e, i) => {
          const { label, url } = e;
          return (
            <S.MenuLinksItem key={i}>
              <S.MenuLinkLink to={url} activeClassName="active">
                {label}
              </S.MenuLinkLink>
            </S.MenuLinksItem>
          );
        })}
      </S.MenuLinksList>
    </S.MenuLinksWarpper>
  );
};

export default MenuLinks;
