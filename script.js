TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonStop": [
   {
    "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D_rollover.png",
    "right": "0%",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 24,
    "height": 24,
    "mode": "push",
    "maxHeight": 24,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D.png",
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "top": "0%",
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "X"
    },
    "horizontalAlign": "center",
    "maxWidth": 24,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 40,
    "height": 40,
    "mode": "push",
    "maxHeight": 80,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0.png",
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_ECB4524F_E163_9AF0_41E5_60E049D28740, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "top": 20,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "IconButton X"
    },
    "horizontalAlign": "center",
    "maxWidth": 80,
    "left": 20,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "class": "VideoPlayer"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": {
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
   "fontFamily": "Arial",
   "opacity": 0.4,
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "id": "Menu_164B4A59_012F_4B39_4172_33511C678876",
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020"
  },
  "frames": [
   {
    "overlays": [
     {
      "bleachingDistance": 0.64,
      "id": "overlay_E56B8391_FD83_162E_41DD_3D1724CB6C38",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.21,
      "yaw": -131.95,
      "pitch": 38.93
     },
     {
      "hfov": 45.6,
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_tcap0",
      "angle": 0,
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
      }
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'borderColor':'#000000','borderSize':0,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'paddingTop':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','iconWidth':20,'pressedIconLineWidth':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingBottom':5,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000'}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E2EE4A9F_FD81_1653_41EB_EA207627AD4D",
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
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "yaw": 91.89,
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
      "popupMaxWidth": "80%",
      "hfov": 6.69,
      "rotationZ": 0,
      "id": "popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "popupMaxHeight": "80%",
      "rotationY": 0,
      "pitch": 8.64
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'borderColor':'#000000','borderSize':0,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'paddingTop':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','iconWidth':20,'pressedIconLineWidth':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingBottom':5,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000'}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E27C5582_FDBF_122D_41EB_A27AB7E62A11",
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
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "yaw": -63.78,
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
      "popupMaxWidth": "80%",
      "hfov": 6.64,
      "rotationZ": 0,
      "id": "popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "popupMaxHeight": "80%",
      "rotationY": 0,
      "pitch": 11.32
     }
    ],
    "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F17AF415_FD81_1256_41EB_D309B024A781_t.jpg",
  "label": "Parque Puente Cimbra",
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "buttonCardboardView": "this.IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "buttonStop": [
   "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonToggleHotspots": {
   "pressedIconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733_pressed.png",
   "borderSize": 0,
   "paddingTop": 0,
   "width": 37,
   "height": 31,
   "mode": "toggle",
   "maxHeight": 31,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "cursor": "hand",
   "id": "IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
   "class": "IconButton",
   "minWidth": 1,
   "data": {
    "name": "button show hotspots"
   },
   "horizontalAlign": "center",
   "maxWidth": 37,
   "transparencyActive": true,
   "minHeight": 1,
   "propagateClick": false,
   "paddingLeft": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 171.85,
   "pitch": -10.52
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
  "frames": [
   {
    "overlays": [
     {
      "hfov": 45.6,
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_tcap0",
      "angle": 0,
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
      }
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794, {'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'borderColor':'#000000','borderSize':0,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'paddingTop':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','iconWidth':20,'pressedIconLineWidth':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingBottom':5,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000'}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E4A97113_FD83_3252_41E4_DA0F70DA88F6",
      "items": [
       {
        "yaw": 135.48,
        "hfov": 5.45,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 130,
           "width": 130,
           "url": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 36.44
       }
      ]
     },
     {
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "yaw": 135.48,
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
      "popupMaxWidth": "80%",
      "hfov": 5.36,
      "rotationZ": 0,
      "id": "popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "popupMaxHeight": "80%",
      "rotationY": 0,
      "pitch": 36.44
     }
    ],
    "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_t.jpg",
  "label": "Plaza de Armas",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 124,
   "yaw": 166.76,
   "pitch": 3.02
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
  "frames": [
   {
    "overlays": [
     {
      "hfov": 45.6,
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_tcap0",
      "angle": 0,
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
      }
     }
    ],
    "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_t.jpg",
  "label": "Calle Chacabuco/Salinas",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.37,
   "pitch": -2.65
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
  "frames": [
   {
    "overlays": [
     {
      "hfov": 45.6,
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_tcap0",
      "angle": 0,
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
      }
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_F09BE238_FD81_765E_41DD_692A05D67004, this.camera_16596A78_012F_4B07_417D_78ACD9BED90A); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_12D4EBB2_0163_C90B_417A_34B0ACAC2166",
      "items": [
       {
        "yaw": -20.49,
        "hfov": 7.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "AnimatedImageResource",
         "frameDuration": 76,
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -17.14
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1BD9F817_0161_F709_416A_1F2A176825A9",
      "items": [
       {
        "yaw": 165.31,
        "hfov": 7.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "AnimatedImageResource",
         "frameDuration": 76,
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.06
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
  "label": "Calle Comercio",
  "adjacentPanoramas": [
   {
    "backwardYaw": -113.36,
    "yaw": -20.49,
    "panorama": {
     "vfov": 180,
     "hfovMax": 130,
     "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004",
     "hfov": 360,
     "partial": false,
     "class": "Panorama",
     "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "1"
         },
         "areas": [
          {
           "mapColor": "image",
           "click": "this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_12776E98_0161_CB07_4158_632F68287054",
         "items": [
          {
           "yaw": 67.7,
           "hfov": 7.67,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "AnimatedImageResource",
            "frameDuration": 76,
            "colCount": 24,
            "rowCount": 1,
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.1
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "1"
         },
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB, this.camera_1650FA87_012F_4B08_415C_F5E8E402A21E); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_1446FA86_0163_4B0B_417D_4E5F56B55DB9",
         "items": [
          {
           "yaw": -113.36,
           "hfov": 7.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "AnimatedImageResource",
            "frameDuration": 76,
            "colCount": 24,
            "rowCount": 1,
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.37
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
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
       "class": "SphericPanoramaFrame"
      }
     ],
     "pitch": 0,
     "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
     "label": "Calle Comercio Vista 2",
     "adjacentPanoramas": [
      {
       "backwardYaw": -20.49,
       "yaw": -113.36,
       "panorama": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "hfovMin": 60
    },
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": -12.07,
   "pitch": -8.98
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_F09BE238_FD81_765E_41DD_692A05D67004",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": 68.74,
   "pitch": -7.49
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674, this.camera_16295A97_012F_4B09_4135_6AF94F5C314C); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_12329761_016E_D909_4167_C240BA83D0B1",
      "items": [
       {
        "yaw": 56.31,
        "hfov": 7.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "AnimatedImageResource",
         "frameDuration": 76,
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.61
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_14D70DCF_0163_4919_4133_581227E908C0",
      "items": [
       {
        "yaw": -121.46,
        "hfov": 7.54,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "AnimatedImageResource",
         "frameDuration": 76,
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -15.21
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_t.jpg",
  "label": "Calle Comercio/Aspee",
  "adjacentPanoramas": [
   {
    "backwardYaw": -99.22,
    "yaw": 56.31,
    "panorama": {
     "vfov": 180,
     "hfovMax": 131,
     "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
     "hfov": 360,
     "partial": false,
     "class": "Panorama",
     "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "1"
         },
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF, this.camera_1644CA68_012F_4B07_417E_2D8F16842268); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_159EA224_016F_BB0F_40CA_E4C293003800",
         "items": [
          {
           "yaw": -99.22,
           "hfov": 7.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "AnimatedImageResource",
            "frameDuration": 76,
            "colCount": 24,
            "rowCount": 1,
            "levels": [
             {
              "height": 90,
              "width": 2400,
              "url": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.37
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
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
       "class": "SphericPanoramaFrame"
      }
     ],
     "pitch": 0,
     "thumbnailUrl": "media/panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_t.jpg",
     "label": "Calle Comercio/O'Higgins",
     "adjacentPanoramas": [
      {
       "backwardYaw": 56.31,
       "yaw": -99.22,
       "panorama": "this.panorama_0AF76847_0122_D709_4170_01CE1C8C62AF",
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "hfovMin": 60
    },
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_0AF76847_0122_D709_4170_01CE1C8C62AF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 60.66,
   "pitch": 2.69
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_10D83A9C_0121_CB3F_414B_D54F296D0674",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_10D83A9C_0121_CB3F_414B_D54F296D0674_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 126,
   "yaw": 73.18,
   "pitch": -0.66
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_t.jpg",
  "label": "Parque Cementerio de Carretas",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 123,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 130,
  "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
  "hfov": 360,
  "partial": false,
  "class": "Panorama",
  "cardboardMenu": "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
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
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_13F18D71_0161_4909_4169_02E1CFF660CD_t.jpg",
  "label": "El Llano",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 124,
   "yaw": -25.04,
   "pitch": -21.66
  },
  "class": "PanoramaCamera"
 },
 {
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "end": "this.trigger('tourEnded')"
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
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, true, -1, this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, -1, this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 1, 2)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 2, 3)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 3, 4)",
    "media": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
    "camera": "this.panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 7, 8)",
    "media": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A",
    "camera": "this.panorama_108CF7FC_0126_B8FF_4174_5F61AF785D9A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 8, 0)",
    "media": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD",
    "camera": "this.panorama_13F18D71_0161_4909_4169_02E1CFF660CD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
  "class": "PlayList"
 },
 {
  "thumbnailUrl": "media/video_14170593_0126_B908_417A_E645964470E6_t.jpg",
  "label": "Territorios - Putaendo",
  "video": {
   "height": 720,
   "mp4Url": "media/video_14170593_0126_B908_417A_E645964470E6.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_14170593_0126_B908_417A_E645964470E6",
  "loop": false,
  "height": 720,
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
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_16622A49_012F_4B19_4166_E44746A25594, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_16622A49_012F_4B19_4166_E44746A25594, 0, this.video_14170593_0126_B908_417A_E645964470E6)"
   }
  ],
  "id": "playList_16622A49_012F_4B19_4166_E44746A25594",
  "class": "PlayList"
 },
 "this.Menu_164B4A59_012F_4B39_4172_33511C678876",
 {
  "easing": "linear",
  "id": "effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
 "this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
 "this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
 {
  "automaticZoomSpeed": 10,
  "id": "camera_1644CA68_012F_4B07_417E_2D8F16842268",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.69,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_16596A78_012F_4B07_417D_78ACD9BED90A",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": 66.64,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_1650FA87_012F_4B08_415C_F5E8E402A21E",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": 159.51,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_16295A97_012F_4B09_4135_6AF94F5C314C",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 126,
   "yaw": 80.78,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
 "this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD"
], "children": [
 {
  "progressRight": 0,
  "propagateClick": false,
  "progressOpacity": 1,
  "minHeight": 50,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 10,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "shadow": false,
  "paddingRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBorderRadius": 0,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "class": "ViewerArea",
  "progressHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "minWidth": 100,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 10,
  "toolTipShadowColor": "#333333",
  "playbackBarHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "toolTipOpacity": 0.7,
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "paddingTop": 0,
  "transitionDuration": 500,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressLeft": 0,
  "playbackBarRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderRadius": 0,
  "playbackBarLeft": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "top": 0,
  "bottom": "0%",
  "toolTipBorderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 12,
  "playbackBarBackgroundOpacity": 1,
  "toolTipDisplayTime": 600,
  "toolTipFontSize": 17,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 0,
  "left": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "transitionMode": "blending",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "toolTipPaddingRight": 12,
  "paddingLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "right": "0%",
  "toolTipFontFamily": "Georgia"
 },
 {
  "borderSize": 0,
  "paddingTop": 0,
  "width": "100%",
  "height": "15%",
  "maxHeight": 163,
  "borderRadius": 0,
  "url": "skin/Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "scaleMode": "fill",
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "bottom": 0.03,
  "id": "Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA",
  "class": "Image",
  "minWidth": 1,
  "data": {
   "name": "Gradient"
  },
  "horizontalAlign": "center",
  "maxWidth": 1918,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0
 },
 {
  "children": [
   {
    "rollOverIconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 82,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3.png",
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button location"
    },
    "horizontalAlign": "center",
    "maxWidth": 82,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 121,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1.png",
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button panorama"
    },
    "horizontalAlign": "center",
    "maxWidth": 121,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 118,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF.png",
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_36E95081_3D34_41B1_41C9_9B9F5C2F03EF",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button video gallery"
    },
    "horizontalAlign": "center",
    "maxWidth": 118,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 90,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "visible": false,
    "id": "IconButton_36C4E214_3D35_C0D7_41BE_5BFBDAA0B9D0",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button 360 video"
    },
    "horizontalAlign": "center",
    "maxWidth": 97,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 106,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3.png",
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false); this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, null, null, false)",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_36CCA32A_3D34_40F3_41C0_57F95AF693E3",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button photoalbum"
    },
    "horizontalAlign": "center",
    "maxWidth": 115,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 82,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "visible": false,
    "id": "IconButton_36CC10CA_3D34_41B3_4193_9E38E01CFEAD",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button livepano"
    },
    "horizontalAlign": "center",
    "maxWidth": 82,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   },
   {
    "rollOverIconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 76,
    "height": 33,
    "mode": "push",
    "maxHeight": 33,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483.png",
    "backgroundOpacity": 0,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\")",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button contact"
    },
    "horizontalAlign": "center",
    "maxWidth": 141,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 1650,
  "height": 50,
  "borderRadius": 0,
  "gap": 12,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "bottom": "0%",
  "id": "Container_3649275E_3D3B_CF53_41C6_1DC9976EFC78",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "-- Main Button Set"
  },
  "horizontalAlign": "left",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 20,
  "scrollBarMargin": 2
 },
 {
  "borderSize": 0,
  "paddingTop": 0,
  "width": "100%",
  "height": "0.22%",
  "maxHeight": 2,
  "borderRadius": 0,
  "url": "skin/Image_3117F852_3D1C_4153_41C7_F45A80F07BAF.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "scaleMode": "fit_to_width",
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "bottom": 52,
  "id": "Image_3117F852_3D1C_4153_41C7_F45A80F07BAF",
  "class": "Image",
  "minWidth": 1,
  "data": {
   "name": "white line"
  },
  "horizontalAlign": "center",
  "maxWidth": 1918,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0
 },
 {
  "rollOverIconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1_rollover.png",
  "right": 20,
  "borderSize": 0,
  "paddingTop": 0,
  "width": 49,
  "height": 37,
  "mode": "push",
  "maxHeight": 37,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "cursor": "hand",
  "bottom": 7,
  "id": "IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "class": "IconButton",
  "minWidth": 1,
  "data": {
   "name": "IconButton VR"
  },
  "horizontalAlign": "center",
  "maxWidth": 49,
  "transparencyActive": false,
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0
 },
 {
  "children": [
   {
    "borderSize": 0,
    "paddingTop": 0,
    "width": 571,
    "height": 103,
    "maxHeight": 103,
    "borderRadius": 0,
    "url": "skin/Image_5AA7538E_5272_07D3_4182_395FFD794174.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "shadow": false,
    "paddingRight": 0,
    "top": "0%",
    "verticalAlign": "middle",
    "visible": false,
    "id": "Image_5AA7538E_5272_07D3_4182_395FFD794174",
    "class": "Image",
    "minWidth": 1,
    "data": {
     "name": "T01"
    },
    "horizontalAlign": "center",
    "maxWidth": 571,
    "left": "0.11%",
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 577,
  "height": 108,
  "borderRadius": 0,
  "gap": 10,
  "layout": "absolute",
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": 15,
  "verticalAlign": "top",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "id": "Container_5A4FF621_5292_00D1_41C0_CD8A96F5E4AB",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "- Container Title"
  },
  "horizontalAlign": "left",
  "left": 17,
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "children": [
     {
      "rollOverIconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E_rollover.png",
      "borderSize": 0,
      "paddingTop": 0,
      "width": 60,
      "height": 60,
      "mode": "push",
      "maxHeight": 60,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, false, 3500, null, 'hideEffect', false)",
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "settings button"
      },
      "horizontalAlign": "center",
      "maxWidth": 60,
      "transparencyActive": false,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 110,
    "height": 110,
    "borderRadius": 0,
    "gap": 10,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "top": "0%",
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "id": "Container_57887AFF_5C94_8D2C_41D1_D25764D9D6F5",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "container setting button"
    },
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "right": "0%",
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minHeight": 1
   },
   {
    "children": [
     {
      "borderSize": 0,
      "paddingTop": 0,
      "width": 37,
      "height": 31,
      "mode": "push",
      "maxHeight": 31,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "visible": false,
      "id": "IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "button floorplan"
      },
      "horizontalAlign": "center",
      "maxWidth": 37,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     },
     {
      "borderSize": 0,
      "paddingTop": 0,
      "width": 37,
      "height": 31,
      "mode": "push",
      "maxHeight": 31,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "visible": false,
      "id": "IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "button share"
      },
      "horizontalAlign": "center",
      "maxWidth": 37,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     },
     "this.IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
     {
      "pressedIconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D_pressed.png",
      "borderSize": 0,
      "paddingTop": 0,
      "width": 37,
      "height": 31,
      "mode": "toggle",
      "maxHeight": 31,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "button mute"
      },
      "horizontalAlign": "center",
      "maxWidth": 37,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     },
     {
      "pressedIconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E_pressed.png",
      "borderSize": 0,
      "paddingTop": 0,
      "width": 37,
      "height": 31,
      "mode": "toggle",
      "maxHeight": 31,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "button fullscreen"
      },
      "horizontalAlign": "center",
      "maxWidth": 37,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingTop": 0,
    "width": "60.857%",
    "height": "100%",
    "borderRadius": 0,
    "gap": 3,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "top": "0%",
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "visible": false,
    "id": "Container_50C22332_5CED_8334_41D2_0EC5525522E0",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Hide buttons set"
    },
    "horizontalAlign": "right",
    "left": "12.8%",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 350,
  "height": 110,
  "borderRadius": 0,
  "gap": 10,
  "layout": "absolute",
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "top",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "id": "Container_5791757B_5C95_8734_4195_AD2599C9941B",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "-- Settings button set"
  },
  "horizontalAlign": "left",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1
 },
 {
  "children": [
   {
    "rollOverIconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB_rollover.png",
    "borderSize": 0,
    "paddingTop": 0,
    "width": 144,
    "height": 60,
    "mode": "push",
    "maxHeight": 60,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB.png",
    "backgroundOpacity": 0,
    "click": "this.setMediaBehaviour(this.playList_16622A49_012F_4B19_4166_E44746A25594, 0); this.MainViewerVideoPlayer.play()",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "id": "IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB",
    "class": "IconButton",
    "minWidth": 1,
    "data": {
     "name": "button intro video"
    },
    "horizontalAlign": "center",
    "maxWidth": 144,
    "transparencyActive": true,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 213,
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 27,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "id": "Container_53346047_5A6C_DD58_41B9_B595FF015610",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "--Intro video"
  },
  "horizontalAlign": "right",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       {
        "borderSize": 0,
        "paddingTop": 0,
        "width": "100%",
        "height": "100%",
        "maxHeight": 948,
        "borderRadius": 0,
        "url": "skin/Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D.jpg",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "scaleMode": "fit_outside",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "middle",
        "id": "Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D",
        "class": "Image",
        "minWidth": 1,
        "data": {
         "name": "img photo"
        },
        "horizontalAlign": "center",
        "maxWidth": 1264,
        "left": "0%",
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#000000",
       "#333333"
      ],
      "paddingTop": 0,
      "width": "62%",
      "height": "100%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "absolute",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 1,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "top": "0%",
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       1,
       1
      ],
      "id": "Container_85A03C4E_A12F_4591_41DA_1C4E96B3B699",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "left"
      },
      "horizontalAlign": "left",
      "scrollBarOpacity": 0.5,
      "left": "0%",
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     },
     {
      "children": [
       {
        "borderSize": 0,
        "paddingTop": 0,
        "width": "90%",
        "height": "90%",
        "borderRadius": 0,
        "url": "skin/Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944.jpg",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "scaleMode": "fit_inside",
        "shadow": false,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "id": "Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944",
        "class": "Image",
        "minWidth": 500,
        "data": {
         "name": "img text"
        },
        "horizontalAlign": "center",
        "maxWidth": 712,
        "minHeight": 500,
        "propagateClick": false,
        "paddingLeft": 0
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 20,
      "width": "54%",
      "height": "100%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "vertical",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 1,
      "paddingBottom": 20,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 50,
      "top": "0%",
      "verticalAlign": "middle",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#E7392B",
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_85A01C4E_A12F_4591_41E3_CE0B8DD057F5",
      "class": "Container",
      "minWidth": 600,
      "data": {
       "name": "right"
      },
      "horizontalAlign": "center",
      "scrollBarOpacity": 0.5,
      "right": "0%",
      "propagateClick": false,
      "paddingLeft": 50,
      "scrollBarMargin": 2,
      "minHeight": 500
     },
     {
      "rollOverIconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB_rollover.png",
      "right": 20,
      "borderSize": 0,
      "paddingTop": 0,
      "width": 24,
      "height": 24,
      "mode": "push",
      "maxHeight": 120,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4, false, 0, null, null, false)",
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "top": 20,
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB",
      "class": "IconButton",
      "minWidth": 30,
      "data": {
       "name": "x"
      },
      "horizontalAlign": "center",
      "maxWidth": 120,
      "transparencyActive": true,
      "minHeight": 30,
      "propagateClick": false,
      "paddingLeft": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#333333",
     "#333333"
    ],
    "paddingTop": 0,
    "layout": "absolute",
    "borderRadius": 0,
    "gap": 10,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "top": "8%",
    "verticalAlign": "top",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#F10A00",
    "backgroundColorRatios": [
     0,
     1
    ],
    "bottom": "8%",
    "id": "Container_85A02C4E_A12F_4591_41DC_68C7D63D67D7",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "left": "6%",
    "right": "6%",
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minHeight": 1
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "layout": "absolute",
  "borderRadius": 0,
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.6,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "top",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "bottom": "0%",
  "id": "Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4",
  "class": "Container",
  "visible": false,
  "minWidth": 1,
  "data": {
   "name": "---INFO"
  },
  "horizontalAlign": "left",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "right": "0%",
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       {
        "rollOverIconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA_rollover.png",
        "right": "0%",
        "borderSize": 0,
        "paddingTop": 0,
        "width": 24,
        "height": 24,
        "mode": "push",
        "maxHeight": 24,
        "borderRadius": 0,
        "iconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA.png",
        "backgroundOpacity": 0,
        "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, false, 0, null, null, false)",
        "paddingBottom": 0,
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "middle",
        "cursor": "hand",
        "id": "IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA",
        "class": "IconButton",
        "minWidth": 1,
        "data": {
         "name": "X"
        },
        "horizontalAlign": "center",
        "maxWidth": 24,
        "transparencyActive": true,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0
       },
       {
        "children": [
         {
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "maxHeight": 600,
          "borderRadius": 0,
          "url": "skin/Image_57432561_4314_C371_41B5_DB85A77FA6FA.jpg",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingRight": 0,
          "top": "6.63%",
          "verticalAlign": "middle",
          "bottom": "3.01%",
          "id": "Image_57432561_4314_C371_41B5_DB85A77FA6FA",
          "class": "Image",
          "visible": false,
          "minWidth": 1,
          "data": {
           "name": "text img"
          },
          "horizontalAlign": "center",
          "maxWidth": 402,
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingTop": 0,
        "width": "10.18%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "visible": false,
        "id": "Container_559E5E68_431D_C17F_41BA_D57BAC710E9E",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "container text"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "right": "0%",
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2,
        "minHeight": 1
       },
       {
        "children": [
         {
          "insetBorder": false,
          "borderSize": 0,
          "backgroundColor": [
           "#FFFFFF"
          ],
          "paddingTop": 0,
          "width": "100%",
          "height": "100%",
          "borderRadius": 0,
          "url": "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13440.961761524723!2d-70.7243282164782!3d-32.626419896281845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x968871396691cee3%3A0x49116fdf72bc08e9!2sPutaendo%2C%20Valpara%C3%ADso%2C%20Chile!3m2!1d-32.628461!2d-70.7177434!5e0!3m2!1ses-419!2sru!4v1597687621391!5m2!1ses-419!2sru\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
          "backgroundColorDirection": "vertical",
          "backgroundOpacity": 1,
          "paddingBottom": 0,
          "shadow": false,
          "paddingRight": 0,
          "top": "0%",
          "scrollEnabled": false,
          "backgroundColorRatios": [
           0
          ],
          "id": "WebFrame_57792F91_436F_DFD1_41BE_B9C240373A43",
          "class": "WebFrame",
          "minWidth": 1,
          "data": {
           "name": "WebFrame"
          },
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "width": "68.896%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_5555E455_436C_4151_41CC_029603B5193B",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container webframe"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "left": "0%",
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "width": "96.837%",
      "height": "94.868%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "absolute",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_55BED378_431C_475F_41C0_B13F978722EA",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "horizontalAlign": "left",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "width": 800,
    "height": 600,
    "borderRadius": 4,
    "gap": 10,
    "layout": "horizontal",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_55E3858B_4314_C3B1_4199_F7924E88ECBA",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Location global"
    },
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.5,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_55273B39_437C_40D1_41B7_C9815CF1926F",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "UBICACI\u00d3N"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "children": [
     {
      "rollOverIconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307_rollover.png",
      "right": "1.43%",
      "borderSize": 0,
      "paddingTop": 0,
      "width": 24,
      "height": 24,
      "mode": "push",
      "maxHeight": 24,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, false, 0, null, null, false)",
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "top": "2.5%",
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "X"
      },
      "horizontalAlign": "center",
      "maxWidth": 24,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     },
     {
      "children": [
       {
        "borderSize": 0,
        "paddingTop": 0,
        "width": "85.4%",
        "height": "14%",
        "maxHeight": 41,
        "borderRadius": 0,
        "url": "skin/Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583.png",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "scaleMode": "fit_outside",
        "shadow": false,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "id": "Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583",
        "class": "Image",
        "minWidth": 1,
        "data": {
         "name": "Text image"
        },
        "horizontalAlign": "left",
        "maxWidth": 1133,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0
       },
       {
        "children": [
         {
          "scrollBarVisible": "rollOver",
          "backgroundColor": [
           "#FFFFFF"
          ],
          "itemHorizontalAlign": "center",
          "itemBackgroundColorDirection": "vertical",
          "borderRadius": 5,
          "itemBackgroundColor": [],
          "itemLabelHorizontalAlign": "center",
          "backgroundOpacity": 0.2,
          "itemLabelPosition": "bottom",
          "itemLabelFontFamily": "Georgia",
          "itemMinHeight": 50,
          "itemBorderRadius": 0,
          "itemPaddingTop": 3,
          "shadow": false,
          "paddingRight": 20,
          "selectedItemLabelFontWeight": "bold",
          "rollOverItemLabelFontColor": "#000000",
          "scrollBarColor": "#FFFFFF",
          "backgroundColorRatios": [
           0
          ],
          "itemThumbnailShadow": false,
          "class": "ThumbnailGrid",
          "itemBackgroundOpacity": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "itemThumbnailWidth": 200,
          "rollOverItemLabelFontWeight": "bold",
          "itemMinWidth": 50,
          "scrollBarMargin": 2,
          "itemLabelFontColor": "#333333",
          "itemHeight": 150,
          "itemOpacity": 1,
          "itemLabelGap": 7,
          "borderSize": 0,
          "itemThumbnailBorderRadius": 0,
          "itemVerticalAlign": "middle",
          "paddingTop": 14,
          "width": "100%",
          "itemPaddingLeft": 3,
          "selectedItemLabelFontStyle": "italic",
          "itemThumbnailOpacity": 1,
          "gap": 25,
          "height": "90%",
          "itemPaddingRight": 3,
          "backgroundColorDirection": "vertical",
          "scrollBarWidth": 10,
          "itemThumbnailScaleMode": "fit_outside",
          "itemLabelFontWeight": "normal",
          "itemMaxHeight": 1000,
          "paddingBottom": 10,
          "itemPaddingBottom": 3,
          "verticalAlign": "top",
          "itemLabelTextDecoration": "none",
          "itemWidth": 206,
          "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9",
          "itemLabelFontStyle": "normal",
          "selectedItemLabelFontColor": "#99BB1B",
          "data": {
           "name": "ThumbnailList"
          },
          "itemMode": "normal",
          "horizontalAlign": "left",
          "itemBackgroundColorRatios": [],
          "itemThumbnailHeight": 116,
          "minHeight": 1,
          "itemMaxWidth": 1000,
          "propagateClick": false,
          "paddingLeft": 20,
          "playList": "this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
          "itemLabelFontSize": 14
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "width": "89.619%",
        "height": "83.135%",
        "borderRadius": 0,
        "gap": 13,
        "layout": "horizontal",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_2E0D0306_3D14_C0B3_41A4_18E077CBEE3C",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container Thumblist"
        },
        "horizontalAlign": "center",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "width": "100%",
      "height": "88%",
      "borderRadius": 0,
      "gap": 20,
      "layout": "vertical",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       0,
       1
      ],
      "bottom": "0%",
      "id": "Container_2ED71618_3D14_C0DF_418D_C2F178EFBCA8",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "Container thumblist"
      },
      "horizontalAlign": "center",
      "scrollBarOpacity": 0.5,
      "left": "0%",
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "width": 1050,
    "height": 580,
    "borderRadius": 4,
    "gap": 10,
    "layout": "absolute",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "top",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_2E9E35C8_3D1C_43BF_41B7_13BBE9E68CEB",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 11,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.5,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "---PANORAMA LIST"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
       {
        "children": [
         {
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "maxHeight": 600,
          "borderRadius": 0,
          "url": "skin/Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C.png",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingRight": 0,
          "top": "6.63%",
          "verticalAlign": "middle",
          "bottom": "58.73%",
          "id": "Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C",
          "class": "Image",
          "minWidth": 1,
          "data": {
           "name": "VideoGallery text"
          },
          "horizontalAlign": "center",
          "maxWidth": 402,
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         },
         {
          "children": [
           {
            "children": [
             {
              "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663.jpg",
              "backgroundOpacity": 0,
              "click": "this.setComponentVisibility(this.Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18, false, 0, null, null, false)",
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton intro"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": true,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             },
             {
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton snorkel"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": false,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             }
            ],
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "paddingTop": 0,
            "width": "100%",
            "height": "22.4%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "horizontal",
            "backgroundColorDirection": "vertical",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.3,
            "paddingBottom": 0,
            "overflow": "visible",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "backgroundColorRatios": [
             0,
             1
            ],
            "id": "Container_5EE70B15_547D_F3EC_41A2_874A2F889A29",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "Row 1"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           },
           {
            "children": [
             {
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton folklore"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": false,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             },
             {
              "rollOverIconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton empty"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": false,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             }
            ],
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "paddingTop": 0,
            "width": "100%",
            "height": "22.4%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "horizontal",
            "backgroundColorDirection": "vertical",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.3,
            "paddingBottom": 0,
            "overflow": "visible",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "backgroundColorRatios": [
             0,
             1
            ],
            "id": "Container_5EE70B16_547D_F3EC_41C9_971F1B00B22D",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "Row 2"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           },
           {
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "paddingTop": 0,
            "width": "100%",
            "height": "22.4%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "horizontal",
            "backgroundColorDirection": "vertical",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.3,
            "paddingBottom": 0,
            "overflow": "visible",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "backgroundColorRatios": [
             0,
             1
            ],
            "id": "Container_5EE70B16_547D_F3EC_41D4_82701AFF0DAD",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "Row 3 empty"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           }
          ],
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "paddingTop": 0,
          "width": "76.072%",
          "height": "52.259%",
          "borderRadius": 0,
          "gap": 5,
          "layout": "vertical",
          "backgroundColorDirection": "vertical",
          "scrollBarWidth": 10,
          "backgroundOpacity": 0.3,
          "paddingBottom": 0,
          "overflow": "visible",
          "shadow": false,
          "paddingRight": 0,
          "verticalAlign": "top",
          "creationPolicy": "delayed",
          "contentOpaque": false,
          "scrollBarColor": "#000000",
          "backgroundColorRatios": [
           0,
           1
          ],
          "bottom": "6.63%",
          "id": "Container_5EE70B15_547D_F3EC_41D1_22CDC78688BF",
          "class": "Container",
          "minWidth": 1,
          "data": {
           "name": "Container thumbs"
          },
          "horizontalAlign": "center",
          "scrollBarOpacity": 0.5,
          "right": "11.47%",
          "propagateClick": false,
          "paddingLeft": 0,
          "scrollBarMargin": 2,
          "minHeight": 1
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingTop": 0,
        "width": "27.805%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "id": "Container_5EE70B15_547D_F3EC_41A2_343375D7999C",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container text"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "right": "0%",
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2,
        "minHeight": 1
       },
       {
        "children": [
         {
          "progressRight": 0,
          "propagateClick": false,
          "progressOpacity": 1,
          "toolTipShadowHorizontalLength": 0,
          "progressBorderColor": "#000000",
          "playbackBarBottom": 0,
          "toolTipPaddingBottom": 4,
          "toolTipTextShadowOpacity": 0,
          "borderRadius": 0,
          "progressBarBackgroundColorDirection": "vertical",
          "progressBarBorderRadius": 0,
          "playbackBarHeadShadow": true,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadOpacity": 1,
          "playbackBarHeadBorderSize": 0,
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipTextShadowBlurRadius": 3,
          "progressBackgroundOpacity": 1,
          "shadow": false,
          "paddingRight": 0,
          "playbackBarOpacity": 1,
          "playbackBarBorderRadius": 0,
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "progressBottom": 2,
          "progressBarOpacity": 1,
          "toolTipShadowVerticalLength": 0,
          "class": "ViewerArea",
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "toolTipShadowBlurRadius": 3,
          "progressBorderSize": 0,
          "minWidth": 1,
          "playbackBarProgressBorderColor": "#000000",
          "progressHeight": 10,
          "toolTipPaddingTop": 4,
          "playbackBarHeadWidth": 6,
          "playbackBarHeight": 10,
          "toolTipTextShadowColor": "#000000",
          "toolTipShadowColor": "#333333",
          "progressBorderRadius": 0,
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "toolTipOpacity": 1,
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "playbackBarBackgroundColorDirection": "vertical",
          "toolTipBorderColor": "#767676",
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "borderSize": 0,
          "paddingTop": 0,
          "transitionDuration": 500,
          "progressBackgroundColorRatios": [
           0
          ],
          "height": "100%",
          "progressLeft": 0,
          "playbackBarRight": 0,
          "playbackBarHeadShadowOpacity": 0.7,
          "toolTipShadowSpread": 0,
          "playbackBarHeadShadowVerticalLength": 0,
          "playbackBarProgressOpacity": 1,
          "width": "100%",
          "playbackBarProgressBorderRadius": 0,
          "toolTipBorderRadius": 3,
          "playbackBarLeft": 0,
          "progressBarBorderSize": 0,
          "playbackBarHeadShadowBlurRadius": 3,
          "paddingBottom": 0,
          "playbackBarBorderColor": "#FFFFFF",
          "top": "0%",
          "toolTipBorderSize": 1,
          "playbackBarBorderSize": 0,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "id": "ViewerAreaLabeled_5EE70B16_547D_F3EC_4177_5761BA34B830",
          "toolTipFontWeight": "normal",
          "toolTipFontStyle": "normal",
          "toolTipPaddingLeft": 6,
          "playbackBarBackgroundOpacity": 1,
          "toolTipDisplayTime": 600,
          "toolTipFontSize": 12,
          "progressBackgroundColorDirection": "vertical",
          "toolTipShadowOpacity": 1,
          "left": "0%",
          "playbackBarHeadBorderRadius": 0,
          "toolTipFontColor": "#606060",
          "playbackBarHeadBorderColor": "#000000",
          "transitionMode": "blending",
          "playbackBarProgressBorderSize": 0,
          "progressBarBorderColor": "#000000",
          "playbackBarHeadShadowHorizontalLength": 0,
          "playbackBarHeadHeight": 15,
          "toolTipPaddingRight": 6,
          "paddingLeft": 0,
          "playbackBarHeadShadowColor": "#000000",
          "minHeight": 1,
          "toolTipFontFamily": "Arial"
         },
         {
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "height": "100%",
          "maxHeight": 821,
          "borderRadius": 0,
          "url": "skin/Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18.jpg",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "scaleMode": "fit_outside",
          "shadow": false,
          "paddingRight": 0,
          "top": "0%",
          "verticalAlign": "middle",
          "id": "Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18",
          "class": "Image",
          "minWidth": 1,
          "data": {
           "name": "-Image intro video"
          },
          "horizontalAlign": "center",
          "maxWidth": 1460,
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "width": "72.402%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_5EE70B16_547D_F3EC_41D3_F78FB47E4731",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container Viewer"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "left": "0%",
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "width": "96.837%",
      "height": "94.868%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "absolute",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_5EE70B15_547D_F3EC_41D0_339269FA65C3",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "horizontalAlign": "left",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "width": "90.91%",
    "height": "83%",
    "borderRadius": 4,
    "gap": 10,
    "layout": "horizontal",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_5EE70B15_547D_F3EC_41C1_999FBC34E663",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.5,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "---VIDEOALBUM"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "children": [
     {
      "rollOverIconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0_rollover.png",
      "right": "1.43%",
      "borderSize": 0,
      "paddingTop": 0,
      "width": 24,
      "height": 24,
      "mode": "push",
      "maxHeight": 24,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_C190A7DE_D1CF_0251_41D6_94510622876F, false, 0, null, null, false)",
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "top": "4%",
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "X"
      },
      "horizontalAlign": "center",
      "maxWidth": 24,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     },
     {
      "children": [
       {
        "borderSize": 0,
        "paddingTop": 0,
        "width": "80%",
        "height": "15.356%",
        "maxHeight": 41,
        "borderRadius": 0,
        "url": "skin/Image_C19097DE_D1CF_0251_41EA_014A5794BC3C.png",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "scaleMode": "fit_inside",
        "shadow": false,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "id": "Image_C19097DE_D1CF_0251_41EA_014A5794BC3C",
        "class": "Image",
        "minWidth": 1,
        "data": {
         "name": "Panorama list title"
        },
        "horizontalAlign": "center",
        "maxWidth": 1133,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0
       },
       {
        "children": [
         {
          "rollOverIconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3_rollover.jpg",
          "borderSize": 0,
          "paddingTop": 0,
          "width": "35%",
          "height": "82%",
          "mode": "push",
          "maxHeight": 164,
          "borderRadius": 0,
          "iconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3.jpg",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "cursor": "hand",
          "id": "IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3",
          "class": "IconButton",
          "minWidth": 1,
          "data": {
           "name": "IconButton Powerboat"
          },
          "horizontalAlign": "center",
          "maxWidth": 290,
          "transparencyActive": false,
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         },
         {
          "rollOverIconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC_rollover.jpg",
          "borderSize": 0,
          "paddingTop": 0,
          "width": "35%",
          "height": "82%",
          "mode": "push",
          "maxHeight": 164,
          "borderRadius": 0,
          "iconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC.jpg",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "cursor": "hand",
          "id": "IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC",
          "class": "IconButton",
          "minWidth": 1,
          "data": {
           "name": "IconButton Breakfast"
          },
          "horizontalAlign": "center",
          "maxWidth": 290,
          "transparencyActive": false,
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         },
         {
          "rollOverIconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D_rollover.jpg",
          "borderSize": 0,
          "paddingTop": 0,
          "width": "35%",
          "height": "82%",
          "mode": "push",
          "maxHeight": 164,
          "borderRadius": 0,
          "iconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D.jpg",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "cursor": "hand",
          "id": "IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D",
          "class": "IconButton",
          "minWidth": 1,
          "data": {
           "name": "IconButton PoolFun"
          },
          "horizontalAlign": "center",
          "maxWidth": 290,
          "transparencyActive": false,
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "width": "80%",
        "height": "61.423%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "horizontal",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "overflow": "visible",
        "shadow": false,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_E916E277_E0EC_BA90_41E7_7B91E7367E91",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container thumbs"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "paddingTop": 0,
      "width": "100%",
      "height": "73.757%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "vertical",
      "backgroundOpacity": 0,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "bottom": "8.01%",
      "id": "Container_C190E7DD_D1CF_0253_41C3_86133B23DE83",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "horizontalAlign": "center",
      "left": "0%",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "width": 872,
    "height": 362,
    "borderRadius": 4,
    "gap": 10,
    "layout": "absolute",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "top",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_C190C7DD_D1CF_0253_41E6_E37D4ADD5212",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 11,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.5,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_C190A7DE_D1CF_0251_41D6_94510622876F",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "---VIDEO 360\u00ba"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "progressRight": 0,
    "propagateClick": false,
    "progressOpacity": 1,
    "toolTipShadowHorizontalLength": 0,
    "progressBorderColor": "#000000",
    "playbackBarBottom": 0,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "borderRadius": 0,
    "progressBarBackgroundColorDirection": "vertical",
    "progressBarBorderRadius": 0,
    "playbackBarHeadShadow": true,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadOpacity": 1,
    "playbackBarHeadBorderSize": 0,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipTextShadowBlurRadius": 3,
    "progressBackgroundOpacity": 1,
    "shadow": false,
    "paddingRight": 0,
    "playbackBarOpacity": 1,
    "playbackBarBorderRadius": 0,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "progressBottom": 2,
    "progressBarOpacity": 1,
    "toolTipShadowVerticalLength": 0,
    "class": "ViewerArea",
    "progressHeight": 10,
    "toolTipShadowBlurRadius": 3,
    "progressBorderSize": 0,
    "minWidth": 1,
    "playbackBarProgressBorderColor": "#000000",
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "toolTipPaddingTop": 4,
    "playbackBarHeadWidth": 6,
    "playbackBarHeight": 10,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowColor": "#333333",
    "progressBorderRadius": 0,
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "toolTipOpacity": 1,
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "playbackBarBackgroundColorDirection": "vertical",
    "toolTipBorderColor": "#767676",
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "borderSize": 0,
    "paddingTop": 0,
    "transitionDuration": 500,
    "progressBackgroundColorRatios": [
     0
    ],
    "height": "100%",
    "progressLeft": 0,
    "playbackBarRight": 0,
    "playbackBarHeadShadowOpacity": 0.7,
    "toolTipShadowSpread": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "playbackBarProgressOpacity": 1,
    "width": "100%",
    "playbackBarProgressBorderRadius": 0,
    "toolTipBorderRadius": 3,
    "playbackBarLeft": 0,
    "progressBarBorderSize": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "paddingBottom": 0,
    "playbackBarBorderColor": "#FFFFFF",
    "playbackBarBorderSize": 0,
    "bottom": "0%",
    "toolTipBorderSize": 1,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "id": "ViewerAreaLabeled_EF626468_E164_BEB0_41E7_F6DF4C667020",
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "toolTipPaddingLeft": 6,
    "playbackBarBackgroundOpacity": 1,
    "toolTipDisplayTime": 600,
    "toolTipFontSize": 12,
    "progressBackgroundColorDirection": "vertical",
    "toolTipShadowOpacity": 1,
    "left": "0%",
    "playbackBarHeadBorderRadius": 0,
    "toolTipFontColor": "#606060",
    "playbackBarHeadBorderColor": "#000000",
    "transitionMode": "blending",
    "playbackBarProgressBorderSize": 0,
    "progressBarBorderColor": "#000000",
    "playbackBarHeadShadowHorizontalLength": 0,
    "playbackBarHeadHeight": 15,
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "playbackBarHeadShadowColor": "#000000",
    "minHeight": 1,
    "toolTipFontFamily": "Arial"
   },
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0"
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "absolute",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "top",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_ECB4524F_E163_9AF0_41E5_60E049D28740",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "---360"
  },
  "horizontalAlign": "left",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "rollOverIconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29_rollover.png",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 40,
  "height": 40,
  "mode": "push",
  "maxHeight": 80,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "shadow": false,
  "paddingRight": 0,
  "top": 20,
  "verticalAlign": "middle",
  "cursor": "hand",
  "visible": false,
  "id": "IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29",
  "class": "IconButton",
  "minWidth": 1,
  "data": {
   "name": "X 360"
  },
  "horizontalAlign": "center",
  "maxWidth": 80,
  "left": 20,
  "transparencyActive": true,
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0
 },
 {
  "right": 20,
  "borderSize": 0,
  "paddingTop": 0,
  "width": 125,
  "height": 70,
  "maxHeight": 78,
  "borderRadius": 0,
  "url": "skin/Image_19470ABB_0A67_2982_418C_D469BE33D2C6.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "scaleMode": "fit_to_width",
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "bottom": 56,
  "id": "Image_19470ABB_0A67_2982_418C_D469BE33D2C6",
  "class": "Image",
  "visible": false,
  "minWidth": 1,
  "data": {
   "name": "-Wheel mouse"
  },
  "horizontalAlign": "center",
  "maxWidth": 212,
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       {
        "rollOverIconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C_rollover.png",
        "right": "0%",
        "borderSize": 0,
        "paddingTop": 0,
        "width": 24,
        "height": 24,
        "mode": "push",
        "maxHeight": 24,
        "borderRadius": 0,
        "iconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C.png",
        "backgroundOpacity": 0,
        "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, false, 0, null, null, false)",
        "paddingBottom": 0,
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "middle",
        "cursor": "hand",
        "id": "IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C",
        "class": "IconButton",
        "minWidth": 1,
        "data": {
         "name": "X"
        },
        "horizontalAlign": "center",
        "maxWidth": 24,
        "transparencyActive": true,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0
       },
       {
        "children": [
         {
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "maxHeight": 600,
          "borderRadius": 0,
          "url": "skin/Image_474C01C8_4AA6_73BE_4198_63728D42FC19.png",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingRight": 0,
          "top": "6.63%",
          "verticalAlign": "middle",
          "bottom": "58.73%",
          "id": "Image_474C01C8_4AA6_73BE_4198_63728D42FC19",
          "class": "Image",
          "minWidth": 1,
          "data": {
           "name": "Text img"
          },
          "horizontalAlign": "center",
          "maxWidth": 402,
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         },
         {
          "children": [
           {
            "children": [
             {
              "rollOverIconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton_house"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": true,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             },
             {
              "rollOverIconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton_garden"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": false,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             }
            ],
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "paddingTop": 0,
            "width": "100%",
            "height": "25%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "horizontal",
            "backgroundColorDirection": "vertical",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.3,
            "paddingBottom": 0,
            "overflow": "visible",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "backgroundColorRatios": [
             0,
             1
            ],
            "id": "Container_470039F2_4AA2_3352_4188_8343FDAC53A2",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "Container Row 1"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           },
           {
            "children": [
             {
              "rollOverIconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton_decoration"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": false,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             },
             {
              "rollOverIconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6_rollover.jpg",
              "borderSize": 0,
              "paddingTop": 0,
              "width": 145,
              "height": 82,
              "mode": "push",
              "maxHeight": 82,
              "borderRadius": 0,
              "iconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6.jpg",
              "backgroundOpacity": 0,
              "paddingBottom": 0,
              "shadow": false,
              "paddingRight": 0,
              "verticalAlign": "middle",
              "cursor": "hand",
              "id": "IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6",
              "class": "IconButton",
              "minWidth": 1,
              "data": {
               "name": "IconButton_Swimming"
              },
              "horizontalAlign": "center",
              "maxWidth": 145,
              "transparencyActive": false,
              "minHeight": 1,
              "propagateClick": false,
              "paddingLeft": 0
             }
            ],
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "paddingTop": 0,
            "width": "100%",
            "height": "25%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "horizontal",
            "backgroundColorDirection": "vertical",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.3,
            "paddingBottom": 0,
            "overflow": "visible",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "backgroundColorRatios": [
             0,
             1
            ],
            "id": "Container_470F7D71_4AA2_136E_41B0_AAAD0C68ACE5",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "Container Row 2"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           },
           {
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "paddingTop": 0,
            "width": "100%",
            "height": "25%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "horizontal",
            "backgroundColorDirection": "vertical",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.3,
            "paddingBottom": 0,
            "overflow": "visible",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "backgroundColorRatios": [
             0,
             1
            ],
            "id": "Container_44F91F72_4AA6_2F52_41C3_1B4514891167",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "Container Row 3"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           }
          ],
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "paddingTop": 0,
          "width": "76.072%",
          "height": "52.259%",
          "borderRadius": 0,
          "gap": 10,
          "layout": "vertical",
          "backgroundColorDirection": "vertical",
          "scrollBarWidth": 10,
          "backgroundOpacity": 0.3,
          "paddingBottom": 0,
          "overflow": "visible",
          "shadow": false,
          "paddingRight": 0,
          "verticalAlign": "top",
          "creationPolicy": "delayed",
          "contentOpaque": false,
          "scrollBarColor": "#000000",
          "backgroundColorRatios": [
           0,
           1
          ],
          "bottom": "6.63%",
          "id": "Container_472B38FC_4AAE_1156_41B3_4C1A1EC48ED3",
          "class": "Container",
          "minWidth": 1,
          "data": {
           "name": "Thumbs buttons container"
          },
          "horizontalAlign": "center",
          "scrollBarOpacity": 0.5,
          "right": "11.47%",
          "propagateClick": false,
          "paddingLeft": 0,
          "scrollBarMargin": 2,
          "minHeight": 1
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingTop": 0,
        "width": "27.805%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "id": "Container_474C01C8_4AA6_73BE_41B0_42F6E66589F6",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Right container"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "right": "0%",
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2,
        "minHeight": 1
       },
       {
        "children": [
         {
          "progressRight": 0,
          "propagateClick": false,
          "progressOpacity": 1,
          "toolTipShadowHorizontalLength": 0,
          "progressBorderColor": "#000000",
          "playbackBarBottom": 0,
          "toolTipPaddingBottom": 4,
          "toolTipTextShadowOpacity": 0,
          "borderRadius": 0,
          "progressBarBackgroundColorDirection": "vertical",
          "progressBarBorderRadius": 0,
          "playbackBarHeadShadow": true,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadOpacity": 1,
          "playbackBarHeadBorderSize": 0,
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipTextShadowBlurRadius": 3,
          "progressBackgroundOpacity": 1,
          "shadow": false,
          "paddingRight": 0,
          "playbackBarOpacity": 1,
          "playbackBarBorderRadius": 0,
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "progressBottom": 2,
          "progressBarOpacity": 1,
          "toolTipShadowVerticalLength": 0,
          "class": "ViewerArea",
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "toolTipShadowBlurRadius": 3,
          "progressBorderSize": 0,
          "minWidth": 1,
          "playbackBarProgressBorderColor": "#000000",
          "progressHeight": 10,
          "toolTipPaddingTop": 4,
          "playbackBarHeadWidth": 6,
          "playbackBarHeight": 10,
          "toolTipTextShadowColor": "#000000",
          "toolTipShadowColor": "#333333",
          "progressBorderRadius": 0,
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "toolTipOpacity": 1,
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "playbackBarBackgroundColorDirection": "vertical",
          "toolTipBorderColor": "#767676",
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "borderSize": 0,
          "paddingTop": 0,
          "transitionDuration": 500,
          "progressBackgroundColorRatios": [
           0
          ],
          "height": "100%",
          "progressLeft": 0,
          "playbackBarRight": 0,
          "playbackBarHeadShadowOpacity": 0.7,
          "toolTipShadowSpread": 0,
          "playbackBarHeadShadowVerticalLength": 0,
          "playbackBarProgressOpacity": 1,
          "width": "100%",
          "playbackBarProgressBorderRadius": 0,
          "toolTipBorderRadius": 3,
          "playbackBarLeft": 0,
          "progressBarBorderSize": 0,
          "playbackBarHeadShadowBlurRadius": 3,
          "paddingBottom": 0,
          "playbackBarBorderColor": "#FFFFFF",
          "top": "0%",
          "toolTipBorderSize": 1,
          "playbackBarBorderSize": 0,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "id": "ViewerAreaLabeled_451BE519_4B62_70DE_41C7_94BD7032FDA3",
          "toolTipFontWeight": "normal",
          "toolTipFontStyle": "normal",
          "toolTipPaddingLeft": 6,
          "playbackBarBackgroundOpacity": 1,
          "toolTipDisplayTime": 600,
          "toolTipFontSize": 12,
          "progressBackgroundColorDirection": "vertical",
          "toolTipShadowOpacity": 1,
          "left": "0%",
          "playbackBarHeadBorderRadius": 0,
          "toolTipFontColor": "#606060",
          "playbackBarHeadBorderColor": "#000000",
          "transitionMode": "blending",
          "playbackBarProgressBorderSize": 0,
          "progressBarBorderColor": "#000000",
          "playbackBarHeadShadowHorizontalLength": 0,
          "playbackBarHeadHeight": 15,
          "toolTipPaddingRight": 6,
          "paddingLeft": 0,
          "playbackBarHeadShadowColor": "#000000",
          "minHeight": 1,
          "toolTipFontFamily": "Arial"
         },
         {
          "children": [
           {
            "pressedIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_pressed.png",
            "rollOverIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_rollover.png",
            "borderSize": 0,
            "paddingTop": 0,
            "width": 50,
            "height": 50,
            "mode": "push",
            "maxHeight": 50,
            "borderRadius": 0,
            "iconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177.png",
            "backgroundOpacity": 0,
            "paddingBottom": 0,
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "cursor": "hand",
            "id": "IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177",
            "class": "IconButton",
            "minWidth": 1,
            "data": {
             "name": "button <"
            },
            "horizontalAlign": "center",
            "maxWidth": 50,
            "transparencyActive": true,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0
           },
           {
            "scrollBarVisible": "rollOver",
            "borderSize": 0,
            "paddingTop": 0,
            "width": "70%",
            "height": "30.12%",
            "borderRadius": 0,
            "gap": 10,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "overflow": "scroll",
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "creationPolicy": "delayed",
            "contentOpaque": false,
            "scrollBarColor": "#000000",
            "id": "Container_5B3D27DD_4B61_FF56_41C7_13D4CF866C03",
            "class": "Container",
            "minWidth": 1,
            "data": {
             "name": "separator"
            },
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0,
            "scrollBarMargin": 2
           },
           {
            "pressedIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_pressed.png",
            "rollOverIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_rollover.png",
            "borderSize": 0,
            "paddingTop": 0,
            "width": 50,
            "height": 50,
            "mode": "push",
            "maxHeight": 50,
            "borderRadius": 0,
            "iconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748.png",
            "backgroundOpacity": 0,
            "paddingBottom": 0,
            "shadow": false,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "cursor": "hand",
            "id": "IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748",
            "class": "IconButton",
            "minWidth": 1,
            "data": {
             "name": "button >"
            },
            "horizontalAlign": "center",
            "maxWidth": 50,
            "transparencyActive": true,
            "minHeight": 1,
            "propagateClick": false,
            "paddingLeft": 0
           }
          ],
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "height": "100%",
          "borderRadius": 0,
          "gap": 300,
          "layout": "horizontal",
          "scrollBarWidth": 10,
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "overflow": "scroll",
          "shadow": false,
          "paddingRight": 0,
          "top": "0%",
          "verticalAlign": "middle",
          "creationPolicy": "delayed",
          "contentOpaque": false,
          "scrollBarColor": "#000000",
          "id": "Container_5B704147_4B62_30B2_41C7_41C4A6280806",
          "class": "Container",
          "minWidth": 1,
          "data": {
           "name": "Container buttons"
          },
          "horizontalAlign": "center",
          "left": "0%",
          "scrollBarOpacity": 0.5,
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0,
          "scrollBarMargin": 2
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "width": "72.402%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_474C01C8_4AA6_73BE_41C4_789A192CFF53",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container Viewer"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "left": "0%",
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "width": "96.837%",
      "height": "94.868%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "absolute",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_474C01C8_4AA6_73BE_41C7_421C083439CF",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "Content container"
      },
      "horizontalAlign": "left",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "width": 1500,
    "height": 780,
    "borderRadius": 4,
    "gap": 10,
    "layout": "horizontal",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_474C01C7_4AA6_73B2_41C6_B213F7F17334",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Main container"
    },
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.5,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "---PHOTOALBUM"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       {
        "rollOverIconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450_rollover.png",
        "right": "0%",
        "borderSize": 0,
        "paddingTop": 0,
        "width": 24,
        "height": 24,
        "mode": "push",
        "maxHeight": 24,
        "borderRadius": 0,
        "iconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450.png",
        "backgroundOpacity": 0,
        "click": "this.setComponentVisibility(this.Container_4169474A_4F02_D74E_41C4_5387F4304140, false, 0, null, null, false)",
        "paddingBottom": 0,
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "middle",
        "cursor": "hand",
        "id": "IconButton_4169474A_4F02_D74E_41D2_E2447B190450",
        "class": "IconButton",
        "minWidth": 1,
        "data": {
         "name": "X"
        },
        "horizontalAlign": "center",
        "maxWidth": 24,
        "transparencyActive": true,
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0
       },
       {
        "children": [
         {
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "maxHeight": 600,
          "borderRadius": 0,
          "url": "skin/Image_4169474A_4F02_D74E_418A_8DC243F4699E.png",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingRight": 0,
          "top": "6.63%",
          "verticalAlign": "middle",
          "bottom": "17.77%",
          "id": "Image_4169474A_4F02_D74E_418A_8DC243F4699E",
          "class": "Image",
          "minWidth": 1,
          "data": {
           "name": "text image"
          },
          "horizontalAlign": "center",
          "maxWidth": 402,
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         },
         {
          "rollOverIconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4_rollover.png",
          "borderSize": 0,
          "paddingTop": 0,
          "width": 135,
          "height": 47,
          "mode": "push",
          "maxHeight": 47,
          "borderRadius": 0,
          "iconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4.png",
          "backgroundOpacity": 0,
          "click": "this.openLink(\"http://www.3dvista.com\", \"_blank\")",
          "paddingBottom": 0,
          "shadow": false,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "cursor": "hand",
          "bottom": "12.45%",
          "id": "IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4",
          "class": "IconButton",
          "minWidth": 1,
          "data": {
           "name": "Button Book Now"
          },
          "horizontalAlign": "center",
          "maxWidth": 135,
          "left": "12.22%",
          "transparencyActive": false,
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "paddingTop": 0,
        "width": "29.06%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "id": "Container_4169474A_4F02_D74E_41CC_AAA712A39B4C",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container right text"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "right": "0%",
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2,
        "minHeight": 1
       },
       {
        "children": [
         {
          "borderSize": 0,
          "paddingTop": 0,
          "width": "100%",
          "height": "100%",
          "borderRadius": 0,
          "url": "skin/Image_41194F8C_4F01_D7CA_41D0_80812518610D.jpg",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "scaleMode": "fit_to_height",
          "shadow": false,
          "paddingRight": 0,
          "top": "0%",
          "verticalAlign": "middle",
          "id": "Image_41194F8C_4F01_D7CA_41D0_80812518610D",
          "class": "Image",
          "minWidth": 1,
          "data": {
           "name": "Image"
          },
          "horizontalAlign": "center",
          "left": "0%",
          "minHeight": 1,
          "propagateClick": false,
          "paddingLeft": 0
         }
        ],
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "width": "70.869%",
        "height": "100%",
        "borderRadius": 0,
        "gap": 10,
        "layout": "absolute",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "overflow": "scroll",
        "shadow": false,
        "paddingRight": 0,
        "top": "0%",
        "verticalAlign": "top",
        "creationPolicy": "delayed",
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_4169474A_4F02_D74E_41D3_C66A0E7A6577",
        "class": "Container",
        "minWidth": 1,
        "data": {
         "name": "Container Img"
        },
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "left": "0%",
        "minHeight": 1,
        "propagateClick": false,
        "paddingLeft": 0,
        "scrollBarMargin": 2
       }
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "width": "96.837%",
      "height": "94.868%",
      "borderRadius": 0,
      "gap": 10,
      "layout": "absolute",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "overflow": "scroll",
      "shadow": false,
      "paddingRight": 0,
      "verticalAlign": "top",
      "creationPolicy": "delayed",
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_4169474A_4F02_D74E_41C9_D049781FF241",
      "class": "Container",
      "minWidth": 1,
      "data": {
       "name": "Container content"
      },
      "horizontalAlign": "left",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "width": 1450,
    "height": 750,
    "borderRadius": 4,
    "gap": 10,
    "layout": "horizontal",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_4169474A_4F02_D74E_41D2_8786E1AEB625",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "propagateClick": false,
    "paddingLeft": 0,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.5,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_4169474A_4F02_D74E_41C4_5387F4304140",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "---CONTACT"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "children": [
   {
    "children": [
     {
      "progressRight": 0,
      "propagateClick": false,
      "progressOpacity": 1,
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "progressBarBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowBlurRadius": 3,
      "progressBackgroundOpacity": 1,
      "shadow": false,
      "paddingRight": 0,
      "playbackBarOpacity": 1,
      "playbackBarBorderRadius": 0,
      "progressBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBottom": 2,
      "toolTipShadowVerticalLength": 0,
      "class": "ViewerArea",
      "progressHeight": 10,
      "toolTipShadowBlurRadius": 3,
      "progressBorderSize": 0,
      "minWidth": 1,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "progressBorderRadius": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipOpacity": 1,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "paddingTop": 0,
      "transitionDuration": 500,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressLeft": 0,
      "playbackBarRight": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowSpread": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "toolTipBorderRadius": 3,
      "playbackBarLeft": 0,
      "progressBarBorderSize": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "paddingBottom": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "top": "0%",
      "bottom": "0%",
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "id": "MapViewer",
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipPaddingLeft": 6,
      "playbackBarBackgroundOpacity": 1,
      "toolTipDisplayTime": 600,
      "toolTipFontColor": "#606060",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "left": "0%",
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontSize": 12,
      "playbackBarHeadBorderColor": "#000000",
      "transitionMode": "blending",
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadHeight": 15,
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "playbackBarHeadShadowColor": "#000000",
      "right": "0%",
      "toolTipFontFamily": "Arial"
     },
     {
      "rollOverIconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0_rollover.png",
      "right": 0,
      "borderSize": 0,
      "paddingTop": 0,
      "width": 24,
      "height": 24,
      "mode": "push",
      "maxHeight": 24,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_B18B0BF2_A688_648E_41D5_25CC213E30D8, false, 0, null, null, false)",
      "paddingBottom": 0,
      "shadow": false,
      "paddingRight": 0,
      "top": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "id": "IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0",
      "class": "IconButton",
      "minWidth": 1,
      "data": {
       "name": "X"
      },
      "horizontalAlign": "center",
      "maxWidth": 24,
      "transparencyActive": true,
      "minHeight": 1,
      "propagateClick": false,
      "paddingLeft": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 30,
    "layout": "absolute",
    "borderRadius": 0,
    "gap": 10,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "backgroundOpacity": 1,
    "paddingBottom": 30,
    "overflow": "scroll",
    "shadow": false,
    "paddingRight": 30,
    "top": "12%",
    "verticalAlign": "top",
    "creationPolicy": "delayed",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "bottom": "12%",
    "id": "Container_BEFE9313_A688_258E_4198_33F6C1D0A579",
    "class": "Container",
    "minWidth": 1,
    "data": {
     "name": "Container global"
    },
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "left": "15%",
    "right": "15%",
    "propagateClick": false,
    "paddingLeft": 30,
    "scrollBarMargin": 2,
    "minHeight": 1
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "borderRadius": 0,
  "gap": 10,
  "layout": "absolute",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0.7,
  "paddingBottom": 0,
  "overflow": "scroll",
  "shadow": false,
  "paddingRight": 0,
  "top": "0%",
  "verticalAlign": "top",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0
  ],
  "visible": false,
  "id": "Container_B18B0BF2_A688_648E_41D5_25CC213E30D8",
  "class": "Container",
  "minWidth": 1,
  "data": {
   "name": "--- FLOORPLAN"
  },
  "horizontalAlign": "left",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 0,
  "scrollBarMargin": 2
 },
 {
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingTop": 20,
  "width": "33.893%",
  "height": "82.67%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "backgroundOpacity": 0,
  "click": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, this.effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A, 'hideEffect', false)",
  "paddingBottom": 20,
  "shadow": false,
  "paddingRight": 20,
  "top": "2.47%",
  "scrollBarColor": "#000000",
  "id": "HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;\"><B>PARQUE PUENTE CIMBRA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:29px;\"><I>PRIMER VIADUCTO</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">El Puente Cimbra fue el primer viaducto que logr\u00f3 unir los sectores de Granallas, Quebrada de Herrera, Vicu\u00f1a y Guzmanes con el centro de Putaendo. Si bien no hay data exacta de la creaci\u00f3n de este puente colgante, hay datos que apuntan a finales del siglo XIX o principios del siglo XX</SPAN></SPAN></DIV></div>",
  "class": "HTMLText",
  "minWidth": 1,
  "data": {
   "name": "puente"
  },
  "left": "1.75%",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "propagateClick": false,
  "paddingLeft": 20,
  "scrollBarMargin": 2
 },
 {
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.55,
  "paddingBottom": 0,
  "shadow": false,
  "paddingRight": 0,
  "top": 0,
  "backgroundColorRatios": [
   0
  ],
  "bottom": 0,
  "id": "veilPopupPanorama",
  "class": "UIComponent",
  "visible": false,
  "minWidth": 0,
  "data": {
   "name": "UIComponent29426"
  },
  "left": 0,
  "right": 0,
  "propagateClick": false,
  "paddingLeft": 0,
  "minHeight": 0
 },
 {
  "borderSize": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "scaleMode": "custom",
  "shadow": false,
  "paddingRight": 0,
  "top": 0,
  "backgroundColorRatios": [],
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "class": "ZoomImage",
  "visible": false,
  "minWidth": 0,
  "data": {
   "name": "ZoomImage29427"
  },
  "left": 0,
  "right": 0,
  "propagateClick": false,
  "paddingLeft": 0,
  "minHeight": 0
 },
 {
  "iconBeforeLabel": true,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "borderSize": 0,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "shadowSpread": 1,
  "fontSize": 12,
  "mode": "push",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "iconLineWidth": 5,
  "rollOverIconColor": "#666666",
  "fontStyle": "normal",
  "backgroundOpacity": 0.3,
  "layout": "horizontal",
  "iconWidth": 20,
  "iconColor": "#000000",
  "gap": 5,
  "paddingBottom": 5,
  "fontWeight": "normal",
  "shadow": false,
  "paddingRight": 5,
  "top": 10,
  "verticalAlign": "middle",
  "cursor": "hand",
  "borderColor": "#000000",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "visible": false,
  "id": "closeButtonPopupPanorama",
  "class": "CloseButton",
  "iconHeight": 20,
  "minWidth": 0,
  "data": {
   "name": "CloseButton29428"
  },
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "label": "",
  "fontColor": "#FFFFFF",
  "pressedIconColor": "#888888",
  "right": 10,
  "propagateClick": false,
  "paddingLeft": 5,
  "minHeight": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "buttonToggleMute": "this.IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
 "borderSize": 0,
 "paddingTop": 0,
 "width": "100%",
 "height": "100%",
 "borderRadius": 0,
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "vrPolyfillScale": 1,
 "creationPolicy": "delayed",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": true,
 "id": "rootPlayer",
 "class": "Player",
 "mobileMipmappingEnabled": true,
 "minWidth": 20,
 "data": {
  "name": "Player20898"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "propagateClick": false,
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 }
})