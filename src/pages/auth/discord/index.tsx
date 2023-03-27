/* eslint-disable no-restricted-globals */
import { useMutation } from "@tanstack/react-query";
import { type GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { authApi } from "@/apis/auth";
import { onError } from "@/configs/tanStackConfig";
import { PRIVATE_ROUTE } from "@/router";
import { setCookiesUser } from "@/utils/auth";

interface IProps {
  code: string;
}

export default function AuthDiscord() {
  const route = useRouter();
  const { code } = route.query;
  const submit = useMutation({
    mutationFn: async (data: IProps) =>
      await authApi.signInWithDiscord(data.code),
    onSuccess(data, variables, context) {
      setCookiesUser(data.data);
      const newWindow = open(location?.pathname, "_self");
      newWindow?.close();
    },
    onError,
  });
  useEffect(() => {
    if (!code) return;
    submit.mutateAsync({ code: code as string });
  }, [code]);
  return (
    <div>
      <h1>Authen Discord</h1>
      <h2>Wait for ...</h2>
    </div>
  );
}

export async function getSeverSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
