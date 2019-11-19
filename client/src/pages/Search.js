import React, { Component } from "react";
import API from "../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class Search extends Component {
    state = {
        books: []
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.title)
            .then(response => {

                this.setState({
                    books: response.data.items.map(item => {
                        // console.log(item.volumeInfo)
                        return {
                            title: item.volumeInfo.title,
                            authors: item.volumeInfo.authors,
                            description: item.volumeInfo.description,
                            image: item.volumeInfo.imageLinks.thumbnail,
                            link: item.volumeInfo.infoLink
                        }

                    })
                })
                console.log(this.state.books)
            })
    }

    handleSaveBook = data => {
        // event.preventDefault();
         console.log(data);
          API.addBookToDB({
            title: data.title,
            authors: data.authors,
            description: data.description,
            image: data.image,
            link: data.link
          })
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
        
      };


    render() {
        return (<Container fluid>
          


            <form>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />

                <FormBtn
                    onClick={this.handleFormSubmit}
                >
                    Search
                  </FormBtn>
            </form>

            {this.state.books.length ? (
                <List>
                    {this.state.books.map(book => (
                        <div>

                            <ListItem key={book._id}>
                                <FormBtn onClick={() => this.handleSaveBook(book)}>
                                    Save
                                </FormBtn>
                                <FormBtn>
                                    Delete
                                </FormBtn>

                                <img src={book.image} alt = ""/>
                                <strong><a href={book.link}>{book.title} by {book.authors}</a></strong>
                                <p>{book.description}</p>
                            </ListItem>

                        </div>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Container>)
    }
}

export default Search;