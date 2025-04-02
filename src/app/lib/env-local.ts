export const getServerSideProps = () => {
    console.log("getServerSideProps - 1: ", process.env.USER_CODE);
    return {
        props: {
            env: "dev",
            userCode: process.env.USER_CODE,
        },
    }
};