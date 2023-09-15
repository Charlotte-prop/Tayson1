var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.0717491763133653,
        "pitch": 0.1726474606998245,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.7799451654875034,
          "pitch": 0.3532512807104897,
          "rotation": 10.995574287564278,
          "target": "1-toilet"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.749059727836496,
          "pitch": -0.23733695629447027,
          "title": "Wardrobe",
          "text": "Slide to open"
        }
      ]
    },
    {
      "id": "1-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.4763226042660236,
        "pitch": 0.4908786577923294,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.7283539773232892,
          "pitch": 1.041549434656968,
          "rotation": 7.853981633974483,
          "target": "0-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12118382783259918,
          "pitch": -0.038924259763119196,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">bathroom cabinet</span>",
          "text": "full of toliet paper"
        }
      ]
    }
  ],
  "name": "Tayson 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
