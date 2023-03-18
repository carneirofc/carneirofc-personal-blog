import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
	--color-primary-400: #c69ef6;
	--color-primary-500: #bb86fc;
	--color-primary-800: #502388;
	--color-primary-900: #1d112a;


	--color-secondary-400: #de00e8;
	--color-secondary-500: #d000dd;
	--color-secondary-600: #d000dd;
	--color-secondary-900: #6b00c1;

	--color-background-400: #6b6b6b;
	--color-background-500: #393939;
	--color-background-900: #1e1d1d;

	--color-text-500: #fcfcfc;
	--color-text-900: #dedede;

	--fw-thin: 300;
	--fw-regular: 500;
	--fw-bold: 700;
	--fw-black: 800;

	--fs-300: 0.9rem;
	--fs-400: 1.125rem;
	--fs-500: 1.25rem;
	--fs-600: 1.5rem;
	--fs-700: 1.75rem;
	--fs-800: 2rem;
	--fs-900: 5rem;


	// CSS Variables
	--background-dark: var(--color-background-900);
	--background-light: var(--color-background-500);
	--background-active: var(--color-background-400);
	--border-dark: var(--color-background-900);
	--border-light: var(--color-background-500);
	--active: var(--color-primary-900);
	--link: var(--color-primary-500);
	--text: var(--color-text-900);
	--text-dark: var(--color-text-500);
}

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background: var(--background-light);
	font-size: 100%;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* font-family: 'JetBrains Mono'; */
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

export default GlobalStyles;
