import styled from '@emotion/styled';

export const HeaderWrapper = styled.header<{
  isHide: boolean;
  isShowHeaderBgColor: boolean;
}>`
  position: fixed;
  top: ${({ isHide }) => (isHide ? '-70px' : '0px')};
  left: 50%;
  z-index: ${({ theme }) => theme.zIndexs.navigater};
  transform: translateX(-50%);
  height: 70px;
  width: 100%;
  background-color: ${({ isShowHeaderBgColor, theme }) =>
    isShowHeaderBgColor ? theme.colors.navigationBg : 'transparent'};
  box-shadow: 0 1px 5px 0 rgb(0, 0, 0, 0.1);
  transition: 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    top: ${({ isHide }) => (isHide ? '-45px' : '0px')};
    height: 50px;
    background-color: ${({ theme }) => theme.colors.navigationBg};
  }
`;

export const InnerWrapper = styled.div`
  max-width: 920px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  flex: auto;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  filter: brightness(0.9);
  transition: 0.2s;

  :hover {
    filter: brightness(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    filter: brightness(0.95);

    > a {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
`;

export const Nav = styled.nav`
  flex: none;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  filter: brightness(0.9);
  transition: 0.25s;

  :hover {
    filter: brightness(1);
  }

  > a {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: ${({ theme }) => theme.letterSpacings.widest};
  }
`;

export const ColorModeBtn = styled.div`
  flex: none;
  position: relative;
  top: 4px;
  left: 5px;
`;

export const ColorModeIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.colorModeIcon};
  transition: 0.25s;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const MobileHeaderWrapper = styled.header<{
  isHide: boolean;
}>`
  position: fixed;
  top: ${({ isHide }) => (isHide ? '-55px' : '0px')};
  left: 50%;
  z-index: ${({ theme }) => theme.zIndexs.navigater};
  transform: translateX(-50%);
  height: 55px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navigationBg};
  box-shadow: 0 1px 5px 0 rgb(0, 0, 0, 0.5);
  transition: 0.2s;
`;
