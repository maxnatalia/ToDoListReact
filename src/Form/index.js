import "./style.css";

const Form = () => (
<form className="form">
    <input className="form__input" 
    autofocus
    required 
    name="input" 
    placeholder="Co jest do zrobienia?" />
    <button className="form__button">Dodaj zadanie</button>
</form>
);

export default Form;