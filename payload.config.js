import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

export default buildConfig({
  serverURL: `http://localhost:${PORT}`,
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'color-picker',
          type: 'text',
        },
      ],
    },
  ],
  localization: {
    locales: ['sv', 'en'],
  },
});
