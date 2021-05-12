import axios from 'axios';
import React, { ReactNode } from 'react';
import { StyledActionGridCell } from './ActionGridCell.styled';
import { BiEdit, BiTrash } from 'react-icons/bi';
import ReactModal from 'react-modal';
import EditLink from '../../EditLink/EditLink';
import { LinkDataRow } from '../MainGrid';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '40%',
    height: '30vh',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type GridCellProps = {
  id: string;
  refreshGrid: any;
  rowData: LinkDataRow;
};

type GridCellState = {
  showModal: boolean;
};

class GridCell extends React.Component<GridCellProps, GridCellState> {
  onEditClick = (): void => {
    console.log(this.props.id);
  };

  onDeleteClick = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    axios.delete(`http://localhost:4003/links/${this.props.id}`).then(() => {
      this.props.refreshGrid();
    });
  };

  constructor(props: GridCellProps) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(): void {
    this.setState({ showModal: true });
  }

  handleCloseModal(): void {
    this.setState({ showModal: false });
    this.props.refreshGrid();
  }

  render(): ReactNode {
    return (
      <StyledActionGridCell>
        <span className="icon">
          <BiEdit onClick={this.handleOpenModal}></BiEdit>
        </span>
        <span className="icon">
          <BiTrash onClick={this.onDeleteClick}></BiTrash>
        </span>
        <ReactModal
          style={customStyles}
          isOpen={this.state.showModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="Edit Link"
        >
          <EditLink
            handleCloseModal={this.handleCloseModal}
            rowData={this.props.rowData}
          />
        </ReactModal>
      </StyledActionGridCell>
    );
  }
}

export default GridCell;
