<?php
class Jet_Progress_Bar_Dynamic_Block extends \Jet_Engine\Blocks_Views\Dynamic_Content\Blocks\Base {

	/**
	 * Returns block name to register dynamic attributes for
	 *
	 * @return [type] [description]
	 */
	public function block_name() {
		return 'jet-blocks/progress-bar';
	}

	/**
	 * Returns attributes array
	 *
	 * @return [type] [description]
	 */
	public function get_attrs() {
		return array(
			array(
				'attr'             => 'barValue',
				'label'            => 'Bar Value',
				'replace_callback' => [ $this, 'rewrite_value' ],
			),
			array(
				'attr'    => 'scale',
				'label'   => 'Scale',
				'rewrite' => false,
			),
		);
	}

	/**
	 * Rewrite value
	 * 
	 * @param  [type] $value        [description]
	 * @param  [type] $content      [description]
	 * @param  array  $attrs        [description]
	 * @param  array  $parsed_attrs [description]
	 * @return [type]               [description]
	 */
	public function rewrite_value( $value, $content, $attrs = array(), $parsed_attrs = array() ) {

		$scale = ! empty( $attrs['scale'] ) ? $attrs['scale'] : false;

		if ( $scale ) {
			$scale = $this->get_parser()->get_dynamic_value( $scale, 'scale', $parsed_attrs );
		} else {
			$scale = ! empty( $parsed_attrs['scale'] ) ? $parsed_attrs['scale'] : 100;
		}
		
		$bar_width = round( 100 * ( $value / $scale ) );

		return preg_replace( 
			'/jet-progress-bar-block__bar(.*?)width\:.*?\%/', 
			'jet-progress-bar-block__bar$1width:' . $bar_width . '%',
			$content
		);

	}

}
