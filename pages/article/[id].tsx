import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

interface Props {}

const ArticleSlug: FunctionComponent = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  return <div></div>;
};

export default ArticleSlug;
