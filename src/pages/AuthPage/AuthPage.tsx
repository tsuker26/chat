import React from 'react'
import styles from './AuthPage.module.scss'
import MySelect from '../../components/UI/MySelect/MySelect'

const AuthPage = () => {
	return (
		<div className={styles.auth_page}>
			<div className={styles.auth_block}>
				<h1 className={styles.auth_block__header}>Welcome</h1>
				<div className={styles.auth_block__select_form}>
					<MySelect select={['Sign In', 'Sign Up']} />
				</div>
			</div>
		</div>
	)
}

export default AuthPage
