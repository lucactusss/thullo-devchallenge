import axios from 'axios';
import React from 'react';
import { ReactNode } from 'react';
import CreatableSelect from 'react-select/creatable';
import { LinkDataRow } from '../LinksGrid/MainGrid';
import { StyledEditLink } from './EditLink.styled';

type EditLinkProps = {
  handleCloseModal: any;
  rowData: LinkDataRow;
};

type EditLinkState = {
  keywordData: any;
  selectValue: any;
};

class EditLink extends React.Component<EditLinkProps, EditLinkState> {
  selectValue: any;

  constructor(props: EditLinkProps) {
    super(props);
    this.getKeywordData();
  }

  getKeywordData() {
    axios
      .post('http://localhost:4003/keywords/data', {
        pageSize: 100,
        pageNumber: 1,
        filterText: '',
      })
      .then(({ data }) => {
        this.setState({
          keywordData: data.map((e: any) => {
            return {
              value: e._id,
              label: e.label,
            };
          }),
        });
      });
  }

  onAddKeyword() {
    console.log(this.state.selectValue);
    axios
      .post(`http://localhost:4003/links/${this.props.rowData._id}/keyword`, {
        keywordId: this.state.selectValue.value,
      })
      .then(({ data }) => {
        this.setState({
          selectValue: null,
        });
      });
  }

  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ selectValue: newValue });
  };

  handleCreate = (inputValue: any) => {
    console.log(inputValue);
    const { keywordData } = this.state;
    axios
      .post('http://localhost:4003/keywords', {
        label: inputValue,
        color:
          '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
      })
      .then(({ data }) => {
        const newOption = {
          value: data._id,
          label: data.label,
        };
        this.setState({
          keywordData: [...keywordData, newOption],
          selectValue: newOption,
        });
      });
  };

  render(): ReactNode {
    return (
      <StyledEditLink>
        <div className="modal-title">Ajouter un ou plusieurs mots-clés</div>
        <div className="keyword-list">
          <CreatableSelect
            isClearable
            options={this.state?.keywordData}
            className="select"
            value={this.state?.selectValue}
            onChange={this.handleChange}
            onCreateOption={this.handleCreate}
          />
          <button onClick={(e) => this.onAddKeyword()}>Ajouter !</button>
        </div>
        <div className="footer">
          <button onClick={this.props.handleCloseModal}>
            Revenir à la grille
          </button>
        </div>
      </StyledEditLink>
    );
  }
}

export default EditLink;
