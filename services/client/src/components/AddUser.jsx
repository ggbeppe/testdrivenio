import React from 'react';

const AddUser = (props) => {
    return (
        <form onSubmit={event => props.addUser(event)}>
            <div className="field">
                <input
                    name="username"
                    type="text"
                    className="input is-large"
                    placeholder="Enter a username"
                    required
                    value={props.username}
                    onChange={props.handleChange}
                />
            </div>
            <div className="field">
                <input
                    name="email"
                    type="email"
                    className="input is-large"
                    placeholder="Enter an email address"
                    required
                    value={props.email}
                    onChange={props.handleChange}
                />
            </div>
            <input
                type="submit"
                className="button is-primary is-large is-fullwidth"
                value="Submit"
            />
        </form>
    )
};

export default AddUser;