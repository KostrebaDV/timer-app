import styles from './styles/index.module.scss';
import { ArrowDown, ArrowUp } from '../Icons';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

export const NumberInput = (
  {
    fieldName,
    maxValue = 99,
    miValue = 1,
  }
) => {

  const {
    register,
    setValue,
    getValues
  } = useFormContext();
  
  const { onChange, onBlur, name, ref } = register(fieldName);
  const handleInputChange = useCallback((e) => {
    onChange(e);
  }, [onChange])

  const handleOnBlur = useCallback((e) => {
    console.log(e.target.value);
    if (Number(e.target.value) > maxValue) {
      setValue(name, maxValue)
    }

    if (Number(e.target.value) < miValue) {
      setValue(name, maxValue)
    }
    onBlur(e);
  }, [maxValue, miValue, name, onBlur, setValue])

  const handleIncrease = useCallback((e) => {
    e.preventDefault();
    const value = Number(getValues(name));
    if (value < maxValue) {
      setValue(name, value + 1)
    }
  }, [getValues, maxValue, name, setValue])

  const handelDecrease = useCallback((e) => {
    e.preventDefault();
    const value = Number(getValues(name));
    if (value > miValue) {
      setValue(name,  value - 1)
    }
  }, [getValues, miValue, name, setValue])

  return (
    <div className={styles.numberInput_wrapper}>
      <input
        ref={ref}
        min={miValue}
        max={maxValue}
        inputMode="numeric"
        className={styles.numberInput}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        type="number"
        name={name}
      />
      <div className={styles.numberInput_navigation}>
        <button onClick={handleIncrease} className={styles.numberInput__button}>
          <ArrowUp />
        </button>
        <button onClick={handelDecrease} className={styles.numberInput__button}>
          <ArrowDown />
        </button>
      </div>
   </div>
  )
}