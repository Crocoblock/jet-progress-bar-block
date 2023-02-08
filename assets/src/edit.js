import BlockBody from './block-body';

const {
	InspectorControls,
	ColorPalette
} = wp.blockEditor;

const { __ } = wp.i18n;

const {
	RangeControl,
	TextControl,
	ToolbarGroup,
	PanelBody,
	__experimentalToggleGroupControl: ToggleGroupControl,
	__experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;

const {
	RichText,
	BlockControls
} = wp.blockEditor;

const {
	Fragment
} = wp.element;

const Edit = function( props ) {

	const {
		className,
		attributes,
		setAttributes,
	} = props;

	const scale = attributes.scale || 5;

	return (
		<Fragment>
			<BlockControls
				key={ className + '-toolbar' }
			>
				<ToolbarGroup>
					<TextControl
						label={ __( 'Value', 'jet-progress-bar-block' ) }
						value={ attributes.barValue }
						type="number"
						className="jet-progress-bar-num"
						onChange={ ( value ) => {

							value = parseFloat( value );

							if ( value > attributes.scale ) {
								value = attributes.scale;
							}

							setAttributes( {
								barValue: value
							} );
						} }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<TextControl
						label={ __( 'Scale', 'jet-progress-bar-block' ) }
						value={ attributes.scale }
						type="number"
						className="jet-progress-bar-num"
						onChange={ ( value ) => {
							setAttributes( {
								scale: parseFloat( value )
							} );
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls
				key={ className + '-inspector' }
			>
				<PanelBody
					title={ __( 'General', 'jet-progress-bar-block' ) }
				>	
					<RangeControl
						label={ __( 'Value', 'jet-progress-bar-block' ) }
						help={ __( 'Current progress bar value', 'jet-progress-bar-block' ) }
						min="0"
						max={ scale }
						step="0.1"
						value={ attributes.barValue }
						onChange={ ( value ) => {
							props.setAttributes( {
								barValue: value
							} )
						} }
					/>
					<RangeControl
						label={ __( 'Scale', 'jet-progress-bar-block' ) }
						help={ __( 'Maximum number progress bar', 'jet-progress-bar-block' ) }
						min="1"
						value={ attributes.scale }
						onChange={ ( value ) => {
							props.setAttributes( {
								scale: value
							} )
						} }
					/>
					<ToggleGroupControl
						label={ __( 'Bar Type', 'jet-progress-bar-block' ) }
						value={ attributes.type } 
						isBlock
					>
						<ToggleGroupControlOption
							value="horizontal"
							label={ __( 'Horizontal', 'jet-progress-bar-block' ) }
						/>
						<ToggleGroupControlOption
							value="vertical"
							label={ __( 'Vertical', 'jet-progress-bar-block' ) }
						/>
					</ToggleGroupControl>
				</PanelBody>
				<PanelBody
					title={ __( 'Style', 'jet-progress-bar-block' ) }
				>
					<RangeControl
						label={ __( 'Bar thickness', 'jet-progress-bar-block' ) }
						min="1"
						max="500"
						value={ attributes.lineThickness }
						onChange={ ( value ) => {
							props.setAttributes( {
								lineThickness: value
							} )
						} }
					/>
					<p>
						<strong>{ __( 'Bar Color', 'jet-progress-bar-block' ) }</strong>
					</p>
					<ColorPalette
						value={ attributes.color }
						onChange={ ( value ) => {
							props.setAttributes( {
								color: value
							} )
						} }
					/>
					<p>
						<strong>{ __( 'Scale Color', 'jet-progress-bar-block' ) }</strong>
					</p>
					<ColorPalette
						value={ attributes.scaleColor }
						onChange={ ( value ) => {
							props.setAttributes( {
								scaleColor: value
							} )
						} }
					/>
					<RangeControl
						label={ __( 'Radius', 'jet-progress-bar-block' ) }
						help={ __( 'Bar radius', 'jet-progress-bar-block' ) }
						min="0"
						value={ attributes.borderRadius }
						onChange={ ( value ) => {
							props.setAttributes( {
								borderRadius: value
							} )
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockBody
				attributes={ attributes }
				className={ className }
			/>
		</Fragment>
	);
}

export default Edit;
