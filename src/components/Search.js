import React, {Component} from 'react';
import users from '../json/users.json';
import UserList from '../components/UserList';

class Search extends Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            data: users,
            filteredData: users,
            filter: ''
        }
    }

    handleFilter = (event) => {
        if (event) {
            this.setState({filteredData: this.state.data, filter: event.target.value}, () => {
                let filtered = this.state.filteredData;
                if (this.state.search !== '') {
                    filtered = filtered.filter(person => person.name.includes(this.refs.search.value) > 0);
                }
                switch (this.state.filter) {
                    case 'all':
                        break;

                    case 'favorites':
                        filtered = filtered.filter(person => person.favorite=== true)
                        break;

                    case 'admin':
                        filtered = filtered.filter(person => person.admin === true)
                        break;

                    case 'nonadmin':
                        filtered = filtered.filter(person => person.admin === false)
                        break;

                    case 'archived':
                        filtered = filtered.filter(person => person.archived === true)
                }

                this.setState({filteredData: filtered});
            });
        }
    }

    render = () => {
        return (
            <div className='row'>
                <div className='col-md-3 hidden-xs side'>
                    <ul>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='all'>All users</button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='favorites'>Favorites
                            </button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='admin'>Administrators
                            </button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='nonadmin'>Non-admins
                            </button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='archived'>Archived
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <div>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input type="text" ref="search" placeholder='search' onChange={this.handleFilter}/>
                    </div>
                    <div>
                        <UserList data={this.state.filteredData}></UserList>
                    </div>
                </div>
            </div>

        );
    }
}
export default Search;
