TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 130,
  "id": "panorama_F17AF415_FD81_1256_41EB_D309B024A781",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
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
      "hfov": 45.6,
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
      "popupMaxHeight": "60%",
      "pitch": 8.64,
      "popupMaxWidth": "60%",
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
      "popupMaxHeight": "60%",
      "pitch": 11.32,
      "popupMaxWidth": "60%",
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
  "partial": false,
  "id": "panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
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
      "hfov": 45.6,
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
  "id": "panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
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
      "hfov": 45.6,
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
      "rotationZ": 0,
      "yaw": 135.48,
      "hideDuration": 500,
      "hfov": 5.36,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "60%",
      "pitch": 36.44,
      "popupMaxWidth": "60%",
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
  "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
  "class": "Panorama",
  "label": "Calle Comercio",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_F036C8F3_FD81_33D2_41CA_CD65533F81BB_tcap0",
      "inertia": false,
      "hfov": 45.6,
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
 {
  "hfovMax": 130,
  "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
  "class": "Panorama",
  "label": "Calle Comercio/Aspee",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F09BE238_FD81_765E_41DD_692A05D67004_t.jpg",
    "class": "SphericPanoramaFrame",
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
 {
  "id": "panorama_F09BE238_FD81_765E_41DD_692A05D67004_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -1.31,
   "class": "PanoramaCameraPosition",
   "yaw": -110.4,
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
  "hfovMax": 130,
  "id": "panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_t.jpg",
  "class": "Panorama",
  "label": "El Llano",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_tcap0",
      "inertia": false,
      "hfov": 25.2,
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
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "id": "panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -20.03,
   "class": "PanoramaCameraPosition",
   "yaw": -15.27,
   "hfov": 125
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474",
    "camera": "this.panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 1, 2)",
    "media": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE",
    "camera": "this.panorama_F0CF443F_FD81_1253_41B0_0D5B63F3F7CE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 2, 3)",
    "media": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D",
    "camera": "this.panorama_F0E8EE76_FD81_EED2_41DB_4CECDBADFE1D_camera",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 5, 0)",
    "media": "this.panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474",
    "camera": "this.panorama_E7CB1BE1_FD9F_35EE_41DF_00B6BCC4F474_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A",
  "easing": "linear"
 },
 "this.popup_E32CA1CA_FD81_123D_41DC_2CF0FC0FCFC6",
 "this.popup_E05ED7A7_FDBF_1E73_41DE_819DE3CA0066",
 "this.popup_DFF12E66_FD83_6EF2_41E6_61E07C97C794",
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
 "this.effect_DD326BD3_FD83_35D2_41C9_B0FBCC02FDA6",
 "this.effect_DD321BD3_FD83_35D2_41BB_35B698BEFCCD"
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3",
    "maxWidth": 82,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3.png",
    "borderRadius": 0,
    "data": {
     "name": "button location"
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
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
    "paddingRight": 0,
    "cursor": "hand",
    "id": "IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1",
    "maxWidth": 121,
    "minWidth": 1,
    "iconURL": "skin/IconButton_36C3909F_3D34_C1D1_41B1_5D50FBE1EDA1.png",
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
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
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
    "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
    "paddingRight": 0,
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
    "height": 33,
    "maxHeight": 33,
    "propagateClick": false,
    "paddingBottom": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_4169474A_4F02_D74E_41C4_5387F4304140, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
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
  "width": 577,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 108,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "top",
  "borderSize": 0,
  "overflow": "scroll",
  "top": 15,
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
   "name": "---LOCATION"
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
        "contentOpaque": false,
        "scrollBarMargin": 2,
        "scrollBarOpacity": 0.5,
        "width": "31.182%",
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
        "id": "Container_559E5E68_431D_C17F_41BA_D57BAC710E9E",
        "minWidth": 1,
        "data": {
         "name": "container text"
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
          "url": "skin/Image_57432561_4314_C371_41B5_DB85A77FA6FA.jpg",
          "propagateClick": false,
          "paddingBottom": 0,
          "shadow": false,
          "verticalAlign": "middle",
          "scaleMode": "fit_inside",
          "borderSize": 0,
          "top": "6.63%",
          "paddingRight": 0,
          "id": "Image_57432561_4314_C371_41B5_DB85A77FA6FA",
          "maxWidth": 402,
          "minWidth": 1,
          "data": {
           "name": "text img"
          },
          "bottom": "3.01%",
          "borderRadius": 0,
          "backgroundOpacity": 0,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "class": "Image",
          "left": "0%",
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
        "width": "68.896%",
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
        "id": "Container_5555E455_436C_4151_41CC_029603B5193B",
        "minWidth": 1,
        "data": {
         "name": "Container webframe"
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
          "playbackBarHeadShadowHorizontalLength": 0,
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
          "playbackBarHeadShadowVerticalLength": 0,
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
          "scaleMode": "fit_outside",
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
    "playbackBarHeadShadowHorizontalLength": 0,
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
    "playbackBarHeadShadowVerticalLength": 0,
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
          "playbackBarHeadShadowHorizontalLength": 0,
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
          "playbackBarHeadShadowVerticalLength": 0,
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
      "playbackBarHeadShadowHorizontalLength": 0,
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
      "playbackBarHeadShadowVerticalLength": 0,
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
  "width": "29.215%",
  "propagateClick": false,
  "paddingBottom": 20,
  "shadow": false,
  "height": "76.42%",
  "borderSize": 0,
  "top": "2.47%",
  "click": "this.setComponentVisibility(this.HTMLText_E03422F1_FD81_17EE_41DD_531A608A093E, false, 0, this.effect_EAE5D4A9_FD83_727F_41AA_B152BAEACE9A, 'hideEffect', false)",
  "paddingRight": 20,
  "visible": false,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:48px;\"><B>PARQUE PUENTE CIMBRA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:29px;\"><I>PRIMER VIADUCTO</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">El Puente Cimbra fue el primer viaducto que logr\u00f3 unir los sectores de Granallas, Quebrada de Herrera, Vicu\u00f1a y Guzmanes con el centro de Putaendo. Si  bien no hay data exacta de la creaci\u00f3n de este puente colgante, hay datos que apuntan a finales del siglo XIX o principios del siglo XX</SPAN></SPAN></DIV></div>",
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
   "name": "UIComponent25415"
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
   "name": "ZoomImage25416"
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
   "name": "CloseButton25417"
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
 "start": "this.syncPlaylists([this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E].forEach(function(component) { component.set('visible', false); }) }",
 "mobileMipmappingEnabled": false,
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
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; }
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