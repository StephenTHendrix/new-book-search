import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Books On My List</h1>
        </Jumbotron>
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                
                  <img src={book.image} alt = ""/>
                  <strong>
                    <a href={book.link}>
                      {book.title} by {book.authors}
                    </a>
                  </strong>
                  <p>{book.description}</p>
               
                
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    );
  }
}

export default Saved;
