import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import fetchHits from './services/api';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    largeImageUrl: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    fetchHits(options)
      .then(hits =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollBtn = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClickImg = url => {
    this.setState({ largeImageUrl: url });
  };

  render() {
    const { showModal, hits, isLoading, error } = this.state;
    const renderButton = hits.length > 0 && !isLoading;
    const scroll = this.scrollBtn();

    return (
      <>
        {error && <h1>404 error: File not found</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        )}

        <ImageGallery hits={hits} />

        {renderButton && <Button onClick={this.fetchHits} />}

        {Button && scroll}

        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
