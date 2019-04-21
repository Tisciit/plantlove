import React, { Component } from 'react';

class Plant extends Component {
    state = {}
    render() {
        return (
            <div className="card">
                <div className="badge badge-secondary">I am a plant</div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary btn-sm">Left</button>
                    <button type="button" className="btn btn-secondary btn-sm">Middle</button>
                    <button type="button" className="btn btn-secondary btn-sm">Right</button>
                </div>
            </div>
        );
    }
}

export default Plant;
