/**
 * ----------------------------------------------
 * @describe: 日夜间模式切换时
 */

export default function main(_, type) {
    if (typeof _.__config.hooks.dayNightControl === "function")
        _.__config.hooks.dayNightControl(_, type);
}