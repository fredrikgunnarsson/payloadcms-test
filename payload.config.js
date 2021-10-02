import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import colorPickerField from './payload/colorPickerField';
import myBlock from './payload/blocks/myBlock';

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
          admin: {
            position: 'sidebar',
            description: ({ value }) => {
              return `Antal tecken: ${value?.length}`;
            },
          },
        },
        {
          name: 'layout',
          type: 'blocks',
          blocks: [myBlock],
        },
        {
          name: 'colorPicker',
          type: 'text',
          localized: true,
          admin: {
            components: {
              Field: colorPickerField,
            },
          },
        },
        {
          name: 'testField',
          type: 'text',
          admin: {
            condition: (data) => {
              return data.colorPicker === 'blue' ? true : false;
            },
          },
        },
      ],
      admin: {
        useAsTitle: 'title',
        description: 'test desc',
      },
    },
  ],
  localization: {
    locales: ['sv', 'en'],
    defaultLocale: 'en',
    fallback: true,
  },
});
