const steps = [
  {
    name: 'counselingType',
    title: 'What type of counseling are you looking for?',
    type: 'select',
    options: ['Individual counseling', 'Teen counseling (for my child)'],
    required: true,
    isMultiple: false,
  },
  {
    name: 'userRelationshipStatus',
    title: 'What is your relationship status?',
    type: 'select',
    options: ['Single', 'Married', 'Divorced'],
    isMultiple: false,
    required: true,
  },
  {
    name: 'haveWentBefore',
    title: 'Have you ever been in therapy before?',
    type: 'select',
    options: ['Yes', 'No'],
    required: true,
    isMultiple: false,
  },
  {
    name: 'counselorProperties',
    title: "Are there any specific qualities that you'd like in a counselor?",
    type: 'select',
    options: [
      'I prefer a male counselor',
      'I prefer a female counselor',

      'I prefer a non-religious counselor',
      'I prefer an older counselor (45+)',
    ],
    required: true,
    isMultiple: true,
  },
  {
    name: 'mainIssues',
    title: "Are there any issues you'd like to focus on?",
    type: 'select',
    options: [
      'Depression',
      'Stress and Anxiety',
      'Relationship issues',
      'Family conflicts',
      'Trauma and abuse',
      'Eating disorders',
    ],
    required: true,
  },
  { name: 'notes', title: '', type: 'text' },
];

export { steps };
