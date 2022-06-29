//Academics sub items show
const showSubMenu1 = () => {
  const upArrow1 = document.querySelector('#upArrow1');
  const downArrow1 = document.querySelector('#downArrow1');
  const icon1Active = document.querySelector('#icon1Active');
  const icon1Inactive = document.querySelector('#icon1Inactive');
  const item1Title = document.querySelector('#item1Title');
  const subItems1 = document.querySelector('#subItems1');
  const item1 = document.querySelector('#item1');

  downArrow1.classList.remove('active');
  upArrow1.classList.add('active');
  icon1Inactive.classList.remove('active');
  icon1Active.classList.add('active');
  item1Title.classList.add('active');
  subItems1.classList.add('active');
  item1.classList.add('active');
};
//Academics sub items show
const hideSubMenu1 = () => {
  const upArrow1 = document.querySelector('#upArrow1');
  const downArrow1 = document.querySelector('#downArrow1');
  const icon1Active = document.querySelector('#icon1Active');
  const icon1Inactive = document.querySelector('#icon1Inactive');
  const item1Title = document.querySelector('#item1Title');
  const subItems1 = document.querySelector('#subItems1');
  const item1 = document.querySelector('#item1');

  downArrow1.classList.add('active');
  upArrow1.classList.remove('active');
  icon1Inactive.classList.add('active');
  icon1Active.classList.remove('active');
  item1Title.classList.remove('active');
  subItems1.classList.remove('active');
  item1.classList.remove('active');
};

// -------------------------------------------------------------------------------------------------------------------------------

//Location #1 sub items show
const showSubMenu2 = () => {
  const upArrow2 = document.querySelector('#upArrow2');
  const downArrow2 = document.querySelector('#downArrow2');
  const icon2Active = document.querySelector('#icon2Active');
  const icon2Inactive = document.querySelector('#icon2Inactive');
  const item2Title = document.querySelector('#item2Title');
  const subItems2 = document.querySelector('#subItems2');
  const item2 = document.querySelector('#item2');

  downArrow2.classList.remove('active');
  upArrow2.classList.add('active');
  icon2Inactive.classList.remove('active');
  icon2Active.classList.add('active');
  item2Title.classList.add('active');
  subItems2.classList.add('active');
  item2.classList.add('active');
};
//Location #1 sub items hide
const hideSubMenu2 = () => {
  const upArrow2 = document.querySelector('#upArrow2');
  const downArrow2 = document.querySelector('#downArrow2');
  const icon2Active = document.querySelector('#icon2Active');
  const icon2Inactive = document.querySelector('#icon2Inactive');
  const item2Title = document.querySelector('#item2Title');
  const subItems2 = document.querySelector('#subItems2');
  const item2 = document.querySelector('#item2');

  downArrow2.classList.add('active');
  upArrow2.classList.remove('active');
  icon2Inactive.classList.add('active');
  icon2Active.classList.remove('active');
  item2Title.classList.remove('active');
  subItems2.classList.remove('active');
  item2.classList.remove('active');
};

// -------------------------------------------------------------------------------------------------------------------------------

//Role Management sub items show
const showSubMenu3 = () => {
  const upArrow3 = document.querySelector('#upArrow3');
  const downArrow3 = document.querySelector('#downArrow3');
  const icon3Active = document.querySelector('#icon3Active');
  const icon3Inactive = document.querySelector('#icon3Inactive');
  const item3Title = document.querySelector('#item3Title');
  const subItems3 = document.querySelector('#subItems3');
  const item3 = document.querySelector('#item3');

  downArrow3.classList.remove('active');
  upArrow3.classList.add('active');
  icon3Inactive.classList.remove('active');
  icon3Active.classList.add('active');
  item3Title.classList.add('active');
  subItems3.classList.add('active');
  item3.classList.add('active');
};
//Role Management sub items hide
const hideSubMenu3 = () => {
  const upArrow3 = document.querySelector('#upArrow3');
  const downArrow3 = document.querySelector('#downArrow3');
  const icon3Active = document.querySelector('#icon3Active');
  const icon3Inactive = document.querySelector('#icon3Inactive');
  const item3Title = document.querySelector('#item3Title');
  const subItems3 = document.querySelector('#subItems3');
  const item3 = document.querySelector('#item3');

  downArrow3.classList.add('active');
  upArrow3.classList.remove('active');
  icon3Inactive.classList.add('active');
  icon3Active.classList.remove('active');
  item3Title.classList.remove('active');
  subItems3.classList.remove('active');
  item3.classList.remove('active');
};

// -------------------------------------------------------------------------------------------------------------------------------

//Location #2 sub items show
const showSubMenu4 = () => {
  const upArrow4 = document.querySelector('#upArrow4');
  const downArrow4 = document.querySelector('#downArrow4');
  const icon4Active = document.querySelector('#icon4Active');
  const icon4Inactive = document.querySelector('#icon4Inactive');
  const item4Title = document.querySelector('#item4Title');
  const subItems4 = document.querySelector('#subItems4');
  const item4 = document.querySelector('#item4');

  downArrow4.classList.remove('active');
  upArrow4.classList.add('active');
  icon4Inactive.classList.remove('active');
  icon4Active.classList.add('active');
  item4Title.classList.add('active');
  subItems4.classList.add('active');
  item4.classList.add('active');
};
//Location #2 sub items hide
const hideSubMenu4 = () => {
  const upArrow4 = document.querySelector('#upArrow4');
  const downArrow4 = document.querySelector('#downArrow4');
  const icon4Active = document.querySelector('#icon4Active');
  const icon4Inactive = document.querySelector('#icon4Inactive');
  const item4Title = document.querySelector('#item4Title');
  const subItems4 = document.querySelector('#subItems4');
  const item4 = document.querySelector('#item4');

  downArrow4.classList.add('active');
  upArrow4.classList.remove('active');
  icon4Inactive.classList.add('active');
  icon4Active.classList.remove('active');
  item4Title.classList.remove('active');
  subItems4.classList.remove('active');
  item4.classList.remove('active');
};

// -------------------------------------------------------------------------------------------------------------------------------

const showModal = () => {
  const modal = document.querySelector('#modal');
  const dim = document.querySelector('#dim');

  modal.classList.add('active');
  dim.classList.add('active');
};

const hideModal = () => {
  const modal = document.querySelector('#modal');
  const dim = document.querySelector('#dim');

  modal.classList.remove('active');
  dim.classList.remove('active');
};
