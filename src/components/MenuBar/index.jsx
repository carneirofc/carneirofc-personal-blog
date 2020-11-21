import React from "react";
import * as S from "./styled";

import { Home } from "@styled-icons/boxicons-solid/Home";
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt";
import { Bulb as BulbLine } from "@styled-icons/boxicons-regular/Bulb";
import { Bulb as BulbSolid } from "@styled-icons/boxicons-solid/Bulb";
import { GridAlt as Grid } from "@styled-icons/boxicons-regular/GridAlt";
import { ListUl as List } from "@styled-icons/boxicons-regular/ListUl";
import { ArrowToTop } from "@styled-icons/boxicons-regular/ArrowToTop";

const UpperBar = () => {
  return (
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Go Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Search">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
  );
};

const BottomBar = () => {
  return (
    <S.MenuBarGroup>
      <S.MenuBarItem title="Change theme">
        <BulbLine />
      </S.MenuBarItem>
      <S.MenuBarItem title="Visualization">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="To the top!">
        <ArrowToTop />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  );
};

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      <UpperBar />
      <BottomBar />
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
