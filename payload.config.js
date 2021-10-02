import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import colorPickerField from './payload/colorPickerField';

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
          localized: true,
          admin: {
            components: {
              Field: colorPickerField,
            },
          },
        },
      ],
    },
  ],
  localization: {
    locales: ['sv', 'en'],
  },
});
