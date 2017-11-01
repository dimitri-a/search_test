import React, {Component} from 'react';

export default class UserList extends Component {
    render() {
        let display = '';
        if (this.props.data) {
            display = this.props.data.map
            (
                (person) => (
                    <div key={person.name} className="row row_bottom ">
                        <div className="col-md-2 hidden-xs">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-6 hidden-xs left">
                            <div className="">
                                <span className='imp'>
                                    {person.name}
                                </span>
                            </div>
                            <div className="">
                                email:{person.email}
                            </div>
                        </div>
                        <div className="col-md-4 hidden-xs left">
                            {person.lastLoggedIn}
                        </div>
                        <div className='visible-xs'>
                            <div className='col-xs-2 left'>
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </div>

                            <div className='col-xs-10 left'>
                                <div className="row">
                                    <span className='imp'>
                                        {person.name}
                                    </span>
                                </div>
                                <div className="row">
                                    {person.email}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            );
        }

        return (
            <div>
                {display}
            </div>
        );
    }
}



