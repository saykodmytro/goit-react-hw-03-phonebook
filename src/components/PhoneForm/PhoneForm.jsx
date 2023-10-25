import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './PhoneForm.module.css';

export default class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { ...this.state, id: nanoid(5) };
    this.props.handleAddContact(newContact);
    this.setState({
      name: 'Test',
      number: '1111',
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form action="" className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="" className={css.lable}>
          <p className={css.titleLable}>Name</p>

          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            className={css.input}
            value={this.state.name}
            required
          />
        </label>
        <p className={css.titleLable}>Number</p>
        <label htmlFor="" className={css.lable}>
          <input
            onChange={this.handleChange}
            name="number"
            type="text"
            className={css.input}
            value={this.state.number}
          />
        </label>
        <button type="submit" className={css.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}
