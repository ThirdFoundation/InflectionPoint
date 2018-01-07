import renderFullPage from '../views/Layout';

const personController = (req, res) => {
    const fullPage = renderFullPage();
    res.send(fullPage);
    return;
};

export default personController;
