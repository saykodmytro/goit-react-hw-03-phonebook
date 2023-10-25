import css from './Container.module.css';

export const Container = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};
