export const MOCK_COLUMNS_DATA = [
  {
    heading: 'Todo',
    items: [
      {
        body: 'Make flashItem app',
        heading: 'FlashItems',
        subtasks: {
          hasItems: true,
          items: ['Add CSS', 'Add JS']
        }
      },
      {
        body: 'Make todo app',
        heading: 'Todo',
        subtasks: {
          hasItems: false,
          items: []
        }
      }
    ]
  },
  {
    heading: 'In Progress',
    items: []
  },
  {
    heading: 'Done',
    items: [
      {
        body: 'Create DS & Algo flashItems',
        heading: 'Interviewing',
        subtasks: {
          hasItems: false,
          items: []
        }
      }
    ]
  }
];