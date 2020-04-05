const response = {
  todos: [
    {
      content: "hogehoge"
    },
    {
      content: "hogepoyo"
    },
    {
      content: "hogepiyo"
    },
  ],
};

export default {
  get({ data }) {
    return [200, response];
  },
};
