import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { FunctionComponent } from "react";

interface Props {}

const UserSlug: FunctionComponent = (props: Props) => {
  const router = useRouter();
  const { id }: ParsedUrlQuery = router.query;
  return <div></div>;
};

export default UserSlug;
