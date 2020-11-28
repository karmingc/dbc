/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { Trail, animated, config } from 'react-spring/renderprops';
import { layout } from 'style/layout.js';

import Candy from 'assets/media/menu/candy.png';
import Dumpling from 'assets/media/menu/dumpling.jpg';
import Eggball from 'assets/media/menu/eggball_2.jpg';
import Waffle from 'assets/media/menu/waffle.jpg';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 5px);

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const STYLES_MAIN = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: ${layout.desktop.width};
  max-width: ${layout.desktop.maxWidth};
  margin: auto auto ${layout.block.bottom};

  > div {
    margin-right: 24px;
  }

  > div:nth-of-type(2n) {
    margin-right: 0px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    div {
      margin-right: 0px;
    }
  }
`;

const STYLES_CARD = css`
  display: flex;
  flex-direction: column;
  width: calc(50% - 12px);
  margin-bottom: 48px;

  > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 24px;
  }

  > h2 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Menu = () => {
  const items = [
    { title: "Dragon's Beard Candy", description: '6 pieces / $ 4.50', src: Candy },
    { title: 'Sweet Dumpling', description: '10 pieces / $ 4.50', src: Dumpling },
    { title: 'Egg Ball', description: '1 order / $ 4.00', src: Eggball },
    { title: 'Waffle HK Style', description: '1 order / $ 4.50', src: Waffle },
  ];

  return (
    <div css={STYLES_MAIN}>
      <Trail
        native
        items={items}
        keys={item => item.title}
        from={{ transform: 'translate(0, 50%)', opacity: '0' }}
        to={{ transform: 'translate(0, 0)', opacity: '1' }}
        config={config.molasses}>
        {item => props => (
          <animated.div style={props} css={STYLES_CARD}>
            <img src={item.src} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </animated.div>
        )}
      </Trail>
    </div>
  );
};

export default Menu;
