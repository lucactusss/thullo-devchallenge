import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { ReactNode } from 'react';
import { StyledAddLink } from './AddLink.styled';

type AddLinkProps = {
  refreshGrid: any;
};

type AddLinkState = {
  url: string;
  errorMessage: string;
};

class AddLink extends React.Component<AddLinkProps, AddLinkState> {
  handleOnChange(event: any): void {
    this.setState({ url: event.target.value });
  }

  handleOnClick() {
    // Call API for create Link
    if (
      !this.state?.url ||
      !(
        this.state.url.includes('flickr.com/photos') ||
        this.state.url.includes('vimeo.com')
      )
    ) {
      this.setState({
        errorMessage: "Le lien n'est pas valide !",
      });
    } else {
      this.setState({ errorMessage: '' });
      let linkType = 'VIDEO';
      if (this.state.url.includes('flickr.com/photos')) {
        linkType = 'PHOTO';
      }
      axios
        .post('http://localhost:4003/links/', {
          url: this.state.url,
          linkType,
        })
        .then(() => {
          this.setState({ url: '' });
          this.props.refreshGrid();
        });
    }
  }

  render(): ReactNode {
    return (
      <StyledAddLink>
        <TextField
          label="Ajouter un lien"
          variant="outlined"
          value={this.state?.url}
          onChange={(e) => this.handleOnChange(e)}
          type="text"
          error={this.state?.errorMessage?.length > 0}
          helperText={this.state?.errorMessage}
        />
        <Button variant="contained" onClick={(e) => this.handleOnClick()}>
          Ajouter
        </Button>
      </StyledAddLink>
    );
  }
}

export default AddLink;
