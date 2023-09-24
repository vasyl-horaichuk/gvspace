import { TitleName, TextName } from './TitleName.styled';

export const Title = ({ caption, text }) => {
  return (
    <div>
      <TitleName>{caption}</TitleName>
      <TextName>{text}</TextName>
    </div>
  );
};
