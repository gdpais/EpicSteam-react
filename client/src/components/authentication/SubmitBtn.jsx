import { useState, useEffect } from 'react';

/**
 * Authentication submit button style,
 * depending on the process (sign in vs sign up) and
 * enable state
 *
 * @param {object} props properties
 * @returns
 */
export default function SubmitBtn(props) {
	const [btnStyle, setBtnStyle] = useState({
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		width: 300,
		padding: '0 30px',
		fontSize: '18px',
		background: '#999999',
	});

	/*
	 * Change submit button color on button enabling/disabling
	 */
	useEffect(() => {
		const color = props.btnEnable ? '#ff7800' : '#999999';
		setBtnStyle(prevBtnStyle => ({ ...prevBtnStyle, background: color }));
	}, [props.btnEnable]);

	return (
		<button type="submit" style={btnStyle} disabled={!props.btnEnable}>
			{!props.action ? 'Sign up' : 'Sign in'}
		</button>
	);
}
