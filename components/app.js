import Leaflet from 'leaflet';
import React from 'react';

import SimpleExample from './simple';
import EventsExample from './events';
import ViewportExample from './viewport'


Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

const App = () => (
    <div>
        <h1>
            React Leaflet Examples
        </h1>
        <SimpleExample />
        <h2>Events</h2>
        <p>Click the map to show a marker at your detected location</p>
        <EventsExample />
        <h2>Viewport</h2>
        <p>Click the map to reset it to its original position</p>
        <ViewportExample />
    </div>
)

export default App; 