import {css} from 'styled-components';

export default css`
//--------------------------------------------------------------
// HELPERS
//--------------------------------------------------------------
@mixin visual-hide {
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	word-wrap: normal;
}

// Reverse hide.
@mixin reverse-visual-hide {
	clip: auto;
	clip-path: none;
	height: auto;
	margin: 0;
	overflow: visible;
	padding: 0;
	position: static;
	width: auto;
}

.h-visual-hide {
	@include visual-hide;
}

.h-reverse-visual-hide {
	@include reverse-visual-hide;
}

.h-hidden {
	display: none;
}

.h-clearfix {
	@include clearfix;
}

.h-table-responsive {
	overflow-x: auto;

	table {
		min-width: 725px;
	}
}

//-----------------------------------------
// Cover
//-----------------------------------------
.h-cover-absolute {
	bottom: 0;
	height: 100%;
	left: 0;
	min-height: 100%;
	position: absolute;
	right: 0;
	top: 0;
}

.h-cover-background {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.h-cover-video {
	height: auto;
	max-height: none;
	max-width: none;
	min-height: 100%;
	min-width: 100%;
	width: auto;
}

//-----------------------------------------
// Text
//-----------------------------------------
.h-text-center {
	text-align: center;
}
.center {text-align: center};

.h-text-bold {
	font-weight: ${({theme}) => theme.FONT.WEIGHT.bold};
}

//-----------------------------------------
// Colors
//-----------------------------------------
.h-color-primary {
	color: ${({theme}) => theme.primary};
}
.h-color-secondary {
	color: ${({theme}) => theme.secondary};
}
.h-color-tertiary {
	color: ${({theme}) => theme.tertiary};
}
.h-color-error {
	color: ${({theme}) => theme.error};
}
.h-color-warning {
	color: ${({theme}) => theme.warning};
}
.h-color-success {
	color: ${({theme}) => theme.success};
}

//-----------------------------------------
// Background-Colors
//-----------------------------------------
.h-background-primary {
	background-color: ${({theme}) => theme.primary};
}
.h-background-secondary {
	background-color: ${({theme}) => theme.secondary};
}
.h-background-tertiary {
	background-color: ${({theme}) => theme.tertiary};
}

//-----------------------------------------
// Border Colors
//-----------------------------------------
.h-border-primary {
	border-color: ${({theme}) => theme.primary};
}
.h-border-secondary {
	border-color: ${({theme}) => theme.secondary};
}
.h-border-tertiary {
	border-color: ${({theme}) => theme.tertiary};
}

//-----------------------------------------
// Spacing
//-----------------------------------------
.h-spacing-bottom {
	margin-bottom: ${({theme}) => theme.SPACING.global};
}

`;