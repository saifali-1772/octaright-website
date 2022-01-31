const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index',)
})

route.get('/about',(req,res)=>{
    res.render('about')
})

route.get('/contact',(req,res)=>{
    res.render('contact')
})

route.get('/services',(req,res)=>{
    res.render('service')
})

route.get('/softwareDevelopment',(req,res)=>{
    res.render('Software_Development')
})

route.get('/digitalMarketing',(req,res)=>{
    res.render('Digital_Marketing')
})

route.get('/webDevelopment',(req,res)=>{
    res.render('Web_Development')
})

route.get('/graphicDesigner',(req,res)=>{
    res.render('Graphic_Designer')
})

route.get('/crmServices',(req,res)=>{
    res.render('CRM_Services')
})

route.get('/videoEditing',(req,res)=>{
    res.render('video_Editing')
})

route.get('/service-details',(req,res)=>{
    res.render('service-details')
})

route.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})

route.get('/portfolio-details',(req,res)=>{
    res.render('portfolio-details')
})

route.get('/blog',(req,res)=>{
    res.render('blog')
})

route.get('/blog-details',(req,res)=>{
    res.render('blog-details')
})

route.get('/customer-info',(req,res)=>{
    res.render('customer')
})

route.get('*',(req,res)=>{
    // res.render('page-not-found')
    res.send("<h1>This Page is does not exist<h1>")
})

module.exports = route