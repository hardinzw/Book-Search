import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/Form";
import { List } from "../components/List/index";
import Book from "../components/Book/index";
import { Container } from "../components/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


class Search extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for books via the Google Books API",
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => {
        this.setState({
          books: [],
          message: "Your search did not find any results.",
        });
        console.log(err);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      googleId: book.id,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container Fluid>
        <div className="row">
          <div className="col-12">     
            <div className="heading">
              <div className="book-search-image">
                <img
                  src="http://abebooks.typepad.com/photos/uncategorized/2007/11/08/magnifying_glass_2.jpg"
                  alt="React Google Books Search"
                />
              </div>
              <div className="headline">
                <h1>
                  React Google Books Search
                </h1>
                <h2>
                  Search for and Save Books of Interest
                </h2>
                </div>
              
                <SearchForm
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />  
              </div>                      
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-centered card-content">
            <div className="result-div">
              <h2 className="results text-center">Results</h2>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn save-btn heading-subtitle ml-2"
                        >
                        <FontAwesomeIcon icon={faBookmark} />
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <div className="mockup-content">
                    <h2 className="heading-title text-center">
                      {this.state.message}
                    </h2>
                  </div>
                )}
            </div>
</div>
</div>
      </Container>
    )
  }
}

export default Search;