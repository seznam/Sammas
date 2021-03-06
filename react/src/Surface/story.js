/* eslint-disable no-magic-numbers */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Surface, { SURFACE_LEVELS, DEFAULT_SURFACE } from './index';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Surface', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný statický', () => (
	<Surface
		surface={select('Surface', SURFACE_LEVELS, DEFAULT_SURFACE)}
		tagName={text('TagName', 'div')}
		disabled={boolean('Disabled', false)}
		href={text('Href', '')}
	>
		Obsah komponenty
	</Surface>
), {
	notes: { markdown: readme },
});

stories.add('nastavitelný klikací', () => (
	<Surface
		surface={select('Surface', SURFACE_LEVELS, DEFAULT_SURFACE)}
		tagName={text('TagName', 'div')}
		disabled={boolean('Disabled', false)}
		href={text('Href', '')}
		onClick={action('klik')}
	>
		Obsah komponenty
	</Surface>
), {
	notes: { markdown: readme },
});
