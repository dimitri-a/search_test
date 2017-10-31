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
                filtered = filtered.filter(person => person.name === event.value);
            }
            this.setState({filteredData: filtered});
        });

    }

    render = () => {
        console.log('this.state.filteredData=',this.state.filteredData);
        return (
            <div className="form-group container">
                <input type="text" onChange={this.handleFilter}/>
                <div className="list">
                    <UserList data={this.state.filteredData}></UserList>
                </div>
            </div>

        );
    }
}

export default Search;
