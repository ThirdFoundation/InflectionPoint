import app from './pipeline/finalStep.js';

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
    if (!err) {
        console.log('==================================================================================');
        console.log(`Application running on port: ${port}`);
        console.log('==================================================================================');
    } else {
        console.log(err);
    }
});

/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import colors from 'colors';

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.yellow);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.orange));
    }

    console.log(`Webpack stats: ${stats}`);

    // The build is succeeded.
    console.log('App bundling successful!'.green);

    return 0;
});
