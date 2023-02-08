const ProgressBar = function( props ) {

	const {
		className,
		attributes
	} = props;

	const baseClass = 'jet-progress-bar-block';
	const scale = attributes.scale || 100;
	const barValue = attributes.barValue || 0;
	const borderRadius = attributes.barValue || 0;
	const barType = attributes.type || 'horizontal';
	const size = Math.round( 100 * 100 * ( barValue / scale ) ) / 100;
	const lineThickness = attributes.lineThickness || 60;
	const scaleHeight = attributes.height || 300;
	const scaleStyle = { backgroundColor: attributes.scaleColor, width: '100%', minWidth: '100%' };
	const barStyle = { backgroundColor: attributes.color };

	if ( attributes.borderRadius ) {
		scaleStyle.borderRadius = attributes.borderRadius + 'px';
		barStyle.borderRadius   = attributes.borderRadius + 'px';
	}

	if ( 'horizontal' === barType ) {
		scaleStyle.height = lineThickness + 'px';
		barStyle.height = '100%';
		barStyle.width  = size + '%';
	} else {
		scaleStyle.height = scaleHeight + 'px';
		scaleStyle.width = lineThickness + 'px';
		barStyle.width = '100%';
		barStyle.height  = size + '%';
	}

	return <div
		className={ [ className, baseClass ].join( ' ' ) }
		style={ scaleStyle }
	>
		<div
			className={ baseClass + '__bar' }
			style={ barStyle }
		></div>
	</div>
}

export default ProgressBar;