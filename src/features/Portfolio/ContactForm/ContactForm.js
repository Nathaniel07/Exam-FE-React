import { usersAPI } from '../../../shared/services/API.js';
import './ContactForm.css';

function ContactForm () {

    let wasSubmitted = false;

    const submitContactForm = (e) => {
        e.preventDefault();
        if(!wasSubmitted) {

            document.getElementsByClassName('sent-message')[0].style.display = 'none';
            document.getElementsByClassName('loading')[0].style.display = 'block';
            wasSubmitted = true;

            usersAPI(e.target.email.value, e.target.message.value) // api/users
            .then((response) => {
                if(response.status === 201){
                    console.log('response', response.data);
                    document.getElementsByClassName('sent-message')[0].style.display = 'block'; //setAttribute('style', 'display: block;');
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
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-1 text-center" style={{justifyContent: 'center'}}>

                <div className="col-lg-8 mt-5 mt-lg-0 text-center">
                    <form className="email-form" onSubmit={submitContactForm}>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" name="first-name"  id="first-name" placeholder="First Name" onChange={() => updateVariable()} required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="text" className="form-control" name="last-name" id="last-name" placeholder="Last Name" onChange={() => updateVariable()} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={() => updateVariable()} required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={() => updateVariable()} required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message">Something went wrong. Please try again later</div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
    )
}

export default ContactForm;