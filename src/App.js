import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showMdal: false,
  };

  toggleModal = () => {
    this.setState(({ showMdal }) => ({
      showMdal: !showMdal,
    }));
  };

  render() {
    const { showMdal } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        {showMdal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
