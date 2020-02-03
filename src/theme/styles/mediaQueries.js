import {css} from 'styled-components';

export default css`
@mixin mq($point, $min: true, $width: true ) {
	// Width
	@if $width {
		// min-width
		@if $min {
			@media (min-width: $point) {
				@content;
			}
		} @else {
			// max-width
			@media (max-width: $point - 1) {
				@content;
			}
		}
	} @else {
		// Height

		// min-height
		@if $min {
			@media (min-height: $point) {
				@content;
			}
		} @else {
			// max-height
			@media (max-height: $point) {
				@content;
			}
		}
	}
}
`;