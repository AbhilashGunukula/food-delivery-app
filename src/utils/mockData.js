const resList = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "83637",
        title: "Burger",
        description:
          "Satisfy your cravings with these fresh and flavoursome burgers.",
        imageId:
          "COLLECTIONS/IMAGES/MERCH/2024/7/2/6f256b56-e319-488b-8003-9ccca21d4f14_pic",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "71 restaurants",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 71,
        facetList: [
          {
            label: "10 Mins Delivery",
            id: "isRestaurantBolt",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "10 Mins Delivery",
                id: "isRestaurantBoltfacetquery0",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filterby",
            icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
            selectedIcon:
              "COLLECTIONS/IMAGES/MERCH/2024/12/26/fcab0012-69db-492b-83ef-e61699c3bf5b_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
          },
          {
            label: "Veg/Non-Veg",
            id: "isVeg",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Non Veg",
                id: "isVegfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pure Veg",
                id: "isVegfacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
          {
            label: "Ratings",
            id: "rating",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Ratings",
                id: "ratingfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.0+",
                id: "ratingfacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.5+",
                id: "ratingfacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than 30 mins",
                id: "deliveryTimefacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Less than 45 mins",
                id: "deliveryTimefacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
          {
            label: "Cost For Two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rs.300 - Rs.600",
                id: "costForTwofacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            right: 16,
          },
          scrollBar: {},
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "23683",
          name: "McDonald's",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/547a1c53-66ed-474e-999d-6e9e4b570f83_23683.jpg",
          locality: "2nd Stage",
          areaName: "Btm Layout",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          parentId: "630",
          avgRatingString: "4.4",
          totalRatingsString: "58K+",
          promoted: true,
          adTrackingId:
            "cid=25401069~p=2~adgrpid=25401069#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=23683~eid=1140db0e-29a9-4c0f-b3da-a6c944abd7ee~srvts=1739904780326~collid=83637",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 03:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹179",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25401069",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=23683&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "5934",
          name: "Burger King",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹350 for two",
          cuisines: ["Burgers", "American"],
          avgRating: 4.3,
          parentId: "166",
          avgRatingString: "4.3",
          totalRatingsString: "100K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 06:55:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "4.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=5934&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "151076",
          name: "Captain Olive",
          cloudinaryImageId: "f5f9d4821b9c667a424d971079f95815",
          locality: "2nd Stage",
          areaName: "BTM Layout",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "American",
            "shawarma",
            "Rolls & Wraps",
            "Beverages",
            "Fast Food",
            "Continental",
          ],
          avgRating: 4.3,
          parentId: "21078",
          avgRatingString: "4.3",
          totalRatingsString: "9.7K+",
          promoted: true,
          adTrackingId:
            "cid=25351700~p=4~adgrpid=25351700#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=151076~eid=03675940-7cde-486a-a383-ece70e309949~srvts=1739904780326~collid=83637",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 06:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25351700",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=151076&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "65797",
          name: "Leon's - Burgers & Wings (Leon Grill)",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹300 for two",
          cuisines: [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental",
          ],
          avgRating: 4.5,
          parentId: "371281",
          avgRatingString: "4.5",
          totalRatingsString: "55K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "4.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=65797&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "578378",
          name: "Burgerama",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/19da9fe3-09d0-42c4-9172-f3b41861ae70_578378.jpg",
          locality: "2nd  Stage",
          areaName: "Indiranagar",
          costForTwo: "₹600 for two",
          cuisines: ["Fast Food", "American", "Beverages"],
          avgRating: 4.2,
          parentId: "8993",
          avgRatingString: "4.2",
          totalRatingsString: "3.2K+",
          promoted: true,
          adTrackingId:
            "cid=25307932~p=6~adgrpid=25307932#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=578378~eid=bdf1ce4c-4c2d-45b6-bfbe-10bedc15ad37~srvts=1739904780326~collid=83637",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 6.6,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "6.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25307932",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=578378&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "671928",
          name: "KFC",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
          locality: "7th Block",
          areaName: "Koramangla",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
          avgRating: 4.3,
          parentId: "547",
          avgRatingString: "4.3",
          totalRatingsString: "4.0K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=671928&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "398360",
          name: "Burger Seigneur",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/dab0c3aa-5be4-4301-87b5-2c79f36280b6_398360.jpg",
          locality: "Bommanahalli",
          areaName: "Bommanahalli",
          costForTwo: "₹800 for two",
          cuisines: ["American", "Continental", "Beverages"],
          avgRating: 4.2,
          parentId: "12095",
          avgRatingString: "4.2",
          totalRatingsString: "2.3K+",
          promoted: true,
          adTrackingId:
            "cid=25418209~p=7~adgrpid=25418209#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=398360~eid=3c50f207-b8b9-4ba2-ba9b-1b19f6e5e930~srvts=1739904780326~collid=83637",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-19 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25418209",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=398360&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

export default resList;
