window.CELECTRIC_CATALOG = {
  searchSuggestions: [
    {
      id: "product-a-parent",
      label: "Product A Spectral Sensor",
      subtitle: "Model CEA-410 | Process Instrumentation",
      type: "Product",
      terms: ["product a", "cea-410", "spectral sensor", "process instrumentation"],
      url: "product-cea-410.html"
    },
    {
      id: "product-a-10nm",
      label: "Product A (10nm option)",
      subtitle: "Variant keyword: product-a-10nm",
      type: "Variant",
      terms: ["product-a-10nm", "product a 10nm", "10nm product a", "10nm"],
      url: "product-cea-410.html?variant=10nm"
    },
    {
      id: "product-a-20nm",
      label: "Product A (20nm option)",
      subtitle: "Variant keyword: product-a-20nm",
      type: "Variant",
      terms: ["product-a-20nm", "product a 20nm", "20nm product a", "20nm"],
      url: "product-cea-410.html?variant=20nm"
    },
    {
      id: "product-a-30nm",
      label: "Product A (30nm option)",
      subtitle: "Variant keyword: product-a-30nm",
      type: "Variant",
      terms: ["product-a-30nm", "product a 30nm", "30nm product a", "30nm"],
      url: "product-cea-410.html?variant=30nm"
    },
    {
      id: "abb-brand",
      label: "ABB",
      subtitle: "Brand catalog and support",
      type: "Brand",
      terms: ["abb", "ability", "266", "ac500"],
      url: "brand-abb.html"
    },
    {
      id: "siemens-brand",
      label: "Siemens",
      subtitle: "Automation and drives",
      type: "Brand",
      terms: ["siemens", "sitop", "sitrans"],
      url: "brand-abb.html"
    },
    {
      id: "category-process",
      label: "Process Instrumentation",
      subtitle: "Transmitters, analyzers, flow and level",
      type: "Category",
      terms: ["process", "instrumentation", "pressure", "transmitter"],
      url: "index.html#categories"
    },
    {
      id: "category-power",
      label: "Power Distribution",
      subtitle: "Switchgear, protection, and breakers",
      type: "Category",
      terms: ["power", "distribution", "switchgear", "breaker"],
      url: "index.html#categories"
    },
    {
      id: "resource-datasheets",
      label: "Datasheet Downloads",
      subtitle: "PDF documents by product and variant",
      type: "Resource",
      terms: ["datasheet", "documents", "downloads", "manual"],
      url: "product-cea-410.html#documents"
    }
  ],
  product: {
    id: "cea-410",
    name: "Product A Spectral Sensor",
    brand: "ABB",
    model: "CEA-410",
    summarySpecs: {
      "Measurement Principle": "Optical spectral filtering",
      "Ingress Rating": "IP67",
      "Output": "4-20 mA / HART",
      "Operating Temperature": "-20 C to 70 C"
    },
    baseDocuments: [
      {
        id: "datasheet-parent",
        title: "Datasheet - Product A Spectral Sensor",
        type: "Datasheet",
        file: "PDF",
        size: "1.8 MB"
      },
      {
        id: "install-guide",
        title: "Installation Guide - CEA-410",
        type: "User Manual",
        file: "PDF",
        size: "2.4 MB"
      },
      {
        id: "compliance-cert",
        title: "CE and RoHS Compliance Certificate",
        type: "Certificate",
        file: "PDF",
        size: "0.6 MB"
      }
    ],
    variants: {
      "10nm": {
        code: "CEA-410-10",
        subtitle: "10nm filter width for high-resolution process sensing",
        specs: {
          "Filter Width": "10nm",
          "Response Time": "180 ms",
          "Accuracy": "+/-0.1% full scale",
          "Best Use": "Fine process control and laboratory lines"
        },
        documents: [
          {
            id: "drawing-10nm",
            title: "Technical Drawing - CEA-410-10",
            type: "Technical Drawing",
            file: "PDF",
            size: "0.9 MB"
          },
          {
            id: "cert-10nm",
            title: "Calibration Certificate - 10nm Assembly",
            type: "Certificate",
            file: "PDF",
            size: "0.5 MB"
          }
        ]
      },
      "20nm": {
        code: "CEA-410-20",
        subtitle: "20nm balanced option for general manufacturing lines",
        specs: {
          "Filter Width": "20nm",
          "Response Time": "140 ms",
          "Accuracy": "+/-0.2% full scale",
          "Best Use": "General industrial process monitoring"
        },
        documents: [
          {
            id: "drawing-20nm",
            title: "Technical Drawing - CEA-410-20",
            type: "Technical Drawing",
            file: "PDF",
            size: "0.9 MB"
          },
          {
            id: "curve-20nm",
            title: "Performance Curve - 20nm Option",
            type: "Brochure",
            file: "PDF",
            size: "0.7 MB"
          }
        ]
      },
      "30nm": {
        code: "CEA-410-30",
        subtitle: "30nm robust option for wider-spectrum operating conditions",
        specs: {
          "Filter Width": "30nm",
          "Response Time": "120 ms",
          "Accuracy": "+/-0.25% full scale",
          "Best Use": "Harsh environments and field retrofit projects"
        },
        documents: [
          {
            id: "drawing-30nm",
            title: "Technical Drawing - CEA-410-30",
            type: "Technical Drawing",
            file: "PDF",
            size: "1.0 MB"
          },
          {
            id: "traceability-30nm",
            title: "Material Traceability Report - 30nm Option",
            type: "Certificate",
            file: "PDF",
            size: "0.8 MB"
          }
        ]
      }
    }
  }
};
