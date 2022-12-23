import React from 'react';

const CadetChaptProgress = (props) => {
  //here map out the cadetChapters
  let cadetChaps;
  if (props && props.length !== 0) {
    cadetChaps = props.map((cadet) => {
      // console.log('individual cadet chapter prog', cadetChapters);
      console.log('chapters list for each cadet', cadet.cadetChapters);
      console.log('chapters list Id', cadet.cadetChapters.chapterId);
      // console.log(
      // return (
      //   <>
      //     <Container>
      //       <h4 key={cadet.id}>{cadet.cadetChapters}</h4>
      //       <h4 key={cadet.id}>{cadet.cadetChapters.chapterId}</h4>
      //     </Container>
      //   </>
      // );
      // });
    });
  }

  // let chapsId;
  // if (cadetChaps && cadetChaps.length !== 0) {
  //   chapsId = cadetChaps.map((cId) => {
  //     console.log('can this work?', cId.chapterId);
  //     <h6>{cId.chapterId}</h6>;
  //   });
  // }

  return <div>{cadetChaps}</div>;
};

export default CadetChaptProgress;
