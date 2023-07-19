import mockJS from 'mockjs'

const userList = mockJS.mock({
  'data|10': [
    {
      name: '@cname',
      'id|+1': 1,
      time: '@time',
    },
  ],
})
module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: userList,
      }
    },
  },
]
