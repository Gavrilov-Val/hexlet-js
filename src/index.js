import _ from "lodash";
const hello = () => {
    console.log("Hello, World!");
};

const last = () => {
    console.log(_.last(["one", "two"]));
};

export { hello, last };