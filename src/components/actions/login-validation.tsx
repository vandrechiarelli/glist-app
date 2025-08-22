"use server";

import { getServerSideProps } from "@/app/lib/env-local";

export default async function loginValidation(prevState: any, code: string) {
  if (code === getServerSideProps().props.userCode) {

    // TODO: Implement Redux - example
    // https://github.com/copilot/c/8ad30869-e113-415c-aa4d-2e00303e42a2



    // TODO: if this is a router it should be in the app folder


    return true;
  }
  return false;
}
