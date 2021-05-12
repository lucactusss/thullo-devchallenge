import { StyledGridHeader } from './GridHeader.styled';

export type GridHeaderProps = {
  label: string;
  width?: number;
};

const GridHeader: React.FC<GridHeaderProps> = ({
  label,
  width,
}: GridHeaderProps) => {
  if (!width) {
    width = 50;
  }
  return (
    <StyledGridHeader align="center" width={width}>
      {label}
    </StyledGridHeader>
  );
};

export default GridHeader;
