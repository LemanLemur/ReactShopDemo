import React from 'react';

class ChevronLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={this.props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        );
    }
}

export default ChevronLeft;
