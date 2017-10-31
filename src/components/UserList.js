import React, {Component} from 'react';

export default class UserList extends Component {

    render() {
        let display = '';
        if (this.props.data) {
            display = this.props.data.map
            (
                (person) => (
                    <div key={person.name} className="col-md-12">

                        <div>
                            Name:{person.name}
                        </div>
                        <div>
                        role: {person.admin}
                        </div>
                        <div>
                            favorite: {person.favorite}
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



