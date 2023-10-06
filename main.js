//main.js
import axios from 'axios'
axios.defaults.baseURL="http://data.psweb.top:3333/"

axios.get('/Test.json').then(res=>{
    console.log(res.data)
    
})
axios.post('/Test.json').then(res=>{
    console.log(res.data)
    
})
axios.delete('/Test.json').then(res=>{
    console.log(res.data)
    
})
axios.put('/Test.json').then(res=>{
    console.log(res.data)
    
})
axios.get('/users').then(res=>{
    console.log(res.data)
    
})
//当前env
console.log(import.meta.env)
