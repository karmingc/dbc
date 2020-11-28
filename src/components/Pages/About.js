/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@emotion/css/macro';
import { Spring, animated, config } from 'react-spring/renderprops';

import { layout } from 'style/layout.js';

const STYLES_P_TEXT = css`
  display: flex;
  flex-direction: column;
  margin: auto auto ${layout.block.bottom};
  width: 75%;
`;

const STYLES_MAIN = css`
  display: flex;
  flex-direction: column;

  width: ${layout.desktop.width};
  max-width: ${layout.desktop.maxWidth};
  margin: auto auto ${layout.block.bottom};
`;

const STYLES_IMG_LAYOUT = css`
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

const STYLES_IMG_S = css`
  width: calc(50% - 5px);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const STYLES_IMG_L = css`
  width: 100%;
  margin-bottom: ${layout.block.bottom};
`;

const About = () => {
  return (
    <Spring
      native
      from={{ transform: 'translate(0, 25%)', opacity: '0' }}
      to={{ transform: 'translate(0, 0)', opacity: '1' }}
      config={config.molasses}>
      {props => (
        <animated.div style={props} css={STYLES_MAIN}>
          <div css={STYLES_P_TEXT}>
            <h2>Hong Kong - Montreal</h2>
            <p>
              In 1991, Hong Kong born Johnny Chin brought to Montreal a mysterious confectionery
              called Dragon’s Beard Candy, a dessert that used to serve the Emperors of China.
            </p>
          </div>
          <img css={STYLES_IMG_L} src={require('assets/media/about/kid.jpg')} alt="Kid" />
          <div css={STYLES_P_TEXT}>
            <h2>Sugar</h2>
            <p>
              Using corn syrup and cornstarch as its core, the once before hardened block of sugar
              is turned into 8,192 thin and delicate strands through stretching and doubling.
            </p>
          </div>
          <div css={STYLES_IMG_LAYOUT}>
            <img css={STYLES_IMG_S} src={require('assets/media/about/sirop.jpg')} alt="Syrup" />
            <img css={STYLES_IMG_S} src={require('assets/media/about/show.jpg')} alt="Show" />
          </div>
          <div css={STYLES_P_TEXT}>
            <h2>Mixture</h2>
            <p>
              To add a twist of taste, there is a mixture of peanuts, coconuts, sesames and a slight
              touch of chocolate within the wrapped sugar strands.
            </p>
          </div>
          <div
            css={[
              STYLES_IMG_LAYOUT,
              css`
                margin-bottom: 10px;
              `,
            ]}>
            <img
              css={STYLES_IMG_S}
              src={require('assets/media/about/complete.jpg')}
              alt="Complete"
            />
            <img css={STYLES_IMG_S} src={require('assets/media/about/peanuts.jpg')} alt="Peanuts" />
          </div>
          <img css={STYLES_IMG_L} src={require('assets/media/about/candy.png')} alt="Candy" />
        </animated.div>
      )}
    </Spring>
  );
};

export default About;
