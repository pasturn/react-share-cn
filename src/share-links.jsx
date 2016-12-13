import { toQueryString } from './utils'

export function weibo (url, {appkey, title, pic, ralateUid}) {
  console.assert(url, 'weibo.url')
  return 'http://service.weibo.com/share/share.php?' + toQueryString({
    url: url,
    appkey: appkey,
    titile: title,
    pic: pic,
    ralateUid: ralateUid || '1046433710',
    rnd: new Date().valueOf()
  })
}

export function wechat () {

}

export function moments () {

}

export function qzone (url, { title, pic, from }) {
  console.assert(url, 'qzone.url')
  return 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + toQueryString({
    url: url,
    title: title,
    pics: pic,
    site: from
  })
}

export function renren (url, { title, pic }) {
  console.assert(url, 'renren.url')
  return 'http://widget.renren.com/dialog/share?' + toQueryString({
    resourceUrl: url,
    title: title,
    images: pic
  })
}

export function tmb (url, { title, pic, from }) {
  return ('http://share.v.t.qq.com/index.php?c=share&a=index&title=' + title + '&site=' + from + '&pic=' + pic +' &url=' + url + '')
}

export function tieba (url, { title, pic, from }) {
  return 'http://tieba.baidu.com/f/commit/share/openShareApi?' + toQueryString({
    url: url,
    title: title,
    desc: '',
    comment: ''
  })
}

export function douban (url, { title, pic, from }) {
  return 'https://www.douban.com/share/service?' + toQueryString({
    href: url,
    name: title,
    text: ''
  })
}

export function kaixin (url, { title, pic, from }) {
  return 'http://www.kaixin001.com/repaste/bshare.php?' + toQueryString({
    url: url,
    rtitle: title,
    rurl: url,
    from: from
  })
}