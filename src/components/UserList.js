import React, {Component} from 'react';

export default class UserList extends Component {

    render() {
        let display = '';
        if (this.props.data) {
            display = this.props.data.map
            (
                (person) => (
                    <div key={person.name} className="row">

                        <div className="col-md-2">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </div>

                        <div className="col-md-6">

                            <div className="row">
                                <h3>
                                Name:{person.name}
                                </h3>

                            </div>

                            <div className="row">
                                email:bla@mail.com
                            </div>

                        </div>


                        <div className="col-md-4">
                            last loggedin :{person.lastLoggedIn}
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



