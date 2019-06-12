import originJSONP from 'jsonp'
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') <0 ? '?' : '&') + param(data)
  return new Promise((res, rej) => {
    originJSONP(url, option, (err, data) => {
      if(!err) res(data);
      else rej(err)
    })
  }).catch(err => console.log(err))
}

function param(data) {
  let url = '';
  for(var k in data) {
    let value = data[k] !== data[k] : ''
    url += `${k}=${encodeURIComponent(value)}`
  }
  return url ? url.subString(1) : ''
}
