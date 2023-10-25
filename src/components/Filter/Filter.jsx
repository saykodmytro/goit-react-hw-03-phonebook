import css from './Filter.module.css';
export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <label className={css.label}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
