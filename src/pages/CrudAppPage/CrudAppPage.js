
import {
    Link
  } from 'react-router-dom';
  
import {
    useState, useEffect,
  } from 'react';
   
import { getAllData } from '../../shared/services/BookApi.js';

import './CrudAppPage.css';

function CrudAppPage () {

    const [booksList, setBooksList] = useState([]);

    const getAllBooks = () => {
        getAllData() // getAllData API
        .then((response) => {
            if(response.status === 200){
                console.log('Books:\n', response.data);
                setBooksList(response.data);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
    
    useEffect(() => {
        getAllBooks(); // getAllData function
    }, []);


    const convertDateTime = (value) => {

        const dateTime = new Date(value);
        return dateTime.toUTCString();
    };

    return (
        <div className="container">
            <div className='crud-header'>
                <div className="my-4">
                    <h2>CRUD Application</h2> <p className='mb-2'>(Books)</p>
                </div>
                <div className="add-button">
                    <Link to="/crud-app/add-book"><button type="button" className="btn btn-primary">Add Book</button></Link>
                </div>
            </div>
            
            <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                    {/* <th scope="col">Book id</th> */}
                    <th scope="col">Book Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Author</th>
                    <th scope="col">Created</th>
                    <th scope="col">Updated</th>
                    </tr>
                </thead>
                <tbody> 
                    {booksList.length ? booksList.map((data, index) => {
                        return (
                            <tr key={index}>
                                    {/* <th scope="row">{data.id}</th> */}
                                    <td><Link to={`/crud-app/book/${data.id}`} className="link-router">{data.book_title}</Link></td>
                                    <td>{data.genre}</td>
                                    <td>{data.author}</td>
                                    <td>{convertDateTime(data.created_at)}</td>
                                    <td>{data.updated_at && convertDateTime(data.updated_at)}</td>
                            </tr>
                        )
                    })
                    :
                    <tr>
                        <td colSpan="6" className='text-center'>No Books.</td>
                    </tr>
                    }
                   
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default CrudAppPage;