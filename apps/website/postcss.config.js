const { join } = require('path');
export default {
  plugins: {
    ailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
}

