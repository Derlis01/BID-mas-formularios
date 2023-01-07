import React from 'react'

const Results = (props) => {

    const {firstName, lastName, email, password, confirmPassword} = props.data

    return <>
        <h3>Data Logs</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
    </>
}

export default Results