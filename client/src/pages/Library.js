import React, { Component } from "react";
import { List } from "../components/List/index";
import Book from "../components/Book/index";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from "../components/Grid";

class Library extends Component {
  state = {
    books: []
  };
    
  componentDidMount() {
    this.getSavedBooks();
  }
    
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
      })
    ).catch(err => console.log(err));
  };

  handleBookDelete = async id => {
    const originalBooks = this.state.books;
    try {
      await API.deleteBook(id).then(res => this.getSavedBooks());
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
      this.setState({ books: originalBooks });
    }
  };

  render() {
    const { length: count } = this.state.books;
    return (
      <Container Fluid>
        <div className="row">
          <div className="col-12">            
            <div className="heading">
              <div className="headline">
                <h3>
                  React Google Books Library
                </h3>
                <h4>
                  {count} items currently saved. 
                </h4>
                </div>
              </div>                      
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-centered card-content">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book._id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookDelete(book._id)}
                        className="btn delete-btn heading-subtitle ml-2"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <div className="mockup-content">
                <h2 className="brand-title text-center">
                  No saved books in the database
                </h2>
              </div>
            )}
          </div>
        </div>
        </Container>
    );
  }
}

export default Library