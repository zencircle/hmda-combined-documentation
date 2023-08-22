/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ffiecDocs: [
    // FAQ
    {
      type: "category",
      label: "Frequently Asked Questions",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "faq/data-collection-timelines",
        "faq/identifiers-faq",
        "faq/downloading-datasets",
        "faq/filing-faq",
        "faq/data-browser-graphs-faq",
        "faq/data-browser-maps-faq",
        "faq/static-dataset-faq",
      ],
    },
    // Publications
    {
      type: "category",
      label: "Publications",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "General",
          items: [
            "publications/general/arid2017-to-lei-schema",
            "publications/general/derived-data-fields",
          ],
        },
        {
          type: "doc",
          id: "publications/ad-changes",
        },
        {
          type: "category",
          label: "Loan Level Datasets",
          items: [
            "publications/loan-level-datasets/lar-data-fields",
            "publications/loan-level-datasets/ts-data-fields",
            "publications/loan-level-datasets/public-ts-schema",
            "publications/loan-level-datasets/public-panel-schema",
            "publications/loan-level-datasets/panel-data-fields",
            "publications/loan-level-datasets/public-lar-schema",
            "publications/loan-level-datasets/lar-data-fields-v1",
            "publications/loan-level-datasets/ts-data-fields-v1",
            "publications/loan-level-datasets/panel-data-fields-v1",
          ],
        },
        {
          type: "category",
          label: "Modified LAR",
          items: [
            "publications/modified-lar/modified-lar-schema",
            {
              type: "category",
              label: "Resources",
              items: [
                "publications/modified-lar/resources/supporting-resources",
                "publications/modified-lar/resources/mlar-with-excel",
                "publications/modified-lar/resources/mlar-fs-2017",
                "publications/modified-lar/resources/using-mlar-data",
                {
                  type: "category",
                  label: "Data Dictionaries",
                  items: [
                    "publications/modified-lar/resources/data-dictionaries/mlar-dd-2021",
                    "publications/modified-lar/resources/data-dictionaries/mlar-dd-2020",
                    "publications/modified-lar/resources/data-dictionaries/mlar-dd-2019",
                    "publications/modified-lar/resources/data-dictionaries/mlar-dd-2018",
                    "publications/modified-lar/resources/data-dictionaries/mlar-dd-2017",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Tools
    {
      type: "category",
      label: "Tools",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Data Browser",
          items: [
            "tools/data-browser/data-browser-faq",
            "tools/data-browser/data-browser-filters",
            "tools/data-browser/data-browser-maps-faq",
            "tools/data-browser/derived-data-fields",
            "tools/data-browser/lar-data-fields",
          ],
        },
        "tools/rate-spread",
        "tools/check-digit",
        "tools/file-format-verification/file-format-verification",
        "tools/lar-formatting/lar-formatting",
        "tools/online-lar-formatting/online-lar-formatting",
      ],
    },
    // Developer APIs
    {
      type: "category",
      label: "Developer APIs",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "api/filing/platform",
        "api/filing/beta-platform",
        "api/public-verification/index",
        "api/file-serving/index",
        "api/data-browser/index",
        "api/rate-spread/index",
        "api/check-digit/index",
        "api/graphs/index",
        "api/style-guide/index",
      ],
    },
  ],
}

module.exports = sidebars
