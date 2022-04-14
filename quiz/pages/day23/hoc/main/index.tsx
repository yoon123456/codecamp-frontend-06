import { useQuery, gql } from "@apollo/client";
import { withAuth } from "../../../../src/components/commons/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>;
}

export default withAuth(LoginSuccessPage);
