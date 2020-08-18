TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonStop": [
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 24,
    "height": 24,
    "maxHeight": 24,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "top": "0%",
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
    "maxWidth": 24,
    "minWidth": 1,
    "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D.png",
    "borderRadius": 0,
    "data": {
     "name": "X"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D_rollover.png",
    "class": "IconButton",
    "right": "0%",
    "paddingTop": 0,
    "minHeight": 1
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 40,
    "height": 40,
    "maxHeight": 80,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "top": 20,
    "click": "this.setComponentVisibility(this.Container_ECB4524F_E163_9AF0_41E5_60E049D28740, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
    "maxWidth": 80,
    "minWidth": 1,
    "iconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0.png",
    "borderRadius": 0,
    "data": {
     "name": "IconButton X"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0_rollover.png",
    "class": "IconButton",
    "left": 20,
    "minHeight": 1,
    "paddingTop": 0
   },
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "hfovMax": 130,
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "backgroundColor": "#404040",
   "label": "Media",
   "class": "Menu",
   "id": "Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
   "rollOverFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "children": [
    {
     "label": "Parque Puente Cimbra",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "Plaza de Armas",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "Calle Chacabuco/Salinas",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "Calle Comercio",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "Calle Comercio Vista 2",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "Calle Comercio/Aspee",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "Calle Comercio/O'Higgins",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "Parque Cementerio de Carretas",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "El Llano",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "opacity": 0.4
  },
  "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
  "class": "Panorama",
  "label": "Parque Puente Cimbra",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "overlay_E56B8391_FD83_162E_41DD_3D1724CB6C38",
      "bleaching": 0.21,
      "bleachingDistance": 0.64,
      "class": "LensFlarePanoramaOverlay",
      "yaw": -131.95,
      "pitch": 38.93
     },
     {
      "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0",
      "inertia": false,
      "hfov": 43.2,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6, {'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconLineWidth':5,'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconWidth':20,'pressedIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingTop':5,'iconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverBorderColor':'#000000','borderSize':0}, null, null, null, null, null, false)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_E2EE4A9F_FD81_1653_41EB_EA207627AD4D",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 91.89,
        "hfov": 6.69,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 130,
           "width": 130,
           "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.64
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": 91.89,
      "hideDuration": 500,
      "hfov": 6.69,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "80%",
      "pitch": 8.64,
      "popupMaxWidth": "80%",
      "id": "popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 442,
         "width": 829,
         "url": "media/popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6_0_0.jpg",
         "class": "ImageResourceLevel"
        },
        {
         "height": 272,
         "width": 511,
         "url": "media/popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "showEasing": "cubic_in"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066, {'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconLineWidth':5,'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconWidth':20,'pressedIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingTop':5,'iconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverBorderColor':'#000000','borderSize':0}, null, null, null, null, null, false)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_E27C5582_FDBF_122D_41EB_A27AB7E62A11",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -63.78,
        "hfov": 6.64,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 130,
           "width": 130,
           "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.32
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": -63.78,
      "hideDuration": 500,
      "hfov": 6.64,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "80%",
      "pitch": 11.32,
      "popupMaxWidth": "80%",
      "id": "popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 533,
         "width": 800,
         "url": "media/popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066_0_0.jpg",
         "class": "ImageResourceLevel"
        },
        {
         "height": 341,
         "width": 512,
         "url": "media/popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "showEasing": "cubic_in"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0D56B69D_0367_ACE7_4185_3811F8EC2BD3",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 1.23,
        "hfov": 15.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 155,
           "width": 296,
           "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.18
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0D9E8202_0362_A7DD_413A_1B10651B0760",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 1.19,
        "hfov": 14.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 335,
           "width": 292,
           "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.2
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": "this.IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "touchControlMode": "drag_rotation",
  "buttonStop": [
   "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "class": "PanoramaPlayer",
  "buttonToggleHotspots": {
   "transparencyActive": true,
   "mode": "toggle",
   "width": 37,
   "height": 31,
   "maxHeight": 31,
   "propagateClick": false,
   "paddingBottom": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733_pressed.png",
   "paddingRight": 0,
   "cursor": "hand",
   "id": "IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
   "maxWidth": 37,
   "minWidth": 1,
   "iconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733.png",
   "borderRadius": 0,
   "data": {
    "name": "button show hotspots"
   },
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "class": "IconButton",
   "minHeight": 1,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -10.52,
   "class": "PanoramaCameraPosition",
   "yaw": 171.85,
   "hfov": 130
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 130,
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
  "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
  "class": "Panorama",
  "label": "Plaza de Armas",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_tcap0",
      "inertia": false,
      "hfov": 40.8,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794, {'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconLineWidth':5,'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconWidth':20,'pressedIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingTop':5,'iconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverBorderColor':'#000000','borderSize':0}, null, null, null, null, null, false)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_E4A97113_FD83_3252_41E4_DA0F70DA88F6",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -169.29,
        "hfov": 5.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 129,
           "width": 129,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 40.56
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": -169.29,
      "hideDuration": 500,
      "hfov": 5.06,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "80%",
      "pitch": 40.56,
      "popupMaxWidth": "80%",
      "id": "popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 512,
         "width": 504,
         "url": "media/popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794_0_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "showEasing": "cubic_in"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0DB0F0C5_036D_6467_4175_1ECFA3A3D7BC",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 23.98,
        "hfov": 7.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 150,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.84
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB, this.camera_139825AB_037F_6C23_417E_4AF177A82E0E); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0D8678DF_036D_E463_4171_5781BA69B0EB",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -88.56,
        "hfov": 7.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 150,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.7
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0C353D64_036E_BC25_4180_80E041DA2514",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -133.15,
        "hfov": 7.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 198,
           "width": 150,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.35
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0C4C6BC4_036E_A465_418A_B6FB8F09F6E4",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 23.98,
        "hfov": 17.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 287,
           "width": 353,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.82
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_11012D6D_0362_9C27_4180_4562ECD0D240",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -88.67,
        "hfov": 14.4,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 337,
           "width": 288,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.58
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_126CD330_0363_E43D_415B_C7356528EE10",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -133.04,
        "hfov": 14.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 329,
           "width": 296,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.33
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD, this.camera_13ABE59B_037F_6CE3_4158_05D31057EE80); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_136D83BC_0362_A425_4170_546AECB510C9",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 110.53,
        "hfov": 7.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 150,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 19.48
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_1329CD27_0362_9C23_4187_3B09D00B114D",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 110.61,
        "hfov": 13.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 306,
           "width": 281,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 19.62
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 3.02,
   "class": "PanoramaCameraPosition",
   "yaw": 166.76,
   "hfov": 124
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 130,
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
  "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
  "class": "Panorama",
  "label": "Calle Chacabuco/Salinas",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_tcap0",
      "inertia": false,
      "hfov": 27.6,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_0C9F3D9C_0365_BCE5_4189_C941867730B2",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 47.86,
        "hfov": 7.2,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 150,
           "url": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 22.8
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_1301E5D6_0367_6C65_4160_5EED2171BB05",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 92.44,
        "hfov": 7.15,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 150,
           "url": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 23.82
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1120D7ED_0366_AC27_415A_5F46875395A0",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [],
      "items": [
       {
        "yaw": 92.27,
        "hfov": 13.61,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 337,
           "width": 285,
           "url": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 23.55
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_13BE28D1_0365_A47F_4189_3FCB15222C6F",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [],
      "items": [
       {
        "yaw": 47.83,
        "hfov": 13.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 290,
           "width": 287,
           "url": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 22.84
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.37,
   "pitch": -2.65
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 130,
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
  "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": -20.49,
    "panorama": {
     "hfovMax": 130,
     "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004",
     "partial": false,
     "vfov": 180,
     "pitch": 0,
     "hfovMin": 60,
     "hfov": 360,
     "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
     "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": 67.7,
       "panorama": {
        "hfovMax": 130,
        "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
        "vfov": 180,
        "partial": false,
        "pitch": 0,
        "hfovMin": 60,
        "hfov": 360,
        "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
        "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 56.31,
          "panorama": {
           "hfovMax": 131,
           "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
           "partial": false,
           "vfov": 180,
           "pitch": 0,
           "hfovMin": 60,
           "hfov": 360,
           "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
           "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "yaw": -99.22,
             "panorama": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
             "backwardYaw": 56.31,
             "distance": 1
            }
           ],
           "label": "Calle Comercio/O'Higgins",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF, this.camera_153F2140_039F_E45D_418B_C2F56CDC2C7C); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "image"
                }
               ],
               "maps": [],
               "id": "overlay_159EA224_016F_BB0F_40CA_E4C293003800",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "1"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -99.22,
                 "hfov": 7.66,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "frameDuration": 76,
                  "colCount": 24,
                  "class": "AnimatedImageResource",
                  "levels": [
                   {
                    "height": 90,
                    "width": 2400,
                    "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "rowCount": 1
                 },
                 "pitch": -11.37
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showWindow(this.window_1A6F643F_02B1_2A4B_4165_ADDCAEA280A5, null, false)",
                 "mapColor": "image"
                }
               ],
               "maps": [],
               "id": "overlay_1A21252B_02B1_2A4B_4167_33D1AB204F98",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 106.42,
                 "hfov": 5.2,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 100,
                    "width": 100,
                    "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.2
                }
               ]
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 3456,
                "width": 6912,
                "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ]
          },
          "backwardYaw": -99.22,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "yaw": -121.46,
          "panorama": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
          "backwardYaw": 67.7,
          "distance": 1
         }
        ],
        "label": "Calle Comercio/Aspee",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674, this.camera_1507114E_039F_E465_4172_CF77642467EA); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "image"
             }
            ],
            "maps": [],
            "id": "overlay_12329761_016E_D909_4167_C240BA83D0B1",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "1"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 56.31,
              "hfov": 7.78,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "frameDuration": 76,
               "colCount": 24,
               "class": "AnimatedImageResource",
               "levels": [
                {
                 "height": 90,
                 "width": 2400,
                 "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "rowCount": 1
              },
              "pitch": -5.61
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_F09BE238_FD81_765E_41DD_692A05D67004, this.camera_150D815C_039F_E465_418C_7FAB8B3F5611); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "image"
             }
            ],
            "maps": [],
            "id": "overlay_14D70DCF_0163_4919_4133_581227E908C0",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "1"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -121.46,
              "hfov": 7.54,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "frameDuration": 76,
               "colCount": 24,
               "class": "AnimatedImageResource",
               "levels": [
                {
                 "height": 90,
                 "width": 2400,
                 "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "rowCount": 1
              },
              "pitch": -15.21
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showWindow(this.window_1A2201D7_0291_2DDA_4171_B3BD567FE6A6, null, false)",
              "mapColor": "image"
             }
            ],
            "maps": [],
            "id": "overlay_158A1FD4_0293_75DE_4168_0F44C6770E84",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -83.5,
              "hfov": 5.18,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 100,
                 "width": 100,
                 "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 5.72
             }
            ]
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 3456,
             "width": 6912,
             "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ]
       },
       "backwardYaw": -121.46,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -113.36,
       "panorama": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
       "backwardYaw": -20.49,
       "distance": 1
      }
     ],
     "label": "Calle Comercio Vista 2",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF, this.camera_15241109_039F_E5EF_4183_4552F64D1AB1); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "image"
          }
         ],
         "maps": [],
         "id": "overlay_12776E98_0161_CB07_4158_632F68287054",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "1"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 67.7,
           "hfov": 7.67,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "frameDuration": 76,
            "colCount": 24,
            "class": "AnimatedImageResource",
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "rowCount": 1
           },
           "pitch": -11.1
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB, this.camera_1529A117_039F_E5E3_4187_038E1522EE7F); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "image"
          }
         ],
         "maps": [],
         "id": "overlay_1446FA86_0163_4B0B_417D_4E5F56B55DB9",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "1"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -113.36,
           "hfov": 7.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "frameDuration": 76,
            "colCount": 24,
            "class": "AnimatedImageResource",
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "rowCount": 1
           },
           "pitch": -11.37
          }
         ]
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ]
    },
    "backwardYaw": -113.36,
    "distance": 1
   }
  ],
  "label": "Calle Comercio",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_tcap0",
      "inertia": false,
      "hfov": 36,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F09BE238_FD81_765E_41DD_692A05D67004, this.camera_1537F132_039F_E43D_4177_30EFA2AAE24A); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_12D4EBB2_0163_C90B_417A_34B0ACAC2166",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "1"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -20.49,
        "hfov": 7.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "colCount": 24,
         "class": "AnimatedImageResource",
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "rowCount": 1
        },
        "pitch": -17.14
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_1BD9F817_0161_F709_416A_1F2A176825A9",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "1"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 165.31,
        "hfov": 7.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "colCount": 24,
         "class": "AnimatedImageResource",
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "rowCount": 1
        },
        "pitch": -5.06
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -8.98,
   "class": "PanoramaCameraPosition",
   "yaw": -12.07,
   "hfov": 127
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
 {
  "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -7.49,
   "class": "PanoramaCameraPosition",
   "yaw": 68.74,
   "hfov": 122
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
 {
  "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 60.66,
   "pitch": 2.69
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
 {
  "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.66,
   "class": "PanoramaCameraPosition",
   "yaw": 73.18,
   "hfov": 126
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 130,
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
  "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": -46.1,
    "panorama": {
     "hfovMax": 130,
     "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
     "partial": false,
     "vfov": 180,
     "pitch": 0,
     "hfovMin": 60,
     "hfov": 360,
     "cardboardMenu": "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
     "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -134.64,
       "panorama": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
       "backwardYaw": -46.1,
       "distance": 1
      }
     ],
     "label": "El Llano",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D, this.camera_13D01563_037F_6C23_4182_C8A6A1CB48E8); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "image"
          }
         ],
         "maps": [],
         "id": "overlay_0C877998_037D_64ED_4164_21C42C88E3F4",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -101.35,
           "hfov": 7.4,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 198,
              "width": 150,
              "url": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 18.65
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "image"
          }
         ],
         "maps": [],
         "id": "overlay_12EA85D4_037F_6C65_4183_01FF2C915B35",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -101.41,
           "hfov": 14.72,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 275,
              "width": 298,
              "url": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 18.61
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A, this.camera_15311125_039F_E427_417C_842A6A4B0E2F); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "image"
          }
         ],
         "maps": [],
         "id": "overlay_1245FF38_0365_9C2D_4178_A7FD9211A73B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "1"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -134.64,
           "hfov": 7.77,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "frameDuration": 76,
            "colCount": 24,
            "class": "AnimatedImageResource",
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "rowCount": 1
           },
           "pitch": -5.67
          }
         ]
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ]
    },
    "backwardYaw": -134.64,
    "distance": 1
   }
  ],
  "label": "Parque Cementerio de Carretas",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD, this.camera_1517316B_039F_E423_4143_C218C22E7C62); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       }
      ],
      "maps": [],
      "id": "overlay_1225C4F7_0362_EC23_4161_75F4673EC0EA",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "1"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -46.1,
        "hfov": 7.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "colCount": 24,
         "class": "AnimatedImageResource",
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "rowCount": 1
        },
        "pitch": -6.57
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 123
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
 {
  "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -21.66,
   "class": "PanoramaCameraPosition",
   "yaw": -25.04,
   "hfov": 124
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, true, -1, this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
    "camera": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
    "camera": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
    "camera": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, true, -1, this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 4, 5)",
    "media": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
    "camera": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 5, 6)",
    "media": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
    "camera": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 6, 7)",
    "media": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
    "camera": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 8, 0)",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, true, -1, this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 4, 5)",
    "media": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
    "camera": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 5, 6)",
    "media": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
    "camera": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 6, 7)",
    "media": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
    "camera": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 8, 0)",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_14170593_0126_B908_417A_E645964470E6_t.jpg",
  "class": "Video",
  "video": {
   "height": 676,
   "width": 1200,
   "mp4Url": "media/video_14170593_0126_B908_417A_E645964470E6.mp4",
   "class": "VideoResource"
  },
  "label": "Territorios - Putaendo",
  "width": 1200,
  "id": "video_14170593_0126_B908_417A_E645964470E6",
  "loop": false,
  "height": 676,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_15FD70DB_039F_E463_415F_306234078D13",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_14170593_0126_B908_417A_E645964470E6",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_15FD70DB_039F_E463_415F_306234078D13, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_15FD70DB_039F_E463_415F_306234078D13, 0, this.video_14170593_0126_B908_417A_E645964470E6)"
   }
  ]
 },
 "this.Menu_15D990F2_039F_E43D_418C_C6A55FDEDAE9",
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A",
  "easing": "linear"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_1A687CB6_02B3_1A5A_4152_D6E0363828DD",
  "easing": "linear"
 },
 {
  "duration": 8000,
  "class": "FadeOutEffect",
  "id": "effect_1505B9C3_0291_1A3B_4176_91AC933F53E5",
  "easing": "linear"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_18FC46C0_0291_1636_4178_D42A4CC7C980",
  "easing": "linear"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_14B56463_03A3_6C23_416F_105FDA79FC3E",
  "easing": "linear"
 },
 "this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
 "this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
 "this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
 {
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 1,
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "contentOpaque": false,
  "footerHeight": 5,
  "gap": 8,
  "closeButtonPressedIconColor": "#FFFFFF",
  "modal": true,
  "bodyPaddingLeft": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconHeight": 12,
  "propagateClick": false,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "closeButtonBorderRadius": 11,
  "shadow": true,
  "verticalAlign": "middle",
  "title": "OCHAVO",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "titleFontSize": 14,
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBorderColor": "#000000",
  "minWidth": 20,
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "titleTextDecoration": "none",
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "titlePaddingTop": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "veilColorDirection": "horizontal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingRight": 5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "scrollBarOpacity": 0.5,
    "width": "100%",
    "propagateClick": false,
    "paddingBottom": 10,
    "shadow": false,
    "height": "36%",
    "borderSize": 0,
    "paddingRight": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">El ochavo es un recurso arquitect\u00f3nico que cumple la funci\u00f3n de facilitar la visibilidad y el tr\u00e1nsito en los cruces de calles, permitiendo que peatones y conductores dispongan de una mejor visi\u00f3n al llegar al cruce.</SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "id": "htmlText_uid15CD90E6_039F_E425_4183_C81068A63E5A",
    "minWidth": 0,
    "data": {
     "name": "HTMLText26216"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "minHeight": 0,
    "paddingTop": 10
   },
   {
    "width": "100%",
    "url": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C.PNG",
    "propagateClick": false,
    "scaleMode": "fit_inside",
    "shadow": false,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "height": "63%",
    "borderSize": 0,
    "paddingRight": 0,
    "id": "image_uid15CD90E6_039F_E425_4183_C81068A63E5A_1",
    "minWidth": 0,
    "data": {
     "name": "Image26217"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Image",
    "minHeight": 0,
    "paddingTop": 0
   }
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [],
  "width": 400,
  "scrollBarOpacity": 0.5,
  "height": 400,
  "scrollBarMargin": 2,
  "titleFontColor": "#000000",
  "headerPaddingLeft": 10,
  "layout": "vertical",
  "headerBackgroundColorDirection": "horizontal",
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonIconColor": "#000000",
  "titleFontFamily": "Georgia",
  "titleFontWeight": "bold",
  "closeButtonIconWidth": 12,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "closeButtonBackgroundColorRatios": [],
  "borderSize": 0,
  "headerPaddingBottom": 10,
  "overflow": "scroll",
  "titlePaddingBottom": 5,
  "footerBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_1A2201D7_0291_2DDA_4171_B3BD567FE6A6",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "data": {
   "name": "Window30241"
  },
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "headerBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingRight": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerPaddingTop": 10,
  "paddingTop": 0
 },
 {
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 1,
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "contentOpaque": false,
  "footerHeight": 5,
  "gap": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "modal": true,
  "bodyPaddingLeft": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconHeight": 12,
  "propagateClick": false,
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "closeButtonBorderRadius": 11,
  "shadow": true,
  "verticalAlign": "middle",
  "title": "PILAR DE ESQUINA",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "titleFontSize": 14,
  "titleFontStyle": "normal",
  "headerVerticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBorderColor": "#000000",
  "minWidth": 20,
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "titleTextDecoration": "none",
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "titlePaddingTop": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "veilColorDirection": "horizontal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyPaddingRight": 5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "scrollBarOpacity": 0.5,
    "width": "100%",
    "propagateClick": false,
    "paddingBottom": 10,
    "shadow": false,
    "height": "34%",
    "borderSize": 0,
    "paddingRight": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">El pilar de esquina tiene por funci\u00f3n soportar el peso de la estructura superior del v\u00e9rtice de las casonas, sin perturbar el tr\u00e1nsito de los peatones por abajo. Tambi\u00e9n serv\u00edan para un aprovechamiento particular del espacio en las esquinas sin sacrificar el \u00e1rea construida de la casa que las ocupaba.</SPAN></DIV></div>",
    "scrollBarVisible": "rollOver",
    "id": "htmlText_uid15D120E8_039F_E42D_4185_C6EF35ECFA74",
    "minWidth": 0,
    "data": {
     "name": "HTMLText26218"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "minHeight": 0,
    "paddingTop": 10
   },
   {
    "width": "100%",
    "url": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC.jpg",
    "propagateClick": false,
    "scaleMode": "fit_inside",
    "shadow": false,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "height": "65%",
    "borderSize": 0,
    "paddingRight": 0,
    "id": "image_uid15D120E8_039F_E42D_4185_C6EF35ECFA74_1",
    "minWidth": 0,
    "data": {
     "name": "Image26219"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Image",
    "minHeight": 0,
    "paddingTop": 0
   }
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [],
  "width": 400,
  "scrollBarOpacity": 0.5,
  "height": 400,
  "scrollBarMargin": 2,
  "titleFontColor": "#000000",
  "headerPaddingLeft": 10,
  "layout": "vertical",
  "headerBackgroundColorDirection": "horizontal",
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonIconColor": "#000000",
  "titleFontFamily": "Georgia",
  "titleFontWeight": "bold",
  "closeButtonIconWidth": 12,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "closeButtonBackgroundColorRatios": [],
  "borderSize": 0,
  "headerPaddingBottom": 10,
  "overflow": "scroll",
  "titlePaddingBottom": 5,
  "footerBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_1A6F643F_02B1_2A4B_4165_ADDCAEA280A5",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "data": {
   "name": "Window34181"
  },
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "headerBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingRight": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerPaddingTop": 10,
  "paddingTop": 0
 },
 {
  "id": "camera_15241109_039F_E5EF_4183_4552F64D1AB1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.54,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_1529A117_039F_E5E3_4187_038E1522EE7F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 159.51,
   "hfov": 127
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_15311125_039F_E427_417C_842A6A4B0E2F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 133.9,
   "hfov": 123
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_1537F132_039F_E43D_4177_30EFA2AAE24A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 66.64,
   "hfov": 122
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_153F2140_039F_E45D_418B_C2F56CDC2C7C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.69,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_1507114E_039F_E465_4172_CF77642467EA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 80.78,
   "hfov": 126
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_150D815C_039F_E465_418C_7FAB8B3F5611",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -112.3,
   "hfov": 122
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_1517316B_039F_E423_4143_C218C22E7C62",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 45.36,
   "hfov": 124
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_104AA582_0291_EA3A_4182_D07C40B73749",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_104AB582_0291_EA3A_416D_830D066B83F2",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
  "easing": "cubic_in_out"
 },
 "this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
 "this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
 "this.effect_104AA582_0291_EA3A_4182_D07C40B73749",
 "this.effect_104AB582_0291_EA3A_416D_830D066B83F2",
 "this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511",
 "this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0",
 "this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
 "this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
 "this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
 "this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
 "this.effect_104AA582_0291_EA3A_4182_D07C40B73749",
 "this.effect_104AB582_0291_EA3A_416D_830D066B83F2",
 "this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511",
 "this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0",
 "this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
 "this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
 {
  "thumbnailUrl": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C_t.png",
  "class": "Photo",
  "duration": 5000,
  "label": "ochavo-gigapixel-scale-2_00x",
  "width": 604,
  "id": "photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C",
  "height": 404,
  "image": {
   "levels": [
    {
     "url": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C.PNG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC_t.jpg",
  "class": "Photo",
  "duration": 5000,
  "label": "29804074776_3f176df8f3_b",
  "width": 1024,
  "id": "photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC",
  "height": 768,
  "image": {
   "levels": [
    {
     "url": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 }
], "children": [
 {
  "playbackBarBorderSize": 0,
  "toolTipBorderSize": 0,
  "toolTipFontStyle": "normal",
  "toolTipFontSize": 17,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontColor": "#FFFFFF",
  "toolTipShadowOpacity": 0,
  "toolTipPaddingLeft": 12,
  "playbackBarHeadHeight": 15,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBorderRadius": 0,
  "paddingBottom": 0,
  "propagateClick": false,
  "shadow": false,
  "toolTipFontFamily": "Georgia",
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipPaddingRight": 12,
  "progressBarBorderColor": "#000000",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 10,
  "progressBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadOpacity": 1,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "progressBorderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 10,
  "toolTipOpacity": 0.7,
  "progressHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "top": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "bottom": "0%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "toolTipBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarLeft": 0,
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "minHeight": 50,
  "paddingTop": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "right": "0%"
 },
 {
  "width": "100%",
  "maxHeight": 163,
  "url": "skin/Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA.png",
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "scaleMode": "fill",
  "height": "15%",
  "borderSize": 0,
  "paddingRight": 0,
  "id": "Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA",
  "maxWidth": 1918,
  "minWidth": 1,
  "data": {
   "name": "Gradient"
  },
  "bottom": 0.03,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Image",
  "left": "0%",
  "minHeight": 1,
  "paddingTop": 0
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "width": 1650,
  "gap": 12,
  "scrollBarOpacity": 0.5,
  "height": 50,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "borderSize": 0,
  "overflow": "scroll",
  "layout": "horizontal",
  "paddingRight": 0,
  "bottom": "0%",
  "scrollBarVisible": "rollOver",
  "id": "Container_3649275E_3D3B_CF53_41C6_1DC9976EFC78",
  "minWidth": 1,
  "data": {
   "name": "-- Main Button Set"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "horizontalAlign": "left",
  "paddingLeft": 20,
  "class": "Container",
  "left": "0%",
  "minHeight": 1,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "children": [
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 82,
    "height": 38,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3",
    "maxWidth": 82,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3.png",
    "borderRadius": 0,
    "data": {
     "name": "button Ubicaci\u00f3n"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 121,
    "height": 38,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1",
    "maxWidth": 121,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1.jpg",
    "borderRadius": 0,
    "data": {
     "name": "button panorama"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 118,
    "height": 38,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setMediaBehaviour(this.playList_15FD70DB_039F_E463_415F_306234078D13, 0); this.MainViewerVideoPlayer.play(); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF",
    "maxWidth": 118,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF.png",
    "borderRadius": 0,
    "data": {
     "name": "button video gallery"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 90,
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "visible": false,
    "cursor": "hand",
    "id": "IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0",
    "maxWidth": 97,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0.png",
    "borderRadius": 0,
    "data": {
     "name": "button 360 video"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 106,
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingRight": 0,
    "visible": false,
    "cursor": "hand",
    "id": "IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3",
    "maxWidth": 115,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3.png",
    "borderRadius": 0,
    "data": {
     "name": "button photoalbum"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 82,
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "visible": false,
    "cursor": "hand",
    "id": "IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD",
    "maxWidth": 82,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD.png",
    "borderRadius": 0,
    "data": {
     "name": "button livepano"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   },
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 76,
    "height": 38,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\")",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483",
    "maxWidth": 141,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483.png",
    "borderRadius": 0,
    "data": {
     "name": "button contact"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   }
  ]
 },
 {
  "width": "100%",
  "maxHeight": 2,
  "url": "skin/Image_3117F852_3D1C_4153_41C7_F45A80F07BAF.png",
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "bottom",
  "scaleMode": "fit_to_width",
  "height": "0.22%",
  "borderSize": 0,
  "paddingRight": 0,
  "id": "Image_3117F852_3D1C_4153_41C7_F45A80F07BAF",
  "maxWidth": 1918,
  "minWidth": 1,
  "data": {
   "name": "white line"
  },
  "bottom": 52,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Image",
  "left": "0%",
  "minHeight": 1,
  "paddingTop": 0
 },
 {
  "transparencyActive": false,
  "mode": "push",
  "width": 49,
  "height": 37,
  "maxHeight": 37,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "borderSize": 0,
  "paddingRight": 0,
  "visible": false,
  "cursor": "hand",
  "bottom": 7,
  "id": "IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "maxWidth": 49,
  "minWidth": 1,
  "iconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1.png",
  "borderRadius": 0,
  "data": {
   "name": "IconButton VR"
  },
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "rollOverIconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1_rollover.png",
  "class": "IconButton",
  "right": 20,
  "paddingTop": 0,
  "minHeight": 1
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "width": 1207.4,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 520,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "top",
  "borderSize": 0,
  "overflow": "scroll",
  "top": 78,
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_5A4FF621_5292_00D1_41C0_CD8A96F5E4AB",
  "minWidth": 1,
  "data": {
   "name": "- Container Title"
  },
  "borderRadius": 0,
  "layout": "absolute",
  "backgroundOpacity": 0,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "class": "Container",
  "left": 17,
  "minHeight": 1,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "children": [
   {
    "width": 571,
    "height": 103,
    "maxHeight": 103,
    "url": "skin/Image_5AA7538E_5272_07D3_4182_395FFD794174.png",
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "top": "0%",
    "paddingRight": 0,
    "visible": false,
    "id": "Image_5AA7538E_5272_07D3_4182_395FFD794174",
    "maxWidth": 571,
    "minWidth": 1,
    "data": {
     "name": "T01"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Image",
    "left": "0.11%",
    "minHeight": 1,
    "paddingTop": 0
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "width": 350,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "height": 110,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "top",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_5791757B_5C95_8734_4195_AD2599C9941B",
  "minWidth": 1,
  "data": {
   "name": "-- Settings button set"
  },
  "borderRadius": 0,
  "layout": "absolute",
  "backgroundOpacity": 0,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "class": "Container",
  "minHeight": 1,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "width": 110,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "height": 110,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "overflow": "scroll",
    "top": "0%",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_57887AFF_5C94_8D2C_41D1_D25764D9D6F5",
    "minWidth": 1,
    "data": {
     "name": "container setting button"
    },
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "transparencyActive": false,
      "mode": "push",
      "width": 60,
      "height": 60,
      "maxHeight": 60,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "click": "this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, false, 3500, null, 'hideEffect', false)",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E",
      "maxWidth": 60,
      "minWidth": 1,
      "iconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E.png",
      "borderRadius": 0,
      "data": {
       "name": "settings button"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "rollOverIconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E_rollover.png",
      "class": "IconButton",
      "minHeight": 1,
      "paddingTop": 0
     }
    ],
    "right": "0%"
   },
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "scrollBarOpacity": 0.5,
    "width": "60.857%",
    "gap": 3,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "height": "100%",
    "borderSize": 0,
    "overflow": "scroll",
    "top": "0%",
    "paddingRight": 0,
    "visible": false,
    "scrollBarVisible": "rollOver",
    "id": "Container_50C22332_5CED_8334_41D2_0EC5525522E0",
    "minWidth": 1,
    "data": {
     "name": "Hide buttons set"
    },
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "horizontalAlign": "right",
    "paddingLeft": 0,
    "class": "Container",
    "left": "12.8%",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "transparencyActive": true,
      "mode": "push",
      "width": 37,
      "height": 31,
      "maxHeight": 31,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "paddingRight": 0,
      "visible": false,
      "cursor": "hand",
      "id": "IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB",
      "maxWidth": 37,
      "minWidth": 1,
      "iconURL": "skin/IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB.png",
      "borderRadius": 0,
      "data": {
       "name": "button floorplan"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "class": "IconButton",
      "minHeight": 1,
      "paddingTop": 0
     },
     {
      "transparencyActive": true,
      "mode": "push",
      "width": 37,
      "height": 31,
      "maxHeight": 31,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "paddingRight": 0,
      "visible": false,
      "cursor": "hand",
      "id": "IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB",
      "maxWidth": 37,
      "minWidth": 1,
      "iconURL": "skin/IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB.png",
      "borderRadius": 0,
      "data": {
       "name": "button share"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "class": "IconButton",
      "minHeight": 1,
      "paddingTop": 0
     },
     "this.IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
     {
      "transparencyActive": true,
      "mode": "toggle",
      "width": 37,
      "height": 31,
      "maxHeight": 31,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D_pressed.png",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
      "maxWidth": 37,
      "minWidth": 1,
      "iconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D.png",
      "borderRadius": 0,
      "data": {
       "name": "button mute"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "class": "IconButton",
      "minHeight": 1,
      "paddingTop": 0
     },
     {
      "transparencyActive": true,
      "mode": "toggle",
      "width": 37,
      "height": 31,
      "maxHeight": 31,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E_pressed.png",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
      "maxWidth": 37,
      "minWidth": 1,
      "iconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E.png",
      "borderRadius": 0,
      "data": {
       "name": "button fullscreen"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "class": "IconButton",
      "minHeight": 1,
      "paddingTop": 0
     }
    ]
   }
  ],
  "right": "0%"
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "width": 213,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 27,
  "scrollBarVisible": "rollOver",
  "id": "Container_53346047_5A6C_DD58_41B9_B595FF015610",
  "minWidth": 1,
  "data": {
   "name": "--Intro video"
  },
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "horizontalAlign": "right",
  "paddingLeft": 0,
  "class": "Container",
  "minHeight": 1,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "children": [
   {
    "transparencyActive": true,
    "mode": "push",
    "width": 144,
    "height": 60,
    "maxHeight": 60,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "visible": false,
    "cursor": "hand",
    "id": "IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB",
    "maxWidth": 144,
    "minWidth": 1,
    "iconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB.png",
    "borderRadius": 0,
    "data": {
     "name": "button intro video"
    },
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB_rollover.png",
    "class": "IconButton",
    "minHeight": 1,
    "paddingTop": 0
   }
  ],
  "right": "0%"
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "layout": "absolute",
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "top",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4",
  "minWidth": 1,
  "data": {
   "name": "---INFO"
  },
  "backgroundColorDirection": "vertical",
  "bottom": "0%",
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#F10A00",
    "backgroundColor": [
     "#333333",
     "#333333"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "layout": "absolute",
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "top",
    "borderSize": 0,
    "overflow": "scroll",
    "top": "8%",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_85A02C4E_A12F_4591_41DC_68C7D63D67D7",
    "minWidth": 1,
    "data": {
     "name": "Global"
    },
    "backgroundColorDirection": "vertical",
    "bottom": "8%",
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "horizontalAlign": "left",
    "paddingLeft": 0,
    "class": "Container",
    "left": "6%",
    "scrollBarWidth": 10,
    "minHeight": 1,
    "paddingTop": 0,
    "children": [
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "backgroundColor": [
       "#000000",
       "#333333"
      ],
      "backgroundColorRatios": [
       1,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "62%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "100%",
      "borderSize": 0,
      "overflow": "scroll",
      "top": "0%",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_85A03C4E_A12F_4591_41DA_1C4E96B3B699",
      "minWidth": 1,
      "data": {
       "name": "left"
      },
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "layout": "absolute",
      "backgroundOpacity": 1,
      "horizontalAlign": "left",
      "paddingLeft": 0,
      "class": "Container",
      "left": "0%",
      "scrollBarWidth": 10,
      "minHeight": 1,
      "paddingTop": 0,
      "children": [
       {
        "width": "100%",
        "maxHeight": 948,
        "url": "skin/Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D.jpg",
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "scaleMode": "fit_outside",
        "height": "100%",
        "borderSize": 0,
        "top": "0%",
        "paddingRight": 0,
        "id": "Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D",
        "maxWidth": 1264,
        "minWidth": 1,
        "data": {
         "name": "img photo"
        },
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "class": "Image",
        "left": "0%",
        "minHeight": 1,
        "paddingTop": 0
       }
      ]
     },
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#E7392B",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "54%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 20,
      "shadow": false,
      "verticalAlign": "middle",
      "height": "100%",
      "borderSize": 0,
      "overflow": "scroll",
      "top": "0%",
      "paddingRight": 50,
      "scrollBarVisible": "rollOver",
      "id": "Container_85A01C4E_A12F_4591_41E3_CE0B8DD057F5",
      "minWidth": 600,
      "data": {
       "name": "right"
      },
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "layout": "vertical",
      "backgroundOpacity": 1,
      "horizontalAlign": "center",
      "paddingLeft": 50,
      "class": "Container",
      "scrollBarWidth": 10,
      "minHeight": 500,
      "paddingTop": 20,
      "children": [
       {
        "width": "90%",
        "url": "skin/Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944.jpg",
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "scaleMode": "fit_inside",
        "height": "90%",
        "borderSize": 0,
        "paddingRight": 0,
        "id": "Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944",
        "maxWidth": 712,
        "minWidth": 500,
        "data": {
         "name": "img text"
        },
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "class": "Image",
        "minHeight": 500,
        "paddingTop": 0
       }
      ],
      "right": "0%"
     },
     {
      "transparencyActive": true,
      "mode": "push",
      "width": 24,
      "height": 24,
      "maxHeight": 120,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "top": 20,
      "click": "this.setComponentVisibility(this.Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4, false, 0, null, null, false)",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB",
      "maxWidth": 120,
      "minWidth": 30,
      "iconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB.png",
      "borderRadius": 0,
      "data": {
       "name": "x"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "rollOverIconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB_rollover.png",
      "class": "IconButton",
      "right": 20,
      "paddingTop": 0,
      "minHeight": 30
     }
    ],
    "right": "6%"
   }
  ],
  "right": "0%"
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_55273B39_437C_40D1_41B7_C9815CF1926F",
  "minWidth": 1,
  "data": {
   "name": "UBICACI\u00d3N"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.5,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "width": 800,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": 600,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "overflow": "scroll",
    "layout": "horizontal",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_55E3858B_4314_C3B1_4199_F7924E88ECBA",
    "minWidth": 1,
    "data": {
     "name": "Location global"
    },
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "backgroundOpacity": 1,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "96.837%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "94.868%",
      "borderSize": 0,
      "overflow": "scroll",
      "layout": "absolute",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_55BED378_431C_475F_41C0_B13F978722EA",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "backgroundOpacity": 0.3,
      "horizontalAlign": "left",
      "paddingLeft": 0,
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "children": [
       {
        "transparencyActive": true,
        "mode": "push",
        "width": 24,
        "height": 24,
        "maxHeight": 24,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "borderSize": 0,
        "top": "0%",
        "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, false, 0, null, null, false)",
        "paddingRight": 0,
        "cursor": "hand",
        "id": "IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA",
        "maxWidth": 24,
        "minWidth": 1,
        "iconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA.png",
        "borderRadius": 0,
        "data": {
         "name": "X"
        },
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "rollOverIconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA_rollover.png",
        "class": "IconButton",
        "right": "0%",
        "paddingTop": 0,
        "minHeight": 1
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "scrollBarOpacity": 0.5,
        "layout": "absolute",
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_5555E455_436C_4151_41CC_029603B5193B",
        "minWidth": 1,
        "data": {
         "name": "Container webframe"
        },
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "backgroundOpacity": 0.3,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "left": "0%",
        "scrollBarWidth": 10,
        "minHeight": 1,
        "paddingTop": 0,
        "children": [
         {
          "scrollEnabled": false,
          "backgroundColor": [
           "#FFFFFF"
          ],
          "backgroundColorRatios": [
           0
          ],
          "width": "100%",
          "url": "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13440.961761524723!2d-70.7243282164782!3d-32.626419896281845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x968871396691cee3%3A0x49116fdf72bc08e9!2sPutaendo%2C%20Valpara%C3%ADso%2C%20Chile!3m2!1d-32.628461!2d-70.7177434!5e0!3m2!1ses-419!2sru!4v1597687621391!5m2!1ses-419!2sru\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "height": "100%",
          "borderSize": 0,
          "top": "0%",
          "paddingRight": 0,
          "insetBorder": false,
          "id": "WebFrame_57792F91_436F_DFD1_41BE_B9C240373A43",
          "minWidth": 1,
          "data": {
           "name": "WebFrame"
          },
          "backgroundColorDirection": "vertical",
          "borderRadius": 0,
          "backgroundOpacity": 1,
          "paddingLeft": 0,
          "class": "WebFrame",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0
         }
        ],
        "right": "10%"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 11,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C",
  "minWidth": 1,
  "data": {
   "name": "---PANORAMA LIST"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.5,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "width": 1050,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": 580,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "top",
    "borderSize": 0,
    "overflow": "scroll",
    "layout": "absolute",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_2E9E35C8_3D1C_43BF_41B7_13BBE9E68CEB",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "backgroundOpacity": 1,
    "horizontalAlign": "left",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "transparencyActive": true,
      "mode": "push",
      "width": 24,
      "height": 24,
      "maxHeight": 24,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "top": "2.5%",
      "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, false, 0, null, null, false)",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307",
      "maxWidth": 24,
      "minWidth": 1,
      "iconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307.png",
      "borderRadius": 0,
      "data": {
       "name": "X"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "rollOverIconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307_rollover.png",
      "class": "IconButton",
      "right": "1.43%",
      "paddingTop": 0,
      "minHeight": 1
     },
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "100%",
      "gap": 20,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "88%",
      "borderSize": 0,
      "overflow": "scroll",
      "layout": "vertical",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_2ED71618_3D14_C0DF_418D_C2F178EFBCA8",
      "minWidth": 1,
      "data": {
       "name": "Container thumblist"
      },
      "backgroundColorDirection": "vertical",
      "bottom": "0%",
      "borderRadius": 0,
      "backgroundOpacity": 0.3,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "class": "Container",
      "left": "0%",
      "scrollBarWidth": 10,
      "minHeight": 1,
      "paddingTop": 0,
      "children": [
       {
        "width": "85.4%",
        "maxHeight": 41,
        "url": "skin/Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583.png",
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "scaleMode": "fit_outside",
        "height": "14%",
        "borderSize": 0,
        "paddingRight": 0,
        "id": "Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583",
        "maxWidth": 1133,
        "minWidth": 1,
        "data": {
         "name": "Text image"
        },
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Image",
        "minHeight": 1,
        "paddingTop": 0
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "89.619%",
        "gap": 13,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "83.135%",
        "borderSize": 0,
        "overflow": "scroll",
        "layout": "horizontal",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_2E0D0306_3D14_C0B3_41A4_18E077CBEE3C",
        "minWidth": 1,
        "data": {
         "name": "Container Thumblist"
        },
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "backgroundOpacity": 0.3,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "scrollBarWidth": 10,
        "children": [
         {
          "playList": "this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
          "itemLabelFontWeight": "normal",
          "backgroundColor": [
           "#FFFFFF"
          ],
          "itemLabelFontStyle": "normal",
          "itemWidth": 206,
          "gap": 25,
          "itemLabelTextDecoration": "none",
          "itemMode": "normal",
          "propagateClick": false,
          "itemBackgroundColorRatios": [],
          "selectedItemLabelFontColor": "#99BB1B",
          "paddingBottom": 10,
          "shadow": false,
          "verticalAlign": "top",
          "itemThumbnailHeight": 116,
          "itemLabelFontSize": 14,
          "itemMaxWidth": 1000,
          "scrollBarVisible": "rollOver",
          "itemBackgroundColorDirection": "vertical",
          "itemHorizontalAlign": "center",
          "minWidth": 1,
          "horizontalAlign": "left",
          "borderRadius": 5,
          "itemBackgroundColor": [],
          "backgroundOpacity": 0.2,
          "paddingLeft": 20,
          "itemLabelPosition": "bottom",
          "class": "ThumbnailGrid",
          "itemLabelHorizontalAlign": "center",
          "itemLabelFontFamily": "Georgia",
          "itemBorderRadius": 0,
          "itemPaddingTop": 3,
          "selectedItemLabelFontWeight": "bold",
          "itemMinHeight": 50,
          "scrollBarColor": "#FFFFFF",
          "backgroundColorRatios": [
           0
          ],
          "scrollBarMargin": 2,
          "rollOverItemLabelFontColor": "#000000",
          "scrollBarOpacity": 0.5,
          "itemThumbnailShadow": false,
          "itemBackgroundOpacity": 0,
          "itemMinWidth": 50,
          "height": "90%",
          "rollOverItemLabelFontWeight": "bold",
          "itemThumbnailWidth": 200,
          "width": "100%",
          "itemLabelFontColor": "#333333",
          "borderSize": 0,
          "itemHeight": 150,
          "itemOpacity": 1,
          "paddingRight": 20,
          "itemThumbnailBorderRadius": 0,
          "itemVerticalAlign": "middle",
          "selectedItemLabelFontStyle": "italic",
          "itemLabelGap": 7,
          "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9",
          "itemPaddingLeft": 3,
          "itemThumbnailOpacity": 1,
          "itemThumbnailScaleMode": "fit_outside",
          "data": {
           "name": "ThumbnailList"
          },
          "backgroundColorDirection": "vertical",
          "itemPaddingRight": 3,
          "scrollBarWidth": 10,
          "itemMaxHeight": 1000,
          "itemPaddingBottom": 3,
          "paddingTop": 14,
          "minHeight": 1
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A",
  "minWidth": 1,
  "data": {
   "name": "---VIDEOALBUM"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.5,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "scrollBarOpacity": 0.5,
    "width": "90.91%",
    "gap": 10,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "height": "83%",
    "borderSize": 0,
    "overflow": "scroll",
    "layout": "horizontal",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_5EE70B15_547D_F3EC_41C1_999FBC34E663",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "backgroundOpacity": 1,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "96.837%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "94.868%",
      "borderSize": 0,
      "overflow": "scroll",
      "layout": "absolute",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_5EE70B15_547D_F3EC_41D0_339269FA65C3",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "backgroundOpacity": 0.3,
      "horizontalAlign": "left",
      "paddingLeft": 0,
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "children": [
       "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "27.805%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_5EE70B15_547D_F3EC_41A2_343375D7999C",
        "minWidth": 1,
        "data": {
         "name": "Container text"
        },
        "borderRadius": 0,
        "layout": "absolute",
        "backgroundOpacity": 0,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "scrollBarWidth": 10,
        "children": [
         {
          "width": "100%",
          "maxHeight": 600,
          "url": "skin/Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C.png",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "scaleMode": "fit_inside",
          "borderSize": 0,
          "top": "6.63%",
          "paddingRight": 0,
          "id": "Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C",
          "maxWidth": 402,
          "minWidth": 1,
          "data": {
           "name": "VideoGallery text"
          },
          "bottom": "58.73%",
          "borderRadius": 0,
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Image",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0
         },
         {
          "creationPolicy": "delayed",
          "scrollBarColor": "#000000",
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false,
          "scrollBarMargin": 2,
          "scrollBarOpacity": 0.5,
          "width": "76.072%",
          "gap": 5,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "top",
          "height": "52.259%",
          "borderSize": 0,
          "overflow": "visible",
          "layout": "vertical",
          "paddingRight": 0,
          "scrollBarVisible": "rollOver",
          "id": "Container_5EE70B15_547D_F3EC_41D1_22CDC78688BF",
          "minWidth": 1,
          "data": {
           "name": "Container thumbs"
          },
          "backgroundColorDirection": "vertical",
          "bottom": "6.63%",
          "borderRadius": 0,
          "backgroundOpacity": 0.3,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Container",
          "scrollBarWidth": 10,
          "minHeight": 1,
          "paddingTop": 0,
          "children": [
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "22.4%",
            "borderSize": 0,
            "overflow": "visible",
            "layout": "horizontal",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_5EE70B15_547D_F3EC_41A2_874A2F889A29",
            "minWidth": 1,
            "data": {
             "name": "Row 1"
            },
            "backgroundColorDirection": "vertical",
            "borderRadius": 0,
            "backgroundOpacity": 0.3,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0,
            "scrollBarWidth": 10,
            "children": [
             {
              "transparencyActive": true,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "click": "this.setComponentVisibility(this.Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18, false, 0, null, null, false)",
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton intro"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             },
             {
              "transparencyActive": false,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton snorkel"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             }
            ]
           },
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "22.4%",
            "borderSize": 0,
            "overflow": "visible",
            "layout": "horizontal",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_5EE70B16_547D_F3EC_41C9_971F1B00B22D",
            "minWidth": 1,
            "data": {
             "name": "Row 2"
            },
            "backgroundColorDirection": "vertical",
            "borderRadius": 0,
            "backgroundOpacity": 0.3,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0,
            "scrollBarWidth": 10,
            "children": [
             {
              "transparencyActive": false,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton folklore"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             },
             {
              "transparencyActive": false,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton empty"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             }
            ]
           },
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "22.4%",
            "borderSize": 0,
            "overflow": "visible",
            "layout": "horizontal",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_5EE70B16_547D_F3EC_41D4_82701AFF0DAD",
            "minWidth": 1,
            "data": {
             "name": "Row 3 empty"
            },
            "backgroundColorDirection": "vertical",
            "borderRadius": 0,
            "backgroundOpacity": 0.3,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0,
            "scrollBarWidth": 10
           }
          ],
          "right": "11.47%"
         }
        ],
        "right": "0%"
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "72.402%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_5EE70B16_547D_F3EC_41D3_F78FB47E4731",
        "minWidth": 1,
        "data": {
         "name": "Container Viewer"
        },
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "layout": "absolute",
        "backgroundOpacity": 0.3,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "left": "0%",
        "scrollBarWidth": 10,
        "minHeight": 1,
        "paddingTop": 0,
        "children": [
         {
          "playbackBarBorderSize": 0,
          "toolTipBorderSize": 1,
          "toolTipFontStyle": "normal",
          "toolTipFontSize": 12,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "playbackBarBackgroundOpacity": 1,
          "toolTipFontWeight": "normal",
          "toolTipFontColor": "#606060",
          "toolTipShadowOpacity": 1,
          "toolTipPaddingLeft": 6,
          "playbackBarHeadHeight": 15,
          "toolTipDisplayTime": 600,
          "propagateClick": false,
          "paddingBottom": 0,
          "toolTipPaddingRight": 6,
          "shadow": false,
          "toolTipFontFamily": "Arial",
          "transitionMode": "blending",
          "playbackBarHeadShadowColor": "#000000",
          "playbackBarHeadBorderRadius": 0,
          "progressBarBorderColor": "#000000",
          "playbackBarProgressBorderSize": 0,
          "playbackBarHeadBorderColor": "#000000",
          "progressBackgroundColorDirection": "vertical",
          "progressOpacity": 1,
          "progressRight": 0,
          "playbackBarHeadShadowHorizontalLength": 0,
          "playbackBarBottom": 0,
          "toolTipPaddingBottom": 4,
          "progressBorderColor": "#000000",
          "toolTipTextShadowOpacity": 0,
          "minWidth": 1,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "progressBarBackgroundColorDirection": "vertical",
          "borderRadius": 0,
          "playbackBarHeadShadow": true,
          "playbackBarHeadOpacity": 1,
          "progressBarBorderRadius": 0,
          "class": "ViewerArea",
          "playbackBarHeadBorderSize": 0,
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipShadowHorizontalLength": 0,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "paddingLeft": 0,
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "toolTipTextShadowBlurRadius": 3,
          "progressBackgroundOpacity": 1,
          "playbackBarBorderRadius": 0,
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "playbackBarOpacity": 1,
          "width": "100%",
          "progressBarOpacity": 1,
          "progressBorderSize": 0,
          "toolTipShadowBlurRadius": 3,
          "progressBottom": 2,
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "height": "100%",
          "toolTipPaddingTop": 4,
          "toolTipOpacity": 1,
          "progressHeight": 10,
          "toolTipTextShadowColor": "#000000",
          "toolTipShadowVerticalLength": 0,
          "playbackBarProgressBorderColor": "#000000",
          "playbackBarHeadWidth": 6,
          "progressBorderRadius": 0,
          "toolTipShadowColor": "#333333",
          "toolTipBorderColor": "#767676",
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "borderSize": 0,
          "playbackBarBackgroundColorDirection": "vertical",
          "transitionDuration": 500,
          "top": "0%",
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "playbackBarHeight": 10,
          "paddingRight": 0,
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "id": "ViewerAreaLabeled_5EE70B16_547D_F3EC_4177_5761BA34B830",
          "progressLeft": 0,
          "progressBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadShadowOpacity": 0.7,
          "progressBarBorderSize": 0,
          "toolTipShadowSpread": 0,
          "playbackBarProgressBorderRadius": 0,
          "playbackBarRight": 0,
          "toolTipBorderRadius": 3,
          "playbackBarProgressOpacity": 1,
          "left": "0%",
          "playbackBarLeft": 0,
          "playbackBarHeadShadowBlurRadius": 3,
          "minHeight": 1,
          "paddingTop": 0,
          "playbackBarHeadShadowVerticalLength": 0,
          "playbackBarBorderColor": "#FFFFFF"
         },
         {
          "width": "100%",
          "maxHeight": 821,
          "url": "skin/Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18.jpg",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "scaleMode": "fit_inside",
          "height": "100%",
          "borderSize": 0,
          "top": "0%",
          "paddingRight": 0,
          "id": "Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18",
          "maxWidth": 1460,
          "minWidth": 1,
          "data": {
           "name": "-Image intro video"
          },
          "borderRadius": 0,
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Image",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 11,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_C190A7DE_D1CF_0251_41D6_94510622876F",
  "minWidth": 1,
  "data": {
   "name": "---VIDEO 360\u00ba"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.5,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "width": 872,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": 362,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "top",
    "borderSize": 0,
    "overflow": "scroll",
    "layout": "absolute",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_C190C7DD_D1CF_0253_41E6_E37D4ADD5212",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "backgroundOpacity": 1,
    "horizontalAlign": "left",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "transparencyActive": true,
      "mode": "push",
      "width": 24,
      "height": 24,
      "maxHeight": 24,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "top": "4%",
      "click": "this.setComponentVisibility(this.Container_C190A7DE_D1CF_0251_41D6_94510622876F, false, 0, null, null, false)",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0",
      "maxWidth": 24,
      "minWidth": 1,
      "iconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0.png",
      "borderRadius": 0,
      "data": {
       "name": "X"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "rollOverIconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0_rollover.png",
      "class": "IconButton",
      "right": "1.43%",
      "paddingTop": 0,
      "minHeight": 1
     },
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "100%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "73.757%",
      "borderSize": 0,
      "overflow": "scroll",
      "layout": "vertical",
      "paddingRight": 0,
      "bottom": "8.01%",
      "scrollBarVisible": "rollOver",
      "id": "Container_C190E7DD_D1CF_0253_41C3_86133B23DE83",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "class": "Container",
      "left": "0%",
      "minHeight": 1,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "children": [
       {
        "width": "80%",
        "maxHeight": 41,
        "url": "skin/Image_C19097DE_D1CF_0251_41EA_014A5794BC3C.png",
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "scaleMode": "fit_inside",
        "height": "15.356%",
        "borderSize": 0,
        "paddingRight": 0,
        "id": "Image_C19097DE_D1CF_0251_41EA_014A5794BC3C",
        "maxWidth": 1133,
        "minWidth": 1,
        "data": {
         "name": "Panorama list title"
        },
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "class": "Image",
        "minHeight": 1,
        "paddingTop": 0
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "80%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "height": "61.423%",
        "borderSize": 0,
        "overflow": "visible",
        "layout": "horizontal",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_E916E277_E0EC_BA90_41E7_7B91E7367E91",
        "minWidth": 1,
        "data": {
         "name": "Container thumbs"
        },
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "backgroundOpacity": 0.3,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "scrollBarWidth": 10,
        "children": [
         {
          "transparencyActive": false,
          "mode": "push",
          "width": "35%",
          "maxHeight": 164,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "height": "82%",
          "borderSize": 0,
          "paddingRight": 0,
          "cursor": "hand",
          "id": "IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3",
          "maxWidth": 290,
          "minWidth": 1,
          "iconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3.jpg",
          "borderRadius": 0,
          "data": {
           "name": "IconButton Powerboat"
          },
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "rollOverIconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3_rollover.jpg",
          "class": "IconButton",
          "minHeight": 1,
          "paddingTop": 0
         },
         {
          "transparencyActive": false,
          "mode": "push",
          "width": "35%",
          "maxHeight": 164,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "height": "82%",
          "borderSize": 0,
          "paddingRight": 0,
          "cursor": "hand",
          "id": "IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC",
          "maxWidth": 290,
          "minWidth": 1,
          "iconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC.jpg",
          "borderRadius": 0,
          "data": {
           "name": "IconButton Breakfast"
          },
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "rollOverIconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC_rollover.jpg",
          "class": "IconButton",
          "minHeight": 1,
          "paddingTop": 0
         },
         {
          "transparencyActive": false,
          "mode": "push",
          "width": "35%",
          "maxHeight": 164,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "height": "82%",
          "borderSize": 0,
          "paddingRight": 0,
          "cursor": "hand",
          "id": "IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D",
          "maxWidth": 290,
          "minWidth": 1,
          "iconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D.jpg",
          "borderRadius": 0,
          "data": {
           "name": "IconButton PoolFun"
          },
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "rollOverIconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D_rollover.jpg",
          "class": "IconButton",
          "minHeight": 1,
          "paddingTop": 0
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "top",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_ECB4524F_E163_9AF0_41E5_60E049D28740",
  "minWidth": 1,
  "data": {
   "name": "---360"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "absolute",
  "backgroundOpacity": 1,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "playbackBarBorderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipFontStyle": "normal",
    "toolTipFontSize": 12,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "playbackBarBackgroundOpacity": 1,
    "toolTipFontWeight": "normal",
    "toolTipFontColor": "#606060",
    "toolTipShadowOpacity": 1,
    "toolTipPaddingLeft": 6,
    "playbackBarHeadHeight": 15,
    "toolTipDisplayTime": 600,
    "propagateClick": false,
    "paddingBottom": 0,
    "toolTipPaddingRight": 6,
    "shadow": false,
    "toolTipFontFamily": "Arial",
    "transitionMode": "blending",
    "playbackBarHeadShadowColor": "#000000",
    "playbackBarHeadBorderRadius": 0,
    "progressBarBorderColor": "#000000",
    "playbackBarProgressBorderSize": 0,
    "playbackBarHeadBorderColor": "#000000",
    "progressBackgroundColorDirection": "vertical",
    "progressOpacity": 1,
    "progressRight": 0,
    "playbackBarHeadShadowHorizontalLength": 0,
    "playbackBarBottom": 0,
    "toolTipPaddingBottom": 4,
    "progressBorderColor": "#000000",
    "toolTipTextShadowOpacity": 0,
    "minWidth": 1,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "progressBarBackgroundColorDirection": "vertical",
    "borderRadius": 0,
    "playbackBarHeadShadow": true,
    "playbackBarHeadOpacity": 1,
    "progressBarBorderRadius": 0,
    "class": "ViewerArea",
    "playbackBarHeadBorderSize": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "paddingLeft": 0,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "toolTipTextShadowBlurRadius": 3,
    "progressBackgroundOpacity": 1,
    "playbackBarBorderRadius": 0,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarOpacity": 1,
    "width": "100%",
    "progressBarOpacity": 1,
    "progressBorderSize": 0,
    "toolTipShadowBlurRadius": 3,
    "progressBottom": 2,
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "height": "100%",
    "toolTipPaddingTop": 4,
    "toolTipOpacity": 1,
    "progressHeight": 10,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowVerticalLength": 0,
    "playbackBarProgressBorderColor": "#000000",
    "playbackBarHeadWidth": 6,
    "progressBorderRadius": 0,
    "toolTipShadowColor": "#333333",
    "toolTipBorderColor": "#767676",
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "borderSize": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "transitionDuration": 500,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "playbackBarHeight": 10,
    "paddingRight": 0,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "id": "ViewerAreaLabeled_EF626468_E164_BEB0_41E7_F6DF4C667020",
    "bottom": "0%",
    "progressBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadShadowOpacity": 0.7,
    "progressBarBorderSize": 0,
    "toolTipShadowSpread": 0,
    "playbackBarProgressOpacity": 1,
    "playbackBarRight": 0,
    "toolTipBorderRadius": 3,
    "playbackBarProgressBorderRadius": 0,
    "left": "0%",
    "playbackBarLeft": 0,
    "progressLeft": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "minHeight": 1,
    "paddingTop": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "playbackBarBorderColor": "#FFFFFF"
   },
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0"
  ]
 },
 {
  "transparencyActive": true,
  "mode": "push",
  "width": 40,
  "height": 40,
  "maxHeight": 80,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "borderSize": 0,
  "top": 20,
  "paddingRight": 0,
  "visible": false,
  "cursor": "hand",
  "id": "IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29",
  "maxWidth": 80,
  "minWidth": 1,
  "iconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29.png",
  "borderRadius": 0,
  "data": {
   "name": "X 360"
  },
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "rollOverIconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29_rollover.png",
  "class": "IconButton",
  "left": 20,
  "minHeight": 1,
  "paddingTop": 0
 },
 {
  "width": 125,
  "height": 70,
  "maxHeight": 78,
  "url": "skin/Image_19470ABB_0A67_2982_418C_D469BE33D2C6.png",
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "scaleMode": "fit_to_width",
  "borderSize": 0,
  "paddingRight": 0,
  "visible": false,
  "bottom": 56,
  "id": "Image_19470ABB_0A67_2982_418C_D469BE33D2C6",
  "maxWidth": 212,
  "minWidth": 1,
  "data": {
   "name": "-Wheel mouse"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Image",
  "right": 20,
  "paddingTop": 0,
  "minHeight": 1
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623",
  "minWidth": 1,
  "data": {
   "name": "---PHOTOALBUM"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.5,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "width": 1500,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": 780,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "overflow": "scroll",
    "layout": "horizontal",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_474C01C7_4AA6_73B2_41C6_B213F7F17334",
    "minWidth": 1,
    "data": {
     "name": "Main container"
    },
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "backgroundOpacity": 1,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "96.837%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "94.868%",
      "borderSize": 0,
      "overflow": "scroll",
      "layout": "absolute",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_474C01C8_4AA6_73BE_41C7_421C083439CF",
      "minWidth": 1,
      "data": {
       "name": "Content container"
      },
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "backgroundOpacity": 0.3,
      "horizontalAlign": "left",
      "paddingLeft": 0,
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "children": [
       {
        "transparencyActive": true,
        "mode": "push",
        "width": 24,
        "height": 24,
        "maxHeight": 24,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "borderSize": 0,
        "top": "0%",
        "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, false, 0, null, null, false)",
        "paddingRight": 0,
        "cursor": "hand",
        "id": "IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C",
        "maxWidth": 24,
        "minWidth": 1,
        "iconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C.png",
        "borderRadius": 0,
        "data": {
         "name": "X"
        },
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "rollOverIconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C_rollover.png",
        "class": "IconButton",
        "right": "0%",
        "paddingTop": 0,
        "minHeight": 1
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "27.805%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_474C01C8_4AA6_73BE_41B0_42F6E66589F6",
        "minWidth": 1,
        "data": {
         "name": "Right container"
        },
        "borderRadius": 0,
        "layout": "absolute",
        "backgroundOpacity": 0,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "scrollBarWidth": 10,
        "children": [
         {
          "width": "100%",
          "maxHeight": 600,
          "url": "skin/Image_474C01C8_4AA6_73BE_4198_63728D42FC19.png",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "scaleMode": "fit_inside",
          "borderSize": 0,
          "top": "6.63%",
          "paddingRight": 0,
          "id": "Image_474C01C8_4AA6_73BE_4198_63728D42FC19",
          "maxWidth": 402,
          "minWidth": 1,
          "data": {
           "name": "Text img"
          },
          "bottom": "58.73%",
          "borderRadius": 0,
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Image",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0
         },
         {
          "creationPolicy": "delayed",
          "scrollBarColor": "#000000",
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false,
          "scrollBarMargin": 2,
          "scrollBarOpacity": 0.5,
          "width": "76.072%",
          "gap": 10,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "top",
          "height": "52.259%",
          "borderSize": 0,
          "overflow": "visible",
          "layout": "vertical",
          "paddingRight": 0,
          "scrollBarVisible": "rollOver",
          "id": "Container_472B38FC_4AAE_1156_41B3_4C1A1EC48ED3",
          "minWidth": 1,
          "data": {
           "name": "Thumbs buttons container"
          },
          "backgroundColorDirection": "vertical",
          "bottom": "6.63%",
          "borderRadius": 0,
          "backgroundOpacity": 0.3,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Container",
          "scrollBarWidth": 10,
          "minHeight": 1,
          "paddingTop": 0,
          "children": [
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "25%",
            "borderSize": 0,
            "overflow": "visible",
            "layout": "horizontal",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_470039F2_4AA2_3352_4188_8343FDAC53A2",
            "minWidth": 1,
            "data": {
             "name": "Container Row 1"
            },
            "backgroundColorDirection": "vertical",
            "borderRadius": 0,
            "backgroundOpacity": 0.3,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0,
            "scrollBarWidth": 10,
            "children": [
             {
              "transparencyActive": true,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton_house"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             },
             {
              "transparencyActive": false,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton_garden"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             }
            ]
           },
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "25%",
            "borderSize": 0,
            "overflow": "visible",
            "layout": "horizontal",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_470F7D71_4AA2_136E_41B0_AAAD0C68ACE5",
            "minWidth": 1,
            "data": {
             "name": "Container Row 2"
            },
            "backgroundColorDirection": "vertical",
            "borderRadius": 0,
            "backgroundOpacity": 0.3,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0,
            "scrollBarWidth": 10,
            "children": [
             {
              "transparencyActive": false,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton_decoration"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             },
             {
              "transparencyActive": false,
              "mode": "push",
              "width": 145,
              "height": 82,
              "maxHeight": 82,
              "propagateClick": false,
              "paddingBottom": 0,
              "shadow": false,
              "verticalAlign": "middle",
              "borderSize": 0,
              "paddingRight": 0,
              "cursor": "hand",
              "id": "IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6",
              "maxWidth": 145,
              "minWidth": 1,
              "iconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6.jpg",
              "borderRadius": 0,
              "data": {
               "name": "IconButton_Swimming"
              },
              "backgroundOpacity": 0,
              "horizontalAlign": "center",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6_rollover.jpg",
              "class": "IconButton",
              "minHeight": 1,
              "paddingTop": 0
             }
            ]
           },
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "25%",
            "borderSize": 0,
            "overflow": "visible",
            "layout": "horizontal",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_44F91F72_4AA6_2F52_41C3_1B4514891167",
            "minWidth": 1,
            "data": {
             "name": "Container Row 3"
            },
            "backgroundColorDirection": "vertical",
            "borderRadius": 0,
            "backgroundOpacity": 0.3,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0,
            "scrollBarWidth": 10
           }
          ],
          "right": "11.47%"
         }
        ],
        "right": "0%"
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "72.402%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_474C01C8_4AA6_73BE_41C4_789A192CFF53",
        "minWidth": 1,
        "data": {
         "name": "Container Viewer"
        },
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "layout": "absolute",
        "backgroundOpacity": 0.3,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "left": "0%",
        "scrollBarWidth": 10,
        "minHeight": 1,
        "paddingTop": 0,
        "children": [
         {
          "playbackBarBorderSize": 0,
          "toolTipBorderSize": 1,
          "toolTipFontStyle": "normal",
          "toolTipFontSize": 12,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "playbackBarBackgroundOpacity": 1,
          "toolTipFontWeight": "normal",
          "toolTipFontColor": "#606060",
          "toolTipShadowOpacity": 1,
          "toolTipPaddingLeft": 6,
          "playbackBarHeadHeight": 15,
          "toolTipDisplayTime": 600,
          "propagateClick": false,
          "paddingBottom": 0,
          "toolTipPaddingRight": 6,
          "shadow": false,
          "toolTipFontFamily": "Arial",
          "transitionMode": "blending",
          "playbackBarHeadShadowColor": "#000000",
          "playbackBarHeadBorderRadius": 0,
          "progressBarBorderColor": "#000000",
          "playbackBarProgressBorderSize": 0,
          "playbackBarHeadBorderColor": "#000000",
          "progressBackgroundColorDirection": "vertical",
          "progressOpacity": 1,
          "progressRight": 0,
          "playbackBarHeadShadowHorizontalLength": 0,
          "playbackBarBottom": 0,
          "toolTipPaddingBottom": 4,
          "progressBorderColor": "#000000",
          "toolTipTextShadowOpacity": 0,
          "minWidth": 1,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "progressBarBackgroundColorDirection": "vertical",
          "borderRadius": 0,
          "playbackBarHeadShadow": true,
          "playbackBarHeadOpacity": 1,
          "progressBarBorderRadius": 0,
          "class": "ViewerArea",
          "playbackBarHeadBorderSize": 0,
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipShadowHorizontalLength": 0,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "paddingLeft": 0,
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "toolTipTextShadowBlurRadius": 3,
          "progressBackgroundOpacity": 1,
          "playbackBarBorderRadius": 0,
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "playbackBarOpacity": 1,
          "width": "100%",
          "progressBarOpacity": 1,
          "progressBorderSize": 0,
          "toolTipShadowBlurRadius": 3,
          "progressBottom": 2,
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "height": "100%",
          "toolTipPaddingTop": 4,
          "toolTipOpacity": 1,
          "progressHeight": 10,
          "toolTipTextShadowColor": "#000000",
          "toolTipShadowVerticalLength": 0,
          "playbackBarProgressBorderColor": "#000000",
          "playbackBarHeadWidth": 6,
          "progressBorderRadius": 0,
          "toolTipShadowColor": "#333333",
          "toolTipBorderColor": "#767676",
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "borderSize": 0,
          "playbackBarBackgroundColorDirection": "vertical",
          "transitionDuration": 500,
          "top": "0%",
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "playbackBarHeight": 10,
          "paddingRight": 0,
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "id": "ViewerAreaLabeled_451BE519_4B62_70DE_41C7_94BD7032FDA3",
          "progressLeft": 0,
          "progressBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadShadowOpacity": 0.7,
          "progressBarBorderSize": 0,
          "toolTipShadowSpread": 0,
          "playbackBarProgressBorderRadius": 0,
          "playbackBarRight": 0,
          "toolTipBorderRadius": 3,
          "playbackBarProgressOpacity": 1,
          "left": "0%",
          "playbackBarLeft": 0,
          "playbackBarHeadShadowBlurRadius": 3,
          "minHeight": 1,
          "paddingTop": 0,
          "playbackBarHeadShadowVerticalLength": 0,
          "playbackBarBorderColor": "#FFFFFF"
         },
         {
          "creationPolicy": "delayed",
          "scrollBarColor": "#000000",
          "contentOpaque": false,
          "scrollBarMargin": 2,
          "scrollBarOpacity": 0.5,
          "width": "100%",
          "gap": 300,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "height": "100%",
          "borderSize": 0,
          "overflow": "scroll",
          "top": "0%",
          "paddingRight": 0,
          "scrollBarVisible": "rollOver",
          "id": "Container_5B704147_4B62_30B2_41C7_41C4A6280806",
          "minWidth": 1,
          "data": {
           "name": "Container buttons"
          },
          "borderRadius": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Container",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0,
          "scrollBarWidth": 10,
          "children": [
           {
            "transparencyActive": true,
            "mode": "push",
            "width": 50,
            "height": 50,
            "maxHeight": 50,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "middle",
            "borderSize": 0,
            "pressedIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_pressed.png",
            "paddingRight": 0,
            "cursor": "hand",
            "id": "IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177",
            "maxWidth": 50,
            "minWidth": 1,
            "iconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177.png",
            "borderRadius": 0,
            "data": {
             "name": "button <"
            },
            "backgroundOpacity": 0,
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "rollOverIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_rollover.png",
            "class": "IconButton",
            "minHeight": 1,
            "paddingTop": 0
           },
           {
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "contentOpaque": false,
            "scrollBarMargin": 2,
            "scrollBarOpacity": 0.5,
            "width": "70%",
            "gap": 10,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "top",
            "height": "30.12%",
            "borderSize": 0,
            "overflow": "scroll",
            "layout": "absolute",
            "paddingRight": 0,
            "scrollBarVisible": "rollOver",
            "id": "Container_5B3D27DD_4B61_FF56_41C7_13D4CF866C03",
            "minWidth": 1,
            "data": {
             "name": "separator"
            },
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "horizontalAlign": "left",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "class": "Container",
            "minHeight": 1,
            "paddingTop": 0
           },
           {
            "transparencyActive": true,
            "mode": "push",
            "width": 50,
            "height": 50,
            "maxHeight": 50,
            "propagateClick": false,
            "paddingBottom": 0,
            "shadow": false,
            "verticalAlign": "middle",
            "borderSize": 0,
            "pressedIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_pressed.png",
            "paddingRight": 0,
            "cursor": "hand",
            "id": "IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748",
            "maxWidth": 50,
            "minWidth": 1,
            "iconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748.png",
            "borderRadius": 0,
            "data": {
             "name": "button >"
            },
            "backgroundOpacity": 0,
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "rollOverIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_rollover.png",
            "class": "IconButton",
            "minHeight": 1,
            "paddingTop": 0
           }
          ]
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_4169474A_4F02_D74E_41C4_5387F4304140",
  "minWidth": 1,
  "data": {
   "name": "---CONTACT"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.5,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "width": 1450,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": 750,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "overflow": "scroll",
    "layout": "horizontal",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_4169474A_4F02_D74E_41D2_8786E1AEB625",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "backgroundOpacity": 1,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "children": [
     {
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "scrollBarOpacity": 0.5,
      "width": "96.837%",
      "gap": 10,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "top",
      "height": "94.868%",
      "borderSize": 0,
      "overflow": "scroll",
      "layout": "absolute",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_4169474A_4F02_D74E_41C9_D049781FF241",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "backgroundOpacity": 0.3,
      "horizontalAlign": "left",
      "paddingLeft": 0,
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "children": [
       {
        "transparencyActive": true,
        "mode": "push",
        "width": 24,
        "height": 24,
        "maxHeight": 24,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "middle",
        "borderSize": 0,
        "top": "0%",
        "click": "this.setComponentVisibility(this.Container_4169474A_4F02_D74E_41C4_5387F4304140, false, 0, null, null, false)",
        "paddingRight": 0,
        "cursor": "hand",
        "id": "IconButton_4169474A_4F02_D74E_41D2_E2447B190450",
        "maxWidth": 24,
        "minWidth": 1,
        "iconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450.png",
        "borderRadius": 0,
        "data": {
         "name": "X"
        },
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "rollOverIconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450_rollover.png",
        "class": "IconButton",
        "right": "0%",
        "paddingTop": 0,
        "minHeight": 1
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "29.06%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_4169474A_4F02_D74E_41CC_AAA712A39B4C",
        "minWidth": 1,
        "data": {
         "name": "Container right text"
        },
        "borderRadius": 0,
        "layout": "absolute",
        "backgroundOpacity": 0,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "scrollBarWidth": 10,
        "children": [
         {
          "width": "100%",
          "maxHeight": 600,
          "url": "skin/Image_4169474A_4F02_D74E_418A_8DC243F4699E.png",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "scaleMode": "fit_inside",
          "borderSize": 0,
          "top": "6.63%",
          "paddingRight": 0,
          "id": "Image_4169474A_4F02_D74E_418A_8DC243F4699E",
          "maxWidth": 402,
          "minWidth": 1,
          "data": {
           "name": "text image"
          },
          "bottom": "17.77%",
          "borderRadius": 0,
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Image",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0
         },
         {
          "transparencyActive": false,
          "mode": "push",
          "width": 135,
          "height": 47,
          "maxHeight": 47,
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "borderSize": 0,
          "click": "this.openLink(\"http://www.3dvista.com\", \"_blank\")",
          "paddingRight": 0,
          "cursor": "hand",
          "bottom": "12.45%",
          "id": "IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4",
          "maxWidth": 135,
          "minWidth": 1,
          "iconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4.png",
          "borderRadius": 0,
          "data": {
           "name": "Button Book Now"
          },
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "rollOverIconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4_rollover.png",
          "class": "IconButton",
          "left": "12.22%",
          "minHeight": 1,
          "paddingTop": 0
         }
        ],
        "right": "0%"
       },
       {
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "70.869%",
        "gap": 10,
        "propagateClick": false,
        "paddingBottom": 0,
        "shadow": false,
        "verticalAlign": "top",
        "height": "100%",
        "borderSize": 0,
        "overflow": "scroll",
        "top": "0%",
        "paddingRight": 0,
        "scrollBarVisible": "rollOver",
        "id": "Container_4169474A_4F02_D74E_41D3_C66A0E7A6577",
        "minWidth": 1,
        "data": {
         "name": "Container Img"
        },
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "layout": "absolute",
        "backgroundOpacity": 0.3,
        "horizontalAlign": "left",
        "paddingLeft": 0,
        "class": "Container",
        "left": "0%",
        "scrollBarWidth": 10,
        "minHeight": 1,
        "paddingTop": 0,
        "children": [
         {
          "width": "100%",
          "url": "skin/Image_41194F8C_4F01_D7CA_41D0_80812518610D.jpg",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "scaleMode": "fit_to_height",
          "height": "100%",
          "borderSize": 0,
          "top": "0%",
          "paddingRight": 0,
          "id": "Image_41194F8C_4F01_D7CA_41D0_80812518610D",
          "minWidth": 1,
          "data": {
           "name": "Image"
          },
          "borderRadius": 0,
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Image",
          "left": "0%",
          "minHeight": 1,
          "paddingTop": 0
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorRatios": [
   0
  ],
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "gap": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "top",
  "height": "100%",
  "borderSize": 0,
  "overflow": "scroll",
  "top": "0%",
  "paddingRight": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "id": "Container_B18B0BF2_A688_648E_41D5_25CC213E30D8",
  "minWidth": 1,
  "data": {
   "name": "--- FLOORPLAN"
  },
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "layout": "absolute",
  "backgroundOpacity": 0.7,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "layout": "absolute",
    "propagateClick": false,
    "paddingBottom": 30,
    "shadow": false,
    "verticalAlign": "top",
    "borderSize": 0,
    "overflow": "scroll",
    "top": "12%",
    "paddingRight": 30,
    "scrollBarVisible": "rollOver",
    "id": "Container_BEFE9313_A688_258E_4198_33F6C1D0A579",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "backgroundColorDirection": "vertical",
    "bottom": "12%",
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "horizontalAlign": "left",
    "paddingLeft": 30,
    "class": "Container",
    "left": "15%",
    "scrollBarWidth": 10,
    "minHeight": 1,
    "paddingTop": 30,
    "children": [
     {
      "playbackBarBorderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipFontStyle": "normal",
      "toolTipFontSize": 12,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "playbackBarHeadHeight": 15,
      "toolTipDisplayTime": 600,
      "playbackBarHeadBorderRadius": 0,
      "paddingBottom": 0,
      "propagateClick": false,
      "shadow": false,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "progressBarBorderColor": "#000000",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "progressBorderColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "minWidth": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "playbackBarHeadBorderSize": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingLeft": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipTextShadowBlurRadius": 3,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarOpacity": 1,
      "progressBarOpacity": 1,
      "progressBorderSize": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBottom": 2,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadWidth": 6,
      "progressBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "borderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "transitionDuration": 500,
      "top": "0%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeight": 10,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "id": "MapViewer",
      "bottom": "0%",
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBarBorderSize": 0,
      "toolTipShadowSpread": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarRight": 0,
      "toolTipBorderRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "left": "0%",
      "playbackBarLeft": 0,
      "progressLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "minHeight": 1,
      "paddingTop": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "right": "0%"
     },
     {
      "transparencyActive": true,
      "mode": "push",
      "width": 24,
      "height": 24,
      "maxHeight": 24,
      "propagateClick": false,
      "paddingBottom": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "top": 0,
      "click": "this.setComponentVisibility(this.Container_B18B0BF2_A688_648E_41D5_25CC213E30D8, false, 0, null, null, false)",
      "paddingRight": 0,
      "cursor": "hand",
      "id": "IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0",
      "maxWidth": 24,
      "minWidth": 1,
      "iconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0.png",
      "borderRadius": 0,
      "data": {
       "name": "X"
      },
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "rollOverIconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0_rollover.png",
      "class": "IconButton",
      "right": 0,
      "paddingTop": 0,
      "minHeight": 1
     }
    ],
    "right": "15%"
   }
  ]
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "40.283%",
  "propagateClick": false,
  "paddingBottom": 20,
  "shadow": false,
  "height": "41.051%",
  "borderSize": 0,
  "top": "2.47%",
  "click": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, this.effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A, 'hideEffect', false)",
  "paddingRight": 20,
  "visible": false,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>PARQUE PUENTE CIMBRA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:29px;font-family:Georgia, serif;\"><I>PRIMER VIADUCTO</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">El Puente Cimbra fue el primer viaducto que logr\u00f3 unir los sectores de Granallas, Quebrada de Herrera, Vicu\u00f1a y Guzmanes con el centro de Putaendo. Si bien no hay data exacta de la creaci\u00f3n de este puente colgante, hay datos que apuntan a finales del siglo XIX o principios del siglo XX</SPAN></SPAN></DIV></div>",
  "scrollBarVisible": "rollOver",
  "id": "HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E",
  "minWidth": 1,
  "data": {
   "name": "puente"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "class": "HTMLText",
  "left": "1.75%",
  "minHeight": 1,
  "paddingTop": 20,
  "scrollBarWidth": 10
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "43.077%",
  "propagateClick": false,
  "paddingBottom": 20,
  "shadow": false,
  "height": "60.767%",
  "borderSize": 0,
  "top": "0%",
  "click": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, 0, this.effect_1A687CB6_02B3_1A5A_4152_D6E0363828DD, 'hideEffect', false)",
  "paddingRight": 20,
  "visible": false,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>IGLESIA SAN ANTONIO DE PADUA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:Georgia, serif;\"><I>LADRILLOS Y MADERA</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Esta parroquia de la di\u00f3cesis de San Felipe tiene su origen en 1729, casi 100 a\u00f1os antes de la independencia de Chile. Sacudida por el terremoto del 1965 fue reconstruida en una historia de mucho esfuerzo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> Cuenta la historia que el lugar donde se realizaban los primeros cultos era de totora y adobes de cal. Con el tiempo se fueron realizando arreglos hasta que finales del 1800 estaba hecha de ladrillos y madera, donde el pueblo Putaendino asist\u00eda con devoci\u00f3n.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">En el a\u00f1o 1965 el terremoto la da\u00f1\u00f3 y unos a\u00f1os despu\u00e9s fue declarada inhabitable. A partir de esto, tanto la Iglesia como al pueblo de Putaendo, realizaron un gran esfuerzo para reconstruir uno de los grandes s\u00edmbolos de su comuna. En 1990 qued\u00f3 lista la hermosa Parroquia, motivo de orgullo para el pueblo.</SPAN></SPAN></DIV></div>",
  "scrollBarVisible": "rollOver",
  "id": "HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123",
  "minWidth": 1,
  "data": {
   "name": "Iglesia"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "class": "HTMLText",
  "left": "0%",
  "minHeight": 1,
  "paddingTop": 20,
  "scrollBarWidth": 10
 },
 {
  "playList": "this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist",
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadowColor": "#000000",
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelFontStyle": "normal",
  "gap": 10,
  "itemLabelTextDecoration": "none",
  "itemMode": "thumbnail-only",
  "propagateClick": false,
  "itemBackgroundColorRatios": [],
  "paddingBottom": 10,
  "shadow": false,
  "verticalAlign": "top",
  "itemThumbnailHeight": 75,
  "itemLabelFontSize": 14,
  "scrollBarVisible": "rollOver",
  "itemBackgroundColorDirection": "vertical",
  "itemHorizontalAlign": "center",
  "minWidth": 1,
  "horizontalAlign": "left",
  "borderRadius": 5,
  "itemBackgroundColor": [],
  "backgroundOpacity": 0.2,
  "paddingLeft": 20,
  "itemLabelPosition": "bottom",
  "class": "ThumbnailList",
  "itemLabelHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "height": 130,
  "itemThumbnailShadow": true,
  "itemBackgroundOpacity": 0,
  "width": "99.749%",
  "itemThumbnailWidth": 100,
  "itemThumbnailShadowBlurRadius": 4,
  "rollOver": "this.setComponentVisibility(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0, false, 0, this.effect_1505B9C3_0291_1A3B_4176_91AC933F53E5, 'hideEffect', false)",
  "layout": "horizontal",
  "itemLabelFontColor": "#FFFFFF",
  "borderSize": 0,
  "itemOpacity": 1,
  "paddingRight": 20,
  "itemThumbnailBorderRadius": 5,
  "itemVerticalAlign": "middle",
  "itemLabelGap": 5,
  "visible": false,
  "id": "ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0",
  "itemPaddingLeft": 3,
  "itemThumbnailShadowOpacity": 0.8,
  "itemThumbnailOpacity": 1,
  "bottom": "8.52%",
  "itemThumbnailScaleMode": "fit_outside",
  "data": {
   "name": "LISTA"
  },
  "backgroundColorDirection": "vertical",
  "itemPaddingRight": 3,
  "left": "0.04%",
  "scrollBarWidth": 10,
  "itemPaddingBottom": 3,
  "paddingTop": 10,
  "itemThumbnailShadowSpread": 1,
  "minHeight": 1
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "47.724%",
  "propagateClick": false,
  "paddingBottom": 20,
  "shadow": false,
  "height": "53.409%",
  "borderSize": 0,
  "top": "2.33%",
  "click": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, 0, this.effect_18FC46C0_0291_1636_4178_D42A4CC7C980, 'hideEffect', false)",
  "paddingRight": 20,
  "visible": false,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>Parque Escult\u00f3rico Cementerio de Carretas</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:28px;\"><B><I>PATRIMONIO REGIONAL</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">A 200 metros de altura de Putaendo se encuentra esta muestra que parti\u00f3 con la donaci\u00f3n de cuatro carretas y que hoy ya alberga, en una planicie de 16 hect\u00e1reas, a 51 esculturas, fruto de tres encuentros escult\u00f3ricos que se han realizado en el mismo lugar, con la participaci\u00f3n de artistas venidos desde diversas partes del mundo.</SPAN></SPAN></DIV></div>",
  "scrollBarVisible": "rollOver",
  "id": "HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F",
  "minWidth": 1,
  "data": {
   "name": "El llano"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "class": "HTMLText",
  "left": "0.93%",
  "minHeight": 1,
  "paddingTop": 20,
  "scrollBarWidth": 10
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "38.681%",
  "propagateClick": false,
  "paddingBottom": 20,
  "shadow": false,
  "height": "49.432%",
  "borderSize": 0,
  "top": "2.67%",
  "click": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, 0, this.effect_14B56463_03A3_6C23_416F_105FDA79FC3E, 'hideEffect', false)",
  "paddingRight": 20,
  "visible": false,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>CALLE COMERCIO</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:28px;font-family:Georgia, serif;\"><I>EJE FUNDACIONAL</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">La ocupaci\u00f3n originaria del asentamiento de Putaendo data de fines del siglo XV y comienzos del siglo XVI, correspondiendo a la ocupaci\u00f3n inc\u00e1sica y al establecimiento del camino inca. Los pobladores reconocieron este camino como eje fundacional y lo utilizaron como referencia de emplazamiento, originando como calle larga: la actual calle comercio. A fines del siglo XVIII y comienzos del XIX el pueblo consolida su esquema de origen, recibiendo el t\u00edtulo de Villa y en 1868 el de ciudad</SPAN></SPAN></DIV></div>",
  "scrollBarVisible": "rollOver",
  "id": "HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700",
  "minWidth": 1,
  "data": {
   "name": "COMERCIO"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "class": "HTMLText",
  "left": "0.89%",
  "minHeight": 1,
  "paddingTop": 20,
  "scrollBarWidth": 10
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "borderSize": 0,
  "top": 0,
  "paddingRight": 0,
  "visible": false,
  "id": "veilPopupPanorama",
  "minWidth": 0,
  "data": {
   "name": "UIComponent26220"
  },
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "borderRadius": 0,
  "backgroundOpacity": 0.55,
  "paddingLeft": 0,
  "class": "UIComponent",
  "left": 0,
  "minHeight": 0,
  "paddingTop": 0,
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "right": 0
 },
 {
  "backgroundColor": [],
  "backgroundColorRatios": [],
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "scaleMode": "custom",
  "borderSize": 0,
  "top": 0,
  "paddingRight": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "minWidth": 0,
  "data": {
   "name": "ZoomImage26221"
  },
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "class": "ZoomImage",
  "left": 0,
  "minHeight": 0,
  "paddingTop": 0,
  "right": 0
 },
 {
  "iconLineWidth": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontSize": 12,
  "mode": "push",
  "gap": 5,
  "layout": "horizontal",
  "textDecoration": "none",
  "fontFamily": "Arial",
  "iconWidth": 20,
  "propagateClick": false,
  "paddingBottom": 5,
  "shadow": false,
  "verticalAlign": "middle",
  "fontWeight": "normal",
  "borderSize": 0,
  "iconHeight": 20,
  "fontColor": "#FFFFFF",
  "top": 10,
  "iconBeforeLabel": true,
  "paddingRight": 5,
  "visible": false,
  "borderColor": "#000000",
  "cursor": "hand",
  "shadowSpread": 1,
  "id": "closeButtonPopupPanorama",
  "minWidth": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "borderRadius": 0,
  "data": {
   "name": "CloseButton26222"
  },
  "backgroundOpacity": 0.3,
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "paddingLeft": 5,
  "rollOverIconColor": "#666666",
  "class": "CloseButton",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "iconColor": "#000000",
  "label": "",
  "minHeight": 0,
  "paddingTop": 5,
  "pressedIconColor": "#888888",
  "right": 10
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist,this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E].forEach(function(component) { component.set('visible', false); }) }",
 "mobileMipmappingEnabled": true,
 "desktopMipmappingEnabled": true,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "creationPolicy": "delayed",
 "gap": 10,
 "propagateClick": false,
 "vrPolyfillScale": 1,
 "paddingBottom": 0,
 "shadow": false,
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "buttonToggleMute": "this.IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
 "overflow": "visible",
 "layout": "absolute",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } }
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "minWidth": 20,
 "data": {
  "name": "Player20898"
 },
 "buttonToggleFullscreen": "this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "class": "Player",
 "minHeight": 20,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "mouseWheelEnabled": true
})