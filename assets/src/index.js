const { registerBlockType } = wp.blocks;

import Edit from './edit';
import Save from './save';

registerBlockType( 'jet-blocks/progress-bar', {
	edit: Edit,
	save: Save,
} );