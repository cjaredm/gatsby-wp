import {css} from 'styled-components';
import { lighten, darken } from 'polished';

export default css`
//--------------------------------------------------------------
// BUTTONS
//--------------------------------------------------------------
a.button,
button,
.button {
  width: auto;
	appearance: none;
	border-width: 1px;
	border-style: solid;
	border-color: transparent;
	background-color: ${({theme}) => theme.primary};
	border-radius: ${({theme}) => theme.radius};
	color: ${({theme}) => theme.white};
	cursor: pointer;
	display: inline-block;
	font-size: ${({theme}) => theme.FONT.SIZE.normal};
	line-height: 1;
	margin: 0;
	padding: 10px 15px;
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: background-color 0.25s ease-out, color 0.25s ease-out;

	&:focus,
	&:hover {
		background-color: ${({theme}) => lighten(0.2, theme.primary)};
		color: ${({theme}) => theme.white};
	}

	&--secondary {
		background-color: ${({theme}) => theme.secondary};

		&:focus,
		&:hover:enabled {
			background-color: ${({theme}) => lighten(0.2, theme.secondary)};
		}
	}

  &--tertiary {
		background-color: ${({theme}) => theme.tertiary};

		&:focus,
		&:hover:enabled {
			background-color: ${({theme}) => lighten(0.2, theme.tertiary)};
		}
	}

	&--full-width {
		display: block;
		margin-left: 0;
		margin-right: 0;
    width: 100%;
	}

	&--outline {
		border-width: 1px;
		border-style: solid;
		border-color: ${({theme}) => theme.primary};
		color: ${({theme}) => theme.primary};
		background-color: transparent;

		&:focus,
		&:hover {
			background-color: ${({theme}) => lighten(0.3, theme.primary)} !important;
			border-color: ${({theme}) => darken(0.1, theme.primary)} !important;
			color: ${({theme}) => darken(0.1, theme.primary)} !important;
		}
		&:focus,
		&:hover:disabled {
			border-color: ${({theme}) => theme.primary} !important;
			color: ${({theme}) => theme.primary} !important;
			background-color: transparent !important;
		}

		&.button--secondary {
			color: ${({theme}) => theme.secondary};
			border-color: ${({theme}) => theme.secondary};

			&:focus,
			&:hover {
				background-color: ${({theme}) => lighten(0.3, theme.secondary)} !important;
				border-color: ${({theme}) => darken(0.1, theme.secondary)} !important;
				color: ${({theme}) => darken(0.1, theme.secondary)} !important;
			}
		}

		&.button--tertiary {
			color: ${({theme}) => theme.tertiary};
			border-color: ${({theme}) => theme.tertiary};

			&:focus,
			&:hover {
				background-color: ${({theme}) => lighten(0.3, theme.tertiary)} !important;
				border-color: ${({theme}) => darken(0.1, theme.tertiary)} !important;
				color: ${({theme}) => darken(0.1, theme.tertiary)} !important;
			}
		}
	}

	&--text {
		background-color: transparent;
		border: 0;
	}

	&--elastic {
		width: auto;
	}

	&[disabled] {
		opacity: 0.7;
		cursor: default;
	}
}
`;