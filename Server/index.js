const express = require("express");
const app =  express();
const port = 5000;


app.listen(port,()=>{
console.log(`app running in ${port}`)
});


app.get("/login",(req,res)=>{
res.status(200)
res.send("your on login route")
console.log("/login")

})


app.get("/signIn",(req,res)=>{
   res.status(200)
   res.send("your on signIn route")
   console.log("/signIn")
   
   })

 app.get("/search",(req,res)=>{
   res.status(200)
   res.send("your on search route")
   console.log("/search")
   
   })



   app.get("/search/dogs",(req,res)=>{
      res.status(200)
      res.send("your on searching dog route")
      console.log("/search/dogs")
      
      })


      app.get("/search/dogs/:id",(req,res)=>{
         res.status(200)
         const id = req.params.id;
         res.send(`dog : ${id}`);
         console.log(req)
         
         })
      
         app.get("/search/cats",(req,res)=>{
            res.status(200)
            res.send("your on searching cats route")
            console.log("/search/cats")
            
            })
      
      
            app.get("/search/cats/:id",(req,res)=>{
               res.status(200)
               const id = req.params.id;
               res.send(`cat : ${id}`);
               console.log(req)
               
               })
   


               app.get("/search/birds",(req,res)=>{
                  res.status(200)
                  res.send("your on searching bird route")
                  console.log("/search/birds")
                  
                  })
            
            
                  app.get("/search/birds/:id",(req,res)=>{
                     res.status(200)
                     const id = req.params.id;
                     res.send(`bird : ${id}`);
                     console.log(req)
                     
                     })   
       
                     
app.get("/adopt",(req,res)=>{
  res.status(200)
 res.send("your on adopt route")
console.log("/adopt")
                        
})
                  
                              

app.get("/donate",(req,res)=>{
   res.status(200)
  res.send("your on donate route")
 console.log("/donate")
                         
 })

 app.get("/rehome",(req,res)=>{
   res.status(200)
  res.send("your on rehome route")
 console.log("/rehome")
                         
 })


 app.get("/quiz",(req,res)=>{
   res.status(200)
  res.send("your on quiz route")
 console.log("/quiz")
                         
 })

 app.get("/article",(req,res)=>{
   res.status(200)
  res.send("your on article route")
 console.log("/article")
                         
 })


 app.get("/article/dogs",(req,res)=>{
   res.status(200)
  res.send("your on article of dogs route")
 console.log("/article/dogs")
                         
 })

 app.get("/article/cats",(req,res)=>{
   res.status(200)
  res.send("your on article of cats route")
 console.log("/article/cats")
                         
 })

 app.get("/Journey_video",(req,res)=>{
  res.status(200)
 res.send("your on journery video route")
console.log("/journeyr_video")
                        
})



 app.get("/*",(req,res)=>{
   res.status(200)
   res.send("route not available")

})