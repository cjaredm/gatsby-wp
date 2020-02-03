import {css} from 'styled-components';

export default css`
  //--------------------------------------------------------------
// REM CALC
//--------------------------------------------------------------

$global-font-size: 100% !default;

@function strip-unit($num) {
	@return $num / ($num * 0 + 1);
}

@function rem-calc($values, $base: null) {
	$rem-values: ();
	$count: length($values);

	// If no base is defined, defer to the global font size
	@if $base == null {
		$base: $global-font-size;
	}

	// If the base font size is a %, then multiply it by 16px
	// This is because 100% font size = 16px in most all browsers
	@if unit($base) == '%' {
		$base: ($base / 100%) * 16px;
	}

	// Using rem as base allows correct scaling
	@if unit($base) == 'rem' {
		$base: strip-unit($base) * 16px;
	}

	@if $count == 1 {
		@return -zf-to-rem($values, $base);
	}

	@for $i from 1 through $count {
		$rem-values: append($rem-values, -zf-to-rem(nth($values, $i), $base));
	}

	@return $rem-values;
}

@function -zf-to-rem($value, $base: null) {
	// Check if the value is a number
	@if type-of($value) != 'number' {
		@warn inspect($value) + ' was passed to rem-calc(), which is not a number.';
		@return $value;
	}

	// Transform em into rem if someone hands over 'em's
	@if unit($value) == 'em' {
		$value: strip-unit($value) * 1rem;
	}

	// Calculate rem if units for $value is not rem or em
	@if unit($value) != 'rem' {
		$value: strip-unit($value) / strip-unit($base) * 1rem;
	}

	// Turn 0rem into 0
	@if $value == 0rem {
		$value: 0;
	}

	@return $value;
}

@function unitless-calc($value, $base: null) {
	// If no base is defined, defer to the global font size
	@if $base == null {
		$base: $global-font-size;
	}

	// First, lets convert our $base to pixels

	// If the base font size is a %, then multiply it by 16px
	@if unit($base) == '%' {
		$base: ($base / 100%) * 16px;
	}

	@if unit($base) == 'rem' {
		$base: strip-unit($base) * 16px;
	}

	@if unit($base) == 'em' {
		$base: strip-unit($base) * 16px;
	}

	// Now lets convert our value to pixels too
	@if unit($value) == '%' {
		$value: ($value / 100%) * $base;
	}

	@if unit($value) == 'rem' {
		$value: strip-unit($value) * $base;
	}

	@if unit($value) == 'em' {
		$value: strip-unit($value) * $base;
	}

	// 'px'
	@if unit($value) == 'px' {
		@return strip-unit($value) / strip-unit($base);
	}

	// assume that line-heights greatern then 10 are meant to be absolute in 'px'
	@if unitless($value) and ($value > 10) {
		@return $value / strip-unit($base);
	}

	@return $value;
}

`;