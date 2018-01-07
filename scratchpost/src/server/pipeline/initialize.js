import dnsCache from 'dnscache';
import express from 'express';
import webpack from 'webpack';
import webpackLocConfig from '../../../webpack.config';

const app = express();

// init dns stuff
// !Important: update DNS cache according to your use case
// DNS for the external services in AWS can change every hour
// or more often.K˚
dnsCache({
    enable: true,
    ttl: 30,
    cachesize: 1000,
});

export default app;
