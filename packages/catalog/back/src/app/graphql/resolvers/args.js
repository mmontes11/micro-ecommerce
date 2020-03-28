import { UserInputError } from "apollo-server";
import { isDefined } from "common/data";
import { skip } from "graphql-resolvers";

const getMandatoryArgsResolver = (argNames) => (parent, args) => {
  const hasArgs = argNames.some((p) => isDefined(args[p]));
  if (!hasArgs) {
    throw new UserInputError(`At least one of the following args should be specified: ${argNames.join(", ")}`);
  }
  return skip;
};

export default getMandatoryArgsResolver;
