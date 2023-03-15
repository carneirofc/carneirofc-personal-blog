import styled from "styled-components";
import { LeftArrowAlt } from "@styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";

export const ArrowRight = styled(RightArrowAlt)`
  width: 32px;
`;

export const ArrowLeft = styled(LeftArrowAlt)`
  width: 32px;
`;

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--border-dark);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  a {
    color: var(--text-dark);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--active);
    }
  }
`;
