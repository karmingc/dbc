import styled from '@emotion/styled';
import { layout } from 'style/layout.js';

export const HorizontalSplitContainer = styled.div`
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
export const FullImage = styled.img`
  width: 100%;
  margin-bottom: ${layout.block.bottom};
`;
export const HalfImage = styled.img`
  width: calc(50% - 5px);
  /* animation: appear 4s;
    @keyframes appear {
        from {         
            position: relative;
            top: 200px;    
            opacity: 0;
        }
        to {
            position: relative;
            top: 0px;
            opacity: 1;
        }
    }; */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
