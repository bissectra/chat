const getMyUser = (setMyUser) => {
    const { _id, username } = JSON.parse(localStorage.getItem("user"))
    setMyUser({ _id, username })
};

export default getMyUser