export default [
  {
    path: "logisticTransport",
    name: "logisticTransport",
    meta: {
      title: "物流运输服务"
    },
    component: resolve =>
      require(["@/views/logisticTransport/index.vue"], resolve)
  },
  {
    path: "publicInformation",
    name: "publicInformation",
    meta: {
      title: "公共信息服务"
    },
    component: resolve =>
      require(["@/views/publicInformation/index.vue"], resolve)
  },
  {
    path: "logisticsBusiness",
    name: "logisticsBusiness",
    meta: {
      title: "物流商务服务"
    },
    component: resolve =>
      require(["@/views/logisticsBusiness/index.vue"], resolve)
  },
  {
    path: "e-government",
    name: "e-government",
    meta: {
      title: "电子政务"
    },
    component: resolve =>
      require(["@/views/e-government/index.vue"], resolve)
  }
];
