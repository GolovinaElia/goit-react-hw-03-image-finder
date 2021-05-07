import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import axios from 'axios';

class App extends Component {
  state = {
    showMdal: false,
    hits: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?q=cat&page=1&key=20750670-b2684aaeba19f295ef3b80ff2&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(response => this.setState({ hits: response.data.hits }));
  }

  toggleModal = () => {
    this.setState(({ showMdal }) => ({
      showMdal: !showMdal,
    }));
  };

  render() {
    const { showMdal, hits } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery hits={hits} />
        {showMdal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
