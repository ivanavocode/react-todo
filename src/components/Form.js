import React, { useState, useContext } from 'react';
import { ALertContext } from '../context/alert/alertContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(ALertContext)

    const submitHandler = event => {
        event.preventDefault()
        
        if (value.trim()) {
            // ...
            alert.show(' Заметка была создана', ' success')
            setValue('')
        }   else {
            alert.show(' Введите название заметки')
        }
    }

    return (
        <form onSubmit={submitHandler}>
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="ВВедите название заметки"
                value={value}
                onChange={e => setValue(e.target.value)}
            >
            </input>
        </div>            
        </form>
    )
}