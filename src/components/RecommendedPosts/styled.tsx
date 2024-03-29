import styled from "styled-components";
import {
  ChevronBack as Backward,
  ChevronForward as Forward,
} from "@styled-icons/ionicons-solid/";
import { Link } from "gatsby";

export const Icons = { Backward, Forward };

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: min(50px, 4rem);
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  gap: 1rem;
`;

export const IconWarpper = styled.div`
  fill: var(--text-dark);
  width: 30px;
  height: 30px;
`;

export const PostItemLink = styled(Link)`
  background-color: var(--background-dark);
  color: var(--color-primary-500);
  text-decoration: none;
  font-size: var(--fs-400);
  font-weight: var(--fw-regular);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: min(10px, 1rem);
  flex-wrap: nowrap;
  padding: 0.2rem 0.6rem;

  &:hover {
    color: var(--color-primary-900);
    background-color: var(--background-active);
  }
`;
