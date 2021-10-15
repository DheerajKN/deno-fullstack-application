const getStarterMessage = ({ response }: { response: any }) => {
  response.body = {
    message: "Backend Running",
  }
};

export {getStarterMessage};