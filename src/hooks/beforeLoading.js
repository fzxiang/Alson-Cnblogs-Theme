/**
 * ----------------------------------------------
 * @describe: loading 开始前
 */

export default function main(_) {
    if (typeof _.__config.hooks.beforeLoading === "function")
        _.__config.hooks.beforeLoading(_);
}