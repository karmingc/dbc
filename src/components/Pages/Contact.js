/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { Spring, animated, config } from 'react-spring/renderprops';

import { font } from 'style/text.js';
import { layout } from 'style/layout.js';

const STYLES_INFO = css`
  display: flex;
  flex-direction: column;
  width: calc(50% - 5px);

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const STYLES_REVIEW = css`
  font-style: normal;
  font-size: ${font.size.small};
  margin-top: 5px;
  margin-bottom: 5px;

  :hover {
    color: black;
  }
`;

const STYLES_MAIN = css`
  display: flex;
  flex-direction: column;

  width: ${layout.desktop.width};
  max-width: ${layout.desktop.maxWidth};
  margin: auto auto ${layout.block.bottom};
`;

const STYLES_CONTENT = css`
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

const STYLES_CREDIT = css`
  font-size: ${font.size.xsmall};
  margin-top: ${font.spacing.descriptionTop};
  line-height: ${font.spacing.descriptionInline};
  text-align: center;
  color: ${font.color.blurGrey};
`;

const STYLES_CREDIT_LINK = css`
  font-size: ${font.size.xsmall};
  color: ${font.color.blurGrey};
  text-decoration: none;
  font-style: italic;
  transition: color ease 0.5s;
  :hover {
    color: #007aff;
  }
`;

const STYLES_IMG = css`
  width: calc(50% - 25px);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const STYLES_P = css`
  margin-top: ${font.spacing.descriptionTop};
  margin-bottom: 0;
`;
const Contact = () => {
  const reviews = [
    {
      title: 'google',
      description: '4.4/5 (101) on Google',
      src: 'https://goo.gl/maps/yAJ9ggteiUuRC19k9',
    },
    {
      title: 'tripadvisor',
      description: '4.5/5 (32) on Tripadvisor',
      src:
        'https://www.tripadvisor.ca/Restaurant_Review-g155032-d8334097-Reviews-Dragon_s_Beard_Candy-Montreal_Quebec.html',
    },
    {
      title: 'yelp',
      description: '4/5 (99) on Yelp',
      src: 'https://www.yelp.ca/biz/dragons-beard-candy-montr%C3%A9al-2?start=20',
    },
  ];

  const credits = [
    {
      title: 'A Canadian Foodie',
      src: 'https://www.acanadianfoodie.com/2015/05/05/dragon-beard-candy/',
    },
    {
      title: 'David M.',
      src: 'https://www.yelp.ca/user_details?userid=1E_psaptRT9kFVEEBj05vw',
    },
    {
      title: '@fatresters',
      src: 'https://www.instagram.com/fatresters/',
    },
  ];

  return (
    <Spring
      native
      from={{ transform: 'translate(0, 50%)', opacity: '0' }}
      to={{ transform: 'translate(0, 0)', opacity: '1' }}
      config={config.molasses}>
      {props => (
        <animated.div style={props} css={STYLES_MAIN}>
          <div css={STYLES_CONTENT}>
            <img
              css={STYLES_IMG}
              src={require('assets/media/contact/shop_2.jpg')}
              alt="Shop"
              rel="noopener noreferrer"
            />
            <div css={STYLES_INFO}>
              <h2>La Barbe de Dragon</h2>
              <p css={STYLES_P}>52B La Gauchetiere, Montreal, Quebec. </p>
              <p css={STYLES_P}>Monday - Sunday 12PM - 7PM </p>
              <p css={STYLES_P}>+1-514-916-6252 </p>
              <br />
              <br />
              <p>Reviews:</p>
              {reviews.map(review => {
                const { title, description, src } = review;
                return (
                  <a
                    css={[STYLES_CREDIT_LINK, STYLES_REVIEW]}
                    key={title}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer">
                    {description}
                  </a>
                );
              })}
            </div>
          </div>
          <div css={STYLES_CREDIT}>
            Credits to
            {credits.map((credit, idx) => {
              if (idx === 0) {
                return (
                  <a
                    css={STYLES_CREDIT_LINK}
                    key={credit.title}
                    href={credit.src}
                    target="_blank"
                    rel="noopener noreferrer">
                    {' '}
                    {credit.title}
                  </a>
                );
              }
              return (
                <span key={credit.title}>
                  ,
                  <a
                    css={STYLES_CREDIT_LINK}
                    href={credit.src}
                    target="_blank"
                    rel="noopener noreferrer">
                    {' '}
                    {credit.title}
                  </a>
                </span>
              );
            })}
            for pictures.
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Contact;
