import { useContext } from "react";
import { UserContext } from "providers/user";

const useCurrentUser = () => {
  const userContext = useContext(UserContext);

  if (! userContext) {
    throw new Error('Accessing `UserContext` outside provider!');
  }

  return userContext;
};

export default useCurrentUser;
