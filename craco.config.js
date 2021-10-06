const path = require("path");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
	webpack: {
		alias: {
			"@assets": path.resolve(__dirname, "src/assets/"),
			"@components": path.resolve(__dirname, "src/components/"),
			"@containers": path.resolve(__dirname, "src/containers/"),
			"@theme": path.resolve(__dirname, "src/theme/"),
			"@utils": path.resolve(__dirname, "src/utils/"),
		},
	},
	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				customizeTheme: {
					"@primary-color": "#4C9AFF",
					"@border-radius-base": "8px",
				},
			},
		},
	],
};
