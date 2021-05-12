import { Table, TableRow, TableBody, TableHead } from '@material-ui/core';
import React, { ReactNode } from 'react';
import GridCell from './Cell/GridCell';
import GridHeader from './Header/GridHeader';
import { StyledLinksGrid } from './LinksGrid.styled';
import { LinkDataRow } from './MainGrid';

type LinksGridProps = {
  APIData: Array<LinkDataRow>;
  count: number;
  refreshGrid: any;
};

type LinksGridState = {
  APIData: Array<LinkDataRow>;
  count: number;
};

type ColumnDefinition = {
  label: string;
  code: string;
  width?: number;
  componentType: string;
};

class LinksGrid extends React.Component<LinksGridProps, LinksGridState> {
  columns: Array<ColumnDefinition> = [
    { label: 'Lien', code: 'url', width: 200, componentType: 'url' },
    { label: 'Titre', code: 'title', width: 200, componentType: 'string' },
    { label: 'Auteur', code: 'author', width: 200, componentType: 'string' },
    {
      label: 'Date de création',
      code: 'creationDate',
      width: 100,
      componentType: 'datetime',
    },
    { label: 'Tags', code: 'keywords', width: 200, componentType: 'keyword' },
    { label: 'Largeur', code: 'width', width: 70, componentType: 'string' },
    { label: 'Hauteur', code: 'height', width: 70, componentType: 'string' },
    { label: 'Durée', code: 'duration', width: 70, componentType: 'duration' },
    { label: 'Action', code: '_id', width: 80, componentType: 'actions' },
  ];

  constructor(props: LinksGridProps) {
    super(props);
    this.setState({
      APIData: props.APIData,
      count: props.count,
    });
  }

  static getDerivedStateFromProps(
    props: LinksGridProps,
    state: LinksGridState
  ): LinksGridState {
    return {
      APIData: props.APIData,
      count: props.count,
    };
  }

  refreshGrid = (): void => {
    this.props.refreshGrid();
  };

  render(): ReactNode {
    return (
      <StyledLinksGrid>
        <Table style={{ border: 'solid 1px lightgray' }}>
          <TableHead>
            <TableRow>
              {this.columns.map((col: ColumnDefinition) => {
                return (
                  <GridHeader label={col.label} width={col.width}></GridHeader>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.APIData.map((row: LinkDataRow) => {
              return (
                <TableRow>
                  {this.columns.map((col: ColumnDefinition) => {
                    const cellValue: unknown = (row as any)[col.code];
                    return (
                      <GridCell
                        value={cellValue}
                        rowData={row}
                        componentType={col.componentType}
                        onRefreshGrid={this.refreshGrid}
                      ></GridCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledLinksGrid>
    );
  }
}

export default LinksGrid;
