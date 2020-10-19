import React, { Components } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const SubPage1 = () => (
    <div>
        <h2>Sub page 1</h2>
    </div>
);

const SubPage2 = ({match}) => (
    <div>
        <h2>Sub page 2 with parameter is : { match.params.id }</h2>
    </div>
);

export default ({match}) => {
    return (
        <>
            <h2>Page With sub page</h2>
            <ul>
                <li><Link to={`${match.url}/subPage1`}>SubPage 1</Link></li>
                <li><Link to={`${match.url}/subPage2/123`}>SubPage 2</Link></li>
            </ul>

            <Route path={`${match.url}/subPage1`} component={SubPage1} />
            <Route path={`${match.url}/subPage2/:id`} component={SubPage2} />

        </>
    );
};