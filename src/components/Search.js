import React, {Component} from 'react';
import users from '../json/users.json';

class Search extends Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {data: users,filteredData:[]}
    }


    filter = () => {
        console.log('filter', this.refs.search.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref='search' onChange={this.filter}/>
                {this.state.data.map( user => {
                    return (<p>{user.name}</p>)
                })}
            </div>
        );
    }
}

export default Search;
