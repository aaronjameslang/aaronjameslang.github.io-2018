const { xprod } = require('ramda')

exports.zones = ['ajl7c7.com.', 'ajla.ng.', 'langsolutionsltd.com.']

const layer = subs => ({
  subs,
  fqdns: xprod(subs, exports.zones).map(
    ([sub, zone]) => sub + zone.slice(0, -1)
  )
})

exports.client = layer(['', 'www.'])
exports.server = layer(['api.'])
