import React, { Component } from 'react';

 class History extends Component {
    render() {
        return(
            <div className="search-results">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-light">Search History</h1>
                    </div>
                </div>
                <div className="row m-3 bg-dark text-light border border-info">
                    <div className="col-12">
                        <p>Click on any of your previous search terms to view the old search.</p>
                    </div>
                </div>
            </div>
        )
    }
}

 export default History; 