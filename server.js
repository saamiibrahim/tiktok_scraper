const express = require('express');
const app = express();
const TikTokScraper = require('tiktok-scraper');

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

const options = {
  number: 50,
  proxy: '',
  by_user_id: false,
  asyncDownload: 5,
  asyncScraping: 3,
  filepath: `CURRENT_DIR`,
  fileName: `CURRENT_DIR`,
  filetype: `na`,
  userAgent: '',
  noWaterMark: false,
  hdVideo: false,
};

app.get('/api' , async(req,res) => {
  try{
  const video_url = req.query.video_url;
//  const tiktok_url = 'https://www.tiktok.com/@tiktok/video/' + video_url;
 
 (async () => {
  try {
      const videoMeta = await TikTokScraper.getVideoMeta(video_url, options);
      // console.log(videoMeta);
res.json(videoMeta);

  } catch (error) {
      // console.log(error);
      res.json(error);
      
  }
})();
 
 
// res.json(tiktok_url);
  }catch(err){
      res.json({message : err});
  }
  });

app.listen(8080)