//Import Images
import nature1 from "./img/nature1.jpeg";
import nature2 from "./img/nature2.jpeg";

import car1 from './img/car1.jpg';
import car2 from './img/car2.jpeg';

import sevan1 from './img/sevan1.jpg';
import sevan2 from './img/sevan2.jpg';


export const MovieState = () => {
  return [
    {
      title: "Բնություն",
      mainImg: nature1,
      secondaryImg: nature2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Գլուխ գործոց",
          description:
            "Մեր մասնագետները հասել են հիասքանչ արդյունքի, որը կարող եք տեսնել ինքներդ",
        },
        {
          title: "Լույսի խաղ և ճիշտ անկյուն",
          description:
            "Նկարը հաղորդում է տեսարանի ամբողջ նրբագեղությունը և գեղեցկությունը",
        }
      ],
    },
    {
      title: "Ավտոմեքենաներ",
      mainImg: car1,
      secondaryImg: car2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Պահի ճիշտ ընտրություն",
          description:
            "Պահը փոխանցում է սպորտային մեքենայի ամբողջ արագությունը և գեղեցկությունը",
        },
        {
          title: "Ռեալիստիկություն",
          description:
            "Կարծես առաջդ ոչ թե նկար լինի, այլ ավտոմեքենա",
        }
      ],
    },
    {
      title: "Սևանալիճ",
      mainImg: sevan1,
      secondaryImg: sevan2,
      url: "/work/good-times",
      awards: [
        {
          title: "Գեղեցկություն",
          description:
            "Եկեղեցիների և Սևանի ներդաշնակությունը փոխանցում է տեսարանի ամբողջ գեղեցկությունը",
        },
        {
          title: "Բարձր որակ",
          description:
            "Նկարները միանգամայն պարզ են և որակյալ",
        }
      ],
    },
  ];
};
