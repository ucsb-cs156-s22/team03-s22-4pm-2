// @ts-nocheck
import React from 'react';

import UCSBOrganizationTable from "main/components/Organization/UCSBOrganizationTable";
import { organizationFixtures } from 'fixtures/organizationFixtures';

export default {
    title: 'components/Organization/UCSBOrganizationTable',
    component: UCSBOrganizationTable
};

const Template = (args) => {
    return (
        <UCSBOrganizationTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    organization: []
};

export const threeOrganization = Template.bind({});

threeOrganization.args = {
    organzation: organizationFixtures.threeOrganization
};


