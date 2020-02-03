// import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

function getButtonStyle({ theme, variant = 'fill', color = 'primary' }) {
	const primary = css`
		background-color: ${theme[color]};
		border-color: transparent;
		color: ${theme.white};
		&:focus,
		&:hover,
    &[disabled] {
			background-color: ${lighten(0.2, theme[color])};
			color: ${theme.white};
		}
	`;
	switch (true) {
		case variant === 'fill':
			return primary;
		case variant === 'outline':
			return css`
				background-color: transparent;
				border-color: ${theme[color]};
				color: ${theme[color]};
				&:focus,
				&:hover,
        &[disabled] {
					background-color: ${lighten(0.4, theme[color])};
					border-color: ${darken(0.1, theme[color])};
					color: ${darken(0.1, theme[color])};
				}
			`;
		case variant === 'text':
			return css`
				background-color: transparent;
				border-color: transparent;
				color: ${theme[color]};
				border-width: 0;
				&:focus,
				&:hover,
        &[disabled] {
					background-color: ${lighten(0.4, theme[color])};
					color: ${darken(0.1, theme[color])};
				}
			`;
		default:
			return primary;
	}
}

// Props: {variant: [fill, outline, text], style: [primary, secondary, tertiary]}
export default styled.button`
	${(props) => getButtonStyle(props)} border-style: solid;
	border-width: 1px;
	border-radius: ${({ theme }) => theme.radius};
	width: auto;
	cursor: pointer;
	display: inline-block;
	font-size: ${({ theme }) => theme.FONT.SIZE.normal};
	line-height: 1;
	margin: 0;
	padding: 10px 15px;
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: background-color 0.25s ease-out, color 0.25s ease-out;
	appearance: none;
  &[disabled] {
		opacity: 0.7;
		cursor: default;
	}
`;
