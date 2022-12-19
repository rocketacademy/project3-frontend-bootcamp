import React from 'react';
import { Button } from '@mantine/core';

const MainMapBtn = ({ completedChaps, id, navigate }) => {
  return (
    <div>
      <Button
        id={1}
        radius={'xl'}
        styles={(theme) => ({
          root: {
            backgroundColor: completedChaps[id] ? '#ef5152' : '#ABB2B9',
            border: 0,
            height: 33,
            paddingLeft: 15,
            paddingRight: 15,
            color: '#fff',

            '&:hover': {
              backgroundColor: completedChaps[id]
                ? theme.fn.darken('#ef5152', 0.2)
                : theme.fn.darken('#ABB2B9', 0.2),
              color: '#ffeb99',
            },
          },
        })}
        onClick={() => {
          navigate('/welcome/1');
        }}
      >
        {id}
      </Button>
    </div>
  );
};

export default MainMapBtn;
