import React from 'react';
import styled from '@emotion/styled';
import { font } from 'style/text.js';
import { Container } from 'components/Pages/Home.js';
import {
  HalfImage,
  HorizontalSplitContainer,
} from 'components/Pages/Common/PictureLayout.js';
import { ItemContainer as ImportItemContainer } from 'components/Pages/Menu.js';
import { TextCredit, CreditLink } from 'components/Pages/Common/TextLayout.js';
import {
  TextTitle,
  TextDescription,
} from 'components/Pages/Common/TextLayout.js';

const ItemContainer = styled(ImportItemContainer)`
  width: calc(50% - 15px);
`;
const Review = styled(CreditLink)`
  font-style: normal;
  font-size: ${font.size.small};
  margin-top: 5px;
  margin-bottom: 5px;
  :hover {
    color: black;
  }
`;

export default class Contact extends React.Component {
  render() {
    return (
      <Container
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <HorizontalSplitContainer>
          <HalfImage
            src={require('assets/media/contact/shop_2.jpg')}
            alt="Shop"
          />
          <ItemContainer>
            <TextTitle>La Barbe de Dragon</TextTitle>
            <TextDescription>
              52B La Gauchetiere, Montreal, Quebec.{' '}
            </TextDescription>
            <TextDescription>Monday - Sunday 12PM - 7PM </TextDescription>
            <TextDescription>+1-514-916-6252 </TextDescription>
            <br />
            <br />
            <TextDescription>Reviews:</TextDescription>
            <Review
              href="https://goo.gl/maps/yAJ9ggteiUuRC19k9"
              target="_blank"
            >
              {' '}
              4.4/5 (101) on Google{' '}
            </Review>
            <Review
              href="https://www.tripadvisor.ca/Restaurant_Review-g155032-d8334097-Reviews-Dragon_s_Beard_Candy-Montreal_Quebec.html"
              target="_blank"
            >
              {' '}
              4.5/5 (32) on Tripadvisor{' '}
            </Review>
            <Review
              href="https://www.yelp.ca/biz/dragons-beard-candy-montr%C3%A9al-2?start=20"
              target="_blank"
            >
              {' '}
              4/5 (99) on Yelp{' '}
            </Review>
          </ItemContainer>
        </HorizontalSplitContainer>
        <TextCredit>
          Credits to
          <CreditLink
            href="https://www.acanadianfoodie.com/2015/05/05/dragon-beard-candy/"
            target="_blank"
          >
            {' '}
            A Canadian Foodie
          </CreditLink>
          ,
          <CreditLink
            href="https://www.yelp.ca/user_details?userid=1E_psaptRT9kFVEEBj05vw"
            target="_blank"
          >
            {' '}
            David M.
          </CreditLink>
          ,
          <CreditLink
            href="https://www.instagram.com/fatresters/"
            target="_blank"
          >
            {' '}
            @fatresters{' '}
          </CreditLink>
          for pictures.
        </TextCredit>
      </Container>
    );
  }
}
