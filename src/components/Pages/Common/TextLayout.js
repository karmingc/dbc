import styled from "@emotion/styled";
import { font } from 'style/text.js'

export const TextTitle = styled.div`
    font-size: ${font.size.large};
    font-weight: ${font.weight.bold};
    margin-bottom: ${font.spacing.titleBottom}  
`
export const TextDescription = styled.div`
    font-size: ${font.size.small};
    margin-top: ${font.spacing.descriptionTop};
    line-height: ${font.spacing.descriptionInline};
    text-align: ${font.align}
`

export const TextCredit = styled.div`
    font-size: ${font.size.xsmall};
    margin-top: ${font.spacing.descriptionTop};
    line-height: ${font.spacing.descriptionInline};
    text-align: center;
    color: ${font.color.blurGrey}
`
export const CreditLink = styled.a`
    font-size: ${font.size.xsmall};
    color: ${font.color.blurGrey};
    text-decoration: none;
    font-style: italic;
    transition: color ease 0.5s;
    :hover {
        color: #007AFF
    };
`
