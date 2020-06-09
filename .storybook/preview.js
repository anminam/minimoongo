import {
    addons
} from '@storybook/addons';
import registerRedux from 'addon-redux/register'
registerRedux(addons)

import {
    addParameters
} from '@storybook/react';

addParameters({
    options: {
        /**
         * display the top-level grouping as a "root" in the sidebar
         * @type {Boolean}
         */
        showRoots: true,
        // storySort: (a, b) => {
        //     return (
        //         a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {
        //             numeric: true
        //         })
        //     )
        // }
    },
});