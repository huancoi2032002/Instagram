import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Discovery, Reels, Messenger, Profile, Setting} from '~/view';

const config = {
    home: '/',
    discovery: '/discovery',
    reels: '/reels',
    messenger: '/messenger',
    profile: '/profile',
    setting: '/setting',
};

type Route = {
    path: string;
    component: React.ComponentType<any>;
    children?: Route[];
};

const publicRoutes: Route[] = [
    { path: config.home, component: Home },
    { path: config.discovery, component: Discovery },
    { path: config.reels, component: Reels },
    { path: config.messenger, component: Messenger },
    { path: config.profile, component: Profile },
    { path: config.setting, component: Setting },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };