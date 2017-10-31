import React, { Component } from 'react';

export default class UserList extends Component {

    render() {
        let display = '';
        if (this.props.data) {
            display = this.props.data.map
                (
                (person) => (
                    <div key={person.name} className="row row_bottom ">
                        <div className="col-md-2 top hidden-xs">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-6 hidden-xs">
                            <div className="">
                                <h3>
                                    Name:{person.name}
                                </h3>
                            </div>
                            <div className="row">
                                email:bla@mail.com
                            </div>
                        </div>
                        <div className="col-md-4 top hidden-xs">
                            last loggedin :{person.lastLoggedIn}
                        </div>
                        <div className='visible-xs'>

                            <div className='col-xs-2 top'>
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </div>

                            <div className='col-xs-10'>
                                <div className="row">
                                    <h3>
                                        Name:{person.name}
                                    </h3>
                                </div>
                                <div className="row">
                                    email:bla@mail.com
                            </div>
                            </div>

                        </div>




                    </div>

                )
                );
        }

        return (<div>
            {display}
        </div>
        );
    }
}



