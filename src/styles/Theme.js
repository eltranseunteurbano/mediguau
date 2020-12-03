import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		common: {
			black: '#14142B',
			white: '#ffffff',
		},
		primary: {
			main: '#B392DC',
			light: '#DDC3FD',
			dark: '#7B48B9',
		},
		secondary: {
			main: '#A6D2FB',
			light: '#A6D2FB',
			dark: '#68B0F2',
		},
		error: {
			main: '#ED2E7E',
		},
		success: {
			main: '#00BA88',
		},
		warning: {
			main: '#F4B740',
		},
		text: {
			primary: '#676A6F',
			disabled: '#D6D8E7',
		},
		divider: '#D6D8E7',
		background: {
			paper: '#fff',
			default: '#F7F7FC',
		},
		grey: {
			body: '#4E4B66',
			label: '#6E7191',
			placeholder: '#A0A3BD',
			inputbackground: '#EFF0F6',
		},
	},
	typography: {
		fontFamily: "''Raleway, 'sans-serif'",
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 800,
	},
	overrides: {},
});

export { theme };
