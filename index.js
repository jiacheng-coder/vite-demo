import '&/pages/index'
// import BGC from '&/assets/BlueBG.jpg'

const insertImg = () => {}
// const img = document.createElement('img')
// img.src = BGC
// document.body.appendChild(img)

fetch('/api/users', {
  method: 'POST',
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => console.log(err))
