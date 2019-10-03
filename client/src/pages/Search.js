import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/Form";
import { List } from "../components/List/index";
import Book from "../components/Book/index";


class Search extends Component {
  state = {
    books: [],
    query: "",
    message: "Search for books via the Google Books API"
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks(this.state.query)
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
    this.loadBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      author: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div className="row">
        <div className="col-10 col-centered">
          <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center">
            <div className="order-sm-2 p-2 bd-highlight">
              <img
                className="image-250"
                src=""
                alt="React Google Books Search"
              />
            </div>
            <div className="order-sm-1 p-2 bd-highlight">
              <h1 className="heading-title mx-sm-3 mb-2">
                React Google Books Search
                </h1>
              <h2 className="heading-subtitle mx-sm-3 mb-2">
                Search for and Save Books of Interest.
                </h2>
              <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.query}
              />

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 col-centered card-content mb-4">
            <h1 className="heading-title mx-sm-3 mb-2 text-center">Results</h1>

            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookSave(book.id)}
                        className="btn save-button  heading-subtitle ml-2"
                      >
                        Save
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
    )
  }
}

export default Search;