import React from 'react';
import "./Home.css";
import { addEmployee } from '../../redux';
import { updateEmployee } from '../../redux';
import { deleteEmployee } from '../../redux';
import { connect } from 'react-redux';
import ListEmployee from "../list-employee/ListEmployee";

function Home(props) {
    return (
        <div className="home">
            <div className="title-container">
                <h1>Employee Management Application</h1>
            </div>
            <ListEmployee employee={props}/>


        </div>
    );
}


const mapStateToProps = state => {
    return {
        state: state

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEmployee: (payload) => dispatch(addEmployee(payload)),
        updateEmployee: (payload,index) => dispatch(updateEmployee(payload,index)),
        deleteEmployee: (index) => dispatch(deleteEmployee(index)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);