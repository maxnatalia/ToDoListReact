import "./style.css";
import React, {useState} from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
    <form className="form" onSubmit={onFormSubmit}>
        <input 
        value={newTaskContent}
        required
        autofocus
        onChange={({target}) => setNewTaskContent(target.value)}
        className="form__input"  
        name="input" 
        placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
    );
};

    

export default Form;