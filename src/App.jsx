import React from 'react';
import { Brand, CTA, Navbar} from './components';
import { Footer, Header, Blog, Possibility, WhatGPT3, Features} from './container';
import './App.css';
export const App = () => (
        <div className="App">
        <div className="gradient_bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </div>
    );
export default App