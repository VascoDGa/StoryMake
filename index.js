import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import config from './config/index.js';
import mongoose from 'mongoose';
import routes from './routes/index.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use("/api/v1" , routes);


app.all("*", (_req, res) => {
  return res.status(404).json({
      success: false,
      message: "Route not found"
  })
})

;(async () => {
    try {
      await mongoose.connect(config.MONGODB_URL)
      console.log("Database connected successfully");

      app.on("error", (err) => {
        console.log("Error : ",err)
        throw err
      })

      const options = {
        method: 'POST',
        url: 'https://chatgpt-api8.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': `${config.api_key}`,
          'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        data: [
          {
            content: '',
            role: 'user'
          }
        ]
      };

      app.post("/chat", async (req, res) => {
          try{
              const { prompt } = req.body;
              options.data[0].content = `Give me a story of about 1500 words based on the following prompt : ${prompt}`;
              const response = await axios.request(options);
              res.send(response.data);
          } catch (err) {
              console.error(err);
          }
      })

      const port = 5000;
      app.listen( port , () => {
          console.log(`Server listening on port ${port}`);
      })
  }
  catch(err) {
    console.log("Error: ", err);
    throw err;
  }
})()