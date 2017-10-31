import React, {Component} from 'react';
import users from '../json/users.json';
import UserList from '../components/UserList';

class Search extends Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            data: users,
            filteredData: []
        }
    }

    handleFilter = (event) => {
        //initialise with all data
        this.setState({filteredData: this.state.data}, () => {
            let filtered = this.state.filteredData;
            if (this.state.search !== '') {
                //todo remove
                //debugger;
                console.log('event.target.value=',this.refs.search.value);
                filtered = filtered.filter(person => person.name.includes(this.refs.search.value) > 0 );
            }
            this.setState({filteredData: filtered});
        });

    }

    render = () => {
        console.log('this.state.filteredData=',this.state.filteredData);
        return (
            <div className="form-group container">
                <input type="text" ref="search" onChange={this.handleFilter}/>
                <div className="list">
                    <UserList data={this.state.filteredData}></UserList>
                </div>
            </div>

        );
    }
}

export default Search;
