/* eslint-disable no-restricted-globals */
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

import { authApi } from "@/apis/auth";
import { onError, onSuccess } from "@/configs/tanStackConfig";
import { setCookiesUser } from "@/utils/auth";

interface IProps {
  code: string;
}

export default function SignInWithGithubContainer(props: IProps) {
  const { code } = props;

  const mutation = useMutation({
    mutationFn: async (code: string) => await authApi.signInWithGithub(code),
    onSuccess(data) {
      setCookiesUser(data.data);
      onSuccess(data);
      const newWindow = open(location?.pathname, "_self");
      // clearInterval(timer);
      newWindow?.close();
    },
    onError,
  });

  useEffect(() => {
    mutation.mutateAsync(code);
  }, []);
  return <div>Redirect...</div>;
}
