import React, { useState, useRef } from "react";
import styles from './AddUsers.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {

    // you can use either states or refs:
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setUserName] = useState('');
    // const [enteredUserAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            // enteredUserAge is a string and we are comparing it with number. but our js works with it. but for super safe we need to enter '+' for conversion of our 'enteredUserAge' to a 'number'.
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        console.log(enteredName, enteredAge);

        const enteredUser = {
            name: enteredName,
            age: enteredAge,
            id: Math.random().toString()
        }

        // setUserName('');
        // setUserAge('');
        props.onAddUsers(enteredUser);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // function userNameHandler(event) {
    //     setUserName(event.target.value);
    // }

    // function userAgeHandler(event) {
    //     setUserAge(event.target.value);
    // }

    function errorHandler(){
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClose={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input 
                    id="username"  
                    // value={enteredUserName} 
                    type='text' 
                    // onChange={userNameHandler}
                    ref={nameInputRef} 
                    >   
                    </input>
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" 
                    // value={enteredUserAge} 
                    type='number' 
                    // onChange={userAgeHandler}
                    ref={ageInputRef}
                    >
                    </input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;