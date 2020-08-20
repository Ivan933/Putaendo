TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "buttonStop": [
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 24,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 24,
    "class": "IconButton",
    "maxHeight": 24,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D_rollover.png",
    "shadow": false,
    "maxWidth": 24,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "top": "0%",
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, false, 0, null, null, false)",
    "transparencyActive": true,
    "cursor": "hand",
    "borderRadius": 0,
    "minHeight": 1,
    "id": "IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
    "data": {
     "name": "X"
    },
    "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "right": "0%"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 40,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 40,
    "class": "IconButton",
    "maxHeight": 80,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0_rollover.png",
    "shadow": false,
    "maxWidth": 80,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "top": 20,
    "click": "this.setComponentVisibility(this.Container_ECB4524F_E163_9AF0_41E5_60E049D28740, false, 0, null, null, false)",
    "transparencyActive": true,
    "cursor": "hand",
    "borderRadius": 0,
    "minHeight": 1,
    "id": "IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
    "data": {
     "name": "IconButton X"
    },
    "iconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "left": 20
   },
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "class": "VideoPlayer"
 },
 {
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
    "overlays": [
     {
      "yaw": -131.95,
      "bleaching": 0.21,
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.64,
      "id": "overlay_E56B8391_FD83_162E_41DD_3D1724CB6C38",
      "pitch": 38.93
     },
     {
      "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0",
      "hfov": 43.2,
      "rotate": false,
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
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_E2EE4A9F_FD81_1653_41EB_EA207627AD4D",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6, {'backgroundOpacity':0.3,'borderColor':'#000000','iconWidth':20,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconLineWidth':5,'paddingRight':5,'rollOverIconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconHeight':20,'iconColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 91.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.69,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationX": 0,
      "showEasing": "cubic_in",
      "yaw": 91.89,
      "hideDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "pitch": 8.64,
      "popupMaxWidth": "80%",
      "id": "popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
      "hfov": 6.69,
      "popupMaxHeight": "80%",
      "showDuration": 500,
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
      "hideEasing": "cubic_out"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_E27C5582_FDBF_122D_41EB_A27AB7E62A11",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066, {'backgroundOpacity':0.3,'borderColor':'#000000','iconWidth':20,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconLineWidth':5,'paddingRight':5,'rollOverIconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconHeight':20,'iconColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -63.78,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.64,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationX": 0,
      "showEasing": "cubic_in",
      "yaw": -63.78,
      "hideDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "pitch": 11.32,
      "popupMaxWidth": "80%",
      "id": "popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
      "hfov": 6.64,
      "popupMaxHeight": "80%",
      "showDuration": 500,
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
      "hideEasing": "cubic_out"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0D56B69D_0367_ACE7_4185_3811F8EC2BD3",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 1.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.08,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0D9E8202_0362_A7DD_413A_1B10651B0760",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 1.19,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.87,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "Parque Puente Cimbra",
  "cardboardMenu": {
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020",
   "class": "Menu",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_02A6508B_0CFA_836E_4197_86A00921080C",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "children": [
    {
     "label": "Parque Puente Cimbra",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "Plaza de Armas",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "Calle Chacabuco/Salinas",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "Calle Comercio",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "Calle Comercio Vista 2",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "Calle Comercio/Aspee",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "Calle Comercio/O'Higgins",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "Parque Cementerio de Carretas",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "El Llano",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "buttonStop": [
   "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "buttonToggleHotspots": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "toggle",
   "width": 37,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "height": 31,
   "class": "IconButton",
   "maxHeight": 31,
   "pressedIconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733_pressed.png",
   "paddingTop": 0,
   "maxWidth": 37,
   "borderRadius": 0,
   "paddingBottom": 0,
   "shadow": false,
   "backgroundOpacity": 0,
   "transparencyActive": true,
   "cursor": "hand",
   "minHeight": 1,
   "id": "IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
   "data": {
    "name": "button show hotspots"
   },
   "iconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733.png",
   "paddingLeft": 0,
   "minWidth": 1
  },
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": "this.IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1"
 },
 {
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.85,
   "hfov": 130,
   "pitch": -10.52
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
    "overlays": [
     {
      "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_tcap0",
      "hfov": 40.8,
      "rotate": false,
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
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_E4A97113_FD83_3252_41E4_DA0F70DA88F6",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794, {'backgroundOpacity':0.3,'borderColor':'#000000','iconWidth':20,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconLineWidth':5,'paddingRight':5,'rollOverIconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconHeight':20,'iconColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -169.29,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.14,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationX": 0,
      "showEasing": "cubic_in",
      "yaw": -169.29,
      "hideDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "pitch": 40.56,
      "popupMaxWidth": "80%",
      "id": "popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
      "hfov": 5.06,
      "popupMaxHeight": "80%",
      "showDuration": 500,
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
      "hideEasing": "cubic_out"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0DB0F0C5_036D_6467_4175_1ECFA3A3D7BC",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 23.98,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.48,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0D8678DF_036D_E463_4171_5781BA69B0EB",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB, this.camera_139825AB_037F_6C23_417E_4AF177A82E0E); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -88.56,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.48,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0C353D64_036E_BC25_4180_80E041DA2514",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -133.15,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.5,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0C4C6BC4_036E_A465_418A_B6FB8F09F6E4",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 23.98,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.63,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_11012D6D_0362_9C27_4180_4562ECD0D240",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -88.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.4,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_126CD330_0363_E43D_415B_C7356528EE10",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -133.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.8,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_136D83BC_0362_A425_4170_546AECB510C9",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD, this.camera_13ABE59B_037F_6CE3_4158_05D31057EE80); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 110.53,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.37,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_1329CD27_0362_9C23_4187_3B09D00B114D",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 110.61,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.83,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "Plaza de Armas",
  "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.76,
   "hfov": 124,
   "pitch": 3.02
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
    "overlays": [
     {
      "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_tcap0",
      "hfov": 27.6,
      "rotate": false,
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
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_0C9F3D9C_0365_BCE5_4189_C941867730B2",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 47.86,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.2,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_1301E5D6_0367_6C65_4160_5EED2171BB05",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 92.44,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.15,
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
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_1120D7ED_0366_AC27_415A_5F46875395A0",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "items": [
       {
        "yaw": 92.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.61,
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
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_13BE28D1_0365_A47F_4189_3FCB15222C6F",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "items": [
       {
        "yaw": 47.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.78,
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "Calle Chacabuco/Salinas",
  "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.37,
   "pitch": -2.65
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
             "yaw": -99.22,
             "backwardYaw": 56.31,
             "class": "AdjacentPanorama"
            }
           ],
           "frames": [
            {
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
             },
             "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_159EA224_016F_BB0F_40CA_E4C293003800",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF, this.camera_027070EF_0CFA_84A6_4191_C4099B919478); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "yaw": -99.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.66,
                 "image": {
                  "levels": [
                   {
                    "height": 90,
                    "width": 2400,
                    "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "colCount": 24,
                  "rowCount": 1,
                  "frameDuration": 76,
                  "class": "AnimatedImageResource"
                 },
                 "pitch": -11.37
                }
               ],
               "rollOverDisplay": false,
               "data": {
                "label": "1"
               },
               "maps": [],
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "id": "overlay_1A21252B_02B1_2A4B_4167_33D1AB204F98",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.showWindow(this.window_1A6F643F_02B1_2A4B_4165_ADDCAEA280A5, null, false)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "yaw": 106.42,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.2,
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
               ],
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "maps": [],
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ],
           "hfovMax": 131,
           "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
           "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
           "pitch": 0,
           "vfov": 180,
           "partial": false,
           "label": "Calle Comercio/O'Higgins",
           "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60
          },
          "yaw": 56.31,
          "backwardYaw": -99.22,
          "class": "AdjacentPanorama"
         },
         {
          "distance": 1,
          "panorama": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
          "yaw": -121.46,
          "backwardYaw": 67.7,
          "class": "AdjacentPanorama"
         }
        ],
        "frames": [
         {
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
          },
          "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_12329761_016E_D909_4167_C240BA83D0B1",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674, this.camera_02525117_0CFA_8566_4188_3F920A471184); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": 56.31,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.78,
              "image": {
               "levels": [
                {
                 "height": 90,
                 "width": 2400,
                 "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "colCount": 24,
               "rowCount": 1,
               "frameDuration": 76,
               "class": "AnimatedImageResource"
              },
              "pitch": -5.61
             }
            ],
            "rollOverDisplay": false,
            "data": {
             "label": "1"
            },
            "maps": [],
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_14D70DCF_0163_4919_4133_581227E908C0",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_F09BE238_FD81_765E_41DD_692A05D67004, this.camera_0244D12B_0CFA_85AE_41A5_9FCFA9908B7D); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": -121.46,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.54,
              "image": {
               "levels": [
                {
                 "height": 90,
                 "width": 2400,
                 "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "colCount": 24,
               "rowCount": 1,
               "frameDuration": 76,
               "class": "AnimatedImageResource"
              },
              "pitch": -15.21
             }
            ],
            "rollOverDisplay": false,
            "data": {
             "label": "1"
            },
            "maps": [],
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "id": "overlay_158A1FD4_0293_75DE_4168_0F44C6770E84",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.showWindow(this.window_1A2201D7_0291_2DDA_4171_B3BD567FE6A6, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": -83.5,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.18,
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
            ],
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "maps": [],
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ],
        "hfovMax": 130,
        "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
        "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
        "pitch": 0,
        "vfov": 180,
        "partial": false,
        "label": "Calle Comercio/Aspee",
        "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60
       },
       "yaw": 67.7,
       "backwardYaw": -121.46,
       "class": "AdjacentPanorama"
      },
      {
       "distance": 1,
       "panorama": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
       "yaw": -113.36,
       "backwardYaw": -20.49,
       "class": "AdjacentPanorama"
      }
     ],
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_12776E98_0161_CB07_4158_632F68287054",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF, this.camera_029320B3_0CFA_84BE_419A_4731D8E2D09F); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 67.7,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.67,
           "image": {
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "colCount": 24,
            "rowCount": 1,
            "frameDuration": 76,
            "class": "AnimatedImageResource"
           },
           "pitch": -11.1
          }
         ],
         "rollOverDisplay": false,
         "data": {
          "label": "1"
         },
         "maps": [],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_1446FA86_0163_4B0B_417D_4E5F56B55DB9",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB, this.camera_0299D0C7_0CFA_84E6_4199_6F46BCDB4C73); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": -113.36,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.66,
           "image": {
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "colCount": 24,
            "rowCount": 1,
            "frameDuration": 76,
            "class": "AnimatedImageResource"
           },
           "pitch": -11.37
          }
         ],
         "rollOverDisplay": false,
         "data": {
          "label": "1"
         },
         "maps": [],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMax": 130,
     "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
     "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004",
     "pitch": 0,
     "vfov": 180,
     "partial": false,
     "label": "Calle Comercio Vista 2",
     "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60
    },
    "yaw": -20.49,
    "backwardYaw": -113.36,
    "class": "AdjacentPanorama"
   }
  ],
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
    "overlays": [
     {
      "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_tcap0",
      "hfov": 36,
      "rotate": false,
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
      "inertia": false
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_12D4EBB2_0163_C90B_417A_34B0ACAC2166",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_F09BE238_FD81_765E_41DD_692A05D67004, this.camera_028DE0DF_0CFA_84E6_4190_D9FF51EBF9DE); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -20.49,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.47,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76,
         "class": "AnimatedImageResource"
        },
        "pitch": -17.14
       }
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "1"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_1BD9F817_0161_F709_416A_1F2A176825A9",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 165.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.78,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76,
         "class": "AnimatedImageResource"
        },
        "pitch": -5.06
       }
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "1"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "Calle Comercio",
  "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.07,
   "hfov": 127,
   "pitch": -8.98
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
 {
  "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 68.74,
   "hfov": 122,
   "pitch": -7.49
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
 {
  "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 73.18,
   "hfov": 126,
   "pitch": -0.66
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
       "yaw": -134.64,
       "backwardYaw": -46.1,
       "class": "AdjacentPanorama"
      }
     ],
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_0C877998_037D_64ED_4164_21C42C88E3F4",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D, this.camera_13D01563_037F_6C23_4182_C8A6A1CB48E8); this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": -101.35,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.4,
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
         ],
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "maps": [],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_12EA85D4_037F_6C65_4183_01FF2C915B35",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": -101.41,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 14.72,
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
         ],
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "maps": [],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_1245FF38_0365_9C2D_4178_A7FD9211A73B",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A, this.camera_0237913B_0CFA_85AE_419C_673DDB499B6E); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": -134.64,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.77,
           "image": {
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "colCount": 24,
            "rowCount": 1,
            "frameDuration": 76,
            "class": "AnimatedImageResource"
           },
           "pitch": -5.67
          }
         ],
         "rollOverDisplay": false,
         "data": {
          "label": "1"
         },
         "maps": [],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMax": 130,
     "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
     "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
     "pitch": 0,
     "vfov": 180,
     "partial": false,
     "label": "El Llano",
     "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60
    },
    "yaw": -46.1,
    "backwardYaw": -134.64,
    "class": "AdjacentPanorama"
   }
  ],
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_1225C4F7_0362_EC23_4161_75F4673EC0EA",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD, this.camera_02630107_0CFA_8566_4172_3C20BBA524D4); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -46.1,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.76,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76,
         "class": "AnimatedImageResource"
        },
        "pitch": -6.57
       }
      ],
      "rollOverDisplay": false,
      "data": {
       "label": "1"
      },
      "maps": [],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "Parque Cementerio de Carretas",
  "cardboardMenu": "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 123,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
 {
  "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.04,
   "hfov": 124,
   "pitch": -21.66
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, true, -1, this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, true, -1, this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 4, 5)",
    "media": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 5, 6)",
    "media": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 6, 7)",
    "media": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 8, 0)",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, -1, this.effect_104AB582_0291_EA3A_416D_830D066B83F2, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, true, -1, this.effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, -1, this.effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 4, 5)",
    "media": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 5, 6)",
    "media": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 6, 7)",
    "media": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 8, 0)",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist",
  "class": "PlayList"
 },
 {
  "label": "Territorios - Putaendo",
  "video": {
   "height": 676,
   "mp4Url": "media/video_14170593_0126_B908_417A_E645964470E6.mp4",
   "width": 1200,
   "class": "VideoResource"
  },
  "thumbnailUrl": "media/video_14170593_0126_B908_417A_E645964470E6_t.jpg",
  "id": "video_14170593_0126_B908_417A_E645964470E6",
  "loop": false,
  "class": "Video",
  "height": 676,
  "width": 1200,
  "scaleMode": "fit_inside"
 },
 {
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_14170593_0126_B908_417A_E645964470E6",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_02DE8067_0CFA_83A6_41A2_6F720051CC13, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_02DE8067_0CFA_83A6_41A2_6F720051CC13, 0, this.video_14170593_0126_B908_417A_E645964470E6)"
   }
  ],
  "id": "playList_02DE8067_0CFA_83A6_41A2_6F720051CC13",
  "class": "PlayList"
 },
 "this.Menu_02A6508B_0CFA_836E_4197_86A00921080C",
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_1A687CB6_02B3_1A5A_4152_D6E0363828DD",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 8000,
  "id": "effect_1505B9C3_0291_1A3B_4176_91AC933F53E5",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_18FC46C0_0291_1636_4178_D42A4CC7C980",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_14B56463_03A3_6C23_416F_105FDA79FC3E",
  "class": "FadeOutEffect"
 },
 "this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
 "this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
 "this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
 {
  "layout": "vertical",
  "propagateClick": false,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Georgia",
  "modal": true,
  "bodyBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "creationPolicy": "delayed",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "title": "OCHAVO",
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "paddingTop": 0,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonIconColor": "#000000",
  "closeButtonIconLineWidth": 2,
  "headerBackgroundColorDirection": "horizontal",
  "overflow": "scroll",
  "shadowOpacity": 0.5,
  "titleTextDecoration": "none",
  "scrollBarColor": "#000000",
  "borderRadius": 5,
  "minHeight": 20,
  "titleFontColor": "#000000",
  "gap": 8,
  "bodyPaddingRight": 5,
  "shadowVerticalLength": 0,
  "shadowColor": "#000000",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titlePaddingLeft": 5,
  "minWidth": 20,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBorderRadius": 11,
  "bodyBorderSize": 0,
  "bodyPaddingLeft": 5,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "children": [
   {
    "propagateClick": false,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "100%",
    "paddingRight": 10,
    "paddingBottom": 10,
    "class": "HTMLText",
    "shadow": false,
    "paddingTop": 10,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "height": "36%",
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">El ochavo es un recurso arquitect\u00f3nico que cumple la funci\u00f3n de facilitar la visibilidad y el tr\u00e1nsito en los cruces de calles, permitiendo que peatones y conductores dispongan de una mejor visi\u00f3n al llegar al cruce.</SPAN></SPAN></DIV></div>",
    "minHeight": 0,
    "id": "htmlText_uid02B65077_0CFA_83A6_41A2_8E6517BF8541",
    "data": {
     "name": "HTMLText3315"
    },
    "paddingLeft": 10,
    "minWidth": 0,
    "scrollBarVisible": "rollOver"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "width": "100%",
    "paddingRight": 0,
    "url": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C.PNG",
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "class": "Image",
    "shadow": false,
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "borderRadius": 0,
    "height": "63%",
    "backgroundOpacity": 0,
    "minHeight": 0,
    "id": "image_uid02B65077_0CFA_83A6_41A2_8E6517BF8541_1",
    "data": {
     "name": "Image3316"
    },
    "paddingLeft": 0,
    "minWidth": 0
   }
  ],
  "titlePaddingTop": 5,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "footerBackgroundColorDirection": "vertical",
  "width": 400,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "borderSize": 0,
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "height": 400,
  "headerPaddingLeft": 10,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingBottom": 10,
  "shadowBlurRadius": 6,
  "titleFontSize": 16,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingRight": 10,
  "bodyPaddingBottom": 5,
  "shadow": true,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "footerHeight": 5,
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 1,
  "closeButtonIconWidth": 12,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "id": "window_1A2201D7_0291_2DDA_4171_B3BD567FE6A6",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titleFontWeight": "bold",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBackgroundOpacity": 1,
  "paddingLeft": 0,
  "veilColorDirection": "horizontal",
  "backgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingTop": 5,
  "closeButtonBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "data": {
   "name": "Window30241"
  },
  "titleFontStyle": "normal"
 },
 {
  "layout": "vertical",
  "propagateClick": false,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Georgia",
  "modal": true,
  "bodyBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "creationPolicy": "delayed",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "title": "PILAR DE ESQUINA",
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "paddingTop": 0,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonIconColor": "#000000",
  "closeButtonIconLineWidth": 2,
  "headerBackgroundColorDirection": "horizontal",
  "overflow": "scroll",
  "shadowOpacity": 0.5,
  "titleTextDecoration": "none",
  "scrollBarColor": "#000000",
  "borderRadius": 5,
  "minHeight": 20,
  "titleFontColor": "#000000",
  "gap": 10,
  "bodyPaddingRight": 5,
  "shadowVerticalLength": 0,
  "shadowColor": "#000000",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titlePaddingLeft": 5,
  "minWidth": 20,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBorderRadius": 11,
  "bodyBorderSize": 0,
  "bodyPaddingLeft": 5,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "children": [
   {
    "propagateClick": false,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "100%",
    "paddingRight": 10,
    "paddingBottom": 10,
    "class": "HTMLText",
    "shadow": false,
    "paddingTop": 10,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "height": "34%",
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">El pilar de esquina tiene por funci\u00f3n soportar el peso de la estructura superior del v\u00e9rtice de las casonas, sin perturbar el tr\u00e1nsito de los peatones por abajo. Tambi\u00e9n serv\u00edan para un aprovechamiento particular del espacio en las esquinas sin sacrificar el \u00e1rea construida de la casa que las ocupaba.</SPAN></SPAN></DIV></div>",
    "minHeight": 0,
    "id": "htmlText_uid02B2D07B_0CFA_83AE_418D_78A24EC64BDA",
    "data": {
     "name": "HTMLText3317"
    },
    "paddingLeft": 10,
    "minWidth": 0,
    "scrollBarVisible": "rollOver"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "width": "100%",
    "paddingRight": 0,
    "url": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC.jpg",
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "class": "Image",
    "shadow": false,
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "borderRadius": 0,
    "height": "65%",
    "backgroundOpacity": 0,
    "minHeight": 0,
    "id": "image_uid02B2D07B_0CFA_83AE_418D_78A24EC64BDA_1",
    "data": {
     "name": "Image3318"
    },
    "paddingLeft": 0,
    "minWidth": 0
   }
  ],
  "titlePaddingTop": 5,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "footerBackgroundColorDirection": "vertical",
  "width": 400,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "borderSize": 0,
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "height": 400,
  "headerPaddingLeft": 10,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingBottom": 10,
  "shadowBlurRadius": 6,
  "titleFontSize": 16,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingRight": 10,
  "bodyPaddingBottom": 5,
  "shadow": true,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "footerHeight": 5,
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 1,
  "closeButtonIconWidth": 12,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "id": "window_1A6F643F_02B1_2A4B_4165_ADDCAEA280A5",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titleFontWeight": "bold",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBackgroundOpacity": 1,
  "paddingLeft": 0,
  "veilColorDirection": "horizontal",
  "backgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingTop": 5,
  "closeButtonBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "data": {
   "name": "Window34181"
  },
  "titleFontStyle": "normal"
 },
 {
  "id": "camera_029320B3_0CFA_84BE_419A_4731D8E2D09F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.54,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0299D0C7_0CFA_84E6_4199_6F46BCDB4C73",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.51,
   "hfov": 127,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_028DE0DF_0CFA_84E6_4190_D9FF51EBF9DE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 66.64,
   "hfov": 122,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_027070EF_0CFA_84A6_4191_C4099B919478",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.69,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_02630107_0CFA_8566_4172_3C20BBA524D4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.36,
   "hfov": 124,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_02525117_0CFA_8566_4188_3F920A471184",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 80.78,
   "hfov": 126,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0244D12B_0CFA_85AE_41A5_9FCFA9908B7D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -112.3,
   "hfov": 122,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0237913B_0CFA_85AE_419C_673DDB499B6E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.9,
   "hfov": 123,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_104AA582_0291_EA3A_4182_D07C40B73749",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_104AB582_0291_EA3A_416D_830D066B83F2",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_16FAF692_03AD_ACFD_4173_5AEAFD4AC511",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_16FAC692_03AD_ACFD_410D_FA4D9B9E15A0",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
  "class": "FadeOutEffect"
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
  "width": 604,
  "label": "ochavo-gigapixel-scale-2_00x",
  "class": "Photo",
  "thumbnailUrl": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C_t.png",
  "id": "photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C",
  "height": 404,
  "duration": 5000,
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
  "width": 1024,
  "label": "29804074776_3f176df8f3_b",
  "class": "Photo",
  "thumbnailUrl": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC_t.jpg",
  "id": "photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC",
  "height": 768,
  "duration": 5000,
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
  "transitionDuration": 500,
  "toolTipBorderRadius": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "class": "ViewerArea",
  "toolTipPaddingBottom": 10,
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "minHeight": 50,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 0,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 12,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 0.7,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "paddingRight": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontColor": "#FFFFFF",
  "toolTipBorderColor": "#767676",
  "paddingBottom": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderSize": 0,
  "toolTipPaddingRight": 12,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Georgia",
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 10,
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipTextShadowOpacity": 0,
  "bottom": "0%",
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "left": 0,
  "progressBarOpacity": 1,
  "toolTipFontSize": 17,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontWeight": "normal",
  "right": "0%",
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "propagateClick": false,
  "progressBackgroundColorRatios": [
   0
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "url": "skin/Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA.png",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "class": "Image",
  "maxHeight": 163,
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 1918,
  "scaleMode": "fill",
  "borderRadius": 0,
  "height": "15%",
  "backgroundOpacity": 0,
  "minHeight": 1,
  "bottom": 0.03,
  "id": "Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA",
  "data": {
   "name": "Gradient"
  },
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%"
 },
 {
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": 1650,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "height": 50,
  "class": "Container",
  "shadow": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "bottom": "0%",
  "id": "Container_3649275E_3D3B_CF53_41C6_1DC9976EFC78",
  "gap": 12,
  "data": {
   "name": "-- Main Button Set"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 20,
  "minWidth": 1,
  "left": "0%",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 82,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 38,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3_rollover.png",
    "maxWidth": 82,
    "borderRadius": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "transparencyActive": true,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3",
    "data": {
     "name": "button Ubicaci\u00f3n"
    },
    "iconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3.png",
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 121,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 38,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1_rollover.png",
    "maxWidth": 121,
    "borderRadius": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "transparencyActive": true,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1",
    "data": {
     "name": "button panorama"
    },
    "iconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1.jpg",
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 118,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 38,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF_rollover.png",
    "maxWidth": 118,
    "borderRadius": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.setMediaBehaviour(this.playList_02DE8067_0CFA_83A6_41A2_6F720051CC13, 0); this.MainViewerVideoPlayer.play(); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "transparencyActive": true,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF",
    "data": {
     "name": "button video gallery"
    },
    "iconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF.png",
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 90,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 33,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0_rollover.png",
    "shadow": false,
    "maxWidth": 97,
    "borderRadius": 0,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "transparencyActive": true,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0",
    "data": {
     "name": "button 360 video"
    },
    "iconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0.png",
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 106,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 33,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3_rollover.png",
    "maxWidth": 115,
    "borderRadius": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "transparencyActive": true,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3",
    "data": {
     "name": "button photoalbum"
    },
    "iconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3.png",
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 82,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 33,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD_rollover.png",
    "shadow": false,
    "maxWidth": 82,
    "borderRadius": 0,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "transparencyActive": true,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD",
    "data": {
     "name": "button livepano"
    },
    "iconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD.png",
    "paddingLeft": 0,
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 76,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 38,
    "class": "IconButton",
    "maxHeight": 33,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483_rollover.png",
    "maxWidth": 141,
    "borderRadius": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\")",
    "transparencyActive": true,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483",
    "data": {
     "name": "button contact"
    },
    "iconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483.png",
    "paddingLeft": 0,
    "minWidth": 1
   }
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "url": "skin/Image_3117F852_3D1C_4153_41C7_F45A80F07BAF.png",
  "verticalAlign": "bottom",
  "paddingBottom": 0,
  "class": "Image",
  "maxHeight": 2,
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 1918,
  "scaleMode": "fit_to_width",
  "borderRadius": 0,
  "height": "0.22%",
  "backgroundOpacity": 0,
  "minHeight": 1,
  "bottom": 52,
  "id": "Image_3117F852_3D1C_4153_41C7_F45A80F07BAF",
  "data": {
   "name": "white line"
  },
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%"
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "mode": "push",
  "width": 49,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "height": 37,
  "class": "IconButton",
  "maxHeight": 37,
  "paddingTop": 0,
  "rollOverIconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1_rollover.png",
  "shadow": false,
  "maxWidth": 49,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "transparencyActive": false,
  "cursor": "hand",
  "visible": false,
  "minHeight": 1,
  "bottom": 7,
  "id": "IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "data": {
   "name": "IconButton VR"
  },
  "iconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1.png",
  "paddingLeft": 0,
  "minWidth": 1,
  "right": 20
 },
 {
  "layout": "absolute",
  "propagateClick": false,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": 1207.4,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "height": 520,
  "class": "Container",
  "shadow": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": 78,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_5A4FF621_5292_00D1_41C0_CD8A96F5E4AB",
  "gap": 10,
  "data": {
   "name": "- Container Title"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "minWidth": 1,
  "left": 17,
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "width": 571,
    "paddingRight": 0,
    "url": "skin/Image_5AA7538E_5272_07D3_4182_395FFD794174.png",
    "verticalAlign": "middle",
    "height": 103,
    "class": "Image",
    "maxHeight": 103,
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 571,
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "top": "0%",
    "visible": false,
    "minHeight": 1,
    "id": "Image_5AA7538E_5272_07D3_4182_395FFD794174",
    "data": {
     "name": "T01"
    },
    "paddingLeft": 0,
    "minWidth": 1,
    "left": "0.11%"
   }
  ]
 },
 {
  "layout": "absolute",
  "propagateClick": false,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": 350,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "height": 110,
  "class": "Container",
  "shadow": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": "0%",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_5791757B_5C95_8734_4195_AD2599C9941B",
  "gap": 10,
  "data": {
   "name": "-- Settings button set"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "minWidth": 1,
  "right": "0%",
  "children": [
   {
    "layout": "horizontal",
    "propagateClick": false,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": 110,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "height": 110,
    "class": "Container",
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "backgroundOpacity": 0,
    "top": "0%",
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_57887AFF_5C94_8D2C_41D1_D25764D9D6F5",
    "gap": 10,
    "data": {
     "name": "container setting button"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "right": "0%",
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 60,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 60,
      "class": "IconButton",
      "maxHeight": 60,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E_rollover.png",
      "maxWidth": 60,
      "borderRadius": 0,
      "paddingBottom": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, false, 3500, null, 'hideEffect', false)",
      "transparencyActive": false,
      "cursor": "hand",
      "minHeight": 1,
      "id": "IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E",
      "data": {
       "name": "settings button"
      },
      "iconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E.png",
      "paddingLeft": 0,
      "minWidth": 1
     }
    ]
   },
   {
    "layout": "horizontal",
    "propagateClick": false,
    "horizontalAlign": "right",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "60.857%",
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "class": "Container",
    "shadow": false,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "height": "100%",
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "backgroundOpacity": 0,
    "top": "0%",
    "visible": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_50C22332_5CED_8334_41D2_0EC5525522E0",
    "data": {
     "name": "Hide buttons set"
    },
    "contentOpaque": false,
    "gap": 3,
    "paddingLeft": 0,
    "minWidth": 1,
    "left": "12.8%",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 37,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 31,
      "class": "IconButton",
      "maxHeight": 31,
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 37,
      "borderRadius": 0,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "visible": false,
      "minHeight": 1,
      "id": "IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB",
      "data": {
       "name": "button floorplan"
      },
      "iconURL": "skin/IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB.png",
      "paddingLeft": 0,
      "minWidth": 1
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 37,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 31,
      "class": "IconButton",
      "maxHeight": 31,
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 37,
      "borderRadius": 0,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "visible": false,
      "minHeight": 1,
      "id": "IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB",
      "data": {
       "name": "button share"
      },
      "iconURL": "skin/IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB.png",
      "paddingLeft": 0,
      "minWidth": 1
     },
     "this.IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "toggle",
      "width": 37,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 31,
      "class": "IconButton",
      "maxHeight": 31,
      "pressedIconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D_pressed.png",
      "paddingTop": 0,
      "maxWidth": 37,
      "borderRadius": 0,
      "paddingBottom": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "minHeight": 1,
      "id": "IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
      "data": {
       "name": "button mute"
      },
      "iconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D.png",
      "paddingLeft": 0,
      "minWidth": 1
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "toggle",
      "width": 37,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 31,
      "class": "IconButton",
      "maxHeight": 31,
      "pressedIconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E_pressed.png",
      "paddingTop": 0,
      "maxWidth": 37,
      "borderRadius": 0,
      "paddingBottom": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "minHeight": 1,
      "id": "IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
      "data": {
       "name": "button fullscreen"
      },
      "iconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E.png",
      "paddingLeft": 0,
      "minWidth": 1
     }
    ]
   }
  ]
 },
 {
  "layout": "horizontal",
  "propagateClick": false,
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "right",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": 213,
  "paddingRight": 27,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": "0%",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_53346047_5A6C_DD58_41B9_B595FF015610",
  "gap": 10,
  "data": {
   "name": "--Intro video"
  },
  "contentOpaque": false,
  "paddingLeft": 0,
  "minWidth": 1,
  "right": "0%",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 144,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": 60,
    "class": "IconButton",
    "maxHeight": 60,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB_rollover.png",
    "shadow": false,
    "maxWidth": 144,
    "borderRadius": 0,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "transparencyActive": true,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB",
    "data": {
     "name": "button intro video"
    },
    "iconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB.png",
    "paddingLeft": 0,
    "minWidth": 1
   }
  ]
 },
 {
  "layout": "absolute",
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.6,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "bottom": "0%",
  "id": "Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4",
  "gap": 10,
  "data": {
   "name": "---INFO"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "right": "0%",
  "children": [
   {
    "layout": "absolute",
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#333333",
     "#333333"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "top",
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "top": "8%",
    "scrollBarColor": "#F10A00",
    "borderRadius": 0,
    "minHeight": 1,
    "bottom": "8%",
    "id": "Container_85A02C4E_A12F_4591_41DC_68C7D63D67D7",
    "gap": 10,
    "data": {
     "name": "Global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "left": "6%",
    "backgroundColorDirection": "vertical",
    "right": "6%",
    "children": [
     {
      "layout": "absolute",
      "propagateClick": false,
      "horizontalAlign": "left",
      "backgroundColor": [
       "#000000",
       "#333333"
      ],
      "scrollBarMargin": 2,
      "width": "62%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "backgroundColorRatios": [
       1,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 1,
      "top": "0%",
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Container_85A03C4E_A12F_4591_41DA_1C4E96B3B699",
      "data": {
       "name": "left"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "width": "100%",
        "paddingRight": 0,
        "url": "skin/Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D.jpg",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "class": "Image",
        "maxHeight": 948,
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 1264,
        "scaleMode": "fit_outside",
        "borderRadius": 0,
        "height": "100%",
        "backgroundOpacity": 0,
        "top": "0%",
        "minHeight": 1,
        "id": "Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D",
        "data": {
         "name": "img photo"
        },
        "paddingLeft": 0,
        "minWidth": 1,
        "left": "0%"
       }
      ]
     },
     {
      "layout": "vertical",
      "propagateClick": false,
      "scrollBarVisible": "rollOver",
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "54%",
      "borderSize": 0,
      "paddingRight": 50,
      "creationPolicy": "delayed",
      "verticalAlign": "middle",
      "paddingBottom": 20,
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 20,
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 1,
      "top": "0%",
      "scrollBarColor": "#E7392B",
      "borderRadius": 0,
      "minHeight": 500,
      "id": "Container_85A01C4E_A12F_4591_41E3_CE0B8DD057F5",
      "data": {
       "name": "right"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 50,
      "minWidth": 600,
      "backgroundColorDirection": "vertical",
      "right": "0%",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "width": "90%",
        "paddingRight": 0,
        "url": "skin/Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944.jpg",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "class": "Image",
        "shadow": false,
        "paddingTop": 0,
        "maxWidth": 712,
        "scaleMode": "fit_inside",
        "borderRadius": 0,
        "height": "90%",
        "backgroundOpacity": 0,
        "minHeight": 500,
        "id": "Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944",
        "data": {
         "name": "img text"
        },
        "paddingLeft": 0,
        "minWidth": 500
       }
      ]
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 24,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 24,
      "class": "IconButton",
      "maxHeight": 120,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB_rollover.png",
      "shadow": false,
      "maxWidth": 120,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": 20,
      "click": "this.setComponentVisibility(this.Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 30,
      "id": "IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB",
      "data": {
       "name": "x"
      },
      "iconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB.png",
      "paddingLeft": 0,
      "minWidth": 30,
      "right": 20
     }
    ]
   }
  ]
 },
 {
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.5,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_55273B39_437C_40D1_41B7_C9815CF1926F",
  "data": {
   "name": "UBICACI\u00d3N"
  },
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "horizontal",
    "propagateClick": false,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": 800,
    "borderSize": 0,
    "paddingRight": 0,
    "height": 600,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "borderRadius": 4,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_55E3858B_4314_C3B1_4199_F7924E88ECBA",
    "gap": 10,
    "data": {
     "name": "Location global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "layout": "absolute",
      "propagateClick": false,
      "horizontalAlign": "left",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "96.837%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "borderRadius": 0,
      "height": "94.868%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "id": "Container_55BED378_431C_475F_41C0_B13F978722EA",
      "data": {
       "name": "Container content"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "mode": "push",
        "width": 24,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": 24,
        "class": "IconButton",
        "maxHeight": 24,
        "paddingTop": 0,
        "rollOverIconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA_rollover.png",
        "shadow": false,
        "maxWidth": 24,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "top": "0%",
        "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, false, 0, null, null, false)",
        "transparencyActive": true,
        "cursor": "hand",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA",
        "data": {
         "name": "X"
        },
        "iconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA.png",
        "paddingLeft": 0,
        "minWidth": 1,
        "right": "0%"
       },
       {
        "layout": "absolute",
        "propagateClick": false,
        "horizontalAlign": "left",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarMargin": 2,
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "overflow": "scroll",
        "backgroundOpacity": 0.3,
        "top": "0%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_5555E455_436C_4151_41CC_029603B5193B",
        "gap": 10,
        "data": {
         "name": "Container webframe"
        },
        "contentOpaque": false,
        "paddingLeft": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundColorDirection": "vertical",
        "right": "10%",
        "children": [
         {
          "propagateClick": false,
          "backgroundColor": [
           "#FFFFFF"
          ],
          "width": "100%",
          "borderSize": 0,
          "paddingRight": 0,
          "url": "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13440.961761524723!2d-70.7243282164782!3d-32.626419896281845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x968871396691cee3%3A0x49116fdf72bc08e9!2sPutaendo%2C%20Valpara%C3%ADso%2C%20Chile!3m2!1d-32.628461!2d-70.7177434!5e0!3m2!1ses-419!2sru!4v1597687621391!5m2!1ses-419!2sru\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
          "paddingBottom": 0,
          "backgroundColorRatios": [
           0
          ],
          "class": "WebFrame",
          "shadow": false,
          "paddingTop": 0,
          "scrollEnabled": false,
          "height": "100%",
          "backgroundOpacity": 1,
          "top": "0%",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "WebFrame_57792F91_436F_DFD1_41BE_B9C240373A43",
          "data": {
           "name": "WebFrame"
          },
          "insetBorder": false,
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%",
          "backgroundColorDirection": "vertical"
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
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.5,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C",
  "data": {
   "name": "---PANORAMA LIST"
  },
  "contentOpaque": false,
  "gap": 11,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "absolute",
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": 1050,
    "borderSize": 0,
    "paddingRight": 0,
    "height": 580,
    "creationPolicy": "delayed",
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "borderRadius": 4,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_2E9E35C8_3D1C_43BF_41B7_13BBE9E68CEB",
    "gap": 10,
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 24,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 24,
      "class": "IconButton",
      "maxHeight": 24,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307_rollover.png",
      "shadow": false,
      "maxWidth": 24,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": "2.5%",
      "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307.png",
      "paddingLeft": 0,
      "minWidth": 1,
      "right": "1.43%"
     },
     {
      "layout": "vertical",
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "100%",
      "borderSize": 0,
      "paddingRight": 0,
      "paddingBottom": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "height": "88%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "borderRadius": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "bottom": "0%",
      "id": "Container_2ED71618_3D14_C0DF_418D_C2F178EFBCA8",
      "data": {
       "name": "Container thumblist"
      },
      "contentOpaque": false,
      "gap": 20,
      "paddingLeft": 0,
      "minWidth": 1,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "left",
        "borderSize": 0,
        "width": "85.4%",
        "paddingRight": 0,
        "url": "skin/Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583.png",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "class": "Image",
        "maxHeight": 41,
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 1133,
        "scaleMode": "fit_outside",
        "borderRadius": 0,
        "height": "14%",
        "backgroundOpacity": 0,
        "minHeight": 1,
        "id": "Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583",
        "data": {
         "name": "Text image"
        },
        "paddingLeft": 0,
        "minWidth": 1
       },
       {
        "layout": "horizontal",
        "propagateClick": false,
        "horizontalAlign": "center",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarMargin": 2,
        "width": "89.619%",
        "borderSize": 0,
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "borderRadius": 0,
        "height": "83.135%",
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "overflow": "scroll",
        "backgroundOpacity": 0.3,
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "id": "Container_2E0D0306_3D14_C0B3_41A4_18E077CBEE3C",
        "data": {
         "name": "Container Thumblist"
        },
        "contentOpaque": false,
        "gap": 13,
        "paddingLeft": 0,
        "minWidth": 1,
        "backgroundColorDirection": "vertical",
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "itemMinWidth": 50,
          "backgroundColor": [
           "#FFFFFF"
          ],
          "itemLabelFontStyle": "normal",
          "playList": "this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
          "itemLabelHorizontalAlign": "center",
          "itemMode": "normal",
          "class": "ThumbnailGrid",
          "itemThumbnailBorderRadius": 0,
          "paddingTop": 14,
          "itemThumbnailWidth": 200,
          "itemPaddingRight": 3,
          "borderRadius": 5,
          "itemPaddingTop": 3,
          "itemThumbnailHeight": 116,
          "scrollBarVisible": "rollOver",
          "itemHeight": 150,
          "scrollBarColor": "#FFFFFF",
          "minHeight": 1,
          "itemOpacity": 1,
          "gap": 25,
          "selectedItemLabelFontWeight": "bold",
          "itemHorizontalAlign": "center",
          "itemBorderRadius": 0,
          "itemLabelFontFamily": "Georgia",
          "minWidth": 1,
          "itemLabelGap": 7,
          "itemPaddingBottom": 3,
          "itemThumbnailShadow": false,
          "itemPaddingLeft": 3,
          "horizontalAlign": "left",
          "scrollBarMargin": 2,
          "itemVerticalAlign": "middle",
          "width": "100%",
          "borderSize": 0,
          "itemBackgroundColor": [],
          "itemThumbnailOpacity": 1,
          "scrollBarWidth": 10,
          "paddingRight": 20,
          "verticalAlign": "top",
          "paddingBottom": 10,
          "backgroundColorRatios": [
           0
          ],
          "shadow": false,
          "itemBackgroundColorRatios": [],
          "scrollBarOpacity": 0.5,
          "itemLabelPosition": "bottom",
          "rollOverItemLabelFontWeight": "bold",
          "itemWidth": 206,
          "itemLabelTextDecoration": "none",
          "itemMaxHeight": 1000,
          "backgroundOpacity": 0.2,
          "rollOverItemLabelFontColor": "#000000",
          "itemThumbnailScaleMode": "fit_outside",
          "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9",
          "itemMaxWidth": 1000,
          "itemBackgroundOpacity": 0,
          "selectedItemLabelFontStyle": "italic",
          "itemBackgroundColorDirection": "vertical",
          "height": "90%",
          "selectedItemLabelFontColor": "#99BB1B",
          "data": {
           "name": "ThumbnailList"
          },
          "itemMinHeight": 50,
          "backgroundColorDirection": "vertical",
          "itemLabelFontSize": 14,
          "paddingLeft": 20,
          "itemLabelFontColor": "#333333",
          "propagateClick": false,
          "itemLabelFontWeight": "normal"
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
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.5,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A",
  "data": {
   "name": "---VIDEOALBUM"
  },
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "horizontal",
    "propagateClick": false,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": "90.91%",
    "borderSize": 0,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingTop": 0,
    "borderRadius": 4,
    "height": "83%",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_5EE70B15_547D_F3EC_41C1_999FBC34E663",
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "gap": 10,
    "paddingLeft": 0,
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "layout": "absolute",
      "propagateClick": false,
      "horizontalAlign": "left",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "96.837%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "borderRadius": 0,
      "height": "94.868%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "id": "Container_5EE70B15_547D_F3EC_41D0_339269FA65C3",
      "data": {
       "name": "Container content"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
       {
        "layout": "absolute",
        "propagateClick": false,
        "scrollBarVisible": "rollOver",
        "horizontalAlign": "left",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "width": "27.805%",
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "borderRadius": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "overflow": "scroll",
        "backgroundOpacity": 0,
        "top": "0%",
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "id": "Container_5EE70B15_547D_F3EC_41A2_343375D7999C",
        "data": {
         "name": "Container text"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "100%",
          "paddingRight": 0,
          "url": "skin/Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C.png",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 600,
          "paddingTop": 0,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "shadow": false,
          "backgroundOpacity": 0,
          "top": "6.63%",
          "borderRadius": 0,
          "minHeight": 1,
          "bottom": "58.73%",
          "id": "Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C",
          "data": {
           "name": "VideoGallery text"
          },
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%"
         },
         {
          "layout": "vertical",
          "propagateClick": false,
          "scrollBarVisible": "rollOver",
          "horizontalAlign": "center",
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "scrollBarMargin": 2,
          "width": "76.072%",
          "borderSize": 0,
          "paddingRight": 0,
          "paddingBottom": 0,
          "creationPolicy": "delayed",
          "verticalAlign": "top",
          "backgroundColorRatios": [
           0,
           1
          ],
          "class": "Container",
          "shadow": false,
          "paddingTop": 0,
          "height": "52.259%",
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "overflow": "visible",
          "backgroundOpacity": 0.3,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minHeight": 1,
          "bottom": "6.63%",
          "id": "Container_5EE70B15_547D_F3EC_41D1_22CDC78688BF",
          "data": {
           "name": "Container thumbs"
          },
          "contentOpaque": false,
          "gap": 5,
          "paddingLeft": 0,
          "minWidth": 1,
          "backgroundColorDirection": "vertical",
          "right": "11.47%",
          "children": [
           {
            "layout": "horizontal",
            "propagateClick": false,
            "horizontalAlign": "left",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "scrollBarMargin": 2,
            "width": "100%",
            "borderSize": 0,
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "borderRadius": 0,
            "height": "22.4%",
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "overflow": "visible",
            "backgroundOpacity": 0.3,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_5EE70B15_547D_F3EC_41A2_874A2F889A29",
            "data": {
             "name": "Row 1"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663_rollover.jpg",
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "click": "this.setComponentVisibility(this.Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18, false, 0, null, null, false)",
              "transparencyActive": true,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663",
              "data": {
               "name": "IconButton intro"
              },
              "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             },
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": false,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B",
              "data": {
               "name": "IconButton snorkel"
              },
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             }
            ]
           },
           {
            "layout": "horizontal",
            "propagateClick": false,
            "horizontalAlign": "left",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "scrollBarMargin": 2,
            "width": "100%",
            "borderSize": 0,
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "borderRadius": 0,
            "height": "22.4%",
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "overflow": "visible",
            "backgroundOpacity": 0.3,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_5EE70B16_547D_F3EC_41C9_971F1B00B22D",
            "data": {
             "name": "Row 2"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": false,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8",
              "data": {
               "name": "IconButton folklore"
              },
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             },
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": false,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F",
              "data": {
               "name": "IconButton empty"
              },
              "iconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             }
            ]
           },
           {
            "layout": "horizontal",
            "propagateClick": false,
            "horizontalAlign": "left",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "scrollBarMargin": 2,
            "width": "100%",
            "borderSize": 0,
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "borderRadius": 0,
            "height": "22.4%",
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "overflow": "visible",
            "backgroundOpacity": 0.3,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_5EE70B16_547D_F3EC_41D4_82701AFF0DAD",
            "data": {
             "name": "Row 3 empty"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "scrollBarVisible": "rollOver"
           }
          ]
         }
        ]
       },
       {
        "layout": "absolute",
        "propagateClick": false,
        "horizontalAlign": "left",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarMargin": 2,
        "width": "72.402%",
        "borderSize": 0,
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "overflow": "scroll",
        "backgroundOpacity": 0.3,
        "top": "0%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_5EE70B16_547D_F3EC_41D3_F78FB47E4731",
        "data": {
         "name": "Container Viewer"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundColorDirection": "vertical",
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "transitionDuration": 500,
          "toolTipBorderRadius": 3,
          "toolTipShadowVerticalLength": 0,
          "progressBorderRadius": 0,
          "playbackBarHeadHeight": 15,
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "toolTipShadowBlurRadius": 3,
          "playbackBarHeadShadowBlurRadius": 3,
          "toolTipTextShadowBlurRadius": 3,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "toolTipShadowColor": "#333333",
          "progressBarBorderColor": "#000000",
          "playbackBarBottom": 0,
          "class": "ViewerArea",
          "toolTipPaddingBottom": 4,
          "toolTipShadowHorizontalLength": 0,
          "progressBorderColor": "#000000",
          "paddingTop": 0,
          "toolTipTextShadowColor": "#000000",
          "progressBackgroundColorDirection": "vertical",
          "progressBarBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadOpacity": 1,
          "borderRadius": 0,
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "transitionMode": "blending",
          "minHeight": 1,
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "playbackBarHeadWidth": 6,
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "playbackBarHeight": 10,
          "playbackBarBackgroundColorDirection": "vertical",
          "playbackBarRight": 0,
          "toolTipShadowOpacity": 1,
          "minWidth": 1,
          "playbackBarProgressBorderRadius": 0,
          "toolTipDisplayTime": 600,
          "playbackBarProgressBorderSize": 0,
          "progressBarBorderRadius": 0,
          "progressBarBorderSize": 0,
          "toolTipPaddingLeft": 6,
          "playbackBarHeadShadowHorizontalLength": 0,
          "playbackBarBorderRadius": 0,
          "playbackBarHeadBorderRadius": 0,
          "toolTipShadowSpread": 0,
          "toolTipOpacity": 1,
          "playbackBarProgressBorderColor": "#000000",
          "borderSize": 0,
          "playbackBarHeadBorderColor": "#000000",
          "width": "100%",
          "toolTipFontColor": "#606060",
          "toolTipBorderColor": "#767676",
          "paddingRight": 0,
          "playbackBarHeadBorderSize": 0,
          "toolTipBorderSize": 1,
          "toolTipPaddingRight": 6,
          "playbackBarProgressOpacity": 1,
          "paddingBottom": 0,
          "progressLeft": 0,
          "playbackBarBorderSize": 0,
          "shadow": false,
          "playbackBarBackgroundOpacity": 1,
          "toolTipFontFamily": "Arial",
          "progressBottom": 2,
          "progressHeight": 10,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "toolTipPaddingTop": 4,
          "playbackBarHeadShadowColor": "#000000",
          "top": "0%",
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "progressRight": 0,
          "toolTipTextShadowOpacity": 0,
          "progressOpacity": 1,
          "playbackBarHeadShadowOpacity": 0.7,
          "id": "ViewerAreaLabeled_5EE70B16_547D_F3EC_4177_5761BA34B830",
          "progressBarBackgroundColorDirection": "vertical",
          "playbackBarHeadShadow": true,
          "toolTipBackgroundColor": "#F6F6F6",
          "playbackBarBorderColor": "#FFFFFF",
          "progressBackgroundOpacity": 1,
          "height": "100%",
          "paddingLeft": 0,
          "toolTipFontStyle": "normal",
          "left": "0%",
          "progressBarOpacity": 1,
          "toolTipFontSize": 12,
          "playbackBarHeadShadowVerticalLength": 0,
          "toolTipFontWeight": "normal",
          "progressBackgroundColorRatios": [
           0
          ],
          "progressBorderSize": 0,
          "playbackBarOpacity": 1,
          "playbackBarLeft": 0,
          "propagateClick": false
         },
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "100%",
          "paddingRight": 0,
          "url": "skin/Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18.jpg",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 821,
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 1460,
          "scaleMode": "fit_inside",
          "borderRadius": 0,
          "height": "100%",
          "backgroundOpacity": 0,
          "top": "0%",
          "minHeight": 1,
          "id": "Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18",
          "data": {
           "name": "-Image intro video"
          },
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%"
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
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.5,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_C190A7DE_D1CF_0251_41D6_94510622876F",
  "data": {
   "name": "---VIDEO 360\u00ba"
  },
  "contentOpaque": false,
  "gap": 11,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "absolute",
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": 872,
    "borderSize": 0,
    "paddingRight": 0,
    "height": 362,
    "creationPolicy": "delayed",
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "borderRadius": 4,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_C190C7DD_D1CF_0253_41E6_E37D4ADD5212",
    "gap": 10,
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 24,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 24,
      "class": "IconButton",
      "maxHeight": 24,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0_rollover.png",
      "shadow": false,
      "maxWidth": 24,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": "4%",
      "click": "this.setComponentVisibility(this.Container_C190A7DE_D1CF_0251_41D6_94510622876F, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0.png",
      "paddingLeft": 0,
      "minWidth": 1,
      "right": "1.43%"
     },
     {
      "layout": "vertical",
      "propagateClick": false,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "width": "100%",
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "borderRadius": 0,
      "height": "73.757%",
      "scrollBarWidth": 10,
      "overflow": "scroll",
      "backgroundOpacity": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "bottom": "8.01%",
      "id": "Container_C190E7DD_D1CF_0253_41C3_86133B23DE83",
      "data": {
       "name": "Container content"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "left": "0%",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "width": "80%",
        "paddingRight": 0,
        "url": "skin/Image_C19097DE_D1CF_0251_41EA_014A5794BC3C.png",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "class": "Image",
        "maxHeight": 41,
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 1133,
        "scaleMode": "fit_inside",
        "borderRadius": 0,
        "height": "15.356%",
        "backgroundOpacity": 0,
        "minHeight": 1,
        "id": "Image_C19097DE_D1CF_0251_41EA_014A5794BC3C",
        "data": {
         "name": "Panorama list title"
        },
        "paddingLeft": 0,
        "minWidth": 1
       },
       {
        "layout": "horizontal",
        "propagateClick": false,
        "horizontalAlign": "left",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarMargin": 2,
        "width": "80%",
        "borderSize": 0,
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "borderRadius": 0,
        "height": "61.423%",
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "overflow": "visible",
        "backgroundOpacity": 0.3,
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "id": "Container_E916E277_E0EC_BA90_41E7_7B91E7367E91",
        "data": {
         "name": "Container thumbs"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "backgroundColorDirection": "vertical",
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "mode": "push",
          "width": "35%",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "IconButton",
          "maxHeight": 164,
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3_rollover.jpg",
          "shadow": false,
          "maxWidth": 290,
          "borderRadius": 0,
          "height": "82%",
          "backgroundOpacity": 0,
          "transparencyActive": false,
          "cursor": "hand",
          "minHeight": 1,
          "id": "IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3",
          "data": {
           "name": "IconButton Powerboat"
          },
          "iconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3.jpg",
          "paddingLeft": 0,
          "minWidth": 1
         },
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "mode": "push",
          "width": "35%",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "IconButton",
          "maxHeight": 164,
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC_rollover.jpg",
          "shadow": false,
          "maxWidth": 290,
          "borderRadius": 0,
          "height": "82%",
          "backgroundOpacity": 0,
          "transparencyActive": false,
          "cursor": "hand",
          "minHeight": 1,
          "id": "IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC",
          "data": {
           "name": "IconButton Breakfast"
          },
          "iconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC.jpg",
          "paddingLeft": 0,
          "minWidth": 1
         },
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "mode": "push",
          "width": "35%",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "IconButton",
          "maxHeight": 164,
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D_rollover.jpg",
          "shadow": false,
          "maxWidth": 290,
          "borderRadius": 0,
          "height": "82%",
          "backgroundOpacity": 0,
          "transparencyActive": false,
          "cursor": "hand",
          "minHeight": 1,
          "id": "IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D",
          "data": {
           "name": "IconButton PoolFun"
          },
          "iconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D.jpg",
          "paddingLeft": 0,
          "minWidth": 1
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
  "layout": "absolute",
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarMargin": 2,
  "width": "100%",
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 1,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_ECB4524F_E163_9AF0_41E5_60E049D28740",
  "data": {
   "name": "---360"
  },
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "transitionDuration": 500,
    "toolTipBorderRadius": 3,
    "toolTipShadowVerticalLength": 0,
    "progressBorderRadius": 0,
    "playbackBarHeadHeight": 15,
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "toolTipShadowBlurRadius": 3,
    "playbackBarHeadShadowBlurRadius": 3,
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "toolTipShadowColor": "#333333",
    "progressBarBorderColor": "#000000",
    "playbackBarBottom": 0,
    "class": "ViewerArea",
    "toolTipPaddingBottom": 4,
    "toolTipShadowHorizontalLength": 0,
    "progressBorderColor": "#000000",
    "paddingTop": 0,
    "toolTipTextShadowColor": "#000000",
    "progressBackgroundColorDirection": "vertical",
    "progressBarBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadOpacity": 1,
    "borderRadius": 0,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "transitionMode": "blending",
    "minHeight": 1,
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarHeadWidth": 6,
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarHeight": 10,
    "playbackBarBackgroundColorDirection": "vertical",
    "playbackBarRight": 0,
    "toolTipShadowOpacity": 1,
    "minWidth": 1,
    "playbackBarProgressBorderRadius": 0,
    "toolTipDisplayTime": 600,
    "playbackBarProgressBorderSize": 0,
    "progressBarBorderRadius": 0,
    "progressBarBorderSize": 0,
    "toolTipPaddingLeft": 6,
    "playbackBarHeadShadowHorizontalLength": 0,
    "playbackBarBorderRadius": 0,
    "playbackBarHeadBorderRadius": 0,
    "toolTipShadowSpread": 0,
    "toolTipOpacity": 1,
    "playbackBarProgressBorderColor": "#000000",
    "borderSize": 0,
    "paddingRight": 0,
    "playbackBarHeadBorderColor": "#000000",
    "width": "100%",
    "toolTipFontColor": "#606060",
    "toolTipBorderColor": "#767676",
    "paddingBottom": 0,
    "playbackBarHeadBorderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipPaddingRight": 6,
    "playbackBarProgressOpacity": 1,
    "progressLeft": 0,
    "playbackBarBorderSize": 0,
    "shadow": false,
    "playbackBarBackgroundOpacity": 1,
    "toolTipFontFamily": "Arial",
    "progressBottom": 2,
    "progressHeight": 10,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "toolTipPaddingTop": 4,
    "playbackBarHeadShadowColor": "#000000",
    "progressRight": 0,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "toolTipTextShadowOpacity": 0,
    "bottom": "0%",
    "playbackBarHeadShadowOpacity": 0.7,
    "id": "ViewerAreaLabeled_EF626468_E164_BEB0_41E7_F6DF4C667020",
    "progressBarBackgroundColorDirection": "vertical",
    "playbackBarHeadShadow": true,
    "progressOpacity": 1,
    "toolTipBackgroundColor": "#F6F6F6",
    "playbackBarBorderColor": "#FFFFFF",
    "progressBackgroundOpacity": 1,
    "height": "100%",
    "paddingLeft": 0,
    "toolTipFontWeight": "normal",
    "left": "0%",
    "progressBarOpacity": 1,
    "toolTipFontSize": 12,
    "playbackBarHeadShadowVerticalLength": 0,
    "toolTipFontStyle": "normal",
    "progressBackgroundColorRatios": [
     0
    ],
    "progressBorderSize": 0,
    "playbackBarOpacity": 1,
    "playbackBarLeft": 0,
    "propagateClick": false
   },
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0"
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "mode": "push",
  "width": 40,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "height": 40,
  "class": "IconButton",
  "maxHeight": 80,
  "paddingTop": 0,
  "rollOverIconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29_rollover.png",
  "shadow": false,
  "maxWidth": 80,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "top": 20,
  "transparencyActive": true,
  "cursor": "hand",
  "visible": false,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29",
  "data": {
   "name": "X 360"
  },
  "iconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29.png",
  "paddingLeft": 0,
  "minWidth": 1,
  "left": 20
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "width": 125,
  "paddingRight": 0,
  "url": "skin/Image_19470ABB_0A67_2982_418C_D469BE33D2C6.png",
  "verticalAlign": "middle",
  "height": 70,
  "class": "Image",
  "maxHeight": 78,
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 212,
  "scaleMode": "fit_to_width",
  "borderRadius": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "visible": false,
  "minHeight": 1,
  "bottom": 56,
  "id": "Image_19470ABB_0A67_2982_418C_D469BE33D2C6",
  "data": {
   "name": "-Wheel mouse"
  },
  "paddingLeft": 0,
  "minWidth": 1,
  "right": 20
 },
 {
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.5,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "horizontal",
    "propagateClick": false,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": 1500,
    "borderSize": 0,
    "paddingRight": 0,
    "height": 780,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "borderRadius": 4,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_474C01C7_4AA6_73B2_41C6_B213F7F17334",
    "gap": 10,
    "data": {
     "name": "Main container"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "layout": "absolute",
      "propagateClick": false,
      "horizontalAlign": "left",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "96.837%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "borderRadius": 0,
      "height": "94.868%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "id": "Container_474C01C8_4AA6_73BE_41C7_421C083439CF",
      "data": {
       "name": "Content container"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "mode": "push",
        "width": 24,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": 24,
        "class": "IconButton",
        "maxHeight": 24,
        "paddingTop": 0,
        "rollOverIconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C_rollover.png",
        "shadow": false,
        "maxWidth": 24,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "top": "0%",
        "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, false, 0, null, null, false)",
        "transparencyActive": true,
        "cursor": "hand",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C",
        "data": {
         "name": "X"
        },
        "iconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C.png",
        "paddingLeft": 0,
        "minWidth": 1,
        "right": "0%"
       },
       {
        "layout": "absolute",
        "propagateClick": false,
        "scrollBarVisible": "rollOver",
        "horizontalAlign": "left",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "width": "27.805%",
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "borderRadius": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "overflow": "scroll",
        "backgroundOpacity": 0,
        "top": "0%",
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "id": "Container_474C01C8_4AA6_73BE_41B0_42F6E66589F6",
        "data": {
         "name": "Right container"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "100%",
          "paddingRight": 0,
          "url": "skin/Image_474C01C8_4AA6_73BE_4198_63728D42FC19.png",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 600,
          "paddingTop": 0,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "shadow": false,
          "backgroundOpacity": 0,
          "top": "6.63%",
          "borderRadius": 0,
          "minHeight": 1,
          "bottom": "58.73%",
          "id": "Image_474C01C8_4AA6_73BE_4198_63728D42FC19",
          "data": {
           "name": "Text img"
          },
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%"
         },
         {
          "layout": "vertical",
          "propagateClick": false,
          "scrollBarVisible": "rollOver",
          "horizontalAlign": "center",
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "scrollBarMargin": 2,
          "width": "76.072%",
          "borderSize": 0,
          "paddingRight": 0,
          "paddingBottom": 0,
          "creationPolicy": "delayed",
          "verticalAlign": "top",
          "backgroundColorRatios": [
           0,
           1
          ],
          "class": "Container",
          "shadow": false,
          "paddingTop": 0,
          "height": "52.259%",
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "overflow": "visible",
          "backgroundOpacity": 0.3,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minHeight": 1,
          "bottom": "6.63%",
          "id": "Container_472B38FC_4AAE_1156_41B3_4C1A1EC48ED3",
          "data": {
           "name": "Thumbs buttons container"
          },
          "contentOpaque": false,
          "gap": 10,
          "paddingLeft": 0,
          "minWidth": 1,
          "backgroundColorDirection": "vertical",
          "right": "11.47%",
          "children": [
           {
            "layout": "horizontal",
            "propagateClick": false,
            "horizontalAlign": "left",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "scrollBarMargin": 2,
            "width": "100%",
            "borderSize": 0,
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "borderRadius": 0,
            "height": "25%",
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "overflow": "visible",
            "backgroundOpacity": 0.3,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_470039F2_4AA2_3352_4188_8343FDAC53A2",
            "data": {
             "name": "Container Row 1"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": true,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0",
              "data": {
               "name": "IconButton_house"
              },
              "iconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             },
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": false,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5",
              "data": {
               "name": "IconButton_garden"
              },
              "iconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             }
            ]
           },
           {
            "layout": "horizontal",
            "propagateClick": false,
            "horizontalAlign": "left",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "scrollBarMargin": 2,
            "width": "100%",
            "borderSize": 0,
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "borderRadius": 0,
            "height": "25%",
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "overflow": "visible",
            "backgroundOpacity": 0.3,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_470F7D71_4AA2_136E_41B0_AAAD0C68ACE5",
            "data": {
             "name": "Container Row 2"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": false,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814",
              "data": {
               "name": "IconButton_decoration"
              },
              "iconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             },
             {
              "propagateClick": false,
              "horizontalAlign": "center",
              "borderSize": 0,
              "mode": "push",
              "width": 145,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "height": 82,
              "class": "IconButton",
              "maxHeight": 82,
              "paddingTop": 0,
              "rollOverIconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6_rollover.jpg",
              "shadow": false,
              "maxWidth": 145,
              "borderRadius": 0,
              "paddingBottom": 0,
              "backgroundOpacity": 0,
              "transparencyActive": false,
              "cursor": "hand",
              "minHeight": 1,
              "id": "IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6",
              "data": {
               "name": "IconButton_Swimming"
              },
              "iconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6.jpg",
              "paddingLeft": 0,
              "minWidth": 1
             }
            ]
           },
           {
            "layout": "horizontal",
            "propagateClick": false,
            "horizontalAlign": "left",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "scrollBarMargin": 2,
            "width": "100%",
            "borderSize": 0,
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "borderRadius": 0,
            "height": "25%",
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "overflow": "visible",
            "backgroundOpacity": 0.3,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_44F91F72_4AA6_2F52_41C3_1B4514891167",
            "data": {
             "name": "Container Row 3"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "scrollBarVisible": "rollOver"
           }
          ]
         }
        ]
       },
       {
        "layout": "absolute",
        "propagateClick": false,
        "horizontalAlign": "left",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarMargin": 2,
        "width": "72.402%",
        "borderSize": 0,
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "overflow": "scroll",
        "backgroundOpacity": 0.3,
        "top": "0%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_474C01C8_4AA6_73BE_41C4_789A192CFF53",
        "data": {
         "name": "Container Viewer"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundColorDirection": "vertical",
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "transitionDuration": 500,
          "toolTipBorderRadius": 3,
          "toolTipShadowVerticalLength": 0,
          "progressBorderRadius": 0,
          "playbackBarHeadHeight": 15,
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "toolTipShadowBlurRadius": 3,
          "playbackBarHeadShadowBlurRadius": 3,
          "toolTipTextShadowBlurRadius": 3,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "toolTipShadowColor": "#333333",
          "progressBarBorderColor": "#000000",
          "playbackBarBottom": 0,
          "class": "ViewerArea",
          "toolTipPaddingBottom": 4,
          "toolTipShadowHorizontalLength": 0,
          "progressBorderColor": "#000000",
          "paddingTop": 0,
          "toolTipTextShadowColor": "#000000",
          "progressBackgroundColorDirection": "vertical",
          "progressBarBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadOpacity": 1,
          "borderRadius": 0,
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "transitionMode": "blending",
          "minHeight": 1,
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "playbackBarHeadWidth": 6,
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "playbackBarHeight": 10,
          "playbackBarBackgroundColorDirection": "vertical",
          "playbackBarRight": 0,
          "toolTipShadowOpacity": 1,
          "minWidth": 1,
          "playbackBarProgressBorderRadius": 0,
          "toolTipDisplayTime": 600,
          "playbackBarProgressBorderSize": 0,
          "progressBarBorderRadius": 0,
          "progressBarBorderSize": 0,
          "toolTipPaddingLeft": 6,
          "playbackBarHeadShadowHorizontalLength": 0,
          "playbackBarBorderRadius": 0,
          "playbackBarHeadBorderRadius": 0,
          "toolTipShadowSpread": 0,
          "toolTipOpacity": 1,
          "playbackBarProgressBorderColor": "#000000",
          "borderSize": 0,
          "playbackBarHeadBorderColor": "#000000",
          "width": "100%",
          "toolTipFontColor": "#606060",
          "toolTipBorderColor": "#767676",
          "paddingRight": 0,
          "playbackBarHeadBorderSize": 0,
          "toolTipBorderSize": 1,
          "toolTipPaddingRight": 6,
          "playbackBarProgressOpacity": 1,
          "paddingBottom": 0,
          "progressLeft": 0,
          "playbackBarBorderSize": 0,
          "shadow": false,
          "playbackBarBackgroundOpacity": 1,
          "toolTipFontFamily": "Arial",
          "progressBottom": 2,
          "progressHeight": 10,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "toolTipPaddingTop": 4,
          "playbackBarHeadShadowColor": "#000000",
          "top": "0%",
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "progressRight": 0,
          "toolTipTextShadowOpacity": 0,
          "progressOpacity": 1,
          "playbackBarHeadShadowOpacity": 0.7,
          "id": "ViewerAreaLabeled_451BE519_4B62_70DE_41C7_94BD7032FDA3",
          "progressBarBackgroundColorDirection": "vertical",
          "playbackBarHeadShadow": true,
          "toolTipBackgroundColor": "#F6F6F6",
          "playbackBarBorderColor": "#FFFFFF",
          "progressBackgroundOpacity": 1,
          "height": "100%",
          "paddingLeft": 0,
          "toolTipFontStyle": "normal",
          "left": "0%",
          "progressBarOpacity": 1,
          "toolTipFontSize": 12,
          "playbackBarHeadShadowVerticalLength": 0,
          "toolTipFontWeight": "normal",
          "progressBackgroundColorRatios": [
           0
          ],
          "progressBorderSize": 0,
          "playbackBarOpacity": 1,
          "playbackBarLeft": 0,
          "propagateClick": false
         },
         {
          "layout": "horizontal",
          "propagateClick": false,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "width": "100%",
          "paddingRight": 0,
          "creationPolicy": "delayed",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "Container",
          "shadow": false,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "borderRadius": 0,
          "height": "100%",
          "scrollBarWidth": 10,
          "overflow": "scroll",
          "backgroundOpacity": 0,
          "top": "0%",
          "scrollBarColor": "#000000",
          "minHeight": 1,
          "id": "Container_5B704147_4B62_30B2_41C7_41C4A6280806",
          "data": {
           "name": "Container buttons"
          },
          "contentOpaque": false,
          "gap": 300,
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%",
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "propagateClick": false,
            "horizontalAlign": "center",
            "borderSize": 0,
            "mode": "push",
            "width": 50,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "height": 50,
            "class": "IconButton",
            "maxHeight": 50,
            "pressedIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_pressed.png",
            "paddingTop": 0,
            "rollOverIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_rollover.png",
            "maxWidth": 50,
            "borderRadius": 0,
            "paddingBottom": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "transparencyActive": true,
            "cursor": "hand",
            "minHeight": 1,
            "id": "IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177",
            "data": {
             "name": "button <"
            },
            "iconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177.png",
            "paddingLeft": 0,
            "minWidth": 1
           },
           {
            "layout": "absolute",
            "propagateClick": false,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "width": "70%",
            "paddingRight": 0,
            "creationPolicy": "delayed",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "class": "Container",
            "shadow": false,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "borderRadius": 0,
            "height": "30.12%",
            "scrollBarWidth": 10,
            "overflow": "scroll",
            "backgroundOpacity": 0,
            "scrollBarColor": "#000000",
            "minHeight": 1,
            "id": "Container_5B3D27DD_4B61_FF56_41C7_13D4CF866C03",
            "data": {
             "name": "separator"
            },
            "contentOpaque": false,
            "gap": 10,
            "paddingLeft": 0,
            "minWidth": 1,
            "scrollBarVisible": "rollOver"
           },
           {
            "propagateClick": false,
            "horizontalAlign": "center",
            "borderSize": 0,
            "mode": "push",
            "width": 50,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "height": 50,
            "class": "IconButton",
            "maxHeight": 50,
            "pressedIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_pressed.png",
            "paddingTop": 0,
            "rollOverIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_rollover.png",
            "maxWidth": 50,
            "borderRadius": 0,
            "paddingBottom": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "transparencyActive": true,
            "cursor": "hand",
            "minHeight": 1,
            "id": "IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748",
            "data": {
             "name": "button >"
            },
            "iconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748.png",
            "paddingLeft": 0,
            "minWidth": 1
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
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.5,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_4169474A_4F02_D74E_41C4_5387F4304140",
  "data": {
   "name": "---CONTACT"
  },
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "horizontal",
    "propagateClick": false,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": 1450,
    "borderSize": 0,
    "paddingRight": 0,
    "height": 750,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "borderRadius": 4,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_4169474A_4F02_D74E_41D2_8786E1AEB625",
    "gap": 10,
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "layout": "absolute",
      "propagateClick": false,
      "horizontalAlign": "left",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "96.837%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "shadow": false,
      "paddingTop": 0,
      "borderRadius": 0,
      "height": "94.868%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "id": "Container_4169474A_4F02_D74E_41C9_D049781FF241",
      "data": {
       "name": "Container content"
      },
      "contentOpaque": false,
      "gap": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "mode": "push",
        "width": 24,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": 24,
        "class": "IconButton",
        "maxHeight": 24,
        "paddingTop": 0,
        "rollOverIconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450_rollover.png",
        "shadow": false,
        "maxWidth": 24,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "top": "0%",
        "click": "this.setComponentVisibility(this.Container_4169474A_4F02_D74E_41C4_5387F4304140, false, 0, null, null, false)",
        "transparencyActive": true,
        "cursor": "hand",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "IconButton_4169474A_4F02_D74E_41D2_E2447B190450",
        "data": {
         "name": "X"
        },
        "iconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450.png",
        "paddingLeft": 0,
        "minWidth": 1,
        "right": "0%"
       },
       {
        "layout": "absolute",
        "propagateClick": false,
        "scrollBarVisible": "rollOver",
        "horizontalAlign": "left",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "width": "29.06%",
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "borderRadius": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "overflow": "scroll",
        "backgroundOpacity": 0,
        "top": "0%",
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "id": "Container_4169474A_4F02_D74E_41CC_AAA712A39B4C",
        "data": {
         "name": "Container right text"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "100%",
          "paddingRight": 0,
          "url": "skin/Image_4169474A_4F02_D74E_418A_8DC243F4699E.png",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 600,
          "paddingTop": 0,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "shadow": false,
          "backgroundOpacity": 0,
          "top": "6.63%",
          "borderRadius": 0,
          "minHeight": 1,
          "bottom": "17.77%",
          "id": "Image_4169474A_4F02_D74E_418A_8DC243F4699E",
          "data": {
           "name": "text image"
          },
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%"
         },
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "mode": "push",
          "width": 135,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": 47,
          "class": "IconButton",
          "maxHeight": 47,
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4_rollover.png",
          "shadow": false,
          "maxWidth": 135,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "borderRadius": 0,
          "click": "this.openLink(\"http://www.3dvista.com\", \"_blank\")",
          "transparencyActive": false,
          "cursor": "hand",
          "minHeight": 1,
          "bottom": "12.45%",
          "id": "IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4",
          "data": {
           "name": "Button Book Now"
          },
          "iconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4.png",
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "12.22%"
         }
        ]
       },
       {
        "layout": "absolute",
        "propagateClick": false,
        "horizontalAlign": "left",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarMargin": 2,
        "width": "70.869%",
        "borderSize": 0,
        "paddingRight": 0,
        "creationPolicy": "delayed",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "shadow": false,
        "paddingTop": 0,
        "height": "100%",
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "overflow": "scroll",
        "backgroundOpacity": 0.3,
        "top": "0%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_4169474A_4F02_D74E_41D3_C66A0E7A6577",
        "data": {
         "name": "Container Img"
        },
        "contentOpaque": false,
        "gap": 10,
        "paddingLeft": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundColorDirection": "vertical",
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "propagateClick": false,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "100%",
          "paddingRight": 0,
          "url": "skin/Image_41194F8C_4F01_D7CA_41D0_80812518610D.jpg",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "class": "Image",
          "shadow": false,
          "paddingTop": 0,
          "scaleMode": "fit_to_height",
          "borderRadius": 0,
          "height": "100%",
          "backgroundOpacity": 0,
          "top": "0%",
          "minHeight": 1,
          "id": "Image_41194F8C_4F01_D7CA_41D0_80812518610D",
          "data": {
           "name": "Image"
          },
          "paddingLeft": 0,
          "minWidth": 1,
          "left": "0%"
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
  "layout": "absolute",
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarMargin": 2,
  "width": "100%",
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.7,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_B18B0BF2_A688_648E_41D5_25CC213E30D8",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "absolute",
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "paddingRight": 30,
    "creationPolicy": "delayed",
    "verticalAlign": "top",
    "paddingBottom": 30,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "shadow": false,
    "paddingTop": 30,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minHeight": 1,
    "bottom": "12%",
    "id": "Container_BEFE9313_A688_258E_4198_33F6C1D0A579",
    "gap": 10,
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 30,
    "minWidth": 1,
    "left": "15%",
    "backgroundColorDirection": "vertical",
    "right": "15%",
    "children": [
     {
      "transitionDuration": 500,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "progressBarBorderColor": "#000000",
      "playbackBarBottom": 0,
      "class": "ViewerArea",
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "minHeight": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 1,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipPaddingRight": 6,
      "playbackBarProgressOpacity": 1,
      "paddingBottom": 0,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontFamily": "Arial",
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowColor": "#000000",
      "top": "0%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipTextShadowOpacity": 0,
      "bottom": "0%",
      "playbackBarHeadShadowOpacity": 0.7,
      "id": "MapViewer",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "paddingLeft": 0,
      "toolTipFontStyle": "normal",
      "left": "0%",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontWeight": "normal",
      "right": "0%",
      "progressBorderSize": 0,
      "playbackBarOpacity": 1,
      "playbackBarLeft": 0,
      "propagateClick": false,
      "progressBackgroundColorRatios": [
       0
      ]
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 24,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 24,
      "class": "IconButton",
      "maxHeight": 24,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0_rollover.png",
      "shadow": false,
      "maxWidth": 24,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": 0,
      "click": "this.setComponentVisibility(this.Container_B18B0BF2_A688_648E_41D5_25CC213E30D8, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0.png",
      "paddingLeft": 0,
      "minWidth": 1,
      "right": 0
     }
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "40.283%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "class": "HTMLText",
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, this.effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "41.051%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "2.47%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>PARQUE PUENTE CIMBRA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:29px;font-family:Georgia, serif;\"><I>PRIMER VIADUCTO</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">El Puente Cimbra fue el primer viaducto que logr\u00f3 unir los sectores de Granallas, Quebrada de Herrera, Vicu\u00f1a y Guzmanes con el centro de Putaendo. Si bien no hay data exacta de la creaci\u00f3n de este puente colgante, hay datos que apuntan a finales del siglo XIX o principios del siglo XX</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E",
  "data": {
   "name": "puente"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "left": "1.75%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "43.94%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "class": "HTMLText",
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, 0, this.effect_1A687CB6_02B3_1A5A_4152_D6E0363828DD, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "60.653%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>IGLESIA SAN ANTONIO DE PADUA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:Georgia, serif;\"><I>LADRILLOS Y MADERA</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Esta parroquia de la di\u00f3cesis de San Felipe tiene su origen en 1729, casi 100 a\u00f1os antes de la independencia de Chile. Sacudida por el terremoto del 1965 fue reconstruida en una historia de mucho esfuerzo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> Cuenta la historia que el lugar donde se realizaban los primeros cultos era de totora y adobes de cal. Con el tiempo se fueron realizando arreglos hasta que finales del 1800 estaba hecha de ladrillos y madera, donde el pueblo Putaendino asist\u00eda con devoci\u00f3n.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">En el a\u00f1o 1965 el terremoto la da\u00f1\u00f3 y unos a\u00f1os despu\u00e9s fue declarada inhabitable. A partir de esto, tanto la Iglesia como al pueblo de Putaendo, realizaron un gran esfuerzo para reconstruir uno de los grandes s\u00edmbolos de su comuna. En 1990 qued\u00f3 lista la hermosa Parroquia, motivo de orgullo para el pueblo.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123",
  "data": {
   "name": "Iglesia"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "left": "0%",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "horizontal",
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelFontStyle": "normal",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowSpread": 1,
  "itemLabelHorizontalAlign": "center",
  "itemMode": "thumbnail-only",
  "class": "ThumbnailList",
  "itemThumbnailBorderRadius": 5,
  "paddingTop": 10,
  "itemThumbnailWidth": 100,
  "itemPaddingRight": 3,
  "scrollBarVisible": "rollOver",
  "itemPaddingTop": 3,
  "playList": "this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist",
  "borderRadius": 5,
  "itemThumbnailHeight": 75,
  "scrollBarColor": "#FFFFFF",
  "minHeight": 1,
  "itemOpacity": 1,
  "gap": 10,
  "selectedItemLabelFontWeight": "bold",
  "itemHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "itemLabelFontFamily": "Arial",
  "minWidth": 1,
  "itemLabelGap": 5,
  "itemPaddingBottom": 3,
  "itemThumbnailShadow": true,
  "itemPaddingLeft": 3,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "itemVerticalAlign": "middle",
  "width": "99.749%",
  "borderSize": 0,
  "paddingRight": 20,
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "scrollBarWidth": 10,
  "height": 130,
  "rollOver": "this.setComponentVisibility(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0, false, 0, this.effect_1505B9C3_0291_1A3B_4176_91AC933F53E5, 'hideEffect', false)",
  "verticalAlign": "top",
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "paddingBottom": 10,
  "itemBackgroundColorRatios": [],
  "scrollBarOpacity": 0.5,
  "itemLabelTextDecoration": "none",
  "itemLabelPosition": "bottom",
  "backgroundOpacity": 0.2,
  "itemThumbnailShadowBlurRadius": 4,
  "visible": false,
  "itemThumbnailShadowVerticalLength": 3,
  "bottom": "8.52%",
  "itemThumbnailScaleMode": "fit_outside",
  "id": "ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0",
  "itemBackgroundOpacity": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "data": {
   "name": "LISTA"
  },
  "itemBackgroundColorDirection": "vertical",
  "paddingLeft": 20,
  "left": "0.04%",
  "itemLabelFontSize": 14,
  "backgroundColorDirection": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "propagateClick": false,
  "itemThumbnailShadowOpacity": 0.8,
  "itemLabelFontWeight": "normal"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "47.724%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "class": "HTMLText",
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, 0, this.effect_18FC46C0_0291_1636_4178_D42A4CC7C980, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "53.409%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "2.33%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>Parque Escult\u00f3rico Cementerio de Carretas</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:28px;\"><B><I>PATRIMONIO REGIONAL</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">A 200 metros de altura de Putaendo se encuentra esta muestra que parti\u00f3 con la donaci\u00f3n de cuatro carretas y que hoy ya alberga, en una planicie de 16 hect\u00e1reas, a 51 esculturas, fruto de tres encuentros escult\u00f3ricos que se han realizado en el mismo lugar, con la participaci\u00f3n de artistas venidos desde diversas partes del mundo.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F",
  "data": {
   "name": "El llano"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "left": "0.93%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "39.733%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "class": "HTMLText",
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700, false, 0, this.effect_14B56463_03A3_6C23_416F_105FDA79FC3E, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "50.994%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "2.67%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>CALLE COMERCIO</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:28px;font-family:Georgia, serif;\"><I>EJE FUNDACIONAL</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">La ocupaci\u00f3n originaria del asentamiento de Putaendo data de fines del siglo XV y comienzos del siglo XVI, correspondiendo a la ocupaci\u00f3n inc\u00e1sica y al establecimiento del camino inca. Los pobladores reconocieron este camino como eje fundacional y lo utilizaron como referencia de emplazamiento, originando como calle larga: la actual calle comercio. A fines del siglo XVIII y comienzos del XIX el pueblo consolida su esquema de origen, recibiendo el t\u00edtulo de Villa y en 1868 el de ciudad</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_100DBF96_03A2_9CE5_4188_F509A6C45700",
  "data": {
   "name": "COMERCIO"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "left": "0.89%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "backgroundColor": [
   "#000000"
  ],
  "borderSize": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
  "shadow": false,
  "paddingTop": 0,
  "backgroundOpacity": 0.55,
  "top": 0,
  "visible": false,
  "borderRadius": 0,
  "minHeight": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent3319"
  },
  "paddingLeft": 0,
  "minWidth": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  }
 },
 {
  "propagateClick": false,
  "backgroundColor": [],
  "borderSize": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "shadow": false,
  "paddingTop": 0,
  "scaleMode": "custom",
  "backgroundOpacity": 1,
  "top": 0,
  "visible": false,
  "borderRadius": 0,
  "minHeight": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage3320"
  },
  "paddingLeft": 0,
  "minWidth": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0
 },
 {
  "layout": "horizontal",
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontColor": "#FFFFFF",
  "fontSize": 12,
  "mode": "push",
  "borderSize": 0,
  "paddingRight": 5,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "verticalAlign": "middle",
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "fontStyle": "normal",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "class": "CloseButton",
  "shadow": false,
  "paddingTop": 5,
  "fontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundOpacity": 0.3,
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "iconColor": "#000000",
  "pressedIconColor": "#888888",
  "borderColor": "#000000",
  "borderRadius": 0,
  "iconWidth": 20,
  "minHeight": 0,
  "id": "closeButtonPopupPanorama",
  "gap": 5,
  "shadowSpread": 1,
  "data": {
   "name": "CloseButton3321"
  },
  "iconBeforeLabel": true,
  "shadowColor": "#000000",
  "rollOverIconColor": "#666666",
  "iconHeight": 20,
  "paddingLeft": 5,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "right": 10,
  "label": "",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  }
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist,this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "class": "Player",
 "shadow": false,
 "paddingTop": 0,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "borderRadius": 0,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "buttonToggleMute": "this.IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
 "minHeight": 20,
 "id": "rootPlayer",
 "desktopMipmappingEnabled": true,
 "data": {
  "name": "Player20898"
 },
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "buttonToggleFullscreen": "this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": true
})