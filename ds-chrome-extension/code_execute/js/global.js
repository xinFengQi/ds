if (!window.ds) {
    window.ds = {
        title: '来自扩展',
    }
} else {
    window.ds = { ...window.ds, title_chrom_extension: '扩展进行处理' }
}

window.ds.showtWebVitals = (cb) => {
    reportWebVitals(cb)
}

const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function && window.webVitals) {
        window.webVitals.getCLS(onPerfEntry);
        window.webVitals.getFID(onPerfEntry);
        window.webVitals.getFCP(onPerfEntry);
        window.webVitals.getLCP(onPerfEntry);
        window.webVitals.getTTFB(onPerfEntry);
    }
};

const logVitals = (data) => {
    function isJudge([fast, nofast, last], data){
        if(data <= fast) {
            return '良好';
        } else if(data < nofast) {
            return '需要改进'
        } else {
            return '差'
        }
    }
    const showData = {};
    if(data.name === 'LCP') {
        showData.name = '最大内容渲染(LCP)';
        showData.dec = '视窗（viewport）内所有可见元素中尺寸最大的文本块或图像所需的渲染时间'
    }
    if(data.name === 'FCP') {
        showData.name = '最初始的渲染效果(FCP)';
        showData.dec = '检测第一个文本块或者图像渲染完成的时间'
        showData.isJudge = isJudge([2.5, 4, null], data.value/1000 )

    }
    if(data.name === 'FID') {
        showData.name = '第一次输入事件延迟(FID)';
        showData.dec = '用户第一次交互事件触发到主线程接收事件然后反应之间的时间';
        showData.isJudge = isJudge([0.1, 0.3, null], data.value/1000 )

    }
    if(data.name === 'CLS') {
        showData.name = '累积布局偏移(CLS)';
        showData.dec = '首屏页面渲染过程中所有元素结点相对原始位置所发生的位置偏移累积量';
    }
    if(data.name === 'TTI') {
        showData.name = '网页加载体验(TTI)';
        showData.dec = '从开始加载网页内容到开始有足够快的用户交互反应速度时之间的耗时';
    }

    if(data.name === 'TTFB') {
        showData.name = '网络请求时间(TTFB)';
        showData.dec = '最初的网络请求被发起到从服务器接收到第一个字节这段时间';
    }
    showData.value = '指标是' + (data.value/1000).toFixed(3) + 's';
    showData.delta = '增量是' + (data.delta/1000).toFixed(3) + 's';
    console.table(showData)
}

reportWebVitals(logVitals)