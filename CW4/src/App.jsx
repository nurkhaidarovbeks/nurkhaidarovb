import React, {useRef, useState, useCallback} from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const lastNameRef = useRef(null);

    const focusLastName = useCallback(() => {
        if (lastNameRef.current) {
            lastNameRef.current.focus();
        }
    }, []);

    const ShowData = useCallback(() => {
        alert(`First Name: ${firstName}, LastName: ${lastName}`);
    }, [firstName, lastName]);

    return (
        <div style={{padding: 20}}>
            <h1>React form task</h1>

            <div style={{ marginBottom: 10}}>
                <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    ref = {lastNameRef}
                />
            </div>

            <div style={{ marginBottom: 10}}>
                <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    ref = {lastNameRef}
                />
            </div>


            <div style={{ marginBottom: 10 }}>
                <button onClick={focusLastName}>Focus Last Name</button>
                <button onClick={ShowData} style={{ marginLeft: 10 }}>Show Data</button>
            </div>
        </div>
    );
}

export default App;