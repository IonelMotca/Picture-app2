function getPolConf(req, res) {
    res.render('shared/pol-conf');
  }

  function getPolCookies(req, res) {
    res.render('shared/pol-cookies');
  }
  function getTermCond(req, res) {
    res.render('shared/termeni-si-conditii');
  }
  function getDespreNoi(req, res) {
    res.render('shared/despre-noi');
  }

module.exports = {
    getPolConf: getPolConf,
    getPolCookies: getPolCookies,
    getTermCond: getTermCond,
    getDespreNoi: getDespreNoi
}