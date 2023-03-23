import { type GetServerSideProps, type GetServerSidePropsContext } from "next";

import ResetPasswordContainer from "@/containers/ResetPassword";

function ResetPassword() {
  return <ResetPasswordContainer />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  if (!query.token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default ResetPassword;
