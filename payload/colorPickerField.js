// import React from 'react';
import React from 'react';
import { useFieldType, Label } from 'payload/components/forms';

const colorPickerField = ({ path, label }) => {
  const { value = '', setValue } = useFieldType({ path });
  return (
    <div>
      <Label label={label} />
      <ul style={{ paddingLeft: 0 }}>
        {['red', 'blue', 'green'].map((color) => {
          return (
            <span
              style={{
                color: color,
                padding: '5px',
                fontWeight: value == color ? 800 : 100,
              }}
              onClick={() => setValue(color)}
              key={color}
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
