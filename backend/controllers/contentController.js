const getContent = (req, res) => {
    res.json({
      title: 'Cancer Treatment',
      introduction: 'Cancer treatment varies depending on the type and stage of cancer. Here are some common treatments:',
      symptoms: 'Common symptoms of cancer include lumps, unexplained weight loss, fatigue, and changes in skin appearance.',
      treatments: [
        {
          name: 'Surgery',
          description: 'A procedure where doctors remove cancer from your body.',
        },
        {
          name: 'Radiation Therapy',
          description: 'Uses high doses of radiation to kill cancer cells and shrink tumors.',
        },
        {
          name: 'Chemotherapy',
          description: 'Uses drugs to kill cancer cells.',
        },
      ],
      testimonials: [
        {
          name: 'John Doe',
          message: 'Thanks to the great treatment I received, I am now cancer-free!',
        },
        {
          name: 'Jane Smith',
          message: 'The doctors and nurses were so supportive during my treatment.',
        },
      ],
      resources: [
        {
          name: 'American Cancer Society',
          link: 'https://www.cancer.org/',
        },
        {
          name: 'Cancer Research UK',
          link: 'https://www.cancerresearchuk.org/',
        },
      ],
    });
  };
  
  module.exports = { getContent };
  