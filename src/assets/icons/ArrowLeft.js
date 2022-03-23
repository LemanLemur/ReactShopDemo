import React from 'react';

class ArrowLeft extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>;
    }
}

export default ArrowLeft;
