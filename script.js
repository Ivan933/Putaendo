TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "buttonStop": [
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D_rollover.png",
    "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D.png",
    "width": 24,
    "paddingBottom": 0,
    "height": 24,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 24,
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, false, 0, null, null, false)",
    "class": "IconButton",
    "maxHeight": 24,
    "propagateClick": false,
    "cursor": "hand",
    "top": "0%",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
    "data": {
     "name": "X"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "right": "0%",
    "borderRadius": 0
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0_rollover.png",
    "iconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0.png",
    "width": 40,
    "paddingBottom": 0,
    "height": 40,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 80,
    "click": "this.setComponentVisibility(this.Container_ECB4524F_E163_9AF0_41E5_60E049D28740, false, 0, null, null, false)",
    "class": "IconButton",
    "maxHeight": 80,
    "propagateClick": false,
    "cursor": "hand",
    "top": 20,
    "horizontalAlign": "center",
    "id": "IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
    "data": {
     "name": "IconButton X"
    },
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "left": 20,
    "minWidth": 1,
    "borderRadius": 0
   },
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "class": "VideoPlayer"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
  "label": "Parque Puente Cimbra",
  "cardboardMenu": {
   "opacity": 0.4,
   "fontFamily": "Arial",
   "class": "Menu",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "id": "Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
   "selectedBackgroundColor": "#202020",
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
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8
  },
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
      "bleaching": 0.21,
      "bleachingDistance": 0.64,
      "id": "overlay_E56B8391_FD83_162E_41DD_3D1724CB6C38",
      "pitch": 38.93,
      "yaw": -131.95,
      "class": "LensFlarePanoramaOverlay"
     },
     {
      "hfov": 45.6,
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
      "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0",
      "inertia": false,
      "rotate": false,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_E2EE4A9F_FD81_1653_41EB_EA207627AD4D",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6, {'rollOverIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'borderColor':'#000000','iconLineWidth':5,'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'borderSize':0,'rollOverIconLineWidth':5,'paddingRight':5,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
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
        "yaw": 91.89,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 8.64
       }
      ]
     },
     {
      "hfov": 6.69,
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
      "popupMaxHeight": "80%",
      "yaw": 91.89,
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": 8.64,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "showDuration": 500,
      "showEasing": "cubic_in",
      "id": "popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
      "rotationX": 0,
      "popupMaxWidth": "80%",
      "class": "PopupPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_E27C5582_FDBF_122D_41EB_A27AB7E62A11",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066, {'rollOverIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'borderColor':'#000000','iconLineWidth':5,'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'borderSize':0,'rollOverIconLineWidth':5,'paddingRight':5,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
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
        "yaw": -63.78,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.32
       }
      ]
     },
     {
      "hfov": 6.64,
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
      "popupMaxHeight": "80%",
      "yaw": -63.78,
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": 11.32,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "showDuration": 500,
      "showEasing": "cubic_in",
      "id": "popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
      "rotationX": 0,
      "popupMaxWidth": "80%",
      "class": "PopupPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "preloadEnabled": false,
  "buttonStop": [
   "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": "this.IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "buttonToggleHotspots": {
   "paddingRight": 0,
   "iconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733.png",
   "width": 37,
   "paddingBottom": 0,
   "height": 31,
   "mode": "toggle",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "shadow": false,
   "maxWidth": 37,
   "class": "IconButton",
   "maxHeight": 31,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "minHeight": 1,
   "id": "IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
   "data": {
    "name": "button show hotspots"
   },
   "borderSize": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733_pressed.png",
   "backgroundOpacity": 0,
   "transparencyActive": true,
   "borderRadius": 0,
   "minWidth": 1
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer"
 },
 {
  "initialPosition": {
   "hfov": 130,
   "class": "PanoramaCameraPosition",
   "yaw": 171.85,
   "pitch": -10.52
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
  "label": "Plaza de Armas",
  "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
      "hfov": 45.6,
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
      "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_tcap0",
      "inertia": false,
      "rotate": false,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_E4A97113_FD83_3252_41E4_DA0F70DA88F6",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794, {'rollOverIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'borderColor':'#000000','iconLineWidth':5,'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'borderSize':0,'rollOverIconLineWidth':5,'paddingRight':5,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
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
        "yaw": -169.29,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 40.56
       }
      ]
     },
     {
      "hfov": 5.06,
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
      "popupMaxHeight": "80%",
      "yaw": -169.29,
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": 40.56,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "showDuration": 500,
      "showEasing": "cubic_in",
      "id": "popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
      "rotationX": 0,
      "popupMaxWidth": "80%",
      "class": "PopupPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 124,
   "class": "PanoramaCameraPosition",
   "yaw": 166.76,
   "pitch": 3.02
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
  "label": "Calle Chacabuco/Salinas",
  "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
      "hfov": 45.6,
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
      "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_tcap0",
      "inertia": false,
      "rotate": false,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.37,
   "pitch": -2.65
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
       "yaw": -113.36,
       "backwardYaw": -20.49,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 130,
     "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
     "label": "Calle Comercio Vista 2",
     "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
         "rollOverDisplay": false,
         "maps": [],
         "id": "overlay_12776E98_0161_CB07_4158_632F68287054",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "1"
         },
         "useHandCursor": true,
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 7.67,
           "image": {
            "frameDuration": 76,
            "rowCount": 1,
            "class": "AnimatedImageResource",
            "colCount": 24,
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 67.7,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -11.1
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "id": "overlay_1446FA86_0163_4B0B_417D_4E5F56B55DB9",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB, this.camera_19E2DDFA_0273_15D5_4137_5F8CDFD948A0); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "1"
         },
         "useHandCursor": true,
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 7.66,
           "image": {
            "frameDuration": 76,
            "rowCount": 1,
            "class": "AnimatedImageResource",
            "colCount": 24,
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -113.36,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -11.37
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama"
    },
    "yaw": -20.49,
    "backwardYaw": -113.36,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
  "label": "Calle Comercio",
  "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
      "hfov": 45.6,
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
      "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_tcap0",
      "inertia": false,
      "rotate": false,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_12D4EBB2_0163_C90B_417A_34B0ACAC2166",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_F09BE238_FD81_765E_41DD_692A05D67004, this.camera_19EA9E13_0273_165B_4162_B33E3EF71E69); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "1"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.47,
        "image": {
         "frameDuration": 76,
         "rowCount": 1,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -20.49,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.14
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_1BD9F817_0161_F709_416A_1F2A176825A9",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "1"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.78,
        "image": {
         "frameDuration": 76,
         "rowCount": 1,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 165.31,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 127,
   "class": "PanoramaCameraPosition",
   "yaw": -12.07,
   "pitch": -8.98
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
 {
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": 68.74,
   "pitch": -7.49
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
       "yaw": -99.22,
       "backwardYaw": 56.31,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 131,
     "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
     "label": "Calle Comercio/O'Higgins",
     "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
         "rollOverDisplay": false,
         "maps": [],
         "id": "overlay_159EA224_016F_BB0F_40CA_E4C293003800",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF, this.camera_19E77E07_0273_163B_417E_A81B5F2E1960); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "1"
         },
         "useHandCursor": true,
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 7.66,
           "image": {
            "frameDuration": 76,
            "rowCount": 1,
            "class": "AnimatedImageResource",
            "colCount": 24,
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -99.22,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -11.37
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "id": "overlay_1A21252B_02B1_2A4B_4167_33D1AB204F98",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.showWindow(this.window_1A6F643F_02B1_2A4B_4165_ADDCAEA280A5, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "items": [
          {
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
           "yaw": 106.42,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -3.2
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama"
    },
    "yaw": 56.31,
    "backwardYaw": -99.22,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
  "label": "Calle Comercio/Aspee",
  "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_12329761_016E_D909_4167_C240BA83D0B1",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674, this.camera_19D1FE1F_0273_164A_415B_36FADED6B8CB); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "1"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.78,
        "image": {
         "frameDuration": 76,
         "rowCount": 1,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 56.31,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.61
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_14D70DCF_0163_4919_4133_581227E908C0",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "1"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.54,
        "image": {
         "frameDuration": 76,
         "rowCount": 1,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -121.46,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.21
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_158A1FD4_0293_75DE_4168_0F44C6770E84",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showWindow(this.window_1A2201D7_0291_2DDA_4171_B3BD567FE6A6, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "items": [
       {
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
        "yaw": -83.5,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 5.72
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 60.66,
   "pitch": 2.69
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
 {
  "initialPosition": {
   "hfov": 126,
   "class": "PanoramaCameraPosition",
   "yaw": 73.18,
   "pitch": -0.66
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
  "label": "Parque Cementerio de Carretas",
  "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_175E7E02_02B3_763A_4173_913A950AB72E",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 5.19,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -53.71,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.3
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 123,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
  "label": "El Llano",
  "cardboardMenu": "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 124,
   "class": "PanoramaCameraPosition",
   "yaw": -25.04,
   "pitch": -21.66
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, -1, this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 3, 4)",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "media": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781",
    "camera": "this.panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, true, -1, this.effect_104AA582_0291_EA3A_4182_D07C40B73749, 'showEffect', false)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 3, 4)",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist, 7, 8); this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, true, -1, this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0, 'showEffect', false)",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
  "thumbnailUrl": "media/video_14170593_0126_B908_417A_E645964470E6_t.jpg",
  "label": "Territorios - Putaendo",
  "video": {
   "height": 676,
   "width": 1200,
   "mp4Url": "media/video_14170593_0126_B908_417A_E645964470E6.mp4",
   "class": "VideoResource"
  },
  "width": 1200,
  "id": "video_14170593_0126_B908_417A_E645964470E6",
  "loop": false,
  "height": 676,
  "scaleMode": "fit_inside",
  "class": "Video"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_14170593_0126_B908_417A_E645964470E6",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_18054DD4_0273_15DD_412E_7EB224854D30, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_18054DD4_0273_15DD_412E_7EB224854D30, 0, this.video_14170593_0126_B908_417A_E645964470E6)"
   }
  ],
  "id": "playList_18054DD4_0273_15DD_412E_7EB224854D30",
  "class": "PlayList"
 },
 "this.Menu_19F89DE6_0273_15FD_417F_76B0FEA07E72",
 {
  "duration": 1000,
  "easing": "linear",
  "id": "effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "linear",
  "id": "effect_1A687CB6_02B3_1A5A_4152_D6E0363828DD",
  "class": "FadeOutEffect"
 },
 {
  "duration": 8000,
  "easing": "linear",
  "id": "effect_1505B9C3_0291_1A3B_4176_91AC933F53E5",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "linear",
  "id": "effect_18FC46C0_0291_1636_4178_D42A4CC7C980",
  "class": "FadeOutEffect"
 },
 "this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
 "this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
 "this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
 {
  "shadowOpacity": 0.5,
  "bodyPaddingTop": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "layout": "vertical",
  "backgroundColor": [],
  "modal": true,
  "overflow": "scroll",
  "titleFontFamily": "Georgia",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "title": "OCHAVO",
  "titleFontWeight": "bold",
  "gap": 8,
  "backgroundColorRatios": [],
  "scrollBarOpacity": 0.5,
  "bodyBorderColor": "#000000",
  "closeButtonIconLineWidth": 2,
  "titlePaddingBottom": 5,
  "scrollBarWidth": 10,
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerBackgroundColorDirection": "horizontal",
  "closeButtonIconColor": "#000000",
  "minHeight": 20,
  "creationPolicy": "delayed",
  "closeButtonBackgroundColorRatios": [],
  "shadowSpread": 1,
  "paddingLeft": 0,
  "shadowColor": "#000000",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titleFontSize": 14,
  "backgroundOpacity": 1,
  "bodyPaddingRight": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "titleFontStyle": "normal",
  "titleTextDecoration": "none",
  "minWidth": 20,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "children": [
   {
    "paddingRight": 10,
    "width": "100%",
    "paddingBottom": 10,
    "height": "36%",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "id": "htmlText_uid180EFDDB_0273_15CB_4186_5791180D0ECC",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">El ochavo es un recurso arquitect\u00f3nico que cumple la funci\u00f3n de facilitar la visibilidad y el tr\u00e1nsito en los cruces de calles, permitiendo que peatones y conductores dispongan de una mejor visi\u00f3n al llegar al cruce.</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText42985"
    },
    "borderSize": 0,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 0
   },
   {
    "paddingRight": 0,
    "width": "100%",
    "paddingBottom": 0,
    "height": "63%",
    "verticalAlign": "middle",
    "url": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C.PNG",
    "paddingTop": 0,
    "shadow": false,
    "scaleMode": "fit_inside",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "minHeight": 0,
    "id": "image_uid180EFDDB_0273_15CB_4186_5791180D0ECC_1",
    "data": {
     "name": "Image42986"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 0
   }
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBorderRadius": 11,
  "bodyBorderSize": 0,
  "bodyPaddingLeft": 5,
  "headerBorderColor": "#000000",
  "width": 400,
  "shadowHorizontalLength": 3,
  "height": 400,
  "scrollBarColor": "#000000",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titlePaddingTop": 5,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "shadow": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingLeft": 10,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "headerBorderSize": 0,
  "scrollBarMargin": 2,
  "class": "Window",
  "shadowVerticalLength": 0,
  "headerPaddingBottom": 10,
  "headerBackgroundOpacity": 1,
  "propagateClick": false,
  "contentOpaque": false,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingRight": 10,
  "bodyPaddingBottom": 5,
  "id": "window_1A2201D7_0291_2DDA_4171_B3BD567FE6A6",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundOpacity": 1,
  "borderSize": 0,
  "titleFontColor": "#000000",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "data": {
   "name": "Window30241"
  },
  "closeButtonIconWidth": 12,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "closeButtonBackgroundColor": [],
  "veilColorDirection": "horizontal"
 },
 {
  "shadowOpacity": 0.5,
  "bodyPaddingTop": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "layout": "vertical",
  "backgroundColor": [],
  "modal": true,
  "overflow": "scroll",
  "titleFontFamily": "Georgia",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "title": "PILAR DE ESQUINA",
  "titleFontWeight": "bold",
  "gap": 10,
  "backgroundColorRatios": [],
  "scrollBarOpacity": 0.5,
  "bodyBorderColor": "#000000",
  "closeButtonIconLineWidth": 2,
  "titlePaddingBottom": 5,
  "scrollBarWidth": 10,
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerBackgroundColorDirection": "horizontal",
  "closeButtonIconColor": "#000000",
  "minHeight": 20,
  "creationPolicy": "delayed",
  "closeButtonBackgroundColorRatios": [],
  "shadowSpread": 1,
  "paddingLeft": 0,
  "shadowColor": "#000000",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titleFontSize": 14,
  "backgroundOpacity": 1,
  "bodyPaddingRight": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "titleFontStyle": "normal",
  "titleTextDecoration": "none",
  "minWidth": 20,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "children": [
   {
    "paddingRight": 10,
    "width": "100%",
    "paddingBottom": 10,
    "height": "34%",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "id": "htmlText_uid19F04DDE_0273_15CD_4185_C02FC54B8334",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">El pilar de esquina tiene por funci\u00f3n soportar el peso de la estructura superior del v\u00e9rtice de las casonas, sin perturbar el tr\u00e1nsito de los peatones por abajo. Tambi\u00e9n serv\u00edan para un aprovechamiento particular del espacio en las esquinas sin sacrificar el \u00e1rea construida de la casa que las ocupaba.</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText42987"
    },
    "borderSize": 0,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 0
   },
   {
    "paddingRight": 0,
    "width": "100%",
    "paddingBottom": 0,
    "height": "65%",
    "verticalAlign": "middle",
    "url": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC.jpg",
    "paddingTop": 0,
    "shadow": false,
    "scaleMode": "fit_inside",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "minHeight": 0,
    "id": "image_uid19F04DDE_0273_15CD_4185_C02FC54B8334_1",
    "data": {
     "name": "Image42988"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 0
   }
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBorderRadius": 11,
  "bodyBorderSize": 0,
  "bodyPaddingLeft": 5,
  "headerBorderColor": "#000000",
  "width": 400,
  "shadowHorizontalLength": 3,
  "height": 400,
  "scrollBarColor": "#000000",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titlePaddingTop": 5,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "shadow": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingLeft": 10,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "headerBorderSize": 0,
  "scrollBarMargin": 2,
  "class": "Window",
  "shadowVerticalLength": 0,
  "headerPaddingBottom": 10,
  "headerBackgroundOpacity": 1,
  "propagateClick": false,
  "contentOpaque": false,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingRight": 10,
  "bodyPaddingBottom": 5,
  "id": "window_1A6F643F_02B1_2A4B_4165_ADDCAEA280A5",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundOpacity": 1,
  "borderSize": 0,
  "titleFontColor": "#000000",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "data": {
   "name": "Window34181"
  },
  "closeButtonIconWidth": 12,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "closeButtonBackgroundColor": [],
  "veilColorDirection": "horizontal"
 },
 {
  "initialPosition": {
   "hfov": 127,
   "class": "PanoramaCameraPosition",
   "yaw": 159.51,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_19E2DDFA_0273_15D5_4137_5F8CDFD948A0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.69,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_19E77E07_0273_163B_417E_A81B5F2E1960",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": 66.64,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_19EA9E13_0273_165B_4162_B33E3EF71E69",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 126,
   "class": "PanoramaCameraPosition",
   "yaw": 80.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_19D1FE1F_0273_164A_415B_36FADED6B8CB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_104AA582_0291_EA3A_4182_D07C40B73749",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_104AB582_0291_EA3A_416D_830D066B83F2",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
  "class": "FadeOutEffect"
 },
 "this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
 "this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
 "this.effect_104AA582_0291_EA3A_4182_D07C40B73749",
 "this.effect_104AB582_0291_EA3A_416D_830D066B83F2",
 "this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
 "this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
 "this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
 "this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
 "this.effect_104AA582_0291_EA3A_4182_D07C40B73749",
 "this.effect_104AB582_0291_EA3A_416D_830D066B83F2",
 "this.effect_19B7E294_026F_2E5E_4170_394D743DEEC0",
 "this.effect_19B7C294_026F_2E5E_417C_63F5917BAE20",
 {
  "image": {
   "levels": [
    {
     "url": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C.PNG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000,
  "thumbnailUrl": "media/photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C_t.png",
  "label": "ochavo-gigapixel-scale-2_00x",
  "width": 604,
  "id": "photo_1A87F0AB_02B1_6A4A_417E_D1B3DD28F58C",
  "height": 404,
  "class": "Photo"
 },
 {
  "image": {
   "levels": [
    {
     "url": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000,
  "thumbnailUrl": "media/photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC_t.jpg",
  "label": "29804074776_3f176df8f3_b",
  "width": 1024,
  "id": "photo_1B463D64_02B7_1AFD_416E_3DEB1A039EFC",
  "height": 768,
  "class": "Photo"
 }
], "children": [
 {
  "toolTipPaddingLeft": 12,
  "progressBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontColor": "#FFFFFF",
  "toolTipBorderSize": 0,
  "paddingRight": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "playbackBarLeft": 0,
  "toolTipDisplayTime": 600,
  "playbackBarHeadHeight": 15,
  "transitionDuration": 500,
  "progressBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingRight": 12,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontWeight": "normal",
  "toolTipPaddingTop": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipOpacity": 0.7,
  "playbackBarHeight": 10,
  "minHeight": 50,
  "playbackBarHeadWidth": 6,
  "toolTipFontFamily": "Georgia",
  "playbackBarRight": 0,
  "minWidth": 100,
  "paddingLeft": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "toolTipBackgroundColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "toolTipBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "paddingTop": 0,
  "toolTipFontSize": 17,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "progressLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBottom": 0,
  "propagateClick": false,
  "progressHeight": 10,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "bottom": "0%",
  "toolTipTextShadowColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "toolTipPaddingBottom": 10,
  "playbackBarHeadShadow": true,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "right": "0%",
  "playbackBarOpacity": 1,
  "borderRadius": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0
 },
 {
  "paddingRight": 0,
  "width": "100%",
  "paddingBottom": 0,
  "height": "15%",
  "verticalAlign": "middle",
  "url": "skin/Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA.png",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 1918,
  "scaleMode": "fill",
  "class": "Image",
  "maxHeight": 163,
  "propagateClick": false,
  "horizontalAlign": "center",
  "bottom": 0.03,
  "id": "Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA",
  "data": {
   "name": "Gradient"
  },
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "left": "0%",
  "borderRadius": 0,
  "minWidth": 1
 },
 {
  "paddingRight": 0,
  "layout": "horizontal",
  "width": 1650,
  "paddingBottom": 0,
  "height": 50,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "verticalAlign": "middle",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 12,
  "contentOpaque": false,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver",
  "bottom": "0%",
  "id": "Container_3649275E_3D3B_CF53_41C6_1DC9976EFC78",
  "data": {
   "name": "-- Main Button Set"
  },
  "minHeight": 1,
  "paddingLeft": 20,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundOpacity": 0,
  "left": "0%",
  "borderRadius": 0,
  "children": [
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3_rollover.png",
    "iconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3.png",
    "width": 82,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 82,
    "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3",
    "data": {
     "name": "button Ubicaci\u00f3n"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1_rollover.png",
    "iconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1.jpg",
    "width": 121,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 121,
    "click": "this.setComponentVisibility(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1",
    "data": {
     "name": "button panorama"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF_rollover.png",
    "iconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF.png",
    "width": 118,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 118,
    "click": "this.setMediaBehaviour(this.playList_18054DD4_0273_15DD_412E_7EB224854D30, 0); this.MainViewerVideoPlayer.play(); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF",
    "data": {
     "name": "button video gallery"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0_rollover.png",
    "iconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0.png",
    "width": 90,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 97,
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0",
    "data": {
     "name": "button 360 video"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3_rollover.png",
    "iconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3.png",
    "width": 106,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 115,
    "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3",
    "data": {
     "name": "button photoalbum"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD_rollover.png",
    "iconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD.png",
    "width": 82,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 82,
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD",
    "data": {
     "name": "button livepano"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483_rollover.png",
    "iconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483.png",
    "width": 76,
    "paddingBottom": 0,
    "height": 33,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 141,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\")",
    "class": "IconButton",
    "maxHeight": 33,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483",
    "data": {
     "name": "button contact"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   }
  ],
  "minWidth": 1
 },
 {
  "paddingRight": 0,
  "width": "100%",
  "paddingBottom": 0,
  "height": "0.22%",
  "verticalAlign": "bottom",
  "url": "skin/Image_3117F852_3D1C_4153_41C7_F45A80F07BAF.png",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 1918,
  "scaleMode": "fit_to_width",
  "class": "Image",
  "maxHeight": 2,
  "propagateClick": false,
  "horizontalAlign": "center",
  "bottom": 52,
  "id": "Image_3117F852_3D1C_4153_41C7_F45A80F07BAF",
  "data": {
   "name": "white line"
  },
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "left": "0%",
  "borderRadius": 0,
  "minWidth": 1
 },
 {
  "paddingRight": 0,
  "rollOverIconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1_rollover.png",
  "iconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1.png",
  "width": 49,
  "paddingBottom": 0,
  "height": 37,
  "mode": "push",
  "verticalAlign": "middle",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 49,
  "class": "IconButton",
  "maxHeight": 37,
  "propagateClick": false,
  "cursor": "hand",
  "visible": false,
  "horizontalAlign": "center",
  "minHeight": 1,
  "bottom": 7,
  "id": "IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "data": {
   "name": "IconButton VR"
  },
  "borderSize": 0,
  "paddingLeft": 0,
  "transparencyActive": false,
  "backgroundOpacity": 0,
  "minWidth": 1,
  "right": 20,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "width": 571,
    "paddingBottom": 0,
    "height": 103,
    "verticalAlign": "middle",
    "url": "skin/Image_5AA7538E_5272_07D3_4182_395FFD794174.png",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 571,
    "scaleMode": "fit_inside",
    "class": "Image",
    "maxHeight": 103,
    "propagateClick": false,
    "horizontalAlign": "center",
    "visible": false,
    "top": "0%",
    "id": "Image_5AA7538E_5272_07D3_4182_395FFD794174",
    "data": {
     "name": "T01"
    },
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "left": "0.11%",
    "minWidth": 1,
    "borderRadius": 0
   }
  ],
  "paddingRight": 0,
  "layout": "absolute",
  "width": 1207.4,
  "paddingBottom": 0,
  "height": 520,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "top": 78,
  "creationPolicy": "delayed",
  "id": "Container_5A4FF621_5292_00D1_41C0_CD8A96F5E4AB",
  "data": {
   "name": "- Container Title"
  },
  "minHeight": 1,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundOpacity": 0,
  "left": 17,
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "paddingRight": 0,
  "layout": "absolute",
  "width": 350,
  "paddingBottom": 0,
  "height": 110,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "top": "0%",
  "minHeight": 1,
  "creationPolicy": "delayed",
  "id": "Container_5791757B_5C95_8734_4195_AD2599C9941B",
  "data": {
   "name": "-- Settings button set"
  },
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "right": "0%",
  "children": [
   {
    "paddingRight": 0,
    "layout": "horizontal",
    "width": 110,
    "paddingBottom": 0,
    "height": 110,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "top": "0%",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_57887AFF_5C94_8D2C_41D1_D25764D9D6F5",
    "data": {
     "name": "container setting button"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "right": "0%",
    "children": [
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E_rollover.png",
      "iconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E.png",
      "width": 60,
      "paddingBottom": 0,
      "height": 60,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 60,
      "click": "this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, false, 3500, null, 'hideEffect', false)",
      "class": "IconButton",
      "maxHeight": 60,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E",
      "data": {
       "name": "settings button"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "minWidth": 1
     }
    ],
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "layout": "horizontal",
    "width": "60.857%",
    "paddingBottom": 0,
    "height": "100%",
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 3,
    "contentOpaque": false,
    "class": "Container",
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "right",
    "visible": false,
    "top": "0%",
    "creationPolicy": "delayed",
    "id": "Container_50C22332_5CED_8334_41D2_0EC5525522E0",
    "data": {
     "name": "Hide buttons set"
    },
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "left": "12.8%",
    "borderRadius": 0,
    "children": [
     {
      "paddingRight": 0,
      "iconURL": "skin/IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB.png",
      "width": 37,
      "paddingBottom": 0,
      "height": 31,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 37,
      "class": "IconButton",
      "maxHeight": 31,
      "propagateClick": false,
      "cursor": "hand",
      "visible": false,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB",
      "data": {
       "name": "button floorplan"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "minWidth": 1
     },
     {
      "paddingRight": 0,
      "iconURL": "skin/IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB.png",
      "width": 37,
      "paddingBottom": 0,
      "height": 31,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 37,
      "class": "IconButton",
      "maxHeight": 31,
      "propagateClick": false,
      "cursor": "hand",
      "visible": false,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB",
      "data": {
       "name": "button share"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "minWidth": 1
     },
     "this.IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
     {
      "paddingRight": 0,
      "iconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D.png",
      "width": 37,
      "paddingBottom": 0,
      "height": 31,
      "mode": "toggle",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 37,
      "class": "IconButton",
      "maxHeight": 31,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
      "data": {
       "name": "button mute"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D_pressed.png",
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "borderRadius": 0,
      "minWidth": 1
     },
     {
      "paddingRight": 0,
      "iconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E.png",
      "width": 37,
      "paddingBottom": 0,
      "height": 31,
      "mode": "toggle",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 37,
      "class": "IconButton",
      "maxHeight": 31,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
      "data": {
       "name": "button fullscreen"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E_pressed.png",
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "borderRadius": 0,
      "minWidth": 1
     }
    ],
    "minWidth": 1
   }
  ],
  "minWidth": 1
 },
 {
  "paddingRight": 27,
  "layout": "horizontal",
  "width": 213,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "verticalAlign": "middle",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "right",
  "top": "0%",
  "minHeight": 1,
  "creationPolicy": "delayed",
  "id": "Container_53346047_5A6C_DD58_41B9_B595FF015610",
  "data": {
   "name": "--Intro video"
  },
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "right": "0%",
  "children": [
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB_rollover.png",
    "iconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB.png",
    "width": 144,
    "paddingBottom": 0,
    "height": 60,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 144,
    "class": "IconButton",
    "maxHeight": 60,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB",
    "data": {
     "name": "button intro video"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   }
  ],
  "minWidth": 1
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       {
        "paddingRight": 0,
        "width": "100%",
        "paddingBottom": 0,
        "height": "100%",
        "verticalAlign": "middle",
        "url": "skin/Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D.jpg",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 1264,
        "scaleMode": "fit_outside",
        "class": "Image",
        "maxHeight": 948,
        "propagateClick": false,
        "horizontalAlign": "center",
        "top": "0%",
        "id": "Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D",
        "data": {
         "name": "img photo"
        },
        "minHeight": 1,
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "left": "0%",
        "borderRadius": 0,
        "minWidth": 1
       }
      ],
      "backgroundColor": [
       "#000000",
       "#333333"
      ],
      "layout": "absolute",
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "100%",
      "overflow": "scroll",
      "width": "62%",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       1,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "left",
      "top": "0%",
      "creationPolicy": "delayed",
      "id": "Container_85A03C4E_A12F_4591_41DA_1C4E96B3B699",
      "data": {
       "name": "left"
      },
      "minHeight": 1,
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 1,
      "left": "0%",
      "minWidth": 1,
      "borderRadius": 0
     },
     {
      "children": [
       {
        "paddingRight": 0,
        "width": "90%",
        "paddingBottom": 0,
        "height": "90%",
        "verticalAlign": "middle",
        "url": "skin/Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944.jpg",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 712,
        "scaleMode": "fit_inside",
        "class": "Image",
        "propagateClick": false,
        "horizontalAlign": "center",
        "minHeight": 500,
        "id": "Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944",
        "data": {
         "name": "img text"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "minWidth": 500
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "layout": "vertical",
      "paddingRight": 50,
      "paddingBottom": 20,
      "height": "100%",
      "overflow": "scroll",
      "width": "54%",
      "scrollBarColor": "#E7392B",
      "verticalAlign": "middle",
      "paddingTop": 20,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "top": "0%",
      "minHeight": 500,
      "creationPolicy": "delayed",
      "id": "Container_85A01C4E_A12F_4591_41E3_CE0B8DD057F5",
      "data": {
       "name": "right"
      },
      "borderSize": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 50,
      "backgroundOpacity": 1,
      "minWidth": 600,
      "right": "0%",
      "borderRadius": 0
     },
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB_rollover.png",
      "iconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB.png",
      "width": 24,
      "paddingBottom": 0,
      "height": 24,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 120,
      "click": "this.setComponentVisibility(this.Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4, false, 0, null, null, false)",
      "class": "IconButton",
      "maxHeight": 120,
      "propagateClick": false,
      "cursor": "hand",
      "top": 20,
      "horizontalAlign": "center",
      "minHeight": 30,
      "id": "IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB",
      "data": {
       "name": "x"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "minWidth": 30,
      "right": 20,
      "borderRadius": 0
     }
    ],
    "backgroundColor": [
     "#333333",
     "#333333"
    ],
    "layout": "absolute",
    "paddingRight": 0,
    "paddingBottom": 0,
    "overflow": "scroll",
    "scrollBarColor": "#F10A00",
    "verticalAlign": "top",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "top": "8%",
    "bottom": "8%",
    "id": "Container_85A02C4E_A12F_4591_41DC_68C7D63D67D7",
    "data": {
     "name": "Global"
    },
    "minHeight": 1,
    "paddingLeft": 0,
    "creationPolicy": "delayed",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundOpacity": 1,
    "left": "6%",
    "minWidth": 1,
    "right": "6%",
    "borderRadius": 0
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "absolute",
  "paddingRight": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "verticalAlign": "top",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "bottom": "0%",
  "id": "Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4",
  "data": {
   "name": "---INFO"
  },
  "minHeight": 1,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundOpacity": 0.6,
  "left": "0%",
  "minWidth": 1,
  "right": "0%",
  "borderRadius": 0
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "layout": "horizontal",
    "width": 800,
    "paddingBottom": 0,
    "height": 600,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_55E3858B_4314_C3B1_4199_F7924E88ECBA",
    "data": {
     "name": "Location global"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 1,
    "borderRadius": 4,
    "children": [
     {
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "layout": "absolute",
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "94.868%",
      "overflow": "scroll",
      "width": "96.837%",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "creationPolicy": "delayed",
      "id": "Container_55BED378_431C_475F_41C0_B13F978722EA",
      "data": {
       "name": "Container content"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0.3,
      "borderRadius": 0,
      "children": [
       {
        "paddingRight": 0,
        "rollOverIconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA_rollover.png",
        "iconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA.png",
        "width": 24,
        "paddingBottom": 0,
        "height": 24,
        "mode": "push",
        "verticalAlign": "middle",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 24,
        "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, false, 0, null, null, false)",
        "class": "IconButton",
        "maxHeight": 24,
        "propagateClick": false,
        "cursor": "hand",
        "top": "0%",
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA",
        "data": {
         "name": "X"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "transparencyActive": true,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "right": "0%",
        "borderRadius": 0
       },
       {
        "children": [
         {
          "backgroundColor": [
           "#FFFFFF"
          ],
          "paddingRight": 0,
          "paddingBottom": 0,
          "height": "100%",
          "width": "100%",
          "scrollEnabled": false,
          "insetBorder": false,
          "url": "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13440.961761524723!2d-70.7243282164782!3d-32.626419896281845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x968871396691cee3%3A0x49116fdf72bc08e9!2sPutaendo%2C%20Valpara%C3%ADso%2C%20Chile!3m2!1d-32.628461!2d-70.7177434!5e0!3m2!1ses-419!2sru!4v1597687621391!5m2!1ses-419!2sru\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
          "paddingTop": 0,
          "backgroundColorDirection": "vertical",
          "shadow": false,
          "class": "WebFrame",
          "backgroundColorRatios": [
           0
          ],
          "propagateClick": false,
          "top": "0%",
          "id": "WebFrame_57792F91_436F_DFD1_41BE_B9C240373A43",
          "data": {
           "name": "WebFrame"
          },
          "minHeight": 1,
          "borderSize": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 1,
          "left": "0%",
          "minWidth": 1,
          "borderRadius": 0
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "layout": "absolute",
        "paddingRight": 0,
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "creationPolicy": "delayed",
        "id": "Container_5555E455_436C_4151_41CC_029603B5193B",
        "data": {
         "name": "Container webframe"
        },
        "minHeight": 1,
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0.3,
        "left": "0%",
        "minWidth": 1,
        "right": "10%",
        "borderRadius": 0
       }
      ],
      "minWidth": 1
     }
    ],
    "minWidth": 1
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_55273B39_437C_40D1_41B7_C9815CF1926F",
  "data": {
   "name": "UBICACI\u00d3N"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.5,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "layout": "absolute",
    "width": 1050,
    "paddingBottom": 0,
    "height": 580,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_2E9E35C8_3D1C_43BF_41B7_13BBE9E68CEB",
    "data": {
     "name": "Container global"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 1,
    "borderRadius": 4,
    "children": [
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307_rollover.png",
      "iconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307.png",
      "width": 24,
      "paddingBottom": 0,
      "height": 24,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 24,
      "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, false, 0, null, null, false)",
      "class": "IconButton",
      "maxHeight": 24,
      "propagateClick": false,
      "cursor": "hand",
      "top": "2.5%",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307",
      "data": {
       "name": "X"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": "1.43%",
      "borderRadius": 0
     },
     {
      "children": [
       {
        "paddingRight": 0,
        "width": "85.4%",
        "paddingBottom": 0,
        "height": "14%",
        "verticalAlign": "middle",
        "url": "skin/Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583.png",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 1133,
        "scaleMode": "fit_outside",
        "class": "Image",
        "maxHeight": 41,
        "propagateClick": false,
        "horizontalAlign": "left",
        "minHeight": 1,
        "id": "Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583",
        "data": {
         "name": "Text image"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "minWidth": 1
       },
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "layout": "horizontal",
        "paddingRight": 0,
        "paddingBottom": 0,
        "height": "83.135%",
        "overflow": "scroll",
        "width": "89.619%",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 13,
        "contentOpaque": false,
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "center",
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "creationPolicy": "delayed",
        "id": "Container_2E0D0306_3D14_C0B3_41A4_18E077CBEE3C",
        "data": {
         "name": "Container Thumblist"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0.3,
        "borderRadius": 0,
        "children": [
         {
          "itemThumbnailWidth": 200,
          "backgroundColor": [
           "#FFFFFF"
          ],
          "paddingRight": 20,
          "paddingBottom": 10,
          "itemLabelFontStyle": "normal",
          "itemHeight": 150,
          "verticalAlign": "top",
          "itemLabelHorizontalAlign": "center",
          "gap": 25,
          "backgroundColorRatios": [
           0
          ],
          "scrollBarOpacity": 0.5,
          "itemPaddingTop": 3,
          "itemMode": "normal",
          "scrollBarWidth": 10,
          "itemPaddingRight": 3,
          "horizontalAlign": "left",
          "playList": "this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
          "itemThumbnailHeight": 116,
          "minHeight": 1,
          "itemLabelFontFamily": "Georgia",
          "itemOpacity": 1,
          "paddingLeft": 20,
          "itemBorderRadius": 0,
          "itemLabelPosition": "bottom",
          "itemMaxHeight": 1000,
          "backgroundOpacity": 0.2,
          "itemVerticalAlign": "middle",
          "selectedItemLabelFontWeight": "bold",
          "minWidth": 1,
          "itemMinWidth": 50,
          "itemLabelGap": 7,
          "itemThumbnailShadow": false,
          "itemWidth": 206,
          "itemBackgroundColor": [],
          "itemPaddingLeft": 3,
          "itemBackgroundColorRatios": [],
          "width": "100%",
          "itemMinHeight": 50,
          "itemPaddingBottom": 3,
          "scrollBarColor": "#FFFFFF",
          "height": "90%",
          "itemThumbnailOpacity": 1,
          "itemThumbnailBorderRadius": 0,
          "itemHorizontalAlign": "center",
          "paddingTop": 14,
          "backgroundColorDirection": "vertical",
          "shadow": false,
          "itemLabelTextDecoration": "none",
          "scrollBarMargin": 2,
          "rollOverItemLabelFontWeight": "bold",
          "class": "ThumbnailGrid",
          "propagateClick": false,
          "scrollBarVisible": "rollOver",
          "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9",
          "itemThumbnailScaleMode": "fit_outside",
          "rollOverItemLabelFontColor": "#000000",
          "borderSize": 0,
          "itemLabelFontWeight": "normal",
          "itemBackgroundColorDirection": "vertical",
          "itemLabelFontSize": 14,
          "data": {
           "name": "ThumbnailList"
          },
          "selectedItemLabelFontColor": "#99BB1B",
          "itemBackgroundOpacity": 0,
          "selectedItemLabelFontStyle": "italic",
          "borderRadius": 5,
          "itemLabelFontColor": "#333333",
          "itemMaxWidth": 1000
         }
        ],
        "minWidth": 1
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "layout": "vertical",
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "88%",
      "overflow": "scroll",
      "width": "100%",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 20,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "scrollBarVisible": "rollOver",
      "bottom": "0%",
      "id": "Container_2ED71618_3D14_C0DF_418D_C2F178EFBCA8",
      "data": {
       "name": "Container thumblist"
      },
      "minHeight": 1,
      "creationPolicy": "delayed",
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0.3,
      "left": "0%",
      "minWidth": 1,
      "borderRadius": 0
     }
    ],
    "minWidth": 1
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 11,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C",
  "data": {
   "name": "---PANORAMA LIST"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.5,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "layout": "horizontal",
    "paddingRight": 0,
    "paddingBottom": 0,
    "height": "83%",
    "overflow": "scroll",
    "width": "90.91%",
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_5EE70B15_547D_F3EC_41C1_999FBC34E663",
    "data": {
     "name": "Container global"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 1,
    "borderRadius": 4,
    "children": [
     {
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "layout": "absolute",
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "94.868%",
      "overflow": "scroll",
      "width": "96.837%",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "creationPolicy": "delayed",
      "id": "Container_5EE70B15_547D_F3EC_41D0_339269FA65C3",
      "data": {
       "name": "Container content"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0.3,
      "borderRadius": 0,
      "children": [
       "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
       {
        "paddingRight": 0,
        "layout": "absolute",
        "width": "27.805%",
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "minHeight": 1,
        "creationPolicy": "delayed",
        "id": "Container_5EE70B15_547D_F3EC_41A2_343375D7999C",
        "data": {
         "name": "Container text"
        },
        "borderSize": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "width": "100%",
          "paddingBottom": 0,
          "verticalAlign": "middle",
          "url": "skin/Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C.png",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "class": "Image",
          "maxHeight": 600,
          "propagateClick": false,
          "horizontalAlign": "center",
          "top": "6.63%",
          "bottom": "58.73%",
          "id": "Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C",
          "data": {
           "name": "VideoGallery text"
          },
          "minHeight": 1,
          "paddingLeft": 0,
          "borderSize": 0,
          "backgroundOpacity": 0,
          "left": "0%",
          "minWidth": 1,
          "borderRadius": 0
         },
         {
          "children": [
           {
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "layout": "horizontal",
            "paddingRight": 0,
            "paddingBottom": 0,
            "height": "22.4%",
            "overflow": "visible",
            "width": "100%",
            "scrollBarColor": "#000000",
            "verticalAlign": "top",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "backgroundColorRatios": [
             0,
             1
            ],
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "creationPolicy": "delayed",
            "id": "Container_5EE70B15_547D_F3EC_41A2_874A2F889A29",
            "data": {
             "name": "Row 1"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0.3,
            "borderRadius": 0,
            "children": [
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663_rollover.jpg",
              "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "click": "this.setComponentVisibility(this.Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18, false, 0, null, null, false)",
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663",
              "data": {
               "name": "IconButton intro"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": true,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             },
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B_rollover.jpg",
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B",
              "data": {
               "name": "IconButton snorkel"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": false,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             }
            ],
            "minWidth": 1
           },
           {
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "layout": "horizontal",
            "paddingRight": 0,
            "paddingBottom": 0,
            "height": "22.4%",
            "overflow": "visible",
            "width": "100%",
            "scrollBarColor": "#000000",
            "verticalAlign": "top",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "backgroundColorRatios": [
             0,
             1
            ],
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "creationPolicy": "delayed",
            "id": "Container_5EE70B16_547D_F3EC_41C9_971F1B00B22D",
            "data": {
             "name": "Row 2"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0.3,
            "borderRadius": 0,
            "children": [
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8_rollover.jpg",
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8",
              "data": {
               "name": "IconButton folklore"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": false,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             },
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F_rollover.jpg",
              "iconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F",
              "data": {
               "name": "IconButton empty"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": false,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             }
            ],
            "minWidth": 1
           },
           {
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "layout": "horizontal",
            "paddingRight": 0,
            "paddingBottom": 0,
            "height": "22.4%",
            "overflow": "visible",
            "width": "100%",
            "scrollBarColor": "#000000",
            "verticalAlign": "top",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "backgroundColorRatios": [
             0,
             1
            ],
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "creationPolicy": "delayed",
            "id": "Container_5EE70B16_547D_F3EC_41D4_82701AFF0DAD",
            "data": {
             "name": "Row 3 empty"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0.3,
            "borderRadius": 0,
            "minWidth": 1
           }
          ],
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "layout": "vertical",
          "paddingRight": 0,
          "paddingBottom": 0,
          "height": "52.259%",
          "overflow": "visible",
          "width": "76.072%",
          "scrollBarColor": "#000000",
          "verticalAlign": "top",
          "paddingTop": 0,
          "backgroundColorDirection": "vertical",
          "shadow": false,
          "scrollBarMargin": 2,
          "gap": 5,
          "contentOpaque": false,
          "class": "Container",
          "backgroundColorRatios": [
           0,
           1
          ],
          "scrollBarOpacity": 0.5,
          "propagateClick": false,
          "scrollBarWidth": 10,
          "horizontalAlign": "center",
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "bottom": "6.63%",
          "id": "Container_5EE70B15_547D_F3EC_41D1_22CDC78688BF",
          "data": {
           "name": "Container thumbs"
          },
          "borderSize": 0,
          "creationPolicy": "delayed",
          "paddingLeft": 0,
          "backgroundOpacity": 0.3,
          "minWidth": 1,
          "right": "11.47%",
          "borderRadius": 0
         }
        ],
        "minWidth": 1
       },
       {
        "children": [
         {
          "toolTipPaddingLeft": 6,
          "progressBorderSize": 0,
          "playbackBarHeadShadowVerticalLength": 0,
          "toolTipFontColor": "#606060",
          "toolTipBorderSize": 1,
          "paddingRight": 0,
          "progressBackgroundColorRatios": [
           0
          ],
          "paddingBottom": 0,
          "playbackBarLeft": 0,
          "toolTipDisplayTime": 600,
          "playbackBarHeadHeight": 15,
          "transitionDuration": 500,
          "progressBorderRadius": 0,
          "toolTipBorderColor": "#767676",
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "toolTipShadowOpacity": 1,
          "progressBarBorderColor": "#000000",
          "toolTipShadowHorizontalLength": 0,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "toolTipPaddingRight": 6,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadOpacity": 1,
          "playbackBarHeadShadowBlurRadius": 3,
          "progressBackgroundColorDirection": "vertical",
          "toolTipShadowSpread": 0,
          "playbackBarBottom": 0,
          "progressBorderColor": "#000000",
          "transitionMode": "blending",
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "toolTipFontWeight": "normal",
          "toolTipPaddingTop": 4,
          "toolTipOpacity": 1,
          "playbackBarHeight": 10,
          "minHeight": 1,
          "paddingLeft": 0,
          "playbackBarHeadWidth": 6,
          "toolTipFontFamily": "Arial",
          "playbackBarRight": 0,
          "minWidth": 1,
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "progressBarBorderSize": 0,
          "playbackBarProgressBorderSize": 0,
          "playbackBarBackgroundColorDirection": "vertical",
          "playbackBarProgressBorderRadius": 0,
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipTextShadowOpacity": 0,
          "toolTipBorderRadius": 3,
          "progressBarBorderRadius": 0,
          "playbackBarBorderRadius": 0,
          "height": "100%",
          "width": "100%",
          "toolTipTextShadowBlurRadius": 3,
          "playbackBarHeadBorderColor": "#000000",
          "playbackBarProgressBorderColor": "#000000",
          "playbackBarHeadBorderRadius": 0,
          "paddingTop": 0,
          "toolTipFontSize": 12,
          "toolTipFontStyle": "normal",
          "shadow": false,
          "progressLeft": 0,
          "playbackBarHeadBorderSize": 0,
          "playbackBarProgressOpacity": 1,
          "toolTipShadowBlurRadius": 3,
          "playbackBarBorderSize": 0,
          "class": "ViewerArea",
          "playbackBarBackgroundOpacity": 1,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "progressBottom": 2,
          "propagateClick": false,
          "progressHeight": 10,
          "top": "0%",
          "toolTipShadowColor": "#333333",
          "toolTipTextShadowColor": "#000000",
          "id": "ViewerAreaLabeled_5EE70B16_547D_F3EC_4177_5761BA34B830",
          "playbackBarHeadShadowColor": "#000000",
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "borderSize": 0,
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "progressRight": 0,
          "progressBarBackgroundColorDirection": "vertical",
          "progressOpacity": 1,
          "playbackBarHeadShadowOpacity": 0.7,
          "toolTipShadowVerticalLength": 0,
          "left": "0%",
          "toolTipPaddingBottom": 4,
          "playbackBarHeadShadow": true,
          "playbackBarBorderColor": "#FFFFFF",
          "progressBackgroundOpacity": 1,
          "playbackBarOpacity": 1,
          "borderRadius": 0,
          "progressBarOpacity": 1,
          "playbackBarHeadShadowHorizontalLength": 0
         },
         {
          "paddingRight": 0,
          "width": "100%",
          "paddingBottom": 0,
          "height": "100%",
          "verticalAlign": "middle",
          "url": "skin/Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18.jpg",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 1460,
          "scaleMode": "fit_inside",
          "class": "Image",
          "maxHeight": 821,
          "propagateClick": false,
          "horizontalAlign": "center",
          "top": "0%",
          "id": "Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18",
          "data": {
           "name": "-Image intro video"
          },
          "minHeight": 1,
          "borderSize": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "left": "0%",
          "borderRadius": 0,
          "minWidth": 1
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "layout": "absolute",
        "paddingRight": 0,
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "width": "72.402%",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "creationPolicy": "delayed",
        "id": "Container_5EE70B16_547D_F3EC_41D3_F78FB47E4731",
        "data": {
         "name": "Container Viewer"
        },
        "minHeight": 1,
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0.3,
        "left": "0%",
        "minWidth": 1,
        "borderRadius": 0
       }
      ],
      "minWidth": 1
     }
    ],
    "minWidth": 1
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A",
  "data": {
   "name": "---VIDEOALBUM"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.5,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "layout": "absolute",
    "width": 872,
    "paddingBottom": 0,
    "height": 362,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_C190C7DD_D1CF_0253_41E6_E37D4ADD5212",
    "data": {
     "name": "Container global"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 1,
    "borderRadius": 4,
    "children": [
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0_rollover.png",
      "iconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0.png",
      "width": 24,
      "paddingBottom": 0,
      "height": 24,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 24,
      "click": "this.setComponentVisibility(this.Container_C190A7DE_D1CF_0251_41D6_94510622876F, false, 0, null, null, false)",
      "class": "IconButton",
      "maxHeight": 24,
      "propagateClick": false,
      "cursor": "hand",
      "top": "4%",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0",
      "data": {
       "name": "X"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": "1.43%",
      "borderRadius": 0
     },
     {
      "paddingRight": 0,
      "layout": "vertical",
      "width": "100%",
      "paddingBottom": 0,
      "height": "73.757%",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "scrollBarVisible": "rollOver",
      "bottom": "8.01%",
      "id": "Container_C190E7DD_D1CF_0253_41C3_86133B23DE83",
      "data": {
       "name": "Container content"
      },
      "minHeight": 1,
      "creationPolicy": "delayed",
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0,
      "left": "0%",
      "borderRadius": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": "80%",
        "paddingBottom": 0,
        "height": "15.356%",
        "verticalAlign": "middle",
        "url": "skin/Image_C19097DE_D1CF_0251_41EA_014A5794BC3C.png",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 1133,
        "scaleMode": "fit_inside",
        "class": "Image",
        "maxHeight": 41,
        "propagateClick": false,
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "Image_C19097DE_D1CF_0251_41EA_014A5794BC3C",
        "data": {
         "name": "Panorama list title"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "minWidth": 1
       },
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "layout": "horizontal",
        "paddingRight": 0,
        "paddingBottom": 0,
        "height": "61.423%",
        "overflow": "visible",
        "width": "80%",
        "scrollBarColor": "#000000",
        "verticalAlign": "middle",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "creationPolicy": "delayed",
        "id": "Container_E916E277_E0EC_BA90_41E7_7B91E7367E91",
        "data": {
         "name": "Container thumbs"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0.3,
        "borderRadius": 0,
        "children": [
         {
          "paddingRight": 0,
          "rollOverIconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3_rollover.jpg",
          "iconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3.jpg",
          "width": "35%",
          "paddingBottom": 0,
          "height": "82%",
          "mode": "push",
          "verticalAlign": "middle",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 290,
          "class": "IconButton",
          "maxHeight": 164,
          "propagateClick": false,
          "cursor": "hand",
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3",
          "data": {
           "name": "IconButton Powerboat"
          },
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "backgroundOpacity": 0,
          "borderRadius": 0,
          "minWidth": 1
         },
         {
          "paddingRight": 0,
          "rollOverIconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC_rollover.jpg",
          "iconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC.jpg",
          "width": "35%",
          "paddingBottom": 0,
          "height": "82%",
          "mode": "push",
          "verticalAlign": "middle",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 290,
          "class": "IconButton",
          "maxHeight": 164,
          "propagateClick": false,
          "cursor": "hand",
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC",
          "data": {
           "name": "IconButton Breakfast"
          },
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "backgroundOpacity": 0,
          "borderRadius": 0,
          "minWidth": 1
         },
         {
          "paddingRight": 0,
          "rollOverIconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D_rollover.jpg",
          "iconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D.jpg",
          "width": "35%",
          "paddingBottom": 0,
          "height": "82%",
          "mode": "push",
          "verticalAlign": "middle",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 290,
          "class": "IconButton",
          "maxHeight": 164,
          "propagateClick": false,
          "cursor": "hand",
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D",
          "data": {
           "name": "IconButton PoolFun"
          },
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "backgroundOpacity": 0,
          "borderRadius": 0,
          "minWidth": 1
         }
        ],
        "minWidth": 1
       }
      ],
      "minWidth": 1
     }
    ],
    "minWidth": 1
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 11,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_C190A7DE_D1CF_0251_41D6_94510622876F",
  "data": {
   "name": "---VIDEO 360\u00ba"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.5,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "toolTipPaddingLeft": 6,
    "progressBorderSize": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "toolTipFontColor": "#606060",
    "toolTipBorderSize": 1,
    "paddingRight": 0,
    "progressBackgroundColorRatios": [
     0
    ],
    "paddingBottom": 0,
    "playbackBarLeft": 0,
    "toolTipDisplayTime": 600,
    "playbackBarHeadHeight": 15,
    "transitionDuration": 500,
    "progressBorderRadius": 0,
    "toolTipBorderColor": "#767676",
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "toolTipShadowOpacity": 1,
    "progressBarBorderColor": "#000000",
    "toolTipShadowHorizontalLength": 0,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "toolTipPaddingRight": 6,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadOpacity": 1,
    "playbackBarHeadShadowBlurRadius": 3,
    "progressBackgroundColorDirection": "vertical",
    "toolTipShadowSpread": 0,
    "playbackBarBottom": 0,
    "progressBorderColor": "#000000",
    "transitionMode": "blending",
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "toolTipFontWeight": "normal",
    "toolTipPaddingTop": 4,
    "toolTipOpacity": 1,
    "playbackBarHeight": 10,
    "minHeight": 1,
    "paddingLeft": 0,
    "playbackBarHeadWidth": 6,
    "toolTipFontFamily": "Arial",
    "playbackBarRight": 0,
    "minWidth": 1,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "progressBarBorderSize": 0,
    "playbackBarProgressBorderSize": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "playbackBarProgressBorderRadius": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipTextShadowOpacity": 0,
    "toolTipBorderRadius": 3,
    "progressBarBorderRadius": 0,
    "playbackBarBorderRadius": 0,
    "height": "100%",
    "width": "100%",
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarProgressBorderColor": "#000000",
    "playbackBarHeadBorderRadius": 0,
    "paddingTop": 0,
    "toolTipFontSize": 12,
    "toolTipFontStyle": "normal",
    "shadow": false,
    "progressLeft": 0,
    "playbackBarHeadBorderSize": 0,
    "playbackBarProgressOpacity": 1,
    "toolTipShadowBlurRadius": 3,
    "playbackBarBorderSize": 0,
    "class": "ViewerArea",
    "playbackBarBackgroundOpacity": 1,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "progressBottom": 2,
    "propagateClick": false,
    "progressHeight": 10,
    "toolTipShadowColor": "#333333",
    "bottom": "0%",
    "toolTipTextShadowColor": "#000000",
    "id": "ViewerAreaLabeled_EF626468_E164_BEB0_41E7_F6DF4C667020",
    "playbackBarHeadShadowColor": "#000000",
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "borderSize": 0,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "progressRight": 0,
    "progressBarBackgroundColorDirection": "vertical",
    "progressOpacity": 1,
    "playbackBarHeadShadowOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "left": "0%",
    "toolTipPaddingBottom": 4,
    "playbackBarHeadShadow": true,
    "playbackBarBorderColor": "#FFFFFF",
    "progressBackgroundOpacity": 1,
    "playbackBarOpacity": 1,
    "borderRadius": 0,
    "progressBarOpacity": 1,
    "playbackBarHeadShadowHorizontalLength": 0
   },
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0"
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "absolute",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_ECB4524F_E163_9AF0_41E5_60E049D28740",
  "data": {
   "name": "---360"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 1,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "paddingRight": 0,
  "rollOverIconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29_rollover.png",
  "iconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29.png",
  "width": 40,
  "paddingBottom": 0,
  "height": 40,
  "mode": "push",
  "verticalAlign": "middle",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 80,
  "class": "IconButton",
  "maxHeight": 80,
  "propagateClick": false,
  "cursor": "hand",
  "visible": false,
  "top": 20,
  "horizontalAlign": "center",
  "id": "IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29",
  "data": {
   "name": "X 360"
  },
  "minHeight": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "transparencyActive": true,
  "backgroundOpacity": 0,
  "left": 20,
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "paddingRight": 0,
  "width": 125,
  "paddingBottom": 0,
  "height": 70,
  "verticalAlign": "middle",
  "url": "skin/Image_19470ABB_0A67_2982_418C_D469BE33D2C6.png",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 212,
  "scaleMode": "fit_to_width",
  "class": "Image",
  "maxHeight": 78,
  "propagateClick": false,
  "horizontalAlign": "center",
  "visible": false,
  "minHeight": 1,
  "bottom": 56,
  "id": "Image_19470ABB_0A67_2982_418C_D469BE33D2C6",
  "data": {
   "name": "-Wheel mouse"
  },
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "right": 20,
  "minWidth": 1
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "layout": "horizontal",
    "width": 1500,
    "paddingBottom": 0,
    "height": 780,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_474C01C7_4AA6_73B2_41C6_B213F7F17334",
    "data": {
     "name": "Main container"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 1,
    "borderRadius": 4,
    "children": [
     {
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "layout": "absolute",
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "94.868%",
      "overflow": "scroll",
      "width": "96.837%",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "creationPolicy": "delayed",
      "id": "Container_474C01C8_4AA6_73BE_41C7_421C083439CF",
      "data": {
       "name": "Content container"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0.3,
      "borderRadius": 0,
      "children": [
       {
        "paddingRight": 0,
        "rollOverIconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C_rollover.png",
        "iconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C.png",
        "width": 24,
        "paddingBottom": 0,
        "height": 24,
        "mode": "push",
        "verticalAlign": "middle",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 24,
        "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, false, 0, null, null, false)",
        "class": "IconButton",
        "maxHeight": 24,
        "propagateClick": false,
        "cursor": "hand",
        "top": "0%",
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C",
        "data": {
         "name": "X"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "transparencyActive": true,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "right": "0%",
        "borderRadius": 0
       },
       {
        "paddingRight": 0,
        "layout": "absolute",
        "width": "27.805%",
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "minHeight": 1,
        "creationPolicy": "delayed",
        "id": "Container_474C01C8_4AA6_73BE_41B0_42F6E66589F6",
        "data": {
         "name": "Right container"
        },
        "borderSize": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "width": "100%",
          "paddingBottom": 0,
          "verticalAlign": "middle",
          "url": "skin/Image_474C01C8_4AA6_73BE_4198_63728D42FC19.png",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "class": "Image",
          "maxHeight": 600,
          "propagateClick": false,
          "horizontalAlign": "center",
          "top": "6.63%",
          "bottom": "58.73%",
          "id": "Image_474C01C8_4AA6_73BE_4198_63728D42FC19",
          "data": {
           "name": "Text img"
          },
          "minHeight": 1,
          "paddingLeft": 0,
          "borderSize": 0,
          "backgroundOpacity": 0,
          "left": "0%",
          "minWidth": 1,
          "borderRadius": 0
         },
         {
          "children": [
           {
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "layout": "horizontal",
            "paddingRight": 0,
            "paddingBottom": 0,
            "height": "25%",
            "overflow": "visible",
            "width": "100%",
            "scrollBarColor": "#000000",
            "verticalAlign": "top",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "backgroundColorRatios": [
             0,
             1
            ],
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "creationPolicy": "delayed",
            "id": "Container_470039F2_4AA2_3352_4188_8343FDAC53A2",
            "data": {
             "name": "Container Row 1"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0.3,
            "borderRadius": 0,
            "children": [
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0_rollover.jpg",
              "iconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0",
              "data": {
               "name": "IconButton_house"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": true,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             },
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5_rollover.jpg",
              "iconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5",
              "data": {
               "name": "IconButton_garden"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": false,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             }
            ],
            "minWidth": 1
           },
           {
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "layout": "horizontal",
            "paddingRight": 0,
            "paddingBottom": 0,
            "height": "25%",
            "overflow": "visible",
            "width": "100%",
            "scrollBarColor": "#000000",
            "verticalAlign": "top",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "backgroundColorRatios": [
             0,
             1
            ],
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "creationPolicy": "delayed",
            "id": "Container_470F7D71_4AA2_136E_41B0_AAAD0C68ACE5",
            "data": {
             "name": "Container Row 2"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0.3,
            "borderRadius": 0,
            "children": [
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814_rollover.jpg",
              "iconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814",
              "data": {
               "name": "IconButton_decoration"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": false,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             },
             {
              "paddingRight": 0,
              "rollOverIconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6_rollover.jpg",
              "iconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6.jpg",
              "width": 145,
              "paddingBottom": 0,
              "height": 82,
              "mode": "push",
              "verticalAlign": "middle",
              "paddingTop": 0,
              "shadow": false,
              "maxWidth": 145,
              "class": "IconButton",
              "maxHeight": 82,
              "propagateClick": false,
              "cursor": "hand",
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6",
              "data": {
               "name": "IconButton_Swimming"
              },
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": false,
              "backgroundOpacity": 0,
              "borderRadius": 0,
              "minWidth": 1
             }
            ],
            "minWidth": 1
           },
           {
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "layout": "horizontal",
            "paddingRight": 0,
            "paddingBottom": 0,
            "height": "25%",
            "overflow": "visible",
            "width": "100%",
            "scrollBarColor": "#000000",
            "verticalAlign": "top",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "backgroundColorRatios": [
             0,
             1
            ],
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "creationPolicy": "delayed",
            "id": "Container_44F91F72_4AA6_2F52_41C3_1B4514891167",
            "data": {
             "name": "Container Row 3"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0.3,
            "borderRadius": 0,
            "minWidth": 1
           }
          ],
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "layout": "vertical",
          "paddingRight": 0,
          "paddingBottom": 0,
          "height": "52.259%",
          "overflow": "visible",
          "width": "76.072%",
          "scrollBarColor": "#000000",
          "verticalAlign": "top",
          "paddingTop": 0,
          "backgroundColorDirection": "vertical",
          "shadow": false,
          "scrollBarMargin": 2,
          "gap": 10,
          "contentOpaque": false,
          "class": "Container",
          "backgroundColorRatios": [
           0,
           1
          ],
          "scrollBarOpacity": 0.5,
          "propagateClick": false,
          "scrollBarWidth": 10,
          "horizontalAlign": "center",
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "bottom": "6.63%",
          "id": "Container_472B38FC_4AAE_1156_41B3_4C1A1EC48ED3",
          "data": {
           "name": "Thumbs buttons container"
          },
          "borderSize": 0,
          "creationPolicy": "delayed",
          "paddingLeft": 0,
          "backgroundOpacity": 0.3,
          "minWidth": 1,
          "right": "11.47%",
          "borderRadius": 0
         }
        ],
        "minWidth": 1
       },
       {
        "children": [
         {
          "toolTipPaddingLeft": 6,
          "progressBorderSize": 0,
          "playbackBarHeadShadowVerticalLength": 0,
          "toolTipFontColor": "#606060",
          "toolTipBorderSize": 1,
          "paddingRight": 0,
          "progressBackgroundColorRatios": [
           0
          ],
          "paddingBottom": 0,
          "playbackBarLeft": 0,
          "toolTipDisplayTime": 600,
          "playbackBarHeadHeight": 15,
          "transitionDuration": 500,
          "progressBorderRadius": 0,
          "toolTipBorderColor": "#767676",
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "toolTipShadowOpacity": 1,
          "progressBarBorderColor": "#000000",
          "toolTipShadowHorizontalLength": 0,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "toolTipPaddingRight": 6,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadOpacity": 1,
          "playbackBarHeadShadowBlurRadius": 3,
          "progressBackgroundColorDirection": "vertical",
          "toolTipShadowSpread": 0,
          "playbackBarBottom": 0,
          "progressBorderColor": "#000000",
          "transitionMode": "blending",
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "toolTipFontWeight": "normal",
          "toolTipPaddingTop": 4,
          "toolTipOpacity": 1,
          "playbackBarHeight": 10,
          "minHeight": 1,
          "paddingLeft": 0,
          "playbackBarHeadWidth": 6,
          "toolTipFontFamily": "Arial",
          "playbackBarRight": 0,
          "minWidth": 1,
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "progressBarBorderSize": 0,
          "playbackBarProgressBorderSize": 0,
          "playbackBarBackgroundColorDirection": "vertical",
          "playbackBarProgressBorderRadius": 0,
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipTextShadowOpacity": 0,
          "toolTipBorderRadius": 3,
          "progressBarBorderRadius": 0,
          "playbackBarBorderRadius": 0,
          "height": "100%",
          "width": "100%",
          "toolTipTextShadowBlurRadius": 3,
          "playbackBarHeadBorderColor": "#000000",
          "playbackBarProgressBorderColor": "#000000",
          "playbackBarHeadBorderRadius": 0,
          "paddingTop": 0,
          "toolTipFontSize": 12,
          "toolTipFontStyle": "normal",
          "shadow": false,
          "progressLeft": 0,
          "playbackBarHeadBorderSize": 0,
          "playbackBarProgressOpacity": 1,
          "toolTipShadowBlurRadius": 3,
          "playbackBarBorderSize": 0,
          "class": "ViewerArea",
          "playbackBarBackgroundOpacity": 1,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "progressBottom": 2,
          "propagateClick": false,
          "progressHeight": 10,
          "top": "0%",
          "toolTipShadowColor": "#333333",
          "toolTipTextShadowColor": "#000000",
          "id": "ViewerAreaLabeled_451BE519_4B62_70DE_41C7_94BD7032FDA3",
          "playbackBarHeadShadowColor": "#000000",
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "borderSize": 0,
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "progressRight": 0,
          "progressBarBackgroundColorDirection": "vertical",
          "progressOpacity": 1,
          "playbackBarHeadShadowOpacity": 0.7,
          "toolTipShadowVerticalLength": 0,
          "left": "0%",
          "toolTipPaddingBottom": 4,
          "playbackBarHeadShadow": true,
          "playbackBarBorderColor": "#FFFFFF",
          "progressBackgroundOpacity": 1,
          "playbackBarOpacity": 1,
          "borderRadius": 0,
          "progressBarOpacity": 1,
          "playbackBarHeadShadowHorizontalLength": 0
         },
         {
          "paddingRight": 0,
          "layout": "horizontal",
          "width": "100%",
          "paddingBottom": 0,
          "height": "100%",
          "overflow": "scroll",
          "scrollBarColor": "#000000",
          "verticalAlign": "middle",
          "paddingTop": 0,
          "shadow": false,
          "scrollBarMargin": 2,
          "gap": 300,
          "contentOpaque": false,
          "class": "Container",
          "scrollBarOpacity": 0.5,
          "propagateClick": false,
          "scrollBarWidth": 10,
          "horizontalAlign": "center",
          "top": "0%",
          "creationPolicy": "delayed",
          "id": "Container_5B704147_4B62_30B2_41C7_41C4A6280806",
          "data": {
           "name": "Container buttons"
          },
          "minHeight": 1,
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "left": "0%",
          "borderRadius": 0,
          "children": [
           {
            "paddingRight": 0,
            "rollOverIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_rollover.png",
            "iconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177.png",
            "width": 50,
            "paddingBottom": 0,
            "height": 50,
            "mode": "push",
            "verticalAlign": "middle",
            "paddingTop": 0,
            "shadow": false,
            "maxWidth": 50,
            "class": "IconButton",
            "maxHeight": 50,
            "propagateClick": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "minHeight": 1,
            "id": "IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177",
            "data": {
             "name": "button <"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "pressedIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_pressed.png",
            "backgroundOpacity": 0,
            "transparencyActive": true,
            "borderRadius": 0,
            "minWidth": 1
           },
           {
            "paddingRight": 0,
            "layout": "absolute",
            "width": "70%",
            "paddingBottom": 0,
            "height": "30.12%",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "scrollBarWidth": 10,
            "verticalAlign": "top",
            "paddingTop": 0,
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "contentOpaque": false,
            "class": "Container",
            "scrollBarOpacity": 0.5,
            "propagateClick": false,
            "creationPolicy": "delayed",
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "id": "Container_5B3D27DD_4B61_FF56_41C7_13D4CF866C03",
            "data": {
             "name": "separator"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "minWidth": 1
           },
           {
            "paddingRight": 0,
            "rollOverIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_rollover.png",
            "iconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748.png",
            "width": 50,
            "paddingBottom": 0,
            "height": 50,
            "mode": "push",
            "verticalAlign": "middle",
            "paddingTop": 0,
            "shadow": false,
            "maxWidth": 50,
            "class": "IconButton",
            "maxHeight": 50,
            "propagateClick": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "minHeight": 1,
            "id": "IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748",
            "data": {
             "name": "button >"
            },
            "borderSize": 0,
            "paddingLeft": 0,
            "pressedIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_pressed.png",
            "backgroundOpacity": 0,
            "transparencyActive": true,
            "borderRadius": 0,
            "minWidth": 1
           }
          ],
          "minWidth": 1
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "layout": "absolute",
        "paddingRight": 0,
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "width": "72.402%",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "creationPolicy": "delayed",
        "id": "Container_474C01C8_4AA6_73BE_41C4_789A192CFF53",
        "data": {
         "name": "Container Viewer"
        },
        "minHeight": 1,
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0.3,
        "left": "0%",
        "minWidth": 1,
        "borderRadius": 0
       }
      ],
      "minWidth": 1
     }
    ],
    "minWidth": 1
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.5,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "layout": "horizontal",
    "width": 1450,
    "paddingBottom": 0,
    "height": 750,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_4169474A_4F02_D74E_41D2_8786E1AEB625",
    "data": {
     "name": "Container global"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 1,
    "borderRadius": 4,
    "children": [
     {
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "layout": "absolute",
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "94.868%",
      "overflow": "scroll",
      "width": "96.837%",
      "scrollBarColor": "#000000",
      "verticalAlign": "top",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "contentOpaque": false,
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "creationPolicy": "delayed",
      "id": "Container_4169474A_4F02_D74E_41C9_D049781FF241",
      "data": {
       "name": "Container content"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0.3,
      "borderRadius": 0,
      "children": [
       {
        "paddingRight": 0,
        "rollOverIconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450_rollover.png",
        "iconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450.png",
        "width": 24,
        "paddingBottom": 0,
        "height": 24,
        "mode": "push",
        "verticalAlign": "middle",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 24,
        "click": "this.setComponentVisibility(this.Container_4169474A_4F02_D74E_41C4_5387F4304140, false, 0, null, null, false)",
        "class": "IconButton",
        "maxHeight": 24,
        "propagateClick": false,
        "cursor": "hand",
        "top": "0%",
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "IconButton_4169474A_4F02_D74E_41D2_E2447B190450",
        "data": {
         "name": "X"
        },
        "borderSize": 0,
        "paddingLeft": 0,
        "transparencyActive": true,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "right": "0%",
        "borderRadius": 0
       },
       {
        "paddingRight": 0,
        "layout": "absolute",
        "width": "29.06%",
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "minHeight": 1,
        "creationPolicy": "delayed",
        "id": "Container_4169474A_4F02_D74E_41CC_AAA712A39B4C",
        "data": {
         "name": "Container right text"
        },
        "borderSize": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "width": "100%",
          "paddingBottom": 0,
          "verticalAlign": "middle",
          "url": "skin/Image_4169474A_4F02_D74E_418A_8DC243F4699E.png",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "class": "Image",
          "maxHeight": 600,
          "propagateClick": false,
          "horizontalAlign": "center",
          "top": "6.63%",
          "bottom": "17.77%",
          "id": "Image_4169474A_4F02_D74E_418A_8DC243F4699E",
          "data": {
           "name": "text image"
          },
          "minHeight": 1,
          "paddingLeft": 0,
          "borderSize": 0,
          "backgroundOpacity": 0,
          "left": "0%",
          "minWidth": 1,
          "borderRadius": 0
         },
         {
          "paddingRight": 0,
          "rollOverIconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4_rollover.png",
          "iconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4.png",
          "width": 135,
          "paddingBottom": 0,
          "height": 47,
          "mode": "push",
          "verticalAlign": "middle",
          "paddingTop": 0,
          "shadow": false,
          "maxWidth": 135,
          "click": "this.openLink(\"http://www.3dvista.com\", \"_blank\")",
          "class": "IconButton",
          "maxHeight": 47,
          "propagateClick": false,
          "cursor": "hand",
          "horizontalAlign": "center",
          "bottom": "12.45%",
          "id": "IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4",
          "data": {
           "name": "Button Book Now"
          },
          "minHeight": 1,
          "paddingLeft": 0,
          "borderSize": 0,
          "transparencyActive": false,
          "backgroundOpacity": 0,
          "left": "12.22%",
          "minWidth": 1,
          "borderRadius": 0
         }
        ],
        "minWidth": 1
       },
       {
        "children": [
         {
          "paddingRight": 0,
          "width": "100%",
          "paddingBottom": 0,
          "height": "100%",
          "verticalAlign": "middle",
          "url": "skin/Image_41194F8C_4F01_D7CA_41D0_80812518610D.jpg",
          "paddingTop": 0,
          "shadow": false,
          "scaleMode": "fit_to_height",
          "class": "Image",
          "propagateClick": false,
          "horizontalAlign": "center",
          "top": "0%",
          "id": "Image_41194F8C_4F01_D7CA_41D0_80812518610D",
          "data": {
           "name": "Image"
          },
          "minHeight": 1,
          "borderSize": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "left": "0%",
          "borderRadius": 0,
          "minWidth": 1
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "layout": "absolute",
        "paddingRight": 0,
        "paddingBottom": 0,
        "height": "100%",
        "overflow": "scroll",
        "width": "70.869%",
        "scrollBarColor": "#000000",
        "verticalAlign": "top",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "contentOpaque": false,
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
        "scrollBarOpacity": 0.5,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "horizontalAlign": "left",
        "top": "0%",
        "creationPolicy": "delayed",
        "id": "Container_4169474A_4F02_D74E_41D3_C66A0E7A6577",
        "data": {
         "name": "Container Img"
        },
        "minHeight": 1,
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0.3,
        "left": "0%",
        "minWidth": 1,
        "borderRadius": 0
       }
      ],
      "minWidth": 1
     }
    ],
    "minWidth": 1
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_4169474A_4F02_D74E_41C4_5387F4304140",
  "data": {
   "name": "---CONTACT"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.5,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontColor": "#606060",
      "toolTipBorderSize": 1,
      "paddingRight": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "playbackBarLeft": 0,
      "toolTipDisplayTime": 600,
      "playbackBarHeadHeight": 15,
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipPaddingRight": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "transitionMode": "blending",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipOpacity": 1,
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "playbackBarHeight": 10,
      "minHeight": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarRight": 0,
      "minWidth": 1,
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipBorderRadius": 3,
      "progressBarBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "shadow": false,
      "progressLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "playbackBarBorderSize": 0,
      "class": "ViewerArea",
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressBottom": 2,
      "propagateClick": false,
      "progressHeight": 10,
      "top": "0%",
      "toolTipShadowColor": "#333333",
      "bottom": "0%",
      "toolTipTextShadowColor": "#000000",
      "id": "MapViewer",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "left": "0%",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadow": true,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "right": "0%",
      "playbackBarOpacity": 1,
      "borderRadius": 0,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0
     },
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0_rollover.png",
      "iconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0.png",
      "width": 24,
      "paddingBottom": 0,
      "height": 24,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 24,
      "click": "this.setComponentVisibility(this.Container_B18B0BF2_A688_648E_41D5_25CC213E30D8, false, 0, null, null, false)",
      "class": "IconButton",
      "maxHeight": 24,
      "propagateClick": false,
      "cursor": "hand",
      "top": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0",
      "data": {
       "name": "X"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": 0,
      "borderRadius": 0
     }
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "layout": "absolute",
    "paddingRight": 30,
    "paddingBottom": 30,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "paddingTop": 30,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "top": "12%",
    "bottom": "12%",
    "id": "Container_BEFE9313_A688_258E_4198_33F6C1D0A579",
    "data": {
     "name": "Container global"
    },
    "minHeight": 1,
    "paddingLeft": 30,
    "creationPolicy": "delayed",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundOpacity": 1,
    "left": "15%",
    "minWidth": 1,
    "right": "15%",
    "borderRadius": 0
   }
  ],
  "backgroundColor": [
   "#000000"
  ],
  "layout": "absolute",
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_B18B0BF2_A688_648E_41D5_25CC213E30D8",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.7,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "paddingRight": 20,
  "width": "40.659%",
  "paddingBottom": 20,
  "height": "87.756%",
  "scrollBarColor": "#000000",
  "paddingTop": 20,
  "shadow": false,
  "click": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, this.effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A, 'hideEffect', false)",
  "scrollBarMargin": 2,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "visible": false,
  "top": "2.47%",
  "id": "HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>PARQUE PUENTE CIMBRA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:29px;font-family:Georgia, serif;\"><I>PRIMER VIADUCTO</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">El Puente Cimbra fue el primer viaducto que logr\u00f3 unir los sectores de Granallas, Quebrada de Herrera, Vicu\u00f1a y Guzmanes con el centro de Putaendo. Si bien no hay data exacta de la creaci\u00f3n de este puente colgante, hay datos que apuntan a finales del siglo XIX o principios del siglo XX</SPAN></SPAN></DIV></div>",
  "data": {
   "name": "puente"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 20,
  "backgroundOpacity": 0,
  "left": "1.75%",
  "borderRadius": 0,
  "minWidth": 1
 },
 {
  "paddingRight": 20,
  "width": "43.391%",
  "paddingBottom": 20,
  "height": "88.636%",
  "scrollBarColor": "#000000",
  "paddingTop": 20,
  "shadow": false,
  "click": "this.setComponentVisibility(this.HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123, false, 0, this.effect_1A687CB6_02B3_1A5A_4152_D6E0363828DD, 'hideEffect', false)",
  "scrollBarMargin": 2,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "visible": false,
  "top": "0%",
  "id": "HTMLText_12323DB3_0277_1A5B_414B_8B1DFF0A9123",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>IGLESIA SAN ANTONIO DE PADUA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:Georgia, serif;\"><I>LADRILLOS Y MADERA</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Esta parroquia de la di\u00f3cesis de San Felipe tiene su origen en 1729, casi 100 a\u00f1os antes de la independencia de Chile. Sacudida por el terremoto del 1965 fue reconstruida en una historia de mucho esfuerzo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> Cuenta la historia que el lugar donde se realizaban los primeros cultos era de totora y adobes de cal. Con el tiempo se fueron realizando arreglos hasta que finales del 1800 estaba hecha de ladrillos y madera, donde el pueblo Putaendino asist\u00eda con devoci\u00f3n.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">En el a\u00f1o 1965 el terremoto la da\u00f1\u00f3 y unos a\u00f1os despu\u00e9s fue declarada inhabitable. A partir de esto, tanto la Iglesia como al pueblo de Putaendo, realizaron un gran esfuerzo para reconstruir uno de los grandes s\u00edmbolos de su comuna. En 1990 qued\u00f3 lista la hermosa Parroquia, motivo de orgullo para el pueblo.</SPAN></SPAN></DIV></div>",
  "data": {
   "name": "Iglesia"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 20,
  "backgroundOpacity": 0,
  "left": "0%",
  "borderRadius": 0,
  "minWidth": 1
 },
 {
  "itemThumbnailWidth": 100,
  "layout": "horizontal",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 20,
  "paddingBottom": 10,
  "itemLabelFontStyle": "normal",
  "verticalAlign": "top",
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "backgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "itemPaddingTop": 3,
  "itemMode": "thumbnail-only",
  "scrollBarWidth": 10,
  "itemPaddingRight": 3,
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist",
  "itemThumbnailHeight": 75,
  "minHeight": 1,
  "paddingLeft": 20,
  "itemLabelFontFamily": "Arial",
  "itemOpacity": 1,
  "itemVerticalAlign": "middle",
  "itemBorderRadius": 0,
  "itemLabelPosition": "bottom",
  "backgroundOpacity": 0.2,
  "itemLabelGap": 5,
  "selectedItemLabelFontWeight": "bold",
  "minWidth": 1,
  "itemThumbnailShadow": true,
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundColor": [],
  "itemPaddingLeft": 3,
  "itemBackgroundColorRatios": [],
  "width": "99.749%",
  "height": 130,
  "itemPaddingBottom": 3,
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailOpacity": 1,
  "itemThumbnailBorderRadius": 5,
  "itemHorizontalAlign": "center",
  "backgroundColorDirection": "vertical",
  "rollOver": "this.setComponentVisibility(this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0, false, 0, this.effect_1505B9C3_0291_1A3B_4176_91AC933F53E5, 'hideEffect', false)",
  "paddingTop": 10,
  "shadow": false,
  "itemLabelTextDecoration": "none",
  "scrollBarMargin": 2,
  "itemThumbnailShadowBlurRadius": 4,
  "class": "ThumbnailList",
  "itemThumbnailShadowHorizontalLength": 3,
  "propagateClick": false,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "bottom": "8.52%",
  "id": "ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0",
  "itemThumbnailScaleMode": "fit_outside",
  "data": {
   "name": "LISTA"
  },
  "borderSize": 0,
  "itemLabelFontWeight": "normal",
  "itemBackgroundColorDirection": "vertical",
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "left": "0.04%",
  "borderRadius": 5,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowOpacity": 0.8
 },
 {
  "paddingRight": 20,
  "width": "47.724%",
  "paddingBottom": 20,
  "height": "53.409%",
  "scrollBarColor": "#000000",
  "paddingTop": 20,
  "shadow": false,
  "click": "this.setComponentVisibility(this.HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F, false, 0, this.effect_18FC46C0_0291_1636_4178_D42A4CC7C980, 'hideEffect', false)",
  "scrollBarMargin": 2,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "visible": false,
  "top": "2.33%",
  "id": "HTMLText_18CD9EDE_0291_17CA_4185_91CC7774B12F",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;font-family:Georgia, serif;\"><B>Parque Escult\u00f3rico Cementerio de Carretas</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:28px;\"><B><I>PATRIMONIO REGIONAL</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">A 200 metros de altura de Putaendo se encuentra esta muestra que parti\u00f3 con la donaci\u00f3n de cuatro carretas y que hoy ya alberga, en una planicie de 16 hect\u00e1reas, a 51 esculturas, fruto de tres encuentros escult\u00f3ricos que se han realizado en el mismo lugar, con la participaci\u00f3n de artistas venidos desde diversas partes del mundo.</SPAN></SPAN></DIV></div>",
  "data": {
   "name": "El llano"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 20,
  "backgroundOpacity": 0,
  "left": "0.93%",
  "borderRadius": 0,
  "minWidth": 1
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "class": "UIComponent",
  "backgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "visible": false,
  "top": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent42989"
  },
  "minHeight": 0,
  "paddingLeft": 0,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "borderSize": 0,
  "backgroundOpacity": 0.55,
  "left": 0,
  "minWidth": 0,
  "right": 0,
  "borderRadius": 0
 },
 {
  "backgroundColor": [],
  "paddingRight": 0,
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "backgroundColorRatios": [],
  "propagateClick": false,
  "visible": false,
  "top": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage42990"
  },
  "minHeight": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "backgroundOpacity": 1,
  "left": 0,
  "minWidth": 0,
  "right": 0,
  "borderRadius": 0
 },
 {
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontColor": "#FFFFFF",
  "layout": "horizontal",
  "paddingRight": 5,
  "paddingBottom": 5,
  "fontSize": 12,
  "mode": "push",
  "rollOverIconColor": "#666666",
  "textDecoration": "none",
  "verticalAlign": "middle",
  "fontFamily": "Arial",
  "iconHeight": 20,
  "paddingTop": 5,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "fontStyle": "normal",
  "iconWidth": 20,
  "gap": 5,
  "fontWeight": "normal",
  "class": "CloseButton",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "propagateClick": false,
  "cursor": "hand",
  "visible": false,
  "top": 10,
  "horizontalAlign": "center",
  "minHeight": 0,
  "pressedIconColor": "#888888",
  "id": "closeButtonPopupPanorama",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "paddingLeft": 5,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "shadowSpread": 1,
  "borderColor": "#000000",
  "shadowColor": "#000000",
  "data": {
   "name": "CloseButton42991"
  },
  "backgroundOpacity": 0.3,
  "iconColor": "#000000",
  "iconBeforeLabel": true,
  "minWidth": 0,
  "right": 10,
  "borderRadius": 0,
  "label": "",
  "iconLineWidth": 5
 }
], 
 "layout": "absolute",
 "paddingRight": 0,
 "paddingBottom": 0,
 "height": "100%",
 "overflow": "visible",
 "width": "100%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "gap": 10,
 "contentOpaque": false,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "data": {
  "name": "Player20898"
 },
 "borderSize": 0,
 "paddingLeft": 0,
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
 "start": "this.syncPlaylists([this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist,this.ThumbnailList_178E9A94_02BF_1E5E_4161_F5F6F28B41B0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E].forEach(function(component) { component.set('visible', false); }) }",
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; }
 },
 "minWidth": 20,
 "mouseWheelEnabled": true
})