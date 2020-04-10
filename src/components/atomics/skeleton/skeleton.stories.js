import React from 'react';
import Skeleton from '.';

export const Police = () => (
    <>
        <Skeleton.Rond />
        <Skeleton.Rond width={90}/>
        <Skeleton.Rectangle />
        <Skeleton.Rectangle  width={120} rounded/>
        <Skeleton.Rectangle  width={150} height={30}/>
        <Skeleton.Rectangle  width={200} height={30} rounded/>
    </>
);

Police.story = {
  name: 'Skeletons',
};
export default {
  title: 'Atomes/skeletons',
  component: Police,
};

