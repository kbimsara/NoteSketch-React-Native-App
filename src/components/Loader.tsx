
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, Spinner } from '@gluestack-ui/themed'

import React from 'react'

const Loader = () => {
    return (
        <GluestackUIProvider config={config}>
            <Spinner size="large" />
        </GluestackUIProvider>
    );
}

export default Loader