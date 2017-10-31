import React, { Component } from 'react';
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
        console.log('event', event.target.value);
        debugger;
        if (event) {

            this.setState({ filteredData: this.state.data, filter: event.target.value }, () => {
                let filtered = this.state.filteredData;
                if (this.state.search !== '') {
                    //todo remove
                    //debugger;
                    console.log('event.target.value=', this.refs.search.value);
                    filtered = filtered.filter(person => person.name.includes(this.refs.search.value) > 0);
                }

                debugger;
                switch (this.state.filter) {
                    case 'all':
                    console.log('alls');

                        break;

                    case 'admin':
                    console.log('admin');
                        if (this.state.country !== '') {
                            filtered = filtered.filter(person => person.country === this.state.country)
                        }

                        break;

                    case 'nonadmin':
                    console.log('nonadmin');
                        filtered = filtered.map(person => ({
                            ...person,
                            netWorth: (person.netWorth * Number(this.state.currencyFactor))
                        }))
                        break;

                    case 'archived':
                    console.log('archived');
                    //filtered = _.sortBy(filtered, [this.state.orderBy])
                }

                this.setState({ filteredData: filtered });
            });
        }

    }

    render = () => {
        console.log('this.state.filteredData=', this.state.filteredData);
        return (
            <div className='row'>
                <div className='col-md-3 well'>

                    <ul>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='all' >All users</button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='admin' >Administrators</button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='nonadmin' >Nonadmin</button>
                        </li>
                        <li>
                            <button className='btn btnwidth' onClick={this.handleFilter} value='archived' >archived</button>
                        </li>
                    </ul>



                </div>
                <div className='size col-md-9'>
                    <div>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input type="text" ref="search" placeholder='search' onChange={this.handleFilter} />
                    </div>

                    <div className="list">
                        <UserList data={this.state.filteredData}></UserList>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;
