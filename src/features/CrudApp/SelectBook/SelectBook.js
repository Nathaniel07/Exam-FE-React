
import {
    Link, useParams, useHistory
} from 'react-router-dom';
import { useEffect } from 'react';
   
import './SelectBook.css';

import { getData, updateData, deleteData } from '../../../shared/services/BookApi.js';

function SelectBook () {

    const { id } = useParams();
    const history = useHistory();
    
    const getBook = () => {
        getData(id) // getData API
        .then((response) => {
            if(response.status === 200){
                console.log('Book:\n', response.data);
                if(response.data.length > 0){
                    document.getElementsByClassName('book-title')[0].innerHTML = response.data[0].book_title;
                    document.getElementsByClassName('input-title')[0].value = response.data[0].book_title;
                    document.getElementsByClassName('input-genre')[0].value = response.data[0].genre;
                    document.getElementsByClassName('input-author')[0].value = response.data[0].author;
                }
                else if(response.data.length === 0){
                    document.getElementsByClassName('book-title')[0].innerHTML = 'No book found.';
                    document.getElementsByClassName('book-form')[0].style.display = 'none';
                }
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
    
    useEffect(() => {
        getBook(); // getData function
    }, [id]);

    let wasSubmitted = false;

    const updateBookForm = (e) => {
        e.preventDefault();
        if(!wasSubmitted) {
            
            document.getElementsByClassName('sent-message')[0].style.display = 'none';
            document.getElementsByClassName('loading')[0].style.display = 'block';
            wasSubmitted = true;
            
            updateData(id, e.target.bookTitle.value, e.target.genre.value, e.target.author.value) // updateData function
            .then((response) => {
                if(response.status === 200){
                    console.log('Data successfully updated.\nBook id: ', id);
                    document.getElementsByClassName('sent-message')[0].style.display = 'block';
                    document.getElementsByClassName('loading')[0].style.display = 'none';
                    document.getElementsByClassName('delete-question')[0].style.display = 'none';
                    document.getElementsByClassName('book-title')[0].innerHTML = e.target.bookTitle.value;
                }
            })
            .catch((error) => {
                console.error(error);
                document.getElementsByClassName('error-message')[0].style.display = 'block';
                document.getElementsByClassName('loading')[0].style.display = 'none';
            });
        }
        return false;
    };

    function updateVariable() { 
        wasSubmitted = false;
        document.getElementsByClassName('sent-message')[0].style.display = 'none';
        document.getElementsByClassName('error-message')[0].style.display = 'none';
        document.getElementsByClassName('loading')[0].style.display = 'none';
    }

    const deleteBookButton = (e) => {
        e.preventDefault();
        console.log('Are you sure you want to delete this Book?');
        document.getElementsByClassName('delete-question')[0].style.display = 'block';
        document.getElementsByClassName('sent-message')[0].style.display = 'none';
    };

    const deleteBookYes = (e) => {
        e.preventDefault();
        console.log('Yes');
        deleteData(id) // deleteData function
        .then((response) => {
            if(response.status === 200){
                console.log('Data successfully deleted.\nBook id: ', id);
                history.push('/crud-app');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const deleteBookNo = (e) => {
        e.preventDefault();
        console.log('No');
        document.getElementsByClassName('delete-question')[0].style.display = 'none';
    };

    return (
        <div className="container">
            <div className="my-4">
                <h2 className='book-title'>&nbsp;</h2>
                <p><Link to="/crud-app" className="link-router"><i className="fa fa-angle-left" aria-hidden="true"></i>&nbsp;Back</Link></p>
            </div>
            <form className="book-form" onSubmit={updateBookForm}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Book Title</label>
                        <input type="text" className="form-control input-title" name="bookTitle" id="book-title" onChange={() => updateVariable()} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Genre</label>
                        <input type="text" className="form-control input-genre" name="genre" id="genre" onChange={() => updateVariable()} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Author</label>
                        <input type="text" className="form-control input-author" name="author" id="author" onChange={() => updateVariable()} required />
                    </div>
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message">Something went wrong. Please try again later</div>
                    <div className="sent-message">Book has been updated.</div>
                </div>
                <div className="delete-question my-3">
                     <div className="delete-container">
                        <div className="delete-book">Are you sure you want to delete this Book?&nbsp;&nbsp;</div>
                        <div className='mr-2'>
                            <button type="button" className="btn btn-primary btn-sm" onClick={deleteBookYes}>Yes</button>
                        </div>
                        <div><button type="button" className="btn btn-danger btn-sm" onClick={deleteBookNo}>No</button></div>
                    </div>
                </div>
                <div className="delete-container">
                    <div className='mr-2'><button type="submit" className="btn btn-primary">Update</button></div>
                    <button type="button" className="btn btn-danger" onClick={deleteBookButton}>Delete</button>
                </div>
            </form>  
        </div>
    )
}

export default SelectBook;
