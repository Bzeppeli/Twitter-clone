import styled, { css } from "styled-components";
import { ArrowLeft } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /*
    this is propertie is for a calculation
    that minimum size it can occupy on the screen
    for exemple, if it's more than 601px,
    it's will keep the 601px.
  */
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid #2F3336;
    border-right: 1px solid #2F3336;
  }


`;
export const Header = styled.div`
  position: sticky;
  top: 0;
  background: black;

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid #2F3336;

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover{
      background: #011017;
    }
  }
  
`;
export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: #33A1F2;
`;
export const ProfileInfo = styled.div`
  
`;