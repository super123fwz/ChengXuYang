const apipath = "https://www.lysongs.top/cxy/"


function userActionLogin(data) {
  const path = apipath + "UserAction/login"
  return requestutil(path, data)
}
function userActionregister(data){
  const path = apipath + "UserAction/register"
  return requestutil(path, data)
}
function drugActionList(data){
  const path=apipath+"DrugAction/list"
  return requestutil(path,{})
}

function requestutil(url, pream) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: pream,
      method: "POST",
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    })
  })
}
module.exports = {
  userActionLogin,
  userActionregister,
  drugActionList
}