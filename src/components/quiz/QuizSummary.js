import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const QuizSummary = props => {
   
    return ( 
        <Fragment>
            <h1>Thank you for playing!</h1>
            <div className="auth-container">
            <Link to="/" className="auth-buttons">Go back to Main Menu</Link>
            </div>
        </Fragment>
     );
}
 
export default QuizSummary;