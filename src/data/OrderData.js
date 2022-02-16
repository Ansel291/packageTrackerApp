const OrderData = [
  {
    id: 1,
    orderStatus: 'orderReceived',
    orderNumber: 'LG-1',
    orderHasNotes: true,
    orderNote: 'Back Ordered',
    orderBackordered: true,
  },
  {
    id: 2,
    orderStatus: 'labelCreated',
    orderNumber: 'LG-2',
    orderHasNotes: false,
    orderNote: '',
    orderBackordered: false,
  },
  {
    id: 3,
    orderStatus: 'orderInTransit',
    orderNumber: 'LG-3',
    orderHasNotes: true,
    orderNote: 'Request to leave package on porch',
    orderBackordered: false,
  },
  {
    id: 4,
    orderStatus: 'orderDelivered',
    orderNumber: 'LG-4',
    orderHasNotes: false,
    orderNote: '',
    orderBackordered: false,
  },
]

export default OrderData
