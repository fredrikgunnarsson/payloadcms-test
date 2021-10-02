// import React from 'react';
import React from 'react';
import { useFieldType } from 'payload/components/forms';

const colorPickerField = ({ path }) => {
  const { value = '', setValue } = useFieldType({ path });
  return (
    <div>
      <ul>
        {['red', 'blue', 'green'].map((color) => {
          return (
            <span
              style={{
                color: color,
                padding: '5px',
                fontWeight: value == color ? 800 : 100,
              }}
              onClick={() => setValue(color)}
            >
              {color}
            </span>
          );
        })}
      </ul>
    </div>
  );
};

export default colorPickerField;