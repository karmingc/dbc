/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Spring, animated, config } from 'react-spring/renderprops';

import { layout } from 'style/layout.js';
import { font } from 'style/text.js';

const STYLES_MAIN = css`
  display: flex;
  flex-direction: column;
  width: ${layout.desktop.width};
  max-width: ${layout.desktop.maxWidth};
  margin: auto;
`;

const STYLES_HEAD = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const STYLES_TITLE = css`
  font-size: ${font.size.small};
`;

const STYLES_IMG_LAYOUT_L = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${layout.block.bottom};
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img:first-child {
      margin-bottom: 10px;
    }
  }
`;

const STYLES_IMG_LAYOUT_S = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 5px);
  height: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const STYLES_IMG_L = css`
  width: calc(50% - 5px);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const STYLES_IMG_S = css`
  width: 100%;
  height: calc(50% - 5px);
`;

const Home = () => {
  return (
    <Spring
      native
      from={{ transform: 'translate(0, 50%)', opacity: '0' }}
      to={{ transform: 'translate(0, 0)', opacity: '1' }}
      config={config.molasses}>
      {props => (
        <animated.div style={props} css={STYLES_MAIN}>
          <div css={STYLES_HEAD}>
            <span css={STYLES_TITLE}>52B La Gauchetiere, Montreal, Quebec</span>
            <span>Monday - Sunday 12PM - 7PM</span>
          </div>
          <div css={STYLES_IMG_LAYOUT_L}>
            <img
              css={STYLES_IMG_L}
              src={require('assets/media/main/demonstrate.jpg')}
              alt="Demonstrate"
            />
            <div css={STYLES_IMG_LAYOUT_S}>
              <img css={STYLES_IMG_S} src={require('assets/media/main/wrap.jpg')} alt="Wrap" />
              <img
                css={STYLES_IMG_S}
                src={require('assets/media/main/peanuts.jpg')}
                alt="Peanuts"
              />
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};
export default Home;
