// Core
import React, { useEffect } from 'react';
import { Editor, updateEditor } from '@teselagen/ove';
import store from './store';

function App() {
    useEffect(() => {
        updateEditor(store, 'DemoEditor', {
            sequenceData: {
                circular: true,
                sequence:
          'gtagagagagagtgagcccgacccccgtagagagagagtgagcccgacccccgtagagagagagtgagcccgacccccgtagagagagagtgagcccgaccccc',
                features: [
                    {
                        id:    '2oi452',
                        name:  'I\'m a feature :)',
                        start: 10,
                        end:   20,
                    },
                ],
            },
        });
    });
    const editorProps = {
        editorName:   'DemoEditor',
        isFullscreen: true,
        showMenuBar:  true,
    };

    return (
        <Editor { ...editorProps } />
    );
}

// Styles


export const HelloBurst = () => {
    return (
        <div>
            <App />
        </div>
    );
};
