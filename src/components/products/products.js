import withoutThermalHeating8 from "../../assets/main_products/list/without_thermal_heating_8L.webp";
import withoutThermalHeating15 from "../../assets/main_products/list/without_thermal_heating_15L.webp";
import withoutThermalHeating20 from "../../assets/main_products/list/without_thermal_heating_20L.webp";
import withoutThermalHeating26 from "../../assets/main_products/list/without_thermal_heating_26L.webp";
import withController15 from "../../assets/main_products/list/with_controller_15L.webp";
import withController20 from "../../assets/main_products/list/with_controller_20L.webp";
import withController26 from "../../assets/main_products/list/with_controller_26L.webp";

import withoutThermalHeatingCenter8 from "../../assets/main_products/center/without_thermal_heating_center_8L.webp";
import withoutThermalHeatingCenter15 from "../../assets/main_products/center/without_thermal_heating_center_15L.webp";
import withoutThermalHeatingCenter20 from "../../assets/main_products/center/without_thermal_heating_center_20L.webp";
import withoutThermalHeatingCenter26 from "../../assets/main_products/center/without_thermal_heating_center_26L.webp";
import withControllerCenter15 from "../../assets/main_products/center/with_controller_center_15L.webp";
import withControllerCenter20 from "../../assets/main_products/center/with_controller_center_20L.webp";
import withControllerCenter26 from "../../assets/main_products/center/with_controller_center_26L.webp";

import giftImage from "../../assets/gift_products/gift.webp";

import clampsForLids from "../../assets/extra_products/list/clamps_for_lids.webp";
import vacuumLids from "../../assets/extra_products/list/vacuum_lids.webp";
import coloredLids from "../../assets/extra_products/list/colored_lids.webp";
import lidsWithSko from "../../assets/extra_products/list/lids_sko.webp";
import retortBags from "../../assets/extra_products/list/retort_bags.webp";
import gasketForAutoclave from "../../assets/extra_products/list/gasket_for_autoclave.webp";

import clampsForLidsCenter from "../../assets/extra_products/center/clamps_for_lids_center.webp";
import vacuumLidsCenter from "../../assets/extra_products/center/vacuum_lids_center.webp";
import coloredLidsCenter from "../../assets/extra_products/center/colored_lids_center.webp";
import lidsWithSkoCenter from "../../assets/extra_products/center/lids_sko_center.webp";
import retortBagsCenter from "../../assets/extra_products/center/retort_bags_center.webp";
import gasketForAutoclavCenter from "../../assets/extra_products/center/gasket_for_autoclav_center.webp";

export const mainProducts = [
  {
    id: 1,
    images: {
      imgWithouThermalHeating: withoutThermalHeating8,
      imgWithController: withoutThermalHeating8,
      imgWithControllerCenter: withoutThermalHeatingCenter8,
      imgWithoutThermalHeatingCenter: withoutThermalHeatingCenter8,
    },
    description: 'Автоклав "Крестьянка", 8 литров',
    discount: 20,
    price: 12000,
  },
  {
    id: 2,
    images: {
      imgWithouThermalHeating: withoutThermalHeating15,
      imgWithController: withController15,
      imgWithControllerCenter: withControllerCenter15,
      imgWithoutThermalHeatingCenter: withoutThermalHeatingCenter15,
    },
    description: 'Автоклав "Крестьянка", 15 литров',
    discount: 15,
    price: 15000,
  },
  {
    id: 3,
    images: {
      imgWithouThermalHeating: withoutThermalHeating20,
      imgWithController: withController20,
      imgWithControllerCenter: withControllerCenter20,
      imgWithoutThermalHeatingCenter: withoutThermalHeatingCenter20,
    },
    description: 'Автоклав "Крестьянка", 20 литров',
    discount: 10,
    price: 18000,
  },
  {
    id: 4,
    images: {
      imgWithouThermalHeating: withoutThermalHeating26,
      imgWithController: withController26,
      imgWithControllerCenter: withControllerCenter26,
      imgWithoutThermalHeatingCenter: withoutThermalHeatingCenter26,
    },
    description: 'Автоклав "Крестьянка", 26 литров',
    discount: 25,
    price: 22000,
  },
];

export const extraProducts = [
  {
    id: 1,
    images: {
      img: clampsForLids,
      imgCenter: clampsForLidsCenter,
    },
    description: "Зажимы для крышек СКО, 7шт.",
    discount: 20,
    price: 1200,
  },
  {
    id: 2,
    images: {
      img: vacuumLids,
      imgCenter: vacuumLidsCenter,
    },
    description: "Крышки вакуумные с насосом, 9шт.",
    discount: 15,
    price: 1500,
  },
  {
    id: 3,
    images: {
      img: coloredLids,
      imgCenter: coloredLidsCenter,
    },
    description: "Крышки винтовые (Крышки твист-офф), 10 шт.",
    discount: 10,
    price: 1800,
  },
  {
    id: 4,
    images: {
      img: lidsWithSko,
      imgCenter: lidsWithSkoCenter,
    },
    description: "Крышки СКО, 50шт.",
    discount: 20,
    price: 2200,
  },
  {
    id: 5,
    images: {
      img: retortBags,
      imgCenter: retortBagsCenter,
    },
    description: "Набор реторт-пакетов, 10шт.",
    discount: 10,
    price: 1800,
  },
  {
    id: 6,
    images: {
      img: gasketForAutoclave,
      imgCenter: gasketForAutoclavCenter,
    },
    description: "Прокладка для автоклава силикон",
    discount: 20,
    price: 2200,
  },
];

export const giftProducts = [
  {
    id: 1,
    images: {
      img: giftImage,
    },
    description: "6 подарков",
    discount: 100,
    price: 12000,
  },
];
