import cookieParser from 'cookie-parser';
import compression from 'compression';
import app from './initialize';
import express from 'express';
import helmet from 'helmet';
import path from 'path';

app.use(compression());
app.use(helmet({ hsts: false }));
app.use(cookieParser());

// app.use(require('serve-favicon')(path.resolve(__dirname, '../../static/assets/favicon.ico')));

app.use(express.static(path.join(__dirname, '../../')));

export default app;
