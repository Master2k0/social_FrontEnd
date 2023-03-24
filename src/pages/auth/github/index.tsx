import { type GetServerSidePropsContext } from "next";

import SignInWithGithubContainer from "@/containers/Auth/Github";

interface IProps {
  code: string;
}

export default function SignInWithGitHub({ code }: IProps) {
  return <SignInWithGithubContainer code={code} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { code } = context.query;
  return {
    props: {
      code,
    },
  };
}
