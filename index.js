const koa=require('koa');
const path=require('path')
const json=require('koa-json')
const KoaRouter=require("Koa-router")
const bodyParser=require('body-parser')
const render=require('koa-ejs')



//Creating an istance of the app and router object
const app=new koa();
const router=new KoaRouter();

//convert into json format
app.use(json())

//creating a path for send file 

render(app,{
root:path.join(__dirname,'views'),
layout:'index',
viewExt:'html',
cache:false,
debug:false

})

//using routers

app.use(router.routes()).use(router.allowedMethods())



//writing API networking calls

router.get("/html_code",async ctx=>{

    await ctx.render('index')
    await ctx.render('layout')

})


router.get("/time", async ctx=>{
    
 start=new Date().getTime()

 
 end=new Date().getTime()
 ctx.body=`The execution time is: ${start-end}`
})

router.post('/users/data',async ctx=>{
    // we will handle here our post request with database

})

router.get("/mapping/values",async ctx=>{

     const values=[1,2,3,4,5]
     function mapping(number){
     const result=values.map(num=> num**number);
     console.log(result)
     ctx.body=result
     }
     mapping(number=2)
})

router.get("/filtering/values", async ctx=>{

    const values=[1,2,3,4,5,6]
    function filtering(num){ 
        result = values.filter(num=>num>5)
        return result;
     } 
     console.log(filtering());
     ctx.body=filtering()

})


router.get("/reducing/values",async ctx=>{
    const values=[1,2,3,4]

    function reducing(){
        result = values.reduce((accumulator,currentValue) => accumulator+currentValue)
        return result

    }
    ctx.body=reducing()
    console.log(reducing())
})















//port address
app.listen(3000, () => {

    console.log("server started...")
    
})