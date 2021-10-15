const getPost = ({ response }: { response: any }) => {
  response.body = {
    message: "First Post",
  };
};

export {getPost};