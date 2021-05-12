import React, { ReactNode } from 'react';
import { StyledKeywordGridCell } from './KeywordGridCell.styled';

type KeywordGridCellProps = {
  value: Array<Keyword>;
};

export type Keyword = {
  _id: string;
  label: string;
  color: string;
};

class KeywordGridCell extends React.Component<KeywordGridCellProps> {
  render(): ReactNode {
    return (
      <StyledKeywordGridCell>
        {this.props.value.map((keyword: Keyword) => {
          const style = {
            backgroundColor: keyword.color,
          };
          return (
            <span className="keyword-label" style={style}>
              {keyword.label}
            </span>
          );
        })}
      </StyledKeywordGridCell>
    );
  }
}

export default KeywordGridCell;
