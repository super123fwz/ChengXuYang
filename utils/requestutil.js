const apipath = "https://www.lysongs.top/cxy/"


function userActionLogin(data) {
  const path = apipath + "UserAction/login"
  return requestutil(path, data)
}

function userActionregister(data) {
  const path = apipath + "UserAction/register"
  return requestutil(path, data)
}

function userActionAddNotice(data) {
  const path = apipath + "UserAction/addNotice"
  return requestutil(path, data)
}

function userActionListNotice(data) {
  const path = apipath + "UserAction/listNotice"
  return requestutil(path, data)
}

function drugActionList(data) {
  const path = apipath + "DrugAction/list"
  return requestutil(path, {})
}

function drugActionSet(data) {
  const path = apipath + "DrugAction/set"
  return requestutil(path, data)
}

function drugActionAdd(data) {
  const path = apipath + "DrugAction/add"
  return requestutil(path, data)
}

function employeeActionGet(data) {
  const path = apipath + "EmployeeAction/get"
  return requestutil(path, data)
}

function employeeActionList() {
  const path = apipath + "EmployeeAction/list"
  return requestutil(path, {})
}

function employeeUpdate(data) {
  const path = apipath + "EmployeeAction/update"
  return requestutil(path, data)
}

function employeeDel(data) {
  const path = apipath + "EmployeeAction/del"
  return requestutil(path, data)
}

function employeeAdd(data) {
  const path = apipath + "EmployeeAction/add"
  return requestutil(path, data)
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
  userActionAddNotice,
  userActionListNotice,
  drugActionList,
  drugActionSet,
  drugActionAdd,
  employeeActionGet,
  employeeActionList,
  employeeUpdate,
  employeeAdd,
  employeeDel,
}