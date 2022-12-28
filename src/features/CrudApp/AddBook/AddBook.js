
import {
    Link
  } from 'react-router-dom';

import { addData } from '../../../shared/services/BookApi.js';

function AddBook () {

    let wasSubmitted = false;

    const submitBookForm = (e) => {
        e.preventDefault();
        if(!wasSubmitted) {

            document.getElementsByClassName('sent-message')[0].style.display = 'none';
            document.getElementsByClassName('loading')[0].style.display = 'block';
            wasSubmitted = true;
            
            addData(e.target.bookTitle.value, e.target.genre.value, e.target.author.value) // addData function
            .then((response) => {
                if(response.status === 200){
                    console.log('Data successfully added.');
                    document.getElementsByClassName('sent-message')[0].style.display = 'block';
                    document.getElementsByClassName('loading')[0].style.display = 'none';
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

    return (
        <div className="container">
            <div className="my-4">
                <h2>Add a Book</h2>
                <p><Link to="/crud-app" className="link-router"><i className="fa fa-angle-left" aria-hidden="true"></i>&nbsp;All Books</Link></p>
            </div>
            <form className="book-form" onSubmit={submitBookForm} onChange={() => updateVariable}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>Book Title</label>
                    <input type="text" className="form-control" name="bookTitle" id="book-title" required />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Genre</label>
                    <input type="text" className="form-control" name="genre" id="genre" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>Author</label>
                    <input type="text" className="form-control" name="author" id="author" required />
                    </div>
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message">Something went wrong. Please try again later</div>
                    <div className="sent-message">Book has been added.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AddBook;
