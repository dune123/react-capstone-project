import React from 'react'
import RegisterForm from '../../components/registerform/RegisterForm';
import styles from './index.module.css';

function Register() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.left}>
            <img src="image_13.png"/>
            </div>
            <div className={styles.right}>
            <RegisterForm/>
            </div>
        </div>
    </>
  )
}

export default Register;