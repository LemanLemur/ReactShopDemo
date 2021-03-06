import React from 'react';

class ChevronRight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        );
    }
}

export default ChevronRight;
