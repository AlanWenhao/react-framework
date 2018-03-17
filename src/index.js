import React from 'react';
import ReactDom from 'react-dom';
// see https://www.npmjs.com/package/react-hot-loader#migrating-from-v3
// react单纯配HMR是不行的,HMR的动态刷新会把react当前组件的state清空，需要配合react-hot-loader
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import getRouter from 'router/router';
import store from './redux/store';

/*初始化*/
renderWithHotReload(getRouter());

// 模块热替换HMR，可以在webpack config文件中配置，也可以在npm script中直接使用--hot
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app'));
}
