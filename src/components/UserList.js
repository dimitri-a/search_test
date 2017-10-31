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
                            icon
                        </div>

                        <div className="col-md-6">

                            <div className="row">
                                Name:{person.name}

                            </div>

                            <div className="row">
                                email:bla@mail.com
                            </div>

                        </div>


                        <div className="col-md-4">
                            last loggedin :yepyep
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



