/**
 * ----------------------------------------------
 * @describe: 头部进度条处理
 */
import ToProgress from "../../vendor/ToProgress/ToProgress";

export default function main(_) {
    $('#blog-news').prepend('<div id="progressBar"></div>');
    let progressBar = ToProgress && new window.ToProgress(_.__config.progressBar, '#progressBar');

    // 添加事件监听
    _.__event.scroll.handle.push(() => {
        progressBar.setProgress(_.__tools.getScrollPercent());
    });
}