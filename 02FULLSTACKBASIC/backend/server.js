import express from 'express'
const app = express()

app.use(express.static('dist'))



// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// })
 
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {id: 1, joke: "Why did the chicken cross the road? To get to the other side!", title: "Chicken Joke"},
        {id: 2, joke: "What do you call fake spaghetti? An impasta!", title: "Pasta Joke"},
        {id: 3, joke: "Why don't scientists trust atoms? Because they make up everything!", title: "Atom Joke"},
        {id: 4, joke: "What do you call cheese that isn't yours? Nacho cheese!", title: "Cheese Joke"},
        {id: 5, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", title: "Scarecrow Joke"}
    ];
    res.json(jokes);
})





const port = 4000

app.listen(port,()=>{
    console.log('server is running ');
    
})