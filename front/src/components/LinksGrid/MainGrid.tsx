import React, { ReactNode } from 'react';
import LinksGrid from './LinksGrid';
import axios from 'axios';
import Pagination from './Pagination/Pagination';
import { StyledMainGrid } from './MainGrid.styled';
import AddLink from '../AddLink/AddLink';

export type LinkDataRow = {
  _id?: string;
  url: string;
  author: string;
  creationDate: string;
  width: string;
  height: string;
  duration: string;
};

type MainGridState = {
  data: Array<LinkDataRow>;
  count: number;
  pageSize: number;
  pageNumber: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
class MainGrid extends React.Component<{}, MainGridState> {
  data: Array<LinkDataRow> = [];
  count = 0;
  pageSize = 50;
  pageNumber = 1;

  componentDidMount(): void {
    this.getCountAndData();
  }

  getCountAndData = (): void => {
    axios.get('http://localhost:4003/links/count').then(({ data }) => {
      this.count = data.count;
      this.setState({ count: this.count });
    });

    axios
      .post('http://localhost:4003/links/data', {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
      })
      .then(({ data }) => {
        this.data = data;
        this.setState({ data: this.data });
      });
  };

  onPageChanged = (data: any): void => {
    const { currentPage } = data;
    this.pageNumber = currentPage;
    this.getCountAndData();
  };

  render(): ReactNode {
    return (
      <StyledMainGrid>
        <div>
          <AddLink refreshGrid={this.getCountAndData} />
        </div>
        <div>
          <LinksGrid
            APIData={this.data}
            count={this.count}
            refreshGrid={this.getCountAndData}
          />
        </div>
        <div>
          <Pagination
            totalRecords={this.count}
            pageLimit={this.pageSize}
            pageNeighbours={2}
            onPageChanged={this.onPageChanged}
          />
        </div>
      </StyledMainGrid>
    );
  }
}

export default MainGrid;
