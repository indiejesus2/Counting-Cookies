import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {fetchRecords} from '../../actions/fetchRecords'
import DailyRecordsContainer from '../../containers/DailyRecordsContainer';

class User extends Component {

    // shouldComponentUpdate(nextProps, nextState) {

    // componentDidUpdate(prevProps) {
    //     debugger
    // }
        // this.props.fetchRecords(this.props.user)
        // return this.state.value != nextState.value;
    
    render() {
        const user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]

        return (
            <div key={user.id}>
                <h1>{user.name}</h1>
                 <p>{user.target} Daily Calorie Intake</p>
                 <DailyRecordsContainer user={user}/>
            </div>
        );
    }
};



const mapStateToProps = state => {
    return {
        records: state.recordsReducer.records.map(record => record.attributes)
    }
}

const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default User
