type ItemType = {
    name: string;
    iconSource: 'FontAwesome' | "MaterialIcons";
    iconName: string;
};

const itemTypes: ItemType[] = [
  {
    name: "buy",
    iconName: 'shopping-bag',
    iconSource: 'FontAwesome'
  },
  {
    name: "book",
    iconName: 'event',
    iconSource: 'MaterialIcons'
  },
  {
    name: "plan",
    iconName: "tasks",
    iconSource: 'MaterialIcons'
  },
  {
    name: "meet",
    iconName: 'people',
    iconSource: 'MaterialIcons',
  },
  {
    name: "prepare",
    iconName: 'flag',
    iconSource: 'FontAwesome',
  },
  {
    name: "call",
    iconName: 'call',
    iconSource: 'MaterialIcons',
  },
  {
    name: "attend",
    iconName: 'local-activity',
    iconSource: 'MaterialIcons',
  },
  {
    name: "review",
    iconName: "check-circle",
    iconSource: 'FontAwesome',
  },
  {
    name: "custom",
    iconName: 'asterisk',
    iconSource: 'FontAwesome',
  },
];

export default itemTypes;
