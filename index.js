const backgroundColor = '#f3f3f3'
const foregroundColor = '#6E7278'
const cursorColor = '#6E7278'
const borderColor = 'transparent'

const colors = {
  lightBlack: '#6E7278',
  black: '#333333',
  lightGreen: '#00C642',
  green: '#00611F',
  lightYellow: '#FFCD3A',
  yellow: '#9E7800',
  white: '#eee8d5',
  lightWhite: '#fdf6e3',
  lightRed: '#CB3837',
  red: '#CB3837',
  magenta: '#782176',
  lightMagenta: '#C836C3',
  lightBlue: '#8A56FF',
  blue: '#28008A',
  lightCyan: '#2AA198',
  cyan: '#155651'

}

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .tabs_list {
      	border: 0;
      }
      .tabs_nav {
        background-color: #f3f3f3;
        color: ${foregroundColor};
      }
      .tab_tab {
        color: ${foregroundColor};
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: ${colors.red};
        background - color: #fdd8d6;
        border: ${colors.red}
      }
      .splitpane_divider {
      	background-color: ${colors.red};
      }
    `
  })
}
