/**
 * Created by moyu on 2017/2/25.
 */

export const isDevMode = (env =>  !(env === 'production'))(process.env.NODE_ENV)