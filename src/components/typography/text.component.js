import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const heading = (theme) => `
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.h4};
  color: ${theme.colors.text.heading};
`;

const title = (theme) => `
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.text.heading};
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
   font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.caption};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;
const success = (theme) => `
    color: ${theme.colors.text.success};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.body};
`;

const variants = {
  heading,
  title,
  body,
  caption,
  error,
  success,
  hint,
  label,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};