import { TableCell } from '@material-ui/core';
import styled from 'styled-components';

interface StyledGridHeaderProps {
  width: number;
}

export const StyledGridHeader = styled(TableCell)`
  font-size: 18px !important;
  font-weight: bold !important;
  color: gray !important;
  width: ${(props: StyledGridHeaderProps) => `${props.width} px`};
`;
