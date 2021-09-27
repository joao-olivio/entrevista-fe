// export const getImageSrc = (path) => {
//   const src = require.context('~/assets/images/', false, /\.png|\.jpg\.svg|$/)
//   return src(`./${path}`)
// }

export const getIconSrc = (path) => {
  const src = require.context('~/assets/icons/', false, /\.png|\.jpg\.svg|$/)
  return src(`./${path}`)
}

export const getCharAssets = (path) => {
  const src = require.context('~/assets/chars/', false, /\.png|\.jpg\.svg|$/)
  return src(`./${path}`)
}
