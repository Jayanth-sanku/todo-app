import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

export const Button = ({ children, variant, type, ...res }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={getClasses([styles.button, styles[`button--${variant}`]])}
    {...res}
  >
    {children}
  </button>
);

export const SelectButton = ({ children, variant, ...res }) => (
  <select
    className={getClasses([styles.button, styles[`button--${variant}`]])}
    {...res}
  >
    {children}
  </select>
);
