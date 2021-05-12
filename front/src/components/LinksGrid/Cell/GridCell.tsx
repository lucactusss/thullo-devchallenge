import { StyledGridCell } from './GridCell.styled';
import moment from 'moment';
import KeywordGridCell, { Keyword } from './KeywordGridCell';
import React, { ReactNode } from 'react';
import ActionGridCell from './ActionGridCell';
import { LinkDataRow } from '../MainGrid';

export type GridCellProps = {
  value: unknown;
  rowData: LinkDataRow;
  componentType: string;
  onRefreshGrid: any;
};

class GridCell extends React.Component<GridCellProps> {
  refreshGrid = (): void => {
    this.props.onRefreshGrid();
  };

  render(): ReactNode {
    switch (this.props.componentType) {
      case 'string':
        return (
          <StyledGridCell align="center">
            {this.props.value as string}
          </StyledGridCell>
        );
      case 'url':
        return (
          <StyledGridCell align="center">
            <a href={this.props.value as string} target="_blank">
              {this.props.value as string}
            </a>
          </StyledGridCell>
        );
      case 'keyword':
        return (
          <StyledGridCell align="center">
            <KeywordGridCell value={this.props.value as Array<Keyword>} />
          </StyledGridCell>
        );
      case 'duration':
        const seconds = this.props.value as number;
        if (seconds) {
          return (
            <StyledGridCell align="center">
              {(seconds / 60).toFixed()}min{seconds % 60}
            </StyledGridCell>
          );
        }
        return <StyledGridCell align="center"></StyledGridCell>;
      case 'datetime':
        return (
          <StyledGridCell align="center">
            {formatDatetime(this.props.value as string)}
          </StyledGridCell>
        );
      case 'actions':
        return (
          <StyledGridCell align="center">
            <ActionGridCell
              id={this.props.value as string}
              refreshGrid={this.refreshGrid}
              rowData={this.props.rowData}
            />
          </StyledGridCell>
        );
      default:
        return (
          <StyledGridCell align="center">
            {this.props.value as string}
          </StyledGridCell>
        );
    }
  }
}

function formatDatetime(datetime: string): string {
  const date = moment(datetime).format('dddd, MMMM Do YYYY, h:mm:ss a');
  console.log(date);
  return date;
}

export default GridCell;
