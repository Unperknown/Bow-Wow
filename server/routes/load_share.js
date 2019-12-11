var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let share = [
    {
      username: 'unperknown',
      images: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        }
      ],
      written: '우리 귀여운 다람쥐!',
      likes: 14
    },
    {
      username: 'unperknown',
      images: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        }
      ],
      written: '우리 귀여운 다람쥐2!',
      likes: 5
    },
    {
      username: 'unperknown',
      images: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        }
      ],
      written: '우리 귀여운 다람쥐3!',
      likes: 1
    }
  ]
  res.json({ articles: share });
});

module.exports = router;
