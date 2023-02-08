<?php
/**
 * Plugin Name:  Progress Bar Block
 * Description:  The Progress Bar block allows you to display static progress bars within your content. You can assign dynamic values by using JetEngine plugin.
 * Version:      1.0.0
 * Author:       Crocoblock
 * Author URI:   https://crocoblock.com
 * License:      GPL-2.0-or-later
 * License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  jet-star-rating-block
 */

/**
 * Get plugin config part by key
 *
 * @return string
 */
function jet_progress_bar_block_config( $key = '', $suffix = '' ) {

	$config = array(
		'plugin_dir' => trailingslashit( dirname( __FILE__ ) ),
		'plugin_url' => plugins_url( '/', __FILE__ ),
		'slug'       => 'jet-progress-bar-block',
		'version'    => '1.0.0',
		'block_name' => 'jet-blocks/progress-bar',
		'deps'       => array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-block-editor', 'wp-i18n', 'wp-polyfill', 'lodash' ),
	);

	if ( isset( $config[ $key ] ) ) {

		if ( is_array( $config[ $key ] ) ) {
			return $config[ $key ];
		} else {
			return $config[ $key ] . $suffix;
		}

	} else {
		return false;
	}
}

/**
 * Register all block assets
 */
function jet_progress_bar_block_init() {

	wp_register_script(
		jet_progress_bar_block_config( 'slug', '-editor' ),
		jet_progress_bar_block_config( 'plugin_url', 'assets/js/editor.js' ),
		jet_progress_bar_block_config( 'deps' ),
		jet_progress_bar_block_config( 'version' ),
		true
	);

	wp_set_script_translations(
		jet_progress_bar_block_config( 'slug', '-editor' ),
		jet_progress_bar_block_config( 'slug' )
	);

	wp_register_style(
		jet_progress_bar_block_config( 'slug', '-editor' ),
		jet_progress_bar_block_config( 'plugin_url', 'assets/css/editor-style.css' ),
		array(),
		jet_progress_bar_block_config( 'version' )
	);

	register_block_type( __DIR__ );

	add_action( 'jet-engine/blocks-views/dynamic-content/init-blocks', 'jet_progress_bar_dynamic_block' );

}

add_action( 'init', 'jet_progress_bar_block_init' );

function jet_progress_bar_dynamic_block( $dynamic_blocks ) {
	require jet_progress_bar_block_config( 'plugin_dir' ) . 'dynamic-block.php';
	$dynamic_blocks->register_block( new Jet_Progress_Bar_Dynamic_Block() );
}
