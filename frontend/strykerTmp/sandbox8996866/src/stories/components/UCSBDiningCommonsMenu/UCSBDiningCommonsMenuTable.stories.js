// @ts-nocheck
import React from 'react';

import UCSBDiningCommonsMenuTable from "main/components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuTable";
import { ucsbDiningCommonsMenuFixtures } from 'fixtures/ucsbDiningCommonsMenuFixtures';

export default {
    title: 'components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuTable',
    component: UCSBDiningCommonsMenuTable
};

const Template = (args) => {
    return (
        <UCSBDiningCommonsMenuTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    diningCommonsMenu: []
};

export const ThreeDiningCommonsMenus = Template.bind({});

ThreeDiningCommonsMenus.args = {
    diningCommonsMenu: ucsbDiningCommonsMenuFixtures.threeDiningCommonsMenus
};


