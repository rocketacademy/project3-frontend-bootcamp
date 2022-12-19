import React from 'react';
import { Button } from '@mantine/core';
import { useState } from 'react';
import MarkCompleteBtn from './MarkCompleteBtn';
import DisplayMarkdown from './DisplayMarkdown';

const ModalBtn = ({
  completedChaps,
  handleSubmit,
  handleClick,
  id,
  markdownUrl,
  opened,
  openModal,
}) => {
  const [disable, setDisable] = useState(completedChaps);
  return (
    <div>
      <Button
        id={6}
        radius={'xl'}
        styles={(theme) => ({
          root: {
            backgroundColor: completedChaps[id] ? 'blue' : 'gray',
            border: 0,
            height: 33,
            paddingLeft: 13,
            paddingRight: 13,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.2),
            },
          },
        })}
        onClick={() => {
          handleClick(id);
          openModal({
            opened: { opened },
            // title: 'RECIPE SITE E1',
            size: '55%',
            overflow: 'inside',
            children: (
              <>
                <DisplayMarkdown markdown={markdownUrl} />
                <MarkCompleteBtn
                  disable={disable}
                  setDisable={setDisable}
                  completedChaps={completedChaps[id]}
                  id={id}
                  handleSubmit={handleSubmit}
                />
              </>
            ),
          });
        }}
      >
        {id.chapterIndex}
      </Button>
    </div>
  );
};

export default ModalBtn;
