import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState('Double click to edit');
  return (
    <div>
      <Draggable>
        {
          editMode ? (
            <input
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onDoubleClick={() => setEditMode(false)}
            />
          ) : (
            <p onDoubleClick={() => setEditMode(true)}>{val}</p>
          )
        }
      </Draggable>
    </div>
  )
}

export default Text
