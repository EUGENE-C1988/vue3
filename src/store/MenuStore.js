import { defineStore } from 'pinia'
import axios from 'axios'
import brandImage from "@/assets/GPI_logo.png";

export const useMenuStore = defineStore('MenuStore', {
    state: () => ({
    MenuStore: {}
  }),
  getters: {
    getMenu: (state) => {
      return state.MenuStore
    },
  },
  actions: {
    async getMenuAction(ID,jwtHeadder) {
      const response = await axios.get(
        `https://localhost:7297/Menu?UserID=${ID}`,jwtHeadder
      )
      this.MenuStore = interpreterMenu(response.data)
    },
  },
})

function generatorMenu(apiData){
  const menuObj=[];
  let firstLevel=apiData.filter(item => item.hierarchy === 0);
  firstLevel.sort((a, b) => a.sortBy - b.sortBy)
  for (let itemObj_f of firstLevel){
    const addItem={
    type:"link",
    text:itemObj_f.displayName,
    subMenuOptions:[]
  }
    let secondLevelObj=[];
    let hrLineCount=0;
    let secondLevel=apiData.filter(item=>item.parentUID===itemObj_f.guid);
    secondLevel.sort((a, b) => a.sortBy - b.sortBy)
    for (let itemObj_s of secondLevel){
      secondLevelObj.push({
          //isLinkAction: true,
          type: "link",
          text: itemObj_s.displayName,
          subText: itemObj_s.description,
          path: itemObj_s.url
          },)
      if (secondLevelObj.length != secondLevel.length+hrLineCount){
        secondLevelObj.push({type: "hr"},)
        hrLineCount++;
      }
      console.log(`secondLevelObj:${secondLevelObj.length}`)
      console.log(`secondLevel:${secondLevel.length}`)
    }
    addItem.subMenuOptions=secondLevelObj
    menuObj.push(addItem);
  //console.log(JSON.stringify(secondLevelObj));
  //console.log("----------------------")
  //console.log(menuObj)
  }
  return menuObj
}

function interpreterMenu(menuObj) {
  let navbarOptions = {};
   let navabarleft ={menuOptionsLeft:generatorMenu(menuObj)}
  
  // let navabarleft = {
  //   menuOptionsLeft: [
  //     {
  //       type: "link",
  //       text: "Sales Order",
  //       subMenuOptions: [
  //         {
  //           type: "link",
  //           text: "Sale Order List",
  //           subText:"列出所有銷售訂單內容，並可編輯",
  //           path: "/solist",
  //         },
  //       ],
  //     },
  //     {
  //       type: "link",
  //       text: "About",
  //       subMenuOptions: [
  //         {
  //           isLinkAction: true,
  //           type: "link",
  //           text: "About",
  //           subText:
  //             "Stupid corporate wet blankets. Like booze ever killed anyone.",
  //           path: { name: "about" },
  //           iconLeft: '<i class="fa fa-star fa-fw"></i>',
  //         },
  //       ],
  //     },
  //     {
  //       type: "link",
  //       text: "Menu Sample",
  //       arrowColor: "#659CC8",
  //       subMenuOptions: [
  //         {
  //           isLinkAction: true,
  //           type: "link",
  //           text: "About",
  //           subText:
  //             "Stupid corporate wet blankets. Like booze ever killed anyone.",
  //           path: { name: "about" },
  //           iconLeft: '<i class="fa fa-star fa-fw"></i>',
  //         },
  //         {
  //           type: "hr",
  //         },
  //         {
  //           type: "link",
  //           text: "Locations",
  //           subText: "You're a presentation tool!",
  //           path: { name: "locations" },
  //           arrowColor: "#659CC8",
  //         },
  //         {
  //           type: "hr",
  //         },
  //         {
  //           type: "link",
  //           text: "Blog",
  //           subText:
  //             "I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.",
  //           path: { name: "blog" },
  //         },
  //         {
  //           type: "link",
  //           text: "Accounting",
  //           path: { name: "accounting" },
  //         },
  //         {
  //           type: "hr",
  //         },
  //         {
  //           type: "link",
  //           text: "Reception",
  //           path: { name: "reception" },
  //           iconLeft:
  //             '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
  //         },
  //       ],
  //     },
  //   ],
  // };
  //console.log(JSON.stringify(navabarleft))
  let navabarright = {
    menuOptionsRight: [
      {
        type: "button",
        text: "Signup",
        path: { name: "signup" },
        class: "button-red",
      },
      {
        type: "button",
        text: "Login",
        path: { name: "login" },
        iconRight:
          '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>',
      },
    ],
  };

  let navbarsetting = {
    elementId: "main-navbar",
    isUsingVueRouter: false,
    mobileBreakpoint: 992,
    brandImagePath: "./home",
    brandImage: brandImage,
    brandImageAltText: "brand-image",
    collapseButtonOpenColor: "#661c23",
    collapseButtonCloseColor: "#661c23",
    showBrandImageInMobilePopup: true,
    ariaLabelMainNav: "Main Navigation",
    tooltipAnimationType: "shift-away",
  };

  Object.assign(navbarOptions, navbarsetting, navabarleft, navabarright);

  return navbarOptions;
}
