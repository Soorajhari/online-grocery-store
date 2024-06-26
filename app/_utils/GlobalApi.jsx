const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api'
})

const getCategory=()=>axiosClient.get('/categories?populate=*')
const getSlider=()=>axiosClient.get('/sliders?populate=*').then((resp)=>{
    return resp.data.data
})
export default{
    getCategory,
    getSlider
}