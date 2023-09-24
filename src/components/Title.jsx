import { TitleName, TextName, TintName } from './TitleName.styled';

export const Title = ({ title, text, caption }) => {
  return (
    <div>
      <TitleName>{title}</TitleName>
      <TextName>{text}</TextName>
      <TintName>{caption}</TintName>
    </div>
  );
};
