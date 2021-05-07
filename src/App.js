import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';
import Modal from './components/Modal';
import axios from 'axios';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    showMdal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, hits: [] });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20750670-b2684aaeba19f295ef3b80ff2&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        })),
      );
  };

  toggleModal = () => {
    this.setState(({ showMdal }) => ({
      showMdal: !showMdal,
    }));
  };

  render() {
    const { showMdal, hits } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {/* <ImageGallery hits={hits} /> */}
        <ul>
          {hits.map(({ id, webformatURL, user }) => (
            <li key={id}>
              <img src={webformatURL} alt={user} />
            </li>
          ))}
        </ul>
        {/* <Button onClick={this.fetchHits} /> */}
        <button type="button" onClick={this.fetchHits}>
          Load more
        </button>
        {showMdal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
