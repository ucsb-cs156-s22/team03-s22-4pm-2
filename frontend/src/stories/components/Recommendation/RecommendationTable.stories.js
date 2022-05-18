<<<<<<< HEAD
// technically already worked on this while debugging table, but recommitting in new branch for clarity's sake
=======
>>>>>>> 3a47ee7c0818ccbf4435c3ad69f0a18554b82ff2
import React from 'react';

import RecommendationTable from "main/components/Recommendation/RecommendationTable";
import { recommendationFixtures } from 'fixtures/recommendationFixtures';

export default {
    title: 'components/Recommendation/RecommendationTable',
    component: RecommendationTable
};

const Template = (args) => {
    return (
        <RecommendationTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    recommendations: []
};

export const ThreeRecommendations = Template.bind({});

ThreeRecommendations.args = {
    recommendations: recommendationFixtures.threeRecommendations
};


